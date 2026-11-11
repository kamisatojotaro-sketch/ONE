// Full Granular NCERT Class 12 Physics Volume 2 (Chapters 9 to 14) High-Yield Notes
// Enriched with Step-by-Step Textbook Derivations & Handwritten Exam Priority Markers

export const PHYSICS_CHAPTERS_VOL2 = [
  {
    "id": "phy-ch-9",
    "number": 9,
    "title": "Ray Optics and Optical Instruments",
    "tag": "Optics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-9-1",
        "title": "9.1 Reflection by Spherical Mirrors & Mirror Formula",
        "sections": [
          {
            "id": "phy-sec-9-1",
            "title": "Spherical Mirrors, Cartesian Sign Convention & Mirror Formula",
            "explanation": "According to the Cartesian sign convention, all distances are measured from the pole P of the mirror; distances in the direction of incident light are taken as positive, and those opposite to incident light are taken as negative. For paraxial rays (rays close to and making small angles with the principal axis), the focal length is half the radius of curvature (f = R/2). The mirror formula 1/v + 1/u = 1/f relates image distance v, object distance u, and focal length f for both concave (f < 0) and convex (f > 0) mirrors. Linear magnification m = h'/h = −v/u indicates whether the image is real and inverted (m < 0) or virtual and erect (m > 0).",
            "questionFraming": "Derivation — 'Using a ray diagram for a concave mirror, derive the mirror equation 1/v + 1/u = 1/f and the expression for linear magnification.'\nNumerical — 'An object is placed in front of a concave/convex mirror of given radius of curvature; find the position, nature, and magnification of the image.'",
            "textbookRef": "In the Cartesian sign convention, the pole P of the mirror is taken as the origin and the principal axis as the x-axis. Distances measured in the same direction as the incident light are positive, and those measured opposite to the direction of incident light are negative. Heights measured upwards perpendicular to the principal axis are positive, and downwards are negative. For paraxial rays, f = R/2, and the mirror equation 1/v + 1/u = 1/f holds for any spherical mirror under proper sign substitution.",
            "keyFormulas": [
              "f = R / 2  (for paraxial rays)",
              "1/v + 1/u = 1/f = 2/R",
              "m = h' / h = −v / u = f / (f − u) = (f − v) / f"
            ],
            "derivations": "1. Relation between Focal Length and Radius of Curvature ($f = R/2$):\nConsider a ray $MD$ parallel to the principal axis incident on a concave mirror at $M$ near pole $P$. Let $C$ be the centre of curvature ($CP = R$) and $F$ be the principal focus ($FP = f$). By laws of reflection, $\\angle CMD = \\angle CMF = \\theta$, and by alternate interior angles $\\angle MCP = \\theta$ and $\\angle MFP = 2\\theta$.\nFor paraxial rays, $\\tan\\theta \\approx \\theta = \\frac{MD}{CD} \\approx \\frac{MD}{R}$ and $\\tan 2\\theta \\approx 2\\theta = \\frac{MD}{FD} \\approx \\frac{MD}{f}$.\nEquating $\\theta$: $$\\frac{MD}{f} = 2\\left(\\frac{MD}{R}\\right) \\implies f = \\frac{R}{2}$$\n\n2. Derivation of Mirror Formula ($\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$):\nLet an object $AB$ be placed beyond $C$ in front of a concave mirror, forming a real inverted image $A'B'$ between $C$ and $F$.\nFrom right-angled similar triangles $\\triangle A'B'F$ and $\\triangle MPF$ (treating $MP$ as straight for paraxial rays, with $MP = AB$):\n$$\\frac{B'A'}{PM} = \\frac{B'F}{FP} \\implies \\frac{B'A'}{BA} = \\frac{B'P - FP}{FP}$$\nAlso, for rays incident at pole $P$, $\\triangle A'B'P \\sim \\triangle ABP$, so:\n$$\\frac{B'A'}{BA} = \\frac{B'P}{BP}$$\nEquating the two ratios and applying Cartesian signs ($B'P = -v$, $FP = -f$, $BP = -u$):\n$$\\frac{-v - (-f)}{-f} = \\frac{-v}{-u} \\implies \\frac{v - f}{f} = \\frac{v}{u} \\implies \\frac{v}{f} - 1 = \\frac{v}{u}$$\nDividing throughout by $v$ gives the Mirror Formula:\n$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$\n\n3. Linear Magnification ($m$):\nFrom $\\triangle A'B'P \\sim \\triangle ABP$ with $B'A' = -h'$, $BA = +h$, $B'P = -v$, $BP = -u$:\n$$m = \\frac{-h'}{h} = \\frac{-v}{-u} \\implies m = \\frac{h'}{h} = -\\frac{v}{u}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Mirror equation and magnification with sign convention"
      },
      {
        "id": "phy-sub-9-2",
        "title": "9.2 Refraction, Snell's Law & Total Internal Reflection",
        "sections": [
          {
            "id": "phy-sec-9-2",
            "title": "Snell's Law, Apparent Depth & Total Internal Reflection (TIR)",
            "explanation": "When light travels from medium 1 to medium 2, Snell's law states n₁ sin i = n₂ sin r, where n₂₁ = n₂/n₁ = v₁/v₂. Due to refraction, an object submerged at real depth d_real in a denser medium (refractive index n) appears elevated to apparent depth d_app = d_real / n. When light travels from an optically denser medium to a rarer medium at an angle of incidence i greater than the critical angle i_c (where sin i_c = 1/n₁₂), refraction ceases completely and 100% of the light is reflected back into the denser medium — a phenomenon called Total Internal Reflection (TIR). TIR powers optical fibres, right-angled isosceles totally reflecting prisms (bending rays by 90° or 180°), diamond brilliance (i_c ≈ 24.4°), and mirages.",
            "questionFraming": "Conceptual — 'State the two essential conditions for Total Internal Reflection. Explain the working of an optical fibre with a diagram.'\nNumerical — 'Find the critical angle for a medium of given refractive index or minimum refractive index of a right-angled prism for total internal reflection.'",
            "textbookRef": "When light travels from an optically denser medium to a rarer medium, it bends away from the normal. At a particular angle of incidence called the critical angle i_c, the angle of refraction becomes 90°, so sin i_c = n₂/n₁ = 1/n₁₂. For i > i_c, Snell's law cannot be satisfied for any real angle r, and the incident ray undergoes total internal reflection with zero transmission loss. Optical fibres consist of a high-refractive-index glass/silica core surrounded by a lower-refractive-index cladding to guide signals by repeated TIR.",
            "keyFormulas": [
              "n₁ sin i = n₂ sin r  ⟹  n₂₁ = n₂ / n₁ = v₁ / v₂ = λ₁ / λ₂",
              "Apparent depth: d_app = d_real / n  (Normal shift Δd = d_real(1 − 1/n))",
              "Critical angle: sin i_c = n_rarer / n_denser = 1 / n",
              "Condition for TIR: (1) Denser → Rarer medium, (2) i > i_c"
            ],
            "derivations": "1. Critical Angle Formula ($\\sin i_c = 1/n$):\nConsider a ray travelling from an optically denser medium of refractive index $n_1 = n$ into a rarer medium (air, $n_2 = 1$). By Snell's law:\n$$n_1 \\sin i = n_2 \\sin r$$\nWhen the angle of incidence equals the critical angle ($i = i_c$), the refracted ray grazes the interface ($r = 90^\\circ, \\sin 90^\\circ = 1$):\n$$n \\sin i_c = 1 \\cdot \\sin 90^\\circ \\implies \\sin i_c = \\frac{1}{n} = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}}$$\nFor $i > i_c$, $\\sin r = n \\sin i > 1$, which is impossible, so Total Internal Reflection occurs.\n\n2. Apparent Depth Relation ($d_{\\text{app}} = d_{\\text{real}}/n$):\nFor near-normal viewing (small angles $i, r$), $\\sin i \\approx \\tan i = \\frac{x}{d_{\\text{real}}}$ and $\\sin r \\approx \\tan r = \\frac{x}{d_{\\text{app}}}$.\nBy Snell's law ($n \\sin i = 1 \\cdot \\sin r$):\n$$n \\left(\\frac{x}{d_{\\text{real}}}\\right) = \\frac{x}{d_{\\text{app}}} \\implies d_{\\text{app}} = \\frac{d_{\\text{real}}}{n}$$",
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Total Internal Reflection conditions, optical fibres, and critical angle numericals"
      },
      {
        "id": "phy-sub-9-3",
        "title": "9.3 Refraction at Spherical Surfaces & Lens Maker's Formula",
        "sections": [
          {
            "id": "phy-sec-9-3",
            "title": "Refraction at Spherical Surface, Lens Maker's Formula & Thin Lenses in Contact",
            "explanation": "For a single spherical refracting interface of radius R separating media of refractive indices n₁ (incident side) and n₂ (refracting side), paraxial rays satisfy n₂/v − n₁/u = (n₂ − n₁)/R. Applying this formula successively to the two spherical surfaces (R₁ and R₂) of a thin lens yields the Lens Maker's Formula: 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂) and the thin lens equation 1/v − 1/u = 1/f. Optical power P = 1/f (in metres) has SI unit dioptre (D). When thin lenses are placed in contact, their powers add algebraically: P = P₁ + P₂.",
            "questionFraming": "Derivation — 'Derive the relation n₂/v − n₁/u = (n₂ − n₁)/R for refraction at a convex spherical surface, and hence deduce the Lens Maker's Formula 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂).'\nNumerical — 'A biconvex lens of glass (n = 1.5) is immersed in a liquid of refractive index n_l; find its new focal length and nature.'",
            "textbookRef": "Refraction at a single spherical surface gives n₂/v − n₁/u = (n₂ − n₁)/R. Treating a thin lens as two refracting surfaces where the image formed by the first surface acts as a virtual object for the second surface leads to the Lens Maker's Formula: 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂), where n₂₁ = n_lens / n_medium. For lenses in contact, 1/f = 1/f₁ + 1/f₂ or P = P₁ + P₂, and total magnification is m = m₁ × m₂.",
            "keyFormulas": [
              "n₂ / v − n₁ / u = (n₂ − n₁) / R",
              "1 / f = (n₂ / n₁ − 1) · (1 / R₁ − 1 / R₂)  [Lens Maker's Formula]",
              "1 / v − 1 / u = 1 / f  and  m = h' / h = +v / u",
              "Power: P = 1 / f(m)  [in dioptre D];  P_eq = P₁ + P₂,  1/f_eq = 1/f₁ + 1/f₂"
            ],
            "derivations": "1. Refraction at a Single Spherical Surface:\nConsider a point object $O$ in medium $n_1$ on the principal axis of a convex spherical surface of radius $R$ ($C$ is centre of curvature, $P$ is pole, $N$ is point of incidence with normal $CN$). The refracted ray in medium $n_2$ forms a real image $I$.\nBy exterior angle theorem in $\\triangle NOC$ and $\\triangle NIC$:\n$$i = \\angle NOM + \\angle NCM, \\quad \\angle NCM = r + \\angle NIM \\implies r = \\angle NCM - \\angle NIM$$\nFor paraxial rays ($M \\to P$), using small-angle approximations:\n$$\\angle NOM \\approx \\frac{NM}{OM} = \\frac{NM}{-u}, \\quad \\angle NCM \\approx \\frac{NM}{MC} = \\frac{NM}{+R}, \\quad \\angle NIM \\approx \\frac{NM}{MI} = \\frac{NM}{+v}$$\nBy Snell's law for small angles ($n_1 i \\approx n_2 r$):\n$$n_1(\\angle NOM + \\angle NCM) = n_2(\\angle NCM - \\angle NIM)$$\nSubstituting the paraxial expressions and cancelling $NM$:\n$$n_1\\left(\\frac{1}{-u} + \\frac{1}{R}\\right) = n_2\\left(\\frac{1}{R} - \\frac{1}{v}\\right) \\implies \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$$\n\n2. Lens Maker's Formula:\nA thin lens of refractive index $n_2$ in medium $n_1$ consists of two spherical surfaces of radii $R_1$ and $R_2$.\n- Stage 1 (Refraction at first surface $ABC$, medium $n_1 \\to n_2$, image at $I_1$ at distance $v_1$):\n$$\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} \\quad \\text{--- (1)}$$\n- Stage 2 (Refraction at second surface $ADC$, medium $n_2 \\to n_1$, $I_1$ acts as virtual object, final image $I$ at $v$):\n$$\\frac{n_1}{v} - \\frac{n_2}{v_1} = \\frac{n_1 - n_2}{R_2} = -\\frac{n_2 - n_1}{R_2} \\quad \\text{--- (2)}$$\nAdding (1) and (2) and dividing by $n_1$:\n$$\\frac{1}{v} - \\frac{1}{u} = \\left(\\frac{n_2}{n_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$\nFor an object at infinity ($u = \\infty$), the image forms at focus ($v = f$), giving the Lens Maker's Formula:\n$$\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Most frequently asked 5-mark derivation in CBSE Ray Optics"
      },
      {
        "id": "phy-sub-9-4",
        "title": "9.4 Refraction and Dispersion through a Prism",
        "sections": [
          {
            "id": "phy-sec-9-4",
            "title": "Prism Deviation Formula, Minimum Deviation & Dispersion",
            "explanation": "For a ray passing through a triangular prism of refracting angle A, the angle of deviation δ satisfies δ = i + e − A, where A = r₁ + r₂. As the angle of incidence i is increased, δ first decreases, reaches a unique minimum value δ_m (angle of minimum deviation) when the ray passes symmetrically through the prism (i = e and r₁ = r₂ = A/2), and then increases. At minimum deviation, the refractive index of the prism is n = sin((A + δ_m)/2) / sin(A/2). For a thin prism (small A), δ_m ≈ (n − 1)A.",
            "questionFraming": "Derivation — 'Plot a graph showing the variation of angle of deviation with angle of incidence for a prism, and derive the prism formula n = sin((A + δ_m)/2) / sin(A/2).'\nNumerical — 'A ray of light incident at 45° on an equilateral prism suffers minimum deviation; find the angle of minimum deviation and refractive index.'",
            "textbookRef": "In a prism of angle A, the sum of internal angles of refraction equals the prism angle (r₁ + r₂ = A), and total deviation is δ = i + e − A. At the position of minimum deviation δ = δ_m, the refracted ray inside the prism is parallel to its base (for an equilateral/isosceles prism), with i = e and r₁ = r₂ = A/2. Applying Snell's law yields n₂₁ = sin((A + δ_m)/2) / sin(A/2).",
            "keyFormulas": [
              "r₁ + r₂ = A",
              "δ = i + e − A",
              "At minimum deviation (δ = δ_m): i = e = (A + δ_m)/2  and  r₁ = r₂ = A/2",
              "n = sin((A + δ_m) / 2) / sin(A / 2)",
              "Thin prism (A < 10°): δ_m ≈ (n − 1)A"
            ],
            "derivations": "1. Prism Geometry Relations:\nConsider a ray $PQ$ incident at angle $i$ on face $AB$ of a prism of angle $A$, refracted along $QR$ (angles $r_1, r_2$ with normals intersecting at $N$), and emerging along $RS$ at angle $e$.\nIn cyclic quadrilateral $AQNR$, since normals at $Q$ and $R$ are perpendicular to the faces:\n$$A + \\angle QNR = 180^\\circ \\quad \\text{--- (1)}$$\nIn $\\triangle QNR$:\n$$r_1 + r_2 + \\angle QNR = 180^\\circ \\quad \\text{--- (2)}$$\nComparing (1) and (2) gives:\n$$r_1 + r_2 = A \\quad \\text{--- (3)}$$\nTotal deviation $\\delta$ is the exterior angle of $\\triangle MQR$ formed by extended incident and emergent rays:\n$$\\delta = (i - r_1) + (e - r_2) = (i + e) - (r_1 + r_2) \\implies \\delta = i + e - A \\quad \\text{--- (4)}$$\n\n2. Refractive Index at Minimum Deviation:\nAt minimum deviation $\\delta = \\delta_m$, symmetry requires $i = e$ and $r_1 = r_2 = r$.\nFrom (3) and (4):\n$$2r = A \\implies r = \\frac{A}{2}, \\quad \\text{and} \\quad \\delta_m = 2i - A \\implies i = \\frac{A + \\delta_m}{2}$$\nApplying Snell's law at the first surface ($n = \\frac{\\sin i}{\\sin r}$):\n$$n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Prism formula derivation and i-δ curve are staple board questions"
      },
      {
        "id": "phy-sub-9-5",
        "title": "9.5 Optical Instruments: Microscopes & Telescopes",
        "sections": [
          {
            "id": "phy-sec-9-5",
            "title": "Simple Microscope, Compound Microscope & Astronomical Telescopes",
            "explanation": "A simple microscope (magnifying glass) is a converging lens of short focal length giving m = 1 + D/f when the image is at the near point (D = 25 cm) and m = D/f when at infinity (normal adjustment). A compound microscope uses a short-focal-length, small-aperture objective (f_o) and a larger-aperture eyepiece (f_e) to achieve total magnification m = m_o × m_e = (v_o/u_o)(1 + D/f_e) ≈ (L/f_o)(1 + D/f_e). An astronomical refracting telescope uses an objective of large focal length and large aperture (for high light-gathering power and resolving power) and an eyepiece of short focal length, with m = f_o/f_e in normal adjustment (L = f_o + f_e) and m = (f_o/f_e)(1 + f_e/D) at the near point. Cassegrain reflecting telescopes use a large parabolic concave mirror objective to eliminate chromatic and spherical aberrations.",
            "questionFraming": "Derivation — 'Draw a labelled ray diagram of a compound microscope (or astronomical telescope) forming an image at the least distance of distinct vision D, and derive the expression for its magnifying power.'\nConceptual — 'State three advantages of a reflecting (Cassegrain) telescope over a refracting telescope.'",
            "textbookRef": "The magnifying power m of an optical instrument is the ratio of the angle β subtended at the eye by the final image to the angle α subtended by the object directly (at D for microscopes, at infinity for telescopes). For a compound microscope, m = (v_o/u_o)(1 + D/f_e) at near point and (v_o/u_o)(D/f_e) at infinity. For a telescope, m = f_o/f_e at infinity and (f_o/f_e)(1 + f_e/D) at near point. Reflecting telescopes eliminate chromatic aberration because mirrors reflect all wavelengths equally.",
            "keyFormulas": [
              "Simple Microscope: m = 1 + D/f (at near point D = 25 cm);  m = D/f (at infinity)",
              "Compound Microscope: m = (v_o / u_o)(1 + D / f_e) ≈ (L / f_o)(1 + D / f_e)  [at D]",
              "Compound Microscope (Normal Adjustment): m = (v_o / u_o)(D / f_e) ≈ (L / f_o)(D / f_e)",
              "Astronomical Telescope (Normal Adjustment): m = f_o / f_e,  Tube length L = f_o + f_e",
              "Astronomical Telescope (Image at D): m = (f_o / f_e)(1 + f_e / D)"
            ],
            "derivations": "1. Magnifying Power of a Compound Microscope:\nAngular magnification is defined as $m = \\frac{\\tan\\beta}{\\tan\\alpha}$, where $\\tan\\alpha = \\frac{h}{D}$ (object height $h$ held at least distance of distinct vision $D$) and $\\tan\\beta = \\frac{h'}{u_e} = \\frac{h''}{D}$ (final image at $D$).\nThus:\n$$m = \\frac{h''/D}{h/D} = \\frac{h''}{h} = \\left(\\frac{h'}{h}\\right)\\left(\\frac{h''}{h'}\\right) = m_o \\times m_e$$\nHere, linear magnification of the objective is $m_o = \\frac{v_o}{|u_o|}$ (or $\\approx \\frac{L}{f_o}$ where $L$ is tube length), and eyepiece acts as a simple magnifier:\n- When final image is at $D$: $m_e = 1 + \\frac{D}{f_e} \\implies m = \\frac{v_o}{|u_o|}\\left(1 + \\frac{D}{f_e}\\right)$\n- When final image is at $\\infty$: $m_e = \\frac{D}{f_e} \\implies m = \\frac{v_o}{|u_o|}\\left(\\frac{D}{f_e}\\right)$\n\n2. Magnifying Power of an Astronomical Telescope:\nLet the objective form a real inverted intermediate image $A'B'$ of height $h'$ at its second focus ($f_o$). Then:\n$$\\tan\\alpha = \\frac{h'}{f_o}, \\quad \\tan\\beta = \\frac{h'}{|u_e|} \\implies m = \\frac{\\tan\\beta}{\\tan\\alpha} = \\frac{f_o}{|u_e|}$$\n- In Normal Adjustment (final image at $\\infty$, $|u_e| = f_e$):\n$$m = \\frac{f_o}{f_e}, \\quad L = f_o + f_e$$\n- When final image is at near point $D$ ($v_e = -D, u_e = -|u_e|$): by lens equation $\\frac{1}{-D} - \\frac{1}{-|u_e|} = \\frac{1}{f_e} \\implies \\frac{1}{|u_e|} = \\frac{1}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$, giving:\n$$m = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Ray diagrams and magnifying power derivations of Compound Microscope & Telescope"
      }
    ]
  },
  {
    "id": "phy-ch-10",
    "number": 10,
    "title": "Wave Optics",
    "tag": "Optics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-10-1",
        "title": "10.1 Huygens Principle & Wavefront Types",
        "sections": [
          {
            "id": "phy-sec-10-1",
            "title": "Wavefronts & Huygens' Geometrical Construction",
            "explanation": "A wavefront is the locus of all points in a medium that oscillate in the same phase at a given instant. Light rays are always perpendicular to the wavefront and point in the direction of wave propagation. A point source in an isotropic medium emits spherical wavefronts; a linear source emits cylindrical wavefronts; and a source at infinity (or parallel beam) forms plane wavefronts. According to Huygens' principle, every point on a primary wavefront acts as a source of secondary spherical wavelets travelling at the wave speed v in that medium, and the forward common tangent envelope to these wavelets at a later time Δt gives the new wavefront.",
            "questionFraming": "Conceptual — 'State Huygens' principle. Sketch the wavefronts emerging from (a) a point source, (b) a convex lens with a point source at its focus, and (c) a prism illuminated by a plane wavefront.'",
            "textbookRef": "A wavefront is defined as a surface of constant phase. The speed with which the wavefront moves outwards from the source is the speed of the wave, and the energy of the wave travels in a direction perpendicular to the wavefront (along rays). Huygens' principle is a geometrical construction to determine the shape of a wavefront at a time t = τ given its shape at t = 0: draw spheres of radius vτ from each point of the primary wavefront and take their forward envelope.",
            "keyFormulas": [
              "Radius of secondary wavelet after time τ: r = v · τ",
              "Ray direction ⊥ Wavefront surface (Phase difference Δφ = 0 on a wavefront)",
              "Point source → Spherical WF;  Line source → Cylindrical WF;  Distant source → Plane WF"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-10-2",
        "title": "10.2 Reflection & Refraction of Plane Waves using Huygens Principle",
        "sections": [
          {
            "id": "phy-sec-10-2",
            "title": "Proof of Laws of Reflection and Snell's Law of Refraction by Wave Theory",
            "explanation": "Using Huygens' construction for a plane wavefront AB incident obliquely on an interface, the secondary wavelet from point A travels for the same time τ as the wavelet from B takes to reach the boundary at C. For reflection in the same medium, both wavelets travel distance vτ, yielding congruent right triangles and proving i = r. For refraction from medium 1 (speed v₁) into medium 2 (speed v₂), the incident wavelet travels BC = v₁τ while the refracted wavelet travels AE = v₂τ, proving sin i / sin r = v₁ / v₂ = n₂ / n₁. Crucially, this proves that light travels slower in an optically denser medium (v₂ < v₁ when n₂ > n₁), overturning Newton's corpuscular prediction.",
            "questionFraming": "Derivation — 'Using Huygens' principle, draw a diagram showing the refraction (or reflection) of a plane wavefront at an interface and verify Snell's law of refraction (or the law of reflection).'",
            "textbookRef": "When a plane wavefront AB is incident at angle i on an interface separating medium 1 (speed v₁) and medium 2 (speed v₂), the time τ taken by the disturbance to travel from B to C in medium 1 causes a secondary spherical wavelet of radius v₂τ to spread from A in medium 2. Drawing the tangent CE from C to this sphere gives the refracted wavefront CE inclined at angle r, from which sin i / sin r = v₁/v₂ = n₂/n₁.",
            "keyFormulas": [
              "Law of Reflection: sin i = sin r  ⟹  i = r",
              "Snell's Law via Wave Theory: sin i / sin r = v₁ / v₂ = (c / n₁) / (c / n₂) = n₂ / n₁",
              "During refraction: Frequency ν remains constant;  λ₂ / λ₁ = v₂ / v₁ = n₁ / n₂"
            ],
            "derivations": "1. Proof of Snell's Law of Refraction:\nLet $XY$ be the plane interface separating medium 1 (wave speed $v_1$, refractive index $n_1 = c/v_1$) and medium 2 (wave speed $v_2$, refractive index $n_2 = c/v_2$). Let a plane wavefront $AB$ be incident at angle $i$ ($\angle BAC = i$).\nLet $\\tau$ be the time taken by the wavefront to travel distance $BC$ in medium 1:\n$$BC = v_1 \\tau$$\nIn the same time $\\tau$, secondary wavelets from $A$ travel into medium 2, forming a hemisphere of radius:\n$$AE = v_2 \\tau$$\nDraw tangent plane $CE$ from $C$ to this hemisphere ($\\angle AEC = 90^\\circ$); then $CE$ is the refracted wavefront making angle $r$ ($\\angle ECA = r$) with the surface $XY$.\nFrom right-angled triangles $\\triangle ABC$ and $\\triangle AEC$ sharing hypotenuse $AC$:\n$$\\sin i = \\frac{BC}{AC} = \\frac{v_1 \\tau}{AC}, \\quad \\sin r = \\frac{AE}{AC} = \\frac{v_2 \\tau}{AC}$$\nDividing the two equations:\n$$\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{c/n_1}{c/n_2} = \\frac{n_2}{n_1} \\implies n_1 \\sin i = n_2 \\sin r$$\n\n2. Proof of Law of Reflection ($i = r$):\nFor reflection at mirror $XY$, in time $\\tau$ while $B$ reaches $C$ ($BC = v\\tau$), the secondary wavelet from $A$ reflects into the same medium with radius $AE = v\\tau$.\nIn right triangles $\\triangle EAC$ and $\\triangle BAC$: $\\angle AEC = \\angle ABC = 90^\\circ$, $AE = BC = v\\tau$, and $AC$ is common.\nTherefore, $\\triangle EAC \\cong \\triangle BAC$ (RHS congruence), which proves:\n$$\\angle i = \\angle r$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Huygens geometric proof of Snell's law is a classic 3-mark CBSE board question"
      },
      {
        "id": "phy-sub-10-3",
        "title": "10.3 Coherent Sources, Superposition & Interference of Light",
        "sections": [
          {
            "id": "phy-sec-10-3",
            "title": "Coherence, Resultant Intensity & Conditions for Constructive/Destructive Interference",
            "explanation": "Two sources are coherent if they emit light waves of the same frequency with a constant (or zero) phase difference over time. Two independent light bulbs can never be coherent because atomic emissions occur randomly every ~10⁻⁸ s, causing rapid phase fluctuations that average the intensity to I₁ + I₂. For coherent waves with phase difference φ (related to path difference Δx by φ = (2π/λ)Δx), the resultant intensity is I = I₁ + I₂ + 2√(I₁I₂)cos φ. If I₁ = I₂ = I₀, then I = 4I₀ cos²(φ/2). Constructive interference (bright fringe, I_max = 4I₀) occurs when Δx = nλ (φ = 2nπ), and destructive interference (dark fringe, I_min = 0) occurs when Δx = (n + 1/2)λ (φ = (2n + 1)π).",
            "questionFraming": "Derivation — 'Two coherent waves of intensities I₁ and I₂ superpose at a point with phase difference φ. Derive the resultant intensity I = 4I₀ cos²(φ/2) when I₁ = I₂ = I₀.'\nNumerical — 'In YDSE, find the ratio of maximum to minimum intensity if the slit widths (or amplitudes) are in a given ratio.'",
            "textbookRef": "According to the superposition principle, the resultant displacement at a point is the vector sum of the displacements due to individual waves. Because intensity is proportional to the square of amplitude (I ∝ a²), coherent superposition redistributes energy in space from dark minima (I_min = (√I₁ − √I₂)²) to bright maxima (I_max = (√I₁ + √I₂)²), while the average intensity (I_max + I_min)/2 = I₁ + I₂ strictly obeys conservation of energy.",
            "keyFormulas": [
              "Phase difference vs Path difference: Δφ = (2π / λ) · Δx",
              "Resultant Intensity: I = I₁ + I₂ + 2√(I₁I₂) cos φ",
              "For equal intensities (I₁ = I₂ = I₀): I = 4I₀ cos²(φ / 2)",
              "Constructive (Maxima): Δx = nλ,  Δφ = 2nπ  (n = 0, 1, 2, ...)",
              "Destructive (Minima): Δx = (n + 1/2)λ,  Δφ = (2n + 1)π  (n = 0, 1, 2, ...)",
              "I_max / I_min = (√I₁ + √I₂)² / (√I₁ − √I₂)² = (a₁ + a₂)² / (a₁ − a₂)²"
            ],
            "derivations": "1. Resultant Amplitude and Intensity in Coherent Superposition:\nLet two coherent waves arriving at a point have displacements:\n$$y_1 = a_1 \\cos(\\omega t), \\quad y_2 = a_2 \\cos(\\omega t + \\phi)$$\nBy the principle of superposition, $y = y_1 + y_2 = (a_1 + a_2\\cos\\phi)\\cos(\\omega t) - (a_2\\sin\\phi)\\sin(\\omega t) = A\\cos(\\omega t + \\theta)$.\nSquaring and adding the orthogonal amplitude components gives the resultant squared amplitude:\n$$A^2 = (a_1 + a_2\\cos\\phi)^2 + (a_2\\sin\\phi)^2 = a_1^2 + a_2^2 + 2a_1a_2\\cos\\phi$$\nSince intensity is directly proportional to the square of amplitude ($I = kA^2$):\n$$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$$\n\n2. Special Case of Identical Coherent Sources ($I_1 = I_2 = I_0$):\n$$I = I_0 + I_0 + 2I_0\\cos\\phi = 2I_0(1 + \\cos\\phi) = 4I_0\\cos^2\\left(\\frac{\\phi}{2}\\right)$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Coherent intensity formula I = 4I₀cos²(φ/2) and constructive/destructive conditions"
      },
      {
        "id": "phy-sub-10-4",
        "title": "10.4 Young's Double Slit Experiment (YDSE) & Fringe Width",
        "sections": [
          {
            "id": "phy-sec-10-4",
            "title": "Young's Double Slit Experiment, Fringe Positions & Fringe Width",
            "explanation": "In Young's Double Slit Experiment (YDSE), monochromatic light of wavelength λ illuminates two narrow coherent slits S₁ and S₂ separated by a small distance d, producing alternating bright and dark interference fringes on a screen at distance D (where D >> d). At a point P at distance x_n from the central maximum, the path difference is Δx ≈ x_n d / D. Thus, the n-th bright fringe occurs at x_n = nλD/d and the n-th dark fringe occurs at x_n = (n + 1/2)λD/d. All bright and dark fringes have equal linear fringe width β = λD/d and angular fringe width θ₀ = β/D = λ/d (independent of D). If the entire apparatus is immersed in a medium of refractive index μ, the wavelength and fringe width shrink to β' = β/μ.",
            "questionFraming": "Numerical — 'In YDSE, find the fringe width, position of the n-th bright/dark fringe, or shift in fringe width when immersed in water.'\nConceptual — 'What happens to the interference pattern in YDSE if (a) monochromatic source is replaced by white light, (b) slit separation d is increased, or (c) the apparatus is immersed in a liquid?'",
            "textbookRef": "For D >> d and x << D, the path difference between waves from S₁ and S₂ reaching point P(x) on the screen is S₂P − S₁P ≈ xd/D. Bright fringes occur at x_n = nλD/d (n = 0, ±1, ±2, ...) and dark fringes at x_n = (n + 1/2)λD/d. The distance between any two successive bright or dark fringes is the fringe width β = λD/d.",
            "keyFormulas": [
              "Path difference: Δx = S₂P − S₁P = d sin θ ≈ x · d / D",
              "Position of n-th Bright Fringe: x_n = n λ D / d  (n = 0, 1, 2, ...)",
              "Position of n-th Dark Fringe: x_n = (n − 1/2) λ D / d  (for n = 1, 2, ...; or (n + 1/2)λD/d for n = 0, 1, ...)",
              "Linear Fringe Width: β = x_(n+1) − x_n = λ D / d",
              "Angular Fringe Width: θ = β / D = λ / d;  In medium μ: β' = β / μ,  θ' = θ / μ"
            ],
            "derivations": "1. Path Difference and Fringe Positions in YDSE:\nLet slits $S_1$ and $S_2$ be separated by $d$, and let the screen be at distance $D \\gg d$. Consider point $P$ at distance $x$ from the central axis $O$.\nBy Pythagoras' theorem:\n$$(S_2 P)^2 - (S_1 P)^2 = \\left[D^2 + \\left(x + \\frac{d}{2}\\right)^2\\right] - \\left[D^2 + \\left(x - \\frac{d}{2}\\right)^2\\right] = 2xd$$\nFactoring the left side as $(S_2 P - S_1 P)(S_2 P + S_1 P)$ and noting that for $x, d \\ll D$, $S_2 P + S_1 P \\approx 2D$:\n$$\\Delta x = S_2 P - S_1 P = \\frac{2xd}{2D} = \\frac{xd}{D}$$\n- For Bright Fringes (Constructive): $\\Delta x = n\\lambda \\implies x_n = \\frac{n\\lambda D}{d}$ ($n = 0, 1, 2, \\dots$)\n- For Dark Fringes (Destructive): $\\Delta x = \\left(n + \\frac{1}{2}\\right)\\lambda \\implies x_n = \\left(n + \\frac{1}{2}\\right)\\frac{\\lambda D}{d}$ ($n = 0, 1, 2, \\dots$)\n\n2. Fringe Width ($\\beta$):\nThe separation between any two consecutive bright (or dark) fringes is:\n$$\\beta = x_{n+1} - x_n = \\frac{(n+1)\\lambda D}{d} - \\frac{n\\lambda D}{d} = \\frac{\\lambda D}{d}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "YDSE fringe width formula and parameter-variation questions appear every year"
      },
      {
        "id": "phy-sub-10-5",
        "title": "10.5 Diffraction Due to a Single Slit",
        "sections": [
          {
            "id": "phy-sec-10-5",
            "title": "Single-Slit Diffraction Pattern, Central Maximum & Interference vs Diffraction",
            "explanation": "Diffraction is the bending of waves around the sharp edges of an obstacle or aperture of size comparable to the wavelength λ, due to the interference of secondary Huygens wavelets originating from different parts of the same unobstructed wavefront. For a single slit of width a, the central point θ = 0 is the brightest central maximum because all wavelets arrive in phase. The n-th secondary minimum (dark fringe) occurs at a sin θ = nλ (n = 1, 2, 3, ...) by dividing the slit into 2n equal zones that cancel pairwise. Weak secondary maxima occur midway at a sin θ = (n + 1/2)λ with rapidly decreasing intensity. The central maximum has twice the angular width (2θ₁ = 2λ/a) and twice the linear width (W_c = 2λD/a) of any secondary fringe.",
            "questionFraming": "Conceptual — 'Explain why a sin θ = nλ gives minima in single-slit diffraction whereas d sin θ = nλ gives maxima in YDSE. Compare the interference and diffraction patterns.'\nNumerical — 'Light of wavelength 600 nm falls on a single slit of width 0.2 mm; find the angular width and linear width of the central maximum on a screen 2 m away.'",
            "textbookRef": "In single-slit diffraction (slit width a), dividing the slit into two halves of width a/2 shows that at angle θ where (a/2)sin θ = λ/2 (i.e., a sin θ = λ), every wavelet in the upper half cancels a corresponding wavelet in the lower half, producing the first minimum. Generally, minima occur at θ ≈ nλ/a (n = ±1, ±2, ...) and secondary maxima at θ ≈ (n + 1/2)λ/a. The central maximum spans from −λ/a to +λ/a, giving angular width 2λ/a and linear width 2λD/a.",
            "keyFormulas": [
              "Condition for n-th Secondary Minimum: a sin θ_n = nλ  ⟹  θ_n ≈ nλ / a  (n = 1, 2, 3, ...)",
              "Condition for n-th Secondary Maximum: a sin θ_n = (n + 1/2)λ  (n = 1, 2, 3, ...)",
              "Angular Width of Central Maximum: 2θ₁ = 2λ / a",
              "Linear Width of Central Maximum: W_c = 2y₁ = 2λD / a = 2β"
            ],
            "derivations": "1. Condition for First Minimum and Width of Central Maximum:\nConsider a parallel beam of wavelength $\\lambda$ incident normally on a single slit $LN$ of width $a$. At the central point $O$ ($\theta = 0$), all secondary wavelets arrive in phase to form the bright Central Maximum.\nAt angle $\\theta$ where the total path difference between the extreme edges $L$ and $N$ is $a\\sin\\theta = \\lambda$, divide the slit into two equal halves $LM$ and $MN$ of width $a/2$. For every point in $LM$, there is a corresponding point in $MN$ separated by $a/2$, whose path difference is:\n$$\\Delta x = \\frac{a}{2}\\sin\\theta = \\frac{\\lambda}{2}$$\nThese pairs interfere destructively, producing the First Minimum at:\n$$a\\sin\\theta_1 = \\lambda \\implies \\theta_1 \\approx \\frac{\\lambda}{a}, \\quad y_1 = D\\theta_1 = \\frac{\\lambda D}{a}$$\nIn general, dividing the slit into $2n$ equal parts gives the $n$-th minimum at $a\\sin\\theta_n = n\\lambda$.\n\n2. Width of Central Maximum:\nSince the central maximum extends between the first-order minima on either side ($-\\theta_1$ to $+\\theta_1$):\n$$\\text{Angular Width } = 2\\theta_1 = \\frac{2\\lambda}{a}, \\quad \\text{Linear Width } W_c = 2y_1 = \\frac{2\\lambda D}{a}$$",
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Single-slit central maximum width and interference vs diffraction comparison"
      }
    ]
  },
  {
    "id": "phy-ch-11",
    "number": 11,
    "title": "Dual Nature of Radiation and Matter",
    "tag": "Modern Physics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-11-1",
        "title": "11.1 Work Function, Electron Emission & Photoelectric Effect",
        "sections": [
          {
            "id": "phy-sec-11-1",
            "title": "Work Function, Types of Electron Emission & Discovery of Photoelectric Effect",
            "explanation": "Free electrons inside a metal are prevented from escaping the surface by an attractive surface barrier potential. The minimum energy required by an electron to just escape from the metal surface with zero kinetic energy is called the work function (φ₀), typically measured in electron-volts (1 eV = 1.6 × 10⁻¹⁹ J). Work function depends on the nature of the metal and its surface properties — Caesium (Cs) has the lowest work function (2.14 eV) and Platinum (Pt) has the highest (5.65 eV). Electron emission occurs via three mechanisms: (1) Thermionic emission (heating), (2) Field emission (applying a strong electric field ~10⁸ V/m), and (3) Photoelectric emission (illuminating with light of frequency ν > ν₀). Discovered by Heinrich Hertz and investigated by Hallwachs and Lenard, the photoelectric effect is the instantaneous emission of photoelectrons when radiation of suitably high frequency strikes a metal.",
            "questionFraming": "Conceptual — 'Define work function of a metal and state the factors on which it depends. Why are alkali metals like Caesium preferred for photosensitive emitter plates?'",
            "textbookRef": "A certain minimum amount of energy is required to be given to an electron to pull it out from the surface of the metal. This minimum energy required by an electron to escape from the metal surface is called the work function of the metal, denoted by φ₀ and measured in eV (1 eV = 1.602 × 10⁻¹⁹ J). Alkali metals such as caesium, potassium, and sodium have low work functions and exhibit photoelectric emission even with visible light, whereas zinc, cadmium, and magnesium respond only to ultraviolet light.",
            "keyFormulas": [
              "1 eV = 1.602 × 10⁻¹⁹ J",
              "Work Function: φ₀ = hν₀ = hc / λ₀",
              "φ₀(Cs) = 2.14 eV (lowest)  <  φ₀(K) = 2.30 eV  <  φ₀(Na) = 2.75 eV  <  φ₀(Pt) = 5.65 eV (highest)"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-11-2",
        "title": "11.2 Experimental Study of Photoelectric Effect",
        "sections": [
          {
            "id": "phy-sec-11-2",
            "title": "Laws of Photoelectric Emission & Graphs of Intensity, Stopping Potential and Frequency",
            "explanation": "In Lenard and Millikan's experimental setup, light of frequency ν > ν₀ and intensity I falls on photosensitive emitter plate C, and emitted photoelectrons are collected by plate A at variable potential V. Key experimental laws and graphs: (1) For fixed ν > ν₀ and accelerating potential, photoelectric current is directly proportional to intensity I (since intensity ∝ number of photons/s). (2) At fixed I and ν, increasing positive V saturates the current; making V negative retards electrons until at the stopping (cut-off) potential −V₀, even the most energetic photoelectrons are stopped (I = 0), so K_max = eV₀. (3) Stopping potential V₀ is completely independent of light intensity I. (4) V₀ increases linearly with incident frequency ν above the threshold frequency ν₀; below ν₀, no emission occurs regardless of intensity. (5) Emission is instantaneous (~10⁻⁹ s).",
            "questionFraming": "Conceptual/Graphical — 'Sketch and explain the graphs showing variation of (i) photoelectric current with intensity, (ii) photoelectric current with collector plate potential for (a) different intensities at constant frequency and (b) different frequencies at constant intensity, and (iii) stopping potential V₀ with frequency ν.'",
            "textbookRef": "For a given photosensitive material and frequency of incident radiation above the threshold frequency, the photoelectric current is directly proportional to the intensity of incident light, whereas the stopping potential V₀ (and hence maximum kinetic energy K_max = eV₀) depends linearly on frequency ν and is completely independent of intensity. Below the threshold frequency ν₀ (or above threshold wavelength λ₀), no photoelectric emission is possible however large the intensity may be.",
            "keyFormulas": [
              "Saturation Photocurrent i_sat ∝ Intensity I  (for ν > ν₀)",
              "Stopping Potential Relation: K_max = (1/2) m v_max² = eV₀",
              "V₀ is independent of Intensity I;  V₀ increases linearly with ν (for ν > ν₀)"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "The four experimental photoelectric graphs are tested in almost every board paper"
      },
      {
        "id": "phy-sub-11-3",
        "title": "11.3 Einstein's Photoelectric Equation & Photon Picture",
        "sections": [
          {
            "id": "phy-sec-11-3",
            "title": "Einstein's Photoelectric Equation, Failure of Wave Theory & Photon Properties",
            "explanation": "In 1905, Einstein explained the photoelectric effect using Planck's quantum hypothesis: radiation consists of discrete energy quanta (photons), each of energy E = hν = hc/λ and momentum p = E/c = h/λ. In a one-to-one collision, an electron absorbs a single photon's energy hν; part is used to overcome the work function φ₀ = hν₀ (plus any internal collision losses), so the most energetic surface electrons emerge with maximum kinetic energy K_max = eV₀ = hν − φ₀ = h(ν − ν₀). Writing V₀ = (h/e)ν − φ₀/e shows that the V₀ vs ν graph is a straight line with universal slope h/e (independent of metal) and y-intercept −φ₀/e. Classical wave theory failed because it predicted that K_max should increase with intensity, no threshold frequency should exist, and energy absorption over a large wavefront should cause a measurable time delay of hours.",
            "questionFraming": "Derivation/Conceptual — 'Write Einstein's photoelectric equation and use it to explain the laws of photoelectric emission. Why did classical wave theory fail to explain the photoelectric effect?'\nNumerical — 'From the graph of stopping potential V₀ vs frequency ν for two metals, find Planck's constant, threshold frequency, and work function.'",
            "textbookRef": "In Einstein's picture, photoelectric emission is the result of a one-photon–one-electron absorption event: K_max = hν − φ₀. Since K_max must be non-negative, photoelectric emission is possible only if hν ≥ φ₀, or ν ≥ ν₀ where ν₀ = φ₀/h. Moreover, eV₀ = hν − φ₀ gives V₀ = (h/e)ν − φ₀/e, predicting that the V₀ versus ν curve is a straight line with slope (h/e) independent of the nature of the material — verified experimentally by Millikan.",
            "keyFormulas": [
              "Photon Energy: E = hν = hc / λ  (hc ≈ 1242 eV·nm)",
              "Photon Momentum: p = E / c = hν / c = h / λ  (Rest mass of photon m₀ = 0)",
              "Einstein's Photoelectric Equation: K_max = eV₀ = hν − φ₀ = h(ν − ν₀) = hc(1/λ − 1/λ₀)",
              "Stopping Potential Line: V₀ = (h / e)ν − (φ₀ / e)  [Slope = h/e, x-intercept = ν₀, y-intercept = −φ₀/e]"
            ],
            "derivations": "1. Derivation of Einstein's Photoelectric Equation and $V_0$ vs $\\nu$ Linear Law:\nBy conservation of energy in a single photon-electron absorption event, a photon of energy $h\\nu$ transfers its entire energy to a bound electron. If the electron is right at the surface, it loses only the minimum escape energy (work function $\\phi_0 = h\\nu_0$) and emerges with maximum kinetic energy $K_{\\max}$:\n$$K_{\\max} = h\\nu - \\phi_0 = h(\\nu - \\nu_0) = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right)$$\nSince stopping potential $V_0$ satisfies $K_{\\max} = eV_0$:\n$$eV_0 = h\\nu - \\phi_0 \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}$$\nComparing with $y = mx + c$:\n- Slope $m = \\frac{\\Delta V_0}{\\Delta \\nu} = \\frac{h}{e}$ (universal constant for all metals)\n- Frequency-axis intercept ($V_0 = 0$): $\\nu = \\nu_0$ (threshold frequency)\n- Potential-axis intercept ($\\nu = 0$): $V_0 = -\\frac{\\phi_0}{e}$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Einstein's photoelectric equation, V₀-ν slope h/e, and 3 failures of wave theory"
      },
      {
        "id": "phy-sub-11-4",
        "title": "11.4 Wave Nature of Matter & de Broglie Wavelength",
        "sections": [
          {
            "id": "phy-sec-11-4",
            "title": "de Broglie Matter Waves & Wavelength of Accelerated Particles",
            "explanation": "In 1924, Louis de Broglie proposed that nature is symmetrical and moving material particles also possess wave-like character (matter waves). Extending the photon relation p = h/λ to a particle of mass m and velocity v (momentum p = mv, kinetic energy K = p²/2m = qV for charge q accelerated through potential V), the de Broglie wavelength is λ = h/p = h/(mv) = h/√(2mK) = h/√(2mqV). For an electron (m = 9.1 × 10⁻³¹ kg, q = e = 1.6 × 10⁻¹⁹ C) accelerated through V volts, λ = 1.227 / √V nm. Matter waves are negligible for macroscopic objects because their large mass makes λ unimaginably small (~10⁻³⁴ m), whereas for subatomic particles like electrons, λ (~0.1 nm) is comparable to atomic crystal spacing.",
            "questionFraming": "Derivation/Numerical — 'Obtain the expression for the de Broglie wavelength of a particle of mass m and charge q accelerated through a potential difference V. An electron and a proton (or alpha particle) have the same (i) kinetic energy or (ii) accelerating potential; compare their de Broglie wavelengths.'",
            "textbookRef": "de Broglie attributed a wave-like character of wavelength λ = h/p = h/(mv) to a material particle of momentum p. Expressing momentum in terms of kinetic energy K as p = √(2mK), and for a charged particle accelerated from rest through potential V where K = qV, we obtain λ = h/√(2mK) = h/√(2mqV). Substituting numerical constants for an electron yields λ = 1.227/√V nm.",
            "keyFormulas": [
              "λ = h / p = h / (mv) = h / √(2mK) = h / √(2mqV)",
              "For an electron accelerated through V volts: λ = 1.227 / √V nm = 12.27 / √V Å",
              "At same K: λ ∝ 1 / √m;  At same accelerating V: λ ∝ 1 / √(mq);  At same v: λ ∝ 1 / m"
            ],
            "derivations": "1. de Broglie Wavelength in Terms of Kinetic Energy and Potential:\nFor a photon of frequency $\\nu$ and wavelength $\\lambda$, energy is $E = h\\nu = pc$, so momentum is $p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$.\nde Broglie generalized this relation to any material particle of mass $m$ and speed $v$ (momentum $p = mv$):\n$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$\nSince kinetic energy $K = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$, we have $p = \\sqrt{2mK}$. If a particle of charge $q$ is accelerated from rest through potential difference $V$, then $K = qV$, giving:\n$$\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}$$\n\n2. Numerical Formula for an Electron:\nSubstituting $h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, and $e = 1.6 \\times 10^{-19}\\text{ C}$:\n$$\\lambda = \\frac{6.63 \\times 10^{-34}}{\\sqrt{2 \\times 9.1 \\times 10^{-31} \\times 1.6 \\times 10^{-19} \\times V}} = \\frac{1.227}{\\sqrt{V}} \\text{ nm}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "de Broglie wavelength ratios (electron vs proton vs alpha particle) are top CBSE numericals"
      }
    ]
  },
  {
    "id": "phy-ch-12",
    "number": 12,
    "title": "Atoms",
    "tag": "Modern Physics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-12-1",
        "title": "12.1 Alpha-Particle Scattering & Rutherford's Nuclear Model",
        "sections": [
          {
            "id": "phy-sec-12-1",
            "title": "Geiger-Marsden Experiment, Impact Parameter, Closest Approach & Limitations",
            "explanation": "In the Geiger-Marsden experiment (1911), a collimated beam of 5.5 MeV α-particles (²₄He²⁺ nuclei) from ²¹⁴₈₃Bi was directed at an ultra-thin gold foil (2.1 × 10⁻⁷ m). Most α-particles passed straight through (atom is mostly empty space), ~0.14% scattered by > 1°, and ~1 in 8000 rebounded by θ > 90°, leading Rutherford to discover the tiny (~10⁻¹⁵ m to 10⁻¹⁴ m), massive, positively charged nucleus. For a head-on collision (impact parameter b = 0, θ = 180°), kinetic energy K converts completely into electrostatic potential energy at the distance of closest approach r₀ = 2Ze² / (4πε₀K). Rutherford's model failed to explain: (1) atomic stability (accelerating revolving electrons should radiate EM waves continuously and spiral into the nucleus in ~10⁻⁸ s), and (2) discrete line spectra of atoms.",
            "questionFraming": "Conceptual/Numerical — 'State the observations and conclusions of the alpha-particle scattering experiment. Derive the expression for distance of closest approach r₀ and explain the two major limitations of Rutherford's nuclear model.'",
            "textbookRef": "The impact parameter b is the perpendicular distance of the initial velocity vector of the α-particle from the centre of the nucleus: b = (Ze² cot(θ/2)) / (4πε₀K). For b = 0, θ = π (head-on rebound), and the α-particle momentarily stops at distance of closest approach d = r₀ = (1/4πε₀)(2Ze²/K), providing an upper bound on nuclear radius.",
            "keyFormulas": [
              "Distance of Closest Approach (b = 0, θ = 180°): r₀ = (1 / 4πε₀) · (2Ze² / K) = (1 / 4πε₀) · (4Ze² / m v₀²)",
              "Impact Parameter: b = (Ze² cot(θ / 2)) / (4πε₀ K)",
              "Rutherford Scattering Distribution: N(θ) ∝ 1 / sin⁴(θ / 2)"
            ],
            "derivations": "1. Distance of Closest Approach ($r_0$):\nConsider an $\\alpha$-particle of charge $q_1 = +2e$ and initial kinetic energy $K = \\frac{1}{2}mv_0^2$ directed head-on ($b = 0$) towards a heavy stationary target nucleus of atomic number $Z$ (charge $q_2 = +Ze$).\nAs the $\\alpha$-particle approaches the nucleus, Coulomb repulsion decelerates it until it momentarily comes to rest ($v = 0$) at distance $r_0$ before rebounding by $180^\\circ$.\nBy conservation of mechanical energy ($K_i + U_i = K_f + U_f$):\n$$K + 0 = 0 + \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{r_0} \\implies r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{K}$$",
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Distance of closest approach r₀ and limitations of Rutherford's model"
      },
      {
        "id": "phy-sub-12-2",
        "title": "12.2 Bohr's Model of Hydrogen Atom: Postulates, Radii & Energy",
        "sections": [
          {
            "id": "phy-sec-12-2",
            "title": "Bohr's Three Postulates, Quantized Radii, Speeds & Total Energy",
            "explanation": "Niels Bohr (1913) resolved Rutherford's stability problem for hydrogenic (one-electron) atoms using three postulates: (1) Electrons revolve in stable circular 'stationary orbits' without radiating energy, with electrostatic attraction providing centripetal force: mv²/r = Ze²/(4πε₀r²); (2) Only those orbits are permitted for which orbital angular momentum is an integral multiple of h/2π: L = mvr = nh/2π (n = 1, 2, 3, ...); (3) A photon of energy hν = E_i − E_f is emitted or absorbed only when an electron jumps between stationary orbits. Combining Postulates 1 and 2 yields orbit radius r_n = (ε₀h²n²)/(πme²Z) = 0.529(n²/Z) Å, orbital speed v_n = e²/(2ε₀hn) = (c/137)(Z/n), and total energy E_n = −K_n = U_n/2 = −13.6(Z²/n²) eV. Negative total energy signifies that the electron is bound to the nucleus.",
            "questionFraming": "Derivation — 'State Bohr's postulates of the hydrogen atom. Using them, derive expressions for (i) radius of the n-th stationary orbit r_n and (ii) total energy E_n of the electron in the n-th orbit. What does the negative sign of total energy signify?'",
            "textbookRef": "From mv_n²/r_n = e²/(4πε₀r_n²) and mv_nr_n = nh/(2π) for hydrogen (Z = 1), eliminating r_n gives v_n = e²/(2ε₀nh), and substituting v_n back gives r_n = n²h²ε₀/(πme²) = n²a₀, where the Bohr radius is a₀ = 0.529 Å. Kinetic energy is K_n = e²/(8πε₀r_n), potential energy is U_n = −e²/(4πε₀r_n) = −2K_n, and total energy is E_n = K_n + U_n = −K_n = −me⁴/(8ε₀²n²h²) = −13.6/n² eV.",
            "keyFormulas": [
              "Angular Momentum Quantization: L = m v_n r_n = n h / (2π)  (n = 1, 2, 3, ...)",
              "Bohr Orbit Radius: r_n = (ε₀ h² n²) / (π m e² Z) = 0.529 × (n² / Z) Å  (r_n ∝ n²/Z)",
              "Orbital Speed: v_n = (Z e²) / (2 ε₀ h n) = (2.18 × 10⁶ m/s) × (Z / n)  (v_n ∝ Z/n)",
              "Energy Relations: K_n = −E_n  and  U_n = 2E_n = −2K_n",
              "Total Energy: E_n = −(m e⁴ Z²) / (8 ε₀² h² n²) = −13.6 × (Z² / n²) eV"
            ],
            "derivations": "1. Derivation of Bohr Orbit Radius ($r_n$) and Speed ($v_n$):\nBy Bohr's 1st Postulate, Coulomb attraction provides centripetal force:\n$$\\frac{mv_n^2}{r_n} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Ze^2}{r_n^2} \\implies mv_n^2 r_n = \\frac{Ze^2}{4\\pi\\varepsilon_0} \\quad \\text{--- (1)}$$\nBy Bohr's 2nd Postulate (angular momentum quantization):\n$$mv_n r_n = \\frac{nh}{2\\pi} \\quad \\text{--- (2)}$$\nDividing (1) by (2) directly yields the orbital speed $v_n$:\n$$v_n = \\frac{Ze^2}{2\\varepsilon_0 n h} \\propto \\frac{Z}{n}$$\nSubstituting $v_n$ into (2) gives the quantized radius $r_n$:\n$$r_n = \\frac{nh}{2\\pi m v_n} = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m Z e^2} = 0.529 \\frac{n^2}{Z} \\text{ \\AA} \\propto \\frac{n^2}{Z}$$\n\n2. Derivation of Total Energy ($E_n$):\nFrom (1), kinetic energy is $K_n = \\frac{1}{2}mv_n^2 = \\frac{Ze^2}{8\\pi\\varepsilon_0 r_n}$, and electrostatic potential energy is $U_n = -\\frac{Ze^2}{4\\pi\\varepsilon_0 r_n} = -2K_n$.\nTherefore, total energy in the $n$-th orbit is:\n$$E_n = K_n + U_n = -K_n = -\\frac{Ze^2}{8\\pi\\varepsilon_0 r_n}$$\nSubstituting $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m Z e^2}$ yields:\n$$E_n = -\\frac{m Z^2 e^4}{8\\varepsilon_0^2 h^2 n^2} = -\\frac{13.6 Z^2}{n^2} \\text{ eV}$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Bohr radius and energy derivation is one of the highest-weightage Modern Physics derivations"
      },
      {
        "id": "phy-sub-12-3",
        "title": "12.3 Atomic Spectra, Rydberg Formula & de Broglie Explanation",
        "sections": [
          {
            "id": "phy-sec-12-3",
            "title": "Hydrogen Spectral Series, Rydberg Formula & de Broglie Standing Waves",
            "explanation": "When an electron jumps from a higher state n_i to a lower state n_f, the emitted photon has wave number 1/λ = R Z² (1/n_f² − 1/n_i²), where Rydberg's constant is R = me⁴/(8ε₀²ch³) ≈ 1.097 × 10⁷ m⁻¹. This accounts for the five hydrogen spectral series: Lyman (n_f = 1, Ultraviolet), Balmer (n_f = 2, Visible), Paschen (n_f = 3, Infrared), Brackett (n_f = 4, Infrared), and Pfund (n_f = 5, Far Infrared). For any series, the longest wavelength (minimum energy, first line) corresponds to n_i = n_f + 1, and the shortest wavelength (series limit) corresponds to n_i = ∞. de Broglie explained Bohr's second postulate by proposing that a bound electron forms a circular standing matter wave whose circumference contains an integral number of wavelengths: 2πr_n = nλ = nh/(mv_n), immediately giving L = mv_nr_n = nh/(2π).",
            "questionFraming": "Derivation — 'Using de Broglie's hypothesis of standing matter waves, derive Bohr's quantization condition for angular momentum L = nh/2π.'\nNumerical — 'Calculate the shortest and longest wavelengths of the Lyman / Balmer series of hydrogen atom.'",
            "textbookRef": "By Bohr's third postulate, hν =hc/λ = E_i − E_f, yielding the Rydberg formula 1/λ = R(1/n_f² − 1/n_i²). de Broglie provided a physical explanation for angular momentum quantization: for an electron wave on a circular orbit of radius r_n not to cancel itself by destructive interference, the circumference must equal an integral number of de Broglie wavelengths: 2πr_n = nλ = nh/(mv_n), or mv_nr_n = nh/(2π).",
            "keyFormulas": [
              "Rydberg Formula: 1 / λ = R Z² (1 / n_f² − 1 / n_i²),  R = 1.097 × 10⁷ m⁻¹  (1/R ≈ 912 Å)",
              "Lyman (n_f = 1, UV);  Balmer (n_f = 2, Visible);  Paschen (n_f = 3, IR);  Brackett (n_f = 4, IR);  Pfund (n_f = 5, IR)",
              "Number of spectral emission lines from state n to ground state: N = n(n − 1) / 2",
              "de Broglie Standing Wave Condition: 2π r_n = n λ  ⟹  m v_n r_n = n h / (2π)"
            ],
            "derivations": "1. Derivation of Rydberg's Formula from Bohr's Postulates:\nBy Bohr's 3rd Postulate, when an electron jumps from higher orbit $n_i$ to lower orbit $n_f$ ($n_i > n_f$):\n$$h\\nu = \\frac{hc}{\\lambda} = E_{n_i} - E_{n_f} = \\frac{mZ^2 e^4}{8\\varepsilon_0^2 h^2}\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)$$\nDividing by $hc$ gives the wave number $\\bar{\\nu} = 1/\\lambda$:\n$$\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right), \\quad \\text{where } R = \\frac{me^4}{8\\varepsilon_0^2 c h^3} \\approx 1.097 \\times 10^7\\text{ m}^{-1}$$\n\n2. de Broglie Proof of Bohr's 2nd Postulate:\nFor a stationary circular electron orbit of radius $r_n$ to sustain a standing matter wave without destructive self-interference, the orbit circumference must equal an integral number of de Broglie wavelengths ($\\lambda = \\frac{h}{mv_n}$):\n$$2\\pi r_n = n\\lambda = \\frac{nh}{mv_n} \\implies L = mv_n r_n = \\frac{nh}{2\\pi} \\quad (n = 1, 2, 3, \\dots)$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "de Broglie proof of 2πr = nλ and shortest/longest wavelength calculations"
      }
    ]
  },
  {
    "id": "phy-ch-13",
    "number": 13,
    "title": "Nuclei",
    "tag": "Modern Physics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-13-1",
        "title": "13.1 Atomic Masses, Isotopes/Isobars/Isotones, Nuclear Size & Constant Density",
        "sections": [
          {
            "id": "phy-sec-13-1",
            "title": "Nuclide Classification, Nuclear Radius & Independence of Nuclear Density from A",
            "explanation": "A nucleus is represented as ᴬ_Z X, containing Z protons and N = A − Z neutrons (collectively A nucleons). Atomic masses are measured in atomic mass units (1 u = 1/12 of ¹²C mass = 1.6605 × 10⁻²⁷ kg). Nuclides are classified as: Isotopes (same Z, different A; e.g., ¹₁H, ²₁H, ³₁H — identical chemical properties), Isobars (same A, different Z; e.g., ³₁H and ³₂He), and Isotones (same neutron number N = A − Z; e.g., ¹⁹⁸₈₀Hg and ¹⁹⁷₇₉Au with N = 118). Electron scattering experiments show that nuclear volume V = (4/3)πR³ is directly proportional to mass number A, so nuclear radius is R = R₀ A^(1/3) with R₀ = 1.2 × 10⁻¹⁵ m (1.2 fm). Consequently, nuclear mass (~mA) divided by volume (∝ R₀³A) makes nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³ constant and independent of A for all nuclei.",
            "questionFraming": "Derivation — 'Show that the density of nuclear matter is approximately 2.3 × 10¹⁷ kg/m³ and is independent of the mass number A.'\nNumerical — 'Find the ratio of nuclear radii and nuclear densities of two nuclei of mass numbers A₁ = 27 and A₂ = 125.'",
            "textbookRef": "A nucleus of mass number A has a radius R = R₀ A^(1/3), where R₀ = 1.2 × 10⁻¹⁵ m (= 1.2 fm). This means the volume of the nucleus, which is proportional to R³, is proportional to A. Thus the density of a nucleus is a constant, independent of A, for all nuclei, and is approximately 2.3 × 10¹⁷ kg m⁻³ — comparable to the density of neutron stars.",
            "keyFormulas": [
              "1 u = (Mass of ¹²C atom) / 12 = 1.6605 × 10⁻²⁷ kg",
              "Nuclear Radius: R = R₀ A^(1/3),  where R₀ = 1.2 × 10⁻¹⁵ m = 1.2 fm",
              "Nuclear Volume: V = (4/3) π R³ = (4/3) π R₀³ A  (V ∝ A)",
              "Nuclear Density: ρ = 3m / (4π R₀³) ≈ 2.3 × 10¹⁷ kg/m³  (Independent of A, ρ₁ : ρ₂ = 1 : 1)"
            ],
            "derivations": "1. Proof that Nuclear Density is Independent of Mass Number $A$:\nLet a nucleus have mass number $A$ and average nucleon mass $m \\approx 1.67 \\times 10^{-27}\\text{ kg}$.\nTotal mass of the nucleus is $M \\approx mA$.\nSince nuclear radius is $R = R_0 A^{1/3}$ ($R_0 = 1.2 \\times 10^{-15}\\text{ m}$), the nuclear volume is:\n$$V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (R_0 A^{1/3})^3 = \\frac{4}{3}\\pi R_0^3 A$$\nTherefore, the density of nuclear matter is:\n$$\\rho = \\frac{\\text{Mass}}{\\text{Volume}} = \\frac{mA}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3m}{4\\pi R_0^3}$$\nSince $A$ cancels out completely, $\\rho$ is independent of mass number $A$. Substituting numerical values:\n$$\\rho = \\frac{3 \\times 1.67 \\times 10^{-27}}{4 \\times 3.14 \\times (1.2 \\times 10^{-15})^3} \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$$",
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Proof that nuclear density is independent of A is a recurring 2/3-mark CBSE question"
      },
      {
        "id": "phy-sub-13-2",
        "title": "13.2 Mass-Energy Equivalence, Mass Defect & Binding Energy Curve",
        "sections": [
          {
            "id": "phy-sec-13-2",
            "title": "Mass Defect, Binding Energy & Binding Energy per Nucleon Stability Curve",
            "explanation": "By Einstein's mass-energy equivalence E = mc², 1 atomic mass unit (1 u) corresponds to 931.5 MeV of energy. The resting mass M of any bound nucleus is always slightly less than the sum of the masses of its constituent Z protons and (A − Z) neutrons; this difference Δm = [Z m_p + (A − Z)m_n − M] is the mass defect. The energy equivalent E_b = Δm c² = Δm(u) × 931.5 MeV is the nuclear Binding Energy — the energy released when nucleons bind to form the nucleus (or required to break it apart). The Binding Energy per nucleon (E_bn = E_b / A) measures nuclear stability: it rises sharply for light nuclei (with prominent stability peaks at even-even nuclei like ⁴He, ¹²C, ¹⁶O), stays nearly constant (~8.0–8.75 MeV) for 30 < A < 170 (reaching an absolute maximum of 8.75 MeV for ⁵⁶₂₆Fe), and drops to ~7.6 MeV for heavy nuclei like ²³⁸U due to long-range proton-proton Coulomb repulsion.",
            "questionFraming": "Conceptual/Graphical — 'Draw the graph of Binding Energy per nucleon (BE/A) versus mass number A. State its salient features and explain how it accounts for energy release in both nuclear fission and nuclear fusion.'\nNumerical — 'Calculate the mass defect, binding energy, and binding energy per nucleon of a given nucleus (e.g., ⁴₂He, ¹⁶₈O, or ⁵⁶₂₆Fe).'",
            "textbookRef": "The binding energy per nucleon E_bn = E_b / A is practically constant (~8 MeV) for middle-weight nuclei (30 < A < 170), indicating the short-range saturation property of the nuclear force, and peaks at 8.75 MeV for A = 56 (⁵⁶Fe). Since both very light nuclei (A < 20) and very heavy nuclei (A > 200) have lower E_bn than medium nuclei, energy is released whenever two light nuclei fuse into a heavier nucleus (fusion) or a very heavy nucleus splits into two medium-sized nuclei (fission), as both processes move towards higher E_bn (greater stability).",
            "keyFormulas": [
              "Mass-Energy Equivalence: E = m c²;  1 u × c² = 931.5 MeV",
              "Mass Defect: Δm = [Z m_p + (A − Z) m_n] − M_nucleus",
              "Binding Energy: E_b = Δm × c² (in J)  or  E_b = Δm (in u) × 931.5 MeV",
              "Binding Energy per Nucleon: E_bn = E_b / A  (Maximum = 8.75 MeV for ⁵⁶₂₆Fe)",
              "Q-value of Nuclear Reaction: Q = (M_reactants − M_products) × 931.5 MeV = BE_products − BE_reactants"
            ],
            "derivations": "1. Energy Equivalent of $1\\text{ u}$ ($931.5\\text{ MeV}$):\nGiven $1\\text{ u} = 1.6605 \\times 10^{-27}\\text{ kg}$ and $c = 2.9979 \\times 10^8\\text{ m/s}$:\n$$E = \\Delta m \\cdot c^2 = (1.6605 \\times 10^{-27}) \\times (2.9979 \\times 10^8)^2 = 1.4924 \\times 10^{-10}\\text{ J}$$\nConverting to mega-electron-volts ($1\\text{ MeV} = 1.6022 \\times 10^{-13}\\text{ J}$):\n$$E = \\frac{1.4924 \\times 10^{-10}}{1.6022 \\times 10^{-13}} \\approx 931.5\\text{ MeV}$$",
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Binding energy curve and why fission/fusion release energy is a guaranteed board question"
      },
      {
        "id": "phy-sub-13-3",
        "title": "13.3 Nuclear Force, Nuclear Fission & Nuclear Fusion",
        "sections": [
          {
            "id": "phy-sec-13-3",
            "title": "Strong Nuclear Force Properties, Potential Energy Curve, Fission & Fusion",
            "explanation": "The strong nuclear force that binds nucleons inside a nucleus is: (1) the strongest fundamental force in nature (F_N : F_e : F_g ≈ 10³⁸ : 10³⁶ : 1), (2) short-ranged (vanishes beyond ~2–3 fm), (3) charge-independent (F_nn ≈ F_pp ≈ F_np), (4) spin-dependent and non-central, and (5) exhibits saturation (each nucleon interacts only with its immediate neighbours). In the nucleon-nucleon potential energy curve U(r), potential energy is minimum (~ −100 MeV) at r₀ ≈ 0.8 fm: for r > 0.8 fm the force is strongly attractive, whereas for r < 0.8 fm it becomes strongly repulsive, preventing nuclear collapse. In Nuclear Fission, a heavy nucleus like ²³⁵₉₂U absorbs a slow thermal neutron to split into medium nuclei (¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n), releasing ~200 MeV per fission. In Nuclear Fusion (thermonuclear reaction at T ~ 10⁷ K in stars), four protons fuse into a ⁴₂He nucleus via the proton-proton cycle, releasing 26.7 MeV (~6.7 MeV/nucleon, higher per unit mass than fission).",
            "questionFraming": "Conceptual — 'Plot the potential energy of a pair of nucleons as a function of their separation and mark the regions of attraction and repulsion. State four characteristic properties of nuclear force. Distinguish between nuclear fission and nuclear fusion.'",
            "textbookRef": "The potential energy between two nucleons is a minimum at a distance r₀ ≈ 0.8 fm. This means the force is attractive for distances larger than 0.8 fm and strongly repulsive if they are separated by distances less than 0.8 fm. Unlike Coulomb's law, the nuclear force is short-ranged, saturates, and does not depend on electric charge. In thermal fission of ²³⁵U, Q ≈ 200 MeV is released per nucleus; in stellar fusion (4¹₁H → ⁴₂He + 2e⁺ + 2ν + 26.7 MeV), extreme temperature (~10⁷ K) is required to overcome the Coulomb barrier.",
            "keyFormulas": [
              "Equilibrium Nucleon Separation: r₀ ≈ 0.8 fm  (r > 0.8 fm → Attractive;  r < 0.8 fm → Repulsive)",
              "Charge Independence: F_nn ≈ F_pp ≈ F_np",
              "Thermal Fission of Uranium: ²³⁵₉₂U + ¹₀n → ²³⁶₉₂U* → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + 200 MeV",
              "Stellar Proton-Proton Fusion: 4 ¹₁H + 2e⁻ → ⁴₂He + 2ν + 6γ + 26.7 MeV"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Nucleon potential energy vs distance graph (0.8 fm) and properties of nuclear force"
      }
    ]
  },
  {
    "id": "phy-ch-14",
    "number": 14,
    "title": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    "tag": "Electronics",
    "available": true,
    "isExamPortion": true,
    "subchapters": [
      {
        "id": "phy-sub-14-1",
        "title": "14.1 Energy Bands in Solids: Conductors, Insulators & Semiconductors",
        "sections": [
          {
            "id": "phy-sec-14-1",
            "title": "Formation of Energy Bands & Classification by Forbidden Energy Gap E_g",
            "explanation": "When N isolated atoms are brought together to form a crystalline solid, the outer atomic orbitals overlap and interact, splitting each discrete energy level into a closely spaced quasi-continuous band of states. The highest energy band completely filled with valence electrons at 0 K is the Valence Band (VB), and the next higher permitted band (empty or partially filled at 0 K) is the Conduction Band (CB). They are separated by the Forbidden Energy Gap (Band Gap) E_g = E_C − E_V, where no electron energy states exist. Solids are classified by E_g: (1) Conductors (Metals) have overlapping VB and CB or a partially filled band (E_g ≈ 0), offering vast free-electron density (~10²⁸ m⁻³); (2) Insulators (e.g., diamond) have a very large band gap (E_g > 3 eV, ~5.4 eV for diamond), so no electrons can be thermally excited to CB; (3) Semiconductors (Si, Ge) have a small finite band gap (E_g < 3 eV: E_g = 1.1 eV for Silicon, E_g = 0.72 eV for Germanium), behaving as insulators at 0 K and partial conductors at room temperature.",
            "questionFraming": "Conceptual — 'Draw energy band diagrams to distinguish between a conductor, an insulator, and an intrinsic semiconductor at room temperature. State the numerical values of forbidden energy gap E_g for Silicon and Germanium.'",
            "textbookRef": "The energy band which includes the energy levels of the valence electrons is called the valence band. The band above the valence band is called the conduction band. The minimum energy required to shift an electron from the top of the valence band (E_V) to the bottom of the conduction band (E_C) is the energy gap E_g = E_C − E_V. For metals, E_g = 0 (bands overlap); for insulators, E_g > 3 eV; and for semiconductors, E_g is small (1.1 eV for Si, 0.72 eV for Ge).",
            "keyFormulas": [
              "Forbidden Energy Gap: E_g = E_C − E_V",
              "Conductors (Metals): E_g ≈ 0 eV  (VB and CB overlap, ρ ~ 10⁻² to 10⁻⁸ Ω·m)",
              "Semiconductors: E_g < 3 eV  [E_g(Si) = 1.1 eV,  E_g(Ge) = 0.72 eV]",
              "Insulators: E_g > 3 eV  [E_g(Diamond) ≈ 5.4 eV,  ρ ~ 10¹¹ to 10¹⁹ Ω·m]"
            ]
          }
        ]
      },
      {
        "id": "phy-sub-14-2",
        "title": "14.2 Intrinsic & Extrinsic Semiconductors (n-type & p-type)",
        "sections": [
          {
            "id": "phy-sec-14-2",
            "title": "Intrinsic vs Extrinsic Semiconductors, n-type/p-type Doping & Energy Band Diagrams",
            "explanation": "An intrinsic (pure) tetravalent semiconductor (Si or Ge) has covalent bonds where thermal excitation generates electron-hole pairs equally: n_e = n_h = n_i, and total current is I = I_e + I_h. Doping adds a tiny controlled amount (~1 ppm) of a pentavalent or trivalent impurity to drastically boost conductivity, forming an extrinsic semiconductor that obeys the Mass Action Law n_e · n_h = n_i² at thermal equilibrium. (1) n-type semiconductor: Doping with Group-15 pentavalent donors (P, As, Sb) provides a 5th loosely bound electron (ionization energy ~0.01 eV in Ge, ~0.05 eV in Si) occupying a discrete Donor Energy Level E_D just below E_C; here electrons are majority carriers (n_e >> n_h) and holes are minority carriers. (2) p-type semiconductor: Doping with Group-13 trivalent acceptors (B, Al, In, Ga) creates a covalent vacancy (hole) and a discrete Acceptor Energy Level E_A just above E_V; here holes are majority carriers (n_h >> n_e). Both n-type and p-type semiconductors are electrically neutral overall.",
            "questionFraming": "Conceptual — 'Distinguish between intrinsic and extrinsic (n-type and p-type) semiconductors. Draw the energy band diagrams of n-type and p-type semiconductors at T > 0 K, clearly marking the donor level E_D and acceptor level E_A. Why is an n-type or p-type crystal electrically neutral?'",
            "textbookRef": "In an intrinsic semiconductor, n_e = n_h = n_i. In an extrinsic semiconductor at thermal equilibrium, n_e n_h = n_i². In n-type (pentavalent donor impurity like P or As), the donor energy level E_D lies ~0.01–0.05 eV below the bottom of the conduction band E_C, giving n_e >> n_h. In p-type (trivalent acceptor impurity like B, Al, or In), the acceptor level E_A lies ~0.01–0.05 eV above the top of the valence band E_V, giving n_h >> n_e. Despite having excess mobile electrons or holes, doped crystals are electrically neutral because each dopant atom is itself electrically neutral.",
            "keyFormulas": [
              "Intrinsic Carrier Relation: n_e = n_h = n_i;  Total current I = I_e + I_h",
              "Mass Action Law (Thermal Equilibrium): n_e · n_h = n_i²",
              "n-type (Pentavalent Donor: P, As, Sb): n_e ≈ N_d >> n_h;  Donor level E_D lies ~0.01–0.05 eV below E_C",
              "p-type (Trivalent Acceptor: B, Al, In, Ga): n_h ≈ N_a >> n_e;  Acceptor level E_A lies ~0.01–0.05 eV above E_V"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Energy band diagrams with E_D and E_A levels and mass action law numericals"
      },
      {
        "id": "phy-sub-14-3",
        "title": "14.3 p-n Junction Formation & V-I Characteristics",
        "sections": [
          {
            "id": "phy-sec-14-3",
            "title": "p-n Junction Formation (Diffusion & Drift) and Forward/Reverse V-I Characteristics",
            "explanation": "Two processes occur during p-n junction formation: (1) Diffusion of majority holes (p → n) and electrons (n → p) due to concentration gradients, leaving behind immobile negatively charged acceptor ions on the p-side and positively charged donor ions on the n-side; this forms a mobile-carrier-free Depletion Region (~0.5 μm) and sets up an opposing electric field and Barrier Potential V₀ (~0.7 V for Si, ~0.3 V for Ge). (2) Drift of thermally generated minority carriers across the junction driven by the barrier field. At equilibrium, I_diffusion = I_drift (net current = 0). Under Forward Bias (p to +, n to −), applied voltage V opposes V₀ (effective barrier V₀ − V), narrowing the depletion layer and causing an exponential majority-carrier current (mA) above the threshold/knee voltage. Under Reverse Bias (p to −, n to +), effective barrier increases to V₀ + V, widening the depletion layer and blocking majority diffusion so only a tiny voltage-independent minority reverse saturation current (~μA) flows until breakdown.",
            "questionFraming": "Conceptual/Graphical — 'Explain the two processes (diffusion and drift) involved in the formation of a p-n junction depletion layer and barrier potential. Draw the circuit diagrams and V-I characteristic curves of a p-n junction diode in forward bias and reverse bias.'",
            "textbookRef": "During p-n junction formation, diffusion of majority carriers creates a space-charge depletion region and barrier potential V₀, which drives an opposing minority-carrier drift current until equilibrium is reached. Forward bias lowers the barrier (V₀ − V), thins the depletion layer, and gives low dynamic resistance r_d = ΔV/ΔI with current in mA. Reverse bias raises the barrier (V₀ + V), widens the depletion layer, and permits only a small minority saturation current in μA.",
            "keyFormulas": [
              "At Unbiased Equilibrium: I_diffusion = I_drift  ⟹  I_net = 0",
              "Forward Bias (p → +, n → −): Effective barrier = V₀ − V;  Depletion width decreases;  I in mA",
              "Reverse Bias (p → −, n → +): Effective barrier = V₀ + V;  Depletion width increases;  I in μA",
              "Knee / Threshold Voltage: V_k ≈ 0.7 V (for Silicon),  V_k ≈ 0.2–0.3 V (for Germanium)",
              "Dynamic Resistance: r_d = ΔV / ΔI"
            ],
            "isImportant": true,
            "examTag": "Important Question"
          }
        ],
        "isImportant": true,
        "examTag": "Important Question",
        "importantReason": "Diffusion vs drift in p-n junction formation and forward/reverse V-I curves"
      },
      {
        "id": "phy-sub-14-4",
        "title": "14.4 p-n Junction Diode as Half-Wave and Full-Wave Rectifier",
        "sections": [
          {
            "id": "phy-sec-14-4",
            "title": "Half-Wave Rectifier, Centre-Tap Full-Wave Rectifier & Capacitor Filter",
            "explanation": "A rectifier converts alternating current (AC) into pulsating direct current (DC) using the unidirectional conduction property of a p-n junction diode (low resistance in forward bias, near-infinite resistance in reverse bias). In a Half-Wave Rectifier (single diode), the diode conducts only during the positive half-cycles of AC and blocks the negative half-cycles, producing discontinuous output pulses at the same fundamental frequency as the input (f_out = f_in = 50 Hz). In a Full-Wave Rectifier (centre-tap transformer with two diodes D₁ and D₂), D₁ is forward-biased during the positive half-cycle and D₂ is forward-biased during the negative half-cycle; both send current through the load resistor R_L in the same direction (X to Y), giving continuous unidirectional pulses with doubled ripple frequency (f_out = 2f_in = 100 Hz). Connecting a high-capacitance Capacitor Filter in parallel with R_L charges to the peak voltage and discharges slowly through R_L (large time constant τ = R_L C), smoothing the pulsating DC into nearly steady DC.",
            "questionFraming": "Derivation/Diagram — 'Explain with a neat labelled circuit diagram the working of a p-n junction diode as a full-wave rectifier (or half-wave rectifier). Draw the input and output voltage waveforms and explain the role of a capacitor filter in obtaining steady DC.'",
            "textbookRef": "If an alternating voltage is applied across a diode, current flows only during the part of the cycle when the diode is forward biased. A half-wave rectifier uses one diode and rectifies only one half-cycle (output frequency = f). A full-wave rectifier uses a centre-tap transformer and two diodes so that both half-cycles produce unidirectional current through the load R_L (output ripple frequency = 2f). To filter out the AC ripple and obtain steady DC, a capacitor is connected in parallel across the load R_L.",
            "keyFormulas": [
              "Half-Wave Rectifier Output Ripple Frequency: f_out = f_in  (For 50 Hz mains → f_out = 50 Hz)",
              "Full-Wave Rectifier Output Ripple Frequency: f_out = 2 f_in  (For 50 Hz mains → f_out = 100 Hz)",
              "Capacitor Filter Connection: Parallel across load resistor R_L  (Time constant τ = R_L C >> T)"
            ],
            "isImportant": true,
            "examTag": "Important Derivation"
          }
        ],
        "isImportant": true,
        "examTag": "Important Derivation",
        "importantReason": "Full-wave rectifier circuit, waveforms, ripple frequency, and capacitor filter are 5-mark staples"
      }
    ]
  }
];
