from PIL import Image

try:
    im1 = Image.open("public/images/ncert/blastocyst.png")
    print("blastocyst size:", im1.size)
except Exception as e:
    print("blastocyst error:", e)

try:
    im2 = Image.open("public/images/ncert/placenta-fetus.png")
    print("placenta-fetus size:", im2.size)
except Exception as e:
    print("placenta-fetus error:", e)
