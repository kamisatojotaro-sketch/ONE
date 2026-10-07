import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
matrix = fitz.Matrix(2.0, 2.0)
for p in [138, 139, 140]:
    pix = doc[p - 1].get_pixmap(matrix=matrix)
    pix.save(f"tmp_ncert/pages/page_{p}.png")
    print(f"Saved page {p}!")
