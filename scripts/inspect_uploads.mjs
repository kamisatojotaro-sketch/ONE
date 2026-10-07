import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/S Jaasim Hasan/.gemini/antigravity/brain/5c1fb3a3-8091-4f27-bb53-e6cba59ed86b';
if (fs.existsSync(brainDir)) {
  console.log('Brain dir contents:', fs.readdirSync(brainDir));
  const uploadsDir = path.join(brainDir, '.user_uploaded');
  if (fs.existsSync(uploadsDir)) {
    console.log('.user_uploaded contents:', fs.readdirSync(uploadsDir));
  } else {
    console.log('.user_uploaded does not exist');
  }
} else {
  console.log('Brain dir does not exist');
}
