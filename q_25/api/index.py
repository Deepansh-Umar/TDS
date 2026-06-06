from fastapi import FastAPI, Request, Response
from pydantic import BaseModel
from typing import List
import json
import math
import os

app = FastAPI()

# Custom middleware to guarantee CORS headers on every single response (including OPTIONS preflight)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TelemetryRequest(BaseModel):
    regions: List[str]
    threshold_ms: float

def get_percentile(data_list, percentile):
    if not data_list:
        return 0.0
    sorted_data = sorted(data_list)
    n = len(sorted_data)
    idx = (n - 1) * (percentile / 100.0)
    low = math.floor(idx)
    high = math.ceil(idx)
    if low == high:
        return float(sorted_data[low])
    else:
        return float(sorted_data[low] + (idx - low) * (sorted_data[high] - sorted_data[low]))

def load_telemetry_data():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    path_options = [
        os.path.join(current_dir, '..', 'q-vercel-latency.json'),
        os.path.join(current_dir, 'q-vercel-latency.json'),
        'q-vercel-latency.json'
    ]
    for path in path_options:
        if os.path.exists(path):
            with open(path, 'r') as f:
                return json.load(f)
    return []

def process_analytics(req: TelemetryRequest):
    data = load_telemetry_data()
    results = {}
    
    for region in req.regions:
        target_region = region.lower()
        region_data = [d for d in data if d.get('region', '').lower() == target_region]
        
        if not region_data:
            results[region] = {
                "avg_latency": 0.0,
                "p95_latency": 0.0,
                "avg_uptime": 0.0,
                "breaches": 0
            }
            continue
            
        latencies = [d['latency_ms'] for d in region_data if 'latency_ms' in d]
        uptimes = [d['uptime_pct'] for d in region_data if 'uptime_pct' in d]
        
        avg_latency = sum(latencies) / len(latencies) if latencies else 0.0
        p95_latency = get_percentile(latencies, 95) if latencies else 0.0
        avg_uptime = sum(uptimes) / len(uptimes) if uptimes else 0.0
        breaches = sum(1 for l in latencies if l > req.threshold_ms) if latencies else 0
        
        results[region] = {
            "avg_latency": avg_latency,
            "p95_latency": p95_latency,
            "avg_uptime": avg_uptime,
            "breaches": breaches
        }
        
    return results

from fastapi.responses import JSONResponse

def make_cors_response(content):
    response = JSONResponse(content=content)
    response.raw_headers.append((b"access-control-allow-origin", b"*"))
    response.raw_headers.append((b"access-control-allow-methods", b"*"))
    response.raw_headers.append((b"access-control-allow-headers", b"*"))
    
    return response

@app.options("/")
@app.options("/analytics")
@app.options("/api/analytics")
def options_endpoint():
    response = Response(status_code=200)
    response.raw_headers.append((b"access-control-allow-origin", b"*"))
    response.raw_headers.append((b"access-control-allow-methods", b"*"))
    response.raw_headers.append((b"access-control-allow-headers", b"*"))
    response.raw_headers.append((b"Access-Control-Allow-Origin", b"*"))
    response.raw_headers.append((b"Access-Control-Allow-Methods", b"*"))
    response.raw_headers.append((b"Access-Control-Allow-Headers", b"*"))
    return response

@app.get("/")
def read_root():
    return make_cors_response({"message": "Telemetry API is running. Send a POST request to /analytics"})

@app.post("/")
def post_root(req: TelemetryRequest):
    return make_cors_response(process_analytics(req))

@app.post("/analytics")
def post_analytics(req: TelemetryRequest):
    return make_cors_response(process_analytics(req))

@app.post("/api/analytics")
def post_api_analytics(req: TelemetryRequest):
    return make_cors_response(process_analytics(req))
