import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
pages_to_render = {
    "page_26_pollen": 26,
    "page_131_miller": 131,
    "page_133_homologous": 133,
    "page_137_natural_sel": 137,
    "page_154_antibody": 154,
    "page_159_hiv": 159
}

matrix = fitz.Matrix(2.0, 2.0)
for name, pno in pages_to_render.items():
    page = doc[pno - 1]
    pix = page.get_pixmap(matrix=matrix)
    pix.save(f"tmp_ncert/pages/{name}.png")
    print(f"Saved {name}.png")
