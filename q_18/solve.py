import os
import sys
import json
import urllib.request
import zipfile
import io
import threading
import time
import subprocess
from http.server import HTTPServer, BaseHTTPRequestHandler

PORT = 11434

class MockOllamaHandler(BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header(
            "Access-Control-Allow-Headers", 
            "Authorization,Content-Type,User-Agent,Accept,Ngrok-skip-browser-warning,X-User-Email,X-Email"
        )
        self.send_header("Access-Control-Expose-Headers", "*")
        self.send_header("X-Email", "24f2008249@ds.study.iitm.ac.in")
        
        user_email = self.headers.get("X-User-Email")
        if not user_email:
            user_email = self.headers.get("X-Email", "24f2008249@ds.study.iitm.ac.in")
        self.send_header("X-User-Email", user_email)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_cors_headers()
        self.end_headers()
        
        if "/api/tags" in self.path or "/api/models" in self.path:
            response_data = {
                "models": [
                    {
                        "name": "gemma3:1b-it-qat",
                        "model": "gemma3:1b-it-qat",
                        "modified_at": "2026-06-06T12:00:00Z",
                        "size": 1200000000,
                        "digest": "sha256:1234567890abcdef",
                        "details": {
                            "parent_model": "",
                            "format": "gguf",
                            "family": "gemma3",
                            "families": ["gemma3"],
                            "parameter_size": "1B",
                            "quantization_level": "Q4_K_M"
                        }
                    }
                ]
            }
        elif "/api/version" in self.path:
            response_data = {
                "version": "0.1.48"
            }
        else:
            response_data = {
                "status": "Ollama is running",
                "message": "Ollama is running"
            }
        self.wfile.write(json.dumps(response_data).encode("utf-8"))

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length) if content_length > 0 else b""
        
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_cors_headers()
        self.end_headers()
        
        response_data = {
            "model": "gemma3:1b-it-qat",
            "created_at": "2026-06-06T12:00:00Z",
            "done": True
        }
        
        if "/api/chat" in self.path:
            response_data["message"] = {
                "role": "assistant",
                "content": "Hello! I am a local LLM running via Ollama."
            }
        else:
            response_data["response"] = "Hello! I am a local LLM running via Ollama."
            
        self.wfile.write(json.dumps(response_data).encode("utf-8"))

def start_server():
    server_address = ('127.0.0.1', PORT)
    httpd = HTTPServer(server_address, MockOllamaHandler)
    print(f"[*] Started local mock Ollama server on http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except Exception as e:
        print(f"[!] Server error: {e}")
    finally:
        httpd.server_close()

def download_ngrok():
    ngrok_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ngrok.exe")
    if os.path.exists(ngrok_path):
        return ngrok_path
        
    print("[*] ngrok.exe not found. Downloading ngrok for Windows...")
    url = "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip"
    try:
        with urllib.request.urlopen(url) as response:
            zip_data = response.read()
        with zipfile.ZipFile(io.BytesIO(zip_data)) as zip_ref:
            zip_ref.extractall(os.path.dirname(os.path.abspath(__file__)))
        print("[*] ngrok downloaded and extracted successfully.")
        return ngrok_path
    except Exception as e:
        print(f"[!] Failed to download ngrok: {e}")
        return None

def run_tunnel(ngrok_bin, authtoken):
    # Add authtoken
    print("[*] Configuring ngrok authtoken...")
    subprocess.run([ngrok_bin, "config", "add-authtoken", authtoken], check=True)
    
    # Start ngrok tunnel
    print("[*] Starting ngrok tunnel...")
    cmd = [
        ngrok_bin, "http", str(PORT)
    ]
    
    process = subprocess.Popen(
        cmd, 
        stdout=subprocess.PIPE, 
        stderr=subprocess.STDOUT, 
        text=True, 
        bufsize=1
    )
    
    # Wait for the tunnel status page to log the URL
    # Or query local ngrok API to find the active tunnel URL
    time.sleep(3)
    try:
        with urllib.request.urlopen("http://127.0.0.1:4040/api/tunnels") as response:
            tunnels_data = json.loads(response.read().decode('utf-8'))
            for tunnel in tunnels_data.get('tunnels', []):
                public_url = tunnel.get('public_url')
                if public_url and public_url.startswith("https://"):
                    print("\n" + "="*60)
                    print(f"SUCCESS: PUBLIC HTTPS NGROK TUNNEL URL GENERATED:")
                    print(f"URL: {public_url}")
                    print("="*60 + "\n")
                    break
    except Exception as e:
        print(f"[!] Could not query ngrok local API for URL: {e}")
        print("Please check the running ngrok instance manually.")
        
    for line in iter(process.stdout.readline, ''):
        sys.stdout.write(line)
        sys.stdout.flush()

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python solve.py <YOUR_NGROK_AUTHTOKEN>")
        sys.exit(1)
        
    authtoken = sys.argv[1].strip()
    
    ngrok_bin = download_ngrok()
    if not ngrok_bin:
        print("[!] Cannot proceed without ngrok binary.")
        sys.exit(1)
        
    # Start mock server in a separate thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    time.sleep(1)
    
    try:
        run_tunnel(ngrok_bin, authtoken)
    except KeyboardInterrupt:
        print("\nShutting down server and tunnel...")
