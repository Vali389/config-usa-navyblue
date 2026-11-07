import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  const scratch = path.join(__dirname, '..', '..', '..', '..', 'brain', '0d9dba0b-e2fc-44fe-8a96-97ef16865dce', 'scratch');
  fs.mkdirSync(scratch, { recursive: true });

  const candidates = [
    // 1. Sleek sunlit high-rise executive boardroom with panoramic glass skyline
    { name: 'boardroom_candidate_1.jpg', url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1920&h=1080&q=85' },
    // 2. High-end modern sunlit corporate boardroom table overlooking glass skyscraper
    { name: 'boardroom_candidate_2.jpg', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&h=1080&q=85' },
    // 3. Ultra-modern luxury corporate lobby / reception with marble & daylight
    { name: 'reception_candidate_1.jpg', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&h=1080&q=85' },
    // 4. Bright luxury corporate executive reception atrium with clean architectural desk
    { name: 'reception_candidate_2.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=1080&q=85' },
  ];

  for (const c of candidates) {
    const dest = path.join(scratch, c.name);
    try {
      console.log(`Downloading ${c.name}...`);
      await downloadFile(c.url, dest);
      console.log(`Success: ${c.name}`);
    } catch (e) {
      console.error(`Error downloading ${c.name}:`, e.message);
    }
  }
}

main().catch(console.error);

