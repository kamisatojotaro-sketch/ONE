// Complete 53 Important Class 12 Physics NCERT Numericals (Chapters 9–14, Rationalized CBSE 2026)
// Replaces previous Top-22 list; organized by NCERT Examples & Exercises across Ray Optics,
// Wave Optics, Dual Nature, Atoms, Nuclei, and Semiconductor Electronics.

export const IMPORTANT_PHYSICS_QUESTIONS = [
  {
    "id": "imp-phy-9-ex2",
    "title": "Non-Uniform Longitudinal & Lateral Magnification of a Mobile Phone on a Concave Mirror Axis",
    "shortLabel": "Ex 9.2: Mobile Phone Concave Mirror Image",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 9.2",
    "subtopicId": "phy-sub-9-1",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical / Conceptual",
    "frequency": "94% Frequency (NCERT Conceptual Mirror Favourite)",
    "questionPrompt": "A mobile phone lies along the principal axis of a concave mirror as shown in Fig. 9.7. Show by suitable diagram, the formation of its image. Explain why the magnification is not uniform. Will the distortion of image depend on the location of the phone with respect to the mirror?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Example 9.2 (Reflection by Spherical Mirrors)",
      "equations": "1/v + 1/u = 1/f;  m = -v/u = f/(f - u)",
      "figures": "Fig. 9.7",
      "summary": "Explains why a finite object lying along the principal axis undergoes position-dependent lateral magnification m = f/(f-u)."
    },
    "theory": [
      "For a spherical concave mirror, transverse (lateral) magnification is given by $m = -\\frac{v}{u} = \\frac{f}{f - u}$, which depends explicitly on the object distance $u$ from the pole $P$.",
      "Since the mobile phone has finite length lying *along* the principal axis, different parts along its length are at different distances $u$ from the mirror and therefore suffer different transverse magnifications."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Analysis & Image Construction (Example 9.2)",
        "setup": "Place end $A$ (farther end) at or beyond $C$, and end $B$ (nearer end) between $C$ and $F$ (or examine end $B$ at $C$, $v_B = -C$, $m_B = -1$).",
        "steps": [
          {
            "text": "Using the mirror equation $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$, express magnification strictly in terms of $u$ and $f$:",
            "equation": "m = -\\frac{v}{u} = \\frac{f}{f - u}"
          },
          {
            "text": "The plane/end of the phone at the centre of curvature ($u_B = 2f = -R$) forms an inverted image of the exact same size ($m = -1$) at $C$ itself."
          },
          {
            "text": "Other portions lying farther than $C$ ($|u| > 2f$) form diminished inverted images ($|m| < 1$) closer to $F$, whereas parts lying between $C$ and $F$ ($f < |u| < 2f$) form magnified inverted images ($|m| > 1$) beyond $C$."
          },
          {
            "text": "Because $|m|$ varies continuously along the body, a uniform rectangular phone is imaged as a non-uniformly tapered/distorted shape — and moving the phone shifts $|u|$, changing distortion severely near $F$."
          }
        ],
        "finalFormula": "m(u) = \\frac{f}{f - u} \\; (\\text{Non-uniform along axis} \\implies \\text{Image distortion depends on location})",
        "specialCases": [
          "At $u = -2f$ (centre of curvature): $|m| = 1$ (no distortion of height at that cross-section).",
          "Placing any part inside $F$ ($|u| < |f|$) flips part of the image to virtual and erect on the opposite side of the mirror."
        ]
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Concave Mirror Ray Geometry",
      "examDrawingGuide": [
        "Draw rays from end at C returning to C (same height) and rays from portions beyond/inside C."
      ]
    },
    "keyPointsAndKeywords": [
      "m = f/(f - u)",
      "Position-dependent magnification",
      "Centre of Curvature self-image m = -1",
      "Location-dependent distortion"
    ],
    "termsGlossary": [
      {
        "symbol": "m",
        "term": "Lateral Magnification",
        "definition": "Ratio of image height to object height: $m = h_i/h_o = -v/u = f/(f-u)$."
      }
    ],
    "markingScheme": [
      "1 Mark: Neat ray diagram showing at least two locations along the mobile phone (e.g., one end at C).",
      "1 Mark: Explaining non-uniform magnification using $m = f/(f - u)$.",
      "1 Mark: Stating 'Yes, distortion depends strongly on the location of the phone relative to $F$ and $C$'."
    ],
    "examinerTips": "Make sure the image end corresponding to the part at C meets the phone right at C with equal height inverted downwards!",
    "number": 1,
    "modelAnswer": {
      "statement": "For a spherical concave mirror, transverse (lateral) magnification is given by $m = -\\frac{v}{u} = \\frac{f}{f - u}$, which depends explicitly on the object distance $u$ from the pole $P$.\nSince the mobile phone has finite length lying *along* the principal axis, different parts along its length are at different distances $u$ from the mirror and therefore suffer different transverse magnifications.",
      "derivations": [
        {
          "name": "Step-by-Step Analysis & Image Construction (Example 9.2)",
          "steps": [
            "Using the mirror equation $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$, express magnification strictly in terms of $u$ and $f$: m = -\\frac{v}{u} = \\frac{f}{f - u}",
            "The plane/end of the phone at the centre of curvature ($u_B = 2f = -R$) forms an inverted image of the exact same size ($m = -1$) at $C$ itself.",
            "Other portions lying farther than $C$ ($|u| > 2f$) form diminished inverted images ($|m| < 1$) closer to $F$, whereas parts lying between $C$ and $F$ ($f < |u| < 2f$) form magnified inverted images ($|m| > 1$) beyond $C$.",
            "Because $|m|$ varies continuously along the body, a uniform rectangular phone is imaged as a non-uniformly tapered/distorted shape — and moving the phone shifts $|u|$, changing distortion severely near $F$."
          ],
          "formula": "m(u) = \\frac{f}{f - u} \\; (\\text{Non-uniform along axis} \\implies \\text{Image distortion depends on location})"
        }
      ],
      "conclusion": "Make sure the image end corresponding to the part at C meets the phone right at C with equal height inverted downwards!"
    }
  },
  {
    "id": "imp-phy-9-ex4",
    "title": "Speed of Image of Approaching Jogger in a Convex Rear-View Mirror (R = 2 m)",
    "shortLabel": "Ex 9.4: Jogger Speed in Convex Mirror",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 9.4",
    "subtopicId": "phy-sub-9-1",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Numerical",
    "frequency": "92% Frequency (Classic NCERT Calculus-Free Interval Method)",
    "questionPrompt": "Suppose while sitting in a parked car, you notice a jogger approaching towards you in the side view mirror of R = 2 m. If the jogger is running at a speed of 5 m s⁻¹, how fast the image of the jogger appear to move when the jogger is (a) 39 m, (b) 29 m, (c) 19 m, and (d) 9 m away?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Example 9.4",
      "equations": "1/v + 1/u = 1/f;  Average image speed = Δv / Δt",
      "figures": "Mirror image velocity calculation",
      "summary": "Calculates apparent speed of a jogger's image in a convex rear-view mirror over 1-second intervals at four distances."
    },
    "theory": [
      "A car side-view mirror is a CONVEX mirror, so its focal length is positive: $f = +R/2 = +2/2 = +1\\text{ m}$.",
      "Over a $1\\text{ s}$ interval with object speed $5\\text{ m s}^{-1}$, object distance shifts from $u$ to $(u + 5)\\text{ m}$ (closer to the mirror, less negative)."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Numerical Solution (Example 9.4)",
        "setup": "Convex mirror: $f = +1\\text{ m}$. Mirror formula gives $v = \\frac{fu}{u - f} = \\frac{u}{u - 1}$. Compute image shift $\\Delta v$ during $\\Delta t = 1\\text{ s}$ ($\\Delta u = +5\\text{ m}$).",
        "steps": [
          {
            "text": "General image position formula for $f = +1\\text{ m}$:",
            "equation": "v = \\frac{f u}{u - f} = \\frac{u}{u - 1}"
          },
          {
            "text": "(a) At $u = -39\\text{ m}$ ($1\\text{ s}$ later $u' = -34\\text{ m}$): $v_1 = \\frac{39}{40}\\text{ m}$, $v_2 = \\frac{34}{35}\\text{ m}$:",
            "equation": "\\bar{v}_{\\text{img}}(39\\text{ m}) = \\frac{34}{35} - \\frac{39}{40} = \\frac{1}{280}\\text{ m/s}"
          },
          {
            "text": "(b) At $u = -29\\text{ m}$ ($1\\text{ s}$ later $u' = -24\\text{ m}$): $v_1 = \\frac{29}{30}\\text{ m}$, $v_2 = \\frac{24}{25}\\text{ m}$:",
            "equation": "\\bar{v}_{\\text{img}}(29\\text{ m}) = \\frac{24}{25} - \\frac{29}{30} = \\frac{1}{150}\\text{ m/s}"
          },
          {
            "text": "(c) At $u = -19\\text{ m}$ ($1\\text{ s}$ later $u' = -14\\text{ m}$): $v_1 = \\frac{19}{20}\\text{ m}$, $v_2 = \\frac{14}{15}\\text{ m}$:",
            "equation": "\\bar{v}_{\\text{img}}(19\\text{ m}) = \\frac{14}{15} - \\frac{19}{20} = \\frac{1}{60}\\text{ m/s}"
          },
          {
            "text": "(d) At $u = -9\\text{ m}$ ($1\\text{ s}$ later $u' = -4\\text{ m}$): $v_1 = \\frac{9}{10}\\text{ m}$, $v_2 = \\frac{4}{5}\\text{ m}$:",
            "equation": "\\bar{v}_{\\text{img}}(9\\text{ m}) = \\frac{4}{5} - \\frac{9}{10} = \\frac{1}{10}\\text{ m/s} \\; (\\text{magnitude})"
          }
        ],
        "finalFormula": "\\text{(a) } \\frac{1}{280}\\text{ m/s}, \\quad \\text{(b) } \\frac{1}{150}\\text{ m/s}, \\quad \\text{(c) } \\frac{1}{60}\\text{ m/s}, \\quad \\text{(d) } \\frac{1}{10}\\text{ m/s}",
        "specialCases": [
          "Notice the physical insight: although the jogger runs at constant speed $5\\text{ m/s}$, the image appears to accelerate dramatically ($\\frac{1}{280} \\to \\frac{1}{10}\\text{ m/s}$) as the jogger comes close!"
        ]
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Convex Mirror Formula Geometry",
      "examDrawingGuide": [
        "Show virtual erect diminished image formed strictly between P and F."
      ]
    },
    "keyPointsAndKeywords": [
      "Convex mirror f = +R/2",
      "f = +1 m",
      "v = u/(u-1)",
      "Apparent acceleration of image"
    ],
    "termsGlossary": [
      {
        "symbol": "f = +R/2",
        "term": "Convex Mirror Focal Length",
        "definition": "Positive focal length (+1 m here) since focus lies behind the reflecting surface."
      }
    ],
    "markingScheme": [
      "1 Mark: Correct sign convention $f = +1\\text{ m}$ and $v = u/(u-1)$.",
      "1 Mark each (4 Marks total): Evaluating image speed at $39\\text{ m}, 29\\text{ m}, 19\\text{ m}$, and $9\\text{ m}$."
    ],
    "examinerTips": "Do not use instantaneous derivative dv/dt blindly unless specified — NCERT solves Example 9.4 using 1-second finite intervals to get clean exact fractions 1/280, 1/150, 1/60, 1/10!",
    "number": 2,
    "modelAnswer": {
      "statement": "A car side-view mirror is a CONVEX mirror, so its focal length is positive: $f = +R/2 = +2/2 = +1\\text{ m}$.\nOver a $1\\text{ s}$ interval with object speed $5\\text{ m s}^{-1}$, object distance shifts from $u$ to $(u + 5)\\text{ m}$ (closer to the mirror, less negative).",
      "derivations": [
        {
          "name": "Step-by-Step Numerical Solution (Example 9.4)",
          "steps": [
            "General image position formula for $f = +1\\text{ m}$: v = \\frac{f u}{u - f} = \\frac{u}{u - 1}",
            "(a) At $u = -39\\text{ m}$ ($1\\text{ s}$ later $u' = -34\\text{ m}$): $v_1 = \\frac{39}{40}\\text{ m}$, $v_2 = \\frac{34}{35}\\text{ m}$: \\bar{v}_{\\text{img}}(39\\text{ m}) = \\frac{34}{35} - \\frac{39}{40} = \\frac{1}{280}\\text{ m/s}",
            "(b) At $u = -29\\text{ m}$ ($1\\text{ s}$ later $u' = -24\\text{ m}$): $v_1 = \\frac{29}{30}\\text{ m}$, $v_2 = \\frac{24}{25}\\text{ m}$: \\bar{v}_{\\text{img}}(29\\text{ m}) = \\frac{24}{25} - \\frac{29}{30} = \\frac{1}{150}\\text{ m/s}",
            "(c) At $u = -19\\text{ m}$ ($1\\text{ s}$ later $u' = -14\\text{ m}$): $v_1 = \\frac{19}{20}\\text{ m}$, $v_2 = \\frac{14}{15}\\text{ m}$: \\bar{v}_{\\text{img}}(19\\text{ m}) = \\frac{14}{15} - \\frac{19}{20} = \\frac{1}{60}\\text{ m/s}",
            "(d) At $u = -9\\text{ m}$ ($1\\text{ s}$ later $u' = -4\\text{ m}$): $v_1 = \\frac{9}{10}\\text{ m}$, $v_2 = \\frac{4}{5}\\text{ m}$: \\bar{v}_{\\text{img}}(9\\text{ m}) = \\frac{4}{5} - \\frac{9}{10} = \\frac{1}{10}\\text{ m/s} \\; (\\text{magnitude})"
          ],
          "formula": "\\text{(a) } \\frac{1}{280}\\text{ m/s}, \\quad \\text{(b) } \\frac{1}{150}\\text{ m/s}, \\quad \\text{(c) } \\frac{1}{60}\\text{ m/s}, \\quad \\text{(d) } \\frac{1}{10}\\text{ m/s}"
        }
      ],
      "conclusion": "Do not use instantaneous derivative dv/dt blindly unless specified — NCERT solves Example 9.4 using 1-second finite intervals to get clean exact fractions 1/280, 1/150, 1/60, 1/10!"
    }
  },
  {
    "id": "imp-phy-9-ex5",
    "title": "Image Position of Point Source Refracted at a Convex Spherical Glass Surface",
    "shortLabel": "Ex 9.5: Spherical Glass Refraction",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 9.5",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency (Single Surface Formula Starter)",
    "questionPrompt": "Light from a point source in air falls on a spherical glass surface (n = 1.5 and radius of curvature = 20 cm). The distance of the light source from the glass surface is 100 cm. At what position is the image formed?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Example 9.5",
      "equations": "n₂/v - n₁/u = (n₂ - n₁)/R",
      "figures": "Single spherical convex interface",
      "summary": "Direct application of spherical surface refraction equation with Cartesian sign convention."
    },
    "theory": [
      "Apply the spherical surface refraction formula: $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$.",
      "Here incident medium is air ($n_1 = 1$), refracting medium is glass ($n_2 = 1.5$), object distance $u = -100\\text{ cm}$, and convex radius $R = +20\\text{ cm}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Calculation (Example 9.5)",
        "setup": "Given $n_1 = 1.0$, $n_2 = 1.5$, $u = -100\\text{ cm}$, $R = +20\\text{ cm}$.",
        "steps": [
          {
            "text": "Substitute given values into the refraction equation:",
            "equation": "\\frac{1.5}{v} - \\frac{1}{-100} = \\frac{1.5 - 1}{+20}"
          },
          {
            "text": "Simplify and isolate $\\frac{1.5}{v}$:",
            "equation": "\\frac{1.5}{v} = \\frac{0.5}{20} - \\frac{1}{100} = \\frac{1}{40} - \\frac{1}{100} = \\frac{5 - 2}{200} = \\frac{3}{200}"
          },
          {
            "text": "Solve for image distance $v$:",
            "equation": "v = \\frac{1.5 \\times 200}{3} = +100\\text{ cm}"
          }
        ],
        "finalFormula": "v = +100\\text{ cm} \\; (\\text{Real image inside glass, } 100\\text{ cm from pole along incident light})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Single Convex Spherical Surface",
      "examDrawingGuide": [
        "Show ray entering denser glass n=1.5 converging at +100 cm on principal axis."
      ]
    },
    "keyPointsAndKeywords": [
      "u = -100 cm",
      "R = +20 cm (convex)",
      "v = +100 cm real image"
    ],
    "termsGlossary": [
      {
        "symbol": "R",
        "term": "Radius of Curvature",
        "definition": "Positive (+20 cm) for a convex refracting surface facing rarer medium."
      }
    ],
    "markingScheme": [
      "1 Mark: Correct formula and sign conventions ($u = -100\\text{ cm}, R = +20\\text{ cm}$).",
      "1 Mark: Solving $v = +100\\text{ cm}$ and stating image side."
    ],
    "examinerTips": "Always subtract (-100) carefully: minus of minus becomes PLUS (+1/100) on the LHS before moving to RHS!",
    "number": 3,
    "modelAnswer": {
      "statement": "Apply the spherical surface refraction formula: $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$.\nHere incident medium is air ($n_1 = 1$), refracting medium is glass ($n_2 = 1.5$), object distance $u = -100\\text{ cm}$, and convex radius $R = +20\\text{ cm}$.",
      "derivations": [
        {
          "name": "Step-by-Step Calculation (Example 9.5)",
          "steps": [
            "Substitute given values into the refraction equation: \\frac{1.5}{v} - \\frac{1}{-100} = \\frac{1.5 - 1}{+20}",
            "Simplify and isolate $\\frac{1.5}{v}$: \\frac{1.5}{v} = \\frac{0.5}{20} - \\frac{1}{100} = \\frac{1}{40} - \\frac{1}{100} = \\frac{5 - 2}{200} = \\frac{3}{200}",
            "Solve for image distance $v$: v = \\frac{1.5 \\times 200}{3} = +100\\text{ cm}"
          ],
          "formula": "v = +100\\text{ cm} \\; (\\text{Real image inside glass, } 100\\text{ cm from pole along incident light})"
        }
      ],
      "conclusion": "Always subtract (-100) carefully: minus of minus becomes PLUS (+1/100) on the LHS before moving to RHS!"
    }
  },
  {
    "id": "imp-phy-9-ex7",
    "title": "Lens Maker's Formula 3-Part Problem: Power, Glass Index & Lens in Water",
    "shortLabel": "Ex 9.7: Power, n & Lens in Water",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 9.7",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "99% Frequency (Guaranteed CBSE Board Triplet)",
    "questionPrompt": "(i) If f = 0.5 m for a glass lens, what is the power of the lens?\n(ii) The radii of curvature of the faces of a double convex lens are 10 cm and 15 cm. Its focal length is 12 cm. What is the refractive index of glass?\n(iii) A convex lens has 20 cm focal length in air. What is focal length in water? (Refractive index of air-water = 1.33, refractive index for air-glass = 1.5.)",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Example 9.7",
      "equations": "P = 1/f;  1/f = (n₂₁ - 1)(1/R₁ - 1/R₂)",
      "figures": "Thin double convex lens",
      "summary": "Covers lens power, refractive index determination in air, and ~4× focal-length jump upon immersion in water."
    },
    "theory": [
      "Optical power in Dioptres is $P = 1/f(\\text{m})$.",
      "For a double-convex lens with radii $R_1, R_2$, Cartesian signs give $R_1 > 0$ (first face) and $R_2 < 0$ (second face)."
    ],
    "derivations": [
      {
        "name": "3-Part Lens Maker Solution (Example 9.7)",
        "setup": "Part (i): $f = +0.5\\text{ m}$. Part (ii): $R_1 = +10\\text{ cm}, R_2 = -15\\text{ cm}, f = +12\\text{ cm}$. Part (iii): $f_a = +20\\text{ cm}, n_g = 1.5, n_w = 1.33$.",
        "steps": [
          {
            "text": "(i) Optical power of lens:",
            "equation": "P = \\frac{1}{0.5\\text{ m}} = +2\\text{ D}"
          },
          {
            "text": "(ii) Applying Lens Maker's Formula in air with $R_1 = +10\\text{ cm}, R_2 = -15\\text{ cm}$:",
            "equation": "\\frac{1}{12} = (n - 1)\\left(\\frac{1}{10} - \\frac{1}{-15}\\right) = (n - 1)\\left(\\frac{3 + 2}{30}\\right) = (n - 1)\\frac{1}{6} \\implies n - 1 = 0.5 \\implies n = 1.5"
          },
          {
            "text": "(iii) Divide Lens Maker's equations for air and water ($\\frac{1}{R_1} - \\frac{1}{R_2}$ cancels identically):",
            "equation": "\\frac{f_w}{f_a} = \\frac{n_g - 1}{\\frac{n_g}{n_w} - 1} = \\frac{1.5 - 1}{\\frac{1.5}{1.33} - 1} = \\frac{0.5}{0.1278} \\approx 3.91 \\implies f_w = 20 \\times 3.91 = +78.2\\text{ cm}"
          }
        ],
        "finalFormula": "\\text{(i) } P = +2\\text{ D}, \\quad \\text{(ii) } n = 1.5, \\quad \\text{(iii) } f_w = +78.2\\text{ cm}",
        "specialCases": [
          "Notice the classic approximation rule: immersing a glass lens ($n=1.5$) in water ($n=1.33$) multiplies focal length by nearly 4×!"
        ]
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Thin Lens in Air vs Water",
      "examDrawingGuide": [
        "Mark R1 = +10 cm and R2 = -15 cm properly with opposite signs."
      ]
    },
    "keyPointsAndKeywords": [
      "P = +2 D",
      "R1 = +10, R2 = -15",
      "n = 1.5",
      "fw = +78.2 cm (~4 fa)"
    ],
    "termsGlossary": [
      {
        "symbol": "D",
        "term": "Dioptre",
        "definition": "SI unit of optical power ($1\\text{ D} = 1\\text{ m}^{-1}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Part (i) Power P = +2 D.",
      "1 Mark: Part (ii) n = 1.5 with proper sign of R2 = -15 cm.",
      "1 Mark: Part (iii) Ratio method giving f_w = +78.2 cm."
    ],
    "examinerTips": "Always substitute R2 with a MINUS sign for a double-convex lens! Writing 1/10 - 1/15 instead of 1/10 + 1/15 is the #1 error in Example 9.7.",
    "number": 4,
    "modelAnswer": {
      "statement": "Optical power in Dioptres is $P = 1/f(\\text{m})$.\nFor a double-convex lens with radii $R_1, R_2$, Cartesian signs give $R_1 > 0$ (first face) and $R_2 < 0$ (second face).",
      "derivations": [
        {
          "name": "3-Part Lens Maker Solution (Example 9.7)",
          "steps": [
            "(i) Optical power of lens: P = \\frac{1}{0.5\\text{ m}} = +2\\text{ D}",
            "(ii) Applying Lens Maker's Formula in air with $R_1 = +10\\text{ cm}, R_2 = -15\\text{ cm}$: \\frac{1}{12} = (n - 1)\\left(\\frac{1}{10} - \\frac{1}{-15}\\right) = (n - 1)\\left(\\frac{3 + 2}{30}\\right) = (n - 1)\\frac{1}{6} \\implies n - 1 = 0.5 \\implies n = 1.5",
            "(iii) Divide Lens Maker's equations for air and water ($\\frac{1}{R_1} - \\frac{1}{R_2}$ cancels identically): \\frac{f_w}{f_a} = \\frac{n_g - 1}{\\frac{n_g}{n_w} - 1} = \\frac{1.5 - 1}{\\frac{1.5}{1.33} - 1} = \\frac{0.5}{0.1278} \\approx 3.91 \\implies f_w = 20 \\times 3.91 = +78.2\\text{ cm}"
          ],
          "formula": "\\text{(i) } P = +2\\text{ D}, \\quad \\text{(ii) } n = 1.5, \\quad \\text{(iii) } f_w = +78.2\\text{ cm}"
        }
      ],
      "conclusion": "Always substitute R2 with a MINUS sign for a double-convex lens! Writing 1/10 - 1/15 instead of 1/10 + 1/15 is the #1 error in Example 9.7."
    }
  },
  {
    "id": "imp-phy-9-ex8",
    "title": "Image Position of Object Viewed Through Three Coaxial Lenses",
    "shortLabel": "Ex 9.8: 3 Coaxial Lenses Combination",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 9.8",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Top Sequential Lens Formula PYQ)",
    "questionPrompt": "Find the position of the image formed by the lens combination given in Fig. 9.20: three coaxial lenses L₁ (f₁ = +10 cm), L₂ (f₂ = -10 cm), and L₃ (f₃ = +30 cm), where L₁ and L₂ are separated by 5 cm, L₂ and L₃ by 10 cm, and a point object O is placed 30 cm in front of L₁.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Example 9.8",
      "equations": "1/v_k - 1/u_k = 1/f_k applied sequentially k = 1, 2, 3",
      "figures": "Fig. 9.20",
      "summary": "Sequential thin-lens formula across three separated coaxial lenses where v_1 acts as virtual object for L_2."
    },
    "theory": [
      "Unlike thin lenses in contact, separated lenses require applying the thin-lens equation $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$ sequentially at each lens.",
      "The image formed by lens $L_k$ acts as the object (real or virtual!) for lens $L_{k+1}$: $u_{k+1} = v_k - d_{k, k+1}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Sequential Trace (Example 9.8)",
        "setup": "$L_1$: $f_1 = +10\\text{ cm}, u_1 = -30\\text{ cm}$. Gap $d_{12} = 5\\text{ cm}$. $L_2$: $f_2 = -10\\text{ cm}$. Gap $d_{23} = 10\\text{ cm}$. $L_3$: $f_3 = +30\\text{ cm}$.",
        "steps": [
          {
            "text": "Lens 1 ($L_1$): Find first intermediate image distance $v_1$:",
            "equation": "\\frac{1}{v_1} - \\frac{1}{-30} = \\frac{1}{10} \\implies \\frac{1}{v_1} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30} = \\frac{1}{15} \\implies v_1 = +15\\text{ cm}"
          },
          {
            "text": "Since $L_2$ is $5\\text{ cm}$ to the right of $L_1$, $I_1$ lies $15 - 5 = +10\\text{ cm}$ to the RIGHT of $L_2$ (virtual object for $L_2$, so $u_2 = +10\\text{ cm}$):",
            "equation": "\\frac{1}{v_2} - \\frac{1}{+10} = \\frac{1}{-10} \\implies \\frac{1}{v_2} = 0 \\implies v_2 = \\infty"
          },
          {
            "text": "Rays leaving $L_2$ are PARALLEL to the principal axis ($u_3 = -\\infty$), so $L_3$ focuses them directly at its second focal point:",
            "equation": "\\frac{1}{v_3} - \\frac{1}{-\\infty} = \\frac{1}{+30} \\implies v_3 = +30\\text{ cm}"
          }
        ],
        "finalFormula": "\\text{Final Image Distance } v_3 = +30\\text{ cm to the right of } L_3"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Three-Lens Combination Ray Diagram",
      "examDrawingGuide": [
        "Show parallel beam emerging between L2 and L3 before converging at F3 = +30 cm."
      ]
    },
    "keyPointsAndKeywords": [
      "Virtual object u2 = +10 cm",
      "Parallel beam between L2 and L3",
      "Final image at 30 cm right of L3"
    ],
    "termsGlossary": [
      {
        "symbol": "u_2 = +10\\text{ cm}",
        "term": "Virtual Object",
        "definition": "Converging rays aimed behind $L_2$ give positive object distance $+10\\text{ cm}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Solving $L_1$ to obtain $v_1 = +15\\text{ cm}$.",
      "1 Mark: Correctly taking virtual object $u_2 = +10\\text{ cm}$ and showing $v_2 = \\infty$.",
      "1 Mark: Concluding final real image forms at $+30\\text{ cm}$ to the right of $L_3$."
    ],
    "examinerTips": "The key step is u_2 = +(15 - 5) = +10 cm (POSITIVE because the converging rays try to meet 10 cm behind diverging lens L_2)!",
    "number": 5,
    "modelAnswer": {
      "statement": "Unlike thin lenses in contact, separated lenses require applying the thin-lens equation $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$ sequentially at each lens.\nThe image formed by lens $L_k$ acts as the object (real or virtual!) for lens $L_{k+1}$: $u_{k+1} = v_k - d_{k, k+1}$.",
      "derivations": [
        {
          "name": "Step-by-Step Sequential Trace (Example 9.8)",
          "steps": [
            "Lens 1 ($L_1$): Find first intermediate image distance $v_1$: \\frac{1}{v_1} - \\frac{1}{-30} = \\frac{1}{10} \\implies \\frac{1}{v_1} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30} = \\frac{1}{15} \\implies v_1 = +15\\text{ cm}",
            "Since $L_2$ is $5\\text{ cm}$ to the right of $L_1$, $I_1$ lies $15 - 5 = +10\\text{ cm}$ to the RIGHT of $L_2$ (virtual object for $L_2$, so $u_2 = +10\\text{ cm}$): \\frac{1}{v_2} - \\frac{1}{+10} = \\frac{1}{-10} \\implies \\frac{1}{v_2} = 0 \\implies v_2 = \\infty",
            "Rays leaving $L_2$ are PARALLEL to the principal axis ($u_3 = -\\infty$), so $L_3$ focuses them directly at its second focal point: \\frac{1}{v_3} - \\frac{1}{-\\infty} = \\frac{1}{+30} \\implies v_3 = +30\\text{ cm}"
          ],
          "formula": "\\text{Final Image Distance } v_3 = +30\\text{ cm to the right of } L_3"
        }
      ],
      "conclusion": "The key step is u_2 = +(15 - 5) = +10 cm (POSITIVE because the converging rays try to meet 10 cm behind diverging lens L_2)!"
    }
  },
  {
    "id": "imp-phy-9-q1",
    "title": "Concave Mirror Image Position, Height & Screen Movement for Candle",
    "shortLabel": "Exer 9.1: Concave Mirror Candle Image",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.1",
    "subtopicId": "phy-sub-9-1",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "93% Frequency (Classic Mirror Numerical)",
    "questionPrompt": "A small candle, 2.5 cm in size is placed at 27 cm in front of a concave mirror of radius of curvature 36 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image? Describe the nature and size of the image. If the candle is moved closer to the mirror, how would the screen have to be moved?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.1",
      "equations": "1/v + 1/u = 1/f;  m = h'/h = -v/u",
      "figures": "Concave mirror real image formation",
      "summary": "Calculates real image position, inverted magnification, and screen shift direction for a concave mirror."
    },
    "theory": [
      "By Cartesian sign convention for a concave mirror: focal length $f = R/2 = -18\\text{ cm}$, object distance $u = -27\\text{ cm}$, object height $h = +2.5\\text{ cm}$."
    ],
    "derivations": [
      {
        "name": "Mirror Formula & Magnification Calculation (Exercise 9.1)",
        "setup": "$h = +2.5\\text{ cm},\\ u = -27\\text{ cm},\\ R = -36\\text{ cm} \\implies f = -18\\text{ cm}$.",
        "steps": [
          {
            "text": "Apply mirror formula $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$:",
            "equation": "\\frac{1}{v} = \\frac{1}{-18} - \\frac{1}{-27} = -\\frac{1}{18} + \\frac{1}{27} = \\frac{-3 + 2}{54} = -\\frac{1}{54} \\implies v = -54\\text{ cm}"
          },
          {
            "text": "Calculate image magnification and size $h'$:",
            "equation": "m = -\\frac{v}{u} = -\\frac{-54}{-27} = -2 \\implies h' = m \\cdot h = (-2)(2.5) = -5.0\\text{ cm}"
          },
          {
            "text": "Effect of moving candle closer to mirror: As $u$ approaches $f = -18\\text{ cm}$, $|v|$ grows toward $\\infty$, so the screen must be moved AWAY from the mirror (and if $|u| < 18\\text{ cm}$, image becomes virtual and cannot be caught on a screen!)."
          }
        ],
        "finalFormula": "v = -54\\text{ cm} \\; (\\text{Real, inverted, } 5.0\\text{ cm}); \\; \\text{Screen moved away}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Concave Mirror Object Between C and F",
      "examDrawingGuide": [
        "Object at 27 cm lies between C (36 cm) and F (18 cm), forming enlarged inverted real image beyond C."
      ]
    },
    "keyPointsAndKeywords": [
      "f = -18 cm",
      "v = -54 cm",
      "h' = -5.0 cm (inverted)",
      "Screen moves away"
    ],
    "termsGlossary": [
      {
        "symbol": "m = -v/u",
        "term": "Mirror Magnification",
        "definition": "Negative value ($-2$) confirms inverted real image twice object height."
      }
    ],
    "markingScheme": [
      "1 Mark: Image position $v = -54\\text{ cm}$ in front of mirror.",
      "1 Mark: Image height $h' = -5.0\\text{ cm}$ (real, inverted, magnified).",
      "1 Mark: Stating screen shifts away from mirror (and becomes virtual inside 18 cm)."
    ],
    "examinerTips": "Mention explicitly what happens once the candle crosses inside 18 cm: the image turns virtual and can no longer be captured on any screen!",
    "number": 6,
    "modelAnswer": {
      "statement": "By Cartesian sign convention for a concave mirror: focal length $f = R/2 = -18\\text{ cm}$, object distance $u = -27\\text{ cm}$, object height $h = +2.5\\text{ cm}$.",
      "derivations": [
        {
          "name": "Mirror Formula & Magnification Calculation (Exercise 9.1)",
          "steps": [
            "Apply mirror formula $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$: \\frac{1}{v} = \\frac{1}{-18} - \\frac{1}{-27} = -\\frac{1}{18} + \\frac{1}{27} = \\frac{-3 + 2}{54} = -\\frac{1}{54} \\implies v = -54\\text{ cm}",
            "Calculate image magnification and size $h'$: m = -\\frac{v}{u} = -\\frac{-54}{-27} = -2 \\implies h' = m \\cdot h = (-2)(2.5) = -5.0\\text{ cm}",
            "Effect of moving candle closer to mirror: As $u$ approaches $f = -18\\text{ cm}$, $|v|$ grows toward $\\infty$, so the screen must be moved AWAY from the mirror (and if $|u| < 18\\text{ cm}$, image becomes virtual and cannot be caught on a screen!)."
          ],
          "formula": "v = -54\\text{ cm} \\; (\\text{Real, inverted, } 5.0\\text{ cm}); \\; \\text{Screen moved away}"
        }
      ],
      "conclusion": "Mention explicitly what happens once the candle crosses inside 18 cm: the image turns virtual and can no longer be captured on any screen!"
    }
  },
  {
    "id": "imp-phy-9-q3",
    "title": "Apparent Depth of Tank Needle & Microscope Shift in Higher-Index Liquid",
    "shortLabel": "Exer 9.3: Apparent Depth & Microscope Shift",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.3",
    "subtopicId": "phy-sub-9-2",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency (Standard Apparent Depth PYQ)",
    "questionPrompt": "A tank is filled with water to a height of 12.5 cm. The apparent depth of a needle lying at the bottom of the tank is measured by a microscope to be 9.4 cm. What is the refractive index of water? If water is replaced by a liquid of refractive index 1.63 up to the same height, by what distance would the microscope have to be moved to focus on the needle again?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.3",
      "equations": "n = Real Depth / Apparent Depth",
      "figures": "Normal shift and apparent depth",
      "summary": "Determines water refractive index and microscope vertical shift when liquid index increases to 1.63."
    },
    "theory": [
      "When viewed normally from air, refractive index $n = \\frac{\\text{Real Depth}}{\\text{Apparent Depth}}$, so higher-$n$ liquid raises the apparent position closer to the surface."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.3)",
        "setup": "Real depth $h = 12.5\\text{ cm}$, initial apparent depth $h'_1 = 9.4\\text{ cm}$, new liquid $n_2 = 1.63$.",
        "steps": [
          {
            "text": "Refractive index of water:",
            "equation": "n_1 = \\frac{12.5}{9.4} = 1.33"
          },
          {
            "text": "New apparent depth with liquid $n_2 = 1.63$:",
            "equation": "h'_2 = \\frac{12.5}{1.63} = 7.67\\text{ cm}"
          },
          {
            "text": "Required upward shift of microscope to refocus on higher apparent image:",
            "equation": "\\Delta h = 9.4 - 7.67 = 1.73\\text{ cm UPWARDS}"
          }
        ],
        "finalFormula": "n_1 = 1.33, \\qquad \\text{Microscope moved UPWARDS by } 1.73\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Real / Apparent Depth = n",
      "n_water = 1.33",
      "New depth = 7.67 cm",
      "Shift = 1.73 cm upwards"
    ],
    "termsGlossary": [
      {
        "symbol": "d_{\\text{app}}",
        "term": "Apparent Depth",
        "definition": "Perceived depth from surface: $d_{\\text{real}}/n$."
      }
    ],
    "markingScheme": [
      "1 Mark: $n = 1.33$.",
      "1 Mark: New apparent depth $7.67\\text{ cm}$ and microscope shift $1.73\\text{ cm}$ upwards."
    ],
    "examinerTips": "Because apparent depth shrinks from 9.4 cm to 7.67 cm below the top surface, the image is HIGHER up — so move the microscope UPWARDS by 1.73 cm!",
    "number": 7,
    "modelAnswer": {
      "statement": "When viewed normally from air, refractive index $n = \\frac{\\text{Real Depth}}{\\text{Apparent Depth}}$, so higher-$n$ liquid raises the apparent position closer to the surface.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.3)",
          "steps": [
            "Refractive index of water: n_1 = \\frac{12.5}{9.4} = 1.33",
            "New apparent depth with liquid $n_2 = 1.63$: h'_2 = \\frac{12.5}{1.63} = 7.67\\text{ cm}",
            "Required upward shift of microscope to refocus on higher apparent image: \\Delta h = 9.4 - 7.67 = 1.73\\text{ cm UPWARDS}"
          ],
          "formula": "n_1 = 1.33, \\qquad \\text{Microscope moved UPWARDS by } 1.73\\text{ cm}"
        }
      ],
      "conclusion": "Because apparent depth shrinks from 9.4 cm to 7.67 cm below the top surface, the image is HIGHER up — so move the microscope UPWARDS by 1.73 cm!"
    }
  },
  {
    "id": "imp-phy-9-q5",
    "title": "Circular Surface Area of Emergent Cone Above Underwater Bulb (TIR)",
    "shortLabel": "Exer 9.5: Underwater Bulb Emergent Area",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.5",
    "subtopicId": "phy-sub-9-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Classic TIR Circle of Illuminance Problem)",
    "questionPrompt": "A small bulb is placed at the bottom of a tank containing water to a depth of 80 cm. What is the area of the surface of water through which light from the bulb can emerge out? Refractive index of water is 1.33. (Consider the bulb to be a point source.)",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.5",
      "equations": "sin i_c = 1/n;  R = h tan i_c;  A = π R² = π h² / (n² - 1)",
      "figures": "Circle of illuminance above submerged source",
      "summary": "Computes surface circle area through which rays escape before critical angle TIR sets in."
    },
    "theory": [
      "Rays hitting the water-air interface at angle $i > i_c$ reflect completely back downward (TIR). Light escapes only through a circular cone of half-angle $i_c$, where $\\sin i_c = 1/n$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step TIR Cone Calculation (Exercise 9.5)",
        "setup": "Depth $h = 80\\text{ cm} = 0.80\\text{ m}$, refractive index $n = 1.33 \\approx 4/3$.",
        "steps": [
          {
            "text": "Critical angle at water-air interface:",
            "equation": "\\sin i_c = \\frac{1}{1.33} \\approx 0.7519 \\implies i_c \\approx 48.75^\\circ"
          },
          {
            "text": "Radius $R$ of emergent circle using right triangle relation $\\tan i_c = \\frac{1}{\\sqrt{n^2 - 1}}$:",
            "equation": "R = h\\tan i_c = \\frac{h}{\\sqrt{n^2 - 1}} = \\frac{0.80}{\\sqrt{1.33^2 - 1}} = \\frac{0.80}{0.8769} \\approx 0.912\\text{ m}"
          },
          {
            "text": "Surface area of emergent circular patch:",
            "equation": "A = \\pi R^2 = \\frac{\\pi h^2}{n^2 - 1} = \\frac{3.1416 \\times (0.80)^2}{1.7689 - 1} \\approx 2.61\\text{ m}^2 \\; (\\approx 2.58\\text{ m}^2 \\text{ with } n=4/3)"
          }
        ],
        "finalFormula": "A = \\frac{\\pi h^2}{n^2 - 1} \\approx 2.6\\text{ m}^2"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Critical Angle Circle of Illuminance",
      "examDrawingGuide": [
        "Draw cone from point source at bottom with grazing emergent rays at r = 90° on rim."
      ]
    },
    "keyPointsAndKeywords": [
      "sin i_c = 1/n",
      "R = h tan i_c",
      "A = π h² / (n² - 1)",
      "A ≈ 2.6 m²"
    ],
    "termsGlossary": [
      {
        "symbol": "R = h/\\sqrt{n^2-1}",
        "term": "Radius of Emergent Disc",
        "definition": "Radius beyond which all rays undergo Total Internal Reflection."
      }
    ],
    "markingScheme": [
      "1 Mark: Critical angle condition $\\sin i_c = 1/n$.",
      "1 Mark: Radius $R = h\\tan i_c = h/\\sqrt{n^2 - 1}$.",
      "1 Mark: Area $A = \\pi R^2 \\approx 2.6\\text{ m}^2$."
    ],
    "examinerTips": "Using the exact algebraic shortcut A = π h² / (n² − 1) avoids inverse-trig rounding errors completely!",
    "number": 8,
    "modelAnswer": {
      "statement": "Rays hitting the water-air interface at angle $i > i_c$ reflect completely back downward (TIR). Light escapes only through a circular cone of half-angle $i_c$, where $\\sin i_c = 1/n$.",
      "derivations": [
        {
          "name": "Step-by-Step TIR Cone Calculation (Exercise 9.5)",
          "steps": [
            "Critical angle at water-air interface: \\sin i_c = \\frac{1}{1.33} \\approx 0.7519 \\implies i_c \\approx 48.75^\\circ",
            "Radius $R$ of emergent circle using right triangle relation $\\tan i_c = \\frac{1}{\\sqrt{n^2 - 1}}$: R = h\\tan i_c = \\frac{h}{\\sqrt{n^2 - 1}} = \\frac{0.80}{\\sqrt{1.33^2 - 1}} = \\frac{0.80}{0.8769} \\approx 0.912\\text{ m}",
            "Surface area of emergent circular patch: A = \\pi R^2 = \\frac{\\pi h^2}{n^2 - 1} = \\frac{3.1416 \\times (0.80)^2}{1.7689 - 1} \\approx 2.61\\text{ m}^2 \\; (\\approx 2.58\\text{ m}^2 \\text{ with } n=4/3)"
          ],
          "formula": "A = \\frac{\\pi h^2}{n^2 - 1} \\approx 2.6\\text{ m}^2"
        }
      ],
      "conclusion": "Using the exact algebraic shortcut A = π h² / (n² − 1) avoids inverse-trig rounding errors completely!"
    }
  },
  {
    "id": "imp-phy-9-q7",
    "title": "Equiconvex Lens Radius of Curvature Required for 20 cm Focal Length",
    "shortLabel": "Exer 9.7: Equiconvex Lens Radius",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.7",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "94% Frequency (Core Lens Maker Formula Drill)",
    "questionPrompt": "Double-convex lenses are to be manufactured from a glass of refractive index 1.55, with both faces of the same radius of curvature. What is the radius of curvature required if the focal length is to be 20 cm?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.7",
      "equations": "1/f = (n - 1)(1/R₁ - 1/R₂)",
      "figures": "Equiconvex lens geometry",
      "summary": "Computes equal face curvature R from refractive index 1.55 and focal length +20 cm."
    },
    "theory": [
      "For an equiconvex (symmetric double-convex) lens, Cartesian signs give $R_1 = +R$ and $R_2 = -R$, so $\\frac{1}{R_1} - \\frac{1}{R_2} = \\frac{2}{R}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.7)",
        "setup": "$n = 1.55$, $f = +20\\text{ cm}$, $R_1 = +R$, $R_2 = -R$.",
        "steps": [
          {
            "text": "Substitute into Lens Maker's Formula:",
            "equation": "\\frac{1}{20} = (1.55 - 1)\\left(\\frac{1}{R} - \\frac{1}{-R}\\right) = 0.55 \\times \\frac{2}{R} = \\frac{1.10}{R}"
          },
          {
            "text": "Solve for radius of curvature $R$:",
            "equation": "R = 20 \\times 1.10 = 22\\text{ cm}"
          }
        ],
        "finalFormula": "R = 22\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "R1 = +R, R2 = -R",
      "1/f = 2(n-1)/R",
      "R = 22 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "R",
        "term": "Radius of Curvature",
        "definition": "Common spherical radius of both convex faces ($22\\text{ cm}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Lens Maker's Formula with correct sign convention $R_1 = +R, R_2 = -R$.",
      "1 Mark: Correct arithmetic yielding $R = 22\\text{ cm}$."
    ],
    "examinerTips": "Quick sanity check: for n = 1.5, R = f; since n = 1.55 > 1.5, R must be slightly larger than 20 cm → 22 cm!",
    "number": 9,
    "modelAnswer": {
      "statement": "For an equiconvex (symmetric double-convex) lens, Cartesian signs give $R_1 = +R$ and $R_2 = -R$, so $\\frac{1}{R_1} - \\frac{1}{R_2} = \\frac{2}{R}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.7)",
          "steps": [
            "Substitute into Lens Maker's Formula: \\frac{1}{20} = (1.55 - 1)\\left(\\frac{1}{R} - \\frac{1}{-R}\\right) = 0.55 \\times \\frac{2}{R} = \\frac{1.10}{R}",
            "Solve for radius of curvature $R$: R = 20 \\times 1.10 = 22\\text{ cm}"
          ],
          "formula": "R = 22\\text{ cm}"
        }
      ],
      "conclusion": "Quick sanity check: for n = 1.5, R = f; since n = 1.55 > 1.5, R must be slightly larger than 20 cm → 22 cm!"
    }
  },
  {
    "id": "imp-phy-9-q9",
    "title": "Concave Lens Image Size & Movement as Object Recedes",
    "shortLabel": "Exer 9.9: Concave Lens Virtual Image",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.9",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "91% Frequency (Concave Diverging Lens Numerical)",
    "questionPrompt": "An object of size 3.0 cm is placed 14 cm in front of a concave lens of focal length 21 cm. Describe the image produced by the lens. What happens if the object is moved further away from the lens?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.9",
      "equations": "1/v - 1/u = 1/f;  m = v/u",
      "figures": "Diverging concave lens image formation",
      "summary": "Computes virtual erect diminished image distance (-8.4 cm) and height (+1.8 cm) for a diverging lens."
    },
    "theory": [
      "For a concave (diverging) lens, focal length is ALWAYS negative ($f = -21\\text{ cm}$), and a real object always forms a virtual, erect, diminished image on the same side between pole $O$ and focus $F$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.9)",
        "setup": "$h = +3.0\\text{ cm},\\ u = -14\\text{ cm},\\ f = -21\\text{ cm}$.",
        "steps": [
          {
            "text": "Apply thin lens formula $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$:",
            "equation": "\\frac{1}{v} = \\frac{1}{-21} + \\frac{1}{-14} = \\frac{-2 - 3}{42} = -\\frac{5}{42} \\implies v = -\\frac{42}{5} = -8.4\\text{ cm}"
          },
          {
            "text": "Calculate image height $h'$ using $m = v/u$:",
            "equation": "m = \\frac{-8.4}{-14} = +0.6 \\implies h' = 0.6 \\times 3.0 = +1.8\\text{ cm}"
          },
          {
            "text": "As object is moved farther away ($|u| \\to \\infty$), the virtual image shifts monotonically towards the focus ($v \\to -21\\text{ cm}$) and keeps shrinking ($h' \\to 0$)."
          }
        ],
        "finalFormula": "v = -8.4\\text{ cm} \\; (\\text{Virtual, erect, } 1.8\\text{ cm}); \\; |u|\\uparrow \\implies v \\to -21\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "f = -21 cm",
      "v = -8.4 cm",
      "h' = +1.8 cm (virtual, erect)",
      "Shifts toward focus F"
    ],
    "termsGlossary": [
      {
        "symbol": "f < 0",
        "term": "Concave Lens Focus",
        "definition": "Diverging lens always takes negative focal length ($-21\\text{ cm}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: $v = -8.4\\text{ cm}$ and $h' = +1.8\\text{ cm}$ (virtual & erect).",
      "1 Mark: Explaining image shifts towards focus $f = -21\\text{ cm}$ and shrinks further."
    ],
    "examinerTips": "Unlike a mirror formula (m = -v/u), a LENS magnification has NO minus sign: m = +v/u!",
    "number": 10,
    "modelAnswer": {
      "statement": "For a concave (diverging) lens, focal length is ALWAYS negative ($f = -21\\text{ cm}$), and a real object always forms a virtual, erect, diminished image on the same side between pole $O$ and focus $F$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.9)",
          "steps": [
            "Apply thin lens formula $\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$: \\frac{1}{v} = \\frac{1}{-21} + \\frac{1}{-14} = \\frac{-2 - 3}{42} = -\\frac{5}{42} \\implies v = -\\frac{42}{5} = -8.4\\text{ cm}",
            "Calculate image height $h'$ using $m = v/u$: m = \\frac{-8.4}{-14} = +0.6 \\implies h' = 0.6 \\times 3.0 = +1.8\\text{ cm}",
            "As object is moved farther away ($|u| \\to \\infty$), the virtual image shifts monotonically towards the focus ($v \\to -21\\text{ cm}$) and keeps shrinking ($h' \\to 0$)."
          ],
          "formula": "v = -8.4\\text{ cm} \\; (\\text{Virtual, erect, } 1.8\\text{ cm}); \\; |u|\\uparrow \\implies v \\to -21\\text{ cm}"
        }
      ],
      "conclusion": "Unlike a mirror formula (m = -v/u), a LENS magnification has NO minus sign: m = +v/u!"
    }
  },
  {
    "id": "imp-phy-9-q11",
    "title": "Compound Microscope Object Distance & Magnifying Power for Both Adjustments",
    "shortLabel": "Exer 9.11: Compound Microscope Two Cases",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.11",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Numerical",
    "frequency": "98% Frequency (Top 5M Optical Instruments Numerical)",
    "questionPrompt": "A compound microscope consists of an objective lens of focal length 2.0 cm and an eyepiece of focal length 6.25 cm separated by a distance of 15 cm. How far from the objective should an object be placed in order to obtain the final image at (a) the least distance of distinct vision (25 cm), and (b) at infinity? What is the magnifying power of the microscope in each case?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.11",
      "equations": "L = |v_o| + |u_e|;  M = (v_o/u_o)(1 + D/f_e) or (v_o/u_o)(D/f_e)",
      "figures": "Compound microscope ray formation",
      "summary": "Works backward from fixed lens separation L = 15 cm and eyepiece target (v_e = -25 cm vs ∞) to find object distance u_o and magnification."
    },
    "theory": [
      "Always solve compound microscope separation problems BACKWARD from the eyepiece: find $|u_e|$ from $v_e$, subtract from lens separation $L = 15\\text{ cm}$ to get $v_o = L - |u_e|$, then solve for $u_o$ using the objective lens formula."
    ],
    "derivations": [
      {
        "name": "Case (a) Final Image at Near Point D = 25 cm & Case (b) At Infinity",
        "setup": "$f_o = +2.0\\text{ cm},\\ f_e = +6.25\\text{ cm},\\ L = |v_o| + |u_e| = 15\\text{ cm}$.",
        "steps": [
          {
            "text": "Case (a) $v_e = -25\\text{ cm}$: Find eyepiece object distance $u_e$:",
            "equation": "\\frac{1}{u_e} = \\frac{1}{-25} - \\frac{1}{6.25} = \\frac{-1 - 4}{25} = -\\frac{5}{25} \\implies u_e = -5.0\\text{ cm}"
          },
          {
            "text": "Objective image distance $v_o = 15 - 5 = +10\\text{ cm}$; find $u_o$ and magnifying power $M_a$:",
            "equation": "\\frac{1}{u_o} = \\frac{1}{10} - \\frac{1}{2.0} = -\\frac{4}{10} \\implies u_o = -2.5\\text{ cm}; \\quad M_a = \\frac{10}{2.5}\\left(1 + \\frac{25}{6.25}\\right) = 4 \\times 5 = 20"
          },
          {
            "text": "Case (b) Final image at $\\infty$ ($u_e' = -f_e = -6.25\\text{ cm}$): $v_o' = 15 - 6.25 = +8.75\\text{ cm}$:",
            "equation": "\\frac{1}{u_o'} = \\frac{1}{8.75} - \\frac{1}{2.0} = -\\frac{6.75}{17.5} \\implies u_o' = -\\frac{17.5}{6.75} = -2.59\\text{ cm}"
          },
          {
            "text": "Magnifying power for relaxed eye ($v_e = \\infty$):",
            "equation": "M_b = \\frac{v_o'}{|u_o'|}\\left(\\frac{D}{f_e}\\right) = \\frac{8.75}{2.59} \\times \\frac{25}{6.25} = 3.38 \\times 4 = 13.5"
          }
        ],
        "finalFormula": "\\text{(a) } |u_o| = 2.5\\text{ cm}, \\; M = 20 \\quad | \\quad \\text{(b) } |u_o'| = 2.59\\text{ cm}, \\; M = 13.5"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Compound Microscope Near Point vs Normal Adjustment",
      "examDrawingGuide": [
        "Select Compound Microscope tab to compare intermediate image I1 inside f_e."
      ]
    },
    "keyPointsAndKeywords": [
      "Backward trace from eyepiece",
      "Case (a): uo = -2.5 cm, M = 20",
      "Case (b): uo' = -2.59 cm, M = 13.5"
    ],
    "termsGlossary": [
      {
        "symbol": "L = |v_o| + |u_e|",
        "term": "Separation Between Lenses",
        "definition": "Distance between objective and eyepiece fixed at $15\\text{ cm}$."
      }
    ],
    "markingScheme": [
      "2.5 Marks: Case (a) finding $u_e = -5\\text{ cm}$, $v_o = 10\\text{ cm}$, $u_o = -2.5\\text{ cm}$, and $M = 20$.",
      "2.5 Marks: Case (b) $u_e = -6.25\\text{ cm}$, $v_o = 8.75\\text{ cm}$, $u_o = -2.59\\text{ cm}$, and $M = 13.5$."
    ],
    "examinerTips": "In both cases $|u_o|$ lies just outside $f_o = 2.0\\text{ cm}$ ($2.5\\text{ cm}$ and $2.59\\text{ cm}$)! Check your answer against $f_o < |u_o| < 2f_o$!",
    "number": 11,
    "modelAnswer": {
      "statement": "Always solve compound microscope separation problems BACKWARD from the eyepiece: find $|u_e|$ from $v_e$, subtract from lens separation $L = 15\\text{ cm}$ to get $v_o = L - |u_e|$, then solve for $u_o$ using the objective lens formula.",
      "derivations": [
        {
          "name": "Case (a) Final Image at Near Point D = 25 cm & Case (b) At Infinity",
          "steps": [
            "Case (a) $v_e = -25\\text{ cm}$: Find eyepiece object distance $u_e$: \\frac{1}{u_e} = \\frac{1}{-25} - \\frac{1}{6.25} = \\frac{-1 - 4}{25} = -\\frac{5}{25} \\implies u_e = -5.0\\text{ cm}",
            "Objective image distance $v_o = 15 - 5 = +10\\text{ cm}$; find $u_o$ and magnifying power $M_a$: \\frac{1}{u_o} = \\frac{1}{10} - \\frac{1}{2.0} = -\\frac{4}{10} \\implies u_o = -2.5\\text{ cm}; \\quad M_a = \\frac{10}{2.5}\\left(1 + \\frac{25}{6.25}\\right) = 4 \\times 5 = 20",
            "Case (b) Final image at $\\infty$ ($u_e' = -f_e = -6.25\\text{ cm}$): $v_o' = 15 - 6.25 = +8.75\\text{ cm}$: \\frac{1}{u_o'} = \\frac{1}{8.75} - \\frac{1}{2.0} = -\\frac{6.75}{17.5} \\implies u_o' = -\\frac{17.5}{6.75} = -2.59\\text{ cm}",
            "Magnifying power for relaxed eye ($v_e = \\infty$): M_b = \\frac{v_o'}{|u_o'|}\\left(\\frac{D}{f_e}\\right) = \\frac{8.75}{2.59} \\times \\frac{25}{6.25} = 3.38 \\times 4 = 13.5"
          ],
          "formula": "\\text{(a) } |u_o| = 2.5\\text{ cm}, \\; M = 20 \\quad | \\quad \\text{(b) } |u_o'| = 2.59\\text{ cm}, \\; M = 13.5"
        }
      ],
      "conclusion": "In both cases $|u_o|$ lies just outside $f_o = 2.0\\text{ cm}$ ($2.5\\text{ cm}$ and $2.59\\text{ cm}$)! Check your answer against $f_o < |u_o| < 2f_o$!"
    }
  },
  {
    "id": "imp-phy-9-q13",
    "title": "Small Astronomical Telescope Magnifying Power & Tube Length",
    "shortLabel": "Exer 9.13: Small Telescope Mag & Length",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.13",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency (High-Yield 2M Astronomical Telescope Question)",
    "questionPrompt": "A small telescope has an objective lens of focal length 144 cm and an eyepiece of focal length 6.0 cm. What is the magnifying power of the telescope? What is the separation between the objective and the eyepiece?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.13",
      "equations": "|m| = f_o / f_e;  L = f_o + f_e (Normal adjustment)",
      "figures": "Refracting astronomical telescope",
      "summary": "Direct normal-adjustment calculation for magnifying power (-24) and tube separation (150 cm)."
    },
    "theory": [
      "Unless stated otherwise, a telescope operates in normal adjustment (final image at $\\infty$), where magnifying power magnitude is $M = f_o/f_e$ and lens separation is $L = f_o + f_e$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.13)",
        "setup": "$f_o = 144\\text{ cm},\\ f_e = 6.0\\text{ cm}$.",
        "steps": [
          {
            "text": "Magnifying power (magnitude $|m| = 24$, negative sign for inverted final image):",
            "equation": "m = -\\frac{f_o}{f_e} = -\\frac{144}{6.0} = -24"
          },
          {
            "text": "Separation between objective and eyepiece in normal adjustment:",
            "equation": "L = f_o + f_e = 144 + 6.0 = 150\\text{ cm} = 1.50\\text{ m}"
          }
        ],
        "finalFormula": "M = 24 \\; (\\text{inverted}), \\qquad L = 150\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Astronomical Telescope Normal Adjustment",
      "examDrawingGuide": [
        "Select Telescope tab in diagram viewer."
      ]
    },
    "keyPointsAndKeywords": [
      "m = -fo/fe = -24",
      "L = fo + fe = 150 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "L = f_o + f_e",
        "term": "Telescope Tube Length",
        "definition": "Optical separation between objective and eyepiece for relaxed eye viewing."
      }
    ],
    "markingScheme": [
      "1 Mark: Magnifying power $24$ (or $-24$).",
      "1 Mark: Separation $L = 150\\text{ cm}$."
    ],
    "examinerTips": "Write BOTH magnitude (24) and mention inverted final image (-24) so neither marking convention deducts half a mark!",
    "number": 12,
    "modelAnswer": {
      "statement": "Unless stated otherwise, a telescope operates in normal adjustment (final image at $\\infty$), where magnifying power magnitude is $M = f_o/f_e$ and lens separation is $L = f_o + f_e$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.13)",
          "steps": [
            "Magnifying power (magnitude $|m| = 24$, negative sign for inverted final image): m = -\\frac{f_o}{f_e} = -\\frac{144}{6.0} = -24",
            "Separation between objective and eyepiece in normal adjustment: L = f_o + f_e = 144 + 6.0 = 150\\text{ cm} = 1.50\\text{ m}"
          ],
          "formula": "M = 24 \\; (\\text{inverted}), \\qquad L = 150\\text{ cm}"
        }
      ],
      "conclusion": "Write BOTH magnitude (24) and mention inverted final image (-24) so neither marking convention deducts half a mark!"
    }
  },
  {
    "id": "imp-phy-9-q14",
    "title": "Giant Observatory Telescope Angular Magnification & Lunar Image Diameter",
    "shortLabel": "Exer 9.14: Observatory Telescope Moon Image",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.14",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "94% Frequency (Very Frequent CBSE Telescope + Angular Diameter PYQ)",
    "questionPrompt": "(a) A giant refracting telescope at an observatory has an objective lens of focal length 15 m. If an eyepiece of focal length 1.0 cm is used, what is the angular magnification of the telescope?\n(b) If this telescope is used to view the moon, what is the diameter of the image of the moon formed by the objective lens? The diameter of the moon is 3.48 × 10⁶ m, and the radius of lunar orbit is 3.8 × 10⁸ m.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.14",
      "equations": "M = f_o / f_e;  θ = D_moon / R_orbit = d_img / f_o",
      "figures": "Angular subtense at objective",
      "summary": "Matches angular diameter of Moon at objective with focal-plane image diameter (13.7 cm)."
    },
    "theory": [
      "Because the Moon is practically at infinity compared to $f_o = 15\\text{ m}$, its image forms in the focal plane of the objective and subtends the exact same visual angle $\\alpha$: $\\alpha = \\frac{D_{\\text{moon}}}{R_{\\text{orbit}}} = \\frac{d_{\\text{img}}}{f_o}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.14)",
        "setup": "$f_o = 15\\text{ m},\\ f_e = 1.0\\text{ cm} = 0.01\\text{ m},\\ D_M = 3.48\\times 10^6\\text{ m},\\ r = 3.8\\times 10^8\\text{ m}$.",
        "steps": [
          {
            "text": "(a) Angular magnification in normal adjustment (watch consistent metre/cm units!):",
            "equation": "M = \\frac{f_o}{f_e} = \\frac{15\\text{ m}}{0.01\\text{ m}} = 1500"
          },
          {
            "text": "(b) Equate visual angle $\\alpha$ subtended by the Moon and its focal-plane image:",
            "equation": "\\frac{d_{\\text{img}}}{f_o} = \\frac{D_M}{r} \\implies d_{\\text{img}} = \\frac{3.48 \\times 10^6}{3.8 \\times 10^8} \\times 15\\text{ m} = 0.1374\\text{ m} = 13.74\\text{ cm}"
          }
        ],
        "finalFormula": "\\text{(a) } M = 1500, \\qquad \\text{(b) } d_{\\text{img}} = 13.74\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Unit match fo=1500 cm, fe=1 cm",
      "M = 1500",
      "Equal angle d/fo = D/r",
      "Moon image = 13.7 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "\\alpha",
        "term": "Angular Subtense",
        "definition": "Angle subtended by distant Moon ($\\approx 0.00916\\text{ rad}$) at objective."
      }
    ],
    "markingScheme": [
      "1 Mark: Angular magnification $M = 1500$ after unit conversion.",
      "2 Marks: Equating subtended angle $d/f_o = D_M / r$ to find $13.7\\text{ cm}$."
    ],
    "examinerTips": "Do not forget f_o is in METRES (15 m) and f_e is in CENTIMETRES (1.0 cm) — convert both to cm (1500 / 1) or metres (15 / 0.01)!",
    "number": 13,
    "modelAnswer": {
      "statement": "Because the Moon is practically at infinity compared to $f_o = 15\\text{ m}$, its image forms in the focal plane of the objective and subtends the exact same visual angle $\\alpha$: $\\alpha = \\frac{D_{\\text{moon}}}{R_{\\text{orbit}}} = \\frac{d_{\\text{img}}}{f_o}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.14)",
          "steps": [
            "(a) Angular magnification in normal adjustment (watch consistent metre/cm units!): M = \\frac{f_o}{f_e} = \\frac{15\\text{ m}}{0.01\\text{ m}} = 1500",
            "(b) Equate visual angle $\\alpha$ subtended by the Moon and its focal-plane image: \\frac{d_{\\text{img}}}{f_o} = \\frac{D_M}{r} \\implies d_{\\text{img}} = \\frac{3.48 \\times 10^6}{3.8 \\times 10^8} \\times 15\\text{ m} = 0.1374\\text{ m} = 13.74\\text{ cm}"
          ],
          "formula": "\\text{(a) } M = 1500, \\qquad \\text{(b) } d_{\\text{img}} = 13.74\\text{ cm}"
        }
      ],
      "conclusion": "Do not forget f_o is in METRES (15 m) and f_e is in CENTIMETRES (1.0 cm) — convert both to cm (1500 / 1) or metres (15 / 0.01)!"
    }
  },
  {
    "id": "imp-phy-9-q16",
    "title": "Apparent Rise of Pin Viewed Vertically Through a 15 cm Glass Slab",
    "shortLabel": "Exer 9.16: Apparent Rise Through Glass Slab",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.16",
    "subtopicId": "phy-sub-9-2",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "93% Frequency (Normal Shift Proof & Slab Independence Question)",
    "questionPrompt": "A small pin fixed on a table top is viewed from above from a distance of 50 cm. By what distance would the pin appear to be raised if it is viewed from the same point through a 15 cm thick glass slab held parallel to the table? Refractive index of glass = 1.5. Does the answer depend on the location of the slab?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.16",
      "equations": "Δt = t(1 - 1/n)",
      "figures": "Normal shift by parallel-sided glass plate",
      "summary": "Computes upward normal shift 5 cm and notes independence from vertical placement between table and eye."
    },
    "theory": [
      "A parallel-sided glass slab of thickness $t$ and index $n$ shifts any object viewed near-normally TOWARD the observer by $\\Delta t = t\\left(1 - \\frac{1}{n}\\right)$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.16)",
        "setup": "Slab thickness $t = 15\\text{ cm},\\ n = 1.5$, viewing distance $50\\text{ cm}$ (extraneous for shift!).",
        "steps": [
          {
            "text": "Compute normal upward shift $\\Delta t$:",
            "equation": "\\Delta t = t\\left(1 - \\frac{1}{n}\\right) = 15\\left(1 - \\frac{1}{1.5}\\right) = 15 \\times \\frac{1}{3} = 5.0\\text{ cm}"
          },
          {
            "text": "Dependence on slab location: NO — the normal shift $t(1 - 1/n)$ depends ONLY on slab thickness $t$ and refractive index $n$ (as long as the slab lies anywhere between the pin and the eye for small viewing angles)."
          }
        ],
        "finalFormula": "\\text{Pin appears raised by } 5.0\\text{ cm (Independent of slab position)}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "50 cm viewing distance is distractor",
      "Shift = t(1 - 1/n) = 5 cm",
      "Independent of slab location"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Delta t",
        "term": "Normal Shift",
        "definition": "Apparent elevation $t(1 - 1/n)$ produced along normal viewing line."
      }
    ],
    "markingScheme": [
      "1 Mark: Applying $\\Delta t = t(1 - 1/n) = 5.0\\text{ cm}$.",
      "1 Mark: Stating 'No, shift is independent of slab location'."
    ],
    "examinerTips": "Do not let '50 cm' confuse you! Viewing distance is NOT used in Δt = t(1 − 1/n)!",
    "number": 14,
    "modelAnswer": {
      "statement": "A parallel-sided glass slab of thickness $t$ and index $n$ shifts any object viewed near-normally TOWARD the observer by $\\Delta t = t\\left(1 - \\frac{1}{n}\\right)$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.16)",
          "steps": [
            "Compute normal upward shift $\\Delta t$: \\Delta t = t\\left(1 - \\frac{1}{n}\\right) = 15\\left(1 - \\frac{1}{1.5}\\right) = 15 \\times \\frac{1}{3} = 5.0\\text{ cm}",
            "Dependence on slab location: NO — the normal shift $t(1 - 1/n)$ depends ONLY on slab thickness $t$ and refractive index $n$ (as long as the slab lies anywhere between the pin and the eye for small viewing angles)."
          ],
          "formula": "\\text{Pin appears raised by } 5.0\\text{ cm (Independent of slab position)}"
        }
      ],
      "conclusion": "Do not let '50 cm' confuse you! Viewing distance is NOT used in Δt = t(1 − 1/n)!"
    }
  },
  {
    "id": "imp-phy-9-q17",
    "title": "Acceptance Cone Angles of a Clad Optical Fibre Light Pipe (n_1=1.68, n_2=1.44)",
    "shortLabel": "Exer 9.17: Optical Fibre Light Pipe TIR",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.17",
    "subtopicId": "phy-sub-9-2",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Numerical",
    "frequency": "97% Frequency (Classic CBSE Light-Pipe / Fibre Numerical)",
    "questionPrompt": "(a) Fig. 9.28 shows a cross-section of a 'light pipe' made of a glass fibre of refractive index 1.68. The outer covering of the pipe is made of a material of refractive index 1.44. What is the range of the angles of the incident rays with the axis of the pipe for which total internal reflections inside the pipe take place, as shown in the figure?\n(b) What is the answer if there is no outer covering of the pipe?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.17",
      "equations": "sin i_c = n_2 / n_1;  r_max = 90° - i_c;  sin i_max = n_1 sin r_max",
      "figures": "Fig. 9.28",
      "summary": "Derives acceptance angle (< 60° clad, < 90° bare air) for total internal reflection inside an optical fibre."
    },
    "theory": [
      "A ray entering end face at angle $i$ refracts at angle $r$, then strikes the cylindrical core-cladding wall at internal incidence angle $i' = 90^\\circ - r$.",
      "For TIR inside the pipe, $i' > i_c \\implies r < 90^\\circ - i_c \\implies i < i_{\\max}$."
    ],
    "derivations": [
      {
        "name": "Clad vs Unclad Fibre Calculation (Exercise 9.17)",
        "setup": "Core $n_1 = 1.68$, Cladding $n_2 = 1.44$, Surrounding air $n_0 = 1.0$.",
        "steps": [
          {
            "text": "(a) Core-cladding critical angle $i_c$:",
            "equation": "\\sin i_c = \\frac{n_2}{n_1} = \\frac{1.44}{1.68} = \\frac{6}{7} = 0.8571 \\implies i_c = 59^\\circ"
          },
          {
            "text": "Maximum allowed angle of refraction at front face is $r_{\\max} = 90^\\circ - 59^\\circ = 31^\\circ$; apply Snell's law at entrance:",
            "equation": "1 \\cdot \\sin i_{\\max} = 1.68 \\sin 31^\\circ = 1.68 \\times 0.5150 = 0.8652 \\implies i_{\\max} = 60^\\circ"
          },
          {
            "text": "(b) Without cladding (air $n_2 = 1.0$): $\\sin i_c = \\frac{1}{1.68} = 0.5952 \\implies i_c = 36.5^\\circ$, so $r_{\\max} = 53.5^\\circ$:",
            "equation": "\\sin i_{\\max} = 1.68 \\sin 53.5^\\circ = 1.68 \\times 0.8039 = 1.35 > 1"
          },
          {
            "text": "Even grazing incidence $i = 90^\\circ$ refracts at $\\sin r = 1/1.68 \\implies r = 36.5^\\circ < 53.5^\\circ$, meaning ALL rays from $0^\\circ < i < 90^\\circ$ suffer TIR!"
          }
        ],
        "finalFormula": "\\text{(a) Clad: } 0^\\circ < i < 60^\\circ \\quad | \\quad \\text{(b) Unclad: } 0^\\circ < i < 90^\\circ \\; (\\text{all entering rays})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "i' = 90° - r geometry",
      "sin i_c = 1.44/1.68",
      "Acceptance range 0° to 60°",
      "Unclad TIR 0° to 90°"
    ],
    "termsGlossary": [
      {
        "symbol": "i_{\\max}",
        "term": "Acceptance Angle",
        "definition": "Maximum entrance angle ($60^\\circ$ clad) allowing core-cladding TIR."
      }
    ],
    "markingScheme": [
      "2 Marks: Finding $i_c = 59^\\circ$ and $r_{\\max} = 31^\\circ$ in part (a).",
      "1.5 Marks: Snell's law giving $0^\\circ < i < 60^\\circ$.",
      "1.5 Marks: Part (b) showing $i_c = 36.5^\\circ$ and proving all rays ($0^\\circ$–$90^\\circ$) reflect totally."
    ],
    "examinerTips": "Key identity: note that n₁ sin(90° − i_c) = n₁ cos i_c = √(n₁² − n₂²) = √(1.68² − 1.44²) ≈ 0.865 = Numerical Aperture!",
    "number": 15,
    "modelAnswer": {
      "statement": "A ray entering end face at angle $i$ refracts at angle $r$, then strikes the cylindrical core-cladding wall at internal incidence angle $i' = 90^\\circ - r$.\nFor TIR inside the pipe, $i' > i_c \\implies r < 90^\\circ - i_c \\implies i < i_{\\max}$.",
      "derivations": [
        {
          "name": "Clad vs Unclad Fibre Calculation (Exercise 9.17)",
          "steps": [
            "(a) Core-cladding critical angle $i_c$: \\sin i_c = \\frac{n_2}{n_1} = \\frac{1.44}{1.68} = \\frac{6}{7} = 0.8571 \\implies i_c = 59^\\circ",
            "Maximum allowed angle of refraction at front face is $r_{\\max} = 90^\\circ - 59^\\circ = 31^\\circ$; apply Snell's law at entrance: 1 \\cdot \\sin i_{\\max} = 1.68 \\sin 31^\\circ = 1.68 \\times 0.5150 = 0.8652 \\implies i_{\\max} = 60^\\circ",
            "(b) Without cladding (air $n_2 = 1.0$): $\\sin i_c = \\frac{1}{1.68} = 0.5952 \\implies i_c = 36.5^\\circ$, so $r_{\\max} = 53.5^\\circ$: \\sin i_{\\max} = 1.68 \\sin 53.5^\\circ = 1.68 \\times 0.8039 = 1.35 > 1",
            "Even grazing incidence $i = 90^\\circ$ refracts at $\\sin r = 1/1.68 \\implies r = 36.5^\\circ < 53.5^\\circ$, meaning ALL rays from $0^\\circ < i < 90^\\circ$ suffer TIR!"
          ],
          "formula": "\\text{(a) Clad: } 0^\\circ < i < 60^\\circ \\quad | \\quad \\text{(b) Unclad: } 0^\\circ < i < 90^\\circ \\; (\\text{all entering rays})"
        }
      ],
      "conclusion": "Key identity: note that n₁ sin(90° − i_c) = n₁ cos i_c = √(n₁² − n₂²) = √(1.68² − 1.44²) ≈ 0.865 = Numerical Aperture!"
    }
  },
  {
    "id": "imp-phy-9-q19",
    "title": "Maximum Focal Length of Convex Lens to Image Bulb on Wall 3 m Away",
    "shortLabel": "Exer 9.19: Minimum Object-Screen Distance 4f",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.19",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "98% Frequency (Displacement Method / D ≥ 4f Classic Board Q)",
    "questionPrompt": "The image of a small electric bulb fixed on the wall of a room is to be obtained on the opposite wall 3 m away by means of a large convex lens. What is the maximum possible focal length of the lens required for the purpose?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.19",
      "equations": "D ≥ 4f  ⟹  f_max = D / 4",
      "figures": "Displacement method conjugate foci",
      "summary": "Derives real-discriminant condition D ≥ 4f for forming a real image across fixed wall separation D = 3 m."
    },
    "theory": [
      "If object-to-screen distance is $D$ and lens is placed at $x$ from the bulb ($u = -x, v = +(D - x)$), lens formula yields a quadratic $x^2 - Dx + Df = 0$.",
      "For a real solution $x$ to exist, discriminant $D^2 - 4Df \\ge 0 \\implies D \\ge 4f \\implies f_{\\max} = D/4$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Proof & Answer (Exercise 9.19)",
        "setup": "Fixed separation between bulb and opposite wall $D = 3.0\\text{ m}$. Let $u = -x$ and $v = D - x$.",
        "steps": [
          {
            "text": "Substitute into lens equation $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$:",
            "equation": "\\frac{1}{D - x} + \\frac{1}{x} = \\frac{1}{f} \\implies x^2 - D x + D f = 0"
          },
          {
            "text": "Require real roots ($\\Delta \\ge 0$) for lens placement $x$:",
            "equation": "D^2 - 4 D f \\ge 0 \\implies f \\le \\frac{D}{4}"
          },
          {
            "text": "Substitute $D = 3.0\\text{ m}$:",
            "equation": "f_{\\max} = \\frac{3.0\\text{ m}}{4} = 0.75\\text{ m} = 75\\text{ cm}"
          }
        ],
        "finalFormula": "f_{\\max} = \\frac{D}{4} = 0.75\\text{ m} \\; (75\\text{ cm})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "D >= 4f real-image condition",
      "f_max = D/4",
      "75 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "D \\ge 4f",
        "term": "Conjugate Focus Condition",
        "definition": "Minimum wall-to-wall separation needed for a convex lens to form a real image."
      }
    ],
    "markingScheme": [
      "1 Mark: Deriving or quoting real-root condition $f \\le D/4$.",
      "1 Mark: Substituting $D = 3\\text{ m}$ to obtain $f_{\\max} = 0.75\\text{ m} = 75\\text{ cm}$."
    ],
    "examinerTips": "Showing the 2-line quadratic discriminant proof x² − Dx + Df = 0 immediately locks in full 2/2 marks instead of just stating D = 4f from memory.",
    "number": 16,
    "modelAnswer": {
      "statement": "If object-to-screen distance is $D$ and lens is placed at $x$ from the bulb ($u = -x, v = +(D - x)$), lens formula yields a quadratic $x^2 - Dx + Df = 0$.\nFor a real solution $x$ to exist, discriminant $D^2 - 4Df \\ge 0 \\implies D \\ge 4f \\implies f_{\\max} = D/4$.",
      "derivations": [
        {
          "name": "Step-by-Step Proof & Answer (Exercise 9.19)",
          "steps": [
            "Substitute into lens equation $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$: \\frac{1}{D - x} + \\frac{1}{x} = \\frac{1}{f} \\implies x^2 - D x + D f = 0",
            "Require real roots ($\\Delta \\ge 0$) for lens placement $x$: D^2 - 4 D f \\ge 0 \\implies f \\le \\frac{D}{4}",
            "Substitute $D = 3.0\\text{ m}$: f_{\\max} = \\frac{3.0\\text{ m}}{4} = 0.75\\text{ m} = 75\\text{ cm}"
          ],
          "formula": "f_{\\max} = \\frac{D}{4} = 0.75\\text{ m} \\; (75\\text{ cm})"
        }
      ],
      "conclusion": "Showing the 2-line quadratic discriminant proof x² − Dx + Df = 0 immediately locks in full 2/2 marks instead of just stating D = 4f from memory."
    }
  },
  {
    "id": "imp-phy-9-q21",
    "title": "Prism Incidence Angle for Just Total Internal Reflection at Exit Face",
    "shortLabel": "Exer 9.21: Prism TIR Incidence Angle",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.21",
    "subtopicId": "phy-sub-9-4",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Most Frequently Repeated Ch 9 Prism Numerical)",
    "questionPrompt": "At what angle should a ray of light be incident on the face of a prism of refracting angle 60° so that it just suffers total internal reflection at the other face? The refractive index of the material of the prism is 1.524.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.21",
      "equations": "sin i_c = 1/n;  r₁ + r₂ = A;  sin i = n sin r₁",
      "figures": "Grazing emergence at second prism face",
      "summary": "Traces critical angle back from second prism face (r₂ = i_c ≈ 41°) through r₁ = 19° to find incidence i ≈ 29.8°."
    },
    "theory": [
      "To 'just suffer TIR' at the second face, the ray hits the second face at $r_2 = i_c$ (grazing along the second face, $e = 90^\\circ$). Notice this gives the MINIMUM angle of incidence $i$ below which TIR occurs inside the prism!"
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 9.21)",
        "setup": "Prism angle $A = 60^\\circ$, refractive index $n = 1.524$, condition $r_2 = i_c$.",
        "steps": [
          {
            "text": "Critical angle at glass-air second face ($r_2 = i_c$):",
            "equation": "\\sin i_c = \\frac{1}{1.524} = 0.6562 \\implies r_2 = i_c \\approx 41^\\circ"
          },
          {
            "text": "Use prism angle relation $r_1 + r_2 = A$ to find first refraction angle $r_1$:",
            "equation": "r_1 = A - r_2 = 60^\\circ - 41^\\circ = 19^\\circ"
          },
          {
            "text": "Apply Snell's law at first face ($\\sin 19^\\circ \\approx 0.3256$):",
            "equation": "\\sin i = n \\sin r_1 = 1.524 \\times 0.3256 = 0.4962 \\implies i = \\sin^{-1}(0.4962) \\approx 29.75^\\circ \\; (\\text{or } 29^\\circ 45')"
          }
        ],
        "finalFormula": "i = 29.75^\\circ \\; (\\approx 29.8^\\circ \\text{ to } 30^\\circ)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "prism-dispersion",
      "title": "Prism Geometry r₁ + r₂ = A",
      "examDrawingGuide": [
        "Sketch ray refracting along second face (r₂ = i_c = 41°) and mark i ≈ 29.8°."
      ]
    },
    "keyPointsAndKeywords": [
      "sin ic = 1/1.524 -> 41°",
      "r1 = 60° - 41° = 19°",
      "i = sin⁻¹(1.524 sin 19°) ≈ 29.8°"
    ],
    "termsGlossary": [
      {
        "symbol": "r_2 = i_c",
        "term": "Limiting Exit Angle",
        "definition": "Any smaller incidence $i < 29.8^\\circ$ decreases $r_1$, pushing $r_2 > i_c$ so ray reflects internally."
      }
    ],
    "markingScheme": [
      "1 Mark: Computing $i_c \\approx 41^\\circ$ from $1/1.524$.",
      "1 Mark: Computing $r_1 = 60^\\circ - 41^\\circ = 19^\\circ$.",
      "1 Mark: Snell's law yielding $i \\approx 29.75^\\circ$ (accept $29.8^\\circ$–$30^\\circ$)."
    ],
    "examinerTips": "For i < 29.8°, r₁ decreases so r₂ increases ABOVE i_c, causing TIR; for i > 29.8°, the ray emerges normally out the second face!",
    "number": 17,
    "modelAnswer": {
      "statement": "To 'just suffer TIR' at the second face, the ray hits the second face at $r_2 = i_c$ (grazing along the second face, $e = 90^\\circ$). Notice this gives the MINIMUM angle of incidence $i$ below which TIR occurs inside the prism!",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 9.21)",
          "steps": [
            "Critical angle at glass-air second face ($r_2 = i_c$): \\sin i_c = \\frac{1}{1.524} = 0.6562 \\implies r_2 = i_c \\approx 41^\\circ",
            "Use prism angle relation $r_1 + r_2 = A$ to find first refraction angle $r_1$: r_1 = A - r_2 = 60^\\circ - 41^\\circ = 19^\\circ",
            "Apply Snell's law at first face ($\\sin 19^\\circ \\approx 0.3256$): \\sin i = n \\sin r_1 = 1.524 \\times 0.3256 = 0.4962 \\implies i = \\sin^{-1}(0.4962) \\approx 29.75^\\circ \\; (\\text{or } 29^\\circ 45')"
          ],
          "formula": "i = 29.75^\\circ \\; (\\approx 29.8^\\circ \\text{ to } 30^\\circ)"
        }
      ],
      "conclusion": "For i < 29.8°, r₁ decreases so r₂ increases ABOVE i_c, causing TIR; for i > 29.8°, the ray emerges normally out the second face!"
    }
  },
  {
    "id": "imp-phy-9-q26",
    "title": "Setting Up a Compound Microscope for 30× Angular Magnification",
    "shortLabel": "Exer 9.26: Microscope 30X Design",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.26",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Numerical",
    "frequency": "98% Frequency (Landmark 5M CBSE Board Design Problem)",
    "questionPrompt": "An angular magnification (magnifying power) of 30X is desired using an objective of focal length 1.25 cm and an eyepiece of focal length 5 cm. How will you set up the compound microscope?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.26",
      "equations": "M = m_o × m_e;  m_e = 1 + D/f_e;  L = |v_o| + |u_e|",
      "figures": "Compound microscope optical design",
      "summary": "Determines required object distance (1.5 cm) and lens separation (11.67 cm) to achieve M = 30 at near point D = 25 cm."
    },
    "theory": [
      "To specify 'how to set up' a compound microscope, find: (1) where to place the specimen ($u_o$ in front of objective), and (2) the separation distance $L = v_o + |u_e|$ between objective and eyepiece.",
      "Standard setup places final virtual image at least distance of distinct vision ($D = 25\\text{ cm}$), giving eyepiece magnification $m_e = 1 + D/f_e$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Design Solution (Exercise 9.26)",
        "setup": "$M = 30$, $f_o = 1.25\\text{ cm}$, $f_e = 5\\text{ cm}$, $D = 25\\text{ cm}$.",
        "steps": [
          {
            "text": "Calculate angular magnification of the eyepiece (with $v_e = -25\\text{ cm}$):",
            "equation": "m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{5} = 6"
          },
          {
            "text": "Required linear magnification of objective ($v_o > 0, u_o < 0 \\implies m_o = -5$):",
            "equation": "|m_o| = \\frac{M}{m_e} = \\frac{30}{6} = 5 \\implies v_o = -5 u_o \\; (|v_o| = 5|u_o|)"
          },
          {
            "text": "Apply objective lens formula $\\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o}$ with $v_o = -5u_o$:",
            "equation": "\\frac{1}{-5 u_o} - \\frac{1}{u_o} = \\frac{1}{1.25} \\implies -\\frac{6}{5 u_o} = \\frac{4}{5} \\implies u_o = -1.5\\text{ cm}"
          },
          {
            "text": "Calculate $v_o$ and eyepiece object distance $u_e$ (since $v_e = -25\\text{ cm}$):",
            "equation": "v_o = 5(1.5) = +7.5\\text{ cm}; \\quad \\frac{1}{u_e} = -\\frac{1}{25} - \\frac{1}{5} = -\\frac{6}{25} \\implies u_e = -4.17\\text{ cm}"
          },
          {
            "text": "Total lens separation (length of microscope):",
            "equation": "L = v_o + |u_e| = 7.5 + 4.17 = 11.67\\text{ cm}"
          }
        ],
        "finalFormula": "\\text{Object at } 1.5\\text{ cm in front of objective}, \\quad \\text{Lens separation } L = 11.67\\text{ cm}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Compound Microscope Near-Point Setup",
      "examDrawingGuide": [
        "Label |uo| = 1.5 cm, vo = 7.5 cm, |ue| = 4.17 cm, L = 11.67 cm."
      ]
    },
    "keyPointsAndKeywords": [
      "m_e = 6",
      "m_o = -5 (real inverted intermediate)",
      "uo = -1.5 cm",
      "Separation L = 11.67 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "m_o = v_o / u_o",
        "term": "Objective Transverse Magnification",
        "definition": "Negative ($-5$) because objective creates a real inverted intermediate image $I_1$."
      }
    ],
    "markingScheme": [
      "1 Mark: Eyepiece magnification $m_e = 6$ and $m_o = -5$.",
      "2 Marks: Objective formula solving $u_o = -1.5\\text{ cm}$ and $v_o = 7.5\\text{ cm}$.",
      "2 Marks: Finding $u_e = -4.17\\text{ cm}$ and total lens separation $L = 11.67\\text{ cm}$."
    ],
    "examinerTips": "Be super careful with sign convention: real inverted intermediate image means v_o / u_o = -5 (NOT +5)! Using +5 gives wrong u_o = -1.0 cm!",
    "number": 18,
    "modelAnswer": {
      "statement": "To specify 'how to set up' a compound microscope, find: (1) where to place the specimen ($u_o$ in front of objective), and (2) the separation distance $L = v_o + |u_e|$ between objective and eyepiece.\nStandard setup places final virtual image at least distance of distinct vision ($D = 25\\text{ cm}$), giving eyepiece magnification $m_e = 1 + D/f_e$.",
      "derivations": [
        {
          "name": "Step-by-Step Design Solution (Exercise 9.26)",
          "steps": [
            "Calculate angular magnification of the eyepiece (with $v_e = -25\\text{ cm}$): m_e = 1 + \\frac{D}{f_e} = 1 + \\frac{25}{5} = 6",
            "Required linear magnification of objective ($v_o > 0, u_o < 0 \\implies m_o = -5$): |m_o| = \\frac{M}{m_e} = \\frac{30}{6} = 5 \\implies v_o = -5 u_o \\; (|v_o| = 5|u_o|)",
            "Apply objective lens formula $\\frac{1}{v_o} - \\frac{1}{u_o} = \\frac{1}{f_o}$ with $v_o = -5u_o$: \\frac{1}{-5 u_o} - \\frac{1}{u_o} = \\frac{1}{1.25} \\implies -\\frac{6}{5 u_o} = \\frac{4}{5} \\implies u_o = -1.5\\text{ cm}",
            "Calculate $v_o$ and eyepiece object distance $u_e$ (since $v_e = -25\\text{ cm}$): v_o = 5(1.5) = +7.5\\text{ cm}; \\quad \\frac{1}{u_e} = -\\frac{1}{25} - \\frac{1}{5} = -\\frac{6}{25} \\implies u_e = -4.17\\text{ cm}",
            "Total lens separation (length of microscope): L = v_o + |u_e| = 7.5 + 4.17 = 11.67\\text{ cm}"
          ],
          "formula": "\\text{Object at } 1.5\\text{ cm in front of objective}, \\quad \\text{Lens separation } L = 11.67\\text{ cm}"
        }
      ],
      "conclusion": "Be super careful with sign convention: real inverted intermediate image means v_o / u_o = -5 (NOT +5)! Using +5 gives wrong u_o = -1.0 cm!"
    }
  },
  {
    "id": "imp-phy-9-q29",
    "title": "Magnifier Area Magnification vs Angular Magnifying Power (1 mm² Squares)",
    "shortLabel": "Exer 9.29: Card Squares Area vs Angular Mag",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 9.29",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "95% Frequency (Essential Simple Microscope Concept Trap)",
    "questionPrompt": "A card sheet divided into squares each of size 1 mm² is being viewed at a distance of 9 cm through a magnifying glass (a converging lens of focal length 10 cm) held close to the eye.\n(a) What is the magnification produced by the lens? How much is the area of each square in the virtual image?\n(b) What is the angular magnification (magnifying power) of the lens?\n(c) Is the magnification in (a) equal to the magnifying power in (b)? Explain.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Exercise 9.29",
      "equations": "m = v/u;  A' = m² A;  Angular M = D / |u|",
      "figures": "Simple microscope angular vs lateral magnification",
      "summary": "Distinguishes linear/areal magnification (m = 10, A' = 100 mm² = 1 cm²) from angular magnifying power (M = 25/9 ≈ 2.8)."
    },
    "theory": [
      "Linear magnification ($m = v/u = h_i/h_o$) scales height AND width, so 2D image area scales as $m^2$.",
      "Angular magnification (magnifying power) is the ratio of visual angle subtended by the virtual image at the eye ($\\theta_i = h_o/|u|$) to that subtended by the unaided object at $D = 25\\text{ cm}$ ($\\theta_o = h_o/D$): $M = D/|u|$."
    ],
    "derivations": [
      {
        "name": "3-Part Simple Microscope Solution (Exercise 9.29)",
        "setup": "$A = 1\\text{ mm}^2,\\ u = -9\\text{ cm},\\ f = +10\\text{ cm},\\ D = 25\\text{ cm}$.",
        "steps": [
          {
            "text": "(a) Find image distance $v$, linear magnification $m$, and virtual image square area $A'$:",
            "equation": "\\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-9} = -\\frac{1}{90} \\implies v = -90\\text{ cm}; \\quad m = \\frac{-90}{-9} = 10"
          },
          {
            "text": "Area of each magnified virtual square:",
            "equation": "A' = m^2 \\cdot A = 10^2 \\times 1\\text{ mm}^2 = 100\\text{ mm}^2 = 1.0\\text{ cm}^2"
          },
          {
            "text": "(b) Angular magnification (magnifying power) when lens is close to eye:",
            "equation": "M = \\frac{D}{|u|} = \\frac{25}{9} \\approx 2.78 \\; (\\approx 2.8)"
          },
          {
            "text": "(c) Comparison: NO ($10 \\ne 2.8$)! Linear magnification is $h_i/h_o = v/|u| = 90/9 = 10$, whereas magnifying power compares angle subtended at the eye ($h_i/|v| = h_o/9$) with unaided angle at $D=25\\text{ cm}$ ($h_o/25$). They become numerically equal ONLY when the virtual image itself lies at $|v| = D = 25\\text{ cm}$."
          }
        ],
        "finalFormula": "\\text{(a) } m = 10, \\; A' = 1\\text{ cm}^2 \\quad | \\quad \\text{(b) } M = 2.8 \\quad | \\quad \\text{(c) Equal only if } |v| = D"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Simple Microscope Virtual Image",
      "examDrawingGuide": [
        "Show virtual image at 90 cm (> 25 cm), larger than object by factor 10, yet subtending angle h_o/9 at eye."
      ]
    },
    "keyPointsAndKeywords": [
      "A' = m² A = 100 mm²",
      "M = D/|u| = 2.8",
      "Equal only when |v| = D = 25 cm"
    ],
    "termsGlossary": [
      {
        "symbol": "m^2",
        "term": "Areal Magnification",
        "definition": "Ratio of image area to object area when magnification $m$ acts along both axes."
      }
    ],
    "markingScheme": [
      "1 Mark: Finding $v = -90\\text{ cm}, m = 10$, and $A' = 100\\text{ mm}^2 = 1\\text{ cm}^2$.",
      "1 Mark: Computing angular magnification $M = 25/9 = 2.8$.",
      "1 Mark: Explaining why $m \\ne M$ (different reference distances $|v|=90\\text{ cm}$ vs $D=25\\text{ cm}$; equal iff $|v|=D$)."
    ],
    "examinerTips": "Always state the golden rule for part (c): linear magnification m equals angular magnifying power M ONLY if the virtual image is formed precisely at the near point D = 25 cm!",
    "number": 19,
    "modelAnswer": {
      "statement": "Linear magnification ($m = v/u = h_i/h_o$) scales height AND width, so 2D image area scales as $m^2$.\nAngular magnification (magnifying power) is the ratio of visual angle subtended by the virtual image at the eye ($\\theta_i = h_o/|u|$) to that subtended by the unaided object at $D = 25\\text{ cm}$ ($\\theta_o = h_o/D$): $M = D/|u|$.",
      "derivations": [
        {
          "name": "3-Part Simple Microscope Solution (Exercise 9.29)",
          "steps": [
            "(a) Find image distance $v$, linear magnification $m$, and virtual image square area $A'$: \\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-9} = -\\frac{1}{90} \\implies v = -90\\text{ cm}; \\quad m = \\frac{-90}{-9} = 10",
            "Area of each magnified virtual square: A' = m^2 \\cdot A = 10^2 \\times 1\\text{ mm}^2 = 100\\text{ mm}^2 = 1.0\\text{ cm}^2",
            "(b) Angular magnification (magnifying power) when lens is close to eye: M = \\frac{D}{|u|} = \\frac{25}{9} \\approx 2.78 \\; (\\approx 2.8)",
            "(c) Comparison: NO ($10 \\ne 2.8$)! Linear magnification is $h_i/h_o = v/|u| = 90/9 = 10$, whereas magnifying power compares angle subtended at the eye ($h_i/|v| = h_o/9$) with unaided angle at $D=25\\text{ cm}$ ($h_o/25$). They become numerically equal ONLY when the virtual image itself lies at $|v| = D = 25\\text{ cm}$."
          ],
          "formula": "\\text{(a) } m = 10, \\; A' = 1\\text{ cm}^2 \\quad | \\quad \\text{(b) } M = 2.8 \\quad | \\quad \\text{(c) Equal only if } |v| = D"
        }
      ],
      "conclusion": "Always state the golden rule for part (c): linear magnification m equals angular magnifying power M ONLY if the virtual image is formed precisely at the near point D = 25 cm!"
    }
  },
  {
    "id": "imp-phy-10-ex2",
    "title": "Transmitted Intensity of Rotating Middle Polaroid Between Two Crossed Polaroids",
    "shortLabel": "Ex 10.2: Three Polaroids Malus Law",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 10.2",
    "subtopicId": "phy-sub-10-3",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Top Classic CBSE 3-Polaroid Malus Problem)",
    "questionPrompt": "Discuss the intensity of transmitted light when a polaroid sheet is rotated between two crossed polaroids? Find the angle θ of rotation for which transmitted intensity is maximum and express final intensity I in terms of unpolarized incident intensity I₀.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Example 10.2 (Rationalized NCERT / Polarization & Malus Law)",
      "equations": "I₁ = I₀/2;  I₂ = I₁ cos²θ;  I = I₂ cos²(90° - θ) = (I₀/8) sin²(2θ)",
      "figures": "Three-polaroid crossed analyser setup",
      "summary": "Applies Malus's law sequentially across two interfaces to yield I = (I₀/8)sin²(2θ) [or (I₀/4)sin²(2θ) if I₀ is already polarized after P₁], peaking at θ = 45°."
    },
    "theory": [
      "After passing through the first polaroid $P_1$, unpolarized light of intensity $I_0$ becomes linearly polarized with intensity $I_1 = I_0/2$ (note: if the question defines $I_0$ as intensity ALREADY transmitted by $P_1$, then $I = \\frac{I_0}{4}\\sin^2 2\\theta$).",
      "Between $P_1$ and crossed polaroid $P_3$ ($90^\\circ$ to $P_1$), an inserted sheet $P_2$ at angle $\\theta$ to $P_1$ sits at angle $(90^\\circ - \\theta)$ to $P_3$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Malus's Law Proof (Example 10.2)",
        "setup": "Let unpolarized beam have intensity $I_{\\text{unpol}}$, so intensity leaving first polaroid $P_1$ is $I_1 = I_{\\text{unpol}}/2$ (called $I_0$ in NCERT Example 10.2).",
        "steps": [
          {
            "text": "Intensity transmitted by middle polaroid $P_2$ (at angle $\\theta$ to $P_1$) via Malus's law:",
            "equation": "I_2 = I_1 \\cos^2\\theta"
          },
          {
            "text": "Since $P_1 \\perp P_3$, angle between pass-axes of $P_2$ and $P_3$ is $(90^\\circ - \\theta)$. Intensity emerging from $P_3$ is:",
            "equation": "I = I_2 \\cos^2(90^\\circ - \\theta) = I_1 \\cos^2\\theta \\sin^2\\theta = \\frac{I_1}{4}\\sin^2(2\\theta)"
          },
          {
            "text": "Maximum intensity occurs when $\\sin^2(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$ (or $135^\\circ, 225^\\circ, 315^\\circ$ — 4 maxima & 4 zeros in one full rotation!):",
            "equation": "I_{\\max} = \\frac{I_1}{4} = \\frac{I_{\\text{unpol}}}{8} \\quad (\\text{at } \\theta = 45^\\circ)"
          }
        ],
        "finalFormula": "I = \\frac{I_{\\text{after }P_1}}{4}\\sin^2(2\\theta) = \\frac{I_{\\text{unpol}}}{8}\\sin^2(2\\theta), \\quad I_{\\max} \\text{ at } \\theta = 45^\\circ"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Malus Law I = I0 cos²θ",
      "Two stages: cos²θ sin²θ = ¼ sin²(2θ)",
      "Peak at θ = 45°",
      "4 Maxima per rotation"
    ],
    "termsGlossary": [
      {
        "symbol": "I = I_1 \\cos^2\\theta",
        "term": "Law of Malus",
        "definition": "Intensity of plane-polarized light transmitted by an analyzer scales as $\\cos^2\\theta$."
      }
    ],
    "markingScheme": [
      "1 Mark: Stating $I_2 = I_1 \\cos^2\\theta$ after middle polaroid.",
      "1 Mark: Applying $\\cos^2(90^\\circ - \\theta) = \\sin^2\\theta$ to derive $\\frac{I_1}{4}\\sin^2(2\\theta)$.",
      "1 Mark: Identifying maximum at $\\theta = 45^\\circ$ and stating $I_{\\max} = I_1/4$ (or $I_{\\text{unpol}}/8$)."
    ],
    "examinerTips": "Clarify BOTH notations clearly: if I₀ denotes unpolarized input, I_max = I₀/8; if I₀ is already leaving the first polaroid (NCERT convention), I_max = I₀/4!",
    "number": 20,
    "modelAnswer": {
      "statement": "After passing through the first polaroid $P_1$, unpolarized light of intensity $I_0$ becomes linearly polarized with intensity $I_1 = I_0/2$ (note: if the question defines $I_0$ as intensity ALREADY transmitted by $P_1$, then $I = \\frac{I_0}{4}\\sin^2 2\\theta$).\nBetween $P_1$ and crossed polaroid $P_3$ ($90^\\circ$ to $P_1$), an inserted sheet $P_2$ at angle $\\theta$ to $P_1$ sits at angle $(90^\\circ - \\theta)$ to $P_3$.",
      "derivations": [
        {
          "name": "Step-by-Step Malus's Law Proof (Example 10.2)",
          "steps": [
            "Intensity transmitted by middle polaroid $P_2$ (at angle $\\theta$ to $P_1$) via Malus's law: I_2 = I_1 \\cos^2\\theta",
            "Since $P_1 \\perp P_3$, angle between pass-axes of $P_2$ and $P_3$ is $(90^\\circ - \\theta)$. Intensity emerging from $P_3$ is: I = I_2 \\cos^2(90^\\circ - \\theta) = I_1 \\cos^2\\theta \\sin^2\\theta = \\frac{I_1}{4}\\sin^2(2\\theta)",
            "Maximum intensity occurs when $\\sin^2(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$ (or $135^\\circ, 225^\\circ, 315^\\circ$ — 4 maxima & 4 zeros in one full rotation!): I_{\\max} = \\frac{I_1}{4} = \\frac{I_{\\text{unpol}}}{8} \\quad (\\text{at } \\theta = 45^\\circ)"
          ],
          "formula": "I = \\frac{I_{\\text{after }P_1}}{4}\\sin^2(2\\theta) = \\frac{I_{\\text{unpol}}}{8}\\sin^2(2\\theta), \\quad I_{\\max} \\text{ at } \\theta = 45^\\circ"
        }
      ],
      "conclusion": "Clarify BOTH notations clearly: if I₀ denotes unpolarized input, I_max = I₀/8; if I₀ is already leaving the first polaroid (NCERT convention), I_max = I₀/4!"
    }
  },
  {
    "id": "imp-phy-10-q1",
    "title": "Wavelength, Frequency & Speed of 589 nm Reflected vs Refracted Light in Water",
    "shortLabel": "Exer 10.1: Reflected vs Refracted λ, ν, v",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.1",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Universal 2–3M Refraction Parameter Problem)",
    "questionPrompt": "Monochromatic light of wavelength 589 nm is incident from air on a water surface. What are the wavelength, frequency and speed of (a) reflected, and (b) refracted light? Refractive index of water is 1.33.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.1",
      "equations": "ν = c / λ (invariant across media);  v = c / n;  λ' = λ / n",
      "figures": "Air-water interface wave refraction",
      "summary": "Computes wave parameters showing frequency invariance (5.09 × 10¹⁴ Hz) and speed/wavelength drop by factor 1.33 in water."
    },
    "theory": [
      "Frequency $\\nu$ is fixed solely by the radiating source and NEVER changes during reflection or refraction.",
      "Upon entering water ($n = 1.33$), BOTH speed $v = c/n$ and wavelength $\\lambda' = \\lambda/n$ decrease by factor $1.33$."
    ],
    "derivations": [
      {
        "name": "Reflected vs Refracted Wave Properties (Exercise 10.1)",
        "setup": "$\\lambda = 589\\text{ nm} = 5.89\\times 10^{-7}\\text{ m},\\ c = 3.0\\times 10^8\\text{ m/s},\\ n_w = 1.33$.",
        "steps": [
          {
            "text": "(a) Reflected light travels back in AIR, so speed and wavelength are unchanged:",
            "equation": "\\lambda_{\\text{ref}} = 589\\text{ nm}, \\quad v_{\\text{ref}} = 3.0 \\times 10^8\\text{ m/s}, \\quad \\nu = \\frac{c}{\\lambda} = \\frac{3\\times 10^8}{589\\times 10^{-9}} = 5.09 \\times 10^{14}\\text{ Hz}"
          },
          {
            "text": "(b) Refracted light in WATER keeps the SAME frequency $\\nu = 5.09\\times 10^{14}\\text{ Hz}$, while speed & wavelength scale by $1/n$:",
            "equation": "v_{\\text{water}} = \\frac{3.0\\times 10^8}{1.33} = 2.26 \\times 10^8\\text{ m/s}, \\quad \\lambda_{\\text{water}} = \\frac{589\\text{ nm}}{1.33} = 442.86\\text{ nm} \\; (\\approx 443\\text{ nm})"
          }
        ],
        "finalFormula": "\\nu = 5.09\\times 10^{14}\\text{ Hz (both)}; \\; v_w = 2.26\\times 10^8\\text{ m/s}, \\; \\lambda_w = 443\\text{ nm}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "Huygens Refraction λ₂ = λ₁/n",
      "examDrawingGuide": [
        "Select Huygens Wavefront Refraction view to show shortened wavefront spacing in water."
      ]
    },
    "keyPointsAndKeywords": [
      "Frequency invariant = 5.09×10¹⁴ Hz",
      "Water speed = 2.26×10⁸ m/s",
      "Water λ = 443 nm"
    ],
    "termsGlossary": [
      {
        "symbol": "\\nu",
        "term": "Frequency Invariance",
        "definition": "Characteristic property of source unaffected by medium transitions."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Reflected $\\lambda, v, \\nu$.",
      "1.5 Marks: Refracted $\\nu = 5.09\\times 10^{14}\\text{ Hz}, v = 2.26\\times 10^8\\text{ m/s}, \\lambda = 443\\text{ nm}$."
    ],
    "examinerTips": "One-sentence golden rule worth a full mark: 'Frequency depends on source, not medium; wavelength and speed drop inversely with refractive index n.'",
    "number": 21,
    "modelAnswer": {
      "statement": "Frequency $\\nu$ is fixed solely by the radiating source and NEVER changes during reflection or refraction.\nUpon entering water ($n = 1.33$), BOTH speed $v = c/n$ and wavelength $\\lambda' = \\lambda/n$ decrease by factor $1.33$.",
      "derivations": [
        {
          "name": "Reflected vs Refracted Wave Properties (Exercise 10.1)",
          "steps": [
            "(a) Reflected light travels back in AIR, so speed and wavelength are unchanged: \\lambda_{\\text{ref}} = 589\\text{ nm}, \\quad v_{\\text{ref}} = 3.0 \\times 10^8\\text{ m/s}, \\quad \\nu = \\frac{c}{\\lambda} = \\frac{3\\times 10^8}{589\\times 10^{-9}} = 5.09 \\times 10^{14}\\text{ Hz}",
            "(b) Refracted light in WATER keeps the SAME frequency $\\nu = 5.09\\times 10^{14}\\text{ Hz}$, while speed & wavelength scale by $1/n$: v_{\\text{water}} = \\frac{3.0\\times 10^8}{1.33} = 2.26 \\times 10^8\\text{ m/s}, \\quad \\lambda_{\\text{water}} = \\frac{589\\text{ nm}}{1.33} = 442.86\\text{ nm} \\; (\\approx 443\\text{ nm})"
          ],
          "formula": "\\nu = 5.09\\times 10^{14}\\text{ Hz (both)}; \\; v_w = 2.26\\times 10^8\\text{ m/s}, \\; \\lambda_w = 443\\text{ nm}"
        }
      ],
      "conclusion": "One-sentence golden rule worth a full mark: 'Frequency depends on source, not medium; wavelength and speed drop inversely with refractive index n.'"
    }
  },
  {
    "id": "imp-phy-10-q2",
    "title": "Shapes of Wavefronts for Point Source, Convex Lens Focus & Distant Star",
    "shortLabel": "Exer 10.2: Wavefront Shapes Triplet",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.2",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Conceptual / Diagram",
    "frequency": "98% Frequency (Almost Annual 2–3M CBSE Drawing Question)",
    "questionPrompt": "What is the shape of the wavefront in each of the following cases:\n(a) Light diverging from a point source.\n(b) Light emerging out of a convex lens when a point source is placed at its focus.\n(c) The portion of the wavefront of light from a distant star intercepted by the Earth.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.2",
      "equations": "Wavefront ⊥ Light Rays everywhere",
      "figures": "Spherical and Plane wavefronts",
      "summary": "Classifies emerging wavefront geometries as Spherical (diverging) vs Plane (collimated or huge radius r → ∞)."
    },
    "theory": [
      "A wavefront is always perpendicular to the direction of light rays everywhere.",
      "Diverging rays define spherical wavefronts; parallel collimated rays define plane wavefronts."
    ],
    "derivations": [
      {
        "name": "3-Case Wavefront Justification (Exercise 10.2)",
        "setup": "Identify wavefront shape & ray-wavefront orthogonality for each physical source.",
        "steps": [
          {
            "text": "(a) Point source diverging isotropically in 3D homogeneous medium → Concentric expanding SPHERICAL wavefronts centred on the source."
          },
          {
            "text": "(b) Point source at principal focus of convex lens → Lens converts diverging spherical waves into parallel beam along axis → PLANE wavefronts perpendicular to optical axis."
          },
          {
            "text": "(c) Distant star ($r \\to \\infty$) → Radius of spherical wavefront reaching Earth is astronomically huge, so a tiny Earth-sized patch has zero curvature → PLANE wavefront."
          }
        ],
        "finalFormula": "\\text{(a) Spherical} \\quad | \\quad \\text{(b) Plane} \\quad | \\quad \\text{(c) Plane}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Point source -> Spherical",
      "Source at convex F -> Plane",
      "Distant star -> Plane"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{v} \\perp \\text{WF}",
        "term": "Ray-Wavefront Orthogonality",
        "definition": "Light rays always cut wavefronts at 90° in isotropic media."
      }
    ],
    "markingScheme": [
      "1 Mark each for correct shape + 1-line reason/sketch for (a), (b), and (c)."
    ],
    "examinerTips": "Always draw small arrows perpendicular to the wavefronts (curved shells for (a), parallel vertical lines for (b) and (c)) even if not explicitly asked!",
    "number": 22,
    "modelAnswer": {
      "statement": "A wavefront is always perpendicular to the direction of light rays everywhere.\nDiverging rays define spherical wavefronts; parallel collimated rays define plane wavefronts.",
      "derivations": [
        {
          "name": "3-Case Wavefront Justification (Exercise 10.2)",
          "steps": [
            "(a) Point source diverging isotropically in 3D homogeneous medium → Concentric expanding SPHERICAL wavefronts centred on the source.",
            "(b) Point source at principal focus of convex lens → Lens converts diverging spherical waves into parallel beam along axis → PLANE wavefronts perpendicular to optical axis.",
            "(c) Distant star ($r \\to \\infty$) → Radius of spherical wavefront reaching Earth is astronomically huge, so a tiny Earth-sized patch has zero curvature → PLANE wavefront."
          ],
          "formula": "\\text{(a) Spherical} \\quad | \\quad \\text{(b) Plane} \\quad | \\quad \\text{(c) Plane}"
        }
      ],
      "conclusion": "Always draw small arrows perpendicular to the wavefronts (curved shells for (a), parallel vertical lines for (b) and (c)) even if not explicitly asked!"
    }
  },
  {
    "id": "imp-phy-10-q3",
    "title": "Speed of Light in Glass & Colour Dispersion (Red vs Violet Speed)",
    "shortLabel": "Exer 10.3: Speed in Glass & Red vs Violet",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.3",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical / Conceptual",
    "frequency": "93% Frequency",
    "questionPrompt": "(a) The refractive index of glass is 1.5. What is the speed of light in glass? (Speed of light in vacuum is 3.0 × 10⁸ m s⁻¹)\n(b) Is the speed of light in glass independent of the colour of light? If not, which of the two colours red and violet travels slower in a glass prism?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.3",
      "equations": "v = c / n;  n_violet > n_red",
      "figures": "Optical dispersion in glass",
      "summary": "Calculates speed 2.0 × 10⁸ m/s in glass and explains why violet slows down more than red."
    },
    "theory": [
      "In a vacuum all colours travel at $c = 3\\times 10^8\\text{ m/s}$, whereas a material medium like glass is dispersive: shorter wavelengths see a slightly higher refractive index ($n_V > n_R$)."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 10.3)",
        "setup": "$n = 1.5$, $c = 3.0 \\times 10^8\\text{ m/s}$.",
        "steps": [
          {
            "text": "(a) Speed of light in glass:",
            "equation": "v = \\frac{c}{n} = \\frac{3.0 \\times 10^8}{1.5} = 2.0 \\times 10^8\\text{ m s}^{-1}"
          },
          {
            "text": "(b) No — speed in glass depends on colour/wavelength ($n = A + B/\\lambda^2$). Since $\\lambda_{\\text{violet}} < \\lambda_{\\text{red}}$, glass has $n_{\\text{violet}} > n_{\\text{red}}$. Because $v = c/n$, <strong>VIOLET travels SLOWER</strong> than red in glass!"
          }
        ],
        "finalFormula": "\\text{(a) } v = 2.0\\times 10^8\\text{ m/s} \\quad | \\quad \\text{(b) Dependent; Violet travels slower}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "v = 2.0×10^8 m/s",
      "n_violet > n_red",
      "v_violet < v_red"
    ],
    "termsGlossary": [
      {
        "symbol": "n_V > n_R",
        "term": "Normal Dispersion",
        "definition": "Shorter wavelength experiences larger refractive index and lower phase velocity."
      }
    ],
    "markingScheme": [
      "1 Mark: Speed $v = 2.0\\times 10^8\\text{ m/s}$.",
      "1 Mark: Stating 'No' and explaining $n_V > n_R \\implies v_V < v_R$."
    ],
    "examinerTips": "Tie this straight to Ch 9: because violet slows down more (n_V > n_R), violet bends MORE toward the prism base and has smaller critical angle i_c and smaller lens focal length f_V < f_R!",
    "number": 23,
    "modelAnswer": {
      "statement": "In a vacuum all colours travel at $c = 3\\times 10^8\\text{ m/s}$, whereas a material medium like glass is dispersive: shorter wavelengths see a slightly higher refractive index ($n_V > n_R$).",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 10.3)",
          "steps": [
            "(a) Speed of light in glass: v = \\frac{c}{n} = \\frac{3.0 \\times 10^8}{1.5} = 2.0 \\times 10^8\\text{ m s}^{-1}",
            "(b) No — speed in glass depends on colour/wavelength ($n = A + B/\\lambda^2$). Since $\\lambda_{\\text{violet}} < \\lambda_{\\text{red}}$, glass has $n_{\\text{violet}} > n_{\\text{red}}$. Because $v = c/n$, <strong>VIOLET travels SLOWER</strong> than red in glass!"
          ],
          "formula": "\\text{(a) } v = 2.0\\times 10^8\\text{ m/s} \\quad | \\quad \\text{(b) Dependent; Violet travels slower}"
        }
      ],
      "conclusion": "Tie this straight to Ch 9: because violet slows down more (n_V > n_R), violet bends MORE toward the prism base and has smaller critical angle i_c and smaller lens focal length f_V < f_R!"
    }
  },
  {
    "id": "imp-phy-10-q4",
    "title": "Finding Wavelength in YDSE from 4th Bright Fringe Position",
    "shortLabel": "Exer 10.4: YDSE 4th Bright Fringe λ",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.4",
    "subtopicId": "phy-sub-10-4",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "97% Frequency (Standard Direct YDSE Numerical)",
    "questionPrompt": "In a Young's double-slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is measured to be 1.2 cm. Determine the wavelength of light used in the experiment.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.4",
      "equations": "x_n = n λ D / d",
      "figures": "Young's double-slit screen geometry",
      "summary": "Calculates λ = 600 nm directly from 4th bright fringe distance 1.2 cm."
    },
    "theory": [
      "Distance of the $n$-th bright fringe from the central maximum ($n = 0$) is $x_n = n \\beta = \\frac{n \\lambda D}{d}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 10.4)",
        "setup": "$d = 0.28\\text{ mm} = 2.8 \\times 10^{-4}\\text{ m},\\ D = 1.4\\text{ m},\\ n = 4,\\ x_4 = 1.2\\text{ cm} = 1.2 \\times 10^{-2}\\text{ m}$.",
        "steps": [
          {
            "text": "Rearrange $x_n = \\frac{n \\lambda D}{d}$ for $\\lambda$:",
            "equation": "\\lambda = \\frac{x_4 \\cdot d}{4 \\cdot D}"
          },
          {
            "text": "Substitute SI values cleanly:",
            "equation": "\\lambda = \\frac{(1.2 \\times 10^{-2}) \\times (2.8 \\times 10^{-4})}{4 \\times 1.4} = \\frac{3.36 \\times 10^{-6}}{5.6} = 6.0 \\times 10^{-7}\\text{ m} = 600\\text{ nm}"
          }
        ],
        "finalFormula": "\\lambda = 600\\text{ nm} = 6000\\text{ \\AA}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "YDSE Fringe Position Formula",
      "examDrawingGuide": [
        "Convert d (mm) and x_4 (cm) cleanly to metres before dividing."
      ]
    },
    "keyPointsAndKeywords": [
      "x4 = 4λD/d",
      "SI unit conversion mm/cm -> m",
      "λ = 600 nm"
    ],
    "termsGlossary": [
      {
        "symbol": "\\beta = \\lambda D / d",
        "term": "Fringe Width",
        "definition": "Spacing between consecutive bright fringes ($0.3\\text{ cm}$ here)."
      }
    ],
    "markingScheme": [
      "1 Mark: Correct formula $x_n = n\\lambda D/d$ and unit conversion.",
      "1 Mark: Arithmetic giving $\\lambda = 600\\text{ nm}$."
    ],
    "examinerTips": "Double check 2.8 / 5.6 = 0.5 and 1.2 × 0.5 = 0.6 × 10^-6 m = 600 nm — effortless mental check!",
    "number": 24,
    "modelAnswer": {
      "statement": "Distance of the $n$-th bright fringe from the central maximum ($n = 0$) is $x_n = n \\beta = \\frac{n \\lambda D}{d}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 10.4)",
          "steps": [
            "Rearrange $x_n = \\frac{n \\lambda D}{d}$ for $\\lambda$: \\lambda = \\frac{x_4 \\cdot d}{4 \\cdot D}",
            "Substitute SI values cleanly: \\lambda = \\frac{(1.2 \\times 10^{-2}) \\times (2.8 \\times 10^{-4})}{4 \\times 1.4} = \\frac{3.36 \\times 10^{-6}}{5.6} = 6.0 \\times 10^{-7}\\text{ m} = 600\\text{ nm}"
          ],
          "formula": "\\lambda = 600\\text{ nm} = 6000\\text{ \\AA}"
        }
      ],
      "conclusion": "Double check 2.8 / 5.6 = 0.5 and 1.2 × 0.5 = 0.6 × 10^-6 m = 600 nm — effortless mental check!"
    }
  },
  {
    "id": "imp-phy-10-q5",
    "title": "YDSE Screen Intensity at Path Difference λ/3 Compared to K at Path Difference λ",
    "shortLabel": "Exer 10.5: YDSE Intensity K/4 at λ/3",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.5",
    "subtopicId": "phy-sub-10-4",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "99% Frequency (Highest Repeated YDSE Intensity Question in CBSE Boards)",
    "questionPrompt": "In Young's double-slit experiment using monochromatic light of wavelength λ, the intensity of light at a point on the screen where path difference is λ, is K units. What is the intensity of light at a point where path difference is λ/3?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.5",
      "equations": "Δφ = (2π/λ) Δx;  I = 4 I₀ cos²(φ/2)",
      "figures": "Interference intensity curve",
      "summary": "Uses I_max = K = 4 I_0 and φ' = 2π/3 to prove I' = 4 I_0 cos²(π/3) = K/4."
    },
    "theory": [
      "Coherent resultant intensity from two equal-intensity slits ($I_1 = I_2 = I_0$) is $I = 4I_0\\cos^2(\\Delta\\phi/2)$, where phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 10.5)",
        "setup": "At $\\Delta x_1 = \\lambda$, intensity $I_1 = K$. Find $I_2$ at $\\Delta x_2 = \\lambda/3$.",
        "steps": [
          {
            "text": "When path difference is $\\Delta x_1 = \\lambda$, phase difference $\\phi_1 = \\frac{2\\pi}{\\lambda}\\cdot\\lambda = 2\\pi$:",
            "equation": "K = 4 I_0 \\cos^2(\\pi) = 4 I_0"
          },
          {
            "text": "When path difference is $\\Delta x_2 = \\frac{\\lambda}{3}$, new phase difference $\\phi_2 = \\frac{2\\pi}{\\lambda}\\cdot\\frac{\\lambda}{3} = \\frac{2\\pi}{3}$:",
            "equation": "I' = 4 I_0 \\cos^2\\left(\\frac{\\phi_2}{2}\\right) = K \\cos^2\\left(\\frac{\\pi}{3}\\right) = K \\left(\\frac{1}{2}\\right)^2 = \\frac{K}{4}"
          }
        ],
        "finalFormula": "I' = \\frac{K}{4}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "Coherent Intensity I = K cos²(φ/2)",
      "examDrawingGuide": [
        "Plot I vs φ peaking at K for 0 and 2π, dropping to K/4 at φ = 2π/3."
      ]
    },
    "keyPointsAndKeywords": [
      "Δφ = (2π/λ)Δx",
      "K = 4 I₀ at Δx = λ",
      "φ/2 = π/3 -> cos²(60°) = 1/4",
      "Answer: K/4"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Delta\\phi",
        "term": "Phase Difference",
        "definition": "Related to path difference by $\\frac{2\\pi}{\\lambda}\\Delta x$."
      }
    ],
    "markingScheme": [
      "1 Mark: Proving $K = 4I_0$ at path difference $\\lambda$.",
      "1 Mark: Finding $\\phi = 2\\pi/3$ and $I' = K\\cos^2(\\pi/3) = K/4$."
    ],
    "examinerTips": "Memory check for variants: Δx = λ/4 gives cos²(π/4) = K/2; Δx = λ/3 gives cos²(π/3) = K/4; Δx = λ/6 gives cos²(π/6) = 3K/4!",
    "number": 25,
    "modelAnswer": {
      "statement": "Coherent resultant intensity from two equal-intensity slits ($I_1 = I_2 = I_0$) is $I = 4I_0\\cos^2(\\Delta\\phi/2)$, where phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 10.5)",
          "steps": [
            "When path difference is $\\Delta x_1 = \\lambda$, phase difference $\\phi_1 = \\frac{2\\pi}{\\lambda}\\cdot\\lambda = 2\\pi$: K = 4 I_0 \\cos^2(\\pi) = 4 I_0",
            "When path difference is $\\Delta x_2 = \\frac{\\lambda}{3}$, new phase difference $\\phi_2 = \\frac{2\\pi}{\\lambda}\\cdot\\frac{\\lambda}{3} = \\frac{2\\pi}{3}$: I' = 4 I_0 \\cos^2\\left(\\frac{\\phi_2}{2}\\right) = K \\cos^2\\left(\\frac{\\pi}{3}\\right) = K \\left(\\frac{1}{2}\\right)^2 = \\frac{K}{4}"
          ],
          "formula": "I' = \\frac{K}{4}"
        }
      ],
      "conclusion": "Memory check for variants: Δx = λ/4 gives cos²(π/4) = K/2; Δx = λ/3 gives cos²(π/3) = K/4; Δx = λ/6 gives cos²(π/6) = 3K/4!"
    }
  },
  {
    "id": "imp-phy-10-q6",
    "title": "Two-Wavelength YDSE (650 nm & 520 nm): 3rd Fringe & Coincidence Distance",
    "shortLabel": "Exer 10.6: Two-λ YDSE Coincidence",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 10.6",
    "subtopicId": "phy-sub-10-4",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "98% Frequency (Top Two-Wavelength YDSE Coincidence PYQ)",
    "questionPrompt": "A beam of light consisting of two wavelengths, 650 nm and 520 nm, is used to obtain interference fringes in a Young's double-slit experiment.\n(a) Find the distance of the third bright fringe on the screen from the central maximum for wavelength 650 nm.\n(b) What is the least distance from the central maximum where the bright fringes due to both the wavelengths coincide?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Exercise 10.6",
      "equations": "n λ₁ = m λ₂;  x = n λ₁ D / d",
      "figures": "Dual-wavelength YDSE overlap",
      "summary": "Finds 3rd bright fringe position in terms of D/d (1950 (D/d) nm) and lowest coincidence ratio 4 : 5 giving x_min = 2.6 × 10^-6 (D/d) m."
    },
    "theory": [
      "Bright fringes of $\\lambda_1$ and $\\lambda_2$ coincide at screen position $x$ when $x = \\frac{n\\lambda_1 D}{d} = \\frac{m\\lambda_2 D}{d} \\implies \\frac{n}{m} = \\frac{\\lambda_2}{\\lambda_1}$ in lowest integer terms."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 10.6)",
        "setup": "$\\lambda_1 = 650\\text{ nm} = 6.5\\times 10^{-7}\\text{ m},\\ \\lambda_2 = 520\\text{ nm} = 5.2\\times 10^{-7}\\text{ m}$ (note: answer stays in terms of $D/d$ unless $D,d$ are specified).",
        "steps": [
          {
            "text": "(a) Distance of 3rd bright fringe ($n = 3$) for $\\lambda_1 = 650\\text{ nm}$:",
            "equation": "x_3 = \\frac{3 \\lambda_1 D}{d} = \\frac{3 \\times 650 \\times 10^{-9} D}{d} = 1.95 \\times 10^{-6}\\left(\\frac{D}{d}\\right)\\text{ m} \\; (\\text{e.g., } 1.17\\text{ mm if } D/d = 600)"
          },
          {
            "text": "(b) Coincidence condition $n\\lambda_1 = m\\lambda_2$:",
            "equation": "\\frac{n}{m} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{520}{650} = \\frac{4}{5} \\implies \\text{Minimum integers: } n = 4, \\; m = 5"
          },
          {
            "text": "Least coincidence distance ($4\\text{th}$ bright of $650\\text{ nm}$ = $5\\text{th}$ bright of $520\\text{ nm}$):",
            "equation": "x_{\\min} = \\frac{4 \\lambda_1 D}{d} = \\frac{4 \\times 650 \\times 10^{-9} D}{d} = 2.6 \\times 10^{-6}\\left(\\frac{D}{d}\\right)\\text{ m}"
          }
        ],
        "finalFormula": "\\text{(a) } 1.95\\times 10^{-6}\\frac{D}{d}\\text{ m} \\quad | \\quad \\text{(b) } 4\\lambda_1 = 5\\lambda_2 \\implies x_{\\min} = 2.6\\times 10^{-6}\\frac{D}{d}\\text{ m}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "650/520 = 5/4",
      "n = 4, m = 5",
      "4th bright of 650 nm meets 5th bright of 520 nm"
    ],
    "termsGlossary": [
      {
        "symbol": "n/m = \\lambda_2/\\lambda_1",
        "term": "Coincidence Condition",
        "definition": "Lowest coprime ratio determines the nearest overlap beyond central maximum."
      }
    ],
    "markingScheme": [
      "1 Mark: Part (a) $3\\lambda_1 D/d = 1.95\\times 10^{-6}(D/d)\\text{ m}$.",
      "1 Mark: Equating $n\\lambda_1 = m\\lambda_2$ to obtain lowest integers $n=4, m=5$.",
      "1 Mark: Part (b) coincidence distance $2.6\\times 10^{-6}(D/d)\\text{ m}$ (with numerical value if board exam supplies $D, d$)."
    ],
    "examinerTips": "In board exams this exact question sometimes adds 'D = 1.2 m, d = 2 mm'; once you get 2.6×10^-6 (D/d), simply plug in D/d at the final step!",
    "number": 26,
    "modelAnswer": {
      "statement": "Bright fringes of $\\lambda_1$ and $\\lambda_2$ coincide at screen position $x$ when $x = \\frac{n\\lambda_1 D}{d} = \\frac{m\\lambda_2 D}{d} \\implies \\frac{n}{m} = \\frac{\\lambda_2}{\\lambda_1}$ in lowest integer terms.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 10.6)",
          "steps": [
            "(a) Distance of 3rd bright fringe ($n = 3$) for $\\lambda_1 = 650\\text{ nm}$: x_3 = \\frac{3 \\lambda_1 D}{d} = \\frac{3 \\times 650 \\times 10^{-9} D}{d} = 1.95 \\times 10^{-6}\\left(\\frac{D}{d}\\right)\\text{ m} \\; (\\text{e.g., } 1.17\\text{ mm if } D/d = 600)",
            "(b) Coincidence condition $n\\lambda_1 = m\\lambda_2$: \\frac{n}{m} = \\frac{\\lambda_2}{\\lambda_1} = \\frac{520}{650} = \\frac{4}{5} \\implies \\text{Minimum integers: } n = 4, \\; m = 5",
            "Least coincidence distance ($4\\text{th}$ bright of $650\\text{ nm}$ = $5\\text{th}$ bright of $520\\text{ nm}$): x_{\\min} = \\frac{4 \\lambda_1 D}{d} = \\frac{4 \\times 650 \\times 10^{-9} D}{d} = 2.6 \\times 10^{-6}\\left(\\frac{D}{d}\\right)\\text{ m}"
          ],
          "formula": "\\text{(a) } 1.95\\times 10^{-6}\\frac{D}{d}\\text{ m} \\quad | \\quad \\text{(b) } 4\\lambda_1 = 5\\lambda_2 \\implies x_{\\min} = 2.6\\times 10^{-6}\\frac{D}{d}\\text{ m}"
        }
      ],
      "conclusion": "In board exams this exact question sometimes adds 'D = 1.2 m, d = 2 mm'; once you get 2.6×10^-6 (D/d), simply plug in D/d at the final step!"
    }
  },
  {
    "id": "imp-phy-11-ex1",
    "title": "Laser Photon Energy & Photon Emission Rate per Second",
    "shortLabel": "Ex 11.1: Laser Photon Flux n = P/(hν)",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 11.1",
    "subtopicId": "phy-sub-11-1",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "97% Frequency (Standard Photon Energy & Count Drill)",
    "questionPrompt": "Monochromatic light of frequency 6.0 × 10¹⁴ Hz is produced by a laser. The power emitted is 2.0 × 10⁻³ W.\n(a) What is the energy of a photon in the light beam?\n(b) How many photons per second, on an average, are emitted by the source?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Example 11.1",
      "equations": "E = h ν;  N/t = P / E",
      "figures": "Photon quantum energy",
      "summary": "Calculates photon energy (3.98 × 10⁻¹⁹ J = 2.49 eV) and average photon emission rate (5.0 × 10¹⁵ s⁻¹)."
    },
    "theory": [
      "Each light quantum (photon) carries discrete energy $E = h\\nu$, where $h = 6.63 \\times 10^{-34}\\text{ J s}$. Total radiated power $P = n_{\\text{rate}} \\cdot h\\nu$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 11.1)",
        "setup": "$\\nu = 6.0 \\times 10^{14}\\text{ Hz},\\ P = 2.0 \\times 10^{-3}\\text{ W},\\ h = 6.63 \\times 10^{-34}\\text{ J s}$.",
        "steps": [
          {
            "text": "(a) Energy of a single photon:",
            "equation": "E = h\\nu = (6.63 \\times 10^{-34})(6.0 \\times 10^{14}) = 3.98 \\times 10^{-19}\\text{ J} = \\frac{3.98 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 2.49\\text{ eV}"
          },
          {
            "text": "(b) Number of photons emitted per second $N = P / E$:",
            "equation": "N = \\frac{P}{E} = \\frac{2.0 \\times 10^{-3}\\text{ W}}{3.98 \\times 10^{-19}\\text{ J}} \\approx 5.0 \\times 10^{15}\\text{ photons s}^{-1}"
          }
        ],
        "finalFormula": "\\text{(a) } E = 3.98 \\times 10^{-19}\\text{ J } (2.49\\text{ eV}) \\quad | \\quad \\text{(b) } N = 5.0 \\times 10^{15}\\text{ s}^{-1}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "E = hν = 3.98×10⁻¹⁹ J",
      "Power P = (dN/dt) E",
      "N = 5.0×10¹⁵ photons/s"
    ],
    "termsGlossary": [
      {
        "symbol": "E = h\\nu",
        "term": "Photon Energy",
        "definition": "Discrete packet energy proportional only to frequency $\\nu$."
      }
    ],
    "markingScheme": [
      "1 Mark: Finding photon energy $3.98 \\times 10^{-19}\\text{ J}$.",
      "1 Mark: Dividing $P/E$ to get $5.0 \\times 10^{15}\\text{ s}^{-1}$."
    ],
    "examinerTips": "Keep J units when dividing P (J/s) by E (J) — only convert E to eV if asked or helpful as an extra check.",
    "number": 27,
    "modelAnswer": {
      "statement": "Each light quantum (photon) carries discrete energy $E = h\\nu$, where $h = 6.63 \\times 10^{-34}\\text{ J s}$. Total radiated power $P = n_{\\text{rate}} \\cdot h\\nu$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 11.1)",
          "steps": [
            "(a) Energy of a single photon: E = h\\nu = (6.63 \\times 10^{-34})(6.0 \\times 10^{14}) = 3.98 \\times 10^{-19}\\text{ J} = \\frac{3.98 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 2.49\\text{ eV}",
            "(b) Number of photons emitted per second $N = P / E$: N = \\frac{P}{E} = \\frac{2.0 \\times 10^{-3}\\text{ W}}{3.98 \\times 10^{-19}\\text{ J}} \\approx 5.0 \\times 10^{15}\\text{ photons s}^{-1}"
          ],
          "formula": "\\text{(a) } E = 3.98 \\times 10^{-19}\\text{ J } (2.49\\text{ eV}) \\quad | \\quad \\text{(b) } N = 5.0 \\times 10^{15}\\text{ s}^{-1}"
        }
      ],
      "conclusion": "Keep J units when dividing P (J/s) by E (J) — only convert E to eV if asked or helpful as an extra check."
    }
  },
  {
    "id": "imp-phy-11-ex2",
    "title": "Testing Photoelectric Emission Threshold at 330 nm for φ₀ = 4.2 eV",
    "shortLabel": "Ex 11.2: 330 nm Emission Threshold Check",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 11.2",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "96% Frequency (Direct Threshold Wavelength Inequality)",
    "questionPrompt": "The work function for a certain metal is 4.2 eV. Will this metal give photoelectric emission for incident radiation of wavelength 330 nm?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Example 11.2",
      "equations": "E = hc / λ;  Condition: E ≥ φ₀",
      "figures": "Photoelectric threshold test",
      "summary": "Computes photon energy (3.77 eV < 4.2 eV), proving zero photoemission regardless of light intensity."
    },
    "theory": [
      "Photoelectric emission occurs if and only if incident photon energy $E = \\frac{hc}{\\lambda} \\ge \\phi_0$ (equivalently $\\lambda \\le \\lambda_0$)."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 11.2)",
        "setup": "$\\phi_0 = 4.2\\text{ eV},\\ \\lambda = 330\\text{ nm} = 330 \\times 10^{-9}\\text{ m}$.",
        "steps": [
          {
            "text": "Compute incident photon energy in Joules and convert to electron-volts:",
            "equation": "E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{330 \\times 10^{-9}} = 6.03 \\times 10^{-19}\\text{ J} = \\frac{6.03 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3.77\\text{ eV}"
          },
          {
            "text": "Compare photon energy $E$ with metal work function $\\phi_0$:",
            "equation": "E = 3.77\\text{ eV} < \\phi_0 = 4.2\\text{ eV}"
          }
        ],
        "finalFormula": "\\text{Since } E (3.77\\text{ eV}) < \\phi_0 (4.2\\text{ eV}), \\; \\text{NO photoelectric emission occurs!}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Einstein Threshold Condition ν > ν₀",
      "examDrawingGuide": [
        "Select K_max vs ν tab highlighting zero emission below ν₀."
      ]
    },
    "keyPointsAndKeywords": [
      "E = hc/λ = 3.77 eV",
      "3.77 eV < 4.2 eV",
      "No emission regardless of intensity"
    ],
    "termsGlossary": [
      {
        "symbol": "\\phi_0",
        "term": "Work Function",
        "definition": "Minimum photon energy ($4.2\\text{ eV}$) needed to free a conduction electron."
      }
    ],
    "markingScheme": [
      "1 Mark: Computing $E = 3.77\\text{ eV}$ (or $6.03 \\times 10^{-19}\\text{ J}$ vs $6.72 \\times 10^{-19}\\text{ J}$).",
      "1 Mark: Explicit inequality $E < \\phi_0$ and conclusion 'No photoelectric emission'."
    ],
    "examinerTips": "Instant sanity shortcut: E(in eV) ≈ 1242 / λ(nm) = 1242 / 330 = 3.76 eV < 4.2 eV!",
    "number": 28,
    "modelAnswer": {
      "statement": "Photoelectric emission occurs if and only if incident photon energy $E = \\frac{hc}{\\lambda} \\ge \\phi_0$ (equivalently $\\lambda \\le \\lambda_0$).",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 11.2)",
          "steps": [
            "Compute incident photon energy in Joules and convert to electron-volts: E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{330 \\times 10^{-9}} = 6.03 \\times 10^{-19}\\text{ J} = \\frac{6.03 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3.77\\text{ eV}",
            "Compare photon energy $E$ with metal work function $\\phi_0$: E = 3.77\\text{ eV} < \\phi_0 = 4.2\\text{ eV}"
          ],
          "formula": "\\text{Since } E (3.77\\text{ eV}) < \\phi_0 (4.2\\text{ eV}), \\; \\text{NO photoelectric emission occurs!}"
        }
      ],
      "conclusion": "Instant sanity shortcut: E(in eV) ≈ 1242 / λ(nm) = 1242 / 330 = 3.76 eV < 4.2 eV!"
    }
  },
  {
    "id": "imp-phy-11-ex3",
    "title": "de Broglie Wavelength of High-Speed Electron vs Macroscopic Cricket Ball",
    "shortLabel": "Ex 11.3: de Broglie Electron vs Ball",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 11.3",
    "subtopicId": "phy-sub-11-4",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency (Explains Why Matter Waves Are Unobservable Daily)",
    "questionPrompt": "What is the de Broglie wavelength associated with:\n(a) an electron moving with a speed of 5.4 × 10⁶ m/s, and\n(b) a ball of mass 150 g travelling at 30.0 m/s?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Example 11.3",
      "equations": "λ = h / (m v)",
      "figures": "Microscopic vs macroscopic de Broglie scales",
      "summary": "Contrasts atomic-scale electron wavelength (0.135 nm) with unmeasurably tiny ball wavelength (1.47 × 10⁻³⁴ m)."
    },
    "theory": [
      "By de Broglie's hypothesis, every moving particle has matter wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$."
    ],
    "derivations": [
      {
        "name": "Electron vs Ball Calculation (Example 11.3)",
        "setup": "$h = 6.63 \\times 10^{-34}\\text{ J s},\\ m_e = 9.11 \\times 10^{-31}\\text{ kg},\\ v_e = 5.4\\times 10^6\\text{ m/s};\\ m_b = 0.150\\text{ kg},\\ v_b = 30.0\\text{ m/s}$.",
        "steps": [
          {
            "text": "(a) Electron de Broglie wavelength:",
            "equation": "\\lambda_e = \\frac{6.63 \\times 10^{-34}}{(9.11 \\times 10^{-31})(5.4 \\times 10^6)} = 1.35 \\times 10^{-10}\\text{ m} = 0.135\\text{ nm}"
          },
          {
            "text": "(b) Macroscopic ball de Broglie wavelength ($150\\text{ g} = 0.150\\text{ kg}$):",
            "equation": "\\lambda_b = \\frac{6.63 \\times 10^{-34}}{0.150 \\times 30.0} = \\frac{6.63 \\times 10^{-34}}{4.5} = 1.47 \\times 10^{-34}\\text{ m}"
          }
        ],
        "finalFormula": "\\text{(a) } \\lambda_e = 0.135\\text{ nm (observable X-ray diffraction scale)} \\quad | \\quad \\text{(b) } \\lambda_b = 1.47 \\times 10^{-34}\\text{ m (unobservable)}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "λ = h/(mv)",
      "Electron λ = 0.135 nm (~atomic spacing)",
      "Ball λ = 1.47×10⁻³⁴ m"
    ],
    "termsGlossary": [
      {
        "symbol": "\\lambda = h/p",
        "term": "de Broglie Wavelength",
        "definition": "Quantum matter wavelength inversely proportional to particle momentum $p$."
      }
    ],
    "markingScheme": [
      "1 Mark: Electron $\\lambda = 0.135\\text{ nm}$.",
      "1 Mark: Ball $\\lambda = 1.47\\times 10^{-34}\\text{ m}$ (+ note on negligible wave nature)."
    ],
    "examinerTips": "0.135 nm is right on the crystal lattice spacing scale (~0.1–0.3 nm) — which is why electrons show clear diffraction while a cricket ball never does!",
    "number": 29,
    "modelAnswer": {
      "statement": "By de Broglie's hypothesis, every moving particle has matter wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.",
      "derivations": [
        {
          "name": "Electron vs Ball Calculation (Example 11.3)",
          "steps": [
            "(a) Electron de Broglie wavelength: \\lambda_e = \\frac{6.63 \\times 10^{-34}}{(9.11 \\times 10^{-31})(5.4 \\times 10^6)} = 1.35 \\times 10^{-10}\\text{ m} = 0.135\\text{ nm}",
            "(b) Macroscopic ball de Broglie wavelength ($150\\text{ g} = 0.150\\text{ kg}$): \\lambda_b = \\frac{6.63 \\times 10^{-34}}{0.150 \\times 30.0} = \\frac{6.63 \\times 10^{-34}}{4.5} = 1.47 \\times 10^{-34}\\text{ m}"
          ],
          "formula": "\\text{(a) } \\lambda_e = 0.135\\text{ nm (observable X-ray diffraction scale)} \\quad | \\quad \\text{(b) } \\lambda_b = 1.47 \\times 10^{-34}\\text{ m (unobservable)}"
        }
      ],
      "conclusion": "0.135 nm is right on the crystal lattice spacing scale (~0.1–0.3 nm) — which is why electrons show clear diffraction while a cricket ball never does!"
    }
  },
  {
    "id": "imp-phy-11-q1",
    "title": "Maximum Frequency & Minimum Wavelength of X-Rays from 30 kV Electrons",
    "shortLabel": "Exer 11.1: 30 kV X-Ray Cutoff ν & λ",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.1",
    "subtopicId": "phy-sub-11-1",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency (High-Yield Bremsstrahlung Limit Problem)",
    "questionPrompt": "Find the (a) maximum frequency, and (b) minimum wavelength of X-rays produced by 30 kV electrons.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.1",
      "equations": "h ν_max = e V;  λ_min = hc / (e V)",
      "figures": "Inverse photoelectric effect / X-ray cutoff",
      "summary": "Converts full electron kinetic energy (30 keV) into single highest-energy X-ray photon (7.24 × 10¹⁸ Hz, 0.0414 nm)."
    },
    "theory": [
      "When an electron accelerated through potential $V$ converts 100% of its kinetic energy $K = eV$ into a single X-ray photon, the photon attains maximum frequency $\\nu_{\\max}$ and minimum wavelength $\\lambda_{\\min}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 11.1)",
        "setup": "$V = 30\\text{ kV} = 3.0\\times 10^4\\text{ V},\\ e = 1.6\\times 10^{-19}\\text{ C},\\ h = 6.63\\times 10^{-34}\\text{ J s}$.",
        "steps": [
          {
            "text": "(a) Equate maximum photon energy $h\\nu_{\\max} = eV$:",
            "equation": "\\nu_{\\max} = \\frac{eV}{h} = \\frac{(1.6\\times 10^{-19})(3.0\\times 10^4)}{6.63\\times 10^{-34}} = 7.24 \\times 10^{18}\\text{ Hz}"
          },
          {
            "text": "(b) Minimum cutoff wavelength $\\lambda_{\\min} = c / \\nu_{\\max}$:",
            "equation": "\\lambda_{\\min} = \\frac{3.0\\times 10^8}{7.24\\times 10^{18}} = 4.14 \\times 10^{-11}\\text{ m} = 0.0414\\text{ nm}"
          }
        ],
        "finalFormula": "\\text{(a) } \\nu_{\\max} = 7.24\\times 10^{18}\\text{ Hz} \\quad | \\quad \\text{(b) } \\lambda_{\\min} = 0.0414\\text{ nm}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "eV = h ν_max",
      "7.24×10¹⁸ Hz",
      "λ_min = 0.0414 nm"
    ],
    "termsGlossary": [
      {
        "symbol": "\\lambda_{\\min}",
        "term": "Duane–Hunt Cutoff Wavelength",
        "definition": "Shortest X-ray wavelength $1242/V(\\text{eV})\\text{ nm}$ equal to $0.0414\\text{ nm}$ at $30\\text{ kV}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Calculating $\\nu_{\\max} = 7.24\\times 10^{18}\\text{ Hz}$.",
      "1 Mark: Calculating $\\lambda_{\\min} = 0.0414\\text{ nm}$."
    ],
    "examinerTips": "Verify with 1242 / 30000 = 0.0414 nm — exact match!",
    "number": 30,
    "modelAnswer": {
      "statement": "When an electron accelerated through potential $V$ converts 100% of its kinetic energy $K = eV$ into a single X-ray photon, the photon attains maximum frequency $\\nu_{\\max}$ and minimum wavelength $\\lambda_{\\min}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 11.1)",
          "steps": [
            "(a) Equate maximum photon energy $h\\nu_{\\max} = eV$: \\nu_{\\max} = \\frac{eV}{h} = \\frac{(1.6\\times 10^{-19})(3.0\\times 10^4)}{6.63\\times 10^{-34}} = 7.24 \\times 10^{18}\\text{ Hz}",
            "(b) Minimum cutoff wavelength $\\lambda_{\\min} = c / \\nu_{\\max}$: \\lambda_{\\min} = \\frac{3.0\\times 10^8}{7.24\\times 10^{18}} = 4.14 \\times 10^{-11}\\text{ m} = 0.0414\\text{ nm}"
          ],
          "formula": "\\text{(a) } \\nu_{\\max} = 7.24\\times 10^{18}\\text{ Hz} \\quad | \\quad \\text{(b) } \\lambda_{\\min} = 0.0414\\text{ nm}"
        }
      ],
      "conclusion": "Verify with 1242 / 30000 = 0.0414 nm — exact match!"
    }
  },
  {
    "id": "imp-phy-11-q2",
    "title": "Caesium Photoelectron Max KE, Stopping Potential & Max Speed",
    "shortLabel": "Exer 11.2: Cs Work Function 2.14 eV Triplet",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.2",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "99% Frequency (Core Einstein Photoelectric Numerical)",
    "questionPrompt": "The work function of caesium metal is 2.14 eV. When light of frequency 6 × 10¹⁴ Hz is incident on the metal surface, photoemission of electrons occurs. What is the\n(a) maximum kinetic energy of the emitted electrons,\n(b) stopping potential, and\n(c) maximum speed of the emitted photoelectrons?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.2",
      "equations": "K_max = hν - φ₀;  e V₀ = K_max;  v_max = √(2 K_max / m_e)",
      "figures": "Einstein's equation numerical",
      "summary": "Computes K_max = 0.345 eV, V₀ = 0.345 V, and v_max = 3.48 × 10⁵ m/s for caesium."
    },
    "theory": [
      "By Einstein's photoelectric equation, $K_{\\max} = h\\nu - \\phi_0$, and stopping potential $V_0$ numerically equals $K_{\\max}(\\text{in eV})$ volts."
    ],
    "derivations": [
      {
        "name": "3-Part Photoelectric Solution (Exercise 11.2)",
        "setup": "$\\phi_0 = 2.14\\text{ eV},\\ \\nu = 6.0\\times 10^{14}\\text{ Hz},\\ h = 6.63\\times 10^{-34}\\text{ J s},\\ m_e = 9.11\\times 10^{-31}\\text{ kg}$.",
        "steps": [
          {
            "text": "Incident photon energy in eV:",
            "equation": "E = \\frac{h\\nu}{e} = \\frac{6.63\\times 10^{-34} \\times 6.0\\times 10^{14}}{1.6\\times 10^{-19}} = 2.486\\text{ eV}"
          },
          {
            "text": "(a) Maximum kinetic energy $K_{\\max}$:",
            "equation": "K_{\\max} = E - \\phi_0 = 2.486 - 2.14 = 0.346\\text{ eV} = 5.54 \\times 10^{-20}\\text{ J}"
          },
          {
            "text": "(b) Stopping potential $V_0 = K_{\\max} / e$:",
            "equation": "V_0 = \\frac{0.346\\text{ eV}}{e} = 0.346\\text{ V} \\; (\\approx 0.34\\text{–}0.35\\text{ V})"
          },
          {
            "text": "(c) Maximum photoelectron speed:",
            "equation": "v_{\\max} = \\sqrt{\\frac{2 K_{\\max}}{m_e}} = \\sqrt{\\frac{2 \\times 5.54 \\times 10^{-20}}{9.11 \\times 10^{-31}}} = 3.49 \\times 10^5\\text{ m/s} \\; (\\text{or } 348\\text{ km/s})"
          }
        ],
        "finalFormula": "\\text{(a) } K_{\\max} = 0.346\\text{ eV}, \\; \\text{(b) } V_0 = 0.346\\text{ V}, \\; \\text{(c) } v_{\\max} = 3.49\\times 10^5\\text{ m/s}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Photoelectric Cut-off & Kinetic Energy",
      "examDrawingGuide": [
        "Show V₀ = 0.345 V cut-off on retarding voltage axis."
      ]
    },
    "keyPointsAndKeywords": [
      "hν = 2.486 eV",
      "Kmax = 0.346 eV",
      "V0 = 0.346 V",
      "vmax = 3.49×10⁵ m/s"
    ],
    "termsGlossary": [
      {
        "symbol": "V_0",
        "term": "Stopping Potential",
        "definition": "Minimum negative anode potential stopping fastest photoelectrons ($K_{\\max} = eV_0$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Calculating $K_{\\max} = 0.345\\text{–}0.346\\text{ eV}$ ($5.54\\times 10^{-20}\\text{ J}$).",
      "1 Mark: Stopping potential $V_0 = 0.345\\text{–}0.346\\text{ V}$.",
      "1 Mark: Maximum speed $v_{\\max} \\approx 3.48\\text{–}3.49\\times 10^5\\text{ m/s}$."
    ],
    "examinerTips": "ALWAYS convert K_max back into JOULES (eV × 1.6×10^-19) before putting into √(2K/m) — never divide eV by kg!",
    "number": 31,
    "modelAnswer": {
      "statement": "By Einstein's photoelectric equation, $K_{\\max} = h\\nu - \\phi_0$, and stopping potential $V_0$ numerically equals $K_{\\max}(\\text{in eV})$ volts.",
      "derivations": [
        {
          "name": "3-Part Photoelectric Solution (Exercise 11.2)",
          "steps": [
            "Incident photon energy in eV: E = \\frac{h\\nu}{e} = \\frac{6.63\\times 10^{-34} \\times 6.0\\times 10^{14}}{1.6\\times 10^{-19}} = 2.486\\text{ eV}",
            "(a) Maximum kinetic energy $K_{\\max}$: K_{\\max} = E - \\phi_0 = 2.486 - 2.14 = 0.346\\text{ eV} = 5.54 \\times 10^{-20}\\text{ J}",
            "(b) Stopping potential $V_0 = K_{\\max} / e$: V_0 = \\frac{0.346\\text{ eV}}{e} = 0.346\\text{ V} \\; (\\approx 0.34\\text{–}0.35\\text{ V})",
            "(c) Maximum photoelectron speed: v_{\\max} = \\sqrt{\\frac{2 K_{\\max}}{m_e}} = \\sqrt{\\frac{2 \\times 5.54 \\times 10^{-20}}{9.11 \\times 10^{-31}}} = 3.49 \\times 10^5\\text{ m/s} \\; (\\text{or } 348\\text{ km/s})"
          ],
          "formula": "\\text{(a) } K_{\\max} = 0.346\\text{ eV}, \\; \\text{(b) } V_0 = 0.346\\text{ V}, \\; \\text{(c) } v_{\\max} = 3.49\\times 10^5\\text{ m/s}"
        }
      ],
      "conclusion": "ALWAYS convert K_max back into JOULES (eV × 1.6×10^-19) before putting into √(2K/m) — never divide eV by kg!"
    }
  },
  {
    "id": "imp-phy-11-q3",
    "title": "Max Kinetic Energy from 1.5 V Photoelectric Cut-Off Voltage",
    "shortLabel": "Exer 11.3: K_max from V₀ = 1.5 V",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.3",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "1 Mark",
    "marksNum": 1,
    "category": "Numerical",
    "frequency": "96% Frequency (Guaranteed 1M MCQ / VSA Numerical)",
    "questionPrompt": "The photoelectric cut-off voltage in a certain experiment is 1.5 V. What is the maximum kinetic energy of photoelectrons emitted?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.3",
      "equations": "K_max = e V₀",
      "figures": "Stopping potential relation",
      "summary": "Direct conversion K_max = 1.5 eV = 2.4 × 10⁻¹⁹ J."
    },
    "theory": [
      "Maximum kinetic energy of emitted photoelectrons equals the work done against the stopping potential: $K_{\\max} = e V_0$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 11.3)",
        "setup": "$V_0 = 1.5\\text{ V}$, $e = 1.6 \\times 10^{-19}\\text{ C}$.",
        "steps": [
          {
            "text": "Compute $K_{\\max} = e V_0$ in Joules and eV:",
            "equation": "K_{\\max} = (1.6 \\times 10^{-19}\\text{ C})(1.5\\text{ V}) = 2.4 \\times 10^{-19}\\text{ J} = 1.5\\text{ eV}"
          }
        ],
        "finalFormula": "K_{\\max} = 2.4 \\times 10^{-19}\\text{ J} = 1.5\\text{ eV}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Kmax = eV0",
      "2.4×10⁻¹⁹ J",
      "1.5 eV"
    ],
    "termsGlossary": [
      {
        "symbol": "eV_0",
        "term": "Stopping Work",
        "definition": "Maximum photoelectron kinetic energy numerically matching $V_0$ in eV."
      }
    ],
    "markingScheme": [
      "1 Mark: Writing $K_{\\max} = eV_0 = 2.4\\times 10^{-19}\\text{ J}$ (or $1.5\\text{ eV}$)."
    ],
    "examinerTips": "Always state the SI unit value in Joules (2.4 × 10^-19 J) as well as 1.5 eV so whichever key the examiner holds matches!",
    "number": 32,
    "modelAnswer": {
      "statement": "Maximum kinetic energy of emitted photoelectrons equals the work done against the stopping potential: $K_{\\max} = e V_0$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 11.3)",
          "steps": [
            "Compute $K_{\\max} = e V_0$ in Joules and eV: K_{\\max} = (1.6 \\times 10^{-19}\\text{ C})(1.5\\text{ V}) = 2.4 \\times 10^{-19}\\text{ J} = 1.5\\text{ eV}"
          ],
          "formula": "K_{\\max} = 2.4 \\times 10^{-19}\\text{ J} = 1.5\\text{ eV}"
        }
      ],
      "conclusion": "Always state the SI unit value in Joules (2.4 × 10^-19 J) as well as 1.5 eV so whichever key the examiner holds matches!"
    }
  },
  {
    "id": "imp-phy-11-q6",
    "title": "Predicting Cut-Off Voltage from Threshold & Incident Frequencies",
    "shortLabel": "Exer 11.6: Cut-Off Voltage from ν & ν₀",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.6",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "97% Frequency (Top Direct eV₀ = h(ν - ν₀) Problem)",
    "questionPrompt": "The threshold frequency for a certain metal is 3.3 × 10¹⁴ Hz. If light of frequency 8.2 × 10¹⁴ Hz is incident on the metal, predict the cut-off voltage for the photoelectric emission.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.6",
      "equations": "e V₀ = h(ν - ν₀)",
      "figures": "Linear V₀ vs ν graph",
      "summary": "Computes stopping potential V₀ = 2.03 V cleanly from frequency difference Δν = 4.9 × 10¹⁴ Hz."
    },
    "theory": [
      "By Einstein's equation, $e V_0 = h(\\nu - \\nu_0) \\implies V_0 = \\frac{h}{e}(\\nu - \\nu_0)$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 11.6)",
        "setup": "$\\nu_0 = 3.3\\times 10^{14}\\text{ Hz},\\ \\nu = 8.2\\times 10^{14}\\text{ Hz},\\ h = 6.63\\times 10^{-34}\\text{ J s}$.",
        "steps": [
          {
            "text": "Substitute frequency difference $\\nu - \\nu_0 = (8.2 - 3.3)\\times 10^{14} = 4.9\\times 10^{14}\\text{ Hz}$:",
            "equation": "V_0 = \\frac{h(\\nu - \\nu_0)}{e} = \\frac{6.63\\times 10^{-34} \\times 4.9\\times 10^{14}}{1.6\\times 10^{-19}} = 2.03\\text{ V}"
          }
        ],
        "finalFormula": "V_0 = 2.03\\text{ V}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Slope h/e on V₀ vs ν Graph",
      "examDrawingGuide": [
        "Plot V₀ rising linearly with slope h/e from threshold ν₀ = 3.3×10¹⁴ Hz."
      ]
    },
    "keyPointsAndKeywords": [
      "e V0 = h(ν - ν0)",
      "Δν = 4.9×10¹⁴ Hz",
      "V0 = 2.03 V"
    ],
    "termsGlossary": [
      {
        "symbol": "\\nu_0",
        "term": "Threshold Frequency",
        "definition": "Minimum frequency ($3.3\\times 10^{14}\\text{ Hz}$) below which no electrons escape."
      }
    ],
    "markingScheme": [
      "1 Mark: Einstein's formula $V_0 = \\frac{h(\\nu - \\nu_0)}{e}$.",
      "1 Mark: Correct arithmetic yielding $V_0 = 2.03\\text{ V}$."
    ],
    "examinerTips": "Shortcut constant h/e = 4.14 × 10^-15 V·s: simply multiply 4.14 × 4.9 × 10^-1 = 2.03 V!",
    "number": 33,
    "modelAnswer": {
      "statement": "By Einstein's equation, $e V_0 = h(\\nu - \\nu_0) \\implies V_0 = \\frac{h}{e}(\\nu - \\nu_0)$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 11.6)",
          "steps": [
            "Substitute frequency difference $\\nu - \\nu_0 = (8.2 - 3.3)\\times 10^{14} = 4.9\\times 10^{14}\\text{ Hz}$: V_0 = \\frac{h(\\nu - \\nu_0)}{e} = \\frac{6.63\\times 10^{-34} \\times 4.9\\times 10^{14}}{1.6\\times 10^{-19}} = 2.03\\text{ V}"
          ],
          "formula": "V_0 = 2.03\\text{ V}"
        }
      ],
      "conclusion": "Shortcut constant h/e = 4.14 × 10^-15 V·s: simply multiply 4.14 × 4.9 × 10^-1 = 2.03 V!"
    }
  },
  {
    "id": "imp-phy-11-q7",
    "title": "Testing Emission Eligibility for φ₀ = 4.2 eV at λ = 330 nm",
    "shortLabel": "Exer 11.7: Work Function 4.2 eV vs 330 nm",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.7",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "95% Frequency",
    "questionPrompt": "The work function for a certain metal is 4.2 eV. Will this metal give photoelectric emission for incident radiation of wavelength 330 nm?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.7",
      "equations": "λ₀ = hc / φ₀",
      "figures": "Threshold wavelength comparison",
      "summary": "Demonstrates threshold wavelength λ₀ = 295.4 nm < 330 nm (equivalently E = 3.77 eV < 4.2 eV), so no emission takes place."
    },
    "theory": [
      "Using threshold wavelength method: $\\lambda_0 = \\frac{hc}{\\phi_0}$; photoemission occurs only if incident wavelength $\\lambda \\le \\lambda_0$."
    ],
    "derivations": [
      {
        "name": "Threshold Wavelength & Energy Check (Exercise 11.7)",
        "setup": "$\\phi_0 = 4.2\\text{ eV} = 6.72\\times 10^{-19}\\text{ J},\\ \\lambda = 330\\text{ nm}$.",
        "steps": [
          {
            "text": "Compute threshold wavelength $\\lambda_0$ required for this metal:",
            "equation": "\\lambda_0 = \\frac{hc}{\\phi_0} = \\frac{6.63\\times 10^{-34} \\times 3.0\\times 10^8}{6.72\\times 10^{-19}} = 2.96 \\times 10^{-7}\\text{ m} = 296\\text{ nm}"
          },
          {
            "text": "Since incident wavelength $\\lambda = 330\\text{ nm} > \\lambda_0 = 296\\text{ nm}$ (equivalently photon energy $3.77\\text{ eV} < 4.2\\text{ eV}$), NO photoelectrons are emitted."
          }
        ],
        "finalFormula": "\\lambda (330\\text{ nm}) > \\lambda_0 (296\\text{ nm}) \\implies \\text{No photoelectric emission}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Threshold λ₀ = 296 nm",
      "Condition λ <= λ₀ fails",
      "Zero emission"
    ],
    "termsGlossary": [
      {
        "symbol": "\\lambda_0",
        "term": "Threshold Wavelength",
        "definition": "Maximum wavelength ($296\\text{ nm}$) capable of ejecting electrons from the surface."
      }
    ],
    "markingScheme": [
      "1 Mark: Computing $\\lambda_0 = 296\\text{ nm}$ (or $E = 3.77\\text{ eV}$).",
      "1 Mark: Concluding no emission since $\\lambda > \\lambda_0$."
    ],
    "examinerTips": "Either compare energies (3.77 eV < 4.2 eV) OR compare wavelengths (330 nm > 296 nm) — note the inequality direction flips because E ∝ 1/λ!",
    "number": 34,
    "modelAnswer": {
      "statement": "Using threshold wavelength method: $\\lambda_0 = \\frac{hc}{\\phi_0}$; photoemission occurs only if incident wavelength $\\lambda \\le \\lambda_0$.",
      "derivations": [
        {
          "name": "Threshold Wavelength & Energy Check (Exercise 11.7)",
          "steps": [
            "Compute threshold wavelength $\\lambda_0$ required for this metal: \\lambda_0 = \\frac{hc}{\\phi_0} = \\frac{6.63\\times 10^{-34} \\times 3.0\\times 10^8}{6.72\\times 10^{-19}} = 2.96 \\times 10^{-7}\\text{ m} = 296\\text{ nm}",
            "Since incident wavelength $\\lambda = 330\\text{ nm} > \\lambda_0 = 296\\text{ nm}$ (equivalently photon energy $3.77\\text{ eV} < 4.2\\text{ eV}$), NO photoelectrons are emitted."
          ],
          "formula": "\\lambda (330\\text{ nm}) > \\lambda_0 (296\\text{ nm}) \\implies \\text{No photoelectric emission}"
        }
      ],
      "conclusion": "Either compare energies (3.77 eV < 4.2 eV) OR compare wavelengths (330 nm > 296 nm) — note the inequality direction flips because E ∝ 1/λ!"
    }
  },
  {
    "id": "imp-phy-11-q8",
    "title": "Finding Threshold Frequency from Max Speed (6 × 10⁵ m/s) & Incident Frequency",
    "shortLabel": "Exer 11.8: Threshold ν₀ from Max Speed",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.8",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "94% Frequency",
    "questionPrompt": "Light of frequency 7.21 × 10¹⁴ Hz is incident on a metal surface. Electrons with a maximum speed of 6.0 × 10⁵ m/s are ejected from the surface. What is the threshold frequency for photoemission of electrons?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.8",
      "equations": "(1/2) m v_max² = h(ν - ν₀)",
      "figures": "Einstein speed-frequency equation",
      "summary": "Calculates threshold frequency ν₀ = 4.74 × 10¹⁴ Hz from maximum speed 6 × 10⁵ m/s."
    },
    "theory": [
      "Equate kinetic energy $\\frac{1}{2}m_e v_{\\max}^2$ to $h(\\nu - \\nu_0)$ and isolate $\\nu_0 = \\nu - \\frac{m_e v_{\\max}^2}{2h}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 11.8)",
        "setup": "$\\nu = 7.21\\times 10^{14}\\text{ Hz},\\ v_{\\max} = 6.0\\times 10^5\\text{ m/s},\\ m_e = 9.11\\times 10^{-31}\\text{ kg},\\ h = 6.63\\times 10^{-34}\\text{ J s}$.",
        "steps": [
          {
            "text": "Calculate maximum kinetic energy $K_{\\max}$ in Joules:",
            "equation": "K_{\\max} = \\frac{1}{2} m_e v_{\\max}^2 = \\frac{1}{2}(9.11\\times 10^{-31})(6.0\\times 10^5)^2 = 1.640 \\times 10^{-19}\\text{ J}"
          },
          {
            "text": "Divide $K_{\\max}$ by Planck's constant $h$ to get $(\\nu - \\nu_0)$:",
            "equation": "\\nu - \\nu_0 = \\frac{1.640 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 2.474 \\times 10^{14}\\text{ Hz}"
          },
          {
            "text": "Subtract from incident frequency $\\nu$:",
            "equation": "\\nu_0 = 7.21 \\times 10^{14} - 2.474 \\times 10^{14} = 4.736 \\times 10^{14}\\text{ Hz} \\; (\\approx 4.74 \\times 10^{14}\\text{ Hz})"
          }
        ],
        "finalFormula": "\\nu_0 = 4.74 \\times 10^{14}\\text{ Hz}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Kmax = 1.64×10⁻¹⁹ J",
      "Δν = 2.47×10¹⁴ Hz",
      "ν₀ = 4.74×10¹⁴ Hz"
    ],
    "termsGlossary": [
      {
        "symbol": "\\nu_0",
        "term": "Threshold Frequency",
        "definition": "Cut-off frequency $4.74\\times 10^{14}\\text{ Hz}$ corresponding to $\\phi_0 \\approx 1.96\\text{ eV}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Computing $K_{\\max} = \\frac{1}{2}mv_{\\max}^2 = 1.64\\times 10^{-19}\\text{ J}$.",
      "1 Mark: Applying $h(\\nu - \\nu_0) = K_{\\max}$.",
      "1 Mark: Obtaining $\\nu_0 = 4.74\\times 10^{14}\\text{ Hz}$."
    ],
    "examinerTips": "Expect ν₀ strictly LESS than incident ν (7.21×10¹⁴ Hz) since emission actually occurred — instant sanity check!",
    "number": 35,
    "modelAnswer": {
      "statement": "Equate kinetic energy $\\frac{1}{2}m_e v_{\\max}^2$ to $h(\\nu - \\nu_0)$ and isolate $\\nu_0 = \\nu - \\frac{m_e v_{\\max}^2}{2h}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 11.8)",
          "steps": [
            "Calculate maximum kinetic energy $K_{\\max}$ in Joules: K_{\\max} = \\frac{1}{2} m_e v_{\\max}^2 = \\frac{1}{2}(9.11\\times 10^{-31})(6.0\\times 10^5)^2 = 1.640 \\times 10^{-19}\\text{ J}",
            "Divide $K_{\\max}$ by Planck's constant $h$ to get $(\\nu - \\nu_0)$: \\nu - \\nu_0 = \\frac{1.640 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 2.474 \\times 10^{14}\\text{ Hz}",
            "Subtract from incident frequency $\\nu$: \\nu_0 = 7.21 \\times 10^{14} - 2.474 \\times 10^{14} = 4.736 \\times 10^{14}\\text{ Hz} \\; (\\approx 4.74 \\times 10^{14}\\text{ Hz})"
          ],
          "formula": "\\nu_0 = 4.74 \\times 10^{14}\\text{ Hz}"
        }
      ],
      "conclusion": "Expect ν₀ strictly LESS than incident ν (7.21×10¹⁴ Hz) since emission actually occurred — instant sanity check!"
    }
  },
  {
    "id": "imp-phy-11-q10",
    "title": "de Broglie Wavelength of Bullet, Ball & Microscopic Dust Particle",
    "shortLabel": "Exer 11.10: de Broglie Bullet, Ball & Dust",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 11.10",
    "subtopicId": "phy-sub-11-4",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "93% Frequency",
    "questionPrompt": "What is the de Broglie wavelength of\n(a) a bullet of mass 0.040 kg travelling at the speed of 1.0 km/s,\n(b) a ball of mass 0.060 kg moving at a speed of 1.0 m/s, and\n(c) a dust particle of mass 1.0 × 10⁻⁹ kg drifting with a speed of 2.2 m/s?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Exercise 11.10",
      "equations": "λ = h / (m v)",
      "figures": "Matter-wave scale comparison",
      "summary": "Calculates λ = h/(mv) across three increasing mass/momentum regimes: 1.66×10⁻³⁵ m, 1.11×10⁻³² m, and 3.01×10⁻²⁵ m."
    },
    "theory": [
      "Using $\\lambda = h / (mv)$, ensure km/s is converted to m/s ($1.0\\text{ km/s} = 1000\\text{ m/s}$) before substituting."
    ],
    "derivations": [
      {
        "name": "3-Object Matter Wave Calculation (Exercise 11.10)",
        "setup": "$h = 6.63\\times 10^{-34}\\text{ J s}$.",
        "steps": [
          {
            "text": "(a) Bullet ($m = 0.040\\text{ kg},\\ v = 1000\\text{ m/s}$):",
            "equation": "\\lambda_a = \\frac{6.63\\times 10^{-34}}{0.040 \\times 1000} = \\frac{6.63\\times 10^{-34}}{40} = 1.66 \\times 10^{-35}\\text{ m}"
          },
          {
            "text": "(b) Ball ($m = 0.060\\text{ kg},\\ v = 1.0\\text{ m/s}$):",
            "equation": "\\lambda_b = \\frac{6.63\\times 10^{-34}}{0.060 \\times 1.0} = 1.11 \\times 10^{-32}\\text{ m}"
          },
          {
            "text": "(c) Dust particle ($m = 1.0\\times 10^{-9}\\text{ kg},\\ v = 2.2\\text{ m/s}$):",
            "equation": "\\lambda_c = \\frac{6.63\\times 10^{-34}}{1.0\\times 10^{-9} \\times 2.2} = 3.01 \\times 10^{-25}\\text{ m}"
          }
        ],
        "finalFormula": "\\text{(a) } 1.66\\times 10^{-35}\\text{ m}, \\quad \\text{(b) } 1.11\\times 10^{-32}\\text{ m}, \\quad \\text{(c) } 3.01\\times 10^{-25}\\text{ m}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "1.0 km/s = 1000 m/s",
      "1.66×10⁻³⁵ m",
      "1.11×10⁻³² m",
      "3.01×10⁻²⁵ m"
    ],
    "termsGlossary": [
      {
        "symbol": "p = mv",
        "term": "Linear Momentum",
        "definition": "Larger mass $m$ makes $h/(mv)$ utterly negligible relative to atomic sizes."
      }
    ],
    "markingScheme": [
      "1 Mark each for parts (a), (b), and (c) with SI units."
    ],
    "examinerTips": "Note the unit trap in (a): 1.0 km/s MUST be converted to 1000 m/s!",
    "number": 36,
    "modelAnswer": {
      "statement": "Using $\\lambda = h / (mv)$, ensure km/s is converted to m/s ($1.0\\text{ km/s} = 1000\\text{ m/s}$) before substituting.",
      "derivations": [
        {
          "name": "3-Object Matter Wave Calculation (Exercise 11.10)",
          "steps": [
            "(a) Bullet ($m = 0.040\\text{ kg},\\ v = 1000\\text{ m/s}$): \\lambda_a = \\frac{6.63\\times 10^{-34}}{0.040 \\times 1000} = \\frac{6.63\\times 10^{-34}}{40} = 1.66 \\times 10^{-35}\\text{ m}",
            "(b) Ball ($m = 0.060\\text{ kg},\\ v = 1.0\\text{ m/s}$): \\lambda_b = \\frac{6.63\\times 10^{-34}}{0.060 \\times 1.0} = 1.11 \\times 10^{-32}\\text{ m}",
            "(c) Dust particle ($m = 1.0\\times 10^{-9}\\text{ kg},\\ v = 2.2\\text{ m/s}$): \\lambda_c = \\frac{6.63\\times 10^{-34}}{1.0\\times 10^{-9} \\times 2.2} = 3.01 \\times 10^{-25}\\text{ m}"
          ],
          "formula": "\\text{(a) } 1.66\\times 10^{-35}\\text{ m}, \\quad \\text{(b) } 1.11\\times 10^{-32}\\text{ m}, \\quad \\text{(c) } 3.01\\times 10^{-25}\\text{ m}"
        }
      ],
      "conclusion": "Note the unit trap in (a): 1.0 km/s MUST be converted to 1000 m/s!"
    }
  },
  {
    "id": "imp-phy-12-ex3",
    "title": "Orbital Radius & Velocity of Ground-State Electron in Hydrogen Atom",
    "shortLabel": "Ex 12.3: Hydrogen r₁ & v₁ from 13.6 eV",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 12.3",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Classic Rutherford-Bohr Relation Drill)",
    "questionPrompt": "It is found experimentally that 13.6 eV energy is required to separate a hydrogen atom into a proton and an electron. Compute the orbital radius and the velocity of the electron in a hydrogen atom.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Example 12.3",
      "equations": "E = -e² / (8πε₀ r);  K = -E = ½ m v²",
      "figures": "Ground-state hydrogen orbit",
      "summary": "Calculates Bohr radius 5.3 × 10⁻¹¹ m and electron speed 2.2 × 10⁶ m/s directly from total binding energy 13.6 eV."
    },
    "theory": [
      "Total mechanical energy of a bound electron is $E = -\\frac{e^2}{8\\pi\\varepsilon_0 r}$, kinetic energy is $K = -E = +13.6\\text{ eV}$, and potential energy is $U = 2E = -27.2\\text{ eV}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 12.3)",
        "setup": "$E = -13.6\\text{ eV} = -13.6\\times 1.6\\times 10^{-19} = -2.18\\times 10^{-18}\\text{ J}$, $\\frac{1}{4\\pi\\varepsilon_0} = 9\\times 10^9\\text{ N m}^2/\\text{C}^2$.",
        "steps": [
          {
            "text": "Solve $r = -\\frac{e^2}{8\\pi\\varepsilon_0 E} = \\frac{k e^2}{2 |E|}$ for orbital radius:",
            "equation": "r = \\frac{(9\\times 10^9)(1.6\\times 10^{-19})^2}{2 \\times 2.18\\times 10^{-18}} = 5.3 \\times 10^{-11}\\text{ m} \\; (0.53\\text{ \\AA})"
          },
          {
            "text": "Using $K = \\frac{1}{2} m_e v^2 = |E| = 2.18\\times 10^{-18}\\text{ J}$:",
            "equation": "v = \\sqrt{\\frac{2 |E|}{m_e}} = \\sqrt{\\frac{2 \\times 2.18\\times 10^{-18}}{9.1\\times 10^{-31}}} = 2.19 \\times 10^6\\text{ m/s} \\; (\\approx 2.2 \\times 10^6\\text{ m/s})"
          }
        ],
        "finalFormula": "r = 5.3 \\times 10^{-11}\\text{ m}, \\qquad v = 2.2 \\times 10^6\\text{ m/s}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Ground State Hydrogen r₁ & v₁",
      "examDrawingGuide": [
        "Verify r₁ = 0.53 Å and v₁ ≈ c/137."
      ]
    },
    "keyPointsAndKeywords": [
      "|E| = 2.18×10⁻¹⁸ J",
      "r = e²/(8πε₀|E|) = 0.53 Å",
      "v = 2.2×10⁶ m/s"
    ],
    "termsGlossary": [
      {
        "symbol": "a_0",
        "term": "Bohr Radius",
        "definition": "First hydrogen orbit radius $5.29\\times 10^{-11}\\text{ m} \\approx 0.53\\text{ \\AA}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Converting $E = -2.18\\times 10^{-18}\\text{ J}$.",
      "1 Mark: Computing orbital radius $5.3\\times 10^{-11}\\text{ m}$.",
      "1 Mark: Computing speed $2.2\\times 10^6\\text{ m/s}$."
    ],
    "examinerTips": "Instant ratio check: ground-state electron speed in hydrogen is approximately c / 137 = 3×10^8 / 137 ≈ 2.19×10^6 m/s!",
    "number": 37,
    "modelAnswer": {
      "statement": "Total mechanical energy of a bound electron is $E = -\\frac{e^2}{8\\pi\\varepsilon_0 r}$, kinetic energy is $K = -E = +13.6\\text{ eV}$, and potential energy is $U = 2E = -27.2\\text{ eV}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 12.3)",
          "steps": [
            "Solve $r = -\\frac{e^2}{8\\pi\\varepsilon_0 E} = \\frac{k e^2}{2 |E|}$ for orbital radius: r = \\frac{(9\\times 10^9)(1.6\\times 10^{-19})^2}{2 \\times 2.18\\times 10^{-18}} = 5.3 \\times 10^{-11}\\text{ m} \\; (0.53\\text{ \\AA})",
            "Using $K = \\frac{1}{2} m_e v^2 = |E| = 2.18\\times 10^{-18}\\text{ J}$: v = \\sqrt{\\frac{2 |E|}{m_e}} = \\sqrt{\\frac{2 \\times 2.18\\times 10^{-18}}{9.1\\times 10^{-31}}} = 2.19 \\times 10^6\\text{ m/s} \\; (\\approx 2.2 \\times 10^6\\text{ m/s})"
          ],
          "formula": "r = 5.3 \\times 10^{-11}\\text{ m}, \\qquad v = 2.2 \\times 10^6\\text{ m/s}"
        }
      ],
      "conclusion": "Instant ratio check: ground-state electron speed in hydrogen is approximately c / 137 = 3×10^8 / 137 ≈ 2.19×10^6 m/s!"
    }
  },
  {
    "id": "imp-phy-12-ex4",
    "title": "Initial Frequency of Radiation Emitted by Classical Revolving Electron",
    "shortLabel": "Ex 12.4: Classical Orbital Frequency ν",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 12.4",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "91% Frequency (Shows Why Classical Atom Fails / UV Frequency)",
    "questionPrompt": "According to the classical electromagnetic theory, calculate the initial frequency of the light emitted by the electron revolving around a proton in hydrogen atom.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Example 12.4",
      "equations": "ν = v / (2π r)",
      "figures": "Classical orbital frequency vs spiral collapse",
      "summary": "Evaluates orbital revolution frequency 6.6 × 10¹⁵ Hz using ground-state speed and radius from Example 12.3."
    },
    "theory": [
      "By classical electromagnetism, a centripetally accelerating orbiting electron radiates EM waves of frequency equal to its orbital revolution frequency $\\nu = \\frac{v}{2\\pi r}$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 12.4)",
        "setup": "Using Example 12.3 values: $v = 2.2 \\times 10^6\\text{ m/s}$ and $r = 5.3 \\times 10^{-11}\\text{ m}$.",
        "steps": [
          {
            "text": "Substitute into orbital frequency formula $\\nu = \\frac{v}{2\\pi r}$:",
            "equation": "\\nu = \\frac{2.2 \\times 10^6}{2 \\times 3.1416 \\times 5.3 \\times 10^{-11}} = 6.6 \\times 10^{15}\\text{ Hz}"
          }
        ],
        "finalFormula": "\\nu = 6.6 \\times 10^{15}\\text{ Hz} \\; (\\text{UV region initially, shifting continuously as electron spirals inward!})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "ν = v / (2π r)",
      "6.6×10¹⁵ Hz",
      "Classical continuous spiral radiation"
    ],
    "termsGlossary": [
      {
        "symbol": "\\nu_{\\text{orb}}",
        "term": "Orbital Frequency",
        "definition": "Revolutions per second ($6.6\\times 10^{15}\\text{ Hz}$) equal to initial classical radiated frequency."
      }
    ],
    "markingScheme": [
      "1 Mark: Formula $\\nu = v/(2\\pi r)$ and quoting $v, r$ from Example 12.3.",
      "1 Mark: Numerical calculation $6.6\\times 10^{15}\\text{ Hz}$."
    ],
    "examinerTips": "Because NCERT pairs Example 12.4 directly with Example 12.3, remember ground-state values r = 5.3 × 10⁻¹¹ m and v = 2.2 × 10⁶ m/s in case they aren't reprinted in a board exam!",
    "number": 38,
    "modelAnswer": {
      "statement": "By classical electromagnetism, a centripetally accelerating orbiting electron radiates EM waves of frequency equal to its orbital revolution frequency $\\nu = \\frac{v}{2\\pi r}$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 12.4)",
          "steps": [
            "Substitute into orbital frequency formula $\\nu = \\frac{v}{2\\pi r}$: \\nu = \\frac{2.2 \\times 10^6}{2 \\times 3.1416 \\times 5.3 \\times 10^{-11}} = 6.6 \\times 10^{15}\\text{ Hz}"
          ],
          "formula": "\\nu = 6.6 \\times 10^{15}\\text{ Hz} \\; (\\text{UV region initially, shifting continuously as electron spirals inward!})"
        }
      ],
      "conclusion": "Because NCERT pairs Example 12.4 directly with Example 12.3, remember ground-state values r = 5.3 × 10⁻¹¹ m and v = 2.2 × 10⁶ m/s in case they aren't reprinted in a board exam!"
    }
  },
  {
    "id": "imp-phy-12-q5",
    "title": "Kinetic Energy & Potential Energy of Hydrogen Ground State (-13.6 eV)",
    "shortLabel": "Exer 12.5: H-Atom K & U from Total E",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 12.5",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "1 Mark",
    "marksNum": 1,
    "category": "Numerical",
    "frequency": "100% Frequency (Must-Know 1M/2M Board Classic)",
    "questionPrompt": "The ground state energy of hydrogen atom is -13.6 eV. What are the kinetic and potential energies of the electron in this state?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Exercise 12.5",
      "equations": "K = -E;  U = 2E",
      "figures": "Virial theorem in Bohr orbits",
      "summary": "Derives K = +13.6 eV and U = -27.2 eV for any Coulomb bound orbit."
    },
    "theory": [
      "For an electron revolving in a stationary Bohr orbit, centripetal Coulomb balance gives $K = +\\frac{e^2}{8\\pi\\varepsilon_0 r}$, $U = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$, and total energy $E = K + U = -\\frac{e^2}{8\\pi\\varepsilon_0 r}$, hence $K = -E$ and $U = 2E$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 12.5)",
        "setup": "Total energy $E = -13.6\\text{ eV}$.",
        "steps": [
          {
            "text": "Kinetic energy ($K = -E$, always positive):",
            "equation": "K = -(-13.6\\text{ eV}) = +13.6\\text{ eV}"
          },
          {
            "text": "Potential energy ($U = 2E$, always negative):",
            "equation": "U = 2 \\times (-13.6\\text{ eV}) = -27.2\\text{ eV}"
          }
        ],
        "finalFormula": "K = +13.6\\text{ eV}, \\qquad U = -27.2\\text{ eV}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Hydrogen Energy Levels E_n = -13.6/n² eV",
      "examDrawingGuide": [
        "Check K + U = 13.6 + (-27.2) = -13.6 eV."
      ]
    },
    "keyPointsAndKeywords": [
      "K = -E = +13.6 eV",
      "U = 2E = -27.2 eV",
      "K : U : E = 1 : -2 : -1"
    ],
    "termsGlossary": [
      {
        "symbol": "U = 2E",
        "term": "Coulomb Potential Energy",
        "definition": "Always twice total energy ($-27.2\\text{ eV}$ in ground state)."
      }
    ],
    "markingScheme": [
      "0.5 Mark: $K = -E = +13.6\\text{ eV}$.",
      "0.5 Mark: $U = 2E = -27.2\\text{ eV}$."
    ],
    "examinerTips": "Same rule holds for excited states too! E.g. at n=2, E₂ = -3.4 eV → K = +3.4 eV, U = -6.8 eV!",
    "number": 39,
    "modelAnswer": {
      "statement": "For an electron revolving in a stationary Bohr orbit, centripetal Coulomb balance gives $K = +\\frac{e^2}{8\\pi\\varepsilon_0 r}$, $U = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$, and total energy $E = K + U = -\\frac{e^2}{8\\pi\\varepsilon_0 r}$, hence $K = -E$ and $U = 2E$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 12.5)",
          "steps": [
            "Kinetic energy ($K = -E$, always positive): K = -(-13.6\\text{ eV}) = +13.6\\text{ eV}",
            "Potential energy ($U = 2E$, always negative): U = 2 \\times (-13.6\\text{ eV}) = -27.2\\text{ eV}"
          ],
          "formula": "K = +13.6\\text{ eV}, \\qquad U = -27.2\\text{ eV}"
        }
      ],
      "conclusion": "Same rule holds for excited states too! E.g. at n=2, E₂ = -3.4 eV → K = +3.4 eV, U = -6.8 eV!"
    }
  },
  {
    "id": "imp-phy-12-q7",
    "title": "Electron Speeds & Orbital Periods in n = 1, 2, 3 Bohr Levels of Hydrogen",
    "shortLabel": "Exer 12.7: Bohr Speed & Period n=1,2,3",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 12.7",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "93% Frequency (Clean n & n³ Scaling Proof)",
    "questionPrompt": "Using the Bohr's model calculate the speed of the electron in a hydrogen atom in the n = 1, 2, and 3 levels. (b) Calculate the orbital period in each of these levels.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Exercise 12.7",
      "equations": "v_n = v₁ / n;  r_n = r₁ n²;  T_n = 2π r_n / v_n = T₁ n³",
      "figures": "Bohr orbit scaling laws",
      "summary": "Evaluates speeds (2.18×10⁶, 1.09×10⁶, 7.27×10⁵ m/s) and orbital periods (1.52×10⁻¹⁶, 1.22×10⁻¹⁵, 4.11×10⁻¹⁵ s)."
    },
    "theory": [
      "In Bohr orbits of hydrogen ($Z=1$): speed $v_n = \\frac{e^2}{2\\varepsilon_0 h n} = \\frac{v_1}{n}$, radius $r_n = r_1 n^2$, and time period $T_n = \\frac{2\\pi r_n}{v_n} = T_1 n^3$."
    ],
    "derivations": [
      {
        "name": "Speed & Orbital Period Table for n = 1, 2, 3 (Exercise 12.7)",
        "setup": "$v_1 = 2.18 \\times 10^6\\text{ m/s},\\ r_1 = 5.29 \\times 10^{-11}\\text{ m}$.",
        "steps": [
          {
            "text": "(a) Electron speeds $v_n = v_1 / n$:",
            "equation": "v_1 = 2.18 \\times 10^6\\text{ m/s}, \\quad v_2 = 1.09 \\times 10^6\\text{ m/s}, \\quad v_3 = 7.27 \\times 10^5\\text{ m/s}"
          },
          {
            "text": "(b) Ground-state orbital period $T_1 = \\frac{2\\pi r_1}{v_1}$ and scaling $T_n = T_1 n^3$:",
            "equation": "T_1 = \\frac{2\\pi(5.29\\times 10^{-11})}{2.18\\times 10^6} = 1.52 \\times 10^{-16}\\text{ s}"
          },
          {
            "text": "Periods for $n = 2$ ($\\times 8$) and $n = 3$ ($\\times 27$):",
            "equation": "T_2 = 8 T_1 = 1.22 \\times 10^{-15}\\text{ s}, \\quad T_3 = 27 T_1 = 4.11 \\times 10^{-15}\\text{ s}"
          }
        ],
        "finalFormula": "v_n \\propto 1/n \\; (2.18, 1.09, 0.727\\times 10^6\\text{ m/s}); \\; T_n \\propto n^3 \\; (0.152, 1.22, 4.11\\times 10^{-15}\\text{ s})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "vn ∝ 1/n",
      "Tn ∝ n³",
      "T1 = 1.52×10⁻¹⁶ s",
      "T2 = 8 T1, T3 = 27 T1"
    ],
    "termsGlossary": [
      {
        "symbol": "T_n \\propto n^3",
        "term": "Orbital Period Scaling",
        "definition": "Since $r_n \\propto n^2$ and $v_n \\propto 1/n$, orbital time scales as $n^3$."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Computing $v_1, v_2, v_3$ via $v_n = v_1/n$.",
      "1.5 Marks: Computing $T_1 = 1.52\\times 10^{-16}\\text{ s}$, $T_2 = 1.22\\times 10^{-15}\\text{ s}$, $T_3 = 4.11\\times 10^{-15}\\text{ s}$."
    ],
    "examinerTips": "Using T_n = T_1 n^3 avoids recalculating r_2 and r_3 separately and prevents arithmetic slips!",
    "number": 40,
    "modelAnswer": {
      "statement": "In Bohr orbits of hydrogen ($Z=1$): speed $v_n = \\frac{e^2}{2\\varepsilon_0 h n} = \\frac{v_1}{n}$, radius $r_n = r_1 n^2$, and time period $T_n = \\frac{2\\pi r_n}{v_n} = T_1 n^3$.",
      "derivations": [
        {
          "name": "Speed & Orbital Period Table for n = 1, 2, 3 (Exercise 12.7)",
          "steps": [
            "(a) Electron speeds $v_n = v_1 / n$: v_1 = 2.18 \\times 10^6\\text{ m/s}, \\quad v_2 = 1.09 \\times 10^6\\text{ m/s}, \\quad v_3 = 7.27 \\times 10^5\\text{ m/s}",
            "(b) Ground-state orbital period $T_1 = \\frac{2\\pi r_1}{v_1}$ and scaling $T_n = T_1 n^3$: T_1 = \\frac{2\\pi(5.29\\times 10^{-11})}{2.18\\times 10^6} = 1.52 \\times 10^{-16}\\text{ s}",
            "Periods for $n = 2$ ($\\times 8$) and $n = 3$ ($\\times 27$): T_2 = 8 T_1 = 1.22 \\times 10^{-15}\\text{ s}, \\quad T_3 = 27 T_1 = 4.11 \\times 10^{-15}\\text{ s}"
          ],
          "formula": "v_n \\propto 1/n \\; (2.18, 1.09, 0.727\\times 10^6\\text{ m/s}); \\; T_n \\propto n^3 \\; (0.152, 1.22, 4.11\\times 10^{-15}\\text{ s})"
        }
      ],
      "conclusion": "Using T_n = T_1 n^3 avoids recalculating r_2 and r_3 separately and prevents arithmetic slips!"
    }
  },
  {
    "id": "imp-phy-12-q8",
    "title": "Radii of n = 2 and n = 3 Orbits Given Innermost Hydrogen Radius r₁ = 5.3 × 10⁻¹¹ m",
    "shortLabel": "Exer 12.8: Bohr Radii r₂ and r₃",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 12.8",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "1 Mark",
    "marksNum": 1,
    "category": "Numerical",
    "frequency": "97% Frequency (Standard 1M/2M r_n = r_1 n² Problem)",
    "questionPrompt": "The radius of the innermost electron orbit of a hydrogen atom is 5.3 × 10⁻¹¹ m. What are the radii of the n = 2 and n = 3 orbits?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Exercise 12.8",
      "equations": "r_n = n² r₁",
      "figures": "Bohr stationary orbit radii",
      "summary": "Computes r₂ = 4 r₁ = 2.12 Å and r₃ = 9 r₁ = 4.77 Å."
    },
    "theory": [
      "In hydrogen, Bohr's quantization condition $L = n\\hbar$ yields orbit radius $r_n = n^2 r_1 \\propto n^2$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 12.8)",
        "setup": "Innermost radius $r_1 = 5.3 \\times 10^{-11}\\text{ m} = 0.53\\text{ \\AA}$.",
        "steps": [
          {
            "text": "For $n = 2$ ($2^2 = 4$):",
            "equation": "r_2 = 4 \\times 5.3\\times 10^{-11} = 2.12 \\times 10^{-10}\\text{ m} \\; (2.12\\text{ \\AA})"
          },
          {
            "text": "For $n = 3$ ($3^2 = 9$):",
            "equation": "r_3 = 9 \\times 5.3\\times 10^{-11} = 4.77 \\times 10^{-10}\\text{ m} \\; (4.77\\text{ \\AA})"
          }
        ],
        "finalFormula": "r_2 = 2.12 \\times 10^{-10}\\text{ m}, \\qquad r_3 = 4.77 \\times 10^{-10}\\text{ m}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "r_n = n² r₁",
      "r₂ = 2.12×10⁻¹⁰ m",
      "r₃ = 4.77×10⁻¹⁰ m"
    ],
    "termsGlossary": [
      {
        "symbol": "r_n \\propto n^2",
        "term": "Orbit Spacing Ratio",
        "definition": "Radii grow as $1 : 4 : 9 : 16$."
      }
    ],
    "markingScheme": [
      "0.5 Mark: $r_2 = 4 r_1 = 2.12\\times 10^{-10}\\text{ m}$.",
      "0.5 Mark: $r_3 = 9 r_1 = 4.77\\times 10^{-10}\\text{ m}$."
    ],
    "examinerTips": "Double-check exponent powers: 21.2 × 10⁻¹¹ m = 2.12 × 10⁻¹⁰ m (NOT 10⁻¹¹)!",
    "number": 41,
    "modelAnswer": {
      "statement": "In hydrogen, Bohr's quantization condition $L = n\\hbar$ yields orbit radius $r_n = n^2 r_1 \\propto n^2$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 12.8)",
          "steps": [
            "For $n = 2$ ($2^2 = 4$): r_2 = 4 \\times 5.3\\times 10^{-11} = 2.12 \\times 10^{-10}\\text{ m} \\; (2.12\\text{ \\AA})",
            "For $n = 3$ ($3^2 = 9$): r_3 = 9 \\times 5.3\\times 10^{-11} = 4.77 \\times 10^{-10}\\text{ m} \\; (4.77\\text{ \\AA})"
          ],
          "formula": "r_2 = 2.12 \\times 10^{-10}\\text{ m}, \\qquad r_3 = 4.77 \\times 10^{-10}\\text{ m}"
        }
      ],
      "conclusion": "Double-check exponent powers: 21.2 × 10⁻¹¹ m = 2.12 × 10⁻¹⁰ m (NOT 10⁻¹¹)!"
    }
  },
  {
    "id": "imp-phy-13-ex1",
    "title": "Nuclear Density of Iron Nucleus (⁵⁶Fe, m = 55.85 u)",
    "shortLabel": "Ex 13.1: Iron Nuclear Density",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 13.1",
    "subtopicId": "phy-sub-13-1",
    "unit": "Atoms and Nuclei",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "97% Frequency (Classic Nuclear Matter Density Verification)",
    "questionPrompt": "Given the mass of iron nucleus as 55.85 u and A = 56, find the nuclear density?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Example 13.1",
      "equations": "R = R₀ A^(1/3);  ρ = M / (4/3 π R₀³ A)",
      "figures": "Iron nucleus volume & density",
      "summary": "Calculates nuclear density of ⁵⁶Fe as 2.29 × 10¹⁷ kg m⁻³."
    },
    "theory": [
      "Nuclear radius $R = R_0 A^{1/3}$ ($R_0 = 1.2\\times 10^{-15}\\text{ m}$), so spherical nuclear volume is $V = \\frac{4}{3}\\pi R_0^3 A$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 13.1)",
        "setup": "$m = 55.85\\text{ u} = 55.85 \\times 1.6605\\times 10^{-27} = 9.27\\times 10^{-26}\\text{ kg}$, $A = 56$, $R_0 = 1.2\\times 10^{-15}\\text{ m}$.",
        "steps": [
          {
            "text": "Compute volume of the spherical iron nucleus ($V = \\frac{4}{3}\\pi R_0^3 A$):",
            "equation": "V = \\frac{4}{3}\\pi (1.2\\times 10^{-15})^3 \\times 56 = 4.05 \\times 10^{-43}\\text{ m}^3"
          },
          {
            "text": "Nuclear density $\\rho = \\text{Mass} / \\text{Volume}$:",
            "equation": "\\rho = \\frac{9.27 \\times 10^{-26}\\text{ kg}}{4.05 \\times 10^{-43}\\text{ m}^3} = 2.29 \\times 10^{17}\\text{ kg m}^{-3}"
          }
        ],
        "finalFormula": "\\rho_{\\text{Fe}} \\approx 2.29 \\times 10^{17}\\text{ kg m}^{-3}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Nuclear Size & Constant Density 2.3×10¹⁷ kg/m³",
      "examDrawingGuide": [
        "Note A cancels out, making all nuclei equally dense!"
      ]
    },
    "keyPointsAndKeywords": [
      "1 u = 1.6605×10⁻²⁷ kg",
      "V = 4/3 π R₀³ A",
      "ρ ≈ 2.29×10¹⁷ kg/m³"
    ],
    "termsGlossary": [
      {
        "symbol": "R_0 = 1.2\\text{ fm}",
        "term": "Nuclear Radius Constant",
        "definition": "Fermi scale constant ($1.2\\times 10^{-15}\\text{ m}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Mass conversion ($9.27\\times 10^{-26}\\text{ kg}$) and volume formula $\\frac{4}{3}\\pi R_0^3 A$.",
      "1 Mark: Density $\\approx 2.29\\times 10^{17}\\text{ kg m}^{-3}$."
    ],
    "examinerTips": "Double-check power of ten carefully: 10^-26 / 10^-43 = 10^+17 kg/m^3!",
    "number": 42,
    "modelAnswer": {
      "statement": "Nuclear radius $R = R_0 A^{1/3}$ ($R_0 = 1.2\\times 10^{-15}\\text{ m}$), so spherical nuclear volume is $V = \\frac{4}{3}\\pi R_0^3 A$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 13.1)",
          "steps": [
            "Compute volume of the spherical iron nucleus ($V = \\frac{4}{3}\\pi R_0^3 A$): V = \\frac{4}{3}\\pi (1.2\\times 10^{-15})^3 \\times 56 = 4.05 \\times 10^{-43}\\text{ m}^3",
            "Nuclear density $\\rho = \\text{Mass} / \\text{Volume}$: \\rho = \\frac{9.27 \\times 10^{-26}\\text{ kg}}{4.05 \\times 10^{-43}\\text{ m}^3} = 2.29 \\times 10^{17}\\text{ kg m}^{-3}"
          ],
          "formula": "\\rho_{\\text{Fe}} \\approx 2.29 \\times 10^{17}\\text{ kg m}^{-3}"
        }
      ],
      "conclusion": "Double-check power of ten carefully: 10^-26 / 10^-43 = 10^+17 kg/m^3!"
    }
  },
  {
    "id": "imp-phy-13-ex2",
    "title": "Mass-Energy Equivalence of 1 Gram of Substance (E = mc²)",
    "shortLabel": "Ex 13.2: Energy of 1 g Matter",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 13.2",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "1 Mark",
    "marksNum": 1,
    "category": "Numerical",
    "frequency": "92% Frequency (Fundamental E = mc² Conversion)",
    "questionPrompt": "Calculate the energy equivalent of 1 g of substance.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Example 13.2",
      "equations": "E = m c²",
      "figures": "Einstein mass-energy equivalence",
      "summary": "Direct calculation yielding 9 × 10¹³ J (= 25 million kWh) from 1 g = 10⁻³ kg."
    },
    "theory": [
      "By Einstein's mass-energy relation $E = mc^2$, complete annihilation of mass $m$ releases $E = m \\cdot c^2$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 13.2)",
        "setup": "$m = 1\\text{ g} = 10^{-3}\\text{ kg}$, $c = 3 \\times 10^8\\text{ m/s}$.",
        "steps": [
          {
            "text": "Substitute into $E = mc^2$:",
            "equation": "E = (10^{-3}\\text{ kg}) \\times (3 \\times 10^8\\text{ m/s})^2 = 10^{-3} \\times 9 \\times 10^{16} = 9 \\times 10^{13}\\text{ J}"
          }
        ],
        "finalFormula": "E = 9 \\times 10^{13}\\text{ J} \\; (\\text{or } 2.5 \\times 10^7\\text{ kWh})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "1 g = 10⁻³ kg",
      "E = mc² = 9×10¹³ J"
    ],
    "termsGlossary": [
      {
        "symbol": "c^2 = 9\\times 10^{16}",
        "term": "Mass-Energy Factor",
        "definition": "Every $1\\text{ kg}$ corresponds to $9\\times 10^{16}\\text{ J}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Converting $1\\text{ g} = 10^{-3}\\text{ kg}$ and computing $9\\times 10^{13}\\text{ J}$."
    ],
    "examinerTips": "Do not plug m = 1 instead of 10^-3 kg!",
    "number": 43,
    "modelAnswer": {
      "statement": "By Einstein's mass-energy relation $E = mc^2$, complete annihilation of mass $m$ releases $E = m \\cdot c^2$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 13.2)",
          "steps": [
            "Substitute into $E = mc^2$: E = (10^{-3}\\text{ kg}) \\times (3 \\times 10^8\\text{ m/s})^2 = 10^{-3} \\times 9 \\times 10^{16} = 9 \\times 10^{13}\\text{ J}"
          ],
          "formula": "E = 9 \\times 10^{13}\\text{ J} \\; (\\text{or } 2.5 \\times 10^7\\text{ kWh})"
        }
      ],
      "conclusion": "Do not plug m = 1 instead of 10^-3 kg!"
    }
  },
  {
    "id": "imp-phy-13-ex3",
    "title": "Energy Equivalent of 1 Atomic Mass Unit (931.5 MeV) & ¹⁶O Mass Defect in MeV/c²",
    "shortLabel": "Ex 13.3: 1 u = 931.5 MeV & ¹⁶O Mass Defect",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 13.3",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "98% Frequency (Universal Derivation + ¹⁶O Mass Defect Conversion)",
    "questionPrompt": "Find the energy equivalent of one atomic mass unit, first in Joules and then in MeV. Using this, express the mass defect of ¹⁶₈O in MeV/c².",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Example 13.3",
      "equations": "1 u × c² = 1.4924 × 10⁻¹⁰ J = 931.5 MeV",
      "figures": "Calibration of 1 u = 931.5 MeV/c²",
      "summary": "Establishes 1 u = 931.5 MeV/c² and converts ¹⁶O mass defect 0.13691 u into 127.5 MeV/c²."
    },
    "theory": [
      "Using precision constants $1\\text{ u} = 1.6605\\times 10^{-27}\\text{ kg}$ and $c = 2.9979\\times 10^8\\text{ m/s}$, convert mass equivalence from Joules to $\\text{MeV}$ ($1\\text{ MeV} = 1.602\\times 10^{-13}\\text{ J}$)."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 13.3)",
        "setup": "$1\\text{ u} = 1.6605\\times 10^{-27}\\text{ kg},\\ c = 2.9979\\times 10^8\\text{ m/s},\\ \\Delta m(^{16}_8\\text{O}) = 0.13691\\text{ u}$.",
        "steps": [
          {
            "text": "Energy equivalent of $1\\text{ u}$ in Joules:",
            "equation": "E = (1.6605\\times 10^{-27})(2.9979\\times 10^8)^2 = 1.4924 \\times 10^{-10}\\text{ J}"
          },
          {
            "text": "Convert to $\\text{MeV}$ (divide by $1.602\\times 10^{-13}\\text{ J/MeV}$):",
            "equation": "E = \\frac{1.4924 \\times 10^{-10}}{1.602 \\times 10^{-13}} \\approx 931.5\\text{ MeV} \\implies 1\\text{ u} = 931.5\\text{ MeV}/c^2"
          },
          {
            "text": "For $^{16}_8\\text{O}$, mass defect $\\Delta m = 8 m_H + 8 m_n - M(^{16}\\text{O}) = 0.13691\\text{ u}$:",
            "equation": "\\Delta m(^{16}\\text{O}) = 0.13691 \\times 931.5 = 127.5\\text{ MeV}/c^2"
          }
        ],
        "finalFormula": "1\\text{ u} = 1.4924\\times 10^{-10}\\text{ J} = 931.5\\text{ MeV}/c^2; \\quad \\Delta m(^{16}\\text{O}) = 127.5\\text{ MeV}/c^2"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "1.4924×10⁻¹⁰ J",
      "1 u = 931.5 MeV/c²",
      "Δm(¹⁶O) = 0.13691 u = 127.5 MeV/c²"
    ],
    "termsGlossary": [
      {
        "symbol": "\\text{MeV}/c^2",
        "term": "Nuclear Mass Unit",
        "definition": "Mass expressed as energy divided by $c^2$ ($1\\text{ u} = 931.5\\text{ MeV}/c^2$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Joule value $1.4924\\times 10^{-10}\\text{ J}$.",
      "1 Mark: Obtaining $931.5\\text{ MeV}$ ($1\\text{ u} = 931.5\\text{ MeV}/c^2$).",
      "1 Mark: Expressing $^{16}\\text{O}$ mass defect as $127.5\\text{ MeV}/c^2$."
    ],
    "examinerTips": "Remember 1 u = 931.5 MeV/c² requires exact c = 2.9979×10^8 and e = 1.602×10^-19 (rounded c=3×10^8, e=1.6×10^-19 gives 934 MeV)!",
    "number": 44,
    "modelAnswer": {
      "statement": "Using precision constants $1\\text{ u} = 1.6605\\times 10^{-27}\\text{ kg}$ and $c = 2.9979\\times 10^8\\text{ m/s}$, convert mass equivalence from Joules to $\\text{MeV}$ ($1\\text{ MeV} = 1.602\\times 10^{-13}\\text{ J}$).",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 13.3)",
          "steps": [
            "Energy equivalent of $1\\text{ u}$ in Joules: E = (1.6605\\times 10^{-27})(2.9979\\times 10^8)^2 = 1.4924 \\times 10^{-10}\\text{ J}",
            "Convert to $\\text{MeV}$ (divide by $1.602\\times 10^{-13}\\text{ J/MeV}$): E = \\frac{1.4924 \\times 10^{-10}}{1.602 \\times 10^{-13}} \\approx 931.5\\text{ MeV} \\implies 1\\text{ u} = 931.5\\text{ MeV}/c^2",
            "For $^{16}_8\\text{O}$, mass defect $\\Delta m = 8 m_H + 8 m_n - M(^{16}\\text{O}) = 0.13691\\text{ u}$: \\Delta m(^{16}\\text{O}) = 0.13691 \\times 931.5 = 127.5\\text{ MeV}/c^2"
          ],
          "formula": "1\\text{ u} = 1.4924\\times 10^{-10}\\text{ J} = 931.5\\text{ MeV}/c^2; \\quad \\Delta m(^{16}\\text{O}) = 127.5\\text{ MeV}/c^2"
        }
      ],
      "conclusion": "Remember 1 u = 931.5 MeV/c² requires exact c = 2.9979×10^8 and e = 1.602×10^-19 (rounded c=3×10^8, e=1.6×10^-19 gives 934 MeV)!"
    }
  },
  {
    "id": "imp-phy-13-q1",
    "title": "Binding Energy of Nitrogen Nucleus (¹⁴₇N)",
    "shortLabel": "Exer 13.1: Binding Energy of ¹⁴N",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 13.1",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "97% Frequency (Standard Atomic vs Nuclear Mass Trick)",
    "questionPrompt": "Obtain the binding energy (in MeV) of a nitrogen nucleus (¹⁴₇N), given m(¹⁴₇N) = 14.00307 u.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Exercise 13.1",
      "equations": "Δm = [Z m_H + (A-Z) m_n] - M_atom;  E_b = Δm × 931.5 MeV",
      "figures": "Atomic mass cancellation of Z electron masses",
      "summary": "Computes binding energy of ¹⁴₇N using neutral hydrogen mass 1.007825 u so 7 electron masses cancel automatically: E_b = 104.66 MeV."
    },
    "theory": [
      "ALWAYS pair atomic nuclide mass $M(^{14}_7\\text{N})$ with hydrogen atom mass $m(^1_1\\text{H}) = 1.007825\\text{ u}$ (NOT bare proton mass!), so all $Z$ electron masses cancel cleanly!"
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 13.1)",
        "setup": "$Z = 7,\\ N = 14 - 7 = 7,\\ m_H = 1.007825\\text{ u},\\ m_n = 1.008665\\text{ u},\\ M(^{14}\\text{N}) = 14.00307\\text{ u}$.",
        "steps": [
          {
            "text": "Mass defect $\\Delta m$:",
            "equation": "\\Delta m = 7(1.007825) + 7(1.008665) - 14.00307 = 14.11543 - 14.00307 = 0.11236\\text{ u}"
          },
          {
            "text": "Total binding energy $E_b = \\Delta m \\times 931.5\\text{ MeV}$:",
            "equation": "E_b = 0.11236 \\times 931.5 = 104.66\\text{ MeV}"
          }
        ],
        "finalFormula": "E_b(^{14}_7\\text{N}) = 104.66\\text{ MeV} \\; (\\text{or } 104.7\\text{ MeV})"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Use m_H = 1.007825 u with atomic M",
      "Δm = 0.11236 u",
      "Eb = 104.66 MeV"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Delta m",
        "term": "Mass Defect",
        "definition": "Mass converted to nuclear binding energy ($0.11236\\text{ u}$ for $^{14}\\text{N}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Mass defect $\\Delta m = 0.11226\\text{–}0.11236\\text{ u}$.",
      "1 Mark: Binding energy $\\approx 104.6\\text{–}104.7\\text{ MeV}$."
    ],
    "examinerTips": "Using atomic mass m_H = 1.007825 u guarantees exact electron cancellation without needing m_e separately!",
    "number": 45,
    "modelAnswer": {
      "statement": "ALWAYS pair atomic nuclide mass $M(^{14}_7\\text{N})$ with hydrogen atom mass $m(^1_1\\text{H}) = 1.007825\\text{ u}$ (NOT bare proton mass!), so all $Z$ electron masses cancel cleanly!",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 13.1)",
          "steps": [
            "Mass defect $\\Delta m$: \\Delta m = 7(1.007825) + 7(1.008665) - 14.00307 = 14.11543 - 14.00307 = 0.11236\\text{ u}",
            "Total binding energy $E_b = \\Delta m \\times 931.5\\text{ MeV}$: E_b = 0.11236 \\times 931.5 = 104.66\\text{ MeV}"
          ],
          "formula": "E_b(^{14}_7\\text{N}) = 104.66\\text{ MeV} \\; (\\text{or } 104.7\\text{ MeV})"
        }
      ],
      "conclusion": "Using atomic mass m_H = 1.007825 u guarantees exact electron cancellation without needing m_e separately!"
    }
  },
  {
    "id": "imp-phy-13-q2",
    "title": "Binding Energy & Binding Energy per Nucleon of ⁵⁶Fe and ²⁰⁹Bi",
    "shortLabel": "Exer 13.2: Binding Energy of ⁵⁶Fe & ²⁰⁹Bi",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 13.2",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "95% Frequency (High-Yield Stability Peak Numerical)",
    "questionPrompt": "Obtain the binding energy of the nuclei ⁵⁶₂₆Fe and ²⁰⁹₈₃Bi in units of MeV from the following data: m(⁵⁶₂₆Fe) = 55.934939 u, m(²⁰⁹₈₃Bi) = 208.980388 u, m_H = 1.007825 u, m_n = 1.008665 u.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Exercise 13.2",
      "equations": "Δm = Z m_H + N m_n - M;  E_b = Δm × 931.5 MeV;  E_bn = E_b / A",
      "figures": "Binding energy curve peak vs heavy nuclide",
      "summary": "Calculates E_b(Fe) = 492.26 MeV (8.79 MeV/nucleon) vs E_b(Bi) = 1640.26 MeV (7.85 MeV/nucleon)."
    },
    "theory": [
      "Notice that even though $^{209}\\text{Bi}$ has larger *total* binding energy ($1640\\text{ MeV} > 492\\text{ MeV}$), $^{56}\\text{Fe}$ has higher *binding energy per nucleon* ($8.79 > 7.85\\text{ MeV}$) making Iron far more stable per nucleon!"
    ],
    "derivations": [
      {
        "name": "Fe-56 & Bi-209 Calculations (Exercise 13.2)",
        "setup": "$m_H = 1.007825\\text{ u},\\ m_n = 1.008665\\text{ u}$.",
        "steps": [
          {
            "text": "For $^{56}_{26}\\text{Fe}$ ($Z=26,\\ N=30$):",
            "equation": "\\Delta m_{\\text{Fe}} = [26(1.007825) + 30(1.008665)] - 55.934939 = 56.463400 - 55.934939 = 0.528461\\text{ u}"
          },
          {
            "text": "Binding energy of $^{56}\\text{Fe}$ (and $E_{bn} = 492.26/56 = 8.79\\text{ MeV/nucleon}$):",
            "equation": "E_b(\\text{Fe}) = 0.528461 \\times 931.5 = 492.26\\text{ MeV}"
          },
          {
            "text": "For $^{209}_{83}\\text{Bi}$ ($Z=83,\\ N=126$):",
            "equation": "\\Delta m_{\\text{Bi}} = [83(1.007825) + 126(1.008665)] - 208.980388 = 210.741265 - 208.980388 = 1.760877\\text{ u}"
          },
          {
            "text": "Binding energy of $^{209}\\text{Bi}$ (note $E_{bn} = 1640.26/209 = 7.85\\text{ MeV/nucleon}$):",
            "equation": "E_b(\\text{Bi}) = 1.760877 \\times 931.5 = 1640.26\\text{ MeV}"
          }
        ],
        "finalFormula": "E_b(^{56}\\text{Fe}) = 492.26\\text{ MeV}; \\quad E_b(^{209}\\text{Bi}) = 1640.26\\text{ MeV}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Fe-56 Stability Peak on BE/A Curve",
      "examDrawingGuide": [
        "Inspect Fe-56 peak (~8.75-8.79 MeV) vs heavy A > 200 drop."
      ]
    },
    "keyPointsAndKeywords": [
      "Fe Δm = 0.528461 u",
      "Fe Eb = 492.26 MeV",
      "Bi Δm = 1.760877 u",
      "Bi Eb = 1640.26 MeV"
    ],
    "termsGlossary": [
      {
        "symbol": "E_{bn} = E_b / A",
        "term": "Stability Metric",
        "definition": "Iron ($8.79\\text{ MeV}$) exceeds Bismuth ($7.85\\text{ MeV}$) per nucleon."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Mass defect & $E_b = 492.26\\text{ MeV}$ for $^{56}\\text{Fe}$.",
      "1.5 Marks: Mass defect & $E_b = 1640.26\\text{ MeV}$ for $^{209}\\text{Bi}$."
    ],
    "examinerTips": "Keep 5–6 decimal places during atomic mass subtractions before multiplying by 931.5!",
    "number": 46,
    "modelAnswer": {
      "statement": "Notice that even though $^{209}\\text{Bi}$ has larger *total* binding energy ($1640\\text{ MeV} > 492\\text{ MeV}$), $^{56}\\text{Fe}$ has higher *binding energy per nucleon* ($8.79 > 7.85\\text{ MeV}$) making Iron far more stable per nucleon!",
      "derivations": [
        {
          "name": "Fe-56 & Bi-209 Calculations (Exercise 13.2)",
          "steps": [
            "For $^{56}_{26}\\text{Fe}$ ($Z=26,\\ N=30$): \\Delta m_{\\text{Fe}} = [26(1.007825) + 30(1.008665)] - 55.934939 = 56.463400 - 55.934939 = 0.528461\\text{ u}",
            "Binding energy of $^{56}\\text{Fe}$ (and $E_{bn} = 492.26/56 = 8.79\\text{ MeV/nucleon}$): E_b(\\text{Fe}) = 0.528461 \\times 931.5 = 492.26\\text{ MeV}",
            "For $^{209}_{83}\\text{Bi}$ ($Z=83,\\ N=126$): \\Delta m_{\\text{Bi}} = [83(1.007825) + 126(1.008665)] - 208.980388 = 210.741265 - 208.980388 = 1.760877\\text{ u}",
            "Binding energy of $^{209}\\text{Bi}$ (note $E_{bn} = 1640.26/209 = 7.85\\text{ MeV/nucleon}$): E_b(\\text{Bi}) = 1.760877 \\times 931.5 = 1640.26\\text{ MeV}"
          ],
          "formula": "E_b(^{56}\\text{Fe}) = 492.26\\text{ MeV}; \\quad E_b(^{209}\\text{Bi}) = 1640.26\\text{ MeV}"
        }
      ],
      "conclusion": "Keep 5–6 decimal places during atomic mass subtractions before multiplying by 931.5!"
    }
  },
  {
    "id": "imp-phy-13-q3",
    "title": "Nuclear Energy Required to Separate All Nucleons in a 3.0 g Copper Coin",
    "shortLabel": "Exer 13.3: 3 g Copper Coin Nucleon Separation",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 13.3",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Numerical",
    "frequency": "96% Frequency (Multi-Step Mole + Mass Defect Landmark Problem)",
    "questionPrompt": "A given coin has a mass of 3.0 g. Calculate the nuclear energy that would be required to separate all the neutrons and protons from each other. For simplicity assume that the coin is entirely made of ⁶³₂₉Cu atoms (of mass 62.92960 u).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Exercise 13.3",
      "equations": "N = (m/M_A) N_A;  Δm = 29 m_H + 34 m_n - M_Cu;  E_total = N × Δm × 931.5 MeV",
      "figures": "Mole count × single-nucleus binding energy",
      "summary": "Combines Avogadro atom count (2.868 × 10²²) with single ⁶³Cu binding energy (551.4 MeV) to get 1.58 × 10²⁵ MeV = 2.53 × 10¹² J."
    },
    "theory": [
      "First find the total number of $^{63}_{29}\\text{Cu}$ atoms in $3.0\\text{ g}$ using Avogadro's constant $N_A = 6.023\\times 10^{23}\\text{ mol}^{-1}$, then multiply by the binding energy of one $^{63}_{29}\\text{Cu}$ nucleus."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Multi-Part Solution (Exercise 13.3)",
        "setup": "$m = 3.0\\text{ g},\\ A = 63,\\ Z = 29,\\ N = 63 - 29 = 34,\\ M(^{63}\\text{Cu}) = 62.92960\\text{ u}$.",
        "steps": [
          {
            "text": "Number of $^{63}\\text{Cu}$ atoms in a $3.0\\text{ g}$ coin:",
            "equation": "N_{\\text{atoms}} = \\frac{3.0}{63} \\times 6.023 \\times 10^{23} = 2.868 \\times 10^{22}\\text{ atoms}"
          },
          {
            "text": "Mass defect per $^{63}_{29}\\text{Cu}$ atom ($29 m_H + 34 m_n - 62.92960$):",
            "equation": "\\Delta m = [29(1.007825) + 34(1.008665)] - 62.92960 = 63.521535 - 62.92960 = 0.591935\\text{ u}"
          },
          {
            "text": "Binding energy of a single $^{63}\\text{Cu}$ nucleus:",
            "equation": "E_b = 0.591935 \\times 931.5 = 551.39\\text{ MeV}"
          },
          {
            "text": "Total nuclear separation energy for the entire $3.0\\text{ g}$ coin:",
            "equation": "E_{\\text{total}} = (2.868\\times 10^{22}) \\times 551.39\\text{ MeV} = 1.581 \\times 10^{25}\\text{ MeV} = 2.53 \\times 10^{12}\\text{ J}"
          }
        ],
        "finalFormula": "E_{\\text{total}} = 1.58 \\times 10^{25}\\text{ MeV} = 2.53 \\times 10^{12}\\text{ J}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "2.868×10²² atoms",
      "Δm = 0.591935 u",
      "Eb(1 atom) = 551.4 MeV",
      "Total = 1.58×10²⁵ MeV"
    ],
    "termsGlossary": [
      {
        "symbol": "N_A",
        "term": "Avogadro Constant",
        "definition": "$6.023\\times 10^{23}$ atoms per $63\\text{ g}$ molar mass of $^{63}\\text{Cu}$."
      }
    ],
    "markingScheme": [
      "1 Mark: Number of atoms in $3.0\\text{ g}$ ($2.868\\times 10^{22}$).",
      "2 Marks: Mass defect $0.591935\\text{ u}$ and per-nucleus binding energy $551.4\\text{ MeV}$.",
      "2 Marks: Multiplying by $N_{\\text{atoms}}$ to get $1.58\\times 10^{25}\\text{ MeV}$ ($2.53\\times 10^{12}\\text{ J}$)."
    ],
    "examinerTips": "This is a 5-mark numerical favourite in pre-boards! Keep 62.92960 exact so Δm ≈ 0.5919 u gives 551.4 MeV cleanly.",
    "number": 47,
    "modelAnswer": {
      "statement": "First find the total number of $^{63}_{29}\\text{Cu}$ atoms in $3.0\\text{ g}$ using Avogadro's constant $N_A = 6.023\\times 10^{23}\\text{ mol}^{-1}$, then multiply by the binding energy of one $^{63}_{29}\\text{Cu}$ nucleus.",
      "derivations": [
        {
          "name": "Step-by-Step Multi-Part Solution (Exercise 13.3)",
          "steps": [
            "Number of $^{63}\\text{Cu}$ atoms in a $3.0\\text{ g}$ coin: N_{\\text{atoms}} = \\frac{3.0}{63} \\times 6.023 \\times 10^{23} = 2.868 \\times 10^{22}\\text{ atoms}",
            "Mass defect per $^{63}_{29}\\text{Cu}$ atom ($29 m_H + 34 m_n - 62.92960$): \\Delta m = [29(1.007825) + 34(1.008665)] - 62.92960 = 63.521535 - 62.92960 = 0.591935\\text{ u}",
            "Binding energy of a single $^{63}\\text{Cu}$ nucleus: E_b = 0.591935 \\times 931.5 = 551.39\\text{ MeV}",
            "Total nuclear separation energy for the entire $3.0\\text{ g}$ coin: E_{\\text{total}} = (2.868\\times 10^{22}) \\times 551.39\\text{ MeV} = 1.581 \\times 10^{25}\\text{ MeV} = 2.53 \\times 10^{12}\\text{ J}"
          ],
          "formula": "E_{\\text{total}} = 1.58 \\times 10^{25}\\text{ MeV} = 2.53 \\times 10^{12}\\text{ J}"
        }
      ],
      "conclusion": "This is a 5-mark numerical favourite in pre-boards! Keep 62.92960 exact so Δm ≈ 0.5919 u gives 551.4 MeV cleanly."
    }
  },
  {
    "id": "imp-phy-13-q4",
    "title": "Ratio of Nuclear Radii of Gold (¹⁹⁷Au) and Silver (¹⁰⁷Ag)",
    "shortLabel": "Exer 13.4: Nuclear Radius Ratio Au/Ag",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 13.4",
    "subtopicId": "phy-sub-13-1",
    "unit": "Atoms and Nuclei",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical",
    "frequency": "98% Frequency (Universal 1M/2M R ∝ A^(1/3) Problem)",
    "questionPrompt": "Obtain approximately the ratio of the nuclear radii of the gold isotope ¹⁹⁷₇₉Au and the silver isotope ¹⁰⁷₄₇Ag.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Exercise 13.4",
      "equations": "R₁ / R₂ = (A₁ / A₂)^(1/3)",
      "figures": "Empirical nuclear radius law",
      "summary": "Direct cube-root ratio (197/107)^(1/3) ≈ 1.226 (while density ratio would remain 1 : 1!)."
    },
    "theory": [
      "Empirical nuclear radius scales solely with mass number $A$ as $R = R_0 A^{1/3}$ ($Z$ does not enter the formula!)."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Exercise 13.4)",
        "setup": "$A_{\\text{Au}} = 197$, $A_{\\text{Ag}} = 107$.",
        "steps": [
          {
            "text": "Apply $R = R_0 A^{1/3}$ ($R_0$ cancels in ratio):",
            "equation": "\\frac{R_{\\text{Au}}}{R_{\\text{Ag}}} = \\left(\\frac{A_{\\text{Au}}}{A_{\\text{Ag}}}\\right)^{1/3} = \\left(\\frac{197}{107}\\right)^{1/3} = (1.8411)^{1/3} \\approx 1.226 \\; (\\approx 1.23)"
          }
        ],
        "finalFormula": "\\frac{R_{\\text{Au}}}{R_{\\text{Ag}}} \\approx 1.23 \\; (\\text{whereas } \\rho_{\\text{Au}} : \\rho_{\\text{Ag}} = 1 : 1)"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "R ∝ A^(1/3)",
      "Use A (not Z!)",
      "(197/107)^(1/3) ≈ 1.23"
    ],
    "termsGlossary": [
      {
        "symbol": "R = R_0 A^{1/3}",
        "term": "Radius-Mass Law",
        "definition": "Cube-root dependence yields volume proportional to mass number $A$."
      }
    ],
    "markingScheme": [
      "1 Mark: Stating $\\frac{R_1}{R_2} = (A_1/A_2)^{1/3}$.",
      "1 Mark: Computing $(197/107)^{1/3} \\approx 1.23$."
    ],
    "examinerTips": "Always use MASS NUMBER A (top numbers 197 & 107), NEVER atomic number Z (79 & 47)! Cube-root tip: 1.2³ = 1.728 and 1.25³ = 1.953, so 1.84^(1/3) sits cleanly near 1.23!",
    "number": 48,
    "modelAnswer": {
      "statement": "Empirical nuclear radius scales solely with mass number $A$ as $R = R_0 A^{1/3}$ ($Z$ does not enter the formula!).",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Exercise 13.4)",
          "steps": [
            "Apply $R = R_0 A^{1/3}$ ($R_0$ cancels in ratio): \\frac{R_{\\text{Au}}}{R_{\\text{Ag}}} = \\left(\\frac{A_{\\text{Au}}}{A_{\\text{Ag}}}\\right)^{1/3} = \\left(\\frac{197}{107}\\right)^{1/3} = (1.8411)^{1/3} \\approx 1.226 \\; (\\approx 1.23)"
          ],
          "formula": "\\frac{R_{\\text{Au}}}{R_{\\text{Ag}}} \\approx 1.23 \\; (\\text{whereas } \\rho_{\\text{Au}} : \\rho_{\\text{Ag}} = 1 : 1)"
        }
      ],
      "conclusion": "Always use MASS NUMBER A (top numbers 197 & 107), NEVER atomic number Z (79 & 47)! Cube-root tip: 1.2³ = 1.728 and 1.25³ = 1.953, so 1.84^(1/3) sits cleanly near 1.23!"
    }
  },
  {
    "id": "imp-phy-13-q5",
    "title": "Q-Value & Exothermic/Endothermic Classification of Fusion & Carbon Reactions",
    "shortLabel": "Exer 13.5: Nuclear Reaction Q-Values",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "NCERT Exercise",
    "ncertRefCode": "Exercise 13.5",
    "subtopicId": "phy-sub-13-3",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "97% Frequency (Classic Q-Value Mass Balance Question)",
    "questionPrompt": "The Q-value of a nuclear reaction A + b → C + d is defined by Q = [m_A + m_b - m_C - m_d]c² where the masses refer to the respective nuclei. Determine from the given data the Q-value of the following reactions and state whether the reactions are exothermic or endothermic:\n(i) ¹₁H + ³₁H → ²₁H + ²₁H\n(ii) ¹²₆C + ¹²₆C → ²⁰₁₀Ne + ⁴₂He\nAtomic masses: m(²₁H) = 2.014102 u, m(³₁H) = 3.016049 u, m(¹²₆C) = 12.000000 u, m(²⁰₁₀Ne) = 19.992439 u, m(¹₁H) = 1.007825 u, m(⁴₂He) = 4.002603 u.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Exercise 13.5",
      "equations": "Q = (M_reactants - M_products) × 931.5 MeV",
      "figures": "Exothermic (Q > 0) vs Endothermic (Q < 0) reactions",
      "summary": "Computes Q = -4.03 MeV (endothermic) for (i) and Q = +4.62 MeV (exothermic) for (ii)."
    },
    "theory": [
      "Since both sides conserve atomic number $Z$, atomic masses substitute directly into $Q = (M_{\\text{reactants}} - M_{\\text{products}}) \\times 931.5\\text{ MeV}$.",
      "$Q > 0 \\implies$ Exothermic (mass decreases, energy released); $Q < 0 \\implies$ Endothermic (mass increases, threshold energy needed)."
    ],
    "derivations": [
      {
        "name": "Q-Values for Reactions (i) and (ii) (Exercise 13.5)",
        "setup": "Always compute Reactants minus Products: $Q = (\\Sigma m_{\\text{reactants}} - \\Sigma m_{\\text{products}}) \\times 931.5\\text{ MeV}$.",
        "steps": [
          {
            "text": "(i) Reaction $^{1}_1\\text{H} + ^{3}_1\\text{H} \\to ^{2}_1\\text{H} + ^{2}_1\\text{H}$:",
            "equation": "\\Delta m_1 = (1.007825 + 3.016049) - 2(2.014102) = 4.023874 - 4.028204 = -0.004330\\text{ u}"
          },
          {
            "text": "Multiply by $931.5\\text{ MeV/u}$:",
            "equation": "Q_1 = -0.004330 \\times 931.5 = -4.033\\text{ MeV} < 0 \\; (\\text{ENDOTHERMIC})"
          },
          {
            "text": "(ii) Reaction $^{12}_6\\text{C} + ^{12}_6\\text{C} \\to ^{20}_{10}\\text{Ne} + ^{4}_2\\text{He}$:",
            "equation": "\\Delta m_2 = 2(12.000000) - (19.992439 + 4.002603) = 24.000000 - 23.995042 = +0.004958\\text{ u}"
          },
          {
            "text": "Multiply by $931.5\\text{ MeV/u}$:",
            "equation": "Q_2 = +0.004958 \\times 931.5 = +4.618\\text{ MeV} > 0 \\; (\\text{EXOTHERMIC})"
          }
        ],
        "finalFormula": "\\text{(i) } Q = -4.03\\text{ MeV (Endothermic)} \\quad | \\quad \\text{(ii) } Q = +4.62\\text{ MeV (Exothermic)}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Reaction Energy Q via Mass-Energy Balance",
      "examDrawingGuide": [
        "Check Reactants − Products sign: positive Δm means Exothermic!"
      ]
    },
    "keyPointsAndKeywords": [
      "Q = (M_i - M_f)c²",
      "(i) -4.03 MeV Endothermic",
      "(ii) +4.62 MeV Exothermic"
    ],
    "termsGlossary": [
      {
        "symbol": "Q",
        "term": "Nuclear Reaction Q-Value",
        "definition": "Net kinetic energy gained ($Q > 0$) or absorbed ($Q < 0$)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Reaction (i) giving $Q = -4.03\\text{ MeV}$ and identifying 'Endothermic'.",
      "1.5 Marks: Reaction (ii) giving $Q = +4.62\\text{ MeV}$ and identifying 'Exothermic'."
    ],
    "examinerTips": "Unlike Chemistry ΔH (where negative is exothermic), in Physics Q-value POSITIVE (+4.62 MeV) means EXOTHERMIC because Q measures kinetic energy RELEASED!",
    "number": 49,
    "modelAnswer": {
      "statement": "Since both sides conserve atomic number $Z$, atomic masses substitute directly into $Q = (M_{\\text{reactants}} - M_{\\text{products}}) \\times 931.5\\text{ MeV}$.\n$Q > 0 \\implies$ Exothermic (mass decreases, energy released); $Q < 0 \\implies$ Endothermic (mass increases, threshold energy needed).",
      "derivations": [
        {
          "name": "Q-Values for Reactions (i) and (ii) (Exercise 13.5)",
          "steps": [
            "(i) Reaction $^{1}_1\\text{H} + ^{3}_1\\text{H} \\to ^{2}_1\\text{H} + ^{2}_1\\text{H}$: \\Delta m_1 = (1.007825 + 3.016049) - 2(2.014102) = 4.023874 - 4.028204 = -0.004330\\text{ u}",
            "Multiply by $931.5\\text{ MeV/u}$: Q_1 = -0.004330 \\times 931.5 = -4.033\\text{ MeV} < 0 \\; (\\text{ENDOTHERMIC})",
            "(ii) Reaction $^{12}_6\\text{C} + ^{12}_6\\text{C} \\to ^{20}_{10}\\text{Ne} + ^{4}_2\\text{He}$: \\Delta m_2 = 2(12.000000) - (19.992439 + 4.002603) = 24.000000 - 23.995042 = +0.004958\\text{ u}",
            "Multiply by $931.5\\text{ MeV/u}$: Q_2 = +0.004958 \\times 931.5 = +4.618\\text{ MeV} > 0 \\; (\\text{EXOTHERMIC})"
          ],
          "formula": "\\text{(i) } Q = -4.03\\text{ MeV (Endothermic)} \\quad | \\quad \\text{(ii) } Q = +4.62\\text{ MeV (Exothermic)}"
        }
      ],
      "conclusion": "Unlike Chemistry ΔH (where negative is exothermic), in Physics Q-value POSITIVE (+4.62 MeV) means EXOTHERMIC because Q measures kinetic energy RELEASED!"
    }
  },
  {
    "id": "imp-phy-14-ex1",
    "title": "Why Carbon (Diamond) is an Insulator While Silicon & Germanium are Semiconductors",
    "shortLabel": "Ex 14.1: Band Gap E_g in C, Si & Ge",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 14.1",
    "subtopicId": "phy-sub-14-1",
    "unit": "Electronic Devices",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Numerical / Conceptual",
    "frequency": "97% Frequency (Standard 2M Group-14 Band Gap Reasoning)",
    "questionPrompt": "C, Si and Ge have same lattice structure. Why is C insulator while Si and Ge intrinsic semiconductors?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Example 14.1",
      "equations": "E_g(C) = 5.4 eV  >>  E_g(Si) = 1.1 eV  >  E_g(Ge) = 0.7 eV",
      "figures": "Group-14 orbital shell vs band gap",
      "summary": "Explains band gap decrease down Group 14 (2nd orbit C -> 3rd Si -> 4th Ge) and why room-temperature thermal energy excites Si/Ge but not C."
    },
    "theory": [
      "All three tetravalent Group-14 elements form diamond-cubic covalent lattices, but their valence electrons belong to the 2nd shell in C, 3rd shell in Si, and 4th shell in Ge.",
      "Smaller atomic size in Carbon pulls outer 2p electrons much more tightly to the nucleus, creating an enormous forbidden band gap $E_g \\approx 5.4\\text{ eV}$."
    ],
    "derivations": [
      {
        "name": "Quantitative Band-Gap Comparison (Example 14.1)",
        "setup": "Compare covalent bond strength / forbidden energy gap $E_g$ against room-temperature thermal energy ($k_B T \\approx 0.025\\text{ eV}$ at $300\\text{ K}$).",
        "steps": [
          {
            "text": "Compare forbidden band gaps down Group 14:",
            "equation": "E_g(\\text{C}) \\approx 5.4\\text{ eV} \\gg 3\\text{ eV}, \\qquad E_g(\\text{Si}) = 1.1\\text{ eV}, \\qquad E_g(\\text{Ge}) = 0.7\\text{ eV}"
          },
          {
            "text": "At room temperature ($300\\text{ K}$), significant intrinsic electron excitation from valence band to conduction band occurs ONLY for small $E_g$ ($\\sim 1\\text{ eV}$ in Si & Ge), whereas in Diamond ($5.4\\text{ eV}$) virtually ZERO electrons can jump the gap, leaving it an insulator!"
          }
        ],
        "finalFormula": "E_g(\\text{C}) = 5.4\\text{ eV (Insulator)} \\; | \\; E_g(\\text{Si}) = 1.1\\text{ eV}, \\; E_g(\\text{Ge}) = 0.7\\text{ eV (Semiconductors)}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Insulator vs Semiconductor Energy Bands",
      "examDrawingGuide": [
        "Quote numerical E_g values: C = 5.4 eV, Si = 1.1 eV, Ge = 0.7 eV."
      ]
    },
    "keyPointsAndKeywords": [
      "2nd vs 3rd vs 4th orbit",
      "C: 5.4 eV (insulator)",
      "Si: 1.1 eV, Ge: 0.7 eV"
    ],
    "termsGlossary": [
      {
        "symbol": "E_g",
        "term": "Forbidden Energy Gap",
        "definition": "Minimum energy separating top of valence band from bottom of conduction band."
      }
    ],
    "markingScheme": [
      "1 Mark: Stating 2nd/3rd/4th orbit localization and bond tightness down C → Si → Ge.",
      "1 Mark: Comparing band-gap numbers ($5.4\\text{ eV} \\gg 1.1\\text{ eV}, 0.7\\text{ eV}$) for intrinsic conduction."
    ],
    "examinerTips": "Writing the exact shell numbers (2nd orbit for C, 3rd for Si, 4th for Ge) + exact eV numbers earns instant 2/2 marks.",
    "number": 50,
    "modelAnswer": {
      "statement": "All three tetravalent Group-14 elements form diamond-cubic covalent lattices, but their valence electrons belong to the 2nd shell in C, 3rd shell in Si, and 4th shell in Ge.\nSmaller atomic size in Carbon pulls outer 2p electrons much more tightly to the nucleus, creating an enormous forbidden band gap $E_g \\approx 5.4\\text{ eV}$.",
      "derivations": [
        {
          "name": "Quantitative Band-Gap Comparison (Example 14.1)",
          "steps": [
            "Compare forbidden band gaps down Group 14: E_g(\\text{C}) \\approx 5.4\\text{ eV} \\gg 3\\text{ eV}, \\qquad E_g(\\text{Si}) = 1.1\\text{ eV}, \\qquad E_g(\\text{Ge}) = 0.7\\text{ eV}",
            "At room temperature ($300\\text{ K}$), significant intrinsic electron excitation from valence band to conduction band occurs ONLY for small $E_g$ ($\\sim 1\\text{ eV}$ in Si & Ge), whereas in Diamond ($5.4\\text{ eV}$) virtually ZERO electrons can jump the gap, leaving it an insulator!"
          ],
          "formula": "E_g(\\text{C}) = 5.4\\text{ eV (Insulator)} \\; | \\; E_g(\\text{Si}) = 1.1\\text{ eV}, \\; E_g(\\text{Ge}) = 0.7\\text{ eV (Semiconductors)}"
        }
      ],
      "conclusion": "Writing the exact shell numbers (2nd orbit for C, 3rd for Si, 4th for Ge) + exact eV numbers earns instant 2/2 marks."
    }
  },
  {
    "id": "imp-phy-14-ex2",
    "title": "Electron & Hole Concentrations in Arsenic-Doped Silicon (1 ppm Doping)",
    "shortLabel": "Ex 14.2: Mass-Action Law n_e & n_h in As-Si",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 14.2",
    "subtopicId": "phy-sub-14-2",
    "unit": "Electronic Devices",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical",
    "frequency": "99% Frequency (Guaranteed Ch 14 Mass Action Law Numerical)",
    "questionPrompt": "Suppose a pure Si crystal has 5 × 10²⁸ atoms m⁻³. It is doped by 1 ppm concentration of pentavalent As. Calculate the number of electrons and holes. Given that n_i = 1.5 × 10¹⁶ m⁻³.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Example 14.2",
      "equations": "n_e ≈ N_d;  n_e · n_h = n_i²",
      "figures": "n-type extrinsic carrier balance",
      "summary": "Calculates n_e = 5 × 10²² m⁻³ and suppresses minority hole concentration down to n_h = 4.5 × 10⁹ m⁻³ via mass action law."
    },
    "theory": [
      "$1\\text{ ppm}$ (parts per million) means $1$ impurity atom per $10^6$ host Si atoms ($\\times 10^{-6}$). Pentavalent Arsenic (Group 15) creates an $n$-type semiconductor where $n_e \\approx N_d$, and at thermal equilibrium $n_e n_h = n_i^2$."
    ],
    "derivations": [
      {
        "name": "Step-by-Step Solution (Example 14.2)",
        "setup": "$N_{\\text{Si}} = 5\\times 10^{28}\\text{ m}^{-3},\\ \\text{doping } = 10^{-6},\\ n_i = 1.5\\times 10^{16}\\text{ m}^{-3}$.",
        "steps": [
          {
            "text": "Donor concentration $N_d$ (and majority electron concentration $n_e \\approx N_d$ since $N_d \\gg n_i$):",
            "equation": "n_e \\approx N_d = \\frac{5 \\times 10^{28}}{10^6} = 5 \\times 10^{22}\\text{ m}^{-3}"
          },
          {
            "text": "Apply Mass Action Law $n_e n_h = n_i^2$ to find minority hole density $n_h$:",
            "equation": "n_h = \\frac{n_i^2}{n_e} = \\frac{(1.5 \\times 10^{16})^2}{5 \\times 10^{22}} = \\frac{2.25 \\times 10^{32}}{5 \\times 10^{22}} = 4.5 \\times 10^9\\text{ m}^{-3}"
          }
        ],
        "finalFormula": "n_e = 5 \\times 10^{22}\\text{ m}^{-3}, \\qquad n_h = 4.5 \\times 10^9\\text{ m}^{-3} \\; (n_e \\gg n_h \\implies n\\text{-type})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "n-type Donor Level E_D & Carrier Ratio",
      "examDrawingGuide": [
        "State why n_h drops by 10^7 below n_i: excess electrons recombine with holes."
      ]
    },
    "keyPointsAndKeywords": [
      "1 ppm = 10^-6 fraction",
      "n_e = 5×10²² m⁻³",
      "n_e n_h = n_i²",
      "n_h = 4.5×10⁹ m⁻³"
    ],
    "termsGlossary": [
      {
        "symbol": "n_e n_h = n_i^2",
        "term": "Mass Action Law",
        "definition": "Product of electron and hole concentrations remains constant at fixed temperature."
      }
    ],
    "markingScheme": [
      "1 Mark: Finding $N_d = n_e = 5\\times 10^{22}\\text{ m}^{-3}$ from $1\\text{ ppm}$.",
      "2 Marks: Applying $n_e n_h = n_i^2$ to compute $n_h = 4.5\\times 10^9\\text{ m}^{-3}$."
    ],
    "examinerTips": "Notice doping multiplies electrons by >3 million times while slashing holes below 10¹⁰ m⁻³ — overall neutrality still holds because fixed +N_d donor ions balance n_e!",
    "number": 51,
    "modelAnswer": {
      "statement": "$1\\text{ ppm}$ (parts per million) means $1$ impurity atom per $10^6$ host Si atoms ($\\times 10^{-6}$). Pentavalent Arsenic (Group 15) creates an $n$-type semiconductor where $n_e \\approx N_d$, and at thermal equilibrium $n_e n_h = n_i^2$.",
      "derivations": [
        {
          "name": "Step-by-Step Solution (Example 14.2)",
          "steps": [
            "Donor concentration $N_d$ (and majority electron concentration $n_e \\approx N_d$ since $N_d \\gg n_i$): n_e \\approx N_d = \\frac{5 \\times 10^{28}}{10^6} = 5 \\times 10^{22}\\text{ m}^{-3}",
            "Apply Mass Action Law $n_e n_h = n_i^2$ to find minority hole density $n_h$: n_h = \\frac{n_i^2}{n_e} = \\frac{(1.5 \\times 10^{16})^2}{5 \\times 10^{22}} = \\frac{2.25 \\times 10^{32}}{5 \\times 10^{22}} = 4.5 \\times 10^9\\text{ m}^{-3}"
          ],
          "formula": "n_e = 5 \\times 10^{22}\\text{ m}^{-3}, \\qquad n_h = 4.5 \\times 10^9\\text{ m}^{-3} \\; (n_e \\gg n_h \\implies n\\text{-type})"
        }
      ],
      "conclusion": "Notice doping multiplies electrons by >3 million times while slashing holes below 10¹⁰ m⁻³ — overall neutrality still holds because fixed +N_d donor ions balance n_e!"
    }
  },
  {
    "id": "imp-phy-14-ex3",
    "title": "Why Pressing Separate p-Type & n-Type Slabs Fails to Make a p-n Junction",
    "shortLabel": "Ex 14.3: Joining p & n Slabs Interatomic Gap",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 14.3",
    "subtopicId": "phy-sub-14-3",
    "unit": "Electronic Devices",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Conceptual / Atomic Scale",
    "frequency": "95% Frequency (High-Yield 2M CBSE Conceptual Staple)",
    "questionPrompt": "Can we take one slab of p-type semiconductor and physically join it to another n-type semiconductor to get p-n junction?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Example 14.3",
      "equations": "Surface roughness (>> 2–3 Å) > interatomic spacing (~2–3 Å)",
      "figures": "Single-crystal continuity requirement",
      "summary": "Explains why macroscopic contact cannot achieve atomic lattice continuity (~2-3 Å) needed for carrier diffusion."
    },
    "theory": [
      "A p-n junction requires a continuous single crystalline lattice across the metallurgical boundary so electrons and holes can diffuse unimpeded."
    ],
    "derivations": [
      {
        "name": "Atomic-Scale Roughness Analysis (Example 14.3)",
        "setup": "Compare optically flat surface roughness against Silicon crystal lattice constant.",
        "steps": [
          {
            "text": "Compare characteristic length scales cleanly:",
            "equation": "\\text{Polished surface roughness} \\; (\\sim 10^3\\text{ \\AA}) \\; \\gg \\; \\text{Interatomic crystal spacing} \\; (\\sim 2\\text{–}3\\text{ \\AA})"
          },
          {
            "text": "When two separate wafers are pressed together, point contacts leave microscopic air gaps across nearly the entire area, destroying crystal periodicity and blocking continuous charge diffusion. Instead, a single crystal Si/Ge wafer must be selectively diffused/implanted."
          }
        ],
        "finalFormula": "\\text{NO — Surface roughness (}\\gg 2\\text{–}3\\text{ \\AA) prevents atomic lattice continuity for carrier diffusion}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Answer: No",
      "Interatomic spacing ~2-3 Å",
      "Microscopic air gaps block diffusion",
      "Requires single crystal doping"
    ],
    "termsGlossary": [
      {
        "symbol": "a \\approx 2\\text{–}3\\text{ \\AA}",
        "term": "Interatomic Spacing",
        "definition": "Atomic bond periodicity needed for seamless quantum wavefunctions."
      }
    ],
    "markingScheme": [
      "1 Mark: Direct 'No' + mentioning interatomic crystal spacing ($\\sim 2\\text{–}3\\text{ \\AA}$) vs surface roughness.",
      "1 Mark: Stating macroscopic air gaps create discontinuity blocking continuous diffusion across crystal."
    ],
    "examinerTips": "Quoting the exact NCERT figure '~2 to 3 Å interatomic crystal spacing' makes your 2-mark answer bullet-proof!",
    "number": 52,
    "modelAnswer": {
      "statement": "A p-n junction requires a continuous single crystalline lattice across the metallurgical boundary so electrons and holes can diffuse unimpeded.",
      "derivations": [
        {
          "name": "Atomic-Scale Roughness Analysis (Example 14.3)",
          "steps": [
            "Compare characteristic length scales cleanly: \\text{Polished surface roughness} \\; (\\sim 10^3\\text{ \\AA}) \\; \\gg \\; \\text{Interatomic crystal spacing} \\; (\\sim 2\\text{–}3\\text{ \\AA})",
            "When two separate wafers are pressed together, point contacts leave microscopic air gaps across nearly the entire area, destroying crystal periodicity and blocking continuous charge diffusion. Instead, a single crystal Si/Ge wafer must be selectively diffused/implanted."
          ],
          "formula": "\\text{NO — Surface roughness (}\\gg 2\\text{–}3\\text{ \\AA) prevents atomic lattice continuity for carrier diffusion}"
        }
      ],
      "conclusion": "Quoting the exact NCERT figure '~2 to 3 Å interatomic crystal spacing' makes your 2-mark answer bullet-proof!"
    }
  },
  {
    "id": "imp-phy-14-ex4",
    "title": "Dynamic Resistance of Silicon Diode at Forward (15 mA) & Reverse (-10 V) Bias",
    "shortLabel": "Ex 14.4: Diode Forward & Reverse Resistance",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "NCERT Example",
    "ncertRefCode": "Example 14.4",
    "subtopicId": "phy-sub-14-3",
    "unit": "Electronic Devices",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Numerical / Graph Reading",
    "frequency": "96% Frequency (Direct Graph Reading V-I Characteristic Numerical)",
    "questionPrompt": "The V-I characteristic of a silicon diode is shown in Fig. 14.17. Calculate the resistance of the diode at (a) I_D = 15 mA, and (b) V_D = -10 V.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Example 14.4",
      "equations": "r_d = ΔV / ΔI (forward linear slope);  R_rev = |V| / |I| (reverse bias)",
      "figures": "Fig. 14.17 (NCERT Si diode V-I curve: 0.7V@10mA, 0.8V@20mA; -10V@-1μA)",
      "summary": "Computes low forward dynamic resistance 10 Ω around 15 mA vs huge reverse resistance 1.0 × 10⁷ Ω at -10 V."
    },
    "theory": [
      "A silicon p-n junction acts as a one-way switch: forward bias above knee voltage ($0.7\\text{ V}$) exhibits dynamic resistance $r_d = \\Delta V / \\Delta I \\sim \\text{few } \\Omega$, whereas reverse bias exhibits $R \\sim 10^7\\ \\Omega$."
    ],
    "derivations": [
      {
        "name": "Graph Reading & Calculation (Example 14.4)",
        "setup": "From NCERT Fig. 14.17: Forward straight segment between $(0.7\\text{ V}, 10\\text{ mA})$ and $(0.8\\text{ V}, 20\\text{ mA})$ brackets $I_D = 15\\text{ mA}$; Reverse saturation at $V_D = -10\\text{ V}$ reads $I_D = -1\\ \\mu\\text{A}$.",
        "steps": [
          {
            "text": "(a) Forward dynamic resistance around $I_D = 15\\text{ mA}$:",
            "equation": "r_{\\text{fb}} = \\frac{\\Delta V}{\\Delta I} = \\frac{0.8 - 0.7\\text{ V}}{(20 - 10) \\times 10^{-3}\\text{ A}} = \\frac{0.1}{10 \\times 10^{-3}} = 10\\ \\Omega"
          },
          {
            "text": "(b) Reverse-bias resistance at $V_D = -10\\text{ V}$ ($I = 1\\ \\mu\\text{A} = 10^{-6}\\text{ A}$):",
            "equation": "r_{\\text{rb}} = \\frac{10\\text{ V}}{1 \\times 10^{-6}\\text{ A}} = 1.0 \\times 10^7\\ \\Omega \\; (10\\text{ M}\\Omega)"
          }
        ],
        "finalFormula": "\\text{(a) } r_{\\text{fb}} = 10\\ \\Omega \\; (\\text{very low}), \\qquad \\text{(b) } r_{\\text{rb}} = 1.0 \\times 10^7\\ \\Omega \\; (\\text{very high})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Silicon Diode Forward (mA) & Reverse (μA) V-I Curve",
      "examDrawingGuide": [
        "Highlight steep forward slope (10 Ω) vs flat reverse current (-1 μA -> 10 MΩ)."
      ]
    },
    "keyPointsAndKeywords": [
      "rd = ΔV / ΔI = 10 Ω",
      "Forward current in mA, Reverse in μA",
      "Reverse R = 10^7 Ω"
    ],
    "termsGlossary": [
      {
        "symbol": "r_d = \\Delta V/\\Delta I",
        "term": "Dynamic Resistance",
        "definition": "Small-signal AC slope resistance ($10\\ \\Omega$) on forward V-I curve."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Forward resistance $10\\ \\Omega$ using $\\Delta V / \\Delta I$.",
      "1.5 Marks: Reverse resistance $1.0\\times 10^7\\ \\Omega$ using $10\\text{ V} / 1\\ \\mu\\text{A}$."
    ],
    "examinerTips": "Notice forward current axis is in mA (10^-3 A) while reverse current axis is in μA (10^-6 A) — watch the 10^3 difference!",
    "number": 53,
    "modelAnswer": {
      "statement": "A silicon p-n junction acts as a one-way switch: forward bias above knee voltage ($0.7\\text{ V}$) exhibits dynamic resistance $r_d = \\Delta V / \\Delta I \\sim \\text{few } \\Omega$, whereas reverse bias exhibits $R \\sim 10^7\\ \\Omega$.",
      "derivations": [
        {
          "name": "Graph Reading & Calculation (Example 14.4)",
          "steps": [
            "(a) Forward dynamic resistance around $I_D = 15\\text{ mA}$: r_{\\text{fb}} = \\frac{\\Delta V}{\\Delta I} = \\frac{0.8 - 0.7\\text{ V}}{(20 - 10) \\times 10^{-3}\\text{ A}} = \\frac{0.1}{10 \\times 10^{-3}} = 10\\ \\Omega",
            "(b) Reverse-bias resistance at $V_D = -10\\text{ V}$ ($I = 1\\ \\mu\\text{A} = 10^{-6}\\text{ A}$): r_{\\text{rb}} = \\frac{10\\text{ V}}{1 \\times 10^{-6}\\text{ A}} = 1.0 \\times 10^7\\ \\Omega \\; (10\\text{ M}\\Omega)"
          ],
          "formula": "\\text{(a) } r_{\\text{fb}} = 10\\ \\Omega \\; (\\text{very low}), \\qquad \\text{(b) } r_{\\text{rb}} = 1.0 \\times 10^7\\ \\Omega \\; (\\text{very high})"
        }
      ],
      "conclusion": "Notice forward current axis is in mA (10^-3 A) while reverse current axis is in μA (10^-6 A) — watch the 10^3 difference!"
    }
  },
  {
    "id": "imp-phy-10-th1",
    "title": "Types of Wavefront: Spherical, Cylindrical and Plane Wavefronts",
    "shortLabel": "Ch 10 Theory: Types of Wavefront",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.1–10.2",
    "subtopicId": "phy-sub-10-1",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Theory & Diagrams",
    "frequency": "95% Frequency (Guaranteed 1–3 Mark Concept & Sketch Question)",
    "questionPrompt": "Define a wavefront. Distinguish between spherical, cylindrical, and plane wavefronts with suitable examples and sketches, and explain how the shape of the wavefront changes after passing through a thin convex lens or reflecting from a concave mirror.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.1–10.2",
      "equations": "A_sph ∝ 1/r, I_sph ∝ 1/r²; A_cyl ∝ 1/√r, I_cyl ∝ 1/r",
      "figures": "Fig. 10.1–10.2: Spherical, Cylindrical & Plane Wavefronts",
      "summary": "Locus of constant phase; energy rays are always perpendicular to the wavefront."
    },
    "theory": [
      "A wavefront is the continuous locus of all particles of a medium vibrating in the same phase at a given instant.",
      "The direction of light energy propagation (a ray) is always perpendicular to the wavefront in an isotropic medium.",
      "Three principal geometries exist depending on the source shape and observation distance: (1) Spherical (point source), (2) Cylindrical (linear slit source), and (3) Plane (small portion of spherical/cylindrical wavefront at large distance $r \\to \\infty$)."
    ],
    "derivations": [
      {
        "name": "Classification, Amplitude Scaling & Optical Transformation",
        "setup": "Wave originating from a point source, linear slit, or distant star.",
        "steps": [
          {
            "text": "1. Spherical Wavefront — produced by a point source at finite distance in an isotropic medium. Surface area grows as $4\\pi r^2$:",
            "equation": "A \\propto \\frac{1}{r}, \\qquad I \\propto \\frac{1}{r^2}"
          },
          {
            "text": "2. Cylindrical Wavefront — produced by a linear (slit) source. Surface area of cylinder grows as $2\\pi r l$:",
            "equation": "A \\propto \\frac{1}{\\sqrt{r}}, \\qquad I \\propto \\frac{1}{r}"
          },
          {
            "text": "3. Plane Wavefront — small patch of a spherical or cylindrical wavefront at $r \\to \\infty$ (rays are parallel):",
            "equation": "A = \\text{constant}, \\qquad I = \\text{constant}"
          },
          {
            "text": "Optical Element Transformation: A plane wavefront incident on a thin convex lens emerges as a converging spherical wavefront centred at its principal focus $F$; conversely, a point source placed at $F$ emerges as a plane wavefront."
          }
        ],
        "finalFormula": "\\text{Ray } \\perp \\text{ Wavefront everywhere in an isotropic medium}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "huygens-wavefronts",
      "title": "Types of Wavefront: Spherical, Cylindrical & Plane",
      "examDrawingGuide": [
        "Draw concentric arcs with outward normal rays for spherical wavefront.",
        "Draw coaxial cylinders with radial outward rays for cylindrical wavefront.",
        "Draw parallel vertical lines with perpendicular horizontal arrows for plane wavefront."
      ]
    },
    "keyPointsAndKeywords": [
      "Locus of points in same phase",
      "Rays perpendicular to wavefront",
      "Spherical: I ∝ 1/r², Cylindrical: I ∝ 1/r",
      "Plane wavefront at infinity"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{v} \\perp \\text{WF}",
        "term": "Wavefront Normal",
        "definition": "The ray indicating direction of energy flow, everywhere orthogonal to the wavefront surface."
      }
    ],
    "markingScheme": [
      "1 Mark: Correct definition of wavefront as locus of points in same phase.",
      "1.5 Marks: Clear labelled diagrams of spherical, cylindrical, and plane wavefronts with sources.",
      "0.5 Mark: Stating plane wavefront emerges converging from convex lens to focus $F$."
    ],
    "examinerTips": "Never forget to draw the perpendicular ray arrows on every wavefront diagram — CBSE deducts 0.5 mark if rays are missing!",
    "number": 54,
    "modelAnswer": {
      "statement": "A wavefront is the locus of all points in a medium vibrating in the same phase at a given instant; rays are always normal to the wavefront.",
      "derivations": [
        {
          "name": "Three Wavefront Types & Intensity Scaling",
          "steps": [
            "Spherical wavefront (point source): $A \\propto 1/r, \\; I \\propto 1/r^2$",
            "Cylindrical wavefront (line slit source): $A \\propto 1/\\sqrt{r}, \\; I \\propto 1/r$",
            "Plane wavefront (very distant source, $r \\to \\infty$): $A = \\text{const}, \\; I = \\text{const}$"
          ],
          "formula": "\\text{Ray } \\perp \\text{ Wavefront}"
        }
      ],
      "conclusion": "A thin convex lens converts an incident plane wavefront into a converging spherical wavefront focussed at $F$."
    }
  },
  {
    "id": "imp-phy-10-th2",
    "title": "Huygens' Principle and Geometrical Construction of Secondary Wavefronts",
    "shortLabel": "Ch 10 Theory: Huygens' Principle",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.2",
    "subtopicId": "phy-sub-10-1",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Core Principle",
    "frequency": "94% Frequency (Standard 2-Mark Postulate & Backward-Wave Question)",
    "questionPrompt": "State Huygens' principle for the propagation of a wavefront. How does Huygens' geometrical construction locate the new wavefront at time t, and why is there no backward wave propagation?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.2",
      "equations": "r = v t, amplitude factor ∝ (1 + cos θ)",
      "figures": "Fig. 10.1: Huygens geometrical construction",
      "summary": "Secondary wavelets of radius vt form forward envelope F2."
    },
    "theory": [
      "Postulate 1: Every point on a given primary wavefront acts as a fresh source of new disturbance, called secondary wavelets, which travel out in all directions with the speed of light $v$ in the medium.",
      "Postulate 2: A surface touching these secondary wavelets tangentially in the forward direction at any instant gives the new wavefront at that instant.",
      "Backward wave absence: Huygens assumed backward amplitude is zero; Kirchhoff & Stokes proved the obliquity factor is $\\frac{1}{2}(1 + \\cos\\theta)$, which equals $0$ in the backward direction ($\\theta = 180^\\circ$)."
    ],
    "derivations": [
      {
        "name": "Huygens' Forward Envelope Construction",
        "setup": "Primary wavefront $F_1$ at $t = 0$; medium wave speed $v$.",
        "steps": [
          {
            "text": "1. After elapsed time $t$, each point on $F_1$ emits a spherical secondary wavelet of radius:",
            "equation": "R = v\\,t"
          },
          {
            "text": "2. Draw the common forward tangent surface $F_2$ touching all spheres of radius $vt$ — this is the new wavefront at time $t$."
          },
          {
            "text": "3. Obliquity factor explanation (no backward wave at $\\theta = \\pi$):",
            "equation": "\\text{Amplitude}(\\theta) \\propto \\frac{1 + \\cos\\theta}{2} \\implies \\text{at } \\theta = 180^\\circ,\\; \\frac{1 + (-1)}{2} = 0"
          }
        ],
        "finalFormula": "\\text{Wavelet radius } R = v\\,t, \\quad \\text{Forward envelope gives } F_2"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "huygens-wavefronts",
      "title": "Huygens' Construction & Obliquity Factor",
      "examDrawingGuide": [
        "Draw primary wavefront AB with 4–5 secondary source dots.",
        "Draw arcs of radius vt around each dot and draw tangent envelope A'B' cleanly."
      ]
    },
    "keyPointsAndKeywords": [
      "Secondary wavelets travel with speed v",
      "Forward tangential envelope",
      "Radius r = vt",
      "Backward wave zero via (1 + cos θ)"
    ],
    "termsGlossary": [
      {
        "symbol": "R = v\\,t",
        "term": "Secondary Wavelet Radius",
        "definition": "Distance covered by secondary spherical disturbances in time interval $t$."
      }
    ],
    "markingScheme": [
      "1 Mark: Both postulates of Huygens' principle stated accurately.",
      "1 Mark: Geometrical construction step ($r = vt$ forward envelope) and why backward wave is absent."
    ],
    "examinerTips": "Explicitly state BOTH postulates (secondary wavelets + forward tangential envelope) and mention radius r = vt.",
    "number": 55,
    "modelAnswer": {
      "statement": "Every point on a wavefront acts as a source of secondary wavelets travelling at wave speed $v$, and their forward tangential envelope at time $t$ (radius $vt$) forms the new wavefront.",
      "derivations": [
        {
          "name": "Huygens Construction & Zero Backward Wave",
          "steps": [
            "Radius of each secondary wavelet after time $t$: $r = vt$",
            "Obliquity factor at angle $\\theta$: $\\frac{1}{2}(1+\\cos\\theta) = 0$ for $\\theta = 180^\\circ$ (no backwave)"
          ],
          "formula": "r = v t, \\quad \\text{Forward Envelope} = F_2"
        }
      ],
      "conclusion": "Huygens' principle predicts wavefront propagation purely geometrically without needing ray tracing first."
    }
  },
  {
    "id": "imp-phy-10-th3",
    "title": "Laws of Reflection at a Plane Mirror on Huygens' Wave Theory",
    "shortLabel": "Ch 10 Derivation: Reflection on Wave Theory",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.3.2",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "93% Frequency (Classic Congruent-Triangle Proof)",
    "questionPrompt": "Use Huygens' principle to derive the laws of reflection of a plane wavefront from a plane reflecting surface, clearly proving angle of incidence equals angle of reflection (i = r).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.3.2",
      "equations": "∠i = ∠r",
      "figures": "Fig. 10.5: Reflection of plane wave AB",
      "summary": "Congruence of ΔABC and ΔAEC proves i = r and constancy of frequency/wavelength."
    },
    "theory": [
      "A plane wavefront $AB$ is incident obliquely at angle $i$ on a plane reflecting surface $MN$ in a medium of wave speed $v$.",
      "While edge $B$ travels distance $BC = vt$ to strike the surface at $C$, the secondary wavelet from $A$ spreads into the same medium to radius $AE = vt$.",
      "The reflected wavefront $EC$ is the common tangent drawn from $C$ to the sphere of radius $AE$."
    ],
    "derivations": [
      {
        "name": "Congruence Proof of ∠i = ∠r",
        "setup": "Plane wavefront $AB$ incident at $\\angle BAC = i$ on mirror $MN$; reflected wavefront $EC$ makes $\\angle ECA = r$.",
        "steps": [
          {
            "text": "1. Let $\\tau$ be the time taken for the wavefront to advance from $B$ to $C$ at speed $v$:",
            "equation": "BC = v\\tau, \\qquad AE = v\\tau \\implies BC = AE"
          },
          {
            "text": "2. Consider right-angled triangles $\\triangle ABC$ and $\\triangle AEC$:",
            "equation": "\\angle ABC = \\angle AEC = 90^\\circ, \\quad AC = AC\\;(\\text{common hypotenuse}), \\quad AE = BC = v\\tau"
          },
          {
            "text": "3. By RHS congruence ($\\triangle ABC \\cong \\triangle AEC$), corresponding angles are equal:",
            "equation": "\\angle BAC = \\angle ECA \\implies \\angle i = \\angle r"
          },
          {
            "text": "4. Since $AB$, $EC$, and mirror $MN$ lie perpendicular to the plane of paper, incident ray, reflected ray, and normal are coplanar."
          }
        ],
        "finalFormula": "\\angle i = \\angle r \\quad (\\text{Also } v, \\nu, \\lambda \\text{ remain unchanged})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "huygens-wavefronts",
      "title": "Reflection of Plane Wavefront AB → EC",
      "examDrawingGuide": [
        "Draw mirror MN horizontally and incident plane wavefront AB tilted at angle i.",
        "Draw wavelet arc of radius AE = BC from A and draw tangent CE; mark right angles at B and E."
      ]
    },
    "keyPointsAndKeywords": [
      "BC = AE = vτ",
      "Right angles at B and E",
      "RHS Congruence ΔABC ≅ ΔAEC",
      "∠i = ∠r"
    ],
    "termsGlossary": [
      {
        "symbol": "AE = BC = v\\tau",
        "term": "Equal Path Condition",
        "definition": "Incident and reflected rays remain in the same medium so both cover equal distance $v\\tau$."
      }
    ],
    "markingScheme": [
      "1 Mark: Neat labelled diagram showing incident wavefront $AB$, wavelet arc from $A$, reflected wavefront $EC$, and angles $i, r$.",
      "1.5 Marks: Stating $AE = BC = v\\tau$ and proving $\\triangle ABC \\cong \\triangle AEC$ by RHS congruence.",
      "0.5 Mark: Concluding $\\angle i = \\angle r$ and coplanarity."
    ],
    "examinerTips": "Mark both 90° right angles (at B and at tangent point E) clearly — examiners check them for RHS congruence!",
    "number": 56,
    "modelAnswer": {
      "statement": "When a plane wavefront $AB$ reflects off plane surface $MN$, the secondary wavelet from $A$ travels $AE = v\\tau = BC$ in the same medium, making $\\triangle ABC \\cong \\triangle AEC$ and $\\angle i = \\angle r$.",
      "derivations": [
        {
          "name": "RHS Congruence Proof",
          "steps": [
            "$BC = AE = v\\tau$ (same speed $v$ in same medium)",
            "In right $\\triangle ABC$ and $\\triangle AEC$: $\\angle B = \\angle E = 90^\\circ$, $AC$ common, $BC = AE$",
            "$\\therefore \\triangle ABC \\cong \\triangle AEC \\implies \\angle i = \\angle r$"
          ],
          "formula": "\\angle i = \\angle r"
        }
      ],
      "conclusion": "Both laws of reflection follow directly from Huygens' construction."
    }
  },
  {
    "id": "imp-phy-10-th4",
    "title": "Snell's Law of Refraction at a Denser Medium on Wave Theory",
    "shortLabel": "Ch 10 Derivation: Refraction at Denser Medium",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.3.1",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Guaranteed Board Derivation",
    "frequency": "97% Frequency (Most Frequently Asked Wave Optics Proof)",
    "questionPrompt": "Using Huygens' principle, derive Snell's law of refraction for a plane wave travelling from an optically rarer medium (speed v1) to a denser medium (speed v2 < v1). Also prove that frequency stays constant while wavelength decreases.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.3.1",
      "equations": "sin i / sin r = v1 / v2 = n2 / n1, λ2 < λ1",
      "figures": "Fig. 10.3: Refraction of plane wave at denser medium",
      "summary": "Derives Snell's law and wave-speed drop v2 < v1 in denser medium."
    },
    "theory": [
      "A plane wavefront $AB$ travels in medium 1 (speed $v_1$) and hits the boundary $PP'$ of a denser medium 2 (speed $v_2 < v_1$) at angle of incidence $i$.",
      "While point $B$ covers distance $BC = v_1\\tau$ in medium 1, the secondary wavelet from $A$ penetrates medium 2 to radius $AE = v_2\\tau < v_1\\tau$.",
      "Drawing tangent $CE$ from $C$ gives the refracted plane wavefront bent toward the normal ($r < i$)."
    ],
    "derivations": [
      {
        "name": "Derivation of Snell's Law (Rarer → Denser)",
        "setup": "Interface $PP'$; speeds $v_1 > v_2$; common hypotenuse $AC$; transit time $\\tau$.",
        "steps": [
          {
            "text": "1. Distances travelled in time $\\tau$ in media 1 and 2:",
            "equation": "BC = v_1\\tau, \\qquad AE = v_2\\tau"
          },
          {
            "text": "2. From right-angled $\\triangle ABC$ and right-angled $\\triangle AEC$:",
            "equation": "\\sin i = \\frac{BC}{AC} = \\frac{v_1\\tau}{AC}, \\qquad \\sin r = \\frac{AE}{AC} = \\frac{v_2\\tau}{AC}"
          },
          {
            "text": "3. Divide the two equations to eliminate $\\tau$ and $AC$:",
            "equation": "\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{c/n_1}{c/n_2} = \\frac{n_2}{n_1} = \\text{constant}"
          },
          {
            "text": "4. Frequency & Wavelength Transformation (if $\\tau$ is period $T = 1/\\nu$, then $BC = \\lambda_1$ and $AE = \\lambda_2$):",
            "equation": "\\nu = \\frac{v_1}{\\lambda_1} = \\frac{v_2}{\\lambda_2} = \\text{constant} \\implies \\lambda_2 = \\frac{v_2}{v_1}\\lambda_1 = \\frac{\\lambda_1}{n_{21}} < \\lambda_1"
          }
        ],
        "finalFormula": "\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} = \\frac{\\lambda_1}{\\lambda_2} \\quad (v_2 < v_1 \\implies r < i)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "huygens-wavefronts",
      "title": "Refraction at Denser Medium (v₂ < v₁)",
      "examDrawingGuide": [
        "Draw interface PP', incident wavefront AB (upper), arc AE = v₂τ in medium 2 clearly shorter than BC = v₁τ.",
        "Draw refracted tangent wavefront EC bending towards normal and mark ∠BAC = i, ∠ECA = r."
      ]
    },
    "keyPointsAndKeywords": [
      "BC = v₁τ, AE = v₂τ",
      "sin i / sin r = v₁ / v₂ = n₂ / n₁",
      "Speed & wavelength decrease in denser medium",
      "Frequency remains unchanged"
    ],
    "termsGlossary": [
      {
        "symbol": "n = c/v",
        "term": "Absolute Refractive Index",
        "definition": "Ratio of speed of light in vacuum to speed in medium; wave theory requires $v_2 < v_1$ in denser medium."
      }
    ],
    "markingScheme": [
      "1 Mark: Correct Huygens wavefront diagram with $AE < BC$ and right angles at $B$ and $E$.",
      "1.5 Marks: Computing $\\sin i = v_1\\tau/AC$, $\\sin r = v_2\\tau/AC$ and proving $\\sin i / \\sin r = v_1/v_2 = n_2/n_1$.",
      "0.5 Mark: Proving frequency stays invariant while $\\lambda_2 = \\lambda_1/n$."
    ],
    "examinerTips": "CBSE often pairs this with a 1-mark rider: 'What happens to frequency and wavelength when light enters glass?' Answer: ν unchanged, λ decreases by factor n.",
    "number": 57,
    "modelAnswer": {
      "statement": "From right triangles $\\triangle ABC$ and $\\triangle AEC$, $\\frac{\\sin i}{\\sin r} = \\frac{BC}{AE} = \\frac{v_1\\tau}{v_2\\tau} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$, proving Snell's law with $v_2 < v_1$ and $r < i$.",
      "derivations": [
        {
          "name": "Snell's Law & Wavelength Ratio",
          "steps": [
            "$\\sin i = v_1\\tau / AC$ and $\\sin r = v_2\\tau / AC$",
            "$\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$",
            "Taking $\\tau = T = 1/\\nu$: $\\frac{\\lambda_1}{\\lambda_2} = \\frac{v_1}{v_2}$, so $\\nu$ is constant and $\\lambda$ decreases."
          ],
          "formula": "\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}"
        }
      ],
      "conclusion": "Huygens' wave theory correctly requires light to slow down in a denser medium, unlike Newton's corpuscular theory."
    }
  },
  {
    "id": "imp-phy-10-th5",
    "title": "Refraction at a Rarer Medium on Wave Theory & Critical Angle Condition",
    "shortLabel": "Ch 10 Derivation: Refraction at Rarer Medium",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.3.1",
    "subtopicId": "phy-sub-10-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "89% Frequency (Rarer-Medium Variant + TIR Wavefront Limit)",
    "questionPrompt": "Use Huygens' wave construction to trace the refraction of a plane wavefront passing from a denser medium (speed v1) to a rarer medium (speed v2 > v1). Derive Snell's law for this case and obtain the condition for the critical angle ic and total internal reflection.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.3.1",
      "equations": "sin i / sin r = v1 / v2 (< 1), sin ic = v1 / v2 = n2 / n1",
      "figures": "Fig. 10.4: Refraction of plane wave at rarer medium",
      "summary": "Secondary wavelet radius AE = v2τ > BC = v1τ bends wavefront away from normal; AE ≥ AC gives TIR."
    },
    "theory": [
      "When a plane wavefront $AB$ crosses from a denser medium (speed $v_1$) into an optically rarer medium (speed $v_2 > v_1$), the secondary wavelet radius $AE = v_2\\tau$ is LARGER than $BC = v_1\\tau$.",
      "Therefore the tangent refracted wavefront $CE$ bends AWAY from the normal ($r > i$), so speed and wavelength both increase.",
      "If $i$ increases until $AE = AC$ (i.e. $v_2\\tau = AC$), $r = 90^\\circ$ (grazing emergence) defines the critical angle $i_c$; for $AE > AC$ ($i > i_c$), no tangent $CE$ can be drawn into medium 2 and total internal reflection occurs."
    ],
    "derivations": [
      {
        "name": "Wavefront Refraction (Denser → Rarer) & Critical Angle",
        "setup": "Wavefront $AB$ in denser medium ($v_1$) hitting rarer medium ($v_2 > v_1$) along interface $PP'$.",
        "steps": [
          {
            "text": "1. Path lengths travelled during transit time $\\tau$:",
            "equation": "BC = v_1\\tau, \\qquad AE = v_2\\tau \\quad (\\text{since } v_2 > v_1 \\implies AE > BC)"
          },
          {
            "text": "2. From right triangles $\\triangle ABC$ and $\\triangle AEC$:",
            "equation": "\\sin i = \\frac{BC}{AC} = \\frac{v_1\\tau}{AC}, \\qquad \\sin r = \\frac{AE}{AC} = \\frac{v_2\\tau}{AC}"
          },
          {
            "text": "3. Divide to obtain Snell's law showing $r > i$:",
            "equation": "\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} < 1 \\implies \\sin r > \\sin i \\implies r > i"
          },
          {
            "text": "4. Critical Angle Limit (when $AE = AC$, tangent line $CE$ touches boundary so $r = 90^\\circ$):",
            "equation": "\\sin i_c = \\frac{BC}{AC} = \\frac{v_1\\tau}{v_2\\tau} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} = \\frac{1}{{^2n_1}}"
          }
        ],
        "finalFormula": "\\sin i_c = \\frac{v_1}{v_2} = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}}, \\quad \\text{TIR when } i > i_c \\;(AE > AC)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "huygens-wavefronts",
      "title": "Refraction at Rarer Medium (v₂ > v₁) & Critical Angle",
      "examDrawingGuide": [
        "Draw larger secondary wavelet arc AE = v₂τ in medium 2 clearly bigger than BC = v₁τ.",
        "Draw refracted wavefront CE tilted steeply so normal angle r > i."
      ]
    },
    "keyPointsAndKeywords": [
      "AE = v₂τ > BC = v₁τ",
      "Refracted ray bends away from normal (r > i)",
      "sin ic = v₁ / v₂ = n₂ / n₁",
      "AE > AC means no tangent wavefront in rarer medium (TIR)"
    ],
    "termsGlossary": [
      {
        "symbol": "i_c",
        "term": "Critical Angle",
        "definition": "Incidence angle in denser medium where $AE = AC$ so refracted wavefront grazes the interface ($r = 90^\\circ$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Diagram clearly showing $AE > BC$ and $r > i$.",
      "1 Mark: Proving $\\sin i / \\sin r = v_1/v_2 < 1$ and $r > i$.",
      "1 Mark: Obtaining $\\sin i_c = v_1/v_2 = n_2/n_1$ from the tangent limit $AE = AC$."
    ],
    "examinerTips": "Unlike the denser-medium diagram, make sure the arc radius AE in the lower medium is noticeably LARGER than BC in the upper medium!",
    "number": 58,
    "modelAnswer": {
      "statement": "When light enters a rarer medium ($v_2 > v_1$), the secondary wavelet radius $AE = v_2\\tau$ exceeds $BC = v_1\\tau$, bending the refracted wavefront away from the normal ($r > i$) and yielding $\\sin i_c = v_1/v_2$ when $AE = AC$.",
      "derivations": [
        {
          "name": "Denser → Rarer Refraction & TIR Wavefront Condition",
          "steps": [
            "$BC = v_1\\tau$, $AE = v_2\\tau$ with $v_2 > v_1 \\implies AE > BC$",
            "$\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} < 1 \\implies r > i$",
            "At $r = 90^\\circ$, $AE = AC \\implies \\sin i_c = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$"
          ],
          "formula": "\\sin i_c = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}"
        }
      ],
      "conclusion": "For $i > i_c$, $AE > AC$ lies outside $C$, so no real tangent exists in the rarer medium and TIR occurs."
    }
  },
  {
    "id": "imp-phy-10-th6",
    "title": "Interference of Waves: Resultant Intensity I = 4I₀ cos²(φ/2) & Sustained Conditions",
    "shortLabel": "Ch 10 Derivation: Interference of Waves",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.4",
    "subtopicId": "phy-sub-10-3",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "96% Frequency (Superposition Formula + Sustained Conditions)",
    "questionPrompt": "Two coherent light waves of intensities I1 and I2 and constant phase difference φ superpose at a point. Derive an expression for the resultant intensity I, obtain the conditions for constructive and destructive interference, and list the essential conditions for sustained interference.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.4",
      "equations": "I = I1 + I2 + 2√(I1 I2) cos φ; I = 4I0 cos²(φ/2)",
      "figures": "Coherent vs incoherent superposition",
      "summary": "Derives resultant intensity via phasor addition and checks energy conservation."
    },
    "theory": [
      "Interference is the redistribution of light intensity in space due to the superposition of waves from two coherent sources having identical frequency and zero/constant phase difference.",
      "Energy is strictly conserved: missing energy at dark minima ($I_{\\min}$) appears at bright maxima ($I_{\\max}$), leaving average intensity equal to $I_1 + I_2$."
    ],
    "derivations": [
      {
        "name": "Resultant Amplitude, Intensity & Maxima/Minima Conditions",
        "setup": "Two coherent waves $y_1 = a_1\\sin\\omega t$ and $y_2 = a_2\\sin(\\omega t + \\phi)$ superposing at point $P$.",
        "steps": [
          {
            "text": "1. By principle of superposition, $y = y_1 + y_2 = A\\sin(\\omega t + \\theta)$, where phasor addition gives resultant amplitude $A$:",
            "equation": "A^2 = a_1^2 + a_2^2 + 2a_1 a_2\\cos\\phi"
          },
          {
            "text": "2. Since intensity $I \\propto a^2$ ($I_1 = k a_1^2$, $I_2 = k a_2^2$):",
            "equation": "I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi"
          },
          {
            "text": "3. For equal intensities $I_1 = I_2 = I_0$:",
            "equation": "I = 2I_0(1 + \\cos\\phi) = 4I_0\\cos^2\\!\\left(\\frac{\\phi}{2}\\right)"
          },
          {
            "text": "4. Constructive ($I_{\\max}$) & Destructive ($I_{\\min}$) conditions:",
            "equation": "\\text{Constructive: } \\phi = 2n\\pi,\\; \\Delta x = n\\lambda \\;(I_{\\max} = (\\sqrt{I_1}+\\sqrt{I_2})^2); \\quad \\text{Destructive: } \\phi = (2n+1)\\pi,\\; \\Delta x = (n+\\tfrac{1}{2})\\lambda \\;(I_{\\min} = (\\sqrt{I_1}-\\sqrt{I_2})^2)"
          }
        ],
        "finalFormula": "I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi \\xrightarrow{I_1=I_2=I_0} I = 4I_0\\cos^2\\!\\left(\\frac{\\phi}{2}\\right)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "Coherent Superposition & Intensity Pattern",
      "examDrawingGuide": [
        "Plot uniform peak intensity I = 4I₀ vs phase φ = 0, ±2π, ±4π and minima 0 at ±π, ±3π."
      ]
    },
    "keyPointsAndKeywords": [
      "I = I₁ + I₂ + 2√(I₁I₂) cos φ",
      "I = 4I₀ cos²(φ/2)",
      "Coherent sources: constant phase & same λ",
      "Average intensity = I₁ + I₂ (energy conserved)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
        "term": "Phase–Path Relation",
        "definition": "Converts optical path difference $\\Delta x$ into phase difference $\\phi$."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Deriving $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$ and simplifying to $4I_0\\cos^2(\\phi/2)$.",
      "1 Mark: Explicit phase & path difference conditions for constructive and destructive interference.",
      "0.5 Mark: Two sustained interference conditions (coherence + narrow/close slits, comparable amplitudes)."
    ],
    "examinerTips": "Always double check energy conservation: average of 4I₀ cos²(φ/2) over 0 to 2π is 2I₀ = I₀ + I₀, proving zero energy loss.",
    "number": 59,
    "modelAnswer": {
      "statement": "Superposing two coherent waves of intensities $I_1, I_2$ gives $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$, which equals $4I_0\\cos^2(\\phi/2)$ for identical sources.",
      "derivations": [
        {
          "name": "Superposition & Sustained Conditions",
          "steps": [
            "$A^2 = a_1^2 + a_2^2 + 2a_1a_2\\cos\\phi \\implies I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\phi$",
            "Max ($4I_0$) at $\\Delta x = n\\lambda$; Min ($0$) at $\\Delta x = (n + 1/2)\\lambda$",
            "Sustained pattern requires coherent sources, equal/comparable amplitudes, narrow close slits ($d \\ll D$)."
          ],
          "formula": "I = 4I_0\\cos^2\\!\\left(\\frac{\\phi}{2}\\right)"
        }
      ],
      "conclusion": "Two independent sources cannot sustain stationary interference because their phase shifts randomly every ~10⁻⁸ s."
    }
  },
  {
    "id": "imp-phy-10-th7",
    "title": "Young's Double-Slit Experiment (YDSE): Path Difference & Fringe Width Derivation",
    "shortLabel": "Ch 10 Derivation: Young's Double-Slit (YDSE)",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.5",
    "subtopicId": "phy-sub-10-4",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Derivation",
    "frequency": "98% Frequency (Top 5-Mark Question Across CBSE Sets)",
    "questionPrompt": "Describe Young's double-slit experiment and derive an expression for the path difference between light waves reaching a point P on the screen at distance y from the centre O. Hence deduce the positions of bright and dark fringes and prove that fringe width β = λD/d is constant for both bright and dark fringes.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.5",
      "equations": "Δx = yd/D, y_n = nλD/d, y'_n = (2n-1)λD/(2d), β = λD/d",
      "figures": "Fig. 10.12: Young's double-slit geometry",
      "summary": "Derives equal fringe width β = λD/d and angular fringe width θ = λ/d."
    },
    "theory": [
      "Coherent slits $S_1$ and $S_2$ separated by small distance $d$ illuminate a screen at large distance $D$ ($D \\gg d, y$).",
      "Since all bright and dark fringes have identical uniform spacing $\\beta = \\lambda D / d$, the central maximum is bright with equal intensity on either side."
    ],
    "derivations": [
      {
        "name": "Path Difference, Positions & Fringe Width β",
        "setup": "Slit separation $S_1S_2 = d$; screen distance $D$; point $P$ at distance $y$ above central line $O$.",
        "steps": [
          {
            "text": "1. Using Pythagoras' theorem for $S_2P$ and $S_1P$:",
            "equation": "S_2P^2 - S_1P^2 = \\left[D^2 + \\left(y + \\frac{d}{2}\\right)^2\\right] - \\left[D^2 + \\left(y - \\frac{d}{2}\\right)^2\\right] = 2yd"
          },
          {
            "text": "2. Factor $(S_2P - S_1P)(S_2P + S_1P) = 2yd$ and apply paraxial approximation $S_2P + S_1P \\approx 2D$ (since $d, y \\ll D$):",
            "equation": "\\Delta x = S_2P - S_1P \\approx \\frac{2yd}{2D} = \\frac{y\\,d}{D}"
          },
          {
            "text": "3. Positions of $n^{\\text{th}}$ bright ($\\Delta x = n\\lambda$) and $n^{\\text{th}}$ dark ($\\Delta x = (n - \\tfrac{1}{2})\\lambda$) fringes:",
            "equation": "y_n^{\\text{bright}} = \\frac{n\\lambda D}{d} \\;(n = 0,1,2\\dots), \\qquad y_n^{\\text{dark}} = \\left(n - \\frac{1}{2}\\right)\\frac{\\lambda D}{d} \\;(n = 1,2,3\\dots)"
          },
          {
            "text": "4. Fringe width $\\beta$ (spacing between two consecutive bright or dark fringes) and angular width $\\theta$:",
            "equation": "\\beta = y_{n+1} - y_n = \\frac{\\lambda D}{d}, \\qquad \\theta = \\frac{\\beta}{D} = \\frac{\\lambda}{d}"
          }
        ],
        "finalFormula": "\\Delta x = \\frac{y\\,d}{D}, \\qquad \\beta = \\frac{\\lambda D}{d}, \\qquad \\theta = \\frac{\\lambda}{d}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "YDSE Geometry & Equal Fringe Width β",
      "examDrawingGuide": [
        "Draw source slit S illuminating double slits S1, S2 separated by d and screen at distance D.",
        "Show rays S1P, S2P to point P at height y from central bright point O."
      ]
    },
    "keyPointsAndKeywords": [
      "S₂P² − S₁P² = 2yd",
      "Paraxial approximation S₂P + S₁P ≈ 2D",
      "β = λD/d independent of n",
      "Angular width θ = λ/d independent of D"
    ],
    "termsGlossary": [
      {
        "symbol": "\\beta = \\frac{\\lambda D}{d}",
        "term": "Linear Fringe Width",
        "definition": "Distance between centres of two successive bright or dark fringes on the screen."
      }
    ],
    "markingScheme": [
      "1 Mark: Labelled YDSE schematic showing $d$, $D$, $y$, $S_1P$, $S_2P$.",
      "2 Marks: Deriving $\\Delta x = yd/D$ carefully using $S_2P^2 - S_1P^2 = 2yd$ and $S_1P + S_2P \\approx 2D$.",
      "2 Marks: Deriving $y_n^{\\text{bright}}$, $y_n^{\\text{dark}}$ and proving $\\beta = \\lambda D/d$ is constant."
    ],
    "examinerTips": "Remember that if the whole YDSE setup is immersed in liquid of refractive index n, wavelength becomes λ/n so fringe width shrinks to β/n.",
    "number": 60,
    "modelAnswer": {
      "statement": "In YDSE, the path difference at height $y$ is $\\Delta x = yd/D$, producing equally spaced bright and dark fringes of uniform width $\\beta = \\lambda D/d$.",
      "derivations": [
        {
          "name": "YDSE Path Difference & Fringe Width",
          "steps": [
            "$S_2P^2 - S_1P^2 = 2yd \\implies \\Delta x \\approx yd/D$ since $S_2P + S_1P \\approx 2D$",
            "Bright fringes: $y_n = n\\lambda D/d$; Dark fringes: $y'_n = (n - 1/2)\\lambda D/d$",
            "Fringe width $\\beta = y_{n+1} - y_n = \\lambda D/d$ (uniform across screen)"
          ],
          "formula": "\\beta = \\frac{\\lambda D}{d}, \\quad \\theta = \\frac{\\lambda}{d}"
        }
      ],
      "conclusion": "With white light, the central fringe is white flanked by violet-inner / red-outer coloured bands."
    }
  },
  {
    "id": "imp-phy-10-th8",
    "title": "Diffraction at a Single Slit: Minima, Secondary Maxima & Central Width",
    "shortLabel": "Ch 10 Derivation: Single-Slit Diffraction",
    "chapterId": "phy-ch-10",
    "chapterTitle": "Wave Optics",
    "chapterNum": 10,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 10.6",
    "subtopicId": "phy-sub-10-5",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Derivation",
    "frequency": "97% Frequency (Paired with Intensity Curve & Comparison vs Interference)",
    "questionPrompt": "Explain the phenomenon of diffraction of light at a single narrow slit of width a. Derive the angular conditions for the first and n-th minima and secondary maxima, obtain the linear and angular width of the central maximum, and sketch the intensity distribution curve.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 10: Wave Optics",
      "section": "Section 10.6",
      "equations": "a sin θ = nλ (minima); a sin θ = (2n+1)λ/2 (maxima); W = 2λD/a",
      "figures": "Fig. 10.14–10.15: Single-slit diffraction & intensity graph",
      "summary": "Destructive pairing of slit halves gives minima a sin θ = nλ and double-wide central bright band 2λD/a."
    },
    "theory": [
      "Diffraction is the bending of light around the edges of a slit whose width $a$ is comparable to wavelength $\\lambda$, producing a broad central bright maximum flanked by alternating dark minima and rapidly decaying secondary maxima.",
      "Important distinction: whereas YDSE bright fringes all share equal intensity and equal width $\\beta$, single-slit diffraction has a central maximum TWICE as wide ($2\\lambda D/a$) as secondary fringes ($\\lambda D/a$) and intensities falling rapidly as $1 : \\frac{1}{22} : \\frac{1}{62}$."
    ],
    "derivations": [
      {
        "name": "Wavelet-Pairing Proof for Minima, Maxima & Central Width",
        "setup": "Plane monochromatic wave ($\\lambda$) incident normally on single slit $AB$ of width $a$, focussed on screen at distance $D$.",
        "steps": [
          {
            "text": "1. Path difference between extreme rays from slit edges $A$ and $B$ diffracted at angle $\\theta$:",
            "equation": "\\Delta x = BN = a\\sin\\theta"
          },
          {
            "text": "2. First Minimum ($n = 1$): Divide slit $AB$ into two equal halves ($a/2$). When $a\\sin\\theta_1 = \\lambda$, every point in top half pairs with a point $a/2$ below having path difference $\\lambda/2$ (phase $\\pi$) — total cancellation. Extending to $2n$ zones gives $n^{\\text{th}}$ minimum:",
            "equation": "a\\sin\\theta_n = n\\lambda \\implies \\theta_n \\approx \\frac{n\\lambda}{a} \\quad (n = \\pm 1, \\pm 2, \\pm 3\\dots)"
          },
          {
            "text": "3. Secondary Maxima: Divide slit into $3, 5, \\dots (2n+1)$ equal parts; pairwise cancellation leaves one part $(1/3, 1/5\\dots)$ contributing:",
            "equation": "a\\sin\\theta_n = \\left(n + \\frac{1}{2}\\right)\\lambda \\implies \\theta_n \\approx \\frac{(2n+1)\\lambda}{2a} \\quad (n = \\pm 1, \\pm 2\\dots)"
          },
          {
            "text": "4. Angular & Linear Width of Central Maximum (between first minima on either side, $-\\theta_1$ to $+\\theta_1$):",
            "equation": "2\\theta_1 = \\frac{2\\lambda}{a}, \\qquad W_{\\text{central}} = 2y_1 = \\frac{2\\lambda D}{a}"
          }
        ],
        "finalFormula": "\\text{Min: } a\\sin\\theta = n\\lambda, \\quad \\text{Sec Max: } a\\sin\\theta = (n+\\tfrac{1}{2})\\lambda, \\quad W_{\\text{central}} = \\frac{2\\lambda D}{a}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "single-slit-diffraction",
      "title": "Single-Slit Diffraction & Decaying Intensity Graph",
      "examDrawingGuide": [
        "Draw slit AB of width a, parallel rays at angle θ focussed onto P by convex lens, and path difference a sin θ.",
        "Sketch intensity curve with tall central peak between ±λ/a and tiny secondary peaks at ±3λ/(2a)."
      ]
    },
    "keyPointsAndKeywords": [
      "Path difference BN = a sin θ",
      "Minima: a sin θ = nλ (opposite of YDSE maxima!)",
      "Secondary maxima: a sin θ = (2n+1)λ/2",
      "Central width = 2λD/a = 2 × secondary width"
    ],
    "termsGlossary": [
      {
        "symbol": "2\\theta_1 = \\frac{2\\lambda}{a}",
        "term": "Angular Width of Central Max",
        "definition": "Total angular spread between the two first minima flanking the central bright band."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Ray diagram of slit $AB$ with path difference $a\\sin\\theta$ and neat intensity distribution curve.",
      "2 Marks: Wavelet-zone division proof for minima ($a\\sin\\theta = n\\lambda$) and secondary maxima.",
      "1.5 Marks: Angular width ($2\\lambda/a$) and linear width ($2\\lambda D/a$) of the central maximum."
    ],
    "examinerTips": "Do NOT confuse formulas: for YDSE (nλ) is BRIGHT; for single-slit diffraction (a sin θ = nλ) is DARK (minimum)!",
    "number": 61,
    "modelAnswer": {
      "statement": "Dividing a single slit of width $a$ into equal wavelet zones gives minima at $a\\sin\\theta = n\\lambda$, secondary maxima at $a\\sin\\theta = (n+\\tfrac{1}{2})\\lambda$, and central linear width $W_{\\text{central}} = 2\\lambda D/a$.",
      "derivations": [
        {
          "name": "Single-Slit Minima, Maxima & Central Width",
          "steps": [
            "Extreme ray path difference $\\Delta x = a\\sin\\theta$",
            "$2n$ zones pairwise cancel $\\implies a\\sin\\theta = n\\lambda$ (Minima); $(2n+1)$ zones leave 1 zone $\\implies (n+\\tfrac{1}{2})\\lambda$ (Maxima)",
            "Central width between $\\pm\\theta_1$: $2\\theta_1 = 2\\lambda/a$ and $W = 2\\lambda D/a$"
          ],
          "formula": "W_{\\text{central}} = \\frac{2\\lambda D}{a}"
        }
      ],
      "conclusion": "Narrowing the slit ($a \\downarrow$) WIDENS the central diffraction maximum ($W \\propto 1/a$)."
    }
  },
  {
    "id": "imp-phy-11-th1",
    "title": "Laws of Photoelectric Emission & Characteristic Graphs (I–V, V₀–ν, Kmax–ν)",
    "shortLabel": "Ch 11 Theory: Laws of Photoelectric Emission",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.3–11.4",
    "subtopicId": "phy-sub-11-2",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Laws & Graphs",
    "frequency": "97% Frequency (Most Tested Experimental Law Set + Wave Failure)",
    "questionPrompt": "State the four laws of photoelectric emission observed experimentally by Hallwachs and Lenard. Sketch graphs showing the variation of (i) photoelectric current with intensity, (ii) stopping potential with frequency, and explain two failures of classical wave theory.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.3–11.4",
      "equations": "I_sat ∝ Intensity, K_max = eV_0 (independent of intensity), ν >= ν_0",
      "figures": "Fig. 11.2–11.5: Photocurrent, intensity & frequency curves",
      "summary": "Summarises threshold frequency, instantaneous emission, proportionality of saturation current to intensity, and stopping potential vs frequency."
    },
    "theory": [
      "Law 1 (Threshold Frequency): For every metal there exists a minimum cut-off frequency $\\nu_0$ below which no photoelectrons are emitted regardless of intensity or illumination duration.",
      "Law 2 (Photocurrent vs Intensity): Above $\\nu_0$, saturation photoelectric current is directly proportional to the intensity of incident radiation (at fixed frequency $\\nu$).",
      "Law 3 (Maximum KE vs Frequency): $K_{\\max} = eV_0$ increases linearly with frequency $\\nu$ above $\\nu_0$ and is completely independent of incident intensity.",
      "Law 4 (Instantaneous Process): Photoelectric emission occurs instantaneously ($\\sim 10^{-9}\\text{ s}$) with negligible time lag even at feeble intensities."
    ],
    "derivations": [
      {
        "name": "Experimental Laws, Graphs & Classical Wave Failures",
        "setup": "Evacuated glass tube with photosensitive emitter plate $C$ and collector $A$ under variable anode potential.",
        "steps": [
          {
            "text": "1. Stopping potential $V_0$ vs Frequency $\\nu$ is a straight line with universal slope $h/e$ (independent of metal):",
            "equation": "\\text{Slope} = \\frac{\\Delta V_0}{\\Delta \\nu} = \\frac{h}{e} \\approx 4.14 \\times 10^{-15}\\text{ V}\\cdot\\text{s}"
          },
          {
            "text": "2. Vertical & horizontal intercepts yield work function $\\phi_0$ and threshold frequency $\\nu_0$:",
            "equation": "\\text{x-intercept} = \\nu_0, \\qquad \\text{y-intercept} = -\\frac{\\phi_0}{e}"
          },
          {
            "text": "3. Classical Wave Failures: (a) Wave theory predicts ANY frequency could eject electrons if intensity is high enough (contradicts $\\nu_0$); (b) Wave energy spreads uniformly across atoms, requiring hours/minutes to accumulate $K_{\\max}$ (contradicts $10^{-9}\\text{ s}$ emission); (c) Wave amplitude predicts $K_{\\max} \\propto \\text{Intensity}$ (contradicts constant $V_0$)."
          }
        ],
        "finalFormula": "I_{\\text{sat}} \\propto \\text{Intensity}; \\qquad V_0 \\text{ depends only on } \\nu \\;(\\text{slope } h/e)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Photoelectric Characteristic Curves (I vs V, V₀ vs ν)",
      "examDrawingGuide": [
        "Sketch V₀ vs ν showing parallel lines for Metals A and B with slope h/e and distinct intercepts ν₀A, ν₀B.",
        "Sketch I vs V for different intensities converging to the same negative -V₀."
      ]
    },
    "keyPointsAndKeywords": [
      "Threshold frequency ν₀",
      "Saturation current ∝ intensity",
      "K_max = eV₀ depends ONLY on frequency ν",
      "Instantaneous (~10^-9 s); slope of V₀-ν = h/e"
    ],
    "termsGlossary": [
      {
        "symbol": "V_0",
        "term": "Stopping Potential",
        "definition": "Minimum negative collector potential that stops the fastest photoelectrons ($K_{\\max} = eV_0$)."
      }
    ],
    "markingScheme": [
      "2 Marks: All 4 experimental laws of photoelectric emission clearly stated.",
      "1 Mark: Neat $V_0$ vs $\\nu$ or $I$ vs $V$ graph + explanation of wave theory failure."
    ],
    "examinerTips": "In intensity-variation vs frequency-variation questions: changing Intensity moves the flat saturation level vertically while -V₀ stays FIXED; changing Frequency shifts -V₀ left while saturation stays constant (at equal photon flux).",
    "number": 62,
    "modelAnswer": {
      "statement": "Photoelectric emission requires $\\nu \\ge \\nu_0$, occurs instantaneously ($\\sim 10^{-9}\\text{ s}$), has $I_{\\text{sat}} \\propto \\text{Intensity}$, and $K_{\\max} = eV_0$ increases linearly with $\\nu$ independently of intensity.",
      "derivations": [
        {
          "name": "Four Laws & V₀–ν Graph Parameters",
          "steps": [
            "No emission for $\\nu < \\nu_0$; $I_{\\text{sat}} \\propto \\text{Intensity}$",
            "$K_{\\max} = eV_0$ depends strictly on $\\nu$, independent of intensity; delay $< 10^{-9}\\text{ s}$",
            "On $V_0$ vs $\\nu$ graph: $\\text{slope} = h/e$, $x\\text{-intercept} = \\nu_0$, $y\\text{-intercept} = -\\phi_0/e$"
          ],
          "formula": "\\text{Slope}(V_0\\text{ vs }\\nu) = \\frac{h}{e}, \\quad K_{\\max} = eV_0"
        }
      ],
      "conclusion": "Classical wave optics fails on threshold frequency, intensity-independent $K_{\\max}$, and instantaneous emission."
    }
  },
  {
    "id": "imp-phy-11-th2",
    "title": "Einstein's Photoelectric Equation & Explanation of Experimental Laws",
    "shortLabel": "Ch 11 Derivation: Einstein's Photoelectric Eq",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.5",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "98% Frequency (Universal CBSE Physics Question)",
    "questionPrompt": "Derive Einstein's photoelectric equation from Planck's photon picture of radiation. Using this equation, explain (i) the existence of threshold frequency, (ii) stopping potential vs frequency linearity, and (iii) how Planck's constant h is determined from Millikan's graph.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.5",
      "equations": "K_max = hν - φ_0 = h(ν - ν_0) = eV_0",
      "figures": "Fig. 11.5: Linear V₀ vs ν plot",
      "summary": "One-photon-to-one-electron collision accounts for all 4 laws cleanly."
    },
    "theory": [
      "Einstein proposed in 1905 that radiation energy travels in discrete quanta (photons) each carrying energy $E = h\\nu$, absorbed completely in an all-or-nothing collision with a single surface electron.",
      "Minimum energy needed to free the most loosely bound electron is the work function $\\phi_0 = h\\nu_0$; the remaining photon energy becomes maximum kinetic energy $K_{\\max}$."
    ],
    "derivations": [
      {
        "name": "Einstein's Photoelectric Equation & Linear V₀ Form",
        "setup": "Single photon of energy $h\\nu$ absorbed by a surface electron bound with work function $\\phi_0$.",
        "steps": [
          {
            "text": "1. By conservation of energy for the least tightly bound electron:",
            "equation": "h\\nu = \\phi_0 + K_{\\max} \\implies K_{\\max} = h\\nu - \\phi_0"
          },
          {
            "text": "2. Expressing work function as $\\phi_0 = h\\nu_0 = hc/\\lambda_0$ and $K_{\\max} = eV_0$:",
            "equation": "eV_0 = h(\\nu - \\nu_0) = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right)"
          },
          {
            "text": "3. Dividing by $e$ gives the straight-line $V_0$–$\\nu$ equation ($y = mx + c$):",
            "equation": "V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}"
          },
          {
            "text": "4. Law explanations: (i) If $\\nu < \\nu_0$, $K_{\\max} < 0$ (impossible, zero emission); (ii) Higher intensity increases photon count per second, raising photocurrent while $h\\nu$ per photon stays unchanged; (iii) One-to-one collision takes negligible time ($\\sim 10^{-9}\\text{ s}$)."
          }
        ],
        "finalFormula": "K_{\\max} = eV_0 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Einstein V₀ vs ν Linear Graph & Slope h/e",
      "examDrawingGuide": [
        "Draw V₀ on y-axis and ν on x-axis; show straight line cutting x-axis at ν₀ and extrapolated dotted line cutting negative y-axis at -φ₀/e."
      ]
    },
    "keyPointsAndKeywords": [
      "hν = φ₀ + K_max",
      "V₀ = (h/e)ν − φ₀/e",
      "Slope = h/e determines Planck's constant h",
      "All-or-nothing single-photon absorption"
    ],
    "termsGlossary": [
      {
        "symbol": "\\phi_0 = h\\nu_0",
        "term": "Work Function",
        "definition": "Minimum energy required to liberate an electron from a metal surface without kinetic energy."
      }
    ],
    "markingScheme": [
      "1 Mark: Derivation of $K_{\\max} = h\\nu - \\phi_0$ and $V_0 = (h/e)\\nu - \\phi_0/e$.",
      "1.5 Marks: Explaining threshold frequency, $V_0$–$\\nu$ linearity, and intensity invariance.",
      "0.5 Mark: Extracting $h = e \\times \\text{slope}$ from Millikan's $V_0$ vs $\\nu$ plot."
    ],
    "examinerTips": "In numericals, convert work function in eV carefully or directly work in eV with hc = 1240 eV·nm (or 1242 eV·nm) and remember eV₀ in eV numerically equals V₀ in Volts!",
    "number": 63,
    "modelAnswer": {
      "statement": "In a single photon–electron collision, $h\\nu = \\phi_0 + K_{\\max}$, giving $eV_0 = h(\\nu - \\nu_0)$ and $V_0 = (h/e)\\nu - \\phi_0/e$.",
      "derivations": [
        {
          "name": "Einstein's Equation & Law Deductions",
          "steps": [
            "Energy conservation: $K_{\\max} = h\\nu - \\phi_0 = h(\\nu - \\nu_0)$",
            "Stopping potential: $V_0 = (h/e)\\nu - \\phi_0/e$ (slope $h/e$, cut-off $\\nu_0$)",
            "$\\nu < \\nu_0 \\implies K_{\\max} < 0$ (no emission); intensity only scales photon flux"
          ],
          "formula": "eV_0 = h\\nu - \\phi_0"
        }
      ],
      "conclusion": "Millikan verified the universal slope $h/e$ across alkali metals, confirming Planck's constant."
    }
  },
  {
    "id": "imp-phy-11-th3",
    "title": "Characteristic Properties of a Photon (Quantum Picture of Radiation)",
    "shortLabel": "Ch 11 Theory: Properties of Photon",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.6",
    "subtopicId": "phy-sub-11-3",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Core Theory",
    "frequency": "92% Frequency (Guaranteed 2-Mark Bullet Question + Number Density Trick)",
    "questionPrompt": "List any four characteristic properties of a photon in the particle picture of radiation. Explain how the number of photons emitted per second changes if radiation intensity increases at constant frequency vs if frequency increases at constant intensity.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.6",
      "equations": "E = hν = hc/λ, p = hν/c = h/λ, m_0 = 0",
      "figures": "NCERT Section 11.6 summary bullet list",
      "summary": "Covers photon energy, momentum, zero rest mass, electrical neutrality, and non-conservation of photon number."
    },
    "theory": [
      "1. Energy & Speed: In interacting with matter, light behaves as packets of energy (photons) travelling in vacuum at speed $c = 3 \\times 10^8\\text{ m/s}$, each with energy $E = h\\nu = hc/\\lambda$ and momentum $p = h\\nu/c = h/\\lambda$.",
      "2. Intensity Scaling: All photons of a single frequency $\\nu$ possess identical energy $h\\nu$ and momentum $h/\\lambda$ regardless of radiation intensity — raising intensity only increases photon number per unit area per second.",
      "3. Electrical Neutrality & Mass: Photons are electrically neutral (undeflected by $\\vec{E}$ and $\\vec{B}$ fields) and have zero rest mass ($m_0 = 0$; they do not exist at rest).",
      "4. Collisions: In photon–particle collisions, total energy and total linear momentum are conserved, but the number of photons may NOT be conserved (photons can be absorbed or newly created)."
    ],
    "derivations": [
      {
        "name": "Photon Equations & Number Flux Formula",
        "setup": "Monochromatic beam of power $P$ and frequency $\\nu$ (wavelength $\\lambda$).",
        "steps": [
          {
            "text": "1. Energy, Momentum and equivalent dynamic mass of one photon:",
            "equation": "E = h\\nu = \\frac{hc}{\\lambda}, \\qquad p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}, \\qquad m_{\\text{eff}} = \\frac{h\\nu}{c^2}, \\; m_0 = 0"
          },
          {
            "text": "2. Photon emission rate $N$ (number of photons per second from power $P$):",
            "equation": "N = \\frac{P}{h\\nu} = \\frac{P\\lambda}{hc}"
          },
          {
            "text": "3. Comparison: Increasing intensity at fixed $\\nu$ raises $P \\implies N$ increases; increasing $\\nu$ at fixed intensity ($P = \\text{const}$) increases energy per photon $h\\nu$ so $N$ DECREASES ($N \\propto 1/\\nu$)."
          }
        ],
        "finalFormula": "E = h\\nu, \\quad p = \\frac{h}{\\lambda}, \\quad m_0 = 0, \\quad N = \\frac{P}{h\\nu}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Photon Energy Quantum & Intensity Flux",
      "examDrawingGuide": [
        "No diagram required unless paired with photoelectric curves; write E = hν, p = h/λ, m₀ = 0, neutral."
      ]
    },
    "keyPointsAndKeywords": [
      "E = hν, p = h/λ",
      "Zero rest mass (m₀ = 0)",
      "Electrically neutral (undeflected by E and B)",
      "Photon number NOT conserved in collisions"
    ],
    "termsGlossary": [
      {
        "symbol": "p = \\frac{h\\nu}{c}",
        "term": "Photon Momentum",
        "definition": "Linear momentum carried by a single photon of frequency $\\nu$ and wavelength $\\lambda = c/\\nu$."
      }
    ],
    "markingScheme": [
      "1 Mark: Four accurate properties of a photon ($E=h\\nu$, $p=h/\\lambda$, $m_0=0$, electrically neutral, conservation laws).",
      "1 Mark: Explaining photon flux $N = P/(h\\nu)$ for fixed $\\nu$ vs fixed intensity."
    ],
    "examinerTips": "Favourite CBSE trick: 'A 100 W sodium lamp vs a 100 W UV lamp — which emits more photons per second?' Same power P means N ∝ λ, so longer-wavelength sodium (yellow) emits MORE photons/s!",
    "number": 64,
    "modelAnswer": {
      "statement": "A photon carries energy $E = h\\nu$ and momentum $p = h/\\lambda$, has zero rest mass ($m_0 = 0$), is electrically neutral, conserves energy and momentum in collisions, and emits at rate $N = P/(h\\nu)$.",
      "derivations": [
        {
          "name": "Key Photon Relations & Flux Dependence",
          "steps": [
            "$E = h\\nu = hc/\\lambda$, $p = h\\nu/c = h/\\lambda$, $m_0 = 0$, neutral in $\\vec{E}, \\vec{B}$ fields",
            "Energy & momentum conserved in collisions; photon number NOT conserved",
            "$N = P/(h\\nu)$: rises with intensity at fixed $\\nu$, falls as $1/\\nu$ at fixed intensity."
          ],
          "formula": "E = h\\nu, \\quad p = \\frac{h}{\\lambda}, \\quad N = \\frac{P}{h\\nu}"
        }
      ],
      "conclusion": "Increasing light intensity increases photon count per second, NOT the energy of each individual photon."
    }
  },
  {
    "id": "imp-phy-11-th4",
    "title": "de Broglie Wavelength of Matter Waves & Electron Accelerated Through V Volts",
    "shortLabel": "Ch 11 Derivation: de Broglie Wavelength",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.7",
    "subtopicId": "phy-sub-11-4",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "97% Frequency (Guaranteed Derivation + λ vs 1/√V Graphs)",
    "questionPrompt": "State de Broglie's hypothesis of matter waves and derive the expression for the de Broglie wavelength of (a) a particle of mass m moving with velocity v (or kinetic energy K), and (b) an electron accelerated from rest through a potential difference V. Also explain how λ varies for an α-particle vs proton accelerated by the same V.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.7",
      "equations": "λ = h/p = h/mv = h/√(2mK) = h/√(2mqV) ≈ 1.227/√V nm",
      "figures": "NCERT Sec 11.7 & Example 11.3",
      "summary": "Derives λ = 12.27/√V Å for electrons and compares particle wavelengths by √(m q)."
    },
    "theory": [
      "de Broglie Hypothesis (1924): Nature loves symmetry — just as radiation exhibits wave-particle duality, moving material particles also exhibit wave nature called matter waves, with wavelength $\\lambda = h/p = h/(mv)$.",
      "Matter waves are NOT electromagnetic waves; they represent probability amplitude waves independent of particle charge."
    ],
    "derivations": [
      {
        "name": "de Broglie Formula for Matter Waves & Accelerated Electron",
        "setup": "Particle of mass $m$, charge $q$, kinetic energy $K = qV$ after acceleration through potential $V$.",
        "steps": [
          {
            "text": "1. From photon momentum $p = h/\\lambda$, de Broglie proposed for a particle of momentum $p = mv$:",
            "equation": "\\lambda = \\frac{h}{p} = \\frac{h}{mv}"
          },
          {
            "text": "2. Expressing momentum in terms of kinetic energy $K = \\frac{p^2}{2m} \\implies p = \\sqrt{2mK}$ and accelerating potential $K = qV$:",
            "equation": "\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}"
          },
          {
            "text": "3. Substituting electron constants ($h = 6.63\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m_e = 9.11\\times 10^{-31}\\text{ kg}$, $e = 1.6\\times 10^{-19}\\text{ C}$):",
            "equation": "\\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}"
          },
          {
            "text": "4. Proton vs $\\alpha$-particle at same $V$: $m_\\alpha = 4m_p,\\; q_\\alpha = 2q_p \\implies \\lambda_p / \\lambda_\\alpha = \\sqrt{(m_\\alpha q_\\alpha)/(m_p q_p)} = \\sqrt{8} = 2\\sqrt{2}$."
          }
        ],
        "finalFormula": "\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mqV}}, \\qquad \\lambda_{\\text{electron}} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "de Broglie Wavelength vs 1/√V Scaling",
      "examDrawingGuide": [
        "If asked for λ vs 1/√V graph: draw a straight line from origin with slope h/√(2mq); steeper slope implies smaller mass×charge product."
      ]
    },
    "keyPointsAndKeywords": [
      "λ = h / (mv) = h / √(2mK)",
      "λ_e = 12.27 / √V Å = 1.227 / √V nm",
      "Proton vs α at same V: λ_p : λ_α = 2√2 : 1",
      "Same speed v: λ ∝ 1/m (proton : α = 4 : 1)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\lambda = \\frac{h}{\\sqrt{2mqV}}",
        "term": "de Broglie Wavelength (Potential V)",
        "definition": "Matter wavelength of any charged particle accelerated from rest through potential difference $V$."
      }
    ],
    "markingScheme": [
      "1 Mark: Stating de Broglie's hypothesis and deriving $\\lambda = h/(mv) = h/\\sqrt{2mK}$.",
      "1 Mark: Deriving $\\lambda = h/\\sqrt{2mqV}$ and evaluating $\\lambda_e = 12.27/\\sqrt{V}\\text{ \\AA}$.",
      "1 Mark: Proton vs $\\alpha$-particle ratio or $\\lambda$ vs $1/\\sqrt{V}$ graph slope deduction."
    ],
    "examinerTips": "Watch the condition carefully! Same K -> λ ∝ 1/√m; Same V -> λ ∝ 1/√(mq); Same v -> λ ∝ 1/m. Always check which variable is fixed before comparing proton and α-particle!",
    "number": 65,
    "modelAnswer": {
      "statement": "Every moving particle of momentum $p$ has an associated de Broglie wavelength $\\lambda = h/p = h/\\sqrt{2mqV}$, reducing for an electron to $\\lambda_e = 12.27/\\sqrt{V}\\text{ \\AA} = 1.227/\\sqrt{V}\\text{ nm}$.",
      "derivations": [
        {
          "name": "de Broglie Matter Wave & Electron Formula",
          "steps": [
            "$\\lambda = h/p = h/(mv)$ and with $p = \\sqrt{2mK} = \\sqrt{2mqV}$, $\\lambda = h/\\sqrt{2mqV}$",
            "For an electron ($m_e, e$): $\\lambda_e = 1.227/\\sqrt{V}\\text{ nm} = 12.27/\\sqrt{V}\\text{ \\AA}$",
            "Same potential $V$: $\\lambda_p / \\lambda_\\alpha = \\sqrt{4 \\times 2} = 2\\sqrt{2}$."
          ],
          "formula": "\\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}"
        }
      ],
      "conclusion": "Thermal neutrons of energy $K \\approx \\frac{3}{2}k_B T$ obey $\\lambda = h/\\sqrt{3mk_B T}$."
    }
  },
  {
    "id": "imp-phy-9-th1",
    "title": "Relation Between Radius of Curvature and Focal Length (f = R/2)",
    "shortLabel": "Ch 9 Derivation: Relation f = R/2",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.2.2",
    "subtopicId": "phy-sub-9-1",
    "unit": "Optics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Board Derivation",
    "frequency": "94% Frequency (Paraxial Mirror Proof)",
    "questionPrompt": "Derive the relation f = R/2 between the focal length f and radius of curvature R of a spherical mirror under the paraxial approximation, using a neat labelled ray diagram.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.2.2",
      "equations": "f = R / 2",
      "figures": "Fig. 9.3: Geometry of reflection of incident ray on spherical mirror",
      "summary": "Equates tan θ ≈ θ = MD/CD and tan 2θ ≈ 2θ = MD/FD to obtain f = R/2."
    },
    "theory": [
      "Under the paraxial approximation (rays close to and nearly parallel to the principal axis, aperture small compared to $R$), foot $D$ of the perpendicular from incidence point $M$ coincides nearly with pole $P$ ($CD \\approx R$, $FD \\approx f$)."
    ],
    "derivations": [
      {
        "name": "Derivation of f = R/2 (Paraxial Rays)",
        "setup": "Paraxial ray incident at $M$ parallel to principal axis of concave mirror (pole $P$, focus $F$, centre $C$). Normal is radial line $MC$.",
        "steps": [
          {
            "text": "1. By law of reflection ($i = r = \\theta$) and alternate interior angles, $\\angle MCP = \\theta$ and exterior angle $\\angle MFP = 2\\theta$."
          },
          {
            "text": "2. Drop perpendicular $MD$ to principal axis. For small $\\theta$, $\\tan\\theta \\approx \\theta$ and $\\tan 2\\theta \\approx 2\\theta$:",
            "equation": "\\theta = \\frac{MD}{CD}, \\qquad 2\\theta = \\frac{MD}{FD}"
          },
          {
            "text": "3. Substitute $CD = R$, $FD = f$ (since $D \\approx P$) and divide:",
            "equation": "\\frac{MD}{f} = 2\\left(\\frac{MD}{R}\\right) \\implies f = \\frac{R}{2}"
          }
        ],
        "finalFormula": "f = \\frac{R}{2} \\quad (R = 2f)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Spherical Mirror f = R/2 Geometry",
      "examDrawingGuide": [
        "Draw concave mirror MP, normal MC from centre C, incident parallel ray at M reflecting through F, and angles θ and 2θ."
      ]
    },
    "keyPointsAndKeywords": [
      "Paraxial ray approximation",
      "tan θ ≈ θ, tan 2θ ≈ 2θ",
      "Normal at M passes through C",
      "f = R/2 independent of wavelength and medium"
    ],
    "termsGlossary": [
      {
        "symbol": "f = R/2",
        "term": "Focal Length – Radius Relation",
        "definition": "Distance between pole $P$ and focus $F$ equals half the radius of curvature $R$."
      }
    ],
    "markingScheme": [
      "1 Mark: Neat ray diagram marking $C, F, P, M, D, \\theta, 2\\theta$.",
      "1 Mark: Applying small-angle tangent approximations and concluding $f = R/2$."
    ],
    "examinerTips": "Explicitly write the phrase 'for paraxial rays, θ is small so tan θ ≈ θ and D is very close to P'!",
    "number": 66,
    "modelAnswer": {
      "statement": "For paraxial rays incident on a spherical mirror, small-angle geometry gives $f = R/2$.",
      "derivations": [
        {
          "name": "Paraxial Proof of f = R/2",
          "steps": [
            "$\\tan\\theta \\approx \\theta = MD/R$, $\\tan 2\\theta \\approx 2\\theta = MD/f$",
            "$MD/f = 2(MD/R) \\implies f = R/2$"
          ],
          "formula": "f = \\frac{R}{2}"
        }
      ],
      "conclusion": "A mirror's focal length depends only on $R$ and never changes in water."
    }
  },
  {
    "id": "imp-phy-9-th2",
    "title": "Mirror Equation (1/v + 1/u = 1/f) and Linear Magnification",
    "shortLabel": "Ch 9 Derivation: Mirror Equation",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.2.3",
    "subtopicId": "phy-sub-9-1",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "95% Frequency (Guaranteed Cartesian Sign Convention Proof)",
    "questionPrompt": "Using a ray diagram for a concave mirror forming a real image, derive the mirror equation 1/v + 1/u = 1/f and the expression for linear magnification m = −v/u using the New Cartesian sign convention.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.2.3",
      "equations": "1/v + 1/u = 1/f, m = h'/h = -v/u",
      "figures": "Fig. 9.4: Ray diagram for image formation by concave mirror",
      "summary": "Pairs ΔA'B'F ~ ΔMPF and ΔA'B'P ~ ΔABP to obtain 1/v + 1/u = 1/f."
    },
    "theory": [
      "Under the New Cartesian sign convention, pole $P$ is origin: distances along incident light are positive, opposite are negative; upward heights are positive, downward negative."
    ],
    "derivations": [
      {
        "name": "Derivation of 1/v + 1/u = 1/f & m = −v/u",
        "setup": "Object $AB$ ($BP = -u$, $h > 0$) beyond $C$ forms inverted real image $A'B'$ ($B'P = -v$, $-h'$) between $C$ and $F$ ($FP = -f$).",
        "steps": [
          {
            "text": "1. From similar triangles $\\triangle A'B'F \\sim \\triangle MPF$ ($PM = AB$):",
            "equation": "\\frac{B'A'}{BA} = \\frac{B'F}{FP} = \\frac{B'P - FP}{FP}"
          },
          {
            "text": "2. From pole reflection $\\triangle A'B'P \\sim \\triangle ABP$:",
            "equation": "\\frac{B'A'}{BA} = \\frac{B'P}{BP} \\implies m = \\frac{-h'}{h} = \\frac{-v}{-u} \\implies m = -\\frac{v}{u}"
          },
          {
            "text": "3. Equating the two expressions and applying Cartesian signs ($B'P = -v, FP = -f, BP = -u$):",
            "equation": "\\frac{-v - (-f)}{-f} = \\frac{-v}{-u} \\implies \\frac{v}{f} - 1 = \\frac{v}{u} \\xrightarrow{\\div v} \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}"
          }
        ],
        "finalFormula": "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\qquad m = \\frac{h'}{h} = -\\frac{v}{u}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Concave Mirror Real Image Formation",
      "examDrawingGuide": [
        "Trace 3 rays from tip A of object beyond C: (1) parallel through F, (2) through C, (3) hitting pole P at equal angle, all meeting at A'."
      ]
    },
    "keyPointsAndKeywords": [
      "ΔA'B'F ~ ΔMPF and ΔA'B'P ~ ΔABP",
      "Cartesian sign convention (u, v, f < 0)",
      "1/v + 1/u = 1/f",
      "m = −v/u"
    ],
    "termsGlossary": [
      {
        "symbol": "m = -v/u",
        "term": "Linear Magnification",
        "definition": "Ratio of image height to object height; negative for inverted real image, positive for erect virtual image."
      }
    ],
    "markingScheme": [
      "1 Mark: Neat ray diagram with arrows showing real inverted image $A'B'$.",
      "1.5 Marks: Similarity of $\\triangle A'B'F, \\triangle MPF$ and $\\triangle A'B'P, \\triangle ABP$ with sign substitution.",
      "0.5 Mark: Dividing by $v$ to obtain $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ and stating $m = -v/u$."
    ],
    "examinerTips": "Double-check the signs when plugging B'P = −v, FP = −f, BP = −u; missing a minus sign breaks the algebra!",
    "number": 67,
    "modelAnswer": {
      "statement": "Applying similar triangles $\\triangle A'B'F \\sim \\triangle MPF$ and $\\triangle A'B'P \\sim \\triangle ABP$ with Cartesian signs gives $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ and $m = -\\frac{v}{u}$.",
      "derivations": [
        {
          "name": "Mirror Formula Steps",
          "steps": [
            "$\\frac{B'A'}{BA} = \\frac{B'P - FP}{FP} = \\frac{B'P}{BP}$",
            "With $B'P = -v, FP = -f, BP = -u$: $\\frac{v-f}{f} = \\frac{v}{u} \\implies \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$"
          ],
          "formula": "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}"
        }
      ],
      "conclusion": "The formula is universal for both concave and convex mirrors with proper Cartesian signs."
    }
  },
  {
    "id": "imp-phy-9-th3",
    "title": "Refraction at a Single Convex Spherical Surface (n₂/v − n₁/u = (n₂ − n₁)/R)",
    "shortLabel": "Ch 9 Derivation: Refraction at Single Surface",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.5.1",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Guaranteed Board Derivation",
    "frequency": "97% Frequency (Prerequisite for Lens Maker's Formula)",
    "questionPrompt": "Derive the relation n₂/v − n₁/u = (n₂ − n₁)/R for refraction at a convex spherical refracting surface separating media of refractive indices n₁ and n₂ (n₂ > n₁), stating the assumptions made.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.5.1",
      "equations": "n₂ / v − n₁ / u = (n₂ − n₁) / R",
      "figures": "Fig. 9.16: Refraction at a spherical surface",
      "summary": "Relates object distance u, image distance v, and radius R using paraxial Snell's law."
    },
    "theory": [
      "Assumptions: (1) Aperture of the spherical surface is small compared to $R$ (paraxial rays), (2) Object $O$ is a point object on the principal axis, (3) All angles ($i, r, \\alpha, \\beta, \\gamma$) are small so $\\sin\\theta \\approx \\theta \\approx \\tan\\theta$."
    ],
    "derivations": [
      {
        "name": "Paraxial Derivation of Spherical Surface Formula",
        "setup": "Point object $O$ in medium $n_1$ at distance $u$; convex interface of radius $R$ ($n_1 \\to n_2$); real image $I$ at distance $v$; perpendicular $NM = h$.",
        "steps": [
          {
            "text": "1. Small-angle paraxial tangents ($M \\to P$, with $OM = -u, MI = +v, MC = +R$):",
            "equation": "\\alpha = \\tan\\angle NOM = \\frac{h}{-u}, \\quad \\beta = \\tan\\angle NIM = \\frac{h}{+v}, \\quad \\gamma = \\tan\\angle NCM = \\frac{h}{+R}"
          },
          {
            "text": "2. By exterior angle property of $\\triangle NOC$ and $\\triangle NIC$:",
            "equation": "i = \\alpha + \\gamma, \\qquad r = \\gamma - \\beta"
          },
          {
            "text": "3. Apply small-angle Snell's law ($n_1 i = n_2 r$) and substitute $\\alpha, \\beta, \\gamma$:",
            "equation": "n_1\\left(\\frac{1}{-u} + \\frac{1}{R}\\right) = n_2\\left(\\frac{1}{R} - \\frac{1}{v}\\right) \\implies \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
          }
        ],
        "finalFormula": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Refraction at Single Spherical Interface",
      "examDrawingGuide": [
        "Draw convex boundary with C on denser side (right), normal CN through incidence point N, ray ON bending towards normal to meet axis at I."
      ]
    },
    "keyPointsAndKeywords": [
      "n₁ = object medium, n₂ = refracting medium",
      "i = α + γ, r = γ − β",
      "n₁ i = n₂ r (paraxial Snell's law)",
      "n₂/v − n₁/u = (n₂ − n₁)/R"
    ],
    "termsGlossary": [
      {
        "symbol": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}",
        "term": "Gaussian Surface Formula",
        "definition": "Relates $u, v, R$ across any single spherical refracting interface."
      }
    ],
    "markingScheme": [
      "1 Mark: Labelled ray diagram showing $O, C, I, N$, normal $CN$, and angles $i, r$.",
      "1 Mark: Stating paraxial assumptions + exterior angle relations $i = \\alpha + \\gamma, r = \\gamma - \\beta$.",
      "1 Mark: Applying $n_1 i = n_2 r$ with Cartesian signs to derive $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$."
    ],
    "examinerTips": "Remember the direction rule: n₂ is ALWAYS the medium INTO which light refracts, and n₁ is the medium FROM which light arrives!",
    "number": 68,
    "modelAnswer": {
      "statement": "For paraxial refraction from medium $n_1$ to $n_2$ across a convex spherical interface of radius $R$, $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$.",
      "derivations": [
        {
          "name": "Step-by-Step Surface Proof",
          "steps": [
            "$\\alpha = -h/u$, $\\beta = +h/v$, $\\gamma = +h/R$; $i = \\alpha + \\gamma$, $r = \\gamma - \\beta$",
            "$n_1 i = n_2 r \\implies \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$"
          ],
          "formula": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
        }
      ],
      "conclusion": "Applies directly to concave surfaces and virtual images upon substituting Cartesian signs."
    }
  },
  {
    "id": "imp-phy-9-th4",
    "title": "Lens Maker's Formula & Combination of Thin Lenses in Contact",
    "shortLabel": "Ch 9 Derivation: Lens Maker's Formula",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.5.2–9.5.4",
    "subtopicId": "phy-sub-9-3",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Derivation",
    "frequency": "99% Frequency (#1 Most Asked 5-Mark CBSE Derivation)",
    "questionPrompt": "Draw a ray diagram showing image formation by a thin biconvex lens of refractive index n₂ kept in a medium n₁. Using the spherical surface refraction formula twice, derive the Lens Maker's Formula 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂), and deduce the equivalent focal length of two thin lenses in contact.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.5.2–9.5.4",
      "equations": "1/f = (n₂/n₁ − 1)(1/R₁ − 1/R₂), 1/F = 1/f₁ + 1/f₂",
      "figures": "Fig. 9.17: Two-step refraction by a double convex lens",
      "summary": "Eliminates intermediate image v₁ across surfaces R₁ and R₂ to yield Lens Maker's Formula."
    },
    "theory": [
      "A thin lens is treated as two spherical refracting interfaces ($ABC$ of radius $R_1$ and $ADC$ of radius $R_2$) separated by negligible thickness.",
      "The real/virtual image $I_1$ formed by the first interface serves directly as a virtual object for the second interface."
    ],
    "derivations": [
      {
        "name": "Derivation of Lens Maker's Formula & Thin Lenses in Contact",
        "setup": "Object $O$ at $u$; lens material $n_2$ in medium $n_1$; surface radii $R_1, R_2$; intermediate image $I_1$ at $v_1$; final image $I$ at $v$.",
        "steps": [
          {
            "text": "1. Refraction at Surface 1 ($n_1 \\to n_2$, radius $R_1$, image $I_1$ at $v_1$):",
            "equation": "\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} \\quad \\text{--- (1)}"
          },
          {
            "text": "2. Refraction at Surface 2 ($n_2 \\to n_1$, radius $R_2$, $I_1$ as virtual object, final image $I$ at $v$):",
            "equation": "\\frac{n_1}{v} - \\frac{n_2}{v_1} = \\frac{n_1 - n_2}{R_2} = -\\frac{n_2 - n_1}{R_2} \\quad \\text{--- (2)}"
          },
          {
            "text": "3. Add (1) and (2) to eliminate $n_2/v_1$, divide by $n_1$, and set $u = \\infty \\implies v = f$:",
            "equation": "\\frac{1}{v} - \\frac{1}{u} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) \\implies \\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)"
          },
          {
            "text": "4. Two thin lenses in contact ($f_1, f_2$): $\\frac{1}{v_1} - \\frac{1}{u} = \\frac{1}{f_1}$ and $\\frac{1}{v} - \\frac{1}{v_1} = \\frac{1}{f_2}$; adding gives:",
            "equation": "\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}, \\qquad P = P_1 + P_2"
          }
        ],
        "finalFormula": "\\frac{1}{f} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\qquad \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Two-Stage Thin Lens Refraction",
      "examDrawingGuide": [
        "Draw lens ABC-ADC; show intermediate dashed ray continuing straight to virtual I₁ after refraction at ABC, then bending again at ADC to final real image I."
      ]
    },
    "keyPointsAndKeywords": [
      "Surface 1: n₂/v₁ − n₁/u = (n₂ − n₁)/R₁",
      "Surface 2: n₁/v − n₂/v₁ = −(n₂ − n₁)/R₂",
      "Add to cancel n₂/v₁",
      "Liquid immersion: if n_liquid > n_lens, convex acts diverging!"
    ],
    "termsGlossary": [
      {
        "symbol": "n_{21} = n_2 / n_1",
        "term": "Relative Refractive Index",
        "definition": "Ratio of lens material index to surrounding medium index."
      }
    ],
    "markingScheme": [
      "1 Mark: Ray diagram showing intermediate image $I_1$ (dotted) and final image $I$.",
      "2.5 Marks: Writing Surface 1 & Surface 2 equations accurately and adding to get Lens Maker's Formula.",
      "1.5 Marks: Thin lenses in contact proof $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$."
    ],
    "examinerTips": "Always show how (n₁ − n₂)/R₂ transforms to −(n₂ − n₁)/R₂ clearly so the minus sign before 1/R₂ is crystal clear to the examiner!",
    "number": 69,
    "modelAnswer": {
      "statement": "Adding the spherical refraction equations at both faces of a thin lens cancels $n_2/v_1$ and gives $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.",
      "derivations": [
        {
          "name": "Lens Maker's Formula Proof",
          "steps": [
            "$\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1}$ and $\\frac{n_1}{v} - \\frac{n_2}{v_1} = -\\frac{n_2 - n_1}{R_2}$",
            "Adding & setting $u = \\infty, v = f$: $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$"
          ],
          "formula": "\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)"
        }
      ],
      "conclusion": "For lenses in contact, equivalent power adds algebraically: $P = P_1 + P_2$."
    }
  },
  {
    "id": "imp-phy-9-th5",
    "title": "Total Internal Reflection (TIR), Critical Angle & Applications",
    "shortLabel": "Ch 9 Theory: Total Internal Reflection",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.4",
    "subtopicId": "phy-sub-9-2",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Core Concept & Applications",
    "frequency": "97% Frequency (Conditions + Optical Fibre + 45°-90°-45° Prism)",
    "questionPrompt": "Define Total Internal Reflection (TIR) and state its two essential conditions. Derive the relation between refractive index and critical angle, and explain the working of optical fibres and totally reflecting prisms.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.4",
      "equations": "sin i_c = 1 / n_12 = n_rarer / n_denser",
      "figures": "Fig. 9.13–9.15: TIR, Prisms & Optical Fibre",
      "summary": "100% reflection occurs when denser-to-rarer incidence exceeds critical angle i_c."
    },
    "theory": [
      "Two Essential Conditions for TIR: (1) Light must travel from an optically DENSER medium to an optically RARER medium ($n_1 > n_2$), and (2) Angle of incidence in denser medium must strictly exceed the critical angle ($i > i_c$).",
      "Optical Fibres: Consist of a central silica glass CORE of higher refractive index ($n_1$) surrounded by a CLADDING of slightly lower refractive index ($n_2 < n_1$). Light injected within the acceptance cone suffers repeated TIR along bends with near-zero loss."
    ],
    "derivations": [
      {
        "name": "Critical Angle Derivation & Prism Deviation",
        "setup": "Ray leaving denser medium ($n$) into air ($1$): when $i = i_c$, refracted ray grazes boundary ($r = 90^\\circ$).",
        "steps": [
          {
            "text": "1. Apply Snell's law at the grazing critical condition ($i = i_c, r = 90^\\circ$):",
            "equation": "n \\sin i_c = 1 \\cdot \\sin 90^\\circ \\implies \\sin i_c = \\frac{1}{n} = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}}"
          },
          {
            "text": "2. If $i > i_c$, $\\sin r = n\\sin i > 1$ (impossible for real $r$), so zero refraction occurs and 100% light reflects back into denser medium."
          },
          {
            "text": "3. Totally Reflecting $45^\\circ\\text{–}90^\\circ\\text{–}45^\\circ$ Crown Glass Prism ($n = 1.5 \\implies i_c \\approx 41.8^\\circ$): rays hitting hypotenuse/faces at $45^\\circ > 41.8^\\circ$ turn cleanly by $90^\\circ$ or $180^\\circ$ without metallic silvering losses."
          }
        ],
        "finalFormula": "\\sin i_c = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}} = \\frac{1}{n}, \\qquad \\text{TIR: } n_{\\text{core}} > n_{\\text{cladding}} \\;\\&\\; i > i_c"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "prism-dispersion",
      "title": "Critical Angle & Total Internal Reflection",
      "examDrawingGuide": [
        "Draw core-cladding cross-section with n_core > n_cladding and zigzag TIR bounce rays."
      ]
    },
    "keyPointsAndKeywords": [
      "Denser to Rarer medium",
      "i > i_c",
      "sin i_c = n_rarer / n_denser = 1 / n",
      "Optical fibre: n_core > n_cladding"
    ],
    "termsGlossary": [
      {
        "symbol": "i_c = \\sin^{-1}(1/n)",
        "term": "Critical Angle",
        "definition": "Incidence angle in denser medium giving $90^\\circ$ grazing refraction into rarer medium."
      }
    ],
    "markingScheme": [
      "1 Mark: Both essential conditions for TIR clearly stated.",
      "1 Mark: Derivation of $\\sin i_c = 1/n$.",
      "1 Mark: Core > Cladding refractive index in optical fibres or $90^\\circ$/$180^\\circ$ reflecting prism explanation."
    ],
    "examinerTips": "Remember crown glass has i_c ≈ 41.8° < 45°, which is why a 45° incidence ray totally internally reflects — a favourite multi-colour RGB prism trick!",
    "number": 70,
    "modelAnswer": {
      "statement": "Total Internal Reflection occurs when light in a denser medium hits a rarer medium boundary at $i > i_c$, where $\\sin i_c = n_2/n_1 = 1/n$.",
      "derivations": [
        {
          "name": "Critical Angle & Optical Fibre Working",
          "steps": [
            "$n \\sin i_c = 1 \\cdot \\sin 90^\\circ \\implies \\sin i_c = 1/n$",
            "Requires (1) Denser $\\to$ Rarer medium, (2) $i > i_c$",
            "Optical fibre core ($n_1$) > cladding ($n_2$) traps pulses by multiple TIR."
          ],
          "formula": "\\sin i_c = \\frac{1}{n}"
        }
      ],
      "conclusion": "TIR gives 100% reflectivity with zero energy absorption at the boundary."
    }
  },
  {
    "id": "imp-phy-9-th6",
    "title": "Refraction Through a Prism: Deviation δ = i + e − A & Minimum Deviation Formula",
    "shortLabel": "Ch 9 Derivation: Refraction Through a Prism",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.6",
    "subtopicId": "phy-sub-9-4",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Derivation",
    "frequency": "97% Frequency (Prism Formula + i–δ U-Curve)",
    "questionPrompt": "Trace the path of a ray of light passing through a triangular glass prism of refracting angle A. Plot the variation of angle of deviation δ with angle of incidence i, and derive the prism formula n = sin((A + δ_m)/2) / sin(A/2).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.6",
      "equations": "A = r₁ + r₂, δ = i + e − A, n = sin((A+δ_m)/2)/sin(A/2)",
      "figures": "Fig. 9.21–9.22: Ray path through prism & δ vs i graph",
      "summary": "Symmetry at minimum deviation i = e and r₁ = r₂ = A/2 gives exact refractive index formula."
    },
    "theory": [
      "As angle of incidence $i$ increases, deviation $\\delta$ decreases smoothly to a single minimum $\\delta_m$ (where $i = e$, $r_1 = r_2 = A/2$, and refracted ray runs parallel to base), then increases again — forming an asymmetric U-shaped curve."
    ],
    "derivations": [
      {
        "name": "Prism Deviation & Refractive Index Formula",
        "setup": "Ray incident at angle $i$ on face $AB$, refracted at $r_1, r_2$ through $QR$, emerging at $e$ from face $AC$ of prism angle $A$.",
        "steps": [
          {
            "text": "1. From cyclic quadrilateral $AQNR$ ($\\angle Q = \\angle R = 90^\\circ$) and internal triangle $\\triangle QNR$:",
            "equation": "A + \\angle QNR = 180^\\circ = r_1 + r_2 + \\angle QNR \\implies r_1 + r_2 = A"
          },
          {
            "text": "2. Total deviation $\\delta$ is exterior angle of $\\triangle MQR$:",
            "equation": "\\delta = (i - r_1) + (e - r_2) = (i + e) - (r_1 + r_2) \\implies \\delta = i + e - A"
          },
          {
            "text": "3. At Minimum Deviation ($\\delta = \\delta_m$), the ray passes symmetrically ($i = e$, $r_1 = r_2 = r$):",
            "equation": "2r = A \\implies r = \\frac{A}{2}; \\qquad \\delta_m = 2i - A \\implies i = \\frac{A + \\delta_m}{2}"
          },
          {
            "text": "4. Applying Snell's law at face $AB$ ($n = \\sin i / \\sin r$):",
            "equation": "n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)} \\qquad (\\text{Thin prism small } A:\\; \\delta_m \\approx (n - 1)A)"
          }
        ],
        "finalFormula": "n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}, \\qquad \\delta = i + e - A"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "prism-dispersion",
      "title": "Prism Deviation & Minimum Deviation Curve",
      "examDrawingGuide": [
        "Draw triangle ABC with incident ray PQ, internal QR, emergent RS, normals meeting at N, and separate U-shaped δ vs i curve marking δ_m at i = e."
      ]
    },
    "keyPointsAndKeywords": [
      "r₁ + r₂ = A",
      "δ = i + e − A",
      "At δ_m: i = e, r₁ = r₂ = A/2, ray parallel to base",
      "Thin prism: δ = (n − 1)A"
    ],
    "termsGlossary": [
      {
        "symbol": "\\delta_m",
        "term": "Angle of Minimum Deviation",
        "definition": "Lowest possible deviation suffered by light traversing a prism symmetrically ($i = e$)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Neat prism ray diagram + smooth asymmetric U-shaped $\\delta$ vs $i$ plot.",
      "1.5 Marks: Proving $r_1 + r_2 = A$ and $\\delta = i + e - A$.",
      "2 Marks: Stating symmetry at $\\delta_m$ and deriving $n = \\frac{\\sin((A+\\delta_m)/2)}{\\sin(A/2)}$."
    ],
    "examinerTips": "Do NOT draw a sharp V-tip at δ_m on the graph — always sketch a smooth asymmetric U-curve with a flatter right branch!",
    "number": 71,
    "modelAnswer": {
      "statement": "A prism satisfies $r_1 + r_2 = A$ and $\\delta = i + e - A$; at minimum deviation ($i = e, r = A/2$), Snell's law gives $n = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)}$.",
      "derivations": [
        {
          "name": "Prism Equations & Minimum Deviation",
          "steps": [
            "$r_1 + r_2 = A$ and $\\delta = i + e - A$",
            "At $\\delta = \\delta_m$: $r = A/2$, $i = (A + \\delta_m)/2$",
            "$n = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)}$"
          ],
          "formula": "n = \\frac{\\sin((A + \\delta_m)/2)}{\\sin(A/2)}"
        }
      ],
      "conclusion": "For small apex angles ($A \\le 10^\\circ$), $\\delta = (n - 1)A$ is independent of incidence angle."
    }
  },
  {
    "id": "imp-phy-9-th7",
    "title": "Simple & Compound Microscope: Ray Diagrams & Magnifying Power",
    "shortLabel": "Ch 9 Derivation: Simple & Compound Microscope",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.7.1–9.7.2",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Optical Instrument",
    "frequency": "98% Frequency (Ray Diagram + Angular Magnification Proof)",
    "questionPrompt": "Draw labelled ray diagrams of (a) a simple microscope and (b) a compound microscope forming the final image at the least distance of distinct vision D. Derive the expression for the magnifying power in both cases (and for normal adjustment).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.7.1–9.7.2",
      "equations": "m_simple = 1 + D/f; m_compound = (v_o/u_o)(1 + D/f_e) ≈ (L/f_o)(D/f_e)",
      "figures": "Fig. 9.24–9.26: Simple & Compound Microscope Ray Diagrams",
      "summary": "Derives m = 1 + D/f (D/f at ∞) and m = m_o × m_e = (v_o/|u_o|)(1 + D/f_e)."
    },
    "theory": [
      "Simple Microscope: A short-focal-length convex lens with object held inside focus ($u < f$), producing a virtual, erect, magnified image at $D = 25\\text{ cm}$ ($m = 1 + D/f$) or at $\\infty$ ($m = D/f$).",
      "Compound Microscope: Short-$f_o$, small-aperture objective forms a real inverted magnified image $A'B'$ inside or at $F_e$ of the larger-aperture eyepiece ($f_e$), which further magnifies it virtually ($m = m_o \\times m_e$)."
    ],
    "derivations": [
      {
        "name": "Magnifying Power of Simple & Compound Microscope",
        "setup": "Visual angle of object at near point $D$: $\\alpha \\approx h/D$; visual angle of final image: $\\beta$.",
        "steps": [
          {
            "text": "1. Simple Microscope at near point ($v = -D$, $u = -u_o$):",
            "equation": "m_{\\text{simple}} = \\frac{\\beta}{\\alpha} = \\frac{D}{u_o} = D\\left(\\frac{1}{f} + \\frac{1}{D}\\right) = 1 + \\frac{D}{f} \\qquad (\\text{At } \\infty:\\; m = \\frac{D}{f})"
          },
          {
            "text": "2. Compound Microscope ($m = m_o \\times m_e$, where $m_o = h'/h = v_o/|u_o| \\approx L/f_o$):",
            "equation": "m = m_o \\cdot m_e = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right) \\quad (\\text{image at } D)"
          },
          {
            "text": "3. Compound Microscope in Normal Adjustment (image $A'B'$ formed at $F_e \\implies$ final image at $\\infty$):",
            "equation": "m_\\infty = \\frac{v_o}{|u_o|}\\left(\\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(\\frac{D}{f_e}\\right)"
          }
        ],
        "finalFormula": "m_{\\text{simple}} = 1 + \\frac{D}{f}, \\qquad m_{\\text{comp}}(D) = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Compound Microscope Ray Diagram",
      "examDrawingGuide": [
        "Draw objective (short f_o) + real inverted intermediate image A'B' just inside F_e of eyepiece (larger aperture) + virtual magnified final image A''B'' at D with ray arrows."
      ]
    },
    "keyPointsAndKeywords": [
      "Simple microscope: m = 1 + D/f (at D), D/f (at ∞)",
      "Compound microscope: both f_o and f_e should be small (f_o < f_e)",
      "m = (v_o/|u_o|)(1 + D/f_e)",
      "Always include directional arrows on rays!"
    ],
    "termsGlossary": [
      {
        "symbol": "L = f_o + u_e",
        "term": "Tube Length",
        "definition": "Distance between second focus of objective and first focus of eyepiece (approx separation $L$)."
      }
    ],
    "markingScheme": [
      "2 Marks: Clean labelled ray diagrams with directional arrowheads.",
      "1.5 Marks: Deriving simple microscope $m = 1 + D/f$ and $m = D/f$.",
      "1.5 Marks: Deriving compound microscope $m = m_o m_e = \\frac{v_o}{|u_o|}(1 + D/f_e)$ and normal adjustment formula."
    ],
    "examinerTips": "In board lens-selection tables for a microscope, pick BOTH objective and eyepiece with SMALL focal lengths (choosing the smaller f as objective!).",
    "number": 72,
    "modelAnswer": {
      "statement": "A simple microscope gives $m = 1 + D/f$ at $D$ ($D/f$ at $\\infty$); a compound microscope multiplies objective magnification by eyepiece magnification giving $m = \\frac{v_o}{|u_o|}(1 + D/f_e)$.",
      "derivations": [
        {
          "name": "Microscope Magnifying Power",
          "steps": [
            "Simple: $\\frac{1}{-D} - \\frac{1}{-u} = \\frac{1}{f} \\implies m = \\frac{D}{u} = 1 + \\frac{D}{f}$",
            "Compound: $m = m_o m_e = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)$ at $D$, and $\\frac{L}{f_o}\\frac{D}{f_e}$ at $\\infty$"
          ],
          "formula": "m_{\\text{simple}} = 1 + \\frac{D}{f}, \\quad m_{\\text{comp}} = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)"
        }
      ],
      "conclusion": "Decreasing both $f_o$ and $f_e$ increases magnifying power of a compound microscope."
    }
  },
  {
    "id": "imp-phy-9-th8",
    "title": "Astronomical Refracting Telescope: Ray Diagram, Normal & Near-Point Magnification",
    "shortLabel": "Ch 9 Derivation: Astronomical Telescope",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.7.3",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Optical Instrument",
    "frequency": "97% Frequency (Normal Adjustment + Near-Point Formula)",
    "questionPrompt": "Draw a labelled ray diagram of a refracting astronomical telescope in normal adjustment (image at infinity). Derive the expression for its magnifying power in (i) normal adjustment and (ii) when the final image is formed at the least distance of distinct vision D. Why should the objective have large focal length and large aperture?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.7.3",
      "equations": "m_∞ = f_o / f_e, L = f_o + f_e; m_D = (f_o / f_e)(1 + f_e / D)",
      "figures": "Fig. 9.27: Refracting Telescope",
      "summary": "Derives m = β/α = f_o/u_e and explains objective f_o, aperture roles."
    },
    "theory": [
      "An astronomical telescope uses a LARGE-focal-length, LARGE-aperture objective ($f_o$) to collect abundant light from distant stars and achieve high magnifying power ($m = f_o/f_e$) and resolving power ($\\propto D$).",
      "The eyepiece has small focal length $f_e$ and small aperture."
    ],
    "derivations": [
      {
        "name": "Magnifying Power of Astronomical Telescope",
        "setup": "Parallel rays at angle $\\alpha$ from distant star focus at $F_o$ forming real inverted image $A'B'$ of height $h'$ ($\\tan\\alpha = h'/f_o$).",
        "steps": [
          {
            "text": "1. Eyepiece forms virtual image at $\\beta \\approx h'/|u_e|$, so angular magnification is:",
            "equation": "m = \\frac{\\tan\\beta}{\\tan\\alpha} = \\frac{h'/|u_e|}{h'/f_o} = \\frac{f_o}{|u_e|}"
          },
          {
            "text": "2. Normal Adjustment (final image at $\\infty$, $|u_e| = f_e$, so $F_o$ coincides with $F_e$):",
            "equation": "m_\\infty = \\frac{f_o}{f_e}, \\qquad L = f_o + f_e"
          },
          {
            "text": "3. Image at Near Point $D$ ($v_e = -D, u_e = -|u_e|$): lens formula gives $\\frac{1}{|u_e|} = \\frac{1}{f_e} + \\frac{1}{D} = \\frac{1}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$:",
            "equation": "m_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right), \\qquad L_D = f_o + |u_e|"
          }
        ],
        "finalFormula": "m_\\infty = \\frac{f_o}{f_e} \\; (L = f_o + f_e), \\qquad m_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Astronomical Refracting Telescope (Normal Adjustment)",
      "examDrawingGuide": [
        "Draw large objective lens receiving parallel tilted rays from infinity, intermediate image A'B' cleanly at common F_o/F_e, and parallel exiting beam from small eyepiece."
      ]
    },
    "keyPointsAndKeywords": [
      "Large f_o → high magnification (f_o/f_e)",
      "Large aperture D → bright image & high resolving power",
      "Normal adjustment: m = f_o/f_e, L = f_o + f_e",
      "Near point D: m = (f_o/f_e)(1 + f_e/D)"
    ],
    "termsGlossary": [
      {
        "symbol": "L = f_o + f_e",
        "term": "Normal Adjustment Length",
        "definition": "Distance between objective and eyepiece when relaxed eye views image at infinity."
      }
    ],
    "markingScheme": [
      "2 Marks: Ray diagram showing intermediate image at $F_o = F_e$ and parallel emergent rays with arrows.",
      "2 Marks: Deriving $m = f_o/f_e$ (normal) and $m = \\frac{f_o}{f_e}(1 + f_e/D)$ (at $D$).",
      "1 Mark: Explaining roles of large $f_o$ (magnification) and large aperture (brightness + resolving power)."
    ],
    "examinerTips": "Watch the ratio carefully: for a compound microscope at D it is (1 + D/f_e), whereas for a telescope at D it is (1 + f_e/D) — inverse inside the bracket!",
    "number": 73,
    "modelAnswer": {
      "statement": "Angular magnification of an astronomical telescope is $m = f_o/|u_e|$, giving $m = f_o/f_e$ in normal adjustment ($L = f_o + f_e$) and $(f_o/f_e)(1 + f_e/D)$ at near point $D$.",
      "derivations": [
        {
          "name": "Astronomical Telescope Formulas",
          "steps": [
            "$\\alpha = h'/f_o, \\; \\beta = h'/|u_e| \\implies m = f_o/|u_e|$",
            "At $\\infty$: $|u_e| = f_e \\implies m = f_o/f_e, \\; L = f_o + f_e$",
            "At $D$: $\\frac{1}{|u_e|} = \\frac{1}{f_e}(1 + f_e/D) \\implies m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$"
          ],
          "formula": "m_\\infty = \\frac{f_o}{f_e}, \\qquad m_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)"
        }
      ],
      "conclusion": "Large objective aperture gathers maximum light from faint stars and minimizes diffraction blur."
    }
  },
  {
    "id": "imp-phy-9-th9",
    "title": "Cassegrain Reflecting Telescope: Schematic Diagram & Advantages",
    "shortLabel": "Ch 9 Theory: Cassegrain Telescope",
    "chapterId": "phy-ch-9",
    "chapterTitle": "Ray Optics and Optical Instruments",
    "chapterNum": 9,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 9.7.3",
    "subtopicId": "phy-sub-9-5",
    "unit": "Optics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Instrument & Advantages",
    "frequency": "95% Frequency (Guaranteed Diagram + 3 Advantages)",
    "questionPrompt": "Draw a schematic ray diagram of a Cassegrain reflecting telescope showing how parallel light rays from a distant object are brought to focus at the eyepiece. State three major advantages of a reflecting telescope over a refracting telescope.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 9: Ray Optics and Optical Instruments",
      "section": "Section 9.7.3",
      "equations": "m = f_o / f_e, f_o = R / 2",
      "figures": "Fig. 9.28: Schematic of a Cassegrain reflecting telescope",
      "summary": "Parabolic primary mirror + convex secondary mirror eliminates chromatic and spherical aberrations."
    },
    "theory": [
      "Construction: Uses a large concave parabolic primary objective mirror with a central hole, facing a smaller convex secondary mirror positioned inside its focal point, directing light through the central hole onto the eyepiece.",
      "Magnifying power in normal adjustment remains $m = f_o / f_e = (R/2)/f_e$."
    ],
    "derivations": [
      {
        "name": "Working & Four Key Advantages Over Refracting Telescopes",
        "setup": "Parallel beam from infinity enters open telescope tube and strikes large parabolic objective mirror ($f_o = R/2$).",
        "steps": [
          {
            "text": "1. Path of Rays: Reflected converging rays from the primary parabolic mirror intercept the convex secondary mirror before reaching focus and reflect backward through the central hole to focus at the eyepiece ($m = f_o/f_e$)."
          },
          {
            "text": "2. Advantage 1 (No Chromatic Aberration): Mirrors obey laws of reflection independently of wavelength, eliminating colour fringing completely."
          },
          {
            "text": "3. Advantage 2 (No Spherical Aberration): Using a parabolic primary mirror focuses all parallel rays cleanly to a single point."
          },
          {
            "text": "4. Advantages 3 & 4 (Mechanical & Aperture): Mirrors are lighter, need only one polished front surface, and can be supported mechanically across their entire back — allowing giant apertures for high brightness & resolving power."
          }
        ],
        "finalFormula": "m = \\frac{f_o}{f_e} = \\frac{R}{2f_e} \\quad (\\text{Zero Chromatic \\& Spherical Aberration})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Cassegrain Reflecting Telescope",
      "examDrawingGuide": [
        "Draw concave primary mirror with a central gap, parallel rays bouncing towards convex secondary mirror, then converging through the central hole to eyepiece."
      ]
    },
    "keyPointsAndKeywords": [
      "Parabolic concave objective mirror + convex secondary mirror",
      "Zero chromatic aberration (reflection independent of λ)",
      "Zero spherical aberration (parabolic shape)",
      "Full back-surface mechanical support + giant aperture"
    ],
    "termsGlossary": [
      {
        "symbol": "f_o = R/2",
        "term": "Primary Parabolic Mirror",
        "definition": "Objective reflector in Cassegrain telescope free of dispersion."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Neat schematic ray diagram with arrows showing primary parabolic mirror, convex secondary mirror, central hole, and eyepiece.",
      "1.5 Marks: Any three distinct advantages over refracting telescopes (no chromatic, no spherical aberration, lighter/easier support, brighter large aperture)."
    ],
    "examinerTips": "Do NOT skip stating 'no chromatic aberration' and 'parabolic mirror removes spherical aberration' — those two always carry full marks!",
    "number": 74,
    "modelAnswer": {
      "statement": "A Cassegrain telescope uses a parabolic primary mirror with a central hole and a convex secondary mirror, eliminating chromatic/spherical aberrations while giving $m = f_o/f_e$.",
      "derivations": [
        {
          "name": "Optical Path & Advantages",
          "steps": [
            "Parabolic concave primary ($f_o = R/2$) $\\to$ convex secondary $\\to$ central hole $\\to$ eyepiece ($m = f_o/f_e$)",
            "Advantages: (1) Zero chromatic aberration, (2) Parabolic shape removes spherical aberration, (3) Giant apertures easily supported from the back."
          ],
          "formula": "m = \\frac{f_o}{f_e}"
        }
      ],
      "conclusion": "Modern observatory telescopes (like Hubble/VLT) use reflecting Cassegrain designs rather than giant glass lenses."
    }
  },
  {
    "id": "imp-phy-11-th5",
    "title": "Electron Emission (Types), Work Function (φ₀) & Photoelectric Effect",
    "shortLabel": "Ch 11 Theory: Electron Emission & Work Function",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.2",
    "subtopicId": "phy-sub-11-1",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Core Definitions",
    "frequency": "91% Frequency (Guaranteed 1–2 Mark Definition & Table Question)",
    "questionPrompt": "Define work function (φ₀) of a metal and list the three physical methods of electron emission. On what factors does work function depend, and why do alkali metals emit photoelectrons with visible light while zinc requires UV light?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.2",
      "equations": "φ₀ = h ν₀ = hc / λ₀",
      "figures": "NCERT Sec 11.2 & Table 11.1 (Work functions)",
      "summary": "Covers thermionic, field, and photoelectric emission and work function φ₀ in eV."
    },
    "theory": [
      "Work Function ($\\phi_0$): The minimum energy (customarily measured in $\\text{eV}$, where $1\\text{ eV} = 1.6\\times 10^{-19}\\text{ J}$) required by an electron to just escape from the metal surface without any kinetic energy. It depends ONLY on the nature of the metal and its surface condition/cleanliness.",
      "Three Types of Electron Emission: (1) Thermionic emission (heating the metal), (2) Field emission (applying strong electric field $\\sim 10^8\\text{ V/m}$), and (3) Photoelectric emission (illuminating with light of frequency $\\nu \\ge \\nu_0$)."
    ],
    "derivations": [
      {
        "name": "Threshold Wavelength Relation & Metal Comparison",
        "setup": "Photon energy of visible light lies between $1.8\\text{ eV}$ (red) and $3.1\\text{ eV}$ (violet).",
        "steps": [
          {
            "text": "1. Work function connects to threshold frequency $\\nu_0$ and threshold wavelength $\\lambda_0$ via:",
            "equation": "\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}"
          },
          {
            "text": "2. Alkali metals (like Cs $\\phi_0 = 2.14\\text{ eV}$, K $2.30\\text{ eV}$, Na $2.75\\text{ eV}$) have $\\phi_0 < 3.1\\text{ eV}$, so visible light can eject electrons; Zn ($4.3\\text{ eV}$), Cd, and Mg require higher-energy UV photons."
          }
        ],
        "finalFormula": "\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0} \\quad (\\text{Lowest: Cs } 2.14\\text{ eV}, \\; \\text{Highest: Pt } 5.65\\text{ eV})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Work Function & Threshold Frequency Relation",
      "examDrawingGuide": [
        "Sketch V₀ vs ν line showing x-intercept ν₀ = φ₀/h."
      ]
    },
    "keyPointsAndKeywords": [
      "Work function φ₀ depends on metal nature & surface",
      "Thermionic, Field, Photoelectric emission",
      "Lowest φ₀: Cesium (2.14 eV); Highest: Platinum (5.65 eV)",
      "1 eV = 1.6 × 10^-19 J"
    ],
    "termsGlossary": [
      {
        "symbol": "\\phi_0 = h\\nu_0",
        "term": "Work Function",
        "definition": "Characteristic surface barrier energy measured in $\\text{eV}$; independent of light intensity."
      }
    ],
    "markingScheme": [
      "1 Mark: Accurate definition of work function ($\\phi_0$) and stating its two factors (metal nature + surface condition).",
      "1 Mark: Naming thermionic, field, and photoelectric emission + explaining alkali metals vs zinc."
    ],
    "examinerTips": "Work function φ₀ is a constant property of the metal surface — it does NOT change if you change incident light intensity or wavelength!",
    "number": 75,
    "modelAnswer": {
      "statement": "Work function $\\phi_0 = h\\nu_0$ is the minimum energy required to free a surface electron via thermionic, field, or photoelectric emission.",
      "derivations": [
        {
          "name": "Emission Modes & Work Function Threshold",
          "steps": [
            "Thermionic (heat), Field ($E \\sim 10^8\\text{ V/m}$), Photoelectric ($h\\nu \\ge \\phi_0$)",
            "Alkali metals ($\\phi_0 \\approx 2.1\\text{–}2.75\\text{ eV}$) respond to visible light; Zn ($4.3\\text{ eV}$) needs UV"
          ],
          "formula": "\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}"
        }
      ],
      "conclusion": "Cesium has the lowest work function ($2.14\\text{ eV}$) while Platinum has the highest ($5.65\\text{ eV}$)."
    }
  },
  {
    "id": "imp-phy-11-th6",
    "title": "Experimental Study of Photoelectric Effect: Intensity, Potential & Frequency Effects",
    "shortLabel": "Ch 11 Theory: Experimental Study of Photoelectric Effect",
    "chapterId": "phy-ch-11",
    "chapterTitle": "Dual Nature of Radiation and Matter",
    "chapterNum": 11,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 11.3",
    "subtopicId": "phy-sub-11-2",
    "unit": "Dual Nature of Radiation and Matter",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Experimental Setup & Graphs",
    "frequency": "95% Frequency (Hallwachs–Lenard Tube + Three Graphs)",
    "questionPrompt": "Describe the experimental arrangement to study the photoelectric effect. Explain and sketch how photoelectric current varies with (i) intensity of incident light, (ii) collector plate potential V at constant frequency for different intensities, and (iii) collector potential V at constant intensity for different frequencies.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 11: Dual Nature of Radiation and Matter",
      "section": "Section 11.3",
      "equations": "I_sat ∝ Intensity, K_max = e V_0",
      "figures": "Fig. 11.1–11.4: Experimental setup & I–V characteristic curves",
      "summary": "Separately demonstrates intensity scaling (saturation current) vs frequency scaling (stopping potential)."
    },
    "theory": [
      "Apparatus: An evacuated quartz/glass tube encloses photosensitive plate $C$ (emitter) illuminated through a quartz window $W$ and collector plate $A$ connected to a commutator (reversing polarity), potential divider, microammeter ($\\mu\\text{A}$), and voltmeter."
    ],
    "derivations": [
      {
        "name": "Three Experimental Dependences & Graph Analysis",
        "setup": "Emitter $C$ illuminated by monochromatic beam ($\\nu > \\nu_0$); collector potential $V$ varied from positive saturation to negative cut-off $-V_0$.",
        "steps": [
          {
            "text": "1. Effect of Intensity (fixed $\\nu$ and $+V$): Photocurrent increases LINEARLY with intensity because higher intensity supplies more photons per second."
          },
          {
            "text": "2. Effect of Collector Potential at Different Intensities ($I_3 > I_2 > I_1$, fixed $\\nu$): Saturation current rises proportionally ($i_{\\text{sat},3} > i_{\\text{sat},2} > i_{\\text{sat},1}$), while ALL curves meet at the SAME negative stopping potential $-V_0$:"
            ,"equation": "V_0 \\text{ is independent of Intensity}; \\qquad K_{\\max} = eV_0"
          },
          {
            "text": "3. Effect of Frequency at Fixed Intensity ($\\nu_3 > \\nu_2 > \\nu_1$): Above threshold $\\nu_0$, stopping potential magnitude shifts more negative ($|V_{03}| > |V_{02}| > |V_{01}|$) while saturation current matches at positive $V$."
          }
        ],
        "finalFormula": "I_{\\text{sat}} \\propto \\text{Intensity} \\;(V_0 \\text{ constant}), \\qquad |V_0| \\propto (\\nu - \\nu_0)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Experimental Curves: I vs Intensity, I vs V, V₀ vs ν",
      "examDrawingGuide": [
        "Draw I vs V showing distinct plateaus I₁, I₂, I₃ merging at a single -V₀, and a second I vs V plot showing one plateau diverging to -V₀₁, -V₀₂, -V₀₃."
      ]
    },
    "keyPointsAndKeywords": [
      "Quartz window transmits UV light",
      "Commutator reverses collector polarity",
      "Same ν, diff Intensity → same −V₀, diff saturation current",
      "Diff ν, same photon flux → diff −V₀, same saturation current"
    ],
    "termsGlossary": [
      {
        "symbol": "i_{\\text{sat}}",
        "term": "Saturation Photocurrent",
        "definition": "Maximum constant photocurrent reached when positive anode $A$ collects all emitted photoelectrons."
      }
    ],
    "markingScheme": [
      "1 Mark: Schematic description/diagram of evacuated tube, quartz window, emitter $C$, collector $A$, commutator.",
      "1 Mark: Graph & result for varying intensity at fixed $\\nu$ (same $-V_0$, different $i_{\\text{sat}}$).",
      "1 Mark: Graph & result for varying frequency (more negative $-V_0$ for higher $\\nu$)."
    ],
    "examinerTips": "Quartz window (not ordinary glass) is used on the tube because ordinary glass absorbs UV radiation needed for metals like Zn!",
    "number": 76,
    "modelAnswer": {
      "statement": "In Lenard's evacuated quartz-window tube, increasing intensity raises saturation photocurrent linearly without changing stopping potential $-V_0$, whereas increasing frequency $\\nu$ shifts $-V_0$ linearly negative.",
      "derivations": [
        {
          "name": "Hallwachs–Lenard Experimental Curves",
          "steps": [
            "Fixed $\\nu$, varying Intensity: saturation currents scale $I_3 > I_2 > I_1$, converging at identical $-V_0$",
            "Varying $\\nu$ ($\\nu_3 > \\nu_2 > \\nu_1$): $|V_{03}| > |V_{02}| > |V_{01}|$, same saturation current"
          ],
          "formula": "K_{\\max} = eV_0 \\;(\\text{depends on } \\nu), \\quad i_{\\text{sat}} \\propto \\text{Intensity}"
        }
      ],
      "conclusion": "These observations prove light transfers energy in discrete quanta $h\\nu$ rather than continuous waves."
    }
  },
  {
    "id": "imp-phy-12-th1",
    "title": "Rutherford's Nuclear Model of Atom: Observations, Conclusions & Limitations",
    "shortLabel": "Ch 12 Theory: Rutherford Model of Atom",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 12.2",
    "subtopicId": "phy-sub-12-1",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Core Model & Drawbacks",
    "frequency": "93% Frequency (Guaranteed Observations + Two Drawbacks)",
    "questionPrompt": "State the main observations and conclusions of the Geiger-Marsden alpha-particle scattering experiment that led to Rutherford's nuclear model of the atom. Explain the two major drawbacks of Rutherford's model.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Section 12.2",
      "equations": "N(θ) ∝ 1 / sin⁴(θ/2)",
      "figures": "Fig. 12.1–12.3: Geiger-Marsden setup & scattering graph",
      "summary": "Tiny massive positive nucleus surrounded by orbiting electrons; fails on stability and line spectra."
    },
    "theory": [
      "Geiger–Marsden Observations (5.5 MeV $\\alpha$-particles on $2.1\\times 10^{-7}\\text{ m}$ gold foil): (1) Nearly 99.86% passed undeflected $\\implies$ atom is mostly empty space; (2) About $0.14\\%$ deflected by $> 1^\\circ$ and $\\sim 1\\text{ in }8000$ rebounded by $> 90^\\circ$ $\\implies$ entire $+\\text{ve}$ charge and $>99.9\\%$ mass reside in a tiny dense core (nucleus, radius $\\sim 10^{-15}\\text{–}10^{-14}\\text{ m}$ vs atomic radius $\\sim 10^{-10}\\text{ m}$).",
      "Two Drawbacks of Rutherford's Model: (1) Cannot explain atomic stability (an accelerating orbiting electron must emit continuous EM radiation, spiral inward, and collapse into the nucleus in $\\sim 10^{-8}\\text{ s}$); (2) Predicts a continuous emission spectrum instead of the observed discrete atomic line spectra."
    ],
    "derivations": [
      {
        "name": "Scattering Formula & Instability Argument",
        "setup": "Collimated $\\alpha$-beam ($^4_2\\text{He}^{2+}$ from $^{214}_{83}\\text{Bi}$) scattered by Coulomb repulsion off stationary gold nucleus ($Z = 79$).",
        "steps": [
          {
            "text": "1. Number of $\\alpha$-particles scattered at angle $\\theta$ per unit area follows:",
            "equation": "N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}"
          },
          {
            "text": "2. Why heavy gold foil & thin thickness: heavy gold nucleus minimizes target recoil; ultra-thin foil avoids multiple scattering."
          },
          {
            "text": "3. Classical instability: revolving centripetal acceleration $a = v^2/r$ causes continuous Larmor radiation $\\implies$ spiraling radius $\\to 0$ in $\\sim 10^{-8}\\text{ s}$ and continuous spectrum (contradicting sharp Balmer lines)."
          }
        ],
        "finalFormula": "R_{\\text{nucleus}} \\sim 10^{-15}\\text{ m}, \\quad R_{\\text{atom}} \\sim 10^{-10}\\text{ m}, \\quad N(\\theta) \\propto \\sin^{-4}(\\theta/2)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Alpha-Particle Scattering & Atomic Structure",
      "examDrawingGuide": [
        "Sketch hyperbolic α-trajectories around +Ze nucleus: large impact parameter passing almost straight, b = 0 rebounding at 180°."
      ]
    },
    "keyPointsAndKeywords": [
      "99.86% undeflected → empty space",
      "1 in 8000 deflected > 90° → tiny dense positive nucleus",
      "Fails atomic stability (~10^-8 s spiral collapse)",
      "Fails discrete line spectra (predicts continuous)"
    ],
    "termsGlossary": [
      {
        "symbol": "R_{\\text{nuc}} \\approx 10^{-15}\\text{ m}",
        "term": "Nuclear Size",
        "definition": "About $10^4\\text{–}10^5$ times smaller than overall atomic diameter ($10^{-10}\\text{ m}$)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Three observations paired with corresponding physical conclusions.",
      "1.5 Marks: Stating both drawbacks (instability due to EM radiation + failure to explain discrete line spectra)."
    ],
    "examinerTips": "Be sure to link BOTH observations to their exact conclusions (mostly undeflected → empty space; 1 in 8000 at >90° → tiny concentrated +ve nucleus).",
    "number": 77,
    "modelAnswer": {
      "statement": "Most $\\alpha$-particles pass straight through (empty atom) while 1 in 8000 rebound $>90^\\circ$ (dense positive nucleus); Rutherford's model fails to explain atomic stability and discrete line spectra.",
      "derivations": [
        {
          "name": "Observations, Conclusions & Two Drawbacks",
          "steps": [
            "Mostly undeflected $\\implies$ empty space; large-angle rebound $\\implies$ massive $+Ze$ nucleus ($\\sim 10^{-15}\\text{ m}$)",
            "Drawbacks: accelerating electrons should radiate continuously ($\\sim 10^{-8}\\text{ s}$ collapse) and emit continuous spectra"
          ],
          "formula": "N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}"
        }
      ],
      "conclusion": "These two failures motivated Bohr's quantum postulates in 1913."
    }
  },
  {
    "id": "imp-phy-12-th2",
    "title": "Alpha-Particle Scattering: Distance of Closest Approach (r₀) & Impact Parameter (b)",
    "shortLabel": "Ch 12 Derivation: Closest Approach r₀ & Impact Parameter",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 12.2",
    "subtopicId": "phy-sub-12-1",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation",
    "frequency": "95% Frequency (Guaranteed Closest Approach Proof + b=0 Trick)",
    "questionPrompt": "Define (i) distance of closest approach r₀ and (ii) impact parameter b in Rutherford's alpha-particle scattering experiment. Derive the expression for r₀ for an alpha particle of kinetic energy K heading directly toward a nucleus of atomic number Z.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Section 12.2",
      "equations": "r₀ = (1/4πε₀)(2Ze² / K), b = (Ze² cot(θ/2)) / (4πε₀ K)",
      "figures": "Fig. 12.4: Trajectory of α-particles & impact parameter",
      "summary": "Conservation of energy at head-on turning point yields r₀ = 2kZe²/K."
    },
    "theory": [
      "Distance of Closest Approach ($r_0$): Minimum centre-to-centre distance from the target nucleus at which a head-on $\\alpha$-particle momentarily stops ($v = 0$) before rebounding by $180^\\circ$. Gives an upper bound on nuclear radius.",
      "Impact Parameter ($b$): Perpendicular distance of the initial velocity vector of the $\\alpha$-particle from the central line passing through the nucleus."
    ],
    "derivations": [
      {
        "name": "Derivation of r₀ & Impact Parameter Formula",
        "setup": "Alpha particle ($q_1 = +2e$, initial KE $= K = \\frac{1}{2}mv_0^2$, far away $U_i = 0$) aimed head-on ($b = 0$) at heavy fixed nucleus ($q_2 = +Ze$).",
        "steps": [
          {
            "text": "1. At distance $r_0$, kinetic energy drops completely to zero ($K_f = 0$) and converts into electrostatic potential energy:",
            "equation": "K + 0 = 0 + \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_0} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{r_0}"
          },
          {
            "text": "2. Solve for distance of closest approach $r_0$:",
            "equation": "r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2 Z e^2}{K} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{4 Z e^2}{m v_0^2}"
          },
          {
            "text": "3. For off-axis trajectories, impact parameter $b$ determines scattering angle $\\theta$:",
            "equation": "b = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Z e^2 \\cot(\\theta/2)}{K} \\qquad (\\text{Head-on } \\theta = 180^\\circ \\implies b = 0)"
          }
        ],
        "finalFormula": "r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2 Z e^2}{K}, \\qquad b = \\frac{Z e^2 \\cot(\\theta/2)}{4\\pi\\varepsilon_0 K}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Distance of Closest Approach & Impact Parameter",
      "examDrawingGuide": [
        "Mark nucleus +Ze, central axis through nucleus, perpendicular gap b to initial α-velocity line, and turning point distance r₀ for b = 0."
      ]
    },
    "keyPointsAndKeywords": [
      "Alpha charge = +2e, Nucleus charge = +Ze",
      "KE converts completely to PE at r₀",
      "r₀ ∝ 1/K ∝ 1/v₀²",
      "b = 0 gives θ = 180° head-on rebound"
    ],
    "termsGlossary": [
      {
        "symbol": "r_0 = \\frac{2kZe^2}{K}",
        "term": "Distance of Closest Approach",
        "definition": "Turning point separation where Coulomb repulsion stops a head-on $\\alpha$-particle."
      }
    ],
    "markingScheme": [
      "1 Mark: Clear definitions of $r_0$ and impact parameter $b$.",
      "1.5 Marks: Energy conservation with $q_1 = +2e, q_2 = +Ze$ deriving $r_0 = \\frac{2Ze^2}{4\\pi\\varepsilon_0 K}$.",
      "0.5 Mark: Impact parameter expression and noting $b = 0 \\implies \\theta = 180^\\circ$."
    ],
    "examinerTips": "Common CBSE trick: If initial speed v of the alpha particle is DOUBLED, K quadruples (4K), so r₀ becomes ONE-FOURTH (r₀/4)!",
    "number": 78,
    "modelAnswer": {
      "statement": "Equating initial kinetic energy $K$ of a head-on $\\alpha$-particle ($+2e$) to Coulomb potential energy at turning point gives $r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}$; impact parameter $b = \\frac{Ze^2 \\cot(\\theta/2)}{4\\pi\\varepsilon_0 K}$.",
      "derivations": [
        {
          "name": "Energy Conservation for r₀",
          "steps": [
            "$K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{r_0} \\implies r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}$",
            "Since $K = \\frac{1}{2}mv_0^2$, $r_0 \\propto 1/K \\propto 1/v_0^2$"
          ],
          "formula": "r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}"
        }
      ],
      "conclusion": "For $5.5\\text{ MeV}$ $\\alpha$-particles on Gold ($Z=79$), $r_0 \\approx 4.1\\times 10^{-14}\\text{ m}$."
    }
  },
  {
    "id": "imp-phy-12-th3",
    "title": "Bohr Atom Model: Postulates & Derivation of Radius r_n, Velocity v_n & Energy E_n",
    "shortLabel": "Ch 12 Derivation: Bohr Model r_n, v_n & E_n",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 12.3–12.4",
    "subtopicId": "phy-sub-12-2",
    "unit": "Atoms and Nuclei",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Derivation",
    "frequency": "99% Frequency (#1 Most Asked Chapter 12 Derivation)",
    "questionPrompt": "State the three postulates of Bohr's model of a hydrogen atom. Using them, derive expressions for (i) radius r_n, (ii) orbital speed v_n, and (iii) kinetic, potential, and total energy E_n of the electron in the n-th stationary orbit. What does the negative sign of total energy signify?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Section 12.3–12.4",
      "equations": "r_n = ε₀n²h²/(πme²Z), v_n = Ze²/(2ε₀nh), E_n = −13.6 Z²/n² eV",
      "figures": "Bohr stationary circular orbits & energy levels",
      "summary": "Derives n² radius scaling, 1/n speed scaling, and −13.6/n² eV energy levels."
    },
    "theory": [
      "Postulate 1 (Stationary Orbits): Electrons revolve in stable circular orbits without radiating EM waves; centripetal force equals electrostatic attraction ($mv^2/r = kZe^2/r^2$).",
      "Postulate 2 (Angular Momentum Quantization): Permitted orbits satisfy $L = mvr_n = n\\frac{h}{2\\pi}$ ($n = 1, 2, 3, \\dots$).",
      "Postulate 3 (Frequency Condition): A photon $h\\nu = E_i - E_f$ is emitted/absorbed only during a transition between stationary states.",
      "Negative Energy Significance: Total energy $E_n < 0$ proves the electron is BOUND to the nucleus (work $+|E_n|$ must be supplied to ionize it to $E = 0$ at $r = \\infty$)."
    ],
    "derivations": [
      {
        "name": "Full Bohr Derivation of Radius, Velocity & Energy (n-th Orbit)",
        "setup": "Electron ($m, -e$) revolving at speed $v_n$ in circle of radius $r_n$ around $+Ze$ ($k = \\frac{1}{4\\pi\\varepsilon_0}$).",
        "steps": [
          {
            "text": "1. Centripetal balance & Quantization equations:",
            "equation": "mv_n^2 r_n = \\frac{Z e^2}{4\\pi\\varepsilon_0} \\quad \\text{(1)}, \\qquad m v_n r_n = \\frac{n h}{2\\pi} \\quad \\text{(2)}"
          },
          {
            "text": "2. Divide (1) by (2) for orbital velocity $v_n$ ($v_n \\propto Z/n$):",
            "equation": "v_n = \\frac{Z e^2}{2\\varepsilon_0 n h} \\approx \\frac{2.18 \\times 10^6\\,Z}{n}\\text{ m/s}"
          },
          {
            "text": "3. Substitute $v_n$ into (2) for $n^{\\text{th}}$ orbit radius $r_n$ ($r_n \\propto n^2/Z$, Bohr radius $a_0 = 0.529\\text{ \\AA}$):",
            "equation": "r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = 0.529\\frac{n^2}{Z}\\text{ \\AA}"
          },
          {
            "text": "4. Kinetic, Potential & Total Energy ($K_n = \\frac{1}{2}mv_n^2 = \\frac{kZe^2}{2r_n}$, $U_n = -\\frac{kZe^2}{r_n} = -2K_n$):",
            "equation": "E_n = K_n + U_n = -K_n = -\\frac{kZe^2}{2r_n} = -\\frac{m Z^2 e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}"
          }
        ],
        "finalFormula": "r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA}, \\quad v_n = \\frac{Z e^2}{2\\varepsilon_0 n h}, \\quad E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Bohr Orbits (n = 1, 2, 3) & Energy Scaling",
      "examDrawingGuide": [
        "Sketch concentric Bohr orbits showing r₁ : r₂ : r₃ = 1 : 4 : 9 and energy ladder −13.6 eV, −3.4 eV, −1.51 eV, −0.85 eV, 0 eV."
      ]
    },
    "keyPointsAndKeywords": [
      "mvr = nh / (2π)",
      "r_n ∝ n² (a₀ = 0.529 Å); v_n ∝ 1/n",
      "K_n = −E_n, U_n = 2E_n",
      "E_n = −13.6/n² eV (negative = bound state)"
    ],
    "termsGlossary": [
      {
        "symbol": "a_0 = 0.529\\text{ \\AA}",
        "term": "Bohr Radius",
        "definition": "Radius of innermost $n = 1$ ground-state orbit of hydrogen ($Z = 1$)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: All three postulates of Bohr clearly stated.",
      "1.5 Marks: Deriving $v_n$ and $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2}$.",
      "2 Marks: Deriving $K_n, U_n, E_n = -13.6 Z^2/n^2\\text{ eV}$ + meaning of negative sign."
    ],
    "examinerTips": "Always use K = −E and U = 2E! If an exam question gives E₂ = −3.4 eV, immediately write K₂ = +3.4 eV and U₂ = −6.8 eV without recalculating!",
    "number": 79,
    "modelAnswer": {
      "statement": "Combining Coulomb centripetal force with Bohr's $mvr = nh/(2\\pi)$ yields $r_n \\propto n^2$, $v_n \\propto 1/n$, and $E_n = -K_n = U_n/2 = -13.6\\,Z^2/n^2\\text{ eV}$.",
      "derivations": [
        {
          "name": "Bohr Orbital Parameters",
          "steps": [
            "$v_n = \\frac{Ze^2}{2\\varepsilon_0 n h}$ and $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = 0.529\\frac{n^2}{Z}\\text{ \\AA}$",
            "$E_n = K_n + U_n = -\\frac{m Z^2 e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}$"
          ],
          "formula": "r_n \\propto n^2, \\quad v_n \\propto \\frac{1}{n}, \\quad E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}"
        }
      ],
      "conclusion": "As $n$ increases, potential and total energy increase (become less negative) while kinetic energy and speed decrease."
    }
  },
  {
    "id": "imp-phy-12-th4",
    "title": "Hydrogen Spectral Series, Rydberg Formula & de Broglie Standing Wave Proof",
    "shortLabel": "Ch 12 Derivation: Hydrogen Spectrum & 2πr = nλ",
    "chapterId": "phy-ch-12",
    "chapterTitle": "Atoms",
    "chapterNum": 12,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 12.5–12.6",
    "subtopicId": "phy-sub-12-3",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Board Derivation & Series",
    "frequency": "96% Frequency (Spectral Series Table + de Broglie Quantization Proof)",
    "questionPrompt": "Derive the Rydberg formula for the emission spectral lines of hydrogen and list all five spectral series with their electromagnetic regions. Also explain how de Broglie's hypothesis accounts for Bohr's second postulate of quantized angular momentum.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 12: Atoms",
      "section": "Section 12.5–12.6",
      "equations": "1/λ = R(1/n_f² − 1/n_i²), 2πr_n = nλ ⇒ mvr_n = nh/(2π)",
      "figures": "Fig. 12.7–12.8: Energy level transitions & circular standing matter wave",
      "summary": "Accounts for Lyman (UV), Balmer (Visible), Paschen/Brackett/Pfund (IR) and derives L = nh/2π."
    },
    "theory": [
      "Five Hydrogen Spectral Series: (1) Lyman ($n_f=1$, UV), (2) Balmer ($n_f=2$, Visible: $H_\\alpha=656.3\\text{ nm}$), (3) Paschen ($n_f=3$, Near IR), (4) Brackett ($n_f=4$, Mid IR), (5) Pfund ($n_f=5$, Far IR).",
      "For any series $n_f$: longest wavelength $\\lambda_{\\max}$ comes from $n_i = n_f + 1$ (smallest energy jump), while shortest wavelength $\\lambda_{\\min}$ (series limit) comes from $n_i = \\infty$ (largest energy jump)."
    ],
    "derivations": [
      {
        "name": "Rydberg Formula & de Broglie Proof of Bohr's 2nd Postulate",
        "setup": "Transition from upper state $E_{n_i}$ to lower state $E_{n_f}$ emits photon $hc/\\lambda$; electron circular standing wave of wavelength $\\lambda_e = h/(mv_n)$.",
        "steps": [
          {
            "text": "1. Substitute Bohr energy levels $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 n^2 h^2}$ into $hc/\\lambda = E_{n_i} - E_{n_f}$:",
            "equation": "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right), \\qquad R = \\frac{me^4}{8\\varepsilon_0^2 c h^3} \\approx 1.097 \\times 10^7\\text{ m}^{-1}"
          },
          {
            "text": "2. de Broglie Standing Wave Explanation: For a circular electron matter wave not to cancel itself out by destructive interference, orbit circumference $2\\pi r_n$ must equal an integer multiple of $\\lambda$:",
            "equation": "2\\pi r_n = n\\lambda = \\frac{n h}{m v_n} \\implies L = m v_n r_n = \\frac{n h}{2\\pi}"
          }
        ],
        "finalFormula": "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right), \\qquad 2\\pi r_n = n\\lambda"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Hydrogen Spectral Transitions & Standing Wave Orbit",
      "examDrawingGuide": [
        "Draw horizontal energy levels n = 1, 2, 3, 4, ∞ with downward arrows grouped into Lyman (to n=1), Balmer (to n=2), Paschen (to n=3)."
      ]
    },
    "keyPointsAndKeywords": [
      "Lyman (UV, nf=1), Balmer (Visible, nf=2), Paschen/Brackett/Pfund (IR)",
      "Shortest λ: ni = ∞; Longest λ: ni = nf + 1",
      "Max spectral lines from n: N = n(n − 1)/2",
      "2πr_n = nλ proves mvr = nh/2π"
    ],
    "termsGlossary": [
      {
        "symbol": "R = 1.097 \\times 10^7\\text{ m}^{-1}",
        "term": "Rydberg Constant",
        "definition": "Fundamental constant determining hydrogen spectral wavenumbers ($1/R \\approx 912\\text{ \\AA}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Deriving $\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$.",
      "1 Mark: Listing all 5 spectral series with their $n_f$ values and EM spectrum regions.",
      "1 Mark: Deriving $m v_n r_n = nh/(2\\pi)$ from circular standing wave condition $2\\pi r_n = n\\lambda$."
    ],
    "examinerTips": "Remember 1/R ≈ 912 Å (91.2 nm): this lets you check Lyman series limit (λ_min = 912 Å) instantly in numericals!",
    "number": 80,
    "modelAnswer": {
      "statement": "Photon emission during $n_i \\to n_f$ obeys $\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$, while de Broglie's circular standing wave $2\\pi r_n = n\\lambda$ directly explains $mvr = nh/(2\\pi)$.",
      "derivations": [
        {
          "name": "Spectral Series & Quantization Proof",
          "steps": [
            "$\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$; Lyman (1, UV), Balmer (2, Visible), Paschen (3, IR), Brackett (4, IR), Pfund (5, IR)",
            "$2\\pi r_n = n\\lambda = \\frac{nh}{mv_n} \\implies m v_n r_n = \\frac{nh}{2\\pi}$"
          ],
          "formula": "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)"
        }
      ],
      "conclusion": "Standing matter waves require constructive self-interference around each stationary orbit."
    }
  },
  {
    "id": "imp-phy-13-th1",
    "title": "Binding Energy per Nucleon Curve (BE/A vs A), Mass Defect & Stability",
    "shortLabel": "Ch 13 Theory: Binding Energy Curve",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 13.4",
    "subtopicId": "phy-sub-13-2",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Guaranteed Graph & Explanation",
    "frequency": "98% Frequency (#1 Most Asked Nuclei Board Question)",
    "questionPrompt": "Define mass defect and nuclear binding energy. Draw a labelled plot of binding energy per nucleon (BE/A) versus mass number A, list its four salient features, and explain how it accounts for energy release in both nuclear fission and nuclear fusion.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Section 13.4",
      "equations": "Δm = Z m_p + (A−Z)m_n − M, E_bn = E_b / A (Peak 8.75 MeV at Fe-56)",
      "figures": "Fig. 13.1: Binding energy per nucleon as a function of mass number A",
      "summary": "Constant ~8 MeV plateau proves nuclear saturation; Fe-56 peaks stability; both light fusion and heavy fission move upward in BE/A."
    },
    "theory": [
      "Salient Features of BE/A vs A Curve: (1) For $30 < A < 170$, $\\text{BE}/A$ is practically constant ($\\sim 8.0\\text{–}8.75\\text{ MeV}$) due to short-range saturation of nuclear force; (2) Peak stability occurs at $^{56}_{26}\\text{Fe}$ ($8.75\\text{ MeV}$); (3) Light nuclei show sharp even-even peaks at $^4\\text{He}$, $^{12}\\text{C}$, $^{16}\\text{O}$; (4) Heavy nuclei ($A > 170$) drop down to $7.6\\text{ MeV}$ ($^{238}\\text{U}$) due to growing proton–proton Coulomb repulsion."
    ],
    "derivations": [
      {
        "name": "Mass Defect Formula & Stability / Q-Value Proof",
        "setup": "Nucleus $^A_Z X$ of actual rest mass $M$ composed of $Z$ protons and $(A - Z)$ neutrons.",
        "steps": [
          {
            "text": "1. Mass defect $\\Delta m$ and Binding Energy per nucleon $E_{bn}$ ($1\\text{ u} \\equiv 931.5\\text{ MeV}$):",
            "equation": "\\Delta m = [Z m_p + (A - Z)m_n] - M, \\qquad E_b = \\Delta m\\cdot c^2, \\qquad E_{bn} = \\frac{E_b}{A}"
          },
          {
            "text": "2. Why Fission Releases Energy ($A = 235 \\to A \\approx 117$): Heavy nucleus ($E_{bn} \\approx 7.6\\text{ MeV}$) splits into tighter medium fragments ($E_{bn} \\approx 8.5\\text{ MeV}$). Increasing binding energy releases $Q = \\text{BE}_{\\text{products}} - \\text{BE}_{\\text{reactants}} > 0$."
          },
          {
            "text": "3. Why Fusion Releases Energy ($A < 20 \\to ^4\\text{He}$): Light nuclei with low $E_{bn}$ fuse into tighter $^4\\text{He}$ ($7.07\\text{ MeV/nucleon}$), moving upward on the steep left slope and releasing $26.7\\text{ MeV}$."
          }
        ],
        "finalFormula": "E_{bn} = \\frac{[Zm_p + (A-Z)m_n - M]\\times 931.5\\text{ MeV}}{A} \\quad (\\text{Max } = 8.75\\text{ MeV at } ^{56}\\text{Fe})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Binding Energy per Nucleon (BE/A vs A) Curve",
      "examDrawingGuide": [
        "Plot BE/A (0–10 MeV) on y-axis and A (0–240) on x-axis; mark sharp spikes at ⁴He, ¹²C, ¹⁶O, broad peak 8.75 MeV at ⁵⁶Fe, and slope down to 7.6 MeV at ²³⁸U."
      ]
    },
    "keyPointsAndKeywords": [
      "Peak stability: Fe-56 (8.75 MeV)",
      "Plateau 30 < A < 170 proves nuclear saturation",
      "Sharp peaks at even-even ⁴He, ¹²C, ¹⁶O",
      "Products have HIGHER BE/A in both fission and fusion"
    ],
    "termsGlossary": [
      {
        "symbol": "E_{bn} = E_b / A",
        "term": "Binding Energy per Nucleon",
        "definition": "Average energy needed to separate one nucleon from the nucleus; measures nuclear stability."
      }
    ],
    "markingScheme": [
      "1 Mark: Neat labelled $\\text{BE}/A$ vs $A$ graph marking $^4\\text{He}, ^{56}\\text{Fe}$ peak ($8.75\\text{ MeV}$) and $^{238}\\text{U}$ ($7.6\\text{ MeV}$).",
      "1 Mark: Three key features (plateau for $30 < A < 170$, low values for very light & very heavy nuclei).",
      "1 Mark: Explaining how higher product $\\text{BE}/A$ releases energy in both fission and fusion."
    ],
    "examinerTips": "Always label the spikes at ⁴He (~7.1 MeV), ¹²C, ¹⁶O, the flat plateau peaking at ⁵⁶Fe (8.75 MeV), and ²³⁸U (7.6 MeV)!",
    "number": 81,
    "modelAnswer": {
      "statement": "The binding energy per nucleon $E_{bn} = E_b/A$ peaks at $8.75\\text{ MeV}$ for $^{56}\\text{Fe}$ and is lower for light ($A<30$) and heavy ($A>170$) nuclei, so both fusion and fission raise $E_{bn}$ and release energy.",
      "derivations": [
        {
          "name": "Curve Features & Energy Release",
          "steps": [
            "Plateau ($30 < A < 170$, $\\sim 8\\text{ MeV}$) shows short-range saturation of nuclear force",
            "Fission ($^{235}\\text{U} \\to \\text{medium } A$) and Fusion (light $A \\to {^4\\text{He}}$) both increase product $\\text{BE}/A \\implies Q > 0$"
          ],
          "formula": "E_{bn} = \\frac{\\Delta m(\\text{u}) \\times 931.5\\text{ MeV}}{A}"
        }
      ],
      "conclusion": "Moving toward the middle plateau increases stability and converts lost rest mass $\\Delta m$ into kinetic energy."
    }
  },
  {
    "id": "imp-phy-13-th2",
    "title": "Characteristics of Strong Nuclear Force & Nucleon Potential Energy Curve U(r)",
    "shortLabel": "Ch 13 Theory: Nuclear Force & U(r) Curve",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 13.5",
    "subtopicId": "phy-sub-13-3",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Core Characteristics & Graph",
    "frequency": "97% Frequency (0.8 fm Curve + 4 Properties)",
    "questionPrompt": "Plot the variation of potential energy U(r) of a pair of nucleons as a function of their separation r, clearly marking the equilibrium separation r₀ ≈ 0.8 fm and regions of attractive and repulsive force. State four important characteristics of the nuclear force.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Section 13.5",
      "equations": "F = −dU/dr; U_min at r₀ ≈ 0.8 fm; F_nn ≈ F_pp ≈ F_np",
      "figures": "Fig. 13.2: Potential energy of a pair of nucleons vs separation",
      "summary": "Attractive for r > 0.8 fm, strongly repulsive for r < 0.8 fm; short-ranged, saturated, charge-independent."
    },
    "theory": [
      "Five Important Characteristics of Strong Nuclear Force: (1) Strongest fundamental force in nature ($\\sim 100\\times$ electrostatic force, $\\sim 10^{38}\\times$ gravity); (2) Short-ranged (acts up to $\\sim 2\\text{–}3\\text{ fm}$, drops to zero beyond); (3) Exhibits saturation (each nucleon interacts only with immediate neighbours, making $\\text{BE}/A$ constant for medium nuclei); (4) Charge-independent ($F_{nn} \\approx F_{pp} \\approx F_{pn}$); (5) Becomes strongly REPULSIVE below $r_0 \\approx 0.8\\text{ fm}$ (preventing nuclear collapse)."
    ],
    "derivations": [
      {
        "name": "Nucleon Potential Energy Curve Analysis",
        "setup": "Potential energy $U(r)$ (in MeV) plotted against inter-nucleon distance $r$ (in fm).",
        "steps": [
          {
            "text": "1. From $F = -\\frac{dU}{dr}$, potential energy reaches its deep minimum ($\\approx -100\\text{ MeV}$) at $r_0 \\approx 0.8\\text{ fm}$ where net force is zero."
          },
          {
            "text": "2. Attraction vs Repulsion Regions:",
            "equation": "r > 0.8\\text{ fm} \\;\\left(\\frac{dU}{dr} > 0 \\implies F < 0\\text{ Attractive}\\right); \\qquad r < 0.8\\text{ fm} \\;\\left(\\frac{dU}{dr} < 0 \\implies F > 0\\text{ Strongly Repulsive}\\right)"
          }
        ],
        "finalFormula": "r_0 \\approx 0.8\\text{ fm} \\; (U_{\\min}, \\; F = 0); \\qquad F_{nn} \\approx F_{pp} \\approx F_{pn}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Nucleon Potential Energy Curve U(r) vs r",
      "examDrawingGuide": [
        "Draw y-axis U (MeV) from +ve to −100 MeV and x-axis r (fm) from 0 to 4 fm; mark minimum cleanly at r₀ = 0.8 fm, labeling left side 'Repulsive' and right side 'Attractive'."
      ]
    },
    "keyPointsAndKeywords": [
      "Equilibrium separation r₀ ≈ 0.8 fm",
      "r > 0.8 fm → Attractive; r < 0.8 fm → Repulsive",
      "Strongest force, short-range (~3 fm), saturation",
      "Charge-independent: F_nn ≈ F_pp ≈ F_np"
    ],
    "termsGlossary": [
      {
        "symbol": "r_0 \\approx 0.8\\text{ fm}",
        "term": "Equilibrium Nucleon Distance",
        "definition": "Distance of minimum potential energy where attractive and repulsive parts balance ($1\\text{ fm} = 10^{-15}\\text{ m}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Clean $U(r)$ vs $r$ plot with $r_0 \\approx 0.8\\text{ fm}$ and attractive/repulsive regions marked.",
      "2 Marks: Four distinct characteristics of nuclear force (strongest, short-ranged, charge-independent, saturation / repulsive core below $0.8\\text{ fm}$)."
    ],
    "examinerTips": "Keep the horizontal unit strictly in FEMTOMETRES (fm), NOT Ångströms or nm, and mark r₀ = 0.8 fm directly under the trough!",
    "number": 82,
    "modelAnswer": {
      "statement": "The nucleon potential curve $U(r)$ hits minimum at $r_0 \\approx 0.8\\text{ fm}$ (attractive for $r > 0.8\\text{ fm}$, repulsive for $r < 0.8\\text{ fm}$); nuclear force is strongest, short-ranged, saturated, and charge-independent.",
      "derivations": [
        {
          "name": "U(r) Curve & Properties",
          "steps": [
            "Minimum $U$ at $r_0 \\approx 0.8\\text{ fm}$ ($F = -dU/dr = 0$): $r > 0.8\\text{ fm}$ attractive, $r < 0.8\\text{ fm}$ repulsive",
            "Properties: Strongest force, range $\\le 3\\text{ fm}$, saturation, $F_{nn} \\approx F_{pp} \\approx F_{pn}$"
          ],
          "formula": "r_0 \\approx 0.8\\text{ fm}, \\quad F = -\\frac{dU}{dr}"
        }
      ],
      "conclusion": "Repulsive core below $0.8\\text{ fm}$ prevents nuclear matter from collapsing, while short-range saturation keeps nuclear density constant."
    }
  },
  {
    "id": "imp-phy-13-th3",
    "title": "Nuclear Fission and Nuclear Fusion: Reactions, Conditions & Comparison",
    "shortLabel": "Ch 13 Theory: Nuclear Fission & Fusion",
    "chapterId": "phy-ch-13",
    "chapterTitle": "Nuclei",
    "chapterNum": 13,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 13.7",
    "subtopicId": "phy-sub-13-3",
    "unit": "Atoms and Nuclei",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Nuclear Energy",
    "frequency": "94% Frequency (Balanced Equations + High-T Fusion Reason)",
    "questionPrompt": "Distinguish between nuclear fission and nuclear fusion with balanced nuclear equations for each. Explain (i) why thermal (slow) neutrons are ideal for triggering Uranium-235 fission, and (ii) why thermonuclear fusion requires extremely high temperatures (~10⁷ K).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 13: Nuclei",
      "section": "Section 13.7",
      "equations": "U-235 + n → Ba-141 + Kr-92 + 3n + 200 MeV; 4 H-1 → He-4 + 2e⁺ + 2ν + 26.7 MeV",
      "figures": "NCERT Sec 13.7.1 & 13.7.3: Fission & stellar proton-proton cycle",
      "summary": "Neutrons face zero Coulomb barrier for fission, whereas positive nuclei need ~10⁷ K thermal kinetic energy to fuse."
    },
    "theory": [
      "Nuclear Fission: Splitting of a heavy unstable nucleus (e.g., $^{235}_{92}\\text{U}$) upon capturing a slow thermal neutron into two medium-mass daughter nuclei plus 2–3 fast neutrons and $\\approx 200\\text{ MeV}$ energy ($\\sim 0.85\\text{ MeV/nucleon}$).",
      "Nuclear Fusion: Joining of very light nuclei (e.g., $4\\,^1_1\\text{H} \\to {^4_2\\text{He}}$) under extreme temperature ($\\sim 10^7\\text{ K}$) and density inside stars, releasing $26.7\\text{ MeV}$ per helium nucleus ($\\sim 6.7\\text{ MeV/nucleon}$)."
    ],
    "derivations": [
      {
        "name": "Balanced Reactions & Physical Conditions",
        "setup": "Energy release $Q = (\\Sigma M_{\\text{initial}} - \\Sigma M_{\\text{final}})c^2$ in fission vs fusion.",
        "steps": [
          {
            "text": "1. Thermal Fission of Uranium-235:",
            "equation": "{^{235}_{92}\\text{U}} + {^1_0\\text{n}} \\longrightarrow {^{236}_{92}\\text{U}^*} \\longrightarrow {^{141}_{56}\\text{Ba}} + {^{92}_{36}\\text{Kr}} + 3\\,{^1_0\\text{n}} + Q \\;(\\approx 200\\text{ MeV})"
          },
          {
            "text": "2. Stellar Proton–Proton Cycle Fusion & D–T Fusion:",
            "equation": "4\\,{^1_1\\text{H}} + 2e^- \\longrightarrow {^4_2\\text{He}} + 2\\nu_e + 6\\gamma + 26.7\\text{ MeV}; \\qquad {^2_1\\text{H}} + {^3_1\\text{H}} \\longrightarrow {^4_2\\text{He}} + {^1_0\\text{n}} + 17.6\\text{ MeV}"
          },
          {
            "text": "3. Physical Reasons: Slow neutrons are electrically neutral (zero Coulomb repulsion) and spend longer near $^{235}\\text{U}$ for high capture probability. Conversely, light fusing nuclei carry $+\\text{ve}$ charge and need $T \\sim 10^7\\text{ K}$ ($k_B T$) to overcome their mutual Coulomb barrier."
          }
        ],
        "finalFormula": "Q_{\\text{fission}} \\approx 200\\text{ MeV} \\;(\\sim 0.85\\text{ MeV/u}), \\qquad Q_{\\text{fusion}} = 26.7\\text{ MeV} \\;(\\sim 6.7\\text{ MeV/u})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Fission & Fusion Energy Release on BE/A Curve",
      "examDrawingGuide": [
        "Point arrows from U-235 upward toward middle plateau (Fission) and from ²H upward toward ⁴He (Fusion) on the BE/A curve."
      ]
    },
    "keyPointsAndKeywords": [
      "Fission: heavy nucleus + slow neutron → 200 MeV",
      "Fusion: light nuclei at T ~ 10⁷ K → 26.7 MeV",
      "Energy per nucleon: Fusion (~6.7 MeV) >> Fission (~0.85 MeV)",
      "Neutron neutral → no Coulomb barrier; fusion needs high T for Coulomb barrier"
    ],
    "termsGlossary": [
      {
        "symbol": "Q = \\Delta m \\cdot 931.5\\text{ MeV}",
        "term": "Nuclear Reaction Q-Value",
        "definition": "Net energy liberated due to mass-defect conversion $\\Delta m c^2$."
      }
    ],
    "markingScheme": [
      "1 Mark: Two points of comparison + balanced equations for $^{235}\\text{U}$ fission and $p\\text{–}p$ fusion.",
      "1 Mark: Explaining why slow uncharged neutrons induce fission easily.",
      "1 Mark: Explaining why $T \\sim 10^7\\text{ K}$ is required to overcome Coulomb barrier in fusion."
    ],
    "examinerTips": "If asked 'Which releases more energy PER NUCLEON (or per kg of fuel)?' — the answer is FUSION (~6.7 MeV/nucleon vs ~0.85 MeV/nucleon in fission)!",
    "number": 83,
    "modelAnswer": {
      "statement": "Fission splits heavy $^{235}\\text{U}$ via slow uncharged neutrons releasing $\\sim 200\\text{ MeV}$, while fusion merges light nuclei at $T \\sim 10^7\\text{ K}$ (to overcome Coulomb repulsion) releasing $26.7\\text{ MeV}$ per $^{4}\\text{He}$.",
      "derivations": [
        {
          "name": "Balanced Equations & Conditions",
          "steps": [
            "${^{235}_{92}\\text{U}} + {^1_0\\text{n}} \\to {^{141}_{56}\\text{Ba}} + {^{92}_{36}\\text{Kr}} + 3\\,{^1_0\\text{n}} + 200\\text{ MeV}$",
            "$4\\,{^1_1\\text{H}} + 2e^- \\to {^4_2\\text{He}} + 2\\nu_e + 6\\gamma + 26.7\\text{ MeV}$",
            "Slow neutrons: neutral (no barrier); Fusion: $10^7\\text{ K}$ kinetic energy overcomes $+\\text{ve}$ Coulomb barrier"
          ],
          "formula": "Q_{\\text{fission}} \\approx 200\\text{ MeV}, \\quad Q_{\\text{fusion}} = 26.7\\text{ MeV}"
        }
      ],
      "conclusion": "Fusion powers stars and releases nearly 8 times more energy per unit fuel mass than fission."
    }
  },
  {
    "id": "imp-phy-14-th1",
    "title": "Classification of Solids (Energy Bands) & Types of Semiconductors (Intrinsic, n-Type & p-Type)",
    "shortLabel": "Ch 14 Theory: Semiconductor Classification & Types",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 14.2–14.4",
    "subtopicId": "phy-sub-14-2",
    "unit": "Electronic Devices",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Energy Bands & Doping",
    "frequency": "98% Frequency (Band Gap Classification + Donor E_D / Acceptor E_A Diagrams)",
    "questionPrompt": "On the basis of energy band diagrams, classify solids into conductors, insulators, and semiconductors (giving E_g values for Si and Ge). Distinguish between intrinsic and extrinsic (n-type and p-type) semiconductors, draw energy band diagrams for n-type and p-type at T > 0 K, and explain why doped crystals remain electrically neutral.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Section 14.2–14.4",
      "equations": "E_g(Si) = 1.1 eV, E_g(Ge) = 0.72 eV; n_e · n_h = n_i²",
      "figures": "Fig. 14.2, 14.8, 14.9: Energy bands of solids, n-type & p-type",
      "summary": "Explains band gap classification (0 eV, < 3 eV, > 3 eV) and pentavalent/trivalent doping."
    },
    "theory": [
      "Classification by Band Gap ($E_g = E_C - E_V$): (1) Conductors/Metals: VB & CB overlap ($E_g \\approx 0$); (2) Semiconductors: Small gap $E_g < 3\\text{ eV}$ ($\\text{Si} = 1.1\\text{ eV}$, $\\text{Ge} = 0.72\\text{ eV}$), behaving as insulators at $0\\text{ K}$ with $\\rho$ falling as $T$ increases; (3) Insulators: Large gap $E_g > 3\\text{ eV}$ (Diamond $\\approx 5.4\\text{ eV}$).",
      "Intrinsic ($n_e = n_h = n_i$) vs Extrinsic ($n_e \\cdot n_h = n_i^2$): n-type uses pentavalent Group-15 donors (P, As, Sb) introducing discrete level $E_D$ just below $E_C$ ($n_e \\gg n_h$); p-type uses trivalent Group-13 acceptors (B, Al, In) creating $E_A$ just above $E_V$ ($n_h \\gg n_e$). Both are electrically neutral because each added dopant atom is neutral."
    ],
    "derivations": [
      {
        "name": "Band Gap Classification & Doping Mass-Action Balance",
        "setup": "Crystalline solid with filled Valence Band ($E_V$), empty Conduction Band ($E_C$), and forbidden gap $E_g = E_C - E_V$.",
        "steps": [
          {
            "text": "1. Band Classification Summary:",
            "equation": "\\text{Metal: } E_g \\approx 0; \\quad \\text{Semiconductor: } E_g < 3\\text{ eV } (1.1\\text{ eV Si},\\; 0.72\\text{ eV Ge}); \\quad \\text{Insulator: } E_g > 3\\text{ eV}"
          },
          {
            "text": "2. Intrinsic vs Extrinsic Carrier Equations (Mass Action Law):",
            "equation": "n_e = n_h = n_i \\;(\\text{Intrinsic}); \\qquad n_e \\cdot n_h = n_i^2 \\;(\\text{Extrinsic at thermal equilibrium})"
          },
          {
            "text": "3. Electrical Neutrality: Adding neutral Group-15 donor atoms adds equal numbers of $+e$ nuclear charges (immobile $+\\text{ve}$ donor ions) and $-e$ electrons, keeping net crystal charge strictly zero."
          }
        ],
        "finalFormula": "E_g(\\text{Si}) = 1.1\\text{ eV}, \\; E_g(\\text{Ge}) = 0.72\\text{ eV}; \\qquad n_e \\cdot n_h = n_i^2 \\;(\\text{Net Charge} = 0)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Energy Band Diagrams: Metals, Semiconductors, Insulators & Doping",
      "examDrawingGuide": [
        "Draw VB, CB, and gap E_g for Metal/Insulator/Semiconductor, and separate n-type (dotted E_D ~0.05 eV below CB) and p-type (dotted E_A ~0.05 eV above VB) band diagrams."
      ]
    },
    "keyPointsAndKeywords": [
      "E_g(Si) = 1.1 eV, E_g(Ge) = 0.72 eV",
      "At T = 0 K pure semiconductor = insulator",
      "n-type (P, As, Sb): E_D just below E_C, n_e >> n_h",
      "p-type (B, Al, In): E_A just above E_V, n_h >> n_e; crystal is neutral!"
    ],
    "termsGlossary": [
      {
        "symbol": "n_e \\cdot n_h = n_i^2",
        "term": "Mass Action Law",
        "definition": "Product of electron and hole concentrations equals squared intrinsic concentration at thermal equilibrium."
      }
    ],
    "markingScheme": [
      "1 Mark: Band classification of conductors, insulators, and semiconductors with $E_g$ values for Si/Ge.",
      "1 Mark: Distinction between intrinsic, n-type ($E_D$ below $E_C$) and p-type ($E_A$ above $E_V$) with band diagrams.",
      "1 Mark: Explaining why n-type/p-type crystals remain electrically neutral + $n_e n_h = n_i^2$."
    ],
    "examinerTips": "Never draw the E_D or E_A line in the middle of the band gap! Draw E_D close (~0.01–0.05 eV) beneath E_C, and E_A close above E_V!",
    "number": 84,
    "modelAnswer": {
      "statement": "Solids split into conductors ($E_g\\approx 0$), semiconductors ($E_g<3\\text{ eV}$: Si $1.1\\text{ eV}$, Ge $0.72\\text{ eV}$), and insulators ($E_g>3\\text{ eV}$); doping creates electrically neutral n-type ($E_D$ near $E_C$, $n_e\\gg n_h$) or p-type ($E_A$ near $E_V$, $n_h\\gg n_e$) crystals.",
      "derivations": [
        {
          "name": "Classification & Carrier Law",
          "steps": [
            "Conductors ($E_g\\approx 0$), Semiconductors ($E_g < 3\\text{ eV}$), Insulators ($E_g > 3\\text{ eV}$)",
            "Intrinsic: $n_e = n_h = n_i$; Extrinsic: $n_e \\cdot n_h = n_i^2$ (neutral crystal overall)"
          ],
          "formula": "E_g(\\text{Si}) = 1.1\\text{ eV}, \\quad E_g(\\text{Ge}) = 0.72\\text{ eV}, \\quad n_e n_h = n_i^2"
        }
      ],
      "conclusion": "Increasing temperature drops semiconductor resistivity because thermal bond-breaking exponentially increases carrier density."
    }
  },
  {
    "id": "imp-phy-14-th2",
    "title": "p-n Junction Formation & I–V Characteristics (Forward Bias & Reverse Bias)",
    "shortLabel": "Ch 14 Theory: p-n Junction & I–V Curve",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 14.5–14.6",
    "subtopicId": "phy-sub-14-3",
    "unit": "Electronic Devices",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Circuit & V–I Characteristics",
    "frequency": "99% Frequency (Guaranteed Biasing & I–V Graph Question)",
    "questionPrompt": "Explain the two processes (diffusion and drift) involved in the formation of a depletion region and barrier potential in an unbiased p-n junction. Draw circuit diagrams and plot the I–V characteristic curve of a silicon p-n junction diode under forward bias and reverse bias.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Section 14.5–14.6",
      "equations": "I_diffusion = I_drift (equilibrium); r_d = ΔV / ΔI",
      "figures": "Fig. 14.10, 14.14–14.16: p-n junction & V–I characteristics",
      "summary": "Forward bias narrows depletion width (mA current above 0.7 V); Reverse bias widens it (μA saturation current)."
    },
    "theory": [
      "Formation: (1) Diffusion of majority carriers ($p \\to n$ holes, $n \\to p$ electrons) leaves immobile $-\\text{ve}$ acceptor ions on p-side and $+\\text{ve}$ donor ions on n-side, creating a carrier-free Depletion Layer ($\\sim 0.5\\ \\mu\\text{m}$) and Barrier Potential $V_0$ ($\\sim 0.7\\text{ V}$ Si, $0.3\\text{ V}$ Ge); (2) Drift sweeps minority carriers opposite to diffusion until $I_{\\text{diff}} = I_{\\text{drift}}$.",
      "Forward Bias ($p \\to +, n \\to -$): Applied $V$ opposes barrier $V_0$ (effective barrier $V_0 - V$), narrowing depletion width $W$; above knee voltage ($0.7\\text{ V}$ Si), majority current grows exponentially in $\\text{mA}$.",
      "Reverse Bias ($p \\to -, n \\to +$): Applied $V$ aids $V_0$ (barrier $V_0 + V$), widening $W$; majority diffusion stops and only a tiny voltage-independent minority drift current ($\\sim \\mu\\text{A}$) flows until breakdown $V_{br}$."
    ],
    "derivations": [
      {
        "name": "Barrier Potential, Biasing Comparison & Dynamic Resistance",
        "setup": "p-n junction diode connected in variable DC forward ($p \\to +$) and reverse ($p \\to -$) test circuits.",
        "steps": [
          {
            "text": "1. Equilibrium vs Forward & Reverse Effective Barriers:",
            "equation": "I_{\\text{diff}} = I_{\\text{drift}} \\;(V=0); \\qquad V_{\\text{eff,FB}} = V_0 - V \\;(W\\downarrow,\\; I\\text{ in mA}); \\qquad V_{\\text{eff,RB}} = V_0 + V \\;(W\\uparrow,\\; I\\text{ in }\\mu\\text{A})"
          },
          {
            "text": "2. Dynamic (AC) Resistance on steep linear forward branch ($r_d \\sim 10\\text{–}20\\ \\Omega$) vs reverse branch ($R_{\\text{rb}} \\sim 10^7\\ \\Omega$):",
            "equation": "r_d = \\frac{\\Delta V}{\\Delta I}"
          }
        ],
        "finalFormula": "V_{\\text{FB}} = V_0 - V \\;(\\text{mA, } V_k \\approx 0.7\\text{ V}), \\qquad V_{\\text{RB}} = V_0 + V \\;(\\mu\\text{A}, \\; V_{br})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "p-n Junction Depletion Layer & Forward/Reverse V–I Curve",
      "examDrawingGuide": [
        "Label positive y-axis in mA (forward current rising sharply past knee 0.7 V) and negative y-axis in μA (flat reverse saturation current up to breakdown V_br)."
      ]
    },
    "keyPointsAndKeywords": [
      "Diffusion (majority) vs Drift (minority)",
      "Forward bias: p to +, W narrows, I in mA",
      "Reverse bias: p to −, W widens, I in μA",
      "Si knee voltage ≈ 0.7 V, Ge ≈ 0.3 V; r_d = ΔV/ΔI"
    ],
    "termsGlossary": [
      {
        "symbol": "V_0 \\approx 0.7\\text{ V (Si)}",
        "term": "Barrier Potential",
        "definition": "Built-in potential across the depletion layer opposing further majority carrier diffusion."
      }
    ],
    "markingScheme": [
      "1 Mark: Explaining diffusion and drift during depletion layer formation.",
      "1 Mark: Explaining thinning vs widening of depletion layer under forward vs reverse bias.",
      "1 Mark: Neat $I$–$V$ curve explicitly showing mA (forward), knee voltage $0.7\\text{ V}$, and $\\mu\\text{A}$ (reverse)."
    ],
    "examinerTips": "CBSE deducts 0.5–1 mark if you don't label mA on the forward vertical axis and μA on the reverse vertical axis!",
    "number": 85,
    "modelAnswer": {
      "statement": "Diffusion and drift reach equilibrium across a depletion region of barrier $V_0$; forward bias reduces barrier to $V_0 - V$ (large $\\text{mA}$ current past $0.7\\text{ V}$) while reverse bias raises it to $V_0 + V$ (tiny $\\mu\\text{A}$ saturation current).",
      "derivations": [
        {
          "name": "p-n Junction I–V Summary",
          "steps": [
            "Equilibrium: $I_{\\text{diff}} = I_{\\text{drift}}$ across immobile-ion depletion layer",
            "Forward ($p\\to+$): $W\\downarrow$, barrier $(V_0 - V)$, current in $\\text{mA}$, $r_d = \\Delta V/\\Delta I$",
            "Reverse ($p\\to-$): $W\\uparrow$, barrier $(V_0 + V)$, minority saturation current in $\\mu\\text{A}$"
          ],
          "formula": "r_d = \\frac{\\Delta V}{\\Delta I} \\quad (\\text{FB: mA}, \\; \\text{RB: } \\mu\\text{A})"
        }
      ],
      "conclusion": "Asymmetric conduction (low forward vs giant reverse resistance) makes the p-n diode an ideal rectifier."
    }
  },
  {
    "id": "imp-phy-14-th3",
    "title": "p-n Junction Diode as Half-Wave Rectifier & Full-Wave Rectifier (+ Filter)",
    "shortLabel": "Ch 14 Derivation: Half-Wave & Full-Wave Rectifier",
    "chapterId": "phy-ch-14",
    "chapterTitle": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "chapterNum": 14,
    "sourceType": "Board Theory & Derivation",
    "ncertRefCode": "NCERT Sec 14.7",
    "subtopicId": "phy-sub-14-4",
    "unit": "Electronic Devices",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Guaranteed 5-Mark Circuit & Waveforms",
    "frequency": "98% Frequency (#1 Most Asked Chapter 14 Question)",
    "questionPrompt": "Explain with neat labelled circuit diagrams and input/output voltage waveforms the working of a p-n junction diode as (a) a half-wave rectifier and (b) a centre-tap full-wave rectifier. Compare their output ripple frequencies for 50 Hz AC mains, and explain the role of a capacitor filter.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 2",
      "chapter": "Chapter 14: Semiconductor Electronics",
      "section": "Section 14.7",
      "equations": "f_out(HWR) = f_in = 50 Hz; f_out(FWR) = 2 f_in = 100 Hz; C parallel across R_L",
      "figures": "Fig. 14.17–14.19: Half-wave, Full-wave rectifier circuits & waveforms",
      "summary": "Unidirectional diode conduction turns AC into pulsating DC; FWR uses 2 diodes to rectify both half-cycles."
    },
    "theory": [
      "Half-Wave Rectifier (HWR): Uses 1 diode $D$ in series with load $R_L$. Conducts ONLY during positive half-cycles (forward-biased) and blocks negative half-cycles $\\implies$ intermittent pulses at $f_{\\text{out}} = f_{\\text{in}} = 50\\text{ Hz}$.",
      "Centre-Tap Full-Wave Rectifier (FWR): Uses a centre-tap transformer secondary ($A, B$ symmetric around $C$) and TWO diodes ($D_1, D_2$). During positive half-cycle ($A$ positive, $B$ negative w.r.t. $C$), $D_1$ conducts and $D_2$ blocks; during negative half-cycle ($A$ negative, $B$ positive), $D_2$ conducts and $D_1$ blocks. BOTH drive current through $R_L$ in the SAME direction $\\implies$ continuous unidirectional pulses at doubled ripple frequency $f_{\\text{out}} = 2f_{\\text{in}} = 100\\text{ Hz}$.",
      "Capacitor Filter: Connected in PARALLEL with $R_L$; offers low reactance $X_C = 1/(\\omega C)$ to AC ripples and blocks DC, charging rapidly to $V_m$ and discharging slowly ($\\tau = R_L C \\gg T$) to smooth the output."
    ],
    "derivations": [
      {
        "name": "Rectification Working, Ripple Frequency & RC Smoothing",
        "setup": "Stepped-down sinusoidal AC input $V(t) = V_m\\sin\\omega t$ of frequency $f_{\\text{in}} = 50\\text{ Hz}$.",
        "steps": [
          {
            "text": "1. Half-Wave Output (only $+\\text{ve}$ halves $0 \\to T/2$, blank $T/2 \\to T$):",
            "equation": "f_{\\text{out,HWR}} = f_{\\text{in}} = 50\\text{ Hz}"
          },
          {
            "text": "2. Full-Wave Output ($D_1$ conducts $0 \\to T/2$, $D_2$ conducts $T/2 \\to T$, time period between pulses halves to $T/2$):",
            "equation": "f_{\\text{out,FWR}} = \\frac{1}{T/2} = 2 f_{\\text{in}} = 100\\text{ Hz}"
          },
          {
            "text": "3. Filter Condition for near-constant DC across load $R_L$:",
            "equation": "\\tau = R_L C \\gg T, \\qquad C \\text{ connected in PARALLEL with } R_L"
          }
        ],
        "finalFormula": "f_{\\text{HWR}} = f_{\\text{in}}, \\qquad f_{\\text{FWR}} = 2 f_{\\text{in}}, \\qquad \\text{Filter } C \\parallel R_L"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Half-Wave & Centre-Tap Full-Wave Rectifier + Waveforms",
      "examDrawingGuide": [
        "Draw transformer primary/secondary (with centre tap for FWR), diode(s) D₁/D₂, load R_L, and vertically aligned AC input vs unidirectional DC pulse waveforms."
      ]
    },
    "keyPointsAndKeywords": [
      "HWR: 1 diode, conducts half-cycle, f_out = 50 Hz",
      "FWR: centre-tap + 2 diodes D₁, D₂, f_out = 100 Hz",
      "Same current direction through R_L in both halves",
      "Filter capacitor C connected in PARALLEL across R_L"
    ],
    "termsGlossary": [
      {
        "symbol": "f_{\\text{FWR}} = 2 f_{\\text{in}}",
        "term": "Full-Wave Ripple Frequency",
        "definition": "Fundamental frequency of pulsating DC output is twice the AC supply frequency."
      }
    ],
    "markingScheme": [
      "2 Marks: Labelled circuit diagrams for HWR (1 diode) & Centre-Tap FWR (2 diodes + centre tap).",
      "1.5 Marks: Input AC & unidirectional output waveforms vertically aligned + HWR vs FWR working.",
      "1.5 Marks: Stating ripple frequencies ($50\\text{ Hz}$ vs $100\\text{ Hz}$) and parallel capacitor filter explanation."
    ],
    "examinerTips": "Always draw the input sine wave and output pulsating wave strictly aligned on the same time axis (0, T/2, T, 3T/2) and explicitly write 'Filter C connected in PARALLEL across R_L'!",
    "number": 86,
    "modelAnswer": {
      "statement": "A half-wave rectifier (1 diode) conducts positive half-cycles ($f_{\\text{out}} = f$), while a centre-tap full-wave rectifier (2 diodes $D_1, D_2$) conducts both half-cycles unidirectionally through $R_L$ ($f_{\\text{out}} = 2f$), smoothed by a parallel capacitor filter.",
      "derivations": [
        {
          "name": "Rectifier Circuits, Frequencies & Filtering",
          "steps": [
            "HWR: $+\\text{ve}$ half conducts, $-\\text{ve}$ blocked $\\implies f_{\\text{out}} = 50\\text{ Hz}$",
            "FWR: $D_1$ ($+\\text{ve}$) & $D_2$ ($-\\text{ve}$) both send current $X \\to Y$ through $R_L \\implies f_{\\text{out}} = 100\\text{ Hz}$",
            "Parallel capacitor $C \\parallel R_L$ ($R_L C \\gg T$) shorts AC ripple and maintains steady DC"
          ],
          "formula": "f_{\\text{HWR}} = f, \\quad f_{\\text{FWR}} = 2f"
        }
      ],
      "conclusion": "Full-wave rectification plus RC shunt filtering provides smooth, continuous DC output."
    }
  }
];
