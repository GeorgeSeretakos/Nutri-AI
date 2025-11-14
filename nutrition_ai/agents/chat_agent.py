# nutrition_ai/agents/chat_agent.py

import json
from typing import Optional, List

from langchain.llms.base import LLM
from langchain.agents import Tool, initialize_agent, AgentType

from nutrition_ai.llm.watsonx_client import WatsonxClient
from nutrition_ai.agents.diet_agent import DietAgent
from nutrition_ai.agents.weekly_rotation_agent import WeeklyRotationAgent
from nutrition_ai.agents.shopping_list_agent import ShoppingListAgent
from nutrition_ai.models.user_profile import UserProfile
from nutrition_ai.models.diet_plan import DietPlan
from nutrition_ai.models.weekly_plan import WeeklyPlan


# -------------------------------------------------------
# 1) LangChain wrapper γύρω από τον WatsonxClient
# -------------------------------------------------------
class WatsonxLLM(LLM):
    """Adapter ώστε ο WatsonxClient να λειτουργεί σαν LangChain LLM."""

    def __init__(self, client: Optional[WatsonxClient] = None):
        super().__init__()
        self.client = client or WatsonxClient()

    @property
    def _llm_type(self) -> str:
        return "watsonx"

    @property
    def _identifying_params(self):
        return {}

    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        return self.client.generate(prompt)


