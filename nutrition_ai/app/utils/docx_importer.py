import docx2txt
import json
from pathlib import Path

from nutrition_ai.llm.watsonx_client import WatsonxClient
from nutrition_ai.models.diet_plan import DietPlan


class DocxImporter:
    """
    DOCX → raw text → LLM → structured DietPlan JSON.
    The most robust approach for arbitrary Word formatting.
    """

    def __init__(self, prompts_path="nutrition_ai/app/prompts"):
        self.client = WatsonxClient()
        self.prompts_path = Path(prompts_path)
        self.prompt = (self.prompts_path / "import_docx_prompt.txt").read_text()



    def import_docx(self, path: str) -> DietPlan:
        # 1) Extract full text (tables + paragraphs)
        raw_text = docx2txt.process(path)
        print(raw_text)

        def _fix_number(value):
            if isinstance(value, str):
                v = value.replace(",", ".")
                try:
                    return float(v)
                except ValueError:
                    return value  # leave as string if still invalid
            return value

        # Cleanup
        clean_text = "\n".join(
            line.strip()
            for line in raw_text.splitlines()
            if line.strip()
        )

        # 2) Build prompt
        final_prompt = self.prompt.replace("{{docx_text}}", clean_text)
        print(final_prompt)
        # 3) Call Watsonx
        raw_output = self.client.generate(final_prompt)
        print(raw_output)

        # 4) Extract JSON body
        extracted = self._extract_json(raw_output)
        parsed = json.loads(extracted)

        # Normalize numeric fields coming from DOCX
        if "height" in parsed:
            parsed["height"] = _fix_number(parsed["height"])

        if "birth_date" in parsed and isinstance(parsed["birth_date"], str):
            parsed["birth_date"] = parsed["birth_date"].strip()

        # You may want to normalize weight if your docx includes it

        # 5) Validate via Pydantic
        return DietPlan(**parsed)

    def _extract_json(self, text: str) -> str:
        start = text.find("{")
        end = text.rfind("}")
        if start == -1 or end == -1:
            raise ValueError("No JSON found in LLM output.")

        candidate = text[start:end+1]

        opens = candidate.count("{")
        closes = candidate.count("}")
        if closes < opens:
            candidate += "}" * (opens - closes)

        return candidate
