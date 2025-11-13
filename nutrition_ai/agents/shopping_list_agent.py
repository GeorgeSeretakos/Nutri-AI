import json
from nutrition_ai.llm.watsonx_client import WatsonxClient


class ShoppingListAgent:

    def __init__(self, prompts_path="nutrition_ai/app/prompts"):
        from pathlib import Path
        self.client = WatsonxClient()
        self.prompts_path = Path(prompts_path)
        self.prompt = (self.prompts_path / "shopping_list_prompt.txt").read_text()

    def build_list(self, weekly_plan_json: str) -> dict:
        prompt = self.prompt.replace("{{weekly_json}}", weekly_plan_json)
        raw = self.client.generate(prompt)
        cleaned = self._extract_json(raw)
        return json.loads(cleaned)


    def _extract_json(self, text: str) -> str:
        start = text.find("{")
        end = text.rfind("}")

        if start == -1 or end == -1:
            raise ValueError("No JSON object found in LLM output.")

        candidate = text[start:end + 1]

        # balance braces
        opens = candidate.count("{")
        closes = candidate.count("}")
        if closes < opens:
            candidate += "}" * (opens - closes)

        return candidate

