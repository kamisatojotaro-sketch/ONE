import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
matrix = fitz.Matrix(2.0, 2.0)
pix = doc[133].get_pixmap(matrix=matrix) # page 134 (0-indexed 133)
pix.save("tmp_ncert/pages/page_134_homologous.png")
print("Saved page 134!")
