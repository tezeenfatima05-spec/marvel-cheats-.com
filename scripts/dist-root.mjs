import fs from 'node:fs';
import path from 'node:path';

/**
 * Astro static builds write to dist/. @astrojs/cloudflare static output uses dist/client/.
 */
export function resolveDistRoot(cwd = process.cwd()) {
  const dist = path.join(cwd, 'dist');
  const client = path.join(dist, 'client');

  const hasBuildArtifacts = (dir) =>
    fs.existsSync(dir) &&
    (fs.existsSync(path.join(dir, 'sitemap-0.xml')) ||
      fs.existsSync(path.join(dir, 'sitemap-index.xml')) ||
      fs.existsSync(path.join(dir, 'index.html')) ||
      fs.existsSync(path.join(dir, '404.html')));

  if (hasBuildArtifacts(client)) return client;
  if (hasBuildArtifacts(dist)) return dist;
  return dist;
}
