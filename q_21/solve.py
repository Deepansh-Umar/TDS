import json

# Read the JSON file
with open("c:/Users/deepa/Documents_here/TDS/q_21/data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Filter and sort
result = sorted(
    [p for p in data if p["price"] >= 128.49],
    key=lambda x: (x["category"], -x["price"], x["name"])
)

# Print as a single minified JSON string
print(json.dumps(result, separators=(",", ":")))