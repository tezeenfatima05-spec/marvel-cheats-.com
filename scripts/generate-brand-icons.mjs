import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

await sharp(faviconSvg).resize(48, 48).png().toFile(path.join(publicDir, 'favicon.ico'));

console.log('Brand icons generated: favicon.ico');
