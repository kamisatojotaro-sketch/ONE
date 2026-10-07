import urllib.request
import os
import time

url = "https://ia800904.us.archive.org/30/items/ncert-class-12-biology-1/NCERT-Class-12-Biology%20%281%29.pdf"
dest = "tmp_ncert/ncert_full_class12.pdf"
headers = {'User-Agent': 'Mozilla/5.0'}

os.makedirs("tmp_ncert", exist_ok=True)
if not os.path.exists(dest) or os.path.getsize(dest) < 10000000:
    print("Downloading full NCERT Class 12 Biology PDF (10.9 MB)...")
    t0 = time.time()
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=120) as resp, open(dest, "wb") as f:
        downloaded = 0
        while True:
            chunk = resp.read(64 * 1024)
            if not chunk:
                break
            f.write(chunk)
            downloaded += len(chunk)
    print(f"Downloaded {downloaded} bytes in {round(time.time() - t0, 2)}s!")
else:
    print(f"Already downloaded ({os.path.getsize(dest)} bytes).")

import fitz
doc = fitz.open(dest)
print("Total pages in doc:", len(doc))
print("Page 1 text excerpt:", doc[0].get_text()[:200].replace('\n', ' '))
