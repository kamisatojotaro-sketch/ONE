import fitz
from PIL import Image

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")

# Search for "Figure 3.12"
for p in range(len(doc)):
    text = doc[p].get_text()
    if "3.12" in text:
        print(f"Figure 3.12 is on PDF page {p+1} (index {p})")
        # render and save
        pix = doc[p].get_pixmap(matrix=fitz.Matrix(2.0, 2.0))
        pix.save(f"tmp_ncert/pages/actual_p{p+1}_fig312.png")
