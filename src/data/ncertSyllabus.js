// Complete NCERT Class 12 Syllabus & High-Yield Notes Data

export const EXAM_PORTIONS = {
  physics: ['phy-ch-1', 'phy-ch-2', 'phy-ch-3', 'phy-ch-4', 'phy-ch-5', 'phy-ch-6', 'phy-ch-7', 'phy-ch-8'],
  biology: ['bio-ch-1', 'bio-ch-2', 'bio-ch-3', 'bio-ch-4', 'bio-ch-5', 'bio-ch-6'],
  chemistry: ['chem-ch-1', 'chem-ch-2', 'chem-ch-4', 'chem-ch-6', 'chem-ch-7']
};

export const NCERT_SYLLABUS = {
  physics: {
    id: 'physics',
    name: 'Physics',
    code: '042',
    accentColor: '#5B7B9A',
    description: 'Electrostatics, Magnetism, Optics & Modern Physics',
    volumes: [
      {
        id: 'phy-vol-1',
        title: 'NCERT Physics Volume 1',
        subtitle: 'Electrostatics, Current, Magnetism, EMI & AC',
        chapters: [
          {
            id: 'phy-ch-1',
            number: 1,
            title: 'Electric Charges and Fields',
            tag: 'Electrostatics',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-1-1',
                title: "1.1 Coulomb's Law & Vector Law",
                sections: [
                  {
                    id: 'phy-sec-1-1-1',
                    title: "Coulomb's Law & Vector Formulation",
                    theory: "The electrostatic force between two stationary point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them, acting along the straight line joining them: F = kq₁q₂/r² (where k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²).\n\nThe vector form, F₁₂ = (kq₁q₂/r³) · r₁₂, explicitly incorporates direction — essential when multiple forces superimpose at a point. The force is repulsive for like charges (q₁q₂ > 0) and attractive for unlike charges (q₁q₂ < 0), obeying Newton's Third Law (F₁₂ = −F₂₁).",
                    keyFormulas: [
                      "F = (1 / 4πε₀) · (q₁q₂ / r²)",
                      "F₁₂ = (kq₁q₂ / r³) · r₁₂ = −F₂₁",
                      "ε = ε₀ · ε_r (where ε_r is dielectric constant K)"
                    ],
                    examTips: "In vector form, remember r₁₂ is the vector pointing from 1 to 2. If using unit vector r̂₁₂, denominator is r²; if using full vector r₁₂, denominator is r³."
                  },
                  {
                    id: 'phy-sec-1-1-2',
                    title: "Superposition Principle & Applications",
                    theory: "Force on any charge due to a number of other charges is the vector sum of all the forces on that charge taken one at a time, unaffected by the presence of other charges: F_net = F₁ + F₂ + ... + F_n.",
                    keyFormulas: [
                      "F_net = Σ F_i = (q₀ / 4πε₀) Σ (q_i / r_i0³) · r_i0"
                    ],
                    examTips: "Resolve forces along Cartesian axes (x and y) before adding them to avoid vector angle confusion in polygon charge problems."
                  }
                ]
              },
              {
                id: 'phy-sub-1-2',
                title: '1.2 Electric Field & Field Intensity',
                sections: [
                  {
                    id: 'phy-sec-1-2-1',
                    title: 'Field Intensity & Point Charge Field',
                    theory: "The electric field E at a point is defined as the electrostatic force experienced per unit positive test charge placed at that point: E = lim(q₀→0) F/q₀. SI unit: N/C or V/m.\n\nFor a point charge q at distance r: E = kq/r², directed radially outward from positive charges and radially inward toward negative charges.",
                    keyFormulas: [
                      "E = F / q₀",
                      "E = (1 / 4πε₀) · (q / r²)",
                      "F = qE"
                    ],
                    examTips: "Why must the test charge q₀ be vanishingly small? So its presence does not disturb or redistribute the source charges producing the field."
                  },
                  {
                    id: 'phy-sec-1-2-2',
                    title: 'Properties of Electric Field Lines',
                    theory: "1. Field lines start on positive charges and end on negative charges (or extend to infinity).\n2. The tangent to a field line at any point gives the direction of the electric field vector E at that point.\n3. Two field lines never intersect; if they did, the field would have two different directions at the intersection point, which is physically impossible.\n4. Relative closeness/density of field lines is proportional to the magnitude of electric field strength.",
                    keyFormulas: [
                      "Density of lines ∝ |E|"
                    ],
                    examTips: "High-yield reasoning: Field lines never form closed loops because electrostatic fields are conservative in nature."
                  }
                ]
              },
              {
                id: 'phy-sub-1-3',
                title: '1.3 Electric Dipole & Moment',
                sections: [
                  {
                    id: 'phy-sec-1-3-1',
                    title: 'Dipole Moment & Axial/Equatorial Fields',
                    theory: "An electric dipole consists of two equal and opposite point charges (+q and −q) separated by distance 2a. Electric dipole moment: p = q(2a), directed from −q to +q (SI unit: C·m).\n\nFor r >> a (short dipole approximation):\n• Axial line: E_axial = 2kp / r³ (in direction of p)\n• Equatorial line: E_equatorial = kp / r³ (opposite to p)\n• Ratio: E_axial = 2 × E_equatorial at equal distance r.",
                    keyFormulas: [
                      "p = q · 2a  (direction: −q to +q)",
                      "E_axial ≈ (2kp / r³) = 2p / (4πε₀r³)",
                      "E_equatorial ≈ (kp / r³) = p / (4πε₀r³)",
                      "E_axial = 2 · E_equatorial"
                    ],
                    examTips: "Derivation of axial and equatorial fields is one of the most frequently asked 3-mark derivation questions in CBSE Board papers."
                  },
                  {
                    id: 'phy-sec-1-3-2',
                    title: 'Torque on a Dipole in Uniform Field',
                    theory: "When placed in a uniform external field E, net translational force is zero (F_net = +qE − qE = 0). However, the two forces form a couple producing torque: τ = p × E (magnitude τ = pE sinθ).\n\nPotential energy of the dipole: U = −p · E = −pE cosθ.\n• Stable equilibrium: θ = 0° (U = −pE, τ = 0)\n• Unstable equilibrium: θ = 180° (U = +pE, τ = 0)\n• Maximum torque: θ = 90° (τ = pE)",
                    keyFormulas: [
                      "τ = p × E = pE sinθ",
                      "U = −p · E = −pE cosθ",
                      "W(θ₁ → θ₂) = pE (cosθ₁ − cosθ₂)"
                    ],
                    examTips: "Distinguish between uniform field (net force = 0, torque ≠ 0) and non-uniform field (net force ≠ 0, torque ≠ 0)."
                  }
                ]
              },
              {
                id: 'phy-sub-1-4',
                title: "1.4 Electric Flux & Gauss's Law",
                sections: [
                  {
                    id: 'phy-sec-1-4-1',
                    title: "Electric Flux & Gauss's Theorem",
                    theory: "Electric flux through an area element dA: dΦ = E · dA = E dA cosθ.\nTotal electric flux through any closed Gaussian surface equals the net charge enclosed divided by ε₀: Φ = ∮ E · dA = q_enclosed / ε₀.\n\nDeducing Coulomb's Law from Gauss's Theorem:\nFor an isolated point charge q inside a spherical Gaussian surface of radius r:\n∮ E · dA = E ∮ dA = E (4πr²) = q / ε₀  ⟹  E = q / (4πε₀r²). Since F = q₀E, F = qq₀ / (4πε₀r²).",
                    keyFormulas: [
                      "Φ = ∮ E · dA = q_enc / ε₀",
                      "Coulomb from Gauss: E · 4πr² = q / ε₀  ⟹  E = kq / r²"
                    ],
                    examTips: "Gauss's law holds for any closed surface of arbitrary shape, but is easiest to evaluate when symmetry aligns E perpendicular or parallel to dA."
                  },
                  {
                    id: 'phy-sec-1-4-2',
                    title: "Applications of Gauss's Law",
                    theory: "1. Infinitely long straight charged wire (linear charge density λ):\n   Gaussian surface: cylinder of radius r, length l.\n   E(2πrl) = λl / ε₀  ⟹  E = λ / (2πε₀r)\n\n2. Infinite plane sheet of charge (surface charge density σ):\n   Gaussian pillbox of cross-section A:\n   2EA = σA / ε₀  ⟹  E = σ / (2ε₀) (independent of distance!)\n\n3. Uniformly charged thin spherical shell (charge q, radius R):\n   • Outside (r > R): E = kq / r²\n   • On surface (r = R): E = kq / R²\n   • Inside (r < R): E = 0 (no charge enclosed)",
                    keyFormulas: [
                      "Wire: E = λ / (2πε₀r)",
                      "Plane Sheet: E = σ / (2ε₀)",
                      "Shell outside: E = kq / r²",
                      "Shell inside: E = 0"
                    ],
                    examTips: "Always draw the Gaussian surface with outward normal vectors when writing these derivations in the exam."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-2',
            number: 2,
            title: 'Electrostatic Potential and Capacitance',
            tag: 'Electrostatics',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-2-1',
                title: '2.1 Electrostatic Potential & Equipotential Surfaces',
                sections: [
                  {
                    id: 'phy-sec-2-1-1',
                    title: 'Electric Potential & Potential Difference',
                    theory: "Electric potential V at a point is the work done per unit positive charge in bringing it from infinity to that point against electrostatic forces: V = W / q₀ = kq / r.\nPotential is a scalar quantity, so potentials of multiple charges add algebraically: V = Σ (kq_i / r_i).\nFor a dipole: V_axial = kp / r², while V_equatorial = 0 everywhere.",
                    keyFormulas: [
                      "V = W / q₀ = kq / r",
                      "V_dipole(axial) = kp / r²",
                      "V_dipole(equatorial) = 0"
                    ],
                    examTips: "Why is V on equatorial line zero while E is non-zero? Because positive and negative charges are equidistant, cancelling potential (scalar), while field components (vectors) reinforce."
                  },
                  {
                    id: 'phy-sec-2-1-2',
                    title: 'Equipotential Surfaces',
                    theory: "An equipotential surface is a locus of all points having the same electric potential.\nProperties:\n1. Work done in moving a test charge over an equipotential surface is zero: W = q₀(V_B − V_A) = 0.\n2. Electric field lines are always perpendicular to an equipotential surface at every point (E = −dV/dr).\n3. Two equipotential surfaces never intersect.",
                    keyFormulas: [
                      "W_AB = q(V_B − V_A) = 0",
                      "E = −dV / dr  (potential gradient)"
                    ],
                    examTips: "For a point charge, equipotentials are concentric spheres. For a uniform electric field along z, equipotentials are planes parallel to xy."
                  }
                ]
              },
              {
                id: 'phy-sub-2-2',
                title: '2.2 Capacitors & Dielectrics',
                sections: [
                  {
                    id: 'phy-sec-2-2-1',
                    title: 'Parallel Plate Capacitor & Combinations',
                    theory: "Capacitance C = Q / V. For a parallel plate capacitor in vacuum: C₀ = ε₀A / d. With dielectric of constant K: C = Kε₀A / d.\n\nCombinations:\n• Series: 1/C_eq = 1/C₁ + 1/C₂ + ... (charge Q is same across each)\n• Parallel: C_eq = C₁ + C₂ + ... (voltage V is same across each)",
                    keyFormulas: [
                      "C = Q / V",
                      "Parallel Plate: C₀ = ε₀A / d",
                      "With Dielectric: C = K · C₀",
                      "Series: 1/C_eq = 1/C₁ + 1/C₂",
                      "Parallel: C_eq = C₁ + C₂"
                    ],
                    examTips: "When dielectric is inserted with battery connected: V remains constant, Q increases by K, C increases by K, E remains constant. With battery disconnected: Q remains constant, V decreases by K, E decreases by K."
                  },
                  {
                    id: 'phy-sec-2-2-2',
                    title: 'Energy Stored in a Capacitor',
                    theory: "Work done in charging a capacitor accumulates as electrostatic potential energy in the electric field between plates: U = ½ CV² = ½ QV = Q² / (2C).\nEnergy density (energy per unit volume): u = ½ ε₀E².",
                    keyFormulas: [
                      "U = ½ CV² = Q² / (2C) = ½ QV",
                      "Energy density: u = ½ ε₀E²"
                    ],
                    examTips: "Derivation of U = ½CV² by integrating dW = (q/C) dq from 0 to Q is a common 2 or 3-mark exam question."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-3',
            number: 3,
            title: 'Current Electricity',
            tag: 'Circuits',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-3-1',
                title: '3.1 Drift Velocity, Ohm’s Law & Resistivity',
                sections: [
                  {
                    id: 'phy-sec-3-1-1',
                    title: 'Drift Velocity & Current Relation',
                    theory: "Free electrons undergo random thermal motion with zero average velocity. An applied field E imparts a steady drift velocity: v_d = −eEτ / m, where τ is the relaxation time.\nRelation with current: I = nAev_d.\nCurrent density: J = I / A = nev_d = σE (microscopic Ohm's law).\nMobility: μ = v_d / E = eτ / m.",
                    keyFormulas: [
                      "v_d = eEτ / m",
                      "I = nAev_d",
                      "J = nev_d = σE",
                      "μ = v_d / E = eτ / m",
                      "ρ = m / (ne²τ)"
                    ],
                    examTips: "Deduce Ohm's law from drift velocity: V = IR where R = (m / ne²τ) · (l / A). Hence resistance depends on temperature through relaxation time τ."
                  },
                  {
                    id: 'phy-sec-3-1-2',
                    title: 'Temperature Dependence of Resistance',
                    theory: "For metals: as temperature rises, lattice vibrations increase, electron collisions become more frequent, so relaxation time τ decreases. Hence resistivity ρ and resistance R increase: R_t = R₀(1 + αΔT).\nFor semiconductors: number density n increases exponentially with temperature, dominating over τ decrease; hence resistivity drops as temperature rises (α is negative).",
                    keyFormulas: [
                      "R_t = R₀(1 + αΔT)",
                      "ρ_t = ρ₀(1 + αΔT)"
                    ],
                    examTips: "Graph of ρ vs T: For metals (copper) it curves up; for nichrome (alloy) it is nearly linear and non-zero at 0 K; for semiconductors (silicon) it curves downward."
                  }
                ]
              },
              {
                id: 'phy-sub-3-2',
                title: '3.2 Kirchhoff’s Laws & Wheatstone Bridge',
                sections: [
                  {
                    id: 'phy-sec-3-2-1',
                    title: "Kirchhoff's Rules & Cell EMF",
                    theory: "1. Junction Rule (KCL): The algebraic sum of currents meeting at any electrical node is zero (Σ I = 0). Based on Conservation of Electric Charge.\n2. Loop Rule (KVL): The algebraic sum of changes in potential around any closed circuit loop is zero (Σ ΔV = 0). Based on Conservation of Energy.\n\nCell EMF & Internal Resistance: Terminal voltage V = ε − Ir (discharging) or V = ε + Ir (charging).",
                    keyFormulas: [
                      "Junction Rule: Σ I_in = Σ I_out  (Charge Conservation)",
                      "Loop Rule: Σ IR = Σ ε  (Energy Conservation)",
                      "Terminal voltage: V = ε − Ir"
                    ],
                    examTips: "Sign convention for loop rule: going in direction of assumed current, IR drop is −IR; going against current, it is +IR. Exiting positive battery terminal adds +ε."
                  },
                  {
                    id: 'phy-sec-3-2-2',
                    title: 'Balanced Wheatstone Bridge Condition',
                    theory: "A Wheatstone bridge consists of four resistors P, Q, R, S connected in a diamond with a galvanometer in the bridge arm. At balance condition, no current flows through the galvanometer (I_g = 0), which implies:\nP / Q = R / S.\nDerived by applying KVL to loop ABDA and loop BCDB.",
                    keyFormulas: [
                      "P / Q = R / S  (Balance Condition when I_g = 0)"
                    ],
                    examTips: "If battery and galvanometer positions are interchanged in a balanced bridge, the balance condition remains unchanged."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-4',
            number: 4,
            title: 'Moving Charges and Magnetism',
            tag: 'Magnetism',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-4-1',
                title: '4.1 Biot-Savart Law & Circular Loop Field',
                sections: [
                  {
                    id: 'phy-sec-4-1-1',
                    title: 'Biot-Savart Law & Axial Field of Loop',
                    theory: "Biot-Savart law: magnetic field dB produced by current element I dl at distance r is dB = (μ₀/4π) · (I dl × r̂) / r².\nMagnetic field at centre of circular loop of radius R: B = μ₀I / (2R).\nMagnetic field on axis at distance x from centre: B = μ₀IR² / [2(R² + x²)^(3/2)]. For x >> R, B ≈ (μ₀/4π) · (2m / x³), behaving as magnetic dipole m = IA.",
                    keyFormulas: [
                      "dB = (μ₀ / 4π) · (I dl sinθ / r²)",
                      "B_centre = μ₀I / (2R)",
                      "B_axis = μ₀IR² / [2(R² + x²)^(3/2)]",
                      "Magnetic dipole moment: m = NIA"
                    ],
                    examTips: "Always show the integration steps where component perpendicular to axis cancels out due to diametrically opposite current elements."
                  }
                ]
              },
              {
                id: 'phy-sub-4-2',
                title: '4.2 Ampere’s Law, Force & Galvanometer',
                sections: [
                  {
                    id: 'phy-sec-4-2-1',
                    title: 'Ampere’s Circuital Law & Solenoid',
                    theory: "Ampere's Circuital Law: ∮ B · dl = μ₀ I_enclosed.\nField inside long solenoid: B = μ₀nI (where n is turns per unit length).\nField of straight conductor: B = μ₀I / (2πr).",
                    keyFormulas: [
                      "∮ B · dl = μ₀ I_enc",
                      "Solenoid: B = μ₀nI"
                    ],
                    examTips: "Choose a rectangular Amperian loop for the solenoid: side inside has B, ends are perpendicular to B (B·dl = 0), and outside B ≈ 0."
                  },
                  {
                    id: 'phy-sec-4-2-2',
                    title: 'Parallel Conductors & Galvanometer Conversion',
                    theory: "Force between two parallel currents: F / L = μ₀I₁I₂ / (2πd).\n• Like currents attract; unlike currents repel.\n• Defines 1 Ampere: that current which produces force of 2 × 10⁻⁷ N/m at 1 m separation.\n\nMoving Coil Galvanometer: deflection θ ∝ I.\n• Ammeter Conversion: connect small shunt S in parallel: S = I_g G / (I − I_g).\n• Voltmeter Conversion: connect high resistance R in series: R = (V / I_g) − G.",
                    keyFormulas: [
                      "F/L = (μ₀I₁I₂) / (2πd)",
                      "Shunt for Ammeter: S = I_g G / (I − I_g)",
                      "Series R for Voltmeter: R = (V / I_g) − G"
                    ],
                    examTips: "Ammeter has very low resistance and is placed in series. Voltmeter has very high resistance and is placed in parallel."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-5',
            number: 5,
            title: 'Magnetism and Matter',
            tag: 'Magnetism',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-5-1',
                title: '5.1 Magnetic Materials & Properties',
                sections: [
                  {
                    id: 'phy-sec-5-1-1',
                    title: 'Classification: Dia, Para and Ferromagnetic',
                    theory: "• Diamagnetic: weakly repelled by magnetic field; χ is small and negative; independent of temperature (e.g., Bi, Cu, H₂O).\n• Paramagnetic: weakly attracted; χ is small and positive; χ ∝ 1/T (Curie's Law, e.g., Al, Na, O₂).\n• Ferromagnetic: strongly attracted; forms domains; χ is very large and positive; retains magnetization (e.g., Fe, Co, Ni).",
                    keyFormulas: [
                      "Magnetic Susceptibility: χ = M / H",
                      "Relative Permeability: μ_r = 1 + χ",
                      "Curie's Law: χ = C / T"
                    ],
                    examTips: "Understand how dia-, para-, and ferromagnetic rods align when suspended in a magnetic field: dia sets perpendicular, para and ferro set parallel."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-6',
            number: 6,
            title: 'Electromagnetic Induction',
            tag: 'Induction',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-6-1',
                title: '6.1 Faraday’s Laws, Lenz’s Law & Motional EMF',
                sections: [
                  {
                    id: 'phy-sec-6-1-1',
                    title: 'Faraday’s and Lenz’s Laws',
                    theory: "Magnetic Flux: Φ = B · A = BA cosθ (SI unit: Weber, Wb).\nFaraday's Law: Induced EMF ε = −dΦ/dt (for N turns: ε = −N dΦ/dt).\nLenz's Law: Direction of induced current always opposes the change in magnetic flux producing it. Consistent with Conservation of Energy.\nMotional EMF: When rod of length l moves with velocity v perpendicular to B: e = Blv.",
                    keyFormulas: [
                      "Φ = B · A = BA cosθ",
                      "ε = −dΦ / dt",
                      "Motional EMF: e = Blv",
                      "Power dissipated: P = B²l²v² / R"
                    ],
                    examTips: "Fleming's Right-Hand Rule gives direction of induced current (Thumb = Motion, Forefinger = Magnetic Field, Middle finger = Induced Current)."
                  },
                  {
                    id: 'phy-sec-6-1-2',
                    title: 'Self & Mutual Inductance, AC Generator',
                    theory: "Self-Induction: ε = −L(dI/dt). Inductance of long solenoid: L = μ₀n²Al. Stored energy: U = ½LI².\nMutual Induction: ε₂ = −M(dI₁/dt). Mutual inductance of coaxial solenoids: M = μ₀n₁n₂Al.\nAC Generator: Coil rotated with angular velocity ω in field B: e = e₀ sinωt = NBAω sinωt.",
                    keyFormulas: [
                      "Self-inductance: L = μ₀n²Al",
                      "Energy stored in inductor: U = ½LI²",
                      "Mutual inductance: M = μ₀n₁n₂Al",
                      "AC Generator peak EMF: e₀ = NBAω"
                    ],
                    examTips: "Energy stored in capacitor is electrical (½CV²), while in inductor it is magnetic (½LI²)."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-7',
            number: 7,
            title: 'Alternating Current',
            tag: 'AC Circuits',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-7-1',
                title: '7.1 Peak, Average & RMS Values',
                sections: [
                  {
                    id: 'phy-sec-7-1-1',
                    title: 'Average and RMS Current Derivation',
                    theory: "AC Current: I = I₀ sinωt.\n• Over full cycle, average current = 0 (symmetric positive and negative halves).\n• Over half cycle: I_mean = (2I₀ / π) ≈ 0.637 I₀.\n• RMS Value: Steady DC current producing same heating effect in resistor over time T:\n  I_rms = I₀ / √2 ≈ 0.707 I₀, V_rms = V₀ / √2.\nHousehold supply 220V is RMS; peak voltage V₀ = 220 × √2 ≈ 311 V.",
                    keyFormulas: [
                      "I_mean(half cycle) = 2I₀ / π ≈ 0.637 I₀",
                      "I_rms = I₀ / √2 ≈ 0.707 I₀",
                      "V_rms = V₀ / √2 ≈ 0.707 V₀",
                      "dH = I²R dt  ⟹  integrate using sin²ωt = (1 − cos2ωt)/2"
                    ],
                    examTips: "Why is 220V AC more dangerous than 220V DC? Because 220V AC reaches peak of 311V twice in each cycle and causes ventricular fibrillation."
                  }
                ]
              },
              {
                id: 'phy-sub-7-2',
                title: '7.2 LCR Series Circuit, Resonance & Transformers',
                sections: [
                  {
                    id: 'phy-sec-7-2-1',
                    title: 'Series LCR Circuit & Resonance',
                    theory: "In series LCR circuit:\n• Inductive reactance: X_L = ωL (current lags voltage by 90°)\n• Capacitive reactance: X_C = 1/(ωC) (current leads voltage by 90°)\n• Impedance: Z = √[R² + (X_L − X_C)²]\n• Phase angle: tanφ = (X_L − X_C) / R\n• Electrical Resonance: Occurs when X_L = X_C  ⟹  ω₀ = 1 / √(LC). At resonance, Z_min = R, current is maximum (I_max = V/R).\n• Power: P = V_rms I_rms cosφ (cosφ is power factor). For pure L or C, cosφ = 0 (wattless current).",
                    keyFormulas: [
                      "Z = √[R² + (ωL − 1/ωC)²]",
                      "Resonant frequency: ω₀ = 1 / √(LC), f₀ = 1 / (2π√(LC))",
                      "Power: P = V_rms I_rms cosφ",
                      "Power factor: cosφ = R / Z"
                    ],
                    examTips: "At resonance: circuit is purely resistive (φ = 0, power factor = 1). Used in radio tuning receivers."
                  },
                  {
                    id: 'phy-sec-7-2-2',
                    title: 'Transformers Principle & Losses',
                    theory: "Works on Mutual Induction:\nV_s / V_p = N_s / N_p = I_p / I_s = k (transformation ratio).\nStep-up: N_s > N_p (V_s > V_p, I_s < I_p).\nStep-down: N_s < N_p (V_s < V_p, I_s > I_p).\nEnergy losses in transformers: Copper loss (Joule heat), Iron core eddy currents (minimized by lamination), Hysteresis loss (minimized by soft iron), Flux leakage.",
                    keyFormulas: [
                      "V_s / V_p = N_s / N_p = I_p / I_s",
                      "Efficiency: η = (P_out / P_in) × 100%"
                    ],
                    examTips: "Why is high-voltage AC preferred for long-distance power transmission? Because higher voltage means lower current (I ∝ 1/V), drastically cutting Joule heating loss (I²R)."
                  }
                ]
              }
            ]
          },
          {
            id: 'phy-ch-8',
            number: 8,
            title: 'Electromagnetic Waves',
            tag: 'EM Waves',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'phy-sub-8-1',
                title: '8.1 Displacement Current & EM Spectrum',
                sections: [
                  {
                    id: 'phy-sec-8-1-1',
                    title: 'Displacement Current & Properties of EM Waves',
                    theory: "Displacement Current: I_d = ε₀(dΦ_E / dt). Added by Maxwell to make Ampere's law consistent with charge conservation during capacitor charging:\n∮ B · dl = μ₀(I_c + I_d).\nProperties of EM waves:\n1. Transverse wave: E ⊥ B ⊥ direction of wave propagation (c = E × B).\n2. Speed in vacuum: c = 1 / √(μ₀ε₀) ≈ 3 × 10⁸ m/s.\n3. Ratio of amplitudes: E₀ / B₀ = c.\n4. Carry energy and momentum; exert radiation pressure.",
                    keyFormulas: [
                      "I_d = ε₀(dΦ_E / dt)",
                      "c = 1 / √(μ₀ε₀) = E₀ / B₀ ≈ 3 × 10⁸ m/s"
                    ],
                    examTips: "Conduction current inside connecting wires equals displacement current between capacitor plates at all instants: I_c = I_d."
                  },
                  {
                    id: 'phy-sec-8-1-2',
                    title: 'Electromagnetic Spectrum in Order',
                    theory: "Order of increasing frequency (decreasing wavelength):\nRadio Waves (lowest f) ⟶ Microwaves ⟶ Infrared ⟶ Visible ⟶ Ultraviolet ⟶ X-Rays ⟶ Gamma Rays (highest f).\nUses:\n• Radio: AM/FM broadcast & cellular communication\n• Microwaves: Radar navigation and microwave ovens\n• Infrared: Remote controls, thermal imaging, greenhouse effect\n• UV: Water purification (germicidal), forensics\n• X-Rays: Bone fracture radiography\n• Gamma rays: Cancer radiotherapy",
                    keyFormulas: [
                      "c = ν · λ",
                      "E = hν = hc / λ"
                    ],
                    examTips: "High-frequency question: Arrange in order of penetrating power: Radio < IR < UV < X-ray < Gamma rays."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'phy-vol-2',
        title: 'NCERT Physics Volume 2',
        subtitle: 'Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors',
        chapters: [
          { id: 'phy-ch-9', number: 9, title: 'Ray Optics and Optical Instruments', tag: 'Optics', available: false, isExamPortion: false },
          { id: 'phy-ch-10', number: 10, title: 'Wave Optics', tag: 'Optics', available: false, isExamPortion: false },
          { id: 'phy-ch-11', number: 11, title: 'Dual Nature of Radiation and Matter', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-12', number: 12, title: 'Atoms', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-13', number: 13, title: 'Nuclei', tag: 'Modern Physics', available: false, isExamPortion: false },
          { id: 'phy-ch-14', number: 14, title: 'Semiconductor Electronics', tag: 'Electronics', available: false, isExamPortion: false }
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    code: '043',
    accentColor: '#C75B3B',
    description: 'Physical, Inorganic and Organic Chemistry',
    volumes: [
      {
        id: 'chem-vol-1',
        title: 'NCERT Chemistry Volume 1',
        subtitle: 'Solutions, Electrochemistry, Kinetics, d & f Block, Coordination',
        chapters: [
          {
            id: 'chem-ch-1',
            number: 1,
            title: 'Solutions',
            tag: 'Physical Chemistry',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'chem-sub-1-1',
                title: '1.1 Henry’s Law & Raoult’s Law',
                sections: [
                  {
                    id: 'chem-sec-1-1-1',
                    title: "Henry's Law & Applications",
                    theory: "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid: p = K_H · x (where x is mole fraction of gas in solution).\nHigher K_H value indicates lower gas solubility at a given pressure. K_H increases with temperature, which is why gas solubility decreases as water heats up.",
                    keyFormulas: [
                      "p = K_H · x",
                      "Give-Reason 1: Why are fishes more comfortable in cold water? Solubility ∝ 1/T; cold water has higher dissolved oxygen."
                    ],
                    examTips: "Practical applications: Soda bottles pressurized with CO₂; Scuba divers using helium-diluted air to prevent the bends; High altitude climbers suffering anoxia due to low O₂ partial pressure."
                  },
                  {
                    id: 'chem-sec-1-1-2',
                    title: "Raoult's Law & Deviations (Azeotropes)",
                    theory: "Raoult's Law for volatile liquids: P_A = P°_A · x_A and P_B = P°_B · x_B.\n• Ideal Solutions: Obey Raoult's law at all concentrations. ΔH_mix = 0, ΔV_mix = 0 (e.g., Benzene + Toluene, n-Hexane + n-Heptane).\n• Positive Deviation: A-B interaction < A-A and B-B. ΔH_mix > 0, ΔV_mix > 0. Forms minimum-boiling azeotrope (e.g., Ethanol + Water 95.6%).\n• Negative Deviation: A-B interaction > A-A and B-B. ΔH_mix < 0, ΔV_mix < 0. Forms maximum-boiling azeotrope (e.g., Acetone + Chloroform).",
                    keyFormulas: [
                      "P_total = P_A + P_B = P°_A x_A + P°_B x_B",
                      "Positive dev: Vapour pressure is higher than predicted",
                      "Negative dev: Vapour pressure is lower than predicted"
                    ],
                    examTips: "Azeotropes boil at constant temperature and cannot be separated by fractional distillation because vapour and liquid phase have identical composition."
                  }
                ]
              },
              {
                id: 'chem-sub-1-2',
                title: '1.2 Colligative Properties & Van’t Hoff Factor',
                sections: [
                  {
                    id: 'chem-sec-1-2-1',
                    title: 'Four Colligative Properties',
                    theory: "Colligative properties depend only on number of solute particles, not on their identity:\n1. Relative Lowering of Vapour Pressure: (P° − P_s)/P° = x₂ = (w₂M₁)/(M₂w₁).\n2. Elevation of Boiling Point: ΔT_b = K_b · m = K_b · (w₂ × 1000)/(M₂w₁).\n3. Depression of Freezing Point: ΔT_f = K_f · m = K_f · (w₂ × 1000)/(M₂w₁).\n4. Osmotic Pressure: Π = CRT = (w₂RT)/(M₂V).",
                    keyFormulas: [
                      "ΔT_b = K_b · m",
                      "ΔT_f = K_f · m",
                      "Π = CRT",
                      "Give-Reason 2: Why sprinkle salt on snow? Salt lowers freezing point of water, melting ice."
                    ],
                    examTips: "Why is Osmotic Pressure the best method for determining molecular mass of polymers/biomolecules? Because it can be measured at room temperature without denaturing proteins."
                  },
                  {
                    id: 'chem-sec-1-2-2',
                    title: "Van 't Hoff Factor (i)",
                    theory: "Accounts for dissociation or association:\ni = (Observed Colligative Property) / (Calculated Colligative Property) = (Normal Molar Mass) / (Abnormal Molar Mass).\n• Dissociation: i = 1 + (n − 1)α (i > 1, e.g., NaCl i ≈ 2)\n• Association: i = 1 + (1/n − 1)α (i < 1, e.g., Acetic acid in benzene dimerizes, i ≈ 0.5)",
                    keyFormulas: [
                      "Dissociation: α = (i − 1) / (n − 1)",
                      "Association: α = (1 − i) / (1 − 1/n)"
                    ],
                    examTips: "Always multiply colligative property formulas by i: ΔT_b = i·K_b·m, ΔT_f = i·K_f·m, Π = i·CRT."
                  }
                ]
              }
            ]
          },
          {
            id: 'chem-ch-2',
            number: 2,
            title: 'Electrochemistry',
            tag: 'Physical Chemistry',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'chem-sub-2-1',
                title: '2.1 Nernst Equation & Conductivity',
                sections: [
                  {
                    id: 'chem-sec-2-1-1',
                    title: 'Nernst Equation & Gibbs Free Energy',
                    theory: "E°_cell = E°_cathode − E°_anode.\nNernst Equation at 298 K:\nE_cell = E°_cell − (0.059 / n) log Q = E°_cell − (0.059 / n) log([Anode] / [Cathode]).\nAt equilibrium (E_cell = 0): E°_cell = (0.059 / n) log K_c.\nGibbs Energy: ΔG° = −nFE°_cell.",
                    keyFormulas: [
                      "E_cell = E°_cell − (0.059 / n) log Q",
                      "E°_cell = (0.059 / n) log K_c",
                      "ΔG° = −nFE°_cell",
                      "Salt Bridge: KCl/KNO₃ in agar gel, maintains electrical neutrality."
                    ],
                    examTips: "Watch out for stoichiometric coefficients: for Cu²⁺ + 2Ag⁺ ⟶ Cu²⁺ + 2Ag, Q = [Cu²⁺] / [Ag⁺]² (n = 2)."
                  },
                  {
                    id: 'chem-sec-2-1-2',
                    title: 'Molar Conductivity & Kohlrausch’s Law',
                    theory: "Conductivity κ = (1/R) · (l/A) = G · G*.\nMolar conductivity: Λm = (κ × 1000) / C.\nEffect of dilution: Specific conductivity κ decreases on dilution (fewer ions per unit volume); Molar conductivity Λm increases (greater ion mobility).\nKohlrausch's Law: Limiting molar conductivity of an electrolyte is sum of limiting ionic conductivities: Λ°m = ν₊λ°₊ + ν₋λ°₋.",
                    keyFormulas: [
                      "Λm = (κ × 1000) / C",
                      "Degree of dissociation: α = Λm / Λ°m",
                      "Dissociation constant: K_a = Cα² / (1 − α)"
                    ],
                    examTips: "Kohlrausch's law lets you compute Λ°m of weak electrolytes like CH₃COOH using strong electrolytes (CH₃COONa, HCl, NaCl)."
                  }
                ]
              },
              {
                id: 'chem-sub-2-2',
                title: '2.2 Batteries, Fuel Cells & Corrosion',
                sections: [
                  {
                    id: 'chem-sec-2-2-1',
                    title: 'Batteries & Fuel Cells Reactions',
                    theory: "• Mercury Cell: Anode Zn(Hg), Cathode HgO. Constant voltage (1.35 V) because overall reaction has no solution ions: Zn(Hg) + HgO ⟶ ZnO + Hg.\n• Lead Storage Battery: Anode Pb, Cathode PbO₂, Electrolyte 38% H₂SO₄. Both plates convert to PbSO₄ during discharge.\n• H₂-O₂ Fuel Cell: Converts chemical energy directly to electricity; 70% efficiency, eco-friendly (water only by-product).",
                    keyFormulas: [
                      "Lead Acid: Pb + PbO₂ + 2H₂SO₄ ⟶ 2PbSO₄ + 2H₂O",
                      "Fuel cell: 2H₂ + O₂ ⟶ 2H₂O"
                    ],
                    examTips: "Why does Mercury Cell have constant voltage? State explicitly: 'Because the overall reaction does not involve any ions in solution whose concentration can change.'"
                  }
                ]
              }
            ]
          },
          { id: 'chem-ch-3', number: 3, title: 'Chemical Kinetics', tag: 'Physical Chemistry', available: false, isExamPortion: false },
          {
            id: 'chem-ch-4',
            number: 4,
            title: 'The d- and f-Block Elements',
            tag: 'Inorganic Chemistry',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'chem-sub-4-1',
                title: '4.1 Lanthanoid Contraction & Potassium Salts',
                sections: [
                  {
                    id: 'chem-sec-4-1-1',
                    title: 'Lanthanoid Contraction: Causes & Consequences',
                    theory: "Lanthanoid Contraction: The steady, cumulative decrease in atomic and ionic radii of elements across the lanthanoid series (Ce to Lu).\nCause: Poor shielding effect of 4f electrons against increasing nuclear charge.\nConsequences:\n1. 4d and 5d series have nearly identical atomic radii (e.g., Zr ≈ 160 pm and Hf ≈ 159 pm), making separation extremely difficult.\n2. Basicity of lanthanoid hydroxides decreases from La(OH)₃ to Lu(OH)₃.\n3. Used in making Misch metal (95% lanthanide, 5% Fe) for lighter flints.",
                    keyFormulas: [
                      "Atomic radii: Zr ≈ Hf (due to 4f poor shielding)",
                      "Actinoid contraction is greater due to poorer shielding by 5f orbitals."
                    ],
                    examTips: "Why do transition metals form coloured compounds? Due to d-d electronic transitions in split d-orbitals absorbing complementary visible light."
                  },
                  {
                    id: 'chem-sec-4-1-2',
                    title: 'Preparation & Oxidizing Action of KMnO₄ & K₂Cr₂O₇',
                    theory: "• Preparation of KMnO₄ from Pyrolusite (MnO₂):\n  2MnO₂ + 4KOH + O₂ ⟶ 2K₂MnO₄ (green) + 2H₂O\n  3MnO₄²⁻ + 4H⁺ ⟶ 2MnO₄⁻ (purple) + MnO₂ + 2H₂O\n• Preparation of K₂Cr₂O₇ from Chromite Ore (FeCr₂O₄):\n  4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ ⟶ 8Na₂CrO₄ (yellow) + 2Fe₂O₃ + 8CO₂\n  2Na₂CrO₄ + 2H⁺ ⟶ Na₂Cr₂O₇ (orange) + 2Na⁺ + H₂O\n  Na₂Cr₂O₇ + 2KCl ⟶ K₂Cr₂O₇ + 2NaCl\n• Action of pH on Permanganate Reduction:\n  Acidic: MnO₄⁻ + 8H⁺ + 5e⁻ ⟶ Mn²⁺ (colourless)\n  Neutral/Faintly Alkaline: MnO₄⁻ + 2H₂O + 3e⁻ ⟶ MnO₂ (brown)\n  Strongly Alkaline: MnO₄⁻ + e⁻ ⟶ MnO₄²⁻ (green)",
                    keyFormulas: [
                      "Acidic: MnO₄⁻ ⟶ Mn²⁺ (n = 5)",
                      "Neutral: MnO₄⁻ ⟶ MnO₂ (n = 3)",
                      "Alkaline: MnO₄⁻ ⟶ MnO₄²⁻ (n = 1)"
                    ],
                    examTips: "Chromate (CrO₄²⁻, yellow) and Dichromate (Cr₂O₇²⁻, orange) interconvert reversibly with pH: acidic medium favors orange dichromate; alkaline favors yellow chromate."
                  }
                ]
              }
            ]
          },
          { id: 'chem-ch-5', number: 5, title: 'Coordination Compounds', tag: 'Inorganic Chemistry', available: false, isExamPortion: false }
        ]
      },
      {
        id: 'chem-vol-2',
        title: 'NCERT Chemistry Volume 2',
        subtitle: 'Haloalkanes, Alcohols, Aldehydes, Amines, Biomolecules',
        chapters: [
          {
            id: 'chem-ch-6',
            number: 6,
            title: 'Haloalkanes and Haloarenes',
            tag: 'Organic Chemistry',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'chem-sub-6-1',
                title: '6.1 Mechanisms: SN1 vs SN2 & Reactions',
                sections: [
                  {
                    id: 'chem-sec-6-1-1',
                    title: 'SN1 vs SN2 Nucleophilic Substitution',
                    theory: "• SN1 Mechanism: Two-step, unimolecular rate = k[RX]. Proceeds via planar carbocation intermediate. Favored by 3° > 2° > 1° halides and polar protic solvents. Leads to racemization.\n• SN2 Mechanism: One-step, bimolecular rate = k[RX][Nu⁻]. Proceeds via 5-coordinate transition state with backside nucleophilic attack. Favored by 1° > 2° > 3° halides (least steric hindrance) and polar aprotic solvents. Leads to Walden inversion of configuration.",
                    keyFormulas: [
                      "SN1 Reactivity: 3° > 2° > 1° > CH₃X  (Stability of carbocation)",
                      "SN2 Reactivity: CH₃X > 1° > 2° > 3°  (Steric hindrance)"
                    ],
                    examTips: "Saytzeff's Rule: In dehydrohalogenation (elimination with alc. KOH), the hydrogen is removed from the β-carbon with fewer hydrogen atoms, yielding the more substituted, stable alkene."
                  }
                ]
              }
            ]
          },
          {
            id: 'chem-ch-7',
            number: 7,
            title: 'Alcohols, Phenols and Ethers',
            tag: 'Organic Chemistry',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'chem-sub-7-1',
                title: '7.1 Distinguishing Tests & Named Reactions',
                sections: [
                  {
                    id: 'chem-sec-7-1-1',
                    title: 'Lucas Test, Kolbe & Reimer-Tiemann',
                    theory: "• Lucas Test (conc. HCl + anh. ZnCl₂):\n  3° alcohol: Immediate turbidity\n  2° alcohol: Turbidity appears in 5 minutes\n  1° alcohol: Turbidity only on heating\n• Phenols are more acidic than alcohols due to resonance stabilization of phenoxide ion.\n• Kolbe’s Reaction: Phenol + NaOH + CO₂ (4-7 atm, 400 K) ⟶ Salicylic acid (o-hydroxybenzoic acid).\n• Reimer-Tiemann Reaction: Phenol + CHCl₃ + aq. NaOH ⟶ Salicylaldehyde (o-hydroxybenzaldehyde).\n• Williamson Ether Synthesis: R-ONa + R'-X ⟶ R-O-R' + NaX (SN2 attack; R'X must be primary).",
                    keyFormulas: [
                      "Kolbe: Phenol + CO₂ ⟶ Salicylic acid",
                      "Reimer-Tiemann: Phenol + CHCl₃ ⟶ Salicylaldehyde",
                      "Williamson: R-O⁻ + R'-X ⟶ R-O-R'"
                    ],
                    examTips: "In Williamson synthesis, if 3° alkyl halide is used with alkoxide, elimination occurs preferentially instead of substitution, yielding alkene!"
                  }
                ]
              }
            ]
          },
          { id: 'chem-ch-8', number: 8, title: 'Aldehydes, Ketones and Carboxylic Acids', tag: 'Organic Chemistry', available: false, isExamPortion: false },
          { id: 'chem-ch-9', number: 9, title: 'Amines', tag: 'Organic Chemistry', available: false, isExamPortion: false },
          { id: 'chem-ch-10', number: 10, title: 'Biomolecules', tag: 'Organic Chemistry', available: false, isExamPortion: false }
        ]
      }
    ]
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    code: '044',
    accentColor: '#6B7F5E',
    description: 'Reproduction, Genetics, Biotechnology & Ecology',
    volumes: [
      {
        id: 'bio-vol-1',
        title: 'NCERT Biology Volume 1',
        subtitle: 'Reproduction, Genetics & Evolution',
        chapters: [
          {
            id: 'bio-ch-1',
            number: 1,
            title: 'Sexual Reproduction in Flowering Plants',
            tag: 'Reproduction',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-1-1',
                title: '1.1 Microsporogenesis & Megasporogenesis',
                sections: [
                  {
                    id: 'bio-sec-1-1-1',
                    title: 'Pollen Grain & 7-celled Embryo Sac',
                    theory: "• Pollen wall: Outer hard exine made of sporopollenin (most resistant organic material known, withstands high temp & strong acids); inner thin intine (cellulose + pectin). Germ pores lack sporopollenin.\n• Female Gametophyte (Embryo Sac): Monosporic development results in typical 7-celled, 8-nucleate structure:\n  - 3 Antipodal cells at chalazal end\n  - 1 Central cell with 2 polar nuclei\n  - Egg apparatus at micropylar end: 1 egg cell + 2 synergids with filiform apparatus (guides pollen tube entry).",
                    keyFormulas: [
                      "Embryo sac: 7 cells, 8 nuclei",
                      "Exine = Sporopollenin"
                    ],
                    examTips: "Double Fertilisation is unique to angiosperms: Syngamy (Male gamete + Egg ⟶ Zygote 2n) + Triple Fusion (Male gamete + 2 polar nuclei ⟶ PEN 3n)."
                  }
                ]
              }
            ]
          },
          {
            id: 'bio-ch-2',
            number: 2,
            title: 'Human Reproduction',
            tag: 'Reproduction',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-2-1',
                title: '2.1 Gametogenesis & Menstrual Cycle',
                sections: [
                  {
                    id: 'bio-sec-2-1-1',
                    title: 'Spermatogenesis vs Oogenesis & Hormonal Cycle',
                    theory: "• Spermatogenesis: Continuous from puberty, produces 4 functional sperm per primary spermatocyte.\n• Oogenesis: Initiated during embryonic development, arrested at Prophase-I until puberty, produces 1 functional ovum and polar bodies.\n• Menstrual Cycle: Regulated by GnRH, FSH, LH, Estrogen, and Progesterone.\n  - Follicular phase: FSH stimulates follicle maturation, Estrogen regenerates endometrium.\n  - LH Surge (day 14): Induces rupture of Graafian follicle and ovulation.\n  - Luteal phase: Ruptured follicle transforms into Corpus Luteum secreting high Progesterone to maintain pregnancy.\n• Fertilisation occurs at ampullary-isthmic junction of fallopian tube.",
                    keyFormulas: [
                      "LH Surge = Ovulation trigger",
                      "Corpus Luteum = Progesterone secretion"
                    ],
                    examTips: "Placenta functions as endocrine tissue producing hCG, hPL, estrogens, and progesterone."
                  }
                ]
              }
            ]
          },
          {
            id: 'bio-ch-3',
            number: 3,
            title: 'Reproductive Health',
            tag: 'Reproduction',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-3-1',
                title: '3.1 Contraception & Assisted Reproductive Technologies',
                sections: [
                  {
                    id: 'bio-sec-3-1-1',
                    title: 'Birth Control Methods & ART',
                    theory: "• IUDs: Cu-releasing (CuT, Cu7, Multiload 375) suppress sperm motility; Hormone-releasing (Progestasert, LNG-20) make uterus unsuitable for implantation.\n• Oral Pills: Saheli (non-steroidal, once-a-week pill developed by CDRI Lucknow).\n• Assisted Reproductive Technologies (ART):\n  - IVF (In Vitro Fertilisation) / Test-tube baby\n  - ZIFT: Zygote or early embryo (up to 8 blastomeres) transferred into fallopian tube\n  - IUT: Embryos with more than 8 blastomeres into uterus\n  - GIFT: Transfer of ovum into fallopian tube\n  - ICSI: Sperm directly injected into ovum",
                    keyFormulas: [
                      "ZIFT ≤ 8 blastomeres into fallopian tube",
                      "IUT > 8 blastomeres into uterus"
                    ],
                    examTips: "Amniocentesis: Fetal sex-determination test banned to check female foeticide."
                  }
                ]
              }
            ]
          },
          {
            id: 'bio-ch-4',
            number: 4,
            title: 'Principles of Inheritance and Variation',
            tag: 'Genetics',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-4-1',
                title: '4.1 Mendelian Principles & Genetic Disorders',
                sections: [
                  {
                    id: 'bio-sec-4-1-1',
                    title: 'Mendel’s Laws, Codominance & Linkage',
                    theory: "• Mendel's Laws: Dominance, Segregation (universally applicable with no blending), Independent Assortment.\n• Incomplete Dominance: Snapdragon (1 Red : 2 Pink : 1 White).\n• Codominance: ABO blood grouping in humans (controlled by gene I with alleles I^A, I^B, i; 6 genotypes, 4 phenotypes).\n• Linkage: T.H. Morgan's work on Drosophila proved tightly linked genes show very low recombination frequency.\n• Mendelian Disorders: Haemophilia (X-linked recessive), Sickle cell anaemia (autosomal recessive: GAG ⟶ GUG point mutation in β-globin gene, substituting Glu with Val at 6th position).\n• Chromosomal Disorders: Down's syndrome (trisomy 21), Klinefelter's syndrome (47, XXY), Turner's syndrome (45, X0).",
                    keyFormulas: [
                      "Monohybrid F₂ ratio: 3:1 phenotypic, 1:2:1 genotypic",
                      "Dihybrid F₂ ratio: 9:3:3:1",
                      "Sickle cell: Glu (GAG) ⟶ Val (GUG)"
                    ],
                    examTips: "Pedigree analysis: Circle = Female, Square = Male, Shaded = Affected. If unaffected parents have affected children, trait is recessive."
                  }
                ]
              }
            ]
          },
          {
            id: 'bio-ch-5',
            number: 5,
            title: 'Molecular Basis of Inheritance',
            tag: 'Genetics',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-5-1',
                title: '5.1 DNA Structure, Replication & Lac Operon',
                sections: [
                  {
                    id: 'bio-sec-5-1-1',
                    title: 'Central Dogma, Meselson-Stahl & Operon Model',
                    theory: "• DNA Double Helix: Antiparallel strands, pitch = 3.4 nm, 10 bp per turn, A=T (2 H-bonds), G≡C (3 H-bonds).\n• Semiconservative Replication proved by Meselson & Stahl using ¹⁵NH₄Cl in E. coli.\n• Hershey-Chase experiment confirmed DNA as genetic material using radioactive ³⁵S (protein) and ³²P (DNA).\n• Genetic Code: Triplet, degenerate, universal; AUG codes for Methionine and acts as initiator codon.\n• Lac Operon (Jacob & Monod):\n  - Negative regulation: Lac repressor binds operator in absence of lactose.\n  - Induction: Lactose acts as inducer, binds repressor to inactivate it, allowing RNA polymerase to transcribe lacZ (β-galactosidase), lacY (permease), and lacA (transacetylase).",
                    keyFormulas: [
                      "DNA Replication: Semiconservative",
                      "Lac operon genes: Z (β-gal), Y (permease), A (transacetylase)"
                    ],
                    examTips: "DNA Fingerprinting relies on VNTRs (Variable Number Tandem Repeats) / satellite DNA displaying high degree of polymorphism."
                  }
                ]
              }
            ]
          },
          {
            id: 'bio-ch-6',
            number: 6,
            title: 'Evolution',
            tag: 'Evolution',
            available: true,
            isExamPortion: true,
            subchapters: [
              {
                id: 'bio-sub-6-1',
                title: '6.1 Evidences & Hardy-Weinberg Principle',
                sections: [
                  {
                    id: 'bio-sec-6-1-1',
                    title: 'Homology vs Analogy & Population Genetics',
                    theory: "• Origin of life: Miller-Urey experiment simulated primitive reducing atmosphere (CH₄, NH₃, H₂, H₂O at 800°C with electric discharge), generating amino acids.\n• Homologous organs: Same structure/origin, different functions (e.g., forelimbs of cheetah and human) ⟶ Divergent evolution.\n• Analogous organs: Different structure/origin, similar function (e.g., wings of butterfly and birds) ⟶ Convergent evolution.\n• Hardy-Weinberg Equilibrium: In a large, randomly mating population with no mutation, migration, or selection:\n  p² + 2pq + q² = 1 (where p + q = 1).\n• Adaptive Radiation: Evolution of different species from common ancestor (Darwin's finches).",
                    keyFormulas: [
                      "Hardy-Weinberg: p² + 2pq + q² = 1",
                      "p + q = 1"
                    ],
                    examTips: "Divergent evolution indicates common ancestry (homology); convergent evolution indicates adaptation to similar habitats (analogy)."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'bio-vol-2',
        title: 'NCERT Biology Volume 2',
        subtitle: 'Health, Microbes, Biotechnology, Ecology',
        chapters: [
          { id: 'bio-ch-7', number: 7, title: 'Human Health and Disease', tag: 'Health', available: false, isExamPortion: false },
          { id: 'bio-ch-8', number: 8, title: 'Microbes in Human Welfare', tag: 'Microbiology', available: false, isExamPortion: false },
          { id: 'bio-ch-9', number: 9, title: 'Biotechnology: Principles and Processes', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-10', number: 10, title: 'Biotechnology and its Applications', tag: 'Biotechnology', available: false, isExamPortion: false },
          { id: 'bio-ch-11', number: 11, title: 'Organisms and Populations', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-12', number: 12, title: 'Ecosystem', tag: 'Ecology', available: false, isExamPortion: false },
          { id: 'bio-ch-13', number: 13, title: 'Biodiversity and Conservation', tag: 'Ecology', available: false, isExamPortion: false }
        ]
      }
    ]
  }
};
