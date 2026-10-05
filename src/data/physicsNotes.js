// Full Granular NCERT Class 12 Physics High-Yield Notes
// Enriched with Step-by-Step Textbook Derivations & Handwritten Exam Priority Markers

export const PHYSICS_CHAPTERS = [
  {
    "id": "phy-ch-1",
    "number": 1,
    "title": "Electric Charges and Fields",
    "tag": "Electrostatics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-1-1",
        "title": "1.1 Coulomb's Law & Vector Law",
        "sections": [
          {
            "id": "phy-sec-1-1",
            "title": "Coulomb's Law & Vector Formulation",
            "explanation": "The electrostatic force between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them, acting along the straight line joining them (F = kq₁q₂/r²). The vector form, F₁₂ = kq₁q₂/r³ · r₁₂, adds direction — essential when multiple charges act on one point and their forces must be added as vectors, not just magnitudes. The force is repulsive between like charges and attractive between unlike charges.",
            "questionFraming": "Numerical — 'Two charges of given magnitude are placed at a given separation; find the force between them.'\nConceptual — 'State Coulomb's law and express it in vector form.'",
            "textbookRef": "Coulomb's law states that the force of attraction or repulsion between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them, and is directed along the line joining the two charges. In SI units, F = (1/4πε₀)·(q₁q₂/r²), where 1/4πε₀ = k ≈ 9 × 10⁹ N·m²/C². The vector form, F₂₁ = k(q₁q₂/r²)r̂₂₁, makes clear that the force is repulsive when q₁q₂ is positive and attractive when it is negative, and that Coulomb's law obeys Newton's third law — the forces the two charges exert on each other are equal and opposite.",
            "keyFormulas": [
              "F = (1 / 4πε₀) · (q₁q₂ / r²)",
              "F₁₂ = (kq₁q₂ / r³) · r₁₂ = −F₂₁",
              "k = 1 / (4πε₀) ≈ 9 × 10⁹ N·m²/C²"
            ],
            "derivations": "1. Scalar Formulation:\nBy Coulomb's law, the electrostatic force between two stationary point charges $q_1$ and $q_2$ separated by distance $r$ in vacuum is:\n$$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$$\n\n2. Vector Formulation:\nLet $\\vec{r}_1$ and $\\vec{r}_2$ be position vectors of charges $q_1$ and $q_2$. Displacement vector from $q_2$ to $q_1$ is $\\vec{r}_{12} = \\vec{r}_1 - \\vec{r}_2$, with magnitude $r_{12} = |\\vec{r}_{12}|$ and unit vector $\\hat{r}_{12} = \\frac{\\vec{r}_{12}}{r_{12}}$.\nThe force $\\vec{F}_{12}$ exerted on charge $q_1$ by charge $q_2$ is:\n$$\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r_{12}^2} \\hat{r}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r_{12}^3} \\vec{r}_{12}$$\n\n3. Newton's Third Law Verification:\nSimilarly, the force on charge $q_2$ due to charge $q_1$ is:\n$$\\vec{F}_{21} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r_{21}^2} \\hat{r}_{21} = -\\vec{F}_{12}$$\nHence, Coulomb forces form an action-reaction pair obeying Newton's Third Law of Motion."
          }
        ]
      },
      {
        "id": "phy-sub-1-2",
        "title": "1.2 Electric Field Intensity",
        "sections": [
          {
            "id": "phy-sec-1-2",
            "title": "Electric Field & Field Intensity",
            "explanation": "The electric field at a point is defined as the force experienced per unit positive test charge placed at that point (E = F/q₀), without the test charge disturbing the source charge's distribution. It is a vector quantity that exists at every point in space around a charge, whether or not a test charge is actually present there.",
            "questionFraming": "Conceptual — 'Define electric field intensity. Why must the test charge be vanishingly small?'",
            "textbookRef": "The electric field at a point in space is defined by placing a small positive 'test charge' q₀ at that point and measuring the force F it experiences; the field is E = F/q₀. The test charge must be small enough that it does not disturb the original charge configuration producing the field. The electric field is a vector field — it has a magnitude and direction at every point in space, whether or not a test charge is actually present, and its SI unit is newton per coulomb (N/C), equivalent to volt per metre (V/m).",
            "keyFormulas": [
              "E = lim(q₀→0) F / q₀",
              "F = qE  (SI unit: N/C or V/m)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-1-3",
        "title": "1.3 Field Due to a Point Charge",
        "sections": [
          {
            "id": "phy-sec-1-3",
            "title": "Field Due to a Point Charge",
            "explanation": "Applying the field-intensity definition to a single source charge gives E = kq/r², directed radially outward from a positive charge and radially inward toward a negative charge. This is the building block for finding the field due to any more complex charge distribution.",
            "questionFraming": "Numerical — 'Calculate the electric field at a given distance from a point charge.'",
            "textbookRef": "By the principle of superposition, the field due to a group of point charges at any point is the vector sum of the fields each charge would individually produce there. For a single point charge q, this reduces to E = kq/r², directed away from q if it is positive, and toward q if it is negative. The field concept lets us describe electrical interaction without needing to know in advance what other charge will feel the force — the field exists independently as a property of space set up by the source charge(s).",
            "keyFormulas": [
              "E = (1 / 4πε₀) · (q / r²)",
              "E ∝ 1 / r²"
            ],
            "derivations": "1. Setup: Consider an isolated point charge $+q$ at origin $O$. Let $P$ be a point at radial distance $r$. Place a vanishing test charge $q_0$ at $P$.\n\n2. Force on Test Charge: By Coulomb's law:\n$$\\vec{F} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q q_0}{r^2} \\hat{r}$$\n\n3. Electric Field Intensity: By definition, field is force per unit test charge:\n$$\\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{r}$$\nMagnitude decays with the inverse square of distance: $E \\propto 1/r^2$."
          }
        ]
      },
      {
        "id": "phy-sub-1-4",
        "title": "1.4 Properties of Electric Field Lines",
        "sections": [
          {
            "id": "phy-sec-1-4",
            "title": "Properties of Electric Field Lines",
            "explanation": "Field lines are imaginary lines whose tangent at any point gives the direction of the field there. They originate on positive charges (or at infinity) and terminate on negative charges (or at infinity); they never intersect, because a single point cannot have two different field directions; and their density (closeness) represents the field's strength.",
            "questionFraming": "Conceptual — 'Why do two electric field lines never cross each other? List any two other properties of field lines.'",
            "textbookRef": "Electric field lines are a way of visualising the electric field: a continuous curve is drawn such that the tangent at each point gives the direction of the field there. Field lines start on positive charges and end on negative charges (or run off to infinity for an isolated charge); the relative closeness of the lines represents the relative strength of the field; and two field lines can never cross, because if they did, the field at the crossing point would have two directions simultaneously, which is impossible for a single-valued field.",
            "keyFormulas": [
              "Field line tangent = direction of E",
              "Line density ∝ |E|"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Properties of electric field lines (Starred in revision notes)"
      },
      {
        "id": "phy-sub-1-5",
        "title": "1.5 Electric Dipole & Dipole Moment",
        "sections": [
          {
            "id": "phy-sec-1-5",
            "title": "Electric Dipole & Dipole Moment",
            "explanation": "An electric dipole is a pair of equal and opposite point charges separated by a small distance 2a. Its dipole moment p = q(2a) is a vector pointing from the negative charge to the positive charge, with SI unit coulomb-metre (C·m). It characterizes the overall 'polarity' of the charge pair as seen from far away.",
            "questionFraming": "Conceptual — 'Define electric dipole moment and state its direction and SI unit.'",
            "textbookRef": "An electric dipole consists of a pair of equal and opposite point charges +q and −q separated by a small distance 2a. Its dipole moment is defined as p = q × 2a, a vector directed from the negative charge to the positive charge, with SI unit coulomb-metre (C·m). A dipole's field falls off faster with distance (as 1/r³) than that of a single point charge (1/r²), because the fields of the two opposite charges nearly cancel at large distances.",
            "keyFormulas": [
              "p = q · 2a  (direction: −q to +q)",
              "SI unit: C·m"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-1-6",
        "title": "1.6 Field on the Axial and Equatorial Lines of a Dipole",
        "sections": [
          {
            "id": "phy-sec-1-6",
            "title": "Field on the Axial and Equatorial Lines of a Dipole",
            "explanation": "For a point far from the dipole (r >> a), the field on the axial line (extended line through both charges) is E_axial ≈ 2kp/r³, while on the equatorial line (perpendicular bisector of the dipole) it is E_equatorial ≈ kp/r³, in the direction opposite to p. The axial field is exactly twice the equatorial field at the same distance — a frequently tested comparison.",
            "questionFraming": "Derivation — 'Derive expressions for the electric field at a point on the axial line and on the equatorial line of a dipole.'\nNumerical — 'Compare the field due to a dipole at equal distances on its axial and equatorial lines.'",
            "textbookRef": "For a point on the axial line at distance r from the dipole's centre (r >> a), the field is E = 2kp/r³, directed along p. For a point on the equatorial line at the same distance, the field is E = kp/r³, directed opposite to p. Thus, at equal distances, the axial field is twice the equatorial field, and both directions are along the dipole axis (though pointing oppositely relative to p).",
            "keyFormulas": [
              "E_axial ≈ 2kp / r³",
              "E_equatorial ≈ kp / r³",
              "E_axial = 2 · E_equatorial  (for r >> a)"
            ],
            "derivations": "Part 1: Field on the Axial Line (NODIA QB Page 83 Reference)\nConsider an electric dipole consisting of charges $-q$ and $+q$ separated by distance $2a$ and placed in vacuum. Let $P$ be a point on the axial line at distance $r$ from the centre $O$ of the dipole on the side of $+q$.\n\nElectric field at point $P$ due to charge $-q$ (at distance $r + a$):\n$$\\vec{E}_{-q} = -\\frac{q}{4\\pi\\varepsilon_0(r+a)^2}\\hat{p} \\quad (\\text{towards left})$$\nwhere $\\hat{p}$ is a unit vector along the dipole axis from $-q$ to $+q$.\n\nElectric field due to charge $+q$ (at distance $r - a$):\n$$\\vec{E}_{+q} = \\frac{q}{4\\pi\\varepsilon_0(r-a)^2}\\hat{p} \\quad (\\text{towards right})$$\n\nHence, the resultant electric field at point $P$ is:\n$$\\vec{E}_{\\text{axial}} = \\vec{E}_{+q} + \\vec{E}_{-q} = \\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{(r-a)^2} - \\frac{1}{(r+a)^2}\\right]\\hat{p}$$\n$$= \\frac{q}{4\\pi\\varepsilon_0} \\frac{4ar}{(r^2 - a^2)^2}\\hat{p} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2(q \\cdot 2a)r}{(r^2 - a^2)^2}\\hat{p}$$\n\nHere, $p = q(2a) = \\text{dipole moment}$. For short dipole ($r \\gg a$), $a^2$ can be neglected compared to $r^2$:\n$$\\vec{E}_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2\\vec{p}}{r^3}$$\n\nPart 2: Field on the Equatorial Line\nConsider point $Q$ on the equatorial line at distance $r$ from center $O$. Distance to each charge is $\\sqrt{r^2 + a^2}$. Normal components $E\\sin\\theta$ cancel out, and parallel components $E\\cos\\theta$ add opposite to $\\hat{p}$:\n$$\\vec{E}_{\\text{eq}} = -2 E_{+q} \\cos\\theta \\, \\hat{p} = -2 \\left(\\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2+a^2}\\right)\\left(\\frac{a}{\\sqrt{r^2+a^2}}\\right)\\hat{p} = -\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}}{(r^2+a^2)^{3/2}}$$\nFor short dipole ($r \\gg a$):\n$$\\vec{E}_{\\text{eq}} = -\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}}{r^3} \\quad \\implies \\quad E_{\\text{axial}} = 2 E_{\\text{eq}}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Electric field on axial & equatorial line of dipole (Starred in revision notes)"
      },
      {
        "id": "phy-sub-1-7",
        "title": "1.7 Torque on a Dipole in a Uniform Field",
        "sections": [
          {
            "id": "phy-sec-1-7",
            "title": "Torque on a Dipole in a Uniform Field",
            "explanation": "When a dipole is placed in a uniform external electric field, the two equal and opposite forces on its charges form a couple. This couple's torque, τ = p × E (magnitude τ = pE sinθ), tends to align the dipole moment along the field direction and is zero only when p is parallel or antiparallel to E.",
            "questionFraming": "Derivation — 'Derive the expression for the torque experienced by an electric dipole placed in a uniform external electric field.'",
            "textbookRef": "When a dipole of moment p is placed in a uniform field E, the net force on it is zero (since the two forces on +q and −q are equal and opposite), but the two forces do not act along the same line, so they constitute a couple. This couple exerts a torque τ = p × E, with magnitude τ = pE sinθ, where θ is the angle between p and E. The torque tends to rotate the dipole so that p aligns with E, at which point the torque becomes zero (a stable equilibrium).",
            "keyFormulas": [
              "τ = p × E = pE sinθ",
              "U = −p · E = −pE cosθ",
              "Stable equilibrium: θ = 0°, Unstable: θ = 180°"
            ],
            "derivations": "1. Torque on Dipole in Uniform Field:\nForces $+q\\vec{E}$ and $-q\\vec{E}$ on charges form a couple with perpendicular lever arm $d_\\perp = 2a\\sin\\theta$.\n$$\\tau = (qE)(2a\\sin\\theta) = (q \\cdot 2a)E\\sin\\theta = pE\\sin\\theta \\implies \\vec{\\tau} = \\vec{p} \\times \\vec{E}$$\n\n2. Potential Energy Derivation:\nWork done in rotating dipole from $\\theta_1$ to $\\theta_2$:\n$$W = \\int_{\\theta_1}^{\\theta_2} pE\\sin\\theta \\, d\\theta = -pE[\\cos\\theta_2 - \\cos\\theta_1]$$\nTaking reference $\\theta_1 = 90^\\circ$ where $U(90^\\circ) = 0$:\n$$U(\\theta) = -pE\\cos\\theta = -\\vec{p} \\cdot \\vec{E}$$\nStable equilibrium at $\\theta = 0^\\circ$ ($U_{\\text{min}} = -pE$); Unstable equilibrium at $\\theta = 180^\\circ$ ($U_{\\text{max}} = +pE$).",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Torque on electric dipole in uniform field (Starred in revision notes)"
      },
      {
        "id": "phy-sub-1-8",
        "title": "1.8 Electric Flux",
        "sections": [
          {
            "id": "phy-sec-1-8",
            "title": "Electric Flux Definition & SI Unit",
            "explanation": "Electric flux through a surface measures the total number of field lines passing through it, defined as Φ = ∮E·dA, the surface integral of the field over that area. It depends on the field strength, the area, and the angle between the field and the area's normal.",
            "questionFraming": "Conceptual — 'Define electric flux and give its SI unit.'",
            "textbookRef": "Electric flux through a small area element dA is defined as dΦ = E·dA = E dA cosθ, where θ is the angle between the field and the area's outward normal. The total flux through an entire surface is the sum (integral) of this quantity over the whole surface: Φ = ∮E·dA. Flux is a scalar quantity and its SI unit is N·m²/C or V·m.",
            "keyFormulas": [
              "Φ = ∮ E · dA = E A cosθ",
              "SI unit: N·m²/C or V·m"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-1-9",
        "title": "1.9 Gauss's Law",
        "sections": [
          {
            "id": "phy-sec-1-9",
            "title": "Gauss's Theorem & Significance",
            "explanation": "Gauss's law states that the total electric flux through any closed surface equals the net charge enclosed divided by ε₀ (Φ = q_enclosed/ε₀). It holds for any closed surface and any charge distribution, and offers a far simpler route to the field than direct integration of Coulomb's law whenever the charge distribution has enough symmetry to choose a convenient Gaussian surface.",
            "questionFraming": "Conceptual — 'State Gauss's law and explain the significance of the term q_enclosed.'",
            "textbookRef": "Gauss's law relates the flux through any closed surface (a 'Gaussian surface') to the total charge enclosed by it: Φ = q_enclosed/ε₀. It is true for a closed surface of any shape, and for any distribution of charge inside it — but it becomes especially useful for finding the field itself when the charge distribution has enough symmetry (spherical, cylindrical, or planar) to allow a Gaussian surface on which E is constant in magnitude and always parallel or perpendicular to dA.",
            "keyFormulas": [
              "Φ = ∮ E · dA = q_enclosed / ε₀"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-1-10",
        "title": "1.10 Deducing Coulomb's Law from Gauss's Theorem",
        "sections": [
          {
            "id": "phy-sec-1-10",
            "title": "Deducing Coulomb's Law from Gauss's Theorem",
            "explanation": "Choosing a spherical Gaussian surface of radius r centred on a point charge q, symmetry makes E constant in magnitude and everywhere perpendicular to the surface, so the flux integral reduces to E(4πr²) = q/ε₀, giving E = q/4πε₀r² — exactly Coulomb's law's field expression. This shows Gauss's law is a more general statement that contains Coulomb's law as a special case.",
            "questionFraming": "Derivation — 'Starting from Gauss's theorem, deduce Coulomb's law for the field due to a point charge.'",
            "textbookRef": "Sphere of radius r around q: ∮ E·dA = E(4πr²) = q/ε₀ ⟹ E = q/(4πε₀r²). Since the electrostatic force on a test charge q₀ is F = q₀E, substituting E yields F = (1/4πε₀)·(qq₀/r²), which is Coulomb's Law.",
            "keyFormulas": [
              "∮ E · dA = E · 4πr² = q / ε₀",
              "E = kq / r² ⟹ F = kqq₀ / r²"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-1-11",
        "title": "1.11 Applications of Gauss's Law",
        "sections": [
          {
            "id": "phy-sec-1-11",
            "title": "Applications of Gauss's Law (Line, Sheet, Shell)",
            "explanation": "Gauss's law is applied with a symmetric Gaussian surface chosen to match the charge distribution's symmetry: a cylindrical surface for an infinitely long charged wire (E = λ/2πε₀r), a 'pillbox' surface for an infinite charged plane sheet (E = σ/2ε₀), and a spherical surface for a uniformly charged spherical shell (E = kq/r² outside, E = σ/ε₀ on the surface, and E = 0 inside).",
            "questionFraming": "Derivation — 'Using Gauss's law, derive the electric field due to an infinitely long straight charged wire / an infinite plane sheet of charge / a uniformly charged thin spherical shell (outside, on the surface, and inside).'",
            "textbookRef": "For an infinitely long, uniformly charged straight wire with linear charge density λ, a cylindrical Gaussian surface coaxial with the wire gives E = λ/(2πε₀r). For an infinite plane sheet with surface charge density σ, a 'pillbox' Gaussian surface straddling the sheet gives a field of uniform magnitude E = σ/(2ε₀) on either side, independent of distance from the sheet. For a uniformly charged thin spherical shell of total charge q and radius R, a spherical Gaussian surface gives E = kq/r² for points outside the shell (r > R), jumps to maximum value E = σ/ε₀ = kq/R² on the surface of the shell (r = R), and drops to E = 0 for points inside the shell (r < R), since no charge is enclosed.",
            "keyFormulas": [
              "Line charge: E = λ / (2πε₀r)",
              "Infinite plane sheet: E = σ / (2ε₀)",
              "Spherical shell outside (r > R): E = kq / r² = (σR²) / (ε₀r²)",
              "Spherical shell on surface (r = R): E_max = σ / ε₀ = kq / R²",
              "Spherical shell inside (r < R): E = 0"
            ],
            "derivations": "Application 1: Infinitely Long Charged Straight Wire\nEnclose wire of linear charge density $\\lambda$ by a coaxial cylindrical Gaussian surface of radius $r$ and length $l$. End flat caps have zero flux ($\\vec{E} \\perp d\\vec{A}$). On curved mantle, $\\vec{E} \\parallel d\\vec{A}$:\n$$\\oint \\vec{E} \\cdot d\\vec{A} = E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$$\n\nApplication 2: Infinite Uniformly Charged Plane Sheet\nConstruct cylindrical pillbox of cross-sectional area $A$ piercing sheet of surface density $\\sigma$. Curved wall has zero flux. Both end-caps contribute $EA + EA = 2EA$:\n$$2EA = \\frac{\\sigma A}{\\varepsilon_0} \\implies E = \\frac{\\sigma}{2\\varepsilon_0} \\quad (\\text{independent of } r)$$\n\nApplication 3: Thin Uniformly Charged Spherical Shell of Radius R\nCase 1 — Outside the Shell ($r > R$): Gaussian sphere of radius $r > R$ concentric with shell encloses total charge $q = 4\\pi R^2 \\sigma$. Flux $E(4\\pi r^2) = q/\\varepsilon_0 \\implies E_{\\text{out}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2} = \\frac{\\sigma R^2}{\\varepsilon_0 r^2}$.\nCase 2 — On the Surface of the Shell ($r = R$): Field point lies directly on the shell surface ($r = R$), enclosing entire charge $q = 4\\pi R^2 \\sigma$. Flux $E(4\\pi R^2) = q/\\varepsilon_0 \\implies E_{\\text{surface}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{R^2} = \\frac{\\sigma}{\\varepsilon_0}$ (Maximum field intensity).\nCase 3 — Inside the Shell ($r < R$): Concentric Gaussian sphere of radius $r < R$ encloses no charge ($q_{\\text{enc}} = 0$). Flux $E(4\\pi r^2) = 0 \\implies E_{\\text{in}} = 0$ (Identically zero field everywhere inside).",
            "isImportant": true,
            "examTag": "Important 5M Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Derivation",
        "importantReason": "Applications of Gauss's Law: Wire, Plane Sheet, Shell (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-2",
    "number": 2,
    "title": "Electrostatic Potential and Capacitance",
    "tag": "Electrostatics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-2-1",
        "title": "2.1 Electric Potential & Potential Difference",
        "sections": [
          {
            "id": "phy-sec-2-1",
            "title": "Electric Potential & Potential Difference",
            "explanation": "Electric potential at a point is the work done per unit positive charge in bringing it from infinity to that point without acceleration (V = W/q₀). Potential difference between two points is the work needed to move a unit charge from one point to the other, V_AB = V_A − V_B = W_AB/q₀. Unlike field (a vector), potential is a scalar, which makes it much easier to add contributions from multiple charges.",
            "questionFraming": "Conceptual — 'Define electric potential and potential difference. Why is potential a scalar quantity while field is a vector?'",
            "textbookRef": "The electrostatic potential at a point is defined as the work done in bringing a unit positive charge from infinity to that point, against the electric field, without any acceleration (i.e., quasi-statically). Mathematically, V = W/q₀, and for a point charge q, V = kq/r. Potential is a scalar, so unlike the field, contributions from multiple charges add up as ordinary numbers (with sign), which greatly simplifies calculations for complex charge arrangements.",
            "keyFormulas": [
              "V = W / q₀ = kq / r",
              "V_AB = V_A − V_B = W_AB / q₀"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-2-2",
        "title": "2.2 Potential Due to a Point Charge and a Dipole",
        "sections": [
          {
            "id": "phy-sec-2-2",
            "title": "Potential Due to Point Charge & Dipole",
            "explanation": "For a single point charge, V = kq/r. For a dipole, the potential on the axial line is V ≈ kp/r² (for r >> a), while on the equatorial line the potential is exactly zero everywhere, because the equal and opposite contributions of +q and −q are equidistant from any equatorial point and cancel.",
            "questionFraming": "Conceptual — 'Show that the electric potential due to a dipole at any point on its equatorial line is zero.'",
            "textbookRef": "For a single point charge, potential falls off as 1/r. For a dipole, the potential at a point on the axial line at distance r (r >> a) is V = kp/r², while the potential at any point on the equatorial line is exactly zero, since the equatorial point is equidistant from +q and −q and their potentials (of opposite sign) cancel exactly. For a general system, the net potential at a point is simply the algebraic sum of the potentials due to each individual charge.",
            "keyFormulas": [
              "V_point = kq / r",
              "V_axial = kp / r²",
              "V_equatorial = 0"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Potential due to an electric dipole (Starred in revision notes)"
      },
      {
        "id": "phy-sub-2-3",
        "title": "2.3 Equipotential Surfaces",
        "sections": [
          {
            "id": "phy-sec-2-3",
            "title": "Equipotential Surfaces & Field Relation",
            "explanation": "An equipotential surface is one on which the potential has the same value at every point. No work is done moving a charge along such a surface, since potential difference is zero everywhere on it; consequently, the electric field is always perpendicular to an equipotential surface at every point (otherwise there would be a component of field, and hence work, along the surface).",
            "questionFraming": "Conceptual — 'What is an equipotential surface? Show that the electric field is always normal to it.'",
            "textbookRef": "A surface over which the potential has the same value at every point is called an equipotential surface. Since no potential difference exists between any two points on it, no work is done in moving a charge along it. It follows that the electric field must be perpendicular to an equipotential surface everywhere — if it had a component along the surface, that component would do work moving a charge along the surface, contradicting the definition. For a point charge, equipotential surfaces are concentric spheres; for a uniform field, they are planes perpendicular to the field.",
            "keyFormulas": [
              "W_AB = q(V_B − V_A) = 0",
              "E = −dV / dr"
            ],
            "derivations": "1. Equipotential Normal Field Proof:\nWork in displacing test charge $q_0$ by displacement $d\\vec{r}$ along equipotential surface ($dV = 0$) is:\n$$dW = -q_0 dV = q_0 (\\vec{E} \\cdot d\\vec{r}) = 0 \\implies E \\, dr \\cos\\theta = 0$$\nSince $E \\neq 0$ and $dr \\neq 0$, $\\cos\\theta = 0 \\implies \\theta = 90^\\circ$, proving $\\vec{E} \\perp \\text{Equipotential Surface}$.\n\n2. Potential Gradient Derivation:\nWork in moving unit positive charge distance $dr$ against field $\\vec{E}$ between surfaces of potential $V$ and $V - dV$:\n$$dW = -E \\, dr = dV \\implies E = -\\frac{dV}{dr}$$\nElectric field equals the negative gradient of potential, pointing toward decreasing potential.",
            "isImportant": true,
            "examTag": "Important Concept"
          }
        ],
        "isImportant": true,
        "examTag": "Important Concept",
        "importantReason": "Equipotential surfaces & potential gradient (Starred in revision notes)"
      },
      {
        "id": "phy-sub-2-4",
        "title": "2.4 Potential Energy of a Dipole in an External Field",
        "sections": [
          {
            "id": "phy-sec-2-4",
            "title": "Potential Energy of a Dipole in an External Field",
            "explanation": "The potential energy of a dipole in a uniform external field, measured relative to the perpendicular orientation (θ = 90°), is U = −pE cosθ = −p·E. This energy is minimum (most stable) when the dipole is aligned with the field and maximum (least stable) when anti-aligned.",
            "questionFraming": "Derivation — 'Derive the expression for the potential energy of an electric dipole placed in a uniform electric field.'",
            "textbookRef": "When an electric dipole is placed in a uniform external field E at an angle θ to it, the work done in rotating it from θ₁ to θ₂ against the restoring torque τ = pE sinθ gives the change in potential energy. Taking the reference (zero potential energy) at θ = 90°, the potential energy at any angle θ is U(θ) = −pE cosθ = −p·E. The energy is minimum (U = −pE) when the dipole is aligned with the field (stable equilibrium) and maximum (U = +pE) when anti-aligned (unstable equilibrium).",
            "keyFormulas": [
              "U = −p · E = −pE cosθ",
              "W(θ₁ → θ₂) = pE(cosθ₁ − cosθ₂)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-2-5",
        "title": "2.5 Dielectrics — Polar and Non-Polar",
        "sections": [
          {
            "id": "phy-sec-2-5",
            "title": "Dielectrics (Polar and Non-Polar)",
            "explanation": "Polar dielectrics (e.g. H₂O) consist of molecules that already possess a permanent dipole moment due to their asymmetric charge distribution, though these are randomly oriented in the absence of a field. Non-polar dielectrics (e.g. N₂) have molecules with no permanent dipole moment, but an external field induces one by displacing the positive and negative charge centres.",
            "questionFraming": "Conceptual/Distinction — 'Distinguish between polar and non-polar dielectrics, with one example each.'",
            "textbookRef": "A dielectric is an insulating material that, when placed in an external field, develops a net dipole moment. In polar dielectrics (molecules with a permanent dipole moment, e.g., H₂O, HCl), the field aligns the already-existing molecular dipoles. In non-polar dielectrics (e.g., N₂, O₂, benzene), the field induces a dipole moment by displacing the centres of positive and negative charge within each molecule. The dipole moment developed per unit volume of the dielectric is called the polarisation P, and for most dielectrics P is proportional to the applied field: P = χ_e ε₀ E, where χ_e is the electric susceptibility of the dielectric medium.",
            "keyFormulas": [
              "Polar: permanent dipoles (H₂O, HCl)",
              "Non-polar: induced dipoles (N₂, O₂)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-2-6",
        "title": "2.6 Polarization and Electric Susceptibility",
        "sections": [
          {
            "id": "phy-sec-2-6",
            "title": "Polarization & Electric Susceptibility",
            "explanation": "When a dielectric is placed in an external field, it develops a net dipole moment per unit volume called polarization, P = χ_e ε₀ E, where χ_e is the electric susceptibility of the medium. This induced polarization creates an internal field opposing the external one, which is why a dielectric between capacitor plates increases capacitance.",
            "questionFraming": "Conceptual — 'What is polarization? How does it explain the increase in capacitance when a dielectric is inserted between capacitor plates?'",
            "textbookRef": "P = χ_e ε₀ E; K = 1 + χ_e. Insertion of dielectric of constant K reduces electric field to E₀/K and potential to V₀/K, thereby increasing capacitance to C = KC₀.",
            "keyFormulas": [
              "P = χ_e ε₀ E",
              "C = K · C₀",
              "K = 1 + χ_e"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-2-7",
        "title": "2.7 Capacitance, Series and Parallel Combinations",
        "sections": [
          {
            "id": "phy-sec-2-7",
            "title": "Capacitance Combinations: Series & Parallel",
            "explanation": "Capacitance is the ability of a conductor system to store charge per unit potential difference, C = Q/V. When capacitors are connected in series, the charge on each is the same but potentials add, giving 1/C = 1/C₁ + 1/C₂ + …, which always makes the equivalent capacitance smaller than the smallest individual capacitance. In parallel, the potential across each is the same but charges add, giving C = C₁ + C₂ + …, always larger than the largest individual value.",
            "questionFraming": "Numerical — 'Find the equivalent capacitance of a given combination of capacitors in series and parallel, and the charge/potential across each.'",
            "textbookRef": "Capacitors in series carry the same charge Q, and the total potential difference is the sum of the individual potential differences, leading to 1/C_eq = 1/C₁ + 1/C₂ + … — the equivalent capacitance is always less than the smallest capacitance in the combination. Capacitors in parallel have the same potential difference across each, and the total charge is the sum of individual charges, leading to C_eq = C₁ + C₂ + … — the equivalent capacitance is always greater than the largest individual capacitance.",
            "keyFormulas": [
              "C = Q / V",
              "Series: 1/C_eq = 1/C₁ + 1/C₂ + ...",
              "Parallel: C_eq = C₁ + C₂ + ..."
            ],
            "derivations": "1. Parallel Plate Capacitor in Vacuum:\nPlates of area $A$ and separation $d$ carry charge $\\pm Q$. Electric field between plates: $E_0 = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{\\varepsilon_0 A}$. Potential difference: $V_0 = E_0 d = \\frac{Qd}{\\varepsilon_0 A}$. Capacitance:\n$$C_0 = \\frac{Q}{V_0} = \\frac{\\varepsilon_0 A}{d}$$\n\n2. Capacitor with Dielectric Slab of Thickness t (t < d):\nIn air gaps $(d-t)$, field is $E_0$. Inside dielectric of thickness $t$, field is reduced to $E = E_0 / K$. Total potential difference across plates:\n$$V = E_0(d-t) + E \\cdot t = E_0\\left[d - t\\left(1 - \\frac{1}{K}\\right)\\right] = \\frac{Q}{\\varepsilon_0 A}\\left[d - t\\left(1 - \\frac{1}{K}\\right)\\right]$$\n$$C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d - t\\left(1 - \\frac{1}{K}\\right)}$$\nWhen completely filled ($t = d$): $C = K C_0$.",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Capacitor & capacitance in series/parallel (Starred in revision notes)"
      },
      {
        "id": "phy-sub-2-8",
        "title": "2.8 Energy Stored in a Capacitor",
        "sections": [
          {
            "id": "phy-sec-2-8",
            "title": "Energy Stored in a Capacitor & Energy Density",
            "explanation": "Charging a capacitor requires doing work against the growing potential difference as charge accumulates; integrating this work over the entire charging process gives the stored energy U = ½CV² = ½QV = Q²/2C. This energy resides in the electric field between the plates.",
            "questionFraming": "Derivation/Numerical — 'Derive the expression for energy stored in a charged capacitor, and calculate the energy stored for given values of C and V.'",
            "textbookRef": "As a capacitor is charged, work must be done against the increasing potential difference to bring each additional bit of charge onto the plates. Summing (integrating) this work over the entire charging process from 0 to Q gives the total energy stored: U = Q²/(2C) = ½CV² = ½QV. This energy is stored in the electric field that exists in the region between the plates, and can be thought of as the 'energy density' of that field multiplied by the volume it occupies.",
            "keyFormulas": [
              "U = ½ CV² = Q² / (2C) = ½ QV",
              "Energy density: u = ½ ε₀E²"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Energy stored in a capacitor (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-3",
    "number": 3,
    "title": "Current Electricity",
    "tag": "Circuits",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-3-1",
        "title": "3.1 Electric Current and Current Density",
        "sections": [
          {
            "id": "phy-sec-3-1",
            "title": "Electric Current & Current Density",
            "explanation": "Electric current is the rate of flow of charge through a cross-section, I = Q/t (for steady current) or I = dQ/dt (instantaneous). Current density J = I/A describes how current is distributed over a conductor's cross-sectional area and, unlike current, is a vector, pointing in the direction of positive charge flow.",
            "questionFraming": "Conceptual — 'Define current density. How does it differ from current?'",
            "textbookRef": "Electric current through a conductor is defined as the rate of flow of electric charge across any cross-section: I = ΔQ/Δt for steady current, or I = dQ/dt for time-varying current. Its SI unit is the ampere (A). Current density J describes the current per unit cross-sectional area and, being a vector, points in the direction of conventional (positive charge) current flow: J = I/A.",
            "keyFormulas": [
              "I = dQ / dt",
              "J = I / A  (vector quantity)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-2",
        "title": "3.2 Ohm’s Law and Resistance",
        "sections": [
          {
            "id": "phy-sec-3-2",
            "title": "Ohm’s Law & Resistance Factors",
            "explanation": "Ohm's law states that the current through a conductor is directly proportional to the potential difference across it, provided physical conditions (like temperature) remain constant: V = IR. Resistance R = ρl/A depends on the conductor's resistivity (a material property), its length, and its cross-sectional area.",
            "questionFraming": "Numerical — 'Given the resistivity, length, and area of a wire, find its resistance.'\nConceptual — 'State Ohm's law and the factors on which the resistance of a conductor depends.'",
            "textbookRef": "Ohm's law states that, for a conductor kept at constant physical conditions (particularly temperature), the current flowing through it is directly proportional to the potential difference applied across its ends: V ∝ I, or V = IR, where the constant of proportionality R is called the resistance of the conductor. Resistance itself depends on the material (through its resistivity ρ), and on the conductor's dimensions, following R = ρl/A, where l is the length and A the cross-sectional area.",
            "keyFormulas": [
              "V = IR",
              "R = ρ · (l / A)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-3",
        "title": "3.3 Effect of Temperature on Resistance",
        "sections": [
          {
            "id": "phy-sec-3-3",
            "title": "Temperature Dependence of Resistance",
            "explanation": "For most conductors (metals), resistance increases with temperature, following R_t = R₀(1 + αΔT), where α is the temperature coefficient of resistance — because increased thermal vibration of the lattice ions increases the frequency of electron collisions.",
            "questionFraming": "Conceptual — 'How does the resistance of a metallic conductor vary with temperature, and why?'",
            "textbookRef": "For most metallic conductors, resistance increases (almost) linearly with temperature over a limited range, expressed as R_t = R₀[1 + α(T − T₀)], where α is the temperature coefficient of resistance. Physically, this arises because higher temperature causes greater thermal vibration of the lattice ions, increasing the frequency of collisions between the ions and the conduction electrons and thus reducing the average relaxation time.",
            "keyFormulas": [
              "R_t = R₀(1 + αΔT)",
              "α = (R_t − R₀) / (R₀ · ΔT)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-4",
        "title": "3.4 Limitations of Ohm’s Law",
        "sections": [
          {
            "id": "phy-sec-3-4",
            "title": "Non-Ohmic Devices & Limitations",
            "explanation": "Ohm's law fails for non-ohmic devices such as diodes, transistors, and thermistors, whose V–I graph is non-linear — the 'resistance' of such devices changes with the applied voltage or current itself, or with other factors like temperature, rather than remaining a fixed constant.",
            "questionFraming": "Conceptual — 'State any two limitations of Ohm's law, with examples of devices that do not obey it.'",
            "textbookRef": "Not all conducting devices obey Ohm's law. In 'non-ohmic' devices such as junction diodes, the V–I relationship is non-linear — current does not increase proportionally with voltage, and may even depend on the direction of the applied voltage. In others, such as thermistors, resistance itself depends strongly on temperature, which in turn depends on the current flowing, so R cannot be treated as a fixed constant independent of V and I.",
            "keyFormulas": [
              "V-I non-linear: Diodes, Transistors, GaAs, Thermistors"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-5",
        "title": "3.5 Drift Velocity and Mobility",
        "sections": [
          {
            "id": "phy-sec-3-5",
            "title": "Drift Velocity, Current Relation & Mobility",
            "explanation": "In the absence of a field, free electrons in a conductor move randomly with no net displacement. An applied field superimposes a small net drift velocity v_d on this random motion, in the direction opposite to the field (since electrons are negative). This drift velocity is directly linked to the macroscopic current by I = nAev_d, where n is the free-electron density. Mobility μ = v_d/E measures drift velocity acquired per unit field.",
            "questionFraming": "Derivation — 'Derive the relationship between drift velocity and current in a conductor.'\nConceptual — 'Define mobility of charge carriers.'",
            "textbookRef": "In a conductor with no applied field, free electrons move randomly in all directions with high thermal speeds but zero net displacement. When a field E is applied, each electron experiences a force −eE, giving it a small net drift velocity v_d superimposed on the random motion, directed opposite to E. This drift links directly to the observed macroscopic current, I = nAev_d, where n is the number density of free electrons. The average time between successive collisions is the relaxation time τ, and mobility is defined as μ = v_d/E = eτ/m, the drift velocity acquired per unit applied field.",
            "keyFormulas": [
              "v_d = eEτ / m",
              "I = nAev_d",
              "J = nev_d",
              "μ = v_d / E = eτ / m"
            ],
            "derivations": "1. Drift Velocity Expression:\nUnder electric field $\\vec{E} = V/l$, each electron experiences acceleration $\\vec{a} = -e\\vec{E}/m$. In relaxation time $\\tau$, average drift velocity acquired is:\n$$v_d = \\frac{eE}{m}\\tau = \\frac{e V}{m l}\\tau$$\n\n2. Current Relation:\nTotal mobile electrons in volume $Al$ is $N = nAl$. Total charge passing cross-section in time $\\Delta t = l/v_d$ is $\\Delta q = neAl$. Steady current is:\n$$I = \\frac{\\Delta q}{\\Delta t} = n e A v_d$$\n\n3. Deduce Ohm's Law:\nSubstituting $v_d$ into current:\n$$I = n e A \\left(\\frac{e V \\tau}{m l}\\right) = \\left(\\frac{n e^2 A \\tau}{m l}\\right) V \\implies V = \\left(\\frac{m}{n e^2 \\tau}\\frac{l}{A}\\right) I = R I$$\nwhere resistance $R = \\rho \\frac{l}{A}$ and resistivity is $\\rho = \\frac{m}{n e^2 \\tau}$.",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Drift velocity (1M), relation with current (I = neAv_d), mobility (Starred in revision notes)"
      },
      {
        "id": "phy-sub-3-6",
        "title": "3.6 Resistivity and its Temperature Dependence",
        "sections": [
          {
            "id": "phy-sec-3-6",
            "title": "Microscopic Resistivity & Temperature Trends",
            "explanation": "Resistivity, ρ = m/(ne²τ), depends on the electron density n and the relaxation time τ (average time between collisions) — both properties of the material, not its shape. In metals, resistivity increases with temperature (τ decreases due to more frequent collisions), whereas in semiconductors, resistivity decreases with temperature (n increases sharply as more charge carriers are thermally generated).",
            "questionFraming": "Distinction — 'How does resistivity vary with temperature for a metal compared to a semiconductor? Explain in terms of n and τ.'",
            "textbookRef": "Resistivity of a material is given by ρ = m/(ne²τ), showing that it depends on the free-electron density n and the relaxation time τ, both intrinsic properties of the material (unlike resistance, which also depends on the sample's dimensions). In metals, increasing temperature decreases τ (more frequent collisions), so ρ increases with temperature. In semiconductors, increasing temperature causes a much larger increase in n (more electrons are thermally excited across the band gap), which dominates over the decrease in τ, so ρ actually decreases with temperature.",
            "keyFormulas": [
              "ρ = m / (ne²τ)",
              "Metals: ρ increases as τ drops",
              "Semiconductors: ρ decreases as n rises exponentially"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-7",
        "title": "3.7 Electrical Energy and Power",
        "sections": [
          {
            "id": "phy-sec-3-7",
            "title": "Joule Heating, Power & Appliance Ratings",
            "explanation": "The electrical energy dissipated in a resistor equals the work done moving charge through a potential difference, and the rate of this dissipation is power: P = VI = I²R = V²/R. This is the basis for calculating heating effects and the rating of electrical appliances.",
            "questionFraming": "Numerical — 'Calculate the power consumed by an appliance of given resistance connected to a given supply voltage.'",
            "textbookRef": "The electrical energy consumed when a current I flows through a potential difference V for time t is W = VIt, and the rate of consumption of this energy — the power — is P = VI = I²R = V²/R (the latter two forms follow from substituting Ohm's law). This dissipated energy appears as heat in the resistor (Joule heating), which is the working principle behind electric heaters, bulbs, and fuses.",
            "keyFormulas": [
              "P = VI = I²R = V² / R",
              "H = I²Rt  (Joule's law of heating)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-3-8",
        "title": "3.8 Internal Resistance, Cells in Series and Parallel",
        "sections": [
          {
            "id": "phy-sec-3-8",
            "title": "Internal Resistance & Cell Combinations",
            "explanation": "A real cell has internal resistance r, so the terminal voltage delivered to an external circuit is less than its EMF by the amount lost across r: ε = I(R + r). Connecting cells in series adds their EMFs (and internal resistances), useful for boosting voltage; connecting identical cells in parallel keeps the EMF the same but reduces the effective internal resistance, useful for supplying larger currents.",
            "questionFraming": "Numerical — 'Cells of given EMF and internal resistance are connected in series/parallel; find the current through an external resistance.'",
            "textbookRef": "A cell's electromotive force (EMF) ε is the maximum potential difference it can provide when no current flows, while its terminal voltage under load is less than ε due to the voltage dropped across the cell's own internal resistance r: V = ε − Ir, or equivalently ε = I(R + r) for a cell driving current I through an external resistance R. Connecting n identical cells in series multiplies the net EMF by n (and net internal resistance by n); connecting them in parallel keeps the net EMF the same as a single cell but reduces the net internal resistance to r/n.",
            "keyFormulas": [
              "V = ε − Ir",
              "I = ε / (R + r)",
              "Series: ε_eq = nε, r_eq = nr",
              "Parallel: ε_eq = ε, r_eq = r/n"
            ],
            "derivations": "1. Internal Resistance Relation:\nIn a closed circuit with load $R$, current is $I = \\frac{\\varepsilon}{R+r}$. Terminal voltage across load is $V = IR = \\varepsilon - Ir$:\n$$Ir = \\varepsilon - V \\implies r = \\frac{\\varepsilon - V}{I} = \\frac{\\varepsilon - V}{V/R} = \\left(\\frac{\\varepsilon}{V} - 1\\right)R$$\n\n2. Maximum Power Transfer Proof:\nPower delivered to load is $P = I^2 R = \\frac{\\varepsilon^2 R}{(R+r)^2}$. Differentiating with respect to $R$:\n$$\\frac{dP}{dR} = \\varepsilon^2 \\frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = 0 \\implies (R+r) - 2R = 0 \\implies R = r$$\nMaximum power transfer occurs when $R = r$, with peak power $P_{\\text{max}} = \\frac{\\varepsilon^2}{4r}$."
          }
        ]
      },
      {
        "id": "phy-sub-3-9",
        "title": "3.9 Kirchhoff’s Laws and the Wheatstone Bridge",
        "sections": [
          {
            "id": "phy-sec-3-9",
            "title": "Kirchhoff's Rules & Wheatstone Bridge Balance",
            "explanation": "Kirchhoff's junction rule (ΣI_in = ΣI_out) is a statement of charge conservation at any junction; his loop rule (ΣV = 0 around any closed loop) is a statement of energy conservation. Together they solve circuits too complex for Ohm's law alone — such as the Wheatstone bridge, whose balanced condition (no current through the galvanometer) works out to P/Q = R/S.",
            "questionFraming": "Derivation — 'State Kirchhoff's laws and use them to derive the balanced condition of a Wheatstone bridge.'",
            "textbookRef": "Kirchhoff's junction rule states that the algebraic sum of currents meeting at any junction in a circuit is zero (charge conservation): ΣI_in = ΣI_out. Kirchhoff's loop rule states that the algebraic sum of potential differences (including EMFs and IR drops) around any closed loop in a circuit is zero (energy conservation): ΣV = 0. Applying both rules to a Wheatstone bridge circuit — four resistances P, Q, R, S arranged in a diamond with a galvanometer across one diagonal and a cell across the other — shows that the bridge is 'balanced' (no current flows through the galvanometer) when P/Q = R/S, which is widely used to measure an unknown resistance by comparison with three known ones.",
            "keyFormulas": [
              "Σ I = 0  (Charge Conservation)",
              "Σ ΔV = 0  (Energy Conservation)",
              "P / Q = R / S  (Wheatstone balance condition)"
            ],
            "derivations": "Derivation of Wheatstone Bridge Balanced Condition:\nApplying Kirchhoff's loop rule to mesh $ABDA$ (clockwise):\n$$-I_1 P - I_g G + I_2 R = 0 \\implies I_1 P + I_g G = I_2 R$$\nApplying Kirchhoff's loop rule to mesh $BCDB$ (clockwise):\n$$-(I_1 - I_g)Q + (I_2 + I_g)S + I_g G = 0$$\nUnder balanced condition, galvanometer deflection is zero ($I_g = 0$):\n$$I_1 P = I_2 R \\quad \\text{--- (1)}$$\n$$I_1 Q = I_2 S \\quad \\text{--- (2)}$$\nDividing (1) by (2):\n$$\\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S} \\implies \\frac{P}{Q} = \\frac{R}{S}$$",
            "isImportant": true,
            "examTag": "Important 5M Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Question",
        "importantReason": "Kirchhoff's laws & Wheatstone bridge (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-4",
    "number": 4,
    "title": "Moving Charges and Magnetism",
    "tag": "Magnetism",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-4-1",
        "title": "4.1 Biot–Savart Law",
        "sections": [
          {
            "id": "phy-sec-4-1",
            "title": "Biot–Savart Fundamental Law",
            "explanation": "The Biot–Savart law gives the magnetic field contribution dB produced by a small current element Idl at a point, dB = (μ₀/4π)·(Idl × r̂)/r². It is the magnetic analogue of Coulomb's law — the fundamental 'point-source' law from which the field of any current distribution can be built up by integration.",
            "questionFraming": "Conceptual — 'State the Biot–Savart law and identify the factors on which dB depends.'",
            "textbookRef": "The Biot–Savart law gives the magnetic field produced by a small current-carrying element. For a current element Idl, the field it produces at a point located at position vector r from the element is dB = (μ₀/4π)·I(dl × r̂)/r², where μ₀ is the permeability of free space. Unlike Coulomb's law, this 'point source' is not a true physical source on its own — an isolated current element cannot exist — but integrating it over a complete circuit gives the correct total field.",
            "keyFormulas": [
              "dB = (μ₀ / 4π) · (I dl sinθ / r²)",
              "μ₀ / 4π = 10⁻⁷ T·m/A"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-4-2",
        "title": "4.2 Magnetic Field Due to a Circular Current Loop",
        "sections": [
          {
            "id": "phy-sec-4-2",
            "title": "Field Due to a Circular Current Loop",
            "explanation": "Integrating the Biot–Savart law over a circular loop of radius R gives the field at the centre, B = μ₀I/2R, and on the axis at distance x from the centre, B = μ₀IR²/2(R² + x²)^(3/2) — the field is maximum at the centre and falls off with distance along the axis.",
            "questionFraming": "Derivation — 'Derive the expression for the magnetic field at the centre of a circular current-carrying loop.'",
            "textbookRef": "For a circular loop of radius R carrying current I, the field at the centre of the loop is B = μ₀I/2R, directed along the axis according to the right-hand rule. At a point on the axis at distance x from the centre, the field is B = μ₀IR²/[2(R² + x²)^(3/2)], which reduces to the centre-field formula when x = 0, and falls off rapidly as x increases.",
            "keyFormulas": [
              "B_centre = μ₀I / (2R)",
              "B_axis = μ₀IR² / [2(R² + x²)^(3/2)]"
            ],
            "derivations": "Magnetic Field on Axis of Circular Current Loop:\nConsider a circular loop of radius $R$ carrying current $I$. Take an element $d\\vec{l}$ on the loop. Distance to axial point $P$ at distance $x$ from center is $r = \\sqrt{R^2 + x^2}$.\nBy Biot-Savart law, magnitude of $d\\vec{B}$ is:\n$$dB = \\frac{\\mu_0}{4\\pi}\\frac{I dl \\sin 90^\\circ}{r^2} = \\frac{\\mu_0}{4\\pi}\\frac{I dl}{R^2 + x^2}$$\nResolving $d\\vec{B}$: Perpendicular components $dB\\cos\\phi$ cancel out pairwise by diametric symmetry. Axial components $dB\\sin\\phi$ add up:\n$$B = \\oint dB \\sin\\phi = \\oint dB \\left(\\frac{R}{\\sqrt{R^2 + x^2}}\\right) = \\frac{\\mu_0 I R}{4\\pi (R^2 + x^2)^{3/2}} \\oint dl$$\nSince $\\oint dl = 2\\pi R$, for $N$ turns:\n$$B_{\\text{axis}} = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}$$\nAt the center ($x = 0$): $B_{\\text{center}} = \\frac{\\mu_0 N I}{2R}$.",
            "isImportant": true,
            "examTag": "Important 5M Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Derivation",
        "importantReason": "Magnetic field due to circular loop (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-3",
        "title": "4.3 Ampere’s Circuital Law and Its Applications",
        "sections": [
          {
            "id": "phy-sec-4-3",
            "title": "Ampere’s Circuital Law & Straight Wire",
            "explanation": "Ampere's law, ∮B·dl = μ₀I_enclosed, is the magnetic analogue of Gauss's law — it lets the field be found easily wherever enough symmetry exists to choose a convenient Amperian loop, such as around a straight wire (B = μ₀I/2πr) or inside a long solenoid (B = μ₀nI, uniform).",
            "questionFraming": "Derivation — 'State Ampere's circuital law and use it to derive the magnetic field inside a long current-carrying solenoid.'",
            "textbookRef": "Ampere's circuital law states that the line integral of the magnetic field around any closed loop equals μ₀ times the total current passing through the loop: ∮B·dl = μ₀I_enclosed. This is analogous to Gauss's law in electrostatics, and is most useful when symmetry allows a loop along which B is constant and either parallel or perpendicular to dl everywhere.",
            "keyFormulas": [
              "∮ B · dl = μ₀ I_enc",
              "Straight wire: B = μ₀I / (2πr)"
            ],
            "isImportant": true,
            "examTag": "Important Law & Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Law & Derivation",
        "importantReason": "Ampere circuital law: statement & applications (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-4",
        "title": "4.4 The Solenoid and Toroid",
        "sections": [
          {
            "id": "phy-sec-4-4",
            "title": "Field of Solenoid & Toroid",
            "explanation": "A solenoid is a tightly wound helical coil of wire; when current flows through it, the fields of individual turns add up inside to produce a strong, essentially uniform field along its axis, closely resembling the field of a bar magnet — making it the working basis of electromagnets.",
            "questionFraming": "Conceptual — 'What is a solenoid? Compare the magnetic field pattern of a solenoid with that of a bar magnet.'",
            "textbookRef": "A solenoid is a long, tightly wound helical coil; the individual loops' fields superpose inside the coil to produce a strong, nearly uniform field parallel to the axis, while largely cancelling outside — this field pattern closely resembles that of a bar magnet, with one end acting as a north pole and the other as a south pole. Inside: B = μ₀nI.",
            "keyFormulas": [
              "Solenoid: B = μ₀nI",
              "Toroid: B = μ₀nI (confined within ring)"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "The Solenoid: definition & field expression (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-5",
        "title": "4.5 Force on a Moving Charge in a Magnetic Field",
        "sections": [
          {
            "id": "phy-sec-4-5",
            "title": "Lorentz Magnetic Force",
            "explanation": "A charge q moving with velocity v in a field B experiences a force F = qv × B, with magnitude F = qvB sinθ. This force is always perpendicular to both v and B, so it changes the direction of motion but never the speed — meaning it does no work on the charge.",
            "questionFraming": "Conceptual — 'Show that the magnetic force on a moving charge does no work.'",
            "textbookRef": "A charge q moving with velocity v through a magnetic field B experiences a force F = qv × B, with magnitude F = qvB sinθ, θ being the angle between v and B. Because this force is always perpendicular to the velocity, it can change only the direction of motion, never the speed — hence the magnetic force does no work on the moving charge, and the particle's kinetic energy remains constant.",
            "keyFormulas": [
              "F = q(v × B) = qvB sinθ",
              "dW = F · ds = 0  (No work done)"
            ],
            "isImportant": true,
            "examTag": "Important Concept"
          }
        ],
        "isImportant": true,
        "examTag": "Important Concept",
        "importantReason": "Force on charged particle in uniform magnetic field (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-6",
        "title": "4.6 Motion of a Charged Particle in a Uniform Field",
        "sections": [
          {
            "id": "phy-sec-4-6",
            "title": "Circular Motion & Helical Path",
            "explanation": "Since the magnetic force is always perpendicular to velocity, a charged particle entering a uniform field perpendicular to it moves in a circle, with radius r = mv/qB and period T = 2πm/qB — notably independent of the particle's speed, which is the basis of the cyclotron's operation.",
            "questionFraming": "Derivation — 'Derive the expressions for the radius and time period of the circular path of a charged particle moving perpendicular to a uniform magnetic field.'",
            "textbookRef": "When a charged particle moves perpendicular to a uniform magnetic field, the magnetic force provides the centripetal force for circular motion: qvB = mv²/r, giving a radius r = mv/(qB). The time period of this circular motion, T = 2πm/(qB), depends only on the charge-to-mass ratio and the field strength — not on the speed of the particle.",
            "keyFormulas": [
              "r = mv / (qB)",
              "T = 2πm / (qB)",
              "Frequency: ν = qB / (2πm)"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Motion of charged particle in magnetic field (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-7",
        "title": "4.7 Force on a Current-Carrying Conductor",
        "sections": [
          {
            "id": "phy-sec-4-7",
            "title": "Force on Current Conductor in B-Field",
            "explanation": "Since current is the ordered flow of charge, a current-carrying wire in a magnetic field experiences a net force found by summing the force on all the individual moving charges: F = BIL sinθ, where θ is the angle between the wire and the field, maximal when the wire is perpendicular to B.",
            "questionFraming": "Numerical — 'Calculate the force on a current-carrying wire of given length placed in a magnetic field at a given angle.'",
            "textbookRef": "Since an electric current is a stream of moving charges, a current-carrying conductor placed in a magnetic field experiences a net force, obtained by summing the magnetic force on each moving charge: F = BIL sinθ, where L is the length of the conductor in the field and θ the angle between the conductor and the field. This force is maximum when the conductor is perpendicular to the field (θ = 90°) and zero when parallel to it.",
            "keyFormulas": [
              "F = I(L × B) = BIL sinθ",
              "Maximum at θ = 90°"
            ],
            "derivations": "Derivation of Force on Current Conductor (F = ILB sinθ):\nConsider a conductor of length $l$ and cross-section $A$ in uniform field $\\vec{B}$. Number of conduction electrons is $N = nAl$.\nLorentz force on a single drifting electron is $\\vec{f} = -e(\\vec{v}_d \\times \\vec{B})$. Total macroscopic force on the conductor:\n$$\\vec{F} = N\\vec{f} = (nAl)[-e(\\vec{v}_d \\times \\vec{B})] = -neAl(\\vec{v}_d \\times \\vec{B})$$\nBy current definition, macroscopic current vector along length is $I\\vec{l} = -neA\\vec{v}_d l$. Substituting gives:\n$$\\vec{F} = I(\\vec{l} \\times \\vec{B}) \\implies F = I l B \\sin\\theta$$\nMaximum at $\\theta = 90^\\circ$ ($F_{\\text{max}} = IlB$); Zero along field at $\\theta = 0^\\circ$ ($F = 0$).",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Force on current-carrying conductor in magnetic field (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-8",
        "title": "4.8 Force Between Two Parallel Current-Carrying Conductors",
        "sections": [
          {
            "id": "phy-sec-4-8",
            "title": "Parallel Conductors Force & Ampere Definition",
            "explanation": "Each current-carrying wire produces a magnetic field that exerts a force on the other; for two long parallel wires carrying currents I₁ and I₂ separated by distance d, the force per unit length is F/L = μ₀I₁I₂/2πd — attractive if the currents flow in the same direction, repulsive if opposite. This expression is used to define the SI unit of current, the ampere.",
            "questionFraming": "Derivation — 'Derive the expression for the force per unit length between two long parallel current-carrying conductors, and use it to define the ampere.'",
            "textbookRef": "Two long, straight, parallel conductors carrying currents I₁ and I₂, separated by a distance d, exert forces on each other: the field produced by one at the location of the other is B = μ₀I₁/(2πd), and the resulting force per unit length on the second wire is F/L = μ₀I₁I₂/(2πd). The force is attractive if the currents are in the same direction and repulsive if in opposite directions. This relation is used to formally define the ampere: it is that constant current which, if maintained in two straight parallel conductors of infinite length placed one metre apart in vacuum, would produce a force of 2 × 10⁻⁷ N per metre of length between them.",
            "keyFormulas": [
              "F / L = (μ₀I₁I₂) / (2πd)",
              "Like currents attract; unlike currents repel",
              "Definition of 1 Ampere: F/L = 2 × 10⁻⁷ N/m at d = 1 m"
            ],
            "derivations": "Derivation of Force Between Parallel Currents:\nTwo parallel infinite wires separated by distance $d$ carry currents $I_1$ and $I_2$. Field produced by wire 1 at wire 2 is:\n$$B_1 = \\frac{\\mu_0 I_1}{2\\pi d} \\quad (\\text{perpendicular to plane of wires by Right-Hand Thumb Rule})$$\nForce on section of length $L$ of wire 2 carrying current $I_2$ in field $B_1$ is:\n$$F = I_2 L B_1 \\sin 90^\\circ = I_2 L \\left(\\frac{\\mu_0 I_1}{2\\pi d}\\right) = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d}$$\nForce per unit length:\n$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$\nFor $I_1 = I_2 = 1\\text{ A}$ and $d = 1\\text{ m}$ in vacuum: $F/L = \\frac{4\\pi \\times 10^{-7} \\times 1 \\times 1}{2\\pi \\times 1} = 2 \\times 10^{-7}\\text{ N/m}$ (SI definition of 1 Ampere).",
            "isImportant": true,
            "examTag": "Important 3M Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important 3M Derivation",
        "importantReason": "Force between 2 long parallel current-carrying conductors & 1 Ampere definition (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-9",
        "title": "4.9 Torque on a Current Loop in a Magnetic Field",
        "sections": [
          {
            "id": "phy-sec-4-9",
            "title": "Torque on Current Loop & Magnetic Dipole",
            "explanation": "A current loop of area A carrying current I, with N turns, placed in field B, experiences a torque τ = NIAB sinθ = m × B, where m = NIA is the loop's magnetic moment. This torque tends to rotate the loop so that its plane becomes perpendicular to the field — the working principle of the moving-coil galvanometer.",
            "questionFraming": "Derivation — 'Derive the expression for the torque on a current-carrying rectangular loop placed in a uniform magnetic field.'",
            "textbookRef": "A rectangular current loop of area A, carrying current I, placed in a uniform field B, experiences equal and opposite forces on the two sides parallel to the axis of possible rotation; these forces form a couple, giving a net torque τ = IAB sinθ (for N turns, τ = NIAB sinθ), where θ is the angle between the plane of the loop and the field. This principle underlies the moving-coil galvanometer.",
            "keyFormulas": [
              "τ = m × B = NIAB sinθ",
              "m = NIA"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Torque on current loop in magnetic field (Starred in revision notes)"
      },
      {
        "id": "phy-sub-4-10",
        "title": "4.10 Conversion of a Galvanometer to Ammeter & Voltmeter",
        "sections": [
          {
            "id": "phy-sec-4-10",
            "title": "Galvanometer Conversion: Shunt & Multiplier",
            "explanation": "A galvanometer measures small currents via the torque on its coil, but its coil resistance and small full-scale current make it unsuitable for measuring large currents or voltages directly. Connecting a low-resistance shunt S = I_gG/(I − I_g) in parallel converts it into an ammeter; connecting a high resistance R = V/I_g − G in series converts it into a voltmeter.",
            "questionFraming": "Numerical — 'Calculate the shunt resistance needed to convert a given galvanometer into an ammeter of a given range, and the series resistance needed to convert it into a voltmeter.'",
            "textbookRef": "To convert it into an ammeter capable of reading up to a current I, a low resistance called a shunt, S = I_gG/(I − I_g), is connected in parallel with the galvanometer, diverting most of the current through the shunt. To convert it into a voltmeter capable of reading up to a voltage V, a high resistance R = (V/I_g) − G is connected in series with the galvanometer, limiting the current through the coil to I_g at full-scale voltage V.",
            "keyFormulas": [
              "Ammeter Shunt: S = (I_g · G) / (I − I_g)",
              "Voltmeter Multiplier: R = (V / I_g) − G"
            ],
            "derivations": "1. Conversion of Galvanometer to Ammeter:\nA low shunt resistance $S$ is connected in parallel with galvanometer of resistance $G$ and full scale current $I_g$. Potential equality across parallel branches:\n$$I_g G = (I - I_g)S \\implies S = \\frac{I_g G}{I - I_g}$$\nEffective ammeter resistance: $R_A = \\frac{GS}{G+S} \\ll G$ (Ideal ammeter $R_A = 0$).\n\n2. Conversion of Galvanometer to Voltmeter:\nA high multiplier resistance $R$ is connected in series with galvanometer. By Ohm's law:\n$$V = I_g(G + R) \\implies G + R = \\frac{V}{I_g} \\implies R = \\frac{V}{I_g} - G$$\nEffective voltmeter resistance: $R_V = G + R \\gg G$ (Ideal voltmeter $R_V = \\infty$).",
            "isImportant": true,
            "examTag": "Important 5M Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Question",
        "importantReason": "Moving coil galvanometer: conversion to ammeter & voltmeter (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-5",
    "number": 5,
    "title": "Magnetism and Matter",
    "tag": "Magnetism",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-5-1",
        "title": "5.1 Diamagnetic Substances",
        "sections": [
          {
            "id": "phy-sec-5-1",
            "title": "Diamagnetic Substances Properties",
            "explanation": "Diamagnetic materials (e.g., bismuth, copper, water) have atoms with no unpaired electrons, so they have no net magnetic moment on their own. In an external field, they develop a very weak induced moment opposite to the field (by Lenz's-law-like induced currents at the atomic level), so they are weakly repelled and have small negative susceptibility.",
            "questionFraming": "Conceptual — 'What are diamagnetic substances? Give two examples and describe their behaviour in a magnetic field.'",
            "textbookRef": "Diamagnetic substances are those in which the individual atoms have no net magnetic moment because all their electron orbitals are fully paired. When placed in an external magnetic field, an induced moment appears in each atom that opposes the applied field, so the material is weakly repelled by a magnet, moving from stronger to weaker field regions. Diamagnetism has a small, negative, and essentially temperature-independent magnetic susceptibility.",
            "keyFormulas": [
              "χ is small and negative (−1 ≤ χ < 0)",
              "0 ≤ μ_r < 1",
              "Examples: Bi, Cu, H₂O, Pb"
            ],
            "isImportant": true,
            "examTag": "Important Comparison"
          }
        ],
        "isImportant": true,
        "examTag": "Important Comparison",
        "importantReason": "Dia, Para, Ferro comparison (Starred in revision notes)"
      },
      {
        "id": "phy-sub-5-2",
        "title": "5.2 Paramagnetic Substances",
        "sections": [
          {
            "id": "phy-sec-5-2",
            "title": "Paramagnetic Substances & Curie’s Law",
            "explanation": "Paramagnetic materials (e.g., aluminium, sodium) have atoms with some unpaired electrons, giving each atom a small net magnetic moment, but thermal agitation keeps these randomly oriented in the absence of a field. An external field partially aligns them, producing weak attraction and small positive susceptibility that decreases with rising temperature.",
            "questionFraming": "Conceptual — 'Distinguish diamagnetic and paramagnetic substances in terms of their atomic magnetic moments.'",
            "textbookRef": "Paramagnetic substances have atoms or molecules with a net (permanent) magnetic moment due to unpaired electrons, but in the absence of a field these moments are randomly oriented by thermal motion, giving zero net magnetization. In an external field, the moments partially align with the field, producing a small net magnetization in the same direction as the field, so the material is weakly attracted. This alignment is opposed by thermal agitation, so paramagnetic susceptibility decreases as temperature increases (Curie's law: χ = C/T).",
            "keyFormulas": [
              "χ is small and positive (0 < χ < ε)",
              "μ_r > 1",
              "Curie's Law: χ = C / T"
            ],
            "isImportant": true,
            "examTag": "Important Comparison"
          }
        ],
        "isImportant": true,
        "examTag": "Important Comparison",
        "importantReason": "Dia, Para, Ferro comparison (Starred in revision notes)"
      },
      {
        "id": "phy-sub-5-3",
        "title": "5.3 Ferromagnetic Substances",
        "sections": [
          {
            "id": "phy-sec-5-3",
            "title": "Ferromagnetic Substances & Domain Theory",
            "explanation": "Ferromagnetic materials (e.g., iron, cobalt, nickel) have strong interatomic interactions that keep the moments of large groups of neighbouring atoms ('domains') aligned with each other even without an external field. An external field causes these domains to align further and even grow at the expense of misaligned ones, giving strong attraction and, importantly, the material can retain magnetization even after the field is removed (hysteresis).",
            "questionFraming": "Distinction — 'Differentiate between dia-, para-, and ferromagnetic materials based on their behaviour in an external magnetic field and give one example of each.'",
            "textbookRef": "Ferromagnetic substances have unpaired electron spins like paramagnetic materials, but with a crucial difference: strong quantum-mechanical interactions between neighbouring atoms cause large numbers of atomic moments to spontaneously align parallel to each other within small regions called domains, even without any external field. When an external field is applied, domains aligned favourably grow at the expense of others, producing a very large net magnetization and strong attraction. Retains magnetization (retentivity). Above Curie temperature T_c, it transitions into paramagnetism.",
            "keyFormulas": [
              "χ >> 1 (very large and positive)",
              "μ_r >> 1",
              "Curie-Weiss Law above T_c: χ = C / (T − T_c)"
            ],
            "isImportant": true,
            "examTag": "Important Comparison"
          }
        ],
        "isImportant": true,
        "examTag": "Important Comparison",
        "importantReason": "Dia, Para, Ferro comparison (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-6",
    "number": 6,
    "title": "Electromagnetic Induction",
    "tag": "Induction",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-6-1",
        "title": "6.1 Magnetic Flux",
        "sections": [
          {
            "id": "phy-sec-6-1",
            "title": "Magnetic Flux & Units",
            "explanation": "Magnetic flux through a surface, Φ = B·A = BA cosθ, measures the total number of field lines passing through it — the electromagnetic-induction equivalent of electric flux, and the quantity whose rate of change actually drives induced EMF.",
            "questionFraming": "Conceptual — 'Define magnetic flux and state its SI unit.'",
            "textbookRef": "Magnetic flux linked with a surface is defined analogously to electric flux, as Φ_B = B·A = BA cosθ, where θ is the angle between the field and the normal to the surface. Its SI unit is the weber (Wb) or T·m². It is the changing value of this flux — not the field itself — that is responsible for inducing an EMF in a circuit.",
            "keyFormulas": [
              "Φ = B · A = BA cosθ",
              "1 Wb = 1 T·m²"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-6-2",
        "title": "6.2 Faraday’s Laws of Electromagnetic Induction",
        "sections": [
          {
            "id": "phy-sec-6-2",
            "title": "Faraday's Induction Laws & Quantitative Formulation",
            "explanation": "• <strong>Faraday's First Law (Qualitative):</strong> Whenever the magnetic flux (Φ_B = B · A · cos θ) linked with a closed electric circuit changes with time, an electromotive force (EMF) is induced in the circuit. The induced EMF lasts as long as the change in magnetic flux continues.\n• <strong>Faraday's Second Law (Quantitative):</strong> The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux linked with the circuit: |ε| = N · |dΦ_B / dt|, where N is the number of turns in the coil.\n• <strong>Combined Law with Lenz's Rule:</strong> Including direction, ε = −N (dΦ_B / dt). The negative sign signifies that the induced EMF opposes the flux change that produces it (a direct consequence of Law of Conservation of Energy).\n• <strong>Induced Current & Charge:</strong> For a closed circuit of total resistance R:\n  - Induced Current: I = ε / R = −(N / R) (dΦ / dt).\n  - Induced Charge: q = ∫ I dt = (N / R) · ΔΦ_B. CRITICAL BOARD RULE: The total charge induced is completely INDEPENDENT OF TIME and speed of the magnet!",
            "questionFraming": "CBSE Board Exam Blueprint [CBSE 2024, 2023, 2020, 2018]:\n• 2-Mark Question: 'State Faraday's laws of electromagnetic induction and write its mathematical equation.'\n• 2-Mark Conceptual: 'A bar magnet is moved rapidly towards a coil, and then moved slowly. Compare: (i) the induced EMF, and (ii) the total charge flown.' [Ans: (i) EMF is much larger when moved rapidly (ε ∝ 1/Δt); (ii) Total charge q = ΔΦ/R is identical in both cases since q is independent of time!]\n• 3-Mark Numerical: 'A circular coil of 200 turns and radius 10 cm is placed perpendicular to a 0.5 T magnetic field. If the field drops to zero in 0.05 s, calculate the induced EMF.' [Ans: A = π(0.1)² = 0.0314 m², ΔΦ = B · A = 0.0157 Wb. ε = 200 × (0.0157 / 0.05) = 62.8 V].",
            "textbookRef": "Faraday's landmark series of experiments (1831):\n1. Magnet-Coil Relative Motion: Relative motion between a bar magnet and a stationary coil produces a deflection in the galvanometer. Moving faster produces larger deflection. Moving the magnet away reverses the deflection. A stationary magnet (v = 0) produces zero deflection!\n2. Current-Carrying Coil C₁ and Secondary Coil C₂: Varying current in C₁ produces identical induction in C₂.\nMathematical Formulation: Magnetic flux Φ_B = B⃗ · A⃗ = B A cos θ. Induced EMF: ε = −N (dΦ_B / dt). Induced Charge: q = (N / R) · ΔΦ_B.",
            "keyFormulas": [
              "ε = −dΦ / dt",
              "For N turns: ε = −N (dΦ / dt)",
              "Magnetic Flux: Φ = B · A · cos θ",
              "Induced Current: I = ε / R = −(N / R) (dΦ / dt)",
              "Induced Charge: q = ΔΦ / R (Independent of Time!)"
            ],
            "isImportant": true,
            "examTag": "Important Law"
          }
        ],
        "isImportant": true,
        "examTag": "Important Law",
        "importantReason": "Faraday's laws of electromagnetic induction (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-3",
        "title": "6.3 Lenz’s Law",
        "sections": [
          {
            "id": "phy-sec-6-3",
            "title": "Lenz’s Law & Conservation of Energy",
            "explanation": "Lenz's law gives the direction of the induced current: it always flows so as to oppose the change in flux that produced it (hence the negative sign in Faraday's law). This is a direct consequence of energy conservation — if the induced current aided the change instead, it would create energy from nothing.",
            "questionFraming": "Conceptual — 'State Lenz's law and show that it is consistent with the law of conservation of energy.'",
            "textbookRef": "Lenz's law states that the direction of an induced current is always such as to oppose the change in magnetic flux that causes it. This law is a direct consequence of the principle of conservation of energy: if the induced current instead aided the change in flux, the flux (and hence the induced current) would keep increasing without any external energy input, creating energy from nothing, which violates conservation of energy.",
            "keyFormulas": [
              "Induced current opposes cause producing it",
              "Direct manifestation of Conservation of Energy"
            ],
            "isImportant": true,
            "examTag": "Important Principle"
          }
        ],
        "isImportant": true,
        "examTag": "Important Principle",
        "importantReason": "Lenz's law statement & energy conservation (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-4",
        "title": "6.4 Fleming’s Right-Hand and Left-Hand Rules",
        "sections": [
          {
            "id": "phy-sec-6-4",
            "title": "Fleming’s Right vs Left Hand Rules",
            "explanation": "Fleming's right-hand rule (thumb = motion, forefinger = field, middle finger = induced current) gives the direction of induced current in a conductor moving through a field — the 'generator effect.' Fleming's left-hand rule (thumb = force, forefinger = field, middle finger = current) gives the direction of the force on a current-carrying conductor in a field — the 'motor effect.'",
            "questionFraming": "Application — 'State Fleming's right-hand and left-hand rules and explain where each is applied.'",
            "textbookRef": "Right-hand rule ⟶ Generator effect (induced current).\nLeft-hand rule ⟶ Motor effect (force on current conductor in magnetic field).",
            "keyFormulas": [
              "Right Hand: Generator (Motion, Field, Induced Current)",
              "Left Hand: Motor (Force, Field, Current)"
            ],
            "isImportant": true,
            "examTag": "Important Rule"
          }
        ],
        "isImportant": true,
        "examTag": "Important Rule",
        "importantReason": "Fleming's right-hand and left-hand rules (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-5",
        "title": "6.5 Motional EMF",
        "sections": [
          {
            "id": "phy-sec-6-5",
            "title": "Motional EMF Derivation",
            "explanation": "When a straight conductor of length l moves with velocity v perpendicular to a uniform field B, the free charges in it experience a magnetic force that pushes them to one end, building up an EMF e = Blv across its length — this is EMF generated by mechanical motion through a field, rather than by a changing field in a stationary circuit.",
            "questionFraming": "Derivation — 'Derive the expression for motional EMF induced in a rod moving with uniform velocity perpendicular to a magnetic field.'",
            "textbookRef": "When a straight rod of length l moves with velocity v, perpendicular to both its own length and to a uniform magnetic field B, the free electrons in the rod experience a magnetic force F = −e(v × B), which pushes them toward one end of the rod until an equilibrium electric field builds up inside the rod to balance this force. The potential difference that develops between the two ends of the rod is the motional EMF, e = Blv.",
            "keyFormulas": [
              "e = Blv",
              "Induced current: I = Blv / R",
              "Power: P = B²l²v² / R"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Motional EMF final expression (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-6",
        "title": "6.6 Methods of Producing Induced EMF",
        "sections": [
          {
            "id": "phy-sec-6-6",
            "title": "Three Ways to Induce EMF",
            "explanation": "Since flux Φ = BA cosθ, EMF can be induced by changing any of its three factors: the field strength B (e.g., moving a magnet near a coil), the area A (e.g., a conductor sliding on rails, changing the enclosed loop area), or the angle θ between B and the area's normal (e.g., a coil rotating in a field — the principle of the AC generator).",
            "questionFraming": "Conceptual — 'What are the different ways in which an EMF can be induced in a circuit?'",
            "textbookRef": "Because flux depends on three quantities — the field strength B, the area A, and the angle θ between them (Φ = BA cosθ) — an EMF can be induced by changing any one of these: by moving a magnet toward or away from a stationary coil (changing B), by changing the area of the circuit enclosed within the field (e.g., a sliding conductor on rails), or by rotating a coil within a uniform field so that θ changes continuously with time.",
            "keyFormulas": [
              "dΦ/dt via changing B",
              "dΦ/dt via changing A",
              "dΦ/dt via changing θ (rotation)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-6-7",
        "title": "6.7 Self-Induction and Mutual Induction",
        "sections": [
          {
            "id": "phy-sec-6-7",
            "title": "Self vs Mutual Inductance Definitions",
            "explanation": "Self-induction is the phenomenon where a changing current in a coil induces an EMF in the same coil, opposing the change, quantified as ε = −L(dI/dt), where L is the coil's self-inductance. Mutual induction is where a changing current in one coil induces an EMF in a nearby second coil, quantified by the mutual inductance M, which relates the flux in one coil to the current in the other.",
            "questionFraming": "Conceptual — 'Define self-inductance and mutual inductance, and give the SI unit of inductance.'",
            "textbookRef": "Self-induction refers to the induction of an EMF in a coil due to a change in the current flowing through that same coil, since the changing current changes its own flux linkage; this induced EMF, ε = −L(dI/dt), always opposes the change in current. Mutual induction is the phenomenon in which a change of current in one coil (the primary) induces an EMF in a neighbouring coil (the secondary): Φ₂ = MI₁ and ε₂ = −M(dI₁/dt). Unit: Henry (H).",
            "keyFormulas": [
              "ε_self = −L (dI / dt)",
              "ε_mutual = −M (dI₁ / dt)",
              "1 H = 1 V·s / A = 1 Wb / A"
            ],
            "isImportant": true,
            "examTag": "Important Definition"
          }
        ],
        "isImportant": true,
        "examTag": "Important Definition",
        "importantReason": "Self and mutual induction coefficients (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-8",
        "title": "6.8 Self- and Mutual Inductance of a Long Solenoid",
        "sections": [
          {
            "id": "phy-sec-6-8",
            "title": "Inductance Formulae of Solenoids",
            "explanation": "For a long solenoid with n turns per unit length, cross-sectional area A, and length l, the self-inductance is L = μ₀n²Al. If a second coil is wound over it with n₂ turns per unit length, the mutual inductance between the two is M = μ₀n₁n₂Al — both formulas follow directly from computing the flux linkage produced by a given current.",
            "questionFraming": "Derivation — 'Derive the expression for the self-inductance of a long solenoid.'",
            "textbookRef": "For a long solenoid of length l, cross-sectional area A, and n turns per unit length, the self-inductance works out to L = μ₀n²Al, showing that inductance depends only on the solenoid's geometry, not the current flowing through it. For two coaxial solenoids wound over each other, M = μ₀n₁n₂Al.",
            "keyFormulas": [
              "L = μ₀n²Al",
              "M = μ₀n₁n₂Al"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Self-inductance of solenoid & mutual inductance of coaxial coils (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-9",
        "title": "6.9 Energy Stored in an Inductor",
        "sections": [
          {
            "id": "phy-sec-6-9",
            "title": "Magnetic Energy in an Inductor",
            "explanation": "Establishing a current in an inductor requires work to be done against the back-EMF it generates as the current builds up; this work is stored as magnetic energy, U = ½LI², analogous to the ½CV² energy stored in a capacitor's electric field.",
            "questionFraming": "Derivation/Numerical — 'Derive the expression for energy stored in an inductor carrying current I.'",
            "textbookRef": "When a current is being built up in an inductor, the inductor opposes the change with a back-EMF, and work must be done by the source to overcome this opposition and establish the current. This work done is stored as energy in the magnetic field of the inductor, and the total energy stored when the final current is I works out to U = ½LI².",
            "keyFormulas": [
              "U = ½ LI²",
              "Magnetic energy density: u_B = B² / (2μ₀)"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Energy stored in an inductor (Starred in revision notes)"
      },
      {
        "id": "phy-sub-6-10",
        "title": "6.10 The AC Generator",
        "sections": [
          {
            "id": "phy-sec-6-10",
            "title": "Working Principle of AC Generator",
            "explanation": "An AC generator converts mechanical energy into electrical energy using electromagnetic induction: a coil rotated at constant angular velocity ω in a uniform magnetic field has its flux linkage varying sinusoidally, inducing an EMF e = e₀ sinωt = NBAω sinωt — a direct application of Faraday's law with a changing angle θ = ωt.",
            "questionFraming": "Working Principle — 'Explain, with a labelled diagram, the working principle of an AC generator and derive the expression for the instantaneous EMF induced.'",
            "textbookRef": "An AC generator (alternator) converts mechanical energy into electrical energy on the basis of electromagnetic induction. A rectangular coil of N turns and area A is mechanically rotated at a constant angular speed ω inside a uniform magnetic field B; as it rotates, the angle between the coil's normal and the field changes as θ = ωt, so the flux linkage Φ = NBA cos(ωt) varies sinusoidally with time, inducing an EMF e = −dΦ/dt = NBAω sin(ωt) = e₀ sin(ωt), where e₀ = NBAω is the peak EMF.",
            "keyFormulas": [
              "e = e₀ sinωt",
              "e₀ = NBAω",
              "Frequency: ν = ω / 2π"
            ],
            "isImportant": true,
            "examTag": "Important 5M Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Question",
        "importantReason": "AC generator: principle, working & EMF expression (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-7",
    "number": 7,
    "title": "Alternating Current",
    "tag": "AC Circuits",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-7-1",
        "title": "7.1 AC Through a Pure Resistor",
        "sections": [
          {
            "id": "phy-sec-7-1",
            "title": "AC Voltage Applied to a Resistor",
            "explanation": "When an AC source is connected across a pure resistor, the current and voltage remain exactly in phase with each other (no lag or lead), since a resistor has no reactive (energy-storing) behaviour. Instantaneous power is P = VI, and average power is P_avg = V_rms I_rms.",
            "questionFraming": "Conceptual — 'Show that in a purely resistive AC circuit, the current is in phase with the applied voltage.'",
            "textbookRef": "When an alternating voltage v = v₀ sinωt is applied across a pure resistor R, the instantaneous current is i = v/R = (v₀/R) sinωt = i₀ sinωt — current and voltage reach their maximum, zero, and minimum values at exactly the same instants, i.e., they are in phase. The average power dissipated over a cycle is P = V_rms I_rms.",
            "keyFormulas": [
              "v = v₀ sinωt, i = i₀ sinωt",
              "Phase difference: φ = 0",
              "P_avg = V_rms · I_rms"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-7-2",
        "title": "7.2 AC Through a Pure Inductor",
        "sections": [
          {
            "id": "phy-sec-7-2",
            "title": "AC Voltage Applied to an Inductor",
            "explanation": "An inductor opposes changes in current by generating a back-EMF, which causes the current to lag behind the voltage by 90° (a quarter cycle). Its opposition to AC is called inductive reactance, X_L = ωL, which increases with frequency — an inductor blocks high-frequency AC more than low-frequency AC.",
            "questionFraming": "Conceptual — 'Show that current lags voltage by 90° in a purely inductive AC circuit, and define inductive reactance.'",
            "textbookRef": "For a pure inductor, the applied voltage must at every instant equal the back-EMF, L(di/dt) = v₀ sinωt; solving this shows that the current is i = i₀ sin(ωt − π/2), lagging the voltage by 90°. The inductor's opposition to current flow, called inductive reactance, is X_L = ωL.",
            "keyFormulas": [
              "i = i₀ sin(ωt − π/2)",
              "X_L = ωL = 2πfL",
              "For DC (f = 0): X_L = 0"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-7-3",
        "title": "7.3 AC Through a Pure Capacitor",
        "sections": [
          {
            "id": "phy-sec-7-3",
            "title": "AC Voltage Applied to a Capacitor",
            "explanation": "A capacitor charges and discharges each cycle; because current must flow to build up voltage across it, the current leads the voltage by 90°. Its opposition to AC is called capacitive reactance, X_C = 1/(ωC), which decreases with frequency — a capacitor blocks low-frequency AC (and DC) more than high-frequency AC.",
            "questionFraming": "Conceptual — 'Show that current leads voltage by 90° in a purely capacitive AC circuit, and define capacitive reactance.'",
            "textbookRef": "For a pure capacitor, the instantaneous charge must at all times satisfy q = Cv = Cv₀ sinωt, and current i = dq/dt works out to i = i₀ sin(ωt + π/2), leading the voltage by 90°. The capacitor's opposition to current flow is capacitive reactance, X_C = 1/(ωC) = 1/(2πfC). For steady DC (f = 0), X_C → ∞, meaning a capacitor acts as an open circuit to DC.",
            "keyFormulas": [
              "i = i₀ sin(ωt + π/2)",
              "X_C = 1 / (ωC) = 1 / (2πfC)",
              "Blocks DC completely (X_C → ∞)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-7-4",
        "title": "7.4 The Series RLC Circuit",
        "sections": [
          {
            "id": "phy-sec-7-4",
            "title": "Series RLC Circuit Impedance",
            "explanation": "When R, L, and C are connected in series to an AC source, their combined opposition is the impedance Z = √[R² + (X_L − X_C)²], and the phase angle between the total voltage and current is given by tanφ = (X_L − X_C)/R — the circuit behaves inductively if X_L > X_C, capacitively if X_C > X_L, and purely resistively if they are equal.",
            "questionFraming": "Numerical — 'Calculate the impedance and phase angle of a given series RLC circuit connected to an AC source of given frequency.'",
            "textbookRef": "When a resistor, inductor, and capacitor are connected in series to an AC source, the net opposition to current is the impedance, Z = √[R² + (X_L − X_C)²], obtained by combining the resistance and net reactance as if they were perpendicular components (a phasor or vector sum), since X_L and X_C individually cause voltage to lead/lag current by 90° in opposite senses.",
            "keyFormulas": [
              "Z = √[R² + (X_L − X_C)²]",
              "tanφ = (X_L − X_C) / R"
            ],
            "derivations": "Phasor Derivation of Series LCR Circuit Impedance & Phase:\nLet current be $I = I_0\\sin(\\omega t)$. Resistor voltage $V_R = I_0 R$ is in phase with $I$. Inductor voltage $V_L = I_0 X_L = I_0(\\omega L)$ leads by $90^\\circ$. Capacitor voltage $V_C = I_0 X_C = I_0(1/\\omega C)$ lags by $90^\\circ$.\nNet reactive voltage is $V_L - V_C = I_0(X_L - X_C)$. In the phasor right triangle, resultant source voltage is:\n$$V_0 = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{(I_0 R)^2 + [I_0(X_L - X_C)]^2} = I_0 \\sqrt{R^2 + (X_L - X_C)^2}$$\nImpedance:\n$$Z = \\frac{V_0}{I_0} = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}$$\nPhase angle between source voltage and current:\n$$\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{X_L - X_C}{R} = \\frac{\\omega L - 1/(\\omega C)}{R}$$",
            "isImportant": true,
            "examTag": "Important 5M Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Derivation",
        "importantReason": "Series RLC / LCR circuit & phasor impedance (Starred in revision notes)"
      },
      {
        "id": "phy-sub-7-5",
        "title": "7.5 The Transformer",
        "sections": [
          {
            "id": "phy-sec-7-5",
            "title": "Transformers Principle & Turn Ratios",
            "explanation": "A transformer uses mutual induction between two coils (primary and secondary) wound on a common iron core to change AC voltage levels: V_s/V_p = N_s/N_p = I_p/I_s. A step-up transformer has more secondary turns (increases voltage, decreases current); a step-down transformer has fewer.",
            "questionFraming": "Conceptual — 'Explain the working principle of a transformer and state the relation between the voltages and number of turns in its primary and secondary coils.'",
            "textbookRef": "A transformer works on the principle of mutual induction: an alternating current in the primary coil produces a continuously changing flux, which links with the secondary coil and induces an alternating EMF in it. For an ideal transformer: V_s/V_p = N_s/N_p = I_p/I_s. A step-up transformer increases voltage and decreases current; a step-down transformer does the reverse. Transformers only work with AC, not DC.",
            "keyFormulas": [
              "V_s / V_p = N_s / N_p = I_p / I_s = k",
              "Efficiency: η = (P_out / P_in) × 100%"
            ],
            "isImportant": true,
            "examTag": "Important 5M Question"
          },
          {
            "id": "phy-sec-7-5b",
            "title": "Energy Losses in Real Transformers & Minimization",
            "explanation": "In practical transformers, efficiency is less than 100% due to four major sources of energy loss: (1) Copper loss (I²R heating in windings), (2) Eddy current loss in the iron core, (3) Hysteresis loss due to cyclic magnetization, and (4) Magnetic flux leakage.",
            "questionFraming": "Conceptual — 'Name and explain four major sources of energy loss in a practical transformer, and state how each is minimized.'",
            "textbookRef": "Four Major Energy Losses in Real Transformers:\n1. Copper Loss: Heating (I²R) in primary and secondary copper windings due to finite resistance. Minimized by using thick copper wires of low resistance for the high-current winding.\n2. Eddy Current Loss: Circulating currents induced in the continuous bulk of the iron core causing heating. Minimized by using a laminated soft iron core made of thin insulated sheets/strips.\n3. Hysteresis Loss: Energy lost in magnetizing and demagnetizing the core in every AC cycle. Minimized by using soft iron or silicon alloy steel with a narrow B-H hysteresis loop.\n4. Flux Leakage: Primary magnetic flux lines escaping into air without linking secondary turns. Minimized by winding primary and secondary coils coaxially over each other on the same limb of a shell-type core.",
            "keyFormulas": [
              "Copper Loss: P_loss = I_p² R_p + I_s² R_s  (Minimized: Thick copper wire)",
              "Eddy Current Loss: P_eddy ∝ f² B_max² t² / ρ  (Minimized: Laminated core)",
              "Hysteresis Loss: P_hyst ∝ Area of B-H loop  (Minimized: Soft iron)",
              "Flux Leakage: Φ_leakage = Φ_p - Φ_s  (Minimized: Coaxial winding)"
            ],
            "derivations": "Analysis of Transformer Energy Losses & Mitigation:\n1. Copper (Joule) Loss ($I^2R$):\n$$P_{\\text{copper}} = I_p^2 R_p + I_s^2 R_s$$\nMitigation: Use thick, heavy gauge copper wire (low $R$) for the winding carrying large current.\n\n2. Eddy Current Loss:\n$$P_{\\text{eddy}} \\propto \\frac{f^2 B_{\\max}^2 t^2}{\\rho}$$\nMitigation: Laminated core constructed from thin, varnish-insulated soft iron sheets stacked parallel to the flux.\n\n3. Hysteresis Loss:\n$$\\text{Energy lost per cycle} = \\oint B \\, dH = \\text{Area of } B\\text{-}H \\text{ loop}$$\nMitigation: Soft iron core material having low coercivity and narrow hysteresis loop area.\n\n4. Magnetic Flux Leakage:\nMitigation: Primary and secondary coils wound coaxially one over the other on the same central core limb.",
            "isImportant": true,
            "examTag": "Important 5M Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important 5M Question",
        "importantReason": "Transformer: working, step-up/down & 4 losses (Starred in revision notes)"
      },
      {
        "id": "phy-sub-7-6",
        "title": "7.6 Electrical Resonance in an RLC Circuit",
        "sections": [
          {
            "id": "phy-sec-7-6",
            "title": "Resonance Condition & Tuning",
            "explanation": "Resonance occurs at the specific frequency ω₀ = 1/√(LC) where the inductive and capacitive reactances are exactly equal (X_L = X_C), so they cancel each other's phase effects, leaving the impedance at its minimum value (Z = R) and the current at its maximum for a given applied voltage — the basis of tuning circuits in radios.",
            "questionFraming": "Derivation — 'Derive the condition for resonance in a series RLC circuit and explain its significance.'",
            "textbookRef": "In a series LCR circuit, the impedance Z = √[R² + (X_L − X_C)²] is minimized (equal to R alone) at the particular angular frequency ω₀ for which X_L = X_C, i.e., ω₀L = 1/(ω₀C), giving the resonant angular frequency ω₀ = 1/√(LC). At this frequency, current in the circuit is at its maximum possible value for a given applied voltage.",
            "keyFormulas": [
              "X_L = X_C  ⟹  ω₀ = 1 / √(LC)",
              "f₀ = 1 / (2π√(LC))",
              "Z_min = R  (Current I is maximum)"
            ],
            "derivations": "Resonance Condition & Quality Factor:\nResonance occurs when $X_L = X_C \\implies \\omega_r L = \\frac{1}{\\omega_r C}$:\n$$\\omega_r = \\frac{1}{\\sqrt{LC}} \\quad \\implies \\quad f_r = \\frac{1}{2\\pi\\sqrt{LC}}$$\nAt resonance: $Z_{\\text{min}} = R$, current amplitude is maximum $I_0 = V_0 / R$, and power factor is unity ($\\cos\\phi = 1$).\n\nQuality Factor (Q-factor):\nVoltage magnification across inductor/capacitor at resonance relative to source voltage:\n$$Q = \\frac{V_L}{V} = \\frac{\\omega_r L}{R} = \\frac{1}{\\sqrt{LC}}\\frac{L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Electrical resonance in RLC circuit (Starred in revision notes)"
      },
      {
        "id": "phy-sub-7-7",
        "title": "7.7 Power in an AC Circuit — Power Factor",
        "sections": [
          {
            "id": "phy-sec-7-7",
            "title": "AC Power & Wattless Current",
            "explanation": "Because voltage and current are not necessarily in phase in an AC circuit containing reactive elements, the actual average power delivered is P = V_rms I_rms cosφ, where cosφ (the power factor) accounts for the phase difference φ between them. For a purely resistive circuit cosφ = 1 (maximum power transfer); for a purely reactive circuit (only L or only C) cosφ = 0 (no net power is consumed, called wattless current).",
            "questionFraming": "Conceptual — 'Define power factor and explain the significance of wattless current.'",
            "textbookRef": "Average power delivered to an AC circuit is P = V_rms I_rms cosφ, where cosφ, called the power factor, equals R/Z. In a purely inductive or purely capacitive circuit, φ = 90° and cosφ = 0, so despite non-zero voltage and current, the net power consumed over a full cycle is zero — such current is called 'wattless current.'",
            "keyFormulas": [
              "P = V_rms I_rms cosφ",
              "Power factor: cosφ = R / Z",
              "Pure L or C: cosφ = 0 (Wattless Current)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-7-8",
        "title": "7.8 Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms",
        "sections": [
          {
            "id": "phy-sec-7-8",
            "title": "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms",
            "explanation": "Since AC is symmetric about the time axis, its average value over a full cycle is zero (equal positive and negative charge flows). Over half a cycle, the mean value is I_mean = 2I₀/π ≈ 0.637I₀. The RMS value, I_rms = I₀/√2 ≈ 0.707I₀, is defined as the equivalent steady (DC) current that would produce the same heating effect in a resistor — this is the practically meaningful 'effective value' of AC, and is what household AC voltage/current ratings actually refer to.",
            "questionFraming": "Derivation — 'Derive the RMS value of alternating current starting from the definition in terms of heat produced.'\nConceptual — 'Why is the average value of AC over a full cycle zero, but not over a half cycle?'",
            "textbookRef": "Over full cycle: Average = 0.\nOver half cycle: I_mean = 2I₀/π ≈ 0.637 I₀.\nRMS Value: Steady direct current producing same heat in a given resistor in time T: dH = I²R dt. Using sin²(ωt) = (1 − cos 2ωt)/2, the cosine term vanishes over full cycle, giving I_rms = I₀/√2 ≈ 0.707 I₀ and V_rms = V₀/√2.",
            "keyFormulas": [
              "I_mean = 2I₀ / π ≈ 0.637 I₀",
              "I_rms = I₀ / √2 ≈ 0.707 I₀",
              "V_rms = V₀ / √2 ≈ 0.707 V₀"
            ],
            "derivations": "Part 1: Physical Definition & Joule Heating Equivalence\nThe Root-Mean-Square (RMS) or virtual/effective value of alternating current is defined as that value of steady direct current (DC) which would generate the same amount of heat in a given resistor in a given time as is produced by the AC passing through the same resistor for the same time (one complete cycle period $T$).\n\nAverage value over full cycle: $\\langle I \\rangle_{\\text{cycle}} = \\frac{1}{T}\\int_0^T I_0\\sin(\\omega t) dt = 0$. Hence arithmetic average cannot rate AC power.\nJoule heating depends on $I^2 R$, which is strictly non-negative at all times.\n\nPart 2: Step-by-Step Derivation of I_rms = I₀ / √2\nStep 1 (Instantaneous Heat): Let alternating current be $I(t) = I_0 \\sin(\\omega t)$. In an infinitesimal time interval $dt$, the heat produced in resistor $R$ is:\n$$dH = I^2 R \\, dt = I_0^2 R \\sin^2(\\omega t) \\, dt$$\n\nStep 2 (Integration over One Full Cycle): Total heat produced over period $T = 2\\pi/\\omega$:\n$$H = \\int_0^T I_0^2 R \\sin^2(\\omega t) \\, dt = I_0^2 R \\int_0^T \\frac{1 - \\cos(2\\omega t)}{2} \\, dt$$\n$$H = \\frac{I_0^2 R}{2} \\left[ \\int_0^T dt - \\int_0^T \\cos(2\\omega t) \\, dt \\right]$$\n\nStep 3 (Evaluating Integrals): The first integral gives $\\int_0^T dt = T$. The second integral vanishes identically:\n$$\\int_0^T \\cos(2\\omega t) \\, dt = \\left[ \\frac{\\sin(2\\omega t)}{2\\omega} \\right]_0^T = \\frac{\\sin(4\\pi) - \\sin(0)}{2\\omega} = 0$$\nTherefore, total heat produced is:\n$$H = \\frac{I_0^2 R T}{2}$$\n\nStep 4 (Equating to DC Thermal Equivalent): If steady DC current $I_{\\text{rms}}$ produces the exact same heat $H$ in resistance $R$ in time $T$:\n$$H = I_{\\text{rms}}^2 R T$$\n$$I_{\\text{rms}}^2 R T = \\frac{I_0^2 R T}{2} \\implies I_{\\text{rms}}^2 = \\frac{I_0^2}{2}$$\n\nStep 5 (Final Formula): Taking square root on both sides:\n$$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 \\, I_0$$\n\nPart 3: Derivation of Alternating EMF (E_rms = E₀ / √2)\nLet alternating EMF be $E(t) = E_0 \\sin(\\omega t)$. Power dissipated across resistance $R$ is $P(t) = \\frac{E^2(t)}{R}$.\nTotal heat produced in one complete period $T$ is:\n$$H = \\int_0^T \\frac{E^2(t)}{R} \\, dt = \\frac{E_0^2}{R} \\int_0^T \\sin^2(\\omega t) \\, dt = \\frac{E_0^2}{R} \\left(\\frac{T}{2}\\right) = \\frac{E_0^2 T}{2R}$$\nEquating to equivalent steady DC voltage $E_{\\text{rms}}$:\n$$H = \\frac{E_{\\text{rms}}^2 T}{R} \\implies \\frac{E_{\\text{rms}}^2 T}{R} = \\frac{E_0^2 T}{2R} \\implies E_{\\text{rms}} = \\frac{E_0}{\\sqrt{2}} \\approx 0.707 \\, E_0$$\nDomestic Supply Note: Standard $220\\text{ V}$ household supply is $V_{\\text{rms}} = 220\\text{ V}$. Peak amplitude is:\n$$V_0 = \\sqrt{2} \\times 220\\text{ V} \\approx 311.13\\text{ V}$$\n\nPart 4: Mean / Average Value of AC over Half-Cycle\nOver positive half-cycle ($t = 0$ to $t = T/2$):\n$$I_{\\text{mean}} = \\frac{1}{T/2} \\int_0^{T/2} I_0 \\sin(\\omega t) \\, dt = \\frac{2 I_0}{T} \\left[ -\\frac{\\cos(\\omega t)}{\\omega} \\right]_0^{T/2} = \\frac{2 I_0}{\\omega T} [-\\cos(\\pi) + \\cos(0)] = \\frac{2 I_0}{2\\pi} [1 + 1] = \\frac{2 I_0}{\\pi} \\approx 0.637 \\, I_0$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Root-Mean-Square (RMS) Values of AC: Derivation of I_rms and E_rms (Starred in revision notes)"
      }
    ]
  },
  {
    "id": "phy-ch-8",
    "number": 8,
    "title": "Electromagnetic Waves",
    "tag": "EM Waves",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-8-1",
        "title": "8.1 The Electromagnetic Spectrum",
        "sections": [
          {
            "id": "phy-sec-8-1",
            "title": "EM Spectrum Breakdown & Uses",
            "explanation": "The electromagnetic spectrum is the full range of EM waves arranged by frequency/wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays, in order of increasing frequency (decreasing wavelength). Each band has characteristic sources and uses (e.g., radio for broadcasting, microwaves for radar/ovens, X-rays for medical imaging).",
            "questionFraming": "Factual — 'Arrange the electromagnetic spectrum in order of increasing frequency and state one use of any two bands.'",
            "textbookRef": "Radio waves ⟶ Microwaves ⟶ Infrared ⟶ Visible ⟶ Ultraviolet ⟶ X-rays ⟶ Gamma rays (in order of increasing frequency and energy, decreasing wavelength). All travel at c = 3 × 10⁸ m/s in vacuum.",
            "keyFormulas": [
              "c = ν · λ",
              "E = hν = hc / λ"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Electromagnetic spectrum (Starred in revision notes)"
      },
      {
        "id": "phy-sub-8-2",
        "title": "8.2 Maxwell’s Equations",
        "sections": [
          {
            "id": "phy-sec-8-2",
            "title": "Maxwell’s Four Equations (Integral Form)",
            "explanation": "Maxwell unified electricity, magnetism, and optics into four equations (integral form): Gauss's law for electricity (electric flux from enclosed charge), Gauss's law for magnetism (no magnetic monopoles — net magnetic flux through any closed surface is zero), Faraday's law (changing magnetic flux induces EMF), and the Ampere–Maxwell law (electric current and changing electric flux both produce a magnetic field). Together, they predict the existence of self-sustaining electromagnetic waves.",
            "questionFraming": "Factual — 'State Maxwell's four equations in integral form.'",
            "textbookRef": "(i) ∮ E·dA = q/ε₀ (Gauss Law - Electricity)\n(ii) ∮ B·dA = 0 (Gauss Law - Magnetism)\n(iii) ∮ E·dl = −dΦ_B/dt (Faraday Law)\n(iv) ∮ B·dl = μ₀(I_c + ε₀ dΦ_E/dt) (Ampere-Maxwell Law)",
            "keyFormulas": [
              "∮ E·dA = q_enc / ε₀",
              "∮ B·dA = 0",
              "∮ E·dl = −dΦ_B / dt",
              "∮ B·dl = μ₀(I_c + I_d)"
            ],
            "isImportant": true,
            "examTag": "Important 4 Equations"
          }
        ],
        "isImportant": true,
        "examTag": "Important 4 Equations",
        "importantReason": "Maxwell's 4 equations (Starred in revision notes)"
      },
      {
        "id": "phy-sub-8-3",
        "title": "8.3 Displacement Current",
        "sections": [
          {
            "id": "phy-sec-8-3",
            "title": "Displacement Current Definition",
            "explanation": "Maxwell noticed that Ampere's original law was inconsistent for circuits with a capacitor (no actual conduction current flows between the plates, yet a magnetic field is still observed there). He resolved this by adding a 'displacement current,' I_d = ε₀(dΦ_E/dt), due to the changing electric flux between the plates — this modification makes Ampere's law fully consistent with charge conservation and correctly predicts EM wave propagation even through a vacuum.",
            "questionFraming": "Conceptual — 'What is displacement current? Why was it necessary to introduce it into Ampere's law?'",
            "textbookRef": "Ampere's circuital law in its original form runs into an inconsistency when applied to a charging capacitor. Choosing a surface between plates has zero conduction current, yet a magnetic field exists. Maxwell resolved this by recognizing that changing electric field between plates acts as an equivalent current: I_d = ε₀(dΦ_E/dt).",
            "keyFormulas": [
              "I_d = ε₀ (dΦ_E / dt)",
              "Total current: I = I_c + I_d"
            ],
            "derivations": "Displacement Current Derivation & Ampere-Maxwell Law:\nFor a charging capacitor of plate area $A$, electric field is $E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{q}{\\varepsilon_0 A}$. Total electric flux between plates:\n$$\\Phi_E = E A = \\frac{q}{\\varepsilon_0} \\implies q = \\varepsilon_0 \\Phi_E$$\nDifferentiating with respect to time:\n$$I_c = \\frac{dq}{dt} = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = I_d$$\nHence, displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ equals conduction current $I_c$ inside the gap.\nGeneralized Ampere-Maxwell Law:\n$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Displacement current & Maxwell-Ampere law (Starred in revision notes)"
      },
      {
        "id": "phy-sub-8-4",
        "title": "8.4 Properties of Electromagnetic Waves",
        "sections": [
          {
            "id": "phy-sec-8-4",
            "title": "Properties of EM Waves",
            "explanation": "EM waves are transverse waves where oscillating electric and magnetic fields are mutually perpendicular to each other and to the direction of wave propagation; they travel at the speed of light in vacuum, c = 1/√(μ₀ε₀); they carry energy and momentum (and can therefore exert radiation pressure); and, unlike mechanical waves, they require no medium to propagate, which is why light and radio waves can travel through empty space.",
            "questionFraming": "Factual — 'List the important properties of electromagnetic waves.'",
            "textbookRef": "Transverse in nature: E ⊥ B ⊥ propagation vector. Travel at c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s. Ratio E₀/B₀ = c. Carry energy and momentum; momentum p = U/c, exerting radiation pressure P = I/c.",
            "keyFormulas": [
              "c = 1 / √(μ₀ε₀) = E₀ / B₀",
              "p = U / c  (radiation momentum)"
            ]
          }
        ]
      }
    ]
  }
];
