import { STRUCTURED_NOTES_DATA } from '../data/structuredNotesData';
import { REACTION_DIAGRAMS } from '../data/reactionDiagramsData';
import { getPhysicsSectionEnrichment } from '../data/physicsSectionEnrichments';
import { getDerivationsBySubtopic } from '../data/physicsDerivationsReference';

export const PHYSICS_SUBTOPIC_DIAGRAMS = {
  // Chapter 1: Electric Charges and Fields
  'phy-sub-1-3': 'point-charge-field',
  'phy-sub-1-4': 'point-charge-field',
  'phy-sub-1-5': 'dipole-fields',
  'phy-sub-1-6': 'dipole-fields',
  'phy-sub-1-7': 'dipole-fields',
  'phy-sub-1-8': 'electric-flux-dipole',
  'phy-sub-1-9': 'gauss-applications',
  'phy-sub-1-10': 'gauss-applications',
  'phy-sub-1-11': 'gauss-applications',

  // Chapter 2: Electrostatic Potential and Capacitance
  'phy-sub-2-2': 'point-charge-field',
  'phy-sub-2-3': 'equipotential-surfaces',
  'phy-sub-2-4': 'dipole-fields',
  'phy-sub-2-7': 'capacitor-circuits',
  'phy-sub-2-8': 'energy-storage',

  // Chapter 3: Current Electricity
  'phy-sub-3-6': 'wheatstone-bridge',
  'phy-sub-3-7': 'cell-circuit',
  'phy-sub-3-8': 'cell-circuit',
  'phy-sub-3-9': 'wheatstone-bridge',

  // Chapter 4: Moving Charges and Magnetism
  'phy-sub-4-3': 'force-conductor',
  'phy-sub-4-7': 'force-conductor',
  'phy-sub-4-8': 'parallel-wires',
  'phy-sub-4-9': 'galvanometer-torque',
  'phy-sub-4-10': 'galvanometer-conversion',

  // Chapter 5: Magnetism and Matter
  'phy-sub-5-1': 'magnetic-materials',
  'phy-sub-5-2': 'magnetic-materials',
  'phy-sub-5-3': 'magnetic-materials',

  // Chapter 6: Electromagnetic Induction
  'phy-sub-6-1': 'faraday-lenz',
  'phy-sub-6-2': 'faraday-lenz',
  'phy-sub-6-3': 'faraday-lenz',
  'phy-sub-6-9': 'energy-storage',

  // Chapter 7: Alternating Current
  'phy-sub-7-2': 'ac-rms-waveform',
  'phy-sub-7-3': 'ac-rms-waveform',
  'phy-sub-7-4': 'lcr-circuit',
  'phy-sub-7-5': 'transformer',
  'phy-sub-7-6': 'lcr-circuit',
  'phy-sub-7-7': 'transformer',
  'phy-sub-7-8': 'ac-rms-waveform',

  // Chapter 8: Electromagnetic Waves
  'phy-sub-8-1': 'em-wave-structure',
  'phy-sub-8-2': 'em-wave-structure',
  'phy-sub-8-3': 'displacement-current',
  'phy-sub-8-4': 'em-wave-structure',

  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'ray-optics-instruments',
  'phy-sub-9-2': 'prism-dispersion',
  'phy-sub-9-3': 'ray-optics-instruments',
  'phy-sub-9-4': 'prism-dispersion',
  'phy-sub-9-5': 'ray-optics-instruments',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'huygens-wavefronts',
  'phy-sub-10-2': 'huygens-wavefronts',
  'phy-sub-10-3': 'ydse-wave-optics',
  'phy-sub-10-4': 'ydse-wave-optics',
  'phy-sub-10-5': 'single-slit-diffraction',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'photoelectric-graphs',
  'phy-sub-11-2': 'photoelectric-graphs',
  'phy-sub-11-3': 'photoelectric-graphs',
  'phy-sub-11-4': 'photoelectric-graphs',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'bohr-atom-spectra',
  'phy-sub-12-2': 'bohr-atom-spectra',
  'phy-sub-12-3': 'bohr-atom-spectra',
  'phy-sub-12-4': 'bohr-atom-spectra',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclei-binding-force',
  'phy-sub-13-2': 'nuclei-binding-force',
  'phy-sub-13-3': 'nuclei-binding-force',
  'phy-sub-13-4': 'nuclei-binding-force',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'pn-junction-rectifier',
  'phy-sub-14-2': 'pn-junction-rectifier',
  'phy-sub-14-3': 'pn-junction-rectifier',
  'phy-sub-14-4': 'pn-junction-rectifier'
};

