
import fs from 'fs';
import { PHYSICS_CHAPTERS } from '../src/data/physicsNotes.js';

const derivationsMap = JSON.parse(fs.readFileSync("C:\\Users\\S Jaasim Hasan\\.gemini\\antigravity\\playground\\giant-prominence\\scripts\\derivations_map.json", 'utf8'));

let injectedCount = 0;

PHYSICS_CHAPTERS.forEach(ch => {
  ch.subchapters.forEach(sub => {
    sub.sections.forEach(sec => {
      if (derivationsMap[sec.id]) {
        sec.derivations = derivationsMap[sec.id];
        injectedCount++;
      }
    });
  });
});

const outContent = `// Full Granular NCERT Class 12 Physics High-Yield Notes\n// Enriched with Step-by-Step Textbook Derivations (NODIA & NCERT Standards)\n\nexport const PHYSICS_CHAPTERS = ${JSON.stringify(PHYSICS_CHAPTERS, null, 2)};\n`;

fs.writeFileSync("C:\\Users\\S Jaasim Hasan\\.gemini\\antigravity\\playground\\giant-prominence\\src\\data\\physicsNotes.js", outContent, 'utf8');
console.log('Successfully injected derivations into', injectedCount, 'sections of physicsNotes.js!');
