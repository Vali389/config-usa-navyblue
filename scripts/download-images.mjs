import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const baseUrl = 'https://config-usa-gold.vercel.app';
  console.log('Fetching index page...');
  const html = await fetchText(baseUrl + '/');
  
  const jsMatch = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
  let allAssets = new Set();
  
  if (jsMatch) {
    const jsUrl = baseUrl + jsMatch[1];
    console.log('Fetching JS bundle:', jsUrl);
    const jsContent = await fetchText(jsUrl);
    
    // Find all asset paths in JS
    const assetMatches = jsContent.match(/\/assets\/[^"'`\s\)]+\.(jpg|jpeg|png|webp|svg)/gi) || [];
    for (const a of assetMatches) {
      allAssets.add(a);
    }
  }

  // Also match assets in HTML
  const htmlAssets = html.match(/\/assets\/[^"'`\s\)]+\.(jpg|jpeg|png|webp|svg)/gi) || [];
  for (const a of htmlAssets) {
    allAssets.add(a);
  }

  console.log('Found assets count:', allAssets.size);

  const targetDir = path.join(__dirname, '..', 'public', 'assets');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const assetPath of allAssets) {
    const filename = path.basename(assetPath);
    const cleanFilename = filename.split('?')[0];
    const fullUrl = baseUrl + (assetPath.startsWith('/') ? assetPath : '/' + assetPath);
    const dest = path.join(targetDir, cleanFilename);
    console.log(`Downloading ${cleanFilename}...`);
    try {
      await downloadFile(fullUrl, dest);
      console.log(`Saved ${cleanFilename}`);
    } catch (e) {
      console.error(`Error downloading ${cleanFilename}:`, e.message);
    }
  }
  console.log('Done!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

