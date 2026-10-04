# -*- coding: utf-8 -*-
"""
Cleans physicsNotes.js:
1. Removes raw ** asterisks on both ends of headings across all derivations.
2. Updates phy-sub-7-8 to '7.8 Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms'.
3. Injects comprehensive step-by-step derivations for both I_rms and E_rms and I_mean.
4. Marks all handwritten important subchapters and sections with isImportant: true and examTag.
"""

import json
import re
import os

target_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..",
    "src",
    "data",
    "physicsNotes.js"
)
target_path = os.path.abspath(target_path)

content = open(target_path, "r", encoding="utf-8").read()
m = re.search(r"export const PHYSICS_CHAPTERS = (\[.*\]);", content, re.DOTALL)
if not m:
    print("Could not find PHYSICS_CHAPTERS")
    exit(1)

chapters = json.loads(m.group(1))

# Load handwritten important mappings
from important_subtopics_data import HANDWRITTEN_IMPORTANT_SUBTOPICS

clean_heading_pattern = re.compile(r"\*\*([^\*\n]+?)\*\*")

rms_full_derivation = (
    "Part 1: Physical Definition & Joule Heating Equivalence\n"
    "The Root-Mean-Square (RMS) or virtual/effective value of alternating current is defined as that value of steady direct current (DC) which would generate the same amount of heat in a given resistor in a given time as is produced by the AC passing through the same resistor for the same time (one complete cycle period $T$).\n\n"
    "Average value over full cycle: $\\langle I \\rangle_{\\text{cycle}} = \\frac{1}{T}\\int_0^T I_0\\sin(\\omega t) dt = 0$. Hence arithmetic average cannot rate AC power.\n"
    "Joule heating depends on $I^2 R$, which is strictly non-negative at all times.\n\n"
    "Part 2: Step-by-Step Derivation of I_rms = I₀ / √2\n"
    "Step 1 (Instantaneous Heat): Let alternating current be $I(t) = I_0 \\sin(\\omega t)$. In an infinitesimal time interval $dt$, the heat produced in resistor $R$ is:\n"
    "$$dH = I^2 R \\, dt = I_0^2 R \\sin^2(\\omega t) \\, dt$$\n\n"
    "Step 2 (Integration over One Full Cycle): Total heat produced over period $T = 2\\pi/\\omega$:\n"
    "$$H = \\int_0^T I_0^2 R \\sin^2(\\omega t) \\, dt = I_0^2 R \\int_0^T \\frac{1 - \\cos(2\\omega t)}{2} \\, dt$$\n"
    "$$H = \\frac{I_0^2 R}{2} \\left[ \\int_0^T dt - \\int_0^T \\cos(2\\omega t) \\, dt \\right]$$\n\n"
    "Step 3 (Evaluating Integrals): The first integral gives $\\int_0^T dt = T$. The second integral vanishes identically:\n"
    "$$\\int_0^T \\cos(2\\omega t) \\, dt = \\left[ \\frac{\\sin(2\\omega t)}{2\\omega} \\right]_0^T = \\frac{\\sin(4\\pi) - \\sin(0)}{2\\omega} = 0$$\n"
    "Therefore, total heat produced is:\n"
    "$$H = \\frac{I_0^2 R T}{2}$$\n\n"
    "Step 4 (Equating to DC Thermal Equivalent): If steady DC current $I_{\\text{rms}}$ produces the exact same heat $H$ in resistance $R$ in time $T$:\n"
    "$$H = I_{\\text{rms}}^2 R T$$\n"
    "$$I_{\\text{rms}}^2 R T = \\frac{I_0^2 R T}{2} \\implies I_{\\text{rms}}^2 = \\frac{I_0^2}{2}$$\n\n"
    "Step 5 (Final Formula): Taking square root on both sides:\n"
    "$$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 \\, I_0$$\n\n"
    "Part 3: Derivation of Alternating EMF (E_rms = E₀ / √2)\n"
    "Let alternating EMF be $E(t) = E_0 \\sin(\\omega t)$. Power dissipated across resistance $R$ is $P(t) = \\frac{E^2(t)}{R}$.\n"
    "Total heat produced in one complete period $T$ is:\n"
    "$$H = \\int_0^T \\frac{E^2(t)}{R} \\, dt = \\frac{E_0^2}{R} \\int_0^T \\sin^2(\\omega t) \\, dt = \\frac{E_0^2}{R} \\left(\\frac{T}{2}\\right) = \\frac{E_0^2 T}{2R}$$\n"
    "Equating to equivalent steady DC voltage $E_{\\text{rms}}$:\n"
    "$$H = \\frac{E_{\\text{rms}}^2 T}{R} \\implies \\frac{E_{\\text{rms}}^2 T}{R} = \\frac{E_0^2 T}{2R} \\implies E_{\\text{rms}} = \\frac{E_0}{\\sqrt{2}} \\approx 0.707 \\, E_0$$\n"
    "Domestic Supply Note: Standard $220\\text{ V}$ household supply is $V_{\\text{rms}} = 220\\text{ V}$. Peak amplitude is:\n"
    "$$V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311.13\\text{ V}$$\n\n"
    "Part 4: Mean / Average Value of AC over Half-Cycle\n"
    "Over positive half-cycle ($t = 0$ to $t = T/2$):\n"
    "$$I_{\\text{mean}} = \\frac{1}{T/2} \\int_0^{T/2} I_0 \\sin(\\omega t) \\, dt = \\frac{2 I_0}{T} \\left[ -\\frac{\\cos(\\omega t)}{\\omega} \\right]_0^{T/2} = \\frac{2 I_0}{\\omega T} [-\\cos(\\pi) + \\cos(0)] = \\frac{2 I_0}{2\\pi} [1 + 1] = \\frac{2 I_0}{\\pi} \\approx 0.637 \\, I_0$$"
)

