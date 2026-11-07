import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '..', 'public', 'assets');

const mappings = {
  'hero_enterprise_executives-BpSEHDm_.jpg': 'hero-executives.jpg',
  'who_we_are_reference_meeting-_YmMY1ZH.jpg': 'who-we-are.jpg',
  'case_study_team-BH6yixmA.jpg': 'consulting-team.jpg',
  'insights_workforce_team-SuYuuWlQ.jpg': 'workforce-team.jpg',
  'about-approach-D4GrTWmY.jpg': 'about-approach.jpg',
  'wd-workforce-e9N3mrRY.jpg': 'wd-workforce.jpg',
  'wd-enterprise-DRHgPo2D.jpg': 'wd-enterprise.jpg',
  'wd-ai-At1sLWpN.jpg': 'wd-ai.jpg',
  'wd-cloud-BEFSyuAx.jpg': 'wd-cloud.jpg',
  'story-gov-B_HumB4C.jpg': 'story-gov.jpg',
  'story-cloud-ChgEf4i-.jpg': 'story-cloud.jpg',
  'ind-financial-xAeGd2gk.jpg': 'ind-financial.jpg',
  'ind-healthcare-DUA-v_VR.jpg': 'ind-healthcare.jpg',
  'ind-technology-DGM1YRgT.jpg': 'ind-technology.jpg',
  'ind-manufacturing-DakWqMNC.jpg': 'ind-manufacturing.jpg',
  'ind-government-B7CJMyIw.jpg': 'ind-government.jpg',
  'ind-retail-DLcMCwxC.jpg': 'ind-retail.jpg',
  'config-logo-official-CooVvQtZ.png': 'configusa-logo-official.png'
};

for (const [src, dest] of Object.entries(mappings)) {
  const srcPath = path.join(assetsDir, src);
  const destPath = path.join(assetsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Source file not found: ${src}`);
  }
}

