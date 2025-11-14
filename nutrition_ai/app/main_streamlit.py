import streamlit as st
import json
from pathlib import Path
from dotenv import load_dotenv

# Agents
from nutrition_ai.agents.diet_agent import DietAgent
from nutrition_ai.agents.shopping_list_agent import ShoppingListAgent
from nutrition_ai.agents.weekly_rotation_agent import WeeklyRotationAgent

# Models
from nutrition_ai.models.user_profile import UserProfile
from nutrition_ai.models.diet_plan import DietPlan
from nutrition_ai.app.utils.docx_importer  import DocxImporter

docx_importer = DocxImporter()

# Load env
load_dotenv()

# ------------------------------------------------------------
# PATHS
# ------------------------------------------------------------
BASELINE_PATH = Path("nutrition_ai/data/baseline_diet.json")

def load_baseline():
    if BASELINE_PATH.exists():
        try:
            data = json.loads(BASELINE_PATH.read_text(encoding="utf-8"))
            return DietPlan(**data)
        except Exception:
            return None
    return None

def save_baseline(plan: DietPlan):
    BASELINE_PATH.write_text(
        plan.model_dump_json(indent=2, ensure_ascii=False),
        encoding="utf-8"
    )


# ------------------------------------------------------------
# INIT AGENTS
# ------------------------------------------------------------
diet_agent = DietAgent()
shopping_agent = ShoppingListAgent()
rotation_agent = WeeklyRotationAgent()


# ------------------------------------------------------------
# STREAMLIT UI
# ------------------------------------------------------------
st.set_page_config(page_title="Nutrition AI", layout="wide")
st.title("🥗 Nutrition AI Assistant")

baseline = load_baseline()
has_baseline = baseline is not None

if has_baseline:
    st.success("🔄 Existing baseline detected — UPDATE MODE enabled.")
else:
    st.warning("🆕 No baseline found — GENERATE MODE enabled.")


# ------------------------------------------------------------
# USER PROFILE FORM
# ------------------------------------------------------------
st.subheader("📋 Client Profile")

import datetime

st.subheader("📋 Client Profile")

with st.form("profile_form"):
    # Required field for Pydantic
    user_id = st.text_input("User ID", "client_001")

    name = st.text_input("Όνομα", "Κώστας")

    # DATE PICKER FIX
    birth_date = st.date_input("Ημερομηνία Γέννησης", datetime.date(1990, 1, 1))

    height = st.number_input("Ύψος (cm)", min_value=100, max_value=250, value=180)

    exercise = st.text_input("Άσκηση", "Βαριά άσκηση 5-6 φορές την εβδομάδα")
    goal = st.text_input("Στόχος", "Αύξηση μυϊκής μάζας και μείωση λίπους")

    gender = st.selectbox("Φύλο", ["Άνδρας", "Γυναίκα", "Άλλο"])

    # LIST INPUTS (automatically split)
    dietary_preferences_str = st.text_input(
        "Διατροφικές Προτιμήσεις (χώρισε με κόμμα)",
        "υγιεινή διατροφή, υψηλή σε πρωτεΐνη"
    )
    allergies_str = st.text_input(
        "Αλλεργίες (χώρισε με κόμμα)",
        "καμία"
    )
    conditions_str = st.text_input(
        "Ιατρικές Καταστάσεις (χώρισε με κόμμα)",
        " "
    )
    history_str = st.text_input(
        "Ιστορικό (χώρισε με κόμμα)",
        " "
    )

    submitted = st.form_submit_button("✔️ Αποθήκευση Προφίλ")

# Convert comma-separated strings → lists
dietary_preferences = [x.strip() for x in dietary_preferences_str.split(",") if x.strip()]
allergies = [x.strip() for x in allergies_str.split(",") if x.strip()]
conditions = [x.strip() for x in conditions_str.split(",") if x.strip()]
history = [x.strip() for x in history_str.split(",") if x.strip()]

