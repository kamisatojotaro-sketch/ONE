// Top 22 Guaranteed CBSE Class 12 Physics Board Exam Questions
// Rigorous Step-by-Step Derivations with Exact NCERT and NODIA References
// Formatted into 4 Distinct Parts: 1. Theory, 2. Derivations, 3. Diagram, 4. Key Points & Terms Glossary

export const IMPORTANT_PHYSICS_QUESTIONS = [
  {
    "id": "imp-phy-1",
    "number": 1,
    "title": "Gauss's Law & Applications: Plane Sheet, Straight Wire & Spherical Shell",
    "shortLabel": "Gauss's Law (Plane, Wire, Shell)",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "99% Frequency (Asked in almost every CBSE Board Exam)",
    "questionPrompt": "(a) State Gauss's law in electrostatics.\n(b) Using Gauss's law, derive an expression for the electric field due to:\n  (i) An infinitely long straight uniformly charged wire of linear charge density λ.\n  (ii) An infinite uniformly charged plane sheet of surface charge density σ.\n  (iii) A thin spherical shell of radius R and surface charge density σ, at points outside (r > R), on the surface of the shell (r = R), and inside (r < R) the shell.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Sections 1.14 & 1.15 (pp. 33–40)",
      "equations": "Eqs. (1.31), (1.32), (1.33), (1.35), (1.36)",
      "figures": "Figs. 1.29, 1.30, 1.31",
      "summary": "Gauss flux theorem and field derivations for cylindrical symmetry (wire), planar symmetry (sheet), and spherical symmetry (shell)."
    },
    "theory": [
      "Gauss's Law states that the total electric flux $\\Phi_E$ through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the net electric charge $q_{\\text{enclosed}}$ enclosed by that surface: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$",
      "Electric flux is independent of the size, radius, or geometric shape of the Gaussian surface chosen.",
      "If a Gaussian surface encloses zero net charge ($q_{\\text{enclosed}} = 0$), the net outward electric flux through the surface is strictly zero.",
      "Charges lying outside the closed Gaussian surface do not contribute to the net flux, because every field line entering the surface exits it."
    ],
    "derivations": [
      {
        "name": "Application 1: Infinitely Long Uniformly Charged Wire",
        "setup": "Consider an infinitely long, thin straight wire carrying a uniform linear charge density $\\lambda$. By cylindrical symmetry, the electric field $\\vec{E}$ is directed radially outward everywhere perpendicular to the wire, and its magnitude depends only on radial distance $r$. Construct a closed coaxial cylindrical Gaussian surface of radius $r$ and length $l$ around the wire.",
        "steps": [
          {
            "text": "Total electric flux through the Gaussian surface decomposes into three parts (two flat circular end-caps $S_1, S_2$ and one curved cylindrical mantle $S_3$):",
            "equation": "\\oint \\vec{E} \\cdot d\\vec{A} = \\int_{S_1} \\vec{E} \\cdot d\\vec{A} + \\int_{S_2} \\vec{E} \\cdot d\\vec{A} + \\int_{S_3} \\vec{E} \\cdot d\\vec{A}"
          },
          {
            "text": "On the two flat circular ends $S_1$ and $S_2$, field $\\vec{E}$ is perpendicular to area normal $d\\vec{A}$ ($\\theta = 90^\\circ$):",
            "equation": "\\int_{S_1} E \\, dA \\cos 90^\\circ = 0, \\quad \\int_{S_2} E \\, dA \\cos 90^\\circ = 0"
          },
          {
            "text": "On the curved cylindrical surface $S_3$, $\\vec{E}$ is parallel to outward area normal $d\\vec{A}$ ($\\theta = 0^\\circ$) at every point:",
            "equation": "\\int_{S_3} \\vec{E} \\cdot d\\vec{A} = E \\int_{S_3} dA = E(2\\pi r l)"
          },
          {
            "text": "The net charge enclosed within the Gaussian cylinder of length $l$ is:",
            "equation": "q_{\\text{enclosed}} = \\lambda \\cdot l"
          },
          {
            "text": "Applying Gauss's Law:",
            "equation": "E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0}"
          },
          {
            "text": "Hence, the electric field at distance $r$ from the wire is:",
            "equation": "E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r} \\quad \\implies \\quad \\vec{E} = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}\\hat{r}"
          }
        ],
        "specialCases": [
          {
            "title": "Variation with Distance:",
            "text": "The electric field is inversely proportional to distance $r$:",
            "equation": "E \\propto \\frac{1}{r}"
          }
        ],
        "finalFormula": "E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}"
      },
      {
        "name": "Application 2: Infinite Uniformly Charged Plane Sheet",
        "setup": "Consider an infinite thin plane sheet carrying uniform surface charge density $\\sigma$. By planar symmetry, the electric field $\\vec{E}$ is directed perpendicular to the sheet on both sides, with magnitude independent of position along the sheet. Construct a cylindrical pillbox of cross-sectional area $A$ extending symmetrically distance $r$ on both sides of the sheet.",
        "steps": [
          {
            "text": "On the curved cylindrical surface of the pillbox, $\\vec{E}$ is parallel to the sheet while $d\\vec{A}$ is perpendicular ($\\theta = 90^\\circ$), so flux through the curved surface is zero:",
            "equation": "\\Phi_{\\text{curved}} = 0"
          },
          {
            "text": "On both flat circular end-caps, $\\vec{E}$ is parallel to area vector $d\\vec{A}$ ($\\theta = 0^\\circ$). Flux through each end-cap is $E \\cdot A$:",
            "equation": "\\Phi_{\\text{total}} = E A + E A = 2 E A"
          },
          {
            "text": "Net charge enclosed inside cross-sectional area $A$ of the sheet:",
            "equation": "q_{\\text{enclosed}} = \\sigma \\cdot A"
          },
          {
            "text": "Applying Gauss's Law:",
            "equation": "2 E A = \\frac{\\sigma A}{\\varepsilon_0}"
          },
          {
            "text": "Hence, the electric field due to an infinite plane sheet is:",
            "equation": "E = \\frac{\\sigma}{2\\varepsilon_0} \\quad \\implies \\quad \\vec{E} = \\frac{\\sigma}{2\\varepsilon_0}\\hat{n}"
          }
        ],
        "specialCases": [
          {
            "title": "Distance Independence:",
            "text": "The field is completely uniform and independent of distance $r$ from the sheet:",
            "equation": "E = \\text{constant} \\quad (\\text{for all } r)"
          }
        ],
        "finalFormula": "E = \\frac{\\sigma}{2\\varepsilon_0}"
      },
      {
        "name": "Application 3: Thin Uniformly Charged Spherical Shell",
        "setup": "Consider a thin spherical shell of radius $R$ carrying total charge $q = 4\\pi R^2 \\sigma$ uniformly distributed on its surface. By spherical symmetry, electric field $\\vec{E}$ is directed radially outward everywhere.",
        "steps": [
          {
            "text": "Case (i) Outside the Shell ($r > R$): Construct a concentric spherical Gaussian surface of radius $r > R$. Electric flux is:",
            "equation": "\\oint \\vec{E} \\cdot d\\vec{A} = E \\oint dA = E(4\\pi r^2)"
          },
          {
            "text": "Since net enclosed charge is $q_{\\text{enclosed}} = q = 4\\pi R^2 \\sigma$, applying Gauss's Law gives:",
            "equation": "E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{outside}} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{r^2} = \\frac{\\sigma R^2}{\\varepsilon_0 r^2}"
          },
          {
            "text": "Case (ii) On the Surface of the Shell ($r = R$): For a point directly on the surface of the shell, $r = R$. The Gaussian sphere has radius $R$, enclosing the entire charge $q = 4\\pi R^2 \\sigma$:",
            "equation": "E_{\\text{surface}}(4\\pi R^2) = \\frac{q}{\\varepsilon_0} = \\frac{4\\pi R^2 \\sigma}{\\varepsilon_0}"
          },
          {
            "text": "Solving for electric field on the shell surface gives the peak maximum field intensity:",
            "equation": "E_{\\text{surface}} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{R^2} = \\frac{\\sigma}{\\varepsilon_0}"
          },
          {
            "text": "Case (iii) Inside the Shell ($r < R$): Construct a concentric spherical Gaussian surface of radius $r < R$. All free charges reside on the outer surface, so enclosed charge is identically zero:",
            "equation": "q_{\\text{enclosed}} = 0"
          },
          {
            "text": "Applying Gauss's Law inside the shell gives zero electric field (electrostatic shielding):",
            "equation": "E_{\\text{inside}}(4\\pi r^2) = \\frac{0}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{inside}} = 0"
          }
        ],
        "specialCases": [
          {
            "title": "Field Discontinuity & E vs r Variation:",
            "text": "The electric field is zero inside (r < R), jumps discontinuously to maximum E_max = σ/ε₀ on the surface (r = R), and decays as 1/r² outside (r > R):",
            "equation": "E = 0 \\; (r < R), \\quad E_{\\text{max}} = \\frac{\\sigma}{\\varepsilon_0} \\; (r = R), \\quad E \\propto \\frac{1}{r^2} \\; (r > R)"
          }
        ],
        "finalFormula": "E_{\\text{out}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}, \\quad E_{\\text{surface}} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{R^2}, \\quad E_{\\text{in}} = 0"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "gauss-applications",
      "title": "Gauss's Law Application Geometries",
      "examDrawingGuide": [
        "1. Straight Wire: Draw central charged wire with positive signs; draw coaxial cylinder of radius r and length l; draw normal vectors on circular ends (at 90° to E) and curved mantle (parallel to E).",
        "2. Plane Sheet: Draw vertical plane sheet with uniform positive charges; draw cylindrical pillbox puncturing perpendicularly with circular end-caps on both sides; draw field vectors E pointing away on both sides.",
        "3. Spherical Shell: Draw shell of radius R; draw outer Gaussian sphere r > R and inner Gaussian sphere r < R; plot the classic E versus r curve showing E = 0 for r < R, jumping to maximum at r = R, and decaying as 1/r² for r > R."
      ]
    },
    "keyPointsAndKeywords": [
      "Gaussian Surface Symmetry",
      "Flux Decomposition (End Caps vs Curved Surface)",
      "Linear Charge Density (λ = dq/dl)",
      "Surface Charge Density (σ = dq/dA)",
      "Distance Independence for Plane Sheet",
      "Zero Electric Field Inside Hollow Conductor/Shell"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Phi_E",
        "term": "Electric Flux",
        "definition": "Total number of electric field lines passing normally through a given area: Φ_E = ∮ E · dA. Measured in N·m²/C or V·m."
      },
      {
        "symbol": "\\varepsilon_0",
        "term": "Permittivity of Free Space",
        "definition": "Physical constant representing the capability of vacuum to permit electric field lines. Value: ε₀ ≈ 8.854 × 10⁻¹² C²/(N·m²)."
      },
      {
        "symbol": "\\lambda",
        "term": "Linear Charge Density",
        "definition": "Charge per unit length along a 1D conductor: λ = dq/dl, measured in Coulombs per metre (C/m)."
      },
      {
        "symbol": "\\sigma",
        "term": "Surface Charge Density",
        "definition": "Charge per unit surface area: σ = dq/dA, measured in Coulombs per square metre (C/m²)."
      },
      {
        "symbol": "d\\vec{A} = dA \\, \\hat{n}",
        "term": "Area Vector",
        "definition": "Vector of magnitude dA directed along the outward unit normal n̂ to the closed surface element."
      }
    ],
    "markingScheme": [
      "1 Mark: Statement of Gauss's Law with mathematical formula ∮ E · dA = q_enc/ε₀.",
      "1.5 Marks: Application 1 (Wire): Choice of Gaussian cylinder, flux evaluation showing zero end flux, and final formula E = λ/(2πε₀r).",
      "1.5 Marks: Application 2 (Sheet): Choice of pillbox, evaluation of 2EA = σA/ε₀, and final formula E = σ/(2ε₀).",
      "1 Mark: Application 3 (Shell): Derivation for points outside r > R (E = kq/r²), on surface r = R (E_max = σ/ε₀ = kq/R²), and proof that E = 0 for r < R."
    ],
    "examinerTips": "Always draw the Gaussian surface and show the area normal vector n̂ and field vector E explicitly with their angle θ. Remember to emphasize that for an infinite plane sheet, the electric field is strictly independent of distance.",
    "modelAnswer": {
      "statement": "Gauss's Law states that the total electric flux $\\Phi_E$ through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the net electric charge $q_{\\text{enclosed}}$ enclosed by that surface: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$\nElectric flux is independent of the size, radius, or geometric shape of the Gaussian surface chosen.\nIf a Gaussian surface encloses zero net charge ($q_{\\text{enclosed}} = 0$), the net outward electric flux through the surface is strictly zero.\nCharges lying outside the closed Gaussian surface do not contribute to the net flux, because every field line entering the surface exits it.",
      "derivations": [
        {
          "name": "Application 1: Infinitely Long Uniformly Charged Wire",
          "steps": [
            "Consider an infinitely long, thin straight wire carrying a uniform linear charge density $\\lambda$. By cylindrical symmetry, the electric field $\\vec{E}$ is directed radially outward everywhere perpendicular to the wire, and its magnitude depends only on radial distance $r$. Construct a closed coaxial cylindrical Gaussian surface of radius $r$ and length $l$ around the wire.",
            "Total electric flux through the Gaussian surface decomposes into three parts (two flat circular end-caps $S_1, S_2$ and one curved cylindrical mantle $S_3$): \\oint \\vec{E} \\cdot d\\vec{A} = \\int_{S_1} \\vec{E} \\cdot d\\vec{A} + \\int_{S_2} \\vec{E} \\cdot d\\vec{A} + \\int_{S_3} \\vec{E} \\cdot d\\vec{A}",
            "On the two flat circular ends $S_1$ and $S_2$, field $\\vec{E}$ is perpendicular to area normal $d\\vec{A}$ ($\\theta = 90^\\circ$): \\int_{S_1} E \\, dA \\cos 90^\\circ = 0, \\quad \\int_{S_2} E \\, dA \\cos 90^\\circ = 0",
            "On the curved cylindrical surface $S_3$, $\\vec{E}$ is parallel to outward area normal $d\\vec{A}$ ($\\theta = 0^\\circ$) at every point: \\int_{S_3} \\vec{E} \\cdot d\\vec{A} = E \\int_{S_3} dA = E(2\\pi r l)",
            "The net charge enclosed within the Gaussian cylinder of length $l$ is: q_{\\text{enclosed}} = \\lambda \\cdot l",
            "Applying Gauss's Law: E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0}",
            "Hence, the electric field at distance $r$ from the wire is: E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r} \\quad \\implies \\quad \\vec{E} = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}\\hat{r}",
            "Variation with Distance: The electric field is inversely proportional to distance $r$: E \\propto \\frac{1}{r}"
          ],
          "formula": "E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}"
        },
        {
          "name": "Application 2: Infinite Uniformly Charged Plane Sheet",
          "steps": [
            "Consider an infinite thin plane sheet carrying uniform surface charge density $\\sigma$. By planar symmetry, the electric field $\\vec{E}$ is directed perpendicular to the sheet on both sides, with magnitude independent of position along the sheet. Construct a cylindrical pillbox of cross-sectional area $A$ extending symmetrically distance $r$ on both sides of the sheet.",
            "On the curved cylindrical surface of the pillbox, $\\vec{E}$ is parallel to the sheet while $d\\vec{A}$ is perpendicular ($\\theta = 90^\\circ$), so flux through the curved surface is zero: \\Phi_{\\text{curved}} = 0",
            "On both flat circular end-caps, $\\vec{E}$ is parallel to area vector $d\\vec{A}$ ($\\theta = 0^\\circ$). Flux through each end-cap is $E \\cdot A$: \\Phi_{\\text{total}} = E A + E A = 2 E A",
            "Net charge enclosed inside cross-sectional area $A$ of the sheet: q_{\\text{enclosed}} = \\sigma \\cdot A",
            "Applying Gauss's Law: 2 E A = \\frac{\\sigma A}{\\varepsilon_0}",
            "Hence, the electric field due to an infinite plane sheet is: E = \\frac{\\sigma}{2\\varepsilon_0} \\quad \\implies \\quad \\vec{E} = \\frac{\\sigma}{2\\varepsilon_0}\\hat{n}",
            "Distance Independence: The field is completely uniform and independent of distance $r$ from the sheet: E = \\text{constant} \\quad (\\text{for all } r)"
          ],
          "formula": "E = \\frac{\\sigma}{2\\varepsilon_0}"
        },
        {
          "name": "Application 3: Thin Uniformly Charged Spherical Shell",
          "steps": [
            "Consider a thin spherical shell of radius $R$ carrying total charge $q = 4\\pi R^2 \\sigma$ uniformly distributed on its surface. By spherical symmetry, electric field $\\vec{E}$ is directed radially outward everywhere.",
            "Case (i) Outside the Shell ($r > R$): Construct a concentric spherical Gaussian surface of radius $r > R$. Electric flux is: \\oint \\vec{E} \\cdot d\\vec{A} = E(4\\pi r^2)",
            "Since net enclosed charge is $q_{\\text{enclosed}} = q = 4\\pi R^2 \\sigma$, applying Gauss's Law gives: E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{outside}} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{r^2} = \\frac{\\sigma R^2}{\\varepsilon_0 r^2}",
            "Case (ii) On the Surface of the Shell ($r = R$): For a point directly on the surface of the shell, $r = R$. The Gaussian sphere has radius $R$, enclosing the entire charge $q = 4\\pi R^2 \\sigma$: E_{\\text{surface}}(4\\pi R^2) = \\frac{q}{\\varepsilon_0} = \\frac{4\\pi R^2 \\sigma}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{surface}} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{1}{4\\pi \\varepsilon_0}\\frac{q}{R^2} \\; (\\text{Maximum field intensity})",
            "Case (iii) Inside the Shell ($r < R$): Construct a concentric spherical Gaussian surface of radius $r < R$. All free charges reside on the outer surface, so enclosed charge is identically zero: q_{\\text{enclosed}} = 0",
            "Applying Gauss's Law inside the shell gives zero electric field (electrostatic shielding): E(4\\pi r^2) = \\frac{0}{\\varepsilon_0} \\quad \\implies \\quad E_{\\text{inside}} = 0",
            "Field Discontinuity & Graph: The electric field is strictly 0 inside (r < R), jumps discontinuously to maximum E_max = σ/ε₀ on the surface (r = R), and decays as 1/r² outside (r > R)."
          ],
          "formula": "E_{\\text{out}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}, \\quad E_{\\text{surface}} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{R^2}, \\quad E_{\\text{in}} = 0"
        }
      ],
      "diagramNotes": "1. Straight Wire: Draw central charged wire with positive signs; draw coaxial cylinder of radius r and length l; draw normal vectors on circular ends (at 90° to E) and curved mantle (parallel to E).\n2. Plane Sheet: Draw vertical plane sheet with uniform positive charges; draw cylindrical pillbox puncturing perpendicularly with circular end-caps on both sides; draw field vectors E pointing away on both sides.\n3. Spherical Shell: Draw shell of radius R; draw outer Gaussian sphere r > R and inner Gaussian sphere r < R; plot the classic E versus r curve showing E = 0 for r < R, jumping to maximum at r = R, and decaying as 1/r² for r > R.",
      "markingScheme": [
        "1 Mark: Statement of Gauss's Law with mathematical formula ∮ E · dA = q_enc/ε₀.",
        "1.5 Marks: Application 1 (Wire): Choice of Gaussian cylinder, flux evaluation showing zero end flux, and final formula E = λ/(2πε₀r).",
        "1.5 Marks: Application 2 (Sheet): Choice of pillbox, evaluation of 2EA = σA/ε₀, and final formula E = σ/(2ε₀).",
        "1 Mark: Application 3 (Shell): Derivation for outside r > R (E = kq/r²), on surface r = R (E_max = σ/ε₀), and proof that E = 0 for r < R."
      ],
      "examinerTips": "Always draw the Gaussian surface and show the area normal vector n̂ and field vector E explicitly with their angle θ. Remember to emphasize that for an infinite plane sheet, the electric field is strictly independent of distance."
    }
  },
  {
    "id": "imp-phy-2",
    "number": 2,
    "title": "Force on a Current-Carrying Conductor in a Magnetic Field",
    "shortLabel": "Force on Conductor (F = ILB sinθ)",
    "chapterId": "phy-ch-4",
    "chapterTitle": "Moving Charges and Magnetism",
    "unit": "Magnetism",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency (CBSE 2023, 2022, 2019, 2018)",
    "questionPrompt": "(a) Derive the expression for the magnetic force experienced by a straight conductor of length L carrying current I placed in a uniform magnetic field B.\n(b) State the rule used to determine the direction of this force.\n(c) What are the conditions for maximum and zero force?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 4: Moving Charges and Magnetism",
      "section": "Section 4.2.2: Magnetic Force on a Current-Carrying Conductor (pp. 135–136)",
      "equations": "Eqs. (4.4), (4.5)",
      "figures": "Fig. 4.4",
      "summary": "Integration of microscopic Lorentz forces on mobile electrons with drift velocity to yield macroscopic mechanical force."
    },
    "theory": [
      "When a current-carrying conductor is placed in an external magnetic field, the mobile charge carriers (electrons) moving with drift velocity experience microscopic magnetic Lorentz forces.",
      "These individual microscopic forces are transmitted to the crystal lattice ions via collisions, resulting in a net macroscopic mechanical force: $$\\vec{F} = I(\\vec{L} \\times \\vec{B})$$",
      "Direction of the magnetic force is determined by Fleming's Left-Hand Rule or the Right-Hand Palm Rule.",
      "A conductor aligned parallel to the magnetic field ($\\theta = 0^\\circ$ or $180^\\circ$) experiences zero force.",
      "A conductor oriented perpendicular to the magnetic field ($\\theta = 90^\\circ$) experiences the maximum possible force: $F_{\\text{max}} = I L B$."
    ],
    "derivations": [
      {
        "name": "Derivation from Microscopic Electron Drift Dynamics",
        "setup": "Consider a straight conductor of length $l$ and uniform cross-sectional area $A$ carrying a steady current $I$. It is placed in a uniform external magnetic field $\\vec{B}$ making an angle $\\theta$ with the length of the conductor. Let $n$ be the number density of free conduction electrons in the material.",
        "steps": [
          {
            "text": "Total number of mobile conduction electrons inside the volume $V = A l$ of the conductor is:",
            "equation": "N = n A l"
          },
          {
            "text": "When steady current $I$ flows, conduction electrons drift with average drift velocity $\\vec{v}_d$. The magnetic Lorentz force on a single electron of charge $-e$ is:",
            "equation": "\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})"
          },
          {
            "text": "The total macroscopic magnetic force $\\vec{F}$ on the conductor is the vector sum of forces on all $N$ mobile electrons:",
            "equation": "\\vec{F} = N \\vec{f} = (n A l)[-e(\\vec{v}_d \\times \\vec{B})] = -n e A l (\\vec{v}_d \\times \\vec{B})"
          },
          {
            "text": "By definition of electric current, macroscopic current is $I = n e A v_d$. In vector form, current flowing along the length vector $\\vec{l}$ satisfies:",
            "equation": "-n e A l \\vec{v}_d = I \\vec{l}"
          },
          {
            "text": "Substituting this relation into the total force equation yields:",
            "equation": "\\vec{F} = I(\\vec{l} \\times \\vec{B})"
          },
          {
            "text": "The magnitude of the magnetic force is:",
            "equation": "F = I l B \\sin\\theta"
          }
        ],
        "specialCases": [
          {
            "title": "Case 1: Maximum Force (θ = 90°)",
            "text": "When the conductor is perpendicular to the magnetic field ($\\sin 90^\\circ = 1$):",
            "equation": "F_{\\text{max}} = I l B"
          },
          {
            "title": "Case 2: Zero Force (θ = 0° or 180°)",
            "text": "When the conductor is parallel or antiparallel to the magnetic field ($\\sin 0^\\circ = 0$):",
            "equation": "F = 0"
          }
        ],
        "finalFormula": "\\vec{F} = I(\\vec{l} \\times \\vec{B}) \\quad \\implies \\quad F = I l B \\sin\\theta"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "force-conductor",
      "title": "Current Conductor in External B-Field",
      "examDrawingGuide": [
        "1. Draw straight cylindrical conductor of length $l$ and cross-section $A$.",
        "2. Draw parallel magnetic field lines $\\vec{B}$ making angle $\\theta$ with conductor axis.",
        "3. Show current $I$ flowing along length vector $\\vec{l}$, with electron drift velocity $\\vec{v}_d$ pointing in the opposite direction.",
        "4. Draw resulting mechanical force vector $\\vec{F}$ perpendicular to both $\\vec{l}$ and $\\vec{B}$ according to Fleming's Left-Hand Rule."
      ]
    },
    "keyPointsAndKeywords": [
      "Magnetic Lorentz Force on Free Electrons",
      "Drift Velocity (v_d) and Current Relation (I = n e A v_d)",
      "Length Vector (l) along Current Direction",
      "Fleming's Left-Hand Rule",
      "Maximum Force at θ = 90°",
      "Zero Force along Field Lines (θ = 0°)"
    ],
    "termsGlossary": [
      {
        "symbol": "I",
        "term": "Macroscopic Current",
        "definition": "Net rate of charge transport through the conductor: $I = n e A v_d$, measured in Amperes (A)."
      },
      {
        "symbol": "\\vec{B}",
        "term": "Magnetic Field (Flux Density)",
        "definition": "Uniform external magnetic field vector exerting magnetic Lorentz force on moving charges, measured in Tesla (T)."
      },
      {
        "symbol": "n",
        "term": "Electron Number Density",
        "definition": "Number of mobile conduction electrons per unit volume of the conductor ($\\text{m}^{-3}$)."
      },
      {
        "symbol": "\\vec{v}_d",
        "term": "Drift Velocity",
        "definition": "Average velocity acquired by conduction electrons opposite to the electric field inside the conductor."
      },
      {
        "symbol": "\\vec{l}",
        "term": "Length Vector",
        "definition": "Vector of magnitude equal to length of the conductor directed along the direction of electric current."
      },
      {
        "symbol": "\\theta",
        "term": "Orientation Angle",
        "definition": "Angle between length vector $\\vec{l}$ (current direction) and the external magnetic field $\\vec{B}$."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Step-by-step mathematical transition from single electron Lorentz force $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$ to macroscopic force $\\vec{F} = I(\\vec{l} \\times \\vec{B})$.",
      "0.5 Mark: Statement of Fleming's Left-Hand Rule or Right-Hand Palm Rule for direction.",
      "1 Mark: Correct identification of special cases (maximum at $\\theta = 90^\\circ$, zero at $\\theta = 0^\\circ$)."
    ],
    "examinerTips": "Direction Rule: Fleming's Left-Hand Rule — Forefinger points along Field B, Middle finger points along Current I, and Thumb points along Force F. Remember that a conductor aligned along the magnetic field experiences ZERO force.",
    "modelAnswer": {
      "statement": "When a current-carrying conductor is placed in an external magnetic field, the mobile charge carriers (electrons) moving with drift velocity experience microscopic magnetic Lorentz forces.\nThese individual microscopic forces are transmitted to the crystal lattice ions via collisions, resulting in a net macroscopic mechanical force: $$\\vec{F} = I(\\vec{L} \\times \\vec{B})$$\nDirection of the magnetic force is determined by Fleming's Left-Hand Rule or the Right-Hand Palm Rule.\nA conductor aligned parallel to the magnetic field ($\\theta = 0^\\circ$ or $180^\\circ$) experiences zero force.\nA conductor oriented perpendicular to the magnetic field ($\\theta = 90^\\circ$) experiences the maximum possible force: $F_{\\text{max}} = I L B$.",
      "derivations": [
        {
          "name": "Derivation from Microscopic Electron Drift Dynamics",
          "steps": [
            "Consider a straight conductor of length $l$ and uniform cross-sectional area $A$ carrying a steady current $I$. It is placed in a uniform external magnetic field $\\vec{B}$ making an angle $\\theta$ with the length of the conductor. Let $n$ be the number density of free conduction electrons in the material.",
            "Total number of mobile conduction electrons inside the volume $V = A l$ of the conductor is: N = n A l",
            "When steady current $I$ flows, conduction electrons drift with average drift velocity $\\vec{v}_d$. The magnetic Lorentz force on a single electron of charge $-e$ is: \\vec{f} = -e(\\vec{v}_d \\times \\vec{B})",
            "The total macroscopic magnetic force $\\vec{F}$ on the conductor is the vector sum of forces on all $N$ mobile electrons: \\vec{F} = N \\vec{f} = (n A l)[-e(\\vec{v}_d \\times \\vec{B})] = -n e A l (\\vec{v}_d \\times \\vec{B})",
            "By definition of electric current, macroscopic current is $I = n e A v_d$. In vector form, current flowing along the length vector $\\vec{l}$ satisfies: -n e A l \\vec{v}_d = I \\vec{l}",
            "Substituting this relation into the total force equation yields: \\vec{F} = I(\\vec{l} \\times \\vec{B})",
            "The magnitude of the magnetic force is: F = I l B \\sin\\theta",
            "Case 1: Maximum Force (θ = 90°) When the conductor is perpendicular to the magnetic field ($\\sin 90^\\circ = 1$): F_{\\text{max}} = I l B",
            "Case 2: Zero Force (θ = 0° or 180°) When the conductor is parallel or antiparallel to the magnetic field ($\\sin 0^\\circ = 0$): F = 0"
          ],
          "formula": "\\vec{F} = I(\\vec{l} \\times \\vec{B}) \\quad \\implies \\quad F = I l B \\sin\\theta"
        }
      ],
      "diagramNotes": "1. Draw straight cylindrical conductor of length $l$ and cross-section $A$.\n2. Draw parallel magnetic field lines $\\vec{B}$ making angle $\\theta$ with conductor axis.\n3. Show current $I$ flowing along length vector $\\vec{l}$, with electron drift velocity $\\vec{v}_d$ pointing in the opposite direction.\n4. Draw resulting mechanical force vector $\\vec{F}$ perpendicular to both $\\vec{l}$ and $\\vec{B}$ according to Fleming's Left-Hand Rule.",
      "markingScheme": [
        "1.5 Marks: Step-by-step mathematical transition from single electron Lorentz force $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$ to macroscopic force $\\vec{F} = I(\\vec{l} \\times \\vec{B})$.",
        "0.5 Mark: Statement of Fleming's Left-Hand Rule or Right-Hand Palm Rule for direction.",
        "1 Mark: Correct identification of special cases (maximum at $\\theta = 90^\\circ$, zero at $\\theta = 0^\\circ$)."
      ],
      "examinerTips": "Direction Rule: Fleming's Left-Hand Rule — Forefinger points along Field B, Middle finger points along Current I, and Thumb points along Force F. Remember that a conductor aligned along the magnetic field experiences ZERO force."
    }
  },
  {
    "id": "imp-phy-3",
    "number": 3,
    "title": "Faraday's Laws of Induction & Lenz's Law (Energy Conservation)",
    "shortLabel": "Faraday's & Lenz's Laws",
    "chapterId": "phy-ch-6",
    "chapterTitle": "Electromagnetic Induction",
    "unit": "Electromagnetic Induction",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Conceptual & Theory",
    "frequency": "Guaranteed Core Question (Every Alternate Year)",
    "questionPrompt": "(a) State Faraday's laws of electromagnetic induction.\n(b) State Lenz's law. Explain how Lenz's law is a direct consequence of the principle of conservation of energy.\n(c) A bar magnet is pushed towards a closed conducting loop. Show that mechanical work is converted into electrical energy.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 6: Electromagnetic Induction",
      "section": "Sections 6.4 & 6.5 (pp. 207–213)",
      "equations": "Eqs. (6.1), (6.2), (6.3)",
      "figures": "Figs. 6.6, 6.7",
      "summary": "Quantitative formulation of induced emf and Lenz polarity law as an essential manifestation of energy conservation."
    },
    "theory": [
      "Faraday's First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, which lasts as long as the flux continues to change.",
      "Faraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit: $$\\varepsilon = -\\frac{d\\Phi_B}{dt} \\quad \\left(\\text{for } N \\text{ turns: } \\varepsilon = -N\\frac{d\\Phi_B}{dt}\\right)$$",
      "Lenz's Law: The direction of induced current is always such that it opposes the change in magnetic flux that produces it.",
      "Lenz's law is a direct consequence of the Law of Conservation of Energy: when a magnet is pushed toward a loop, the loop develops an opposing magnetic pole. An external agent must do mechanical work against this magnetic repulsion, and this mechanical work is converted into electrical energy (and ultimately Joule heat)."
    ],
    "derivations": [
      {
        "name": "Energy Conservation Proof via Lenz's Law",
        "setup": "Consider a closed conducting loop placed in front of the North pole of a bar magnet. An external agent moves the magnet toward the loop with constant velocity.",
        "steps": [
          {
            "text": "By Faraday's law, the rate of change of magnetic flux induces an emf across the loop:",
            "equation": "\\varepsilon = -\\frac{d\\Phi_B}{dt}"
          },
          {
            "text": "By Lenz's law, the induced current flows counter-clockwise (viewed from the magnet side), establishing an induced North pole on the near face of the loop:",
            "equation": "\\vec{B}_{\\text{induced}} \\text{ opposes the increase in } \\vec{B}_{\\text{external}}"
          },
          {
            "text": "The induced North pole repels the incoming North pole of the magnet with magnetic force $F_{\\text{mag}}$. The mechanical work done by the external agent moving distance $dx$ against this force is:",
            "equation": "dW_{\\text{mech}} = F_{\\text{ext}} \\, dx = F_{\\text{mag}} \\, dx"
          },
          {
            "text": "If induced current is $I$ and loop resistance is $R$, electrical energy dissipated as Joule heat in time $dt$ is:",
            "equation": "dH_{\\text{electrical}} = I^2 R \\, dt = \\varepsilon I \\, dt"
          },
          {
            "text": "By energy balance, mechanical work input exactly equals electrical energy generated:",
            "equation": "dW_{\\text{mech}} = dH_{\\text{electrical}}"
          }
        ],
        "specialCases": [
          {
            "title": "Proof by Contradiction:",
            "text": "If Lenz's law were opposite (induced South pole attracted the magnet), the magnet would accelerate spontaneously without external work, generating infinite energy from nothing and violating the First Law of Thermodynamics.",
            "equation": "\\text{Lenz's opposition is mandatory for energy conservation}"
          }
        ],
        "finalFormula": "\\varepsilon = -N\\frac{d\\Phi_B}{dt}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "faraday-lenz",
      "title": "Lenz's Law & Magnet-Coil Induction",
      "examDrawingGuide": [
        "1. Draw circular loop with incoming North pole of bar magnet.",
        "2. Draw counter-clockwise arrow on loop face showing induced current forming 'N' letter with arrowheads at tips.",
        "3. Draw receding North pole with clockwise induced current forming 'S' letter showing attraction opposing motion."
      ]
    },
    "keyPointsAndKeywords": [
      "Magnetic Flux Change Rate (dΦ/dt)",
      "Opposition to Flux Change (Lenz's Law)",
      "Mechanical Work Conversion to Electrical Energy",
      "Joule Heat Dissipation (I²Rt)",
      "Conservation of Energy Principle"
    ],
    "termsGlossary": [
      {
        "symbol": "\\varepsilon",
        "term": "Induced Electromotive Force (EMF)",
        "definition": "Potential difference generated around a closed circuit due to changing magnetic flux, measured in Volts (V)."
      },
      {
        "symbol": "\\Phi_B",
        "term": "Magnetic Flux",
        "definition": "Surface integral of magnetic field passing normally through a loop: $\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}$, measured in Webers (Wb) or $\\text{T}\\cdot\\text{m}^2$."
      },
      {
        "symbol": "N",
        "term": "Number of Turns",
        "definition": "Total number of tightly wound conducting loops in the coil."
      },
      {
        "symbol": "R",
        "term": "Circuit Resistance",
        "definition": "Ohmic resistance of the conducting coil loop, measured in Ohms (Ω)."
      }
    ],
    "markingScheme": [
      "1 Mark: Precise statement of Faraday's first and second laws with formula $\\varepsilon = -d\\Phi/dt$.",
      "1 Mark: Precise statement of Lenz's law.",
      "1 Mark: Complete justification of energy conservation (mechanical work against repulsion converting to electrical energy)."
    ],
    "examinerTips": "In the formula $\\varepsilon = -d\\Phi_B/dt$, state clearly that the negative sign is the mathematical representation of Lenz's law.",
    "modelAnswer": {
      "statement": "Faraday's First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, which lasts as long as the flux continues to change.\nFaraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit: $$\\varepsilon = -\\frac{d\\Phi_B}{dt} \\quad \\left(\\text{for } N \\text{ turns: } \\varepsilon = -N\\frac{d\\Phi_B}{dt}\\right)$$\nLenz's Law: The direction of induced current is always such that it opposes the change in magnetic flux that produces it.\nLenz's law is a direct consequence of the Law of Conservation of Energy: when a magnet is pushed toward a loop, the loop develops an opposing magnetic pole. An external agent must do mechanical work against this magnetic repulsion, and this mechanical work is converted into electrical energy (and ultimately Joule heat).",
      "derivations": [
        {
          "name": "Energy Conservation Proof via Lenz's Law",
          "steps": [
            "Consider a closed conducting loop placed in front of the North pole of a bar magnet. An external agent moves the magnet toward the loop with constant velocity.",
            "By Faraday's law, the rate of change of magnetic flux induces an emf across the loop: \\varepsilon = -\\frac{d\\Phi_B}{dt}",
            "By Lenz's law, the induced current flows counter-clockwise (viewed from the magnet side), establishing an induced North pole on the near face of the loop: \\vec{B}_{\\text{induced}} \\text{ opposes the increase in } \\vec{B}_{\\text{external}}",
            "The induced North pole repels the incoming North pole of the magnet with magnetic force $F_{\\text{mag}}$. The mechanical work done by the external agent moving distance $dx$ against this force is: dW_{\\text{mech}} = F_{\\text{ext}} \\, dx = F_{\\text{mag}} \\, dx",
            "If induced current is $I$ and loop resistance is $R$, electrical energy dissipated as Joule heat in time $dt$ is: dH_{\\text{electrical}} = I^2 R \\, dt = \\varepsilon I \\, dt",
            "By energy balance, mechanical work input exactly equals electrical energy generated: dW_{\\text{mech}} = dH_{\\text{electrical}}",
            "Proof by Contradiction: If Lenz's law were opposite (induced South pole attracted the magnet), the magnet would accelerate spontaneously without external work, generating infinite energy from nothing and violating the First Law of Thermodynamics. \\text{Lenz's opposition is mandatory for energy conservation}"
          ],
          "formula": "\\varepsilon = -N\\frac{d\\Phi_B}{dt}"
        }
      ],
      "diagramNotes": "1. Draw circular loop with incoming North pole of bar magnet.\n2. Draw counter-clockwise arrow on loop face showing induced current forming 'N' letter with arrowheads at tips.\n3. Draw receding North pole with clockwise induced current forming 'S' letter showing attraction opposing motion.",
      "markingScheme": [
        "1 Mark: Precise statement of Faraday's first and second laws with formula $\\varepsilon = -d\\Phi/dt$.",
        "1 Mark: Precise statement of Lenz's law.",
        "1 Mark: Complete justification of energy conservation (mechanical work against repulsion converting to electrical energy)."
      ],
      "examinerTips": "In the formula $\\varepsilon = -d\\Phi_B/dt$, state clearly that the negative sign is the mathematical representation of Lenz's law."
    }
  },
  {
    "id": "imp-phy-4",
    "number": 4,
    "title": "Transformer: Principle, Construction, Working Derivation & Energy Losses",
    "shortLabel": "Transformer (Working & Losses)",
    "chapterId": "phy-ch-7",
    "chapterTitle": "Alternating Current",
    "unit": "Electromagnetic Induction & Alternating Current",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "Very High Frequency (CBSE 2024, 2023, 2020, 2019)",
    "questionPrompt": "(a) State the working principle of an AC transformer.\n(b) With the help of a labeled diagram, explain its construction and derive the relation between primary and secondary voltages and currents.\n(c) Name and explain four major sources of energy loss in a practical transformer, and state how each is minimized.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 7: Alternating Current",
      "section": "Section 7.9: Transformers (pp. 259–262)",
      "equations": "Eqs. (7.45), (7.46), (7.47), (7.48)",
      "figures": "Fig. 7.20",
      "summary": "Principle of mutual induction, voltage ratio derivation, ideal power conservation, and four major real energy dissipation mechanisms."
    },
    "theory": [
      "Principle: An AC transformer works on the principle of Mutual Induction — whenever alternating current in the primary coil changes, it creates a time-varying magnetic flux in the common soft iron core, which links with the secondary coil and induces an alternating emf across it.",
      "A transformer cannot operate on Direct Current (DC) because steady direct current produces constant magnetic flux ($d\\Phi/dt = 0$), resulting in zero induced secondary voltage.",
      "Step-up Transformer: Number of turns in secondary exceeds primary ($N_s > N_p$), stepping up voltage ($V_s > V_p$) while stepping down current ($I_s < I_p$).",
      "Step-down Transformer: Number of turns in primary exceeds secondary ($N_p > N_s$), stepping down voltage ($V_s < V_p$) while stepping up current ($I_s > I_p$).",
      "Four Major Real Energy Losses: In actual transformers, efficiency $\\eta < 100\\%$ because electrical and magnetic energy is converted into heat via four distinct mechanisms: (1) Copper ($I^2R$) Loss in coil windings, (2) Eddy Current Loss in the bulk iron core, (3) Hysteresis Loss in cyclic core magnetization, and (4) Magnetic Flux Leakage.",
      "Minimization Strategies: (1) Copper loss is minimized by using thick copper wires with low resistance; (2) Eddy current loss is minimized by constructing a laminated core with thin, varnish-insulated sheets; (3) Hysteresis loss is minimized by selecting soft iron with a narrow $B\\text{-}H$ loop; (4) Flux leakage is minimized by winding primary and secondary coils coaxially over each other."
    ],
    "derivations": [
      {
        "name": "Working Derivation: Voltage & Current Transformation Ratios",
        "setup": "Consider an ideal transformer having primary coil of $N_p$ turns and secondary coil of $N_s$ turns wound on a laminated soft iron core. Assume zero flux leakage so that same flux $\\Phi$ links each turn of both primary and secondary coils.",
        "steps": [
          {
            "text": "By Faraday's law of induction, alternating flux $\\Phi$ induces back emf in the primary coil:",
            "equation": "\\varepsilon_p = -N_p \\frac{d\\Phi}{dt}"
          },
          {
            "text": "Similarly, the induced emf in the secondary coil is:",
            "equation": "\\varepsilon_s = -N_s \\frac{d\\Phi}{dt}"
          },
          {
            "text": "For an ideal transformer with negligible winding resistance, primary terminal voltage $V_p \\approx \\varepsilon_p$ and open-circuit secondary voltage $V_s \\approx \\varepsilon_s$. Dividing equations gives:",
            "equation": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = K \\quad (\\text{Transformation Ratio})"
          },
          {
            "text": "For an ideal transformer with 100% efficiency, electrical power input equals electrical power output:",
            "equation": "P_{\\text{in}} = P_{\\text{out}} \\quad \\implies \\quad V_p I_p = V_s I_s"
          },
          {
            "text": "Hence, current ratio is inversely proportional to voltage ratio:",
            "equation": "\\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}"
          }
        ],
        "specialCases": [
          {
            "title": "Real Transformer Efficiency:",
            "text": "In practical transformers, efficiency is less than 100% due to core and winding losses:",
            "equation": "\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%"
          }
        ],
        "finalFormula": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = K"
      },
      {
        "name": "Four Major Energy Losses in Practical Transformers & Mitigation Methods",
        "setup": "In an actual transformer, electrical output power is strictly less than input power ($P_{\\text{out}} < P_{\\text{in}}$) because electrical and magnetic energy is dissipated as heat. The four major sources of energy loss and their precise engineering mitigation methods as required in CBSE board exams are:",
        "steps": [
          {
            "text": "1. Copper Loss (Joule Heating / $I^2R$ Loss):\n• Cause: The primary and secondary coils have finite electrical resistance ($R_p$ and $R_s$). When alternating currents $I_p$ and $I_s$ flow through them, electrical power is dissipated as Joule heat ($H = I^2 R t$).\n• Minimization: Use thick copper wires having large cross-sectional area (low resistance) for the winding carrying large current (i.e., the low-voltage winding in step-up or step-down transformers).",
            "equation": "P_{\\text{copper}} = I_p^2 R_p + I_s^2 R_s"
          },
          {
            "text": "2. Eddy Current Loss (Core Iron Heating):\n• Cause: The continuous alternating magnetic flux passing through the bulk metallic iron core induces closed circulating loops of electrical current called eddy currents, producing intense heat according to Joule's law.\n• Minimization: The magnetic core is fabricated from thin laminations (strips) of soft iron insulated from one another by an insulating layer of varnish or lacquer, stacked parallel to the magnetic field. This breaks large eddy current loops into tiny, high-resistance localized paths, drastically reducing current and heat.",
            "equation": "P_{\\text{eddy}} \\propto \\frac{f^2 B_{\\max}^2 t^2}{\\rho} \\quad (\\text{where } t = \\text{lamination thickness, } \\rho = \\text{resistivity})"
          },
          {
            "text": "3. Hysteresis Loss (Magnetic Reversal Loss):\n• Cause: The ferromagnetic core is subjected to rapid cyclic magnetization and demagnetization at the AC mains frequency (50 Hz). In every cycle, work must be done against internal magnetic friction to reorient magnetic domains, dissipating energy proportional to the area of the material's $B\\text{-}H$ hysteresis loop.\n• Minimization: Construct the core using high-permeability ferromagnetic materials that have a narrow hysteresis loop and low coercivity, such as soft iron or silicon alloy steel.",
            "equation": "P_{\\text{hysteresis}} = \\eta_{\\text{Steinmetz}} \\cdot V \\cdot f \\cdot B_{\\max}^{1.6} = \\oint B \\, dH \\quad (\\text{Area of } B\\text{-}H \\text{ loop})"
          },
          {
            "text": "4. Magnetic Flux Leakage:\n• Cause: Not all magnetic flux produced by current in the primary coil passes entirely through the core to link with the secondary coil; a fraction of the flux lines leaks into the surrounding air.\n• Minimization: Wind the primary and secondary coils coaxially one over the other (e.g., secondary winding directly on top of the primary with insulation in between) on the same limb of a closed shell-type core.",
            "equation": "\\Phi_{\\text{leakage}} = \\Phi_p - \\Phi_s \\to 0"
          }
        ],
        "specialCases": [
          {
            "title": "Humming / Magnetostriction Noise Loss:",
            "text": "The mechanical expansion and contraction of the ferromagnetic core under alternating magnetic flux causes audible humming vibrations (magnetostriction). Minimized by tightly clamping core laminations together with epoxy resin."
          }
        ],
        "finalFormula": "\\text{Efficiency: } \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\% < 100\\%"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "transformer",
      "title": "AC Transformer Construction & Flux Linkage",
      "examDrawingGuide": [
        "1. Draw rectangular laminated soft iron core with thin insulated sheets visible.",
        "2. Draw Primary Coil on left limb with $N_p$ turns connected to AC source $V_p \\sim$.",
        "3. Draw Secondary Coil on right limb with $N_s$ turns connected to load resistor $R_L$.",
        "4. Show dashed magnetic flux loop $\\Phi(t)$ circulating through the iron core linking both coils."
      ]
    },
    "keyPointsAndKeywords": [
      "Mutual Induction Principle",
      "Laminated Soft Iron Core",
      "Transformation Ratio (K = Ns/Np)",
      "Eddy Current Losses & Lamination",
      "Copper Loss (I²R)",
      "Hysteresis Loss & Soft Iron Magnetic Retentivity",
      "Flux Leakage"
    ],
    "termsGlossary": [
      {
        "symbol": "N_p, N_s",
        "term": "Primary & Secondary Turns",
        "definition": "Number of tightly wound copper turns in the primary and secondary coils respectively."
      },
      {
        "symbol": "V_p, V_s",
        "term": "Primary & Secondary Voltages",
        "definition": "RMS potential difference across the input primary terminals and output secondary terminals."
      },
      {
        "symbol": "I_p, I_s",
        "term": "Primary & Secondary Currents",
        "definition": "Alternating currents flowing through the primary and secondary circuits."
      },
      {
        "symbol": "K = N_s/N_p",
        "term": "Transformation Ratio",
        "definition": "Ratio of secondary turns to primary turns; $K > 1$ for step-up, $K < 1$ for step-down."
      },
      {
        "symbol": "\\text{Eddy Currents}",
        "term": "Eddy Currents",
        "definition": "Circulating closed loops of induced electric currents in bulk iron cores produced by time-varying magnetic flux, causing thermal energy loss. Minimized by core lamination."
      },
      {
        "symbol": "I^2 R \\text{ Loss}",
        "term": "Copper Loss",
        "definition": "Heat dissipation in transformer windings due to electrical resistance of copper wire ($P = I^2 R$). Minimized using thick copper wires."
      },
      {
        "symbol": "\\text{Hysteresis}",
        "term": "Hysteresis Loss",
        "definition": "Energy dissipated as heat during repeated cyclic magnetization and demagnetization of the ferromagnetic core. Minimized using soft iron."
      },
      {
        "symbol": "\\Phi_{\\text{leakage}}",
        "term": "Magnetic Flux Leakage",
        "definition": "Fraction of primary magnetic flux that escapes through air without linking the secondary turns. Minimized by coaxial winding."
      }
    ],
    "markingScheme": [
      "1 Mark: Principle of mutual induction with explanation.",
      "1.5 Marks: Labeled diagram showing primary, secondary, and laminated core.",
      "1 Mark: Mathematical derivation of voltage and current transformation ratio $V_s/V_p = N_s/N_p = I_p/I_s$.",
      "1.5 Marks: Description of 4 real energy losses (Copper loss, Eddy current loss, Hysteresis loss, Flux leakage) with mitigation methods."
    ],
    "examinerTips": "In explaining energy losses: (1) Copper loss is minimized by thick wires; (2) Eddy current loss is minimized by laminated core; (3) Hysteresis loss is minimized by soft iron (narrow hysteresis loop); (4) Flux leakage is minimized by winding primary and secondary over one another.",
    "modelAnswer": {
      "statement": "Principle: An AC transformer works on the principle of Mutual Induction — whenever alternating current in the primary coil changes, it creates a time-varying magnetic flux in the common soft iron core, which links with the secondary coil and induces an alternating emf across it.\nA transformer cannot operate on Direct Current (DC) because steady direct current produces constant magnetic flux ($d\\Phi/dt = 0$), resulting in zero induced secondary voltage.\nStep-up Transformer: Number of turns in secondary exceeds primary ($N_s > N_p$), stepping up voltage ($V_s > V_p$) while stepping down current ($I_s < I_p$).\nStep-down Transformer: Number of turns in primary exceeds secondary ($N_p > N_s$), stepping down voltage ($V_s < V_p$) while stepping up current ($I_s > I_p$).\n\nFour Major Real Energy Losses & Methods of Minimization:\n1. Copper Loss (I²R heating): Heat generated in primary and secondary copper windings due to finite electrical resistance. Minimized by using thick copper wires (low resistance) for the high-current winding.\n2. Eddy Current Loss: Circulating currents induced in the continuous bulk of the iron core by alternating flux. Minimized by using a laminated soft iron core made of thin, varnish-insulated sheets.\n3. Hysteresis Loss: Energy lost in continuously reversing magnetic dipoles of the core during each AC cycle. Minimized by using soft iron or silicon alloy steel having a narrow B-H hysteresis loop.\n4. Flux Leakage: Primary magnetic flux lines escaping into air without linking secondary turns. Minimized by winding primary and secondary coils coaxially over each other on the same core limb.",
      "derivations": [
        {
          "name": "Working Derivation: Voltage & Current Transformation Ratios",
          "steps": [
            "Consider an ideal transformer having primary coil of $N_p$ turns and secondary coil of $N_s$ turns wound on a laminated soft iron core. Assume zero flux leakage so that same flux $\\Phi$ links each turn of both primary and secondary coils.",
            "By Faraday's law of induction, alternating flux $\\Phi$ induces back emf in the primary coil: \\varepsilon_p = -N_p \\frac{d\\Phi}{dt}",
            "Similarly, the induced emf in the secondary coil is: \\varepsilon_s = -N_s \\frac{d\\Phi}{dt}",
            "For an ideal transformer with negligible winding resistance, primary terminal voltage $V_p \\approx \\varepsilon_p$ and open-circuit secondary voltage $V_s \\approx \\varepsilon_s$. Dividing equations gives: \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = K \\quad (\\text{Transformation Ratio})",
            "For an ideal transformer with 100% efficiency, electrical power input equals electrical power output: P_{\\text{in}} = P_{\\text{out}} \\quad \\implies \\quad V_p I_p = V_s I_s",
            "Hence, current ratio is inversely proportional to voltage ratio: \\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}",
            "Real Transformer Efficiency: In practical transformers, efficiency is less than 100% due to core and winding losses: \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%"
          ],
          "formula": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = K"
        },
        {
          "name": "Four Major Energy Losses & Mitigation Methods",
          "steps": [
            "1. Copper Loss (I²R Heating): Caused by electrical resistance of primary and secondary copper windings. Minimized by using thick copper wires of large cross-section (low resistance) for the high-current winding.",
            "2. Eddy Current Loss: Caused by alternating magnetic flux inducing circulating loops of electric current in the bulk iron core. Minimized by using a laminated soft iron core made of thin insulated sheets stacked parallel to the flux.",
            "3. Hysteresis Loss: Caused by energy dissipated during cyclic magnetization and demagnetization of the core in each AC cycle. Minimized by using soft iron or silicon steel having a narrow B-H hysteresis loop.",
            "4. Flux Leakage: Caused by primary magnetic flux lines leaking into surrounding air without linking secondary turns. Minimized by winding primary and secondary coils coaxially one over the other on the same core limb."
          ],
          "formula": "\\text{Efficiency: } \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% < 100\\%"
        }
      ],
      "diagramNotes": "1. Draw rectangular laminated soft iron core with thin insulated sheets visible.\n2. Draw Primary Coil on left limb with $N_p$ turns connected to AC source $V_p \\sim$.\n3. Draw Secondary Coil on right limb with $N_s$ turns connected to load resistor $R_L$.\n4. Show dashed magnetic flux loop $\\Phi(t)$ circulating through the iron core linking both coils.",
      "markingScheme": [
        "1 Mark: Principle of mutual induction with explanation.",
        "1.5 Marks: Labeled diagram showing primary, secondary, and laminated core.",
        "1 Mark: Mathematical derivation of voltage and current transformation ratio $V_s/V_p = N_s/N_p = I_p/I_s$.",
        "1.5 Marks: Description of 4 real energy losses (Copper loss, Eddy current loss, Hysteresis loss, Flux leakage) with mitigation methods."
      ],
      "examinerTips": "In explaining energy losses: (1) Copper loss is minimized by thick wires; (2) Eddy current loss is minimized by laminated core; (3) Hysteresis loss is minimized by soft iron (narrow hysteresis loop); (4) Flux leakage is minimized by winding primary and secondary over one another."
    }
  },
  {
    "id": "imp-phy-5",
    "number": 5,
    "title": "Moving Coil Galvanometer: Principle, Torque Derivation & Radial Field",
    "shortLabel": "Moving Coil Galvanometer (Torque & Radial Field)",
    "chapterId": "phy-ch-4",
    "chapterTitle": "Moving Charges and Magnetism",
    "unit": "Magnetism",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "Guaranteed Core 5-Mark Question (CBSE 2024 SQP, 2023, 2022, 2020)",
    "questionPrompt": "(a) State the principle of a Moving Coil Galvanometer.\n(b) With the help of a neat diagram, derive the expression for deflecting torque on the coil.\n(c) Explain the function of: (i) Cylindrical soft iron core, and (ii) Radial magnetic field.\n(d) Define current sensitivity and voltage sensitivity.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 4: Moving Charges and Magnetism",
      "section": "Section 4.10: The Moving Coil Galvanometer (pp. 163–165)",
      "equations": "Eqs. (4.40), (4.41), (4.42)",
      "figures": "Figs. 4.24, 4.25",
      "summary": "Torque on rectangular loop in uniform field, role of concave pole pieces in generating radial magnetic field, and sensitivity formulas."
    },
    "theory": [
      "Principle: When a current-carrying coil is placed in an external magnetic field, it experiences a deflecting magnetic torque: $$\\tau_{\\text{def}} = N I A B \\sin\\theta$$",
      "Function of Radial Magnetic Field: Created by concave cylindrical pole pieces and a soft iron core. It ensures that the magnetic field lines are always parallel to the plane of the coil (perpendicular to coil's area vector, $\\theta = 90^\\circ$) at every rotational position, keeping torque maximum and deflection linear: $\\phi \\propto I$.",
      "Function of Soft Iron Core: Being ferromagnetic with high relative permeability ($\\mu_r \\gg 1$), it concentrates and intensifies magnetic flux lines inside the air gap, increasing sensitivity.",
      "Restoring Couple: Provided by the torsion of a phosphor-bronze suspension ribbon or hair-spring, resisting deflection with torque $\\tau_{\\text{rest}} = k \\phi$."
    ],
    "derivations": [
      {
        "name": "Derivation of Deflection & Sensitivity Equations",
        "setup": "Consider a rectangular coil of $N$ turns, length $l$, and breadth $b$ (area $A = l \\cdot b$) carrying steady current $I$, suspended in a radial magnetic field of flux density $B$. Let $k$ be the restoring couple per unit twist of the phosphor-bronze suspension.",
        "steps": [
          {
            "text": "In a radial magnetic field, the plane of the coil is always parallel to field lines $\\vec{B}$, meaning angle between area normal and field is always $\\theta = 90^\\circ$ ($\\sin 90^\\circ = 1$). Deflecting torque is:",
            "equation": "\\tau_{\\text{def}} = N I A B"
          },
          {
            "text": "As the coil rotates through angle $\\phi$, restoring torque developed in the phosphor-bronze spring is:",
            "equation": "\\tau_{\\text{rest}} = k \\cdot \\phi"
          },
          {
            "text": "At rotational mechanical equilibrium, deflecting torque equals restoring torque:",
            "equation": "N I A B = k \\phi"
          },
          {
            "text": "Hence, angular deflection $\\phi$ is directly proportional to current $I$ (linear scale):",
            "equation": "\\phi = \\left(\\frac{N A B}{k}\\right) I \\quad \\implies \\quad \\phi \\propto I"
          },
          {
            "text": "Current Sensitivity $I_s$ is deflection per unit current:",
            "equation": "I_s = \\frac{\\phi}{I} = \\frac{N A B}{k}"
          },
          {
            "text": "Voltage Sensitivity $V_s$ is deflection per unit voltage ($V = I R$):",
            "equation": "V_s = \\frac{\\phi}{V} = \\frac{\\phi}{I R} = \\frac{N A B}{k R}"
          }
        ],
        "specialCases": [
          {
            "title": "Sensitivity Condition:",
            "text": "Increasing number of turns $N$ increases Current Sensitivity $I_s$, but does NOT necessarily increase Voltage Sensitivity $V_s$ because coil resistance $R$ increases proportionally ($R \\propto N$):",
            "equation": "V_s = \\frac{I_s}{R} = \\text{constant}"
          }
        ],
        "finalFormula": "\\phi = \\left(\\frac{N A B}{k}\\right) I, \\quad I_s = \\frac{N A B}{k}, \\quad V_s = \\frac{N A B}{k R}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "galvanometer-torque",
      "title": "Moving Coil Galvanometer & Radial Field",
      "examDrawingGuide": [
        "1. Draw concave cylindrical North and South magnetic pole pieces.",
        "2. Draw central soft iron cylinder core with radial field lines pointing radially toward center.",
        "3. Draw rectangular copper coil suspended between poles by phosphor-bronze strip.",
        "4. Show upper torsion head, lower hair-spring, and pointer moving over linear circular scale."
      ]
    },
    "keyPointsAndKeywords": [
      "Radial Magnetic Field (sinθ = 1 at all angles)",
      "Concave Cylindrical Pole Pieces",
      "Cylindrical Soft Iron Core (High Permeability)",
      "Phosphor-Bronze Suspension (Low Torsion Constant k)",
      "Deflecting Torque τ = NIAB",
      "Restoring Torque τ = kφ",
      "Current Sensitivity (NAB/k)",
      "Voltage Sensitivity (NAB/kR)"
    ],
    "termsGlossary": [
      {
        "symbol": "k",
        "term": "Torsional Constant (Restoring Couple)",
        "definition": "Restoring torque produced per unit twist in the suspension spring/strip, measured in $\\text{N}\\cdot\\text{m/rad}$."
      },
      {
        "symbol": "\\phi",
        "term": "Angular Deflection",
        "definition": "Angle through which the coil rotates, indicated by the pointer on the linear scale."
      },
      {
        "symbol": "I_s",
        "term": "Current Sensitivity",
        "definition": "Deflection produced in the galvanometer when unit current passes through it: $I_s = \\phi/I = NAB/k$, measured in $\\text{rad/A}$ or $\\text{div/A}$."
      },
      {
        "symbol": "V_s",
        "term": "Voltage Sensitivity",
        "definition": "Deflection produced in the galvanometer per unit potential difference applied across its terminals: $V_s = \\phi/V = NAB/(kR)$, measured in $\\text{rad/V}$ or $\\text{div/V}$."
      },
      {
        "symbol": "B",
        "term": "Radial Magnetic Field",
        "definition": "Magnetic field whose lines of force are directed along the radii of cylindrical pole pieces, ensuring $\\vec{B}$ is always parallel to the plane of the coil."
      }
    ],
    "markingScheme": [
      "1 Mark: Statement of principle (torque on current loop in magnetic field).",
      "1.5 Marks: Labeled diagram showing concave poles, core, coil, and suspension.",
      "1.5 Marks: Derivation of $NIAB = k\\phi \\implies \\phi \\propto I$.",
      "1 Mark: Definitions of current and voltage sensitivity with explanations of soft iron core and radial field."
    ],
    "examinerTips": "Common mistake: forgetting to explain WHY the radial field is necessary. State explicitly: 'To ensure deflecting torque remains independent of the angle of rotation, producing a linear scale where deflection is directly proportional to current.'",
    "modelAnswer": {
      "statement": "Principle: When a current-carrying coil is placed in an external magnetic field, it experiences a deflecting magnetic torque: $$\\tau_{\\text{def}} = N I A B \\sin\\theta$$\nFunction of Radial Magnetic Field: Created by concave cylindrical pole pieces and a soft iron core. It ensures that the magnetic field lines are always parallel to the plane of the coil (perpendicular to coil's area vector, $\\theta = 90^\\circ$) at every rotational position, keeping torque maximum and deflection linear: $\\phi \\propto I$.\nFunction of Soft Iron Core: Being ferromagnetic with high relative permeability ($\\mu_r \\gg 1$), it concentrates and intensifies magnetic flux lines inside the air gap, increasing sensitivity.\nRestoring Couple: Provided by the torsion of a phosphor-bronze suspension ribbon or hair-spring, resisting deflection with torque $\\tau_{\\text{rest}} = k \\phi$.",
      "derivations": [
        {
          "name": "Derivation of Deflection & Sensitivity Equations",
          "steps": [
            "Consider a rectangular coil of $N$ turns, length $l$, and breadth $b$ (area $A = l \\cdot b$) carrying steady current $I$, suspended in a radial magnetic field of flux density $B$. Let $k$ be the restoring couple per unit twist of the phosphor-bronze suspension.",
            "In a radial magnetic field, the plane of the coil is always parallel to field lines $\\vec{B}$, meaning angle between area normal and field is always $\\theta = 90^\\circ$ ($\\sin 90^\\circ = 1$). Deflecting torque is: \\tau_{\\text{def}} = N I A B",
            "As the coil rotates through angle $\\phi$, restoring torque developed in the phosphor-bronze spring is: \\tau_{\\text{rest}} = k \\cdot \\phi",
            "At rotational mechanical equilibrium, deflecting torque equals restoring torque: N I A B = k \\phi",
            "Hence, angular deflection $\\phi$ is directly proportional to current $I$ (linear scale): \\phi = \\left(\\frac{N A B}{k}\\right) I \\quad \\implies \\quad \\phi \\propto I",
            "Current Sensitivity $I_s$ is deflection per unit current: I_s = \\frac{\\phi}{I} = \\frac{N A B}{k}",
            "Voltage Sensitivity $V_s$ is deflection per unit voltage ($V = I R$): V_s = \\frac{\\phi}{V} = \\frac{\\phi}{I R} = \\frac{N A B}{k R}",
            "Sensitivity Condition: Increasing number of turns $N$ increases Current Sensitivity $I_s$, but does NOT necessarily increase Voltage Sensitivity $V_s$ because coil resistance $R$ increases proportionally ($R \\propto N$): V_s = \\frac{I_s}{R} = \\text{constant}"
          ],
          "formula": "\\phi = \\left(\\frac{N A B}{k}\\right) I, \\quad I_s = \\frac{N A B}{k}, \\quad V_s = \\frac{N A B}{k R}"
        }
      ],
      "diagramNotes": "1. Draw concave cylindrical North and South magnetic pole pieces.\n2. Draw central soft iron cylinder core with radial field lines pointing radially toward center.\n3. Draw rectangular copper coil suspended between poles by phosphor-bronze strip.\n4. Show upper torsion head, lower hair-spring, and pointer moving over linear circular scale.",
      "markingScheme": [
        "1 Mark: Statement of principle (torque on current loop in magnetic field).",
        "1.5 Marks: Labeled diagram showing concave poles, core, coil, and suspension.",
        "1.5 Marks: Derivation of $NIAB = k\\phi \\implies \\phi \\propto I$.",
        "1 Mark: Definitions of current and voltage sensitivity with explanations of soft iron core and radial field."
      ],
      "examinerTips": "Common mistake: forgetting to explain WHY the radial field is necessary. State explicitly: 'To ensure deflecting torque remains independent of the angle of rotation, producing a linear scale where deflection is directly proportional to current.'"
    }
  },
  {
    "id": "imp-phy-6",
    "number": 6,
    "title": "Electric Flux through Closed Surface Containing an Electric Dipole",
    "shortLabel": "Electric Flux & Dipole (Gauss Law)",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "2 Marks",
    "marksNum": 2,
    "category": "Conceptual & Derivation",
    "frequency": "High Frequency Core Conceptual (CBSE 2024 SQP Q1, 2023, 2020)",
    "questionPrompt": "(a) Define electric flux. Write its SI unit.\n(b) An electric dipole of dipole moment p is enclosed by a closed Gaussian surface S. What is the total electric flux emerging through the surface? Does the electric field on the surface necessarily vanish?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Sections 1.10 & 1.14 (pp. 25–27, 33–35)",
      "equations": "Eqs. (1.28), (1.31)",
      "figures": "Fig. 1.25",
      "summary": "Definition of electric flux, dipole charge balance (+q and -q summing to zero), and distinction between net flux and local field intensity."
    },
    "theory": [
      "Electric Flux $\\Phi_E$ is defined as the total number of electric field lines crossing normally through a given surface area. Mathematically: $$\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}$$",
      "SI unit of electric flux is $\\text{N}\\cdot\\text{m}^2\\text{C}^{-1}$ (or $\\text{V}\\cdot\\text{m}$). It is a scalar quantity.",
      "An electric dipole consists of two equal and opposite point charges ($+q$ and $-q$). Hence, the net enclosed charge inside any closed surface containing the entire dipole is identically zero: $$q_{\\text{enclosed}} = +q + (-q) = 0$$",
      "Crucial Exam Concept: Although the total electric flux through the enclosing surface is zero, the electric field $\\vec{E}$ at individual points on the surface is NOT zero. Field lines originate at $+q$, pass through the surface, and re-enter to terminate at $-q$."
    ],
    "derivations": [
      {
        "name": "Evaluation of Total Flux Using Gauss's Law",
        "setup": "Consider a closed Gaussian surface $S$ of arbitrary shape enclosing an electric dipole consisting of point charges $+q$ and $-q$ separated by distance $2a$.",
        "steps": [
          {
            "text": "By Gauss's Law, the total outward electric flux through any closed surface is proportional to the net charge enclosed:",
            "equation": "\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}"
          },
          {
            "text": "The algebraic sum of all charges enclosed by the Gaussian surface is:",
            "equation": "q_{\\text{enclosed}} = (+q) + (-q) = 0"
          },
          {
            "text": "Substituting the enclosed charge into Gauss's Law:",
            "equation": "\\Phi_E = \\frac{0}{\\varepsilon_0} = 0"
          },
          {
            "text": "Physical interpretation: The number of electric field lines leaving the surface from $+q$ equals the number of field lines entering the surface to terminate on $-q$. Hence, net flux vanishes:",
            "equation": "\\Phi_{\\text{out}} - \\Phi_{\\text{in}} = 0"
          }
        ],
        "specialCases": [
          {
            "title": "Local Electric Field vs Net Flux:",
            "text": "Net flux is zero, but electric field at any point on the surface is finite due to proximity to individual charges:",
            "equation": "\\vec{E} \\neq 0 \\quad \\text{even though} \\quad \\oint \\vec{E} \\cdot d\\vec{A} = 0"
          }
        ],
        "finalFormula": "\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = 0, \\quad \\vec{E}_{\\text{surface}} \\neq 0"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "electric-flux-dipole",
      "title": "Closed Gaussian Surface Enclosing an Electric Dipole",
      "examDrawingGuide": [
        "1. Draw arbitrary closed boundary representing Gaussian surface $S$.",
        "2. Place $+q$ and $-q$ inside separated by distance $2a$.",
        "3. Draw curved electric field lines emerging outwards from $+q$ piercing through the surface.",
        "4. Draw field lines looping back and entering through the surface to terminate on $-q$, clearly showing equal inward and outward flux."
      ]
    },
    "keyPointsAndKeywords": [
      "Definition of Electric Flux (Φ = ∫ E · dA)",
      "SI Unit (N·m²/C or V·m)",
      "Net Enclosed Charge of Dipole = 0",
      "Gauss's Law Application (Φ = 0)",
      "Local Electric Field E ≠ 0 on Surface",
      "Inward Flux Cancels Outward Flux"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Phi_E",
        "term": "Electric Flux",
        "definition": "Surface integral of electric field over a closed surface, scalar quantity measured in $\\text{N}\\cdot\\text{m}^2/\\text{C}$."
      },
      {
        "symbol": "\\vec{p}",
        "term": "Electric Dipole Moment",
        "definition": "Vector pointing from $-q$ to $+q$ of magnitude $p = q(2a)$, measured in Coulomb-metres ($\\text{C}\\cdot\\text{m}$)."
      },
      {
        "symbol": "q_{\\text{enclosed}}",
        "term": "Net Enclosed Charge",
        "definition": "Algebraic sum of all discrete charges bounded inside the chosen Gaussian surface."
      },
      {
        "symbol": "\\varepsilon_0",
        "term": "Permittivity of Free Space",
        "definition": "Constant of electrostatics ($8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of electric flux and correct SI unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$ or $\\text{V}\\cdot\\text{m}$).",
      "0.5 Mark: Proof that total flux $\\Phi_E = 0$ using Gauss's law since $q_{\\text{net}} = 0$.",
      "0.5 Mark: Explicit clarification that $\\vec{E} \\neq 0$ on the surface."
    ],
    "examinerTips": "Do NOT write that electric field is zero on the surface! Only the total integral (flux) is zero because lines entering equal lines leaving.",
    "modelAnswer": {
      "statement": "Electric Flux $\\Phi_E$ is defined as the total number of electric field lines crossing normally through a given surface area. Mathematically: $$\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}$$\nSI unit of electric flux is $\\text{N}\\cdot\\text{m}^2\\text{C}^{-1}$ (or $\\text{V}\\cdot\\text{m}$). It is a scalar quantity.\nAn electric dipole consists of two equal and opposite point charges ($+q$ and $-q$). Hence, the net enclosed charge inside any closed surface containing the entire dipole is identically zero: $$q_{\\text{enclosed}} = +q + (-q) = 0$$\nCrucial Exam Concept: Although the total electric flux through the enclosing surface is zero, the electric field $\\vec{E}$ at individual points on the surface is NOT zero. Field lines originate at $+q$, pass through the surface, and re-enter to terminate at $-q$.",
      "derivations": [
        {
          "name": "Evaluation of Total Flux Using Gauss's Law",
          "steps": [
            "Consider a closed Gaussian surface $S$ of arbitrary shape enclosing an electric dipole consisting of point charges $+q$ and $-q$ separated by distance $2a$.",
            "By Gauss's Law, the total outward electric flux through any closed surface is proportional to the net charge enclosed: \\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}",
            "The algebraic sum of all charges enclosed by the Gaussian surface is: q_{\\text{enclosed}} = (+q) + (-q) = 0",
            "Substituting the enclosed charge into Gauss's Law: \\Phi_E = \\frac{0}{\\varepsilon_0} = 0",
            "Physical interpretation: The number of electric field lines leaving the surface from $+q$ equals the number of field lines entering the surface to terminate on $-q$. Hence, net flux vanishes: \\Phi_{\\text{out}} - \\Phi_{\\text{in}} = 0",
            "Local Electric Field vs Net Flux: Net flux is zero, but electric field at any point on the surface is finite due to proximity to individual charges: \\vec{E} \\neq 0 \\quad \\text{even though} \\quad \\oint \\vec{E} \\cdot d\\vec{A} = 0"
          ],
          "formula": "\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = 0, \\quad \\vec{E}_{\\text{surface}} \\neq 0"
        }
      ],
      "diagramNotes": "1. Draw arbitrary closed boundary representing Gaussian surface $S$.\n2. Place $+q$ and $-q$ inside separated by distance $2a$.\n3. Draw curved electric field lines emerging outwards from $+q$ piercing through the surface.\n4. Draw field lines looping back and entering through the surface to terminate on $-q$, clearly showing equal inward and outward flux.",
      "markingScheme": [
        "1 Mark: Definition of electric flux and correct SI unit ($\\text{N}\\cdot\\text{m}^2/\\text{C}$ or $\\text{V}\\cdot\\text{m}$).",
        "0.5 Mark: Proof that total flux $\\Phi_E = 0$ using Gauss's law since $q_{\\text{net}} = 0$.",
        "0.5 Mark: Explicit clarification that $\\vec{E} \\neq 0$ on the surface."
      ],
      "examinerTips": "Do NOT write that electric field is zero on the surface! Only the total integral (flux) is zero because lines entering equal lines leaving."
    }
  },
  {
    "id": "imp-phy-7",
    "number": 7,
    "title": "Equipotential Surfaces: Definition, Properties & Potential Gradient Relation",
    "shortLabel": "Equipotential Surfaces & E = -dV/dr",
    "chapterId": "phy-ch-2",
    "chapterTitle": "Electrostatic Potential and Capacitance",
    "unit": "Electrostatics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation & Conceptual",
    "frequency": "Guaranteed Core Question (CBSE 2024, 2023, 2022, 2020)",
    "questionPrompt": "(a) What is an equipotential surface? State its two important properties.\n(b) Prove that electric field is always perpendicular to the equipotential surface at every point.\n(c) Derive the relation between electric field and electrostatic potential: E = -dV/dr.\n(d) Sketch equipotential surfaces for: (i) A single positive point charge, and (ii) A uniform electric field.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 2: Electrostatic Potential and Capacitance",
      "section": "Sections 2.4 & 2.5 (pp. 60–63)",
      "equations": "Eqs. (2.19), (2.20)",
      "figures": "Figs. 2.9, 2.10, 2.11",
      "summary": "Definition of equipotential surface, zero work theorem, normal field vector proof, and differential relation between field and potential."
    },
    "theory": [
      "An Equipotential Surface is any geometric surface that has the same constant electrostatic potential at all points ($V = \\text{constant}$).",
      "Property 1: No work is done in moving a test charge between any two points on an equipotential surface: $$W = q_0(V_B - V_A) = q_0(0) = 0$$",
      "Property 2: Electric field lines are always mutually perpendicular (normal) to the equipotential surface at every point.",
      "Property 3: Two equipotential surfaces can never intersect each other (otherwise two distinct potentials would exist at the line of intersection).",
      "Property 4: Equipotential surfaces are crowded closer together in regions of strong electric field and spaced wider apart in regions of weak field."
    ],
    "derivations": [
      {
        "name": "Proof 1: Electric Field is Perpendicular to Equipotential Surface",
        "setup": "Consider two infinitesimally close points $A$ and $B$ lying on the same equipotential surface, separated by displacement vector $d\\vec{r}$. Let electric field at this location be $\\vec{E}$.",
        "steps": [
          {
            "text": "Work done by electrostatic force in displacing test charge $q_0$ from $A$ to $B$ is:",
            "equation": "dW = \\vec{F} \\cdot d\\vec{r} = q_0 (\\vec{E} \\cdot d\\vec{r})"
          },
          {
            "text": "By definition of electrostatic potential difference:",
            "equation": "dW = -q_0 \\, dV"
          },
          {
            "text": "Since points $A$ and $B$ lie on the same equipotential surface, potential difference vanishes ($dV = V_B - V_A = 0$):",
            "equation": "q_0 (\\vec{E} \\cdot d\\vec{r}) = 0 \\quad \\implies \\quad \\vec{E} \\cdot d\\vec{r} = 0"
          },
          {
            "text": "Expanding the scalar dot product:",
            "equation": "E \\, dr \\cos\\theta = 0 \\quad (\\text{since } E \\neq 0 \\text{ and } dr \\neq 0 \\implies \\cos\\theta = 0)"
          },
          {
            "text": "Hence, angle between electric field and displacement along the surface is $90^\\circ$:",
            "equation": "\\theta = 90^\\circ \\quad \\implies \\quad \\vec{E} \\perp d\\vec{r}"
          }
        ],
        "specialCases": [
          {
            "title": "Physical Conclusion:",
            "text": "Electric field has zero tangential component along an equipotential surface; it is entirely directed along the surface normal:",
            "equation": "E_{\\parallel} = 0, \\quad E_{\\perp} = |\\vec{E}|"
          }
        ],
        "finalFormula": "\\vec{E} \\perp \\text{Equipotential Surface}"
      },
      {
        "name": "Proof 2: Potential Gradient Relation (E = -dV/dr)",
        "setup": "Consider two parallel equipotential surfaces $A$ and $B$ separated by small normal perpendicular distance $dr$, having potentials $V$ and $V - dV$ respectively.",
        "steps": [
          {
            "text": "Work done in moving unit positive charge ($q_0 = +1$) from surface $B$ to surface $A$ against the electric field $\\vec{E}$ is:",
            "equation": "dW = |\\vec{F}_{\\text{ext}}| \\, dr = E \\, dr"
          },
          {
            "text": "By definition, work done per unit positive charge equals the potential difference between the surfaces:",
            "equation": "dW = V_A - V_B = V - (V - dV) = dV"
          },
          {
            "text": "Equating mechanical work to potential increase along the field direction (field points towards decreasing potential):",
            "equation": "-E \\, dr = dV"
          },
          {
            "text": "Hence, electric field magnitude equals the negative spatial derivative of potential:",
            "equation": "E = -\\frac{dV}{dr}"
          }
        ],
        "specialCases": [
          {
            "title": "Physical Meaning of Negative Sign:",
            "text": "The negative sign indicates that electric field $\\vec{E}$ points in the direction of maximum rate of decrease of electrostatic potential:",
            "equation": "\\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial r}\\hat{r}"
          }
        ],
        "finalFormula": "E = -\\frac{dV}{dr}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "equipotential-surfaces",
      "title": "Equipotential Surfaces & Normal Field Lines",
      "examDrawingGuide": [
        "1. Test Charge Travelling Between Two Surfaces (NCERT Fig. 2.10): Draw two parallel planes A (potential V) and B (potential V - dV) separated by normal distance dr; show downward field E⃗ perpendicular to surfaces, and test charge +q₀ displaced against E⃗.",
        "2. Proof that E⃗ ⟂ Surface: Draw single equipotential surface S with displacement dr⃗ connecting points A and B, electric field E⃗ at angle θ, and prove θ = 90° so tangential component E_∥ = 0.",
        "3. Positive Point Charge: Draw concentric spherical circles around charge +q with increasing radial spacing and outward field arrows.",
        "4. Uniform Electric Field: Draw equidistant parallel planar sheets perpendicular to horizontal field lines."
      ]
    },
    "keyPointsAndKeywords": [
      "Constant Potential Surface (V = const)",
      "Zero Work Done (W = 0)",
      "Normal Orientation of Field (E ⟂ surface)",
      "Non-Intersecting Nature",
      "Potential Gradient (E = -dV/dr)",
      "Negative Sign Significance (Direction of Decreasing Potential)"
    ],
    "termsGlossary": [
      {
        "symbol": "V",
        "term": "Electrostatic Potential",
        "definition": "Work done in bringing unit positive test charge from infinity to that point, measured in Volts (V) or J/C."
      },
      {
        "symbol": "\\frac{dV}{dr}",
        "term": "Potential Gradient",
        "definition": "Rate of change of potential with respect to spatial displacement, measured in $\\text{V/m}$."
      },
      {
        "symbol": "d\\vec{r}",
        "term": "Displacement Vector",
        "definition": "Infinitesimal vector separating two adjacent points on or between equipotential surfaces."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of equipotential surface and two properties.",
      "1 Mark: Derivation showing $W = q_0(\\vec{E}\\cdot d\\vec{r}) = 0 \\implies \\vec{E} \\perp d\\vec{r}$.",
      "1 Mark: Derivation of $E = -dV/dr$ and sketches for point charge and uniform field."
    ],
    "examinerTips": "In diagrams, ensure field lines are explicitly marked with perpendicular symbols ($90^\\circ$) at the intersection with equipotential surfaces.",
    "modelAnswer": {
      "statement": "An Equipotential Surface is any geometric surface that has the same constant electrostatic potential at all points ($V = \\text{constant}$).\nProperty 1: No work is done in moving a test charge between any two points on an equipotential surface: $$W = q_0(V_B - V_A) = q_0(0) = 0$$\nProperty 2: Electric field lines are always mutually perpendicular (normal) to the equipotential surface at every point.\nProperty 3: Two equipotential surfaces can never intersect each other (otherwise two distinct potentials would exist at the line of intersection).\nProperty 4: Equipotential surfaces are crowded closer together in regions of strong electric field and spaced wider apart in regions of weak field.",
      "derivations": [
        {
          "name": "Proof 1: Electric Field is Perpendicular to Equipotential Surface",
          "steps": [
            "Consider two infinitesimally close points $A$ and $B$ lying on the same equipotential surface, separated by displacement vector $d\\vec{r}$. Let electric field at this location be $\\vec{E}$.",
            "Work done by electrostatic force in displacing test charge $q_0$ from $A$ to $B$ is: dW = \\vec{F} \\cdot d\\vec{r} = q_0 (\\vec{E} \\cdot d\\vec{r})",
            "By definition of electrostatic potential difference: dW = -q_0 \\, dV",
            "Since points $A$ and $B$ lie on the same equipotential surface, potential difference vanishes ($dV = V_B - V_A = 0$): q_0 (\\vec{E} \\cdot d\\vec{r}) = 0 \\quad \\implies \\quad \\vec{E} \\cdot d\\vec{r} = 0",
            "Expanding the scalar dot product: E \\, dr \\cos\\theta = 0 \\quad (\\text{since } E \\neq 0 \\text{ and } dr \\neq 0 \\implies \\cos\\theta = 0)",
            "Hence, angle between electric field and displacement along the surface is $90^\\circ$: \\theta = 90^\\circ \\quad \\implies \\quad \\vec{E} \\perp d\\vec{r}",
            "Physical Conclusion: Electric field has zero tangential component along an equipotential surface; it is entirely directed along the surface normal: E_{\\parallel} = 0, \\quad E_{\\perp} = |\\vec{E}|"
          ],
          "formula": "\\vec{E} \\perp \\text{Equipotential Surface}"
        },
        {
          "name": "Proof 2: Potential Gradient Relation (E = -dV/dr)",
          "steps": [
            "Consider two parallel equipotential surfaces $A$ and $B$ separated by small normal perpendicular distance $dr$, having potentials $V$ and $V - dV$ respectively.",
            "Work done in moving unit positive charge ($q_0 = +1$) from surface $B$ to surface $A$ against the electric field $\\vec{E}$ is: dW = |\\vec{F}_{\\text{ext}}| \\, dr = E \\, dr",
            "By definition, work done per unit positive charge equals the potential difference between the surfaces: dW = V_A - V_B = V - (V - dV) = dV",
            "Equating mechanical work to potential increase along the field direction (field points towards decreasing potential): -E \\, dr = dV",
            "Hence, electric field magnitude equals the negative spatial derivative of potential: E = -\\frac{dV}{dr}",
            "Physical Meaning of Negative Sign: The negative sign indicates that electric field $\\vec{E}$ points in the direction of maximum rate of decrease of electrostatic potential: \\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial r}\\hat{r}"
          ],
          "formula": "E = -\\frac{dV}{dr}"
        }
      ],
      "diagramNotes": "1. Positive Point Charge: Draw concentric spherical circles around charge $+q$; show spacing increasing with distance ($r$); draw radial outward field lines perpendicular to circles.\n2. Uniform Electric Field: Draw parallel equidistant vertical lines for field $\\vec{E}$; draw parallel equidistant planar sheets perpendicular to field lines.",
      "markingScheme": [
        "1 Mark: Definition of equipotential surface and two properties.",
        "1 Mark: Derivation showing $W = q_0(\\vec{E}\\cdot d\\vec{r}) = 0 \\implies \\vec{E} \\perp d\\vec{r}$.",
        "1 Mark: Derivation of $E = -dV/dr$ and sketches for point charge and uniform field."
      ],
      "examinerTips": "In diagrams, ensure field lines are explicitly marked with perpendicular symbols ($90^\\circ$) at the intersection with equipotential surfaces."
    }
  },
  {
    "id": "imp-phy-8",
    "number": 8,
    "title": "Electric Field Due to a Point Charge (Derivation & Superposition)",
    "shortLabel": "Point Charge Field & Superposition",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency Foundation Question (CBSE 2024, 2023, 2021, 2019)",
    "questionPrompt": "(a) Define electric field intensity at a point. Write its SI unit.\n(b) Derive the expression for electric field intensity at distance r from an isolated point charge q placed in vacuum.\n(c) State the principle of superposition of electric fields for a system of n discrete charges.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Sections 1.8 & 1.9 (pp. 18–23)",
      "equations": "Eqs. (1.6), (1.8), (1.9)",
      "figures": "Figs. 1.13, 1.14",
      "summary": "Coulomb interaction with test charge, definition of electric field as force per unit charge, and vector sum formulation."
    },
    "theory": [
      "Electric Field Intensity $\\vec{E}$ at a point in space is defined as the electrostatic force experienced per unit positive test charge placed at that point: $$\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0}$$",
      "The test charge $q_0$ must be vanishingly small ($q_0 \\to 0$) so that its presence does not distort the source charge distribution.",
      "SI unit of electric field intensity is $\\text{N/C}$ (Newtons per Coulomb) or $\\text{V/m}$ (Volts per metre). It is a vector quantity.",
      "Direction: Radially outward away from positive source charge ($+q$), and radially inward towards negative source charge ($-q$)."
    ],
    "derivations": [
      {
        "name": "Derivation of Electric Field of an Isolated Point Charge",
        "setup": "Consider an isolated point charge $+q$ situated at origin $O$ in vacuum. Let $P$ be an arbitrary field point at position vector $\\vec{r}$ ($|\\vec{r}| = r$). Place an infinitesimal positive test charge $q_0$ at $P$.",
        "steps": [
          {
            "text": "By Coulomb's Law, the electrostatic force $\\vec{F}$ exerted by source charge $q$ on test charge $q_0$ is:",
            "equation": "\\vec{F} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r}"
          },
          {
            "text": "where $\\hat{r} = \\vec{r}/r$ is the unit vector directed radially outward from source charge $O$ toward field point $P$.",
            "equation": "\\hat{r} = \\frac{\\vec{r}}{|\\vec{r}|}"
          },
          {
            "text": "By definition, the electric field intensity $\\vec{E}$ at point $P$ is the force per unit test charge:",
            "equation": "\\vec{E} = \\frac{\\vec{F}}{q_0} = \\frac{1}{q_0} \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r} \\right)"
          },
          {
            "text": "Canceling the test charge $q_0$ yields the vector electric field expression:",
            "equation": "\\vec{E} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\hat{r}"
          },
          {
            "text": "The scalar magnitude of the electric field depends strictly on radial distance $r$:",
            "equation": "E = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\quad \\implies \\quad E \\propto \\frac{1}{r^2}"
          }
        ],
        "specialCases": [
          {
            "title": "Superposition Principle for n Charges:",
            "text": "The resultant field due to a system of discrete charges $q_1, q_2, \\dots, q_n$ is the vector sum of individual fields:",
            "equation": "\\vec{E}_{\\text{total}} = \\sum_{i=1}^n \\vec{E}_i = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^n \\frac{q_i}{r_i^2}\\hat{r}_i"
          }
        ],
        "finalFormula": "\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}\\hat{r}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "point-charge-field",
      "title": "Radial Field of a Point Charge",
      "examDrawingGuide": [
        "1. Draw source charge $+q$ at origin $O$.",
        "2. Mark field point $P$ at distance $r$ along position vector $\\vec{r}$.",
        "3. Draw test charge $q_0$ at $P$ and show force vector $\\vec{F}$ pointing along radial unit vector $\\hat{r}$.",
        "4. Draw radially diverging field vectors $\\vec{E}$ around $+q$ with lengths diminishing as $1/r^2$."
      ]
    },
    "keyPointsAndKeywords": [
      "Force per Unit Test Charge (E = F/q₀)",
      "Vanishing Test Charge Condition (q₀ → 0)",
      "Inverse Square Law (E ∝ 1/r²)",
      "Spherical Symmetry of Field",
      "Vector Superposition Principle"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{E}",
        "term": "Electric Field Intensity",
        "definition": "Electrostatic force per unit positive charge, measured in N/C or V/m."
      },
      {
        "symbol": "q_0",
        "term": "Test Charge",
        "definition": "Vanishingly small positive charge used to probe the electrostatic field without perturbing it."
      },
      {
        "symbol": "\\hat{r}",
        "term": "Radial Unit Vector",
        "definition": "Dimensionless unit vector pointing along the line joining source charge to field point."
      },
      {
        "symbol": "\\varepsilon_0",
        "term": "Permittivity of Free Space",
        "definition": "Vacuum electrical permittivity constant ($8.854 \\times 10^{-12} \\text{ C}^2/\\text{N}\\cdot\\text{m}^2$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of electric field intensity and limit form with SI units.",
      "1.5 Marks: Derivation from Coulomb's law showing cancellation of test charge $q_0$.",
      "0.5 Mark: Statement and mathematical formulation of the superposition principle."
    ],
    "examinerTips": "Remember to state why $q_0 \\to 0$: 'So that the test charge does not disturb the position of the source charge distribution.'",
    "modelAnswer": {
      "statement": "Electric Field Intensity $\\vec{E}$ at a point in space is defined as the electrostatic force experienced per unit positive test charge placed at that point: $$\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0}$$\nThe test charge $q_0$ must be vanishingly small ($q_0 \\to 0$) so that its presence does not distort the source charge distribution.\nSI unit of electric field intensity is $\\text{N/C}$ (Newtons per Coulomb) or $\\text{V/m}$ (Volts per metre). It is a vector quantity.\nDirection: Radially outward away from positive source charge ($+q$), and radially inward towards negative source charge ($-q$).",
      "derivations": [
        {
          "name": "Derivation of Electric Field of an Isolated Point Charge",
          "steps": [
            "Consider an isolated point charge $+q$ situated at origin $O$ in vacuum. Let $P$ be an arbitrary field point at position vector $\\vec{r}$ ($|\\vec{r}| = r$). Place an infinitesimal positive test charge $q_0$ at $P$.",
            "By Coulomb's Law, the electrostatic force $\\vec{F}$ exerted by source charge $q$ on test charge $q_0$ is: \\vec{F} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r}",
            "where $\\hat{r} = \\vec{r}/r$ is the unit vector directed radially outward from source charge $O$ toward field point $P$. \\hat{r} = \\frac{\\vec{r}}{|\\vec{r}|}",
            "By definition, the electric field intensity $\\vec{E}$ at point $P$ is the force per unit test charge: \\vec{E} = \\frac{\\vec{F}}{q_0} = \\frac{1}{q_0} \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q \\, q_0}{r^2} \\hat{r} \\right)",
            "Canceling the test charge $q_0$ yields the vector electric field expression: \\vec{E} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\hat{r}",
            "The scalar magnitude of the electric field depends strictly on radial distance $r$: E = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2} \\quad \\implies \\quad E \\propto \\frac{1}{r^2}",
            "Superposition Principle for n Charges: The resultant field due to a system of discrete charges $q_1, q_2, \\dots, q_n$ is the vector sum of individual fields: \\vec{E}_{\\text{total}} = \\sum_{i=1}^n \\vec{E}_i = \\frac{1}{4\\pi\\varepsilon_0} \\sum_{i=1}^n \\frac{q_i}{r_i^2}\\hat{r}_i"
          ],
          "formula": "\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}\\hat{r}"
        }
      ],
      "diagramNotes": "1. Draw source charge $+q$ at origin $O$.\n2. Mark field point $P$ at distance $r$ along position vector $\\vec{r}$.\n3. Draw test charge $q_0$ at $P$ and show force vector $\\vec{F}$ pointing along radial unit vector $\\hat{r}$.\n4. Draw radially diverging field vectors $\\vec{E}$ around $+q$ with lengths diminishing as $1/r^2$.",
      "markingScheme": [
        "1 Mark: Definition of electric field intensity and limit form with SI units.",
        "1.5 Marks: Derivation from Coulomb's law showing cancellation of test charge $q_0$.",
        "0.5 Mark: Statement and mathematical formulation of the superposition principle."
      ],
      "examinerTips": "Remember to state why $q_0 \\to 0$: 'So that the test charge does not disturb the position of the source charge distribution.'"
    }
  },
  {
    "id": "imp-phy-9",
    "number": 9,
    "title": "Properties of Electric Field Lines & Why They Never Intersect",
    "shortLabel": "Electric Field Lines & Non-Intersection",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Conceptual Proof",
    "frequency": "Core CBSE Conceptual Question (CBSE 2024, 2023, 2020, 2018)",
    "questionPrompt": "(a) What is an electric field line? State four characteristic properties of electric field lines.\n(b) Prove that two electric field lines can never intersect each other.\n(c) Why do electrostatic field lines never form closed loops?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Section 1.9: Electric Field Lines (pp. 23–26)",
      "equations": "Conceptual geometry",
      "figures": "Figs. 1.15, 1.16, 1.17",
      "summary": "Visual geometric representation of electric fields, tangent rule for direction, non-intersection proof, and conservative nature."
    },
    "theory": [
      "An Electric Field Line is a continuous curve drawn in an electric field such that the tangent to it at any point gives the direction of electric field intensity at that point.",
      "Property 1: Field lines originate from positive charges ($+q$) and terminate at negative charges ($-q$). For an isolated single charge, they extend to or from infinity.",
      "Property 2: The tangent drawn at any point on the field line gives the unambiguous direction of the electric field vector $\\vec{E}$ at that location.",
      "Property 3: Two electric field lines can NEVER intersect each other.",
      "Property 4: Electrostatic field lines never form closed continuous loops because electrostatic fields are conservative in nature ($$\\oint \\vec{E} \\cdot d\\vec{l} = 0$$).",
      "Property 5: The relative density of field lines (number of lines per unit cross-sectional area) is proportional to the magnitude of the electric field."
    ],
    "derivations": [
      {
        "name": "Rigorous Proof: Non-Intersection of Electric Field Lines",
        "setup": "We prove by contradiction (reductio ad absurdum). Suppose two electric field lines $L_1$ and $L_2$ intersect at a common spatial point $P$.",
        "steps": [
          {
            "text": "By definition, the tangent to a field line represents the direction of the resultant electric field vector $\\vec{E}$ at that point.",
            "equation": "\\vec{E} \\parallel \\text{Tangent to Field Line}"
          },
          {
            "text": "Since curve $L_1$ passes through point $P$, we can draw tangent $T_1$ representing electric field direction $\\vec{E}_1$.",
            "equation": "\\vec{E}_1 \\text{ along tangent } T_1"
          },
          {
            "text": "Simultaneously, curve $L_2$ passes through the same point $P$, so we can draw a distinct tangent $T_2$ representing field direction $\\vec{E}_2$.",
            "equation": "\\vec{E}_2 \\text{ along tangent } T_2"
          },
          {
            "text": "This implies that at the single point $P$, the electric field has TWO different directions simultaneously:",
            "equation": "\\vec{E}(P) = \\vec{E}_1 \\quad \\text{and} \\quad \\vec{E}(P) = \\vec{E}_2 \\quad (T_1 \\neq T_2)"
          },
          {
            "text": "This is physically impossible because at any given point in space, there can only be ONE unique resultant electric field vector. Hence, two field lines can never cross:",
            "equation": "\\text{Contradiction} \\implies \\text{Field lines cannot intersect}"
          }
        ],
        "specialCases": [
          {
            "title": "Why No Closed Loops?",
            "text": "If field lines formed closed loops, work done in moving a test charge around the closed loop would be non-zero, violating the conservative nature of electrostatic forces:",
            "equation": "\\oint \\vec{E} \\cdot d\\vec{l} = 0 \\quad (\\text{Conservative Field})"
          }
        ],
        "finalFormula": "\\text{Two field lines cannot intersect: Resultant } \\vec{E} \\text{ is uniquely defined}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "field-lines-properties",
      "title": "Electric Field Lines: Properties & Contradiction Geometry",
      "examDrawingGuide": [
        "1. Draw hypothetical intersection of two curved field lines at point $P$.",
        "2. Draw two divergent tangent vectors $T_1$ and $T_2$ at point $P$ and label with a prominent 'Contradiction: Two Directions' callout.",
        "3. Draw correct field patterns for: (i) Isolated positive charge (radial spokes outward); (ii) Dipole (smooth curves from $+q$ to $-q$)."
      ]
    },
    "keyPointsAndKeywords": [
      "Tangent Gives Direction of Field",
      "Proof by Contradiction",
      "Uniqueness of Resultant Field Vector",
      "Conservative Electrostatic Field",
      "No Closed Loops (∮ E · dl = 0)",
      "Field Line Density Proportional to Magnitude"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{E}",
        "term": "Resultant Electric Field",
        "definition": "Unique net electrostatic force per unit charge at a given spatial point."
      },
      {
        "symbol": "T_1, T_2",
        "term": "Tangent Vectors",
        "definition": "Geometric tangents indicating instantaneous direction of the field curve."
      },
      {
        "symbol": "\\oint \\vec{E}\\cdot d\\vec{l}",
        "term": "Circulation Integral",
        "definition": "Work done per unit charge around a closed contour, identically zero for static conservative fields."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of electric field lines and two properties.",
      "1 Mark: Complete contradiction proof explaining why two tangents cannot exist at one point.",
      "1 Mark: Justification for why field lines cannot form closed loops (conservative nature)."
    ],
    "examinerTips": "In your answer, use the exact phrase: 'A point cannot have two directions of resultant electric field at the same time.'",
    "modelAnswer": {
      "statement": "An Electric Field Line is a continuous curve drawn in an electric field such that the tangent to it at any point gives the direction of electric field intensity at that point.\nProperty 1: Field lines originate from positive charges ($+q$) and terminate at negative charges ($-q$). For an isolated single charge, they extend to or from infinity.\nProperty 2: The tangent drawn at any point on the field line gives the unambiguous direction of the electric field vector $\\vec{E}$ at that location.\nProperty 3: Two electric field lines can NEVER intersect each other.\nProperty 4: Electrostatic field lines never form closed continuous loops because electrostatic fields are conservative in nature ($$\\oint \\vec{E} \\cdot d\\vec{l} = 0$$).\nProperty 5: The relative density of field lines (number of lines per unit cross-sectional area) is proportional to the magnitude of the electric field.",
      "derivations": [
        {
          "name": "Rigorous Proof: Non-Intersection of Electric Field Lines",
          "steps": [
            "We prove by contradiction (reductio ad absurdum). Suppose two electric field lines $L_1$ and $L_2$ intersect at a common spatial point $P$.",
            "By definition, the tangent to a field line represents the direction of the resultant electric field vector $\\vec{E}$ at that point. \\vec{E} \\parallel \\text{Tangent to Field Line}",
            "Since curve $L_1$ passes through point $P$, we can draw tangent $T_1$ representing electric field direction $\\vec{E}_1$. \\vec{E}_1 \\text{ along tangent } T_1",
            "Simultaneously, curve $L_2$ passes through the same point $P$, so we can draw a distinct tangent $T_2$ representing field direction $\\vec{E}_2$. \\vec{E}_2 \\text{ along tangent } T_2",
            "This implies that at the single point $P$, the electric field has TWO different directions simultaneously: \\vec{E}(P) = \\vec{E}_1 \\quad \\text{and} \\quad \\vec{E}(P) = \\vec{E}_2 \\quad (T_1 \\neq T_2)",
            "This is physically impossible because at any given point in space, there can only be ONE unique resultant electric field vector. Hence, two field lines can never cross: \\text{Contradiction} \\implies \\text{Field lines cannot intersect}",
            "Why No Closed Loops? If field lines formed closed loops, work done in moving a test charge around the closed loop would be non-zero, violating the conservative nature of electrostatic forces: \\oint \\vec{E} \\cdot d\\vec{l} = 0 \\quad (\\text{Conservative Field})"
          ],
          "formula": "\\text{Two field lines cannot intersect: Resultant } \\vec{E} \\text{ is uniquely defined}"
        }
      ],
      "diagramNotes": "1. Draw hypothetical intersection of two curved field lines at point $P$.\n2. Draw two divergent tangent vectors $T_1$ and $T_2$ at point $P$ and label with a prominent 'Contradiction: Two Directions' callout.\n3. Draw correct field patterns for: (i) Isolated positive charge (radial spokes outward); (ii) Dipole (smooth curves from $+q$ to $-q$).",
      "markingScheme": [
        "1 Mark: Definition of electric field lines and two properties.",
        "1 Mark: Complete contradiction proof explaining why two tangents cannot exist at one point.",
        "1 Mark: Justification for why field lines cannot form closed loops (conservative nature)."
      ],
      "examinerTips": "In your answer, use the exact phrase: 'A point cannot have two directions of resultant electric field at the same time.'"
    }
  },
  {
    "id": "imp-phy-10",
    "number": 10,
    "title": "Capacitance of Parallel Plate Capacitor: With & Without Dielectric Slab",
    "shortLabel": "Capacitor with Dielectric Slab",
    "chapterId": "phy-ch-2",
    "chapterTitle": "Electrostatic Potential and Capacitance",
    "unit": "Electrostatics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q31, 2023, 2020, 2019)",
    "questionPrompt": "(a) Define capacitance of a conductor. Write its SI unit.\n(b) Derive an expression for the capacitance of a parallel plate capacitor having plate area A and plate separation d in vacuum.\n(c) A dielectric slab of thickness t (t < d) and dielectric constant K is inserted between the plates. Derive the new formula for capacitance.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 2: Electrostatic Potential and Capacitance",
      "section": "Sections 2.8, 2.9, 2.10 (pp. 73–79)",
      "equations": "Eqs. (2.35), (2.41), (2.46)",
      "figures": "Figs. 2.25, 2.26, 2.27",
      "summary": "Uniform electric field between plates, definition of capacitance, dielectric polarization, and modified potential difference."
    },
    "theory": [
      "Capacitance $C$ of a capacitor is defined as the ratio of charge $Q$ on either conducting plate to the potential difference $V$ maintained between them: $$C = \\frac{Q}{V}$$",
      "SI unit of capacitance is the Farad (F) ($1\\text{ F} = 1\\text{ C/V}$). Practical capacitors use microfarads ($\\mu\\text{F}$) or picofarads ($\\text{pF}$).",
      "When a dielectric slab is introduced into an electric field, induced bound polarization charges appear on its faces, creating an internal opposing field $\\vec{E}_p$.",
      "The net electric field inside the dielectric is reduced by factor $K$ (dielectric constant): $$E = \\frac{E_0}{K}$$",
      "Because the electric field is reduced, the potential difference between plates decreases ($V < V_0$), causing capacitance to increase ($C > C_0$)."
    ],
    "derivations": [
      {
        "name": "Part 1: Capacitance in Vacuum (No Dielectric)",
        "setup": "Consider two parallel planar conducting plates of area $A$ separated by small distance $d$ in vacuum ($d^2 \\ll A$). The plates carry equal and opposite charges $+Q$ and $-Q$, corresponding to uniform surface charge density $\\sigma = Q/A$.",
        "steps": [
          {
            "text": "By Gauss's Law, the electric fields produced by the two plates add constructively in the region between them:",
            "equation": "E_0 = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}"
          },
          {
            "text": "Since the field is uniform, the electrostatic potential difference $V_0$ between the plates is:",
            "equation": "V_0 = E_0 \\cdot d = \\frac{Q \\, d}{\\varepsilon_0 A}"
          },
          {
            "text": "By definition of capacitance, $C_0 = Q / V_0$:",
            "equation": "C_0 = \\frac{Q}{(Q d) / (\\varepsilon_0 A)} = \\frac{\\varepsilon_0 A}{d}"
          }
        ],
        "specialCases": [
          {
            "title": "Dependence on Geometry:",
            "text": "Capacitance depends only on geometric factors (area $A$ and separation $d$) and medium permittivity $\\varepsilon_0$, independent of charge $Q$:",
            "equation": "C_0 \\propto A, \\quad C_0 \\propto \\frac{1}{d}"
          }
        ],
        "finalFormula": "C_0 = \\frac{\\varepsilon_0 A}{d}"
      },
      {
        "name": "Part 2: Capacitance with Dielectric Slab of Thickness t (t < d)",
        "setup": "A dielectric slab of thickness $t < d$ and dielectric constant $K$ is introduced between the plates parallel to them. The region $(d - t)$ contains vacuum/air, and thickness $t$ contains dielectric.",
        "steps": [
          {
            "text": "Electric field in the air/vacuum region of thickness $(d - t)$ remains unchanged:",
            "equation": "E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}"
          },
          {
            "text": "Electric field inside the dielectric slab of thickness $t$ is reduced by factor $K$ due to dielectric polarization:",
            "equation": "E = \\frac{E_0}{K}"
          },
          {
            "text": "Total potential difference $V$ across the plates is the sum of potentials across air and dielectric regions:",
            "equation": "V = E_0(d - t) + E \\cdot t = E_0(d - t) + \\left(\\frac{E_0}{K}\\right)t"
          },
          {
            "text": "Factoring out $E_0$:",
            "equation": "V = E_0 \\left[ (d - t) + \\frac{t}{K} \\right] = E_0 \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]"
          },
          {
            "text": "Substituting $E_0 = Q / (\\varepsilon_0 A)$:",
            "equation": "V = \\frac{Q}{\\varepsilon_0 A} \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]"
          },
          {
            "text": "Hence, the new capacitance $C = Q / V$ is:",
            "equation": "C = \\frac{\\varepsilon_0 A}{d - t\\left(1 - \\frac{1}{K}\\right)}"
          }
        ],
        "specialCases": [
          {
            "title": "Case (i) Completely Filled with Dielectric (t = d):",
            "text": "When dielectric occupies the entire space between the plates:",
            "equation": "C = \\frac{\\varepsilon_0 A}{d - d(1 - 1/K)} = K \\frac{\\varepsilon_0 A}{d} = K C_0"
          },
          {
            "title": "Case (ii) Conducting Metal Slab (K → ∞, thickness t):",
            "text": "For a conducting slab inserted between plates ($K = \\infty$):",
            "equation": "C = \\frac{\\varepsilon_0 A}{d - t}"
          }
        ],
        "finalFormula": "C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)} \\quad \\xrightarrow{t=d} \\quad C = K C_0"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "capacitor-circuits",
      "title": "Parallel Plate Capacitor with Dielectric Slab",
      "examDrawingGuide": [
        "1. Draw two parallel vertical rectangular plates separated by distance $d$.",
        "2. Mark $+Q$ (surface charge $+\\sigma$) on left plate and $-Q$ (surface charge $-\\sigma$) on right plate.",
        "3. Draw dielectric slab of thickness $t$ placed in the gap.",
        "4. Show bound charges $-\\sigma_p$ on left slab face and $+\\sigma_p$ on right slab face.",
        "5. Label field $E_0$ in air gaps of width $(d-t)$ and reduced field $E = E_0/K$ inside slab."
      ]
    },
    "keyPointsAndKeywords": [
      "Uniform Field E₀ = σ/ε₀ = Q/(ε₀A)",
      "Vacuum Capacitance C₀ = ε₀A/d",
      "Dielectric Polarization",
      "Reduced Field Inside Slab (E = E₀/K)",
      "Total Potential Split V = E₀(d - t) + E·t",
      "Effective Separation Reduction d' = d - t(1 - 1/K)"
    ],
    "termsGlossary": [
      {
        "symbol": "C_0, C",
        "term": "Capacitance (Vacuum & Dielectric)",
        "definition": "Ratio of charge to potential difference, measured in Farads (F)."
      },
      {
        "symbol": "K",
        "term": "Dielectric Constant (Relative Permittivity)",
        "definition": "Ratio of capacitance with dielectric to capacitance in vacuum ($K = C/C_0 \\ge 1$)."
      },
      {
        "symbol": "t",
        "term": "Slab Thickness",
        "definition": "Physical thickness of the dielectric slab inserted between the capacitor plates ($t \\le d$)."
      },
      {
        "symbol": "E_p",
        "term": "Polarization Electric Field",
        "definition": "Opposing internal electric field generated by aligned molecular dipoles within the dielectric."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of capacitance and vacuum field derivation $E_0 = Q/(\\varepsilon_0 A)$.",
      "1 Mark: Derivation of vacuum capacitance $C_0 = \\varepsilon_0 A / d$.",
      "2 Marks: Derivation of potential difference with slab $V = E_0[d - t(1 - 1/K)]$ and capacitance formula.",
      "1 Mark: Special cases for $t = d$ ($C = KC_0$) and conducting slab ($K \\to \\infty$)."
    ],
    "examinerTips": "In writing potential $V$, clearly write $V = E_0(d-t) + E t$. Do not skip this step, as CBSE marking schemes assign 1 full mark to this decomposition.",
    "modelAnswer": {
      "statement": "Capacitance $C$ of a capacitor is defined as the ratio of charge $Q$ on either conducting plate to the potential difference $V$ maintained between them: $$C = \\frac{Q}{V}$$\nSI unit of capacitance is the Farad (F) ($1\\text{ F} = 1\\text{ C/V}$). Practical capacitors use microfarads ($\\mu\\text{F}$) or picofarads ($\\text{pF}$).\nWhen a dielectric slab is introduced into an electric field, induced bound polarization charges appear on its faces, creating an internal opposing field $\\vec{E}_p$.\nThe net electric field inside the dielectric is reduced by factor $K$ (dielectric constant): $$E = \\frac{E_0}{K}$$\nBecause the electric field is reduced, the potential difference between plates decreases ($V < V_0$), causing capacitance to increase ($C > C_0$).",
      "derivations": [
        {
          "name": "Part 1: Capacitance in Vacuum (No Dielectric)",
          "steps": [
            "Consider two parallel planar conducting plates of area $A$ separated by small distance $d$ in vacuum ($d^2 \\ll A$). The plates carry equal and opposite charges $+Q$ and $-Q$, corresponding to uniform surface charge density $\\sigma = Q/A$.",
            "By Gauss's Law, the electric fields produced by the two plates add constructively in the region between them: E_0 = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}",
            "Since the field is uniform, the electrostatic potential difference $V_0$ between the plates is: V_0 = E_0 \\cdot d = \\frac{Q \\, d}{\\varepsilon_0 A}",
            "By definition of capacitance, $C_0 = Q / V_0$: C_0 = \\frac{Q}{(Q d) / (\\varepsilon_0 A)} = \\frac{\\varepsilon_0 A}{d}",
            "Dependence on Geometry: Capacitance depends only on geometric factors (area $A$ and separation $d$) and medium permittivity $\\varepsilon_0$, independent of charge $Q$: C_0 \\propto A, \\quad C_0 \\propto \\frac{1}{d}"
          ],
          "formula": "C_0 = \\frac{\\varepsilon_0 A}{d}"
        },
        {
          "name": "Part 2: Capacitance with Dielectric Slab of Thickness t (t < d)",
          "steps": [
            "A dielectric slab of thickness $t < d$ and dielectric constant $K$ is introduced between the plates parallel to them. The region $(d - t)$ contains vacuum/air, and thickness $t$ contains dielectric.",
            "Electric field in the air/vacuum region of thickness $(d - t)$ remains unchanged: E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}",
            "Electric field inside the dielectric slab of thickness $t$ is reduced by factor $K$ due to dielectric polarization: E = \\frac{E_0}{K}",
            "Total potential difference $V$ across the plates is the sum of potentials across air and dielectric regions: V = E_0(d - t) + E \\cdot t = E_0(d - t) + \\left(\\frac{E_0}{K}\\right)t",
            "Factoring out $E_0$: V = E_0 \\left[ (d - t) + \\frac{t}{K} \\right] = E_0 \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]",
            "Substituting $E_0 = Q / (\\varepsilon_0 A)$: V = \\frac{Q}{\\varepsilon_0 A} \\left[ d - t\\left(1 - \\frac{1}{K}\\right) \\right]",
            "Hence, the new capacitance $C = Q / V$ is: C = \\frac{\\varepsilon_0 A}{d - t\\left(1 - \\frac{1}{K}\\right)}",
            "Case (i) Completely Filled with Dielectric (t = d): When dielectric occupies the entire space between the plates: C = \\frac{\\varepsilon_0 A}{d - d(1 - 1/K)} = K \\frac{\\varepsilon_0 A}{d} = K C_0",
            "Case (ii) Conducting Metal Slab (K → ∞, thickness t): For a conducting slab inserted between plates ($K = \\infty$): C = \\frac{\\varepsilon_0 A}{d - t}"
          ],
          "formula": "C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)} \\quad \\xrightarrow{t=d} \\quad C = K C_0"
        }
      ],
      "diagramNotes": "1. Draw two parallel vertical rectangular plates separated by distance $d$.\n2. Mark $+Q$ (surface charge $+\\sigma$) on left plate and $-Q$ (surface charge $-\\sigma$) on right plate.\n3. Draw dielectric slab of thickness $t$ placed in the gap.\n4. Show bound charges $-\\sigma_p$ on left slab face and $+\\sigma_p$ on right slab face.\n5. Label field $E_0$ in air gaps of width $(d-t)$ and reduced field $E = E_0/K$ inside slab.",
      "markingScheme": [
        "1 Mark: Definition of capacitance and vacuum field derivation $E_0 = Q/(\\varepsilon_0 A)$.",
        "1 Mark: Derivation of vacuum capacitance $C_0 = \\varepsilon_0 A / d$.",
        "2 Marks: Derivation of potential difference with slab $V = E_0[d - t(1 - 1/K)]$ and capacitance formula.",
        "1 Mark: Special cases for $t = d$ ($C = KC_0$) and conducting slab ($K \\to \\infty$)."
      ],
      "examinerTips": "In writing potential $V$, clearly write $V = E_0(d-t) + E t$. Do not skip this step, as CBSE marking schemes assign 1 full mark to this decomposition."
    }
  },
  {
    "id": "imp-phy-11",
    "number": 11,
    "title": "Electric Current, Terminal Potential Difference, Internal Resistance & Power",
    "shortLabel": "Cell EMF, Internal Resistance & Max Power",
    "chapterId": "phy-ch-3",
    "chapterTitle": "Current Electricity",
    "unit": "Current Electricity",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency (CBSE 2024 SQP Q2, 2023, 2020, 2018)",
    "questionPrompt": "(a) Distinguish between EMF of a cell and its terminal potential difference.\n(b) Derive the relation between EMF (ε), terminal voltage (V), internal resistance (r), and external load resistance (R).\n(c) State and prove the Maximum Power Transfer Theorem for an electric cell delivering power to a variable load resistor.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 3: Current Electricity",
      "section": "Sections 3.10 & 3.11 (pp. 110–114)",
      "equations": "Eqs. (3.33), (3.34), (3.35)",
      "figures": "Figs. 3.18, 3.19",
      "summary": "Chemical EMF origin, electrolyte internal resistance, closed circuit terminal voltage drops, and load power optimization."
    },
    "theory": [
      "Electromotive Force (EMF, $\\varepsilon$) is the potential difference between the two electrodes of a cell in an open circuit (when no current is drawn: $I = 0$).",
      "Terminal Potential Difference ($V$) is the potential difference between the terminals of a cell in a closed circuit (when current $I$ is being drawn through an external circuit).",
      "Internal Resistance ($r$) is the opposition offered by the electrolyte and electrodes of the cell to the flow of electric current through it.",
      "When a cell discharges through a load: $$V = \\varepsilon - I r \\quad (V < \\varepsilon)$$",
      "When a cell is being recharged by an external charger: $$V = \\varepsilon + I r \\quad (V > \\varepsilon)$$"
    ],
    "derivations": [
      {
        "name": "Part 1: Derivation of Relation between ε, V, r, and R",
        "setup": "Consider a cell of EMF $\\varepsilon$ and internal resistance $r$ connected across an external load resistor of resistance $R$. A steady current $I$ circulates through the complete circuit.",
        "steps": [
          {
            "text": "Total resistance of the closed series circuit is the sum of external and internal resistances:",
            "equation": "R_{\\text{total}} = R + r"
          },
          {
            "text": "By Ohm's Law, current delivered by the cell is:",
            "equation": "I = \\frac{\\varepsilon}{R + r}"
          },
          {
            "text": "The terminal potential difference $V$ across the external resistor $R$ is:",
            "equation": "V = I R = \\left(\\frac{\\varepsilon}{R + r}\\right) R"
          },
          {
            "text": "Rearranging the current equation: $\\varepsilon = I(R + r) = IR + Ir = V + Ir$:",
            "equation": "V = \\varepsilon - I r"
          },
          {
            "text": "Expressing internal resistance $r$ in terms of terminal voltage and EMF:",
            "equation": "I r = \\varepsilon - V \\implies r = \\frac{\\varepsilon - V}{I} = \\frac{\\varepsilon - V}{V / R} = \\left( \\frac{\\varepsilon}{V} - 1 \\right) R"
          }
        ],
        "specialCases": [
          {
            "title": "Open Circuit Condition:",
            "text": "When external switch is open ($R \\to \\infty$, $I = 0$):",
            "equation": "V = \\varepsilon"
          },
          {
            "title": "Short Circuit Condition:",
            "text": "When terminals are shorted ($R = 0$):",
            "equation": "I_{\\text{max}} = \\frac{\\varepsilon}{r}, \\quad V = 0"
          }
        ],
        "finalFormula": "V = \\varepsilon - I r, \\quad r = \\left(\\frac{\\varepsilon}{V} - 1\\right)R"
      },
      {
        "name": "Part 2: Maximum Power Transfer Theorem",
        "setup": "Determine the value of variable load resistance $R$ for which power delivered to the load by the cell is maximum.",
        "steps": [
          {
            "text": "Electric power dissipated across the load resistor $R$ is:",
            "equation": "P = I^2 R = \\left( \\frac{\\varepsilon}{R + r} \\right)^2 R = \\frac{\\varepsilon^2 R}{(R + r)^2}"
          },
          {
            "text": "To find the maximum power, differentiate $P$ with respect to load resistance $R$ and set to zero ($dP/dR = 0$):",
            "equation": "\\frac{dP}{dR} = \\varepsilon^2 \\left[ \\frac{(R + r)^2 (1) - R \\cdot 2(R + r)}{(R + r)^4} \\right] = 0"
          },
          {
            "text": "Simplifying the numerator:",
            "equation": "(R + r) - 2R = 0 \\quad \\implies \\quad r - R = 0 \\quad \\implies \\quad R = r"
          },
          {
            "text": "Substituting $R = r$ into the power equation yields the maximum power:",
            "equation": "P_{\\text{max}} = \\frac{\\varepsilon^2 (r)}{(r + r)^2} = \\frac{\\varepsilon^2 r}{(2r)^2} = \\frac{\\varepsilon^2}{4r}"
          }
        ],
        "specialCases": [
          {
            "title": "Efficiency at Maximum Power:",
            "text": "At maximum power transfer, internal drop equals external voltage ($V = \\varepsilon/2$), so efficiency is exactly 50%:",
            "equation": "\\eta = \\frac{P_{\\text{out}}}{P_{\\text{total}}} = \\frac{I^2 r}{I^2(2r)} = 50\\%"
          }
        ],
        "finalFormula": "R = r \\implies P_{\\text{max}} = \\frac{\\varepsilon^2}{4r}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "cell-circuit",
      "title": "Cell Circuit with Internal Resistance & Load",
      "examDrawingGuide": [
        "1. Draw battery symbol with long positive and short negative plates labeled EMF $\\varepsilon$.",
        "2. Place internal resistor $r$ in series enclosed in a dashed box representing cell enclosure.",
        "3. Draw external circuit loop with switch and load resistor $R$.",
        "4. Draw voltmeter across cell terminals showing reading $V = \\varepsilon - Ir$.",
        "5. Plot $P$ versus $R$ curve peaking sharply at $R = r$."
      ]
    },
    "keyPointsAndKeywords": [
      "Open Circuit EMF (I = 0, V = ε)",
      "Closed Circuit Terminal Voltage (V = ε - Ir)",
      "Internal Resistance Formula r = (ε/V - 1)R",
      "Charging Condition (V = ε + Ir)",
      "Maximum Power Transfer Condition (R = r)",
      "Maximum Power Value (P_max = ε² / 4r)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\varepsilon",
        "term": "Electromotive Force (EMF)",
        "definition": "Maximum potential difference between cell terminals on open circuit, measured in Volts (V)."
      },
      {
        "symbol": "V",
        "term": "Terminal Potential Difference",
        "definition": "Potential difference between terminals when active current flows through load, measured in Volts (V)."
      },
      {
        "symbol": "r",
        "term": "Internal Resistance",
        "definition": "Inherent resistance offered by cell electrolyte to ionic charge carrier movement ($\\Omega$)."
      },
      {
        "symbol": "P_{\\text{max}}",
        "term": "Maximum Power",
        "definition": "Peak electrical power transferred to load when load matches internal resistance ($R = r$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Distinction between EMF and Terminal Potential Difference with units.",
      "1 Mark: Algebraic derivation of $V = \\varepsilon - Ir$ and $r = (\\varepsilon/V - 1)R$.",
      "1 Mark: Mathematical proof of Maximum Power Transfer condition $R = r$ and $P_{\\text{max}} = \\varepsilon^2/(4r)$."
    ],
    "examinerTips": "Remember to note that during charging of a battery, current enters the positive terminal, making $V = \\varepsilon + Ir$, so terminal voltage exceeds EMF.",
    "modelAnswer": {
      "statement": "Electromotive Force (EMF, $\\varepsilon$) is the potential difference between the two electrodes of a cell in an open circuit (when no current is drawn: $I = 0$).\nTerminal Potential Difference ($V$) is the potential difference between the terminals of a cell in a closed circuit (when current $I$ is being drawn through an external circuit).\nInternal Resistance ($r$) is the opposition offered by the electrolyte and electrodes of the cell to the flow of electric current through it.\nWhen a cell discharges through a load: $$V = \\varepsilon - I r \\quad (V < \\varepsilon)$$\nWhen a cell is being recharged by an external charger: $$V = \\varepsilon + I r \\quad (V > \\varepsilon)$$",
      "derivations": [
        {
          "name": "Part 1: Derivation of Relation between ε, V, r, and R",
          "steps": [
            "Consider a cell of EMF $\\varepsilon$ and internal resistance $r$ connected across an external load resistor of resistance $R$. A steady current $I$ circulates through the complete circuit.",
            "Total resistance of the closed series circuit is the sum of external and internal resistances: R_{\\text{total}} = R + r",
            "By Ohm's Law, current delivered by the cell is: I = \\frac{\\varepsilon}{R + r}",
            "The terminal potential difference $V$ across the external resistor $R$ is: V = I R = \\left(\\frac{\\varepsilon}{R + r}\\right) R",
            "Rearranging the current equation: $\\varepsilon = I(R + r) = IR + Ir = V + Ir$: V = \\varepsilon - I r",
            "Expressing internal resistance $r$ in terms of terminal voltage and EMF: I r = \\varepsilon - V \\implies r = \\frac{\\varepsilon - V}{I} = \\frac{\\varepsilon - V}{V / R} = \\left( \\frac{\\varepsilon}{V} - 1 \\right) R",
            "Open Circuit Condition: When external switch is open ($R \\to \\infty$, $I = 0$): V = \\varepsilon",
            "Short Circuit Condition: When terminals are shorted ($R = 0$): I_{\\text{max}} = \\frac{\\varepsilon}{r}, \\quad V = 0"
          ],
          "formula": "V = \\varepsilon - I r, \\quad r = \\left(\\frac{\\varepsilon}{V} - 1\\right)R"
        },
        {
          "name": "Part 2: Maximum Power Transfer Theorem",
          "steps": [
            "Determine the value of variable load resistance $R$ for which power delivered to the load by the cell is maximum.",
            "Electric power dissipated across the load resistor $R$ is: P = I^2 R = \\left( \\frac{\\varepsilon}{R + r} \\right)^2 R = \\frac{\\varepsilon^2 R}{(R + r)^2}",
            "To find the maximum power, differentiate $P$ with respect to load resistance $R$ and set to zero ($dP/dR = 0$): \\frac{dP}{dR} = \\varepsilon^2 \\left[ \\frac{(R + r)^2 (1) - R \\cdot 2(R + r)}{(R + r)^4} \\right] = 0",
            "Simplifying the numerator: (R + r) - 2R = 0 \\quad \\implies \\quad r - R = 0 \\quad \\implies \\quad R = r",
            "Substituting $R = r$ into the power equation yields the maximum power: P_{\\text{max}} = \\frac{\\varepsilon^2 (r)}{(r + r)^2} = \\frac{\\varepsilon^2 r}{(2r)^2} = \\frac{\\varepsilon^2}{4r}",
            "Efficiency at Maximum Power: At maximum power transfer, internal drop equals external voltage ($V = \\varepsilon/2$), so efficiency is exactly 50%: \\eta = \\frac{P_{\\text{out}}}{P_{\\text{total}}} = \\frac{I^2 r}{I^2(2r)} = 50\\%"
          ],
          "formula": "R = r \\implies P_{\\text{max}} = \\frac{\\varepsilon^2}{4r}"
        }
      ],
      "diagramNotes": "1. Draw battery symbol with long positive and short negative plates labeled EMF $\\varepsilon$.\n2. Place internal resistor $r$ in series enclosed in a dashed box representing cell enclosure.\n3. Draw external circuit loop with switch and load resistor $R$.\n4. Draw voltmeter across cell terminals showing reading $V = \\varepsilon - Ir$.\n5. Plot $P$ versus $R$ curve peaking sharply at $R = r$.",
      "markingScheme": [
        "1 Mark: Distinction between EMF and Terminal Potential Difference with units.",
        "1 Mark: Algebraic derivation of $V = \\varepsilon - Ir$ and $r = (\\varepsilon/V - 1)R$.",
        "1 Mark: Mathematical proof of Maximum Power Transfer condition $R = r$ and $P_{\\text{max}} = \\varepsilon^2/(4r)$."
      ],
      "examinerTips": "Remember to note that during charging of a battery, current enters the positive terminal, making $V = \\varepsilon + Ir$, so terminal voltage exceeds EMF."
    }
  },
  {
    "id": "imp-phy-12",
    "number": 12,
    "title": "Properties of Electromagnetic Waves & EM Spectrum Applications",
    "shortLabel": "EM Waves Properties & Spectrum",
    "chapterId": "phy-ch-8",
    "chapterTitle": "Electromagnetic Waves",
    "unit": "Electromagnetic Waves",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Theory & Conceptual",
    "frequency": "High Frequency Core Question (CBSE 2024 SQP Q8, 2023, 2022)",
    "questionPrompt": "(a) State four important characteristic properties of electromagnetic waves.\n(b) Prove that the speed of electromagnetic waves in vacuum is given by c = 1 / √(μ₀ε₀).\n(c) Name the electromagnetic radiations used for: (i) Radar systems, (ii) Water purification, (iii) Treating muscular strains, and (iv) Diagnostic medical imaging.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 8: Electromagnetic Waves",
      "section": "Sections 8.3 & 8.4 (pp. 274–284)",
      "equations": "Eqs. (8.9), (8.10), (8.13)",
      "figures": "Figs. 8.4, 8.5",
      "summary": "Transverse nature of electric and magnetic fields, Maxwell speed relation, energy transport, and complete electromagnetic spectrum breakdown."
    },
    "theory": [
      "An Electromagnetic Wave is a self-sustaining wave propagating through space composed of sinusoidally oscillating electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields oriented mutually perpendicular to each other and perpendicular to the direction of propagation.",
      "Property 1 (Transverse Nature): Both $\\vec{E}$ and $\\vec{B}$ vectors oscillate perpendicular to the wave propagation vector $\\vec{k}$ ($$\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$$).",
      "Property 2 (Speed in Vacuum): All EM waves travel in free space with the invariant speed of light: $$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}$$",
      "Property 3 (Electric to Magnetic Amplitude Ratio): At every point and instant, the ratio of electric field amplitude to magnetic field amplitude equals the speed of light: $$\\frac{E_0}{B_0} = c$$",
      "Property 4 (Equal Energy Sharing): Total energy density $u$ is partitioned equally between electric and magnetic fields: $$u_E = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{B^2}{2\\mu_0} = u_B \\quad \\implies \\quad u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}$$",
      "Property 5 (Radiation Pressure): EM waves carry linear momentum $p = U / c$. When absorbed by a surface, they exert mechanical radiation pressure."
    ],
    "derivations": [
      {
        "name": "Derivation of Wave Speed Relation from Maxwell's Equations",
        "setup": "Consider a plane electromagnetic wave propagating along the positive x-axis in vacuum, with electric field oscillating along the y-axis and magnetic field oscillating along the z-axis.",
        "steps": [
          {
            "text": "The harmonic wave equations for electric and magnetic field components are:",
            "equation": "E_y(x, t) = E_0 \\sin(kx - \\omega t), \\quad B_z(x, t) = B_0 \\sin(kx - \\omega t)"
          },
          {
            "text": "Applying Faraday's Law in differential form ($\\frac{\\partial E_y}{\\partial x} = -\\frac{\\partial B_z}{\\partial t}$):",
            "equation": "k E_0 \\cos(kx - \\omega t) = \\omega B_0 \\cos(kx - \\omega t) \\quad \\implies \\quad \\frac{E_0}{B_0} = \\frac{\\omega}{k} = c"
          },
          {
            "text": "Applying Ampere-Maxwell's Law in vacuum ($\\frac{\\partial B_z}{\\partial x} = -\\mu_0 \\varepsilon_0 \\frac{\\partial E_y}{\\partial t}$):",
            "equation": "k B_0 = \\mu_0 \\varepsilon_0 \\omega E_0 \\quad \\implies \\quad \\frac{B_0}{E_0} = \\mu_0 \\varepsilon_0 \\left(\\frac{\\omega}{k}\\right) = \\mu_0 \\varepsilon_0 c"
          },
          {
            "text": "Multiplying the two amplitude ratio equations:",
            "equation": "\\left(\\frac{E_0}{B_0}\\right) \\cdot \\left(\\frac{B_0}{E_0}\\right) = c \\cdot (\\mu_0 \\varepsilon_0 c) \\quad \\implies \\quad 1 = \\mu_0 \\varepsilon_0 c^2"
          },
          {
            "text": "Solving for wave speed $c$:",
            "equation": "c^2 = \\frac{1}{\\mu_0 \\varepsilon_0} \\quad \\implies \\quad c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}"
          }
        ],
        "specialCases": [
          {
            "title": "Speed in Material Medium:",
            "text": "In a dielectric medium with permittivity $\\varepsilon$ and permeability $\\mu$, refractive index $n$ is:",
            "equation": "v = \\frac{1}{\\sqrt{\\mu \\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r \\varepsilon_r}} = \\frac{c}{n}"
          }
        ],
        "finalFormula": "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8 \\text{ m/s}, \\quad \\frac{E_0}{B_0} = c"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "em-wave-structure",
      "title": "Transverse Electromagnetic Wave Propagation",
      "examDrawingGuide": [
        "1. Draw 3D orthogonal coordinate axes: X (propagation direction), Y (electric field), Z (magnetic field).",
        "2. Draw transverse sine wave in XY plane representing oscillating electric field $\\vec{E}$.",
        "3. Draw transverse sine wave in XZ plane representing oscillating magnetic field $\\vec{B}$ in phase with $\\vec{E}$.",
        "4. Draw arrows showing $\\vec{E} \\times \\vec{B}$ pointing along the positive X direction."
      ]
    },
    "keyPointsAndKeywords": [
      "Transverse Wave Character (E ⟂ B ⟂ v)",
      "Vacuum Speed c = 1/√(μ₀ε₀)",
      "Amplitude Ratio E₀/B₀ = c",
      "Equal Energy Density Division (u_E = u_B)",
      "Momentum and Radiation Pressure (p = U/c)",
      "Spectrum Applications (Microwaves for radar, UV for germicidal purification, IR for muscular therapy, X-rays for bone radiography)"
    ],
    "termsGlossary": [
      {
        "symbol": "c",
        "term": "Speed of Light in Vacuum",
        "definition": "Universal speed constant of electromagnetic waves ($2.9979 \\times 10^8 \\text{ m/s}$)."
      },
      {
        "symbol": "\\mu_0",
        "term": "Permeability of Free Space",
        "definition": "Magnetic constant ($4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$)."
      },
      {
        "symbol": "\\varepsilon_0",
        "term": "Permittivity of Free Space",
        "definition": "Electric constant ($8.854 \\times 10^{-12} \\text{ C}^2/\\text{N}\\cdot\\text{m}^2$)."
      },
      {
        "symbol": "u",
        "term": "Total Energy Density",
        "definition": "Total electromagnetic energy stored per unit volume of space ($\\text{J/m}^3$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Statement of four characteristic properties of EM waves.",
      "1 Mark: Mathematical derivation of $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ from Maxwell equations.",
      "1 Mark: Identification of all four spectrum applications (0.25 Mark each)."
    ],
    "examinerTips": "In spectrum applications: Radar uses Microwaves; Water purification uses Ultraviolet (germicidal); Muscular pain uses Infrared (heat lamps); Bone diagnostics uses X-rays.",
    "modelAnswer": {
      "statement": "An Electromagnetic Wave is a self-sustaining wave propagating through space composed of sinusoidally oscillating electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields oriented mutually perpendicular to each other and perpendicular to the direction of propagation.\nProperty 1 (Transverse Nature): Both $\\vec{E}$ and $\\vec{B}$ vectors oscillate perpendicular to the wave propagation vector $\\vec{k}$ ($$\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$$).\nProperty 2 (Speed in Vacuum): All EM waves travel in free space with the invariant speed of light: $$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}$$\nProperty 3 (Electric to Magnetic Amplitude Ratio): At every point and instant, the ratio of electric field amplitude to magnetic field amplitude equals the speed of light: $$\\frac{E_0}{B_0} = c$$\nProperty 4 (Equal Energy Sharing): Total energy density $u$ is partitioned equally between electric and magnetic fields: $$u_E = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{B^2}{2\\mu_0} = u_B \\quad \\implies \\quad u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}$$\nProperty 5 (Radiation Pressure): EM waves carry linear momentum $p = U / c$. When absorbed by a surface, they exert mechanical radiation pressure.",
      "derivations": [
        {
          "name": "Derivation of Wave Speed Relation from Maxwell's Equations",
          "steps": [
            "Consider a plane electromagnetic wave propagating along the positive x-axis in vacuum, with electric field oscillating along the y-axis and magnetic field oscillating along the z-axis.",
            "The harmonic wave equations for electric and magnetic field components are: E_y(x, t) = E_0 \\sin(kx - \\omega t), \\quad B_z(x, t) = B_0 \\sin(kx - \\omega t)",
            "Applying Faraday's Law in differential form ($\\frac{\\partial E_y}{\\partial x} = -\\frac{\\partial B_z}{\\partial t}$): k E_0 \\cos(kx - \\omega t) = \\omega B_0 \\cos(kx - \\omega t) \\quad \\implies \\quad \\frac{E_0}{B_0} = \\frac{\\omega}{k} = c",
            "Applying Ampere-Maxwell's Law in vacuum ($\\frac{\\partial B_z}{\\partial x} = -\\mu_0 \\varepsilon_0 \\frac{\\partial E_y}{\\partial t}$): k B_0 = \\mu_0 \\varepsilon_0 \\omega E_0 \\quad \\implies \\quad \\frac{B_0}{E_0} = \\mu_0 \\varepsilon_0 \\left(\\frac{\\omega}{k}\\right) = \\mu_0 \\varepsilon_0 c",
            "Multiplying the two amplitude ratio equations: \\left(\\frac{E_0}{B_0}\\right) \\cdot \\left(\\frac{B_0}{E_0}\\right) = c \\cdot (\\mu_0 \\varepsilon_0 c) \\quad \\implies \\quad 1 = \\mu_0 \\varepsilon_0 c^2",
            "Solving for wave speed $c$: c^2 = \\frac{1}{\\mu_0 \\varepsilon_0} \\quad \\implies \\quad c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}",
            "Speed in Material Medium: In a dielectric medium with permittivity $\\varepsilon$ and permeability $\\mu$, refractive index $n$ is: v = \\frac{1}{\\sqrt{\\mu \\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r \\varepsilon_r}} = \\frac{c}{n}"
          ],
          "formula": "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8 \\text{ m/s}, \\quad \\frac{E_0}{B_0} = c"
        }
      ],
      "diagramNotes": "1. Draw 3D orthogonal coordinate axes: X (propagation direction), Y (electric field), Z (magnetic field).\n2. Draw transverse sine wave in XY plane representing oscillating electric field $\\vec{E}$.\n3. Draw transverse sine wave in XZ plane representing oscillating magnetic field $\\vec{B}$ in phase with $\\vec{E}$.\n4. Draw arrows showing $\\vec{E} \\times \\vec{B}$ pointing along the positive X direction.",
      "markingScheme": [
        "1 Mark: Statement of four characteristic properties of EM waves.",
        "1 Mark: Mathematical derivation of $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ from Maxwell equations.",
        "1 Mark: Identification of all four spectrum applications (0.25 Mark each)."
      ],
      "examinerTips": "In spectrum applications: Radar uses Microwaves; Water purification uses Ultraviolet (germicidal); Muscular pain uses Infrared (heat lamps); Bone diagnostics uses X-rays."
    }
  },
  {
    "id": "imp-phy-13",
    "number": 13,
    "title": "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms",
    "shortLabel": "RMS Value of AC (I_rms = I₀/√2)",
    "chapterId": "phy-ch-7",
    "chapterTitle": "Alternating Current",
    "unit": "Electromagnetic Induction & Alternating Current",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency Core Derivation (CBSE 2024, 2023, 2020, 2018)",
    "questionPrompt": "(a) Define the root-mean-square (RMS) or effective value of alternating current.\n(b) Derive the mathematical relation between RMS value (I_rms) and peak value (I₀) of sinusoidal alternating current over a complete cycle.\n(c) The household AC mains voltage in India is 220 V at 50 Hz. Calculate its peak voltage and explain why a 220 V AC shock is more severe than a 220 V DC shock.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 7: Alternating Current",
      "section": "Sections 7.2 & 7.3 (pp. 235–239)",
      "equations": "Eqs. (7.7), (7.8), (7.9)",
      "figures": "Fig. 7.3",
      "summary": "Joule heating equivalence, integration of squared sinusoidal waveform over full period, and comparison between peak and RMS values."
    },
    "theory": [
      "The Root-Mean-Square (RMS) or virtual/effective value of alternating current is defined as that value of steady direct current (DC) which would generate the same amount of heat in a given resistor in a given time as is produced by the AC passing through the same resistor for the same time (one complete cycle).",
      "The average value of AC over a complete cycle is identically zero ($\\langle I \\rangle_{\\text{cycle}} = 0$) because positive and negative half-cycles cancel out. Hence, AC cannot be rated by its simple arithmetic average.",
      "Heating effect depends on $I^2 R$, and since $I^2$ is always positive, thermal dissipation provides an unambiguous physical measure of AC magnitude.",
      "Domestic AC rating of $220\\text{ V}$ is the RMS voltage ($V_{\\text{rms}}$). The corresponding peak voltage is: $$V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311.13\\text{ V}$$",
      "A $220\\text{ V}$ AC shock is more fatal and dangerous than a $220\\text{ V}$ DC shock because the AC voltage fluctuates up to a peak value of $\\pm 311\\text{ V}$ twice every cycle, whereas DC remains steady at $220\\text{ V}$."
    ],
    "derivations": [
      {
        "name": "Mathematical Derivation of I_rms = I₀ / √2",
        "setup": "Consider a sinusoidal alternating current flowing through a resistor of resistance $R$: $$I = I_0 \\sin(\\omega t)$$ where $I_0$ is the peak amplitude, $\\omega = 2\\pi/T$ is the angular frequency, and $T$ is the time period of one complete cycle.",
        "steps": [
          {
            "text": "By Joule's law of heating, the thermal energy $dH$ generated in the resistor during an infinitesimal time interval $dt$ is:",
            "equation": "dH = I^2 R \\, dt = [I_0 \\sin(\\omega t)]^2 R \\, dt = I_0^2 R \\sin^2(\\omega t) \\, dt"
          },
          {
            "text": "Total heat $H$ produced in the resistor over one complete cycle period ($t = 0$ to $t = T$) is obtained by integration:",
            "equation": "H = \\int_0^T I_0^2 R \\sin^2(\\omega t) \\, dt = I_0^2 R \\int_0^T \\sin^2(\\omega t) \\, dt"
          },
          {
            "text": "Using trigonometric identity $\\sin^2(\\omega t) = \\frac{1 - \\cos(2\\omega t)}{2}$:",
            "equation": "H = I_0^2 R \\int_0^T \\frac{1 - \\cos(2\\omega t)}{2} \\, dt = \\frac{I_0^2 R}{2} \\left[ \\int_0^T dt - \\int_0^T \\cos(2\\omega t) \\, dt \\right]"
          },
          {
            "text": "Evaluating the definite integrals over one complete period $T = 2\\pi/\\omega$:",
            "equation": "\\int_0^T dt = T, \\quad \\int_0^T \\cos(2\\omega t) \\, dt = \\left[ \\frac{\\sin(2\\omega t)}{2\\omega} \\right]_0^T = \\frac{\\sin(4\\pi) - \\sin(0)}{2\\omega} = 0"
          },
          {
            "text": "Therefore, total heat produced by alternating current in one cycle is:",
            "equation": "H = \\frac{I_0^2 R T}{2}"
          },
          {
            "text": "If steady current $I_{\\text{rms}}$ produces the exact same amount of heat in the same resistance $R$ over the same time $T$:",
            "equation": "H = I_{\\text{rms}}^2 R T"
          },
          {
            "text": "Equating the two heat expressions:",
            "equation": "I_{\\text{rms}}^2 R T = \\frac{I_0^2 R T}{2} \\quad \\implies \\quad I_{\\text{rms}}^2 = \\frac{I_0^2}{2}"
          },
          {
            "text": "Taking the square root on both sides:",
            "equation": "I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 \\, I_0"
          }
        ],
        "specialCases": [
          {
            "title": "RMS Voltage Relation:",
            "text": "By Ohm's law, the effective RMS voltage relates identically to peak voltage:",
            "equation": "V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 \\, V_0 \\quad \\implies \\quad V_0 = \\sqrt{2} \\, V_{\\text{rms}}"
          }
        ],
        "finalFormula": "I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = 0.707 I_0, \\quad V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} = 0.707 V_0"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ac-rms-waveform",
      "title": "Sinusoidal AC Waveform & RMS Value",
      "examDrawingGuide": [
        "1. Draw coordinate axes: horizontal time axis $t$, vertical current axis $I(t)$.",
        "2. Draw one full cycle of sine wave reaching positive peak $+I_0$ at $T/4$ and negative peak $-I_0$ at $3T/4$.",
        "3. Draw squared current curve $I^2(t)$ which is entirely positive and oscillates between $0$ and $I_0^2$.",
        "4. Draw dashed horizontal line at $I_0^2/2$ representing the mean squared current, and mark $I_{\\text{rms}} = I_0/\\sqrt{2} \\approx 0.707 I_0$."
      ]
    },
    "keyPointsAndKeywords": [
      "Joule Heating Equivalence Definition",
      "Zero Average Current Over Full Cycle (⟨I⟩ = 0)",
      "Integration of sin²(ωt) over Period T = T/2",
      "Heat Balance Equation (I_rms²RT = I₀²RT / 2)",
      "RMS Formula (I_rms = I₀ / √2)",
      "Domestic Peak Voltage (V₀ = 220 × √2 = 311 V)"
    ],
    "termsGlossary": [
      {
        "symbol": "I_{\\text{rms}}",
        "term": "Root-Mean-Square Current",
        "definition": "Effective thermal value of alternating current ($I_{\\text{rms}} = I_0 / \\sqrt{2}$), measured in Amperes (A)."
      },
      {
        "symbol": "I_0",
        "term": "Peak Current (Amplitude)",
        "definition": "Maximum instantaneous value attained by alternating current in either half-cycle (A)."
      },
      {
        "symbol": "T",
        "term": "Time Period",
        "definition": "Time required to execute one full electrical cycle: $T = 1/f = 2\\pi/\\omega$, measured in seconds (s)."
      },
      {
        "symbol": "\\omega",
        "term": "Angular Frequency",
        "definition": "Rate of change of phase angle: $\\omega = 2\\pi f$, measured in radians per second (rad/s)."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of RMS current in terms of Joule heating equivalence.",
      "1.5 Marks: Step-by-step calculus integration of heat $H = \\int I^2 R dt$ using identity $\\sin^2\\omega t = (1 - \\cos 2\\omega t)/2$.",
      "0.5 Mark: Numerical calculation of peak voltage ($311\\text{ V}$) and explanation of why AC shock is more hazardous."
    ],
    "examinerTips": "In evaluating $\\int_0^T \\cos(2\\omega t) dt$, show explicitly that it integrates to zero. Skipping this step often costs 0.5 marks in CBSE evaluation.",
    "modelAnswer": {
      "statement": "The Root-Mean-Square (RMS) or virtual/effective value of alternating current is defined as that value of steady direct current (DC) which would generate the same amount of heat in a given resistor in a given time as is produced by the AC passing through the same resistor for the same time (one complete cycle).\nThe average value of AC over a complete cycle is identically zero ($\\langle I \\rangle_{\\text{cycle}} = 0$) because positive and negative half-cycles cancel out. Hence, AC cannot be rated by its simple arithmetic average.\nHeating effect depends on $I^2 R$, and since $I^2$ is always positive, thermal dissipation provides an unambiguous physical measure of AC magnitude.\nDomestic AC rating of $220\\text{ V}$ is the RMS voltage ($V_{\\text{rms}}$). The corresponding peak voltage is: $$V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311.13\\text{ V}$$\nA $220\\text{ V}$ AC shock is more fatal and dangerous than a $220\\text{ V}$ DC shock because the AC voltage fluctuates up to a peak value of $\\pm 311\\text{ V}$ twice every cycle, whereas DC remains steady at $220\\text{ V}$.",
      "derivations": [
        {
          "name": "Mathematical Derivation of I_rms = I₀ / √2",
          "steps": [
            "Consider a sinusoidal alternating current flowing through a resistor of resistance $R$: $$I = I_0 \\sin(\\omega t)$$ where $I_0$ is the peak amplitude, $\\omega = 2\\pi/T$ is the angular frequency, and $T$ is the time period of one complete cycle.",
            "By Joule's law of heating, the thermal energy $dH$ generated in the resistor during an infinitesimal time interval $dt$ is: dH = I^2 R \\, dt = [I_0 \\sin(\\omega t)]^2 R \\, dt = I_0^2 R \\sin^2(\\omega t) \\, dt",
            "Total heat $H$ produced in the resistor over one complete cycle period ($t = 0$ to $t = T$) is obtained by integration: H = \\int_0^T I_0^2 R \\sin^2(\\omega t) \\, dt = I_0^2 R \\int_0^T \\sin^2(\\omega t) \\, dt",
            "Using trigonometric identity $\\sin^2(\\omega t) = \\frac{1 - \\cos(2\\omega t)}{2}$: H = I_0^2 R \\int_0^T \\frac{1 - \\cos(2\\omega t)}{2} \\, dt = \\frac{I_0^2 R}{2} \\left[ \\int_0^T dt - \\int_0^T \\cos(2\\omega t) \\, dt \\right]",
            "Evaluating the definite integrals over one complete period $T = 2\\pi/\\omega$: \\int_0^T dt = T, \\quad \\int_0^T \\cos(2\\omega t) \\, dt = \\left[ \\frac{\\sin(2\\omega t)}{2\\omega} \\right]_0^T = \\frac{\\sin(4\\pi) - \\sin(0)}{2\\omega} = 0",
            "Therefore, total heat produced by alternating current in one cycle is: H = \\frac{I_0^2 R T}{2}",
            "If steady current $I_{\\text{rms}}$ produces the exact same amount of heat in the same resistance $R$ over the same time $T$: H = I_{\\text{rms}}^2 R T",
            "Equating the two heat expressions: I_{\\text{rms}}^2 R T = \\frac{I_0^2 R T}{2} \\quad \\implies \\quad I_{\\text{rms}}^2 = \\frac{I_0^2}{2}",
            "Taking the square root on both sides: I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 \\, I_0",
            "RMS Voltage Relation: By Ohm's law, the effective RMS voltage relates identically to peak voltage: V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 \\, V_0 \\quad \\implies \\quad V_0 = \\sqrt{2} \\, V_{\\text{rms}}"
          ],
          "formula": "I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} = 0.707 I_0, \\quad V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}} = 0.707 V_0"
        }
      ],
      "diagramNotes": "1. Draw coordinate axes: horizontal time axis $t$, vertical current axis $I(t)$.\n2. Draw one full cycle of sine wave reaching positive peak $+I_0$ at $T/4$ and negative peak $-I_0$ at $3T/4$.\n3. Draw squared current curve $I^2(t)$ which is entirely positive and oscillates between $0$ and $I_0^2$.\n4. Draw dashed horizontal line at $I_0^2/2$ representing the mean squared current, and mark $I_{\\text{rms}} = I_0/\\sqrt{2} \\approx 0.707 I_0$.",
      "markingScheme": [
        "1 Mark: Definition of RMS current in terms of Joule heating equivalence.",
        "1.5 Marks: Step-by-step calculus integration of heat $H = \\int I^2 R dt$ using identity $\\sin^2\\omega t = (1 - \\cos 2\\omega t)/2$.",
        "0.5 Mark: Numerical calculation of peak voltage ($311\\text{ V}$) and explanation of why AC shock is more hazardous."
      ],
      "examinerTips": "In evaluating $\\int_0^T \\cos(2\\omega t) dt$, show explicitly that it integrates to zero. Skipping this step often costs 0.5 marks in CBSE evaluation."
    }
  },
  {
    "id": "imp-phy-14",
    "number": 14,
    "title": "Displacement Current: Need, Mathematical Derivation & Continuity Proof",
    "shortLabel": "Displacement Current & Ampere-Maxwell Law",
    "chapterId": "phy-ch-8",
    "chapterTitle": "Electromagnetic Waves",
    "unit": "Electromagnetic Waves",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation & Conceptual",
    "frequency": "High Frequency (CBSE 2024 SQP Q8, 2023, 2020, 2019)",
    "questionPrompt": "(a) State Ampere's circuital law and explain why Maxwell found it logically inconsistent during the charging of a capacitor.\n(b) Define displacement current and derive its mathematical expression in terms of time rate of change of electric flux.\n(c) Show that conduction current in the connecting wires is equal to displacement current inside the dielectric gap during capacitor charging.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 8: Electromagnetic Waves",
      "section": "Sections 8.2 & 8.3 (pp. 269–274)",
      "equations": "Eqs. (8.1), (8.4), (8.5)",
      "figures": "Figs. 8.1, 8.2",
      "summary": "Inconsistency of Ampere's circuital law across capacitor plates, displacement current definition, and modified Maxwell-Ampere circuital law."
    },
    "theory": [
      "Ampere's Circuital Law states that the line integral of magnetic field $\\vec{B}$ around any closed loop equals $\\mu_0$ times the total current threading the loop: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c$$",
      "Maxwell pointed out that this law is mathematically inconsistent for time-dependent electromagnetic situations (such as charging a capacitor).",
      "Contradiction: If we construct a flat disc surface $S_1$ capped by a circular loop enclosing the wire, current pierces the surface ($I_{\\text{enc}} = I_c$). But if we construct a pot-shaped surface $S_2$ bulging between the capacitor plates sharing the exact same perimeter loop, no wire passes through it, so $I_{\\text{enc}} = 0$. This leads to the contradiction $\\mu_0 I_c = 0$.",
      "Maxwell's Resolution: A changing electric field in the space between capacitor plates induces a fictitious current termed Displacement Current ($I_d$).",
      "Displacement Current is that current which arises due to the time rate of change of electric flux, producing the same magnetic effects as a conduction current."
    ],
    "derivations": [
      {
        "name": "Mathematical Derivation of Displacement Current (Id = ε₀ dΦ/dt)",
        "setup": "Consider a parallel plate capacitor with plates of area $A$ being charged by a conduction current $I_c(t)$. At any instant $t$, let charge on the plates be $q(t)$.",
        "steps": [
          {
            "text": "The uniform electric field between the capacitor plates at instant $t$ is:",
            "equation": "E(t) = \\frac{\\sigma(t)}{\\varepsilon_0} = \\frac{q(t)}{\\varepsilon_0 A}"
          },
          {
            "text": "The total electric flux $\\Phi_E$ crossing between the plates of area $A$ is:",
            "equation": "\\Phi_E = E(t) \\cdot A = \\left( \\frac{q(t)}{\\varepsilon_0 A} \\right) A = \\frac{q(t)}{\\varepsilon_0}"
          },
          {
            "text": "Rearranging to express the instantaneous plate charge $q(t)$ in terms of electric flux:",
            "equation": "q(t) = \\varepsilon_0 \\Phi_E"
          },
          {
            "text": "Differentiating both sides with respect to time $t$:",
            "equation": "\\frac{dq}{dt} = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
          },
          {
            "text": "Since the rate of charge accumulation $dq/dt$ is the conduction current $I_c$ flowing into the plates:",
            "equation": "I_c = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
          },
          {
            "text": "Maxwell identified this time-derivative of electric flux as the Displacement Current $I_d$:",
            "equation": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
          },
          {
            "text": "Hence, the conduction current in the leads equals the displacement current in the gap at every instant:",
            "equation": "I_c = I_d \\quad (\\text{Continuity of Current})"
          }
        ],
        "specialCases": [
          {
            "title": "Generalized Ampere-Maxwell Circuital Law:",
            "text": "Total current is the sum of conduction current and displacement current, restoring universal consistency:",
            "equation": "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
          }
        ],
        "finalFormula": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}, \\quad \\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0\\left(I_c + \\varepsilon_0\\frac{d\\Phi_E}{dt}\\right)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "displacement-current",
      "title": "Charging Capacitor & Displacement Current",
      "examDrawingGuide": [
        "1. Draw parallel plate capacitor connected to an AC or charging DC battery circuit with conduction current $I_c$.",
        "2. Draw circular Ampere loop $C$ around the wire outside the capacitor.",
        "3. Draw flat disc surface $S_1$ pierced by wire ($I_{\\text{enc}} = I_c$).",
        "4. Draw pot-shaped balloon surface $S_2$ passing through the plates with rim $C$, showing changing electric field $\\vec{E}(t)$ generating displacement current $I_d$."
      ]
    },
    "keyPointsAndKeywords": [
      "Inconsistency of Ampere's Law for Time-Varying Fields",
      "Pot-shaped Gaussian Surface Contradiction",
      "Electric Flux Relation (Φ_E = q / ε₀)",
      "Displacement Current Formula (I_d = ε₀ dΦ_E / dt)",
      "Continuity Principle (I_c = I_d)",
      "Generalized Ampere-Maxwell Law (∮ B · dl = μ₀(I_c + I_d))"
    ],
    "termsGlossary": [
      {
        "symbol": "I_d",
        "term": "Displacement Current",
        "definition": "Current produced by a time-varying electric field ($I_d = \\varepsilon_0 d\\Phi_E / dt$), having units of Amperes (A)."
      },
      {
        "symbol": "I_c",
        "term": "Conduction Current",
        "definition": "Rate of physical transfer of charge carriers through conducting wires ($I_c = dq/dt$)."
      },
      {
        "symbol": "\\Phi_E",
        "term": "Electric Flux",
        "definition": "Total electric field lines crossing through the capacitor cross-sectional area ($\\text{V}\\cdot\\text{m}$)."
      },
      {
        "symbol": "\\mu_0 \\varepsilon_0",
        "term": "Electromagnetic Vacuum Product",
        "definition": "Product of magnetic and electric vacuum constants relating wave propagation to the speed of light ($1/c^2$)."
      }
    ],
    "markingScheme": [
      "1 Mark: Clear explanation of Ampere's circuital law contradiction using two surfaces $S_1$ and $S_2$.",
      "1 Mark: Mathematical derivation connecting charge $q = \\varepsilon_0 \\Phi_E$ to $I_d = \\varepsilon_0 d\\Phi_E/dt$.",
      "1 Mark: Proof that $I_c = I_d$ and statement of the generalized Ampere-Maxwell equation."
    ],
    "examinerTips": "Do NOT write that displacement current involves physical moving electrons! It is purely due to the rate of change of electric flux, yet produces identical magnetic fields.",
    "modelAnswer": {
      "statement": "Ampere's Circuital Law states that the line integral of magnetic field $\\vec{B}$ around any closed loop equals $\\mu_0$ times the total current threading the loop: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c$$\nMaxwell pointed out that this law is mathematically inconsistent for time-dependent electromagnetic situations (such as charging a capacitor).\nContradiction: If we construct a flat disc surface $S_1$ capped by a circular loop enclosing the wire, current pierces the surface ($I_{\\text{enc}} = I_c$). But if we construct a pot-shaped surface $S_2$ bulging between the capacitor plates sharing the exact same perimeter loop, no wire passes through it, so $I_{\\text{enc}} = 0$. This leads to the contradiction $\\mu_0 I_c = 0$.\nMaxwell's Resolution: A changing electric field in the space between capacitor plates induces a fictitious current termed Displacement Current ($I_d$).\nDisplacement Current is that current which arises due to the time rate of change of electric flux, producing the same magnetic effects as a conduction current.",
      "derivations": [
        {
          "name": "Mathematical Derivation of Displacement Current (Id = ε₀ dΦ/dt)",
          "steps": [
            "Consider a parallel plate capacitor with plates of area $A$ being charged by a conduction current $I_c(t)$. At any instant $t$, let charge on the plates be $q(t)$.",
            "The uniform electric field between the capacitor plates at instant $t$ is: E(t) = \\frac{\\sigma(t)}{\\varepsilon_0} = \\frac{q(t)}{\\varepsilon_0 A}",
            "The total electric flux $\\Phi_E$ crossing between the plates of area $A$ is: \\Phi_E = E(t) \\cdot A = \\left( \\frac{q(t)}{\\varepsilon_0 A} \\right) A = \\frac{q(t)}{\\varepsilon_0}",
            "Rearranging to express the instantaneous plate charge $q(t)$ in terms of electric flux: q(t) = \\varepsilon_0 \\Phi_E",
            "Differentiating both sides with respect to time $t$: \\frac{dq}{dt} = \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
            "Since the rate of charge accumulation $dq/dt$ is the conduction current $I_c$ flowing into the plates: I_c = \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
            "Maxwell identified this time-derivative of electric flux as the Displacement Current $I_d$: I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
            "Hence, the conduction current in the leads equals the displacement current in the gap at every instant: I_c = I_d \\quad (\\text{Continuity of Current})",
            "Generalized Ampere-Maxwell Circuital Law: Total current is the sum of conduction current and displacement current, restoring universal consistency: \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
          ],
          "formula": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}, \\quad \\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0\\left(I_c + \\varepsilon_0\\frac{d\\Phi_E}{dt}\\right)"
        }
      ],
      "diagramNotes": "1. Draw parallel plate capacitor connected to an AC or charging DC battery circuit with conduction current $I_c$.\n2. Draw circular Ampere loop $C$ around the wire outside the capacitor.\n3. Draw flat disc surface $S_1$ pierced by wire ($I_{\\text{enc}} = I_c$).\n4. Draw pot-shaped balloon surface $S_2$ passing through the plates with rim $C$, showing changing electric field $\\vec{E}(t)$ generating displacement current $I_d$.",
      "markingScheme": [
        "1 Mark: Clear explanation of Ampere's circuital law contradiction using two surfaces $S_1$ and $S_2$.",
        "1 Mark: Mathematical derivation connecting charge $q = \\varepsilon_0 \\Phi_E$ to $I_d = \\varepsilon_0 d\\Phi_E/dt$.",
        "1 Mark: Proof that $I_c = I_d$ and statement of the generalized Ampere-Maxwell equation."
      ],
      "examinerTips": "Do NOT write that displacement current involves physical moving electrons! It is purely due to the rate of change of electric flux, yet produces identical magnetic fields."
    }
  },
  {
    "id": "imp-phy-15",
    "number": 15,
    "title": "Wheatstone Bridge: Principle, Balanced Condition Derivation & Metre Bridge",
    "shortLabel": "Wheatstone Bridge (Balanced Condition P/Q = R/S)",
    "chapterId": "phy-ch-3",
    "chapterTitle": "Current Electricity",
    "unit": "Current Electricity",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency Core Derivation (CBSE 2024 SQP Q9, 2023, 2022, 2019)",
    "questionPrompt": "(a) State the working principle of a Wheatstone bridge.\n(b) Using Kirchhoff's circuit rules, derive the balanced condition for a Wheatstone bridge network: P / Q = R / S.\n(c) Why is the Wheatstone bridge null deflection method considered superior to an ordinary ohmmeter for measuring resistance?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 3: Current Electricity",
      "section": "Sections 3.13 & 3.14 (pp. 118–121)",
      "equations": "Eqs. (3.44), (3.45), (3.46)",
      "figures": "Figs. 3.25, 3.26",
      "summary": "Bridge loop network, application of Kirchhoff's Junction and Loop rules, and null balance condition."
    },
    "theory": [
      "A Wheatstone Bridge is an electrical circuit arrangement consisting of four resistors $P, Q, R, S$ interconnected in a diamond loop, used to measure an unknown electrical resistance with high precision.",
      "Working Principle (Null Deflection Method): When the bridge is balanced, the electric potential at junction $B$ equals the electric potential at junction $D$ ($V_B = V_D$). Consequently, zero current flows through the central galvanometer branch ($I_g = 0$), producing null deflection.",
      "Superiority over ordinary meters: Because it operates on a null deflection principle, no current is drawn from the circuit at balance. The measurement is completely independent of the internal resistance of the cell and galvanometer resistance.",
      "Maximum Sensitivity: The Wheatstone bridge achieves maximum measurement sensitivity when all four arm resistances $P, Q, R, S$ are of approximately the same order of magnitude."
    ],
    "derivations": [
      {
        "name": "Derivation of Balanced Condition Using Kirchhoff's Rules",
        "setup": "Consider four resistors $P, Q, R, S$ arranged along arms $AB, BC, AD, DC$ of diamond network $ABCD$. A galvanometer of resistance $G$ connects between junctions $B$ and $D$. A battery of EMF $\\varepsilon$ is connected between junctions $A$ and $C$.",
        "steps": [
          {
            "text": "Let current entering junction $A$ split into $I_1$ along arm $AB$ (resistor $P$) and $I_2$ along arm $AD$ (resistor $R$). At junction $B$, current $I_g$ enters the galvanometer.",
            "equation": "I = I_1 + I_2"
          },
          {
            "text": "Applying Kirchhoff's Current Law (Junction Rule) at junction $B$ and junction $D$:",
            "equation": "I_{BC} = I_1 - I_g, \\quad I_{DC} = I_2 + I_g"
          },
          {
            "text": "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $ABDA$ (traversing clockwise):",
            "equation": "-I_1 P - I_g G + I_2 R = 0 \\quad \\implies \\quad I_1 P + I_g G = I_2 R"
          },
          {
            "text": "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $BCDB$ (traversing clockwise):",
            "equation": "-(I_1 - I_g)Q + (I_2 + I_g)S + I_g G = 0"
          },
          {
            "text": "Under the balanced condition, the galvanometer shows null deflection, meaning $I_g = 0$:",
            "equation": "I_g = 0"
          },
          {
            "text": "Substituting $I_g = 0$ into the loop equation for $ABDA$:",
            "equation": "I_1 P = I_2 R \\quad \\text{--- (Equation 1)}"
          },
          {
            "text": "Substituting $I_g = 0$ into the loop equation for $BCDB$:",
            "equation": "I_1 Q = I_2 S \\quad \\text{--- (Equation 2)}"
          },
          {
            "text": "Dividing Equation 1 by Equation 2:",
            "equation": "\\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S} \\quad \\implies \\quad \\frac{P}{Q} = \\frac{R}{S}"
          }
        ],
        "specialCases": [
          {
            "title": "Metre Bridge Application:",
            "text": "If arms $P$ and $Q$ are replaced by a uniform slide-wire of length $100\\text{ cm}$ with balance point at length $l$:",
            "equation": "\\frac{R}{S} = \\frac{l}{100 - l} \\quad \\implies \\quad S = R \\left(\\frac{100 - l}{l}\\right)"
          }
        ],
        "finalFormula": "\\frac{P}{Q} = \\frac{R}{S} \\quad (\\text{when } I_g = 0)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "wheatstone-bridge",
      "title": "Wheatstone Bridge Network & Balanced Deflection",
      "examDrawingGuide": [
        "1. Draw diamond shaped quadrilateral labeled junctions $A, B, C, D$.",
        "2. Place resistor $P$ along $AB$, resistor $Q$ along $BC$, resistor $R$ along $AD$, resistor $S$ along $DC$.",
        "3. Draw galvanometer $G$ with key $K_2$ bridging opposite junctions $B$ and $D$.",
        "4. Draw external battery $\\varepsilon$ with key $K_1$ connected across opposite junctions $A$ and $C$."
      ]
    },
    "keyPointsAndKeywords": [
      "Null Deflection Principle (Ig = 0)",
      "Equal Potentials at Junctions (VB = VD)",
      "Kirchhoff's Junction Rule Application",
      "Kirchhoff's Loop Rule Application",
      "Balanced Ratio Formula (P/Q = R/S)",
      "Independent of Galvanometer & Cell Resistance"
    ],
    "termsGlossary": [
      {
        "symbol": "P, Q",
        "term": "Ratio Arms",
        "definition": "Known standard resistance arms whose ratio determines the measurement scale."
      },
      {
        "symbol": "R",
        "term": "Known Standard Resistance",
        "definition": "Variable precision resistance box adjusted to achieve exact null balance."
      },
      {
        "symbol": "S",
        "term": "Unknown Resistance",
        "definition": "Resistance of the test conductor to be measured ($S = R \\cdot Q/P$)."
      },
      {
        "symbol": "I_g",
        "term": "Galvanometer Current",
        "definition": "Current flowing through the detector bridge branch ($I_g = 0$ at balance)."
      }
    ],
    "markingScheme": [
      "0.5 Mark: Principle of Wheatstone bridge (null deflection, $V_B = V_D$).",
      "2 Marks: Rigorous derivation applying Kirchhoff's loop equations to loops ABDA and BCDB and dividing.",
      "0.5 Mark: Explanation of superiority (draws zero current from circuit at balance)."
    ],
    "examinerTips": "Clearly show the sign conventions when traversing loops clockwise. If an arrow is drawn against current traversal, the IR term must be written with a positive sign.",
    "modelAnswer": {
      "statement": "A Wheatstone Bridge is an electrical circuit arrangement consisting of four resistors $P, Q, R, S$ interconnected in a diamond loop, used to measure an unknown electrical resistance with high precision.\nWorking Principle (Null Deflection Method): When the bridge is balanced, the electric potential at junction $B$ equals the electric potential at junction $D$ ($V_B = V_D$). Consequently, zero current flows through the central galvanometer branch ($I_g = 0$), producing null deflection.\nSuperiority over ordinary meters: Because it operates on a null deflection principle, no current is drawn from the circuit at balance. The measurement is completely independent of the internal resistance of the cell and galvanometer resistance.\nMaximum Sensitivity: The Wheatstone bridge achieves maximum measurement sensitivity when all four arm resistances $P, Q, R, S$ are of approximately the same order of magnitude.",
      "derivations": [
        {
          "name": "Derivation of Balanced Condition Using Kirchhoff's Rules",
          "steps": [
            "Consider four resistors $P, Q, R, S$ arranged along arms $AB, BC, AD, DC$ of diamond network $ABCD$. A galvanometer of resistance $G$ connects between junctions $B$ and $D$. A battery of EMF $\\varepsilon$ is connected between junctions $A$ and $C$.",
            "Let current entering junction $A$ split into $I_1$ along arm $AB$ (resistor $P$) and $I_2$ along arm $AD$ (resistor $R$). At junction $B$, current $I_g$ enters the galvanometer. I = I_1 + I_2",
            "Applying Kirchhoff's Current Law (Junction Rule) at junction $B$ and junction $D$: I_{BC} = I_1 - I_g, \\quad I_{DC} = I_2 + I_g",
            "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $ABDA$ (traversing clockwise): -I_1 P - I_g G + I_2 R = 0 \\quad \\implies \\quad I_1 P + I_g G = I_2 R",
            "Applying Kirchhoff's Voltage Law (Loop Rule) to closed mesh $BCDB$ (traversing clockwise): -(I_1 - I_g)Q + (I_2 + I_g)S + I_g G = 0",
            "Under the balanced condition, the galvanometer shows null deflection, meaning $I_g = 0$: I_g = 0",
            "Substituting $I_g = 0$ into the loop equation for $ABDA$: I_1 P = I_2 R \\quad \\text{--- (Equation 1)}",
            "Substituting $I_g = 0$ into the loop equation for $BCDB$: I_1 Q = I_2 S \\quad \\text{--- (Equation 2)}",
            "Dividing Equation 1 by Equation 2: \\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S} \\quad \\implies \\quad \\frac{P}{Q} = \\frac{R}{S}",
            "Metre Bridge Application: If arms $P$ and $Q$ are replaced by a uniform slide-wire of length $100\\text{ cm}$ with balance point at length $l$: \\frac{R}{S} = \\frac{l}{100 - l} \\quad \\implies \\quad S = R \\left(\\frac{100 - l}{l}\\right)"
          ],
          "formula": "\\frac{P}{Q} = \\frac{R}{S} \\quad (\\text{when } I_g = 0)"
        }
      ],
      "diagramNotes": "1. Draw diamond shaped quadrilateral labeled junctions $A, B, C, D$.\n2. Place resistor $P$ along $AB$, resistor $Q$ along $BC$, resistor $R$ along $AD$, resistor $S$ along $DC$.\n3. Draw galvanometer $G$ with key $K_2$ bridging opposite junctions $B$ and $D$.\n4. Draw external battery $\\varepsilon$ with key $K_1$ connected across opposite junctions $A$ and $C$.",
      "markingScheme": [
        "0.5 Mark: Principle of Wheatstone bridge (null deflection, $V_B = V_D$).",
        "2 Marks: Rigorous derivation applying Kirchhoff's loop equations to loops ABDA and BCDB and dividing.",
        "0.5 Mark: Explanation of superiority (draws zero current from circuit at balance)."
      ],
      "examinerTips": "Clearly show the sign conventions when traversing loops clockwise. If an arrow is drawn against current traversal, the IR term must be written with a positive sign."
    }
  },
  {
    "id": "imp-phy-16",
    "number": 16,
    "title": "Magnetic Materials: Properties of Diamagnetic, Paramagnetic & Ferromagnetic",
    "shortLabel": "Magnetic Materials (Dia, Para, Ferro)",
    "chapterId": "phy-ch-5",
    "chapterTitle": "Magnetism and Matter",
    "unit": "Magnetism",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Comparative Theory",
    "frequency": "High Frequency Comparative Question (CBSE 2024 SQP Q20, 2023, 2020)",
    "questionPrompt": "(a) Classify magnetic materials into diamagnetic, paramagnetic, and ferromagnetic substances on the basis of their magnetic susceptibility (χ) and relative permeability (μ_r).\n(b) Explain how the magnetic susceptibility of each type varies with absolute temperature T (State Curie's Law and Curie-Weiss Law).\n(c) How does a specimen of each material behave when suspended freely in a non-uniform external magnetic field?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 5: Magnetism and Matter",
      "section": "Sections 5.6 & 5.7 (pp. 191–197)",
      "equations": "Eqs. (5.14), (5.15), (5.16), (5.17)",
      "figures": "Figs. 5.11, 5.12, 5.13",
      "summary": "Atomic origin of magnetism, comparative table of dia, para, and ferro substances, Curie's temperature dependence, and domain theory."
    },
    "theory": [
      "Diamagnetic Substances: Substances that develop weak magnetization in a direction opposite to the applied external magnetic field. They are feebly repelled by magnets. Origin: Induced paired electron orbital magnetic moments opposing external flux (Lenz's law). Examples: Bismuth, Copper, Water, Lead, Nitrogen.",
      "Paramagnetic Substances: Substances that develop weak magnetization in the same direction as the applied external magnetic field. They are feebly attracted by magnets. Origin: Permanent atomic dipole moments aligning partially along the field against thermal agitation. Examples: Aluminium, Sodium, Calcium, Oxygen (gas), Platinum.",
      "Ferromagnetic Substances: Substances that develop strong magnetization in the same direction as the applied external magnetic field, retaining magnetism even after field removal. Origin: Spontaneous quantum exchange interaction causing macroscopic magnetic domains ($\\sim 10^{11}$ atoms) to align collectively. Examples: Iron, Cobalt, Nickel, Alnico, Gadolinium.",
      "Behavior in Non-Uniform Magnetic Field: Diamagnetic moves from stronger to weaker field regions; Paramagnetic moves from weaker to stronger field regions feebly; Ferromagnetic moves rapidly from weaker to stronger regions."
    ],
    "derivations": [
      {
        "name": "Mathematical Comparison & Temperature Dependence Laws",
        "setup": "Magnetic susceptibility $\\chi_m$ relates induced magnetization $\\vec{M}$ to magnetic intensity $\\vec{H}$: $$\\vec{M} = \\chi_m \\vec{H}$$. Relative permeability is related by: $$\\mu_r = 1 + \\chi_m$$.",
        "steps": [
          {
            "text": "1. Diamagnetic Materials: Susceptibility is small, negative, and independent of temperature:",
            "equation": "-1 \\le \\chi_m < 0, \\quad 0 \\le \\mu_r < 1, \\quad \\frac{d\\chi_m}{dT} = 0 \\quad (\\text{Independent of } T)"
          },
          {
            "text": "For a perfect diamagnet / superconductor (Meissner effect):",
            "equation": "\\chi_m = -1 \\quad \\implies \\quad \\mu_r = 0 \\quad (\\text{Total flux expulsion})"
          },
          {
            "text": "2. Paramagnetic Materials: Susceptibility is small, positive, and inversely proportional to absolute temperature (Curie's Law):",
            "equation": "0 < \\chi_m \\ll 1, \\quad \\mu_r > 1, \\quad \\chi_m = \\frac{C}{T} \\quad (C = \\text{Curie's constant})"
          },
          {
            "text": "3. Ferromagnetic Materials: Susceptibility is very large, positive ($\\chi_m \\gg 1000$), and drops above the Curie temperature $T_c$ according to the Curie-Weiss Law:",
            "equation": "\\chi_m = \\frac{C'}{T - T_c} \\quad (\\text{for } T > T_c)"
          },
          {
            "text": "Above the critical Curie Temperature $T_c$, thermal agitation disrupts domain alignment, and a ferromagnetic substance transitions into a simple paramagnetic substance:",
            "equation": "\\text{Ferromagnetic} \\xrightarrow{T > T_c} \\text{Paramagnetic}"
          }
        ],
        "specialCases": [
          {
            "title": "Magnetic Field Line Behavior inside Material:",
            "text": "Diamagnetic expels field lines (lines avoid material); Paramagnetic concentrates field lines slightly; Ferromagnetic pulls field lines strongly inward:",
            "equation": "B_{\\text{dia}} < B_0, \\quad B_{\\text{para}} > B_0, \\quad B_{\\text{ferro}} \\gg B_0"
          }
        ],
        "finalFormula": "\\text{Dia: } \\chi < 0 (T\\text{-indep}); \\quad \\text{Para: } \\chi = \\frac{C}{T}; \\quad \\text{Ferro: } \\chi = \\frac{C'}{T - T_c} (T > T_c)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "magnetic-materials",
      "title": "Behavior of Magnetic Field Lines in Dia, Para, and Ferro Substances",
      "examDrawingGuide": [
        "1. Draw three rectangular blocks representing specimens in uniform external field lines.",
        "2. Diamagnetic: Show field lines bending outward and avoiding the specimen ($B < B_0$).",
        "3. Paramagnetic: Show field lines bending slightly inward and passing through the specimen ($B > B_0$).",
        "4. Ferromagnetic: Show field lines crowding strongly and densely into the specimen ($B \\gg B_0$)."
      ]
    },
    "keyPointsAndKeywords": [
      "Magnetic Susceptibility (χ = M/H)",
      "Relative Permeability (μ_r = 1 + χ)",
      "Diamagnetic Negative Susceptibility (Independent of T)",
      "Paramagnetic Curie's Law (χ ∝ 1/T)",
      "Ferromagnetic Domain Theory",
      "Curie-Weiss Law (χ = C'/(T - Tc))",
      "Meissner Effect in Superconductors (χ = -1, μ_r = 0)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\chi_m",
        "term": "Magnetic Susceptibility",
        "definition": "Dimensionless ratio of intensity of magnetization $M$ to applied magnetic intensity $H$."
      },
      {
        "symbol": "\\mu_r",
        "term": "Relative Magnetic Permeability",
        "definition": "Ratio of magnetic permeability of material to vacuum permeability ($\\mu_r = \\mu / \\mu_0 = 1 + \\chi_m$)."
      },
      {
        "symbol": "T_c",
        "term": "Curie Temperature",
        "definition": "Critical threshold temperature above which a ferromagnetic material loses its spontaneous magnetization and turns paramagnetic (e.g. Iron $T_c = 1043\\text{ K}$)."
      },
      {
        "symbol": "C",
        "term": "Curie Constant",
        "definition": "Material-specific constant in Curie's law governing temperature decay of magnetic alignment."
      }
    ],
    "markingScheme": [
      "1 Mark: Complete comparative table of $\\chi_m$ and $\\mu_r$ ranges for dia, para, and ferro.",
      "1 Mark: Statement and mathematical forms of Curie's Law and Curie-Weiss Law with temperature dependence.",
      "1 Mark: Behavior in non-uniform field and field line sketches showing expulsion vs crowding."
    ],
    "examinerTips": "Remember that diamagnetism is universal (present in all substances), but masked whenever paramagnetic or ferromagnetic dipole moments exist.",
    "modelAnswer": {
      "statement": "Diamagnetic Substances: Substances that develop weak magnetization in a direction opposite to the applied external magnetic field. They are feebly repelled by magnets. Origin: Induced paired electron orbital magnetic moments opposing external flux (Lenz's law). Examples: Bismuth, Copper, Water, Lead, Nitrogen.\nParamagnetic Substances: Substances that develop weak magnetization in the same direction as the applied external magnetic field. They are feebly attracted by magnets. Origin: Permanent atomic dipole moments aligning partially along the field against thermal agitation. Examples: Aluminium, Sodium, Calcium, Oxygen (gas), Platinum.\nFerromagnetic Substances: Substances that develop strong magnetization in the same direction as the applied external magnetic field, retaining magnetism even after field removal. Origin: Spontaneous quantum exchange interaction causing macroscopic magnetic domains ($\\sim 10^{11}$ atoms) to align collectively. Examples: Iron, Cobalt, Nickel, Alnico, Gadolinium.\nBehavior in Non-Uniform Magnetic Field: Diamagnetic moves from stronger to weaker field regions; Paramagnetic moves from weaker to stronger field regions feebly; Ferromagnetic moves rapidly from weaker to stronger regions.",
      "derivations": [
        {
          "name": "Mathematical Comparison & Temperature Dependence Laws",
          "steps": [
            "Magnetic susceptibility $\\chi_m$ relates induced magnetization $\\vec{M}$ to magnetic intensity $\\vec{H}$: $$\\vec{M} = \\chi_m \\vec{H}$$. Relative permeability is related by: $$\\mu_r = 1 + \\chi_m$$.",
            "1. Diamagnetic Materials: Susceptibility is small, negative, and independent of temperature: -1 \\le \\chi_m < 0, \\quad 0 \\le \\mu_r < 1, \\quad \\frac{d\\chi_m}{dT} = 0 \\quad (\\text{Independent of } T)",
            "For a perfect diamagnet / superconductor (Meissner effect): \\chi_m = -1 \\quad \\implies \\quad \\mu_r = 0 \\quad (\\text{Total flux expulsion})",
            "2. Paramagnetic Materials: Susceptibility is small, positive, and inversely proportional to absolute temperature (Curie's Law): 0 < \\chi_m \\ll 1, \\quad \\mu_r > 1, \\quad \\chi_m = \\frac{C}{T} \\quad (C = \\text{Curie's constant})",
            "3. Ferromagnetic Materials: Susceptibility is very large, positive ($\\chi_m \\gg 1000$), and drops above the Curie temperature $T_c$ according to the Curie-Weiss Law: \\chi_m = \\frac{C'}{T - T_c} \\quad (\\text{for } T > T_c)",
            "Above the critical Curie Temperature $T_c$, thermal agitation disrupts domain alignment, and a ferromagnetic substance transitions into a simple paramagnetic substance: \\text{Ferromagnetic} \\xrightarrow{T > T_c} \\text{Paramagnetic}",
            "Magnetic Field Line Behavior inside Material: Diamagnetic expels field lines (lines avoid material); Paramagnetic concentrates field lines slightly; Ferromagnetic pulls field lines strongly inward: B_{\\text{dia}} < B_0, \\quad B_{\\text{para}} > B_0, \\quad B_{\\text{ferro}} \\gg B_0"
          ],
          "formula": "\\text{Dia: } \\chi < 0 (T\\text{-indep}); \\quad \\text{Para: } \\chi = \\frac{C}{T}; \\quad \\text{Ferro: } \\chi = \\frac{C'}{T - T_c} (T > T_c)"
        }
      ],
      "diagramNotes": "1. Draw three rectangular blocks representing specimens in uniform external field lines.\n2. Diamagnetic: Show field lines bending outward and avoiding the specimen ($B < B_0$).\n3. Paramagnetic: Show field lines bending slightly inward and passing through the specimen ($B > B_0$).\n4. Ferromagnetic: Show field lines crowding strongly and densely into the specimen ($B \\gg B_0$).",
      "markingScheme": [
        "1 Mark: Complete comparative table of $\\chi_m$ and $\\mu_r$ ranges for dia, para, and ferro.",
        "1 Mark: Statement and mathematical forms of Curie's Law and Curie-Weiss Law with temperature dependence.",
        "1 Mark: Behavior in non-uniform field and field line sketches showing expulsion vs crowding."
      ],
      "examinerTips": "Remember that diamagnetism is universal (present in all substances), but masked whenever paramagnetic or ferromagnetic dipole moments exist."
    }
  },
  {
    "id": "imp-phy-17",
    "number": 17,
    "title": "AC Circuits: Pure Inductor, Pure Capacitor & Series LCR Resonance",
    "shortLabel": "Series LCR Resonance & Impedance",
    "chapterId": "phy-ch-7",
    "chapterTitle": "Alternating Current",
    "unit": "Electromagnetic Induction & Alternating Current",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q33, 2023, 2022, 2020)",
    "questionPrompt": "(a) A series combination of an inductor L, capacitor C, and resistor R is connected across an AC source V = V₀ sin(ωt). Using phasor diagram technique, derive expressions for:\n  (i) Impedance (Z) of the circuit.\n  (ii) Phase angle (ϕ) between alternating voltage and current.\n(b) Define electrical resonance. Derive the formula for resonant frequency (ωᵣ) and define Quality Factor (Q-factor).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 7: Alternating Current",
      "section": "Sections 7.4, 7.5, 7.6 (pp. 240–252)",
      "equations": "Eqs. (7.25), (7.26), (7.27), (7.36), (7.40)",
      "figures": "Figs. 7.12, 7.13, 7.14",
      "summary": "Phasor analysis of series LCR circuit, impedance triangle, resonance frequency condition, and sharpness of resonance (Q-factor)."
    },
    "theory": [
      "In a Series LCR Circuit, the same alternating current $I = I_0 \\sin(\\omega t)$ flows through the resistor $R$, inductor $L$, and capacitor $C$ in series.",
      "Voltage across Resistor: $V_R = I R$ is completely in phase with current $I$ (phase difference $\\phi = 0$).",
      "Voltage across Inductor: $V_L = I X_L = I(\\omega L)$ leads current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).",
      "Voltage across Capacitor: $V_C = I X_C = I(1/\\omega C)$ lags current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).",
      "Electrical Resonance occurs when inductive reactance equals capacitive reactance ($X_L = X_C$). Under this condition, the net reactive voltage is zero ($V_L - V_C = 0$), impedance is strictly minimum ($Z = R$), current amplitude is maximum ($I_0 = V_0/R$), and voltage and current are in phase (power factor $\\cos\\phi = 1$)."
    ],
    "derivations": [
      {
        "name": "Part 1: Derivation of Impedance Z & Phase Angle ϕ using Phasors",
        "setup": "Let alternating current in the circuit be $I = I_0 \\sin(\\omega t)$. Let peak voltages across components be represented by rotating phasors $\\vec{V}_R$, $\\vec{V}_L$, and $\\vec{V}_C$. Assume $V_L > V_C$ (predominantly inductive circuit).",
        "steps": [
          {
            "text": "Peak voltage across resistor $R$ along the current phasor direction is:",
            "equation": "V_R = I_0 R"
          },
          {
            "text": "Peak voltage across inductor $L$ leading current by $+90^\\circ$ is:",
            "equation": "V_L = I_0 X_L = I_0 (\\omega L)"
          },
          {
            "text": "Peak voltage across capacitor $C$ lagging current by $-90^\\circ$ is:",
            "equation": "V_C = I_0 X_C = I_0 \\left(\\frac{1}{\\omega C}\\right)"
          },
          {
            "text": "Since phasors $\\vec{V}_L$ and $\\vec{V}_C$ are collinear and point in opposite directions ($180^\\circ$ apart), their resultant reactive phasor is:",
            "equation": "V_L - V_C = I_0(X_L - X_C) = I_0\\left(\\omega L - \\frac{1}{\\omega C}\\right)"
          },
          {
            "text": "By the Pythagorean theorem in the phasor voltage right-triangle:",
            "equation": "V_0^2 = V_R^2 + (V_L - V_C)^2 = (I_0 R)^2 + [I_0(X_L - X_C)]^2"
          },
          {
            "text": "Factoring out $I_0^2$:",
            "equation": "V_0^2 = I_0^2 \\left[ R^2 + (X_L - X_C)^2 \\right] \\quad \\implies \\quad V_0 = I_0 \\sqrt{R^2 + (X_L - X_C)^2}"
          },
          {
            "text": "The total effective opposition offered by the circuit to AC is called Impedance ($Z = V_0 / I_0$):",
            "equation": "Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}"
          },
          {
            "text": "From the phasor triangle, the phase angle $\\phi$ between source voltage and current satisfies:",
            "equation": "\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{I_0(X_L - X_C)}{I_0 R} = \\frac{X_L - X_C}{R} = \\frac{\\omega L - \\frac{1}{\\omega C}}{R}"
          }
        ],
        "specialCases": [
          {
            "title": "Power Factor:",
            "text": "The power factor of the circuit is given by the cosine of the phase angle:",
            "equation": "\\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}}"
          }
        ],
        "finalFormula": "Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}, \\quad \\tan\\phi = \\frac{\\omega L - 1/(\\omega C)}{R}"
      },
      {
        "name": "Part 2: Resonance Condition & Quality Factor (Q-factor)",
        "setup": "Electrical resonance occurs at that angular frequency $\\omega_r$ where inductive reactance exactly equals capacitive reactance.",
        "steps": [
          {
            "text": "Condition for resonance:",
            "equation": "X_L = X_C \\quad \\implies \\quad \\omega_r L = \\frac{1}{\\omega_r C}"
          },
          {
            "text": "Solving for resonant angular frequency $\\omega_r$:",
            "equation": "\\omega_r^2 = \\frac{1}{L C} \\quad \\implies \\quad \\omega_r = \\frac{1}{\\sqrt{L C}}"
          },
          {
            "text": "Resonant linear frequency in Hertz ($f_r = \\omega_r / 2\\pi$):",
            "equation": "f_r = \\frac{1}{2\\pi \\sqrt{L C}}"
          },
          {
            "text": "At resonance, impedance is purely resistive and minimum:",
            "equation": "Z_{\\text{min}} = \\sqrt{R^2 + 0} = R"
          },
          {
            "text": "Current amplitude attains its maximum possible value:",
            "equation": "I_{0,\\text{max}} = \\frac{V_0}{R}"
          },
          {
            "text": "Quality Factor ($Q$-factor) is defined as the voltage magnification across inductor or capacitor at resonance compared to source voltage:",
            "equation": "Q = \\frac{V_L}{V} = \\frac{I_0 X_L}{I_0 R} = \\frac{\\omega_r L}{R} = \\frac{1}{\\sqrt{LC}} \\frac{L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}"
          }
        ],
        "specialCases": [
          {
            "title": "Sharpness of Tuning:",
            "text": "A higher $Q$-factor indicates a sharper, narrower resonance curve, giving better channel selectivity in radio receivers:",
            "equation": "Q = \\frac{\\omega_r}{2\\Delta\\omega} = \\frac{\\text{Resonant Frequency}}{\\text{Bandwidth}}"
          }
        ],
        "finalFormula": "\\omega_r = \\frac{1}{\\sqrt{LC}}, \\quad Z_{\\text{min}} = R, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "lcr-circuit",
      "title": "Series LCR Phasor Diagram & Resonance Curve",
      "examDrawingGuide": [
        "1. Draw series circuit loop containing AC generator $V$, inductor $L$, capacitor $C$, and resistor $R$.",
        "2. Draw Phasor Diagram: horizontal current axis with phasor $V_R$; vertical phasor $V_L$ pointing up ($+90^\\circ$); vertical phasor $V_C$ pointing down ($-90^\\circ$).",
        "3. Draw net reactive vector $V_L - V_C$ pointing upwards; complete the rectangle to draw diagonal resultant source voltage $V_0$ at angle $\\phi$.",
        "4. Draw resonance response curve: current $I$ versus angular frequency $\\omega$ peaking sharply at $\\omega = \\omega_r$."
      ]
    },
    "keyPointsAndKeywords": [
      "Series Current Common to all Components",
      "Phasor Leads and Lags (VL leads by π/2, VC lags by π/2)",
      "Impedance Formula Z = √(R² + (XL - XC)²)",
      "Resonance Condition (XL = XC)",
      "Resonant Frequency (ω = 1/√(LC))",
      "Minimum Impedance (Z = R) & Maximum Current",
      "Quality Factor (Q = (1/R)√(L/C))"
    ],
    "termsGlossary": [
      {
        "symbol": "Z",
        "term": "Impedance",
        "definition": "Total effective opposition offered by an AC circuit to current flow, measured in Ohms ($\\Omega$)."
      },
      {
        "symbol": "X_L = \\omega L",
        "term": "Inductive Reactance",
        "definition": "Opposition offered by inductor to alternating current, proportional to frequency ($\\Omega$)."
      },
      {
        "symbol": "X_C = \\frac{1}{\\omega C}",
        "term": "Capacitive Reactance",
        "definition": "Opposition offered by capacitor to alternating current, inversely proportional to frequency ($\\Omega$)."
      },
      {
        "symbol": "\\phi",
        "term": "Phase Angle",
        "definition": "Angle by which applied voltage leads or lags resultant current in the circuit."
      },
      {
        "symbol": "Q",
        "term": "Quality Factor (Q-factor)",
        "definition": "Dimensionless figure of merit measuring sharpness of resonance and voltage magnification: $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Clear phasor diagram and geometric derivation of impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.",
      "1 Mark: Derivation of phase angle $\\tan\\phi = (X_L - X_C)/R$.",
      "1.5 Marks: Derivation of resonant frequency $\\omega_r = 1/\\sqrt{LC}$ from condition $X_L = X_C$.",
      "1 Mark: Definition and mathematical formula of Quality Factor $Q = (1/R)\\sqrt{L/C}$."
    ],
    "examinerTips": "In the phasor diagram, clearly mark the right triangle and show the direction of angle $\\phi$. State explicitly that at resonance, current and voltage are in the same phase ($\\\\phi = 0$).",
    "modelAnswer": {
      "statement": "In a Series LCR Circuit, the same alternating current $I = I_0 \\sin(\\omega t)$ flows through the resistor $R$, inductor $L$, and capacitor $C$ in series.\nVoltage across Resistor: $V_R = I R$ is completely in phase with current $I$ (phase difference $\\phi = 0$).\nVoltage across Inductor: $V_L = I X_L = I(\\omega L)$ leads current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).\nVoltage across Capacitor: $V_C = I X_C = I(1/\\omega C)$ lags current $I$ by a phase angle of $\\pi/2$ ($90^\\circ$).\nElectrical Resonance occurs when inductive reactance equals capacitive reactance ($X_L = X_C$). Under this condition, the net reactive voltage is zero ($V_L - V_C = 0$), impedance is strictly minimum ($Z = R$), current amplitude is maximum ($I_0 = V_0/R$), and voltage and current are in phase (power factor $\\cos\\phi = 1$).",
      "derivations": [
        {
          "name": "Part 1: Derivation of Impedance Z & Phase Angle ϕ using Phasors",
          "steps": [
            "Let alternating current in the circuit be $I = I_0 \\sin(\\omega t)$. Let peak voltages across components be represented by rotating phasors $\\vec{V}_R$, $\\vec{V}_L$, and $\\vec{V}_C$. Assume $V_L > V_C$ (predominantly inductive circuit).",
            "Peak voltage across resistor $R$ along the current phasor direction is: V_R = I_0 R",
            "Peak voltage across inductor $L$ leading current by $+90^\\circ$ is: V_L = I_0 X_L = I_0 (\\omega L)",
            "Peak voltage across capacitor $C$ lagging current by $-90^\\circ$ is: V_C = I_0 X_C = I_0 \\left(\\frac{1}{\\omega C}\\right)",
            "Since phasors $\\vec{V}_L$ and $\\vec{V}_C$ are collinear and point in opposite directions ($180^\\circ$ apart), their resultant reactive phasor is: V_L - V_C = I_0(X_L - X_C) = I_0\\left(\\omega L - \\frac{1}{\\omega C}\\right)",
            "By the Pythagorean theorem in the phasor voltage right-triangle: V_0^2 = V_R^2 + (V_L - V_C)^2 = (I_0 R)^2 + [I_0(X_L - X_C)]^2",
            "Factoring out $I_0^2$: V_0^2 = I_0^2 \\left[ R^2 + (X_L - X_C)^2 \\right] \\quad \\implies \\quad V_0 = I_0 \\sqrt{R^2 + (X_L - X_C)^2}",
            "The total effective opposition offered by the circuit to AC is called Impedance ($Z = V_0 / I_0$): Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}",
            "From the phasor triangle, the phase angle $\\phi$ between source voltage and current satisfies: \\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{I_0(X_L - X_C)}{I_0 R} = \\frac{X_L - X_C}{R} = \\frac{\\omega L - \\frac{1}{\\omega C}}{R}",
            "Power Factor: The power factor of the circuit is given by the cosine of the phase angle: \\cos\\phi = \\frac{R}{Z} = \\frac{R}{\\sqrt{R^2 + (X_L - X_C)^2}}"
          ],
          "formula": "Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}, \\quad \\tan\\phi = \\frac{\\omega L - 1/(\\omega C)}{R}"
        },
        {
          "name": "Part 2: Resonance Condition & Quality Factor (Q-factor)",
          "steps": [
            "Electrical resonance occurs at that angular frequency $\\omega_r$ where inductive reactance exactly equals capacitive reactance.",
            "Condition for resonance: X_L = X_C \\quad \\implies \\quad \\omega_r L = \\frac{1}{\\omega_r C}",
            "Solving for resonant angular frequency $\\omega_r$: \\omega_r^2 = \\frac{1}{L C} \\quad \\implies \\quad \\omega_r = \\frac{1}{\\sqrt{L C}}",
            "Resonant linear frequency in Hertz ($f_r = \\omega_r / 2\\pi$): f_r = \\frac{1}{2\\pi \\sqrt{L C}}",
            "At resonance, impedance is purely resistive and minimum: Z_{\\text{min}} = \\sqrt{R^2 + 0} = R",
            "Current amplitude attains its maximum possible value: I_{0,\\text{max}} = \\frac{V_0}{R}",
            "Quality Factor ($Q$-factor) is defined as the voltage magnification across inductor or capacitor at resonance compared to source voltage: Q = \\frac{V_L}{V} = \\frac{I_0 X_L}{I_0 R} = \\frac{\\omega_r L}{R} = \\frac{1}{\\sqrt{LC}} \\frac{L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}",
            "Sharpness of Tuning: A higher $Q$-factor indicates a sharper, narrower resonance curve, giving better channel selectivity in radio receivers: Q = \\frac{\\omega_r}{2\\Delta\\omega} = \\frac{\\text{Resonant Frequency}}{\\text{Bandwidth}}"
          ],
          "formula": "\\omega_r = \\frac{1}{\\sqrt{LC}}, \\quad Z_{\\text{min}} = R, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}"
        }
      ],
      "diagramNotes": "1. Draw series circuit loop containing AC generator $V$, inductor $L$, capacitor $C$, and resistor $R$.\n2. Draw Phasor Diagram: horizontal current axis with phasor $V_R$; vertical phasor $V_L$ pointing up ($+90^\\circ$); vertical phasor $V_C$ pointing down ($-90^\\circ$).\n3. Draw net reactive vector $V_L - V_C$ pointing upwards; complete the rectangle to draw diagonal resultant source voltage $V_0$ at angle $\\phi$.\n4. Draw resonance response curve: current $I$ versus angular frequency $\\omega$ peaking sharply at $\\omega = \\omega_r$.",
      "markingScheme": [
        "1.5 Marks: Clear phasor diagram and geometric derivation of impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.",
        "1 Mark: Derivation of phase angle $\\tan\\phi = (X_L - X_C)/R$.",
        "1.5 Marks: Derivation of resonant frequency $\\omega_r = 1/\\sqrt{LC}$ from condition $X_L = X_C$.",
        "1 Mark: Definition and mathematical formula of Quality Factor $Q = (1/R)\\sqrt{L/C}$."
      ],
      "examinerTips": "In the phasor diagram, clearly mark the right triangle and show the direction of angle $\\phi$. State explicitly that at resonance, current and voltage are in the same phase ($\\\\phi = 0$)."
    }
  },
  {
    "id": "imp-phy-18",
    "number": 18,
    "title": "Electric Field of a Dipole: Axial and Equatorial Positions",
    "shortLabel": "Dipole Field (Axial & Equatorial)",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "5 Marks",
    "marksNum": 5,
    "category": "Derivation",
    "frequency": "Guaranteed 5-Mark Question (CBSE 2024 SQP Q1, 2023, 2022, 2019)",
    "questionPrompt": "(a) Define an electric dipole and electric dipole moment. Write its SI unit and direction.\n(b) Derive an expression for the electric field intensity at a point on:\n  (i) The axial line of an electric dipole.\n  (ii) The equatorial line of an electric dipole.\n(c) For a short dipole, show that the electric field at an axial point is twice the electric field at an equatorial point at the same distance.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Section 1.11: Field of an Electric Dipole (pp. 27–31)",
      "equations": "Eqs. (1.15), (1.16), (1.20), (1.21)",
      "figures": "Figs. 1.20, 1.21",
      "summary": "Exact step-by-step vector derivations on dipole axis and equatorial bisector, matching NODIA Chapterwise Question Bank page 83."
    },
    "theory": [
      "An Electric Dipole is a system of two equal and opposite point charges $+q$ and $-q$ separated by a small finite distance $2a$.",
      "Electric Dipole Moment $\\vec{p}$ is a vector quantity defined as the product of the magnitude of either charge $q$ and the displacement vector $2\\vec{a}$ separating them: $$\\vec{p} = q(2\\vec{a})$$",
      "SI unit of dipole moment is Coulomb-metre ($\\text{C}\\cdot\\text{m}$). Direction: By universal convention, directed along the dipole axis from the negative charge ($-q$) to the positive charge ($+q$).",
      "Axial Field Direction: At any point on the axial line, the resultant electric field is parallel to the dipole moment vector $\\vec{p}$.",
      "Equatorial Field Direction: At any point on the equatorial line (perpendicular bisector), the resultant electric field is antiparallel (opposite) to the dipole moment vector $\\vec{p}$."
    ],
    "derivations": [
      {
        "name": "Part 1: Electric Field at a Point on the Axial Line (End-on Position)",
        "setup": "Consider an electric dipole consisting of two point charges $-q$ and $+q$ separated by distance $2a$ and placed in vacuum. Let $P$ be a point on the axial line at distance $r$ from the centre $O$ of the dipole on the side of charge $+q$.",
        "steps": [
          {
            "text": "Electric field at point $P$ due to charge $-q$ located at distance $(r + a)$ is directed towards the left (along $-\\hat{p}$):",
            "equation": "\\vec{E}_{-q} = -\\frac{q}{4\\pi \\varepsilon_0 (r + a)^2} \\hat{p}"
          },
          {
            "text": "where $\\hat{p}$ is a unit vector along the dipole axis from $-q$ to $+q$. Electric field due to charge $+q$ located at distance $(r - a)$ is directed towards the right (along $+\\hat{p}$):",
            "equation": "\\vec{E}_{+q} = \\frac{q}{4\\pi \\varepsilon_0 (r - a)^2} \\hat{p}"
          },
          {
            "text": "Hence, the resultant electric field at point $P$ is the vector sum of both fields:",
            "equation": "\\vec{E}_{\\text{axial}} = \\vec{E}_{+q} + \\vec{E}_{-q} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{1}{(r - a)^2} - \\frac{1}{(r + a)^2} \\right] \\hat{p}"
          },
          {
            "text": "Taking the common denominator and expanding the terms in the numerator:",
            "equation": "\\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r + a)^2 - (r - a)^2}{(r^2 - a^2)^2} \\right] \\hat{p} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r^2 + 2ar + a^2) - (r^2 - 2ar + a^2)}{(r^2 - a^2)^2} \\right] \\hat{p}"
          },
          {
            "text": "Simplifying the numerator:",
            "equation": "\\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\frac{4ar}{(r^2 - a^2)^2} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2(q \\cdot 2a)r}{(r^2 - a^2)^2} \\hat{p}"
          },
          {
            "text": "Substituting the dipole moment magnitude $p = q(2a)$:",
            "equation": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{(r^2 - a^2)^2} \\hat{p}"
          }
        ],
        "specialCases": [
          {
            "title": "Short Dipole Approximation (r ≫ a):",
            "text": "For distances much larger than the dipole separation ($r \\gg a$), $a^2$ can be neglected compared to $r^2$:",
            "equation": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{r^4} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2\\vec{p}}{r^3}"
          }
        ],
        "finalFormula": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2\\vec{p}}{r^3} \\quad (\\text{parallel to } \\vec{p})"
      },
      {
        "name": "Part 2: Electric Field at a Point on the Equatorial Line (Broadside-on Position)",
        "setup": "Consider point $Q$ located on the equatorial line (perpendicular bisector) at distance $r$ from the centre $O$ of the dipole. The distance of point $Q$ from each charge is $\\sqrt{r^2 + a^2}$.",
        "steps": [
          {
            "text": "The magnitudes of the electric fields produced by $+q$ and $-q$ at point $Q$ are equal by symmetry:",
            "equation": "E_{+q} = E_{-q} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2}"
          },
          {
            "text": "Resolving both field vectors into components: The components perpendicular to the dipole axis ($E_{+q}\\sin\\theta$ and $E_{-q}\\sin\\theta$) are equal in magnitude and opposite in direction, so they cancel out completely:",
            "equation": "E_{\\perp} = E_{+q}\\sin\\theta - E_{-q}\\sin\\theta = 0"
          },
          {
            "text": "The components parallel to the dipole axis ($E_{+q}\\cos\\theta$ and $E_{-q}\\cos\\theta$) add up constructively in the direction opposite to $\\vec{p}$ (towards $-\\hat{p}$):",
            "equation": "\\vec{E}_{\\text{eq}} = -\\left( E_{+q}\\cos\\theta + E_{-q}\\cos\\theta \\right) \\hat{p} = -2 E_{+q}\\cos\\theta \\, \\hat{p}"
          },
          {
            "text": "From the right-angled triangle, $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$. Substituting $E_{+q}$ and $\\cos\\theta$:",
            "equation": "\\vec{E}_{\\text{eq}} = -2 \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2} \\right) \\left( \\frac{a}{\\sqrt{r^2 + a^2}} \\right) \\hat{p} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{q(2a)}{(r^2 + a^2)^{3/2}} \\hat{p}"
          },
          {
            "text": "Substituting dipole moment $p = q(2a)$:",
            "equation": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{(r^2 + a^2)^{3/2}}"
          }
        ],
        "specialCases": [
          {
            "title": "Short Dipole Approximation (r ≫ a):",
            "text": "Neglecting $a^2$ in comparison to $r^2$:",
            "equation": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{r^3}"
          },
          {
            "title": "Comparison between Axial and Equatorial Fields:",
            "text": "For a short dipole at the same distance $r$, the magnitude of the axial field is exactly twice the equatorial field:",
            "equation": "E_{\\text{axial}} = 2 \\, E_{\\text{eq}}"
          }
        ],
        "finalFormula": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{\\vec{p}}{r^3}, \\quad E_{\\text{axial}} = 2 E_{\\text{eq}}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "dipole-fields",
      "title": "Electric Dipole: Axial and Equatorial Geometry",
      "examDrawingGuide": [
        "1. Axial Line: Draw horizontal axis with charges $-q$ and $+q$ separated by $2a$; mark midpoint $O$; mark point $P$ at distance $r$ from $O$ along axis; draw longer arrow $\\vec{E}_{+q}$ to the right, shorter arrow $\\vec{E}_{-q}$ to the left, and net arrow $\\vec{E}_{\\text{axial}}$ to the right.",
        "2. Equatorial Line: Draw horizontal dipole $-q$ and $+q$; draw vertical perpendicular bisector from $O$; mark point $Q$ at height $r$; draw $\\vec{E}_{+q}$ pointing diagonally away and $\\vec{E}_{-q}$ pointing diagonally toward $-q$; show vertical components cancelling and horizontal components adding opposite to dipole moment."
      ]
    },
    "keyPointsAndKeywords": [
      "Dipole Moment Vector (p = q(2a), directed -q to +q)",
      "Axial Vector Addition (E_+q to right, E_-q to left)",
      "Equatorial Component Resolution (sinθ cancels, cosθ adds)",
      "Inverse Cube Distance Dependence (E ∝ 1/r³)",
      "Axial Field Parallel to p̂",
      "Equatorial Field Antiparallel to p̂",
      "Ratio Formula: E_axial = 2 × E_eq"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{p}",
        "term": "Electric Dipole Moment",
        "definition": "Vector parameter of dipole: $\\vec{p} = q(2\\vec{a})$, measured in $\\text{C}\\cdot\\text{m}$, directed from $-q$ to $+q$."
      },
      {
        "symbol": "2a",
        "term": "Dipole Separation (Length)",
        "definition": "Finite vector distance between the centers of the two constituent point charges."
      },
      {
        "symbol": "r",
        "term": "Observation Distance",
        "definition": "Distance of field point from the geometric center $O$ of the dipole."
      },
      {
        "symbol": "\\hat{p}",
        "term": "Dipole Unit Vector",
        "definition": "Unit vector pointing along the dipole axis in the direction from negative to positive charge."
      }
    ],
    "markingScheme": [
      "1 Mark: Definition of electric dipole moment with formula, SI unit, and direction.",
      "2 Marks: Rigorous step-by-step derivation of axial field $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^3}$.",
      "2 Marks: Step-by-step component derivation of equatorial field $E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{r^3}$ and proof of ratio $E_{\\text{axial}} = 2E_{\\text{eq}}$."
    ],
    "examinerTips": "Common mistake: forgetting vector signs! Write $\\vec{E}_{\\text{axial}}$ with $+\\hat{p}$ and $\\vec{E}_{\\text{eq}}$ with $-\\hat{p}$. In the short dipole step, explicitly state 'neglecting $a^2$ in comparison with $r^2$'.",
    "modelAnswer": {
      "statement": "An Electric Dipole is a system of two equal and opposite point charges $+q$ and $-q$ separated by a small finite distance $2a$.\nElectric Dipole Moment $\\vec{p}$ is a vector quantity defined as the product of the magnitude of either charge $q$ and the displacement vector $2\\vec{a}$ separating them: $$\\vec{p} = q(2\\vec{a})$$\nSI unit of dipole moment is Coulomb-metre ($\\text{C}\\cdot\\text{m}$). Direction: By universal convention, directed along the dipole axis from the negative charge ($-q$) to the positive charge ($+q$).\nAxial Field Direction: At any point on the axial line, the resultant electric field is parallel to the dipole moment vector $\\vec{p}$.\nEquatorial Field Direction: At any point on the equatorial line (perpendicular bisector), the resultant electric field is antiparallel (opposite) to the dipole moment vector $\\vec{p}$.",
      "derivations": [
        {
          "name": "Part 1: Electric Field at a Point on the Axial Line (End-on Position)",
          "steps": [
            "Consider an electric dipole consisting of two point charges $-q$ and $+q$ separated by distance $2a$ and placed in vacuum. Let $P$ be a point on the axial line at distance $r$ from the centre $O$ of the dipole on the side of charge $+q$.",
            "Electric field at point $P$ due to charge $-q$ located at distance $(r + a)$ is directed towards the left (along $-\\hat{p}$): \\vec{E}_{-q} = -\\frac{q}{4\\pi \\varepsilon_0 (r + a)^2} \\hat{p}",
            "where $\\hat{p}$ is a unit vector along the dipole axis from $-q$ to $+q$. Electric field due to charge $+q$ located at distance $(r - a)$ is directed towards the right (along $+\\hat{p}$): \\vec{E}_{+q} = \\frac{q}{4\\pi \\varepsilon_0 (r - a)^2} \\hat{p}",
            "Hence, the resultant electric field at point $P$ is the vector sum of both fields: \\vec{E}_{\\text{axial}} = \\vec{E}_{+q} + \\vec{E}_{-q} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{1}{(r - a)^2} - \\frac{1}{(r + a)^2} \\right] \\hat{p}",
            "Taking the common denominator and expanding the terms in the numerator: \\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r + a)^2 - (r - a)^2}{(r^2 - a^2)^2} \\right] \\hat{p} = \\frac{q}{4\\pi \\varepsilon_0} \\left[ \\frac{(r^2 + 2ar + a^2) - (r^2 - 2ar + a^2)}{(r^2 - a^2)^2} \\right] \\hat{p}",
            "Simplifying the numerator: \\vec{E}_{\\text{axial}} = \\frac{q}{4\\pi \\varepsilon_0} \\frac{4ar}{(r^2 - a^2)^2} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2(q \\cdot 2a)r}{(r^2 - a^2)^2} \\hat{p}",
            "Substituting the dipole moment magnitude $p = q(2a)$: \\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{(r^2 - a^2)^2} \\hat{p}",
            "Short Dipole Approximation (r ≫ a): For distances much larger than the dipole separation ($r \\gg a$), $a^2$ can be neglected compared to $r^2$: \\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2pr}{r^4} \\hat{p} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2\\vec{p}}{r^3}"
          ],
          "formula": "\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2\\vec{p}}{r^3} \\quad (\\text{parallel to } \\vec{p})"
        },
        {
          "name": "Part 2: Electric Field at a Point on the Equatorial Line (Broadside-on Position)",
          "steps": [
            "Consider point $Q$ located on the equatorial line (perpendicular bisector) at distance $r$ from the centre $O$ of the dipole. The distance of point $Q$ from each charge is $\\sqrt{r^2 + a^2}$.",
            "The magnitudes of the electric fields produced by $+q$ and $-q$ at point $Q$ are equal by symmetry: E_{+q} = E_{-q} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2}",
            "Resolving both field vectors into components: The components perpendicular to the dipole axis ($E_{+q}\\sin\\theta$ and $E_{-q}\\sin\\theta$) are equal in magnitude and opposite in direction, so they cancel out completely: E_{\\perp} = E_{+q}\\sin\\theta - E_{-q}\\sin\\theta = 0",
            "The components parallel to the dipole axis ($E_{+q}\\cos\\theta$ and $E_{-q}\\cos\\theta$) add up constructively in the direction opposite to $\\vec{p}$ (towards $-\\hat{p}$): \\vec{E}_{\\text{eq}} = -\\left( E_{+q}\\cos\\theta + E_{-q}\\cos\\theta \\right) \\hat{p} = -2 E_{+q}\\cos\\theta \\, \\hat{p}",
            "From the right-angled triangle, $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$. Substituting $E_{+q}$ and $\\cos\\theta$: \\vec{E}_{\\text{eq}} = -2 \\left( \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2 + a^2} \\right) \\left( \\frac{a}{\\sqrt{r^2 + a^2}} \\right) \\hat{p} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{q(2a)}{(r^2 + a^2)^{3/2}} \\hat{p}",
            "Substituting dipole moment $p = q(2a)$: \\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{(r^2 + a^2)^{3/2}}",
            "Short Dipole Approximation (r ≫ a): Neglecting $a^2$ in comparison to $r^2$: \\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi \\varepsilon_0} \\frac{\\vec{p}}{r^3}",
            "Comparison between Axial and Equatorial Fields: For a short dipole at the same distance $r$, the magnitude of the axial field is exactly twice the equatorial field: E_{\\text{axial}} = 2 \\, E_{\\text{eq}}"
          ],
          "formula": "\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{\\vec{p}}{r^3}, \\quad E_{\\text{axial}} = 2 E_{\\text{eq}}"
        }
      ],
      "diagramNotes": "1. Axial Line: Draw horizontal axis with charges $-q$ and $+q$ separated by $2a$; mark midpoint $O$; mark point $P$ at distance $r$ from $O$ along axis; draw longer arrow $\\vec{E}_{+q}$ to the right, shorter arrow $\\vec{E}_{-q}$ to the left, and net arrow $\\vec{E}_{\\text{axial}}$ to the right.\n2. Equatorial Line: Draw horizontal dipole $-q$ and $+q$; draw vertical perpendicular bisector from $O$; mark point $Q$ at height $r$; draw $\\vec{E}_{+q}$ pointing diagonally away and $\\vec{E}_{-q}$ pointing diagonally toward $-q$; show vertical components cancelling and horizontal components adding opposite to dipole moment.",
      "markingScheme": [
        "1 Mark: Definition of electric dipole moment with formula, SI unit, and direction.",
        "2 Marks: Rigorous step-by-step derivation of axial field $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^3}$.",
        "2 Marks: Step-by-step component derivation of equatorial field $E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{r^3}$ and proof of ratio $E_{\\text{axial}} = 2E_{\\text{eq}}$."
      ],
      "examinerTips": "Common mistake: forgetting vector signs! Write $\\vec{E}_{\\text{axial}}$ with $+\\hat{p}$ and $\\vec{E}_{\\text{eq}}$ with $-\\hat{p}$. In the short dipole step, explicitly state 'neglecting $a^2$ in comparison with $r^2$'."
    }
  },
  {
    "id": "imp-phy-19",
    "number": 19,
    "title": "Torque and Potential Energy of an Electric Dipole in Uniform Electric Field",
    "shortLabel": "Dipole Torque (τ = p × E) & Potential Energy",
    "chapterId": "phy-ch-1",
    "chapterTitle": "Electric Charges and Fields",
    "unit": "Electrostatics",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency Core Derivation (CBSE 2024, 2023, 2021, 2019)",
    "questionPrompt": "(a) An electric dipole of dipole moment p is placed in a uniform electric field E making an angle θ with the field. Derive the expression for the torque acting on it.\n(b) Derive the expression for the potential energy stored in the dipole.\n(c) Identify the conditions of: (i) Stable equilibrium, (ii) Unstable equilibrium, and (iii) Maximum torque.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 1: Electric Charges and Fields",
      "section": "Section 1.12 & Chapter 2 Section 2.5 (pp. 31–32, 66–68)",
      "equations": "Eqs. (1.22), (1.23), (2.23)",
      "figures": "Fig. 1.22",
      "summary": "Force couple on dipole in uniform field, vector cross product torque derivation, and rotational work integral for potential energy."
    },
    "theory": [
      "When an electric dipole is placed in a uniform electric field $\\vec{E}$, the charge $+q$ experiences force $\\vec{F}_+ = +q\\vec{E}$ and charge $-q$ experiences force $\\vec{F}_- = -q\\vec{E}$.",
      "Net Translational Force: The two forces are equal in magnitude and opposite in direction. Hence, the net translational mechanical force is zero: $$\\vec{F}_{\\text{net}} = +q\\vec{E} + (-q\\vec{E}) = 0$$ The dipole has zero translational acceleration in a uniform field.",
      "Torque Couple: Because the lines of action of the two equal and opposite forces do not coincide, they constitute a couple that tends to rotate the dipole to align its dipole moment $\\vec{p}$ parallel to the external field $\\vec{E}$.",
      "Work done in rotating the dipole against this restoring torque is stored in the system as Electrostatic Potential Energy ($U$)."
    ],
    "derivations": [
      {
        "name": "Part 1: Derivation of Torque (τ = p × E)",
        "setup": "Consider an electric dipole consisting of charges $\\pm q$ separated by length $2a$, placed in a uniform electric field $\\vec{E}$ at an angle $\\theta$ with the field direction.",
        "steps": [
          {
            "text": "Magnitude of force on each individual charge is:",
            "equation": "F = q E"
          },
          {
            "text": "The perpendicular distance between the lines of action of the two forces (perpendicular lever arm) is:",
            "equation": "d_{\\perp} = 2a \\sin\\theta"
          },
          {
            "text": "The magnitude of the torque $\\tau$ exerted by the couple is given by force multiplied by perpendicular lever arm:",
            "equation": "\\tau = F \\cdot d_{\\perp} = (q E)(2a \\sin\\theta) = (q \\cdot 2a) E \\sin\\theta"
          },
          {
            "text": "Substituting dipole moment magnitude $p = q(2a)$:",
            "equation": "\\tau = p E \\sin\\theta"
          },
          {
            "text": "In vector notation, this is the vector cross product of dipole moment $\\vec{p}$ and electric field $\\vec{E}$:",
            "equation": "\\vec{\\tau} = \\vec{p} \\times \\vec{E}"
          }
        ],
        "specialCases": [
          {
            "title": "Maximum Torque (θ = 90°):",
            "text": "When the dipole is perpendicular to the electric field ($\\sin 90^\\circ = 1$):",
            "equation": "\\tau_{\\text{max}} = p E"
          },
          {
            "title": "Zero Torque (θ = 0° or 180°):",
            "text": "When the dipole is aligned along or opposite to the electric field ($\\sin 0^\\circ = \\sin 180^\\circ = 0$):",
            "equation": "\\tau = 0"
          }
        ],
        "finalFormula": "\\vec{\\tau} = \\vec{p} \\times \\vec{E} \\quad \\implies \\quad \\tau = p E \\sin\\theta"
      },
      {
        "name": "Part 2: Derivation of Potential Energy (U = -p · E)",
        "setup": "Let external torque rotate the dipole slowly without angular acceleration from orientation $\\theta_1$ to orientation $\\theta_2$ against the electrostatic torque.",
        "steps": [
          {
            "text": "Work done by external agent in rotating dipole through an infinitesimal angular displacement $d\\theta$ is:",
            "equation": "dW = \\tau_{\\text{ext}} \\, d\\theta = p E \\sin\\theta \\, d\\theta"
          },
          {
            "text": "Total work done in rotating dipole from angle $\\theta_1$ to angle $\\theta_2$ is obtained by integration:",
            "equation": "W = \\int_{\\theta_1}^{\\theta_2} p E \\sin\\theta \\, d\\theta = p E [-\\cos\\theta]_{\\theta_1}^{\\theta_2} = -p E (\\cos\\theta_2 - \\cos\\theta_1)"
          },
          {
            "text": "Taking the zero-energy reference standard at $\\theta_1 = 90^\\circ$ (where $\\cos 90^\\circ = 0$):",
            "equation": "U(\\theta) = -p E (\\cos\\theta - \\cos 90^\\circ) = -p E \\cos\\theta"
          },
          {
            "text": "In vector dot product notation:",
            "equation": "U = -\\vec{p} \\cdot \\vec{E}"
          }
        ],
        "specialCases": [
          {
            "title": "Case 1: Stable Equilibrium (θ = 0°):",
            "text": "Dipole aligned parallel to field: $\\tau = 0$ and potential energy is minimum:",
            "equation": "U_{\\text{min}} = -pE \\cos 0^\\circ = -pE"
          },
          {
            "title": "Case 2: Unstable Equilibrium (θ = 180°):",
            "text": "Dipole aligned antiparallel to field: $\\tau = 0$ and potential energy is maximum:",
            "equation": "U_{\\text{max}} = -pE \\cos 180^\\circ = +pE"
          }
        ],
        "finalFormula": "U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "dipole-torque",
      "title": "Electric Dipole in Uniform Electric Field: Couple & Torque",
      "examDrawingGuide": [
        "1. Draw parallel horizontal field lines representing uniform field $\\vec{E}$.",
        "2. Draw dipole axis inclined at angle $\\theta$ with charges $-q$ and $+q$ separated by $2a$.",
        "3. Draw force vector $+q\\vec{E}$ to the right at $+q$, and force $-q\\vec{E}$ to the left at $-q$.",
        "4. Draw dashed perpendicular line from $-q$ to the line of action of $+q\\vec{E}$ and label perpendicular lever arm $2a\\sin\\theta$."
      ]
    },
    "keyPointsAndKeywords": [
      "Zero Net Force (F_net = 0 in uniform field)",
      "Restoring Couple and Perpendicular Lever Arm (2a sinθ)",
      "Torque Cross Product (τ = p × E)",
      "Rotational Work Integral (W = ∫ τ dθ)",
      "Potential Energy Dot Product (U = -p · E)",
      "Stable Equilibrium (θ = 0°, U = -pE)",
      "Unstable Equilibrium (θ = 180°, U = +pE)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\vec{\\tau}",
        "term": "Deflecting Torque",
        "definition": "Rotational couple vector tending to align dipole with external field, measured in $\\text{N}\\cdot\\text{m}$."
      },
      {
        "symbol": "U",
        "term": "Electrostatic Potential Energy",
        "definition": "Energy stored in the dipole-field configuration relative to standard $90^\\circ$ perpendicular state, measured in Joules (J)."
      },
      {
        "symbol": "\\theta",
        "term": "Dipole Alignment Angle",
        "definition": "Angle between dipole moment vector $\\vec{p}$ and external electric field $\\vec{E}$."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Derivation of torque $\\tau = pE\\sin\\theta \\implies \\vec{\\tau} = \\vec{p}\\times\\vec{E}$ with labeled diagram.",
      "1 Mark: Derivation of potential energy $U = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$.",
      "0.5 Mark: Distinction between stable equilibrium ($\\theta = 0^\\circ$) and unstable equilibrium ($\\theta = 180^\\circ$)."
    ],
    "examinerTips": "Remember that if the electric field is NON-uniform, the dipole experiences BOTH a net translational force AND a torque!",
    "modelAnswer": {
      "statement": "When an electric dipole is placed in a uniform electric field $\\vec{E}$, the charge $+q$ experiences force $\\vec{F}_+ = +q\\vec{E}$ and charge $-q$ experiences force $\\vec{F}_- = -q\\vec{E}$.\nNet Translational Force: The two forces are equal in magnitude and opposite in direction. Hence, the net translational mechanical force is zero: $$\\vec{F}_{\\text{net}} = +q\\vec{E} + (-q\\vec{E}) = 0$$ The dipole has zero translational acceleration in a uniform field.\nTorque Couple: Because the lines of action of the two equal and opposite forces do not coincide, they constitute a couple that tends to rotate the dipole to align its dipole moment $\\vec{p}$ parallel to the external field $\\vec{E}$.\nWork done in rotating the dipole against this restoring torque is stored in the system as Electrostatic Potential Energy ($U$).",
      "derivations": [
        {
          "name": "Part 1: Derivation of Torque (τ = p × E)",
          "steps": [
            "Consider an electric dipole consisting of charges $\\pm q$ separated by length $2a$, placed in a uniform electric field $\\vec{E}$ at an angle $\\theta$ with the field direction.",
            "Magnitude of force on each individual charge is: F = q E",
            "The perpendicular distance between the lines of action of the two forces (perpendicular lever arm) is: d_{\\perp} = 2a \\sin\\theta",
            "The magnitude of the torque $\\tau$ exerted by the couple is given by force multiplied by perpendicular lever arm: \\tau = F \\cdot d_{\\perp} = (q E)(2a \\sin\\theta) = (q \\cdot 2a) E \\sin\\theta",
            "Substituting dipole moment magnitude $p = q(2a)$: \\tau = p E \\sin\\theta",
            "In vector notation, this is the vector cross product of dipole moment $\\vec{p}$ and electric field $\\vec{E}$: \\vec{\\tau} = \\vec{p} \\times \\vec{E}",
            "Maximum Torque (θ = 90°): When the dipole is perpendicular to the electric field ($\\sin 90^\\circ = 1$): \\tau_{\\text{max}} = p E",
            "Zero Torque (θ = 0° or 180°): When the dipole is aligned along or opposite to the electric field ($\\sin 0^\\circ = \\sin 180^\\circ = 0$): \\tau = 0"
          ],
          "formula": "\\vec{\\tau} = \\vec{p} \\times \\vec{E} \\quad \\implies \\quad \\tau = p E \\sin\\theta"
        },
        {
          "name": "Part 2: Derivation of Potential Energy (U = -p · E)",
          "steps": [
            "Let external torque rotate the dipole slowly without angular acceleration from orientation $\\theta_1$ to orientation $\\theta_2$ against the electrostatic torque.",
            "Work done by external agent in rotating dipole through an infinitesimal angular displacement $d\\theta$ is: dW = \\tau_{\\text{ext}} \\, d\\theta = p E \\sin\\theta \\, d\\theta",
            "Total work done in rotating dipole from angle $\\theta_1$ to angle $\\theta_2$ is obtained by integration: W = \\int_{\\theta_1}^{\\theta_2} p E \\sin\\theta \\, d\\theta = p E [-\\cos\\theta]_{\\theta_1}^{\\theta_2} = -p E (\\cos\\theta_2 - \\cos\\theta_1)",
            "Taking the zero-energy reference standard at $\\theta_1 = 90^\\circ$ (where $\\cos 90^\\circ = 0$): U(\\theta) = -p E (\\cos\\theta - \\cos 90^\\circ) = -p E \\cos\\theta",
            "In vector dot product notation: U = -\\vec{p} \\cdot \\vec{E}",
            "Case 1: Stable Equilibrium (θ = 0°): Dipole aligned parallel to field: $\\tau = 0$ and potential energy is minimum: U_{\\text{min}} = -pE \\cos 0^\\circ = -pE",
            "Case 2: Unstable Equilibrium (θ = 180°): Dipole aligned antiparallel to field: $\\tau = 0$ and potential energy is maximum: U_{\\text{max}} = -pE \\cos 180^\\circ = +pE"
          ],
          "formula": "U = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta"
        }
      ],
      "diagramNotes": "1. Draw parallel horizontal field lines representing uniform field $\\vec{E}$.\n2. Draw dipole axis inclined at angle $\\theta$ with charges $-q$ and $+q$ separated by $2a$.\n3. Draw force vector $+q\\vec{E}$ to the right at $+q$, and force $-q\\vec{E}$ to the left at $-q$.\n4. Draw dashed perpendicular line from $-q$ to the line of action of $+q\\vec{E}$ and label perpendicular lever arm $2a\\sin\\theta$.",
      "markingScheme": [
        "1.5 Marks: Derivation of torque $\\tau = pE\\sin\\theta \\implies \\vec{\\tau} = \\vec{p}\\times\\vec{E}$ with labeled diagram.",
        "1 Mark: Derivation of potential energy $U = -pE\\cos\\theta = -\\vec{p}\\cdot\\vec{E}$.",
        "0.5 Mark: Distinction between stable equilibrium ($\\theta = 0^\\circ$) and unstable equilibrium ($\\theta = 180^\\circ$)."
      ],
      "examinerTips": "Remember that if the electric field is NON-uniform, the dipole experiences BOTH a net translational force AND a torque!"
    }
  },
  {
    "id": "imp-phy-20",
    "number": 20,
    "title": "Force Between Two Parallel Current-Carrying Conductors & Definition of 1 Ampere",
    "shortLabel": "Force Between Parallel Wires & 1 Ampere",
    "chapterId": "phy-ch-4",
    "chapterTitle": "Moving Charges and Magnetism",
    "unit": "Magnetism",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "High Frequency Core Derivation (CBSE 2024 SQP Q16, 2023, 2020, 2018)",
    "questionPrompt": "(a) Derive the expression for the magnetic force per unit length acting between two long, straight parallel conductors carrying steady currents I₁ and I₂ separated by distance d in vacuum.\n(b) State whether parallel currents attract or repel, and justify with diagram.\n(c) Use this formula to state the official definition of the SI unit of electric current (the Ampere).",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 4: Moving Charges and Magnetism",
      "section": "Section 4.7: Force between Two Parallel Currents (pp. 154–157)",
      "equations": "Eqs. (4.26), (4.27), (4.28)",
      "figures": "Figs. 4.19, 4.20",
      "summary": "Biot-Savart field generation by wire 1, Lorentz force on wire 2, mutual attraction/repulsion, and historical definition of the ampere."
    },
    "theory": [
      "Two infinitely long, straight parallel conductors carrying steady currents exert mutual magnetic forces on each other.",
      "Nature of Force: Parallel currents flowing in the SAME direction ATTRACT each other. Antiparallel currents flowing in OPPOSITE directions REPEL each other.",
      "Physical Mechanism: Wire 1 produces a circular magnetic field $\\vec{B}_1$ around it according to the Right-Hand Thumb Rule. Wire 2 carrying current $I_2$ sits inside field $\\vec{B}_1$ and experiences a mechanical magnetic Lorentz force $\\vec{F}_{21} = I_2(\\vec{L} \\times \\vec{B}_1)$ according to Fleming's Left-Hand Rule.",
      "By Newton's Third Law, the force exerted by wire 2 on wire 1 is equal in magnitude and opposite in direction: $$\\vec{F}_{12} = -\\vec{F}_{21}$$"
    ],
    "derivations": [
      {
        "name": "Mathematical Derivation of Force per Unit Length",
        "setup": "Consider two infinitely long, thin straight parallel conductors $X$ and $Y$ separated by distance $d$ in vacuum, carrying steady currents $I_1$ and $I_2$ in the same direction (upwards).",
        "steps": [
          {
            "text": "By Ampere's circuital law / Biot-Savart law, the magnitude of the magnetic field produced by conductor $X$ carrying current $I_1$ at all points on conductor $Y$ at distance $d$ is:",
            "equation": "B_1 = \\frac{\\mu_0 I_1}{2\\pi d}"
          },
          {
            "text": "By the Right-Hand Thumb Rule, the direction of magnetic field $\\vec{B}_1$ at conductor $Y$ is perpendicular to the plane of the wires, directed perpendicularly INTO the paper ($\\otimes$).",
            "equation": "\\vec{B}_1 \\perp \\text{Plane of Wires (Inwards)}"
          },
          {
            "text": "Conductor $Y$ carries current $I_2$ in field $\\vec{B}_1$. The magnetic force experienced by a section of length $L$ of conductor $Y$ is:",
            "equation": "F_{21} = I_2 L B_1 \\sin 90^\\circ = I_2 L \\left( \\frac{\\mu_0 I_1}{2\\pi d} \\right) = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}"
          },
          {
            "text": "By Fleming's Left-Hand Rule, the direction of force $\\vec{F}_{21}$ is towards conductor $X$ (attractive force).",
            "equation": "\\vec{F}_{21} \\text{ directed toward wire } X"
          },
          {
            "text": "The magnetic force per unit length ($f = F/L$) acting on either conductor is:",
            "equation": "f = \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}"
          }
        ],
        "specialCases": [
          {
            "title": "Standard Definition of One Ampere:",
            "text": "If $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$ in vacuum, the force per unit length is:",
            "equation": "f = \\frac{(4\\pi \\times 10^{-7})(1)(1)}{2\\pi(1)} = 2 \\times 10^{-7} \\text{ N/m}"
          }
        ],
        "finalFormula": "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = 2 \\times 10^{-7} \\text{ N/m} \\quad (\\text{for } 1\\text{ A at } 1\\text{ m})"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "parallel-wires",
      "title": "Force Between Parallel Current-Carrying Conductors",
      "examDrawingGuide": [
        "1. Draw two vertical parallel straight wires labeled 1 and 2 separated by distance $d$.",
        "2. Draw current arrows $I_1$ and $I_2$ pointing upward.",
        "3. Draw circular magnetic field lines around wire 1, showing field vector $\\vec{B}_1$ entering perpendicularly into page at wire 2 (marked with $\\otimes$).",
        "4. Draw horizontal attractive force arrows $\\vec{F}_{21}$ pointing left toward wire 1, and $\\vec{F}_{12}$ pointing right toward wire 2."
      ]
    },
    "keyPointsAndKeywords": [
      "Biot-Savart Field (B₁ = μ₀I₁ / 2πd)",
      "Lorentz Force on Current (F = I₂LB₁)",
      "Parallel Currents Attract / Antiparallel Repel",
      "Force per Unit Length Formula (F/L = μ₀I₁I₂ / 2πd)",
      "Standard Definition of 1 Ampere (2 × 10⁻⁷ N/m force in vacuum at 1 m separation)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\mu_0",
        "term": "Permeability of Free Space",
        "definition": "Universal magnetic constant: $\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T}\\cdot\\text{m/A}$ (or $\\text{N/A}^2$)."
      },
      {
        "symbol": "I_1, I_2",
        "term": "Conductor Currents",
        "definition": "Steady electric currents circulating through the two parallel conducting wires (Amperes)."
      },
      {
        "symbol": "d",
        "term": "Separation Distance",
        "definition": "Perpendicular distance separating the axes of the two parallel wires in metres (m)."
      },
      {
        "symbol": "f = F/L",
        "term": "Force per Unit Length",
        "definition": "Mechanical interaction force per metre length of conductor, measured in Newtons per metre (N/m)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Mathematical derivation of field $B_1 = \\mu_0 I_1 / (2\\pi d)$ and force $F/L = \\mu_0 I_1 I_2 / (2\\pi d)$.",
      "0.5 Mark: Justification of attractive nature with Fleming's Left-Hand Rule.",
      "1 Mark: Exact standard definition of 1 Ampere using $2 \\times 10^{-7}\\text{ N/m}$."
    ],
    "examinerTips": "In defining 1 Ampere, state all three conditions: (1) Straight parallel conductors of infinite length and negligible cross-section, (2) Placed in vacuum 1 metre apart, (3) Producing force of exactly $2 \\times 10^{-7}\\text{ N/m}$.",
    "modelAnswer": {
      "statement": "Two infinitely long, straight parallel conductors carrying steady currents exert mutual magnetic forces on each other.\nNature of Force: Parallel currents flowing in the SAME direction ATTRACT each other. Antiparallel currents flowing in OPPOSITE directions REPEL each other.\nPhysical Mechanism: Wire 1 produces a circular magnetic field $\\vec{B}_1$ around it according to the Right-Hand Thumb Rule. Wire 2 carrying current $I_2$ sits inside field $\\vec{B}_1$ and experiences a mechanical magnetic Lorentz force $\\vec{F}_{21} = I_2(\\vec{L} \\times \\vec{B}_1)$ according to Fleming's Left-Hand Rule.\nBy Newton's Third Law, the force exerted by wire 2 on wire 1 is equal in magnitude and opposite in direction: $$\\vec{F}_{12} = -\\vec{F}_{21}$$",
      "derivations": [
        {
          "name": "Mathematical Derivation of Force per Unit Length",
          "steps": [
            "Consider two infinitely long, thin straight parallel conductors $X$ and $Y$ separated by distance $d$ in vacuum, carrying steady currents $I_1$ and $I_2$ in the same direction (upwards).",
            "By Ampere's circuital law / Biot-Savart law, the magnitude of the magnetic field produced by conductor $X$ carrying current $I_1$ at all points on conductor $Y$ at distance $d$ is: B_1 = \\frac{\\mu_0 I_1}{2\\pi d}",
            "By the Right-Hand Thumb Rule, the direction of magnetic field $\\vec{B}_1$ at conductor $Y$ is perpendicular to the plane of the wires, directed perpendicularly INTO the paper ($\\otimes$). \\vec{B}_1 \\perp \\text{Plane of Wires (Inwards)}",
            "Conductor $Y$ carries current $I_2$ in field $\\vec{B}_1$. The magnetic force experienced by a section of length $L$ of conductor $Y$ is: F_{21} = I_2 L B_1 \\sin 90^\\circ = I_2 L \\left( \\frac{\\mu_0 I_1}{2\\pi d} \\right) = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}",
            "By Fleming's Left-Hand Rule, the direction of force $\\vec{F}_{21}$ is towards conductor $X$ (attractive force). \\vec{F}_{21} \\text{ directed toward wire } X",
            "The magnetic force per unit length ($f = F/L$) acting on either conductor is: f = \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}",
            "Standard Definition of One Ampere: If $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$ in vacuum, the force per unit length is: f = \\frac{(4\\pi \\times 10^{-7})(1)(1)}{2\\pi(1)} = 2 \\times 10^{-7} \\text{ N/m}"
          ],
          "formula": "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = 2 \\times 10^{-7} \\text{ N/m} \\quad (\\text{for } 1\\text{ A at } 1\\text{ m})"
        }
      ],
      "diagramNotes": "1. Draw two vertical parallel straight wires labeled 1 and 2 separated by distance $d$.\n2. Draw current arrows $I_1$ and $I_2$ pointing upward.\n3. Draw circular magnetic field lines around wire 1, showing field vector $\\vec{B}_1$ entering perpendicularly into page at wire 2 (marked with $\\otimes$).\n4. Draw horizontal attractive force arrows $\\vec{F}_{21}$ pointing left toward wire 1, and $\\vec{F}_{12}$ pointing right toward wire 2.",
      "markingScheme": [
        "1.5 Marks: Mathematical derivation of field $B_1 = \\mu_0 I_1 / (2\\pi d)$ and force $F/L = \\mu_0 I_1 I_2 / (2\\pi d)$.",
        "0.5 Mark: Justification of attractive nature with Fleming's Left-Hand Rule.",
        "1 Mark: Exact standard definition of 1 Ampere using $2 \\times 10^{-7}\\text{ N/m}$."
      ],
      "examinerTips": "In defining 1 Ampere, state all three conditions: (1) Straight parallel conductors of infinite length and negligible cross-section, (2) Placed in vacuum 1 metre apart, (3) Producing force of exactly $2 \\times 10^{-7}\\text{ N/m}$."
    }
  },
  {
    "id": "imp-phy-21",
    "number": 21,
    "title": "Maxwell's Equations & Generalized Ampere's Law in Charging Capacitor",
    "shortLabel": "Maxwell Equations & Ampere-Maxwell Law",
    "chapterId": "phy-ch-8",
    "chapterTitle": "Electromagnetic Waves",
    "unit": "Electromagnetic Waves",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Theory & Derivation",
    "frequency": "High Frequency Core Question (CBSE 2024 SQP Q8, 2023, 2021, 2019)",
    "questionPrompt": "(a) Write the four fundamental Maxwell's equations in integral form and state the physical law underlying each equation.\n(b) Using the example of a parallel plate capacitor during charging, explain the apparent paradox in Ampere's circuital law and show how Maxwell's displacement current resolves it.",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 8: Electromagnetic Waves",
      "section": "Sections 8.2 & 8.3 (pp. 270–274)",
      "equations": "Eqs. (8.4), (8.5), Table 8.1",
      "figures": "Fig. 8.1",
      "summary": "Unified formulation of classical electromagnetism: Gauss electrostatics, Gauss magnetism, Faraday induction, and Ampere-Maxwell law."
    },
    "theory": [
      "Maxwell unified electricity and magnetism into four fundamental equations that govern all classical electromagnetic phenomena:",
      "1. Gauss's Law for Electrostatics: Total electric flux through any closed surface is proportional to net enclosed charge: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$ (Electric charges are sources and sinks of electric field; isolated charges exist).",
      "2. Gauss's Law for Magnetism: Total magnetic flux through any closed surface is always zero: $$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$ (Magnetic monopoles do not exist; magnetic field lines are continuous closed loops).",
      "3. Faraday's Law of Electromagnetic Induction: Line integral of electric field around a closed loop equals negative time rate of change of magnetic flux: $$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$ (A time-varying magnetic field induces an electric field).",
      "4. Ampere-Maxwell Circuital Law: Line integral of magnetic field around a closed loop is determined by conduction current and displacement current: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$$ (Both conduction currents and time-varying electric fields produce magnetic fields)."
    ],
    "derivations": [
      {
        "name": "Resolution of the Charging Capacitor Paradox",
        "setup": "Consider a parallel plate capacitor of area $A$ being charged by conduction current $I_c$. Choose a closed circular path $C$ around the wire outside the capacitor.",
        "steps": [
          {
            "text": "For a flat circular surface $S_1$ spanning loop $C$, the wire pierces the surface carrying conduction current $I_c$:",
            "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c"
          },
          {
            "text": "For a pot-shaped surface $S_2$ with the same perimeter $C$ bulging between the plates, no conduction current pierces it ($I_c = 0$):",
            "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0) = 0"
          },
          {
            "text": "This leads to an impossible physical paradox: the same line integral along the identical boundary loop $C$ cannot be simultaneously $\\mu_0 I_c$ and $0$!",
            "equation": "\\mu_0 I_c \\neq 0 \\quad (\\text{Paradox})"
          },
          {
            "text": "Maxwell resolved this by recognizing that between the capacitor plates, electric flux $\\Phi_E$ increases at rate:",
            "equation": "\\frac{d\\Phi_E}{dt} = \\frac{d}{dt}\\left(E A\\right) = \\frac{d}{dt}\\left(\\frac{q}{\\varepsilon_0}\\right) = \\frac{1}{\\varepsilon_0}\\frac{dq}{dt} = \\frac{I_c}{\\varepsilon_0}"
          },
          {
            "text": "Multiplying by $\\varepsilon_0$ gives the displacement current $I_d$ threading surface $S_2$:",
            "equation": "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = I_c"
          },
          {
            "text": "Evaluating the generalized Ampere-Maxwell law for surface $S_2$:",
            "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0 + I_d) = \\mu_0 I_c"
          },
          {
            "text": "The line integral is now uniquely $\\mu_0 I_c$ regardless of the surface chosen. The paradox is resolved!",
            "equation": "\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c \\quad \\text{for both } S_1 \\text{ and } S_2"
          }
        ],
        "specialCases": [
          {
            "title": "Total Current Continuity:",
            "text": "Total current $I = I_c + I_d$ is continuous throughout the entire circuit:",
            "equation": "I_{\\text{total}} = \\text{constant across all sections}"
          }
        ],
        "finalFormula": "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\left( I_c + \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\right)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "displacement-current",
      "title": "Maxwell-Ampere Circuit Loop & Surfaces S1 and S2",
      "examDrawingGuide": [
        "1. Draw charging capacitor with connecting wire carrying current $I_c$.",
        "2. Draw circular perimeter curve $C$ around the wire.",
        "3. Draw flat circular surface $S_1$ spanning $C$ pierced by wire.",
        "4. Draw pot-shaped balloon surface $S_2$ sharing rim $C$ passing between plates with no wire.",
        "5. Show electric field vectors $\\vec{E}(t)$ passing through surface $S_2$ between capacitor plates."
      ]
    },
    "keyPointsAndKeywords": [
      "Four Maxwell Equations (Integral Formulation)",
      "Ampere Inconsistency between Capacitor Plates",
      "Surfaces S1 vs S2 Bounding Same Perimeter",
      "Rate of Electric Flux Change (dΦ_E / dt)",
      "Displacement Current Formula (I_d = ε₀ dΦ_E / dt)",
      "Restoration of Current Continuity"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Phi_E",
        "term": "Electric Flux",
        "definition": "Surface integral of electric field over an open or closed surface ($\\text{V}\\cdot\\text{m}$)."
      },
      {
        "symbol": "\\Phi_B",
        "term": "Magnetic Flux",
        "definition": "Surface integral of magnetic field over a surface (Webers, Wb)."
      },
      {
        "symbol": "I_d",
        "term": "Displacement Current",
        "definition": "Maxwell's correction term representing the magnetic effect of a time-varying electric field."
      },
      {
        "symbol": "\\oint \\vec{E}\\cdot d\\vec{l}",
        "term": "Induced Electromotive Force",
        "definition": "Work done per unit charge around a closed loop by non-electrostatic induced electric field."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Correct statement of all 4 Maxwell's equations with associated physical principles.",
      "1 Mark: Demonstration of the charging capacitor paradox using surfaces $S_1$ and $S_2$.",
      "0.5 Mark: Derivation proving $I_d = I_c$ and complete resolution of paradox."
    ],
    "examinerTips": "In Gauss's Law for Magnetism, always state explicitly: 'Physical significance: Isolated magnetic monopoles do not exist in nature.'",
    "modelAnswer": {
      "statement": "Maxwell unified electricity and magnetism into four fundamental equations that govern all classical electromagnetic phenomena:\n1. Gauss's Law for Electrostatics: Total electric flux through any closed surface is proportional to net enclosed charge: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$ (Electric charges are sources and sinks of electric field; isolated charges exist).\n2. Gauss's Law for Magnetism: Total magnetic flux through any closed surface is always zero: $$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$ (Magnetic monopoles do not exist; magnetic field lines are continuous closed loops).\n3. Faraday's Law of Electromagnetic Induction: Line integral of electric field around a closed loop equals negative time rate of change of magnetic flux: $$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$ (A time-varying magnetic field induces an electric field).\n4. Ampere-Maxwell Circuital Law: Line integral of magnetic field around a closed loop is determined by conduction current and displacement current: $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$$ (Both conduction currents and time-varying electric fields produce magnetic fields).",
      "derivations": [
        {
          "name": "Resolution of the Charging Capacitor Paradox",
          "steps": [
            "Consider a parallel plate capacitor of area $A$ being charged by conduction current $I_c$. Choose a closed circular path $C$ around the wire outside the capacitor.",
            "For a flat circular surface $S_1$ spanning loop $C$, the wire pierces the surface carrying conduction current $I_c$: \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c",
            "For a pot-shaped surface $S_2$ with the same perimeter $C$ bulging between the plates, no conduction current pierces it ($I_c = 0$): \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0) = 0",
            "This leads to an impossible physical paradox: the same line integral along the identical boundary loop $C$ cannot be simultaneously $\\mu_0 I_c$ and $0$! \\mu_0 I_c \\neq 0 \\quad (\\text{Paradox})",
            "Maxwell resolved this by recognizing that between the capacitor plates, electric flux $\\Phi_E$ increases at rate: \\frac{d\\Phi_E}{dt} = \\frac{d}{dt}\\left(E A\\right) = \\frac{d}{dt}\\left(\\frac{q}{\\varepsilon_0}\\right) = \\frac{1}{\\varepsilon_0}\\frac{dq}{dt} = \\frac{I_c}{\\varepsilon_0}",
            "Multiplying by $\\varepsilon_0$ gives the displacement current $I_d$ threading surface $S_2$: I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = I_c",
            "Evaluating the generalized Ampere-Maxwell law for surface $S_2$: \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0 + I_d) = \\mu_0 I_c",
            "The line integral is now uniquely $\\mu_0 I_c$ regardless of the surface chosen. The paradox is resolved! \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c \\quad \\text{for both } S_1 \\text{ and } S_2",
            "Total Current Continuity: Total current $I = I_c + I_d$ is continuous throughout the entire circuit: I_{\\text{total}} = \\text{constant across all sections}"
          ],
          "formula": "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\left( I_c + \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\right)"
        }
      ],
      "diagramNotes": "1. Draw charging capacitor with connecting wire carrying current $I_c$.\n2. Draw circular perimeter curve $C$ around the wire.\n3. Draw flat circular surface $S_1$ spanning $C$ pierced by wire.\n4. Draw pot-shaped balloon surface $S_2$ sharing rim $C$ passing between plates with no wire.\n5. Show electric field vectors $\\vec{E}(t)$ passing through surface $S_2$ between capacitor plates.",
      "markingScheme": [
        "1.5 Marks: Correct statement of all 4 Maxwell's equations with associated physical principles.",
        "1 Mark: Demonstration of the charging capacitor paradox using surfaces $S_1$ and $S_2$.",
        "0.5 Mark: Derivation proving $I_d = I_c$ and complete resolution of paradox."
      ],
      "examinerTips": "In Gauss's Law for Magnetism, always state explicitly: 'Physical significance: Isolated magnetic monopoles do not exist in nature.'"
    }
  },
  {
    "id": "imp-phy-22",
    "number": 22,
    "title": "Conversion of Galvanometer into Ammeter and Voltmeter (Formulas & Circuit)",
    "shortLabel": "Galvanometer to Ammeter & Voltmeter",
    "chapterId": "phy-ch-4",
    "chapterTitle": "Moving Charges and Magnetism",
    "unit": "Magnetism",
    "marks": "3 Marks",
    "marksNum": 3,
    "category": "Derivation",
    "frequency": "Guaranteed Core Question (CBSE 2024 SQP Q27, 2023, 2022, 2020)",
    "questionPrompt": "(a) How can a moving coil galvanometer of resistance G and full scale deflection current I_g be converted into:\n  (i) An ammeter of range 0 to I (I > I_g)?\n  (ii) A voltmeter of range 0 to V?\n(b) Derive the mathematical formula for the required shunt resistance (S) and series resistance (R).\n(c) What are the ideal resistances of an ammeter and a voltmeter?",
    "ncertRef": {
      "textbook": "NCERT Physics Class 12, Part 1",
      "chapter": "Chapter 4: Moving Charges and Magnetism",
      "section": "Section 4.10.1: Conversion of Galvanometer (pp. 165–167)",
      "equations": "Eqs. (4.43), (4.44)",
      "figures": "Figs. 4.26, 4.27",
      "summary": "Parallel shunt resistor calculation for ammeter, series multiplier resistor calculation for voltmeter, and ideal resistance limits."
    },
    "theory": [
      "A Moving Coil Galvanometer is a very sensitive current detector that produces full scale deflection with very small currents ($I_g \\sim \\mu\\text{A}$ or $\\text{mA}$) and has finite internal resistance $G$.",
      "Conversion into Ammeter: An ammeter must be connected in series with the load. To avoid decreasing the circuit current, its effective resistance must be extremely low. This is achieved by connecting a low resistance wire called a Shunt Resistance ($S$) in parallel across the galvanometer coil.",
      "Conversion into Voltmeter: A voltmeter must be connected in parallel across the component. To avoid drawing significant current from the circuit, its effective resistance must be extremely high. This is achieved by connecting a high resistance ($R$) in series with the galvanometer coil.",
      "Ideal Limits: An Ideal Ammeter has ZERO internal resistance ($R_A = 0$). An Ideal Voltmeter has INFINITE internal resistance ($R_V = \\infty$)."
    ],
    "derivations": [
      {
        "name": "Part 1: Conversion into Ammeter (Shunt Resistance Formula)",
        "setup": "Let $G$ be the resistance of the galvanometer and $I_g$ be the current producing full scale deflection. We wish to convert it into an ammeter of range 0 to $I$ ($I > I_g$) by connecting a low shunt resistance $S$ in parallel.",
        "steps": [
          {
            "text": "When total current $I$ enters the instrument, current $I_g$ flows through the galvanometer, and the remaining current passes through the shunt resistor:",
            "equation": "I_s = I - I_g"
          },
          {
            "text": "Since the galvanometer and shunt resistor are connected in parallel, the potential difference across them is equal:",
            "equation": "V_g = V_s \\quad \\implies \\quad I_g \\cdot G = I_s \\cdot S"
          },
          {
            "text": "Substituting $I_s = I - I_g$ into the equation:",
            "equation": "I_g G = (I - I_g) S"
          },
          {
            "text": "Solving for required shunt resistance $S$:",
            "equation": "S = \\frac{I_g G}{I - I_g}"
          },
          {
            "text": "Effective total resistance $R_A$ of the resulting ammeter (parallel combination):",
            "equation": "\\frac{1}{R_A} = \\frac{1}{G} + \\frac{1}{S} \\quad \\implies \\quad R_A = \\frac{G S}{G + S} < S \\ll G"
          }
        ],
        "specialCases": [
          {
            "title": "Scale Multiplying Factor (n = I / Ig):",
            "text": "If range is to be extended by factor $n = I / I_g$:",
            "equation": "S = \\frac{G}{n - 1}"
          }
        ],
        "finalFormula": "S = \\frac{I_g G}{I - I_g}, \\quad R_A = \\frac{GS}{G+S} \\approx 0"
      },
      {
        "name": "Part 2: Conversion into Voltmeter (Series Resistance Formula)",
        "setup": "Let $G$ be the resistance of the galvanometer and $I_g$ be its full scale deflection current. We wish to convert it into a voltmeter of range 0 to $V$ by connecting a high resistance $R$ in series.",
        "steps": [
          {
            "text": "Total resistance of the series combination of galvanometer and multiplier resistor is:",
            "equation": "R_V = G + R"
          },
          {
            "text": "When maximum potential difference $V$ is applied across the combination, the current through both components is restricted to $I_g$:",
            "equation": "V = I_g (G + R)"
          },
          {
            "text": "Dividing by $I_g$:",
            "equation": "G + R = \\frac{V}{I_g}"
          },
          {
            "text": "Solving for the required series resistance $R$:",
            "equation": "R = \\frac{V}{I_g} - G"
          },
          {
            "text": "Effective total resistance $R_V$ of the resulting voltmeter is very large:",
            "equation": "R_V = G + R \\gg G"
          }
        ],
        "specialCases": [
          {
            "title": "Ideal Voltmeter:",
            "text": "For an ideal voltmeter that draws zero current from the circuit:",
            "equation": "R_V = \\infty \\quad (R \\to \\infty)"
          }
        ],
        "finalFormula": "R = \\frac{V}{I_g} - G, \\quad R_V = G + R \\to \\infty"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "galvanometer-conversion",
      "title": "Galvanometer Conversion Circuits: Ammeter & Voltmeter",
      "examDrawingGuide": [
        "1. Ammeter Circuit: Draw galvanometer coil $G$ with branch carrying $I_g$; draw parallel shunt resistor $S$ below it carrying $I - I_g$; enclose both in dashed box labeled 'Ammeter' with terminals connecting to line current $I$.",
        "2. Voltmeter Circuit: Draw galvanometer coil $G$ in series with high resistor $R$; show common current $I_g$ flowing through both; enclose in dashed box labeled 'Voltmeter' across terminals measuring potential $V$."
      ]
    },
    "keyPointsAndKeywords": [
      "Ammeter: Low Shunt Resistance S in Parallel",
      "Voltmeter: High Resistance R in Series",
      "Equal Parallel Potentials (Ig·G = (I - Ig)·S)",
      "Series Ohm's Law (V = Ig·(G + R))",
      "Shunt Formula S = Ig G / (I - Ig)",
      "Series Resistor Formula R = V / Ig - G",
      "Ideal Ammeter Resistance = 0",
      "Ideal Voltmeter Resistance = ∞"
    ],
    "termsGlossary": [
      {
        "symbol": "G",
        "term": "Galvanometer Resistance",
        "definition": "Internal resistance of the moving copper coil of the galvanometer, measured in Ohms ($\\Omega$)."
      },
      {
        "symbol": "I_g",
        "term": "Full Scale Deflection Current",
        "definition": "Minimum current needed to produce complete full scale angular deflection of the galvanometer pointer."
      },
      {
        "symbol": "S",
        "term": "Shunt Resistance",
        "definition": "Very low resistance connected in parallel to bypass the bulk of current around the galvanometer coil."
      },
      {
        "symbol": "R",
        "term": "Series Multiplier Resistance",
        "definition": "Very high resistance connected in series to limit current and drop the bulk of the measured voltage."
      },
      {
        "symbol": "R_A, R_V",
        "term": "Instrument Resistances",
        "definition": "Total effective resistance of converted ammeter ($R_A = GS/(G+S)$) and voltmeter ($R_V = G+R$)."
      }
    ],
    "markingScheme": [
      "1.5 Marks: Circuit diagram and derivation of shunt resistance $S = \\frac{I_g G}{I - I_g}$ for ammeter conversion.",
      "1 Mark: Circuit diagram and derivation of series resistance $R = \\frac{V}{I_g} - G$ for voltmeter conversion.",
      "0.5 Mark: Correct values for ideal ammeter ($0$) and ideal voltmeter ($\\infty$)."
    ],
    "examinerTips": "Remember: Ammeter is connected in SERIES with the circuit, but its internal shunt is connected in PARALLEL. Voltmeter is connected in PARALLEL with the circuit, but its internal resistor is connected in SERIES.",
    "modelAnswer": {
      "statement": "A Moving Coil Galvanometer is a very sensitive current detector that produces full scale deflection with very small currents ($I_g \\sim \\mu\\text{A}$ or $\\text{mA}$) and has finite internal resistance $G$.\nConversion into Ammeter: An ammeter must be connected in series with the load. To avoid decreasing the circuit current, its effective resistance must be extremely low. This is achieved by connecting a low resistance wire called a Shunt Resistance ($S$) in parallel across the galvanometer coil.\nConversion into Voltmeter: A voltmeter must be connected in parallel across the component. To avoid drawing significant current from the circuit, its effective resistance must be extremely high. This is achieved by connecting a high resistance ($R$) in series with the galvanometer coil.\nIdeal Limits: An Ideal Ammeter has ZERO internal resistance ($R_A = 0$). An Ideal Voltmeter has INFINITE internal resistance ($R_V = \\infty$).",
      "derivations": [
        {
          "name": "Part 1: Conversion into Ammeter (Shunt Resistance Formula)",
          "steps": [
            "Let $G$ be the resistance of the galvanometer and $I_g$ be the current producing full scale deflection. We wish to convert it into an ammeter of range 0 to $I$ ($I > I_g$) by connecting a low shunt resistance $S$ in parallel.",
            "When total current $I$ enters the instrument, current $I_g$ flows through the galvanometer, and the remaining current passes through the shunt resistor: I_s = I - I_g",
            "Since the galvanometer and shunt resistor are connected in parallel, the potential difference across them is equal: V_g = V_s \\quad \\implies \\quad I_g \\cdot G = I_s \\cdot S",
            "Substituting $I_s = I - I_g$ into the equation: I_g G = (I - I_g) S",
            "Solving for required shunt resistance $S$: S = \\frac{I_g G}{I - I_g}",
            "Effective total resistance $R_A$ of the resulting ammeter (parallel combination): \\frac{1}{R_A} = \\frac{1}{G} + \\frac{1}{S} \\quad \\implies \\quad R_A = \\frac{G S}{G + S} < S \\ll G",
            "Scale Multiplying Factor (n = I / Ig): If range is to be extended by factor $n = I / I_g$: S = \\frac{G}{n - 1}"
          ],
          "formula": "S = \\frac{I_g G}{I - I_g}, \\quad R_A = \\frac{GS}{G+S} \\approx 0"
        },
        {
          "name": "Part 2: Conversion into Voltmeter (Series Resistance Formula)",
          "steps": [
            "Let $G$ be the resistance of the galvanometer and $I_g$ be its full scale deflection current. We wish to convert it into a voltmeter of range 0 to $V$ by connecting a high resistance $R$ in series.",
            "Total resistance of the series combination of galvanometer and multiplier resistor is: R_V = G + R",
            "When maximum potential difference $V$ is applied across the combination, the current through both components is restricted to $I_g$: V = I_g (G + R)",
            "Dividing by $I_g$: G + R = \\frac{V}{I_g}",
            "Solving for the required series resistance $R$: R = \\frac{V}{I_g} - G",
            "Effective total resistance $R_V$ of the resulting voltmeter is very large: R_V = G + R \\gg G",
            "Ideal Voltmeter: For an ideal voltmeter that draws zero current from the circuit: R_V = \\infty \\quad (R \\to \\infty)"
          ],
          "formula": "R = \\frac{V}{I_g} - G, \\quad R_V = G + R \\to \\infty"
        }
      ],
      "diagramNotes": "1. Ammeter Circuit: Draw galvanometer coil $G$ with branch carrying $I_g$; draw parallel shunt resistor $S$ below it carrying $I - I_g$; enclose both in dashed box labeled 'Ammeter' with terminals connecting to line current $I$.\n2. Voltmeter Circuit: Draw galvanometer coil $G$ in series with high resistor $R$; show common current $I_g$ flowing through both; enclose in dashed box labeled 'Voltmeter' across terminals measuring potential $V$.",
      "markingScheme": [
        "1.5 Marks: Circuit diagram and derivation of shunt resistance $S = \\frac{I_g G}{I - I_g}$ for ammeter conversion.",
        "1 Mark: Circuit diagram and derivation of series resistance $R = \\frac{V}{I_g} - G$ for voltmeter conversion.",
        "0.5 Mark: Correct values for ideal ammeter ($0$) and ideal voltmeter ($\\infty$)."
      ],
      "examinerTips": "Remember: Ammeter is connected in SERIES with the circuit, but its internal shunt is connected in PARALLEL. Voltmeter is connected in PARALLEL with the circuit, but its internal resistor is connected in SERIES."
    }
  }
];
