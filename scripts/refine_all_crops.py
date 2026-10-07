import fitz
from PIL import Image, ImageChops
import os

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
os.makedirs("public/images/ncert", exist_ok=True)
matrix = fitz.Matrix(3.0, 3.0) # High-DPI 216 DPI

def get_page(idx):
    pix = doc[idx].get_pixmap(matrix=matrix)
    return Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

def trim_white(im, pad=10):
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = im.size
        l = max(0, bbox[0] - pad)
        t = max(0, bbox[1] - pad)
        r = min(w, bbox[2] + pad)
        b = min(h, bbox[3] + pad)
        return im.crop((l, t, r, b))
    return im

print("Extracting and refining all diagrams...")

# 1. EMBRYO SAC: Page 29 (index 28)
# Figure 2.8: (b) and (c) mature embryo sac
p29 = get_page(28)
w, h = p29.size
# Let's crop from y=0.32 to y=0.68, x=0.35 to x=0.90 to get (b) 8-nucleate & (c) mature 7-celled embryo sac
crop_emb = p29.crop((int(w * 0.35), int(h * 0.32), int(w * 0.88), int(h * 0.67)))
crop_emb = trim_white(crop_emb, pad=15)
crop_emb.save("public/images/ncert/embryo-sac.png", "PNG")
print("Saved embryo-sac.png", crop_emb.size)

# 2. MEGASPORANGIUM (Anatropous Ovule): Page 28 (index 27)
# Figure 2.7(d) Anatropous ovule
p28 = get_page(27)
w, h = p28.size
crop_ovule = p28.crop((int(w * 0.52), int(h * 0.16), int(w * 0.88), int(h * 0.46)))
crop_ovule = trim_white(crop_ovule, pad=15)
crop_ovule.save("public/images/ncert/megasporangium.png", "PNG")
print("Saved megasporangium.png", crop_ovule.size)

# 3. POLLEN GRAIN & MICROSPORE: Page 26 (index 25)
# Figure 2.5(a) Pollen tetrad and (b) Stages of microspore maturing into pollen grain
p26 = get_page(25)
w, h = p26.size
crop_pollen = p26.crop((int(w * 0.64), int(h * 0.18), int(w * 0.88), int(h * 0.74)))
crop_pollen = trim_white(crop_pollen, pad=15)
crop_pollen.save("public/images/ncert/pollen-grain.png", "PNG")
crop_pollen.save("public/images/ncert/microspore-pollen.png", "PNG")
print("Saved pollen-grain.png", crop_pollen.size)

# 4. MONOCOT & DICOT EMBRYO: Page 38 (index 37)
# Figure 2.14: (a) Dicot embryo, (b) L.S. Grass monocot embryo
p38 = get_page(37)
w, h = p38.size
crop_monocot = p38.crop((int(w * 0.62), int(h * 0.12), int(w * 0.88), int(h * 0.73)))
crop_monocot = trim_white(crop_monocot, pad=15)
crop_monocot.save("public/images/ncert/monocot-embryo.png", "PNG")
print("Saved monocot-embryo.png", crop_monocot.size)

# 5. MENSTRUAL CYCLE: Page 53 (index 52)
# Figure 3.9 Hormone curves and ovarian/uterine cycles
p53 = get_page(52)
w, h = p53.size
crop_menstrual = p53.crop((int(w * 0.16), int(h * 0.13), int(w * 0.88), int(h * 0.62)))
crop_menstrual = trim_white(crop_menstrual, pad=15)
crop_menstrual.save("public/images/ncert/menstrual-cycle.png", "PNG")
print("Saved menstrual-cycle.png", crop_menstrual.size)

# 6. BLASTOCYST & IMPLANTATION: Page 55 (index 54)
# Figure 3.11 Fertilisation, cleavage, morula, blastocyst implantation
p55 = get_page(54)
w, h = p55.size
crop_blast = p55.crop((int(w * 0.22), int(h * 0.46), int(w * 0.82), int(h * 0.86)))
crop_blast = trim_white(crop_blast, pad=15)
crop_blast.save("public/images/ncert/blastocyst.png", "PNG")
print("Saved blastocyst.png", crop_blast.size)

# 7. PLACENTA & FETUS IN UTERUS: Page 56 (index 55)
# Figure 3.12 The human foetus within the uterus
p56 = get_page(55)
w, h = p56.size
crop_placenta = p56.crop((int(w * 0.34), int(h * 0.56), int(w * 0.82), int(h * 0.86)))
crop_placenta = trim_white(crop_placenta, pad=15)
crop_placenta.save("public/images/ncert/placenta-fetus.png", "PNG")
print("Saved placenta-fetus.png", crop_placenta.size)

