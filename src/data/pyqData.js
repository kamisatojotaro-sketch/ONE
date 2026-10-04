// Comprehensive CBSE Class 12 High-Yield Previous Year Board Questions (PYQs)
// Mapped by Subject and Exam Portion Chapters with Official Marking Schemes

export const PYQ_DATABASE = {
  physics: [
    {
      id: 'phy-pyq-1',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-11',
      year: 'CBSE 2023 (5 Marks)',
      question: 'State Gauss\'s law in electrostatics. Using this theorem, derive an expression for the electric field due to an infinitely long straight uniformly charged wire of linear charge density λ.',
      solution: `1. Statement of Gauss's Law:
   The total electric flux through any closed Gaussian surface in free space is equal to 1/ε₀ times the net electric charge enclosed by the surface:
   ∮ E · dA = q_enclosed / ε₀

2. Choice of Gaussian Surface:
   Consider an infinitely long thin straight wire of linear charge density λ. Draw a coaxial cylindrical Gaussian surface of radius r and length l with the wire as its central axis.

3. Flux through Gaussian Surface:
   • Flat circular end caps: Field E is perpendicular to normal area vector dA (θ = 90°), so flux Φ_caps = E · dA cos 90° = 0.
   • Curved cylindrical surface: E is directed radially outwards, parallel to the area vector dA at all points (θ = 0°).
   Φ_curved = ∮ E · dA = E ∮ dA = E (2π r l)

4. Enclosed Charge & Final Formula:
   Net charge enclosed inside length l is q = λ · l.
   Applying Gauss's Law:
   E (2π r l) = (λ · l) / ε₀
   ⟹ E = λ / (2πε₀ r)`
    },
    {
      id: 'phy-pyq-2',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
      subtopicId: 'phy-sub-1-4',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Why do two electric field lines never intersect each other? Write two other fundamental properties of electric field lines.',
      solution: `1. Non-intersection:
   If two electric field lines were to intersect at a common point, then at that point of intersection two distinct tangents could be drawn. This would imply two different directions of the net electric field at a single point in space, which is physically impossible.

2. Property 1 (Origin & Termination):
   Electric field lines originate from positive charges (or infinity) and terminate on negative charges (or infinity); they do not form continuous closed loops because the electrostatic field is conservative.

3. Property 2 (Field Strength Representation):
   The relative density (closeness) of field lines indicates the magnitude of the electric field: crowded lines denote a strong field, while widely spaced lines represent a weak field.`
    },
    {
      id: 'phy-pyq-3',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-3',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Define an equipotential surface. Show that the electric field is always directed normal to the equipotential surface at every point.',
      solution: `1. Definition:
   An equipotential surface is a geometric surface having the same electrostatic potential at every point on it: V_A = V_B for any two points A and B on the surface.

2. Work Done on Equipotential Surface:
   Work done in moving a test charge q₀ between any two points A and B on the surface is:
   W = q₀ (V_B − V_A) = q₀ (0) = 0

3. Relation with Electric Field:
   Also, work done along path dl is given by W = ∫ E · dl = ∫ E dl cos θ.
   Since W = 0 and neither E nor dl is zero, we must have:
   cos θ = 0  ⟹  θ = 90°
   Therefore, the electric field vector E is always perpendicular (normal) to the equipotential surface at every point.`
    },
    {
      id: 'phy-pyq-4',
      chapterId: 'phy-ch-2',
      chapterName: 'Ch 2: Electrostatic Potential & Capacitance',
      subtopicId: 'phy-sub-2-8',
      year: 'CBSE 2020 (5 Marks)',
      question: 'Derive an expression for the energy stored in a parallel plate capacitor of capacitance C charged to a potential V. Hence deduce the formula for energy density.',
      solution: `1. Work Done in Charging:
   Suppose at an intermediate stage a charge q' has been transferred to the capacitor plates, establishing potential difference V' = q' / C.
   Work required to transfer additional infinitesimal charge dq':
   dW = V' dq' = (q' / C) dq'

2. Total Energy:
   Integrating from q' = 0 to full charge Q:
   U = ∫₀^Q (q' / C) dq' = [q'² / (2C)]₀^Q = Q² / (2C)
   Using Q = C V:
   U = ½ C V² = ½ Q V

3. Energy Density (u):
   For parallel plate capacitor: C = ε₀ A / d, and V = E d.
   U = ½ (ε₀ A / d) (E d)² = ½ ε₀ E² (A d)
   Volume of dielectric space = A · d.
   Energy density u = Total Energy / Volume = ½ ε₀ E²`
    },
    {
      id: 'phy-pyq-5',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-5',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Define drift velocity of free electrons. Derive the relation between electric current I and drift velocity v_d.',
      solution: `1. Definition:
   Drift velocity (v_d) is the average velocity acquired by free conduction electrons in a conductor opposite to the applied external electric field: v_d = e E τ / m.

2. Derivation of I = n A e v_d:
   • Consider a conductor of length l and uniform cross-sectional area A.
   • Let n = number density of free conduction electrons per unit volume.
   • Total number of electrons in volume (A · l) = N = n · A · l.
   • Total charge contained in conductor = Q = N · e = n · A · l · e.
   • Time taken by electrons to traverse length l with drift velocity v_d:
     t = l / v_d.
   • Steady current I = Q / t = (n A l e) / (l / v_d)
   ⟹ I = n A e v_d`
    },
    {
      id: 'phy-pyq-6',
      chapterId: 'phy-ch-3',
      chapterName: 'Ch 3: Current Electricity',
      subtopicId: 'phy-sub-3-9',
      year: 'CBSE 2022 (3 Marks)',
      question: 'State Kirchhoff\'s rules for electrical networks. Write the fundamental conservation law on which each rule is based.',
      solution: `1. First Rule (Junction Rule / Current Law):
   The algebraic sum of electric currents meeting at any electrical junction is zero:
   Σ I = 0 (Currents entering junction = Currents leaving).
   Conservation Law: Based strictly on the Conservation of Electric Charge.

2. Second Rule (Loop Rule / Voltage Law):
   In any closed mesh or loop of an electrical network, the algebraic sum of potential differences (IR products) plus electromotive forces (EMFs) is zero:
   Σ ΔV = 0  or  Σ ε = Σ (I · R)
   Conservation Law: Based strictly on the Conservation of Energy.`
    },
    {
      id: 'phy-pyq-7',
      chapterId: 'phy-ch-4',
      chapterName: 'Ch 4: Moving Charges & Magnetism',
      subtopicId: 'phy-sub-4-2',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Derive an expression for the magnetic field at the centre of a circular current-carrying loop using Biot-Savart Law. State the rule used to determine its direction.',
      solution: `1. Biot-Savart Law for Current Element:
   dB = (μ₀ / 4π) · [I (dl × r̂) / r²] = (μ₀ / 4π) · (I dl sin θ / r²)
   For a circular loop of radius R, every element dl on the circumference is perpendicular to the radius vector pointing to the centre (θ = 90°, sin 90° = 1).
   dB = (μ₀ / 4π) · (I dl / R²)

2. Total Field at Centre:
   Integrating over the complete circular loop circumference:
   B = ∮ dB = (μ₀ I / 4π R²) ∮ dl
   Since ∮ dl = 2π R:
   B = (μ₀ I / 4π R²) · (2π R) = μ₀ I / (2R)
   For a coil of N turns: B = μ₀ N I / (2R)

3. Direction:
   Given by Right-Hand Thumb Rule: Curl the fingers of the right hand along the direction of current; the extended thumb points along the direction of magnetic field.`
    },
    {
      id: 'phy-pyq-8',
      chapterId: 'phy-ch-4',
      chapterName: 'Ch 4: Moving Charges & Magnetism',
      subtopicId: 'phy-sub-4-8',
      year: 'CBSE 2020 (3 Marks)',
      question: 'Derive the expression for the magnetic force per unit length between two infinitely long straight parallel wires carrying steady currents I₁ and I₂ separated by distance d. Hence define 1 Ampere.',
      solution: `1. Magnetic Field of Wire 1 at Wire 2:
   B₁ = μ₀ I₁ / (2π d)  (perpendicular to the plane containing the wires).

2. Force on length L of Wire 2:
   F₂ = I₂ L B₁ sin 90° = I₂ L [μ₀ I₁ / (2π d)]
   Force per unit length:
   f = F / L = (μ₀ I₁ I₂) / (2π d)

3. Nature: Like currents attract each other; unlike currents repel each other.

4. Definition of 1 Ampere:
   One Ampere is that constant current which, when maintained in two straight, parallel, infinitely long conductors of negligible cross-section placed 1 metre apart in vacuum, produces between them a force equal to 2 × 10⁻⁷ Newtons per metre of length.`
    },
    {
      id: 'phy-pyq-9',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-3',
      year: 'CBSE 2023 (3 Marks)',
      question: 'State Lenz\'s law of electromagnetic induction. Show that Lenz\'s law is a direct consequence of the principle of conservation of energy.',
      solution: `1. Statement of Lenz's Law:
   The polarity of induced electromotive force (EMF) or the direction of induced current is always such that it opposes the change in magnetic flux that produces it: ε = −dΦ_B / dt.

2. Justification via Conservation of Energy:
   • When a bar magnet\'s North pole is pushed towards a closed coil, the induced current flows counter-clockwise to form an induced North pole facing the magnet, producing a repulsive force.
   • Mechanical work must be done against this repulsive force to move the magnet closer.
   • This mechanical energy expended is converted into electrical energy in the coil, which eventually dissipates as Joule heat.
   • If induced current assisted the motion (attraction), the magnet would accelerate without any external work, creating energy out of nothing, violating energy conservation.`
    },
    {
      id: 'phy-pyq-9b',
      chapterId: 'phy-ch-6',
      chapterName: 'Ch 6: Electromagnetic Induction',
      subtopicId: 'phy-sub-6-2',
      year: 'CBSE 2024, 2020 (3 Marks)',
      question: 'State Faraday\'s laws of electromagnetic induction and write its mathematical formulation. A closed coil of resistance R is placed in a magnetic field. Show that the total charge induced in the coil when magnetic flux changes by ΔΦ is independent of the time taken for the change.',
      solution: `1. Faraday's Laws of Electromagnetic Induction:
   • First Law (Qualitative): Whenever the magnetic flux linked with a closed circuit changes with time, an electromotive force (EMF) is induced in the circuit, lasting as long as the flux change continues.
   • Second Law (Quantitative): The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux linked with the circuit:
     |ε| = N |dΦ_B / dt|
   • Incorporating Lenz's Law (direction): ε = −N (dΦ_B / dt)

2. Derivation: Time-Independence of Induced Charge:
   • Let R be the total resistance of the closed circuit.
   • Instantaneous induced current I = |ε| / R = (N / R) · (dΦ / dt)
   • Small charge dq passing in time dt is: dq = I · dt = [ (N / R) · (dΦ / dt) ] · dt = (N / R) · dΦ
   • Integrating over total flux change from Φ₁ to Φ₂:
     q = ∫ dq = (N / R) ∫ dΦ = (N / R) · ΔΦ_B
   • Conclusion: The total induced charge q = (N · ΔΦ_B) / R contains NO time factor (t) and is therefore strictly independent of the time or velocity of the flux change.`
    },
    {
      id: 'phy-pyq-10',
      chapterId: 'phy-ch-7',
      chapterName: 'Ch 7: Alternating Current',
      subtopicId: 'phy-sub-7-6',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Derive the condition for electrical resonance in a series LCR alternating current circuit. Draw the graph showing variation of circuit current with driving frequency for two different values of resistance R.',
      solution: `1. Impedance of Series LCR:
   Z = √[ R² + (X_L − X_C)² ] = √[ R² + (ωL − 1/ωC)² ]
   Current amplitude: I₀ = V₀ / Z.

2. Condition for Resonance:
   Current is maximum when impedance Z is minimum (Z_min = R). This occurs when inductive reactance cancels capacitive reactance:
   X_L = X_C  ⟹  ω₀ L = 1 / (ω₀ C)
   ω₀² = 1 / (L C)
   ⟹ Resonant Angular Frequency: ω₀ = 1 / √(L C)
   ⟹ Resonant Linear Frequency: f₀ = 1 / [2π √(L C)]

3. Resonance Graph & Sharpness:
   • The current-frequency curve peaks at f = f₀.
   • Smaller resistance R gives a very tall, narrow, sharp peak (high Q-factor).
   • Larger resistance R gives a broad, flat peak (damped response).`
    },
    {
      id: 'phy-pyq-11',
      chapterId: 'phy-ch-8',
      chapterName: 'Ch 8: Electromagnetic Waves',
      subtopicId: 'phy-sub-8-3',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Explain the concept of displacement current introduced by Maxwell. Write the modified Ampere-Maxwell law.',
      solution: `1. Need for Displacement Current:
   While applying Ampere's circuital law ∮ B · dl = μ₀ I to charging a capacitor, Ampere's law holds for a flat surface bounded by the loop, but predicts zero field for a pot-shaped surface passing between capacitor plates where no conduction electrons flow. This inconsistency indicated a missing term.

2. Definition:
   Maxwell proposed that a time-varying electric field between capacitor plates creates a displacement current:
   I_d = ε₀ (dΦ_E / dt)

3. Ampere-Maxwell Equation:
   Total current = Conduction current (I_c) + Displacement current (I_d).
   ∮ B · dl = μ₀ (I_c + I_d) = μ₀ [ I_c + ε₀ (dΦ_E / dt) ]`
    }
  ],

  chemistry: [
    {
      id: 'chem-pyq-solutions-nonideal-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-4',
      year: 'CBSE 2023, 2020 (3 Marks)',
      question: '(a) What is meant by a non-ideal solution? (b) Differentiate between an ideal solution and a non-ideal solution on the basis of: (i) Enthalpy of mixing (ΔH_mix), (ii) Volume change on mixing (ΔV_mix). (c) Why does a mixture of ethanol and acetone show positive deviation from Raoult\'s law?',
      solution: `1. Definition of Non-Ideal Solution:
   A binary solution that does NOT obey Raoult's law over the entire range of concentration and temperature, having ΔH_mixing ≠ 0 and ΔV_mixing ≠ 0, is called a non-ideal solution.

2. Distinction:
   • Enthalpy of Mixing (ΔH_mix):
     - Ideal Solution: ΔH_mix = 0 (No heat is absorbed or evolved on mixing).
     - Non-Ideal Solution: ΔH_mix ≠ 0 (Heat is either absorbed [ΔH > 0] or evolved [ΔH < 0]).
   • Volume Change of Mixing (ΔV_mix):
     - Ideal Solution: ΔV_mix = 0 (Total volume equals sum of components: V_total = V_A + V_B).
     - Non-Ideal Solution: ΔV_mix ≠ 0 (Volume either expands [ΔV > 0] or contracts [ΔV < 0]).

3. Reason for Positive Deviation in Ethanol + Acetone:
   • In pure ethanol, molecules are held tightly by extensive intermolecular hydrogen bonding.
   • When acetone is added, acetone molecules get between ethanol molecules and break some of the existing hydrogen bonds.
   • The resulting solute-solvent attractive forces (A—B) are WEAKER than in pure ethanol (A—A).
   • Consequently, molecules escape into the vapour phase more easily, resulting in a higher vapour pressure than predicted by Raoult's law (p_total > p_calc) with ΔH_mix > 0 and ΔV_mix > 0.`
    },
    {
      id: 'chem-pyq-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-2',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Why are aquatic species more comfortable in cold water than in warm water? State Henry\'s law and explain the physical significance of Henry\'s law constant K_H.',
      solution: `1. Henry\'s Law Statement:
   At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the solution:
   p = K_H · x  (where p = partial pressure, x = mole fraction of dissolved gas).

2. Significance of K_H:
   • From x = p / K_H, higher K_H at a given pressure indicates LOWER gas solubility in the liquid.
   • K_H increases with increasing temperature.

3. Cold Water Explanation:
   As water temperature drops, K_H decreases, which increases the solubility of oxygen in water. Hence, cold water contains a significantly higher concentration of dissolved oxygen, allowing aquatic organisms to respire more comfortably.`
    },
    {
      id: 'chem-pyq-2',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-5',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Explain why a solution of chloroform and acetone shows negative deviation from Raoult\'s law. What type of azeotrope does it form?',
      solution: `1. Intermolecular Forces:
   • In pure acetone, molecules interact through dipole-dipole attractions. In pure chloroform, molecules interact via dipole-dipole attractions.
   • When mixed together, chloroform and acetone molecules form strong intermolecular Hydrogen bonds:
     (CH₃)₂C=O ··· H−CCl₃
   • The A-B interactions are stronger than A-A and B-B interactions.

2. Negative Deviation:
   Because molecules are held more tightly, their escaping tendency into vapour phase decreases. Consequently, vapour pressure is lower than expected from Raoult\'s law (p_total < p°_A x_A + p°_B x_B).
   Also, ΔH_mixing < 0 (exothermic) and ΔV_mixing < 0 (contraction).

3. Azeotrope:
   Solutions showing large negative deviation form a Maximum Boiling Azeotrope at a specific composition (boils at a higher temperature than either pure component).`
    },
    {
      id: 'chem-pyq-3',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
      subtopicId: 'chem-sub-1-12',
      year: 'CBSE 2020 (5 Marks)',
      question: 'Define Van \'t Hoff factor. What values of i indicate: (i) association, (ii) dissociation? A 0.2 m aqueous solution of KCl freezes at −0.680 °C. Calculate the Van \'t Hoff factor and degree of dissociation of KCl. (K_f for water = 1.86 K·kg/mol).',
      solution: `1. Definition of Van 't Hoff factor (i):
   i = (Observed Colligative Property) / (Calculated Colligative Property)
     = (Normal Molar Mass) / (Abnormal Experimental Molar Mass)

2. Values of i:
   • For dissociation: i > 1 (e.g., NaCl, BaCl₂)
   • For association: i < 1 (e.g., Benzoic acid in benzene dimerizes)
   • For non-electrolytes: i = 1 (Glucose, Urea)

3. Numerical Calculation:
   • Observed depression ΔT_f = 0 − (−0.680 °C) = 0.680 K.
   • Normal ΔT_f = K_f · m = 1.86 × 0.2 = 0.372 K.
   • i = (Observed ΔT_f) / (Normal ΔT_f) = 0.680 / 0.372 ≈ 1.828.
   • For KCl ⇌ K⁺ + Cl⁻ (n = 2 ions):
     i = 1 + (n − 1) α = 1 + α
     α = i − 1 = 1.828 − 1 = 0.828 = 82.8% dissociation.`
    },
    {
      id: 'chem-pyq-4',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-4',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Represent the cell in which the following reaction takes place:\nMg(s) + 2Ag⁺(0.0001 M) ⟶ Mg²⁺(0.130 M) + 2Ag(s)\nCalculate its E_cell at 298 K given E°_cell = 3.17 V.',
      solution: `1. Galvanic Cell Representation:
   Mg(s) | Mg²⁺ (0.130 M) || Ag⁺ (0.0001 M) | Ag(s)

2. Nernst Equation (n = 2 electrons transferred):
   E_cell = E°_cell − (0.0591 / n) log [Mg²⁺] / [Ag⁺]²

3. Substituting Concentration Values:
   [Mg²⁺] = 0.130 M = 1.3 × 10⁻¹ M
   [Ag⁺] = 10⁻⁴ M  ⟹  [Ag⁺]² = (10⁻⁴)² = 10⁻⁸
   Quotient Q = 0.130 / 10⁻⁸ = 1.3 × 10⁷
   log Q = log(1.3 × 10⁷) = log(1.3) + 7 = 0.1139 + 7 = 7.1139

4. Potential Calculation:
   E_cell = 3.17 − (0.0591 / 2) × 7.1139
          = 3.17 − (0.02955 × 7.1139)
          = 3.17 − 0.210 = 2.96 V`
    },
    {
      id: 'chem-pyq-5',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-8',
      year: 'CBSE 2022 (3 Marks)',
      question: 'State Kohlrausch\'s law of independent migration of ions. How does this law help in determining the limiting molar conductivity of weak electrolytes like CH₃COOH?',
      solution: `1. Statement:
   Kohlrausch\'s Law states that the limiting molar conductivity of an electrolyte (at infinite dilution) can be represented as the sum of the individual contributions of the anion and cation of the electrolyte:
   Λ°_m = ν₊ λ°₊ + ν₋ λ°₋

2. Application for Weak Electrolyte (Acetic Acid, CH₃COOH):
   Acetic acid never dissociates completely, so Λ°_m cannot be obtained by extrapolation of a graph. Using Kohlrausch\'s law on strong electrolytes:
   Λ°_m(CH₃COOH) = λ°(CH₃COO⁻) + λ°(H⁺)
   We can calculate this from readily measured strong electrolytes:
   Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) − Λ°_m(NaCl)
   = [λ°(CH₃COO⁻) + λ°(Na⁺)] + [λ°(H⁺) + λ°(Cl⁻)] − [λ°(Na⁺) + λ°(Cl⁻)]
   = λ°(CH₃COO⁻) + λ°(H⁺)`
    },
    {
      id: 'chem-pyq-5b',
      chapterId: 'chem-ch-2',
      chapterName: 'Ch 2: Electrochemistry',
      subtopicId: 'chem-sub-2-7',
      year: 'CBSE 2023, 2020 (3 Marks)',
      question: 'State Faraday\'s first and second laws of electrolysis. A solution of CuSO₄ is electrolysed for 20 minutes with a current of 1.5 Amperes. Calculate the mass of copper deposited at the cathode. (Molar mass of Cu = 63.5 g/mol, 1 F = 96,500 C/mol).',
      solution: `1. Faraday's First Law of Electrolysis:
   The mass (w) of a substance deposited or liberated at any electrode is directly proportional to the quantity of electricity (charge Q) passed through the electrolyte:
   w = z · Q = z · I · t

2. Faraday's Second Law of Electrolysis:
   When the same quantity of electricity is passed through different electrolytic solutions connected in series, the masses of different substances deposited at the electrodes are directly proportional to their chemical equivalent weights:
   w₁ / w₂ = E₁ / E₂

3. Stepwise Numerical Solution:
   • Current I = 1.5 A
   • Time t = 20 minutes = 20 × 60 = 1200 seconds (Crucial step: time must be in seconds!)
   • Total Charge passed Q = I · t = 1.5 A × 1200 s = 1800 C
   • Cathode Reaction: Cu²⁺(aq) + 2 e⁻ ⟶ Cu(s)
   • Valency factor n = 2.
   • Mass deposited w = (M · I · t) / (n · 96500)
     w = (63.5 g/mol × 1800 C) / (2 × 96500 C/mol)
     w = 114300 / 193000 ≈ 0.592 g of Copper (Cu).`
    },
    {
      id: 'chem-pyq-6',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
      subtopicId: 'chem-sub-4-5',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Account for the following observations:\n(i) Transition metals show variable oxidation states.\n(ii) Zr and Hf have almost identical atomic radii (~160 pm).\n(iii) Transition metals and their compounds act as excellent catalysts.',
      solution: `(i) Variable Oxidation States:
Transition metals have (n−1)d and ns electrons with very little energy difference. Therefore, both ns and unpaired (n−1)d electrons can participate in chemical bond formation.

(ii) Zr and Hf Identical Radii:
Due to Lanthanoid Contraction: the 14 lanthanoid elements that intervene between La and Hf involve filling of the 4f subshell. Because 4f electrons have very poor shielding efficiency, the effective nuclear charge increases steadily, pulling the valence electrons inward and exactly canceling the expected increase in size down the group.

(iii) Catalytic Properties:
Transition elements exhibit catalytic activity due to:
• Ability to adopt multiple oxidation states to form unstable reaction intermediates.
• Presence of vacant d-orbitals providing a large surface area for reactant adsorption.`
    },
    {
      id: 'chem-pyq-7',
      chapterId: 'chem-ch-6',
      chapterName: 'Ch 6: Haloalkanes and Haloarenes',
      subtopicId: 'chem-sub-6-5',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Differentiate between S_N1 and S_N2 reaction mechanisms on the basis of: (i) kinetics, (ii) stereochemical outcome, (iii) order of reactivity of alkyl halides.',
      solution: `Property | S_N1 Mechanism | S_N2 Mechanism
---|---|---
(i) Kinetics | Unimolecular, 1st order: Rate = k[R-X] | Bimolecular, 2nd order: Rate = k[R-X][Nu⁻]
(ii) Mechanism | Two steps via flat carbocation intermediate | Single concerted step via 5-coordinate transition state
(iii) Stereochemistry | Racemisation (50% retention, 50% inversion) | Complete Walden Inversion (backside attack)
(iv) Reactivity Order | 3° > 2° > 1° > CH₃X (governed by carbocation stability) | CH₃X > 1° > 2° > 3° (governed by steric hindrance)`
    },
    {
      id: 'chem-pyq-8',
      chapterId: 'chem-ch-7',
      chapterName: 'Ch 7: Alcohols, Phenols and Ethers',
      subtopicId: 'chem-sub-7-5',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Write chemical equations with reaction conditions for:\n(i) Reimer-Tiemann reaction\n(ii) Kolbe\'s reaction\n(iii) Williamson ether synthesis of anisole.',
      solution: `(i) Reimer-Tiemann Reaction:
Phenol + CHCl₃ + 3 NaOH (at 340 K) ⟶ Salicylaldehyde (2-hydroxybenzaldehyde) + 3 NaCl + 2 H₂O
Intermediate: Dichlorocarbene (:CCl₂) acts as electrophile attacking ortho position.

(ii) Kolbe's Reaction:
Sodium phenoxide + CO₂ (at 400 K, 4-7 atm) ⟶ Sodium salicylate ⟶ (acidification with H⁺) Salicylic acid (2-hydroxybenzoic acid).

(iii) Williamson Synthesis of Anisole:
Sodium phenoxide (C₆H₅O⁻Na⁺) + Methyl iodide (CH₃-I) ⟶ Anisole (C₆H₅-O-CH₃) + NaI.`
    }
  ],

  biology: [
    {
      id: 'bio-pyq-1',
      chapterId: 'bio-ch-1',
      chapterName: 'Ch 1: Sexual Reproduction in Flowering Plants',
      subtopicId: 'bio-sub-1-4',
      year: 'CBSE 2023 (5 Marks)',
      question: 'What is double fertilization? Describe the process in angiosperms with the ploidy levels of the resulting structures.',
      solution: `1. Definition:
Double fertilization is a unique flowering plant event where two separate nuclear fusions occur within the embryo sac by two male gametes brought by a single pollen tube.

2. Detailed Events:
a) Syngamy (Generative Fertilization):
   • One haploid male gamete (n) fuses with the haploid egg cell (n) at the micropylar end.
   • Result: Diploid Zygote (2n), which later develops into the embryo.

b) Triple Fusion (Vegetative Fertilization):
   • The second haploid male gamete (n) migrates to the central cell and fuses with the two haploid polar nuclei (n + n).
   • Result: Triploid Primary Endosperm Nucleus (PEN, 3n), which develops into nutritive endosperm.

3. Significance:
Prevents wasteful endosperm development unless fertilization of the ovum is confirmed.`
    },
    {
      id: 'bio-pyq-2',
      chapterId: 'bio-ch-2',
      chapterName: 'Ch 2: Human Reproduction',
      subtopicId: 'bio-sub-2-3',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Explain the hormonal regulation of the human female menstrual cycle during: (i) Follicular phase, (ii) Ovulatory phase, (iii) Luteal phase.',
      solution: `(i) Follicular Phase (Days 6–13):
• Pituitary gonadotropins (FSH and LH) increase gradually.
• FSH stimulates growth of primary follicles into mature Graafian follicles.
• Growing follicles secrete Estrogen, which stimulates proliferation of uterine endometrium.

(ii) Ovulatory Phase (Day 14):
• Rapid secretion of LH induces LH Surge (peak level in mid-cycle).
• LH surge triggers rupture of the mature Graafian follicle and release of secondary oocyte (Ovulation).

(iii) Luteal / Secretory Phase (Days 15–28):
• Ruptured follicle transforms into the Corpus Luteum under LH influence.
• Corpus luteum secretes large amounts of Progesterone, which maintains endometrium for blastocyst implantation.
• In absence of pregnancy, corpus luteum degenerates into Corpus Albicans, progesterone levels plunge, causing endometrial shedding (Menstruation).`
    },
    {
      id: 'bio-pyq-3',
      chapterId: 'bio-ch-4',
      chapterName: 'Ch 4: Principles of Inheritance and Variation',
      subtopicId: 'bio-sub-4-3',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Why did T.H. Morgan choose Drosophila melanogaster for his genetical studies? State four reasons.',
      solution: `T.H. Morgan chose Drosophila melanogaster (fruit fly) because:
1. Short Life Cycle: Complete life cycle completes in just about 2 weeks.
2. High Progeny Yield: A single mating produces hundreds of offspring flies.
3. Laboratory Culture: Grown easily on simple synthetic medium (ripe banana/cornmeal) in bottles.
4. Clear Sexual Dimorphism: Males and females are easily distinguished (female is noticeably larger and lacks sex combs).
5. Microscopic Variation: Many distinct hereditary variations can be observed under low-power compound microscope.`
    },
    {
      id: 'bio-pyq-4',
      chapterId: 'bio-ch-5',
      chapterName: 'Ch 5: Molecular Basis of Inheritance',
      subtopicId: 'bio-sub-5-2',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Describe the Hershey-Chase blender experiment that proved DNA is the genetic material and not protein.',
      solution: `1. Experimental System:
Alfred Hershey and Martha Chase (1952) used Bacteriophage T2 virus and Escherichia coli bacterium.

2. Radio-labeling:
• Batch 1: Phages grown on medium containing radioactive sulfur ³⁵S (labels proteins only, as methionine/cysteine have sulfur; DNA has none).
• Batch 2: Phages grown on medium containing radioactive phosphorus ³²P (labels DNA only; proteins contain no phosphorus).

3. Three Steps:
a. Infection: Labeled phages allowed to attach to unlabelled E. coli.
b. Blending: Agitated in a high-speed kitchen blender to strip off viral coats from bacterial surfaces.
c. Centrifugation: Spun at high speed to separate heavy bacterial cells (pellet) from lighter viral coats (supernatant).

4. Observation & Conclusion:
• Bacteria infected with ³²P were radioactive in the pellet, showing viral DNA entered cells.
• Bacteria infected with ³⁵S showed radioactivity in the supernatant (empty coats), not inside cells.
• Proved conclusively that DNA, not protein, is the genetic material.`
    },
    {
      id: 'bio-pyq-5',
      chapterId: 'bio-ch-6',
      chapterName: 'Ch 6: Evolution',
      subtopicId: 'bio-sub-6-3',
      year: 'CBSE 2020 (3 Marks)',
      question: 'State Hardy-Weinberg Principle. Write five factors that disturb this genetic equilibrium.',
      solution: `1. Principle:
Allele frequencies in a large, randomly mating population remain constant and stable from generation to generation in the absence of evolutionary disturbances:
p² + 2pq + q² = 1  (where p = dominant allele freq, q = recessive allele freq, and p + q = 1).

2. Five Disturbing Factors:
(i) Gene Migration / Gene Flow (immigration/emigration of alleles).
(ii) Genetic Drift (random fluctuation in allele frequencies by chance in small populations).
(iii) Mutation (creation of new alleles).
(iv) Genetic Recombination (crossing over during meiosis in sexual reproduction).
(v) Natural Selection (differential reproductive success of favorable genotypes).`
    }
  ],

  psychology: [
    {
      id: 'psy-pyq-1',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-2',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Explain Howard Gardner\'s Theory of Multiple Intelligences. Describe any five types of intelligences identified by him with suitable examples.',
      solution: `1. Core Proposition of Gardner's Theory:
Howard Gardner proposed that intelligence is not a single, unitary mental entity, but consists of at least eight distinct and autonomous intelligences. Each operates independently and is anchored in separate neural modules of the brain. Damage to a specific brain region may impair one intelligence while leaving others completely intact.

2. Five Types of Intelligences:
(i) Linguistic Intelligence:
• Capacity to use language fluently, flexibly, and creatively. Highly developed in poets, writers, lawyers, and orators (e.g. William Shakespeare, Sarojini Naidu).
(ii) Logical-Mathematical Intelligence:
• Capacity for abstract reasoning, scientific inquiry, logical thinking, and mathematical computation. Characteristic of scientists, mathematicians, and logicians (e.g. Albert Einstein, Srinivasa Ramanujan).
(iii) Spatial Intelligence:
• Capacity to form accurate mental representations of visual-spatial configurations and transform them mentally. Essential for architects, painters, sculptors, and pilots (e.g. M.F. Husain, pilots navigating 3D space).
(iv) Bodily-Kinesthetic Intelligence:
• Ability to use the entire body or parts of the body with great precision, flexibility, and coordination. Evident in athletes, dancers, surgeons, and craftspeople (e.g. Sachin Tendulkar, neurosurgeons).
(v) Interpersonal Intelligence:
• Ability to recognize, distinguish, and respond sensitively to the moods, motivations, intentions, and feelings of other people. Vital for psychologists, counsellors, teachers, and politicians (e.g. Mahatma Gandhi, Mother Teresa).`
    },
    {
      id: 'psy-pyq-2',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-2',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Describe the PASS Model of Intelligence proposed by J.P. Das, Jack Naglieri, and Kirby.',
      solution: `1. Foundation:
The PASS model is an Information-Processing approach based on the neuropsychological work of A.R. Luria, describing intellectual activity as an interdependent operation of three functional brain units.

2. Four Cognitive Processes (PASS):
(i) Planning (P):
• Managed by the frontal lobes. Enables goal setting, strategy selection, implementation monitoring, and outcome evaluation.
(ii) Attention-Arousal (A):
• Governed by the reticular activating system and brainstem. Optimal arousal enables focused attention while inhibiting distracting extraneous stimuli.
(iii) Simultaneous Processing (S):
• Managed by the occipito-parietal regions. Integrates separate pieces of information into a unified spatial pattern or concept (e.g. Raven's Progressive Matrices).
(iv) Successive Processing (S):
• Managed by the frontal-temporal areas. Integrates information in a step-by-step, sequential serial order (e.g. remembering telephone numbers, alphabets).`
    },
    {
      id: 'psy-pyq-3',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-7',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Explain Sigmund Freud\'s structural model of personality consisting of Id, Ego, and Superego. How does the Ego maintain intrapsychic balance?',
      solution: `1. Structure of Personality:
Freud conceptualized personality as governed by the dynamic interaction among three mental structures:

(i) The Id:
• Present at birth; reservoir of primitive biological drives and instinctual energy (libido, Eros and Thanatos).
• Operates exclusively on the Pleasure Principle, demanding immediate gratification of impulses without regard for logic, morality, or social constraints.

(ii) The Ego:
• Develops out of the Id during the first year of life as a result of contact with reality.
• Operates on the Reality Principle. Directs the Id's instinctual energy into socially acceptable, realistic avenues through realistic thinking.
• Mediates between the aggressive/hedonistic demands of the Id, the moral prohibitions of the Superego, and external physical reality.

(iii) The Superego:
• The internalized moral arm and ethical conscience, acquired through socialization and parental identification (typically during the Phallic stage).
• Operates on the Moral Principle, striving for perfection rather than pleasure or reality. Composed of the Conscience (punishes with guilt) and Ego-Ideal (rewards with pride).

2. Ego Functioning & Intrapsychic Defense:
When the Id and Superego place conflicting demands that threaten to overwhelm the Ego, intrapsychic anxiety is generated. The Ego deploys unconscious Defense Mechanisms (such as Repression, Projection, Rationalization, Reaction Formation, and Sublimation) to distort reality and shield the conscious self from debilitating anxiety.`
    },
    {
      id: 'psy-pyq-4',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-10',
      year: 'CBSE 2022 (3 Marks)',
      question: 'What are projective techniques of personality assessment? Describe the Rorschach Inkblot Test.',
      solution: `1. Projective Hypothesis:
Projective techniques present unstructured, ambiguous stimuli (inkblots, pictures, incomplete sentences) that have no obvious or standardized meaning. The subject unconsciously projects their internal motives, latent needs, unconscious fantasies, and defense mechanisms onto the ambiguous stimulus.

2. The Rorschach Inkblot Test:
• Developed by Swiss psychiatrist Hermann Rorschach in 1921.
• Consists of 10 standardized cards with symmetrical inkblots (5 achromatic black-and-white, 2 black-and-red, 3 multicoloured).
• Administration: Conducted individually in two phases:
  (a) Performance Proper: Subject freely responds to "What might this be?"
  (b) Inquiry Phase: Examiner inquires where on the card the percept was seen and what characteristics determined it.
• Scoring Dimensions:
  - Location (whole blot, common detail, unusual detail, white space).
  - Determinants (form, colour, shading, perceived movement).
  - Content (human, animal, anatomical, nature, abstract).`
    },
    {
      id: 'psy-pyq-5',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-3',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Describe Hans Selye\'s General Adaptation Syndrome (GAS) with a diagram. Explain the physiological changes during each stage.',
      solution: `1. Definition of GAS:
Hans Selye defined stress as the non-specific physiological response of the biological organism to any demand placed upon it. Chronic stress triggers a universal tripartite sequence termed the General Adaptation Syndrome.

2. Three Stages of GAS:
(i) Alarm Reaction Stage:
• The immediate perception of a stressor triggers the sympathetic nervous system and the Sympathetic-Adrenal-Medullary (SAM) axis.
• Adrenaline and noradrenaline are released; heart rate, blood pressure, respiration rate, and blood sugar spike to power the classic "fight-or-flight" response.

(ii) Resistance Stage:
• If stressor persists, the body adapts to the ongoing demand.
• The Hypothalamic-Pituitary-Adrenal (HPA) axis releases Cortisol. Parasympathetic system attempts to restore some autonomic balance, but endocrine arousal remains abnormally elevated.
• The organism displays outward coping, but internal physiological reserves are progressively taxed.

(iii) Exhaustion Stage:
• Under prolonged, continuous stressor exposure without resolution, the body's adaptive reserves are entirely depleted.
• Manifestations: Enlargement of adrenal cortex, atrophy of lymphatic structures (thymus, spleen), gastric peptic ulceration, and severe immune collapse.
• Results in psychosomatic diseases (hypertension, cardiovascular failure) or ultimate physical collapse.`
    },
    {
      id: 'psy-pyq-6',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-5',
      year: 'CBSE 2020 (3 Marks)',
      question: 'Distinguish between Problem-Focused and Emotion-Focused coping strategies proposed by Lazarus and Folkman. Give one example of each.',
      solution: `1. Problem-Focused Coping:
• Aim: Directed at changing, eliminating, or resolving the stressful environment or demand itself.
• Mechanism: Involves instrumental, action-oriented strategies such as gathering information, time management, problem-solving, assertiveness, and seeking direct guidance.
• Optimal Utility: Most effective when the stressor is appraised as controllable and changeable (e.g. creating a disciplined revision schedule after receiving a poor diagnostic test score).

2. Emotion-Focused Coping:
• Aim: Directed at reducing, managing, or regulating the internal emotional distress and psychological tension generated by the stressor, rather than altering the objective reality.
• Mechanism: Involves emotional venting, positive cognitive reappraisal, acceptance, relaxation, meditation, and seeking empathy from friends.
• Optimal Utility: Most effective when the stressor is appraised as uncontrollable and irreversible (e.g. bereavement, loss of a loved one, incurable medical diagnosis).`
    },
    {
      id: 'psy-pyq-7',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-2',
      year: 'CBSE 2024 (6 Marks)',
      question: 'Elaborate on Howard Gardner\'s Theory of Multiple Intelligences. Explain any six types of intelligences proposed by him with suitable examples.',
      solution: `1. Core Philosophy of Gardner's Theory:
Howard Gardner proposed that intelligence is not a single entity, but consists of multiple, relatively autonomous intelligences that operate in interaction. Each individual possesses a unique profile of these intelligences.

2. Six Distinct Types of Intelligences:
(i) Linguistic Intelligence:
• Capacity to use language fluently, flexibly, and creatively.
• Highly developed in poets, writers, journalists, and public orators (e.g. William Shakespeare, Rabindranath Tagore).

(ii) Logical-Mathematical Intelligence:
• Ability to think logically, critically, and solve abstract mathematical and scientific problems.
• Characteristic of scientists, mathematicians, and physicists (e.g. Albert Einstein, Srinivasa Ramanujan).

(iii) Spatial Intelligence:
• Mental capacity to form visual images, transform 3D spatial representations mentally, and navigate complex spaces.
• Prominent in architects, painters, sculptors, pilots, and chess grandmasters.

(iv) Bodily-Kinesthetic Intelligence:
• Ability to coordinate body movements with agility, balance, dexterity, and fine motor precision.
• Exemplified by athletes, classical dancers, acrobats, and surgeons.

(v) Interpersonal Intelligence:
• Capacity to discern, understand, and respond adaptively to the moods, motivations, desires, and intentions of other people.
• Seen in psychotherapists, political leaders, social workers, and diplomats (e.g. Mahatma Gandhi, Mother Teresa).

(vi) Intrapersonal Intelligence:
• Knowledge and deep awareness of one's internal states, feelings, identity, values, and personal strengths/limitations.
• Evident in philosophers, spiritual teachers, and self-reflective thinkers (e.g. Swami Vivekananda).`
    },
    {
      id: 'psy-pyq-8',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-3',
      year: 'CBSE 2023 (4 Marks)',
      question: 'Classify psychological tests of intelligence on the basis of: (a) Administration, (b) Nature of items, and (c) Cultural bias.',
      solution: `1. On the Basis of Administration:
• Individual Tests: Administered to one person at a time; allows building rapport and observing qualitative behavioral nuances (e.g. Stanford-Binet Test, Wechsler Intelligence Scale).
• Group Tests: Administered simultaneously to a large cohort of individuals; cost-effective, objective, with printed instructions, but offers little opportunity to observe test-taking anxiety (e.g. Army Alpha Test).

2. On the Basis of Nature of Items:
• Verbal Tests: Require literacy and language comprehension; test-takers respond orally or in writing.
• Non-Verbal Tests: Use symbols, geometric figures, or pictures to minimize language dependence (e.g. Raven's Progressive Matrices).
• Performance Tests: Require active manual manipulation of physical objects and materials (e.g. Kohs Block Design Test, Bhatia's Battery of Performance Tests).

3. On the Basis of Cultural Inclusivity:
• Culture-Biased Tests: Standardized within a specific cultural milieu (usually Western urban middle class); unfairly penalize individuals from marginalized or differing cultural backgrounds.
• Culture-Fair / Culture-Neutral Tests: Formulated with non-verbal geometric matrices and universally recognizable items to minimize cultural and linguistic disparities.`
    },
    {
      id: 'psy-pyq-9',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-4',
      year: 'CBSE 2022 (4 Marks)',
      question: 'Differentiate between Intellectual Deficiency (Mental Retardation) and Intellectual Giftedness. Outline the AAMD criteria for intellectual disability.',
      solution: `1. Intellectual Deficiency (AAMD / APA Definition):
According to the American Association on Mental Deficiency (AAMD), intellectual disability is characterized by:
• Significantly sub-average general intellectual functioning (IQ below 70, which is 2 standard deviations below the mean).
• Concurrent deficits or impairments in adaptive behavior (communication, self-care, home living, social skills).
• Manifested during the developmental period (prior to the age of 18).

Levels of Intellectual Disability:
- Mild (IQ 55–69): Educable; can acquire basic academic and vocational survival skills.
- Moderate (IQ 40–54): Trainable in communication and daily motor living skills; requires sheltered supervision.
- Severe (IQ 25–39) & Profound (IQ < 25): Require constant institutional care and custodial support.

2. Intellectual Giftedness:
• Refers to individuals exhibiting exceptional general intellectual capability (IQ generally 130 and above, representing top 2.2% of normal distribution).
• Hallmarks (Terman & Lewis): Advanced logical processing, intrinsic motivation, divergent thinking, rapid information intake, superior memory, early language development, and acute moral sensitivity.`
    },
    {
      id: 'psy-pyq-10',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-6',
      year: 'CBSE 2020 (3 Marks)',
      question: 'What is Emotional Intelligence? Identify any four key characteristics of emotionally intelligent individuals.',
      solution: `1. Definition of Emotional Intelligence (EI / EQ):
Salovey and Mayer define Emotional Intelligence as "the ability to monitor one's own and other people's emotions, to discriminate among them, and to use emotional information to guide thinking and actions."

2. Four Characteristics of Emotionally Intelligent Individuals:
• Accurate Emotional Perception: Ability to perceive, identify, and express emotions accurately in oneself and others through non-verbal and verbal cues.
• Emotional Assimilation: Ability to facilitate cognitive thinking by harnessing emotions to prioritize attention and foster problem-solving.
• Understanding Complex Emotional States: Ability to comprehend relationships among emotions, recognize shifts from anger to guilt, and interpret complex feelings.
• Regulating and Managing Emotions: Capability to moderate negative emotions and sustain positive states in oneself and others without impulsive outbursts.`
    },
    {
      id: 'psy-pyq-11',
      chapterId: 'psy-ch-1',
      chapterName: 'Ch 1: Variations in Psychological Attributes',
      subtopicId: 'psy-sub-1-8',
      year: 'CBSE 2019 (4 Marks)',
      question: 'Explain the Indian concept of intelligence (Buddhi). How does it differ from the Western perspective?',
      solution: `1. Concept of Buddhi in Indian Tradition:
In the Indian psychological tradition (rooted in the Upanishads and Bhagavad Gita), intelligence is encapsulated in the concept of "Buddhi", which encompasses both cognitive competence and affective/moral/ethical maturity.

2. Four Integral Facets of Buddhi (J.P. Das & Purnima Singh):
• Cognitive Capacity: Sensitivity to context, understanding, discrimination, rapid problem comprehension.
• Social Competence: Respect for social order, dedication to family and community elders, fulfilling societal duties (Dharma).
• Emotional Competence: Self-regulation of desires and anger, modesty, empathy, detachment, and emotional balance.
• Entrepreneurial Competence: Industriousness, commitment, hard work, persistence, and vigilance in pursuits.

3. Contrast with Western Perspective:
• Western Tradition: Primarily emphasizes cognitive prowess, atomistic logical analysis, speed, abstract symbol manipulation, and individualistic achievement.
• Indian Tradition: Emphasizes holistic, contextual, communal harmony, moral-spiritual wisdom, and social interconnectedness over individual competitiveness.`
    },
    {
      id: 'psy-pyq-12',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-4',
      year: 'CBSE 2023 (4 Marks)',
      question: 'Explain any four defense mechanisms proposed by Sigmund Freud with appropriate real-life illustrations.',
      solution: `1. Function of Defense Mechanisms:
Defense mechanisms are unconscious psychological strategies used by the Ego to protect the conscious self from overwhelming anxiety caused by intrapsychic conflict between Id impulses and Superego moral prohibitions.

2. Four Primary Defense Mechanisms:
(i) Repression:
• Unacceptable thoughts, traumatic memories, and taboo impulses are pushed deep into the unconscious mind.
• Example: A survivor of a devastating accident completely blocks out the memory of the catastrophic crash.

(ii) Projection:
• Attributing one's own unacceptable feelings, impulses, or flaws onto other individuals.
• Example: A person harboring hostile feelings toward a colleague insists that "everyone in the office is trying to undermine me."

(iii) Reaction Formation:
• Behaving in a manner directly contrary to one's true, unacceptable unconscious desires.
• Example: A person who secretly resents a sibling goes to excessive, flamboyant lengths to shower them with lavish gifts and praise.

(iv) Sublimation:
• Channeling socially unacceptable, destructive impulses into socially valued, constructive pursuits.
• Example: An individual with aggressive inclinations channels that kinetic aggression into becoming an elite martial artist or surgeon.`
    },
    {
      id: 'psy-pyq-13',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-5',
      year: 'CBSE 2022 (6 Marks)',
      question: 'Evaluate the contributions of Post-Freudian theorists: (a) Carl Jung, (b) Alfred Adler, and (c) Karen Horney.',
      solution: `1. Carl Gustav Jung (Analytical Psychology):
• Collective Unconscious: Jung proposed that beyond the individual unconscious lies the collective unconscious—a reservoir of ancestral memories, instincts, and universal archetypes shared across humanity.
• Archetypes: Primordial symbolic images including the Persona (social mask), Anima (feminine archetype in men), Animus (masculine archetype in women), and Shadow (dark primal instincts).
• Typology: Classified psychological attitudes into Extraversion (outward oriented) and Introversion (inward oriented).

2. Alfred Adler (Individual Psychology):
• Inferiority Complex: Adler argued that human behavior is driven not by sexual instincts, but by overcoming feelings of inadequacy and inferiority that arise in childhood.
• Striving for Superiority: The foundational motivational force driving personal mastery, self-improvement, and social interest (Gemeinschaftsgefühl).
• Lifestyle: The unique pattern of behaviors, beliefs, and compensatory mechanisms developed by an individual to attain significance.

3. Karen Horney (Interpersonal Theory):
• Critique of Freud: Challenged Freud's biological determinism and male-centric assumptions (e.g. penis envy), proposing "womb envy" instead.
• Basic Anxiety: Arises from feelings of isolation and helplessness in a potentially hostile childhood environment due to parental indifference.
• Interpersonal Coping Styles: Moving toward people (compliance/dependency), moving against people (aggression/dominance), or moving away from people (detachment/withdrawal).`
    },
    {
      id: 'psy-pyq-14',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-6',
      year: 'CBSE 2021 (4 Marks)',
      question: 'Discuss Carl Rogers\' Humanistic Theory of Personality. Explain the significance of "Unconditional Positive Regard" and "Congruence".',
      solution: `1. Core Humanistic Philosophy:
Carl Rogers viewed human nature as intrinsically positive, creative, and motivated toward self-actualization—the inherent tendency to develop all capacities to enhance the organism.

2. Real Self vs Ideal Self & Congruence:
• Real Self: The person one actually is, based on genuine lived experiences and feelings.
• Ideal Self: The person one aspires to be or feels one ought to be.
• Congruence: A state of high consistency and harmony between the real self and ideal self. Results in psychological well-being, authentic self-worth, and openness to experience.
• Incongruence: A large discrepancy between real self and ideal self leads to chronic defensive distortion, anxiety, and neurosis.

3. Unconditional Positive Regard:
• Complete, non-judgmental acceptance, warmth, and love provided to an individual regardless of their behaviors or mistakes.
• When parents or therapists supply unconditional positive regard (rather than conditional love based on "conditions of worth"), the individual develops healthy self-esteem and evolves into a "Fully Functioning Person".`
    },
    {
      id: 'psy-pyq-15',
      chapterId: 'psy-ch-2',
      chapterName: 'Ch 2: Self and Personality',
      subtopicId: 'psy-sub-2-8',
      year: 'CBSE 2024 (4 Marks)',
      question: 'Describe Self-Report inventories for personality assessment. What are their inherent limitations? Name two popular self-report tests.',
      solution: `1. Concept of Self-Report Inventories:
Self-report inventories are structured, objective psychometric questionnaires wherein test-takers read standardized statements and respond using fixed rating scales (e.g. True/False or Likert scale 1–5).

2. Inherent Limitations:
• Social Desirability: Tendency of respondents to endorse answers they believe are socially favorable or acceptable rather than revealing their authentic thoughts.
• Acquiescence Response Bias: Tendency of certain test-takers to agree with statements ("say yes") regardless of item content.
• Lack of Self-Insight: Individuals may lack authentic conscious awareness of their deeper defense mechanisms, emotional conflicts, or behavioral blind spots.

3. Two Prominent Examples:
• MMPI (Minnesota Multiphasic Personality Inventory): Developed by Hathaway and McKinley; widely used diagnostic instrument containing clinical and validity scales (Lie scale, F scale, K scale).
• 16 PF Questionnaire: Developed by Raymond B. Cattell using factor analysis to measure 16 primary source traits of personality.`
    },
    {
      id: 'psy-pyq-16',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-1',
      year: 'CBSE 2023 (4 Marks)',
      question: 'Explain Richard Lazarus\' Cognitive Appraisal Model of Stress. How do Primary and Secondary Appraisals determine stress reaction?',
      solution: `1. Cognitive Appraisal Paradigm:
Richard Lazarus posited that an environmental event is not stressful in itself; it becomes a stressor only when perceived and cognitively appraised as taxing or exceeding an individual's personal resources.

2. Primary Appraisal:
The evaluation of the meaning, significance, and severity of the potential stressor. The event is perceived as:
• Irrelevant: No personal bearing or consequence.
• Benign-Positive: Pleasant, beneficial outcome.
• Stressful: Evaluated in terms of:
  - Harm/Loss: Assessment of damage already sustained (e.g. loss of job or illness).
  - Threat: Anticipation of possible future damage or harm.
  - Challenge: Anticipation of personal growth, mastery, and conquerable obstacles.

3. Secondary Appraisal:
• The assessment of one's available coping resources and cognitive strategies to manage, mitigate, or overcome the demand.
• Evaluates internal resources (skills, resilience, knowledge) and external resources (money, medical help, social support).
• If resources are appraised as adequate, stress is minimized; if appraised as insufficient, severe distress and panic ensue.`
    },
    {
      id: 'psy-pyq-17',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-4',
      year: 'CBSE 2022 (3 Marks)',
      question: 'What is Psychoneuroimmunology? Explain how chronic stress weakens the immune system.',
      solution: `1. Definition of Psychoneuroimmunology:
Psychoneuroimmunology is the interdisciplinary field studying the complex bidirectional interactions among psychological processes (mind/emotions), the nervous system, and the immune system.

2. Biological Pathway of Stress-Induced Immune Suppression:
• Activation of HPA Axis: Chronic psychological stress triggers the hypothalamus to release CRH, which stimulates the pituitary gland to secrete ACTH, resulting in sustained cortisol secretion from the adrenal cortex.
• Depletion of White Blood Cells: Elevated cortisol levels inhibit the production and proliferation of lymphocytes (T-cells, B-cells, and Natural Killer [NK] cells).
• Impaired Cytokine Balance: Chronic distress diminishes the body's interferon and interleukin activity, retarding antibody response and antibody production against foreign antigens.
• Result: Increased susceptibility to infectious illnesses, delayed wound healing, and accelerated progression of chronic degenerative conditions.`
    },
    {
      id: 'psy-pyq-18',
      chapterId: 'psy-ch-3',
      chapterName: 'Ch 3: Meeting Life Challenges',
      subtopicId: 'psy-sub-3-6',
      year: 'CBSE 2024 (6 Marks)',
      question: 'Discuss four effective stress management techniques and explain the role of social support in promoting positive health.',
      solution: `1. Four Effective Stress Management Techniques:
(i) Biofeedback:
• Electronic instrumentation provides immediate visual or auditory feedback about physiological indicators (heart rate, skin conductance, muscle tension).
• Individuals learn conscious voluntary self-regulation of autonomic bodily responses to reduce somatic arousal.

(ii) Creative Visualization:
• Guided mental imagery wherein an individual creates realistic, multi-sensory scenes of calm, tranquility, and triumph.
• Replaces threatening cognitive appraisals with autonomic relaxation and confidence.

(iii) Cognitive Restructuring:
• Technique originating from Cognitive Behavior Therapy (CBT) wherein individuals identify irrational, catastrophic negative self-talk and replace them with rational, reality-based alternative thoughts.

(iv) Progressive Muscle Relaxation (Jacobson):
• Systematic cycle of tensing and consciously releasing muscle groups throughout the body, developing visceral sensitivity to physical tension and releasing somatic stress.

2. Role of Social Support in Promoting Health:
Social support refers to the perceived comfort, caring, esteem, and help available from family, friends, and community networks:
• Tangible Support: Material aid such as financial assistance, physical resources, or goods.
• Informational Support: Relevant guidance, advice, feedback, and strategies provided during crisis.
• Emotional Support: Unconditional empathy, listening, affection, and reassurance that restores self-esteem.
• Protective Buffer: High social support acts as a psychological buffer against toxic stress hormones, enhancing immune resilience and overall longevity.`
    }
  ],
  standard_maths: [
    {
      id: 'math-pyq-1',
      chapterId: 'math-ch-4',
      chapterName: 'Ch 4: Determinants',
      subtopicId: 'math-sub-4-2',
      year: 'CBSE 2024 (5 Marks)',
      question: 'Solve the following system of linear equations using matrix method:\n2x + 3y + 3z = 5\nx - 2y + z = -4\n3x - y - 2z = 3',
      solution: `1. Matrix Formulation AX = B:
   A = [[2, 3, 3], [1, -2, 1], [3, -1, -2]],  X = [[x], [y], [z]],  B = [[5], [-4], [3]]

2. Evaluate Determinant |A|:
   |A| = 2(4 + 1) - 3(-2 - 3) + 3(-1 + 6)
   |A| = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = 40 ≠ 0.
   Since |A| ≠ 0, A is non-singular and has a unique solution X = A⁻¹B.

3. Cofactors of Elements of A:
   A₁₁ = +5, A₁₂ = -(-5) = 5, A₁₃ = +5
   A₂₁ = -(-3) = 3, A₂₂ = -13, A₂₃ = -(-11) = 11
   A₃₁ = +(9), A₃₂ = -(2 - 3) = 1, A₃₃ = +(-7) = -7

4. Adjoint Matrix adj(A):
   adj(A) = [[5, 3, 9], [5, -13, 1], [5, 11, -7]]

5. Compute Solution X = (1/|A|) adj(A) · B:
   X = (1/40) · [[5, 3, 9], [5, -13, 1], [5, 11, -7]] · [[5], [-4], [3]]
   x = (1/40)(25 - 12 + 27) = 40 / 40 = 1
   y = (1/40)(25 + 52 + 3) = 80 / 40 = 2
   z = (1/40)(25 - 44 - 21) = -40 / 40 = -1
   ⟹ Solution: x = 1, y = 2, z = -1.`
    },
    {
      id: 'math-pyq-2',
      chapterId: 'math-ch-7',
      chapterName: 'Ch 7: Integrals',
      subtopicId: 'math-sub-7-2',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Evaluate: I = ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx using properties of definite integrals.',
      solution: `1. Define Equation (1):
   I = ∫₀^(π/2) [√sin x / (√sin x + √cos x)] dx  ---- (1)

2. Apply King's Property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:
   Replace x with (π/2 - x):
   sin(π/2 - x) = cos x,  cos(π/2 - x) = sin x.
   I = ∫₀^(π/2) [√cos x / (√cos x + √sin x)] dx  ---- (2)

3. Add Equations (1) and (2):
   2I = ∫₀^(π/2) [(√sin x + √cos x) / (√sin x + √cos x)] dx
   2I = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2 - 0 = π/2

4. Final Result:
   I = π / 4.`
    },
    {
      id: 'math-pyq-3',
      chapterId: 'math-ch-11',
      chapterName: 'Ch 11: Three-Dimensional Geometry',
      subtopicId: 'math-sub-11-1',
      year: 'CBSE 2024 (5 Marks)',
      question: 'Find the shortest distance between the skew lines:\nr⃗ = (î + 2ĵ + k̂) + λ(î - ĵ + k̂) and r⃗ = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).',
      solution: `1. Identify Vectors:
   a⃗₁ = î + 2ĵ + k̂,   b⃗₁ = î - ĵ + k̂
   a⃗₂ = 2î - ĵ - k̂,  b⃗₂ = 2î + ĵ + 2k̂

2. Calculate (a⃗₂ - a⃗₁):
   a⃗₂ - a⃗₁ = (2 - 1)î + (-1 - 2)ĵ + (-1 - 1)k̂ = î - 3ĵ - 2k̂

3. Calculate (b⃗₁ × b⃗₂):
   b⃗₁ × b⃗₂ = |[î, ĵ, k̂], [1, -1, 1], [2, 1, 2]|
   = î(-2 - 1) - ĵ(2 - 2) + k̂(1 - (-2))
   = -3î - 0ĵ + 3k̂ = -3î + 3k̂

4. Magnitude |b⃗₁ × b⃗₂|:
   |b⃗₁ × b⃗₂| = √((-3)² + 0² + 3²) = √(9 + 9) = √18 = 3√2

5. Compute Scalar Product (b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁):
   (-3î + 3k̂) · (î - 3ĵ - 2k̂) = (-3)(1) + (0)(-3) + (3)(-2) = -3 - 6 = -9

6. Shortest Distance Formula:
   d = |(b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁)| / |b⃗₁ × b⃗₂| = |-9| / (3√2) = 9 / (3√2) = 3 / √2 = (3√2) / 2 units.`
    },
    {
      id: 'math-pyq-4',
      chapterId: 'math-ch-13',
      chapterName: 'Ch 13: Probability',
      subtopicId: 'math-sub-13-1',
      year: 'CBSE 2023 (5 Marks)',
      question: 'A bag contains 4 red and 4 black balls, another bag contains 2 red and 6 black balls. One bag is selected at random and a ball is drawn and found to be red. Find the probability that the ball was drawn from the first bag using Bayes theorem.',
      solution: `1. Define Events:
   E₁ = Bag 1 is chosen ⟹ P(E₁) = 1/2
   E₂ = Bag 2 is chosen ⟹ P(E₂) = 1/2
   A = Drawn ball is Red

2. Conditional Probabilities:
   P(A|E₁) = 4 / (4 + 4) = 4/8 = 1/2
   P(A|E₂) = 2 / (2 + 6) = 2/8 = 1/4

3. Apply Bayes Theorem:
   P(E₁|A) = [P(E₁) · P(A|E₁)] / [P(E₁) · P(A|E₁) + P(E₂) · P(A|E₂)]
   P(E₁|A) = [(1/2) · (1/2)] / [(1/2) · (1/2) + (1/2) · (1/4)]
   P(E₁|A) = (1/4) / (1/4 + 1/8) = (1/4) / (3/8) = (1/4) × (8/3) = 2/3.
   ⟹ The required probability is 2/3.`
    }
  ],
  applied_maths: [
    {
      id: 'app-pyq-1',
      chapterId: 'app-ch-3',
      chapterName: 'Ch 3: Matrices & Determinants in Economics',
      subtopicId: 'app-sub-3-2',
      year: 'CBSE 2024 (5 Marks)',
      question: 'For a two-sector economy, the input-coefficient matrix is A = [[0.2, 0.3], [0.4, 0.1]] and the final demand vector is D = [[100], [200]]. Verify the Hawkins-Simon conditions and determine the gross output vector X.',
      solution: `1. Compute Matrix (I - A):
   I - A = [[1, 0], [0, 1]] - [[0.2, 0.3], [0.4, 0.1]] = [[0.8, -0.3], [-0.4, 0.9]]

2. Verify Hawkins-Simon Conditions:
   (i) Determinant |I - A| = (0.8)(0.9) - (-0.3)(-0.4) = 0.72 - 0.12 = 0.60 > 0. (Satisfied)
   (ii) Diagonal elements: (1 - a₁₁) = 0.8 > 0, and (1 - a₂₂) = 0.9 > 0. (Satisfied)
   ⟹ System is viable and capable of meeting external consumer demands.

3. Find Inverse (I - A)⁻¹:
   adj(I - A) = [[0.9, 0.3], [0.4, 0.8]]
   (I - A)⁻¹ = (1 / 0.60) · [[0.9, 0.3], [0.4, 0.8]] = (10/6) · [[0.9, 0.3], [0.4, 0.8]]

4. Calculate Gross Output X = (I - A)⁻¹ · D:
   X = (10/6) · [[0.9, 0.3], [0.4, 0.8]] · [[100], [200]]
   x₁ = (10/6)[(0.9)(100) + (0.3)(200)] = (10/6)[90 + 60] = (10/6)(150) = 250 units
   x₂ = (10/6)[(0.4)(100) + (0.8)(200)] = (10/6)[40 + 160] = (10/6)(200) = 2000 / 6 = 333.33 units
   ⟹ Gross Output: Sector 1 = 250 units, Sector 2 = 333.33 units.`
    },
    {
      id: 'app-pyq-2',
      chapterId: 'app-ch-7',
      chapterName: 'Ch 7: Financial Mathematics',
      subtopicId: 'app-sub-7-2',
      year: 'CBSE 2023 (4 Marks)',
      question: 'A loan of ₹3,00,000 is to be repaid in 36 equal monthly installments under reducing balance method at 12% per annum. Find the monthly EMI and total interest paid.',
      solution: `1. Identify Parameters:
   Principal P = ₹3,00,000
   Annual Rate R = 12% p.a. ⟹ Monthly rate r = 12 / (12 × 100) = 0.01
   Tenure n = 36 months

2. Compound Growth Factor:
   (1 + r)ⁿ = (1 + 0.01)³⁶ = (1.01)³⁶ ≈ 1.43077

3. EMI Formula:
   E = P · r · [(1 + r)ⁿ] / [(1 + r)ⁿ - 1]
   E = 3,00,000 × 0.01 × (1.43077) / (1.43077 - 1)
   E = 3,000 × 1.43077 / 0.43077 = 4292.31 / 0.43077 ≈ ₹9,964.29 per month.

4. Total Payment & Total Interest:
   Total Repayment = 36 × ₹9,964.29 = ₹3,58,714.44
   Total Interest Paid = Total Repayment - P = ₹3,58,714.44 - ₹3,00,000 = ₹58,714.44.`
    },
    {
      id: 'app-pyq-3',
      chapterId: 'app-ch-1',
      chapterName: 'Ch 1: Numbers & Numerical Applications',
      subtopicId: 'app-sub-1-1',
      year: 'CBSE 2024 (3 Marks)',
      question: 'Find the remainder when 7¹⁰⁰ is divided by 6 using congruence modulo arithmetic.',
      solution: `1. State Base Congruence:
   7 ≡ 1 (mod 6)

2. Apply Power Property of Congruence:
   If a ≡ b (mod m), then aⁿ ≡ bⁿ (mod m) for any positive integer n.
   7¹⁰⁰ ≡ 1¹⁰⁰ (mod 6)

3. Simplify:
   1¹⁰⁰ = 1
   ⟹ 7¹⁰⁰ ≡ 1 (mod 6)

4. Conclusion:
   The remainder when 7¹⁰⁰ is divided by 6 is 1.`
    }
  ]
};
