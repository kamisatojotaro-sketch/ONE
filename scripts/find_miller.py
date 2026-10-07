import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")

for p in range(126, 135):
    txt = doc[p].get_text()
    if "miller" in txt.lower() or "figure 7.1" in txt.lower():
        print(f"Page {p+1}: contains Miller / Fig 7.1")
        for line in txt.split('\n'):
            if "miller" in line.lower() or "fig" in line.lower():
                print(" ", line.strip())
