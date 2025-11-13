from pydantic import BaseModel
from typing import Dict, List, Optional


class MealOption(BaseModel):
    description: str
    frequency: Optional[str] = None
    recommended_products: Optional[str] = None
    comments: Optional[str] = None


class Section(BaseModel):
    title: str
    options: List[MealOption]
    comments: Optional[str] = None


class FruitOption(BaseModel):
    name: str
    quantity: str


class DietPlan(BaseModel):
    user_name: str
    birth_date: Optional[str] = None
    height: Optional[float] = None
    exercise: Optional[str] = None
    goal: Optional[str] = None

    # FIX: section → Section, όχι List[MealOption]
    sections: Dict[str, Section]

    fruit_list: List[FruitOption] = []
    additional_notes: Optional[str] = None
