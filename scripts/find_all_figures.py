import fitz
import re

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
print("Searching for Figures in 311 pages...")

for i in range(len(doc)):
    text = doc[i].get_text()
    # match patterns like Figure 2.3 or Fig. 2.3
    matches = re.findall(r'(Figure\s+\d+\.\d+[a-z]?|Fig\.\s*\d+\.\d+[a-z]?)', text, re.IGNORECASE)
    if matches:
        # print snippet
        lines = [line.strip() for line in text.split('\n') if any(m.lower() in line.lower() for m in matches)]
        print(f"Page {i+1}: {matches} -> {lines[:2]}")
