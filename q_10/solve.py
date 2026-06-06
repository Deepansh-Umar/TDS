from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
import os
import csv

app = FastAPI()

# Enable CORS for any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load CSV data on startup
csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "q-fastapi.csv")
students_data = []

if os.path.exists(csv_path):
    with open(csv_path, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            students_data.append({
                "studentId": int(row["studentId"]),
                "class": row["class"]
            })
else:
    print(f"Warning: CSV file not found at {csv_path}")

@app.get("/api")
async def get_students(class_list: Optional[List[str]] = Query(None, alias="class")):
    """
    GET /api endpoint.
    If 'class' query parameters are provided (e.g. ?class=1A&class=1B), 
    filter and return students belonging to those classes.
    Otherwise, return all students.
    Maintains the original CSV order.
    """
    if not class_list:
        return {"students": students_data}
        
    # Convert query parameters to set for O(1) membership check
    target_classes = set(class_list)
    filtered = [s for s in students_data if s["class"] in target_classes]
    
    return {"students": filtered}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
