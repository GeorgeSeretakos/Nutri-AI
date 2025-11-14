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

        # Helper to extract all descriptions from groups
        def extract_group_options(section):
            all_opts = []
            if section and section.groups:
                for group in section.groups:
                    options = group.options if hasattr(group, "options") else []
                    for opt in options:
                        desc = getattr(opt, "description", None)
                        if desc:
                            all_opts.append(desc)
            return all_opts

        # --- 1. Extract breakfast options ---
        breakfast_section = diet.sections.get("ΠΡΩΙΝΟ")
        breakfast_options = extract_group_options(breakfast_section)

        # --- 2. Extract main meals, light meals, snacks from ΜΕΣΗΜΕΡΙΑΝΟ/ΒΡΑΔΙΝΟ ---
        main_section = diet.sections.get("ΜΕΣΗΜΕΡΙΑΝΟ/ΒΡΑΔΙΝΟ")

        main_options = []
        light_options = []
        snack_options = []

        if main_section and main_section.groups:

            for group in main_section.groups:
                label = (group.label or "").lower()

                if "κύρια" in label:
                    main_options.extend([opt.description for opt in group.options])

                elif "ελαφριά" in label:
                    light_options.extend([opt.description for opt in group.options])

                elif "σνακ" in label:
                    snack_options.extend([opt.description for opt in group.options])

        # --- 3. Fallbacks if empty ---
        if not breakfast_options:
            breakfast_options = ["Μη διαθέσιμο"]

        if not main_options:
            main_options = ["Μη διαθέσιμο"]

        if not light_options:
            light_options = ["Μη διαθέσιμο"]

        if not snack_options:
            snack_options = ["Μη διαθέσιμο"]

        # --- 4. Build weekly plan ---
        week_dict = {}

        for day in WeeklyRotationAgent.DAYS:
            week_dict[day] = DailyMeals(
                ΠΡΩΙΝΟ=random.choice(breakfast_options),
                Κύριο_γεύμα=random.choice(main_options),
                Ελαφρύ_γεύμα=random.choice(light_options),
                Σνακ=random.choice(snack_options)
            )

        return WeeklyPlan(week=week_dict)
