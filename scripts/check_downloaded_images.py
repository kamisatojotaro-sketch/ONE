import os

ncert_dir = "public/images/ncert"
for f in os.listdir(ncert_dir):
    p = os.path.join(ncert_dir, f)
    with open(p, "rb") as fl:
        header = fl.read(30)
    print(f, os.path.getsize(p), "bytes, header:", header[:15])
