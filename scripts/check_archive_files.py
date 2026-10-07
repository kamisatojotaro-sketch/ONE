import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for item in ['ncert-class-12-biology-1', 'ncert-lebo1']:
    url = f"https://archive.org/metadata/{item}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            server = data.get('server')
            dir_ = data.get('dir')
            print(f"Item: {item}, server: {server}, dir: {dir_}")
            for f in data.get('files', []):
                if f.get('name', '').endswith('.pdf'):
                    print(" ", f.get('name'), f.get('size'))
    except Exception as e:
        print(f"Error {item}:", e)
