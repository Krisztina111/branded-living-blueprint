import { unstable_dev } from 'wrangler';
const w = await unstable_dev('dist/server/index.js', {
  config: 'dist/server/wrangler.json',
  experimental: { disableExperimentalWarning: true, disableDevRegistry: true },
  logLevel: 'warn',
});
const r = await w.fetch('http://x/');
const html = await r.text();
await Bun.write('/mnt/documents/index.html', html);
await w.stop();
console.log('len', html.length, 'has #clients:', html.includes('id="clients"'));
