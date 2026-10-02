import { NCERT_SYLLABUS } from '../data/ncertSyllabus.js';
import { STRUCTURED_NOTES_DATA } from '../data/structuredNotesData.js';
import { REACTION_DIAGRAMS } from '../data/reactionDiagramsData.js';
import { MCQ_DATABASE } from '../data/mcqData.js';
import { PYQ_DATABASE } from '../data/pyqData.js';

// Cache for the compiled in-memory index
let cachedSearchIndex = null;

// Helper to strip HTML tags for clean search and snippet extraction
function stripHtml(html) {
  if (!html || typeof html !== 'string') return '';
  return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Builds the comprehensive search index once in memory across:
 * - All subjects, volumes, chapters, subchapters, and sections
 * - Definitions, key points, extra points, reactions, and mnemonics
 * - Named reaction diagrams
 * - Curated MCQs & PYQs
 */
export function buildStudySearchIndex() {
  if (cachedSearchIndex) return cachedSearchIndex;

  const items = [];

  // 1. Traverse all Syllabus Chapters, Subchapters & Sections
  Object.entries(NCERT_SYLLABUS).forEach(([subjKey, subj]) => {
    subj.volumes.forEach((vol) => {
      vol.chapters.forEach((ch) => {
        // Index Chapter itself
        items.push({
          id: `ch-${ch.id}`,
          subjectId: subjKey,
          subjectName: subj.name,
          volumeId: vol.id,
          volumeTitle: vol.title,
          chapterId: ch.id,
          chapterTitle: ch.title,
          chapterNumber: ch.number,
          subchapterId: ch.subchapters?.[0]?.id || null,
          subchapterTitle: ch.subchapters?.[0]?.title || null,
          type: 'topic',
          typeLabel: 'Chapter',
          title: `Ch ${ch.number}: ${ch.title}`,
          content: `${ch.description || ''} ${ch.tag || ''} ${vol.title}`,
          tab: 'NOTES',
          rawItem: ch
        });

        if (!ch.subchapters) return;

        ch.subchapters.forEach((sub) => {
          // Index Subchapter
          items.push({
            id: `sub-${sub.id}`,
            subjectId: subjKey,
            subjectName: subj.name,
            volumeId: vol.id,
            volumeTitle: vol.title,
            chapterId: ch.id,
            chapterTitle: ch.title,
            chapterNumber: ch.number,
            subchapterId: sub.id,
            subchapterTitle: sub.title,
            type: 'topic',
            typeLabel: 'Topic / Subchapter',
            title: sub.title,
            content: `${sub.description || ''} ${sub.tag || ''}`,
            tab: 'NOTES',
            rawItem: sub
          });

          // Index Sections inside Subchapter
          if (sub.sections) {
            sub.sections.forEach((sec) => {
              const cleanExplanation = stripHtml(sec.explanation);
              items.push({
                id: `sec-${sec.id}`,
                subjectId: subjKey,
                subjectName: subj.name,
                volumeId: vol.id,
                volumeTitle: vol.title,
                chapterId: ch.id,
                chapterTitle: ch.title,
                chapterNumber: ch.number,
                subchapterId: sub.id,
                subchapterTitle: sub.title,
                sectionId: sec.id,
                type: 'key_point',
                typeLabel: 'Key Section',
                title: sec.title,
                content: `${cleanExplanation} ${sec.questionFraming || ''}`,
                tab: 'NOTES',
                rawItem: sec
              });

              // Index Key Formulas if present
              if (sec.keyFormulas) {
                const kfArr = Array.isArray(sec.keyFormulas) ? sec.keyFormulas : [sec.keyFormulas];
                kfArr.forEach((kf, kfIdx) => {
                  const formulaTitle = typeof kf === 'string' ? kf : (kf.name || kf.formula || 'Formula');
                  const formulaContent = typeof kf === 'string' ? kf : `${kf.formula || ''} ${kf.description || ''}`;
                  items.push({
                    id: `sec-kf-${sec.id}-${kfIdx}`,
                    subjectId: subjKey,
                    subjectName: subj.name,
                    volumeId: vol.id,
                    volumeTitle: vol.title,
                    chapterId: ch.id,
                    chapterTitle: ch.title,
                    chapterNumber: ch.number,
                    subchapterId: sub.id,
                    subchapterTitle: sub.title,
                    sectionId: sec.id,
                    type: 'formula',
                    typeLabel: 'Formula',
                    title: formulaTitle,
                    content: formulaContent,
                    tab: 'NOTES',
                    rawItem: kf
                  });
                });
              }
            });
          }

          // Index sub.formulas if present
          if (sub.formulas) {
            sub.formulas.forEach((f, fIdx) => {
              items.push({
                id: `sub-f-${sub.id}-${fIdx}`,
                subjectId: subjKey,
                subjectName: subj.name,
                volumeId: vol.id,
                volumeTitle: vol.title,
                chapterId: ch.id,
                chapterTitle: ch.title,
                chapterNumber: ch.number,
                subchapterId: sub.id,
                subchapterTitle: sub.title,
                type: 'formula',
                typeLabel: 'Formula',
                title: f.name || f.formula || 'Key Formula',
                content: `${f.formula || ''} ${f.description || ''}`,
                tab: 'NOTES',
                rawItem: f
              });
            });
          }
        });
      });
    });
  });

  // 2. Structured Notes (Definitions, Key Points, Reactions, Mnemonics, Commonly Made Errors)
  Object.entries(STRUCTURED_NOTES_DATA).forEach(([subId, sn]) => {
    // Locate metadata for this subchapter
    let meta = null;
    for (const [subjKey, subj] of Object.entries(NCERT_SYLLABUS)) {
      for (const vol of subj.volumes) {
        for (const ch of vol.chapters) {
          const found = ch.subchapters?.find((s) => s.id === subId);
          if (found) {
            meta = {
              subjKey,
              subjName: subj.name,
              volId: vol.id,
              volTitle: vol.title,
              chId: ch.id,
              chTitle: ch.title,
              chNumber: ch.number,
              subTitle: found.title
            };
            break;
          }
        }
        if (meta) break;
      }
      if (meta) break;
    }

    if (!meta) return;

    // Definitions
    if (sn.definitions) {
      sn.definitions.forEach((def, dIdx) => {
        items.push({
          id: `def-${subId}-${dIdx}`,
          subjectId: meta.subjKey,
          subjectName: meta.subjName,
          volumeId: meta.volId,
          volumeTitle: meta.volTitle,
          chapterId: meta.chId,
          chapterTitle: meta.chTitle,
          chapterNumber: meta.chNumber,
          subchapterId: subId,
          subchapterTitle: meta.subTitle,
          type: 'definition',
          typeLabel: 'Definition',
          title: def.term,
          content: def.definition,
          tab: 'NOTES',
          rawItem: def
        });
      });
    }

    // Key points
    if (sn.keyPoints) {
      sn.keyPoints.forEach((kp, kpIdx) => {
        const cleanKp = stripHtml(kp);
        items.push({
          id: `kp-${subId}-${kpIdx}`,
          subjectId: meta.subjKey,
          subjectName: meta.subjName,
          volumeId: meta.volId,
          volumeTitle: meta.volTitle,
          chapterId: meta.chId,
          chapterTitle: meta.chTitle,
          chapterNumber: meta.chNumber,
          subchapterId: subId,
          subchapterTitle: meta.subTitle,
          type: 'key_point',
          typeLabel: 'Key Point',
          title: `${meta.subTitle} - Concept Point`,
          content: cleanKp,
          tab: 'NOTES',
          rawItem: kp
        });
      });
    }

    // Extra points
    if (sn.extraPoints) {
      sn.extraPoints.forEach((ep, epIdx) => {
        const cleanEp = stripHtml(ep);
        items.push({
          id: `ep-${subId}-${epIdx}`,
          subjectId: meta.subjKey,
          subjectName: meta.subjName,
          volumeId: meta.volId,
          volumeTitle: meta.volTitle,
          chapterId: meta.chId,
          chapterTitle: meta.chTitle,
          chapterNumber: meta.chNumber,
          subchapterId: subId,
          subchapterTitle: meta.subTitle,
          type: 'key_point',
          typeLabel: 'Extra High-Yield Point',
          title: `${meta.subTitle} - Extra Note`,
          content: cleanEp,
          tab: 'NOTES',
          rawItem: ep
        });
      });
    }

    // Reactions
    if (sn.reactions) {
      sn.reactions.forEach((rxn, rIdx) => {
        items.push({
          id: `rxn-${subId}-${rIdx}`,
          subjectId: meta.subjKey,
          subjectName: meta.subjName,
          volumeId: meta.volId,
          volumeTitle: meta.volTitle,
          chapterId: meta.chId,
          chapterTitle: meta.chTitle,
          chapterNumber: meta.chNumber,
          subchapterId: subId,
          subchapterTitle: meta.subTitle,
          type: 'reaction',
          typeLabel: 'Named Reaction',
          title: rxn.name || 'Chemical Reaction',
          content: `${rxn.equation || ''} ${rxn.mechanism || ''} ${rxn.description || ''}`,
          tab: 'NOTES',
          rawItem: rxn
        });
      });
    }

    // Oswaal Mnemonic
    if (sn.oswaalMnemonic) {
      items.push({
        id: `mnem-${subId}`,
        subjectId: meta.subjKey,
        subjectName: meta.subjName,
        volumeId: meta.volId,
        volumeTitle: meta.volTitle,
        chapterId: meta.chId,
        chapterTitle: meta.chTitle,
        chapterNumber: meta.chNumber,
        subchapterId: subId,
        subchapterTitle: meta.subTitle,
        type: 'mnemonic',
        typeLabel: 'Oswaal Mnemonic',
        title: `Mnemonic: ${sn.oswaalMnemonic.title}`,
        content: `${sn.oswaalMnemonic.phrase} ${sn.oswaalMnemonic.explanation || ''}`,
        tab: 'NOTES',
        rawItem: sn.oswaalMnemonic
      });
    }

    // Commonly Made Errors
    if (sn.commonlyMadeErrors) {
      sn.commonlyMadeErrors.forEach((err, errIdx) => {
        items.push({
          id: `err-${subId}-${errIdx}`,
          subjectId: meta.subjKey,
          subjectName: meta.subjName,
          volumeId: meta.volId,
          volumeTitle: meta.volTitle,
          chapterId: meta.chId,
          chapterTitle: meta.chTitle,
          chapterNumber: meta.chNumber,
          subchapterId: subId,
          subchapterTitle: meta.subTitle,
          type: 'key_point',
          typeLabel: 'Exam Pitfall / Error',
          title: `Common Error: ${err.error.slice(0, 70)}...`,
          content: `${err.error} Tip: ${err.tip || ''} Penalty: ${err.penalty || ''}`,
          tab: 'NOTES',
          rawItem: err
        });
      });
    }
  });

  // 3. Reaction Diagrams
  if (Array.isArray(REACTION_DIAGRAMS)) {
    REACTION_DIAGRAMS.forEach((diag) => {
      // Find subchapter metadata if subtopicId is present
      let meta = null;
      if (diag.subtopicId) {
        for (const [subjKey, subj] of Object.entries(NCERT_SYLLABUS)) {
          for (const vol of subj.volumes) {
            for (const ch of vol.chapters) {
              const found = ch.subchapters?.find((s) => s.id === diag.subtopicId);
              if (found) {
                meta = {
                  subjKey,
                  subjName: subj.name,
                  volId: vol.id,
                  volTitle: vol.title,
                  chId: ch.id,
                  chTitle: ch.title,
                  chNumber: ch.number,
                  subTitle: found.title
                };
                break;
              }
            }
            if (meta) break;
          }
          if (meta) break;
        }
      }

      const reactantsText = Array.isArray(diag.reactants)
        ? diag.reactants.map((r) => `${r.name || ''} (${r.formula || ''})`).join(' ')
        : '';
      const productsText = Array.isArray(diag.products)
        ? diag.products.map((p) => `${p.name || ''} (${p.formula || ''})`).join(' ')
        : '';

      items.push({
        id: `diag-${diag.id}`,
        subjectId: meta?.subjKey || (diag.chapterId?.startsWith('phy') ? 'physics' : 'chemistry'),
        subjectName: meta?.subjName || (diag.chapterId?.startsWith('phy') ? 'Physics' : 'Chemistry'),
        volumeId: meta?.volId || (diag.chapterId?.startsWith('phy') ? 'phy-vol-1' : 'chem-vol-1'),
        volumeTitle: meta?.volTitle || 'NCERT Volume',
        chapterId: meta?.chId || diag.chapterId,
        chapterTitle: meta?.chTitle || diag.chapterId,
        chapterNumber: meta?.chNumber || null,
        subchapterId: diag.subtopicId || meta?.subTitle || null,
        subchapterTitle: meta?.subTitle || diag.subtitle || null,
        type: 'reaction',
        typeLabel: 'Reaction & Mechanism',
        title: diag.title,
        content: `${diag.subtitle || ''} ${diag.boardNote || ''} Reactants: ${reactantsText} Products: ${productsText} Category: ${diag.category || ''}`,
        tab: 'NOTES',
        rawItem: diag
      });
    });
  }

  // 4. MCQ Question Bank
  Object.entries(MCQ_DATABASE).forEach(([subjKey, mcqList]) => {
    const subjName = NCERT_SYLLABUS[subjKey]?.name || subjKey;
    mcqList.forEach((q) => {
      // Find volume
      let volId = null;
      let volTitle = null;
      const subj = NCERT_SYLLABUS[subjKey];
      if (subj) {
        for (const v of subj.volumes) {
          if (v.chapters.some((c) => c.id === q.chapterId)) {
            volId = v.id;
            volTitle = v.title;
            break;
          }
        }
      }

      items.push({
        id: `mcq-${q.id}`,
        subjectId: subjKey,
        subjectName: subjName,
        volumeId: volId || `${subjKey}-vol-1`,
        volumeTitle: volTitle || `${subjName} Volume 1`,
        chapterId: q.chapterId,
        chapterTitle: q.chapterName,
        chapterNumber: null,
        subchapterId: q.subtopicId,
        subchapterTitle: null,
        type: 'question',
        typeLabel: 'Board MCQ',
        title: `MCQ: ${stripHtml(q.question).slice(0, 85)}...`,
        content: `${stripHtml(q.question)} Options: ${q.options?.join(' ')} Explanation: ${stripHtml(q.explanation || '')}`,
        tab: 'MCQ',
        rawItem: q
      });
    });
  });

  // 5. PYQ Question Bank
  Object.entries(PYQ_DATABASE).forEach(([subjKey, pyqList]) => {
    const subjName = NCERT_SYLLABUS[subjKey]?.name || subjKey;
    pyqList.forEach((q) => {
      let volId = null;
      let volTitle = null;
      const subj = NCERT_SYLLABUS[subjKey];
      if (subj) {
        for (const v of subj.volumes) {
          if (v.chapters.some((c) => c.id === q.chapterId)) {
            volId = v.id;
            volTitle = v.title;
            break;
          }
        }
      }

      items.push({
        id: `pyq-${q.id}`,
        subjectId: subjKey,
        subjectName: subjName,
        volumeId: volId || `${subjKey}-vol-1`,
        volumeTitle: volTitle || `${subjName} Volume 1`,
        chapterId: q.chapterId,
        chapterTitle: q.chapterName,
        chapterNumber: null,
        subchapterId: q.subtopicId,
        subchapterTitle: null,
        type: 'question',
        typeLabel: `PYQ (${q.year || 'Board'})`,
        title: `PYQ (${q.year || 'Past Board'}): ${stripHtml(q.question).slice(0, 85)}...`,
        content: `${stripHtml(q.question)} Solution: ${stripHtml(q.solution || '')}`,
        tab: 'PYQ',
        rawItem: q
      });
    });
  });

  // Pre-calculate lowercased searchable text for every item
  items.forEach((item) => {
    item.searchableText = `${item.title} ${item.content} ${item.chapterTitle || ''} ${item.subchapterTitle || ''} ${item.subjectName}`.toLowerCase();
  });

  cachedSearchIndex = items;
  return items;
}

/**
 * Extracts a contextual snippet around the matched search terms
 */
export function extractSnippet(content, query) {
  if (!content) return '';
  const clean = stripHtml(content);
  if (!query || !query.trim()) return clean.slice(0, 160) + (clean.length > 160 ? '...' : '');

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  let bestPos = -1;

  for (const term of terms) {
    const pos = clean.toLowerCase().indexOf(term);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }

  if (bestPos === -1) {
    return clean.slice(0, 160) + (clean.length > 160 ? '...' : '');
  }

  const start = Math.max(0, bestPos - 60);
  const end = Math.min(clean.length, bestPos + 120);
  let snippet = clean.slice(start, end);

  if (start > 0) snippet = '...' + snippet;
  if (end < clean.length) snippet = snippet + '...';

  return snippet;
}

/**
 * High performance search function supporting:
 * - Scope: 'all' (universal) or subject id ('physics', 'chemistry', 'biology', 'psychology')
 * - Type Filter: 'all', 'topic', 'definition', 'formula', 'reaction', 'key_point', 'question'
 */
export function searchStudyContent({
  query = '',
  subject = 'all',
  type = 'all',
  limit = 50
}) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const index = buildStudySearchIndex();
  // Support both hyphenated ("non-ideal") and space-separated ("non ideal") search queries
  const searchTerms = q.split(/[\s\-]+/).filter(Boolean);
  const normalizedQuery = q.replace(/[-_]/g, ' ');

  const matched = [];

  for (let i = 0; i < index.length; i++) {
    const item = index[i];

    // 1. Subject filter check
    if (subject && subject !== 'all' && item.subjectId !== subject) {
      continue;
    }

    // 2. Type filter check
    if (type && type !== 'all') {
      if (type === 'formula_reaction') {
        if (item.type !== 'formula' && item.type !== 'reaction') continue;
      } else if (item.type !== type) {
        continue;
      }
    }

    // 3. Multi-word search matching (resilient to hyphens and spaces)
    const fullText = item.searchableText;
    const normalizedFullText = fullText.replace(/[-_]/g, ' ');
    const allMatch = searchTerms.every((term) => fullText.includes(term) || normalizedFullText.includes(term));
    if (!allMatch) continue;

    // 4. Relevance Scoring
    let score = 0;
    const itemTitleLower = item.title.toLowerCase();
    const normalizedTitleLower = itemTitleLower.replace(/[-_]/g, ' ');

    // Exact query matches
    if (itemTitleLower === q || normalizedTitleLower === normalizedQuery) {
      score += 250;
    } else if (itemTitleLower.startsWith(q) || normalizedTitleLower.startsWith(normalizedQuery)) {
      score += 150;
    } else if (itemTitleLower.includes(q) || normalizedTitleLower.includes(normalizedQuery)) {
      score += 100;
    }

    // Specific boost for "non-ideal" queries
    if ((normalizedQuery.includes('non ideal') || q.includes('non-ideal')) && 
        (normalizedTitleLower.includes('non ideal') || item.subchapterId === 'chem-sub-1-4' || item.subchapterId === 'chem-sub-1-5')) {
      score += 120;
    }

    // Term-level scoring in title
    searchTerms.forEach((term) => {
      if (itemTitleLower.includes(term) || normalizedTitleLower.includes(term)) {
        score += 30;
      }
    });

    // Type boosts
    if (item.type === 'definition' && (itemTitleLower.includes(q) || normalizedTitleLower.includes(normalizedQuery))) {
      score += 60; // High value for definitions
    } else if (item.type === 'topic') {
      score += 45; // High value for direct syllabus topics
    } else if (item.type === 'formula' || item.type === 'reaction') {
      score += 35;
    }

    matched.push({
      ...item,
      snippet: extractSnippet(item.content, query),
      score
    });
  }

  // Sort by score descending
  matched.sort((a, b) => b.score - a.score);

  return matched.slice(0, limit);
}

