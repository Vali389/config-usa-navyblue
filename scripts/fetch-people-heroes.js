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
  const scratch = 'd:/brain/0d9dba0b-e2fc-44fe-8a96-97ef16865dce/scratch';
  fs.mkdirSync(scratch, { recursive: true });

  const peopleCandidates = [
    // 1. Executive Boardroom Meeting: Diverse enterprise tech leaders collaborating around modern table with laptops & daylight
    {
      name: 'people_hero_boardroom.jpg',
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&h=1080&q=85'
    },
    // 2. Modern Enterprise Team Strategy Session: High-tech consulting team reviewing plans in bright sunlit office
    {
      name: 'people_hero_strategy.jpg',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1080&q=85'
    },
    // 3. Contact & Client Engagement: Warm, professional executive consultation in sunlit modern office lobby
    {
      name: 'people_contact_advisory.jpg',
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&h=1080&q=85'
    },
    // 4. Executive Partnership Greeting: Welcoming consultant and client discussion in glass architectural atrium
    {
      name: 'people_contact_meeting.jpg',
      url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&h=1080&q=85'
    }
  ];

  for (const c of peopleCandidates) {
    const dest = path.join(scratch, c.name);
    try {
      console.log(`Downloading ${c.name}...`);
      await downloadFile(c.url, dest);
      console.log(`Downloaded ${c.name} successfully!`);
    } catch (e) {
      console.error(`Failed ${c.name}:`, e.message);
    }
  }
}

main().catch(console.error);

