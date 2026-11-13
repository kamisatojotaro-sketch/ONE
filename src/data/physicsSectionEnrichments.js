// Rich 4-Part Physics Section Enrichments (Theory, Step-by-Step Derivations, Diagram Meta, Tables & Glossaries)
// Migrated from core Guaranteed Board Derivations + enriched with SlideShare 47-Slide Deck & MLL 2026 Reference Tables.

export const PHYSICS_SECTION_ENRICHMENTS = {
  "phy-sub-1-1": {
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
    ]
  },
  "phy-sub-1-2": {
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
    ]
  },
  "phy-sub-1-3": {
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
    ]
  },
  "phy-sub-1-4": {
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
    ]
  },
  "phy-sub-1-6": {
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
    ]
  },
  "phy-sub-1-7": {
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
    ]
  },
  "phy-sub-1-8": {
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
    ]
  },
  "phy-sub-1-9": {
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
    ]
  },
  "phy-sub-1-10": {
    "theory": [
      "Gauss's Law states that the total electric flux $\\Phi_E$ through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the net electric charge $q_{\\text{enclosed}}$ enclosed by that surface: $$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$",
      "Electric flux is independent of the size, radius, or geometric shape of the Gaussian surface chosen.",
      "If a Gaussian surface encloses zero net charge ($q_{\\text{enclosed}} = 0$), the net outward electric flux through the surface is strictly zero.",
      "Charges lying outside the closed Gaussian surface do not contribute to the net flux, because every field line entering the surface exits it."
    ],
    "derivations": [
      {
        "name": "Deduction of Coulomb's Law from Gauss's Theorem (Slide 4)",
        "setup": "Place an isolated point charge $+q$ at origin $O$ and enclose it with a concentric spherical Gaussian surface of radius $r$. Place a test charge $q_0$ on this surface.",
        "steps": [
          {
            "text": "By spherical symmetry, $\\vec{E}$ has uniform magnitude everywhere on the Gaussian sphere and points radially outward parallel to area vector $d\\vec{A}$ ($\\theta = 0^\\circ$):",
            "equation": "\\oint \\vec{E}\\cdot d\\vec{A} = E \\oint dA = E(4\\pi r^2)"
          },
          {
            "text": "Apply Gauss’s Law $\\Phi_E = q/\\varepsilon_0$:",
            "equation": "E(4\\pi r^2) = \\frac{q}{\\varepsilon_0} \\implies E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}"
          },
          {
            "text": "Electrostatic force experienced by test charge $q_0$ at radius $r$:",
            "equation": "F = q_0 E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q q_0}{r^2}"
          }
        ],
        "finalFormula": "F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q q_0}{r^2}"
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
    ]
  },
  "phy-sub-1-11": {
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
    ]
  },
  "phy-sub-2-2": {
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
      },
      {
        "name": "Electric Potential Due to an Electric Dipole at Any General Point (r, θ) (Slide 8)",
        "setup": "Dipole $-q$ to $+q$ separated by $2a$ with midpoint $O$ and general point $P(r, \\theta)$ ($r \\gg a$).",
        "steps": [
          {
            "text": "Scalar sum of potentials: $V = \\frac{q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$ with $r_2 - r_1 \\approx 2a\\cos\\theta$ and $r_1 r_2 \\approx r^2$:",
            "equation": "V(r, \\theta) = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p\\cos\\theta}{r^2}"
          }
        ],
        "finalFormula": "V_{\\text{axial}} = \\pm\\frac{kp}{r^2}, \\qquad V_{\\text{eq}} = 0"
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
    ]
  },
  "phy-sub-2-3": {
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
    ]
  },
  "phy-sub-2-4": {
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
    ]
  },
  "phy-sub-2-7": {
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
      },
      {
        "name": "Parallel Plate Capacitor with Conducting Slab of Thickness t (Slide 11)",
        "setup": "Insert a metal conducting slab of thickness $t < d$ between parallel plates of area $A$ and separation $d$. Inside a conductor in electrostatic equilibrium, electric field $E = 0$.",
        "steps": [
          {
            "text": "Remaining air gap thickness is $(d - t)$ with uniform field $E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}$:",
            "equation": "V = E_0(d - t) + 0\\cdot t = \\frac{Q(d - t)}{\\varepsilon_0 A}"
          },
          {
            "text": "Capacitance with partial conducting slab:",
            "equation": "C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d - t}"
          }
        ],
        "finalFormula": "C_{\\text{cond}} = \\frac{\\varepsilon_0 A}{d - t}"
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
    "comparisonTable": {
      "title": "Effect of Dielectric Slab (K) on Capacitor Parameters (MLL Comparison)",
      "headers": [
        "Parameter",
        "Battery Disconnected (Q Constant)",
        "Battery Connected (V Constant)"
      ],
      "rows": [
        [
          "Charge (Q)",
          "Q₀ (Remains Same)",
          "K Q₀ (Increases K times)"
        ],
        [
          "Potential Difference (V)",
          "V₀ / K (Decreases K times)",
          "V₀ (Remains Same)"
        ],
        [
          "Electric Field (E)",
          "E₀ / K (Decreases K times)",
          "E₀ (Remains Same)"
        ],
        [
          "Capacitance (C)",
          "K C₀ (Increases K times)",
          "K C₀ (Increases K times)"
        ],
        [
          "Stored Energy (U)",
          "U₀ / K (Decreases K times)",
          "K U₀ (Increases K times)"
        ]
      ]
    }
  },
  "phy-sub-2-8": {
    "theory": [
      "Energy stored in a capacitor resides inside the electrostatic field between the plates: $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$.",
      "Electrostatic energy density (energy per unit volume) in free space is $u_e = \\frac{1}{2}\\varepsilon_0 E^2$, and inside a dielectric medium $u_e = \\frac{1}{2}K\\varepsilon_0 E^2$.",
      "When two charged capacitors at different potentials $V_1 \\ne V_2$ are connected in parallel, charge redistributes until both reach a common potential $V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$, always accompanied by irreversible energy loss as heat."
    ],
    "derivations": [
      {
        "name": "Energy Stored in a Capacitor & Energy Density (Slide 13)",
        "setup": "Compute work done in charging capacitor $C$ from $0$ to $Q$ via small charge increments $dq'$.",
        "steps": [
          {
            "text": "Work done at intermediate charge $q'$ ($V' = q'/C$): $dW = \\frac{q'}{C}dq'$:",
            "equation": "U = \\int_0^Q \\frac{q'}{C}dq' = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2"
          },
          {
            "text": "For parallel plates ($C = \\frac{\\varepsilon_0 A}{d}$, $V = E d$, volume $V_{\\text{vol}} = A d$):",
            "equation": "u_e = \\frac{U}{Ad} = \\frac{1}{2}\\frac{\\varepsilon_0 A}{d}\\frac{E^2 d^2}{Ad} = \\frac{1}{2}\\varepsilon_0 E^2"
          }
        ],
        "finalFormula": "U = \\frac{1}{2}CV^2, \\qquad u_e = \\frac{1}{2}\\varepsilon_0 E^2"
      },
      {
        "name": "Common Potential & Energy Loss on Sharing Charges (Slide 14)",
        "setup": "Two isolated capacitors $(C_1, V_1)$ and $(C_2, V_2)$ are connected across each other with a conducting wire.",
        "steps": [
          {
            "text": "By conservation of charge ($Q_{\\text{before}} = Q_{\\text{after}}$):",
            "equation": "C_1 V_1 + C_2 V_2 = (C_1 + C_2)V_c \\implies V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}"
          },
          {
            "text": "Subtract final energy $U_f = \\frac{1}{2}(C_1 + C_2)V_c^2$ from initial energy $U_i = \\frac{1}{2}C_1 V_1^2 + \\frac{1}{2}C_2 V_2^2$:",
            "equation": "\\Delta U = U_i - U_f = \\frac{C_1 C_2}{2(C_1 + C_2)}(V_1 - V_2)^2 > 0"
          }
        ],
        "finalFormula": "V_c = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}, \\qquad \\Delta U = \\frac{C_1 C_2}{2(C_1 + C_2)}(V_1 - V_2)^2"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "energy-storage",
      "title": "Capacitor Energy Density & Charge Sharing",
      "examDrawingGuide": [
        "1. Draw parallel plates with $+Q$ and $-Q$ and uniform $E$ lines filling volume $Ad$.",
        "2. Plot linear $V$ vs $q$ graph whose triangular area $\\frac{1}{2}QV$ equals stored energy $U$."
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
    ]
  },
  "phy-sub-3-5": {
    "theory": [
      "Drift velocity ($\\vec{v}_d = -\\frac{e\\vec{E}\\tau}{m}$) is the average steady velocity gained by free electrons opposite to an applied electric field $\\vec{E}$ between collisions (relaxation time $\\tau$).",
      "Drift velocity is typically tiny ($\\sim 10^{-4}\\text{ m/s}$) and strictly independent of conductor cross-sectional area $A$ when field $E$ is fixed, whereas for constant current $I$ along a non-uniform wire, $v_d = \\frac{I}{neA} \\propto 1/A$."
    ],
    "derivations": [
      {
        "name": "Drift Velocity, Current ($I = neAv_d$) & Vector Ohm's Law (Slide 15)",
        "setup": "Free electron of mass $m$, charge $-e$, experiences acceleration $\\vec{a} = -e\\vec{E}/m$ during mean collision interval $\\tau$.",
        "steps": [
          {
            "text": "Averaging final velocities $\\vec{v}_i = \\vec{u}_i + \\vec{a}\\tau_i$ across $N$ electrons ($\\langle\\vec{u}_i\\rangle = 0$):",
            "equation": "\\vec{v}_d = -\\frac{e\\vec{E}\\tau}{m}, \\qquad \\mu = \\frac{|v_d|}{E} = \\frac{e\\tau}{m}"
          },
          {
            "text": "Charge crossing area $A$ in time $\\Delta t$ comes from cylinder volume $A(v_d \\Delta t)$ containing electron density $n$:",
            "equation": "I = \\frac{\\Delta Q}{\\Delta t} = n e A v_d"
          },
          {
            "text": "Substituting $v_d = \\frac{eE\\tau}{m}$ gives current density $\\vec{J} = I/A$:",
            "equation": "\\vec{J} = \\left(\\frac{ne^2\\tau}{m}\\right)\\vec{E} = \\sigma\\vec{E} \\implies \\rho = \\frac{m}{ne^2\\tau}"
          }
        ],
        "finalFormula": "v_d = \\frac{eE\\tau}{m}, \\qquad I = n e A v_d, \\qquad \\rho = \\frac{m}{n e^2 \\tau}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Drift Velocity vd = eEτ/m",
      "I = n e A v_d",
      "Mobility μ = vd / E = eτ/m",
      "Resistivity ρ = m/(ne²τ)"
    ],
    "termsGlossary": [
      {
        "symbol": "\\mu",
        "term": "Mobility",
        "definition": "Magnitude of drift velocity acquired per unit electric field ($\\text{m}^2\\text{ V}^{-1}\\text{ s}^{-1}$)"
      },
      {
        "symbol": "\\tau",
        "term": "Relaxation Time",
        "definition": "Average time interval between two successive electron-lattice collisions (decreases as $T$ rises)"
      }
    ]
  },
  "phy-sub-3-7": {
    "theory": [
      "Electrical power dissipated across resistor $R$ is $P = V I = I^2 R = \\frac{V^2}{R}$ (Unit: watt); electrical energy consumed is $W = P t$ ($1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}$).",
      "For an appliance rated $(P_{\\text{rated}}, V_{\\text{rated}})$, its coil resistance is $R = \\frac{V_{\\text{rated}}^2}{P_{\\text{rated}}}$ — meaning higher wattage bulbs have LOWER resistance!"
    ],
    "derivations": [
      {
        "name": "Series vs Parallel Brightness & High-Voltage Cable Loss (MLL Ch 3)",
        "setup": "Compare power dissipated in two appliances $R_1, R_2$ and power loss $P_{\\text{loss}}$ over transmission lines of resistance $R_c$.",
        "steps": [
          {
            "text": "In Series ($I$ same): $P = I^2 R \\implies \\frac{P_1}{P_2} = \\frac{R_1}{R_2}$. Since $R \\propto 1/P_{\\text{rated}}$, LOWER-wattage bulb dissipates MORE power and glows brighter!"
          },
          {
            "text": "In Parallel ($V$ same): $P = \\frac{V^2}{R} \\implies \\frac{P_1}{P_2} = \\frac{R_2}{R_1}$, so HIGHER-wattage bulb glows brighter."
          },
          {
            "text": "Transmission loss for delivering power $P$ at line voltage $V$ through cable $R_c$:",
            "equation": "P_{\\text{loss}} = I^2 R_c = \\left(\\frac{P}{V}\\right)^2 R_c = \\frac{P^2 R_c}{V^2} \\propto \\frac{1}{V^2}"
          }
        ],
        "finalFormula": "P_{\\text{loss}} = \\frac{P^2 R_c}{V^2}, \\qquad R = \\frac{V_{\\text{rated}}^2}{P_{\\text{rated}}}"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Joule Heat H = I²Rt",
      "R = V²_rated / P_rated",
      "Transmission loss ∝ 1/V²"
    ],
    "termsGlossary": [
      {
        "symbol": "1\\text{ kWh}",
        "term": "Kilowatt-hour",
        "definition": "Commercial unit of electrical energy equal to $3.6 \\times 10^6\\text{ J}$"
      }
    ]
  },
  "phy-sub-3-8": {
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
    ]
  },
  "phy-sub-3-9": {
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
    ]
  },
  "phy-sub-4-2": {
    "theory": [
      "By Biot-Savart law, magnetic field due to current element $I\\,d\\vec{l}$ at position $\\vec{r}$ is $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l}\\times\\hat{r})}{r^2}$.",
      "At the centre of a $N$-turn circular loop of radius $R$, all elements are equidistant and $d\\vec{l}\\perp\\vec{r}$, yielding $B_{\\text{centre}} = \\frac{\\mu_0 N I}{2R}$.",
      "Along the axis at distance $x$, perpendicular components cancel by symmetry while axial components add to give $B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}$."
    ],
    "derivations": [
      {
        "name": "Magnetic Field on the Axis of a Circular Current Loop (Slides 20–21)",
        "setup": "Circular coil of radius $R$ carrying current $I$ lies perpendicular to $x$-axis. Axial point $P$ is at distance $x$ from centre $O$, slant distance $r = \\sqrt{R^2 + x^2}$.",
        "steps": [
          {
            "text": "Element $I\\,d\\vec{l}$ is strictly perpendicular to $\\vec{r}$ ($\\sin 90^\\circ = 1$):",
            "equation": "dB = \\frac{\\mu_0 I\\,dl}{4\\pi(R^2 + x^2)}"
          },
          {
            "text": "Symmetrically opposite elements cancel $dB\\sin\\phi$ perpendicular to axis. Only axial components $dB\\cos\\phi$ survive with $\\cos\\phi = \\frac{R}{\\sqrt{R^2+x^2}}$:",
            "equation": "B = \\oint dB\\cos\\phi = \\frac{\\mu_0 I R}{4\\pi(R^2+x^2)^{3/2}} \\oint dl = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}"
          }
        ],
        "finalFormula": "B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}} \\quad \\xrightarrow{x=0} \\quad B_{\\text{centre}} = \\frac{\\mu_0 N I}{2R}"
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
    ]
  },
  "phy-sub-4-7": {
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
    ]
  },
  "phy-sub-4-8": {
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
    ]
  },
  "phy-sub-4-9": {
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
    ]
  },
  "phy-sub-4-10": {
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
    ]
  },
  "phy-sub-5-1": {
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
    ]
  },
  "phy-sub-5-2": {
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
    ]
  },
  "phy-sub-5-3": {
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
    "comparisonTable": {
      "title": "Diamagnetic vs Paramagnetic vs Ferromagnetic Materials (CBSE Board Comparison)",
      "headers": [
        "Property",
        "Diamagnetic (Bi, Cu, Water)",
        "Paramagnetic (Al, Na, O₂)",
        "Ferromagnetic (Fe, Co, Ni)"
      ],
      "rows": [
        [
          "In Non-Uniform B-Field",
          "Moves weakly from stronger to weaker region",
          "Moves weakly from weaker to stronger region",
          "Moves strongly from weaker to stronger region"
        ],
        [
          "Magnetic Susceptibility (χ)",
          "Small & Negative (−1 ≤ χ < 0)",
          "Small & Positive (0 < χ < ε)",
          "Very Large & Positive (χ ≫ 1)"
        ],
        [
          "Relative Permeability (μ_r)",
          "0 ≤ μ_r < 1",
          "1 < μ_r < 1 + ε",
          "μ_r ≫ 1 (10³ to 10⁵)"
        ],
        [
          "Effect of Temperature (T)",
          "Independent of T",
          "χ ∝ 1/T (Curie’s Law)",
          "χ = C/(T − T_c) above Curie temp T_c"
        ]
      ]
    }
  },
  "phy-sub-6-2": {
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
    ]
  },
  "phy-sub-6-3": {
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
    ]
  },
  "phy-sub-6-5": {
    "theory": [
      "Faraday's First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, which lasts as long as the flux continues to change.",
      "Faraday's Second Law: The magnitude of the induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit: $$\\varepsilon = -\\frac{d\\Phi_B}{dt} \\quad \\left(\\text{for } N \\text{ turns: } \\varepsilon = -N\\frac{d\\Phi_B}{dt}\\right)$$",
      "Lenz's Law: The direction of induced current is always such that it opposes the change in magnetic flux that produces it.",
      "Lenz's law is a direct consequence of the Law of Conservation of Energy: when a magnet is pushed toward a loop, the loop develops an opposing magnetic pole. An external agent must do mechanical work against this magnetic repulsion, and this mechanical work is converted into electrical energy (and ultimately Joule heat)."
    ],
    "derivations": [
      {
        "name": "Motional EMF: Sliding & Rotating Conductor in Uniform B-Field (Slide 29)",
        "setup": "Move conducting rod $PQ$ of length $l$ across U-rails at velocity $v$ normal to $\\vec{B}$, or rotate rod about one end at angular speed $\\omega$.",
        "steps": [
          {
            "text": "Sliding Rod: Loop area enclosed is $A = lx$. Rate of decrease of enclosed flux:",
            "equation": "|\\varepsilon| = \\frac{d}{dt}(Blx) = Bl\\left(-\\frac{dx}{dt}\\right) = Blv"
          },
          {
            "text": "With loop resistance $R$, induced current $I = Blv/R$ produces opposing magnetic force $F = IlB = \\frac{B^2 l^2 v}{R}$ and Joule power $P = \\frac{B^2 l^2 v^2}{R}$."
          },
          {
            "text": "Rotating Rod of length $l$ ($\\omega = 2\\pi\\nu$): In one period $T = 1/\\nu$, area swept is $\\pi l^2$:",
            "equation": "\\varepsilon = B\\frac{\\pi l^2}{T} = \\frac{1}{2}B\\omega l^2 = B\\pi\\nu l^2"
          }
        ],
        "finalFormula": "\\varepsilon_{\\text{slide}} = Blv, \\qquad \\varepsilon_{\\text{rotate}} = \\frac{1}{2}B\\omega l^2"
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
    ]
  },
  "phy-sub-7-4": {
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
    ]
  },
  "phy-sub-7-5": {
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
    ]
  },
  "phy-sub-7-6": {
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
    ]
  },
  "phy-sub-7-8": {
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
    ]
  },
  "phy-sub-8-1": {
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
    "comparisonTable": {
      "title": "Electromagnetic Spectrum Summary (MLL 2026 Quick Reference)",
      "headers": [
        "EM Wave",
        "Wavelength Range",
        "Production Source",
        "Primary Applications"
      ],
      "rows": [
        [
          "Radio Waves",
          "> 0.1 m",
          "Oscillating LC circuits / antennas",
          "AM/FM Radio & TV broadcasting"
        ],
        [
          "Microwaves",
          "0.1 m to 1 mm",
          "Klystron, Magnetron, Gunn diodes",
          "Radar navigation, Speed guns, Microwave ovens"
        ],
        [
          "Infrared (IR)",
          "1 mm to 700 nm",
          "Hot bodies, Molecular vibrations",
          "Night-vision optics, Physical therapy, Remote controls"
        ],
        [
          "Visible Light",
          "700 nm to 400 nm",
          "Atomic outer-shell transitions",
          "Human vision, Photosynthesis, Optical instruments"
        ],
        [
          "Ultraviolet (UV)",
          "400 nm to 1 nm",
          "Sun, Arc lamps, Mercury vapour",
          "LASIK eye surgery, Water purification, Sterilization"
        ],
        [
          "X-Rays",
          "1 nm to 10⁻³ nm",
          "Bombarding heavy metal targets with fast e⁻",
          "Medical fracture radiography, Crystal structure"
        ],
        [
          "Gamma Rays",
          "< 10⁻³ nm",
          "Nuclear reactions & radioactive decay",
          "Cancer radiotherapy, Nuclear structure probes"
        ]
      ]
    }
  },
  "phy-sub-8-2": {
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
    ]
  },
  "phy-sub-8-3": {
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
    ]
  },
  "phy-sub-8-4": {
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
    ]
  },
  "phy-sub-4-3": {
    "theory": [
      "Ampere’s Circuital Law states that the closed line integral of magnetic field $\\vec{B}$ around any closed Amperian path equals $\\mu_0$ times net enclosed current: $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$.",
      "For a thick cylindrical conductor of radius $a$ carrying uniform current $I$, magnetic field rises linearly inside ($B_{\\text{in}} \\propto r$), peaks on the surface ($r = a$), and falls hyperbolically outside ($B_{\\text{out}} \\propto 1/r$)."
    ],
    "derivations": [
      {
        "name": "Ampere’s Law for Thick Cylindrical Wire: Inside (r < a) & Outside (r > a) (Slide 22)",
        "setup": "Consider an infinitely long solid cylindrical wire of radius $a$ carrying steady uniform current $I$ across cross-section $\\pi a^2$.",
        "steps": [
          {
            "text": "Outside ($r > a$): Coaxial circular loop encloses all current $I$:",
            "equation": "B_{\\text{out}}(2\\pi r) = \\mu_0 I \\implies B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi r}"
          },
          {
            "text": "Inside ($r < a$): Current enclosed within smaller radius $r$ is proportional to area $I_{\\text{enc}} = I\\frac{\\pi r^2}{\\pi a^2} = I\\frac{r^2}{a^2}$:",
            "equation": "B_{\\text{in}}(2\\pi r) = \\mu_0 I \\frac{r^2}{a^2} \\implies B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi a^2}"
          }
        ],
        "finalFormula": "B_{\\text{in}} = \\frac{\\mu_0 I r}{2\\pi a^2}, \\qquad B_{\\text{out}} = \\frac{\\mu_0 I}{2\\pi r}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "parallel-wires",
      "title": "Amperian Loops & B vs r Variation",
      "examDrawingGuide": [
        "1. Draw cylindrical wire of radius a showing concentric inner (r < a) and outer (r > a) Amperian loops.",
        "2. Plot B vs r: straight line from origin peaking at r = a, then smooth 1/r curve for r > a."
      ]
    },
    "keyPointsAndKeywords": [
      "Ampere Circuital Law",
      "B proportional to r inside",
      "B proportional to 1/r outside",
      "Current density J"
    ],
    "termsGlossary": [
      {
        "symbol": "\\mu_0",
        "term": "Permeability of Free Space",
        "definition": "$4\\pi\\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$"
      },
      {
        "symbol": "a",
        "term": "Conductor Radius",
        "definition": "Radius of the thick cylindrical wire where $B$ attains maximum value"
      }
    ]
  },
  "phy-sub-4-4": {
    "theory": [
      "A long solenoid consists of closely wound insulated helical turns such that length $l \\gg$ radius $R$, making the internal magnetic field uniform and nearly parallel to the axis while the external field vanishes.",
      "Inside a long solenoid with $n = N/l$ turns per metre, $B = \\mu_0 n I$; at the open ends, edge effects reduce the field to exactly half: $B_{\\text{end}} = \\frac{1}{2}\\mu_0 n I$."
    ],
    "derivations": [
      {
        "name": "Magnetic Field Inside a Long Straight Solenoid (Slide 23)",
        "setup": "Construct rectangular Amperian loop $abcd$ of length $l$ with side $ab$ inside along axis and side $cd$ far outside.",
        "steps": [
          {
            "text": "Evaluate closed line integral along all four sides ($cd$ in zero outside field; $bc, da$ perpendicular to interior $\\vec{B}$):",
            "equation": "\\oint \\vec{B}\\cdot d\\vec{l} = B l + 0 + 0 + 0 = B l"
          },
          {
            "text": "Number of turns enclosed inside rectangle of length $l$ is $nl$, so $I_{\\text{enc}} = nlI$. Apply Ampere’s Law:",
            "equation": "B l = \\mu_0 (n l I) \\implies B = \\mu_0 n I"
          }
        ],
        "finalFormula": "B = \\mu_0 n I \\quad (\\text{centre}), \\qquad B_{\\text{end}} = \\frac{1}{2}\\mu_0 n I"
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
      "Turns per unit length n = N/L",
      "Uniform internal B",
      "Edge field = B/2"
    ],
    "termsGlossary": [
      {
        "symbol": "n",
        "term": "Turn Density",
        "definition": "Number of turns per unit length ($N/L$ in $\\text{m}^{-1}$)"
      }
    ]
  },
  "phy-sub-6-8": {
    "theory": [
      "Self-inductance $L$ is numerically equal to magnetic flux linkage per unit current in the same coil ($\\Phi = LI$, unit Henry).",
      "Mutual inductance $M$ of two coaxial solenoids depends on turn densities $n_1, n_2$, common length $l$, and strictly the cross-sectional area $A_1 = \\pi r_1^2$ of the INNER solenoid."
    ],
    "derivations": [
      {
        "name": "Self-Inductance of Solenoid & Mutual Inductance of Coaxial Solenoids (Slides 30–31)",
        "setup": "Consider coaxial solenoids of length $l$, inner area $A_1 = \\pi r_1^2$, and turn densities $n_1, n_2$.",
        "steps": [
          {
            "text": "Single Solenoid Self-Inductance ($N = nl$ turns, field $B = \\mu_0\\mu_r n I$):",
            "equation": "\\Phi = N B A = \\mu_0 \\mu_r n^2 A l I \\implies L = \\mu_0 \\mu_r n^2 A l"
          },
          {
            "text": "Coaxial Pair: Current $I_2$ in outer solenoid produces field $B_2 = \\mu_0\\mu_r n_2 I_2$ linking inner $N_1 = n_1 l$ turns:",
            "equation": "\\Phi_{12} = (n_1 l)(\\mu_0\\mu_r n_2 I_2) A_1 \\implies M = \\mu_0\\mu_r n_1 n_2 A_1 l"
          }
        ],
        "finalFormula": "L = \\mu_0 \\mu_r n^2 A l, \\qquad M = \\mu_0 \\mu_r n_1 n_2 (\\pi r_1^2) l"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "transformer",
      "title": "Coaxial Solenoid Mutual Flux Linkage",
      "examDrawingGuide": [
        "1. Draw inner narrow solenoid S1 inside outer solenoid S2 with flux lines confined to inner core A1."
      ]
    },
    "keyPointsAndKeywords": [
      "Reciprocity M12 = M21",
      "Inner area A1 only",
      "1 Henry"
    ],
    "termsGlossary": [
      {
        "symbol": "M",
        "term": "Mutual Inductance",
        "definition": "Flux linkage in secondary per unit current in primary (SI unit: H)"
      }
    ]
  },
  "phy-sub-6-9": {
    "theory": [
      "An inductor opposes growth of current via back EMF $\\varepsilon = -L\\frac{dI}{dt}$. External work done against this back EMF is stored purely as magnetic field energy $U_B = \\frac{1}{2}LI_0^2$.",
      "In free space, magnetic energy per unit volume (magnetic energy density) is $u_B = \\frac{B^2}{2\\mu_0}$, forming an exact parallel to electrostatic energy density $u_e = \\frac{1}{2}\\varepsilon_0 E^2$."
    ],
    "derivations": [
      {
        "name": "Energy Stored in an Inductor & Magnetic Energy Density (Slide 36)",
        "setup": "Raise current through pure inductor $L$ from $0$ to $I_0$ against self-induced back EMF.",
        "steps": [
          {
            "text": "Small work $dW$ against $\\varepsilon = L\\frac{dI}{dt}$ in time $dt$:",
            "equation": "dW = \\varepsilon I\\,dt = L I\\,dI \\implies U_B = \\int_0^{I_0} L I\\,dI = \\frac{1}{2}L I_0^2"
          },
          {
            "text": "Using solenoid relations $L = \\mu_0 n^2 A l$ and $B = \\mu_0 n I_0$:",
            "equation": "u_B = \\frac{U_B}{Al} = \\frac{B^2}{2\\mu_0}"
          }
        ],
        "finalFormula": "U_B = \\frac{1}{2}L I_0^2, \\qquad u_B = \\frac{B^2}{2\\mu_0}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "energy-storage",
      "title": "Magnetic Field Energy Density",
      "examDrawingGuide": [
        "1. Compare u_B = B²/2μ₀ directly with u_e = ½ε₀E²."
      ]
    },
    "keyPointsAndKeywords": [
      "U = 1/2 L I^2",
      "Energy density B^2/(2 mu_0)",
      "No heat loss in ideal L"
    ],
    "termsGlossary": [
      {
        "symbol": "u_B",
        "term": "Magnetic Energy Density",
        "definition": "Magnetic energy stored per unit volume ($\\text{J/m}^3$)"
      }
    ]
  },
  "phy-sub-7-7": {
    "theory": [
      "Average power consumed per complete cycle in an AC circuit depends on the phase difference $\\phi$ between voltage and current: $P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi$, where $\\cos\\phi = R/Z$ is the power factor.",
      "The component $I_{\\text{rms}}\\sin\\phi$ perpendicular to applied voltage contributes zero average power over a cycle and is called wattless current."
    ],
    "derivations": [
      {
        "name": "Average Power in AC Circuit & Wattless Current (Slide 35)",
        "setup": "Let $v = V_m\\sin\\omega t$ and $i = I_m\\sin(\\omega t + \\phi)$.",
        "steps": [
          {
            "text": "Instantaneous power $p = vi = V_m I_m [\\sin^2(\\omega t)\\cos\\phi + \\frac{1}{2}\\sin(2\\omega t)\\sin\\phi]$. Averaging over one cycle ($\\langle\\sin^2\\rangle = 1/2$, $\\langle\\sin 2\\omega t\\rangle = 0$):",
            "equation": "P_{\\text{avg}} = \\frac{V_m I_m}{2}\\cos\\phi = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi"
          }
        ],
        "finalFormula": "P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}} \\cos\\phi"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "lcr-circuit",
      "title": "AC Power Factor & Phasor Triangle",
      "examDrawingGuide": [
        "1. Mark active current component I cosφ along V and wattless component I sinφ orthogonal to V."
      ]
    },
    "keyPointsAndKeywords": [
      "Power factor cos phi = R/Z",
      "At resonance cos phi = 1",
      "Wattless current when pure L or C"
    ],
    "termsGlossary": [
      {
        "symbol": "\\cos\\phi",
        "term": "Power Factor",
        "definition": "Ratio $R/Z$ controlling real power dissipation in AC network"
      }
    ]
  },
  "phy-sub-9-5": {
    "theory": [
      "Compound microscope uses a short-$f_o$, small-aperture objective and larger-aperture eyepiece ($f_e > f_o$): $M = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right) \\approx \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$ at $D = 25\\text{ cm}$.",
      "Astronomical telescope uses a large-$f_o$, large-aperture objective (for light-gathering & resolving power) and small-$f_e$ eyepiece: $M = f_o/f_e$, tube length $L = f_o + f_e$ in normal adjustment."
    ],
    "derivations": [
      {
        "name": "Magnifying Power of Compound Microscope & Astronomical Telescope",
        "setup": "Angular magnification $M = \\beta/\\alpha$ where $\\beta$ is visual angle subtended by final image and $\\alpha$ is unaided object angle.",
        "steps": [
          {
            "text": "Compound Microscope (object near $F_o$, intermediate real image at $v_o$, final image at $D$):",
            "equation": "M = m_o \\times m_e = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)"
          },
          {
            "text": "Astronomical Telescope (distant object forms intermediate image at $F_o$):",
            "equation": "M_{\\infty} = \\frac{f_o}{f_e} \\; (L = f_o + f_e), \\qquad M_D = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)"
          }
        ],
        "finalFormula": "M_{\\text{mic}} = \\frac{v_o}{|u_o|}\\left(1+\\frac{D}{f_e}\\right), \\qquad M_{\\text{tel}} = \\frac{f_o}{f_e}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Microscope & Telescope Ray Diagrams",
      "examDrawingGuide": [
        "1. Mark two arrowheads on every ray and place final normal-adjustment image rays emerging strictly parallel!"
      ]
    },
    "comparisonTable": {
      "title": "Compound Microscope vs Astronomical Telescope",
      "headers": [
        "Feature",
        "Compound Microscope",
        "Astronomical Telescope"
      ],
      "rows": [
        [
          "Objective Lens",
          "Small focal length $f_o$, small aperture",
          "Large focal length $f_o$, LARGE aperture"
        ],
        [
          "Eyepiece",
          "Moderate focal length $f_e > f_o$",
          "Small focal length $f_e \\ll f_o$"
        ],
        [
          "Magnifying Power ($\\infty$)",
          "$(L/f_o)(D/f_e)$",
          "$f_o / f_e$ (normal adjustment $L = f_o + f_e$)"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "Both f_o, f_e small for microscope",
      "Large aperture telescope objective",
      "Cassegrain mirror zero chromatic aberration"
    ],
    "termsGlossary": [
      {
        "symbol": "L",
        "term": "Optical Tube Length",
        "definition": "Separation between objective and eyepiece lenses ($v_o + |u_e|$ or $f_o + f_e$)"
      }
    ]
  },
  "phy-sub-10-2": {
    "theory": [
      "By Huygens’ wavefront construction, refraction from rarer medium 1 (speed $v_1$) to denser medium 2 (speed $v_2 < v_1$) obeys $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$, establishing that light slows down in denser media while frequency $\\nu$ remains constant."
    ],
    "derivations": [
      {
        "name": "Huygens Wavefront Proof of Snell’s Law & Reflection",
        "setup": "Plane wavefront $AB$ hits interface $XY$ obliquely at angle $i$. In time $\\tau$, disturbance at $B$ reaches $C$ ($BC = v_1\\tau$) while secondary wavelet from $A$ reaches $E$ ($AE = v_2\\tau$).",
        "steps": [
          {
            "text": "From right triangles $\\triangle ABC$ and $\\triangle AEC$ sharing hypotenuse $AC$:",
            "equation": "\\frac{\\sin i}{\\sin r} = \\frac{BC/AC}{AE/AC} = \\frac{v_1\\tau}{v_2\\tau} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}"
          },
          {
            "text": "For reflection in the same medium ($v_1 = v_2$): $\\triangle ABC \\cong \\triangle AEC \\implies \\angle i = \\angle r$."
          }
        ],
        "finalFormula": "\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}, \\qquad \\angle i = \\angle r"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "Huygens Refraction Wavefront Geometry",
      "examDrawingGuide": [
        "1. Draw reflected radius = incident distance for reflection, and shorter refracted radius v2*tau < v1*tau inside denser medium."
      ]
    },
    "keyPointsAndKeywords": [
      "v2 < v1 in denser medium",
      "Frequency invariant across interface",
      "n1 sin i = n2 sin r"
    ],
    "termsGlossary": [
      {
        "symbol": "v\\tau",
        "term": "Secondary Wavelet Radius",
        "definition": "Distance travelled by secondary wavefront during transit time $\\tau$"
      }
    ]
  },
  "phy-sub-9-1": {
    "theory": [
      "All distances are measured from the Pole ($P$) of the spherical mirror along the principal axis using the Cartesian sign convention: distances in the direction of incident light are positive ($+$), opposite are negative ($-$).",
      "Mirror equation $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} = \\frac{2}{R}$ is strictly valid for paraxial rays, and focal length $f = R/2$ is completely unaffected by immersion in any liquid."
    ],
    "derivations": [
      {
        "name": "Mirror Formula & Transverse Magnification (Slide 38)",
        "setup": "Consider concave mirror ($f < 0$) forming real inverted image $A'B'$ of object $AB$ placed beyond $C$. Paraxial aperture makes $MP \\perp$ axis.",
        "steps": [
          {
            "text": "From similar triangles $\\triangle A'B'F \\sim \\triangle MPF$ and $\\triangle A'B'P \\sim \\triangle ABP$:",
            "equation": "\\frac{A'B'}{AB} = \\frac{v - f}{f} = \\frac{v}{u} \\xrightarrow{\\text{signs}} \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}"
          },
          {
            "text": "Linear magnification:",
            "equation": "m = \\frac{h_i}{h_o} = -\\frac{v}{u} = \\frac{f}{f - u}"
          }
        ],
        "finalFormula": "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\qquad m = -\\frac{v}{u}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Mirror Reflection & Refraction Geometry",
      "examDrawingGuide": [
        "1. Mark Pole P, Focus F, and Centre of Curvature C with clear arrowheads on every light ray."
      ]
    },
    "keyPointsAndKeywords": [
      "Cartesian Sign Convention",
      "Concave f < 0, Convex f > 0",
      "Paraxial Approximation"
    ],
    "termsGlossary": [
      {
        "symbol": "f",
        "term": "Focal Length",
        "definition": "$R/2$ for spherical mirrors, independent of medium"
      }
    ]
  },
  "phy-sub-9-3": {
    "theory": [
      "Refraction at a single spherical surface of radius $R$ obeys $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$ regardless of convex/concave shape once signs are applied.",
      "Lens Maker’s Formula $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$ relates focal length to surrounding medium $n_1$: immersing a glass lens in water ($n_w = 1.33$) decreases $(n_g/n_w - 1)$ and therefore INCREASES focal length nearly 4-fold (while red light has smaller $n_R$ and larger $f_R > f_V$!)."
    ],
    "derivations": [
      {
        "name": "Refraction at Convex Spherical Surface (Slide 39)",
        "setup": "Object $O$ in rarer medium ($n_1$) forms real image $I$ in denser medium ($n_2$) across convex interface of radius $R$.",
        "steps": [
          {
            "text": "Paraxial angles $\\alpha = \\frac{h}{-u}$, $\\beta = \\frac{h}{v}$, $\\gamma = \\frac{h}{R}$ with $i = \\alpha + \\gamma$ and $r = \\gamma - \\beta$:"
          },
          {
            "text": "Apply small-angle Snell’s law $n_1 i = n_2 r$:",
            "equation": "n_1\\left(-\\frac{1}{u} + \\frac{1}{R}\\right) = n_2\\left(\\frac{1}{R} - \\frac{1}{v}\\right) \\implies \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
          }
        ],
        "finalFormula": "\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}"
      },
      {
        "name": "Lens Maker’s Formula & Thin Lenses in Contact (Slide 40)",
        "setup": "Apply spherical refraction sequentially to first face ($n_1 \\to n_2$, $R_1$) forming virtual intermediate image $I_1$ at $v_1$, then second face ($n_2 \\to n_1$, $R_2$).",
        "steps": [
          {
            "text": "Face 1: $\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1}$;  Face 2: $\\frac{n_1}{v} - \\frac{n_2}{v_1} = -\\frac{n_2 - n_1}{R_2}$."
          },
          {
            "text": "Add equations ($v_1$ cancels) and put $u = \\infty \\implies v = f$:",
            "equation": "\\frac{1}{f} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)"
          }
        ],
        "finalFormula": "\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\qquad \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Lens Maker & Prism Optical Geometry",
      "examDrawingGuide": [
        "1. Draw first intermediate image I1 dashed before applying second surface refraction.",
        "2. For equiconvex lens: R1 = +R and R2 = -R, giving 1/f = (n-1)(2/R)."
      ]
    },
    "keyPointsAndKeywords": [
      "Lens Maker Formula",
      "Power P = 1/f (m)",
      "f_Red > f_Violet"
    ],
    "termsGlossary": [
      {
        "symbol": "P",
        "term": "Optical Power",
        "definition": "Reciprocal of focal length in metres, SI unit Dioptre (D)"
      }
    ],
    "comparisonTable": {
      "title": "Thin Glass Lens (n_g = 1.5) Behavior in Liquid & Cut-Lens Cases (Vedantu Ch 9 High-Yield)",
      "headers": [
        "Modification Case",
        "Formula / Effect on Focal Length f",
        "Key Board Exam Result"
      ],
      "rows": [
        [
          "Immersed in Water (n_l = 1.33 < n_g)",
          "f_w / f_a = (n_g − 1) / (n_g/n_l − 1) ≈ 4",
          "Convex remains convex; focal length INCREASES ~4× (power drops)"
        ],
        [
          "Immersed in Equal-n Liquid (n_l = n_g = 1.5)",
          "1/f_l = (1.5/1.5 − 1)(1/R₁ − 1/R₂) = 0",
          "f → ∞; acts as plane glass sheet and lens DISAPPEARS inside liquid!"
        ],
        [
          "Immersed in Denser CS₂ Liquid (n_l = 1.65 > n_g)",
          "(n_g/n_l − 1) becomes NEGATIVE",
          "Convex lens behaves as DIVERGING (concave) & air bubble in water diverges!"
        ],
        [
          "Equiconvex Lens Cut Vertically (Optical Axis)",
          "R₁ = +R, R₂ = ∞ → 1/f' = (n−1)/R = 1/(2f)",
          "Each plano-convex half has DOUBLED focal length f' = 2f"
        ],
        [
          "Equiconvex Lens Cut Horizontally (Principal Axis)",
          "R₁, R₂ unchanged → f' = f unchanged!",
          "Image forms at SAME distance with HALF brightness (aperture halved)"
        ]
      ]
    }
  },
  "phy-sub-9-2": {
    "theory": [
      "Reversibility of refraction + Snell's law ($n_1 \\sin i = n_2 \\sin r$): When light travels from a denser medium ($n_1$) to a rarer medium ($n_2 < n_1$) at angle $i > i_c$, it undergoes 100% Total Internal Reflection (TIR), where $\\sin i_c = n_2/n_1 = 1/n_{12}$.",
      "Critical angle depends on colour/wavelength: since $n_V > n_R$ (Cauchy relation $n = A + B/\\lambda^2$), $\\sin i_c = 1/n$ is SMALLEST for Violet and LARGEST for Red!"
    ],
    "derivations": [
      {
        "name": "Critical Angle Relation & TIR Applications (Vedantu Ch 9)",
        "setup": "Ray goes from denser medium ($n$) to air ($1$) along grazing emergence ($r = 90^\\circ$) at $i = i_c$.",
        "steps": [
          {
            "text": "Apply Snell's law at grazing emergence ($r = 90^\\circ$):",
            "equation": "n \\sin i_c = 1 \\cdot \\sin 90^\\circ \\implies \\sin i_c = \\frac{1}{n} = \\frac{v_1}{v_2}"
          },
          {
            "text": "Mirror vs Lens underwater comparison: Reflection law ($i = r$, $f_{\\text{mirror}} = R/2$) is independent of surrounding medium, so a concave mirror focal length NEVER changes in water, whereas a convex lens focal length increases $\\sim 4\\times$!"
          }
        ],
        "finalFormula": "\\sin i_c = \\frac{1}{n} = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}}, \\qquad \\text{Real Depth / Apparent Depth} = n"
      }
    ],
    "diagram": {
      "hasDiagram": false
    },
    "keyPointsAndKeywords": [
      "Critical Angle sin i_c = 1/n",
      "Red has LARGER i_c than Violet",
      "Optical Fibre Core n1 > Cladding n2",
      "Concave Mirror f unchanged in water"
    ],
    "termsGlossary": [
      {
        "symbol": "i_c",
        "term": "Critical Angle",
        "definition": "Angle of incidence in denser medium for which refracted ray grazes the interface ($r = 90^\\circ$)"
      }
    ]
  },
  "phy-sub-9-4": {
    "theory": [
      "In any triangular prism of refracting angle $A$, $r_1 + r_2 = A$ and angle of deviation $\\delta = i + e - A$.",
      "At minimum deviation ($\\delta = \\delta_m$), the ray traverses symmetrically: $i = e$, $r_1 = r_2 = A/2$, and the refracted ray inside is parallel to the prism base (for an equilateral/isosceles prism)."
    ],
    "derivations": [
      {
        "name": "Prism Formula Derivation (Slide 41)",
        "setup": "Incident angle $i$, emergent angle $e$, internal refraction angles $r_1, r_2$, and prism angle $A$.",
        "steps": [
          {
            "text": "From cyclic quadrilateral $AQNR$ and $\\triangle QNR$:",
            "equation": "r_1 + r_2 = A, \\qquad \\delta = (i - r_1) + (e - r_2) = i + e - A"
          },
          {
            "text": "At minimum deviation $\\delta_m$ ($i = e, r_1 = r_2 = r$): $r = A/2$ and $i = (A + \\delta_m)/2$:",
            "equation": "n = \\frac{\\sin i}{\\sin r} = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin(A/2)}"
          }
        ],
        "finalFormula": "n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin(A/2)}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ray-optics-instruments",
      "title": "Prism Minimum Deviation & i-δ Curve",
      "examDrawingGuide": [
        "1. Draw smooth asymmetric U-shaped curve for δ vs i showing unique minimum δ_m at i = e.",
        "2. Show ray parallel to prism base inside equilateral prism at δ = δ_m."
      ]
    },
    "keyPointsAndKeywords": [
      "i = e at delta_m",
      "Thin prism delta = (n-1)A",
      "No emergence A > 2 i_c"
    ],
    "termsGlossary": [
      {
        "symbol": "\\delta_m",
        "term": "Minimum Deviation",
        "definition": "Unique lowest deviation angle on U-shaped $\\delta$ vs $i$ graph"
      }
    ]
  },
  "phy-sub-10-4": {
    "theory": [
      "In YDSE ($D \\gg d$), path difference at screen coordinate $y$ is $\\Delta x = \\frac{yd}{D}$, giving equally spaced alternating bright and dark fringes of width $\\beta = \\frac{\\lambda D}{d}$.",
      "Bright fringes occur at $\\Delta x = n\\lambda$ ($I_{\\max} = 4I_0$) and dark fringes at $\\Delta x = (2n-1)\\frac{\\lambda}{2}$ ($I_{\\min} = 0$). Immersing YDSE in water ($n$) reduces wavelength and fringe width to $\\beta' = \\beta/n$."
    ],
    "derivations": [
      {
        "name": "YDSE Path Difference & Fringe Width (Slide 42)",
        "setup": "Two coherent slits $S_1, S_2$ separated by $d$ illuminate screen at distance $D \\gg d$.",
        "steps": [
          {
            "text": "Use Pythagoras difference $S_2 P^2 - S_1 P^2 = 2yd$ and approximation $S_2 P + S_1 P \\approx 2D$:",
            "equation": "\\Delta x = S_2 P - S_1 P = \\frac{y d}{D}"
          },
          {
            "text": "Consecutive maxima lie at $y_n = n\\frac{\\lambda D}{d}$ and $y_{n+1} = (n+1)\\frac{\\lambda D}{d}$, giving constant spacing:",
            "equation": "\\beta = y_{n+1} - y_n = \\frac{\\lambda D}{d}"
          }
        ],
        "finalFormula": "\\Delta x = \\frac{yd}{D}, \\qquad \\beta = \\frac{\\lambda D}{d}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "YDSE Geometry & Equal Fringe Spacing",
      "examDrawingGuide": [
        "1. Mark slit separation d, screen distance D, central maximum O, and path difference d sinθ."
      ]
    },
    "keyPointsAndKeywords": [
      "Fringe width beta = lambda D/d",
      "Coherent sources required",
      "Energy redistributed not destroyed"
    ],
    "termsGlossary": [
      {
        "symbol": "\\beta",
        "term": "Fringe Width",
        "definition": "Distance between two consecutive bright or dark fringes ($\\lambda D/d$)"
      }
    ]
  },
  "phy-sub-10-5": {
    "theory": [
      "Single-slit Fraunhofer diffraction produces a broad central maximum of angular width $2\\lambda/a$ (linear width $W_c = 2\\lambda D/a$) flanked by secondary minima at $a\\sin\\theta_n = n\\lambda$ ($n = \\pm 1, \\pm 2, \\dots$).",
      "Caution: In YDSE interference, $d\\sin\\theta = n\\lambda$ gives MAXIMA, whereas in single-slit diffraction $a\\sin\\theta = n\\lambda$ gives MINIMA!"
    ],
    "derivations": [
      {
        "name": "Single-Slit Diffraction Minima & Central Maximum Width (Slide 43)",
        "setup": "Monochromatic plane wave $\\lambda$ illuminates single slit of width $a$. Path difference across top and bottom edges is $a\\sin\\theta$.",
        "steps": [
          {
            "text": "Divide slit into $2n$ equal zones; adjacent zone pairs differ in path by $\\frac{\\lambda}{2}$ and cancel pairwise:",
            "equation": "a\\sin\\theta_n = n\\lambda \\quad (\\text{Secondary Minima},\\; n = 1, 2, 3, \\dots)"
          },
          {
            "text": "Width between first-order minima on either side ($\\theta_1 \\approx \\lambda/a$):",
            "equation": "W_c = 2 D\\theta_1 = \\frac{2\\lambda D}{a}"
          }
        ],
        "finalFormula": "a\\sin\\theta_n = n\\lambda \\; (\\text{Minima}), \\qquad W_c = \\frac{2\\lambda D}{a}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "ydse-wave-optics",
      "title": "Single-Slit Diffraction Intensity Curve",
      "examDrawingGuide": [
        "1. Draw central peak twice as wide as side lobes with rapidly decaying intensity I₀, I₀/22, I₀/61."
      ]
    },
    "comparisonTable": {
      "title": "Interference (YDSE) vs Single-Slit Diffraction (CBSE 3M Distinction)",
      "headers": [
        "Feature",
        "Interference (Double Slit)",
        "Diffraction (Single Slit)"
      ],
      "rows": [
        [
          "Origin",
          "Superposition of waves from two coherent sources",
          "Superposition of secondary wavelets across one finite slit"
        ],
        [
          "Fringe Width",
          "All bright/dark fringes have equal width β = λD/d",
          "Central max is twice as wide (2λD/a); side fringes narrower"
        ],
        [
          "Intensity of Maxima",
          "All maxima have uniform equal intensity (4I₀)",
          "Rapidly falls off (I₀, I₀/22, I₀/61, ...)"
        ],
        [
          "Condition for n-th Minimum",
          "d sinθ = (2n − 1)λ/2",
          "a sinθ = nλ  (Caution: opposite rule!)"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "a sin theta = n lambda (Minima)",
      "Central Max W_c = 2 lambda D / a",
      "Secondary maxima rapidly dim"
    ],
    "termsGlossary": [
      {
        "symbol": "W_c",
        "term": "Central Max Width",
        "definition": "Linear width $2\\lambda D/a$ between first minima on opposite sides of centre"
      }
    ]
  },
  "phy-sub-11-3": {
    "theory": [
      "In Einstein’s photon model, each incident photon of energy $h\\nu$ interacts with a single electron instantaneously ($\\sim 10^{-9}\\text{ s}$). Work function $\\phi_0 = h\\nu_0$ is the minimum threshold energy to liberate a surface electron.",
      "Graph of stopping potential $V_0$ vs frequency $\\nu$ is a straight line with universal slope $h/e$ (same for all metals) and vertical intercept $-\\phi_0/e$."
    ],
    "derivations": [
      {
        "name": "Einstein’s Photoelectric Equation & V₀ vs ν Graph (Slide 44)",
        "setup": "Conservation of energy for photoelectron absorbing single photon $h\\nu$ against metal work function $\\phi_0 = h\\nu_0$.",
        "steps": [
          {
            "text": "Maximum kinetic energy equals excess photon energy above work function:",
            "equation": "K_{\\max} = \\frac{1}{2}m v_{\\max}^2 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)"
          },
          {
            "text": "Using stopping potential relation $K_{\\max} = e V_0$:",
            "equation": "V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}"
          }
        ],
        "finalFormula": "eV_0 = h\\nu - \\phi_0 \\quad \\implies \\quad \\text{Slope} = \\frac{h}{e}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "V₀ vs Frequency & Photocurrent Graphs",
      "examDrawingGuide": [
        "1. Draw parallel straight lines for different metals (A, B) having identical slope h/e and distinct threshold intercepts ν₀."
      ]
    },
    "keyPointsAndKeywords": [
      "K_max = hν - φ₀",
      "Universal Slope = h/e",
      "Intensity controls current, ν controls K_max"
    ],
    "termsGlossary": [
      {
        "symbol": "\\phi_0",
        "term": "Work Function",
        "definition": "Minimum photon energy ($h\\nu_0$, in eV) needed to eject a surface electron"
      }
    ]
  },
  "phy-sub-11-4": {
    "theory": [
      "Every moving particle of momentum $p = mv$ has an associated de Broglie matter wave of wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}$.",
      "For an electron accelerated through potential $V$ volts, $\\lambda_e = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$."
    ],
    "derivations": [
      {
        "name": "de Broglie Wavelength Derivation (Slide 45)",
        "setup": "Relate particle momentum $p$ to kinetic energy $K = qV$ and substitute electron constants.",
        "steps": [
          {
            "text": "Substitute $p = \\sqrt{2mK}$ and $K = qV$ into $\\lambda = h/p$:",
            "equation": "\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}"
          },
          {
            "text": "For electrons ($m = 9.1\\times 10^{-31}\\text{ kg}, e = 1.6\\times 10^{-19}\\text{ C}$):",
            "equation": "\\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}"
          }
        ],
        "finalFormula": "\\lambda = \\frac{h}{\\sqrt{2mqV}}, \\qquad \\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "photoelectric-graphs",
      "title": "Matter Wave λ vs 1/√V Slope Graph",
      "examDrawingGuide": [
        "1. Straight line of λ vs 1/√V through origin has greater slope for lighter particles (1/√m)."
      ]
    },
    "keyPointsAndKeywords": [
      "lambda = 12.27/sqrt(V) A",
      "proton vs alpha ratio = 2 sqrt(2)",
      "lambda vs 1/sqrt(V) linear graph"
    ],
    "termsGlossary": [
      {
        "symbol": "\\lambda",
        "term": "de Broglie Wavelength",
        "definition": "Matter wavelength $h/p$ inversely proportional to momentum"
      }
    ]
  },
  "phy-sub-12-2": {
    "theory": [
      "Bohr proposed three postulates: (1) stable non-radiating stationary orbits, (2) angular momentum quantization $L = mvr = \\frac{nh}{2\\pi}$, and (3) photon emission/absorption $h\\nu = E_i - E_f$.",
      "For Hydrogen ($Z=1$): radius $r_n = 0.529\\,n^2\\text{ \\AA}$, velocity $v_n = \\frac{2.18\\times 10^6}{n}\\text{ m/s}$, and total energy $E_n = -\\frac{13.6}{n^2}\\text{ eV}$ where $K_n = -E_n$ and $U_n = 2E_n$."
    ],
    "derivations": [
      {
        "name": "Bohr Orbit Radii, Speeds & Quantized Energy Levels (Slides 46–47)",
        "setup": "Balance Coulomb attraction with centripetal force alongside Bohr angular momentum quantization.",
        "steps": [
          {
            "text": "Combine $\\frac{mv^2}{r} = \\frac{kZe^2}{r^2}$ and $mvr = \\frac{nh}{2\\pi}$:",
            "equation": "r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = \\frac{0.529\\,n^2}{Z}\\text{ \\AA}, \\qquad v_n = \\frac{Z e^2}{2\\varepsilon_0 n h}"
          },
          {
            "text": "Sum kinetic energy $K_n = \\frac{kZe^2}{2r_n}$ and potential energy $U_n = -\\frac{kZe^2}{r_n}$:",
            "equation": "E_n = K_n + U_n = -\\frac{m Z^2 e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}"
          }
        ],
        "finalFormula": "r_n \\propto n^2, \\quad v_n \\propto \\frac{1}{n}, \\quad E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "bohr-atom-spectra",
      "title": "Bohr Energy Levels & Hydrogen Series",
      "examDrawingGuide": [
        "1. Draw n=1 (-13.6 eV), n=2 (-3.4 eV), n=3 (-1.51 eV), n=∞ (0 eV) with arrows showing Lyman (UV) and Balmer (Visible)."
      ]
    },
    "comparisonTable": {
      "title": "Hydrogen Atom Spectral Series (MLL Reference Table)",
      "headers": [
        "Series Name",
        "Lower Level (n₁)",
        "Upper Levels (n₂)",
        "Spectral Region"
      ],
      "rows": [
        [
          "Lyman Series",
          "1",
          "2, 3, 4, ..., ∞",
          "Ultraviolet (UV)"
        ],
        [
          "Balmer Series",
          "2",
          "3, 4, 5, ..., ∞",
          "Visible"
        ],
        [
          "Paschen Series",
          "3",
          "4, 5, 6, ..., ∞",
          "Infrared (IR)"
        ],
        [
          "Brackett Series",
          "4",
          "5, 6, 7, ..., ∞",
          "Infrared (IR)"
        ],
        [
          "Pfund Series",
          "5",
          "6, 7, 8, ..., ∞",
          "Far Infrared (IR)"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "L = nh/2pi",
      "a0 = 0.529 A",
      "K = -E and U = 2E"
    ],
    "termsGlossary": [
      {
        "symbol": "E_n",
        "term": "Total Bohr Energy",
        "definition": "Negative bound-state energy $-13.6/n^2\\text{ eV}$ in H-atom"
      }
    ]
  },
  "phy-sub-13-1": {
    "theory": [
      "Nuclear radius varies as $R = R_0 A^{1/3}$ where $R_0 \\approx 1.2 \\times 10^{-15}\\text{ m} = 1.2\\text{ fm}$. Because nuclear volume $V = \\frac{4}{3}\\pi R_0^3 A$ is directly proportional to mass number $A$, nuclear density $\\rho = \\frac{m_N A}{V} = \\frac{3m_N}{4\\pi R_0^3} \\approx 2.3\\times 10^{17}\\text{ kg/m}^3$ is CONSTANT and strictly independent of $A$."
    ],
    "derivations": [
      {
        "name": "Proof that Nuclear Density is Independent of Mass Number A",
        "setup": "Consider a spherical nucleus of mass number $A$ and average nucleon mass $m$.",
        "steps": [
          {
            "text": "Nuclear radius $R = R_0 A^{1/3} \\implies V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A$."
          },
          {
            "text": "Ratio of nuclear mass $mA$ to volume $V$:",
            "equation": "\\rho = \\frac{M}{V} = \\frac{m A}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3m}{4\\pi R_0^3} \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3 \\; (\\text{independent of } A)"
          }
        ],
        "finalFormula": "R = R_0 A^{1/3}, \\qquad \\rho = \\text{constant} \\; (\\text{independent of } A)"
      }
    ],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Nuclear Binding Curve & Nuclear Force Potential",
      "examDrawingGuide": [
        "1. Mark BE/A peak at A=56 (Fe, 8.75 MeV) and V(r) minimum at r₀ = 0.8 fm."
      ]
    },
    "keyPointsAndKeywords": [
      "R = R0 A^(1/3)",
      "Density independent of A",
      "1 u = 931.5 MeV"
    ],
    "termsGlossary": [
      {
        "symbol": "\\rho",
        "term": "Nuclear Density",
        "definition": "Constant nuclear matter density $\\sim 2.3\\times 10^{17}\\text{ kg/m}^3$"
      }
    ]
  },
  "phy-sub-13-2": {
    "theory": [
      "Mass defect $\\Delta m = [Z m_p + (A-Z)m_n - M]$ measures the mass converted into nuclear binding energy $\\text{BE} = \\Delta m \\times 931.5\\text{ MeV}$.",
      "Binding energy per nucleon ($\\text{BE}/A$) peaks at $^{56}_{26}\\text{Fe}$ ($8.75\\text{ MeV}$) and forms a nearly flat plateau ($8.0–8.7\\text{ MeV}$) for $30 < A < 170$ due to short-range saturation of the strong nuclear force. Both fission of heavy nuclei ($A > 170$) and fusion of light nuclei ($A < 20$) increase $\\text{BE}/A$ and release enormous energy."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Binding Energy per Nucleon (BE/A vs A)",
      "examDrawingGuide": [
        "1. Show sharp peaks at He-4, C-12, O-16, overall maximum at Fe-56 (8.75 MeV), and downward slope to U-238 (7.6 MeV)."
      ]
    },
    "keyPointsAndKeywords": [
      "BE = Delta m * 931.5 MeV",
      "Fe-56 Peak 8.75 MeV",
      "Saturation Property"
    ],
    "termsGlossary": [
      {
        "symbol": "\\Delta m",
        "term": "Mass Defect",
        "definition": "Difference between total free nucleon mass and bound nuclear mass"
      }
    ]
  },
  "phy-sub-13-3": {
    "theory": [
      "Nuclear force is the strongest force in nature ($F_g : F_e : F_n \\approx 1 : 10^{36} : 10^{38}$), charge-independent ($n–n = p–p = p–n$), non-central, saturated, and short-ranged ($< 3\\text{ fm}$).",
      "Nuclear potential energy $V(r)$ reaches minimum at $r_0 \\approx 0.8\\text{ fm}$: for $r > 0.8\\text{ fm}$ force is strongly attractive, and for $r < 0.8\\text{ fm}$ force becomes strongly repulsive (preventing collapse)."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "nuclei-binding-force",
      "title": "Nuclear Force V(r) vs r & Fission/Fusion",
      "examDrawingGuide": [
        "1. Draw V(r) curve crossing zero near 0.5 fm, hitting negative minimum at r₀ = 0.8 fm, and approaching 0 beyond 3 fm."
      ]
    },
    "comparisonTable": {
      "title": "Nuclear Fission vs Nuclear Fusion (MLL CBSE Comparison Table)",
      "headers": [
        "Property",
        "Nuclear Fission (Atom Bomb / Reactor)",
        "Nuclear Fusion (Sun / H-Bomb)"
      ],
      "rows": [
        [
          "Basic Process",
          "Heavy nucleus splits into two lighter nuclei on neutron impact",
          "Two light nuclei fuse at ~10⁷ K into a heavier nucleus"
        ],
        [
          "Typical Reaction",
          "n + U-235 → Ba-141 + Kr-92 + 3n + ~200 MeV",
          "H-2 + H-2 → He-4 + ~24 MeV"
        ],
        [
          "Energy per Nucleon",
          "Smaller (~0.85 MeV per nucleon)",
          "Much larger (~6–7 MeV per nucleon)"
        ],
        [
          "Control on Earth",
          "Controllable inside fission nuclear reactors",
          "Thermonuclear (~10⁷ K); difficult to sustain/control"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "r0 = 0.8 fm minimum",
      "Charge independent",
      "Fusion > Fission energy per nucleon"
    ],
    "termsGlossary": [
      {
        "symbol": "r_0",
        "term": "Equilibrium Separation",
        "definition": "Nucleon spacing $\\approx 0.8\\text{ fm}$ where potential energy $V(r)$ is minimum"
      }
    ]
  },
  "phy-sub-14-1": {
    "theory": [
      "Solids are classified by forbidden energy gap $E_g$ between Valence Band and Conduction Band: Metals/Conductors ($E_g = 0$ overlap), Semiconductors ($E_g < 3\\text{ eV}$, Si $1.1\\text{ eV}$, Ge $0.7\\text{ eV}$), and Insulators ($E_g > 3\\text{ eV}$, Diamond $\\sim 5.4\\text{ eV}$)."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Energy Band Classification & Junction",
      "examDrawingGuide": [
        "1. Draw Conduction Band, Valence Band, and Forbidden Gap E_g clearly for Conductor, Insulator, and Semiconductor."
      ]
    },
    "comparisonTable": {
      "title": "Conductor vs Insulator vs Semiconductor (MLL Energy Band Table)",
      "headers": [
        "Characteristic",
        "Conductor (Cu, Al)",
        "Insulator (Diamond, Glass)",
        "Semiconductor (Si, Ge)"
      ],
      "rows": [
        [
          "Forbidden Gap (E_g)",
          "E_g = 0 eV (Bands overlap)",
          "E_g > 3 eV (e.g., Diamond 5.4 eV)",
          "0 < E_g < 3 eV (Si 1.1 eV, Ge 0.7 eV)"
        ],
        [
          "Effect of Temperature",
          "Resistance INCREASES with T",
          "Extremely high resistance; slight fall",
          "Resistance DECREASES rapidly as T ↑ (NTC)"
        ],
        [
          "Carriers at Room Temp",
          "Abundant free electrons (~10²⁹ m⁻³)",
          "Practically zero free carriers",
          "Thermally generated electrons & holes (n_e = n_h = n_i)"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "Si Eg = 1.1 eV, Ge Eg = 0.7 eV",
      "NTC in Semiconductors",
      "Zero current in full valence band"
    ],
    "termsGlossary": [
      {
        "symbol": "E_g",
        "term": "Forbidden Energy Gap",
        "definition": "Minimum energy separating top of valence band from bottom of conduction band"
      }
    ]
  },
  "phy-sub-14-2": {
    "theory": [
      "Intrinsic semiconductors satisfy $n_e = n_h = n_i$. Doping with pentavalent donors (P, As, Sb) produces $n$-type ($n_e \\gg n_h$, donor level just below CB); doping with trivalent acceptors (B, Al, In) produces $p$-type ($n_h \\gg n_e$, acceptor level just above VB).",
      "Crucial: Both $n$-type and $p$-type semiconductors remain **strictly electrically neutral** overall, and obey the mass-action law $n_e \\cdot n_h = n_i^2$."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "n-type & p-type Semiconductor Physics",
      "examDrawingGuide": [
        "1. Label donor energy level slightly (~0.01–0.05 eV) below Conduction Band and acceptor level just above Valence Band."
      ]
    },
    "comparisonTable": {
      "title": "n-type vs p-type Semiconductors (MLL Reference Table)",
      "headers": [
        "Property",
        "n-type Semiconductor",
        "p-type Semiconductor"
      ],
      "rows": [
        [
          "Dopant Valency & Examples",
          "Pentavalent Donor (P, As, Sb, Bi)",
          "Trivalent Acceptor (B, Al, In, Ga)"
        ],
        [
          "Majority / Minority Carriers",
          "Electrons (Majority) / Holes (Minority)",
          "Holes (Majority) / Electrons (Minority)"
        ],
        [
          "Extra Energy Level",
          "Donor level E_D just below E_C",
          "Acceptor level E_A just above E_V"
        ],
        [
          "Net Electrical Charge",
          "Electrically Neutral (zero net charge)",
          "Electrically Neutral (zero net charge)"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "Mass-action law ne nh = ni^2",
      "Both are electrically neutral",
      "Donor & Acceptor levels"
    ],
    "termsGlossary": [
      {
        "symbol": "n_i",
        "term": "Intrinsic Carrier Concentration",
        "definition": "Equal density of electrons and holes in pure semiconductor at thermal equilibrium"
      }
    ]
  },
  "phy-sub-14-3": {
    "theory": [
      "Formation of a $p–n$ junction involves two processes: majority carrier **diffusion** across the junction (leaving behind immobile ionized acceptor $-$ and donor $+$ cores) and minority carrier **drift** under the resulting internal electric field.",
      "Forward bias ($p\\to +, n\\to -$) shrinks the depletion barrier and passes mA current beyond knee voltage ($0.7\\text{ V}$ Si, $0.3\\text{ V}$ Ge); Reverse bias ($p\\to -, n\\to +$) widens depletion barrier, passing only $\\mu$A drift current."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Depletion Layer, Forward & Reverse Bias V-I Curves",
      "examDrawingGuide": [
        "1. Label forward current in mA (above 0.7 V knee for Si) and reverse current in μA up to breakdown."
      ]
    },
    "keyPointsAndKeywords": [
      "Diffusion vs Drift",
      "Forward bias lowers barrier",
      "Si knee voltage 0.7 V"
    ],
    "termsGlossary": [
      {
        "symbol": "V_B",
        "term": "Barrier Potential",
        "definition": "Built-in potential opposition (~0.7 V Si, ~0.3 V Ge) across depletion layer"
      }
    ]
  },
  "phy-sub-14-4": {
    "theory": [
      "A Half-Wave Rectifier uses one diode ($f_{\\text{out}} = f_{\\text{in}} = 50\\text{ Hz}$); a Centre-Tap Full-Wave Rectifier uses two diodes conducting alternately on opposite AC half-cycles ($f_{\\text{out}} = 2f_{\\text{in}} = 100\\text{ Hz}$).",
      "Connecting a parallel capacitor $C$ across the load filters pulsating DC by charging quickly to peak voltage and discharging slowly through $R_L$ (large time constant $RC$)."
    ],
    "derivations": [],
    "diagram": {
      "hasDiagram": true,
      "diagramId": "pn-junction-rectifier",
      "title": "Centre-Tap Full-Wave Rectifier & Output Waveforms",
      "examDrawingGuide": [
        "1. Draw centre-tap transformer, diodes D1 & D2, common load R_L, plus input sinusoidal and unidirectional output waveforms."
      ]
    },
    "comparisonTable": {
      "title": "Half-Wave vs Full-Wave Rectifier (MLL Reference)",
      "headers": [
        "Feature",
        "Half-Wave Rectifier (1 Diode)",
        "Full-Wave Rectifier (2 Diodes + Centre Tap)"
      ],
      "rows": [
        [
          "Conduction Half-Cycles",
          "Conducts only during positive half-cycle",
          "D1 on +ve half, D2 on −ve half (both rectified)"
        ],
        [
          "Fundamental Output Frequency",
          "f_out = f_in (50 Hz)",
          "f_out = 2 f_in (100 Hz)"
        ],
        [
          "Capacitor Filter Role",
          "Parallel C across R_L smooths pulsating ripples via large RC time constant",
          "Same ripple-filtering principle with smaller capacitor needed"
        ]
      ]
    },
    "keyPointsAndKeywords": [
      "FWR f_out = 2 f_in",
      "Capacitor parallel across R_L",
      "Centre-tap transformer"
    ],
    "termsGlossary": [
      {
        "symbol": "f_{\\text{out}}",
        "term": "Ripple Frequency",
        "definition": "Output pulsating DC frequency ($50\\text{ Hz}$ for HWR, $100\\text{ Hz}$ for FWR)"
      }
    ]
  }
};

export function getPhysicsSectionEnrichment(subtopicId) {
  return PHYSICS_SECTION_ENRICHMENTS[subtopicId] || null;
}
