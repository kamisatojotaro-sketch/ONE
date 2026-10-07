from PIL import Image

def clean_edges(path, left_crop=0, right_crop=0, top_crop=0, bottom_crop=0):
    im = Image.open(path)
    w, h = im.size
    box = (left_crop, top_crop, w - right_crop, h - bottom_crop)
    cropped = im.crop(box)
    cropped.save(path)
    print(f"Cleaned {path}: {im.size} -> {cropped.size}")

# 1. placenta-fetus: remove left text sliver and bottom-right page number
im = Image.open("public/images/ncert/placenta-fetus.png")
# Let's crop out the left text column and the right page number
w, h = im.size
crop_pf = im.crop((int(w * 0.05), 0, int(w * 0.94), h))
crop_pf.save("public/images/ncert/placenta-fetus.png")

# 2. replicating-fork: remove left text letters
im = Image.open("public/images/ncert/replicating-fork.png")
w, h = im.size
crop_rf = im.crop((int(w * 0.06), 0, w, h))
crop_rf.save("public/images/ncert/replicating-fork.png")

# 3. menstrual-cycle: remove top-left stray arc
im = Image.open("public/images/ncert/menstrual-cycle.png")
w, h = im.size
crop_mc = im.crop((0, int(h * 0.04), w, h))
crop_mc.save("public/images/ncert/menstrual-cycle.png")

# 4. hardy-weinberg-selection: remove bottom-left page box
im = Image.open("public/images/ncert/hardy-weinberg-selection.png")
w, h = im.size
crop_hw = im.crop((int(w * 0.02), 0, w, int(h * 0.97)))
crop_hw.save("public/images/ncert/hardy-weinberg-selection.png")

# 5. pollen-grain: remove left SEM photo edge
im = Image.open("public/images/ncert/pollen-grain.png")
w, h = im.size
crop_pg = im.crop((int(w * 0.08), 0, w, h))
crop_pg.save("public/images/ncert/pollen-grain.png")
crop_pg.save("public/images/ncert/microspore-pollen.png")

print("Edge cleanups completed!")
