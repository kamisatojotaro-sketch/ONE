import os
import glob

print("--- Searching in public/ ---")
for f in glob.glob("public/**/*", recursive=True):
    if any(f.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp']):
        print(f)

print("\n--- Searching in src/ ---")
for f in glob.glob("src/**/*", recursive=True):
    if any(f.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp']):
        print(f)

print("\n--- Uploaded images in brain ---")
brain_uploads = r"C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.user_uploaded"
if os.path.exists(brain_uploads):
    for f in os.listdir(brain_uploads):
        if any(f.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.webp']):
            print(f, os.path.getsize(os.path.join(brain_uploads, f)), "bytes")
