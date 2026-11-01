import { chromium } from '/home/isak/projects/website-performance-20261017/tooling/node_modules/playwright/index.mjs';
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const prefix=process.env.TEST_BASE_PATH ?? '/previews/gallery-sales-20261101';
const root=process.env.TEST_ROOT || 'review/bundle';
const smoke=process.env.SMOKE==='1';
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.json':'application/json','.txt':'text/plain'};
const server=http.createServer(async(req,res)=>{
 try {
  const u=new URL(req.url,'http://localhost');
  if(!u.pathname.startsWith(prefix+'/')){res.writeHead(404);return res.end();}
  let f=path.resolve(root,'.'+decodeURIComponent(u.pathname.slice(prefix.length)));
  assert.ok(f.startsWith(path.resolve(root)+'/')||f===path.resolve(root));
  if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');
  res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream','content-security-policy':root==='out'?"":"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-src 'self'; base-uri 'none'; form-action 'self'"});res.end(await fs.readFile(f));
 } catch {res.writeHead(404);res.end();}
});
await new Promise(r=>server.listen(9164,'127.0.0.1',r));
const base='http://127.0.0.1:9164'+prefix;
const b=await chromium.launch({executablePath:'/home/isak/.local/bin/chromium',args:['--no-sandbox']});
const results=[];
try {
 for(const width of (smoke?[390]:[320,390,1440]))for(const language of (smoke?['en']:['en','sl']))for(const theme of (smoke?['light']:['light','dark'])){
  const c=await b.newContext({viewport:{width,height:844}});
  await c.addInitScript(({language,theme,prefix})=>{
   try { localStorage.setItem(prefix?'gallery-sales-preview-language':'preferred-language',language);localStorage.setItem(prefix?'gallery-sales-preview-theme':'theme',theme); } catch {}
   Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.testCopied=text}}});
  },{language,theme,prefix});
  await c.route(/cloudflareinsights|maps.google/,r=>r.abort());
  const p=await c.newPage();globalThis.debugPage=p;p.setDefaultTimeout(12000);console.log('CASE',width,language,theme);const errors=[],bad=[];p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)bad.push(r.url())});
  await p.goto(base+'/',{waitUntil:'networkidle'});
  await p.waitForFunction(l=>document.documentElement.lang===l,language);
  assert.ok(await p.getByRole('heading',{name:language==='en'?'Find art you’ll love living with.':'Poiščite umetnost za svoj dom.'}).isVisible());
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.getByRole('link',{name:language==='en'?'Find your artwork':'Poiščite svoje umetniško delo',exact:true}).first().click();
  await p.waitForURL('**/gallery/');
  await p.goto(base+'/',{waitUntil:'networkidle'});
  await p.locator('main .artwork-card').first().scrollIntoViewIfNeeded();
  await p.locator('main .artwork-card').first().click();
  const detail=p.getByRole('dialog');await detail.waitFor();
  const request=detail.getByRole('button',{name:language==='en'?'Ask for price & details':'Vprašajte za ceno in podrobnosti',exact:true});
  await request.scrollIntoViewIfNeeded();assert.ok(await request.isVisible());
  await request.click();
  const inquiry=p.getByRole('dialog',{name:language==='en'?'Ask about this artwork':'Povpraševanje o delu',exact:true});await inquiry.waitFor();
  assert.equal(await inquiry.locator('input[required]').count(),0);
  for(let i=0;i<9;i++){await p.keyboard.press('Tab');assert.ok(await inquiry.evaluate(el=>el.contains(document.activeElement)));}
  await inquiry.locator('#artwork-enquiry-name').fill('Test Žvegelj');
  await inquiry.locator('#artwork-enquiry-message').fill('Price & delivery?');
  const href=await inquiry.getByRole('link',{name:language==='en'?'Open email draft':'Odpri osnutek e-pošte',exact:true}).getAttribute('href');
  assert.ok(href.startsWith('mailto:info@gallerybled.com?'));
  const decoded=decodeURIComponent(href);assert.match(decoded,/Test Žvegelj/);assert.match(decoded,/Price & delivery\?/);assert.match(decoded,/https:\/\/gallerybled.com\/gallery\/\?artwork=/);assert.ok(!decoded.includes('/previews/'));
  await inquiry.getByRole('button',{name:language==='en'?'Copy enquiry':'Kopiraj povpraševanje',exact:true}).click();
  assert.match(await p.evaluate(()=>window.testCopied),/Price & delivery\?/);
  await p.keyboard.press('Escape');await inquiry.waitFor({state:'hidden'});await request.waitFor();
  await p.keyboard.press('Escape');assert.equal(await p.getByRole('dialog').count(),0);
  const bodyOverflow=await p.locator('body').evaluate(el=>getComputedStyle(el).overflow);assert.notEqual(bodyOverflow,'hidden');
  console.log('enquiry passed');
  await p.goto(base+'/gallery/?artwork=galerijao-sculpture-1',{waitUntil:'networkidle'});await p.getByRole('dialog').waitFor();
  await p.keyboard.press('Escape');assert.equal(await p.getByRole('dialog').count(),0);
  assert.equal(await p.getByText('Active',{exact:true}).count(),0);
  await p.getByRole('textbox',{name:'Search artworks',exact:true}).fill('no-matching-work-123');
  await p.getByRole('heading',{name:'No Artworks Found'}).waitFor();
  await p.getByRole('button',{name:'Clear Filters',exact:true}).click();assert.ok(await p.locator('.artwork-card').count()>0);
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(width===390||width===1440){await p.goto(base+'/',{waitUntil:'networkidle'});await p.screenshot({path:`review/evidence/${smoke?'production-':''}home-${width}-${language}-${theme}.png`,fullPage:true});}
  assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);
  results.push({width,language,theme,pass:true});await c.close();
 }
 await fs.writeFile(smoke?'review/evidence/production-results.json':'review/evidence/browser-results.json',JSON.stringify({passed:true,cases:results,checks:['home copy','responsive overflow','nested dialog keyboard trap and Escape','no required personal fields','email recipient, encoding, reference and production URL','webmail copy','artwork deep link','search, empty state and reset','no page errors or local failed responses']},null,2));
 console.log('PASS:',results.length,'responsive cases; artwork enquiries, clipboard, deep links, search and keyboard flow. No enquiries sent.');
} catch(error) {if(globalThis.debugPage)await globalThis.debugPage.screenshot({path:'review/evidence/failure.png',fullPage:true});throw error;} finally {await b.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
