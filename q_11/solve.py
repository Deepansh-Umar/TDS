from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
import os
import requests
import json
import re

app = FastAPI()

# Enable CORS for cross-origin browser validation
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SentimentRequest(BaseModel):
    sentences: List[str]

# Dictionary of positive, negative and negation words
positive_words = {
    "love", "loved", "loves", "loving", "like", "liked", "likes", "liking", "great", "greater", "greatest",
    "awesome", "fantastic", "amazing", "wonderful", "good", "better", "best", "happy", "happier", "happiest",
    "excellent", "enjoy", "enjoyed", "enjoys", "enjoying", "glad", "cool", "nice", "nicer", "nicest", "perfect",
    "perfectly", "beautiful", "beautifully", "yay", "hooray", "pleasant", "pleasantly", "delight", "delighted",
    "delightful", "superb", "superbly", "brilliant", "brilliantly", "satisfied", "satisfying", "satisfactory",
    "exquisite", "exquisitely", "outstanding", "fabulous", "fabulously", "terrific", "terrifically", "tasty",
    "delicious", "gladly", "cheerful", "cheerfully", "optimistic", "friendly", "kind", "warm", "winner",
    "win", "winning", "won", "success", "successful", "successfully", "heavenly", "splendid", "splendidly",
    "pleasure", "thrilled", "exciting", "excited", "excite", "interest", "interested", "interesting", "appreciate",
    "appreciated", "fine", "pure", "fun", "funny", "joy", "joyful", "proud", "proudly"
}

negative_words = {
    "terrible", "terribly", "bad", "badly", "sad", "sadly", "sadder", "saddest", "hate", "hated", "hates", "hating",
    "awful", "awfully", "horrible", "horribly", "worst", "worse", "sorry", "cry", "crying", "cried", "pain",
    "painful", "painfully", "unhappy", "depressed", "depressing", "disappointed", "disappointing", "disappointment",
    "gloomy", "angry", "angrily", "furious", "furiously", "annoyed", "annoying", "annoy", "frustrated",
    "frustrating", "frustration", "grief", "mourn", "mourning", "regret", "regretted", "regretting", "poor", "poorly",
    "fail", "failed", "fails", "failing", "failure", "broken", "useless", "trash", "garbage", "waste", "wasted",
    "wastes", "awful", "ugly", "dreadful", "dreadfully", "nasty", "nastily", "disgust", "disgusted", "disgusting",
    "shame", "shameful", "shamefully", "guilt", "guilty", "lonely", "bored", "boring", "scared", "scary", "fear",
    "fearful", "anxious", "anxiously", "worry", "worried", "worries", "worrying", "difficult", "difficulty",
    "hard", "painful", "hurt", "hurting", "hurts", "destroy", "destroyed", "destroying", "damage", "damaged",
    "lousy", "suck", "sucks", "sucked", "sucking", "dislike", "disliked", "dislikes", "expensive", "costly",
    "ruin", "ruined", "annoyance", "tired", "fake"
}

negations = {
    "not", "no", "never", "none", "nothing", "nowhere", "neither", "nor", "barely", "scarcely", "hardly",
    "dont", "doesnt", "didnt", "wasnt", "werent", "havent", "hasnt", "hadnt", "isnt", "arent", "cannot", "cant",
    "couldnt", "shouldnt", "wouldnt", "wont"
}

def predict_sentiment_rule_based(sentence: str) -> str:
    """
    Lightweight rule-based sentiment classifier.
    Supports basic negation logic and positive/negative keyword matching.
    """
    # Clean sentence
    cleaned = re.sub(r'[^\w\s]', '', sentence.lower())
    words = cleaned.split()
    
    pos_score = 0
    neg_score = 0
    has_negation = False
    
    for word in words:
        # Check standard negations or words ending with "nt" (e.g. shouldn't -> shouldnt)
        if word in negations or word.endswith("nt"):
            has_negation = True
        
        if word in positive_words:
            pos_score += 1
        elif word in negative_words:
            neg_score += 1
            
    if pos_score > neg_score:
        return "sad" if has_negation else "happy"
    elif neg_score > pos_score:
        return "happy" if has_negation else "sad"
    else:
        return "neutral"

def predict_sentiment_with_ai(sentences: List[str]) -> Optional[List[str]]:
    """
    Classify a batch of sentences using an LLM.
    Supports standard Gemini direct API and AIPipe OpenRouter/OpenAI proxies.
    """
    # Create the prompt with a structured JSON request
    prompt = f"""
Analyze the sentiment of the following sentences.
For each sentence, classify the sentiment as one of: 'happy', 'sad', or 'neutral'.

SENTENCES:
{json.dumps(sentences, indent=2)}

Your response MUST be a JSON object with key 'results' pointing to a list of strings matching the sentiment labels in the exact same order.
Example response format:
{{"results": ["happy", "sad", "neutral"]}}
"""

    # 1. Try Gemini API directly
    gemini_key = os.environ.get("GEMINI_API_KEY")
    if gemini_key:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key={gemini_key}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }],
            "generationConfig": {
                "responseMimeType": "application/json",
                "responseSchema": {
                    "type": "OBJECT",
                    "properties": {
                        "results": {
                            "type": "ARRAY",
                            "items": {"type": "STRING"}
                        }
                    },
                    "required": ["results"]
                }
            }
        }
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=12)
            if res.ok:
                text_response = res.json()["candidates"][0]["content"]["parts"][0]["text"]
                result = json.loads(text_response)
                return result.get("results")
        except Exception as err:
            print(f"Direct Gemini API failed: {err}")

    # 2. Try AIPipe / OpenRouter
    token = os.environ.get("AIPIPE_TOKEN") or os.environ.get("OPENAI_API_KEY")
    if token:
        url = "https://aipipe.org/openrouter/v1/chat/completions"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}"
        }
        payload = {
            "model": "google/gemini-2.0-flash-lite-001",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a sentiment analysis agent. Classify the list of sentences as 'happy', 'sad', or 'neutral' and return in JSON format with key 'results'."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "response_format": {"type": "json_object"}
        }
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=12)
            if not res.ok:
                url = "https://aipipe.org/openai/v1/chat/completions"
                payload["model"] = "gpt-4o-mini"
                res = requests.post(url, json=payload, headers=headers, timeout=12)
                
            if res.ok:
                text_response = res.json()["choices"][0]["message"]["content"]
                result = json.loads(text_response)
                return result.get("results")
        except Exception as err:
            print(f"AIPipe API failed: {err}")

    return None

@app.post("/sentiment")
async def batch_sentiment_analysis(req: SentimentRequest):
    sentences = req.sentences
    results = []
    
    # Try AI batch prediction first
    ai_predictions = None
    try:
        ai_predictions = predict_sentiment_with_ai(sentences)
    except Exception as e:
        print(f"Error calling LLM sentiment classifier: {e}")
        
    if ai_predictions and len(ai_predictions) == len(sentences):
        # Match each sentence with its predicted AI sentiment
        for i, sentence in enumerate(sentences):
            # Ensure label is one of the valid ones
            sentiment = ai_predictions[i].lower()
            if sentiment not in {"happy", "sad", "neutral"}:
                sentiment = predict_sentiment_rule_based(sentence)
            results.append({
                "sentence": sentence,
                "sentiment": sentiment
            })
    else:
        # Use fallback rule-based classifier
        print("Using rule-based sentiment classifier fallback...")
        for sentence in sentences:
            results.append({
                "sentence": sentence,
                "sentiment": predict_sentiment_rule_based(sentence)
            })
            
    return {"results": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
