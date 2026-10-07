from PIL import Image

im = Image.open("public/images/ncert/microsporangium-walls.jpg")
thumb = im.resize((800, int(800 * im.height / im.width)))
thumb.save("public/images/ncert/microsporangium-walls-thumb.jpg", quality=85)
print("Thumbnail saved at (800, {})".format(thumb.height))
