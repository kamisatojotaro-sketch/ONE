import fitz
from PIL import Image, ImageChops
import os

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
os.makedirs("public/images/ncert", exist_ok=True)

# 3.0x zoom matrix for crisp rendering
matrix = fitz.Matrix(3.0, 3.0)

def trim_white_borders(im, tolerance=240):
    # trim white border around cropped image
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        # add 15px padding
        w, h = im.size
        l = max(0, bbox[0] - 15)
        t = max(0, bbox[1] - 15)
        r = min(w, bbox[2] + 15)
        b = min(h, bbox[3] + 15)
        return im.crop((l, t, r, b))
    return im

def get_page_img(page_idx):
    pix = doc[page_idx].get_pixmap(matrix=matrix)
    return Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

print("Starting diagram extractions...")

# 1. Embryo Sac: Page 29 (0-indexed 28)
# On page 29: Figure 2.8.
# (c) is the mature embryo sac on the bottom right; (b) is stages of development
p29 = get_page_img(28)
# Coordinates in normalized fraction:
# let's crop the whole Figure 2.8 (b) & (c) or mature embryo sac
# Figure 2.8 sits between y=0.30 and y=0.68, x=0.15 and x=0.90
w, h = p29.size
# Let's crop mature embryo sac (c) and development (b)
crop_embryo_sac = p29.crop((int(w * 0.12), int(h * 0.31), int(w * 0.90), int(h * 0.65)))
crop_embryo_sac = trim_white_borders(crop_embryo_sac)
crop_embryo_sac.save("public/images/ncert/embryo-sac.png", "PNG")
print("Saved public/images/ncert/embryo-sac.png", crop_embryo_sac.size)

# 2. Megasporangium (Anatropous Ovule): Page 28 (0-indexed 27)
# Figure 2.7 (d) is Anatropous ovule, (b) and (c) are syncarpous & apocarpous pistils
p28 = get_page_img(27)
w, h = p28.size
# Figure 2.7 sits between y=0.12 and y=0.52
# Let's crop (b), (c), (d) or (d) Anatropous ovule
crop_ovule = p28.crop((int(w * 0.50), int(h * 0.12), int(w * 0.88), int(h * 0.46)))
crop_ovule = trim_white_borders(crop_ovule)
crop_ovule.save("public/images/ncert/megasporangium.png", "PNG")
print("Saved public/images/ncert/megasporangium.png", crop_ovule.size)

# Also let's save apocarpous vs syncarpous if needed
crop_carpel = p28.crop((int(w * 0.12), int(h * 0.12), int(w * 0.88), int(h * 0.53)))
crop_carpel = trim_white_borders(crop_carpel)
crop_carpel.save("public/images/ncert/apocarpous-syncarpous.png", "PNG")
print("Saved public/images/ncert/apocarpous-syncarpous.png", crop_carpel.size)

# 3. Pollen grain & Microspore maturation: Page 26 (0-indexed 25)
# Figure 2.5 on the right side: tetrad and microspore maturing into pollen grain
p26 = get_page_img(25)
w, h = p26.size
crop_pollen = p26.crop((int(w * 0.58), int(h * 0.18), int(w * 0.90), int(h * 0.75)))
crop_pollen = trim_white_borders(crop_pollen)
crop_pollen.save("public/images/ncert/pollen-grain.png", "PNG")
crop_pollen.save("public/images/ncert/microspore-pollen.png", "PNG")
print("Saved public/images/ncert/pollen-grain.png", crop_pollen.size)

# 4. Monocot Embryo (Grass LS) & Dicot Embryo: Page 38 (0-indexed 37)
# Figure 2.14 sits on the right side
p38 = get_page_img(37)
w, h = p38.size
crop_embryo = p38.crop((int(w * 0.60), int(h * 0.12), int(w * 0.90), int(h * 0.72)))
crop_embryo = trim_white_borders(crop_embryo)
crop_embryo.save("public/images/ncert/monocot-embryo.png", "PNG")
print("Saved public/images/ncert/monocot-embryo.png", crop_embryo.size)

# 5. Menstrual Cycle Hormone Chart: Page 53 (0-indexed 52)
# Figure 3.9 sits between y=0.12 and y=0.62, full width
p53 = get_page_img(52)
w, h = p53.size
crop_menstrual = p53.crop((int(w * 0.16), int(h * 0.12), int(w * 0.88), int(h * 0.62)))
crop_menstrual = trim_white_borders(crop_menstrual)
crop_menstrual.save("public/images/ncert/menstrual-cycle.png", "PNG")
print("Saved public/images/ncert/menstrual-cycle.png", crop_menstrual.size)

# 6. Blastocyst development & Implantation: Page 55 (0-indexed 54)
# Figure 3.11 sits between y=0.45 and y=0.86
p55 = get_page_img(54)
w, h = p55.size
crop_blastocyst = p55.crop((int(w * 0.22), int(h * 0.46), int(w * 0.82), int(h * 0.86)))
crop_blastocyst = trim_white_borders(crop_blastocyst)
crop_blastocyst.save("public/images/ncert/blastocyst.png", "PNG")
print("Saved public/images/ncert/blastocyst.png", crop_blastocyst.size)