export const PHYSICS_SUBTOPIC_SUBMODES = {
  // Chapter 9: Ray Optics and Optical Instruments
  'phy-sub-9-1': 'mirror',
  'phy-sub-9-2': 'tir',
  'phy-sub-9-3': 'lens-maker',
  'phy-sub-9-4': 'prism-ray',
  'phy-sub-9-5': 'microscope',

  // Chapter 10: Wave Optics
  'phy-sub-10-1': 'wavefronts',
  'phy-sub-10-2': 'denser',
  'phy-sub-10-3': 'interference-intensity',
  'phy-sub-10-4': 'ydse-geometry',
  'phy-sub-10-5': 'diffraction-lobe',

  // Chapter 11: Dual Nature of Radiation and Matter
  'phy-sub-11-1': 'experimental-setup',
  'phy-sub-11-2': 'einstein-slope',
  'phy-sub-11-3': 'collector-potential',
  'phy-sub-11-4': 'de-broglie',

  // Chapter 12: Atoms
  'phy-sub-12-1': 'alpha-scattering',
  'phy-sub-12-2': 'bohr-orbits',
  'phy-sub-12-3': 'spectral-series',
  'phy-sub-12-4': 'bohr-orbits',

  // Chapter 13: Nuclei
  'phy-sub-13-1': 'nuclear-force',
  'phy-sub-13-2': 'be-curve',
  'phy-sub-13-3': 'nuclear-force',
  'phy-sub-13-4': 'fission-fusion',

  // Chapter 14: Semiconductor Electronics
  'phy-sub-14-1': 'energy-bands',
  'phy-sub-14-2': 'depletion-layer',
  'phy-sub-14-3': 'vi-characteristics',
  'phy-sub-14-4': 'rectifiers'
};

