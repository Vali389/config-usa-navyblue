import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        return fetchText(nextUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        return downloadFile(nextUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function scrapeSite(baseUrl) {
  console.log(`\n=== Scraping ${baseUrl} ===`);
  const html = await fetchText(baseUrl);
  
  // Find script tags
  const scriptMatches = html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi);
  const scripts = Array.from(scriptMatches, m => m[1]);
  console.log('Scripts:', scripts);
  
  const allAssets = new Set();
  
  for (const script of scripts) {
    const sUrl = script.startsWith('http') ? script : new URL(script, baseUrl).href;
    console.log('Fetching script:', sUrl);
    try {
      const code = await fetchText(sUrl);
      const matches = code.match(/["'`]((\/assets\/|https?:\/\/)[^"'`\s\)]+\.(?:jpg|jpeg|png|webp|svg))["'`]/gi) || [];
      for (const m of matches) {
        const clean = m.replace(/["'`]/g, '');
        allAssets.add(clean);
      }
    } catch (e) {
      console.error('Error fetching script:', e.message);
    }
  }
  
  console.log('Assets found:', Array.from(allAssets));
  return Array.from(allAssets);
}

async function main() {
  const goldAssets = await scrapeSite('https://config-usa-gold.vercel.app');
  const ashenAssets = await scrapeSite('https://config-website-ashen.vercel.app');
  
  const targetDir = path.join(__dirname, '..', 'public', 'assets', 'reference_downloads');
  fs.mkdirSync(targetDir, { recursive: true });
  
  const all = [...new Set([...goldAssets, ...ashenAssets])];
  console.log(`\nDownloading ${all.length} assets to ${targetDir}...`);
  
  for (const asset of all) {
    const filename = path.basename(asset.split('?')[0]);
    const fullUrl = asset.startsWith('http') ? asset : 'https://config-usa-gold.vercel.app' + asset;
    const dest = path.join(targetDir, filename);
    try {
      await downloadFile(fullUrl, dest);
      console.log(`Downloaded: ${filename}`);
    } catch (e) {
      console.error(`Failed ${filename}:`, e.message);
    }
  }
}

main().catch(console.error);
