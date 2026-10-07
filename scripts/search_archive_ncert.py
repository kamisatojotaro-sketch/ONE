import urllib.request
import urllib.parse
import json
import time

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

url = "https://archive.org/advancedsearch.php?q=title%3A%28NCERT+Class+12+Biology%29+AND+mediatype%3Atexts&fl[]=identifier,title,downloads&sort[]=downloads+desc&rows=10&page=1&output=json"

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        docs = data.get('response', {}).get('docs', [])
        print(f"Found {len(docs)} items on archive.org:")
        for d in docs:
            print("-", d.get('identifier'), "|", d.get('title'), f"({d.get('downloads')} downloads)")
except Exception as e:
    print("Archive search error:", e)