# Process all chapters, subchapters, and sections
updated_count = 0
important_marked_count = 0

for ch in chapters:
    for sub in ch.get("subchapters", []):
        sub_id = sub.get("id")
        
        # Check if important
        if sub_id in HANDWRITTEN_IMPORTANT_SUBTOPICS:
            info = HANDWRITTEN_IMPORTANT_SUBTOPICS[sub_id]
            sub["isImportant"] = True
            sub["examTag"] = info["examTag"]
            sub["importantReason"] = info["reason"]
            important_marked_count += 1
            
            # If sub-7-8, rename title
            if sub_id == "phy-sub-7-8":
                sub["title"] = "7.8 Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms"

        for sec in sub.get("sections", []):
            if sub_id in HANDWRITTEN_IMPORTANT_SUBTOPICS:
                info = HANDWRITTEN_IMPORTANT_SUBTOPICS[sub_id]
                sec["isImportant"] = True
                sec["examTag"] = info["examTag"]
            
            # If sec-7-8, update title and derivation
            if sec.get("id") == "phy-sec-7-8":
                sec["title"] = "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms"
                sec["derivations"] = rms_full_derivation
                updated_count += 1
            elif "derivations" in sec and sec["derivations"]:
                # Clean any raw ** asterisks from headings in derivations
                cleaned = clean_heading_pattern.sub(r"\1", sec["derivations"])
                sec["derivations"] = cleaned
                updated_count += 1

out_code = f"// Full Granular NCERT Class 12 Physics High-Yield Notes\n// Enriched with Step-by-Step Textbook Derivations & Handwritten Exam Priority Markers\n\nexport const PHYSICS_CHAPTERS = {json.dumps(chapters, indent=2, ensure_ascii=False)};\n"

with open(target_path, "w", encoding="utf-8") as f:
    f.write(out_code)

print(f"Successfully cleaned derivations and updated {updated_count} sections!")
print(f"Marked {important_marked_count} subchapters as Important from handwritten notes.")
