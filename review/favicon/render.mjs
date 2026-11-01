import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
const require=createRequire('/home/isak/projects/website-performance-20261017/gallery/package.json');
const sharp=require('sharp');
const svg=await fs.readFile('public/gallery-mark.svg');
for(const size of [16,32,48,96,180])await sharp(svg).resize(size,size).png().toFile(`public/gallery-mark-${size}.png`);
const sizes=[16,32,48];const pngs=await Promise.all(sizes.map(size=>fs.readFile(`public/gallery-mark-${size}.png`)));
const header=Buffer.alloc(6+16*sizes.length);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);let offset=header.length;
for(let i=0;i<sizes.length;i++){const start=6+i*16;header[start]=sizes[i];header[start+1]=sizes[i];header.writeUInt16LE(1,start+4);header.writeUInt16LE(32,start+6);header.writeUInt32LE(pngs[i].length,start+8);header.writeUInt32LE(offset,start+12);offset+=pngs[i].length;}
await fs.writeFile('public/favicon.ico',Buffer.concat([header,...pngs]));
console.log('SVG, five PNG sizes and 16/32/48 ICO generated.');
