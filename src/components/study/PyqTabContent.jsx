import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Award } from 'lucide-react';

const SAMPLE_PYQS = {
  physics: [
    {
      id: 'phy-pyq-1',
      year: 'CBSE 2023 (5 Marks)',
      question: 'State Gauss\'s law in electrostatics. Using this law, derive an expression for the electric field due to an infinitely long straight wire of uniform linear charge density λ.',
      solution: '1. Statement: Total electric flux through any closed Gaussian surface equals 1/ε₀ times net enclosed charge: ∮ E·dA = q_enc/ε₀.\n2. Gaussian Surface: Coaxial cylinder of radius r and length l around the wire.\n3. Flux calculation: Flux through circular flat ends is zero (E ⊥ dA). Flux through curved surface is E(2πrl).\n4. Applying Gauss\'s law: E(2πrl) = λl / ε₀  ⟹  E = λ / (2πε₀r).'
    },
    {
      id: 'phy-pyq-2',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Why do two electric field lines never cross each other? Write any other two properties of electric field lines.',
      solution: '1. If two field lines crossed, at the point of intersection there would be two tangents, indicating two different directions of the electric field at a single point, which is physically impossible.\n2. Property A: Field lines start on positive charges and end on negative charges.\n3. Property B: Relative density of lines is proportional to field magnitude.'
    },
    {
      id: 'phy-pyq-3',
      year: 'CBSE 2020 (5 Marks)',
      question: 'Define the term RMS value of an alternating current. Derive the relation between the RMS value and peak value of an alternating current.',
      solution: '1. Definition: RMS value is that steady direct current which produces the same heating effect in a given resistor as the alternating current does over one complete cycle.\n2. Heat element: dH = I²R dt = I₀² sin²(ωt) R dt.\n3. Identity: sin²(ωt) = (1 − cos 2ωt) / 2.\n4. Integrating over period T gives H = I₀² R T / 2. Equating to I_rms² R T yields: I_rms = I₀ / √2 ≈ 0.707 I₀.'
    }
  ],
  chemistry: [
    {
      id: 'chem-pyq-1',
      year: 'CBSE 2023 (3 Marks)',
      question: 'Why are aquatic species more comfortable in cold water than in warm water? State Henry\'s law.',
      solution: '1. Henry\'s Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid: p = K_H · x.\n2. Since Henry\'s constant K_H increases with increasing temperature, the solubility of gases in water decreases as temperature rises.\n3. Consequently, cold water contains a significantly higher concentration of dissolved oxygen, making aquatic organisms much more comfortable.'
    },
    {
      id: 'chem-pyq-2',
      year: 'CBSE 2022 (3 Marks)',
      question: 'Differentiate between Lanthanoid contraction and Actinoid contraction with causes and consequences.',
      solution: '1. Lanthanoid Contraction is the steady decrease in atomic/ionic radii across Ce to Lu due to poor shielding by 4f electrons.\n2. Actinoid Contraction is the decrease across Th to Lr due to even poorer shielding by 5f electrons.\n3. Actinoid contraction is greater in magnitude and more irregular than lanthanoid contraction.\n4. Consequence: Zirconium (Zr) and Hafnium (Hf) have almost identical atomic radii (~160 pm).'
    },
    {
      id: 'chem-pyq-3',
      year: 'CBSE 2020 (3 Marks)',
      question: 'Why does a mercury cell provide a constant voltage of 1.35 V throughout its life?',
      solution: 'The overall cell reaction for a mercury cell is:\nZn(Hg) + HgO(s) ⟶ ZnO(s) + Hg(l).\nThis overall reaction does not involve any ions in solution whose concentration can change during its period of operation. Hence, the potential remains constant at 1.35 V throughout its entire working life.'
    }
  ],
  biology: [
    {
      id: 'bio-pyq-1',
      year: 'CBSE 2023 (5 Marks)',
      question: 'Explain double fertilization in angiosperms with the ploidy levels of the resulting structures.',
      solution: '1. Definition: Double fertilization consists of two fusion events inside the embryo sac:\n   a. Syngamy: One male gamete (n) fuses with the egg cell (n) to produce the diploid Zygote (2n), which develops into the embryo.\n   b. Triple Fusion: The second male gamete (n) fuses with the two polar nuclei (n + n) in the central cell to produce the triploid Primary Endosperm Nucleus (PEN, 3n), which develops into nutritive endosperm.'
    },
    {
      id: 'bio-pyq-2',
      year: 'CBSE 2022 (3 Marks)',
      question: 'State the Hardy-Weinberg principle. What are the factors that disturb this genetic equilibrium?',
      solution: '1. Principle: Allele frequencies in a large, randomly mating population remain constant from generation to generation in the absence of evolutionary forces: p² + 2pq + q² = 1 (where p + q = 1).\n2. Factors that upset equilibrium: Gene migration/flow, Genetic drift, Mutation, Genetic recombination during meiosis, and Natural selection.'
    }
  ]
};

export default function PyqTabContent({ selectedSubject }) {
  const pyqs = SAMPLE_PYQS[selectedSubject] || SAMPLE_PYQS.physics;
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)]">
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Award size={22} className="text-[var(--accent-primary)]" />
          Previous Year Board Questions (PYQs)
        </h3>
        <p className="font-sans text-xs text-[var(--text-secondary)] mt-1">
          Handpicked CBSE Class 12 board examination questions with official marking scheme solutions.
        </p>
      </div>

      <div className="space-y-4">
        {pyqs.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-6 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-xs font-mono font-bold text-[var(--text-accent)] bg-[var(--badge-recommended-bg)]/10 border border-[var(--badge-recommended-bg)]/20 px-2.5 py-0.5 rounded-full mb-2">
                    {item.year}
                  </span>
                  <p className="font-serif text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                    {item.question}
                  </p>
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-2 rounded-xl border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors shrink-0"
                  title={isExpanded ? "Hide solution" : "View solution"}
                >
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {isExpanded && (
                <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider block">
                    Marking Scheme Solution:
                  </span>
                  <div className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)]">
                    {item.solution}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
