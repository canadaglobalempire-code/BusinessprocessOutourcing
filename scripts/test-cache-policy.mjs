// Run against `next start`, not `next dev`. GET-only: never submits a lead.
import assert from 'node:assert/strict';

const base = new URL(process.argv[2] || 'http://127.0.0.1:3231');
const paths = process.argv.length > 3 ? process.argv.slice(3) : ['/', '/services', '/contact'];

for (const path of paths) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type') || '', /text\/html/, path);
  const policy = response.headers.get('cache-control') || '';
  if (!policy.includes('no-store')) {
    assert.match(policy, /(?:^|,\s*)s-maxage=300(?:,|$)/, `${path}: ${policy}`);
    assert.match(policy, /(?:^|,\s*)stale-while-revalidate=300(?:,|$)/, `${path}: ${policy}`);
  }
  const html = await response.text();
  const assets = [...new Set([...html.matchAll(/(?:src|href)="([^"<>]+\.(?:js|css)(?:\?[^"<>]*)?)"/g)]
    .map(match => match[1].replaceAll('&amp;', '&')).filter(asset => asset.startsWith('/_next/static/')))];
  assert.ok(assets.length, `${path}: no Next assets found`);
  for (const asset of assets) {
    const file = await fetch(new URL(asset, base), { method: 'HEAD', signal: AbortSignal.timeout(15000) });
    assert.equal(file.status, 200, asset);
    assert.match(file.headers.get('cache-control') || '', /immutable/, asset);
    assert.match(file.headers.get('content-type') || '', /javascript|css/, asset);
  }
  console.log(`${path}: ${policy}; ${assets.length} immutable assets OK`);
}