// Popular suggested search queries for quick launch
export const POPULAR_SEARCH_SUGGESTIONS = {
  all: [
    { label: "Ideal vs Non-Ideal Solutions", query: "Non ideal", type: "Chemistry" },
    { label: "Faraday's Law", query: "Faraday", type: "Universal" },
    { label: "Aldol Condensation", query: "Aldol", type: "Chemistry" },
    { label: "Raoult's Law & Colligative", query: "Raoult", type: "Chemistry" },
    { label: "Coulomb's Law", query: "Coulomb", type: "Physics" },
    { label: "Electric Flux & Gauss", query: "Gauss flux", type: "Physics" },
    { label: "DNA Replication", query: "DNA replication", type: "Biology" },
    { label: "Molarity vs Molality", query: "Molarity molality", type: "Chemistry" },
    { label: "Self and Personality", query: "Self personality", type: "Psychology" },
  ],
  physics: [
    { label: "Faraday's Induction", query: "Faraday", type: "Physics" },
    { label: "Gauss's Law & Flux", query: "Gauss flux", type: "Physics" },
    { label: "Coulomb's Vector Law", query: "Coulomb", type: "Physics" },
    { label: "Lenz's Law & Energy", query: "Lenz", type: "Physics" },
    { label: "Capacitance & Dielectrics", query: "Capacitor dielectric", type: "Physics" },
    { label: "Drift Velocity & Mobility", query: "Drift velocity", type: "Physics" },
  ],
  chemistry: [
    { label: "Ideal & Non-Ideal Solutions", query: "Non ideal", type: "Chemistry" },
    { label: "Faraday's Electrolysis", query: "Faraday electrolysis", type: "Chemistry" },
    { label: "Aldol Condensation", query: "Aldol", type: "Chemistry" },
    { label: "Raoult's Law", query: "Raoult", type: "Chemistry" },
    { label: "Kohlrausch's Law", query: "Kohlrausch", type: "Chemistry" },
    { label: "Nernst Equation", query: "Nernst", type: "Chemistry" },
    { label: "Sandmeyer Reaction", query: "Sandmeyer", type: "Chemistry" },
  ],
  biology: [
    { label: "DNA Replication", query: "DNA replication", type: "Biology" },
    { label: "Transcription & Translation", query: "Transcription", type: "Biology" },
    { label: "Microsporogenesis", query: "Microsporogenesis", type: "Biology" },
    { label: "Lac Operon", query: "Lac operon", type: "Biology" },
    { label: "Mendelian Genetics", query: "Mendel", type: "Biology" },
  ],
  psychology: [
    { label: "Self & Personality", query: "Self", type: "Psychology" },
    { label: "Psychological Disorders", query: "Disorder", type: "Psychology" },
    { label: "Therapeutic Approaches", query: "Therapy", type: "Psychology" },
    { label: "Intelligence & Assessment", query: "Intelligence", type: "Psychology" },
  ]
};
