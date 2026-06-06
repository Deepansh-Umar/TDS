import httpx

# Define OpenAI chat completions endpoint URL
url = "https://api.openai.com/v1/chat/completions"

# Headers containing authorization dummy API key and content type
headers = {
    "Authorization": "Bearer dummy-api-key",
    "Content-Type": "application/json"
}

# The request payload with gpt-4o-mini model and messages
payload = {
    "model": "gpt-4o-mini",
    "messages": [
        {
            "role": "system",
            "content": "Analyze the sentiment of the text. Classify it into one of the following categories: GOOD, BAD, or NEUTRAL."
        },
        {
            "role": "user",
            "content": "o E9V  kXe 6gCm hSru tdSiT8 fZsfm iv9bk ipKMC7KE T"
        }
    ]
}

# Send POST request to OpenAI completions endpoint
response = httpx.post(url, json=payload, headers=headers)

# Ensure the request succeeded
response.raise_for_status()

# Print the JSON response
print(response.json())
