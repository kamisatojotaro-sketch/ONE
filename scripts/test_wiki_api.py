import urllib.request
import json

headers = {'User-Agent': 'OneStudyApp/1.0 (test@example.com)'}
api_url = 'https://en.wikipedia.org/w/api.php?action=query&titles=File:Structure_of_male_part_of_flower-_Structure_of_microsporangium.jpg&prop=imageinfo&iiprop=url&format=json'

req = urllib.request.Request(api_url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print(json.dumps(data, indent=2))
except Exception as e:
    print("Error:", e)
