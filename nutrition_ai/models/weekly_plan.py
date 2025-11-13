from pydantic import BaseModel
from typing import Dict

class DailyMeals(BaseModel):
    ΠΡΩΙΝΟ: str
    Κύριο_γεύμα: str
    Ελαφρύ_γεύμα: str
    Σνακ: str

class WeeklyPlan(BaseModel):
    week: Dict[str, DailyMeals]
