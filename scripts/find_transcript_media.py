import json
import os

transcript_path = r'C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.system_generated/logs/transcript.jsonl'
if os.path.exists(transcript_path):
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                obj = json.loads(line)
                if 'media' in obj:
                    for m in obj['media']:
                        print(obj.get('step_index'), m.get('uri'), obj.get('content', '')[:100].replace('\n', ' '))
            except Exception:
                pass
