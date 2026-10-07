import fitz

uploads = [
    'media_1791097346127.pdf',
    'media_1791097346168.pdf'
]

for name in uploads:
    path = r'C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.user_uploaded/' + name
    try:
        doc = fitz.open(path)
        print(f"=== {name} (Pages: {len(doc)}) ===")
        for i in range(min(3, len(doc))):
            text = doc[i].get_text()[:250].encode('ascii', errors='ignore').decode('ascii')
            print(f"Page {i+1}: {text.strip()[:150]}")
    except Exception as e:
        print(name, "error:", e)
