# api_schemas.py

from pydantic import BaseModel
from typing import Optional, Any, Dict


class ChatRequest(BaseModel):
    user_id: str
    message: str


class ChatResponse(BaseModel):
    answer: str
    baseline_diet: Optional[Dict[str, Any]] = None
    weekly_plan: Optional[Dict[str, Any]] = None
