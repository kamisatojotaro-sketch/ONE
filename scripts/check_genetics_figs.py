import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")

for p in range(80, 92):
    txt = doc[p].get_text()
    if "fig" in txt.lower() or "sex determination" in txt.lower():
        print(f"Page {p+1}:")
        for line in txt.split('\n'):
            if "fig" in line.lower() or "honey" in line.lower() or "bird" in line.lower() or "pedigree" in line.lower():
                print("  ", line.strip())
