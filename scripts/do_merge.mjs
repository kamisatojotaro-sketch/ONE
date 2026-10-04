
import fs from 'fs';
import path from 'path';
import { STRUCTURED_NOTES_DATA } from '../src/data/structuredNotesData.js';

const newPhysics = JSON.parse(fs.readFileSync("C:\\Users\\S Jaasim Hasan\\.gemini\\antigravity\\playground\\giant-prominence\\scripts\\new_physics.json", 'utf8'));

const merged = {
  ...STRUCTURED_NOTES_DATA,
  ...newPhysics
};

const outContent = `// NCERT Class 12 Structured Notes Database\n// Enhanced with Oswaal-grade study aids: Mnemonics, Commonly Made Errors, CBSE Assertion-Reason, and Exam Trends\n// Covers all active subtopics across Physics & Chemistry Chapters\n\nexport const STRUCTURED_NOTES_DATA = ${JSON.stringify(merged, null, 2)};\n`;

fs.writeFileSync("C:\\Users\\S Jaasim Hasan\\.gemini\\antigravity\\playground\\giant-prominence\\src\\data\\structuredNotesData.js", outContent, 'utf8');
console.log('Successfully merged! Total keys in STRUCTURED_NOTES_DATA:', Object.keys(merged).length);
