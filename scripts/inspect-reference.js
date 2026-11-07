import https from 'node:https';

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

async function check() {
  const ashenJs = await fetchText('https://config-website-ashen.vercel.app/assets/index-CgjeQyMC.js');
  const regex = /["'`](\/assets\/[^"'`\s]+\.(?:jpg|png|webp))["'`]/g;
  const matches = [];
  let m;
  while ((m = regex.exec(ashenJs)) !== null) {
    matches.push(m[1]);
  }
  console.log('Ashen images:', [...new Set(matches)]);

  const goldHtml = await fetchText('https://config-usa-gold.vercel.app/');
  const goldScriptMatch = goldHtml.match(/src="(\/assets\/[^"]+\.js)"/);
  if (goldScriptMatch) {
    const goldJs = await fetchText('https://config-usa-gold.vercel.app' + goldScriptMatch[1]);
    const goldMatches = [];
    while ((m = regex.exec(goldJs)) !== null) {
      goldMatches.push(m[1]);
    }
    console.log('Gold images:', [...new Set(goldMatches)]);
  }
}

check().catch(console.error);

