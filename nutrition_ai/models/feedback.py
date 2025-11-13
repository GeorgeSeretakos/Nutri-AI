from pydantic import BaseModel
from datetime import datetime
from typing import Optional, Dict

class Feedback(BaseModel):
    expert_id: str
    timestamp: datetime = datetime.now()
    comments: str  # natural language feedback from the dietologist
    changes: Optional[Dict[str, str]] = None
