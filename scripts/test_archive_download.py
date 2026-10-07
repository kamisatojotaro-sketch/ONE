import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
}

url = 'https://archive.org/download/ncert-lebo1/lebo101.pdf'
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        content = resp.read()
        print("Success! Downloaded lebo101.pdf from archive.org, size:", len(content), "bytes")
        with open("lebo101_downloaded.pdf", "wb") as f:
            f.write(content)
except Exception as e:
    print("Error:", e)