export function parseFallbackStructuredContent(section, subtopicId, chapterId) {
  const definitions = [];
  const keyPoints = [];
  const extraPoints = [];
  const reactions = [];

  const rawText = section?.explanation || '';
  const textbookText = section?.textbookRef || '';
  const questionText = section?.questionFraming || '';

  const rawLines = rawText.split(/\n+/).map((l) => l.trim()).filter(Boolean);

  rawLines.forEach((line) => {
    const cleanLine = line.replace(/^[•\-*]\s*/, '').trim();
    const colonMatch = cleanLine.match(/^([A-Za-z0-9\s()·\-]{3,35}):\s+(.+)$/);
    const defMatch = cleanLine.match(/^([A-Za-z0-9\s()·\-]{3,35})\s+(is defined as|refers to|is the)\s+(.+)$/i);

    if (colonMatch && colonMatch[2].length > 25) {
      definitions.push({
        term: colonMatch[1].trim(),
        definition: colonMatch[2].trim()
      });
    } else if (defMatch && defMatch[3].length > 20) {
      definitions.push({
        term: defMatch[1].trim(),
        definition: `${defMatch[2]} ${defMatch[3].trim()}`
      });
    } else {
      const sentences = cleanLine.split(/(?<=[.!?])\s+(?=[A-Z0-9•])/).filter((s) => s.trim().length > 10);
      sentences.forEach((s) => {
        keyPoints.push(s.trim());
      });
    }
  });

  if (textbookText) {
    const refSentences = textbookText.split(/(?<=[.!?])\s+(?=[A-Z0-9•])/).filter((s) => s.trim().length > 15);
    refSentences.forEach((s, idx) => {
      if (idx < 3) {
        extraPoints.push(s.trim());
      }
    });
  }

  const matchingDiagrams = REACTION_DIAGRAMS.filter((d) => {
    if (subtopicId && d.subtopicId === subtopicId) return true;
    if (!subtopicId && chapterId && d.chapterId === chapterId) return true;
    return false;
  });

  matchingDiagrams.forEach((diag) => {
    reactions.push({
      name: diag.title,
      isNamedReaction: diag.category === 'organic' || diag.category === 'mechanism',
      equation: diag.equation || (diag.reactions ? diag.reactions[0]?.equation : null),
      howItWorks: diag.subtitle || (diag.mechanismSteps ? diag.mechanismSteps[0] : 'Standard NCERT reaction pathway.'),
      diagramId: diag.id,
      diagRef: diag
    });
  });

  let examTrend = null;
  let commonlyMadeErrors = null;

  if (questionText) {
    examTrend = {
      pattern: questionText.split('—')[0]?.trim() || 'Board Concept & Numerical Question',
      pastYears: 'CBSE Previous Years & Sample Question Papers',
      highYieldPrompt: questionText
    };
  }

  return { definitions, keyPoints, extraPoints, reactions, examTrend, commonlyMadeErrors };
}

export function resolveStructuredSectionData(section, subtopicId, chapterId) {
  const curated = section?.structuredData || STRUCTURED_NOTES_DATA[section?.id] || STRUCTURED_NOTES_DATA[subtopicId];
  if (curated) {
    const enrichedReactions = (curated.reactions || []).map((r) => {
      const matchingDiag = REACTION_DIAGRAMS.find((d) => d.id === r.diagramId);
      return {
        ...r,
        diagRef: matchingDiag
      };
    });

    return {
      ...curated,
      reactions: enrichedReactions
    };
  }

  return parseFallbackStructuredContent(section, subtopicId, chapterId);
}

