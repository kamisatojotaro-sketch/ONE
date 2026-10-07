import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
matrix = fitz.Matrix(2.0, 2.0)
pix = doc[54].get_pixmap(matrix=matrix) # page 55 (0-indexed 54)
pix.save("tmp_ncert/pages/page_55_blastocyst_cleavage.png")
print("Saved page 55!")
