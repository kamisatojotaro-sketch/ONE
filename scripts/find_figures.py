import fitz
import re

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")

target_figures = [
    ("microsporangium", ["microsporangium", "endothecium", "tapetum", "epidermis"]),
    ("embryo-sac", ["embryo sac", "antipodals", "synergids", "polar nuclei", "filiform"]),
    ("megasporangium", ["anatropous", "integument", "nucellus", "chalaza", "micropyle"]),
    ("monocot-embryo", ["scutellum", "coleoptile", "coleorhiza"]),
    ("pollen-grain", ["exine", "intine", "germ pore", "generative cell"]),
    ("blastocyst", ["blastocyst", "trophoblast", "inner cell mass"]),
    ("placenta-fetus", ["placental villi", "umbilical cord", "fetus within the uterus"]),
    ("menstrual-cycle", ["menstrual cycle", "follicular phase", "luteal phase", "fsh", "lh", "estrogen"]),
    ("replicating-fork", ["replicating fork", "continuous synthesis", "discontinuous synthesis", "okazaki"]),
    ("transcription-unit", ["transcription unit", "promoter", "terminator", "coding strand", "template strand"]),
    ("lac-operon", ["lac operon", "repressor", "inducer", "beta-galactosidase", "permease"]),
    ("miller-urey", ["spark discharge", "miller's experiment", "boiling water", "ch4", "nh3"]),
    ("hardy-weinberg-selection", ["stabilising", "directional", "disruptive", "operation of natural selection"]),
    ("antibody-molecule", ["antibody molecule", "antigen binding site", "light chain", "heavy chain"]),
    ("hiv-lifecycle", ["retrovirus", "reverse transcriptase", "viral rna", "macrophage"]),
    ("homologous-analogous", ["homologous organs", "bougainvillea", "cucurbita", "forelimbs"])
]

for fid, words in target_figures:
    found_pages = []
    for page_num in range(len(doc)):
        text = doc[page_num].get_text().lower()
        if all(w in text for w in words[:2]): # matches top 2 words
            found_pages.append(page_num + 1)
    print(f"Target: {fid:<25} -> Found in PDF Pages: {found_pages}")
