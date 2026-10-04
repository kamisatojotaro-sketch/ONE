# -*- coding: utf-8 -*-
"""
Merges newly compiled Physics structured notes into src/data/structuredNotesData.js
Preserves all existing Chemistry notes and ensures zero syntax errors.
"""

import json
import re
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from physics_structured_ch1_ch2 import ch1_ch2_data
from physics_structured_ch3_ch4 import ch3_ch4_data
from physics_structured_ch5_ch6 import ch5_ch6_data
from physics_structured_ch7_ch8 import ch7_ch8_data

all_physics_notes = {}
all_physics_notes.update(ch1_ch2_data)
all_physics_notes.update(ch3_ch4_data)
all_physics_notes.update(ch5_ch6_data)
all_physics_notes.update(ch7_ch8_data)

print(f"Total physics subtopics to inject: {len(all_physics_notes)}")

target_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..",
    "src",
    "data",
    "structuredNotesData.js"
)
target_path = os.path.abspath(target_path)

content = open(target_path, "r", encoding="utf-8").read()

# Locate export const STRUCTURED_NOTES_DATA = {
match = re.search(r'export const STRUCTURED_NOTES_DATA = ({[\s\S]*});?\s*$', content)
if not match:
    print("Could not match STRUCTURED_NOTES_DATA in file!")
    sys.exit(1)

raw_obj_str = match.group(1)

# Let's use node to safely parse the existing object and merge the new keys
# Writing temporary node merge script
node_script_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "do_merge.mjs")

temp_json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "new_physics.json")
with open(temp_json_path, "w", encoding="utf-8") as f:
    json.dump(all_physics_notes, f, indent=2, ensure_ascii=False)

node_merge_code = f"""
import fs from 'fs';
import path from 'path';
import {{ STRUCTURED_NOTES_DATA }} from '../src/data/structuredNotesData.js';

const newPhysics = JSON.parse(fs.readFileSync({json.dumps(temp_json_path)}, 'utf8'));

const merged = {{
  ...STRUCTURED_NOTES_DATA,
  ...newPhysics
}};

const outContent = `// NCERT Class 12 Structured Notes Database\\n// Enhanced with Oswaal-grade study aids: Mnemonics, Commonly Made Errors, CBSE Assertion-Reason, and Exam Trends\\n// Covers all active subtopics across Physics & Chemistry Chapters\\n\\nexport const STRUCTURED_NOTES_DATA = ${{JSON.stringify(merged, null, 2)}};\\n`;

fs.writeFileSync({json.dumps(target_path)}, outContent, 'utf8');
console.log('Successfully merged! Total keys in STRUCTURED_NOTES_DATA:', Object.keys(merged).length);
"""

with open(node_script_path, "w", encoding="utf-8") as f:
    f.write(node_merge_code)

print("Generated node merge script, ready to run.")
