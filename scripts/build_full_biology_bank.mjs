import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { BIG_ORANGE_CORE_QUESTIONS, BIG_ORANGE_PAGE_QUESTIONS } from '../src/data/biologyImportantQuestionsData.js';
import { CH4_CH5_ENHANCEMENTS } from './bio_derivations_ch4_ch5.mjs';
import { CH1_CH2_CH3_ENHANCEMENTS } from './bio_derivations_ch1_ch2_ch3.mjs';
import { CH7_CH8_CH9_CH10_ENHANCEMENTS } from './bio_derivations_ch7_ch8_ch9_ch10.mjs';
import { PAGE_QUESTIONS_ENHANCEMENTS } from './bio_derivations_page_questions.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, '../src/data/biologyImportantQuestionsData.js');

const allCoreEnhancements = {
  ...CH4_CH5_ENHANCEMENTS,
  ...CH1_CH2_CH3_ENHANCEMENTS,
  ...CH7_CH8_CH9_CH10_ENHANCEMENTS
};

console.log('Core questions count:', BIG_ORANGE_CORE_QUESTIONS.length);
console.log('Core enhancements count:', Object.keys(allCoreEnhancements).length);
console.log('Page questions count:', BIG_ORANGE_PAGE_QUESTIONS.length);
console.log('Page enhancements count:', Object.keys(PAGE_QUESTIONS_ENHANCEMENTS).length);

// Apply enhancements to Core Questions
const updatedCore = BIG_ORANGE_CORE_QUESTIONS.map(q => {
  const enh = allCoreEnhancements[q.id];
  if (!enh) {
    console.warn('Missing enhancement for core question:', q.id);
    return q;
  }
  return {
    ...q,
    ...enh
  };
});

// Apply enhancements to Page Questions
const updatedPage = BIG_ORANGE_PAGE_QUESTIONS.map(q => {
  const enh = PAGE_QUESTIONS_ENHANCEMENTS[q.id];
  if (!enh) {
    console.warn('Missing enhancement for page question:', q.id);
    return q;
  }
  return {
    ...q,
    ...enh
  };
});

console.log('All questions updated successfully!');

// Generate file content
const fileHeader = `// Official CBSE Class 12 Biology High-Yield Question Bank
// Clean, Concise, and Rigorously Formatted into 4 Distinct Parts:
// Part 1: Core Biological Principles & NCERT Definitions (Point-wise bullets)
// Part 2: Step-by-Step Biological Mechanism, Flowchart or Genetic Cross (Setup, Steps, Boxed Final Result)
// Part 3: NCERT Diagram & CBSE Exam Drawing Guide (Labelled Schematics & Drawing Instructions)
// Part 4: High-Yield Key Points & Mandatory Keywords + Official Marking Scheme + Examiner's Tips

`;

const fileContent = `${fileHeader}export const BIG_ORANGE_CORE_QUESTIONS = ${JSON.stringify(updatedCore, null, 2)};

export const BIG_ORANGE_PAGE_QUESTIONS = ${JSON.stringify(updatedPage, null, 2)};

export const ALL_BIG_ORANGE_QUESTIONS = [
  ...BIG_ORANGE_CORE_QUESTIONS,
  ...BIG_ORANGE_PAGE_QUESTIONS
];
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully written updated biologyImportantQuestionsData.js! Size:', fileContent.length);
