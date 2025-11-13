# test_watsonx.py
from watsonx_client import WatsonxClient

if __name__ == "__main__":
    client = WatsonxClient()
    response = client.generate("Give me a healthy breakfast idea.")
    print(response)

    print("\nStreaming output:\n")
    for token in client.stream("Give me a healthy breakfast idea."):
        print(token, end="", flush=True)
