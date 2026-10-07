import os

pdf_path = r'C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.user_uploaded/media_1791301762650.pdf'

try:
    import pypdf
    reader = pypdf.PdfReader(pdf_path)
    print("pypdf available! Pages:", len(reader.pages))
    for i in range(min(5, len(reader.pages))):
        print(f"--- Page {i+1} ---")
        print(reader.pages[i].extract_text()[:400])
except Exception as e:
    print("pypdf error or not installed:", e)
    # try pypdf2 or fitz or pdfplumber
    try:
        import fitz
        doc = fitz.open(pdf_path)
        print("fitz available! Pages:", len(doc))
        for i in range(min(5, len(doc))):
            print(f"--- Page {i+1} ---")
            print(doc[i].get_text()[:400])
    except Exception as e2:
        print("fitz error:", e2)
