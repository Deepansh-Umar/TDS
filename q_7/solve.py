import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os

BASE_URL = "https://sanand0.github.io/tdsdata/crawl_html/"

def get_relative_filepath(url):
    """
    Given a URL, determine the relative local file path.
    Example: 
      - https://sanand0.github.io/tdsdata/crawl_html/ -> index.html
      - https://sanand0.github.io/tdsdata/crawl_html/index.html -> index.html
      - https://sanand0.github.io/tdsdata/crawl_html/hospital/history.html -> hospital/history.html
    """
    parsed = urlparse(url)
    # Extract path relative to the crawler root path
    rel_path = parsed.path.replace("/tdsdata/crawl_html/", "")
    if rel_path.startswith("/"):
        rel_path = rel_path[1:]
        
    # If empty or ends with a slash, it refers to index.html
    if not rel_path or rel_path.endswith("/"):
        rel_path = os.path.join(rel_path, "index.html")
        
    # Standardize to forward slashes for the log file
    return rel_path.replace("\\", "/")

def solve():
    visited = set()
    queue = [BASE_URL]
    crawled_urls = set()
    
    while queue:
        current_url = queue.pop(0)
        
        # Remove URL fragment
        parsed_current = urlparse(current_url)
        clean_url = parsed_current._replace(fragment="").geturl()
        
        if clean_url in visited:
            continue
            
        visited.add(clean_url)
        
        try:
            res = requests.get(clean_url, timeout=10)
            if res.status_code != 200:
                continue
                
            content_type = res.headers.get("Content-Type", "")
            if "html" not in content_type and not clean_url.endswith(".html") and not clean_url.endswith("/"):
                continue
                
            crawled_urls.add(clean_url)
            
            # Parse HTML links
            soup = BeautifulSoup(res.text, 'html.parser')
            for a_tag in soup.find_all("a", href=True):
                href = a_tag["href"]
                # Resolve relative URL to absolute URL
                absolute_url = urljoin(clean_url, href)
                parsed_abs = urlparse(absolute_url)
                clean_abs = parsed_abs._replace(fragment="").geturl()
                
                # Crawl inside BASE_URL
                if clean_abs.startswith(BASE_URL):
                    if clean_abs not in visited and clean_abs not in queue:
                        queue.append(clean_abs)
                        
        except Exception as e:
            print(f"Error crawling {clean_url}: {e}")

    # Deduplicate URLs by mapping them to their target local file paths
    unique_files = set()
    for url in crawled_urls:
        filepath = get_relative_filepath(url)
        unique_files.add(filepath)
        
    # Filter files starting with G to X (case-insensitive checks)
    g_to_x_count = 0
    g_to_x_files = []
    all_files = sorted(list(unique_files))
    
    for filepath in all_files:
        filename = os.path.basename(filepath)
        first_letter = filename[0].upper() if filename else ''
        is_g_to_x = 'G' <= first_letter <= 'X'
        
        if is_g_to_x:
            g_to_x_count += 1
            g_to_x_files.append(filepath)

    # Write the filenames/relative paths to crawled_files.txt
    log_path = os.path.join(os.path.dirname(__file__), "crawled_files.txt")
    with open(log_path, "w", encoding="utf-8") as f:
        f.write("--- CRAWLED FILES LOG ---\n")
        f.write(f"Total Unique Mapped Files: {len(all_files)}\n")
        f.write(f"Total Files between G and X: {g_to_x_count}\n\n")
        f.write("--- ALL FILES LIST ---\n")
        for filepath in all_files:
            f.write(f"{filepath}\n")

    print("\n==================================")
    print(f"Total Unique Crawled HTML Files: {len(all_files)}")
    print(f"Files between G and X (inclusive): {g_to_x_count}")
    print(f"Log written to: {log_path}")
    print("==================================")

if __name__ == "__main__":
    solve()
