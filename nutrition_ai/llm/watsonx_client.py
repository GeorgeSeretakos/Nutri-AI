import os
import time

from ibm_watsonx_ai.foundation_models import Model
from dotenv import load_dotenv
from typing import Generator, Optional


# Load environment variables
load_dotenv()

class WatsonxClient:
    """
    Wrapper class for interacting with IBM watsonx.ai Foundation Models.
    Handles initialization, credential loading, and text generation.
    """

    def __init__(self,
                 model_id: str | str = "meta-llama/llama-4-maverick-17b-128e-instruct-fp8",
                 project_id: str | None = None,
                 temperature: float = 0.3,
                 max_new_tokens: int = 4000,
                 decoding_method: str = "greedy",
                 repetition_penalty: float = 1.0
                 ):
        """
        Initialize the Watsonx model connection with environment variables.
        """
        self.model_id = model_id
        self.project_id = project_id or os.getenv("PROJECT_ID")
        self.api_key = os.getenv("WATSONX_APIKEY")
        self.url = os.getenv("WATSONX_URL")

        if not all([self.api_key, self.url, self.project_id]):
            raise ValueError("Missing Watsonx environment variables. Check your .env file.")

        self.model = Model(
            model_id=model_id,
            params={
                "temperature": temperature,
                "max_new_tokens": max_new_tokens,
                "decoding_method": decoding_method,
                "repetition_penalty": repetition_penalty,
                "stop_sequences": [],
                "response_format": "json"
            },
            credentials={
                "apikey": self.api_key,
                "url": self.url
            },
            project_id=self.project_id,
        )

        # ---------------------------------------------------------
        #  STANDARD GENERATION (full text response)
        # ---------------------------------------------------------

    def generate(self, prompt: str) -> str:
        """Generate a full text response."""
        try:
            response = self.model.generate(prompt)

            # Watsonx returns .result (string) for successful responses
            if hasattr(response, "result"):
                return response.result

            # Safety fallback
            if isinstance(response, dict):
                return (
                    response.get("results", [{}])[0]
                    .get("generated_text", "")
                )
            return str(response)

        except Exception as e:
            print(f"[WatsonxClient] Error during generate(): {e}")
            return ""

        # ---------------------------------------------------------
        #  STREAMING GENERATION (token-by-token)
        # ---------------------------------------------------------

    def stream(self, prompt: str, delay: float = 0.01) -> Generator[str, None, None]:
        """
        Simulates token streaming by breaking the final output into chunks.
        Compatible with Streamlit and chat UIs.
        """
        full_text = self.generate(prompt)

        # Split by spaces or characters — choose what feels natural.
        for token in full_text.split():
            yield token + " "
            time.sleep(delay)

