const fs = require('fs');
const content = fs.readFileSync('src/data/biologyImportantQuestionsData.js', 'utf8');
const lines = content.split('\n');
let currentId = '';
let currentTitle = '';
let currentMarks = '';
let currentMarksNum = '';

for (const line of lines) {
  const idMatch = line.match(/id:\s*["']([^"']+)["']/);
  if (idMatch) currentId = idMatch[1];

  const titleMatch = line.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) currentTitle = titleMatch[1];

  const marksMatch = line.match(/marks:\s*["']([^"']+)["']/);
  if (marksMatch) currentMarks = marksMatch[1];

  const marksNumMatch = line.match(/marksNum:\s*(\d+)/);
  if (marksNumMatch) {
    currentMarksNum = marksNumMatch[1];
    console.log(`${currentId} | ${currentTitle} | marks: "${currentMarks}" | marksNum: ${currentMarksNum}`);
  }
}
