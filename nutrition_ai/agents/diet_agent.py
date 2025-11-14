import json
from pathlib import Path
from typing import Optional, Dict, Any

from nutrition_ai.llm.watsonx_client import WatsonxClient
from nutrition_ai.models.user_profile import UserProfile
from nutrition_ai.models.diet_plan import DietPlan


class DietAgent:
    """Agent responsible for creating and updating diet plans via watsonx.ai."""

    def __init__(self, client: Optional[WatsonxClient] = None,
                 prompts_path: str = "nutrition_ai/app/prompts"):
        # LLM client
        self.client = client or WatsonxClient()
        # Directory where all prompt/template files live
        self.prompts_dir = Path(prompts_path)

    # --------------------------------------------------
    # PUBLIC API
    # --------------------------------------------------
    def generate_diet(self, profile: UserProfile, expert_notes: str = "") -> DietPlan:
        """Create a brand-new diet for a client profile."""
        template = self._load_text("generate_diet.txt")
        base_instructions = self._load_text("base_instructions.txt")
        few_shots = self._load_text("few_shots.json")
        json_template = self._load_text("json_template.txt")

        daily_calories, macro_targets = self._estimate_calories_and_macros(profile)
        latest_measurement = self._format_latest_measurement(profile)

        variables: Dict[str, Any] = {
            "base_instructions": base_instructions,
            "name": profile.name or "",
            "birth_date": profile.birth_date.isoformat() if getattr(profile, "birth_date", None) else "",
            "gender": profile.gender or "",
            "height_cm": profile.height_cm or "",
            "exercise_frequency": profile.exercise_frequency or "",
            "goal": profile.goal or "",
            "dietary_preferences": ", ".join(profile.dietary_preferences or [])
            if getattr(profile, "dietary_preferences", None) else "",
            "allergies": profile.allergies or "",
            "conditions": profile.conditions or "",
            "latest_measurement": latest_measurement,
            "daily_calories": daily_calories,
            "macro_targets": json.dumps(macro_targets, ensure_ascii=False),
            "few_shots": few_shots,
            "json_template": json_template,
        }

        prompt = self._render_template(template, variables)
        print(prompt)


        raw = self.client.generate(prompt)

        print("=== RAW LLM OUTPUT ===")
        print(raw)

        clean_json = self._extract_json(raw)
        data = json.loads(clean_json)

        return DietPlan(**data)

    def update_diet(self, existing: DietPlan, feedback_text: str) -> DietPlan:
        """
        Updates an existing diet using free-text feedback.
        After the first LLM attempt, we validate the JSON.
        If invalid → send JSON + validation error back to LLM for auto-fix.
        Up to 3 attempts.
        """

        # Load required prompt files
        template = self._load_text("edit_diet.txt")
        base_instructions = self._load_text("base_instructions.txt")
        json_template = self._load_text("json_template.txt")

        # Build variables for the main update prompt
        variables: Dict[str, Any] = {
            "base_instructions": base_instructions,
            "existing_diet": existing.model_dump_json(indent=2, ensure_ascii=False),
            "feedback_text": feedback_text,
            "json_template": json_template,
        }

        # Render the main prompt
        prompt = self._render_template(template, variables)
        print("=== PROMPT ===")
        print(prompt)

        # First LLM call
        raw = self.client.generate(prompt)
        print("=== RAW LLM OUTPUT ===")
        print(raw)

        # Extract body
        clean_json = self._extract_json(raw)

        # ------------------------------------------------------------
        # AUTO-FIX VALIDATION LOOP
        # ------------------------------------------------------------
        for attempt in range(3):
            try:
                # Try parsing JSON and validating via Pydantic
                data = json.loads(clean_json)
                return DietPlan(**data)

            except Exception as e:
                print(f"\n❌ JSON validation failed (attempt {attempt + 1})")
                print("Error:", str(e))

                # ------------------------------------------------------------
                # Build FIX prompt
                # ------------------------------------------------------------
                fix_prompt = f"""
    You must FIX the following JSON so that it becomes VALID  
    according to the strict JSON template.

    ========================
    INVALID JSON (must be fixed)
    ========================
    {clean_json}

    ========================
    VALIDATION ERROR
    ========================
    {str(e)}

    ========================
    JSON TEMPLATE (STRICT)
    ========================
    {json_template}

    RULES:
    - If you see somewhere inside the json a null options delete this field.
    - DO NOT change any values unless needed for correctness.
    - DO NOT add new keys.
    - DO NOT remove mandatory keys.
    - ONLY fix structure, brackets, lists, nulls, types.
    - Keep Greek section names EXACTLY as required.
    - Return ONLY valid JSON. No explanations.
    """

                print("\n=== FIX PROMPT (Sending to LLM) ===")
                print(fix_prompt)

                fixed_raw = self.client.generate(fix_prompt)
                print("\n=== FIXED RAW LLM OUTPUT ===")
                print(fixed_raw)

                clean_json = self._extract_json(fixed_raw)

        # If we reach here → all attempts failed
        raise ValueError("❌ LLM could not produce a valid JSON after 3 attempts.")

    # --------------------------------------------------
    # INTERNAL HELPERS
    # --------------------------------------------------
    def _load_text(self, filename: str) -> str:
        path = self.prompts_dir / filename
        return path.read_text(encoding="utf-8")

    def _render_template(self, template: str, variables: Dict[str, Any]) -> str:
        """Very simple {{var}} replacement (no jinja dependency)."""
        out = template
        for key, value in variables.items():
            placeholder = "{{" + key + "}}"
            out = out.replace(placeholder, str(value))
        return out

    def _estimate_calories_and_macros(self, profile: UserProfile):
        """Rough calorie/macros estimate – just to give the LLM a target.

        You can replace this later with a proper calculator. For now we keep it simple
        so that the whole pipeline works end-to-end.
        """
        # Very rough base depending on gender
        if (profile.gender or "").lower().startswith("άνδ"):
            base = 2400
        elif (profile.gender or "").lower().startswith("γυν"):
            base = 2000
        else:
            base = 2200

        # Tiny adjustment for height
        try:
            h = float(profile.height_cm or 0)
            if h > 185:
                base += 150
            elif h < 165:
                base -= 150
        except Exception:
            pass

        # Split macros (just guidance for the LLM)
        protein = round(base * 0.3 / 4)
        carbs = round(base * 0.45 / 4)
        fat = round(base * 0.25 / 9)

        return base, {
            "protein_g": protein,
            "carbs_g": carbs,
            "fat_g": fat,
        }

    def _format_latest_measurement(self, profile: UserProfile) -> str:
        """Turn last measurement (if any) into a compact Greek string."""
        history = getattr(profile, "history", None)
        if not history:
            return "Δεν υπάρχουν διαθέσιμες μετρήσεις."

        # history may be a single Measurement or list – normalize to list
        if not isinstance(history, (list, tuple)):
            items = [history]
        else:
            items = list(history)

        last = items[-1]
        parts = []
        if getattr(last, "date", None):
            parts.append(f"Ημερομηνία: {last.date}")
        if getattr(last, "weight_kg", None) is not None:
            parts.append(f"Βάρος: {last.weight_kg}kg")
        if getattr(last, "body_fat_percent", None) is not None:
            parts.append(f"Λίπος: {last.body_fat_percent}%")
        if getattr(last, "muscle_mass_kg", None) is not None:
            parts.append(f"Μυϊκή μάζα: {last.muscle_mass_kg}kg")
        if getattr(last, "notes", None):
            parts.append(f"Σχόλια: {last.notes}")

        return " | ".join(parts) if parts else "Τελευταία μέτρηση χωρίς επιπλέον στοιχεία."

    def _extract_json(self, text: str) -> str:
        """Extract a JSON object from the LLM output.

        It assumes there is exactly one main {...} block.
        If braces are slightly unbalanced on the right, it tries to fix them.
        """
        start = text.find("{")
        end = text.rfind("}")
        if start == -1 or end == -1:
            raise ValueError("No JSON found in LLM output.")

        candidate = text[start:end + 1]

        # balance braces
        opens = candidate.count("{")
        closes = candidate.count("}")
        if closes < opens:
            candidate += "}" * (opens - closes)

        return candidate

    def update_weekly(self, weekly_json: str, diet_json: str, feedback_text: str) -> dict:
        """
        Updates an existing weekly plan using free-text feedback.
        Uses the diet plan as context so the model knows which meals are allowed.
        Auto-fix loop for JSON validity.
        """

        template = self._load_text("edit_weekly.txt")
        weekly_template = self._load_text("weekly_template.json")

        variables = {
            "weekly_plan": weekly_json,
            "diet_plan": diet_json,
            "feedback_text": feedback_text,
            "json_template": weekly_template,
        }

        # 1️⃣ Render initial prompt
        prompt = self._render_template(template, variables)
        print("=== WEEKLY PLAN UPDATE PROMPT ===")
        print(prompt)

        # 2️⃣ First LLM call
        raw = self.client.generate(prompt)
        print("=== RAW LLM ===")
        print(raw)

        clean_json = self._extract_json(raw)

        # 3️⃣ AUTO-FIX LOOP
        for attempt in range(3):
            try:
                parsed = json.loads(clean_json)
                return parsed  # WeeklyPlan is returned as raw dict; Frontend can load WeeklyPlan(**parsed)
            except Exception as e:
                print(f"\n❌ Weekly JSON failed (attempt {attempt + 1}) -> Fixing")

                fix_prompt = f"""
    Fix the following weekly plan JSON so that it is valid.

    INVALID JSON:
    {clean_json}

    ERROR:
    {str(e)}

    STRICT TEMPLATE:
    {weekly_template}

    RULES:
    - Only adjust structure (brackets, lists, strings).
    - Do NOT invent new days.
    - Do NOT add meals not present in the diet plan.
    - Keep day names the same (English only).
    - Return ONLY valid JSON.
    """

                print("=== FIX PROMPT SENT ===")
                print(fix_prompt)

                fixed_raw = self.client.generate(fix_prompt)
                print("=== FIXED RAW ===")
                print(fixed_raw)

                clean_json = self._extract_json(fixed_raw)

        raise ValueError("❌ LLM could not produce valid weekly plan after 3 attempts.")
