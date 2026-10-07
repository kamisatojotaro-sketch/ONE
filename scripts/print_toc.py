import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
print("=== PAGE 2 ===")
print(doc[1].get_text())
print("=== PAGE 3 ===")
print(doc[2].get_text())
