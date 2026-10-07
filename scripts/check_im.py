from PIL import Image

im = Image.open("public/images/ncert/microsporangium-walls.jpg")
print("Image size:", im.size, "format:", im.format)
