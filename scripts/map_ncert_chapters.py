import fitz

doc = fitz.open("tmp_ncert/ncert_full_class12.pdf")
print("Total pages:", len(doc))

# Let's search for some chapter titles or figures to map out page numbers
keywords = [
    "REPRODUCTION IN ORGANISMS",
    "SEXUAL REPRODUCTION IN FLOWERING PLANTS",
    "HUMAN REPRODUCTION",
    "REPRODUCTIVE HEALTH",
    "PRINCIPLES OF INHERITANCE AND VARIATION",
    "MOLECULAR BASIS OF INHERITANCE",
    "EVOLUTION",
    "HUMAN HEALTH AND DISEASE",
    "STRATEGIES FOR ENHANCEMENT IN FOOD PRODUCTION",
    "MICROBES IN HUMAN WELFARE",
    "BIOTECHNOLOGY : PRINCIPLES AND PROCESSES",
    "BIOTECHNOLOGY AND ITS APPLICATIONS"
]

for kw in keywords:
    for page_num in range(len(doc)):
        text = doc[page_num].get_text()
        if kw.lower() in text.lower():
            print(f"Keyword '{kw}' found on PDF page {page_num + 1}")
            break
