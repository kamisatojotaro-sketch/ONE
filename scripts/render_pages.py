import fitz
from PIL import Image
import os

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
os.makedirs("tmp_ncert/pages", exist_ok=True)
os.makedirs("public/images/ncert", exist_ok=True)

# Let's inspect pages of interest: render them at 2x resolution (144 dpi) to preview
pages_to_preview = {
    "page_25_microsporangium": 25,
    "page_28_megasporangium": 28,
    "page_29_embryosac_dev": 29,
    "page_30_embryosac_mature": 30,
    "page_38_monocot_embryo": 38,
    "page_53_menstrual_cycle": 53,
    "page_56_blastocyst": 56,
    "page_57_placenta_fetus": 57,
    "page_109_repl_fork": 109,
    "page_111_transcription": 111,
    "page_120_lac_operon": 120,
    "page_128_miller_urey": 128,
    "page_133_homologous": 133,
    "page_140_natural_selection": 140,
    "page_154_antibody": 154,
    "page_157_hiv_cycle": 157
}

matrix = fitz.Matrix(2.0, 2.0)
for name, pno in pages_to_preview.items():
    page = doc[pno - 1] # 0-indexed
    pix = page.get_pixmap(matrix=matrix)
    out_path = f"tmp_ncert/pages/{name}.png"
    pix.save(out_path)
    print(f"Saved {out_path} ({pix.width}x{pix.height})")
