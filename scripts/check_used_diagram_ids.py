import re

with open('src/data/biologyImportantQuestionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()
matches = set(re.findall(r"diagramId:\s*'([^']+)'", text))
print("Used diagramIds in data:")
for m in sorted(list(matches)):
    print("-", m)
