import json
import re

with open('src/data/biologyImportantQuestionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for "diagram" or "diagramId"
matches = re.findall(r'"diagram[^"]*"\s*:\s*([^,\n}]+)', text)
print("Diagram keys found:", len(matches))
print(matches[:10])

# Let's find any diagramId
d_ids = re.findall(r'"diagramId":\s*"([^"]+)"', text)
print("diagramId occurrences:", len(d_ids))
print(d_ids)

# Let's check which questions have diagram objects
qs_with_diagram = re.findall(r'"id":\s*"([^"]+)"[^}]+?"diagram":\s*\{', text)
print("Questions with 'diagram':", len(qs_with_diagram))
print("Some questions:", qs_with_diagram[:15])
