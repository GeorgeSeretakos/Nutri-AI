import json
from nutrition_ai.llm.watsonx_client import WatsonxClient


class RecipeExtractorAgent:

    def __init__(self):
        self.client = WatsonxClient()

    def extract_ingredients(self, meal_description: str) -> dict:
        """
        Use the LLM to extract a structured ingredient list from a meal description.
        """

        prompt = f"""
Extract ALL ingredients from the following Greek meal description.
Return ONLY a JSON object:
{{
  "ingredients": [
      {{"name": "...", "quantity": "...", "unit": "..." }}
  ]
}}

Meal: "{meal_description}"
        """

        response = self.client.generate(prompt)
        cleaned = self._extract_json(response)
        return json.loads(cleaned)

    def _extract_json(self, text: str) -> str:
        start = text.find("{")
        end = text.rfind("}")
        return text[start:end+1]
