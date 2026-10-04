# -*- coding: utf-8 -*-
"""
Assembler script that combines all 22 questions and outputs:
src/data/importantQuestionsData.js
"""

import json
import os
import sys

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from data_q1_to_q5 import questions_1_to_5
from data_q6_to_q11 import questions_6_to_11
from data_q12_to_q17 import questions_12_to_17
from data_q18_to_q22 import questions_18_to_22

raw_questions = questions_1_to_5 + questions_6_to_11 + questions_12_to_17 + questions_18_to_22

print(f"Total raw questions gathered: {len(raw_questions)}")

processed_questions = []

for q in raw_questions:
    # Build backward compatibility modelAnswer object
    statement = "\n".join(q.get("theory", []))
    back_derivations = []
    for d in q.get("derivations", []):
        d_steps = []
        if d.get("setup"):
            d_steps.append(d["setup"])
        for s in d.get("steps", []):
            if isinstance(s, dict):
                t = s.get("text", "")
                eq = s.get("equation", "")
                if t and eq:
                    d_steps.append(f"{t} {eq}")
                elif eq:
                    d_steps.append(eq)
                elif t:
                    d_steps.append(t)
            else:
                d_steps.append(str(s))
        for sc in d.get("specialCases", []):
            sc_line = f"{sc.get('title', '')} {sc.get('text', '')} {sc.get('equation', '')}".strip()
            if sc_line:
                d_steps.append(sc_line)

        back_derivations.append({
            "name": d.get("name", "Derivation"),
            "steps": d_steps,
            "formula": d.get("finalFormula", "")
        })

    diag_notes = "\n".join(q.get("diagram", {}).get("examDrawingGuide", []))

    q_copy = dict(q)
    q_copy["modelAnswer"] = {
        "statement": statement,
        "derivations": back_derivations,
        "diagramNotes": diag_notes,
        "markingScheme": q.get("markingScheme", []),
        "examinerTips": q.get("examinerTips", "")
    }
    processed_questions.append(q_copy)

# Verify count
assert len(processed_questions) == 22, f"Expected 22 questions, got {len(processed_questions)}"

# Output path
target_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..",
    "src",
    "data",
    "importantQuestionsData.js"
)
target_path = os.path.abspath(target_path)

js_content = "// Top 22 Guaranteed CBSE Class 12 Physics Board Exam Questions\n"
js_content += "// Rigorous Step-by-Step Derivations with Exact NCERT and NODIA References\n"
js_content += "// Formatted into 4 Distinct Parts: 1. Theory, 2. Derivations, 3. Diagram, 4. Key Points & Terms Glossary\n\n"
js_content += "export const IMPORTANT_PHYSICS_QUESTIONS = "
js_content += json.dumps(processed_questions, indent=2, ensure_ascii=False)
js_content += ";\n"

with open(target_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {target_path} with all 22 questions! File size: {os.path.getsize(target_path)} bytes.")
