import re

with open('src/components/study/BiologyDiagramCard.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

diagram_ids = re.findall(r"diagramId === '([^']+)'", content)
print("Found diagram IDs:", len(diagram_ids))
for did in diagram_ids:
    print("-", did)
