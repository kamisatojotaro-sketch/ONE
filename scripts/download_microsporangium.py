import urllib.request
import os

url = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Structure_of_male_part_of_flower-_Structure_of_microsporangium.jpg"
headers = {'User-Agent': 'OneStudyApp/1.0 (educational-use)'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
        os.makedirs("public/images/ncert", exist_ok=True)
        out_path = "public/images/ncert/microsporangium-walls.jpg"
        with open(out_path, "wb") as f:
            f.write(data)
        print("Downloaded microsporangium image! Size:", len(data), "bytes")
except Exception as e:
    print("Download error:", e)
