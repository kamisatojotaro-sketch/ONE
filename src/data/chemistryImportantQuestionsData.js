// Top 20 Guaranteed CBSE Class 12 Chemistry Board Exam Questions (All 10 Chapters)
// Complete point-wise NCERT model answers, derivations, equations, and examiner marking tips

export const IMPORTANT_CHEMISTRY_QUESTIONS = [
  {
    id: 'imp-chem-1',
    number: 1,
    title: "Solutions: Raoult's Law, Ideal vs Non-Ideal Solutions & Positive/Negative Deviations",
    shortLabel: "Raoult's Law & Deviations",
    chapterId: 'chem-ch-1',
    chapterTitle: 'Solutions',
    unit: 'Physical Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Physical Chemistry',
    frequency: '99% Frequency (Asked in almost every CBSE Board Exam)',
    questionPrompt: "(a) State Raoult's law for a solution containing volatile components. Write two characteristics of an ideal solution.\n(b) Differentiate between non-ideal solutions showing positive deviation and negative deviation from Raoult's law with one example of each. What type of azeotrope is formed in each case?",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 1: Solutions (pp. 10–15)',
      summary: "Raoult's law p_A = p°_A x_A, ΔH_mix, ΔV_mix, and minimum/maximum boiling azeotropes."
    },
    theory: [
      "Raoult's Law states that for a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction present in solution: $p_A = p_A^\\circ x_A$ and $p_B = p_B^\\circ x_B$.",
      "Ideal Solutions obey Raoult's law over the entire range of concentration, have $\\Delta H_{\\text{mix}} = 0$ and $\\Delta V_{\\text{mix}} = 0$, because $A\\text{–}B$ intermolecular attractive forces equal $A\\text{–}A$ and $B\\text{–}B$ forces (e.g., $n$-Hexane + $n$-Heptane; Bromoethane + Chloroethane).",
      "Positive Deviation ($F_{AB} < F_{AA}, F_{BB}$): Escape tendency increases $\\implies P_{\\text{obs}} > P_{\\text{calc}}$, $\\Delta H_{\\text{mix}} > 0$ (endothermic), $\\Delta V_{\\text{mix}} > 0$. Forms Minimum-Boiling Azeotropes (e.g., Ethanol + Acetone; Ethanol + Water at $95.4\\%$).",
      "Negative Deviation ($F_{AB} > F_{AA}, F_{BB}$):Stronger H-bonding between A and B decreases vapour pressure $\\implies P_{\\text{obs}} < P_{\\text{calc}}$, $\\Delta H_{\\text{mix}} < 0$ (exothermic), $\\Delta V_{\\text{mix}} < 0$. Forms Maximum-Boiling Azeotropes (e.g., Chloroform + Acetone; $68\\%\\text{ HNO}_3 + 32\\%\\text{ H}_2\\text{O}$)."
    ],
    derivations: [
      {
        name: "CBSE Marking Scheme Breakdown (5 Marks)",
        setup: "Stepwise Evaluation Criteria",
        steps: [
          { text: "Statement of Raoult's law + mathematical expression $p_{\\text{total}} = p_A^\\circ x_A + p_B^\\circ x_B$ (1.5 Marks)" },
          { text: "Ideal criteria: $\\Delta H_{\\text{mix}} = 0, \\Delta V_{\\text{mix}} = 0$ (1 Mark)" },
          { text: "Positive vs Negative deviation comparison ($F_{AB}$, $\\Delta H$, $\\Delta V$, examples & azeotrope type) (2.5 Marks)" }
        ]
      }
    ],
    keyPointsAndKeywords: [
      "Ethanol + Acetone = Positive Deviation (Minimum Boiling Azeotrope)",
      "Chloroform + Acetone = Negative Deviation (Intermolecular H-bonding)",
      "Azeotropes: Constant boiling mixtures with identical liquid and vapour composition (cannot be separated by fractional distillation)"
    ],
    examinerTip: "Always draw the intermolecular hydrogen bond between Chloroform (Cl₃C–H···O=C(CH₃)₂) and Acetone when explaining negative deviation!"
  },
  {
    id: 'imp-chem-2',
    number: 2,
    title: "Solutions: Colligative Properties, Osmotic Pressure & Van't Hoff Factor (i) Numericals",
    shortLabel: "Colligative Properties & Van't Hoff i",
    chapterId: 'chem-ch-1',
    chapterTitle: 'Solutions',
    unit: 'Physical Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Numerical & Reasoning',
    frequency: '99% Frequency',
    questionPrompt: "(a) Why is osmotic pressure measurement preferred over other colligative properties for determining the molar mass of macromolecules like proteins and polymers?\n(b) Calculate the boiling point (or freezing point) of a solution containing a dissociating/associating solute using the van't Hoff factor $i$.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 1: Solutions (pp. 19–26)',
      summary: "ΔT_b = i K_b m, ΔT_f = i K_f m, Π = i CRT, and degree of dissociation/association α."
    },
    theory: [
      "Osmotic pressure ($\\Pi = iCRT$) is preferred for biomolecules/polymers because: (1) It is measured around room temperature (preventing thermal denaturation of proteins), and (2) Molarity is used instead of molality, giving a large, easily measurable pressure reading even for very dilute solutions.",
      "Van't Hoff Factor ($i$): $i = \\frac{\\text{Observed Colligative Property}}{\\text{Calculated Colligative Property}} = \\frac{\\text{Normal Molar Mass}}{\\text{Abnormal Molar Mass}}$.",
      "For dissociation into $n$ ions: $\\alpha = \\frac{i - 1}{n - 1}$ ($i > 1$, e.g. $\\text{KCl} \\to 2$, $\\text{BaCl}_2/\\text{K}_2\\text{SO}_4 \\to 3$, $\\text{K}_4[\\text{Fe(CN)}_6] \\to 5$).",
      "For association (dimerisation, $n = 2$): $\\alpha = \\frac{1 - i}{1 - 1/n} = 2(1 - i)$ ($i < 1$, e.g. ethanoic acid or benzoic acid in benzene gives $i \\approx 0.5$ due to cyclic H-bonded dimers)."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "ΔT_f = i · K_f · m   (T_f = T°_f − ΔT_f)",
      "ΔT_b = i · K_b · m   (T_b = T°_b + ΔT_b)",
      "Reverse Osmosis (P > Π): Desalination of seawater using cellulose acetate membrane"
    ],
    examinerTip: "In water, T°_b = 373.15 K (100°C) and T°_f = 273.15 K (0°C). Never forget to subtract ΔT_f from 273.15 K!"
  },
  {
    id: 'imp-chem-3',
    number: 3,
    title: 'Electrochemistry: Nernst Equation, Gibbs Free Energy (ΔG°) & Equilibrium Constant (log K_c)',
    shortLabel: 'Nernst Equation & ΔG° Numericals',
    chapterId: 'chem-ch-2',
    chapterTitle: 'Electrochemistry',
    unit: 'Physical Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Numerical',
    frequency: '100% Guaranteed Board Numerical',
    questionPrompt: "Write the Nernst equation and calculate the EMF ($E_{\\text{cell}}$), standard Gibbs energy change ($\\Delta_r G^\\circ$), and equilibrium constant ($\\log K_c$) for a galvanic cell at 298 K.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 2: Electrochemistry (pp. 38–42)',
      summary: "E_cell = E°_cell − (0.0591/n) log Q and ΔG° = −nFE°_cell = −2.303 RT log K_c."
    },
    theory: [
      "Standard Cell Potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode (right)}} - E^\\circ_{\\text{anode (left)}}$.",
      "Nernst Equation at $298\\text{ K}$: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n}\\log_{10} \\frac{[\\text{Products (Anode Ion)}]^a}{[\\text{Reactants (Cathode Ion)}]^b}$, where $n$ is the number of moles of electrons transferred in the balanced cell reaction.",
      "Thermodynamic Relationships: $\\Delta_r G^\\circ = -n F E^\\circ_{\\text{cell}}$ (where $F = 96500\\text{ C mol}^{-1}$) and at equilibrium ($E_{\\text{cell}} = 0$): $E^\\circ_{\\text{cell}} = \\frac{0.0591}{n}\\log_{10} K_c$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "E_cell = E°_cell − (0.0591 / n) log Q",
      "ΔG° = −n · F · E°_cell   (Divide by 1000 to report in kJ/mol!)",
      "log K_c = (n · E°_cell) / 0.0591"
    ],
    examinerTip: "Always balance the electrons in both half-reactions first (e.g., for Mg/Mg²⁺ || Ag⁺/Ag, n = 2 and [Ag⁺] is SQUARED in the denominator of Q)!"
  },
  {
    id: 'imp-chem-4',
    number: 4,
    title: "Electrochemistry: Molar Conductivity (Λ_m) vs Concentration & Kohlrausch's Law",
    shortLabel: "Kohlrausch's Law & Conductivity",
    chapterId: 'chem-ch-2',
    chapterTitle: 'Electrochemistry',
    unit: 'Physical Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Theory & Numerical',
    frequency: '99% Frequency',
    questionPrompt: "(a) Explain why conductivity ($\kappa$) decreases with dilution whereas molar conductivity ($\\Lambda_m$) increases with dilution for both strong and weak electrolytes.\n(b) State Kohlrausch's law of independent migration of ions. How is it used to determine $\\Lambda_m^\\circ$ and degree of dissociation ($\alpha$) of a weak electrolyte like $\\text{CH}_3\\text{COOH}$?",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 2: Electrochemistry (pp. 45–51)',
      summary: "κ vs c, Λ_m vs √c curves (KCl vs CH₃COOH), and Kohlrausch law applications."
    },
    theory: [
      "Conductivity ($\\kappa$) decreases on dilution because the number of current-carrying ions per unit volume ($1\\text{ cm}^3$) decreases upon adding water.",
      "Molar Conductivity ($\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$) increases on dilution because the total volume $V$ containing $1\\text{ mole}$ of electrolyte increases much more rapidly than the drop in $\\kappa$.\n  – Strong Electrolyte ($\\text{KCl}$): Increases slowly and linearly ($\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{c}$) due to decreased inter-ionic attraction.\n  – Weak Electrolyte ($\\text{CH}_3\\text{COOH}$): Increases steeply at high dilution due to sharp increase in degree of ionisation ($\\alpha$).",
      "Kohlrausch's Law states that limiting molar conductivity of an electrolyte at infinite dilution ($\\Lambda_m^\\circ$) is the sum of the individual limiting ionic conductivities of its cations and anions: $\\Lambda_m^\\circ(\\text{CH}_3\\text{COOH}) = \\Lambda_m^\\circ(\\text{CH}_3\\text{COO}\\text{Na}) + \\Lambda_m^\\circ(\\text{HCl}) - \\Lambda_m^\\circ(\\text{NaCl})$.",
      "Degree of Dissociation: $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}$, and Dissociation Constant: $K_a = \\frac{c\\alpha^2}{1 - \\alpha}$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Conductivity κ ↓ on dilution (fewer ions per cm³)",
      "Molar Conductivity Λ_m = (1000 × κ) / M ↑ on dilution",
      "α = Λ_m / Λ°_m   &   K_a = c α² / (1 − α)"
    ],
    examinerTip: "Draw the Λ_m vs √c graph clearly showing KCl as a straight line with y-intercept Λ°_m and CH₃COOH as a steep hyperbola asymptotic to the y-axis!"
  },
  {
    id: 'imp-chem-5',
    number: 5,
    title: "Electrochemistry: Faraday's Laws of Electrolysis, Batteries & Fuel Cells",
    shortLabel: "Faraday's Laws, Lead Storage & Fuel Cell",
    chapterId: 'chem-ch-2',
    chapterTitle: 'Electrochemistry',
    unit: 'Physical Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Reactions & Numerical',
    frequency: '95% Frequency',
    questionPrompt: "(a) Write the anode, cathode, and overall discharging/recharging reactions of the Lead Storage Battery and $\\text{H}_2\\text{–O}_2$ Fuel Cell.\n(b) Calculate the mass of metal deposited or charge in Faradays required using Faraday's first law ($w = zIt$).",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 2: Electrochemistry (pp. 51–56)',
      summary: "Faraday's laws w = MIt/(nF), Lead storage cell, H₂-O₂ fuel cell, and Electrochemical corrosion."
    },
    theory: [
      "Faraday's First Law: $w = zIt = \\frac{M \\cdot I \\cdot t}{n \\cdot 96500}$. Charge required for 1 mole reduction: $\\text{Al}^{3+} \\to \\text{Al}$ ($3\\text{ F}$), $\\text{Cu}^{2+} \\to \\text{Cu}$ ($2\\text{ F}$), $\\text{MnO}_4^- \\to \\text{Mn}^{2+}$ ($5\\text{ F}$), $\\text{Cr}_2\\text{O}_7^{2-} \\to 2\\text{Cr}^{3+}$ ($6\\text{ F}$).",
      "Lead Storage Battery (Discharging, $38\\%\\text{ H}_2\\text{SO}_4$):\n  – Anode: $\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\longrightarrow \\text{PbSO}_4(s) + 2e^-$\n  – Cathode: $\\text{PbO}_2(s) + \\text{SO}_4^{2-}(aq) + 4\\text{H}^+(aq) + 2e^- \\longrightarrow \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$\n  – Overall: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\longrightarrow 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$ (Reversed on recharging!).",
      "$\\text{H}_2\\text{–O}_2$ Fuel Cell (Apollo Space Programme, $\\sim 70\\%$ efficiency, zero pollution):\n  – Anode: $2\\text{H}_2(g) + 4\\text{OH}^-(aq) \\longrightarrow 4\\text{H}_2\\text{O}(l) + 4e^-$\n  – Cathode: $\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\longrightarrow 4\\text{OH}^-(aq)$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "w = (M · I · t) / (n · 96500)   [t in seconds!]",
      "Mercury Cell: Gives constant voltage (1.35 V) throughout life because overall reaction involves no ions in solution",
      "Fuel Cell Advantages: ~70% efficiency (vs 40% thermal plants) and pollution-free (water byproduct)"
    ],
    examinerTip: "Always convert current duration from minutes/hours into SECONDS before applying Q = I × t!"
  },
  {
    id: 'imp-chem-6',
    number: 6,
    title: 'Chemical Kinetics: First-Order Integrated Rate Law, Half-Life & Time Completion Proofs',
    shortLabel: 'First-Order Kinetics & Half-Life',
    chapterId: 'chem-ch-3',
    chapterTitle: 'Chemical Kinetics',
    unit: 'Physical Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Derivation & Numerical',
    frequency: '100% Guaranteed Board Question',
    questionPrompt: "(a) Derive the integrated rate equation and half-life formula for a first-order reaction.\n(b) Show that for a first-order reaction, the time required for $99.9\\%$ completion is 10 times its half-life ($t_{1/2}$), and time required for $99\\%$ completion is twice the time required for $90\\%$ completion.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 3: Chemical Kinetics (pp. 71–76)',
      summary: "k = (2.303/t) log([R]₀/[R]), t_1/2 = 0.693/k, and zero-order kinetics."
    },
    theory: [
      "For a first-order reaction $R \\longrightarrow P$: $k = \\frac{2.303}{t}\\log_{10}\\frac{[R]_0}{[R]}$ and $t_{1/2} = \\frac{0.693}{k}$ (independent of $[R]_0$).",
      "Proof for $99.9\\%$ completion: $[R] = [R]_0 - 0.999[R]_0 = 0.001[R]_0 = 10^{-3}[R]_0$. Thus $t_{99.9\\%} = \\frac{2.303}{k}\\log(10^3) = \\frac{3 \\times 2.303}{k} = \\frac{6.909}{k} \\approx 10 \\times \\frac{0.693}{k} = 10 \\, t_{1/2}$.",
      "Proof for $99\\%$ vs $90\\%$: $t_{99\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{1}\\right) = \\frac{2.303 \\times 2}{k}$; $t_{90\\%} = \\frac{2.303}{k}\\log\\left(\\frac{100}{10}\\right) = \\frac{2.303 \\times 1}{k} \\implies t_{99\\%} = 2 \\times t_{90\\%}$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "k = (2.303 / t) log([R]₀ / [R])",
      "t_1/2 = 0.693 / k  (1st Order)   vs   t_1/2 = [R]₀ / 2k  (Zero Order)",
      "Plot of log([R]₀/[R]) vs t passes through origin with slope = +k / 2.303"
    ],
    examinerTip: "Remember: [R] in the denominator of log([R]₀/[R]) is the amount REMAINING, not the amount reacted!"
  },
  {
    id: 'imp-chem-7',
    number: 7,
    title: 'Chemical Kinetics: Arrhenius Equation, Activation Energy (Eₐ) & Order vs Molecularity',
    shortLabel: 'Arrhenius Equation & Order/Molecularity',
    chapterId: 'chem-ch-3',
    chapterTitle: 'Chemical Kinetics',
    unit: 'Physical Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Numerical & Distinction',
    frequency: '95% Frequency',
    questionPrompt: "(a) Differentiate between Order and Molecularity of a reaction.\n(b) The rate of a reaction doubles (or quadruples) when temperature increases from $T_1$ to $T_2$. Calculate the activation energy ($E_a$) using the Arrhenius equation.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 3: Chemical Kinetics (pp. 66–81)',
      summary: "Order vs Molecularity and log(k₂/k₁) = (Eₐ / 2.303 R)[(T₂ − T₁) / (T₁T₂)]."
    },
    theory: [
      "Order is experimental, can be zero or fractional, and applies to overall complex reactions; Molecularity is theoretical, always a whole number (1, 2, or 3), and applies only to elementary steps.",
      "Arrhenius Two-Temperature Equation: $\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 \\times 8.314}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right] = \\frac{E_a}{19.15}\\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]$.",
      "A catalyst lowers activation energy ($E_a$) by providing an alternate pathway, increasing rate without changing $\\Delta G$ or $K_{\\text{eq}}$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "2.303 × R = 2.303 × 8.314 = 19.147 J K⁻¹ mol⁻¹",
      "log 2 = 0.3010   |   log 3 = 0.4771   |   log 4 = 0.6021",
      "Slope of log k vs (1/T) = −Eₐ / (2.303 R)"
    ],
    examinerTip: "Memorise that 2.303 × 8.314 = 19.15 J K⁻¹ mol⁻¹ to save 2 minutes of multiplication in Arrhenius numericals!"
  },
  {
    id: 'imp-chem-8',
    number: 8,
    title: 'd & f-Block: Transition Metal Properties (Variable Oxidation States, Colour, Magnetic & Catalytic)',
    shortLabel: 'd-Block Give-Reason Master Bank',
    chapterId: 'chem-ch-4',
    chapterTitle: 'The d- and f-Block Elements',
    unit: 'Inorganic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Give-Reason',
    frequency: '100% Guaranteed Give-Reason Questions',
    questionPrompt: "Account for the following:\n(i) $\\text{Zn, Cd, and Hg}$ are not regarded as transition elements and are soft with low enthalpies of atomisation.\n(ii) Transition metals exhibit variable oxidation states, form coloured ions, and act as good catalysts.\n(iii) $E^\\circ(\\text{Cu}^{2+}/\\text{Cu})$ is positive ($+0.34\\text{ V}$), whereas $E^\\circ(\\text{Mn}^{3+}/\\text{Mn}^{2+})$ is much more positive than $E^\\circ(\\text{Cr}^{3+}/\\text{Cr}^{2+})$.\n(iv) $\\text{Cu}^+$ ion is unstable in aqueous solution and disproportionates.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 4: The d- and f-Block Elements (pp. 92–105)',
      summary: "Electronic configurations, enthalpy of atomisation, electrode potentials, magnetic moment μ = √[n(n+2)], and colour."
    },
    theory: [
      "$\\text{Zn, Cd, Hg}$ have completely filled $(n-1)d^{10}$ orbitals in both ground state and common $+2$ oxidation state, so they lack unpaired d-electrons for metallic d–d bonding (hence low enthalpy of atomisation and not true transition elements).",
      "Variable Oxidation States arise because the energy difference between $(n-1)d$ and $ns$ orbitals is very small, allowing both to participate in bonding. Mn shows maximum oxidation states ($+2$ to $+7$).",
      "$E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$ because the high enthalpy of atomisation and high second ionisation enthalpy of Cu are not compensated by its hydration enthalpy.",
      "$\\text{Cu}^+(aq)$ disproportionates ($2\\text{Cu}^+ \\to \\text{Cu}^{2+} + \\text{Cu}$) because the much more negative hydration enthalpy ($\\Delta_{\\text{hyd}}H^\\circ$) of $\\text{Cu}^{2+}$ (due to higher charge density) more than compensates for the second ionisation enthalpy of Cu.",
      "$\\text{Cr}^{2+}$ ($3d^4$) is a strong reducing agent because it oxidises to stable half-filled $t_{2g}^3$ $\\text{Cr}^{3+}$ ($3d^3$), whereas $\\text{Mn}^{3+}$ ($3d^4$) is a strong oxidising agent because it reduces to stable half-filled $\\text{Mn}^{2+}$ ($3d^5$)."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Cr²⁺ = Strong Reducing Agent (3d⁴ ⟶ t₂g³) | Mn³⁺ = Strong Oxidising Agent (3d⁴ ⟶ 3d⁵)",
      "Highest Fluoride of Mn is MnF₄, whereas Highest Oxide is Mn₂O₇ (Oxygen forms multiple pπ–dπ bonds!)",
      "Spin-only Magnetic Moment: μ = √[n(n + 2)] BM"
    ],
    examinerTip: "Whenever a question asks why Cu²⁺ or Cr³⁺ is stable in water, ALWAYS include the keyword 'more negative Hydration Enthalpy (Δ_hyd H°)' or 'half-filled t₂g³ stability'!"
  },
  {
    id: 'imp-chem-9',
    number: 9,
    title: 'd & f-Block: K₂Cr₂O₇ & KMnO₄ Preparation, Ionic Equations & Lanthanoid Contraction',
    shortLabel: 'K₂Cr₂O₇, KMnO₄ & Lanthanoid Contraction',
    chapterId: 'chem-ch-4',
    chapterTitle: 'The d- and f-Block Elements',
    unit: 'Inorganic Chemistry',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Inorganic Reactions',
    frequency: '99% Frequency',
    questionPrompt: "(a) Describe the preparation of Potassium Dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) from chromite ore and Potassium Permanganate ($\\text{KMnO}_4$) from pyrolusite ore ($\\text{MnO}_2$).\n(b) Write balanced ionic equations for the reaction of acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ and $\\text{KMnO}_4$ with $\\text{Fe}^{2+}$, $\\text{I}^-$, $\\text{C}_2\\text{O}_4^{2-}$, and $\\text{H}_2\\text{S}$.\n(c) What is Lanthanoid Contraction? State its cause and two major consequences.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 4: The d- and f-Block Elements (pp. 106–113)',
      summary: "Chromite and pyrolusite conversions, redox half-equations, and 4f imperfect shielding."
    },
    theory: [
      "$\\text{K}_2\\text{Cr}_2\\text{O}_7$ Preparation:\n  1. $4\\text{FeCr}_2\\text{O}_4 + 8\\text{Na}_2\\text{CO}_3 + 7\\text{O}_2 \\xrightarrow{\\Delta} 8\\text{Na}_2\\text{CrO}_4\\text{ (Yellow)} + 2\\text{Fe}_2\\text{O}_3 + 8\\text{CO}_2$\n  2. $2\\text{Na}_2\\text{CrO}_4 + 2\\text{H}^+ \\longrightarrow \\text{Na}_2\\text{Cr}_2\\text{O}_7\\text{ (Orange)} + 2\\text{Na}^+ + \\text{H}_2\\text{O}$\n  3. $\\text{Na}_2\\text{Cr}_2\\text{O}_7 + 2\\text{KCl} \\longrightarrow \\text{K}_2\\text{Cr}_2\\text{O}_7\\downarrow + 2\\text{NaCl}$.",
      "$\\text{KMnO}_4$ Preparation:\n  1. $2\\text{MnO}_2 + 4\\text{KOH} + \\text{O}_2 \\xrightarrow{\\Delta} 2\\text{K}_2\\text{MnO}_4\\text{ (Dark Green)} + 2\\text{H}_2\\text{O}$\n  2. $3\\text{MnO}_4^{2-} + 4\\text{H}^+ \\longrightarrow 2\\text{MnO}_4^-\\text{ (Purple)} + \\text{MnO}_2 + 2\\text{H}_2\\text{O}$.",
      "Lanthanoid Contraction: Steady decrease in atomic and ionic radii from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$ due to poor shielding of one $4f$ electron by another.\n  – Consequences: (1) $4d$ and $5d$ elements have nearly identical atomic radii (e.g., $\\text{Zr} = 160\\text{ pm}$ and $\\text{Hf} = 159\\text{ pm}$), making their chemical separation very difficult; (2) Basic strength of hydroxides decreases from $\\text{La(OH)}_3$ to $\\text{Lu(OH)}_3$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "pH Equilibrium: 2CrO₄²⁻ (Yellow, Basic) + 2H⁺ ⇌ Cr₂O₇²⁻ (Orange, Acidic) + H₂O",
      "In Acidic KMnO₄: I⁻ ⟶ I₂, Fe²⁺ ⟶ Fe³⁺, C₂O₄²⁻ ⟶ CO₂, NO₂⁻ ⟶ NO₃⁻",
      "In Neutral/Faintly Alkaline KMnO₄: I⁻ ⟶ IO₃⁻ (Iodate!) and S₂O₃²⁻ ⟶ SO₄²⁻"
    ],
    examinerTip: "Watch out for the CBSE trap on KMnO₄ + KI: in ACIDIC medium I⁻ gives I₂, but in ALKALINE/NEUTRAL medium I⁻ is oxidised to Iodate (IO₃⁻)!"
  },
  {
    id: 'imp-chem-10',
    number: 10,
    title: 'Coordination Compounds: VBT vs CFT (Hybridisation, Geometry & Magnetic Behaviour)',
    shortLabel: 'VBT & CFT Complex Comparisons',
    chapterId: 'chem-ch-5',
    chapterTitle: 'Coordination Compounds',
    unit: 'Inorganic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Inorganic Bonding',
    frequency: '100% Guaranteed Board Question',
    questionPrompt: "Using Valence Bond Theory (VBT) and Crystal Field Theory (CFT), explain the hybridisation, geometry, inner/outer orbital nature, and magnetic behaviour of:\n(i) $[\\text{Co(NH}_3)_6]^{3+}$ vs $[\\text{CoF}_6]^{3-}$\n(ii) $[\\text{Ni(CN)}_4]^{2-}$ vs $[\\text{NiCl}_4]^{2-}$ vs $[\\text{Ni(CO)}_4]$\n(iii) $[\\text{Fe(CN)}_6]^{4-}$ vs $[\\text{Fe(H}_2\\text{O)}_6]^{2+}$.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 5: Coordination Compounds (pp. 127–134)',
      summary: "VBT orbital box diagrams, spectrochemical series, and octahedral/tetrahedral crystal field splitting."
    },
    theory: [
      "$[\\text{Co(NH}_3)_6]^{3+}$ ($\\text{Co}^{3+} = 3d^6$): Strong ligand $\\text{NH}_3$ pairs electrons $\\implies d^2sp^3$ (Inner orbital octahedral), Diamagnetic ($n = 0$, $t_{2g}^6 e_g^0$).",
      "$[\\text{CoF}_6]^{3-}$ ($\\text{Co}^{3+} = 3d^6$): Weak ligand $\\text{F}^-$ does not pair electrons $\\implies sp^3d^2$ (Outer orbital octahedral), Paramagnetic ($n = 4$, $\\mu = 4.90\\text{ BM}$, $t_{2g}^4 e_g^2$).",
      "$[\\text{Ni(CN)}_4]^{2-}$ ($\\text{Ni}^{2+} = 3d^8$): Strong ligand $\\text{CN}^-$ pairs 3d electrons $\\implies dsp^2$ (Square planar), Diamagnetic ($n = 0$).",
      "$[\\text{NiCl}_4]^{2-}$ ($\\text{Ni}^{2+} = 3d^8$): Weak ligand $\\text{Cl}^-$ $\\implies sp^3$ (Tetrahedral), Paramagnetic ($n = 2$, $\\mu = 2.83\\text{ BM}$).",
      "$[\\text{Ni(CO)}_4]$ ($\\text{Ni}^0 = 3d^8 4s^2 \\to 3d^{10}$): Strong CO pushes $4s^2$ electrons into $3d$ $\\implies sp^3$ (Tetrahedral), Diamagnetic ($n = 0$)."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Strong Ligands (Pair Up): CO > CN⁻ > en > NH₃",
      "Weak Ligands (No Pairing): H₂O > C₂O₄²⁻ > OH⁻ > F⁻ > Cl⁻ > Br⁻ > I⁻",
      "Octahedral Splitting: d⁴ with Δ₀ < P gives t₂g³ e_g¹ | Δ₀ > P gives t₂g⁴ e_g⁰"
    ],
    examinerTip: "Always draw the 3d, 4s, 4p (and 4d) orbital box diagrams showing both the free metal ion and the hybridised complex to secure full 3/3 marks!"
  },
  {
    id: 'imp-chem-11',
    number: 11,
    title: 'Coordination Compounds: IUPAC Nomenclature, Stereoisomerism & Synergic Bonding',
    shortLabel: 'IUPAC Naming & Isomerism',
    chapterId: 'chem-ch-5',
    chapterTitle: 'Coordination Compounds',
    unit: 'Inorganic Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Nomenclature & Isomerism',
    frequency: '99% Frequency',
    questionPrompt: "(a) Draw the geometrical and optical isomers of $[\\text{Co(en)}_2\\text{Cl}_2]^+$ (or $[\\text{Pt(en)}_2\\text{Cl}_2]^{2+}$). Which isomer is optically inactive and why?\n(b) Explain why $[\\text{Ti(H}_2\\text{O)}_6]\\text{Cl}_3$ is violet in colour but becomes colourless on heating.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 1',
      chapter: 'Chapter 5: Coordination Compounds (pp. 121–135)',
      summary: "IUPAC rules, cis/trans and d/l isomers, d–d transition, and metal carbonyl synergic bonding."
    },
    theory: [
      "$[\\text{Co(en)}_2\\text{Cl}_2]^+$ exhibits two geometrical isomers: *cis* and *trans*. The *cis*-isomer lacks a plane of symmetry (chiral) and exists as a pair of non-superimposable mirror-image enantiomers ($d$-*cis* and $l$-*cis*). The *trans*-isomer possesses a plane of symmetry (achiral) and is optically INACTIVE.",
      "$[\\text{Ti(H}_2\\text{O)}_6]\\text{Cl}_3$ contains $\\text{Ti}^{3+}$ ($3d^1$: $t_{2g}^1 e_g^0$), which absorbs green-yellow light for $t_{2g} \\to e_g$ $d\\text{–}d$ transition and appears violet. On heating, water ligands are lost; in the absence of ligands, there is no crystal field splitting and hence no $d\\text{–}d$ transition, making anhydrous $\\text{TiCl}_3$ colourless."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Total Stereoisomers of [Co(en)₂Cl₂]⁺ = 3 (d-cis, l-cis, and trans)",
      "Colour requires BOTH: Partially filled d-subshell (d¹ to d⁹) AND Ligands for Crystal Field Splitting",
      "Synergic Bonding in Metal Carbonyls: M←CO σ-bond + M→CO π*-backbonding"
    ],
    examinerTip: "When drawing optical isomers of cis-[Co(en)₂Cl₂]⁺, always draw the dotted vertical mirror line between the d- and l-forms!"
  },
  {
    id: 'imp-chem-12',
    number: 12,
    title: 'Haloalkanes & Haloarenes: SN1 vs SN2 Mechanisms, Stereochemistry & Reactivity',
    shortLabel: 'SN1 vs SN2 & Haloarene Inertness',
    chapterId: 'chem-ch-6',
    chapterTitle: 'Haloalkanes and Haloarenes',
    unit: 'Organic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Organic Mechanism',
    frequency: '99% Frequency',
    questionPrompt: "(a) Compare $S_N1$ and $S_N2$ mechanisms with respect to kinetics, carbocation/transition state, reactivity order of alkyl halides, and stereochemical outcome (inversion vs racemisation).\n(b) Give four reasons why haloarenes (chlorobenzene) are much less reactive than haloalkanes towards nucleophilic substitution reactions.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 6: Haloalkanes and Haloarenes (pp. 169–180)',
      summary: "Walden inversion in SN2, racemisation in SN1, allylic/benzylic stability, and C–X bond in chlorobenzene."
    },
    theory: [
      "$S_N2$ Mechanism: Concerted single-step bimolecular reaction ($\\text{Rate} = k[\\text{RX}][\\text{Nu}^-]$) via a pentacoordinate transition state with backside attack, causing $100\\%$ **Walden Inversion** of configuration. Governed by steric hindrance: $\\text{CH}_3\\text{X} > 1^\\circ > 2^\\circ > 3^\\circ$.",
      "$S_N1$ Mechanism: Two-step unimolecular reaction ($\\text{Rate} = k[\\text{RX}]$) via a planar $sp^2$ carbocation intermediate. Nucleophile attacks from both front and back faces, resulting in **Racemisation** ($50:50$ $d$ and $l$ mixture). Governed by carbocation stability: $\\text{Benzylic} / \\text{Allylic} > 3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3\\text{X}$.",
      "Four Reasons for Low Reactivity of Haloarenes (Chlorobenzene):\n  1. *Resonance Effect:* $\\text{C–Cl}$ bond acquires partial double-bond character.\n  2. *Hybridisation:* Carbon in $\\text{C–Cl}$ is $sp^2$ (more electronegative, shorter bond $169\\text{ pm}$) vs $sp^3$ in haloalkanes ($177\\text{ pm}$).\n  3. *Instability of Phenyl Cation:* Phenyl cation is not stabilised by resonance ($S_N1$ ruled out).\n  4. *Electronic Repulsion:* Electron-rich nucleophile is repelled by the electron-rich $\\pi$-cloud of the benzene ring."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "SN2 Order (Steric): 1° > 2° > 3° (Walden Inversion)",
      "SN1 Order (Carbocation): 3° > 2° > 1° (Racemisation)",
      "Ambident Nucleophiles: KCN (ionic) gives R–CN (Nitrile) | AgCN (covalent) gives R–NC (Isocyanide)"
    ],
    examinerTip: "Remember: Presence of electron-withdrawing –NO₂ groups at ortho- and para-positions of chlorobenzene stabilises the carbanion intermediate and facilitates nucleophilic substitution!"
  },
  {
    id: 'imp-chem-13',
    number: 13,
    title: 'Alcohols, Phenols & Ethers: Acid-Catalysed Hydration/Dehydration Mechanisms & Williamson Synthesis',
    shortLabel: 'Alcohol Mechanisms & Williamson Synthesis',
    chapterId: 'chem-ch-7',
    chapterTitle: 'Alcohols, Phenols and Ethers',
    unit: 'Organic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Mechanism & Named Reactions',
    frequency: '99% Frequency',
    questionPrompt: "(a) Write the 3-step mechanism of: (i) Acid-catalysed hydration of ethene to ethanol, (ii) Acid-catalysed dehydration of ethanol to ethene at $443\\text{ K}$ (and to ethoxyethane at $413\\text{ K}$).\n(b) Explain Williamson ether synthesis and its limitation for preparing tert-butyl ethers, plus Reimer-Tiemann and Kolbe's reactions.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 7: Alcohols, Phenols and Ethers (pp. 199–216)',
      summary: "Carbocation mechanisms, Reimer-Tiemann, Kolbe's reaction, and Williamson ether synthesis."
    },
    theory: [
      "Hydration of Ethene ($\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{CH}_2\\text{OH}$): Step 1: Protonation of alkene by $\\text{H}_3\\text{O}^+$ to form carbocation; Step 2: Nucleophilic attack of $\\text{H}_2\\text{O}$; Step 3: Deprotonation to form ethanol.",
      "Dehydration of Ethanol at $443\\text{ K}$ ($\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{conc. H}_2\\text{SO}_4, 443\\text{ K}} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}$): Step 1: Fast protonation to ethyl oxonium ion; Step 2: Slow RDS loss of $\\text{H}_2\\text{O}$ to form ethyl carbocation; Step 3: Elimination of $\\text{H}^+$ to form ethene. (At $413\\text{ K}$, $S_N2$ attack of a second ethanol molecule on protonated ethanol gives diethyl ether!).",
      "Williamson Synthesis ($\\text{R–O}^-\\text{Na}^+ + \\text{R\'–X} \\to \\text{R–O–R\'} + \\text{NaX}$): Proceeds via $S_N2$ mechanism, so the alkyl halide $\\text{R\'–X}$ MUST be primary ($1^\\circ$). To prepare tert-butyl methyl ether, we must use Sodium tert-butoxide $[(\\text{CH}_3)_3\\text{C–ONa}]$ + Methyl bromide ($\\text{CH}_3\\text{Br}$); if tert-butyl bromide is used with $\\text{CH}_3\\text{ONa}$, elimination occurs giving 2-methylpropene!"
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Reimer-Tiemann: Phenol + CHCl₃ + aq. NaOH ──(H⁺)──> Salicylaldehyde (2-Hydroxybenzaldehyde)",
      "Kolbe's Reaction: Phenol + NaOH ⟶ Sodium phenoxide ──(1. CO₂, 2. H⁺)──> Salicylic Acid (2-Hydroxybenzoic acid)",
      "Anisole + HI ⟶ Phenol (C₆H₅OH) + Methyl Iodide (CH₃I) [O–C₆H₅ bond does not break!]"
    ],
    examinerTip: "Watch out for the HI cleavage trap: Anisole + HI gives Phenol + CH₃I (SN2), whereas tert-Butyl methyl ether + HI gives (CH₃)₃C–I + CH₃OH (SN1 via stable 3° carbocation)!"
  },
  {
    id: 'imp-chem-14',
    number: 14,
    title: 'Aldehydes & Ketones: Nucleophilic Addition Reactivity & Chemical Distinction Tests',
    shortLabel: 'Carbonyl Reactivity & Distinction Tests',
    chapterId: 'chem-ch-8',
    chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
    unit: 'Organic Chemistry',
    marks: '5 Marks',
    marksNum: 5,
    category: 'Organic Reasoning & Tests',
    frequency: '100% Guaranteed Board Question',
    questionPrompt: "(a) Explain why aldehydes are more reactive than ketones towards nucleophilic addition reactions. Arrange $\\text{HCHO}, \\text{CH}_3\\text{CHO}, \\text{C}_6\\text{H}_5\\text{CHO}, \\text{CH}_3\\text{COCH}_3$ in increasing order of reactivity.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Acetophenone and Benzophenone\n  (iii) Phenol and Benzoic acid\n  (iv) Ethanal and Propanal.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 8: Aldehydes, Ketones and Carboxylic Acids (pp. 235–242)',
      summary: "Steric and electronic effects on >C=O, Tollens', Fehling's, Iodoform, and NaHCO₃ tests."
    },
    theory: [
      "Aldehydes are more reactive than ketones because: (1) *Steric Factor:* Two relatively large substituents in ketones hinder the approach of the nucleophile to the carbonyl carbon more than the single substituent in aldehydes; (2) *Electronic Factor:* Two $+I$ electron-releasing alkyl groups in ketones reduce the positive charge (electrophilicity) on the carbonyl carbon.",
      "Reactivity Order: $\\text{C}_6\\text{H}_5\\text{COCH}_3 < \\text{CH}_3\\text{COCH}_3 < \\text{C}_6\\text{H}_5\\text{CHO} < \\text{CH}_3\\text{CHO} < \\text{HCHO}$.",
      "Distinction Tests:\n  (i) *Propanal vs Propanone:* Tollens' test (Propanal gives silver mirror) or Iodoform test (Propanone gives yellow $\\text{CHI}_3$ ppt).\n  (ii) *Acetophenone vs Benzophenone:* Iodoform test with $\\text{NaOH}/\\text{I}_2$ (Acetophenone has $\\text{CH}_3\\text{CO}-$ and gives yellow $\\text{CHI}_3$ ppt; Benzophenone does not).\n  (iii) *Phenol vs Benzoic Acid:* $\\text{NaHCO}_3$ test (Benzoic acid gives brisk effervescence of $\\text{CO}_2$; Phenol does not) or Neutral $\\text{FeCl}_3$ test (Phenol gives violet colouration).\n  (iv) *Ethanal vs Propanal:* Iodoform test (Ethanal $\\text{CH}_3\\text{CHO}$ gives yellow $\\text{CHI}_3$ ppt; Propanal does not)."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Tollens' Test: Positive for ALL Aldehydes (Aliphatic + Aromatic Benzaldehyde)",
      "Fehling's Test: Positive ONLY for Aliphatic Aldehydes (Negative for Benzaldehyde & Ketones)",
      "Iodoform Test: Positive ONLY for CH₃–C=O and CH₃–CH(OH)– groups"
    ],
    examinerTip: "Always state the reagent AND the observable visual change (e.g. 'yellow precipitate of iodoform' or 'silver mirror') to get full marks in distinction tests!"
  },
  {
    id: 'imp-chem-15',
    number: 15,
    title: 'Aldehydes, Ketones & Carboxylic Acids: Master Named Reactions & Acidity Trends',
    shortLabel: 'Aldol, Cannizzaro, HVZ & Acid Strength',
    chapterId: 'chem-ch-8',
    chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
    unit: 'Organic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Named Reactions',
    frequency: '99% Frequency',
    questionPrompt: "(a) Write chemical equations for: (i) Aldol condensation, (ii) Cannizzaro reaction, (iii) Clemmensen reduction, (iv) Wolff-Kishner reduction, (v) Hell-Volhard-Zelinsky (HVZ) reaction.\n(b) Arrange the following in increasing order of acid strength: $\\text{CH}_3\\text{COOH}, \\text{HCOOH}, \\text{FCH}_2\\text{COOH}, \\text{ClCH}_2\\text{COOH}, \\text{C}_6\\text{H}_5\\text{COOH}$.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 8: Aldehydes, Ketones and Carboxylic Acids (pp. 240–254)',
      summary: "Named reactions of carbonyls and substituent effects on pKₐ of carboxylic acids."
    },
    theory: [
      "Aldol Condensation (requires $\\ge 1$ $\\alpha$-H, dil. $\\text{NaOH}$): $2\\,\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3\\text{CH(OH)CH}_2\\text{CHO} \\xrightarrow{\\Delta} \\text{CH}_3\\text{CH=CHCHO} + \\text{H}_2\\text{O}$.",
      "Cannizzaro Reaction (requires $0$ $\\alpha$-H, $50\\%$ $\\text{NaOH}$): $2\\,\\text{HCHO} + \\text{conc. KOH} \\longrightarrow \\text{CH}_3\\text{OH} + \\text{HCOOK}$.",
      "HVZ Reaction: $\\text{RCH}_2\\text{COOH} \\xrightarrow{\\text{1. X}_2/\\text{Red P, 2. H}_2\\text{O}} \\text{RCH(X)COOH}$.",
      "Acidity Order: Electron-withdrawing groups ($-I$: $\\text{F} > \\text{Cl} > \\text{Br}$) stabilise the carboxylate anion and increase acidity, whereas $+I$ alkyl groups decrease acidity: $\\text{CH}_3\\text{COOH} < \\text{C}_6\\text{H}_5\\text{COOH} < \\text{HCOOH} < \\text{ClCH}_2\\text{COOH} < \\text{FCH}_2\\text{COOH}$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Stronger Acid = Larger Kₐ = SMALLER pKₐ",
      "Rosenmund: RCOCl + H₂ (Pd/BaSO₄) ⟶ RCHO",
      "Etard: Toluene + CrO₂Cl₂ (CS₂) / H₃O⁺ ⟶ Benzaldehyde"
    ],
    examinerTip: "Check whether the question asks for increasing 'acid strength' or increasing 'pKₐ' — they are exact reverses of each other!"
  },
  {
    id: 'imp-chem-16',
    number: 16,
    title: 'Amines: Basicity Orders (Gas vs Aqueous 231/213), Gabriel & Hoffmann Reactions',
    shortLabel: 'Amine Basicity & Preparation',
    chapterId: 'chem-ch-9',
    chapterTitle: 'Amines',
    unit: 'Organic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Reasoning & Named Reactions',
    frequency: '100% Guaranteed Board Question',
    questionPrompt: "(a) Arrange in increasing order of basic strength: (i) $\\text{C}_2\\text{H}_5\\text{NH}_2, (\\text{C}_2\\text{H}_5)_2\\text{NH}, (\\text{C}_2\\text{H}_5)_3\\text{N}, \\text{NH}_3$ in gas phase and in aqueous solution; (ii) $\\text{C}_6\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{NHCH}_3, \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$.\n(b) Account for: (i) $pK_b$ of aniline is more than that of methylamine, (ii) Aniline does not undergo Friedel-Crafts reaction, (iii) Direct nitration of aniline yields $47\\%$ $m$-nitroaniline.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 9: Amines (pp. 265–274)',
      summary: "Inductive, solvation, and steric effects on amine basicity and electrophilic substitution of aniline."
    },
    theory: [
      "Gas Phase Basicity (purely $+I$ effect): $\\text{NH}_3 < 1^\\circ < 2^\\circ < 3^\\circ$.",
      "Aqueous Solution Basicity (combined $+I$, hydration H-bonding, and steric effects):\n  – Ethyl group ($\\text{C}_2\\text{H}_5$): $\\text{NH}_3 < 1^\\circ < 3^\\circ < 2^\\circ$ (**231**).\n  – Methyl group ($\\text{CH}_3$): $\\text{NH}_3 < 3^\\circ < 1^\\circ < 2^\\circ$ (**213**).",
      "$pK_b$ of Aniline $>$ Methylamine: In aniline, the N lone pair is delocalised into the benzene ring by $+R$ resonance and is less available for protonation.",
      "Aniline fails Friedel-Crafts reaction because it acts as a Lewis base and forms a salt $[\\text{C}_6\\text{H}_5\\text{NH}_2^+\\text{AlCl}_3^-]$ with the Lewis acid catalyst $\\text{AlCl}_3$, placing a deactivating positive charge on N.",
      "Direct nitration of aniline in acidic $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$ protonates aniline into the meta-directing **anilinium ion** ($\\text{C}_6\\text{H}_5\\text{NH}_3^+$), giving $47\\%$ $m$-nitroaniline."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Aqueous Ethyl Basicity: 2° > 3° > 1° > NH₃ (231)",
      "Aqueous Methyl Basicity: 2° > 1° > 3° > NH₃ (213)",
      "Gabriel Phthalimide Synthesis: Prepares ONLY 1° Aliphatic Amines (Aryl halides do not undergo SN2)"
    ],
    examinerTip: "Always mention all three factors — (1) +I inductive effect, (2) Solvation/hydration of conjugate cation, and (3) Steric hindrance — when explaining aqueous amine basicity!"
  },
  {
    id: 'imp-chem-17',
    number: 17,
    title: 'Amines: Hinsberg Test, Carbylamine Reaction & Diazonium Salt Conversions',
    shortLabel: 'Hinsberg Test & Diazonium Hub',
    chapterId: 'chem-ch-9',
    chapterTitle: 'Amines',
    unit: 'Organic Chemistry',
    marks: '3 Marks / 5 Marks',
    marksNum: 5,
    category: 'Distinction & Conversions',
    frequency: '99% Frequency',
    questionPrompt: "(a) How does Hinsberg's reagent ($\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) distinguish between primary, secondary, and tertiary amines?\n(b) Write the Carbylamine reaction and Azo dye coupling reactions of benzenediazonium chloride with phenol and aniline.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 9: Amines (pp. 270–278)',
      summary: "Benzenesulphonyl chloride test, isocyanide test, Sandmeyer, and diazonium coupling."
    },
    theory: [
      "Hinsberg's Test (Benzenesulphonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$):\n  – $1^\\circ$ Amine: Forms N-alkylbenzenesulphonamide which is **soluble in alkali ($\\text{KOH}$)** due to acidic H on N.\n  – $2^\\circ$ Amine: Forms N,N-dialkylbenzenesulphonamide which is **insoluble in alkali ($\\text{KOH}$)** (no acidic H on N).\n  – $3^\\circ$ Amine: Does not react at all.",
      "Carbylamine Test (only $1^\\circ$ aliphatic and aromatic amines): $\\text{R–NH}_2 + \\text{CHCl}_3 + 3\\text{KOH(alc.)} \\xrightarrow{\\Delta} \\text{R–NC}\\text{ (Foul-smelling isocyanide)} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$.",
      "Azo Coupling: $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{Phenol} \\xrightarrow{\\text{OH}^-} p\\text{-Hydroxyazobenzene (Orange dye)}$; $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{Aniline} \\xrightarrow{\\text{H}^+} p\\text{-Aminoazobenzene (Yellow dye)}$."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Ethylamine vs Aniline Distinction: Azo Dye Test (Aniline gives orange-red dye with β-naphthol; Ethylamine gives N₂ gas)",
      "Deamination of Diazonium Salt: C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O (or CH₃CH₂OH) ⟶ Benzene (C₆H₆)",
      "Balz-Schiemann: C₆H₅N₂⁺Cl⁻ + HBF₄ ──(Δ)──> C₆H₅F (Fluorobenzene)"
    ],
    examinerTip: "Never use Carbylamine test to distinguish Aniline from Ethylamine because BOTH are 1° amines and both give foul-smelling isocyanides!"
  },
  {
    id: 'imp-chem-18',
    number: 18,
    title: 'Biomolecules: Structural Elucidation of D-Glucose (HI, Br₂ Water, HNO₃) & Cyclic Structure',
    shortLabel: 'Glucose Reactions & Cyclic Anomers',
    chapterId: 'chem-ch-10',
    chapterTitle: 'Biomolecules',
    unit: 'Organic Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Biomolecules',
    frequency: '100% Guaranteed Board Question',
    questionPrompt: "(a) What happens when D-glucose is treated with: (i) $\\text{HI}$ (prolonged heating), (ii) Bromine water, (iii) Conc. $\\text{HNO}_3$, (iv) $\\text{HCN}$ / $\\text{NH}_2\\text{OH}$? State what each reaction proves about the structure of glucose.\n(b) Enumerate three reactions of D-glucose which cannot be explained by its open-chain structure.",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 10: Biomolecules (pp. 282–286)',
      summary: "Open-chain structural proofs of D-glucose and α/β pyranose hemiacetal ring."
    },
    theory: [
      "D-Glucose + Prolonged heating with $\\text{HI}$ $\\longrightarrow$ **$n$-Hexane** (proves all 6 carbons are linked in an unbranched straight chain).",
      "D-Glucose + $\\text{NH}_2\\text{OH}$ $\\longrightarrow$ Glucoxime; + $\\text{HCN}$ $\\longrightarrow$ Glucose cyanohydrin (proves presence of a carbonyl $>\\text{C=O}$ group).",
      "D-Glucose + **Bromine water** (mild oxidising agent) $\\longrightarrow$ **D-Gluconic acid** (proves carbonyl group is an aldehyde $-\\text{CHO}$ group).",
      "D-Glucose + **Conc. $\\text{HNO}_3$** (strong oxidising agent) $\\longrightarrow$ **Saccharic acid** (dicarboxylic acid; proves presence of a primary alcoholic $-\\text{CH}_2\\text{OH}$ group).",
      "Three Limitations of Open-Chain Structure: (1) Despite having $-\\text{CHO}$, glucose does NOT give Schiff's test and does NOT form hydrogensulphite addition product with $\\text{NaHSO}_3$; (2) The pentaacetate of glucose does NOT react with $\\text{NH}_2\\text{OH}$ (indicating absence of free $-\\text{CHO}$ group); (3) Exists in two crystalline anomeric forms ($\\alpha$ and $\\beta$) differing in configuration at C-1."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "HI ⟶ n-Hexane | Br₂ water ⟶ Gluconic acid | HNO₃ ⟶ Saccharic acid",
      "Anomers: α-D-glucose and β-D-glucose differing in configuration at C-1 (hemiacetal carbon)",
      "Sucrose = Non-reducing sugar (Invert sugar) | Maltose & Lactose = Reducing sugars"
    ],
    examinerTip: "Memorise the exact names 'D-Gluconic acid' (monocarboxylic, from Br₂ water) and 'Saccharic acid' (dicarboxylic, from HNO₃)!"
  },
  {
    id: 'imp-chem-19',
    number: 19,
    title: 'Biomolecules: Proteins (Denaturation, Fibrous vs Globular, Peptide Bond) & Vitamins',
    shortLabel: 'Protein Denaturation & Vitamins',
    chapterId: 'chem-ch-10',
    chapterTitle: 'Biomolecules',
    unit: 'Organic Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Biomolecules',
    frequency: '99% Frequency',
    questionPrompt: "(a) Differentiate between: (i) Fibrous and Globular proteins, (ii) Essential and Non-essential amino acids.\n(b) What is meant by Denaturation of proteins? Give an example. Which level of protein structure remains intact during denaturation?\n(c) Why cannot Vitamin C be stored in our body?",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 10: Biomolecules (pp. 290–296)',
      summary: "Zwitterion, peptide bond, α-helix, denaturation, and water- vs fat-soluble vitamins."
    },
    theory: [
      "Fibrous Proteins (Keratin in hair/wool, Myosin in muscles) have parallel polypeptide chains held by H-bonds/disulphide bonds and are insoluble in water; Globular Proteins (Insulin, Albumin, Haemoglobin) have polypeptide chains coiled into spherical shapes and are soluble in water.",
      "Denaturation of Proteins: When a native protein is subjected to physical (temperature) or chemical (pH) change, hydrogen bonds are disturbed, globules unfold, helices uncoil, and biological activity is lost (e.g., coagulation of egg white on boiling; curdling of milk). During denaturation, **$2^\\circ$ and $3^\\circ$ structures are destroyed, but the Primary ($1^\\circ$) structure remains intact**.",
      "Vitamin C and B-complex vitamins (except $\\text{B}_{12}$) are **water-soluble**, so they are readily excreted in urine and cannot be stored in the human body."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "Denaturation: Destroys 2° & 3° structures; Primary (1°) peptide chain remains INTACT",
      "Zwitterion: Dipolar ion +H₃N–CH(R)–COO⁻ (Glycine is the only optically INACTIVE amino acid)",
      "Deficiencies: Vit A (Night blindness), B₁ (Beri-beri), B₁₂ (Pernicious anaemia), C (Scurvy), D (Rickets), K (Delayed clotting)"
    ],
    examinerTip: "Always explicitly state that 'Primary (1°) structure remains intact during denaturation' — it carries 0.5 to 1 full mark in the CBSE marking scheme!"
  },
  {
    id: 'imp-chem-20',
    number: 20,
    title: 'Biomolecules: Nucleic Acids — DNA vs RNA, Nucleoside vs Nucleotide & Complementary Strands',
    shortLabel: 'DNA vs RNA & Nucleotides',
    chapterId: 'chem-ch-10',
    chapterTitle: 'Biomolecules',
    unit: 'Organic Chemistry',
    marks: '3 Marks',
    marksNum: 3,
    category: 'Biomolecules',
    frequency: '99% Frequency',
    questionPrompt: "(a) Give two structural and two functional differences between DNA and RNA.\n(b) Differentiate between a nucleoside and a nucleotide.\n(c) Why are the two strands in a DNA double helix not identical but complementary to each other?",
    ncertRef: {
      textbook: 'NCERT Chemistry Part 2',
      chapter: 'Chapter 10: Biomolecules (pp. 296–299)',
      summary: "β-D-2-deoxyribose vs β-D-ribose, Thymine vs Uracil, phosphodiester linkage, and Watson-Crick pairing."
    },
    theory: [
      "Structural Differences (DNA vs RNA):\n  1. *Sugar:* DNA contains $\\beta$-D-2-deoxyribose; RNA contains $\\beta$-D-ribose.\n  2. *Pyrimidine Base:* DNA contains Thymine (T) along with A, G, C; RNA contains Uracil (U) instead of Thymine.\n  3. *Strands:* DNA is a double-stranded $\\alpha$-helix; RNA is single-stranded.",
      "Functional Differences: DNA is the chemical reserve of genetic information (heredity) and undergoes self-replication; RNA ($m$-RNA, $r$-RNA, $t$-RNA) carries out protein synthesis.",
      "Nucleoside vs Nucleotide: A nucleoside contains only Pentose Sugar + Nitrogenous Base (linked at $\\text{C-1\'}$); a nucleotide contains Pentose Sugar + Base + Phosphoric acid group (at $\\text{C-5\'}$). Nucleotides are joined by $5\'\\to 3\'$ **phosphodiester linkages**.",
      "The two strands of DNA are complementary (not identical) because hydrogen bonds form specifically between Adenine and Thymine ($\\text{A=T}$, 2 H-bonds) and between Guanine and Cytosine ($\\text{G}\\equiv\\text{C}$, 3 H-bonds)."
    ],
    derivations: [],
    keyPointsAndKeywords: [
      "DNA = β-D-2-deoxyribose + Thymine (A=T, G≡C)",
      "RNA = β-D-ribose + Uracil (Single-stranded; does not obey Chargaff's rule)",
      "Dinucleotide Linkage: 5'–3' Phosphodiester linkage"
    ],
    examinerTip: "If asked 'What happens when RNA is hydrolysed — is there any relationship between base quantities?', answer: No, which proves RNA is single-stranded!"
  }
];
