import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brainDir = 'C:\\Users\\meera\\.gemini\\antigravity\\brain\\0d9dba0b-e2fc-44fe-8a96-97ef16865dce';
const targetDir = path.resolve(__dirname, '../public/assets');

const mappings = [
  { prefix: 'hero_contact_bright', dest: 'hero-contact-bright.jpg' },
  { prefix: 'hero_about_bright', dest: 'hero-about-bright.jpg' },
  { prefix: 'hero_why_bright', dest: 'hero-why-bright.jpg' },
  { prefix: 'hero_itstaffing_bright', dest: 'hero-itstaffing-bright.jpg' },
  { prefix: 'hero_workforce_bright', dest: 'hero-workforce-bright.jpg' },
  { prefix: 'hero_msp_bright', dest: 'hero-msp-bright.jpg' },
  { prefix: 'hero_consulting_bright', dest: 'hero-consulting-bright.jpg' },
  { prefix: 'hero_sap_bright', dest: 'hero-sap-bright.jpg' },
  { prefix: 'hero_workday_bright', dest: 'hero-workday-bright.jpg' },
  { prefix: 'hero_leadership_bright', dest: 'hero-leadership-bright.jpg' },
  { prefix: 'hero_platforms_bright', dest: 'hero-platforms-bright.jpg' },
  { prefix: 'hero_solutions_bright', dest: 'hero-solutions-bright.jpg' },
  { prefix: 'hero_corporate_bright', dest: 'hero-corporate-bright.jpg' },
];

if (!fs.existsSync(brainDir)) {
  console.error('Brain dir does not exist:', brainDir);
  process.exit(1);
}

const files = fs.readdirSync(brainDir);

for (const map of mappings) {
  const matching = files
    .filter(f => f.startsWith(map.prefix) && f.endsWith('.jpg'))
    .sort()
    .reverse();

  if (matching.length > 0) {
    const srcPath = path.join(brainDir, matching[0]);
    const destPath = path.join(targetDir, map.dest);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${matching[0]} -> ${map.dest} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.log(`Pending: no file for prefix ${map.prefix}`);
  }
}
