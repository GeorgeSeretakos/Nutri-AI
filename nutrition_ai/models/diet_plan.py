from pydantic import BaseModel, field_validator
from typing import List, Dict, Optional


class MealOption(BaseModel):
    description: str
    frequency: Optional[str] = None
    recommended_products: Optional[str] = None
    comments: Optional[str] = None


class Group(BaseModel):
    label: str
    options: List[MealOption]


class Section(BaseModel):
    title: str
    groups: List[Group]
    comments: Optional[str] = ""


class FruitItem(BaseModel):
    name: str
    quantity: str


class DietPlan(BaseModel):
    user_name: str
    birth_date: Optional[str] = None
    height: Optional[float] = None
    exercise: Optional[str] = None
    goal: Optional[str] = None

    sections: Dict[str, Section]
    additional_notes: Optional[str] = None

    @field_validator("sections", mode="before")
    @classmethod
    def normalize_sections(cls, raw):
        """
        Normalize ANY incoming LLM structure:
        - supports: sections with groups
        - supports: sections with wrong keys
        - fixes "option" → "description"
        """

        fixed = {}

        for sec_name, data in raw.items():

            groups_raw = data.get("groups", [])
            clean_groups = []

            for g in groups_raw:
                label = g.get("label", "")
                options_raw = g.get("options", [])

                clean_options = []
                for opt in options_raw:
                    if "option" in opt and "description" not in opt:
                        opt["description"] = opt["option"]

                    allowed = {
                        "description": opt.get("description", ""),
                        "frequency": opt.get("frequency"),
                        "recommended_products": opt.get("recommended_products"),
                        "comments": opt.get("comments")
                    }
                    clean_options.append(MealOption(**allowed))

                clean_groups.append(Group(label=label, options=clean_options))

            fixed[sec_name] = Section(
                title=data.get("title", sec_name),
                groups=clean_groups,
                comments=data.get("comments", "")
            )

        return fixed
