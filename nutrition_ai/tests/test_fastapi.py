import json
from fastapi.testclient import TestClient
from nutrition_ai.app.main_fastapi  import app  # <-- where your FastAPI instance lives

client = TestClient(app)


# --------------------------------------------------------
# FIXTURES
# --------------------------------------------------------
EXAMPLE_PROFILE = {
    "user_id": "test123",
    "name": "Κώστας",
    "birth_date": "1990-01-01",
    "height_cm": 180,
    "exercise_frequency": "5 φορές/εβδ",
    "goal": "Μυική μάζα",
    "gender": "Άνδρας",
    "dietary_preferences": ["υγιεινή", "πρωτεΐνη"],
    "allergies": [],
    "conditions": [],
    "history": []
}

EXAMPLE_FEEDBACK = "Μείωσε τους υδατάνθρακες και πρόσθεσε 1 σνακ πριν την προπόνηση."


# --------------------------------------------------------
# 1) TEST: Generate Diet
# --------------------------------------------------------
def test_generate_diet():
    response = client.post(
        "/diet/generate",
        json={
            "profile": EXAMPLE_PROFILE,
            "expert_notes": "Τίποτα ιδιαίτερο"
        }
    )
    assert response.status_code == 200
    data = response.json()

    # Minimal validation
    assert "sections" in data
    assert "ΠΡΩΙΝΟ" in data["sections"]


# --------------------------------------------------------
# 2) TEST: Update Diet
# --------------------------------------------------------
def test_update_diet():
    # First generate diet
    base = client.post(
        "/diet/generate",
        json={"profile": EXAMPLE_PROFILE, "expert_notes": ""}
    ).json()

    # Then update it
    response = client.post(
        "/diet/update",
        json={
            "existing": base,
            "feedback_text": EXAMPLE_FEEDBACK
        }
    )

    assert response.status_code == 200
    updated = response.json()
    assert "sections" in updated


# --------------------------------------------------------
# 3) TEST: Weekly Plan Generation
# --------------------------------------------------------
def test_weekly_plan():
    diet = client.post(
        "/diet/generate",
        json={"profile": EXAMPLE_PROFILE, "expert_notes": ""}
    ).json()

    response = client.post(
        "/diet/weekly-plan",
        json={"diet": diet}
    )

    assert response.status_code == 200
    weekly = response.json()

    assert "week" in weekly
    assert len(weekly["week"]) == 7


# --------------------------------------------------------
# 4) TEST: Shopping List from Weekly Plan
# --------------------------------------------------------
def test_shopping_list():
    diet = client.post(
        "/diet/generate",
        json={"profile": EXAMPLE_PROFILE, "expert_notes": ""}
    ).json()

    weekly = client.post(
        "/diet/weekly-plan",
        json={"diet": diet}
    ).json()

    response = client.post(
        "/diet/shopping-list",
        json=weekly
    )

    assert response.status_code == 200
    shopping = response.json()

    # Basic categories expected
    assert isinstance(shopping, dict)
    assert len(shopping) > 0


# --------------------------------------------------------
# 5) TEST: Health Check
# --------------------------------------------------------
def test_health():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["status"] == "Nutrition AI API running"
