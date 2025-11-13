from nutrition_ai.agents.diet_agent import DietAgent
from nutrition_ai.memory.memory_manager import MemoryManager
from nutrition_ai.models.user_profile import UserProfile, Measurement
from nutrition_ai.models.feedback import Feedback
from datetime import date


def build_demo_profile():
    """A demo user for testing generation."""
    return UserProfile(
        user_id="demo_user",
        name="Eleni Test",
        birth_date=date(1985, 7, 20),
        height_cm=165,
        gender="female",
        exercise_frequency="3 φορές/εβδομάδα",
        goal="Απώλεια βάρους",
        dietary_preferences=["Mediterranean"],
        allergies=["lactose"],
        conditions=["high cholesterol"],
        history=[
            Measurement(
                date=date.today(),
                weight_kg=72.5,
                body_fat_percent=28.5,
                notes="Starting gym this week"
            )
        ]
    )


def main():
    memory = MemoryManager()
    agent = DietAgent()

    profile = build_demo_profile()

    print("\n=== Generating new diet... ===")
    diet = agent.generate_diet(profile)
    print(diet.json(indent=2, ensure_ascii=False))

    # Save diet to memory
    memory.save_diet(profile.user_id, diet)

    print("\n=== Loading saved diet... ===")
    loaded = memory.load_diet(profile.user_id)
    print(loaded.json(indent=2, ensure_ascii=False))

    print("\n=== Applying expert feedback... ===")
    feedback = Feedback(
        expert_id="Maria123",
        comments="Reduce calories slightly and add a pre-workout snack."
    )

    updated = agent.update_diet(loaded, feedback)
    memory.save_diet(profile.user_id, updated)

    print("\n=== Updated Diet Plan ===")
    print(updated.json(indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
