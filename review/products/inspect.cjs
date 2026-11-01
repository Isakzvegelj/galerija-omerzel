const fs=require('fs');const ts=require('/home/isak/projects/website-performance-20261017/gallery/node_modules/typescript');
const sharp=require('/home/isak/projects/website-performance-20261017/gallery/node_modules/sharp');
const e={};new Function('exports','require',ts.transpileModule(fs.readFileSync('src/data/artworks.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(e,require);
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
(async()=>{const list=[];const items=[];let index=0;
for(const a of e.mockArtworks){const image=a.images.find(i=>i.isPrimary)||a.images[0];const file='public'+image.url;const m=await sharp(file).metadata();list.push({id:a.id,title:a.title,category:a.category,images:a.images.map(i=>i.url),width:m.width,height:m.height});
 const thumb=await sharp(file).resize(290,255,{fit:'contain',background:'#ede9e1'}).jpeg({quality:85}).toBuffer();
 const label=Buffer.from(`<svg width="300" height="60"><rect width="300" height="60" fill="white"/><text x="5" y="17" font-size="12" font-family="sans-serif">${esc(a.id)}</text><text x="5" y="36" font-size="11" font-family="sans-serif">${esc(a.title.slice(0,46))}</text></svg>`);
 items.push({input:thumb,top:Math.floor(index/4)*320,left:(index%4)*300+5},{input:label,top:Math.floor(index/4)*320+258,left:(index%4)*300});index++;
}
await sharp({create:{width:1200,height:Math.ceil(index/4)*320,channels:3,background:'#ddd'}}).composite(items).jpeg({quality:90}).toFile('review/products/evidence/contact-sheet.jpg');fs.writeFileSync('review/products/evidence/inventory.json',JSON.stringify(list,null,2));console.log(list.map(a=>`${a.id}: ${a.title} | ${a.images.join(', ')} | ${a.width}x${a.height}`).join('\n'));})();
