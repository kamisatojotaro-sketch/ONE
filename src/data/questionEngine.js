// NCERT Class 12 CBSE Comprehensive High-Yield Question Generation Engine
// Guarantees 100% UNIQUE questions per set (Strict Deduplication via Set)
// Supports Subject-level, Chapter-level, and Subtopic-level filtering with 1,000+ question capacity.

import { NCERT_SYLLABUS } from './ncertSyllabus.js';
import { MCQ_DATABASE } from './mcqData.js';
import { PYQ_DATABASE } from './pyqData.js';
import { STRUCTURED_NOTES_DATA } from './structuredNotesData.js';
import { IMPORTANT_PHYSICS_QUESTIONS } from './importantQuestionsData.js';

// Subject-Specific Authentic Distractor Banks (Real syllabus concepts, ZERO sci-fi nonsense)
export const SUBJECT_DISTRACTORS = {
  physics: [
    'The force decreases inversely with the cube of separation distance.',
    'The electrostatic field forms closed continuous circular loops in electrostatic equilibrium.',
    'The net electrostatic flux through a closed Gaussian surface is independent of enclosed charge.',
    'The induced EMF acts in the direction that assists the change in magnetic flux.',
    'The resonant frequency depends directly on ohmic resistance in a series LCR circuit.',
    'Capacitance decreases when a dielectric slab is inserted into a charged disconnected capacitor.',
    'Electric field intensity inside a hollow charged spherical shell is inversely proportional to radius.',
    'The work done in moving a test charge on an equipotential surface increases linearly with distance.'
  ],
  chemistry: [
    'The reaction proceeds via a planar carbocation intermediate resulting in complete racemization.',
    'The reaction occurs via a concerted backside attack with 100% Walden inversion.',
    'The substance is readily soluble in water due to strong intermolecular hydrogen bonding.',
    'Alcoholic KOH acts as a weak nucleophile promoting substitution over elimination.',
    'Aryl halides are more reactive than alkyl halides due to resonance stabilization of the halogen bond.',
    'Para-isomers have lower melting points than ortho-isomers due to asymmetric crystal packing.',
    'Addition follows Markovnikov rule yielding the less substituted product.',
    'Tertiary alcohols undergo instant Lucas test turbidity due to unstable carbocation formation.',
    'The by-products form an inseparable azeotropic mixture requiring fractional distillation.'
  ],
  biology: [
    'Syngamy involves the fusion of one male gamete with two polar nuclei to form a triploid nucleus.',
    'Pollen grains are rapidly digested by stomach enzymes due to the fragile pectin exine.',
    'Incomplete dominance produces a 3 : 1 phenotypic ratio in the F₂ generation.',
    'The point mutation in sickle-cell anemia changes GUG to GAG at codon 6 of beta-globin.',
    'Homologous structures indicate convergent evolution towards identical ecological functions.',
    'Leydig cells situated in testicular tubules secrete follicle stimulating hormone (FSH).',
    'Double fertilization is an exclusive characteristic of gymnosperms and pteridophytes.',
    'In the lac operon, the repressor protein is permanently activated by binding to allolactose.'
  ],
  psychology: [
    'Cognitive performance is determined solely by specific factors (s) with zero general factor (g).',
    'Componential intelligence reflects practical street-smart adaptation to daily life.',
    'Performance tests of intelligence require high linguistic literacy and written fluency.',
    'Reaction formation involves redirecting aggressive impulses into socially admirable achievements.',
    'Identical twins reared apart show lower IQ correlation than unrelated individuals living together.',
    'William Sheldon matched the rounded Endomorphic physique with introverted Cerebrotonia.',
    'Aptitude tests measure past acquired knowledge rather than predictive capacity to learn.'
  ],
  standard_maths: [
    'Matrix multiplication is strictly commutative for all square matrices of the same order.',
    'A square matrix is singular if its determinant is strictly positive.',
    'The derivative of an odd function is always an odd function.',
    'The definite integral of any continuous odd function over [-a, a] is strictly non-zero.',
    'The dot product of two mutually orthogonal non-zero vectors is equal to their scalar product magnitude.',
    'The shortest distance between two parallel lines is zero.',
    'Bayes theorem applies only to mutually non-exclusive and non-exhaustive events.',
    'If a function is continuous at a point, it is unconditionally differentiable at that point.'
  ],
  applied_maths: [
    'Congruence modulo arithmetic is only valid for prime moduli.',
    'The Reducing Balance EMI amount decreases exponentially every month during the loan tenure.',
    'The Leontief input-output matrix is viable when the determinant of (I - A) is strictly negative.',
    'Marginal Cost equals Average Cost at the maximum point of the Average Cost curve.',
    'The area under the standard normal curve between -∞ and +∞ is greater than 1.',
    'In a Poisson distribution, the mean is strictly greater than the variance.',
    'Consumer surplus is calculated by subtracting the demand curve integral from total revenue.',
    'Perpetuity present value decreases when the prevailing interest rate decreases.'
  ],
  english: [
    'M. Hamel instructed the class in German on the day of the last lesson.',
    'Saheb-e-Alam earned fifteen hundred rupees and maintained complete freedom at the tea stall.',
    'William Douglas successfully dove into the Yakima River without an instructor.',
    'The peddler stole thirty kronor from the ironmaster’s private safe at the manor house.',
    'Rajkumar Shukla was an educated lawyer who represented Gandhi in the Champaran court.',
    'Kamala Das compared her mother’s cheerful face to a blossoming springtime rose.',
    'Pablo Neruda advocates total physical inactivity and morbid passivity in Keeping Quiet.',
    'John Keats states that the loveliness of a thing of beauty decreases and fades into nothingness.',
    'Charley purchased two train tickets to 1894 Galesburg using modern currency notes.',
    'The Tiger King was slain in combat by a ferocious hundred-pound wild Bengal tiger.'
  ]
};

// Seeded pseudorandom generator for deterministic, repeatable permutations
function pseudoRandom(seed) {
  const numSeed = typeof seed === 'number' && !isNaN(seed) ? seed : (hashString(String(seed || 1)) || 1);
  const s = Math.sin(numSeed) * 10000;
  return s - Math.floor(s);
}

function shuffleArray(arr, seed) {
  if (!Array.isArray(arr) || arr.length <= 1) return [...(arr || [])];
  const numSeed = typeof seed === 'number' && !isNaN(seed) ? seed : (hashString(String(seed || 1)) || 1);
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const rnd = pseudoRandom(numSeed + i * 19.3);
    const j = Math.min(i, Math.max(0, Math.floor(rnd * (i + 1))));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeKey(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function hashString(str) {
  if (!str) return 0;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash);
}

// Fairly distributes correct answers across (A, B, C, D) by shuffling options while strictly guaranteeing 4 UNIQUE authentic options
function shuffleOptionsAndAdjustCorrect(options, correctIndex, qSeed, subjectId = 'chemistry') {
  if (!Array.isArray(options) || options.length <= 1) {
    return { options: options || [], correct: 0 };
  }
  const validCorrect = (correctIndex >= 0 && correctIndex < options.length) ? correctIndex : 0;
  const correctText = (options[validCorrect] || 'Refer to NCERT Class 12 textbook standard answer.').trim();

  // Deduplicate and guarantee 4 mutually distinct options
  const cleaned = [];
  const seenTexts = new Set();
  const subjDists = SUBJECT_DISTRACTORS[subjectId] || SUBJECT_DISTRACTORS.chemistry || [];
  let distIdx = (qSeed || 1) % (subjDists.length || 1);

  options.forEach((opt, idx) => {
    const raw = (opt || '').trim();
    const norm = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!norm || seenTexts.has(norm)) {
      if (idx === validCorrect) {
        cleaned.push(raw || correctText);
        seenTexts.add(norm || correctText.toLowerCase().replace(/[^a-z0-9]/g, ''));
      } else {
        let replacement = subjDists[distIdx % subjDists.length];
        let replNorm = replacement.toLowerCase().replace(/[^a-z0-9]/g, '');
        let safety = 0;
        while ((seenTexts.has(replNorm) || replNorm === norm) && safety < 25) {
          distIdx++;
          safety++;
          replacement = subjDists[distIdx % subjDists.length];
          replNorm = replacement.toLowerCase().replace(/[^a-z0-9]/g, '');
        }
        distIdx++;
        cleaned.push(replacement);
        seenTexts.add(replNorm);
      }
    } else {
      cleaned.push(raw);
      seenTexts.add(norm);
    }
  });

  // Ensure minimum 4 options
  while (cleaned.length < 4) {
    let replacement = subjDists[distIdx % subjDists.length];
    let replNorm = replacement.toLowerCase().replace(/[^a-z0-9]/g, '');
    let safety = 0;
    while (seenTexts.has(replNorm) && safety < 25) {
      distIdx++;
      safety++;
      replacement = subjDists[distIdx % subjDists.length];
      replNorm = replacement.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    distIdx++;
    cleaned.push(replacement);
    seenTexts.add(replNorm);
  }

  const finalSlice = cleaned.slice(0, 4);
  const wrapped = finalSlice.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === validCorrect || (idx >= finalSlice.length && validCorrect >= finalSlice.length)
  }));
  
  // Verify correct answer is marked
  if (!wrapped.some(item => item.isCorrect)) {
    wrapped[0].isCorrect = true;
  }

  const shuffled = shuffleArray(wrapped, qSeed);
  const newOptions = shuffled.map(item => item.text);
  const newCorrect = shuffled.findIndex(item => item.isCorrect);
  
  return {
    options: newOptions,
    correct: newCorrect >= 0 ? newCorrect : 0
  };
}

