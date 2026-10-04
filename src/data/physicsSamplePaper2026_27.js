// Official CBSE Class 12 Physics (042) Sample Question Paper & Marking Scheme
// Academic Session 2026-27 | Maximum Marks: 70 | Time Allowed: 3 Hours

export const PHYSICS_SAMPLE_PAPER_2026_27 = {
  examInfo: {
    subject: "PHYSICS (042)",
    class: "Class XII",
    session: "Academic Session 2026–27",
    maxMarks: 70,
    timeAllowed: "3 hours",
    instructions: [
      "There are 33 questions in all. All questions are compulsory.",
      "This question paper has five sections: Section A, Section B, Section C, Section D and Section E.",
      "Section A contains sixteen questions: twelve MCQs and four Assertion-Reasoning based of 1 mark each.",
      "Section B contains five questions of two marks each.",
      "Section C contains seven questions of three marks each.",
      "Section D contains two case study-based questions of four marks each.",
      "Section E contains three long answer questions of five marks each.",
      "There is no overall choice. However, an internal choice has been provided in two questions in Section B, one question in Section C, and all three questions in Section E.",
      "Use of calculators is not allowed."
    ]
  },
  questions: [
    // ---------------- SECTION A (16 x 1 = 16 Marks) ----------------
    {
      id: "sqp-2027-q1",
      number: 1,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Electric Charges and Fields",
      questionText: "A point charge +Q is placed at the centre of a spherical Gaussian surface of radius R. If the radius of the sphere is doubled, the electric flux through the surface will:",
      options: [
        "A. become half",
        "B. become double",
        "C. remain the same",
        "D. become four times"
      ],
      correctOption: "C",
      correctAnswer: "C. remain the same",
      markingScheme: "According to Gauss's Law, electric flux Φ = Q / ε₀. Flux depends only on the enclosed charge, not on the shape or size of the Gaussian surface. Therefore, doubling the radius does not change the flux.",
      explanation: "By Gauss's theorem, Φ_E = q_enclosed / ε₀. Since the enclosed charge remains +Q and is independent of the radius R of the Gaussian surface, the total electric flux remains unaltered."
    },
    {
      id: "sqp-2027-q2",
      number: 2,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Current Electricity",
      questionText: "If two identical heaters each rated as (1000 W, 220 V) are connected in parallel to 220 V, then the total power consumed is:",
      options: [
        "A. 200 W",
        "B. 250 W",
        "C. 2000 W",
        "D. 2500 W"
      ],
      correctOption: "C",
      correctAnswer: "C. 2000 W",
      markingScheme: "For a parallel combination, P = P₁ + P₂ = 1000 + 1000 = 2000 W.",
      explanation: "In parallel combination connected across their rated voltage (220 V), each heater draws its rated power: P_total = P₁ + P₂ = 1000 W + 1000 W = 2000 W."
    },
    {
      id: "sqp-2027-q3",
      number: 3,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Electromagnetic Induction",
      questionText: "An infinitely long cylinder is kept parallel to a uniform magnetic field B directed along negative y-axis. What will be the direction of induced current as seen from the y axis?",
      options: [
        "A. clockwise of the negative y-axis",
        "B. anticlockwise of the negative y-axis",
        "C. no current will be induced",
        "D. along the direction of the magnetic field"
      ],
      correctOption: "C",
      correctAnswer: "C. No current will be induced",
      markingScheme: "As the cylinder is kept stationary and also the magnetic field is uniform, the flux linked with the cylinder is not changing, so no current is induced in the cylinder.",
      explanation: "Electromagnetic induction requires a time-varying magnetic flux (dΦ/dt ≠ 0). Since both the field and cylinder are stationary, dΦ/dt = 0, so induced emf ε = 0."
    },
    {
      id: "sqp-2027-q4",
      number: 4,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Electromagnetic Waves",
      questionText: "If electric field associated with an electromagnetic wave is given by E = 30 sin (0.2π × 10⁻⁴ m⁻¹ x − 0.6π × 10⁴ Hz t) ĵ then the direction of propagation of the wave is along:",
      options: [
        "A. î",
        "B. -î",
        "C. k̂",
        "D. -k̂"
      ],
      correctOption: "A",
      correctAnswer: "A. î",
      markingScheme: "The direction of propagation of electromagnetic waves is given by -(-ω)/k and is along positive x-axis as equation of wave has the form sin(kx - ωt) which travels along +x direction (î).",
      explanation: "For a wave function of the form sin(kx - ωt), the wave propagates along the positive x-axis, represented by unit vector î."
    },
    {
      id: "sqp-2027-q5",
      number: 5,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Wave Optics",
      questionText: "Which one of the following phenomenon is not explained by Huygens' construction of wave front?",
      options: [
        "A. Diffraction",
        "B. Refraction",
        "C. Reflection",
        "D. Origin of spectra"
      ],
      correctOption: "D",
      correctAnswer: "D. Origin of spectra",
      markingScheme: "Diffraction, refraction, and reflection can be explained by Huygens' construction of wave front, but Origin of spectra cannot (it requires quantum atomic transitions).",
      explanation: "Huygens' wave theory explains geometrical wave phenomena (reflection, refraction, interference, diffraction) but cannot explain atomic emission/absorption spectra or photoelectric effect."
    },
    {
      id: "sqp-2027-q6",
      number: 6,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Wave Optics",
      questionText: "If wave front from star in nearby galaxy is detected by a telescope at the top of some mountain in India then the shape of the wavefront detected will be:",
      options: [
        "A. diverging spherical",
        "B. converging spherical",
        "C. plane",
        "D. cylindrical"
      ],
      correctOption: "C",
      correctAnswer: "C. plane",
      markingScheme: "As star will act as distant point source, hence wavefront detected will be plane.",
      explanation: "Wavefronts originating from a point source at an extremely large (astronomical) distance have negligible curvature and arrive as planar wavefronts."
    },
    {
      id: "sqp-2027-q7",
      number: 7,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Nuclei",
      questionText: "The binding energy per nucleon curve shows a maximum around mass number A=56. What does this imply about nuclei near iron (Fe)?",
      options: [
        "A. They are the least stable nuclei.",
        "B. They are the most tightly bound nuclei.",
        "C. They undergo spontaneous fission releasing maximum energy.",
        "D. They cannot participate in nuclear reactions."
      ],
      correctOption: "B",
      correctAnswer: "B. They are the most tightly bound nuclei.",
      markingScheme: "A maximum in binding energy per nucleon means these nuclei are the most stable and most tightly bound.\n• They do not undergo spontaneous fission (that's typical for very heavy nuclei like uranium).\n• They are certainly not the least stable — in fact, they are the most stable.\n• They can still participate in nuclear reactions, but they are at the 'energy valley', so both fusion and fission tend to release energy by moving toward iron.",
      explanation: "Binding energy per nucleon measures nuclear stability. A peak around A = 56 (Fe-56 has ~8.75 MeV/nucleon) means iron-group nuclei are the most tightly bound and energetically stable."
    },
    {
      id: "sqp-2027-q8",
      number: 8,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Magnetism and Matter",
      questionText: "A ball of superconducting material is dipped in liquid nitrogen and placed near a bar magnet. The direction of the movement of the ball and the magnetic moment would be:",
      options: [
        "A. Towards the bar magnet | Opposite to that of the bar magnet",
        "B. Towards the bar magnet | Same direction as that of the bar magnet",
        "C. Away from the bar magnet | Same direction as that of the bar magnet",
        "D. Away from the bar magnet | Opposite to that of the bar magnet"
      ],
      correctOption: "D",
      correctAnswer: "D. Away from the bar magnet and opposite to that of bar magnet",
      markingScheme: "As the ball is dipped in liquid nitrogen, its temperature becomes less than the critical temperature and it becomes a superconductor. In this state, the ball becomes perfectly diamagnetic (Meissner effect). It is repelled away from the magnet and its induced magnetic moment opposes the applied field.",
      explanation: "Superconductors exhibit perfect diamagnetism (χ = -1, B_in = 0). A diamagnetic substance is repelled by a magnetic field (moves away) and develops an opposing magnetic dipole moment."
    },
    {
      id: "sqp-2027-q9",
      number: 9,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Current Electricity",
      questionText: "A bridge circuit has four arms with resistances 2 Ω, 4 Ω, 3 Ω, and 6 Ω, and a central arm of 5 Ω, connected to an 18 V battery. The total current flowing in the circuit is:",
      options: [
        "A. 18 A",
        "B. 5 A",
        "C. 5/18 A",
        "D. 18/5 A"
      ],
      correctOption: "B",
      correctAnswer: "B. 5 A",
      markingScheme: "The Wheatstone bridge is balanced because 2Ω/4Ω = 3Ω/6Ω = 1/2.\nThe 5 Ω resistance is ineffective (carries zero current).\nWe now have (2 Ω + 4 Ω = 6 Ω) in parallel with (3 Ω + 6 Ω = 9 Ω).\nR_AB = (6 × 9) / (6 + 9) = 54 / 15 = 18/5 Ω.\nNow, I = V / R = 18 / (18/5) = 5 A.\n[For Visually Impaired Students: All 4 arms R, galvanometer 2R: bridge is balanced, R_eq = (2R × 2R) / (2R + 2R) = R].",
      explanation: "Since the bridge is balanced (P/Q = R/S), no current flows through the central 5 Ω resistor. Equivalent resistance is (6 × 9)/(6 + 9) = 3.6 Ω. Total current I = 18 / 3.6 = 5 A."
    },
    {
      id: "sqp-2027-q10",
      number: 10,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Current Electricity",
      questionText: "Two electric bulbs, B₁ and B₂, are connected in series to an A.C. supply of 200 V. The power ratings printed on the bulbs are: B₁: (200 V, 60 W), B₂: (200 V, 100 W). Using their rated voltage–power information, the ratio of their resistances R₁/R₂ is:",
      options: [
        "A. 5:3",
        "B. 3:5",
        "C. 3:4",
        "D. 4:3"
      ],
      correctOption: "A",
      correctAnswer: "A. 5:3",
      markingScheme: "Here P₁ = 60 W, P₂ = 100 W.\nR₁ = V² / P₁ and R₂ = V² / P₂.\nTherefore R₁ / R₂ = P₂ / P₁ = 100 / 60 = 5 : 3.",
      explanation: "From bulb rating formula R = V² / P. For identical rated voltage, resistance is inversely proportional to rated power: R₁/R₂ = P₂/P₁ = 100/60 = 5/3."
    },
    {
      id: "sqp-2027-q11",
      number: 11,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Atoms",
      questionText: "If nucleus scaled to football size is approximately 22 cm, then the radius of the orbit of electron will be approximately:",
      options: [
        "A. 22 cm",
        "B. 22 m",
        "C. 22 km",
        "D. 22000 km"
      ],
      correctOption: "C",
      correctAnswer: "C. 22 km",
      markingScheme: "Typical nuclear radius ≈ 10⁻¹⁵ m (1 femtometer).\nAtom radius (electron orbit, roughly Bohr radius) ~ 10⁻¹⁰ m.\nRatio of atom size to nucleus size ~ 10⁻¹⁰ / 10⁻¹⁵ = 10⁵.\nFootball (nucleus) radius ~ 22 cm = 0.22 m.\nMultiply by 10⁵: 0.22 m × 10⁵ = 22,000 m = 22 km.",
      explanation: "The linear dimensions of an atom are ~10⁵ times larger than its nucleus. Scaling up a 0.22 m football by 10⁵ yields 22,000 m = 22 km."
    },
    {
      id: "sqp-2027-q12",
      number: 12,
      section: "A",
      marks: 1,
      type: "mcq",
      chapter: "Moving Charges and Magnetism",
      questionText: "A current of 5 A is passing through a long wire which has a semicircular loop of radius 10 cm. The magnetic field produced at the center of the loop is:",
      options: [
        "A. 2 π μ T",
        "B. 4 π μ T",
        "C. 5 π μ T",
        "D. 8 π μ T"
      ],
      correctOption: "C",
      correctAnswer: "C. 5 π μ T",
      markingScheme: "B = (μ₀ I) / (4 R) = (4π × 10⁻⁷ × 5) / (4 × 0.10) T = 5π × 10⁻⁶ T = 5π μT.",
      explanation: "Magnetic field at the center of a circular loop is μ₀I / (2R). For a semicircular loop, it is half: B = μ₀I / (4R) = (4π × 10⁻⁷ × 5) / 0.40 = 5π × 10⁻⁶ T = 5π μT."
    },
    {
      id: "sqp-2027-q13",
      number: 13,
      section: "A",
      marks: 1,
      type: "assertion-reason",
      chapter: "Atoms",
      questionText: "Assertion (A): In Rutherford's scattering experiment, most of the alpha particles passed through the gold foil undeflected.\nReason (R): The electrons in the atom are very light and do not affect the path of the alpha particles significantly.",
      options: [
        "A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
        "B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
        "C. Assertion is true but Reason is false.",
        "D. Both Assertion and Reason are false."
      ],
      correctOption: "B",
      correctAnswer: "B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      markingScheme: "Both are true; most of the space inside the atom is empty (nucleus tiny), so alpha particles pass undeflected. Electron mass has negligible deflecting effect on energetic alpha particles, but the reason why most pass undeflected is that most of the atom is empty space.",
      explanation: "A is true (99.86% alpha particles pass undeflected). R is also a true physical fact (electrons are ~7300 times lighter than alpha particles), but the correct explanation for A is that most volume in an atom is empty space."
    },
    {
      id: "sqp-2027-q14",
      number: 14,
      section: "A",
      marks: 1,
      type: "assertion-reason",
      chapter: "Ray Optics and Optical Instruments",
      questionText: "A convex lens of focal length 20 cm is used to form a real image of a point object placed 30 cm from the lens. The lens is then immersed in water of refractive index 1.33 (the lens material has refractive index 1.5).\nAssertion (A): The focal length of the lens increases when it is immersed in water.\nReason (R): The focal length of a lens depends on the relative refractive index of the lens material with respect to the surrounding medium, as given by the lens maker's formula.",
      options: [
        "A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
        "B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
        "C. Assertion is true but Reason is false.",
        "D. Both Assertion and Reason are false."
      ],
      correctOption: "A",
      correctAnswer: "A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      markingScheme: "Both true and R explains A; lens maker's formula uses relative index (μ_lens / μ_medium - 1), so in water the relative refractive index decreases and f increases.",
      explanation: "From 1/f = (μ_rel - 1)(1/R₁ - 1/R₂). In water, μ_rel = 1.5/1.33 = 1.13 < 1.5. Since (μ_rel - 1) decreases, f increases. R correctly explains A."
    },
    {
      id: "sqp-2027-q15",
      number: 15,
      section: "A",
      marks: 1,
      type: "assertion-reason",
      chapter: "Wave Optics",
      questionText: "In Young's double slit experiment, the distance between the slits is 0.25 mm and the screen is placed 1.0 m away. A student uses monochromatic light of wavelength 500 nm.\nAssertion (A): The fringe width observed on the screen will be 2.0 mm.\nReason (R): The fringe width in YDSE is directly proportional to the slit separation and inversely proportional to the wavelength of light.",
      options: [
        "A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
        "B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
        "C. Assertion is true but Reason is false.",
        "D. Both Assertion and Reason are false."
      ],
      correctOption: "C",
      correctAnswer: "C. Assertion is true but Reason is false",
      markingScheme: "Assertion is true: β = λD/d = (500 × 10⁻⁹ × 1.0) / (0.25 × 10⁻³) = 2.0 × 10⁻³ m = 2.0 mm.\nReason is false: Fringe width in YDSE is inversely proportional to slit separation d and directly proportional to wavelength λ (β = λD/d).",
      explanation: "Assertion calculation is correct: β = 2.0 mm. Reason asserts the opposite relationship: β is actually directly proportional to λ and inversely proportional to d."
    },
    {
      id: "sqp-2027-q16",
      number: 16,
      section: "A",
      marks: 1,
      type: "assertion-reason",
      chapter: "Electrostatic Potential and Capacitance",
      questionText: "Assertion (A): If a conductor is placed in an external electric field, the electric field inside the conductor becomes infinity in electrostatic equilibrium.\nReason (R): Free electrons inside the conductor rearrange themselves in such a way that the internal electric field is in the same direction as that of the external field.",
      options: [
        "A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
        "B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
        "C. Assertion is true but Reason is false.",
        "D. Both Assertion and Reason are false."
      ],
      correctOption: "D",
      correctAnswer: "D. Both Assertion and Reason are false.",
      markingScheme: "Electrons in a conductor move freely. When an external field is applied, charges rearrange until the internal induced field they create exactly cancels the external field (E_in = 0, not infinity). The internal field is opposite to the external field, not in the same direction.",
      explanation: "Both statements are false: Inside a conductor in electrostatic equilibrium, E_net = 0 (not infinity), and induced internal field is OPPOSITE to the external field to cancel it."
    },

    // ---------------- SECTION B (5 x 2 = 10 Marks) ----------------
    {
      id: "sqp-2027-q17",
      number: 17,
      section: "B",
      marks: 2,
      type: "short-answer-2m",
      chapter: "Electromagnetic Waves",
      questionText: "The electric and magnetic fields associated with an electromagnetic radiation in a medium are given as follows:\nE = 30 sin (2π × 10¹⁸ rad s⁻¹ t + π × 10¹⁰ m⁻¹ x) V m⁻¹\nB = 10⁻⁷ sin (2π × 10¹⁸ rad s⁻¹ t + π × 10¹⁰ m⁻¹ x) T\nI. What is the refractive index of the medium through which the wave is propagating?\nII. Find the frequency of the wave and identify the electromagnetic wave.",
      markingScheme: "I. Refractive index μ = c / v_medium (½ Mark)\n   c = 3 × 10⁸ m/s\n   v_medium = ω / k = (2π × 10¹⁸) / (π × 10¹⁰) = 2 × 10⁸ m/s (½ Mark)\n   μ = (3 × 10⁸) / (2 × 10⁸) = 1.5 (½ Mark)\nII. Angular frequency ω = 2π × 10¹⁸ rad s⁻¹\n   2πν = 2π × 10¹⁸ ⟹ ν = 10¹⁸ Hz (½ Mark)\n   This frequency corresponds to X-Rays.",
      explanation: "Wave velocity in medium v = ω/k = 2 × 10⁸ m/s. Refractive index n = c/v = 3/2 = 1.5. Frequency ν = ω / 2π = 10¹⁸ Hz, which lies in the X-ray band (10¹⁶ to 10¹⁹ Hz)."
    },
    {
      id: "sqp-2027-q18",
      number: 18,
      section: "B",
      marks: 2,
      type: "short-answer-2m",
      chapter: "Current Electricity",
      questionText: "Write the nature of path of free electrons in a conductor in the:\na) presence of electric field,\nb) absence of electric field.",
      markingScheme: "a. In the presence of an electric field (1 Mark):\n   • Free electrons experience a net force opposite to the direction of the electric field.\n   • This causes them to drift slowly in the direction opposite to the field.\n   • Despite this drift, electrons still undergo frequent collisions with atoms, resulting in curved/zigzag paths with a net drift velocity.\n   • This net movement constitutes an electric current.\nb. In the absence of an electric field (1 Mark):\n   • Electrons move randomly due to thermal energy.\n   • Path between successive collisions is straight lines.\n   • There is no net movement of electrons in any particular direction (average thermal velocity = 0).\n   • As a result, no electric current flows.",
      explanation: "Without field: straight-line segments between collisions with zero net drift. With field: parabolic curved segments drifting opposite to E⃗, creating macroscopic current."
    },
    {
      id: "sqp-2027-q19",
      number: 19,
      section: "B",
      marks: 2,
      type: "short-answer-2m",
      chapter: "Electrostatic Potential and Capacitance",
      questionText: "Two like charges +q and +q are placed at a distance d. What work must be done by an external agent to bring another charge +q from infinity to the midpoint of the line joining the two given charges?",
      markingScheme: "At the midpoint, distance from both charges is d/2. (½ Mark)\nPotential due to one charge +q at the midpoint: V₁ = kq / (d/2) = 2kq / d. (½ Mark)\nTotal potential due to both charges: V = 2 × (2kq / d) = 4kq / d. (½ Mark)\nWork done by external agent: W = q · V = q · (4kq / d) = 4kq² / d. (½ Mark)",
      explanation: "Electrostatic work by external agent W = q · ΔV = q · [V_midpoint - V_infinity]. Since V_infinity = 0, W = q · V_midpoint = q · (4kq/d) = 4kq²/d = q² / (πε₀d)."
    },
    {
      id: "sqp-2027-q20",
      number: 20,
      section: "B",
      marks: 2,
      type: "short-answer-2m",
      chapter: "Magnetism and Matter",
      hasOrChoice: true,
      questionText: "A certain magnetic substance is found to have a relative permeability of 800. What type of magnetic material is it? Write any two characteristics that such a material exhibits.",
      orQuestionText: "State Gauss's law of magnetism. Also discuss its significance.",
      markingScheme: "Option A:\nRelative magnetic permeability μ_r = 800.\nSince μ_r ≫ 1, the material is a FERROMAGNETIC material. (1 Mark)\nProperties (½ × 2 = 1 Mark):\n1. Ferromagnetic materials are strongly attracted by a magnetic field because they have a very high value of magnetic permeability.\n2. They retain magnetism even after the external magnetic field is removed (they show hysteresis and can be made into permanent magnets).\n\nOption B (OR):\nGauss's law for magnetism states that the net magnetic flux through any closed surface is always zero: ∮ B⃗ · dS⃗ = 0. (1 Mark)\nSignificance (½ × 2 = 1 Mark):\n• Magnetic monopoles do not exist (isolated magnetic poles cannot exist).\n• Magnetic field lines always form continuous closed loops without beginning or end.",
      explanation: "μ_r = 800 indicates strong domain coupling typical of ferromagnets. For Gauss's law for magnetism, ∮ B⃗ · dA⃗ = 0 proves there are no magnetic charges (monopoles)."
    },
    {
      id: "sqp-2027-q21",
      number: 21,
      section: "B",
      marks: 2,
      type: "short-answer-2m",
      chapter: "Atoms",
      hasOrChoice: true,
      questionText: "I. Why hydrogen spectral lines are considered to be a fingerprint of the element?\nII. If energy of an electron of the hydrogen atom in ground state is -13.6 eV, what should be the minimum energy of photon which can ionize the atom?",
      orQuestionText: "State Bohr's quantization condition for defining stationary orbit. How does de Broglie hypothesis explain the stationary orbit?",
      markingScheme: "Option A:\nI. Hydrogen spectral lines are considered a fingerprint because they represent the unique set of discrete wavelengths emitted when hydrogen electrons transit between quantized energy levels. Each spectral line corresponds to a specific energy difference, allowing identification in any environment. (1 Mark)\nII. Minimum photon energy required to ionize hydrogen from ground state (n=1) is E_ionization = E_∞ - E₁ = 0 - (-13.6 eV) = 13.6 eV. (1 Mark)\n\nOption B (OR):\nPostulate (1 Mark): Bohr postulated that electrons revolve around nucleus in discrete circular orbits without radiating energy: mvr = nh / 2π (where n = 1, 2, 3...).\nDe Broglie explanation (1 Mark):\nMoving electron has matter wavelength λ = h / mv.\nFor orbit to be stationary/stable, the electron matter wave must form a standing wave: circumference = nλ ⟹ 2πr = nλ.\nSubstituting λ = h / mv: 2πr = n(h / mv) ⟹ mvr = nh / 2π, which exactly derives Bohr's quantization condition!",
      explanation: "Every element has unique quantized energy states, making its emission line spectrum unique. De Broglie standing wave condition 2πr = nλ provides the theoretical proof for Bohr's quantization postulate."
    },

    // ---------------- SECTION C (7 x 3 = 21 Marks) ----------------
    {
      id: "sqp-2027-q22",
      number: 22,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Semiconductor Electronics",
      questionText: "Compare the energy band diagrams of metals, insulators, and semiconductors.\nI. Explain how the band gap determines conductivity.\nII. Apply this reasoning to justify why diamond (C) is an insulator while tin (Sn) is a conductor, though both are the elements of group IV.",
      markingScheme: "Energy Band Comparison (1 Mark):\n• Metals: Overlapping valence and conduction bands, or partially filled conduction band; abundant free electrons yield high conductivity.\n• Insulators: Large energy band gap (E_g > 3 eV); negligible thermal excitation at room temperature; poor conductivity.\n• Semiconductors: Moderate band gap (E_g ~ 1 eV); thermally/optically excited electron-hole pairs; conductivity can be varied by doping.\n\nI. Band Gap & Conductivity (1 Mark):\nThe magnitude of the band gap determines the energy required for valence electrons to jump into the conduction band. A smaller gap allows thermal energy at room temperature to excite carriers, giving higher conductivity.\n\nII. Diamond vs Tin Justification (1 Mark):\nBoth carbon and tin belong to Group 14 (IV). However, diamond (C) has a very small lattice parameter and strong covalent bonds, resulting in a large band gap of ~5.4 eV (insulator at room temperature). Tin (Sn) has larger atomic radius and metallic bonding where conduction and valence bands overlap (conductor with available states at Fermi level).",
      explanation: "Group 14 elements transition from insulator (Diamond C, Eg = 5.4 eV) to semiconductor (Si, Eg = 1.1 eV; Ge, Eg = 0.7 eV) to semimetal/metal (Grey/White Tin, overlapping bands) as atomic size increases."
    },
    {
      id: "sqp-2027-q23",
      number: 23,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Current Electricity",
      questionText: "Explain:\nI. It is easier to start a car engine on a warm day than on a chilly day.\nII. The resistance of our body is so large, even then one experiences a strong shock (sometimes even fatal) when one accidentally touches the live wire of, say 240 V supply.\nIII. Heat is generated continuously in an electric heater but its temperature becomes constant after some time.",
      markingScheme: "I. Internal Resistance of Car Battery (1 Mark):\nThe internal resistance of an electrolyte/battery decreases with increase in temperature. On a warm day, the lower internal resistance allows the battery to deliver the large cranking current (I = E / [R + r]) needed to start the car engine.\n\nII. Electric Shock Reason (1 Mark):\nAlthough dry skin has large resistance, internal bodily fluids have low resistance. More crucially, the human nervous system and cardiac muscles are sensitive to minute electric currents as low as a few milliamperes (10-20 mA causes muscle paralysis, >50 mA causes ventricular fibrillation). At 240 V, current easily exceeds this lethal threshold.\n\nIII. Constant Heater Temperature (1 Mark):\nAs the heater gets hotter than its surroundings, its rate of heat loss by radiation and convection increases (Stefan-Boltzmann law dQ_loss/dt ∝ T⁴ - T₀⁴). A thermal equilibrium is reached when rate of heat production (I²R) equals the rate of heat loss to surroundings, so temperature becomes steady.",
      explanation: "Electrolyte mobility increases with temperature reducing battery r. Current of ~10-25 mA through the chest disrupts heart rhythm. Steady temperature in heaters is established at thermal equilibrium."
    },
    {
      id: "sqp-2027-q24",
      number: 24,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Nuclei",
      questionText: "The atomic mass of ¹⁶₈O is 15.99493 u. Calculate the binding energy per nucleon of the oxygen nucleus.\n(Given: mass of proton = 1.00727 u, mass of neutron = 1.00866 u, 1 u = 931.5 MeV/c²)",
      markingScheme: "Number of protons Z = 8, neutrons N = 16 - 8 = 8.\nSum of individual nucleon masses (1 Mark):\nmp · Z + mn · N = 8(1.00727 u) + 8(1.00866 u) = 8.05816 + 8.06928 = 16.12744 u.\n\nMass Defect Δm (1 Mark):\nΔm = 16.12744 u - 15.99493 u = 0.13251 u.\n\nTotal Binding Energy B (1 Mark):\nB = Δm × 931.5 MeV = 0.13251 × 931.5 ≈ 123.43 MeV.\nBinding Energy per Nucleon (B / A):\nB / A = 123.43 MeV / 16 ≈ 7.71 MeV/nucleon.",
      explanation: "Calculated mass of 8 protons and 8 neutrons exceeds actual nuclear mass. The missing mass Δm is converted into binding energy Δm · c² = 123.4 MeV."
    },
    {
      id: "sqp-2027-q25",
      number: 25,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Ray Optics and Optical Instruments",
      questionText: "A diamond has a refractive index of 2.42.\nI. A ray of light inside the diamond strikes the surface at an angle of incidence of 30°. State whether it will undergo refraction or total internal reflection.\nII. Explain why diamonds sparkle when cut properly.",
      markingScheme: "I. Critical Angle Calculation & TIR (2 Marks):\nCritical angle θ_c = sin⁻¹(1 / μ) = sin⁻¹(1 / 2.42) = sin⁻¹(0.4132) ≈ 24.4° (i.e. θ_c < 30°). (1 Mark)\nGiven incidence angle i = 30°.\nSince i (30°) > θ_c (24.4°), the incident ray exceeds the critical angle.\nHence, the ray undergoes Total Internal Reflection (TIR) inside the diamond. (1 Mark)\n\nII. Why Diamonds Sparkle (1 Mark):\nA properly cut diamond has facets angled such that light entering its face undergoes multiple total internal reflections before exiting through the top facets, concentrating the light rays and making the diamond sparkle brilliantly.",
      explanation: "High refractive index (2.42) gives diamond an exceptionally small critical angle (~24.4°). Skilled jewelers cut diamond facets so almost all entering light undergoes multiple TIRs."
    },
    {
      id: "sqp-2027-q26",
      number: 26,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Wave Optics",
      questionText: "Derive Snell's law of refraction using Huygens' wave theory. What prediction of the wave theory was later experimentally verified?",
      markingScheme: "Huygens' Principle Statement (1 Mark):\nEvery point on a primary wavefront acts as a source of secondary spherical wavelets. The forward envelope/tangent to these secondary wavelets at a later time gives the new wavefront.\n\nSnell's Law Derivation (1 Mark):\nLet a plane wavefront AB be incident at angle i on a refracting boundary between medium 1 (speed v₁) and medium 2 (speed v₂).\nIn time t, point B advances to C in medium 1: BC = v₁ t.\nIn the same time t, secondary wavelet from A spreads into medium 2 with radius AE = v₂ t.\nFrom right triangle ABC: sin i = BC / AC = (v₁ t) / AC.\nFrom right triangle AEC: sin r = AE / AC = (v₂ t) / AC.\nDividing: sin i / sin r = BC / AE = (v₁ t) / (v₂ t) = v₁ / v₂.\nSince refractive index n = c / v ⟹ v₁ / v₂ = n₂ / n₁.\nTherefore: n₁ sin i = n₂ sin r (Snell's Law of Refraction).\n\nPrediction & Experimental Verification (1 Mark):\nWave theory predicted that light travels slower in an optically denser medium than in a rarer medium (v ∝ 1/n).\nThis was later experimentally confirmed by Foucault (and Fizeau), showing speed of light in water is less than in air, disproving Newton's corpuscular theory.",
      explanation: "Huygens' construction proves Snell's law purely from wave geometry and wavelength reduction λ₂ = λ₁ (v₂/v₁)."
    },
    {
      id: "sqp-2027-q27",
      number: 27,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Moving Charges and Magnetism",
      hasOrChoice: true,
      questionText: "I. An ammeter has an internal resistance of 13 Ω and is originally designed to measure currents only up to 100 A. To extend its range for high-current measurements, a shunt resistor is connected in parallel with it. After adding the shunt, the same meter can now read currents as high as 750 A without damage. Using the principle of current division in parallel circuits, determine the value of the shunt resistance required to increase the measuring range of the ammeter.\nII. The coil of a moving coil galvanometer is wound over a metal frame. Why?",
      orQuestionText: "I. A small current loop behaves like a tiny magnet when placed in a magnetic field. Using this idea, explain what physical quantity determines the strength and orientation of such a magnetic dipole. Also state the SI unit of this quantity.\nII. A steel wire of length l has a magnetic moment m. It is bent into a semicircular arc. What is its new magnetic moment?",
      markingScheme: "Option A:\nI. Ammeter Shunt Calculation (2 Marks):\nGalvanometer/original meter resistance G = 13 Ω, maximum full-scale current I_g = 100 A.\nNew total current range I = 750 A. (½ Mark)\nShunt formula: S = (I_g · G) / (I - I_g) (½ Mark)\nS = (100 × 13) / (750 - 100) = 1300 / 650 = 2 Ω. (1 Mark)\n\nII. Metal Frame Function (1 Mark):\nThe coil is wound on a metallic (copper/aluminium) frame to provide ELECTROMAGNETIC DAMPING. As the coil oscillates, eddy currents are induced in the metallic frame which oppose its motion (by Lenz's law), bringing the pointer to rest quickly at its steady reading without sluggish oscillation.\n\nOption B (OR):\nI. Magnetic Dipole Moment (1.5 Marks):\nThe physical quantity is Magnetic Dipole Moment (M⃗ = I A⃗). (½ Mark)\nStrength is determined by current I and loop area A. Direction is given by right-hand rule perpendicular to the loop plane. (½ Mark)\nSI Unit: Ampere-metre² (A·m²) or Joule per Tesla (J/T). (½ Mark)\n\nII. Bent Wire Magnetic Moment (1.5 Marks):\nPole strength q_m = m / l. (½ Mark)\nWhen bent into semicircle of radius r, circumference πr = l ⟹ r = l / π. (½ Mark)\nNew distance between poles = diameter = 2r = 2l / π.\nNew magnetic moment m' = q_m × 2r = (m / l) × (2l / π) = 2m / π. (½ Mark)",
      explanation: "Shunt S = 2 Ω allows 650 A to bypass the meter while only 100 A passes through G. Semicircular bending reduces pole separation from straight length l to diameter 2l/π, decreasing magnetic moment to 2m/π."
    },
    {
      id: "sqp-2027-q28",
      number: 28,
      section: "C",
      marks: 3,
      type: "short-answer-3m",
      chapter: "Electromagnetic Induction",
      questionText: "I. A bar magnet falls from a height through a metal ring. Its acceleration will be less than 'g'. Explain.\nII. A coil of copper wire is wound uniformly on a wooden equilateral triangular frame. If each side of the triangle is increased to 5 times its original length, while keeping the number of turns per unit length unchanged, how does the self-inductance of the coil change?",
      markingScheme: "I. Falling Magnet Acceleration (1 Mark):\nAs the magnet falls toward the ring, the downward magnetic flux linked with the ring increases. By Lenz's law, an induced current is set up in the ring in a direction that opposes the approach of the magnet (creating an upward repulsive force). This upward magnetic force opposes gravity, resulting in a net downward acceleration a < g.\n\nII. Self-Inductance Scaling (2 Marks):\nSelf-inductance of a solenoid: L = μ₀ n² A l (or L = μ₀ N² A / l). (½ Mark)\nGiven:\n• Number of turns per unit length n is unchanged (n' = n).\n• Length of side increases 5 times: cross-sectional area A ∝ (side)² ⟹ A' = 5² A = 25 A. (½ Mark)\n• Coil length l increases 5 times: l' = 5 l. (½ Mark)\nNew self-inductance: L' = μ₀ n² A' l' = μ₀ n² (25 A) (5 l) = 125 × (μ₀ n² A l) = 125 L. (½ Mark)\n[Or using total turns N: N ∝ l ⟹ N' = 5N, L' = μ₀ (5N)² (25A) / (5l) = 125 L].\nThe self-inductance increases by a factor of 125.",
      explanation: "Lenz's law produces repulsive force while entering and attractive force while exiting, both reducing acceleration below g. Inductance scales as n² · Area · Length = 1 × 25 × 5 = 125."
    },

    // ---------------- SECTION D (2 x 4 = 8 Marks) ----------------
    {
      id: "sqp-2027-q29",
      number: 29,
      section: "D",
      marks: 4,
      type: "case-study",
      chapter: "Semiconductor Electronics",
      casePrompt: "In 2023, researchers developed flexible semiconductor films using organic polymers that could be printed like newspaper sheets. These films can bend, fold, and still conduct electricity efficiently. Unlike traditional silicon chips, polymer semiconductors are lightweight, biodegradable, and can be integrated into clothing or medical patches. Imagine a shirt that monitors your heartbeat or a bandage that tracks wound healing in real time. Such innovations extend the idea of semiconductors beyond rigid circuits, showing how manipulating band gaps and carrier mobility in new materials can revolutionize electronics for healthcare, sustainability, and wearable technology.",
      subQuestions: [
        {
          subQ: "I",
          question: "Which advantage of semiconductors makes them ideal for wearable devices like smart shirts?",
          options: [
            "A. High voltage operation (~100 V)",
            "B. Bulky design and short life",
            "C. Low power consumption and reliability",
            "D. Requirement of external heating"
          ],
          correctAnswer: "C. Low power consumption and reliability",
          marks: 1,
          markingScheme: "C. Low power consumption and reliability (1 Mark). Wearable devices operate continuously with minimal energy usage and dependable performance."
        },
        {
          subQ: "II",
          question: "Carbon (diamond) has a band gap of 5.4 eV, while silicon has 1.1 eV. Why is silicon used in electronic devices but not diamond?",
          options: [
            "A. Diamond has too many free electrons.",
            "B. Diamond's band gap is too large for thermal excitation at room temperature.",
            "C. Silicon has weaker covalent bonds than diamond.",
            "D. Diamond cannot form covalent bonds."
          ],
          correctAnswer: "B. Diamond's band gap is too large for thermal excitation at room temperature.",
          marks: 1,
          markingScheme: "B. Diamond's band gap is too large for thermal excitation at room temperature (1 Mark)."
        },
        {
          subQ: "III",
          question: "In an intrinsic semiconductor at room temperature:",
          options: [
            "A. only electrons contribute to conduction.",
            "B. only holes contribute to conduction.",
            "C. number of electrons equals number of holes.",
            "D. no conduction occurs at all."
          ],
          correctAnswer: "C. number of electrons equals number of holes.",
          marks: 1,
          markingScheme: "C. Number of electrons equals number of holes (1 Mark). Electrons and holes are created in pairs."
        },
        {
          subQ: "IV",
          question: "How will you use the concept of majority and minority carriers to explain the efficiency of polymer semiconductors in wearable technology?",
          options: [],
          correctAnswer: "In polymer semiconductors, electrical conduction occurs predominantly via majority carriers (electrons in n-type or holes in p-type). Controlling majority carrier concentration and mobility enables flexible, efficient conduction at low operating voltages, while minimizing minority carrier recombination losses.",
          marks: 1,
          markingScheme: "In polymer semiconductors, electrical conduction mainly occurs due to majority carriers (electrons in n-type or holes in p-type materials). By controlling the concentration and mobility of these carriers, polymer semiconductors conduct electricity efficiently even when bent or stretched. Minority carriers govern recombination and stability, maintaining low-power reliable performance for wearable patches. (1 Mark)"
        }
      ]
    },
    {
      id: "sqp-2027-q30",
      number: 30,
      section: "D",
      marks: 4,
      type: "case-study",
      chapter: "Dual Nature of Radiation and Matter",
      casePrompt: "In 1905, Albert Einstein explained the photoelectric effect by proposing that light consists of discrete packets of energy called photons. Each photon carries an energy E = hν. When a photon strikes a metal surface, it can transfer its energy to an electron. If the photon's energy exceeds the work function of the metal, the electron can be emitted with maximum kinetic energy K_max = hν - ϕ₀. This discovery challenged the classical wave theory, which predicted that electron emission should depend only on the intensity of light. Instead, experiments showed that emission of electrons depends on frequency too, proving the particle nature of light.",
      subQuestions: [
        {
          subQ: "I",
          question: "Define the term work function.",
          options: [],
          correctAnswer: "The work function (ϕ₀) of a metal is the minimum amount of energy required by an electron to just escape from the metal surface with zero kinetic energy.",
          marks: 1,
          markingScheme: "The work function (ϕ₀) of a metal is the minimum energy required to remove an electron from the surface of the metal so that it just escapes with zero kinetic energy. (1 Mark)"
        },
        {
          subQ: "II",
          question: "Why does the increase in the intensity of light not increase the maximum kinetic energy of photoelectrons?",
          options: [],
          correctAnswer: "Increasing intensity increases the number of incident photons per second, not the energy of individual photons. Since each electron absorbs only a single photon (one-to-one interaction), its kinetic energy depends solely on photon frequency (E = hν), not light intensity.",
          marks: 1,
          markingScheme: "Increasing light intensity increases the number of photons, not the energy of each photon. Since photon energy depends only on frequency (E = hν), K_max depends strictly on frequency. Higher intensity only increases the number of emitted photoelectrons (photoelectric current). (1 Mark)"
        },
        {
          subQ: "III",
          question: "A metal surface has a work function of 2 eV. Light of frequency 1.2 × 10¹⁵ Hz falls on it. Which statement is correct?",
          options: [
            "A. No electron is emitted because the intensity is low.",
            "B. Electrons are emitted with maximum kinetic energy less than 2 eV.",
            "C. Electrons are emitted with maximum kinetic energy greater than 0 eV.",
            "D. Electron emission depends only on the intensity of light and not on frequency."
          ],
          correctAnswer: "C. Electrons are emitted with maximum kinetic energy greater than 0 eV.",
          marks: 1,
          markingScheme: "C. Electrons are emitted with maximum kinetic energy greater than 0 eV (1 Mark).\nPhoton energy E = hν = (4.14 × 10⁻¹⁵ eV·s)(1.2 × 10¹⁵ s⁻¹) ≈ 5 eV.\nK_max = E - ϕ₀ = 5 eV - 2 eV = 3 eV > 0."
        },
        {
          subQ: "IV",
          question: "Which observation(s) directly contradict(s) the classical wave theory of light?",
          options: [
            "A. Photoelectric current increases with intensity",
            "B. The maximum kinetic energy depends only on frequency and not on intensity.",
            "C. The electrons are emitted instantaneously.",
            "D. Both B and C."
          ],
          correctAnswer: "D. Both B and C.",
          marks: 1,
          markingScheme: "D. Both B and C (1 Mark).\n• B: Maximum kinetic energy depends only on frequency, not intensity.\n• C: Photoelectric emission is instantaneous (~10⁻⁹ s).\nBoth contradict continuous wave accumulation theory."
        }
      ]
    },

    // ---------------- SECTION E (3 x 5 = 15 Marks) ----------------
    {
      id: "sqp-2027-q31",
      number: 31,
      section: "E",
      marks: 5,
      type: "long-answer-5m",
      chapter: "Electrostatic Potential and Capacitance",
      hasOrChoice: true,
      questionText: "I. An isolated conductor cannot have a large capacitance. Why?\nII. How would you connect 6 μF, 9 μF and 18 μF capacitors to obtain:\n  i. the minimum capacitance\n  ii. the maximum capacitance\nIII. The capacitance of a parallel plate capacitor is increased as the area of the plates increases. What are the other two factors on which the capacitance depends?",
      orQuestionText: "I. Show that the electric field at any point is equal to the negative of the potential gradient at that point.\nII. A small metallic sphere is gradually charged in open air. It is observed that electrical breakdown of air occurs when the electric field at its surface reaches 2.5 × 10⁶ V m⁻¹. If the sphere is allowed to attain a maximum potential of 5 × 10⁵ V without causing any discharge, determine the minimum radius the insulated sphere must have.",
      markingScheme: "Option A:\nI. Isolated Conductor Capacitance (2 Marks):\n• For an isolated conducting sphere, capacitance is C = 4πε₀R. (½ Mark)\n• Since ε₀ is constant, capacitance depends directly on radius R. (½ Mark)\n• To obtain 1 Farad capacitance, radius required is R = C / 4πε₀ = 1 × (9 × 10⁹) m = 9 × 10⁶ km (1500 times larger than Earth's radius!). (½ Mark)\n• Therefore, an isolated conductor of practical dimensions can only have a very small capacitance (pF or μF). (½ Mark)\n\nII. Capacitor Combinations (2 Marks):\ni. Minimum capacitance: Connect all three in SERIES: (½ Mark)\n   1 / C_min = 1/6 + 1/9 + 1/18 = (3 + 2 + 1) / 18 = 6 / 18 = 1/3 ⟹ C_min = 3 μF. (½ Mark)\nii. Maximum capacitance: Connect all three in PARALLEL: (½ Mark)\n   C_max = 6 + 9 + 18 = 33 μF. (½ Mark)\n\nIII. Parallel Plate Factors (1 Mark):\nFrom C = (ε₀ · ε_r · A) / d:\n1. Distance d between plates (C ∝ 1/d). (½ Mark)\n2. Dielectric permittivity / medium between plates (C ∝ ε_r). (½ Mark)\n\nOption B (OR):\nI. Derivation of E = -dV/dr (3 Marks):\n• Consider charge +q placed in electric field E⃗. Displace positive test charge q₀ through small distance dr against the field. (½ Mark)\n• Electrostatic force on charge: F⃗ = q₀ E⃗. (½ Mark)\n• Work done by external agent: dW = -F · dr = -q₀ E dr. (½ Mark)\n• By definition of potential difference: dV = dW / q₀ = -E dr. (1 Mark)\n• Rearranging: E = -dV / dr. (½ Mark)\n• Hence, electric field is equal to the negative gradient of electric potential.\n\nII. Sphere Radius Calculation (2 Marks):\nPotential V = kq / r and Electric field at surface E = kq / r².\nDividing: V / E = (kq / r) / (kq / r²) = r. (1 Mark)\nr = V / E = (5 × 10⁵ V) / (2.5 × 10⁶ V m⁻¹) = 0.2 m = 20 cm. (1 Mark)\nThe minimum radius of the insulated sphere must be 0.2 m (20 cm).",
      explanation: "Part A proves why multi-plate capacitors with small d and dielectric are used instead of isolated spheres. Part B uses the fundamental field-potential relationship E = V/r for spherical symmetry."
    },
    {
      id: "sqp-2027-q32",
      number: 32,
      section: "E",
      marks: 5,
      type: "long-answer-5m",
      chapter: "Ray Optics and Optical Instruments",
      hasOrChoice: true,
      questionText: "A compound microscope consists of an objective lens of focal length 2 cm and an eyepiece lens of focal length 5 cm. The object is placed 2.2 cm from the objective lens.\nI. Calculate the position of the image formed by the objective lens.\nII. The eyepiece is so placed that the final image is formed at infinity. Find the magnifying power of the microscope.\nIII. Explain briefly why the compound microscope provides much higher magnification compared to a simple magnifier.",
      orQuestionText: "An astronomical telescope uses an objective lens of focal length 100 cm and an eyepiece of focal length 5 cm.\nI. Calculate the magnifying power of the telescope when the final image is formed at infinity.\nII. If the least distance of distinct vision of the observer is 25 cm, calculate the magnifying power when the final image is formed at this distance.\nIII. Explain why the objective lens of an astronomical telescope is made with a large focal length and aperture, while the eyepiece has a small focal length.",
      markingScheme: "Option A (Compound Microscope):\nI. Image Position of Objective Lens (2 Marks):\nGiven: f_o = +2 cm, u_o = -2.2 cm.\nLens formula: 1/f_o = 1/v_o - 1/u_o ⟹ 1/v_o = 1/f_o + 1/u_o (1 Mark)\n1/v_o = 1/2 - 1/2.2 = (2.2 - 2) / 4.4 = 0.2 / 4.4 = 1/22.\nv_o = +22 cm. (1 Mark)\nThe real image is formed at 22 cm from the objective lens.\n\nII. Magnifying Power at Infinity (2 Marks):\nWhen final image is formed at infinity (normal adjustment):\nM = (v_o / |u_o|) × (D / f_e) (1 Mark)\nM = (22 / 2.2) × (25 / 5) = 10 × 5 = 50. (1 Mark)\n\nIII. Higher Magnification Justification (1 Mark):\nA compound microscope uses two successive stages of magnification:\n1. Objective produces a magnified real intermediate image (m_o = v_o/u_o = 10).\n2. Eyepiece acts as a simple magnifier and magnifies this intermediate image further (m_e = D/f_e = 5).\nTotal magnification is the PRODUCT of both: M = m_o × m_e = 50, far exceeding a single lens magnifier.\n\nOption B (OR - Astronomical Telescope):\nGiven: f_o = 100 cm, f_e = 5 cm, D = 25 cm.\nI. Image at Infinity / Normal Adjustment (2 Marks):\nM = f_o / f_e = 100 / 5 = 20. (2 Marks)\n\nII. Image at Least Distance of Distinct Vision (2 Marks):\nM = (f_o / f_e) × [1 + (f_e / D)] = (100 / 5) × [1 + 5/25] = 20 × (1 + 0.2) = 20 × 1.2 = 24. (2 Marks)\n\nIII. Objective vs Eyepiece Design Reasons (1 Mark):\n• Large focal length f_o: Telescope magnifying power M = f_o / f_e, so larger f_o directly increases angular magnification.\n• Large aperture of objective: Gathers more light from faint distant stars, increasing brightness, image resolution, and resolving power.\n• Small focal length f_e: Maximizes overall magnification M = f_o / f_e.",
      explanation: "Optical instruments formulas: Compound microscope M = (v_o/u_o)(D/f_e). Telescope M = f_o/f_e (at infinity) and M = (f_o/f_e)(1 + f_e/D) (at near point)."
    },
    {
      id: "sqp-2027-q33",
      number: 33,
      section: "E",
      marks: 5,
      type: "long-answer-5m",
      chapter: "Alternating Current",
      hasOrChoice: true,
      questionText: "A certain electrical device is used to convert an alternating voltage of smaller magnitude into a much larger alternating voltage without violating the law of conservation of energy.\nI. With the help of a neat labelled diagram, describe the principle on which this device operates and explain how it increases the voltage.\nII. State the basic working mechanism of the device and mention the condition required in its input signal for proper functioning.\nIII. Give one reason why this device does not operate with 100% efficiency in practical situations.",
      orQuestionText: "I. What do you mean by the resonance condition of a series LCR-circuit? Write an expression for the resonant frequency.\nII. Describe the use of a series resonant circuit in the tuning of a radio receiver.",
      markingScheme: "Option A (Transformer):\nI. Device Name, Principle & Voltage Step-Up (2 Marks):\n• Device: Step-up transformer. (½ Mark)\n• Principle: Mutual Induction — when alternating current passes through primary coil, changing magnetic flux induces an emf in secondary coil. (½ Mark)\n• Voltage increase: V_s / V_p = N_s / N_p. When N_s > N_p, secondary voltage V_s > V_p. (½ Mark)\n• Energy conservation: For ideal transformer Pin = Pout ⟹ V_p I_p = V_s I_s. As voltage increases, current decreases proportionally, conserving power. (½ Mark)\n\nII. Working Mechanism & Input Condition (2 Marks):\n• Mechanism: Alternating voltage in primary creates time-varying magnetic flux in soft-iron core. This flux links secondary turns, inducing alternating emf without electrical contact. (1 Mark)\n• Input condition: Input MUST be alternating current (AC). A direct current (DC) produces constant magnetic flux (dΦ/dt = 0), yielding zero induced emf in secondary. (1 Mark)\n\nIII. Reasons for Inefficiency (<100%) (1 Mark - any one):\n• Copper losses (I²R heating in copper windings).\n• Eddy current losses (circulating currents in iron core dissipated as heat).\n• Hysteresis loss (energy dissipated in magnetizing/demagnetizing core each cycle).\n• Magnetic flux leakage (not all flux links secondary turns).\n\nOption B (OR - Series LCR Resonance & Radio Tuning):\nI. Resonance Condition & Frequency (3 Marks):\n• Resonance definition: In series LCR circuit, resonance occurs when inductive reactance equals capacitive reactance: X_L = X_C. (1 Mark)\n• ωL = 1 / (ωC) ⟹ ω₀² = 1 / (LC) ⟹ ω₀ = 1 / √(LC). (1 Mark)\n• Resonant frequency: f₀ = ω₀ / 2π = 1 / (2π√(LC)). (½ Mark)\n• At resonance, net reactance X = 0, impedance Z = R (minimum), and current amplitude is maximum for given voltage. (½ Mark)\n\nII. Radio Receiver Tuning Mechanism (2 Marks):\n• A radio station transmits signals at a specific carrier frequency. (½ Mark)\n• In the radio receiver antenna/input stage, a tuneable series LCR circuit (with fixed L and variable capacitor C) is used. (½ Mark)\n• By turning the tuning knob, capacitor C is varied until f₀ = 1 / (2π√(LC)) matches the frequency of the desired station. (½ Mark)\n• At resonance, impedance drops to minimum Z = R, generating maximum current and voltage for that station, while signals from all other non-resonant frequencies are suppressed and rejected. (½ Mark)",
      explanation: "Question 33 is the premier 5-marker in Alternating Current, testing either Transformer mutual induction and energy losses, or LCR resonance and radio tuning."
    }
  ]
};
