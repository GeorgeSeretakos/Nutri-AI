from nutrition_ai.models.user_profile  import UserProfile, Measurement
from typing import Dict


class NutritionMath:

    @staticmethod
    def mifflin_st_jeor(profile: UserProfile) -> float:
        """
        Returns BMR using Mifflin–St Jeor equation.
        """

        if profile.gender == "male":
            s = 5
        else:
            s = -161

        weight = profile.history[-1].weight_kg if profile.history else 70
        height = profile.height_cm or 170
        age = NutritionMath._calculate_age(profile.birth_date)

        return 10 * weight + 6.25 * height - 5 * age + s

    @staticmethod
    def _calculate_age(birth_date):
        if not birth_date:
            return 30
        from datetime import date
        today = date.today()
        return today.year - birth_date.year - (
            (today.month, today.day) < (birth_date.month, birth_date.day)
        )

    @staticmethod
    def activity_multiplier(exercise: str) -> float:
        """
        Estimate activity multiplier from description
        """
        if not exercise:
            return 1.2

        e = exercise.lower()

        if "καθόλου" in e:
            return 1.2
        if "1" in e or "2" in e:
            return 1.375
        if "3" in e or "4" in e:
            return 1.55
        if "5" in e or "6" in e:
            return 1.725
        return 1.55

    @staticmethod
    def daily_calories(profile: UserProfile) -> float:
        bmr = NutritionMath.mifflin_st_jeor(profile)
        mult = NutritionMath.activity_multiplier(profile.exercise_frequency)
        return round(bmr * mult, 0)

    @staticmethod
    def macro_targets(calories: float, goal: str) -> Dict[str, float]:
        """
        Returns recommended grams of protein, carbs, fats
        """

        # Weight loss → more protein, fewer carbs
        if "loss" in goal.lower() or "απώλει" in goal.lower():
            protein_ratio = 0.30
            carb_ratio = 0.40
            fat_ratio = 0.30

        # Muscle gain → higher protein and carbs
        elif "gain" in goal.lower() or "γράμμ" in goal.lower():
            protein_ratio = 0.30
            carb_ratio = 0.50
            fat_ratio = 0.20

        # Maintenance
        else:
            protein_ratio = 0.25
            carb_ratio = 0.50
            fat_ratio = 0.25

        protein = calories * protein_ratio / 4
        carbs = calories * carb_ratio / 4
        fats = calories * fat_ratio / 9

        return {
            "protein_g": round(protein, 1),
            "carbs_g": round(carbs, 1),
            "fats_g": round(fats, 1),
            "calories": calories
        }
