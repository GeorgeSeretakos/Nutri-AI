from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import json
import tempfile

# === Agents & Models ===
from nutrition_ai.agents.diet_agent import DietAgent
from nutrition_ai.agents.shopping_list_agent import ShoppingListAgent
from nutrition_ai.agents.weekly_rotation_agent import WeeklyRotationAgent
from nutrition_ai.app.utils.docx_importer import DocxImporter

from nutrition_ai.models.user_profile import UserProfile
from nutrition_ai.models.diet_plan import DietPlan
from nutrition_ai.models.weekly_plan import WeeklyPlan
from nutrition_ai.models.weekly_update_request import WeeklyUpdateRequest


# ==============================================
# FASTAPI APP
# ==============================================
app = FastAPI(title="Nutrition AI API", version="1.0")

diet_agent = DietAgent()
shopping_agent = ShoppingListAgent()
weekly_agent = WeeklyRotationAgent()
docx_importer = DocxImporter()


# ==============================================
# REQUEST MODELS
# ==============================================
class GenerateDietRequest(BaseModel):
    profile: UserProfile
    expert_notes: str = ""


class UpdateDietRequest(BaseModel):
    existing: DietPlan
    feedback_text: str


class WeeklyPlanRequest(BaseModel):
    diet: DietPlan


# ==============================================
# 1) Generate New Diet
# ==============================================
@app.post("/diet/generate", response_model=DietPlan)
def generate_diet(req: GenerateDietRequest):
    """
    Create a brand new diet based on user profile + expert notes.
    """
    return diet_agent.generate_diet(req.profile, req.expert_notes)


# ==============================================
# 2) Update Existing Diet
# ==============================================
@app.post("/diet/update", response_model=DietPlan)
def update_diet(req: UpdateDietRequest):
    """
    Update an existing diet using free-text feedback.
    Uses auto-fix loop if JSON is invalid.
    """
    return diet_agent.update_diet(
        existing=req.existing,
        feedback_text=req.feedback_text
    )


# ==============================================
# 3) Import Diet from DOCX
# ==============================================
@app.post("/diet/import-docx", response_model=DietPlan)
async def import_docx(file: UploadFile = File(...)):
    """
    Upload a .docx nutrition plan → clean → LLM → structured JSON.
    """
    suffix = ".docx"
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    diet = docx_importer.import_docx(tmp_path)
    return diet


# ==============================================
# 4) Create Weekly Rotation Plan
# ==============================================
@app.post("/diet/weekly-plan", response_model=WeeklyPlan)
def weekly_plan(req: WeeklyPlanRequest):
    """
    Create weekly rotation based on latest valid DietPlan.
    """
    return weekly_agent.create_weekly_plan(req.diet)


# ==============================================
# 5) Create Shopping List from Weekly Plan
# ==============================================
@app.post("/diet/shopping-list")
def create_shopping_list(plan: WeeklyPlan):
    """
    Build shopping list based on the weekly rotation plan.
    """
    weekly_json = plan.model_dump_json(ensure_ascii=False)
    return shopping_agent.build_list(weekly_json)



@app.post("/diet/update-weekly")
async def update_weekly_plan(request: WeeklyUpdateRequest):
    """
    Takes:
    - weekly_plan (JSON)
    - diet_plan (JSON)
    - feedback_text (string)

    Returns:
    - updated weekly plan (JSON dict)
    """

    agent = DietAgent()

    updated = agent.update_weekly(
        weekly_json=json.dumps(request.weekly_plan, ensure_ascii=False),
        diet_json=json.dumps(request.diet_plan, ensure_ascii=False),
        feedback_text=request.feedback_text
    )

    return updated



from nutrition_ai.models.chat_schemas  import ChatRequest, ChatResponse
from nutrition_ai.app.utils.db_helpers import (
    load_user_profile_from_db,
    load_user_diet_from_db,
    load_user_weekly_from_db,
    save_user_state_to_db
)
from nutrition_ai.agents.chat_agent import NutritionChatAgent

app = FastAPI()


@app.post("/chat", response_model=ChatResponse)
def chat_endpoint(body: ChatRequest):

    # 1️⃣ Load user profile
    profile = load_user_profile_from_db(body.user_id)
    if not profile:
        raise HTTPException(404, f"User profile not found: {body.user_id}")

    # 2️⃣ Load diet + weekly (if any)
    baseline = load_user_diet_from_db(body.user_id)
    weekly = load_user_weekly_from_db(body.user_id)

    # 3️⃣ Create agent for this user
    agent = NutritionChatAgent(
        profile=profile,
        baseline_diet=baseline,
        weekly_plan=weekly
    )

    # 4️⃣ Run chat
    answer = agent.chat(body.message)

    # 5️⃣ Extract updated state
    new_state = agent.get_state()

    updated_diet = new_state["baseline_diet"]
    updated_weekly = new_state["weekly_plan"]

    # 6️⃣ Save to DB
    save_user_state_to_db(
        user_id=body.user_id,
        profile=profile,
        baseline_diet=(
            None if updated_diet is None else
            load_user_diet_from_db(body.user_id)
        ),
        weekly_plan=(
            None if updated_weekly is None else
            load_user_weekly_from_db(body.user_id)
        )
    )

    # 7️⃣ Return final response
    return ChatResponse(
        answer=answer,
        baseline_diet=updated_diet,
        weekly_plan=updated_weekly,
    )

# ==============================================
# 6) Health Check
# ==============================================
@app.get("/")
def root():
    return {"status": "Nutrition AI API running"}
