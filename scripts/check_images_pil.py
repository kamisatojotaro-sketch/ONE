from PIL import Image
import os

brain_uploads = r"C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.user_uploaded"
for f in os.listdir(brain_uploads):
    if any(f.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg']):
        path = os.path.join(brain_uploads, f)
        try:
            im = Image.open(path)
            print(f"{f}: {im.size}, format: {im.format}")
        except Exception as e:
            print(f"{f}: error {e}")
