from nutrition_ai.models.diet_plan import DietPlan
from nutrition_ai.models.weekly_plan import WeeklyPlan, DailyMeals
import random


class WeeklyRotationAgent:

    DAYS = [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
    ]

    @staticmethod
    def create_weekly_plan(diet: DietPlan) -> WeeklyPlan:

        # Extract lists of meal descriptions (strings)
        breakfast_options = [opt.description for opt in diet.sections["ΠΡΩΙΝΟ"].options]
        main_options = [opt.description for opt in diet.sections["Κύρια γεύματα"].options]
        light_options = [opt.description for opt in diet.sections["Ελαφριά γεύματα"].options]
        snack_options = [opt.description for opt in diet.sections["Σνακ"].options]

        week_dict = {}

        for day in WeeklyRotationAgent.DAYS:
            week_dict[day] = DailyMeals(
                ΠΡΩΙΝΟ=random.choice(breakfast_options),
                Κύριο_γεύμα=random.choice(main_options),
                Ελαφρύ_γεύμα=random.choice(light_options),
                Σνακ=random.choice(snack_options)
            )

        return WeeklyPlan(week=week_dict)
