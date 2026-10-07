import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
pages_to_render = {
    "page_110_repl_fork": 110,
    "page_112_transcription": 112,
    "page_113_transcription_proc_euk": 113,
    "page_120_lac_operon": 120,
    "page_121_lac_operon_fig": 121,
    "page_129_miller_urey": 129,
    "page_141_natural_selection": 141,
    "page_155_antibody": 155,
    "page_158_hiv_cycle": 158
}

matrix = fitz.Matrix(2.0, 2.0)
for name, pno in pages_to_render.items():
    page = doc[pno - 1]
    pix = page.get_pixmap(matrix=matrix)
    pix.save(f"tmp_ncert/pages/{name}.png")
    print(f"Saved {name}.png")
