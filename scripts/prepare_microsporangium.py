from PIL import Image

im = Image.open("public/images/ncert/microsporangium-walls.jpg")
print("Image width:", im.width, "height:", im.height)

# Let's inspect parts of this image or save cropped views
# If it has the anther TS, enlarged microsporangium, etc.
im.thumbnail((1200, 1200))
im.save("public/images/ncert/microsporangium-walls.png", "PNG")
print("Saved public/images/ncert/microsporangium-walls.png")
