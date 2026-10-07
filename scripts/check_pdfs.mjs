import fs from 'fs';
import path from 'path';

const uploadsDir = 'C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b/.user_uploaded';

const pdfs = ['media_1791301762650.pdf', 'media_1791097346127.pdf', 'media_1791097346168.pdf'];

for (const pdf of pdfs) {
  const filePath = path.join(uploadsDir, pdf);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    console.log(pdf, 'size:', (stat.size / 1024 / 1024).toFixed(2), 'MB');
  }
}
