from pathlib import Path
import json
from nutrition_ai.models.diet_plan import DietPlan


class MemoryManager:
    """
    Simple local memory for saving/loading diet plans per user.
    """

    def __init__(self, base_path: str = "nutrition_ai/memory/data"):
        self.base_path = Path(base_path)
        self.base_path.mkdir(parents=True, exist_ok=True)

    def save_diet(self, user_id: str, plan: DietPlan):
        path = self.base_path / f"{user_id}_diet.json"
        path.write_text(json.dumps(plan.dict(), indent=2, ensure_ascii=False), encoding="utf-8")

    def load_diet(self, user_id: str) -> DietPlan | None:
        path = self.base_path / f"{user_id}_diet.json"
        if not path.exists():
            return None
        data = json.loads(path.read_text(encoding="utf-8"))
        return DietPlan(**data)
