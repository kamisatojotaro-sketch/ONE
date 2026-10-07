import urllib.request
import os
import time

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# Test direct download from ia801807.us.archive.org
url = "https://ia801807.us.archive.org/2/items/ncert-lebo1/lebo106.pdf"
dest = "tmp_ncert/lebo106.pdf"
os.makedirs("tmp_ncert", exist_ok=True)

print("Testing direct server download:", url)
t0 = time.time()
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=30) as resp, open(dest, "wb") as f:
    chunk = resp.read(1024 * 1024) # 1MB
    f.write(chunk)
    print(f"Downloaded first 1MB in {round(time.time() - t0, 2)}s! Status: 200 OK")