# Create Pydantic model (NO MORE ERRORS)
profile = UserProfile(
    user_id=user_id,
    name=name,
    birth_date=birth_date,
    height_cm=height,
    exercise_frequency=exercise,
    goal=goal,
    gender=gender,
    dietary_preferences=dietary_preferences,
    allergies=allergies,
    conditions=conditions,
    history=history
)

# ------------------------------------------------------------
# ACTIONS
# ------------------------------------------------------------
st.divider()
st.subheader("⚙️ Ενέργειες")

col1, col2, col3, col4 = st.columns(4)


# -------------------------
# GENERATE NEW DIET
# -------------------------
with col1:
    st.write("### 🆕 Νέα Διατροφή")
    notes = st.text_area("Σημειώσεις Διατροφολόγου", "", key="notes1")

    if st.button("Generate Diet", key="gen_btn"):
        plan = diet_agent.generate_diet(profile, expert_notes=notes)
        save_baseline(plan)
        st.success("Η νέα διατροφή δημιουργήθηκε.")
        st.json(json.loads(plan.model_dump_json()))


# -------------------------
# UPDATE EXISTING DIET
# -------------------------
with col2:
    st.write("### 🔄 Update Διατροφής")

    if not has_baseline:
        st.info("Πρέπει πρώτα να γίνει Generate.")
    else:
        feedback_text = st.text_area(
            "Τι αλλαγές θέλει ο διατροφολόγος;",
            key="fbx",
            placeholder="μείωσε υδατάνθρακες, αύξησε πρωτεΐνη..."
        )

        if st.button("Update Diet", key="upd_btn"):
            new_plan = diet_agent.update_diet(existing=baseline, feedback_text=feedback_text)
            save_baseline(new_plan)
            st.success("Η διατροφή ενημερώθηκε.")
            st.json(json.loads(new_plan.model_dump_json()))



# -------------------------
# WEEKLY ROTATION PLAN
# -------------------------
with col3:
    st.write("### 📅 Weekly Plan")

    if st.button("Create Weekly Plan"):
        if not has_baseline:
            st.error("Δεν υπάρχει baseline.")
        else:
            weekly = rotation_agent.create_weekly_plan(baseline)
            st.json(json.loads(weekly.model_dump_json()))

# -------------------------
# SHOPPING LIST
# -------------------------
with col4:
    st.write("### 🛒 Shopping List")

    if st.button("Create Shopping List"):
        if not has_baseline:
            st.error("Δεν υπάρχει baseline.")
        else:
            weekly = rotation_agent.create_weekly_plan(baseline)
            shopping = shopping_agent.build_list(weekly.model_dump_json())
            st.json(shopping)

st.subheader("📄 Εισαγωγή Διατροφής από Word (.DOCX)")

uploaded = st.file_uploader("Upload DOCX", type=["docx"], key="docx_uploader")

if uploaded:
    temp_path = "temp_upload.docx"
    with open(temp_path, "wb") as f:
        f.write(uploaded.getvalue())

    if st.button("Μετατροπή DOCX → JSON → Baseline"):
        plan = docx_importer.import_docx(temp_path)
        save_baseline(plan)
        st.success("Η διατροφή εισήχθη επιτυχώς από Word!")
        st.json(json.loads(plan.model_dump_json()))


st.subheader("✏️ Update Weekly Plan")

weekly_feedback = st.text_area(
    "Τι αλλαγές θέλει ο διατροφολόγος στο εβδομαδιαίο πλάνο;",
    placeholder="Αλλάξε το κύριο γεύμα της Τρίτης σε Σολομό..."
)

if st.button("Update Weekly Plan"):
    if not has_baseline:
        st.error("Δεν υπάρχει baseline diet για να δημιουργηθεί weekly plan πρώτα.")
    else:
        # 1. First generate weekly from baseline
        weekly = rotation_agent.create_weekly_plan(baseline)
        weekly_json = weekly.model_dump_json()

        # 2. Update weekly
        updated_weekly = diet_agent.update_weekly(
            diet_json=baseline,
            weekly_json=weekly_json,
            feedback_text=weekly_feedback
        )

        st.success("Το εβδομαδιαίο πλάνο ενημερώθηκε!")
        st.json(updated_weekly)