const normalizeDerivationTitle = (str = '') =>
  str
    .toLowerCase()
    .replace(/\(slide[^)]*\)/gi, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export function resolvePhysicsSectionData(section, subtopicId, diagramId = null, diagramSubMode = null) {
  const matchedQ = getPhysicsSectionEnrichment(subtopicId);
  const comparisonTable = matchedQ?.comparisonTable || null;

  const theoryPoints =
    matchedQ?.theory && matchedQ.theory.length > 0
      ? matchedQ.theory
      : section?.explanation
      ? [section.explanation]
      : [];

  const refDerivations = getDerivationsBySubtopic(subtopicId) || [];
  const enrichDerivations = matchedQ?.derivations || [];
  const mappedRefDerivations = refDerivations.map((d) => ({
    id: d.id,
    name: d.title,
    setup: d.setup,
    steps: d.steps || [],
    specialCases: Array.isArray(d.specialCases)
      ? d.specialCases.map((sc) =>
          typeof sc === 'string'
            ? { title: 'Key Result & Special Case', text: sc }
            : sc
        )
      : [],
    finalFormula: d.finalFormula,
    diagramId: d.diagramId,
    diagramSubMode: d.diagramSubMode || d.subMode || undefined,
    importance: d.importance,
    syllabusStatus: d.syllabusStatus,
    slideRange: d.slideRange
  }));

  const combinedDerivations = [...mappedRefDerivations];
  for (const enrD of enrichDerivations) {
    const enrKey = normalizeDerivationTitle(enrD.name);
    const alreadyCovered = combinedDerivations.some((refD) => {
      const refKey = normalizeDerivationTitle(refD.name);
      if (refKey === enrKey) return true;
      const enrTokens = enrKey.split(' ').filter((w) => w.length >= 4);
      const refTokens = new Set(refKey.split(' ').filter((w) => w.length >= 4));
      if (enrTokens.length === 0) return false;
      const overlap = enrTokens.filter((w) => refTokens.has(w)).length;
      return overlap / enrTokens.length >= 0.6;
    });
    if (!alreadyCovered) {
      combinedDerivations.push({
        ...enrD,
        diagramId: enrD.diagramId || matchedQ?.diagram?.diagramId || diagramId || null,
        diagramSubMode: enrD.diagramSubMode || enrD.subMode || matchedQ?.diagram?.subMode || diagramSubMode || undefined
      });
    }
  }

  const hasCuratedDerivation = combinedDerivations.length > 0;
  const sectionDerivationText = section?.derivations || null;
  const hasAnyDerivation = hasCuratedDerivation || Boolean(sectionDerivationText);

  const resolvedDiagramId = diagramId || PHYSICS_SUBTOPIC_DIAGRAMS[subtopicId] || matchedQ?.diagram?.diagramId || null;
  const resolvedDiagramSubMode = diagramSubMode || PHYSICS_SUBTOPIC_SUBMODES[subtopicId] || matchedQ?.diagram?.subMode || undefined;
  const examDrawingGuide = matchedQ?.diagram?.examDrawingGuide || [];

  const keyPoints =
    matchedQ?.keyPointsAndKeywords && matchedQ.keyPointsAndKeywords.length > 0
      ? matchedQ.keyPointsAndKeywords
      : section?.keyFormulas || [];

  const termsGlossary = matchedQ?.termsGlossary || [];

  const structuredData = STRUCTURED_NOTES_DATA[subtopicId] || null;
  const oswaalDefinitions = structuredData?.definitions || [];
  const oswaalMnemonic = structuredData?.oswaalMnemonic || null;
  const commonlyMadeErrors = structuredData?.commonlyMadeErrors || [];
  const assertionReason = structuredData?.assertionReason || null;
  const examTrend = structuredData?.examTrend || null;

  return {
    matchedQ,
    comparisonTable,
    theoryPoints,
    combinedDerivations,
    hasCuratedDerivation,
    sectionDerivationText,
    hasAnyDerivation,
    resolvedDiagramId,
    resolvedDiagramSubMode,
    examDrawingGuide,
    keyPoints,
    termsGlossary,
    oswaalDefinitions,
    oswaalMnemonic,
    commonlyMadeErrors,
    assertionReason,
    examTrend
  };
}

/**
 * Returns the complete array of independent tickable topic IDs inside a section
 * across EVERY subject (Physics, Chemistry, Biology, Standard Maths, Applied Maths, Psychology, English).
 */
