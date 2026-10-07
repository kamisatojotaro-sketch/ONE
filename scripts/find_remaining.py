import fitz
import re

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")

remaining = [
    ("miller-urey", ["miller", "spark"]),
    ("hardy-weinberg-selection", ["fig", "7.8"]),
    ("antibody-molecule", ["fig", "8.4"]),
    ("hiv-lifecycle", ["fig", "8.6"]),
    ("homologous-analogous", ["fig", "7.3"]),
    ("pollen-grain", ["fig", "2.5"])
]

for name, words in remaining:
    matches = []
    for p in range(len(doc)):
        txt = doc[p].get_text().lower()
        if all(w in txt for w in words):
            matches.append(p + 1)
    print(f"{name}: found in PDF pages {matches}")
