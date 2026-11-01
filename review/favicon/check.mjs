import {chromium} from '/home/isak/projects/website-performance-20261017/tooling/node_modules/playwright/index.mjs';
import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin='http://localhost:19395',prefix='/previews/gallery-favicon-20261101/';
const tunnel=spawn('ssh',['-N','-o','ExitOnForwardFailure=yes','-L','127.0.0.1:19395:127.0.0.1:19395','vma'],{stdio:'ignore'});
let b;
try{
 for(let i=0;i<50;i++){try{await fetch(origin+prefix,{redirect:'manual'});break}catch{await new Promise(r=>setTimeout(r,100))}}
 b=await chromium.launch({executablePath:'/home/isak/.local/bin/chromium',args:['--no-sandbox']});
 const c=await b.newContext({viewport:{width:390,height:844},extraHTTPHeaders:{'Tailscale-User-Login':'isakzv@gmail.com'}});
 const p=await c.newPage();p.setDefaultTimeout(10000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(origin+prefix);await p.locator('#unlock').waitFor();
 const cdp=await c.newCDPSession(p);await cdp.send('WebAuthn.enable');await cdp.send('WebAuthn.addVirtualAuthenticator',{options:{protocol:'ctap2',transport:'usb',hasResidentKey:true,hasUserVerification:true,isUserVerified:true,automaticPresenceSimulation:true}});
 const post=(path,body)=>p.evaluate(async({path,body})=>{const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return{status:r.status,data:await r.json()}},{path,body});
 const options=await post('/auth/register/options',{token:'favicon-test-only'});assert.equal(options.status,200);
 const credential=await p.evaluate(optionsJSON=>window.SimpleWebAuthnBrowser.startRegistration({optionsJSON}),options.data);
 assert.equal((await post('/auth/register/verify',credential)).status,200);await p.locator('#unlock').click();await p.waitForURL('**'+prefix);
 for(const width of [320,390,1440]){
  await p.setViewportSize({width,height:900});await p.getByRole('heading',{name:'A simple signature for the gallery.'}).waitFor();
  await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.screenshot({path:`review/favicon/evidence/preview-${width}.png`,fullPage:true});
 }
 for(const name of ['gallery-mark.svg','gallery-mark-16.png','gallery-mark-32.png','gallery-mark-48.png','gallery-mark-96.png','gallery-mark-180.png']){
  const response=await p.request.get(origin+prefix+name);assert.equal(response.status(),200);assert.deepEqual(await response.body(),await fs.readFile('public/'+name));
 }
 assert.equal(await p.locator('link[rel="icon"]').getAttribute('href'),prefix+'gallery-mark.svg');
 assert.deepEqual(errors,[]);await post('/auth/lock',{});assert.equal((await p.request.get(origin+prefix+'gallery-mark.svg')).status(),401);
 await fs.writeFile('review/favicon/evidence/checks.json',JSON.stringify({passed:true,widths:[320,390,1440],imagesLoaded:true,exactBytesVerified:6,svgTabIcon:true,lockDeniesAsset:true,ownerCredentialsUsed:false,errors},null,2));console.log('PASS: authenticated preview, 3 widths, all images, exact six icon files, SVG favicon link and lock denial.');await c.close();
}finally{if(b)await b.close();tunnel.kill('SIGTERM')}
