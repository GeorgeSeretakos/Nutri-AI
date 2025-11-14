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


# ==============================================
# 6) Health Check
# ==============================================
@app.get("/")
def root():
    return {"status": "Nutrition AI API running"}