export function getSectionTopicIds(section, subtopicId, chapterId, subjectId, isCleanMode = false) {
  if (!section) return [];
  const secId = section.id;
  const ids = [];

  if (subjectId === 'physics') {
    const pData = resolvePhysicsSectionData(section, subtopicId);

    // 1. Theory Points
    pData.theoryPoints.forEach((_, idx) => {
      ids.push(`${secId}::phy-theory-${idx}`);
    });

    // 2. Comparison Table if present
    if (pData.comparisonTable && pData.comparisonTable.rows) {
      ids.push(`${secId}::phy-tbl-0`);
    }

    // 3. Derivations
    if (pData.hasCuratedDerivation) {
      pData.combinedDerivations.forEach((_, idx) => {
        ids.push(`${secId}::phy-drv-${idx}`);
      });
    } else if (pData.sectionDerivationText) {
      ids.push(`${secId}::phy-drv-0`);
    }

    // 4. Visual Diagram
    if (pData.resolvedDiagramId) {
      ids.push(`${secId}::phy-diag`);
    }

    // 5. Terms Glossary
    pData.termsGlossary.forEach((_, idx) => {
      ids.push(`${secId}::phy-term-${idx}`);
    });

    // 6. Key Formulas
    if (Array.isArray(section.keyFormulas)) {
      section.keyFormulas.forEach((_, idx) => {
        ids.push(`${secId}::eq-${idx}`);
      });
    }

    // 7. Non-Clean Mode Definitions
    if (!isCleanMode && Array.isArray(pData.oswaalDefinitions)) {
      pData.oswaalDefinitions.forEach((_, idx) => {
        ids.push(`${secId}::phy-odef-${idx}`);
      });
    }
  } else {
    const sData = resolveStructuredSectionData(section, subtopicId, chapterId);

    // 1. Visual Diagrams (including individual reactions in glucose-five-reactions)
    if (Array.isArray(sData.visualDiagrams)) {
      sData.visualDiagrams.forEach((diag, dIdx) => {
        if (diag.id === 'glucose-five-reactions') {
          [1, 2, 3, 4, 5].forEach((rNum) => {
            ids.push(`${secId}::vdiag-rxn-${rNum}`);
          });
        } else {
          ids.push(`${secId}::vdiag-${diag.id || dIdx}`);
        }
      });
    }

    // 2. Definitions (1, 2, 3...)
    if (Array.isArray(sData.definitions)) {
      sData.definitions.forEach((_, idx) => {
        ids.push(`${secId}::def-${idx}`);
      });
    }

    // 3. Key Points (1, 2, 3...)
    if (Array.isArray(sData.keyPoints)) {
      sData.keyPoints.forEach((_, idx) => {
        ids.push(`${secId}::kp-${idx}`);
      });
    }

    // 4. Comparison / Distinguish Tables (1, 2...)
    if (Array.isArray(sData.comparisonTables)) {
      sData.comparisonTables.forEach((_, idx) => {
        ids.push(`${secId}::tbl-${idx}`);
      });
    }

    // 5. Exam Questions, Give Reasons, Remedial Qs & Reactions (1, 2, 3...)
    if (Array.isArray(sData.qaPairs)) {
      sData.qaPairs.forEach((_, idx) => {
        ids.push(`${secId}::qa-${idx}`);
      });
    }

    // 6. Non-Clean Mode Extra Points & Named Reactions
    if (!isCleanMode) {
      if (Array.isArray(sData.extraPoints)) {
        sData.extraPoints.forEach((_, idx) => {
          ids.push(`${secId}::ep-${idx}`);
        });
      }
      if (Array.isArray(sData.reactions)) {
        sData.reactions.forEach((_, idx) => {
          ids.push(`${secId}::rxn-${idx}`);
        });
      }
    }

    // 7. Key Formulas (Eq 1, Eq 2, Eq 3...)
    if (Array.isArray(section.keyFormulas)) {
      section.keyFormulas.forEach((_, idx) => {
        ids.push(`${secId}::eq-${idx}`);
      });
    }
  }

  if (ids.length === 0) {
    return [secId];
  }

  return ids;
}

/**
 * Checks whether an individual independent topic is completed.
 * A topic is completed if its ID is in completedSections OR its parent section ID is in completedSections.
 */
export function isTopicCompleted(topicId, parentSectionId, completedSetOrArray) {
  const has = (id) =>
    completedSetOrArray instanceof Set
      ? completedSetOrArray.has(id)
      : Array.isArray(completedSetOrArray) && completedSetOrArray.includes(id);

  if (has(topicId)) return true;
  if (parentSectionId && has(parentSectionId)) return true;
  return false;
}

export function getSubchapterTopicIds(subchapter, chapterId, subjectId, isCleanMode = false) {
  if (!subchapter || !Array.isArray(subchapter.sections)) return [];
  const all = [];
  subchapter.sections.forEach((sec) => {
    const secTopics = getSectionTopicIds(sec, subchapter.id, chapterId, subjectId, isCleanMode);
    secTopics.forEach((tId) => all.push({ topicId: tId, sectionId: sec.id }));
  });
  return all;
}
