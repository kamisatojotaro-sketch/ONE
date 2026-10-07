import fitz
import re
import json

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
results = []

for i in range(len(doc)):
    text = doc[i].get_text()
    matches = re.findall(r'(Figure\s+\d+\.\d+[a-z]?|Fig\.\s*\d+\.\d+[a-z]?)', text, re.IGNORECASE)
    if matches:
        lines = [line.strip() for line in text.split('\n') if any(m.lower() in line.lower() for m in matches)]
        results.append({
            "pdf_page": i + 1,
            "figures": list(set(matches)),
            "snippets": lines[:3]
        })

with open("scripts/figures_index.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"Indexed {len(results)} pages with figures.")
