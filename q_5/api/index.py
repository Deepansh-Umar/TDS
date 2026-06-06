from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import sys
from io import StringIO
import traceback
import os
import requests
import json
import re

app = FastAPI()

# Enable CORS for testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str

def execute_python_code(code: str) -> dict:
    """
    Execute Python code and return stdout/stderr or exact traceback.
    Uses compile with an empty filename and extracts the trace starting
    from the compiled code scope to mimic native direct file run trace.
    """
    # Capture stdout and stderr
    old_stdout = sys.stdout
    old_stderr = sys.stderr
    
    redirected_output = StringIO()
    sys.stdout = redirected_output
    sys.stderr = redirected_output

    try:
        # Separate compilation and execution to isolate SyntaxErrors cleanly
        try:
            compiled = compile(code, "", "exec")
        except SyntaxError as e:
            # Revert redirection
            sys.stdout = old_stdout
            sys.stderr = old_stderr
            
            # Format SyntaxError cleanly without webserver stacktrace leaking
            filename = e.filename or ""
            lineno = e.lineno or 1
            offset = e.offset or 1
            text = e.text or ""
            msg = e.msg or "invalid syntax"
            
            lines = []
            lines.append(f'  File "{filename}", line {lineno}\n')
            if text:
                lines.append(f'    {text.rstrip()}\n')
                # Align caret pointer with Python's format behavior
                caret_line = " " * (4 + offset - 1) + "^\n"
                lines.append(caret_line)
            lines.append(f"SyntaxError: {msg}\n")
            return {"success": False, "output": "".join(lines)}

        # Run compiled code with clean, isolated global environment
        global_env = {}
        exec(compiled, global_env)
        
        # Get output from stdout/stderr redirection
        output = redirected_output.getvalue()
        return {"success": True, "output": output}

    except Exception as e:
        # Get exception traceback
        tb = e.__traceback__
        # Skip the harness/runner frame (which is this exec call)
        if tb and tb.tb_next:
            tb = tb.tb_next
        
        # Format exception traceback
        formatted_traceback = "".join(traceback.format_exception(type(e), e, tb))
        return {"success": False, "output": formatted_traceback}

    finally:
        sys.stdout = old_stdout
        sys.stderr = old_stderr

def extract_lines_from_traceback(traceback_str: str) -> List[int]:
    """
    Fallback deterministic parser to extract lines with errors from traceback.
    Looks for pattern: File "", line X (or similar filename patterns).
    """
    lines = []
    # Match File "", line X or File "<string>", line X
    matches = re.finditer(r'File "(?:<string>|)", line (\d+)', traceback_str)
    for match in matches:
        lines.append(int(match.group(1)))
    
    # Return unique sorted line numbers
    if lines:
        return sorted(list(set(lines)))
    return []

def analyze_error_with_ai(code: str, traceback_str: str) -> List[int]:
    """
    Identify line numbers with errors.
    Prioritizes:
    1. Direct Gemini API (if GEMINI_API_KEY is configured)
    2. AIPipe / OpenRouter (if AIPIPE_TOKEN or OPENAI_API_KEY is configured)
    3. Deterministic Regex Fallback (in case API call fails or is unconfigured)
    """
    prompt = f"""Analyze this Python code and its error traceback.
Identify the line number(s) in the original CODE where the error occurred.

CODE:
{code}

TRACEBACK:
{traceback_str}

Return the line number(s) where the error is located.
Your response MUST be a JSON object with key 'error_lines' pointing to a list of integers.
Example response:
{{"error_lines": [3]}}
"""

    # 1. Direct Gemini API
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
                        "error_lines": {
                            "type": "ARRAY",
                            "items": {"type": "INTEGER"}
                        }
                    },
                    "required": ["error_lines"]
                }
            }
        }
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=10)
            if res.ok:
                text_response = res.json()["candidates"][0]["content"]["parts"][0]["text"]
                result = json.loads(text_response)
                return result.get("error_lines", [])
        except Exception as err:
            print(f"Direct Gemini API failed: {err}")

    # 2. AIPipe / OpenRouter API
    token = os.environ.get("AIPIPE_TOKEN") or os.environ.get("OPENAI_API_KEY")
    if token:
        # OpenRouter base url for completions
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
                    "content": "You are a Python error analysis bot. Identify the error line numbers and respond with a JSON object containing the 'error_lines' list."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "response_format": {"type": "json_object"}
        }
        
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=10)
            # Try OpenAI proxy as backup
            if not res.ok:
                url = "https://aipipe.org/openai/v1/chat/completions"
                payload["model"] = "gpt-4o-mini"
                res = requests.post(url, json=payload, headers=headers, timeout=10)
                
            if res.ok:
                text_response = res.json()["choices"][0]["message"]["content"]
                result = json.loads(text_response)
                return result.get("error_lines", [])
        except Exception as err:
            print(f"AIPipe/OpenRouter API failed: {err}")

    # 3. Deterministic Fallback if API keys are missing/calls fail
    return extract_lines_from_traceback(traceback_str)

@app.options("/")
@app.options("/code-interpreter")
def options_endpoint():
    response = Response(status_code=200)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Python Code Interpreter API is running. POST to /code-interpreter"}

@app.post("/code-interpreter")
def run_code_interpreter(req: CodeRequest):
    # Execute code
    exec_result = execute_python_code(req.code)
    
    # Check if execution succeeded
    if exec_result["success"]:
        return {
            "error": [],
            "result": exec_result["output"]
        }
    else:
        # Analyze error with AI (or fallback parser)
        error_lines = analyze_error_with_ai(req.code, exec_result["output"])
        return {
            "error": error_lines,
            "result": exec_result["output"]
        }
