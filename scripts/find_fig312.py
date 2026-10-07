from PIL import Image

im = Image.open("tmp_ncert/pages/page_57_placenta_fetus.png")
print("Size:", im.size)
# Figure 3.12 is on this page! Let's crop different vertical segments to locate it precisely
w, h = im.size
# Let's crop y from 0.5 to 1.0, x from 0.3 to 0.95
crop1 = im.crop((int(w * 0.30), int(h * 0.50), int(w * 0.95), int(h * 0.95)))
crop1.save("tmp_ncert/pages/p57_bottom_right.png")
print("Saved p57_bottom_right.png")
