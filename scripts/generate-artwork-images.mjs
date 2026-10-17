import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const code=await fs.readFile(path.join(root,'src/data/artworks.ts'),'utf8');
const sources=[...new Set([...code.matchAll(/url: '([^']+)'/g)].map(m=>m[1]))];
const manifest={};
await fs.mkdir(path.join(root,'public/images/artworks/responsive'),{recursive:true});
for(const url of sources){
 const source=path.join(root,'public',url);const meta=await sharp(source).metadata();
 const widths=[...new Set([128,320,640,960,1280].map(w=>Math.min(w,meta.autoOrient.width)))].sort((a,b)=>a-b);
 manifest[url]=[];
 for(const width of widths){
  const name=path.parse(url).name+'-'+width+'.webp';
  const dest='/images/artworks/responsive/'+name;
  await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:84,effort:5}).toFile(path.join(root,'public',dest));
  manifest[url].push({width,url:dest});
 }
}
await fs.writeFile(path.join(root,'src/data/image-variants.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Generated variants for ${sources.length} artwork photographs.`);
