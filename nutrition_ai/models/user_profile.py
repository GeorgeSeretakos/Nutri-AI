from pydantic import BaseModel, Field
from datetime import date
from typing import Optional, List, Union


class Measurement(BaseModel):
    """Represents a new measurement taken at an appointment."""
    date: Optional[date] = None
    weight_kg: Optional[float] = None
    body_fat_percent: Optional[float] = None
    muscle_mass_kg: Optional[float] = None
    notes: Optional[str] = None


class UserProfile(BaseModel):
    """Fully optional user profile (relaxed validation)."""

    # Required ID, everything else optional
    user_id: str = "user_default"

    name: Optional[str] = None
    birth_date: Optional[date] = None
    height_cm: Optional[float] = None
    gender: Optional[str] = None
    exercise_frequency: Optional[str] = None
    goal: Optional[str] = None

    # Allow list OR string to avoid validation issues
    dietary_preferences: Optional[List[str]] = Field(default_factory=list)
    allergies: Optional[Union[str, List[str]]] = None
    conditions: Optional[Union[str, List[str]]] = None

    # Allow single measurement OR list OR None
    history: Optional[List[Measurement]] = Field(default_factory=list)
