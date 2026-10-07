import re

with open('src/data/biologyImportantQuestionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# find all question blocks
q_matches = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"].*?title:\s*[\'"]([^\'"]+)[\'"]', text)
print(f"Total questions found: {len(q_matches)}")

# find diagramId occurrences
diag_matches = re.findall(r'diagramId:\s*[\'"]([^\'"]+)[\'"]', text)
print(f"Total diagramId references in data: {len(diag_matches)}")
for d in set(diag_matches):
    print(" -", d)

# let's find questions with diagram field
diag_obj_matches = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"].*?diagram:\s*\{', text, re.DOTALL)
print(f"Questions with diagram object: {len(diag_obj_matches)}")
