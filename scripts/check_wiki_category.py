import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'OneStudyApp/1.0 (educational-ncert-diagrams)'}

def get_file_info(title):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{urllib.parse.quote(title)}&prop=categories|imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode('utf-8'))

data = get_file_info("Structure_of_male_part_of_flower-_Structure_of_microsporangium.jpg")
print(json.dumps(data, indent=2))
