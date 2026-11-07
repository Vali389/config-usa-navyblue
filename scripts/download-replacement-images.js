import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

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
  const assetsDir = 'd:/3rd-website/public/assets';

  // 1. Clean, pristine About Us Hero (Executive leadership partners, sunlit high-rise, NO fake text)
  // Photo: Top enterprise partners in tailored business attire discussing company vision in sunlit modern glass boardroom
  const aboutUrl = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&h=1080&q=85';
  const aboutDest = path.join(assetsDir, 'hero-about-clean.jpg');

  // 2. High-tech Cross-Industry Technology & Engineering (Replacing the woman with crossed arms)
  // Photo: Modern enterprise technology consultant & team collaborating around advanced analytics in a high-tech facility
  const industryUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&h=960&q=85';
  const industryDest = path.join(assetsDir, 'industry-experience-new.jpg');

  // Alternative Industry option: Enterprise team collaborating across screens & operations
  const industryAltUrl = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&h=960&q=85';
  const industryAltDest = path.join(assetsDir, 'industry-experience-alt.jpg');

  console.log('Downloading about hero image...');
  await downloadFile(aboutUrl, aboutDest);
  console.log('Saved hero-about-clean.jpg');

  console.log('Downloading industry experience new image...');
  await downloadFile(industryUrl, industryDest);
  console.log('Saved industry-experience-new.jpg');

  console.log('Downloading industry experience alt image...');
  await downloadFile(industryAltUrl, industryAltDest);
  console.log('Saved industry-experience-alt.jpg');
}

main().catch(console.error);

