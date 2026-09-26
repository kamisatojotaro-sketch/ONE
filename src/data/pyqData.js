// Comprehensive CBSE Class 12 High-Yield Previous Year Board Questions (PYQs)
// Mapped by Subject and Exam Portion Chapters with Official Marking Schemes

export const PYQ_DATABASE = {
  physics: [
    {
      id: 'phy-pyq-1',
      chapterId: 'phy-ch-1',
      chapterName: 'Ch 1: Electric Charges & Fields',
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
      id: 'phy-pyq-10',
      chapterId: 'phy-ch-7',
      chapterName: 'Ch 7: Alternating Current',
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
      id: 'chem-pyq-1',
      chapterId: 'chem-ch-1',
      chapterName: 'Ch 1: Solutions',
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
      id: 'chem-pyq-6',
      chapterId: 'chem-ch-4',
      chapterName: 'Ch 4: d and f Block Elements',
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
  ]
};