# 7. Placenta and Fetus in Uterus: Page 57 (0-indexed 56)
# Figure 3.12 sits between y=0.56 and y=0.86
p57 = get_page_img(56)
w, h = p57.size
crop_placenta = p57.crop((int(w * 0.34), int(h * 0.56), int(w * 0.82), int(h * 0.86)))
crop_placenta = trim_white_borders(crop_placenta)
crop_placenta.save("public/images/ncert/placenta-fetus.png", "PNG")
print("Saved public/images/ncert/placenta-fetus.png", crop_placenta.size)

# 8. Replicating Fork: Page 110 (0-indexed 109)
# Figure 6.8 sits on right side between y=0.12 and y=0.44
p110 = get_page_img(109)
w, h = p110.size
crop_fork = p110.crop((int(w * 0.50), int(h * 0.12), int(w * 0.88), int(h * 0.44)))
crop_fork = trim_white_borders(crop_fork)
crop_fork.save("public/images/ncert/replicating-fork.png", "PNG")
print("Saved public/images/ncert/replicating-fork.png", crop_fork.size)

# 9. Transcription Unit: Page 111 (0-indexed 110)
# Figure 6.9 sits in the middle between y=0.38 and y=0.56
p111 = get_page_img(110)
w, h = p111.size
crop_trans_unit = p111.crop((int(w * 0.15), int(h * 0.39), int(w * 0.86), int(h * 0.57)))
crop_trans_unit = trim_white_borders(crop_trans_unit)
crop_trans_unit.save("public/images/ncert/transcription-unit.png", "PNG")
print("Saved public/images/ncert/transcription-unit.png", crop_trans_unit.size)

# 10. Transcription in Prokaryotes / Bacteria: Page 112 (0-indexed 111)
# Figure 6.10 sits between y=0.57 and y=0.86
p112 = get_page_img(111)
w, h = p112.size
crop_trans_proc = p112.crop((int(w * 0.15), int(h * 0.56), int(w * 0.70), int(h * 0.86)))
crop_trans_proc = trim_white_borders(crop_trans_proc)
crop_trans_proc.save("public/images/ncert/transcription-prokaryotes.png", "PNG")
print("Saved public/images/ncert/transcription-prokaryotes.png", crop_trans_proc.size)

# 11. Lac Operon: Page 120 (0-indexed 119)
# Figure 6.14 sits between y=0.12 and y=0.48
p120 = get_page_img(119)
w, h = p120.size
crop_lac = p120.crop((int(w * 0.15), int(h * 0.13), int(w * 0.82), int(h * 0.49)))
crop_lac = trim_white_borders(crop_lac)
crop_lac.save("public/images/ncert/lac-operon.png", "PNG")
print("Saved public/images/ncert/lac-operon.png", crop_lac.size)

# 12. Miller-Urey Experiment: Page 131 (0-indexed 130)
# Figure 7.1 sits between y=0.12 and y=0.48
p131 = get_page_img(130)
w, h = p131.size
crop_miller = p131.crop((int(w * 0.35), int(h * 0.12), int(w * 0.85), int(h * 0.48)))
crop_miller = trim_white_borders(crop_miller)
crop_miller.save("public/images/ncert/miller-urey.png", "PNG")
print("Saved public/images/ncert/miller-urey.png", crop_miller.size)

# 13. Homologous Organs (Bougainvillea/Cucurbita & Forelimbs): Page 134 (0-indexed 133)
# Figure 7.3 sits on the right side between y=0.12 and y=0.70
p134 = get_page_img(133)
w, h = p134.size
crop_homolog = p134.crop((int(w * 0.44), int(h * 0.12), int(w * 0.88), int(h * 0.70)))
crop_homolog = trim_white_borders(crop_homolog)
crop_homolog.save("public/images/ncert/homologous-analogous.png", "PNG")
print("Saved public/images/ncert/homologous-analogous.png", crop_homolog.size)

# 14. Operation of Natural Selection (Hardy-Weinberg): Page 139 (0-indexed 138)
# Figure 7.8 sits in the box between y=0.32 and y=0.86
p139 = get_page_img(138)
w, h = p139.size
crop_nat_sel = p139.crop((int(w * 0.20), int(h * 0.33), int(w * 0.88), int(h * 0.86)))
crop_nat_sel = trim_white_borders(crop_nat_sel)
crop_nat_sel.save("public/images/ncert/hardy-weinberg-selection.png", "PNG")
print("Saved public/images/ncert/hardy-weinberg-selection.png", crop_nat_sel.size)

# 15. Antibody Molecule: Page 154 (0-indexed 153)
# Figure 8.4 sits in the box between y=0.38 and y=0.69
p154 = get_page_img(153)
w, h = p154.size
crop_antibody = p154.crop((int(w * 0.37), int(h * 0.38), int(w * 0.86), int(h * 0.69)))
crop_antibody = trim_white_borders(crop_antibody)
crop_antibody.save("public/images/ncert/antibody-molecule.png", "PNG")
print("Saved public/images/ncert/antibody-molecule.png", crop_antibody.size)

# 16. HIV Lifecycle (Replication of Retrovirus): Page 158 (0-indexed 157)
# Figure 8.6 sits in the box between y=0.13 and y=0.69
p158 = get_page_img(157)
w, h = p158.size
crop_hiv = p158.crop((int(w * 0.18), int(h * 0.13), int(w * 0.80), int(h * 0.69)))
crop_hiv = trim_white_borders(crop_hiv)
crop_hiv.save("public/images/ncert/hiv-lifecycle.png", "PNG")
print("Saved public/images/ncert/hiv-lifecycle.png", crop_hiv.size)

print("All diagrams cropped and saved successfully!")