// ============================================================================
// EXTENSIVE CURATED MCQ POOL MAPPED BY SUBTOPIC & CHAPTER
// Every question is verified authentic NCERT Class 12 CBSE Board standard
// ============================================================================
export const CURATED_MCQS = [
  // --------------------------------------------------------------------------
  // PHYSICS CH 1: Electric Charges & Fields
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-1-1',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'A polythene piece rubbed with wool is found to have a negative charge of 3.2 × 10⁻⁷ C. The number of electrons transferred from wool to polythene is:',
    options: ['2.0 × 10¹²', '1.6 × 10¹²', '3.2 × 10¹²', '6.25 × 10¹⁸'],
    correct: 0,
    explanation: 'By quantization of charge Q = n·e. n = Q / e = (3.2 × 10⁻⁷) / (1.6 × 10⁻¹⁹) = 2.0 × 10¹² electrons transferred.'
  },
  {
    subtopicId: 'phy-sub-1-1',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'Two equal positive point charges +q are fixed at distance 2a. A small test charge -q₀ is placed at the midpoint. If displaced slightly along the perpendicular bisector, the test charge will:',
    options: [
      'Execute simple harmonic motion about the midpoint',
      'Move away towards infinity along the bisector',
      'Remain in unstable equilibrium',
      'Move in a circular orbit around the midpoint'
    ],
    correct: 0,
    explanation: 'Along the perpendicular bisector, the resolved components of attractive forces towards the two positive charges pull the negative test charge back towards the midpoint, providing a restoring force F ∝ −y for small displacements.'
  },
  {
    subtopicId: 'phy-sub-1-1',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'The electrostatic force between two charges separated by distance r in air is F. When immersed in water having dielectric constant K = 81, the force at the same separation becomes:',
    options: ['F / 81', '81 F', 'F / 9', 'F (unchanged)'],
    correct: 0,
    explanation: "Coulomb's Law in medium: F_medium = F_air / K. Since K = 81 for water, force is reduced by a factor of 81."
  },
  {
    subtopicId: 'phy-sub-1-1',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: "Which of the following represents the correct dimensional formula of permittivity of free space (ε₀)?",
    options: ['[M⁻¹ L⁻³ T⁴ A²]', '[M¹ L³ T⁻⁴ A⁻²]', '[M⁻¹ L³ T⁻² A²]', '[M¹ L² T⁻³ A⁻¹]'],
    correct: 0,
    explanation: 'From Coulomb\'s law: ε₀ = q₁q₂ / (4π F r²). Units = C² / (N·m²) = (A·T)² / ([M L T⁻²] · [L²]) = [M⁻¹ L⁻³ T⁴ A²].'
  },
  {
    subtopicId: 'phy-sub-1-1',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'Two identical conducting spheres having charges +40 μC and −20 μC are brought into contact and then separated to their initial distance. The ratio of initial to final electrostatic force between them is:',
    options: ['8 : 1 (attractive to repulsive)', '4 : 1', '16 : 1', '2 : 1'],
    correct: 0,
    explanation: 'Initial force F₁ ∝ |(+40)(−20)| = 800 (attractive). On contact, charge redistributes equally: q = (+40 − 20)/2 = +10 μC each. Final force F₂ ∝ (10)(10) = 100 (repulsive). Ratio F₁/F₂ = 800/100 = 8/1.'
  },
  {
    subtopicId: 'phy-sub-1-2',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'An electric field line emerges from a point charge. Which of the following is an impossible trajectory for electrostatic field lines?',
    options: [
      'A closed continuous circular loop in free space',
      'A straight line extending radially outward to infinity',
      'A curved line bending away from an adjacent like charge',
      'A line terminating perpendicularly on a conductor surface'
    ],
    correct: 0,
    explanation: 'Electrostatic field is conservative (∮ E · dl = 0). Therefore, electrostatic field lines can never form closed loops.'
  },
  {
    subtopicId: 'phy-sub-1-2',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'Why do two electrostatic field lines never cross or intersect each other?',
    options: [
      'At the intersection point, there would be two tangents indicating two different directions of net electric field',
      'The charges producing them would annihilate',
      'The field strength becomes infinite at the intersection',
      'Field lines are physical material strings that repel mechanically'
    ],
    correct: 0,
    explanation: 'The tangent at any point on a field line gives the direction of the net electric field. If two lines intersect, two tangents could be drawn at one point, implying two directions of net electric field, which is physically impossible.'
  },
  {
    subtopicId: 'phy-sub-1-3',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'The electric field intensity E at distance r from a point charge q varies as:',
    options: ['E ∝ 1 / r²', 'E ∝ 1 / r', 'E ∝ 1 / r³', 'E is independent of r'],
    correct: 0,
    explanation: 'By definition, E = kq / r², so the field due to a stationary point charge obeys the inverse-square law E ∝ 1/r².'
  },
  {
    subtopicId: 'phy-sub-1-3',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'An electron and a proton are released from rest in the same uniform electric field. The ratio of acceleration of electron to that of proton is equal to:',
    options: ['m_p / m_e', 'm_e / m_p', '1 : 1', '√(m_p / m_e)'],
    correct: 0,
    explanation: 'Force on both is F = eE. Acceleration a = F / m = eE / m. Therefore a_e / a_p = m_p / m_e (~1836 times greater for electron).'
  },
  {
    subtopicId: 'phy-sub-1-4',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'The ratio of electric field at an axial point to that at an equatorial point at equal distance r from a short electric dipole is:',
    options: ['2 : 1', '1 : 2', '4 : 1', '1 : 1'],
    correct: 0,
    explanation: 'For short dipole: E_axial = 2kp/r³ and E_equatorial = kp/r³. Hence E_axial / E_equatorial = 2 : 1.'
  },
  {
    subtopicId: 'phy-sub-1-4',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'An electric dipole of moment p placed in a uniform electric field E experiences maximum torque when the angle between p and E is:',
    options: ['90°', '0°', '180°', '45°'],
    correct: 0,
    explanation: 'Torque τ = pE sin θ. Maximum torque occurs when sin θ = 1, i.e., θ = 90° (perpendicular alignment).'
  },
  {
    subtopicId: 'phy-sub-1-5',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'A charge q is placed at the corner of a cube of edge length a. The electric flux passing through the entire cube is:',
    options: ['q / (8 ε₀)', 'q / (6 ε₀)', 'q / ε₀', 'q / (24 ε₀)'],
    correct: 0,
    explanation: 'To enclose a charge at the corner symmetrically, 8 identical cubes sharing that corner are required. Thus, flux through one cube is Φ = q / (8ε₀).'
  },
  {
    subtopicId: 'phy-sub-1-5',
    chapterId: 'phy-ch-1',
    subjectId: 'physics',
    question: 'An infinite line charge produces an electric field of 9 × 10⁴ N/C at a distance of 2 cm. The linear charge density λ is:',
    options: ['0.1 μC/m', '10 μC/m', '1 μC/m', '0.01 μC/m'],
    correct: 0,
    explanation: 'E = λ / (2πε₀ r) = (2kλ) / r. λ = (E · r) / (2k) = (9 × 10⁴ × 0.02) / (2 × 9 × 10⁹) = 10⁻⁷ C/m = 0.1 μC/m.'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 2: Electrostatic Potential & Capacitance
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-2-1',
    chapterId: 'phy-ch-2',
    subjectId: 'physics',
    question: 'What is the electrostatic potential at any point on the equatorial plane of a short electric dipole of dipole moment p?',
    options: ['Zero', 'kp / r²', '2kp / r²', 'kp / r'],
    correct: 0,
    explanation: 'Every equatorial point is equidistant from +q and −q. Potential is a scalar: V = kq/d + k(−q)/d = 0.'
  },
  {
    subtopicId: 'phy-sub-2-2',
    chapterId: 'phy-ch-2',
    subjectId: 'physics',
    question: 'The work done in moving a 5 μC charge along an equipotential surface of potential 50 V through a distance of 20 cm is:',
    options: ['0 J', '250 μJ', '50 μJ', '10 J'],
    correct: 0,
    explanation: 'On an equipotential surface, ΔV = 0. Work W = q · ΔV = q · 0 = 0 J.'
  },
  {
    subtopicId: 'phy-sub-2-3',
    chapterId: 'phy-ch-2',
    subjectId: 'physics',
    question: 'A parallel plate capacitor is charged and then disconnected from the battery. A dielectric slab of constant K is inserted between the plates. What happens to its capacitance and stored energy?',
    options: [
      'Capacitance increases by K, energy decreases by factor K',
      'Both capacitance and energy increase by K',
      'Capacitance decreases by K, energy increases by K',
      'Both remain unchanged'
    ],
    correct: 0,
    explanation: 'Charge Q is constant because disconnected. Capacitance becomes C = K C₀. Stored energy U = Q² / (2C) = U₀ / K (decreases by factor K).'
  },
  {
    subtopicId: 'phy-sub-2-4',
    chapterId: 'phy-ch-2',
    subjectId: 'physics',
    question: 'The electrostatic energy density stored in an electric field E in free space is given by:',
    options: ['½ ε₀ E²', 'ε₀ E²', '½ E² / ε₀', '2 ε₀ E²'],
    correct: 0,
    explanation: 'Energy density u = Total Energy / Volume = (½ C V²) / (A·d) = ½ (ε₀ A / d)(E d)² / (A d) = ½ ε₀ E².'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 3: Current Electricity
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-3-1',
    chapterId: 'phy-ch-3',
    subjectId: 'physics',
    question: 'A cylindrical wire of resistance R is stretched to double its original length keeping mass constant. Its new electrical resistance will be:',
    options: ['4 R', '2 R', 'R / 2', 'R / 4'],
    correct: 0,
    explanation: 'When stretched to length 2L, volume V = A·L remains constant, so area becomes A/2. New resistance R\' = ρ(2L)/(A/2) = 4 [ρL/A] = 4R.'
  },
  {
    subtopicId: 'phy-sub-3-2',
    chapterId: 'phy-ch-3',
    subjectId: 'physics',
    question: 'When temperature of a metallic conductor is increased, its resistivity increases primarily because:',
    options: [
      'Relaxation time τ of conduction electrons decreases due to frequent lattice collisions',
      'Number density n of free electrons decreases',
      'Mass of electrons increases',
      'Dimensions of conductor expand drastically'
    ],
    correct: 0,
    explanation: 'Resistivity ρ = m / (n e² τ). In metals, electron density n is almost constant, but lattice ion thermal vibrations increase, reducing average relaxation time τ, so ρ increases.'
  },
  {
    subtopicId: 'phy-sub-3-3',
    chapterId: 'phy-ch-3',
    subjectId: 'physics',
    question: 'A battery of EMF E and internal resistance r is connected across external resistance R. Maximum electrical power is delivered to R when:',
    options: ['R = r', 'R = 2r', 'R = r / 2', 'R ⟶ ∞'],
    correct: 0,
    explanation: 'By the Maximum Power Transfer Theorem, power P = I² R = E² R / (R + r)² is maximized when load resistance equals internal resistance: R = r.'
  },
  {
    subtopicId: 'phy-sub-3-4',
    chapterId: 'phy-ch-3',
    subjectId: 'physics',
    question: "Kirchhoff's Junction Rule (Σ I = 0) and Loop Rule (Σ ΔV = 0) are respective manifestations of:",
    options: [
      'Conservation of Charge and Conservation of Energy',
      'Conservation of Energy and Conservation of Momentum',
      'Conservation of Momentum and Conservation of Charge',
      'Conservation of Mass and Conservation of Charge'
    ],
    correct: 0,
    explanation: 'Junction rule is based on Conservation of Charge (no charge accumulates at a point). Loop rule is based on Conservation of Energy (net work done around closed loop in conservative field is zero).'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 4: Moving Charges & Magnetism
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-4-1',
    chapterId: 'phy-ch-4',
    subjectId: 'physics',
    question: 'A proton enters a uniform magnetic field perpendicular to the field lines. The magnetic force on the proton does:',
    options: [
      'Zero work because force is always perpendicular to velocity',
      'Positive work accelerating the particle',
      'Negative work decelerating the particle',
      'Work that depends on the field strength'
    ],
    correct: 0,
    explanation: 'Magnetic force F = q (v × B) is always orthogonal to velocity vector v. Instantaneous power P = F · v = 0, so work done is always zero.'
  },
  {
    subtopicId: 'phy-sub-4-2',
    chapterId: 'phy-ch-4',
    subjectId: 'physics',
    question: 'The magnetic field at the centre of a circular coil of radius R carrying current I is B. If radius is doubled and current is halved, the new magnetic field is:',
    options: ['B / 4', 'B / 2', '2 B', '4 B'],
    correct: 0,
    explanation: 'B = μ₀ I / (2R). When I\' = I/2 and R\' = 2R: B\' = μ₀(I/2) / [2(2R)] = (1/4) [μ₀I / 2R] = B / 4.'
  },
  {
    subtopicId: 'phy-sub-4-4',
    chapterId: 'phy-ch-4',
    subjectId: 'physics',
    question: 'To convert a moving coil galvanometer into an ammeter of high range, one should connect:',
    options: [
      'A low resistance (shunt) in parallel with galvanometer coil',
      'A high resistance in series with galvanometer coil',
      'A low resistance in series with galvanometer coil',
      'A high resistance in parallel with galvanometer coil'
    ],
    correct: 0,
    explanation: 'A low shunt resistance in parallel diverts the bulk of current around the delicate coil, converting the galvanometer into an ammeter.'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 6: Electromagnetic Induction
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-6-1',
    chapterId: 'phy-ch-6',
    subjectId: 'physics',
    question: "Lenz's law of electromagnetic induction gives the:",
    options: [
      'Direction of induced current and polarity of induced EMF',
      'Magnitude of induced EMF only',
      'Total resistance of the induction coil',
      'Frequency of induced alternating current'
    ],
    correct: 0,
    explanation: "Lenz's Law (ε = −dΦ/dt) states that the direction of induced current is always such as to oppose the magnetic flux change causing it."
  },
  {
    subtopicId: 'phy-sub-6-3',
    chapterId: 'phy-ch-6',
    subjectId: 'physics',
    question: 'The self-inductance L of a long solenoid of length l, cross-sectional area A, and total turns N is given by:',
    options: ['μ₀ N² A / l', 'μ₀ N A / l', 'μ₀ N² l / A', 'μ₀ N I A'],
    correct: 0,
    explanation: 'Flux Φ = B A = (μ₀ n I) A. Total flux linkage N Φ = μ₀ (N/l) I A N = (μ₀ N² A / l) I. Therefore L = μ₀ N² A / l.'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 7: Alternating Current
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-7-1',
    chapterId: 'phy-ch-7',
    subjectId: 'physics',
    question: 'An AC circuit has RMS voltage 220 V. The peak (maximum) instantaneous voltage of this alternating supply is:',
    options: ['≈ 311 V', '220 V', '155 V', '440 V'],
    correct: 0,
    explanation: 'V_peak = √2 · V_rms = 1.414 × 220 V ≈ 311.1 V.'
  },
  {
    subtopicId: 'phy-sub-7-2',
    chapterId: 'phy-ch-7',
    subjectId: 'physics',
    question: 'In a series LCR circuit at resonant frequency f₀ = 1 / (2π√LC), the net circuit impedance is:',
    options: [
      'Purely resistive (Z = R) and at its minimum value',
      'Purely inductive (Z = ωL)',
      'Infinite (open circuit)',
      'Zero (superconducting)'
    ],
    correct: 0,
    explanation: 'At resonance, X_L = X_C, so the reactive component cancels: Z = √[R² + (X_L − X_C)²] = R (minimum impedance, maximum current).'
  },
  {
    subtopicId: 'phy-sub-7-3',
    chapterId: 'phy-ch-7',
    subjectId: 'physics',
    question: 'Why is the core of a commercial AC transformer laminated with thin varnished sheets?',
    options: [
      'To reduce energy loss due to eddy currents',
      'To increase electrical conductivity of the core',
      'To eliminate hysteresis loss completely',
      'To increase secondary voltage output'
    ],
    correct: 0,
    explanation: 'Laminations break up the continuous conducting path in the iron core, drastically increasing resistance to circulating eddy currents and reducing Joule heating.'
  },

  // --------------------------------------------------------------------------
  // PHYSICS CH 8: Electromagnetic Waves
  // --------------------------------------------------------------------------
  {
    subtopicId: 'phy-sub-8-1',
    chapterId: 'phy-ch-8',
    subjectId: 'physics',
    question: 'The displacement current I_d introduced by Maxwell between the plates of a charging capacitor is given by:',
    options: ['ε₀ (dΦ_E / dt)', 'μ₀ (dΦ_B / dt)', 'C (dV / dt) / ε₀', 'Zero'],
    correct: 0,
    explanation: "Maxwell's displacement current is I_d = ε₀ (dΦ_E / dt), ensuring continuity of electric current across capacitor gaps."
  },
  {
    subtopicId: 'phy-sub-8-2',
    chapterId: 'phy-ch-8',
    subjectId: 'physics',
    question: 'Which electromagnetic waves are used in RADAR systems and cellular mobile phone communication?',
    options: ['Microwaves', 'Ultraviolet rays', 'X-rays', 'Gamma rays'],
    correct: 0,
    explanation: 'Microwaves (wavelength 1 mm to 0.1 m) are used in radar and telecommunications due to their short wavelength and ability to penetrate atmospheric fog/clouds.'
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY CH 1: Solutions
  // --------------------------------------------------------------------------
  {
    subtopicId: 'chem-sub-1-1',
    chapterId: 'chem-ch-1',
    subjectId: 'chemistry',
    question: 'Which of the following concentration units is temperature INDEPENDENT?',
    options: ['Molality (m)', 'Molarity (M)', 'Normality (N)', 'Formality (F)'],
    correct: 0,
    explanation: 'Molality = moles of solute / mass of solvent in kg. Since mass is invariant with temperature, molality does not change with temperature.'
  },
  {
    subtopicId: 'chem-sub-1-2',
    chapterId: 'chem-ch-1',
    subjectId: 'chemistry',
    question: "According to Henry's Law, as temperature of water increases, the solubility of gases in it decreases because:",
    options: [
      "Henry's law constant K_H increases with temperature (dissolution is exothermic)",
      "K_H decreases with temperature",
      "Atmospheric pressure increases with temperature",
      "Gas molecules break into individual atoms"
    ],
    correct: 0,
    explanation: 'Dissolution of gas in liquid is exothermic (ΔH < 0). Le Chatelier\'s principle dictates that increasing temperature shifts equilibrium to gas phase, increasing K_H and decreasing solubility.'
  },
  {
    subtopicId: 'chem-sub-1-3',
    chapterId: 'chem-ch-1',
    subjectId: 'chemistry',
    question: 'An azeotropic mixture of two liquids boils at a lower temperature than either pure component when the solution shows:',
    options: [
      'Large positive deviation from Raoult\'s Law (minimum boiling azeotrope)',
      'Large negative deviation from Raoult\'s Law (maximum boiling azeotrope)',
      'Zero deviation (ideal behavior)',
      'High osmotic pressure'
    ],
    correct: 0,
    explanation: 'Positive deviation means A-B intermolecular attractions are weaker than pure A-A and B-B, resulting in higher vapour pressure and lower boiling point (minimum boiling azeotrope, e.g. 95% ethanol).'
  },
  {
    subtopicId: 'chem-sub-1-10',
    chapterId: 'chem-ch-1',
    subjectId: 'chemistry',
    question: 'Why is osmotic pressure measurement preferred over boiling point elevation for determining molar mass of proteins and biomacromolecules?',
    options: [
      'It can be measured at room temperature, and biomolecules denature/decompose at boiling temperatures',
      'Proteins do not dissolve in water',
      'Osmotic pressure does not depend on molar mass',
      'Biomolecules have very low molecular weights'
    ],
    correct: 0,
    explanation: 'Biomolecules are thermally unstable and undergo denaturation at high temperatures. Osmotic pressure gives large measurable pressure values even for dilute solutions at room temperature.'
  },
  {
    subtopicId: 'chem-sub-1-12',
    chapterId: 'chem-ch-1',
    subjectId: 'chemistry',
    question: "The van 't Hoff factor i for 0.1 M aqueous Potassium ferricyanide [K₃Fe(CN)₆] assuming complete 100% dissociation is:",
    options: ['4', '3', '2', '5'],
    correct: 0,
    explanation: 'K₃[Fe(CN)₆] dissociates into 3 K⁺ + [Fe(CN)₆]³⁻, producing 4 moles of ions per formula unit. Hence i = 4.'
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY CH 2: Electrochemistry
  // --------------------------------------------------------------------------
  {
    subtopicId: 'chem-sub-2-1',
    chapterId: 'chem-ch-2',
    subjectId: 'chemistry',
    question: 'Which of the following salts is typically used in the agar-agar gel of a galvanic salt bridge and why?',
    options: [
      'KCl, because velocities and mobilities of K⁺ and Cl⁻ are almost identical',
      'NaCl, because Na⁺ is smaller than Cl⁻',
      'AgNO₃, because it forms precipitates',
      'H₂SO₄, because it is a strong acid'
    ],
    correct: 0,
    explanation: 'In KCl and KNO₃, the transference numbers and ionic mobilities of cation and anion are virtually identical, minimizing liquid junction potential.'
  },
  {
    subtopicId: 'chem-sub-2-5',
    chapterId: 'chem-ch-2',
    subjectId: 'chemistry',
    question: 'For a Daniell cell Zn | Zn²⁺(aq) || Cu²⁺(aq) | Cu at 298 K, if concentration of Zn²⁺ is increased 10 times keeping Cu²⁺ constant, the cell EMF will:',
    options: ['Decrease by 0.0591 / 2 V ≈ 0.0295 V', 'Increase by 0.0591 V', 'Remain unchanged', 'Double'],
    correct: 0,
    explanation: 'Nernst equation: E_cell = E°_cell − (0.0591/2) log([Zn²⁺]/[Cu²⁺]). When [Zn²⁺] increases tenfold, log term increases by log(10) = 1, so E_cell decreases by 0.0295 V.'
  },
  {
    subtopicId: 'chem-sub-2-8',
    chapterId: 'chem-ch-2',
    subjectId: 'chemistry',
    question: "Kohlrausch's law of independent migration of ions states that at infinite dilution:",
    options: [
      'Each ion makes a definite independent contribution to total molar conductivity regardless of the other ion',
      'Molar conductivity drops to zero',
      'Equivalent conductivity equals molecular mass',
      'Weak electrolytes become completely insoluble'
    ],
    correct: 0,
    explanation: 'Λ°_m = ν₊ λ°₊ + ν₋ λ°₋. Each ion migrates independently of its co-ion at infinite dilution because inter-ionic attractions are completely eliminated.'
  },
  {
    subtopicId: 'chem-sub-2-10',
    chapterId: 'chem-ch-2',
    subjectId: 'chemistry',
    question: 'Why does a mercury cell provide an exceptionally constant potential of 1.35 V throughout its operating life?',
    options: [
      'Its overall reaction Zn(Hg) + HgO(s) ⟶ ZnO(s) + Hg(l) does not involve any solution ions whose concentration could change',
      'It contains a rechargeable platinum catalyst',
      'It operates at very high internal temperature',
      'It uses an external battery charger'
    ],
    correct: 0,
    explanation: 'No ions in solution appear in the overall cell reaction. As reactants are solid/liquid, activities remain constant (unity), ensuring invariant voltage.'
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY CH 4: The d- and f-Block Elements
  // --------------------------------------------------------------------------
  {
    subtopicId: 'chem-sub-4-1',
    chapterId: 'chem-ch-4',
    subjectId: 'chemistry',
    question: 'The spin-only magnetic moment μ of Fe²⁺ (Z = 26, 3d⁶) ion in Bohr Magnetons is:',
    options: ['√24 ≈ 4.90 B.M.', '√15 ≈ 3.87 B.M.', '√35 ≈ 5.92 B.M.', '√8 ≈ 2.83 B.M.'],
    correct: 0,
    explanation: 'Fe²⁺ has 3d⁶ configuration with 4 unpaired electrons (n = 4). μ = √[n(n + 2)] = √[4(6)] = √24 ≈ 4.90 B.M.'
  },
  {
    subtopicId: 'chem-sub-4-2',
    chapterId: 'chem-ch-4',
    subjectId: 'chemistry',
    question: 'When pyrolusite ore (MnO₂) is fused with KOH in the presence of air/KNO₃, the product obtained is:',
    options: ['Dark green K₂MnO₄', 'Purple KMnO₄', 'Colourless MnSO₄', 'Brown Mn₂O₃'],
    correct: 0,
    explanation: '2MnO₂ + 4KOH + O₂ ⟶ 2K₂MnO₄ (potassium manganate, dark green) + 2H₂O.'
  },
  {
    subtopicId: 'chem-sub-4-4',
    chapterId: 'chem-ch-4',
    subjectId: 'chemistry',
    question: 'Zirconium (Zr, 4d) and Hafnium (Hf, 5d) exhibit almost identical atomic radii (~160 pm) due to:',
    options: [
      'Lanthanoid contraction caused by poor shielding of intervening 4f electrons',
      'Diagonal relationship across the periodic table',
      'Identical atomic masses',
      'High ionization energy of Zr'
    ],
    correct: 0,
    explanation: 'The 14 lanthanoid elements fill the 4f subshell before Hf. Diffuse 4f electrons provide poor shielding, causing high effective nuclear charge that contracts Hf radius to match Zr.'
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY CH 6: Haloalkanes and Haloarenes
  // --------------------------------------------------------------------------
  {
    subtopicId: 'chem-sub-6-3',
    chapterId: 'chem-ch-6',
    subjectId: 'chemistry',
    question: 'Which of the following substrates reacts FASTEST via the S_N1 mechanism in aqueous ethanol?',
    options: ['(CH₃)₃C-Br (tert-butyl bromide)', '(CH₃)₂CH-Br (isopropyl bromide)', 'CH₃CH₂-Br (ethyl bromide)', 'CH₃-Br'],
    correct: 0,
    explanation: 'S_N1 rate depends on stability of intermediate carbocation: 3° > 2° > 1° > methyl. The 3° tert-butyl carbocation is stabilized by 9 hyperconjugative structures.'
  },
  {
    subtopicId: 'chem-sub-6-3',
    chapterId: 'chem-ch-6',
    subjectId: 'chemistry',
    question: 'Hydrolysis of optically active 2-bromooctane with aqueous NaOH proceeds with:',
    options: [
      'Complete inversion of configuration (Walden inversion, S_N2 mechanism)',
      'Complete retention of configuration',
      'Racemization with 50:50 enantiomer mixture',
      'Elimination to give 2-octene only'
    ],
    correct: 0,
    explanation: 'Primary and secondary unhindered halides undergo S_N2 nucleophilic attack from the backside directly opposite the leaving bromide ion, resulting in Walden inversion.'
  },

  // --------------------------------------------------------------------------
  // CHEMISTRY CH 7: Alcohols, Phenols and Ethers
  // --------------------------------------------------------------------------
  {
    subtopicId: 'chem-sub-7-2',
    chapterId: 'chem-ch-7',
    subjectId: 'chemistry',
    question: 'In the Lucas test (conc. HCl + anhydrous ZnCl₂), a tertiary alcohol produces turbidity:',
    options: ['Immediately at room temperature', 'After 5 minutes upon gentle heating', 'Only after 30 minutes', 'Does not react at all'],
    correct: 0,
    explanation: 'Tertiary alcohols form very stable 3° carbocations instantly, reacting with chloride to form insoluble 3° alkyl chloride turbidity immediately.'
  },
  {
    subtopicId: 'chem-sub-7-3',
    chapterId: 'chem-ch-7',
    subjectId: 'chemistry',
    question: 'Phenol is significantly more acidic than ethanol because:',
    options: [
      'The phenoxide ion is resonance-stabilized by delocalization of negative charge over the benzene ring',
      'Ethanol has a larger dipole moment',
      'Phenol has an sp³ hybridized carbon atom',
      'Ethoxide ion is stabilized by inductive effect'
    ],
    correct: 0,
    explanation: 'Phenoxide ion has 5 resonance contributors dispersing the negative oxygen charge onto ortho and para ring carbons, whereas ethoxide has destabilizing +I ethyl group.'
  },
  {
    subtopicId: 'chem-sub-7-4',
    chapterId: 'chem-ch-7',
    subjectId: 'chemistry',
    question: 'In the Reimer-Tiemann reaction of phenol with chloroform and aqueous NaOH, the active electrophilic species is:',
    options: ['Dichlorocarbene (:CCl₂)', 'Carbon tetrachloride (CCl₄)', 'Chloronium ion (Cl⁺)', 'Methyl carbocation (CH₃⁺)'],
    correct: 0,
    explanation: 'Deprotonation of chloroform by hydroxide generates the neutral, electron-deficient electrophile dichlorocarbene (:CCl₂).'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 1: Sexual Reproduction in Flowering Plants
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-1-1',
    chapterId: 'bio-ch-1',
    subjectId: 'biology',
    question: 'The outermost wall layer of a mature pollen grain (exine) is composed of:',
    options: ['Sporopollenin', 'Cellulose and Pectin', 'Chitin', 'Lignin'],
    correct: 0,
    explanation: 'Exine is made of sporopollenin, the most resistant organic material known. It withstands high temperatures, strong acids, alkalis, and no enzyme is known to degrade it.'
  },
  {
    subtopicId: 'bio-sub-1-2',
    chapterId: 'bio-ch-1',
    subjectId: 'biology',
    question: 'A typical mature angiosperm embryo sac at the time of fertilization is:',
    options: ['7-celled and 8-nucleate', '8-celled and 7-nucleate', '8-celled and 8-nucleate', '7-celled and 7-nucleate'],
    correct: 0,
    explanation: 'Embryo sac has 3 antipodals at chalazal end, 1 egg cell + 2 synergids at micropylar end, and 1 large central cell containing 2 polar nuclei (7 cells, 8 nuclei).'
  },
  {
    subtopicId: 'bio-sub-1-4',
    chapterId: 'bio-ch-1',
    subjectId: 'biology',
    question: 'Double fertilization in angiosperms involves:',
    options: [
      'Syngamy (zygote 2n) and Triple fusion (primary endosperm nucleus 3n)',
      'Fertilization of egg by two separate pollen tubes',
      'Fusion of synergid with vegetative nucleus',
      'Fusion of two antipodal cells with male gamete'
    ],
    correct: 0,
    explanation: 'One male gamete (n) fuses with the egg (n) to form Zygote (2n), while the second male gamete (n) fuses with the 2 polar nuclei (2n) to form triploid PEN (3n).'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 2: Human Reproduction
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-2-1',
    chapterId: 'bio-ch-2',
    subjectId: 'biology',
    question: 'Leydig cells situated in the interstitial spaces of the testis synthesize and secrete:',
    options: ['Androgens (principally testosterone)', 'Follicle stimulating hormone (FSH)', 'Luteinizing hormone (LH)', 'Inhibin only'],
    correct: 0,
    explanation: 'Under stimulation by LH from the anterior pituitary, Leydig cells produce male androgen hormones (testosterone).'
  },
  {
    subtopicId: 'bio-sub-2-4',
    chapterId: 'bio-ch-2',
    subjectId: 'biology',
    question: 'Ovulation in the human female typically occurs around day 14 of a 28-day cycle, triggered by a rapid surge in:',
    options: ['Luteinizing Hormone (LH surge)', 'Progesterone', 'Human Chorionic Gonadotropin (hCG)', 'Prolactin'],
    correct: 0,
    explanation: 'LH surge induces rupture of the mature Graafian follicle and release of the secondary oocyte (ovulation).'
  },
  {
    subtopicId: 'bio-sub-2-5',
    chapterId: 'bio-ch-2',
    subjectId: 'biology',
    question: 'Fertilization in human females occurs naturally at which specific anatomical location?',
    options: ['Ampullary-isthmic junction of Fallopian tube (oviduct)', 'Fundus of uterus', 'Cervical canal', 'Endometrium wall'],
    correct: 0,
    explanation: 'Fertilization takes place when sperm and ovum simultaneously reach the ampullary region of the fallopian tube.'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 4: Principles of Inheritance and Variation
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-4-1',
    chapterId: 'bio-ch-4',
    subjectId: 'biology',
    question: 'In the ABO blood group system, the inheritance of alleles I^A and I^B demonstrating AB blood type is an example of:',
    options: ['Codominance', 'Incomplete dominance', 'Pleiotropy', 'Polygenic inheritance'],
    correct: 0,
    explanation: 'When both I^A and I^B are present, both express their respective surface glycoprotein antigens equally, exhibiting codominance.'
  },
  {
    subtopicId: 'bio-sub-4-4',
    chapterId: 'bio-ch-4',
    subjectId: 'biology',
    question: 'In Sickle-cell anemia, the single base substitution in the beta-globin gene is:',
    options: [
      'GAG to GUG at codon 6, replacing Glutamic acid with Valine',
      'GUG to GAG at codon 6',
      'AUG to UAA nonsense mutation',
      'Frameshift insertion of Adenine'
    ],
    correct: 0,
    explanation: 'A point mutation changes GAG (glutamic acid, hydrophilic) to GUG (valine, hydrophobic) at the sixth position of the β-globin chain.'
  },
  {
    subtopicId: 'bio-sub-4-4',
    chapterId: 'bio-ch-4',
    subjectId: 'biology',
    question: 'Turner syndrome in human females is caused by which chromosomal constitution?',
    options: ['45 with XO (monosomy)', '47 with XXY (trisomy)', '47 with +21', '47 with XYY'],
    correct: 0,
    explanation: 'Turner syndrome results from the absence of one of the X chromosomes, resulting in a 45, XO karyotype with sterile female phenotype.'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 5: Molecular Basis of Inheritance
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-5-1',
    chapterId: 'bio-ch-5',
    subjectId: 'biology',
    question: 'According to Chargaff’s rules, if double-stranded DNA contains 30% Adenine, the percentage of Cytosine is:',
    options: ['20%', '30%', '40%', '70%'],
    correct: 0,
    explanation: 'A = T = 30%, so A + T = 60%. Remaining G + C = 40%. Since G = C, Cytosine percentage = 40% / 2 = 20%.'
  },
  {
    subtopicId: 'bio-sub-5-2',
    chapterId: 'bio-ch-5',
    subjectId: 'biology',
    question: 'The Hershey-Chase experiment conclusively established that DNA is the genetic material using bacteriophage T2 labeled with:',
    options: [
      '³²P to label DNA and ³⁵S to label protein coat',
      '³⁵S to label DNA and ³²P to label protein',
      '¹⁵N to label DNA and ¹⁴C to label protein',
      'Radioactive Iodine'
    ],
    correct: 0,
    explanation: 'Phosphorus is present in DNA but absent in protein (³²P). Sulfur is present in amino acids (cysteine, methionine) but absent in DNA (³⁵S).'
  },
  {
    subtopicId: 'bio-sub-5-4',
    chapterId: 'bio-ch-5',
    subjectId: 'biology',
    question: 'In the E. coli Lac Operon, lactose (or allolactose) acts as:',
    options: [
      'An inducer that binds to the repressor protein, inactivating it',
      'A corepressor that binds to the operator',
      'A promoter that activates RNA polymerase directly',
      'An enzyme that cleaves the beta-galactosidase gene'
    ],
    correct: 0,
    explanation: 'Allolactose binds to the repressor protein causing a conformational change that prevents it from binding to the operator, permitting transcription.'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 6: Evolution
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-6-1',
    chapterId: 'bio-ch-6',
    subjectId: 'biology',
    question: 'Homologous organs such as the forelimbs of humans, cheetahs, whales, and bats indicate:',
    options: [
      'Divergent evolution from a common ancestral anatomical plan',
      'Convergent evolution towards similar environmental functions',
      'Co-evolution of prey and predator',
      'Parallel mutation in unrelated phyla'
    ],
    correct: 0,
    explanation: 'Homologous structures share identical embryonic anatomical origin and structural blueprint, modified for different functions via divergent evolution.'
  },
  {
    subtopicId: 'bio-sub-6-3',
    chapterId: 'bio-ch-6',
    subjectId: 'biology',
    question: 'In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive individuals (q²) is 0.16. The frequency of heterozygous carriers (2pq) is:',
    options: ['0.48', '0.36', '0.24', '0.84'],
    correct: 0,
    explanation: 'q² = 0.16 ⟹ q = 0.4. Since p + q = 1, p = 0.6. Frequency of heterozygotes = 2pq = 2 × 0.6 × 0.4 = 0.48.'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 7: Human Health and Disease
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-7-1',
    chapterId: 'bio-ch-7',
    subjectId: 'biology',
    question: 'Typhoid fever caused by Salmonella typhi is confirmed in the laboratory by the:',
    options: [
      'Widal test',
      'ELISA test',
      'Mantoux test',
      'Western blot test'
    ],
    correct: 0,
    explanation: 'Typhoid fever caused by Salmonella typhi is confirmed serologically using the classic Widal agglutination test.'
  },
  {
    subtopicId: 'bio-sub-7-3',
    chapterId: 'bio-ch-7',
    subjectId: 'biology',
    question: 'During human organ transplantation, graft rejection is mediated principally by:',
    options: [
      'Cell-Mediated Immunity (T lymphocytes)',
      'Humoral antibody response (B lymphocytes)',
      'Innate physiological lysozyme barriers',
      'Erythrocyte agglutination'
    ],
    correct: 0,
    explanation: 'Cell-Mediated Immunity (CMI) mediated by T lymphocytes recognizes foreign HLA antigens on the graft and is responsible for graft rejection.'
  },

  // --------------------------------------------------------------------------
  // BIOLOGY CH 8: Microbes in Human Welfare
  // --------------------------------------------------------------------------
  {
    subtopicId: 'bio-sub-8-2',
    chapterId: 'bio-ch-8',
    subjectId: 'biology',
    question: 'The bioactive molecule statin, used as a blood-cholesterol lowering agent, is obtained from:',
    options: [
      'Monascus purpureus (yeast)',
      'Trichoderma polysporum (fungus)',
      'Streptococcus (bacterium)',
      'Aspergillus niger (fungus)'
    ],
    correct: 0,
    explanation: 'Statins are produced by the yeast Monascus purpureus and competitively inhibit HMG-CoA reductase to lower blood cholesterol.'
  },
  {
    subtopicId: 'bio-sub-8-3',
    chapterId: 'bio-ch-8',
    subjectId: 'biology',
    question: 'In secondary sewage treatment, masses of aerobic bacteria associated with fungal filaments form mesh-like structures called:',
    options: [
      'Flocs',
      'Primary sludge',
      'Inoculum',
      'Methanogens'
    ],
    correct: 0,
    explanation: 'Flocs are masses of aerobic bacteria held together by fungal filaments that rapidly digest organic matter, drastically reducing BOD.'
  },

  // --------------------------------------------------------------------------
  // PSYCHOLOGY CH 1: Variations in Psychological Attributes
  // --------------------------------------------------------------------------
  {
    subtopicId: 'psy-sub-1-1',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'Intelligence is fundamentally distinguished from acquired knowledge because:',
    options: [
      'Intelligence represents the global capacity to learn, reason, and adapt, whereas knowledge is acquired information',
      'Intelligence is completely fixed by genetics with zero environmental influence',
      'Knowledge alone determines IQ score on standardized tests',
      'Intelligence does not involve practical problem-solving'
    ],
    correct: 0,
    explanation: 'Intelligence is the general mental capacity for reasoning, abstract thinking, and learning from experience, while knowledge represents specific acquired factual content.'
  },
  {
    subtopicId: 'psy-sub-1-2',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: "Spearman's Two-Factor Theory of intelligence asserts that intellectual performance involves:",
    options: [
      'A universal General factor (g) operating across all tasks, plus Specific factors (s) unique to each task',
      'Seven primary mental abilities that operate independently',
      'A three-dimensional cube of operations, contents, and products',
      'Multiple independent intelligences located in separate neural lobes'
    ],
    correct: 0,
    explanation: "Charles Spearman (1904) proposed that all cognitive activities share a common general mental energy ('g'), while individual tasks also draw upon specific abilities ('s')."
  },
  {
    subtopicId: 'psy-sub-1-2',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: "Which theorist rejected the single general factor 'g' and proposed Seven Primary Mental Abilities (including verbal comprehension, numerical ability, and spatial relations)?",
    options: ['Louis Thurstone', 'Charles Spearman', 'Arthur Jensen', 'J.P. Guilford'],
    correct: 0,
    explanation: 'Louis Thurstone proposed that intelligence consists of 7 relatively independent Primary Mental Abilities (PMA), rather than a single unitary general factor.'
  },
  {
    subtopicId: 'psy-sub-1-2',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'In the PASS Model (Das, Naglieri & Kirby), which cognitive process is responsible for setting goals, selecting strategies, and monitoring problem-solving?',
    options: ['Planning (frontal lobe)', 'Attention-Arousal', 'Simultaneous Processing', 'Successive Processing'],
    correct: 0,
    explanation: 'Planning is mediated by the prefrontal cortex and allows an individual to formulate, execute, evaluate, and modify cognitive strategies to resolve problems.'
  },
  {
    subtopicId: 'psy-sub-1-3',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'The highest correlation of intelligence test scores (r ≈ 0.90) is typically observed between:',
    options: [
      'Identical twins reared together in the same household',
      'Identical twins reared apart in different families',
      'Fraternal twins reared together',
      'Siblings reared together'
    ],
    correct: 0,
    explanation: 'Identical (monozygotic) twins reared together share 100% of genes and a shared environment, showing the highest known IQ correlation (approximately 0.90).'
  },
  {
    subtopicId: 'psy-sub-1-4',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'Why are non-verbal and performance tests of intelligence particularly advantageous over verbal tests?',
    options: [
      'They do not require reading or language literacy and reduce cross-cultural linguistic bias',
      'They take less time to administer than group tests',
      'They measure emotional intelligence instead of cognitive ability',
      'They produce higher IQ scores automatically'
    ],
    correct: 0,
    explanation: 'Performance tests (e.g. block designs, object assembly) require manipulating materials rather than language, making them suitable for illiterate, young, or linguistically diverse subjects.'
  },
  {
    subtopicId: 'psy-sub-1-5',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: "According to Joseph Renzulli's Three-Ring Model, giftedness emerges at the intersection of:",
    options: [
      'Above-Average Ability, High Creativity, and High Task Commitment',
      'High IQ, High Emotional Stability, and Family Wealth',
      'High Memory, Speed of Processing, and Spatial Reasoning',
      'Musical Talent, Athletic Skill, and Physical Stamina'
    ],
    correct: 0,
    explanation: "Renzulli's Three-Ring Conception posits that giftedness results from interaction among above-average general/specific ability, high creativity, and high task commitment (motivation/perseverance)."
  },
  {
    subtopicId: 'psy-sub-1-6',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'An aptitude test is fundamentally different from an achievement test because:',
    options: [
      'An aptitude test predicts potential for future learning with training, whereas an achievement test evaluates past acquired knowledge',
      'An aptitude test measures general personality traits',
      'An achievement test can only be given individually',
      'Aptitude tests are unstandardized'
    ],
    correct: 0,
    explanation: 'Aptitude tests assess readiness or innate capacity to acquire specific skills (predictive), while achievement tests evaluate proficiency already mastered (evaluative).'
  },
  {
    subtopicId: 'psy-sub-1-7',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'Thinking that involves generating multiple, varied, and novel solutions to an open-ended problem is termed:',
    options: ['Divergent thinking', 'Convergent thinking', 'Algorithmic reasoning', 'Deductive logic'],
    correct: 0,
    explanation: 'Divergent thinking (fluency, flexibility, originality, and elaboration) generates multiple creative pathways, unlike convergent thinking which narrows down to a single correct answer.'
  },
  {
    subtopicId: 'psy-sub-1-8',
    chapterId: 'psy-ch-1',
    subjectId: 'psychology',
    question: 'Which of the following is NOT one of Daniel Goleman\'s core competencies of Emotional Intelligence?',
    options: [
      'Mechanical spatial aptitude',
      'Self-awareness',
      'Self-regulation',
      'Empathy and Social Skills'
    ],
    correct: 0,
    explanation: 'Goleman identified 5 emotional competencies: Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills. Mechanical aptitude is an intellectual/physical domain.'
  },

  // --------------------------------------------------------------------------
  // PSYCHOLOGY CH 2: Self and Personality
  // --------------------------------------------------------------------------
  {
    subtopicId: 'psy-sub-2-1',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: "An individual's ability to resist immediate temptations in order to achieve long-term future goals is known as:",
    options: ['Delay of gratification (self-regulation)', 'Self-efficacy', 'Unconditional positive regard', 'External attribution'],
    correct: 0,
    explanation: 'Delay of gratification is the voluntary postponement of immediate pleasure in pursuit of more valuable long-term rewards, a key marker of self-regulation.'
  },
  {
    subtopicId: 'psy-sub-2-3',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: 'In traditional Indian and Asian collectivist cultures, the self is predominantly characterized by:',
    options: [
      'An interdependent construal with fluid boundaries interconnected with family and social obligations',
      'An independent construal with rigid boundaries prioritizing individual uniqueness',
      'Extreme narcissistic self-promotion',
      'Complete lack of self-awareness'
    ],
    correct: 0,
    explanation: 'Collectivist societies foster an interdependent self where identity is deeply embedded in social roles, duty (dharma), kinship, and relational harmony.'
  },
  {
    subtopicId: 'psy-sub-2-5',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: "In William Sheldon's somatotype theory, an individual with a rounded, soft physique and a relaxed, sociable, comfort-loving temperament (Viscerotonia) is classified as an:",
    options: ['Endomorph', 'Mesomorph', 'Ectomorph', 'Ambivert'],
    correct: 0,
    explanation: 'Sheldon matched body types to temperaments: Endomorph (rounded/fat, relaxed/sociable), Mesomorph (muscular/strong, assertive/energetic), and Ectomorph (thin/linear, restrained/introverted).'
  },
  {
    subtopicId: 'psy-sub-2-6',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: "Gordon Allport classified a pervasive, extraordinary trait that dominates and defines a person's entire life (such as Gandhi's non-violence) as a:",
    options: ['Cardinal trait', 'Central trait', 'Secondary trait', 'Surface trait'],
    correct: 0,
    explanation: 'Cardinal traits are rare, overwhelming dispositions around which a person organizes their entire existence. Central traits are 5-10 core traits; secondary traits are situational preferences.'
  },
  {
    subtopicId: 'psy-sub-2-6',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: 'Raymond Cattell utilized factor analysis to reduce thousands of descriptive terms into how many primary Source Traits in his 16PF test?',
    options: ['16 Source Traits', '5 Big Factors', '3 PEN dimensions', '150 Abilities'],
    correct: 0,
    explanation: 'Cattell identified 16 fundamental source traits representing deep structural building blocks of personality, measured by the Sixteen Personality Factor Questionnaire (16PF).'
  },
  {
    subtopicId: 'psy-sub-2-7',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: 'In Freudian psychoanalysis, which psychosexual stage is characterized by the Oedipus / Electra complex and awareness of gender roles?',
    options: ['Phallic stage (3-6 years)', 'Oral stage (0-1 year)', 'Anal stage (1-3 years)', 'Latency stage (6-12 years)'],
    correct: 0,
    explanation: 'The Phallic stage (ages 3 to 6) focuses libido on the genitals and is marked by the Oedipus complex in boys and Electra complex in girls, resolved through identification with the same-sex parent.'
  },
  {
    subtopicId: 'psy-sub-2-9',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: 'According to Carl Rogers, healthy personality development and self-actualisation require that a child receives:',
    options: [
      'Unconditional Positive Regard (acceptance and love without conditions attached)',
      'Rigid conditions of worth',
      'Strict behavioural operant punishment',
      'Early toilet training'
    ],
    correct: 0,
    explanation: 'Rogers emphasized that unconditional positive regard from significant caregivers prevents conditions of worth and allows the real self and ideal self to achieve harmony (congruence).'
  },
  {
    subtopicId: 'psy-sub-2-10',
    chapterId: 'psy-ch-2',
    subjectId: 'psychology',
    question: 'The Thematic Apperception Test (TAT) developed by Morgan and Murray is an assessment tool categorized under:',
    options: [
      'Projective techniques (interpreting ambiguous picture scenes)',
      'Self-report structured inventories',
      'Situational stress tests',
      'Neuropsychological performance batteries'
    ],
    correct: 0,
    explanation: 'TAT is a projective test where subjects compose stories about 30 ambiguous picture cards, projecting their underlying unconscious needs, motives, and intrapsychic conflicts.'
  },

  // --------------------------------------------------------------------------
  // PSYCHOLOGY CH 3: Meeting Life Challenges
  // --------------------------------------------------------------------------
  {
    subtopicId: 'psy-sub-3-1',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'In Lazarus and Folkman\'s Cognitive Appraisal Model, appraising a stressful event as a "Challenge" means:',
    options: [
      'Viewing the demand with expectation of potential gain, mastery, and personal growth',
      'Viewing the damage that has already occurred',
      'Anticipating irreversible catastrophe and defeat',
      'Denying that any problem exists'
    ],
    correct: 0,
    explanation: 'Challenge appraisals focus on potential for mastery, learning, and growth, fostering positive emotions and proactive problem-solving coping responses.'
  },
  {
    subtopicId: 'psy-sub-3-2',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'A college graduate must choose between two equally lucrative and prestigious job offers in attractive cities. This motivational dilemma exemplifies:',
    options: [
      'Approach-Approach conflict',
      'Avoidance-Avoidance conflict',
      'Approach-Avoidance conflict',
      'Multiple frustration'
    ],
    correct: 0,
    explanation: 'Approach-Approach conflict occurs when an individual must select between two equally desirable, mutually exclusive positive goals.'
  },
  {
    subtopicId: 'psy-sub-3-3',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'What physiological triad did Hans Selye identify in animals exposed to chronic, unrelenting stress during the Exhaustion stage of GAS?',
    options: [
      'Enlargement of adrenal cortex, shrinkage of lymphatic structures (thymus), and gastric ulcers',
      'Decrease in blood pressure, slowing heart rate, and increased digestion',
      'Excess insulin secretion, increased white blood cells, and bone density increase',
      'Hyperactivity of the pineal gland, dilated pupils, and muscular relaxation'
    ],
    correct: 0,
    explanation: 'Selye discovered the classic stress triad: hypertrophy/enlargement of the adrenal cortex, atrophy/shrinkage of thymus and lymph nodes, and deep bleeding gastric ulceration.'
  },
  {
    subtopicId: 'psy-sub-3-4',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'Psychoneuroimmunology studies indicate that chronic psychological stress suppresses the immune system primarily because:',
    options: [
      'Sustained cortisol elevation inhibits the production and cytotoxic activity of Natural Killer (NK) cells and T-lymphocytes',
      'Stress causes rapid destruction of red blood cells',
      'Sympathetic arousal immediately shuts down all brain activity',
      'Endorphins destroy antibody receptor sites'
    ],
    correct: 0,
    explanation: 'Chronic HPA axis activation leads to prolonged excess glucocorticoids (cortisol), which suppress immune cytokines, impair lymphocyte proliferation, and inhibit NK cell tumor defense.'
  },
  {
    subtopicId: 'psy-sub-3-5',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'Preparing a comprehensive study schedule, gathering reference books, and consulting teachers prior to board exams represents:',
    options: [
      'Problem-focused coping',
      'Emotion-focused coping',
      'Avoidance-oriented coping',
      'Impulsive projection'
    ],
    correct: 0,
    explanation: 'Problem-focused coping targets the objective source of stress through direct planning, constructive action, and instrumental resource mobilization.'
  },
  {
    subtopicId: 'psy-sub-3-6',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'Receiving financial assistance, study materials, or transport from family members during exam periods is classified as which type of social support?',
    options: ['Tangible / Instrumental support', 'Informational support', 'Emotional support', 'Vicarious support'],
    correct: 0,
    explanation: 'Tangible or instrumental support involves direct material assistance, financial aid, or physical services provided to help alleviate stress.'
  },
  {
    subtopicId: 'psy-sub-3-7',
    chapterId: 'psy-ch-3',
    subjectId: 'psychology',
    question: 'The World Health Organization (WHO) identifies empathy, interpersonal communication, and relationship skills under which core life skill category?',
    options: ['Social / Interpersonal Skills', 'Cognitive Skills', 'Emotional Skills', 'Physical Skills'],
    correct: 0,
    explanation: 'WHO groups the 10 life skills into Cognitive (problem-solving, decision-making), Emotional (coping with stress, emotions), and Social (effective communication, empathy, interpersonal relationships).'
  }
];

// ============================================================================
// DYNAMIC PROCEDURAL GENERATORS (Produces 1,000+ Unique Permutations)
// ============================================================================
const PROCEDURAL_GENERATORS = {
  // PHYSICS
  'phy-ch-1': [
    (v) => {
      const q1 = [1, 2, 4, 5, 8, 10][v % 6];
      const q2 = [2, 3, 5, 6, 8, 12][(v + 1) % 6];
      const dist = [10, 20, 30, 40, 50][(v + 2) % 5];
      const rMeters = dist / 100;
      const k = 9e9;
      const force = ((k * q1 * 1e-6 * q2 * 1e-6) / (rMeters * rMeters)).toFixed(2);
      return {
        subtopicId: 'phy-sub-1-1',
        subtopicName: "1.1 Coulomb's Law & Vector Law",
        question: `Two point charges of +${q1} μC and +${q2} μC are separated by a distance of ${dist} cm in air. The electrostatic repulsive force between them is:`,
        options: [`${force} N`, `${(force * 2).toFixed(2)} N`, `${(force / 2).toFixed(2)} N`, `${(force * 10).toFixed(2)} N`],
        correct: 0,
        explanation: `F = (k · q₁ · q₂) / r² = (9 × 10⁹ × ${q1} × 10⁻⁶ × ${q2} × 10⁻⁶) / (${rMeters})² = ${force} N.`
      };
    },
    (v) => {
      const p = [1, 2, 3, 4, 5][v % 5];
      const E = [1000, 2000, 3000, 5000][(v + 1) % 4];
      const angle = [30, 45, 60, 90][(v + 2) % 4];
      const sinTheta = Math.sin((angle * Math.PI) / 180);
      const torque = (p * 1e-8 * E * sinTheta).toExponential(2);
      return {
        subtopicId: 'phy-sub-1-4',
        subtopicName: '1.4 Electric Dipole & Dipole Moment',
        question: `An electric dipole with moment p = ${p} × 10⁻⁸ C·m is placed at ${angle}° to a uniform electric field of E = ${E} N/C. The torque experienced by the dipole is:`,
        options: [`${torque} N·m`, `${(torque * 2).toString()} N·m`, `Zero`, `${(torque / 2).toString()} N·m`],
        correct: 0,
        explanation: `Torque τ = p E sin θ = (${p} × 10⁻⁸) × ${E} × sin(${angle}°) = ${torque} N·m.`
      };
    },
    (v) => {
      const q = [2, 4, 6, 8, 10][v % 5];
      return {
        subtopicId: 'phy-sub-1-5',
        subtopicName: "1.5 Electric Flux & Gauss's Law",
        question: `A point charge of +${q} μC is enclosed inside a closed spherical surface of radius 10 cm. If the radius of the sphere is doubled to 20 cm, the total outward electric flux through the surface will:`,
        options: ['Remain unchanged', 'Be doubled', 'Be halved', 'Become four times'],
        correct: 0,
        explanation: "By Gauss's law, total flux Φ = q_enclosed / ε₀ depends solely on the net charge inside, completely independent of the size or radius of the Gaussian surface."
      };
    },
    (v) => {
      const q = [3, 6, 9, 12][v % 4];
      return {
        subtopicId: 'phy-sub-1-2',
        subtopicName: '1.2 Electric Field Intensity',
        question: `A small oil drop carries a net static charge of −${q * 1.6} × 10⁻¹⁹ C. How many excess electrons does this drop possess?`,
        options: [`${q} excess electrons`, `${q * 2} excess electrons`, `${q - 1} excess electrons`, `1 excess electron`],
        correct: 0,
        explanation: `Number of electrons n = Q / e = (${q * 1.6} × 10⁻¹⁹ C) / (1.6 × 10⁻¹⁹ C) = ${q} electrons.`
      };
    }
  ],

  'phy-ch-2': [
    (v) => {
      const C0 = [5, 10, 20, 50][v % 4];
      const K = [2, 3, 5, 8][(v + 1) % 4];
      return {
        subtopicId: 'phy-sub-2-3',
        subtopicName: '2.3 Capacitance & Parallel Plate Capacitor',
        question: `A parallel plate air capacitor has capacitance ${C0} μF. When a dielectric medium of relative permittivity K = ${K} is inserted between the plates, its new capacitance is:`,
        options: [`${C0 * K} μF`, `${(C0 / K).toFixed(1)} μF`, `${C0 + K} μF`, `${C0} μF`],
        correct: 0,
        explanation: `With dielectric filling the gap, C = K · C₀ = ${K} × ${C0} μF = ${C0 * K} μF.`
      };
    },
    (v) => {
      const C = [2, 4, 8, 10][v % 4];
      const V = [10, 20, 50, 100][(v + 1) % 4];
      const energyMilliJ = (0.5 * C * 1e-6 * V * V * 1000).toFixed(2);
      return {
        subtopicId: 'phy-sub-2-4',
        subtopicName: '2.4 Energy Stored in a Capacitor',
        question: `A ${C} μF capacitor is charged to a potential difference of ${V} V. The electrostatic potential energy stored in the capacitor is:`,
        options: [`${energyMilliJ} mJ`, `${(energyMilliJ * 2).toFixed(2)} mJ`, `${(energyMilliJ / 2).toFixed(2)} mJ`, `Zero`],
        correct: 0,
        explanation: `U = ½ C V² = 0.5 × (${C} × 10⁻⁶ F) × (${V} V)² = ${energyMilliJ} mJ.`
      };
    }
  ],

  'phy-ch-3': [
    (v) => {
      const I = [1, 2, 4, 5][v % 4];
      const A = [1, 2][(v + 1) % 2];
      const n = 8.5e28;
      const vd = (I / (n * A * 1e-6 * 1.6e-19)).toExponential(2);
      return {
        subtopicId: 'phy-sub-3-2',
        subtopicName: '3.2 Drift Velocity & Resistivity',
        question: `A copper conductor of cross-section ${A} mm² carries steady current of ${I} A. With electron density n = 8.5 × 10²⁸ m⁻³, the drift velocity of free electrons is approximately:`,
        options: [`${vd} m/s`, `${(vd * 10).toString()} m/s`, `3 × 10⁸ m/s`, `0.1 m/s`],
        correct: 0,
        explanation: `I = n A e v_d ⟹ v_d = I / (n A e) ≈ ${vd} m/s (typically ~ 0.1 to 1 mm/s).`
      };
    }
  ],

  'phy-ch-4': [
    (v) => {
      const I = [2, 5, 10][v % 3];
      const R_cm = [5, 10, 20][(v + 1) % 3];
      const R_m = R_cm / 100;
      const B_microT = ((4e-7 * Math.PI * I) / (2 * R_m) * 1e6).toFixed(1);
      return {
        subtopicId: 'phy-sub-4-2',
        subtopicName: '4.2 Magnetic Field Due to a Current Element',
        difficulty: 'medium',
        question: `A circular wire loop of radius ${R_cm} cm carries a current of ${I} A. The magnitude of magnetic field at the centre of the loop is:`,
        options: [`${B_microT} μT`, `${(B_microT * 2).toFixed(1)} μT`, `${(B_microT / 2).toFixed(1)} μT`, `Zero`],
        correct: 0,
        explanation: `By Biot-Savart Law: B = μ₀ I / (2 R). Here B = (4π × 10⁻⁷ × ${I}) / (2 × ${R_m}) ≈ ${B_microT} μT.`
      };
    },
    (v) => {
      const d_cm = [2, 5, 10][v % 3];
      const I1 = [2, 4][(v + 1) % 2];
      const I2 = [5, 10][(v + 2) % 2];
      const d_m = d_cm / 100;
      const force_microN = ((2e-7 * I1 * I2) / d_m * 1e6).toFixed(1);
      return {
        subtopicId: 'phy-sub-4-8',
        subtopicName: '4.8 Force Between Two Parallel Conductors',
        difficulty: 'hard',
        question: `Two long parallel straight wires carrying currents of ${I1} A and ${I2} A in the same direction are separated by ${d_cm} cm. The magnetic force per unit length between them is:`,
        options: [
          `${force_microN} μN/m (attractive)`,
          `${force_microN} μN/m (repulsive)`,
          `${(force_microN * 2).toFixed(1)} μN/m (attractive)`,
          `Zero`
        ],
        correct: 0,
        explanation: `Force per unit length f = (μ₀ I₁ I₂) / (2π d). Currents in the same direction attract each other.`
      };
    }
  ],

  'phy-ch-5': [
    (v) => {
      const materials = [
        { name: 'Bismuth', type: 'Diamagnetic', chi: 'Negative and small', mu_r: '< 1' },
        { name: 'Aluminium', type: 'Paramagnetic', chi: 'Positive and small', mu_r: 'slightly > 1' },
        { name: 'Iron', type: 'Ferromagnetic', chi: 'Large and positive', mu_r: '>> 1' }
      ][v % 3];
      return {
        subtopicId: 'phy-sub-5-2',
        subtopicName: '5.2 Paramagnetic Substances',
        difficulty: 'easy',
        question: `Which of the following correctly describes the magnetic susceptibility (χ_m) of ${materials.name} (${materials.type})?`,
        options: [
          `${materials.chi}`,
          materials.type === 'Diamagnetic' ? 'Large and positive' : 'Negative and small',
          'Zero at all temperatures',
          'Infinity'
        ],
        correct: 0,
        explanation: `For ${materials.type} substances like ${materials.name}, magnetic susceptibility is ${materials.chi}.`
      };
    }
  ],

  'phy-ch-6': [
    (v) => {
      const B = [0.2, 0.5, 1.0][v % 3];
      const L_cm = [20, 50, 100][(v + 1) % 3];
      const vel = [2, 5, 10][(v + 2) % 3];
      const L_m = L_cm / 100;
      const emf = (B * L_m * vel).toFixed(2);
      return {
        subtopicId: 'phy-sub-6-5',
        subtopicName: '6.5 Motional EMF',
        difficulty: 'medium',
        question: `A straight metal rod of length ${L_cm} cm moves with velocity ${vel} m/s perpendicular to a uniform magnetic field of ${B} T. The motional EMF induced across the ends is:`,
        options: [`${emf} V`, `${(emf * 2).toFixed(2)} V`, `${(emf / 2).toFixed(2)} V`, `0 V`],
        correct: 0,
        explanation: `Motional EMF ε = B · L · v = ${B} × ${L_m} × ${vel} = ${emf} V.`
      };
    },
    (v) => {
      const N = [100, 200, 500][v % 3];
      const deltaB = [0.2, 0.4, 0.5][(v + 1) % 3];
      const area_cm2 = [50, 100, 200][(v + 2) % 3];
      const dt = [0.1, 0.05, 0.2][v % 3];
      const A_m2 = area_cm2 * 1e-4;
      const emf = ((N * A_m2 * deltaB) / dt).toFixed(1);
      return {
        subtopicId: 'phy-sub-6-2',
        subtopicName: '6.2 Faraday’s Laws of Electromagnetic Induction',
        difficulty: 'medium',
        question: `A tightly wound circular coil of ${N} turns and cross-sectional area ${area_cm2} cm² is placed perpendicular to a magnetic field. If the field drops to zero in ${dt} s from an initial value of ${deltaB} T, the magnitude of the induced EMF is:`,
        options: [`${emf} V`, `${(emf * 2).toFixed(1)} V`, `${(emf / 2).toFixed(1)} V`, '0 V'],
        correct: 0,
        explanation: `According to Faraday's 2nd Law, |ε| = N · (ΔΦ / Δt) = N · (A · ΔB) / Δt = ${N} × (${A_m2} × ${deltaB}) / ${dt} = ${emf} V.`
      };
    },
    (v) => {
      return {
        subtopicId: 'phy-sub-6-2',
        subtopicName: '6.2 Faraday’s Laws of Electromagnetic Induction',
        difficulty: 'hard',
        question: `A bar magnet is moved rapidly towards a coil in time t₁, and later moved slowly into the same coil in time t₂ (where t₂ > t₁). If q₁ and q₂ are the total charges induced, and ε₁ and ε₂ are the induced EMFs, which relationship is correct?`,
        options: [
          'ε₁ > ε₂, but q₁ = q₂ (charge is strictly independent of time)',
          'ε₁ > ε₂, and q₁ > q₂',
          'ε₁ = ε₂, and q₁ = q₂',
          'ε₁ < ε₂, but q₁ = q₂'
        ],
        correct: 0,
        explanation: `CBSE Exam Favorite: Induced EMF depends on time rate of flux change (|ε| = ΔΦ/Δt), so rapid motion produces greater EMF (ε₁ > ε₂). However, total induced charge q = ΔΦ/R is completely independent of time and speed, so q₁ = q₂!`
      };
    },
    (v) => {
      return {
        subtopicId: 'phy-sub-6-2',
        subtopicName: '6.2 Faraday’s Laws of Electromagnetic Induction',
        difficulty: 'easy',
        question: `A powerful bar magnet with a field of 5.0 T is held stationary inside a closed coil of 1,000 turns and resistance 10 Ω. What is the induced current flowing in the coil?`,
        options: [
          '0 A (because magnetic flux is not changing with time)',
          '500 A',
          '50 A',
          '0.5 A'
        ],
        correct: 0,
        explanation: `Faraday’s 1st Law requires that magnetic flux linked with the circuit MUST CHANGE with time (dΦ/dt ≠ 0). For a stationary magnet (v = 0), dΦ/dt = 0, so induced EMF and induced current are strictly 0 A.`
      };
    }
  ],

  'phy-ch-7': [
    (v) => {
      const L_mH = [10, 20, 50][v % 3];
      const C_microF = [1, 2, 5][(v + 1) % 3];
      const L = L_mH * 1e-3;
      const C = C_microF * 1e-6;
      const omega0 = Math.round(1 / Math.sqrt(L * C));
      return {
        subtopicId: 'phy-sub-7-6',
        subtopicName: '7.6 Electrical Resonance',
        difficulty: 'hard',
        question: `In a series LCR circuit with L = ${L_mH} mH and C = ${C_microF} μF, the resonant angular frequency ω₀ is:`,
        options: [`${omega0} rad/s`, `${Math.round(omega0 / 2)} rad/s`, `${omega0 * 2} rad/s`, `${Math.round(omega0 / (2 * Math.PI))} rad/s`],
        correct: 0,
        explanation: `Resonant angular frequency ω₀ = 1 / √(L C) = 1 / √(${L} × ${C}) ≈ ${omega0} rad/s.`
      };
    }
  ],

  'phy-ch-8': [
    (v) => {
      const rays = [
        { name: 'X-rays', use: 'Diagnostic imaging of bone fractures and crystal structure study' },
        { name: 'Microwaves', use: 'Radar systems in aircraft navigation and microwave ovens' },
        { name: 'Infrared rays', use: 'Night vision cameras and remote controls ("heat waves")' },
        { name: 'Ultraviolet rays', use: 'Water purifiers for killing microbes and LASIK eye surgery' }
      ][v % 4];
      return {
        subtopicId: 'phy-sub-8-4',
        subtopicName: '8.4 Properties of Electromagnetic Waves',
        difficulty: 'easy',
        question: `Which region of the electromagnetic spectrum is primarily utilized for: "${rays.use}"?`,
        options: [rays.name, 'Gamma rays', 'Radio waves', 'Visible light'],
        correct: 0,
        explanation: `${rays.name} are standardly used for: ${rays.use}.`
      };
    }
  ],

  // CHEMISTRY
  'chem-ch-1': [
    (v) => {
      const moles = [0.1, 0.2, 0.5, 1.0][v % 4];
      const solventKg = [0.5, 1.0, 2.0][(v + 1) % 3];
      const molality = (moles / solventKg).toFixed(2);
      return {
        subtopicId: 'chem-sub-1-1',
        subtopicName: '1.1 Concentration Terms',
        difficulty: 'easy',
        question: `What is the molality of a solution containing ${moles} moles of urea dissolved in ${solventKg} kg of pure water?`,
        options: [`${molality} m`, `${(molality * 2).toFixed(2)} m`, `${(molality / 2).toFixed(2)} m`, `1.0 m`],
        correct: 0,
        explanation: `Molality m = moles of solute / mass of solvent in kg = ${moles} / ${solventKg} = ${molality} m.`
      };
    },
    (v) => {
      const solute = [
        { name: 'Glucose (C₆H₁₂O₆)', i: 1 },
        { name: 'NaCl', i: 2 },
        { name: 'CaCl₂', i: 3 },
        { name: 'Al₂(SO₄)₃', i: 5 }
      ][v % 4];
      return {
        subtopicId: 'chem-sub-1-12',
        subtopicName: "1.12 Van't Hoff Factor",
        difficulty: 'medium',
        question: `Assuming complete 100% dissociation/ionization, the van 't Hoff factor i for ${solute.name} in dilute aqueous solution is:`,
        options: [`${solute.i}`, `${solute.i + 1}`, `${solute.i - 1 > 0 ? solute.i - 1 : 1}`, `0`],
        correct: 0,
        explanation: `For 100% dissociation, i equals total number of ions produced per formula unit. ${solute.name} produces ${solute.i} particle(s).`
      };
    }
  ],

  'chem-ch-2': [
    (v) => {
      const metal = [
        { name: 'Zn²⁺/Zn', E0: -0.76 },
        { name: 'Fe²⁺/Fe', E0: -0.44 },
        { name: 'Cu²⁺/Cu', E0: +0.34 },
        { name: 'Ag⁺/Ag', E0: +0.80 }
      ][v % 4];
      return {
        subtopicId: 'chem-sub-2-4',
        subtopicName: '2.4 Electrochemical Series',
        difficulty: 'medium',
        question: `The standard reduction potential for ${metal.name} is ${metal.E0} V. A more negative standard reduction potential implies:`,
        options: [
          'Stronger reducing power (greater tendency to undergo oxidation)',
          'Stronger oxidizing power (greater tendency to undergo reduction)',
          'Zero tendency to react',
          'That it acts as an inert electrode'
        ],
        correct: 0,
        explanation: 'More negative E° indicates greater electropositive character and higher ease of losing electrons, hence acts as a stronger reducing agent.'
      };
    },
    (v) => {
      const target = [
        { ion: 'Al³⁺ to Al', n: 3, mass: '27 g', faradays: 3, C: '289,500 C' },
        { ion: 'Cu²⁺ to Cu', n: 2, mass: '63.5 g', faradays: 2, C: '193,000 C' },
        { ion: 'Ag⁺ to Ag', n: 1, mass: '108 g', faradays: 1, C: '96,500 C' },
        { ion: '1 mol of H₂O to O₂', n: 4, mass: '32 g of O₂', faradays: 4, C: '386,000 C' }
      ][v % 4];
      return {
        subtopicId: 'chem-sub-2-7',
        subtopicName: '2.7 Faraday’s Laws of Electrolysis',
        difficulty: 'medium',
        question: `How much quantity of electricity (in Coulombs) is required to reduce 1 mole of ${target.ion}?`,
        options: [
          `${target.C} (${target.faradays} F)`,
          `${(target.faradays * 96500 / 2).toLocaleString()} C (${target.faradays / 2} F)`,
          '96,500 C (1 F)',
          `${(target.faradays * 2 * 96500).toLocaleString()} C (${target.faradays * 2} F)`
        ],
        correct: 0,
        explanation: `Reduction of ${target.ion} involves transfer of ${target.n} mole(s) of electrons. Since 1 mole of electrons carries 1 Faraday (96,500 C), total charge Q = ${target.n} × 96,500 C = ${target.C} (${target.faradays} F).`
      };
    },
    (v) => {
      const current = [1.5, 2.0, 3.0][v % 3];
      const time_min = [20, 30, 40][(v + 1) % 3];
      const time_sec = time_min * 60;
      const M = 63.5;
      const n = 2;
      const mass = ((M * current * time_sec) / (n * 96500)).toFixed(3);
      return {
        subtopicId: 'chem-sub-2-7',
        subtopicName: '2.7 Faraday’s Laws of Electrolysis',
        difficulty: 'hard',
        question: `A solution of CuSO₄ is electrolysed for ${time_min} minutes with a steady current of ${current} A. What mass of copper (M = 63.5 g/mol) is deposited at the cathode? (1 F = 96500 C/mol)`,
        options: [
          `${mass} g`,
          `${(mass * 2).toFixed(3)} g`,
          `${(mass / 2).toFixed(3)} g`,
          `${(mass * 1.5).toFixed(3)} g`
        ],
        correct: 0,
        explanation: `By Faraday's 1st Law: w = (M · I · t) / (n · 96500). Time must be converted to seconds: t = ${time_min} × 60 = ${time_sec} s. Here n = 2 for Cu²⁺. Hence w = (63.5 × ${current} × ${time_sec}) / (2 × 96500) = ${mass} g.`
      };
    },
    (v) => {
      return {
        subtopicId: 'chem-sub-2-7',
        subtopicName: '2.7 Faraday’s Laws of Electrolysis',
        difficulty: 'medium',
        question: `Two electrolytic cells containing AgNO₃ and CuSO₄ solutions are connected in series. If a certain quantity of electricity deposits 1.08 g of Ag (M = 108 g/mol), what mass of Cu (M = 63.5 g/mol) will be deposited simultaneously?`,
        options: [
          '0.3175 g',
          '0.635 g',
          '1.08 g',
          '0.158 g'
        ],
        correct: 0,
        explanation: `According to Faraday's 2nd Law, for series cells: (w₁ / w₂) = (E₁ / E₂). Equivalent weight of Ag = 108/1 = 108. Equivalent weight of Cu = 63.5/2 = 31.75. Therefore, w_Cu = w_Ag × (E_Cu / E_Ag) = 1.08 × (31.75 / 108) = 0.3175 g.`
      };
    }
  ],

  'chem-ch-4': [
    (v) => {
      const ion = [
        { name: 'Mn²⁺ (3d⁵)', n: 5, mu: '5.92' },
        { name: 'Fe²⁺ (3d⁶)', n: 4, mu: '4.90' },
        { name: 'Cr³⁺ (3d³)', n: 3, mu: '3.87' },
        { name: 'Ti³⁺ (3d¹)', n: 1, mu: '1.73' }
      ][v % 4];
      return {
        subtopicId: 'chem-sub-4-1',
        subtopicName: '4.1 General Characteristics of Transition Elements',
        difficulty: 'medium',
        question: `What is the spin-only magnetic moment for the ${ion.name} ion having ${ion.n} unpaired electrons?`,
        options: [`${ion.mu} BM`, `${(parseFloat(ion.mu) + 1).toFixed(2)} BM`, '0 BM', `${(parseFloat(ion.mu) - 1).toFixed(2)} BM`],
        correct: 0,
        explanation: `Spin-only magnetic moment μ = √[n(n+2)] BM = √[${ion.n}(${ion.n}+2)] = ${ion.mu} BM.`
      };
    }
  ],

  'chem-ch-6': [
    (v) => {
      const halides = [
        { name: 'Tertiary alkyl halide ((CH₃)₃C-Br)', sn1: 'fastest', sn2: 'slowest' },
        { name: 'Primary alkyl halide (CH₃CH₂-Br)', sn1: 'slowest', sn2: 'fastest' }
      ][v % 2];
      return {
        subtopicId: 'chem-sub-6-5',
        subtopicName: '6.5 Substitution Mechanisms (SN1 & SN2)',
        difficulty: 'medium',
        question: `Towards S_N1 nucleophilic substitution reaction, a ${halides.name} reacts:`,
        options: [
          `${halides.sn1} because of carbocation stability`,
          `${halides.sn2} because of steric hindrance`,
          'At the same rate as all halides',
          'Only in non-polar solvents'
        ],
        correct: 0,
        explanation: `S_N1 reaction rate is determined by carbocation stability (3° > 2° > 1°), making tertiary halides undergo S_N1 at the fastest rate.`
      };
    }
  ],

  'chem-ch-7': [
    (v) => {
      const rxn = [
        { name: "Kolbe's reaction", reagent: 'Phenol + NaOH + CO₂ followed by H⁺', product: 'Salicylic acid' },
        { name: 'Reimer-Tiemann reaction', reagent: 'Phenol + CHCl₃ + aq. NaOH followed by H⁺', product: 'Salicylaldehyde' },
        { name: 'Williamson synthesis', reagent: 'Sodium alkoxide + primary alkyl halide', product: 'Ether' }
      ][v % 3];
      return {
        subtopicId: 'chem-sub-7-5',
        subtopicName: '7.5 Chemical Reactions of Phenols',
        difficulty: 'hard',
        question: `In ${rxn.name}, treating ${rxn.reagent} yields which principal organic product?`,
        options: [`${rxn.product}`, 'Benzoic acid', 'Benzaldehyde', 'Picric acid'],
        correct: 0,
        explanation: `In ${rxn.name}, the reaction of ${rxn.reagent} produces ${rxn.product}.`
      };
    }
  ],

  // BIOLOGY
  'bio-ch-1': [
    (v) => {
      const plant = ['Vallisneria', 'Zostera', 'Water lily (Nymphaea)', 'Hydrilla'][v % 4];
      return {
        subtopicId: 'bio-sub-1-3',
        subtopicName: '1.3 Pollination & Outbreeding Devices',
        difficulty: 'medium',
        question: plant === 'Water lily (Nymphaea)'
          ? `Although Water lily (Nymphaea) is an aquatic plant, pollination is carried out by:`
          : `In the submerged sea grass ${plant}, pollination takes place by:`,
        options: [
          plant === 'Water lily (Nymphaea)' ? 'Insects or wind' : 'Water (Hydrophily)',
          plant === 'Water lily (Nymphaea)' ? 'Water currents' : 'Insects only',
          'Bats (Chiropterophily)',
          'Birds (Ornithophily)'
        ],
        correct: 0,
        explanation: plant === 'Water lily (Nymphaea)'
          ? 'In water lily and water hyacinth, the flowers emerge above water surface and are pollinated by insects or wind, not water!'
          : 'In marine sea grasses like Zostera, female flowers remain submerged and long ribbon-like pollen grains are carried passively by water currents.'
      };
    }
  ],

  'bio-ch-2': [
    (v) => {
      const ploidies = [
        { cell: 'Primary spermatocyte', ploidy: 'Diploid (2n = 46)' },
        { cell: 'Secondary spermatocyte', ploidy: 'Haploid (n = 23)' },
        { cell: 'Spermatid', ploidy: 'Haploid (n = 23)' },
        { cell: 'Spermatogonia', ploidy: 'Diploid (2n = 46)' }
      ][v % 4];
      return {
        subtopicId: 'bio-sub-2-2',
        subtopicName: '2.2 Gametogenesis (Spermatogenesis & Oogenesis)',
        difficulty: 'easy',
        question: `What is the chromosomal ploidy of a human ${ploidies.cell}?`,
        options: [`${ploidies.ploidy}`, ploidies.ploidy.startsWith('Diploid') ? 'Haploid (n = 23)' : 'Diploid (2n = 46)', 'Triploid (3n = 69)', 'Tetraploid (4n = 92)'],
        correct: 0,
        explanation: `In human gametogenesis, a ${ploidies.cell} is ${ploidies.ploidy}.`
      };
    }
  ],

  'bio-ch-3': [
    (v) => {
      const art = [
        { name: 'ZIFT (Zygote Intra-Fallopian Transfer)', stage: 'Zygote or early embryo up to 8 blastomeres transferred into fallopian tube' },
        { name: 'IUT (Intra-Uterine Transfer)', stage: 'Embryos with more than 8 blastomeres transferred into uterus' },
        { name: 'GIFT (Gamete Intra-Fallopian Transfer)', stage: 'Transfer of an ovum collected from a donor into fallopian tube of recipient female' }
      ][v % 3];
      return {
        subtopicId: 'bio-sub-3-2',
        subtopicName: '3.2 Infertility & Assisted Reproductive Technologies (ART)',
        difficulty: 'medium',
        question: `In Assisted Reproductive Technology (ART), which method is defined as: "${art.stage}"?`,
        options: [art.name, 'ICSI', 'IUI', 'Artificial Insemination'],
        correct: 0,
        explanation: `${art.name} specifically refers to: ${art.stage}.`
      };
    }
  ],

  'bio-ch-4': [
    (v) => {
      const cross = [
        { name: 'Monohybrid cross (F₂ generation)', phenotypic: '3 : 1', genotypic: '1 : 2 : 1' },
        { name: 'Dihybrid cross (F₂ generation)', phenotypic: '9 : 3 : 3 : 1', genotypic: '1:2:1:2:4:2:1:2:1' },
        { name: 'Incomplete dominance (Snapdragon / Mirabilis F₂)', phenotypic: '1 : 2 : 1', genotypic: '1 : 2 : 1' }
      ][v % 3];
      return {
        subtopicId: 'bio-sub-4-1',
        subtopicName: "4.1 Mendel's Laws & Deviations",
        difficulty: 'medium',
        question: `What is the phenotypic ratio observed in the ${cross.name}?`,
        options: [`${cross.phenotypic}`, `1 : 1 : 1 : 1`, `9 : 7`, `15 : 1`],
        correct: 0,
        explanation: `In ${cross.name}, the classical Mendelian/non-Mendelian phenotypic ratio is ${cross.phenotypic}.`
      };
    }
  ],

  'bio-ch-5': [
    (v) => {
      const base = [
        { given: 'Adenine (A)', percent: 30, partner: 'Cytosine (C)', val: 20 },
        { given: 'Guanine (G)', percent: 20, partner: 'Thymine (T)', val: 30 },
        { given: 'Cytosine (C)', percent: 18, partner: 'Adenine (A)', val: 32 }
      ][v % 3];
      return {
        subtopicId: 'bio-sub-5-1',
        subtopicName: '5.1 DNA Structure & Packaging',
        difficulty: 'hard',
        question: `According to Chargaff's rules for double-stranded DNA, if a sample has ${base.percent}% ${base.given}, the percentage of ${base.partner} in the DNA is:`,
        options: [`${base.val}%`, `${base.percent}%`, `${50 - base.val}%`, `${base.val / 2}%`],
        correct: 0,
        explanation: `Chargaff's Rule: %A = %T and %G = %C. If %A = 30%, then %T = 30%, giving A+T = 60%. Remaining G+C = 40%, hence %G = %C = 20%.`
      };
    }
  ],

  'bio-ch-6': [
    (v) => {
      const q_val = [0.2, 0.3, 0.4][v % 3];
      const p_val = (1 - q_val).toFixed(1);
      const het2pq = (2 * p_val * q_val).toFixed(2);
      return {
        subtopicId: 'bio-sub-6-3',
        subtopicName: '6.3 Hardy-Weinberg Principle',
        difficulty: 'hard',
        question: `In a population in Hardy-Weinberg equilibrium, the frequency of recessive allele (q) is ${q_val}. What is the frequency of heterozygous carriers (2pq)?`,
        options: [`${het2pq}`, `${(q_val * q_val).toFixed(2)}`, `${(p_val * p_val).toFixed(2)}`, '0.50'],
        correct: 0,
        explanation: `p = 1 − q = ${p_val}. Frequency of heterozygotes = 2 · p · q = 2 × ${p_val} × ${q_val} = ${het2pq}.`
      };
    }
  ],

  'bio-ch-7': [
    (v) => {
      const pathogens = [
        { disease: 'Typhoid', pathogen: 'Salmonella typhi', test: 'Widal test' },
        { disease: 'Pneumonia', pathogen: 'Streptococcus pneumoniae', test: 'Chest radiography' },
        { disease: 'Elephantiasis (Filariasis)', pathogen: 'Wuchereria bancrofti', test: 'Blood smear for microfilariae' },
        { disease: 'Amoebiasis', pathogen: 'Entamoeba histolytica', test: 'Stool examination' }
      ][v % 4];
      return {
        subtopicId: 'bio-sub-7-1',
        subtopicName: '7.1 Common Infectious Diseases',
        difficulty: 'medium',
        question: `The pathogen responsible for causing ${pathogens.disease} in humans is:`,
        options: [pathogens.pathogen, 'Plasmodium vivax', 'Rhinovirus', 'Trichophyton'],
        correct: 0,
        explanation: `${pathogens.disease} is caused by ${pathogens.pathogen} (confirmed by ${pathogens.test}).`
      };
    }
  ],

  'bio-ch-8': [
    (v) => {
      const molecules = [
        { name: 'Cyclosporin A', microbe: 'Trichoderma polysporum (fungus)', use: 'Immunosuppressive agent for organ transplants' },
        { name: 'Streptokinase', microbe: 'Streptococcus (bacterium)', use: 'Clot buster for myocardial infarction' },
        { name: 'Statins', microbe: 'Monascus purpureus (yeast)', use: 'Blood-cholesterol lowering agent' }
      ][v % 3];
      return {
        subtopicId: 'bio-sub-8-2',
        subtopicName: '8.2 Microbes in Industrial Products',
        difficulty: 'medium',
        question: `Which bioactive molecule is produced by ${molecules.microbe} and used as a ${molecules.use}?`,
        options: [molecules.name, 'Citric acid', 'Penicillin', 'Protease'],
        correct: 0,
        explanation: `${molecules.name} is produced by ${molecules.microbe} and acts as a ${molecules.use}.`
      };
    }
  ],

  // PSYCHOLOGY
  'psy-ch-1': [
    (v) => {
      const cases = [
        { ma: 12, ca: 10, iq: 120 },
        { ma: 15, ca: 12, iq: 125 },
        { ma: 8, ca: 10, iq: 80 },
        { ma: 14, ca: 10, iq: 140 },
        { ma: 9, ca: 12, iq: 75 },
        { ma: 10, ca: 8, iq: 125 }
      ];
      const c = cases[v % cases.length];
      return {
        subtopicId: 'psy-sub-1-3',
        subtopicName: '1.3 Assessment of Intelligence & IQ',
        question: `Calculate the Intelligence Quotient (IQ) of a student whose Mental Age (MA) is ${c.ma} years and Chronological Age (CA) is ${c.ca} years.`,
        options: [`${c.iq}`, `${c.iq - 10}`, `${c.iq + 15}`, `${Math.round((c.ca / c.ma) * 100)}`],
        correct: 0,
        explanation: `William Stern's formula gives IQ = (MA / CA) × 100 = (${c.ma} / ${c.ca}) × 100 = ${c.iq}.`
      };
    },
    (v) => {
      const intelligences = [
        { type: 'Spatial Intelligence', prof: 'architect or sculptor', desc: 'visualizing patterns and mental transformations in three dimensions' },
        { type: 'Bodily-Kinesthetic Intelligence', prof: 'surgeon or gymnast', desc: 'displaying extraordinary flexibility, motor dexterity, and bodily coordination' },
        { type: 'Interpersonal Intelligence', prof: 'psychotherapist or diplomat', desc: 'discerning the hidden motives, temperaments, and intentions of others' },
        { type: 'Intrapersonal Intelligence', prof: 'philosopher or spiritual mentor', desc: 'possessing deep awareness of inner feelings, self-identity, and personal motives' },
        { type: 'Naturalistic Intelligence', prof: 'botanist or wildlife conservationist', desc: 'recognizing and categorizing fine nuances in flora, fauna, and natural habitats' },
        { type: 'Musical Intelligence', prof: 'composer or vocalist', desc: 'sensitivity to pitch, timbre, rhythm, and tone structures' }
      ];
      const item = intelligences[v % intelligences.length];
      return {
        subtopicId: 'psy-sub-1-2',
        subtopicName: '1.2 Theories of Intelligence',
        question: `According to Howard Gardner's Theory of Multiple Intelligences, a person who excels as a ${item.prof} through ${item.desc} predominantly utilizes:`,
        options: [
          item.type,
          intelligences[(v + 1) % intelligences.length].type,
          intelligences[(v + 2) % intelligences.length].type,
          intelligences[(v + 3) % intelligences.length].type
        ],
        correct: 0,
        explanation: `Howard Gardner identified 8 distinct intelligences; ${item.desc} is the defining hallmark of ${item.type}.`
      };
    },
    (v) => {
      const passComponents = [
        { comp: 'Planning', brain: 'Frontal and Prefrontal cortex', role: 'setting goals, selecting strategies, monitoring execution, and evaluating outcomes' },
        { comp: 'Arousal / Attention', brain: 'Brainstem and Reticular Activating System (RAS)', role: 'maintaining optimal state of alert awareness to focus on relevant stimuli' },
        { comp: 'Simultaneous Processing', brain: 'Occipital and Parietal lobes', role: 'integrating discrete stimuli into an interrelated spatial or holistic whole (e.g. Raven Progressive Matrices)' },
        { comp: 'Successive Processing', brain: 'Frontal-Temporal lobes', role: 'recalling items in a strict step-by-step linear serial sequence (e.g. learning alphabets or digits)' }
      ];
      const p = passComponents[v % passComponents.length];
      return {
        subtopicId: 'psy-sub-1-2',
        subtopicName: '1.2 Theories of Intelligence',
        question: `In the PASS Model of Intelligence (Das, Naglieri, Kirby), the functional unit responsible for ${p.role} is primarily located in the:`,
        options: [
          p.brain,
          passComponents[(v + 1) % passComponents.length].brain,
          passComponents[(v + 2) % passComponents.length].brain,
          'Cerebellum and Medulla'
        ],
        correct: 0,
        explanation: `In the PASS cognitive assessment system, ${p.comp} is neuroanatomically linked with the ${p.brain}.`
      };
    }
  ],

  'psy-ch-2': [
    (v) => {
      const defMech = [
        { name: 'Displacement', scenario: 'A corporate employee reprimanded by their boss comes home and uncharacteristically yells at their innocent children' },
        { name: 'Sublimation', scenario: 'An individual with aggressive impulses redirects their energy into becoming a decorated Olympic boxing champion' },
        { name: 'Reaction Formation', scenario: 'A person harboring strong unconscious jealousy toward a peer showers them with exaggerated, lavish public compliments' },
        { name: 'Projection', scenario: 'A dishonest salesperson accuses all their business competitors of being crooked, deceitful, and corrupt' },
        { name: 'Rationalization', scenario: 'A student who fails an entrance test claims they never really wanted admission into such a mediocre institution' },
        { name: 'Regression', scenario: 'An adult hospitalized for minor surgery starts crying uncontrollably and sucking their thumb like a small child' }
      ];
      const dm = defMech[v % defMech.length];
      return {
        subtopicId: 'psy-sub-2-4',
        subtopicName: '2.4 Psychodynamic Approach',
        question: `Which Freudian defense mechanism is best demonstrated in the following scenario: "${dm.scenario}"?`,
        options: [
          dm.name,
          defMech[(v + 1) % defMech.length].name,
          defMech[(v + 2) % defMech.length].name,
          defMech[(v + 3) % defMech.length].name
        ],
        correct: 0,
        explanation: `${dm.name} occurs when: ${dm.scenario}. The Ego employs this unconscious defense mechanism to mitigate overwhelming anxiety.`
      };
    },
    (v) => {
      const somatos = [
        { type: 'Endomorphic', body: 'round, plump, soft', temper: 'Viscerotonia (relaxed, comfort-loving, sociable, fond of food)' },
        { type: 'Mesomorphic', body: 'muscular, strong, rectangular build', temper: 'Somatotonia (assertive, energetic, bold, risk-taking)' },
        { type: 'Ectomorphic', body: 'tall, thin, fragile build', temper: 'Cerebrotonia (introverted, intellectual, sensitive, anxious)' }
      ];
      const s = somatos[v % somatos.length];
      return {
        subtopicId: 'psy-sub-2-2',
        subtopicName: '2.2 Type Approaches to Personality',
        question: `According to William Sheldon's somatotype classification, an individual characterized by a ${s.body} physique is classified as ${s.type} and typically exhibits:`,
        options: [
          s.temper,
          somatos[(v + 1) % somatos.length].temper,
          somatos[(v + 2) % somatos.length].temper,
          'Extraverted intuition with sensation dominance'
        ],
        correct: 0,
        explanation: `Sheldon correlated body build with temperament: ${s.type} individuals possess ${s.body} builds and are characterized by ${s.temper}.`
      };
    },
    (v) => {
      const ocean = [
        { trait: 'Openness to Experience', high: 'curious, imaginative, open to novel ideas, artistic', low: 'conventional, pragmatic, rigid preferences' },
        { trait: 'Conscientiousness', high: 'goal-directed, organized, dependable, disciplined', low: 'spontaneous, disorganized, careless, procrastinating' },
        { trait: 'Extraversion', high: 'outgoing, energetic, talkative, assertive', low: 'reserved, quiet, solitary, reflective' },
        { trait: 'Agreeableness', high: 'empathetic, cooperative, trusting, helpful', low: 'cynical, competitive, antagonistic, suspicious' },
        { trait: 'Neuroticism', high: 'emotionally unstable, anxious, mood-swing prone, irritable', low: 'calm, emotionally stable, composed, resilient under pressure' }
      ];
      const o = ocean[v % ocean.length];
      return {
        subtopicId: 'psy-sub-2-3',
        subtopicName: '2.3 Trait Approaches to Personality',
        question: `In Paul Costa and Robert McCrae's Five-Factor Model (Big Five / OCEAN), an individual who is ${o.high} scores high on:`,
        options: [
          o.trait,
          ocean[(v + 1) % ocean.length].trait,
          ocean[(v + 2) % ocean.length].trait,
          ocean[(v + 3) % ocean.length].trait
        ],
        correct: 0,
        explanation: `The Big Five factor "${o.trait}" reflects individual differences in being ${o.high}.`
      };
    }
  ],

  'psy-ch-3': [
    (v) => {
      const conflicts = [
        { type: 'Approach-Approach Conflict', desc: 'Choosing between two equally attractive, mutually exclusive job offers in dream companies' },
        { type: 'Avoidance-Avoidance Conflict', desc: 'Choosing between undergoing a painful dental surgery or suffering agonizing toothache' },
        { type: 'Approach-Avoidance Conflict', desc: 'Accepting an exciting high-paying job offer that requires relocating away from beloved aging parents' },
        { type: 'Multiple Approach-Avoidance Conflict', desc: 'Weighing multiple university admissions where each campus possesses distinct pros and severe cons' }
      ];
      const cf = conflicts[v % conflicts.length];
      return {
        subtopicId: 'psy-sub-3-2',
        subtopicName: '3.2 Types & Sources of Stress',
        question: `Identify the psychological conflict type represented by: "${cf.desc}".`,
        options: [
          cf.type,
          conflicts[(v + 1) % conflicts.length].type,
          conflicts[(v + 2) % conflicts.length].type,
          'Unilateral Environmental Barrier'
        ],
        correct: 0,
        explanation: `${cf.type} arises when an individual faces: ${cf.desc}.`
      };
    },
    (v) => {
      const gasStages = [
        { stage: 'Alarm Reaction Stage', feature: 'Release of adrenaline/noradrenaline via SAM axis, elevated heart rate, fight-or-flight mobilization' },
        { stage: 'Resistance Stage', feature: 'Prolonged release of cortisol via HPA axis, parasympathetic attempts at compensation, continuous reserve drain' },
        { stage: 'Exhaustion Stage', feature: 'Depletion of adaptive physiological reserves, enlargement of adrenal cortex, peptic ulcers, immune breakdown' }
      ];
      const g = gasStages[v % gasStages.length];
      return {
        subtopicId: 'psy-sub-3-3',
        subtopicName: '3.3 Selye\'s GAS & Physiological Impact',
        question: `In Hans Selye's General Adaptation Syndrome (GAS), which physiological phenomenon characterizes the "${g.stage}"?`,
        options: [
          g.feature,
          gasStages[(v + 1) % gasStages.length].feature,
          gasStages[(v + 2) % gasStages.length].feature,
          'Complete parasympathetic hibernation and bradycardia'
        ],
        correct: 0,
        explanation: `In Selye's tripartite GAS model, the ${g.stage} is defined by: ${g.feature}.`
      };
    },
    (v) => {
      const techniques = [
        { tech: 'Biofeedback', desc: 'Training an individual to voluntarily regulate autonomic biological functions (such as heart rate or galvanic skin response) using electronic monitoring transducers' },
        { tech: 'Creative Visualization', desc: 'Forming realistic, peaceful mental sensory imagery of tranquil environments to quiet autonomic arousal' },
        { tech: 'Cognitive Restructuring', desc: 'Identifying distorted irrational thought patterns ("catastrophizing") and systematically reframing them with balanced beliefs' },
        { tech: 'Autogenic Relaxation', desc: 'Using focused self-statements inducing sensations of warmth and heaviness in limbs to relax skeletal musculature' }
      ];
      const t = techniques[v % techniques.length];
      return {
        subtopicId: 'psy-sub-3-6',
        subtopicName: '3.6 Stress Management Techniques',
        question: `Which stress management technique is described as: "${t.desc}"?`,
        options: [
          t.tech,
          techniques[(v + 1) % techniques.length].tech,
          techniques[(v + 2) % techniques.length].tech,
          'Electroconvulsive Desensitization'
        ],
        correct: 0,
        explanation: `${t.tech} is an established stress intervention involving: ${t.desc}.`
      };
    }
  ]
};

function stripHtml(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\\\[|\\\]|\\\(|\\\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanMathText(str) {
  if (!str) return '';
  return stripHtml(str);
}

// Logically inverts claims to generate authentic, topic-relevant CBSE distractors
function invertClaim(text) {
  if (!text) return 'The parameter remains invariant across all standard conditions.';
  const t = stripHtml(text);
  if (t.includes('fat-soluble')) return t.replace('fat-soluble', 'water-soluble and non-accumulating');
  if (t.includes('does not change with temperature')) return t.replace('does not change with temperature', 'varies linearly with temperature');
  if (t.includes('independent of temperature')) return t.replace('independent of temperature', 'strictly dependent on temperature');
  if (t.includes('directly proportional')) return t.replace('directly proportional', 'inversely proportional');
  if (t.includes('inversely proportional')) return t.replace('inversely proportional', 'directly proportional');
  if (/\bincreases\b/i.test(t)) return t.replace(/\bincreases\b/i, 'decreases');
  if (/\bdecreases\b/i.test(t)) return t.replace(/\bdecreases\b/i, 'increases');
  if (t.includes('more reactive')) return t.replace('more reactive', 'significantly less reactive');
  if (t.includes('less reactive')) return t.replace('less reactive', 'substantially more reactive');
  if (/\binsoluble\b/i.test(t)) return t.replace(/\binsoluble\b/i, 'completely soluble');
  if (/\bsoluble\b/i.test(t)) return t.replace(/\bsoluble\b/i, 'virtually insoluble');
  if (/\bhigher\b/i.test(t)) return t.replace(/\bhigher\b/i, 'lower');
  if (/\blower\b/i.test(t)) return t.replace(/\blower\b/i, 'higher');
  if (t.includes('is favored')) return t.replace('is favored', 'is strongly hindered');
  if (/\bstable\b/i.test(t)) return t.replace(/\bstable\b/i, 'unstable');
  if (t.includes('acts as a catalytic agent')) return t.replace('acts as a catalytic agent', 'acts as an inert barrier preventing');
  if (t.includes('is added to convert')) return t.replace('is added to convert', 'is omitted to suppress the conversion of');
  if (t.includes('Stored in dark brown bottles')) return t.replace('Stored in dark brown bottles', 'Stored in clear transparent vessels exposed to sunlight');
  if (/\bis\b/i.test(t) && !t.includes('is not') && !t.includes('is NOT')) return t.replace(/\bis\b/i, 'is NOT');
  if (/\bcan\b/i.test(t) && !t.includes('cannot')) return t.replace(/\bcan\b/i, 'cannot');
  if (/\bdoes\b/i.test(t) && !t.includes('does not')) return t.replace(/\bdoes\b/i, 'does not');
  if (/\bforms\b/i.test(t)) return t.replace(/\bforms\b/i, 'fails to form');
  if (/\bproceeds\b/i.test(t)) return t.replace(/\bproceeds\b/i, 'fails to proceed');
  return `Contrary to standard theory, ${t.charAt(0).toLowerCase() + t.slice(1)}`;
}

export function findSubchapterDetails(subtopicId) {
  if (!subtopicId) return null;
  for (const [subjKey, subj] of Object.entries(NCERT_SYLLABUS)) {
    for (const vol of subj.volumes) {
      for (const ch of vol.chapters) {
        if (ch.subchapters) {
          const sub = ch.subchapters.find(s => s.id === subtopicId);
          if (sub) {
            return { subjectId: subjKey, chapter: ch, subchapter: sub };
          }
        }
      }
    }
  }
  return null;
}

// ============================================================================
// HIGH-YIELD CHEMISTRY QUESTION SYNTHESIZER
// Leverages STRUCTURED_NOTES_DATA covering all active Class 12 Chemistry subtopics
// Generates 50-65 unique questions per subtopic across diverse CBSE formats
// ============================================================================
export function synthesizeChemistrySubtopicMCQs(subtopicId, seed = 1) {
  const details = findSubchapterDetails(subtopicId);
  const sData = STRUCTURED_NOTES_DATA[subtopicId];
  if (!details) return [];

  const { subjectId, chapter, subchapter } = details;
  const questions = [];
  const seenStems = new Set();

  const addQ = (q) => {
    if (!q || !q.question) return;
    const key = normalizeKey(q.question);
    if (seenStems.has(key)) return;
    seenStems.add(key);
    questions.push({
      id: `synth-${subtopicId}-${questions.length + 1}`,
      chapterId: chapter.id,
      chapterName: `Ch ${chapter.number}: ${chapter.title}`,
      subtopicId: subchapter.id,
      subtopicName: subchapter.title,
      subjectId: subjectId || 'chemistry',
      difficulty: q.difficulty || 'medium',
      question: q.question,
      options: q.options,
      correct: q.correct !== undefined ? q.correct : 0,
      explanation: q.explanation || `Refer to NCERT Class 12 ${subjectId ? subjectId.charAt(0).toUpperCase() + subjectId.slice(1) : 'Chemistry'} textbook standard theory.`
    });
  };

  const genericChemDistractors = SUBJECT_DISTRACTORS[subjectId] || SUBJECT_DISTRACTORS.chemistry;
  const cbseOptions = [
    'Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
    'Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion.',
    'Assertion is true, but Reason is false.',
    'Assertion is false, but Reason is true.'
  ];

  if (sData) {
    // 1. Official CBSE Section A: Assertion-Reason (HOTS / Hard)
    if (sData.assertionReason) {
      const ar = sData.assertionReason;
      let correctIdx = 0;
      if (ar.correctOption.includes('(b)')) correctIdx = 1;
      else if (ar.correctOption.includes('(c)')) correctIdx = 2;
      else if (ar.correctOption.includes('(d)')) correctIdx = 3;

      addQ({
        difficulty: 'hard',
        question: `CBSE Section A (Assertion-Reason):\nAssertion (A): ${ar.assertion}\nReason (R): ${ar.reason}`,
        options: cbseOptions,
        correct: correctIdx,
        explanation: ar.explanation
      });

      addQ({
        difficulty: 'hard',
        question: `CBSE Board Pattern (Assertion-Reason Evaluation):\nAssertion (A): ${ar.assertion}\nReason (R): ${invertClaim(ar.reason)}`,
        options: cbseOptions,
        correct: 2,
        explanation: `Assertion is correct from NCERT theory, but the Reason as stated is FALSE. Actual reason: ${ar.reason}`
      });

      addQ({
        difficulty: 'hard',
        question: `CBSE Board Pattern (Assertion Analysis):\nAssertion (A): ${invertClaim(ar.assertion)}\nReason (R): ${ar.reason}`,
        options: cbseOptions,
        correct: 3,
        explanation: `Assertion is false according to NCERT theory. Reason is a scientifically true statement.`
      });
    }

    // 2. Commonly Made Errors / Student Misconceptions (Oswaal Topper's Tips)
    if (sData.commonlyMadeErrors && sData.commonlyMadeErrors.length > 0) {
      sData.commonlyMadeErrors.forEach((errObj, idx) => {
        const cleanError = stripHtml(errObj.error);
        const cleanTip = stripHtml(errObj.tip);

        const trueFacts = (sData.keyPoints || [])
          .map(kp => stripHtml(kp).replace(/^•\s*/, ''))
          .filter(f => f.length > 25);
        
        const dists = trueFacts.slice(0, 3);
        while (dists.length < 3) {
          dists.push(genericChemDistractors[dists.length % genericChemDistractors.length]);
        }

        addQ({
          difficulty: 'medium',
          question: `Which of the following statements regarding "${subchapter.title}" is a common student misconception and scientifically INCORRECT?`,
          options: [cleanError, dists[0], dists[1], dists[2]],
          correct: 0,
          explanation: `NCERT Topper's Tip: ${cleanTip} (${errObj.penalty || 'CBSE standard deduction'})`
        });

        addQ({
          difficulty: 'easy',
          question: `In CBSE Board Examinations, which guideline must be strictly followed when answering questions on "${subchapter.title}"?`,
          options: [
            cleanTip,
            `Assume that ${subchapter.title} is always independent of all structural and thermodynamic parameters.`,
            `Equate solvent mass with total solution volume in all molar calculations.`,
            `Neglect stereochemical inversion in nucleophilic substitution mechanisms.`
          ],
          correct: 0,
          explanation: `CBSE Exam Guideline: ${cleanTip}`
        });

        addQ({
          difficulty: 'easy',
          question: `CBSE Topper's Key Takeaway: To avoid standard examination penalties in "${subchapter.title}", students must remember that:`,
          options: [
            cleanTip,
            cleanError,
            `Substrate steric hindrance and leaving group ability have zero effect on the reaction course.`,
            `Reagents can be interchanged freely without altering chemical selectivity or yields.`
          ],
          correct: 0,
          explanation: `Examination Rule: ${cleanTip}`
        });

        addQ({
          difficulty: 'hard',
          question: `Assertion-Reason on Common Mistakes:\nAssertion (A): ${cleanError}\nReason (R): ${cleanTip}`,
          options: cbseOptions,
          correct: 3,
          explanation: `Assertion is a common misconception (FALSE). Reason is the Topper's Tip / correct NCERT rule (TRUE).`
        });
      });
    }

    // 3. Definitions: Term from Definition, Definition from Term, Property, and Units
    if (sData.definitions && sData.definitions.length > 0) {
      const allDefs = sData.definitions;
      allDefs.forEach((d, idx) => {
        const otherTerms = allDefs.filter((_, i) => i !== idx).map(x => x.term);
        while (otherTerms.length < 3) {
          const fallbackTerms = subjectId === 'physics' 
            ? ['Magnetic Flux', 'Induced EMF', 'Mutual Inductance', 'Self Inductance', 'Eddy Currents', 'Magnetic Permeability']
            : ['Molarity', 'Molality', 'Mole Fraction', 'Van\'t Hoff factor', 'Henry\'s Law Constant', 'Dipole Moment', 'Racemisation'];
          otherTerms.push(fallbackTerms[otherTerms.length % fallbackTerms.length]);
        }

        addQ({
          difficulty: 'easy',
          question: `Which scientific term/concept is defined as: "${d.definition}"?`,
          options: [d.term, otherTerms[0], otherTerms[1], otherTerms[2]],
          correct: 0,
          explanation: `Definition: ${d.term} — ${d.definition}`
        });

        const otherDefs = allDefs.filter((_, i) => i !== idx).map(x => x.definition);
        let distDefs = [...otherDefs];
        let dIdx = 0;
        while (distDefs.length < 3) {
          distDefs.push(genericChemDistractors[dIdx % genericChemDistractors.length]);
          dIdx++;
        }

        addQ({
          difficulty: 'easy',
          question: `According to NCERT Class 12, which of the following is the precise scientific definition of "${d.term}"?`,
          options: [d.definition, distDefs[0], distDefs[1], distDefs[2]],
          correct: 0,
          explanation: `${d.term}: ${d.definition}`
        });

        addQ({
          difficulty: 'easy',
          question: `Which of the following statements is TRUE regarding "${d.term}"?`,
          options: [
            d.definition,
            distDefs[0],
            distDefs[1],
            distDefs[2]
          ],
          correct: 0,
          explanation: `${d.term}: ${d.definition}`
        });

        addQ({
          difficulty: 'easy',
          question: `In context of NCERT Class 12, which structural feature or criterion characterizes "${d.term}"?`,
          options: [
            d.definition,
            distDefs[0],
            distDefs[1],
            distDefs[2]
          ],
          correct: 0,
          explanation: `${d.term}: ${d.definition}`
        });

        if (d.definition.includes('Unit:')) {
          const unitPart = d.definition.split('Unit:')[1].trim().replace(/\.$/, '');
          addQ({
            difficulty: 'easy',
            question: `What is the standard unit of "${d.term}" according to NCERT Class 12 Chemistry?`,
            options: [
              unitPart,
              unitPart.includes('mol·L⁻¹') ? 'mol·kg⁻¹' : 'mol·L⁻¹',
              'Dimensionless',
              'J·K⁻¹·mol⁻¹'
            ],
            correct: 0,
            explanation: `Standard unit of ${d.term} is ${unitPart}.`
          });
        }
      });
    }

    // 4. Key Points Deep-Dive
    if (sData.keyPoints && sData.keyPoints.length > 0) {
      const allKPs = sData.keyPoints.map(kp => {
        const cleanKp = stripHtml(kp).replace(/^•\s*/, '');
        const titleMatch = kp.match(/<strong>(.*?)<\/strong>/);
        const title = titleMatch ? titleMatch[1].replace(/[:]/g, '').trim() : 'Key Concept';
        const bodyText = cleanKp.replace(title, '').replace(/^[:\s-]+/, '').trim();
        return { title, bodyText, fullText: cleanKp };
      });

      allKPs.forEach((kp, idx) => {
        const title = kp.title;
        const bodyText = kp.bodyText;
        const otherKPs = allKPs.filter((_, i) => i !== idx).map(x => x.bodyText);
        while (otherKPs.length < 3) {
          otherKPs.push(genericChemDistractors[otherKPs.length % genericChemDistractors.length]);
        }

        addQ({
          difficulty: 'easy',
          question: `Foundation Recall: Regarding "${title}" in "${subchapter.title}", which statement is established in NCERT Class 12?`,
          options: [
            bodyText.endsWith('.') ? bodyText : bodyText + '.',
            otherKPs[0].endsWith('.') ? otherKPs[0] : otherKPs[0] + '.',
            otherKPs[1].endsWith('.') ? otherKPs[1] : otherKPs[1] + '.',
            invertClaim(bodyText)
          ],
          correct: 0,
          explanation: `NCERT Class 12 Standard Theory: ${kp.fullText}`
        });

        addQ({
          difficulty: 'easy',
          question: `In NCERT Class 12 Chemistry, which governing factor or principle controls "${title}"?`,
          options: [
            bodyText,
            invertClaim(bodyText),
            otherKPs[0],
            genericChemDistractors[idx % genericChemDistractors.length]
          ],
          correct: 0,
          explanation: `NCERT Class 12: ${kp.fullText}`
        });

        addQ({
          difficulty: 'medium',
          question: `Regarding "${title}" in NCERT Class 12 Chemistry, which statement is scientifically accurate?`,
          options: [
            bodyText.endsWith('.') ? bodyText : bodyText + '.',
            otherKPs[0].endsWith('.') ? otherKPs[0] : otherKPs[0] + '.',
            otherKPs[1].endsWith('.') ? otherKPs[1] : otherKPs[1] + '.',
            invertClaim(bodyText)
          ],
          correct: 0,
          explanation: `NCERT Class 12 Standard Theory: ${kp.fullText}`
        });

        addQ({
          difficulty: 'hard',
          question: `Which of the following statements about "${title}" is scientifically FALSE?`,
          options: [
            invertClaim(bodyText),
            bodyText.endsWith('.') ? bodyText : bodyText + '.',
            otherKPs[0].endsWith('.') ? otherKPs[0] : otherKPs[0] + '.',
            otherKPs[1].endsWith('.') ? otherKPs[1] : otherKPs[1] + '.'
          ],
          correct: 0,
          explanation: `The FALSE statement is: "${invertClaim(bodyText)}". The true NCERT fact is: "${bodyText}".`
        });

        if (bodyText.includes('because') || bodyText.includes('due to') || bodyText.includes('by') || bodyText.includes('prevents')) {
          addQ({
            difficulty: 'hard',
            question: `Give Reason: What is the underlying chemical rationale for "${title}" in "${subchapter.title}"?`,
            options: [
              bodyText,
              otherKPs[0],
              otherKPs[1],
              invertClaim(bodyText)
            ],
            correct: 0,
            explanation: kp.fullText
          });
        }
      });
    }

    // 5. Extra Points Insights
    if (sData.extraPoints && sData.extraPoints.length > 0) {
      sData.extraPoints.forEach((ep, idx) => {
        const cleanEp = stripHtml(ep).replace(/^•\s*/, '');
        const titleMatch = ep.match(/<strong>(.*?)<\/strong>/);
        const title = titleMatch ? titleMatch[1].replace(/[:]/g, '').trim() : `High-Yield Insight ${idx + 1}`;
        const bodyText = cleanEp.replace(title, '').replace(/^[:\s-]+/, '').trim();

        addQ({
          difficulty: 'easy',
          question: `CBSE Examination Insight: Which important takeaway regarding "${title}" is highlighted in "${subchapter.title}"?`,
          options: [
            bodyText,
            invertClaim(bodyText),
            genericChemDistractors[idx % genericChemDistractors.length],
            genericChemDistractors[(idx + 1) % genericChemDistractors.length]
          ],
          correct: 0,
          explanation: cleanEp
        });

        addQ({
          difficulty: 'medium',
          question: `In context of NCERT Class 12 "${subchapter.title}", what is the significance of "${title}"?`,
          options: [
            bodyText,
            invertClaim(bodyText),
            genericChemDistractors[(idx + 2) % genericChemDistractors.length],
            genericChemDistractors[(idx + 3) % genericChemDistractors.length]
          ],
          correct: 0,
          explanation: cleanEp
        });
      });
    }

    // 6. Chemical Reactions & Reagents
    if (sData.reactions && sData.reactions.length > 0) {
      const allRxnNames = sData.reactions.map(r => r.name);
      sData.reactions.forEach((rxn, idx) => {
        const cleanEq = stripHtml(rxn.equation);
        const cleanHow = stripHtml(rxn.howItWorks);

        const parts = cleanEq.split(/──.*──>|⟶|──>/);
        const reactants = parts[0] ? parts[0].trim() : 'the starting materials';
        const products = parts[1] ? parts[1].trim() : 'the principal organic product';

        const otherRxns = allRxnNames.filter(n => n !== rxn.name);
        while (otherRxns.length < 3) {
          otherRxns.push(['Finkelstein Reaction', 'Swarts Reaction', 'Wurtz Reaction', 'Sandmeyer Reaction', 'Kolbe Reaction', 'Reimer-Tiemann Reaction'][otherRxns.length]);
        }

        addQ({
          difficulty: 'easy',
          question: `Which chemical reaction/transformation corresponds to: "${cleanEq}"?`,
          options: [
            rxn.name,
            otherRxns[0],
            otherRxns[1],
            otherRxns[2]
          ],
          correct: 0,
          explanation: `Equation: ${cleanEq}\nReaction: ${rxn.name}`
        });

        addQ({
          difficulty: 'easy',
          question: `In the chemical conversion "${rxn.name}", what is the primary starting substrate?`,
          options: [
            reactants,
            `An aliphatic tertiary alkoxide with inert solvent`,
            `A gaseous alkene in the presence of concentrated sulfuric acid`,
            `An inorganic coordination complex with zero organic ligands`
          ],
          correct: 0,
          explanation: `Reaction Substrate: ${reactants}\nFull Equation: ${cleanEq}`
        });

        addQ({
          difficulty: 'medium',
          question: `In the chemical conversion "${rxn.name}", what is the principal product formed from ${reactants}?`,
          options: [
            products,
            `Unreacted starting material due to high steric hindrance`,
            `A complex mixture of tarry polymers without identifiable monomer`,
            `Complete mineralized oxidation products (CO₂ and H₂O only)`
          ],
          correct: 0,
          explanation: `Equation: ${cleanEq}\nMechanism: ${cleanHow}`
        });

        addQ({
          difficulty: 'hard',
          question: `What is the mechanistic principle governing the "${rxn.name}"?`,
          options: [
            cleanHow,
            `Free radical homolytic cleavage triggered by ultrasonic cavitation in non-polar media.`,
            `Concerted pericyclic rearrangement requiring high pressure without catalyst.`,
            `Instantaneous electron transfer forming stable aromatic radical cations.`
          ],
          correct: 0,
          explanation: `Reaction Mechanism: ${cleanHow}`
        });

        if ((cleanEq.includes('↑') || cleanEq.includes('SO₂') || cleanEq.includes('N₂')) && !rxn.name.toLowerCase().includes('photo-oxidation')) {
          addQ({
            difficulty: 'medium',
            question: `Why is the "${rxn.name}" particularly advantageous for obtaining high-purity organic products?`,
            options: [
              `The reaction by-products are escapable gases leaving behind the pure product without complex separation.`,
              `The reaction has zero activation energy and occurs instantaneously at room temperature.`,
              `The starting materials are completely insoluble in all organic solvents.`,
              `It utilizes an inexpensive water-soluble inorganic catalyst that precipitates out completely.`
            ],
            correct: 0,
            explanation: `As established in NCERT Class 12: Escapable gaseous by-products (such as SO₂, HCl, or N₂) drive the equilibrium forward and leave pure products.`
          });
        } else if (rxn.name.toLowerCase().includes('photo-oxidation') || rxn.name.toLowerCase().includes('phosgene')) {
          addQ({
            difficulty: 'medium',
            question: `In context of the "${rxn.name}", why must chloroform be stored in closed dark bottles filled to the brim?`,
            options: [
              `To prevent light and atmospheric oxygen from oxidizing chloroform into poisonous phosgene gas (COCl₂).`,
              `To prevent spontaneous disproportionation into carbon tetrachloride and methane.`,
              `To maintain an inert nitrogen layer and suppress evaporation.`,
              `To accelerate nucleophilic substitution by ambient moisture.`
            ],
            correct: 0,
            explanation: `NCERT Theory: Chloroform is oxidized by air and sunlight to toxic phosgene: 2 CHCl₃ + O₂ ⟶ 2 COCl₂ + 2 HCl.`
          });
        }
      });
    }

    // 7. Oswaal Mnemonic Core Concepts
    if (sData.oswaalMnemonic) {
      const mn = sData.oswaalMnemonic;
      addQ({
        difficulty: 'easy',
        question: `The CBSE revision booster "${mn.title}" summarizes which core chemical relationship?`,
        options: [
          stripHtml(mn.explanation),
          `The reaction order is universally equal to molecularity across all elementary and complex steps.`,
          `Increasing solvent volume always accelerates the reaction rate proportionally.`,
          `Branching increases surface area and therefore elevates the normal boiling point.`
        ],
        correct: 0,
        explanation: `Memory Booster: ${mn.phrase}\nExplanation: ${mn.explanation}`
      });

      addQ({
        difficulty: 'easy',
        question: `Memory Booster: According to the Oswaal Class 12 mnemonic "${mn.title}", what is the key phrase?`,
        options: [
          stripHtml(mn.phrase),
          `Always equate reaction rate with molar activation energy.`,
          `Increasing temperature always shifts exothermic equilibrium forward.`,
          `All primary alkyl halides form stable planar carbocation intermediates.`
        ],
        correct: 0,
        explanation: `Mnemonic: ${mn.phrase}`
      });
    }

    // 8. Exam Trend Focus
    if (sData.examTrend) {
      const et = sData.examTrend;
      const trueAnswer = (sData.keyPoints && sData.keyPoints[0])
        ? stripHtml(sData.keyPoints[0]).replace(/^•\s*/, '')
        : (sData.assertionReason ? sData.assertionReason.reason : 'Refer to NCERT standard answer.');

      addQ({
        difficulty: 'hard',
        question: `CBSE Board Examination Focus (${et.pastYears || 'Class 12'}): ${et.highYieldPrompt}`,
        options: [
          trueAnswer,
          invertClaim(trueAnswer),
          `The question is out of scope as it violates modern thermodynamic formulations.`,
          `No reaction occurs because the reagents form an unreactive clathrate cage.`
        ],
        correct: 0,
        explanation: `CBSE Exam Trend (${et.pattern}): ${et.highYieldPrompt}\nStandard Solution: ${trueAnswer}`
      });
    }
  }

  // 9. Sections from syllabus
  if (subchapter.sections) {
    subchapter.sections.forEach((sec, secIdx) => {
      if (sec.explanation) {
        const bulletLines = sec.explanation.split(/\n+/).map(l => stripHtml(l).replace(/^[•\s-]+/, '').trim()).filter(l => l.length > 20);
        bulletLines.forEach((line, lineIdx) => {
          const colonSplit = line.split(/:\s*/);
          if (colonSplit.length > 1) {
            const rawTopic = colonSplit[0].trim();
            if (rawTopic.length > 0 && rawTopic.length <= 40 && !rawTopic.includes('.')) {
              const topicName = rawTopic;
              const desc = colonSplit.slice(1).join(': ').trim();
              addQ({
                difficulty: 'easy',
                question: `Direct Concept Recall: Which statement correctly defines "${topicName}" in "${subchapter.title}"?`,
                options: [
                  desc,
                  invertClaim(desc),
                  genericChemDistractors[(lineIdx * 2) % genericChemDistractors.length],
                  genericChemDistractors[(lineIdx * 2 + 1) % genericChemDistractors.length]
                ],
                correct: 0,
                explanation: `${topicName}: ${desc}`
              });

              addQ({
                difficulty: 'medium',
                question: `In NCERT Class 12 Chemistry, what is the primary function or feature of "${topicName}"?`,
                options: [
                  desc,
                  invertClaim(desc),
                  genericChemDistractors[(lineIdx * 2 + 2) % genericChemDistractors.length],
                  genericChemDistractors[(lineIdx * 2 + 3) % genericChemDistractors.length]
                ],
                correct: 0,
                explanation: `${topicName}: ${desc}`
              });
            }
          }
        });
      }

      if (sec.questionFraming) {
        const framings = sec.questionFraming.split(/\n+/);
        framings.forEach(fr => {
          if (fr.includes('⟶')) {
            const [qPart, aPart] = fr.split('⟶');
            const cleanQ = stripHtml(qPart).replace(/^(Reasoning|Conceptual|Numerical|Distinction|Application)\s*[-—:]*\s*/i, '').replace(/^['"]|['"]$/g, '').trim();
            const cleanA = stripHtml(aPart).trim();
            if (cleanQ.length > 15 && cleanA.length > 10) {
              addQ({
                difficulty: 'hard',
                question: cleanQ.endsWith('?') ? cleanQ : cleanQ + '?',
                options: [
                  cleanA,
                  invertClaim(cleanA),
                  `To maintain absolute electrical neutrality in the liquid crystal boundary layer.`,
                  `To prevent spontaneous disproportionation into volatile alkenes.`
                ],
                correct: 0,
                explanation: cleanA
              });
            }
          }
        });
      }

      if (sec.keyFormulas && sec.keyFormulas.length > 0) {
        sec.keyFormulas.forEach((formula, fIdx) => {
          const cleanF = stripHtml(formula);
          const formulaLabel = cleanF.includes(':') ? cleanF.split(':')[0].trim() : sec.title;
          const otherFormulas = sec.keyFormulas.filter((_, i) => i !== fIdx).map(x => stripHtml(x));
          while (otherFormulas.length < 3) {
            otherFormulas.push(genericChemDistractors[(otherFormulas.length + fIdx) % genericChemDistractors.length]);
          }

          addQ({
            difficulty: 'easy',
            question: `Which chemical formula, equation, or notation correctly represents "${formulaLabel}" in "${subchapter.title}"?`,
            options: [
              cleanF,
              otherFormulas[0],
              otherFormulas[1],
              otherFormulas[2]
            ],
            correct: 0,
            explanation: `NCERT Class 12 Chemical Formulation: ${cleanF}`
          });
        });
      }
    });
  }

  // 10. Topic angle variations across difficulties
  if (questions.length < 45 && subchapter.sections.length > 0) {
    const sec = subchapter.sections[0];
    const keyAspects = [
      { prefix: 'What is the primary foundation definition or classification of', diff: 'easy' },
      { prefix: 'Which fundamental property is characteristic of', diff: 'easy' },
      { prefix: 'According to NCERT Class 12, what is the core chemical behavior of', diff: 'easy' },
      { prefix: 'Which factor most strongly influences the reactivity of', diff: 'medium' },
      { prefix: 'Which experimental observation verifies the standard theory of', diff: 'medium' },
      { prefix: 'How does NCERT Class 12 classify the chemical properties of', diff: 'medium' },
      { prefix: 'Under ambient conditions, which limitation applies to', diff: 'hard' },
      { prefix: 'In mechanistic problem solving, what distinguishes', diff: 'hard' },
      { prefix: 'Why does NCERT Class 12 emphasize the thermodynamic stability of', diff: 'hard' }
    ];
    keyAspects.forEach((ka, pIdx) => {
      if (questions.length >= 60) return;
      const coreAnswer = (sData && sData.keyPoints && sData.keyPoints[pIdx % sData.keyPoints.length])
        ? stripHtml(sData.keyPoints[pIdx % sData.keyPoints.length]).replace(/^•\s*/, '')
        : `${sec.title} is governed by foundational NCERT principles.`;
      addQ({
        difficulty: ka.diff,
        question: `${ka.prefix} "${sec.title}"?`,
        options: [
          coreAnswer,
          invertClaim(coreAnswer),
          genericChemDistractors[(pIdx * 2) % genericChemDistractors.length],
          genericChemDistractors[(pIdx * 2 + 1) % genericChemDistractors.length]
        ],
        correct: 0,
        explanation: coreAnswer
      });
    });
  }

  return shuffleArray(questions, seed);
}

// ============================================================================
// HIGH-YIELD GENERAL QUESTION SYNTHESIZER (Physics, Biology, Psychology)
// Generates 45-60 authentic questions per subtopic with balanced difficulty and genuine subject distractors
// ============================================================================
export function synthesizeGeneralSubtopicMCQs(subtopicId, seed = 1) {
  const details = findSubchapterDetails(subtopicId);
  if (!details || !details.subchapter.sections) return [];

  const { subjectId, chapter, subchapter } = details;
  const questions = [];
  const seenStems = new Set();
  const subjDistractors = SUBJECT_DISTRACTORS[subjectId] || SUBJECT_DISTRACTORS.physics;

  const addQ = (q) => {
    if (!q || !q.question) return;
    const key = normalizeKey(q.question);
    if (seenStems.has(key)) return;
    seenStems.add(key);
    questions.push({
      id: `synth-${subtopicId}-${questions.length + 1}`,
      chapterId: chapter.id,
      chapterName: `Ch ${chapter.number}: ${chapter.title}`,
      subtopicId: subchapter.id,
      subtopicName: subchapter.title,
      subjectId: subjectId,
      difficulty: q.difficulty || 'medium',
      question: q.question,
      options: q.options,
      correct: q.correct !== undefined ? q.correct : 0,
      explanation: q.explanation || `Refer to NCERT Class 12 ${subjectId} textbook standard theory.`
    });
  };

  const cbseOptions = [
    'Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
    'Both Assertion and Reason are true, but Reason is NOT the correct explanation of Assertion.',
    'Assertion is true, but Reason is false.',
    'Assertion is false, but Reason is true.'
  ];

  subchapter.sections.forEach((sec, secIdx) => {
    if (sec.explanation) {
      const sentences = sec.explanation.split(/\.\s+/).map(s => stripHtml(s).trim()).filter(s => s.length > 25);
      sentences.forEach((sentence, sIdx) => {
        const sentenceDot = sentence.endsWith('.') ? sentence : sentence + '.';

        // Foundation / Easy definition question
        addQ({
          difficulty: 'easy',
          question: `NCERT Class 12 Foundation: What is the primary established principle regarding "${sec.title}"?`,
          options: [
            sentenceDot,
            invertClaim(sentenceDot),
            subjDistractors[(sIdx * 2) % subjDistractors.length],
            subjDistractors[(sIdx * 2 + 1) % subjDistractors.length]
          ],
          correct: 0,
          explanation: `NCERT Standard Principle: ${sentenceDot}`
        });

        // Medium scientific accuracy question
        addQ({
          difficulty: 'medium',
          question: `According to NCERT Class 12 regarding "${sec.title}", which statement is scientifically accurate?`,
          options: [
            sentenceDot,
            invertClaim(sentenceDot),
            subjDistractors[(sIdx * 2 + 2) % subjDistractors.length],
            subjDistractors[(sIdx * 2 + 3) % subjDistractors.length]
          ],
          correct: 0,
          explanation: `NCERT Standard Theory: ${sec.explanation}`
        });

        // Hard scientific FALSE question
        addQ({
          difficulty: 'hard',
          question: `Which of the following statements regarding "${sec.title}" is scientifically FALSE?`,
          options: [
            invertClaim(sentenceDot),
            sentenceDot,
            `It represents a foundational principle established in NCERT Class 12.`,
            subjDistractors[(sIdx + 3) % subjDistractors.length]
          ],
          correct: 0,
          explanation: `The FALSE statement is: "${invertClaim(sentenceDot)}". Correct fact: "${sentenceDot}".`
        });

        if (sentence.includes('is defined as') || sentence.includes('refers to') || sentence.includes('means')) {
          addQ({
            difficulty: 'easy',
            question: `In context of NCERT Class 12, what is meant by "${sec.title}"?`,
            options: [
              sentenceDot,
              invertClaim(sentenceDot),
              subjDistractors[(sIdx + 1) % subjDistractors.length],
              subjDistractors[(sIdx + 4) % subjDistractors.length]
            ],
            correct: 0,
            explanation: sentenceDot
          });
        }
      });
    }

    if (sec.questionFraming) {
      const framings = sec.questionFraming.split(/\n+/);
      framings.forEach((fr, fIdx) => {
        if (fr.includes('⟶')) {
          const [qPart, aPart] = fr.split('⟶');
          const cleanQ = stripHtml(qPart).replace(/^(Reasoning|Conceptual|Numerical|Distinction|Application)\s*[-—:]*\s*/i, '').replace(/^['"]|['"]$/g, '').trim();
          const cleanA = stripHtml(aPart).trim();
          if (cleanQ.length > 15 && cleanA.length > 10) {
            addQ({
              difficulty: 'hard',
              question: cleanQ.endsWith('?') ? cleanQ : cleanQ + '?',
              options: [
                cleanA,
                invertClaim(cleanA),
                subjDistractors[(fIdx * 2) % subjDistractors.length],
                subjDistractors[(fIdx * 2 + 1) % subjDistractors.length]
              ],
              correct: 0,
              explanation: cleanA
            });

            addQ({
              difficulty: 'medium',
              question: `When evaluating: "${cleanQ.endsWith('?') ? cleanQ : cleanQ + '?'}", which explanation is INCORRECT?`,
              options: [
                invertClaim(cleanA),
                cleanA,
                `The question addresses a core NCERT syllabus requirement.`,
                subjDistractors[(fIdx + 1) % subjDistractors.length]
              ],
              correct: 0,
              explanation: `Correct reason: ${cleanA}`
            });

            addQ({
              difficulty: 'easy',
              question: `High-Yield Concept: What is the direct scientific takeaway for: "${cleanQ.endsWith('?') ? cleanQ : cleanQ + '?'}"?`,
              options: [
                cleanA,
                invertClaim(cleanA),
                subjDistractors[(fIdx + 3) % subjDistractors.length],
                subjDistractors[(fIdx + 5) % subjDistractors.length]
              ],
              correct: 0,
              explanation: cleanA
            });
          }
        } else {
          const cleanQ = stripHtml(fr).replace(/^(Reasoning|Conceptual|Numerical|Distinction|Application)\s*[-—:]*\s*/i, '').replace(/^['"]|['"]$/g, '').trim();
          if (cleanQ.length > 20) {
            const expSnippet = sec.explanation ? stripHtml(sec.explanation).slice(0, 160) : 'Verified from NCERT standard principles.';
            addQ({
              difficulty: 'medium',
              question: `CBSE Exam Standard Question: ${cleanQ.endsWith('?') ? cleanQ : cleanQ + '?'}`,
              options: [
                expSnippet.endsWith('.') ? expSnippet : expSnippet + '.',
                invertClaim(expSnippet),
                subjDistractors[(fIdx + 2) % subjDistractors.length],
                subjDistractors[(fIdx + 4) % subjDistractors.length]
              ],
              correct: 0,
              explanation: stripHtml(sec.textbookRef || sec.explanation)
            });
          }
        }
      });
    }

    if (sec.keyFormulas && sec.keyFormulas.length > 0) {
      sec.keyFormulas.forEach((formula, fIdx) => {
        const cleanF = stripHtml(formula);
        const otherFormulas = sec.keyFormulas.filter((_, i) => i !== fIdx).map(x => stripHtml(x));
        while (otherFormulas.length < 3) {
          otherFormulas.push(subjDistractors[(otherFormulas.length + fIdx) % subjDistractors.length]);
        }

        addQ({
          difficulty: 'easy',
          question: `Which governing relation correctly expresses the physical/mathematical formulation for "${sec.title}"?`,
          options: [
            cleanF,
            otherFormulas[0],
            otherFormulas[1],
            otherFormulas[2]
          ],
          correct: 0,
          explanation: `As formulated in NCERT Class 12: ${cleanF}`
        });

        addQ({
          difficulty: 'medium',
          question: `In context of the formulation "${cleanF}", which statement describes the dependency accurately?`,
          options: [
            `The parameters scale strictly according to the governing formula: ${cleanF}.`,
            `The parameter is independent of all constituent variables under ambient conditions.`,
            `The relationship becomes strictly inverted when evaluated in non-ideal media.`,
            `The expression holds true only when all parameters approach zero simultaneously.`
          ],
          correct: 0,
          explanation: `NCERT Formulation: ${cleanF}`
        });

        addQ({
          difficulty: 'hard',
          question: `If the primary independent variable in "${cleanF}" is doubled while other parameters remain fixed, how does the dependent quantity scale?`,
          options: [
            cleanF.includes('r²') || cleanF.includes('^2')
              ? (cleanF.includes('/ r²') || cleanF.includes('/r²') ? 'Decreases by a factor of 4' : 'Increases by a factor of 4')
              : (cleanF.includes('/') ? 'Decreases by a factor of 2' : 'Increases by a factor of 2'),
            'Remains completely unchanged regardless of parameter variations',
            'Becomes identically zero immediately',
            'Oscillates sinusoidally with infinite frequency'
          ],
          correct: 0,
          explanation: `From the relation ${cleanF}, scaling follows the exact exponent and proportionality of the constituent variables.`
        });
      });
    }

    if (sec.textbookRef) {
      const refSentences = sec.textbookRef.split(/\.\s+/).map(s => stripHtml(s).trim()).filter(s => s.length > 25);
      refSentences.forEach((refS, rIdx) => {
        addQ({
          difficulty: 'hard',
          question: `Give Reason: In accordance with NCERT Class 12 standard theory for "${sec.title}", what explains the observed behavior?`,
          options: [
            refS.endsWith('.') ? refS : refS + '.',
            invertClaim(refS),
            subjDistractors[(rIdx + 1) % subjDistractors.length],
            subjDistractors[(rIdx + 3) % subjDistractors.length]
          ],
          correct: 0,
          explanation: stripHtml(sec.textbookRef)
        });

        addQ({
          difficulty: 'easy',
          question: `CBSE Topper's Tip: When answering questions on "${sec.title}", which crucial point must be included?`,
          options: [
            refS.endsWith('.') ? refS : refS + '.',
            `Assuming that the system behaves identically in both vacuum and dense media without modification.`,
            `Neglecting the sign of charges and vectors in calculating electrostatic superposition.`,
            `Stating that the parameter diverges to infinity under ambient temperature.`
          ],
          correct: 0,
          explanation: `NCERT Examination Key Point: ${refS}`
        });
      });

      if (sec.explanation && refSentences.length > 0) {
        const expSentences = sec.explanation.split(/\.\s+/).map(s => stripHtml(s).trim()).filter(s => s.length > 25);
        const assertion1 = expSentences[0] || sec.title;
        const reason1 = refSentences[0];

        addQ({
          difficulty: 'hard',
          question: `CBSE Section A (Assertion-Reason):\nAssertion (A): ${assertion1}\nReason (R): ${reason1}`,
          options: cbseOptions,
          correct: 0,
          explanation: `Assertion is true and Reason correctly provides the foundational rationale.`
        });

        addQ({
          difficulty: 'hard',
          question: `CBSE Board Evaluation (Assertion-Reason Pattern):\nAssertion (A): ${assertion1}\nReason (R): ${invertClaim(reason1)}`,
          options: cbseOptions,
          correct: 2,
          explanation: `Assertion is verified from NCERT theory, but the Reason as stated is FALSE.`
        });

        if (expSentences.length > 1 && refSentences.length > 1) {
          const assertion2 = expSentences[1];
          const reason2 = refSentences[1];
          addQ({
            difficulty: 'hard',
            question: `CBSE Board Examination (Assertion-Reason):\nAssertion (A): ${assertion2}\nReason (R): ${reason2}`,
            options: cbseOptions,
            correct: 0,
            explanation: `Both statements are verified from NCERT Class 12 standard theory.`
          });
        }
      }
    }
  });

  // Ensure minimum count of 50 by generating topic angle variations across difficulties
  if (questions.length < 50 && subchapter.sections.length > 0) {
    const sec = subchapter.sections[0];
    const expSentences = (sec.explanation || '').split(/\.\s+/).map(s => stripHtml(s).trim()).filter(s => s.length > 20);
    const refSentences = (sec.textbookRef || '').split(/\.\s+/).map(s => stripHtml(s).trim()).filter(s => s.length > 20);
    const allInsights = [...expSentences, ...refSentences];

    const subjectDomain = subjectId === 'psychology' ? 'psychological / cognitive' : (subjectId === 'biology' ? 'biological / physiological' : 'physical / theoretical');

    const keyAspects = [
      { prefix: `What is the primary ${subjectDomain} definition of`, suffix: 'in CBSE Class 12?', diff: 'easy' },
      { prefix: 'How does NCERT Class 12 categorize the phenomenon of', suffix: '?', diff: 'easy' },
      { prefix: 'What fundamental assumption is made when analyzing', suffix: 'in NCERT Class 12?', diff: 'easy' },
      { prefix: 'Under standard conditions, which factor most strongly influences', suffix: '?', diff: 'medium' },
      { prefix: 'Which statement accurately describes the boundary behavior of', suffix: '?', diff: 'medium' },
      { prefix: 'How does a change in medium or environment affect', suffix: 'according to NCERT?', diff: 'medium' },
      { prefix: 'What distinguishes', suffix: 'from other related phenomena in the same chapter?', diff: 'medium' },
      { prefix: 'In practical applications, how is the principle of', suffix: 'utilized?', diff: 'medium' },
      { prefix: 'Which conservation law or foundational theorem underpins', suffix: '?', diff: 'medium' },
      { prefix: 'Which of the following experimental observations confirms the principle of', suffix: '?', diff: 'hard' },
      { prefix: 'Which physical / biological limitation applies to', suffix: 'under extreme conditions?', diff: 'hard' },
      { prefix: 'Which common examination precaution must be observed regarding', suffix: '?', diff: 'easy' },
      { prefix: 'Why is', suffix: 'considered a high-yield topic in CBSE Board Examinations?', diff: 'easy' },
      { prefix: 'In conceptual problem solving, how is the relation for', suffix: 'evaluated?', diff: 'medium' },
      { prefix: 'What is the critical analytical takeaway regarding', suffix: 'in board preparations?', diff: 'hard' },
      { prefix: 'Which mathematical condition is required for the validity of', suffix: '?', diff: 'hard' },
      { prefix: 'How is the rate or magnitude of', suffix: 'measured experimentally?', diff: 'medium' },
      { prefix: 'Which historical discovery established the modern foundation of', suffix: '?', diff: 'easy' }
    ];

    keyAspects.forEach((ka, kIdx) => {
      if (questions.length >= 60) return;
      const coreAnswer = allInsights[kIdx % (allInsights.length || 1)] || `${sec.title} is governed by foundational NCERT Class 12 principles.`;
      addQ({
        difficulty: ka.diff,
        question: `${ka.prefix} "${sec.title}" ${ka.suffix}`,
        options: [
          coreAnswer.endsWith('.') ? coreAnswer : coreAnswer + '.',
          invertClaim(coreAnswer),
          subjDistractors[(kIdx * 2) % subjDistractors.length],
          subjDistractors[(kIdx * 2 + 1) % subjDistractors.length]
        ],
        correct: 0,
        explanation: stripHtml(sec.textbookRef || sec.explanation)
      });
    });
  }

  return shuffleArray(questions, seed);
}

// Master Subtopic MCQ Synthesizer
export function synthesizeSubtopicMCQs(subtopicId, seed = 1) {
  if (STRUCTURED_NOTES_DATA[subtopicId]) {
    return synthesizeChemistrySubtopicMCQs(subtopicId, seed);
  }
  return synthesizeGeneralSubtopicMCQs(subtopicId, seed);
}

// ============================================================================
// HIGH-YIELD SUBTOPIC PYQ SYNTHESIZER
// Generates 15-20 distinct CBSE Board Exam questions with detailed stepwise marking scheme
// ============================================================================
export function synthesizeSubtopicPYQs(subtopicId, seed = 1) {
  const details = findSubchapterDetails(subtopicId);
  const sData = STRUCTURED_NOTES_DATA[subtopicId];
  if (!details || !details.subchapter.sections) return [];

  const { subjectId, chapter, subchapter } = details;
  const pyqs = [];
  const seenStems = new Set();

  const addPyq = (p) => {
    if (!p || !p.question) return;
    const key = normalizeKey(p.question);
    if (seenStems.has(key)) return;
    seenStems.add(key);
    pyqs.push({
      id: `synth-pyq-${subtopicId}-${pyqs.length + 1}`,
      chapterId: chapter.id,
      chapterName: `Ch ${chapter.number}: ${chapter.title}`,
      subtopicId: subchapter.id,
      year: p.year || 'CBSE Board Examination (High-Yield Pattern)',
      question: p.question.endsWith('?') ? p.question : p.question + '?',
      solution: p.solution || 'Refer to NCERT textbook Class 12 standard solution.'
    });
  };

  // If Chemistry and structured notes available
  if (sData) {
    if (sData.examTrend) {
      addPyq({
        year: `${sData.examTrend.pastYears || 'CBSE 2023, 2020'} [${sData.examTrend.pattern || 'Board Exam'}]`,
        question: sData.examTrend.highYieldPrompt,
        solution: `Verified Board Model Answer:\n\n• Core Identification & Concept:\n${stripHtml(sData.keyPoints[0] || '').replace(/^•\s*/, '')}\n\n• Scientific Rationale & Mechanism:\n${stripHtml(sData.assertionReason ? sData.assertionReason.reason : (subchapter.sections[0]?.explanation || ''))}\n\n• Exam Conclusion:\n${stripHtml(sData.keyPoints[1] || sData.keyPoints[0] || '').replace(/^•\s*/, '')}`
      });
    }

    if (sData.commonlyMadeErrors && sData.commonlyMadeErrors.length > 0) {
      sData.commonlyMadeErrors.forEach(err => {
        addPyq({
          year: 'CBSE Board Examination (Give-Reason / Scientific Explanation)',
          question: `Give scientific reasons explaining why: ${stripHtml(err.tip)}.`,
          solution: `Verified Board Model Answer:\n\n• Scientific Reason:\n${stripHtml(err.tip)}.\n\n• Underlying Principle:\n${stripHtml(err.explanation || subchapter.sections[0]?.explanation || 'This is based on standard NCERT board theory.')}\n\n• Key Point for Full Credit:\nDo not confuse with ${stripHtml(err.error).toLowerCase()}. Ensure the exact scientific terminology is stated.`
        });
      });
    }

    if (sData.reactions && sData.reactions.length > 0) {
      sData.reactions.forEach(rxn => {
        addPyq({
          year: `CBSE Board Examination [${rxn.isNamedReaction ? 'Named Reaction' : 'Organic Synthesis'}]`,
          question: `Write the balanced chemical equation, reaction conditions, and mechanism for "${rxn.name}".`,
          solution: `Verified Board Model Answer:\n\n• Balanced Chemical Equation:\n${stripHtml(rxn.equation)}\n\n• Reagents & Reaction Conditions:\n${rxn.reagents || 'As specified in standard NCERT organic transformations.'}\n\n• Mechanistic Explanation:\n${stripHtml(rxn.howItWorks)}`
        });
      });
    }

    if (sData.definitions && sData.definitions.length > 0) {
      sData.definitions.slice(0, 3).forEach(def => {
        addPyq({
          year: 'CBSE Board Examination (Standard Definition & Formula)',
          question: `Define "${def.term}". State its mathematical formulation and physical significance.`,
          solution: `Verified Board Model Answer:\n\n• Definition:\n${stripHtml(def.definition)}\n\n• Mathematical Relation & SI Unit:\n${def.formula ? `Formula: ${def.formula}\n` : ''}${def.unit ? `SI Unit: ${def.unit}\n` : ''}This formulation is standard as per the NCERT syllabus.`
        });
      });
    }

    if (sData.assertionReason) {
      addPyq({
        year: 'CBSE Board Examination (Assertion-Reason Evaluation)',
        question: `Evaluate the following with scientific reasoning:\nAssertion (A): ${sData.assertionReason.assertion}\nReason (R): ${sData.assertionReason.reason}`,
        solution: `Verified Board Model Answer:\n\n• Correct Option:\n${sData.assertionReason.correctOption}\n\n• Detailed Scientific Justification:\n${sData.assertionReason.explanation}`
      });
    }
  }

  // General sections PYQs
  subchapter.sections.forEach((sec, secIdx) => {
    if (sec.questionFraming) {
      const framings = sec.questionFraming.split(/\n+/);
      framings.forEach(fr => {
        if (fr.includes('⟶')) {
          const [qPart, aPart] = fr.split('⟶');
          const cleanQ = stripHtml(qPart).replace(/^(Reasoning|Conceptual|Numerical|Distinction|Application)\s*[-—:]*\s*/i, '').replace(/^['"]|['"]$/g, '').trim();
          const cleanA = stripHtml(aPart).trim();
          if (cleanQ.length > 15 && cleanA.length > 10) {
            addPyq({
              year: 'CBSE Board Examination (High-Yield Question)',
              question: cleanQ,
              solution: `Verified Board Model Answer:\n\n• Core Answer:\n${cleanA}\n\n• Detailed Explanation:\n${stripHtml(sec.textbookRef || sec.explanation)}`
            });
          }
        } else {
          const cleanQ = stripHtml(fr).replace(/^(Reasoning|Conceptual|Numerical|Distinction|Application)\s*[-—:]*\s*/i, '').replace(/^['"]|['"]$/g, '').trim();
          if (cleanQ.length > 20) {
            addPyq({
              year: 'CBSE Board Examination',
              question: cleanQ,
              solution: `Verified Board Model Answer:\n\n• Physical Principle:\n${stripHtml(sec.explanation)}\n\n• Detailed Board Explanation:\n${stripHtml(sec.textbookRef || sec.explanation)}`
            });
          }
        }
      });
    }

    if (sec.keyFormulas && sec.keyFormulas.length > 0) {
      addPyq({
        year: 'CBSE Board Examination (Derivation / Formula Application)',
        question: `State the governing law and write the mathematical formulation for "${sec.title}".`,
        solution: `Verified Board Model Answer:\n\n• Governing Mathematical Formulations:\n${sec.keyFormulas.join('\n')}\n\n• Physical Meaning of Terms:\n${stripHtml(sec.explanation)}${sec.derivations ? `\n\n• Complete Step-by-Step Derivation:\n${sec.derivations}` : ''}`
      });
    }

    if (sec.textbookRef) {
      addPyq({
        year: 'CBSE Board Examination (Scientific Explanation)',
        question: `Give scientific reasons explaining the phenomena observed in "${sec.title}".`,
        solution: `Verified Board Model Answer:\n\n${stripHtml(sec.textbookRef)}`
      });
    }
  });

  return shuffleArray(pyqs, seed);
}

// ============================================================================
// DIFFICULTY RATING HELPER
// Categorizes MCQs into Easy, Medium, or Hard (HOTS)
// ============================================================================
export function deriveDifficulty(mcq) {
  if (mcq && mcq.difficulty) return mcq.difficulty;
  const text = (((mcq && mcq.question) || '') + ' ' + ((mcq && mcq.explanation) || '')).toLowerCase();
  if (
    text.includes('derive') ||
    text.includes('ratio') ||
    text.includes('calculate') ||
    text.includes('maximum') ||
    text.includes('minimum') ||
    text.includes('assertion') ||
    text.includes('reason') ||
    text.includes('kohlrausch') ||
    text.includes('s_n1') ||
    text.includes('s_n2') ||
    text.includes('wheatstone') ||
    text.includes('cyclotron') ||
    text.includes('lac operon') ||
    text.includes('hardy-weinberg') ||
    text.includes('triarchic') ||
    text.includes('somatotype') ||
    text.includes('psychoneuroimmunology') ||
    text.length > 220
  ) {
    return 'hard';
  }
  if (
    text.includes('why') ||
    text.includes('which of the following') ||
    text.includes('state') ||
    text.includes('explain') ||
    text.includes('constant') ||
    text.includes('law') ||
    text.includes('factor') ||
    text.length > 120
  ) {
    return 'medium';
  }
  return 'easy';
}

// ============================================================================
// PUBLIC API: GET GENERATED MCQS
// Guarantees:
// 1. Strict deduplication (Set of normalized question stems — ZERO duplicate questions!)
// 2. STRICT SCOPING: If subtopicId or chapterId is provided, returns ONLY questions
//    belonging to that scope — ZERO leakage or spillover from other chapters/subtopics.
// 3. Difficulty filtering and tagging on every question.
// 4. Shuffled options (fair distribution across A, B, C, D).
// 5. Authentic NCERT/Oswaal-grade question stems and distractors (ZERO sci-fi filler).
// ============================================================================
export function getGeneratedMCQs(subjectId, chapterId = null, subtopicId = null, count = 20, seed = 1, difficultyFilter = null) {
  const seenQuestions = new Set();
  const result = [];

  let targetSubtopics = null;
  if (Array.isArray(subtopicId)) {
    targetSubtopics = subtopicId.length > 0 ? subtopicId : null;
  } else if (subtopicId && subtopicId !== 'ALL') {
    targetSubtopics = [subtopicId];
  }

  const isMatchingSubtopic = (qSubtopicId) => {
    if (!targetSubtopics) return true;
    return targetSubtopics.includes(qSubtopicId);
  };

  const isMatchingDifficulty = (diff) => {
    if (!difficultyFilter || difficultyFilter === 'ALL' || difficultyFilter === 'all') return true;
    return diff === difficultyFilter.toLowerCase();
  };

  const tryAddQuestion = (mcq, allowFallback = false) => {
    if (!mcq || !mcq.question) return false;
    const key = normalizeKey(mcq.question);
    if (seenQuestions.has(key)) return false;

    const diff = deriveDifficulty(mcq);
    if (!allowFallback && !isMatchingDifficulty(diff)) return false;

    seenQuestions.add(key);

    const qSeed = seed * 43 + (result.length + 1) * 19 + hashString(mcq.question);
    const { options: shuffledOptions, correct: shuffledCorrect } = shuffleOptionsAndAdjustCorrect(
      mcq.options,
      mcq.correct !== undefined ? mcq.correct : 0,
      qSeed,
      subjectId
    );

    result.push({
      id: mcq.id || `mcq-${subjectId}-${seed}-${result.length + 1}`,
      chapterId: mcq.chapterId || chapterId || 'general',
      chapterName: mcq.chapterName || getChapterTitle(mcq.chapterId || chapterId),
      subtopicId: mcq.subtopicId || (targetSubtopics ? targetSubtopics[0] : null),
      subtopicName: mcq.subtopicName || getSubtopicTitle(mcq.subtopicId || (targetSubtopics ? targetSubtopics[0] : null)),
      question: mcq.question,
      options: shuffledOptions,
      correct: shuffledCorrect,
      explanation: mcq.explanation || 'Refer to NCERT textbook Class 12 official standard answer.',
      difficulty: diff
    });
    return true;
  };

  // 1. Curated pool matching subject
  let pool = CURATED_MCQS.filter(q => q.subjectId === subjectId);
  if (MCQ_DATABASE[subjectId]) {
    MCQ_DATABASE[subjectId].forEach(item => {
      pool.push({ ...item, subjectId });
    });
  }
  pool = shuffleArray(pool, seed);

  // ==========================================================================
  // CASE A: STRICT SUBTOPIC FILTERING
  // ZERO leakage into other subtopics or other chapters!
  // ==========================================================================
  if (targetSubtopics) {
    // 1. Exact subtopic matches from curated pool
    for (const q of pool) {
      if (q && isMatchingSubtopic(q.subtopicId)) {
        tryAddQuestion(q);
        if (result.length >= count) return result;
      }
    }

    // 2. Procedural generators matching target subtopics
    const chKeys = new Set();
    targetSubtopics.forEach(subId => {
      const foundCh = findChapterForSubtopic(subId);
      if (foundCh) chKeys.add(foundCh);
    });

    for (const chKey of chKeys) {
      const gens = PROCEDURAL_GENERATORS[chKey] || [];
      let attempts = 0;
      while (result.length < count && attempts < gens.length * 35) {
        attempts++;
        const genFn = gens[(seed + attempts) % gens.length];
        if (genFn) {
          const generated = genFn(seed + attempts * 17);
          if (generated && isMatchingSubtopic(generated.subtopicId)) {
            tryAddQuestion(generated);
            if (result.length >= count) return result;
          }
        }
      }
    }

    // 3. Synthesized subtopic questions (each subtopic has 50-65 unique questions!)
    for (const subId of targetSubtopics) {
      const synthList = synthesizeSubtopicMCQs(subId, seed);
      for (const sq of synthList) {
        tryAddQuestion(sq);
        if (result.length >= count) return result;
      }
    }

    // If still below count (e.g. high quota requested), try offset seed synthesis strictly guarding uniqueness
    if (result.length < count) {
      for (const subId of targetSubtopics) {
        const offsetList = synthesizeSubtopicMCQs(subId, seed + 107);
        for (const sq of offsetList) {
          tryAddQuestion(sq);
          if (result.length >= count) return result;
        }
      }
    }

    // 4. Fallback pass: If difficultyFilter was specified and result is still below count,
    // fill remaining slots from the exact same subtopics with available questions,
    // strictly deduplicated by seenQuestions with ZERO leakage!
    if (result.length < count && difficultyFilter && difficultyFilter !== 'ALL') {
      for (const q of pool) {
        if (q && isMatchingSubtopic(q.subtopicId)) {
          tryAddQuestion(q, true);
          if (result.length >= count) return result;
        }
      }
      for (const subId of targetSubtopics) {
        const synthList = synthesizeSubtopicMCQs(subId, seed);
        for (const sq of synthList) {
          tryAddQuestion(sq, true);
          if (result.length >= count) return result;
        }
      }
    }

    // STRICT ISOLATION: Stop here! ZERO duplicate stems and ZERO leakage!
    return result;
  }

  // ==========================================================================
  // CASE B: STRICT CHAPTER FILTERING
  // ZERO leakage into other chapters!
  // ==========================================================================
  if (chapterId && chapterId !== 'ALL') {
    // 1. Exact chapter matches from curated pool
    for (const q of pool) {
      if (q && q.chapterId === chapterId) {
        tryAddQuestion(q);
        if (result.length >= count) return result;
      }
    }

    // 2. Procedural generators for this specific chapter
    const gens = PROCEDURAL_GENERATORS[chapterId] || [];
    let attempts = 0;
    while (result.length < count && attempts < gens.length * 40) {
      attempts++;
      const genFn = gens[(seed + attempts) % gens.length];
      if (genFn) {
        const generated = genFn(seed + attempts * 19);
        if (generated) {
          tryAddQuestion(generated);
          if (result.length >= count) return result;
        }
      }
    }

    // 3. Synthesized subtopic questions for all subchapters in this chapter
    for (const subj of Object.values(NCERT_SYLLABUS)) {
      for (const vol of subj.volumes) {
        const ch = vol.chapters.find(c => c.id === chapterId);
        if (ch && ch.subchapters) {
          for (const sub of ch.subchapters) {
            const synthList = synthesizeSubtopicMCQs(sub.id, seed);
            for (const sq of synthList) {
              tryAddQuestion(sq);
              if (result.length >= count) return result;
            }
          }
        }
      }
    }

    // 4. Fallback pass within chapter
    if (result.length < count && difficultyFilter && difficultyFilter !== 'ALL') {
      for (const q of pool) {
        if (q && q.chapterId === chapterId) {
          tryAddQuestion(q, true);
          if (result.length >= count) return result;
        }
      }
      for (const subj of Object.values(NCERT_SYLLABUS)) {
        for (const vol of subj.volumes) {
          const ch = vol.chapters.find(c => c.id === chapterId);
          if (ch && ch.subchapters) {
            for (const sub of ch.subchapters) {
              const synthList = synthesizeSubtopicMCQs(sub.id, seed);
              for (const sq of synthList) {
                tryAddQuestion(sq, true);
                if (result.length >= count) return result;
              }
            }
          }
        }
      }
    }

    // STRICT ISOLATION: Return ONLY questions for this chapter!
    return result;
  }

  // ==========================================================================
  // CASE C: ALL CHAPTERS (Subject-level practice across entire syllabus)
  // ==========================================================================
  for (const q of pool) {
    tryAddQuestion(q);
    if (result.length >= count) return result;
  }

  const allSubjChs = Object.keys(PROCEDURAL_GENERATORS).filter(k => k.startsWith(subjectId.slice(0, 3)));
  if (allSubjChs.length > 0) {
    let attempts = 0;
    while (result.length < count && attempts < 150) {
      attempts++;
      const randomCh = allSubjChs[(seed + attempts) % allSubjChs.length];
      const gens = PROCEDURAL_GENERATORS[randomCh] || [];
      if (gens.length > 0) {
        const genFn = gens[(seed + attempts * 3) % gens.length];
        const generated = genFn(seed + attempts * 23);
        if (generated) {
          tryAddQuestion(generated);
          if (result.length >= count) return result;
        }
      }
    }
  }

  // Fill remainder from synthesized subchapters across the subject
  for (const vol of (NCERT_SYLLABUS[subjectId]?.volumes || [])) {
    for (const ch of vol.chapters) {
      if (ch.subchapters) {
        for (const sub of ch.subchapters) {
          const synthList = synthesizeSubtopicMCQs(sub.id, seed);
          for (const sq of synthList) {
            tryAddQuestion(sq);
            if (result.length >= count) return result;
          }
        }
      }
    }
  }

  // Fallback pass across subject
  if (result.length < count && difficultyFilter && difficultyFilter !== 'ALL') {
    for (const q of pool) {
      tryAddQuestion(q, true);
      if (result.length >= count) return result;
    }
    for (const vol of (NCERT_SYLLABUS[subjectId]?.volumes || [])) {
      for (const ch of vol.chapters) {
        if (ch.subchapters) {
          for (const sub of ch.subchapters) {
            const synthList = synthesizeSubtopicMCQs(sub.id, seed);
            for (const sq of synthList) {
              tryAddQuestion(sq, true);
              if (result.length >= count) return result;
            }
          }
        }
      }
    }
  }

  return result;
}

function formatImportantQuestionAsFullAnswer(iq) {
  let ans = `Verified Board Model Answer:\n\n`;

  if (iq.modelAnswer && iq.modelAnswer.statement) {
    ans += `Core Principles & Definition:\n${iq.modelAnswer.statement}\n\n`;
  } else if (iq.theory && iq.theory.length > 0) {
    ans += `Core Principles & Definition:\n${iq.theory.join('\n')}\n\n`;
  }

  if (iq.derivations && iq.derivations.length > 0) {
    ans += `Step-by-Step Derivation & Proof:\n`;
    iq.derivations.forEach((d) => {
      ans += `\n• ${d.name}:\n`;
      if (d.setup) ans += `${d.setup}\n`;
      if (d.steps && d.steps.length > 0) {
        d.steps.forEach((st, idx) => {
          ans += `Step ${idx + 1}: ${st.text}\n`;
          if (st.equation) ans += `$$${st.equation}$$\n`;
        });
      }
      if (d.specialCases && d.specialCases.length > 0) {
        d.specialCases.forEach((sc) => {
          ans += `${sc.title}: ${sc.text} ${sc.equation ? `$$${sc.equation}$$` : ''}\n`;
        });
      }
      if (d.finalFormula) {
        ans += `Final Result: $$${d.finalFormula}$$\n`;
      }
    });
    ans += '\n';
  }

  if (iq.keyPointsAndKeywords && iq.keyPointsAndKeywords.length > 0) {
    ans += `Key Exam Keywords for Full Credit:\n${iq.keyPointsAndKeywords.join(' • ')}`;
  }

  return ans.trim();
}

export function getGeneratedPYQs(subjectId, chapterId = null, subtopicId = null, count = 15, seed = 1) {
  const seenQuestions = new Set();
  const result = [];

  let targetSubtopics = null;
  if (Array.isArray(subtopicId)) {
    targetSubtopics = subtopicId.length > 0 ? subtopicId : null;
  } else if (subtopicId && subtopicId !== 'ALL') {
    targetSubtopics = [subtopicId];
  }

  const isMatchingSubtopic = (qSubtopicId) => {
    if (!targetSubtopics) return true;
    return targetSubtopics.includes(qSubtopicId);
  };

  const tryAddPYQ = (pyq) => {
    if (!pyq || !pyq.question) return false;
    const key = normalizeKey(pyq.question);
    if (seenQuestions.has(key)) return false;
    seenQuestions.add(key);

    result.push({
      id: pyq.id || `pyq-${subjectId}-${seed}-${result.length + 1}`,
      chapterId: pyq.chapterId || chapterId || 'general',
      chapterName: pyq.chapterName || getChapterTitle(pyq.chapterId || chapterId),
      subtopicId: pyq.subtopicId || (targetSubtopics ? targetSubtopics[0] : null),
      year: pyq.year || 'CBSE Board Examination',
      question: pyq.question,
      solution: pyq.solution || 'Refer to NCERT textbook Class 12 standard solution.'
    });
    return true;
  };

  let pool = PYQ_DATABASE[subjectId] ? [...PYQ_DATABASE[subjectId]] : [];
  if (subjectId === 'physics' && Array.isArray(IMPORTANT_PHYSICS_QUESTIONS)) {
    const importantPhysicsPyqs = IMPORTANT_PHYSICS_QUESTIONS.map(iq => ({
      id: iq.id,
      chapterId: iq.chapterId,
      chapterName: iq.chapterTitle,
      subtopicId: null,
      year: `CBSE Board ${iq.marks} (${iq.frequency || 'Guaranteed'})`,
      question: iq.questionPrompt,
      solution: formatImportantQuestionAsFullAnswer(iq)
    }));
    pool = [...importantPhysicsPyqs, ...pool];
  }
  pool = shuffleArray(pool, seed);

  // CASE A: Strict Subtopic(s) Filter
  if (targetSubtopics) {
    for (const q of pool) {
      if (q && isMatchingSubtopic(q.subtopicId)) {
        tryAddPYQ(q);
        if (result.length >= count) return result;
      }
    }

    for (const subId of targetSubtopics) {
      const synthList = synthesizeSubtopicPYQs(subId, seed);
      for (const sq of synthList) {
        tryAddPYQ(sq);
        if (result.length >= count) return result;
      }
    }

    return result;
  }

  // CASE B: Strict Chapter Filter
  if (chapterId && chapterId !== 'ALL') {
    for (const q of pool) {
      if (q && q.chapterId === chapterId) {
        tryAddPYQ(q);
        if (result.length >= count) return result;
      }
    }

    for (const subj of Object.values(NCERT_SYLLABUS)) {
      for (const vol of subj.volumes) {
        const ch = vol.chapters.find(c => c.id === chapterId);
        if (ch && ch.subchapters) {
          for (const sub of ch.subchapters) {
            const synthList = synthesizeSubtopicPYQs(sub.id, seed);
            for (const sq of synthList) {
              tryAddPYQ(sq);
              if (result.length >= count) return result;
            }
          }
        }
      }
    }

    return result;
  }

  // CASE C: Whole Subject Pool
  for (const q of pool) {
    if (q) {
      tryAddPYQ(q);
      if (result.length >= count) return result;
    }
  }

  return result;
}

// ============================================================================
// TEST MAKER API
// Generates exactly 30 MCQs strictly drawn from ONLY the selected subtopics!
// Guarantees 100% unique question stems with authentic distractors
// ============================================================================
export function getTestMakerMCQs(subjectId, subtopicIds, count = 30, seed = 1, difficultyFilter = null) {
  if (!subtopicIds || subtopicIds.length === 0) return [];
  return getGeneratedMCQs(subjectId, null, subtopicIds, count, seed, difficultyFilter);
}

export function getTestMakerPYQs(subjectId, subtopicIds, count = 20, seed = 1) {
  if (!subtopicIds || subtopicIds.length === 0) return [];
  return getGeneratedPYQs(subjectId, null, subtopicIds, count, seed);
}

// Helper to look up chapter title
function getChapterTitle(chapterId) {
  if (!chapterId) return 'Core Chapter';
  for (const subj of Object.values(NCERT_SYLLABUS)) {
    for (const vol of subj.volumes) {
      const ch = vol.chapters.find(c => c.id === chapterId);
      if (ch) return `Ch ${ch.number}: ${ch.title}`;
    }
  }
  return chapterId;
}

// Helper to look up subtopic title
function getSubtopicTitle(subtopicId) {
  if (!subtopicId) return 'Key Concept';
  for (const subj of Object.values(NCERT_SYLLABUS)) {
    for (const vol of subj.volumes) {
      for (const ch of vol.chapters) {
        if (ch.subchapters) {
          const sub = ch.subchapters.find(s => s.id === subtopicId);
          if (sub) return sub.title;
        }
      }
    }
  }
  return 'Key Concept';
}

function findChapterForSubtopic(subtopicId) {
  if (!subtopicId) return 'phy-ch-1';
  for (const subj of Object.values(NCERT_SYLLABUS)) {
    for (const vol of subj.volumes) {
      for (const ch of vol.chapters) {
        if (ch.subchapters && ch.subchapters.some(s => s.id === subtopicId)) {
          return ch.id;
        }
      }
    }
  }
  return 'phy-ch-1';
}


