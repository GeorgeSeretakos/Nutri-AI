from docx import Document
from nutrition_ai.models.diet_plan import DietPlan, MealSection, MealOption, FruitOption
from pathlib import Path
import re


class DocxImporter:
    """
    Parses an expert DOCX diet file and converts it to a DietPlan Pydantic object.
    """

    @staticmethod
    def import_docx_to_diet(path: str) -> DietPlan:
        doc = Document(path)

        user_name = ""
        birth_date = ""
        height = ""
        exercise = ""
        goal = ""

        sections = {}
        current_section = None
        fruit_list = []

        for para in doc.paragraphs:

            text = para.text.strip()

            # Header extraction
            if text.startswith("ΟΝΟΜΑ:"):
                user_name = text.replace("ΟΝΟΜΑ:", "").strip()

            elif text.startswith("ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ:"):
                birth_date = text.split(":", 1)[1].strip()

            elif text.startswith("ΥΨΟΣ:"):
                height = text.split(":", 1)[1].strip()

            elif text.startswith("ΑΣΚΗΣΗ:"):
                exercise = text.split(":", 1)[1].strip()

            elif text.startswith("ΣΤΟΧΟΣ:"):
                goal = text.split(":", 1)[1].strip()

            # Section titles
            elif text in ["Π Ρ Ω Ι Ν Ο", "ΠΡΩΙΝΟ", "ΜΕΣΗΜΕΡΙΑΝΟ / ΒΡΑΔΙΝΟ",
                           "Ελαφριά γεύματα", "Σνακ", "Κύρια γεύματα"]:
                current_section = text
                sections[current_section] = MealSection(title=text, options=[])

            # Diet options
            elif text.startswith("-") or re.match(r"^\d|\•|\*", text):
                sections[current_section].options.append(MealOption(description=text))

            # Fruit section
            elif "Φρούτων" in text or "Λίστα" in text:
                current_section = "Λίστα Φρούτων"

            elif current_section == "Λίστα Φρούτων" and text:
                try:
                    name, qty = text.split(":")
                    fruit_list.append(FruitOption(name=name.strip(), quantity=qty.strip()))
                except:
                    pass

        # Build DietPlan object
        return DietPlan(
            user_name=user_name,
            birth_date=birth_date,
            height=height,
            exercise=exercise,
            goal=goal,
            sections={k: v for k, v in sections.items() if k != "Λίστα Φρούτων"},
            fruit_list=fruit_list,
            additional_notes=""
        )