# -------------------------------------------------------
# 2) Κύριος Chat Agent
# -------------------------------------------------------
class NutritionChatAgent:

    def __init__(
        self,
        profile: UserProfile,
        baseline_diet: Optional[DietPlan] = None,
        weekly_plan: Optional[WeeklyPlan] = None,
    ):
        self.profile = profile
        self.baseline_diet = baseline_diet
        self.weekly_plan = weekly_plan

        # Sub-agents
        self.diet_agent = DietAgent()
        self.weekly_agent = WeeklyRotationAgent()
        self.shopping_agent = ShoppingListAgent()

        self.llm = WatsonxLLM()
        self.tools = self._build_tools()

        self.agent = initialize_agent(
            tools=self.tools,
            llm=self.llm,
            agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
            verbose=True,
        )

    # ---------------------------------------------------
    # MAIN CHAT CALL
    # ---------------------------------------------------
    def chat(self, message: str) -> str:
        """
        - Αν η ερώτηση είναι γενική για διατροφή: απαντάει με βάση προφίλ + διατροφή.
        - Αν είναι εντολή (νέα δίαιτα, αλλαγή, weekly, shopping): καλεί tool.
        """
        context = self._build_context_prefix()

        full_input = (
            f"{context}\n\n"
            "Αν η ερώτηση είναι ΓΕΝΙΚΗ (π.χ. 'γιατί βάζεις βρώμη;'), "
            "απάντησε μόνο με κείμενο, χωρίς να χρησιμοποιήσεις εργαλεία.\n\n"
            "Αν η ερώτηση είναι ΕΝΤΟΛΗ ή ΖΗΤΗΣΗ ΑΛΛΑΓΗΣ, ΧΡΗΣΙΜΟΠΟΙΗΣΕ ΕΝΑ ΑΠΟ ΤΑ ΕΡΓΑΛΕΙΑ:\n"
            "- Νέα διατροφή: όταν ζητάει να ξαναφτιαχτεί από την αρχή η δίαιτα.\n"
            "- Update διατροφής: όταν ζητάει προσαρμογή της υπάρχουσας δίαιτας.\n"
            "- Weekly plan: όταν ζητάει εβδομαδιαίο πρόγραμμα.\n"
            "- Update weekly: όταν ζητάει αλλαγή σε μέρα/γεύμα του weekly.\n"
            "- Shopping list: όταν ζητάει λίστα αγορών.\n\n"
            f"ΕΡΩΤΗΣΗ ΔΙΑΤΡΟΦΟΛΟΓΟΥ ΓΙΑ ΤΟΝ ΣΥΓΚΕΚΡΙΜΕΝΟ ΠΕΛΑΤΗ:\n{message}\n\n"
            "Απάντα ΠΑΝΤΑ στα ελληνικά, κλινικά και πρακτικά."
        )

        response = self.agent.run(full_input)
        return response

    # ---------------------------------------------------
    # GET STATE ΓΙΑ DB
    # ---------------------------------------------------
    def get_state(self) -> dict:
        """
        Επιστρέφει την τρέχουσα κατάσταση ώστε να την σώσεις στη DB:
        - baseline_diet (ως dict ή None)
        - weekly_plan (ως dict ή None)
        """
        return {
            "baseline_diet": json.loads(self.baseline_diet.model_dump_json())
            if self.baseline_diet else None,
            "weekly_plan": json.loads(self.weekly_plan.model_dump_json())
            if self.weekly_plan else None,
        }

    # ---------------------------------------------------
    # Internal: context με profile + plans
    # ---------------------------------------------------
    def _build_context_prefix(self) -> str:
        profile_json = self.profile.model_dump_json(ensure_ascii=False, indent=2)
        diet_json = (
            self.baseline_diet.model_dump_json(ensure_ascii=False, indent=2)
            if self.baseline_diet else "Δεν υπάρχει baseline διατροφή."
        )
        weekly_json = (
            self.weekly_plan.model_dump_json(ensure_ascii=False, indent=2)
            if self.weekly_plan else "Δεν υπάρχει εβδομαδιαίο πρόγραμμα."
        )

        return f"""
Είσαι ένας εξειδικευμένος digital βοηθός διατροφολόγου.
Δουλεύεις ΑΠΟΚΛΕΙΣΤΙΚΑ για έναν συγκεκριμένο πελάτη.

====================
🧍‍♂️ PROFIL ΠΕΛΑΤΗ
====================
{profile_json}

====================
🥗 ΤΡΕΧΟΥΣΑ ΒΑΣΙΚΗ ΔΙΑΤΡΟΦΗ (Baseline)
====================
{diet_json}

====================
📅 ΤΡΕΧΟΝ ΕΒΔΟΜΑΔΙΑΙΟ ΠΛΑΝΟ
====================
{weekly_json}

ΚΑΝΟΝΕΣ:
- ΑΠΑΝΤΑΣ ΜΟΝΟ για αυτόν τον πελάτη.
- Αν η ερώτηση είναι άσχετη με αυτόν τον πελάτη, εξηγείς ότι το σύστημα δουλεύει μόνο per-client.
"""

    # ---------------------------------------------------
    # Internal: ορισμός tools
    # ---------------------------------------------------
    def _build_tools(self) -> List[Tool]:

        # 1) Generate new diet
        def tool_generate_diet(notes: str) -> str:
            """
            Χρησιμοποίησε αυτό το εργαλείο όταν ο διατροφολόγος ζητά:
            - 'φτιάξε νέα διατροφή', 'ξαναγράψε τη δίαιτα', 'νέα baseline'
            """
            plan = self.diet_agent.generate_diet(self.profile, expert_notes=notes)
            self.baseline_diet = plan
            return (
                "✅ Δημιουργήθηκε ΝΕΑ βασική διατροφή.\n\n"
                + plan.model_dump_json(indent=2, ensure_ascii=False)
            )

        # 2) Update diet
        def tool_update_diet(feedback: str) -> str:
            """
            Χρησιμοποίησε το όταν:
            - 'Μείωσε υδατάνθρακες', 'αύξησε πρωτεΐνη', 'βγάλε το ψάρι', κλπ.
            """
            if not self.baseline_diet:
                return "❌ Δεν υπάρχει baseline διατροφή για να γίνει update."

            updated = self.diet_agent.update_diet(existing=self.baseline_diet, feedback_text=feedback)
            self.baseline_diet = updated
            return (
                "✅ Η διατροφή ενημερώθηκε σύμφωνα με τις οδηγίες σου.\n\n"
                + updated.model_dump_json(indent=2, ensure_ascii=False)
            )

        # 3) Create weekly rotation plan
        def tool_create_weekly(_: str = "") -> str:
            """
            Χρησιμοποίησε το όταν ο διατροφολόγος ζητά:
            - 'φτιάξε εβδομαδιαίο πλάνο', 'weekly plan', 'μοίρασε τα γεύματα στη βδομάδα'
            """
            if not self.baseline_diet:
                return "❌ Δεν υπάρχει baseline διατροφή για να χτιστεί weekly plan."

            weekly = self.weekly_agent.create_weekly_plan(self.baseline_diet)
            self.weekly_plan = weekly
            return (
                "✅ Δημιουργήθηκε νέο εβδομαδιαίο πρόγραμμα.\n\n"
                + weekly.model_dump_json(indent=2, ensure_ascii=False)
            )

        # 4) Update weekly plan (χρησιμοποιεί DietAgent.update_weekly)
        def tool_update_weekly(feedback: str) -> str:
            """
            Χρησιμοποίησε το όταν ο διατροφολόγος ζητά:
            - 'άλλαξε το γεύμα της Τρίτης', 'βγάλε το μοσχάρι από Σάββατο', κλπ.
            """
            if not self.weekly_plan:
                return "❌ Δεν υπάρχει εβδομαδιαίο πρόγραμμα για να ενημερωθεί."
            if not self.baseline_diet:
                return "❌ Δεν υπάρχει baseline διατροφή για να ξέρουμε ποιες επιλογές είναι επιτρεπτές."

            weekly_json = self.weekly_plan.model_dump_json(ensure_ascii=False)
            diet_json = self.baseline_diet.model_dump_json(ensure_ascii=False)

            updated_dict = self.diet_agent.update_weekly(
                weekly_json=weekly_json,
                diet_json=diet_json,
                feedback_text=feedback
            )

            try:
                updated_plan = WeeklyPlan(**updated_dict)
                self.weekly_plan = updated_plan
                return (
                    "✅ Το εβδομαδιαίο πρόγραμμα ενημερώθηκε.\n\n"
                    + updated_plan.model_dump_json(indent=2, ensure_ascii=False)
                )
            except Exception as e:
                return f"⚠ Επιστράφηκε JSON weekly plan αλλά δεν ταίριαζε στο schema WeeklyPlan: {str(e)}"

        # 5) Shopping list
        def tool_shopping(_: str = "") -> str:
            """
            Χρησιμοποίησε το όταν ο διατροφολόγος ζητά:
            - 'φτιάξε λίστα αγορών', 'shopping list για αυτή τη βδομάδα', κλπ.
            """
            if not self.weekly_plan:
                return "❌ Δεν υπάρχει weekly plan για να γεννήσουμε shopping list."

            shopping = self.shopping_agent.build_list(self.weekly_plan.model_dump_json())
            return (
                "✅ Λίστα αγορών για την τρέχουσα εβδομάδα:\n\n"
                + json.dumps(shopping, indent=2, ensure_ascii=False)
            )

        return [
            Tool(
                name="generate_diet",
                func=tool_generate_diet,
                description=(
                    "Δημιούργησε ΝΕΑ βασική διατροφή για τον συγκεκριμένο πελάτη "
                    "με βάση το προφίλ και επιπλέον σημειώσεις."
                ),
            ),
            Tool(
                name="update_diet",
                func=tool_update_diet,
                description=(
                    "Ενημέρωσε την υπάρχουσα baseline διατροφή με βάση συγκεκριμένο feedback "
                    "(μείωσε υδατάνθρακες, βγάλε κάποιο γεύμα, κλπ.)."
                ),
            ),
            Tool(
                name="create_weekly",
                func=tool_create_weekly,
                description=(
                    "Δημιούργησε εβδομαδιαίο πλάνο (Monday–Sunday) χρησιμοποιώντας τα γεύματα "
                    "της baseline διατροφής."
                ),
            ),
            Tool(
                name="update_weekly",
                func=tool_update_weekly,
                description=(
                    "Κάνε αλλαγές στο υπάρχον weekly plan (π.χ. άλλαξε γεύμα συγκεκριμένης μέρας) "
                    "παραμένοντας μέσα στις επιλογές της διατροφής."
                ),
            ),
            Tool(
                name="create_shopping_list",
                func=tool_shopping,
                description=(
                    "Δημιούργησε λίστα αγορών (shopping list) για την τρέχουσα εβδομάδα "
                    "με βάση το weekly plan."
                ),
            ),
        ]
