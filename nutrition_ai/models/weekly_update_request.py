from pydantic import BaseModel
from typing import Dict, Any

class WeeklyUpdateRequest(BaseModel):
    weekly_plan: Dict[str, Any]   # το JSON του weekly
    diet_plan: Dict[str, Any]     # το JSON της διατροφής
    feedback_text: str