# 8. REPLICATING FORK: Page 110 (index 109)
# Figure 6.8 Replicating Fork
p110 = get_page(109)
w, h = p110.size
crop_fork = p110.crop((int(w * 0.52), int(h * 0.12), int(w * 0.86), int(h * 0.43)))
crop_fork = trim_white(crop_fork, pad=15)
crop_fork.save("public/images/ncert/replicating-fork.png", "PNG")
print("Saved replicating-fork.png", crop_fork.size)

# 9. TRANSCRIPTION UNIT: Page 111 (index 110)
# Figure 6.9 Schematic structure of a transcription unit
p111 = get_page(110)
w, h = p111.size
crop_tu = p111.crop((int(w * 0.16), int(h * 0.39), int(w * 0.85), int(h * 0.57)))
crop_tu = trim_white(crop_tu, pad=15)
crop_tu.save("public/images/ncert/transcription-unit.png", "PNG")
print("Saved transcription-unit.png", crop_tu.size)

# 10. TRANSCRIPTION IN PROKARYOTES: Page 112 (index 111)
# Figure 6.10 Process of Transcription in Bacteria
p112 = get_page(111)
w, h = p112.size
crop_tp = p112.crop((int(w * 0.14), int(h * 0.57), int(w * 0.70), int(h * 0.87)))
crop_tp = trim_white(crop_tp, pad=15)
crop_tp.save("public/images/ncert/transcription-prokaryotes.png", "PNG")
print("Saved transcription-prokaryotes.png", crop_tp.size)

# 11. LAC OPERON: Page 120 (index 119)
# Figure 6.14 The lac Operon
p120 = get_page(119)
w, h = p120.size
crop_lac = p120.crop((int(w * 0.16), int(h * 0.13), int(w * 0.82), int(h * 0.48)))
crop_lac = trim_white(crop_lac, pad=15)
crop_lac.save("public/images/ncert/lac-operon.png", "PNG")
print("Saved lac-operon.png", crop_lac.size)

# 12. MILLER-UREY EXPERIMENT: Page 131 (index 130)
# Figure 7.1 Miller's experiment
p131 = get_page(130)
w, h = p131.size
crop_miller = p131.crop((int(w * 0.36), int(h * 0.12), int(w * 0.85), int(h * 0.48)))
crop_miller = trim_white(crop_miller, pad=15)
crop_miller.save("public/images/ncert/miller-urey.png", "PNG")
print("Saved miller-urey.png", crop_miller.size)

# 13. HOMOLOGOUS ORGANS: Page 134 (index 133)
# Figure 7.3 Homologous organs in plants and animals
p134 = get_page(133)
w, h = p134.size
crop_homolog = p134.crop((int(w * 0.44), int(h * 0.12), int(w * 0.88), int(h * 0.70)))
crop_homolog = trim_white(crop_homolog, pad=15)
crop_homolog.save("public/images/ncert/homologous-analogous.png", "PNG")
print("Saved homologous-analogous.png", crop_homolog.size)

# 14. HARDY-WEINBERG NATURAL SELECTION: Page 139 (index 138)
# Figure 7.8 Operation of natural selection
p139 = get_page(138)
w, h = p139.size
# Crop just the inner rounded diagram box: x=0.21 to 0.88, y=0.33 to 0.85
crop_hw = p139.crop((int(w * 0.21), int(h * 0.33), int(w * 0.88), int(h * 0.85)))
crop_hw = trim_white(crop_hw, pad=15)
crop_hw.save("public/images/ncert/hardy-weinberg-selection.png", "PNG")
print("Saved hardy-weinberg-selection.png", crop_hw.size)

# 15. ANTIBODY MOLECULE: Page 154 (index 153)
# Figure 8.4 Structure of an antibody molecule
p154 = get_page(153)
w, h = p154.size
crop_ab = p154.crop((int(w * 0.37), int(h * 0.38), int(w * 0.86), int(h * 0.69)))
crop_ab = trim_white(crop_ab, pad=15)
crop_ab.save("public/images/ncert/antibody-molecule.png", "PNG")
print("Saved antibody-molecule.png", crop_ab.size)

# 16. HIV LIFECYCLE (REPLICATION OF RETROVIRUS): Page 158 (index 157)
# Figure 8.6 Replication of retrovirus
p158 = get_page(157)
w, h = p158.size
crop_hiv = p158.crop((int(w * 0.18), int(h * 0.13), int(w * 0.80), int(h * 0.69)))
crop_hiv = trim_white(crop_hiv, pad=15)
crop_hiv.save("public/images/ncert/hiv-lifecycle.png", "PNG")
print("Saved hiv-lifecycle.png", crop_hiv.size)

print("Done! All 16 diagrams refined.")
