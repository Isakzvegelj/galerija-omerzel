import {chromium} from '/home/isak/projects/website-performance-20261017/tooling/node_modules/playwright/index.mjs';
import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin='http://localhost:19795',prefix='/previews/gallery-products-20261101/';
const tunnel=spawn('ssh',['-N','-o','ExitOnForwardFailure=yes','-o','ServerAliveInterval=15','-L','127.0.0.1:19795:127.0.0.1:19795','vma'],{stdio:'ignore'});
let ready=false;
for(let i=0;i<50;i++){try{await fetch(origin+prefix,{redirect:'manual'});ready=true;break}catch{await new Promise(r=>setTimeout(r,100))}}
if(!ready){tunnel.kill('SIGTERM');throw Error('Fixture tunnel unavailable')}
const b=await chromium.launch({executablePath:'/home/isak/.local/bin/chromium',args:['--no-sandbox']});
try {
 const c=await b.newContext({viewport:{width:390,height:844},extraHTTPHeaders:{'Tailscale-User-Login':'isakzv@gmail.com'}});
 const p=await c.newPage();globalThis.debugPage=p;p.setDefaultTimeout(12000);const errors=[];p.on('console',m=>{if(m.type()==='error')console.log('BROWSER',m.text().slice(0,180))});p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)console.log('HTTP',r.status(),r.url())});
 await p.goto(origin+prefix);await p.locator('#unlock').waitFor();
 const cdp=await c.newCDPSession(p);await cdp.send('WebAuthn.enable');
 await cdp.send('WebAuthn.addVirtualAuthenticator',{options:{protocol:'ctap2',transport:'usb',hasResidentKey:true,hasUserVerification:true,isUserVerified:true,automaticPresenceSimulation:true}});
 const post=(path,body)=>p.evaluate(async({path,body})=>{const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return {status:r.status,data:await r.json()}},{path,body});
 const options=await post('/auth/register/options',{token:'gallery-products-test-only'});assert.equal(options.status,200);
 const credential=await p.evaluate(optionsJSON=>window.SimpleWebAuthnBrowser.startRegistration({optionsJSON}),options.data);
 assert.equal((await post('/auth/register/verify',credential)).status,200);
 await p.locator('#unlock').click();await p.waitForURL('**'+prefix);
 await p.getByRole('heading',{name:'Find art you’ll love living with.'}).waitFor();
 const verifiedHtml=await (await p.request.get(origin+prefix)).text();
 assert.equal(verifiedHtml.replace('<script type="module" src="/gateway-session.js"></script>',''),await fs.readFile('review/products/bundle/index.html','utf8'));

 await p.getByRole('link',{name:'Find your artwork',exact:true}).first().click();await p.waitForURL(/\/gallery\/?$/);
 await p.locator('#artwork-search').fill('GO-S006');await p.locator('.artwork-card').first().click();const d=p.getByRole('dialog');await d.waitFor();assert.match(await d.textContent(),/GO-S006/);assert.match(await d.textContent(),/Pale seated lion/);
 await d.getByRole('button',{name:'Ask for price & details · GO-S006',exact:true}).click();
 const inquiry=p.getByRole('dialog',{name:'Ask about this artwork',exact:true});await inquiry.waitFor();
 const href=await inquiry.getByRole('link',{name:'Open email draft',exact:true}).getAttribute('href');assert.ok(href.startsWith('mailto:info@gallerybled.com?'));assert.match(decodeURIComponent(href),/GO-S006/);assert.match(decodeURIComponent(href),/painting_IMG_8396.jpeg/);
 await p.screenshot({path:'review/products/evidence/gateway-product-inquiry-mobile.png'});
 await p.keyboard.press('Escape');await p.keyboard.press('Escape');
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.equal((await p.request.post(origin+prefix+'index.html',{headers:{Origin:origin}})).status(),405);
 await p.goto(origin+'/previews/gallery-all-20261101/');await p.getByRole('heading',{name:'All prepared gallery updates'}).waitFor();
 assert.equal(await p.getByRole('link',{name:'Open gallery preview'}).getAttribute('href'),prefix+'gallery/');
 assert.equal(await p.getByRole('link',{name:'Open favicon preview'}).getAttribute('href'),'/previews/gallery-favicon-20261101/');
 const combinedHtml=await(await p.request.get(origin+'/previews/gallery-all-20261101/')).text();
 assert.equal(combinedHtml.replace('<script type="module" src="/gateway-session.js"></script>',''),await fs.readFile('review/products/combined-review/index.html','utf8'));
 assert.deepEqual(errors,[]);
 await post('/auth/lock',{});assert.equal((await p.request.get(origin+prefix+'index.html')).status(),401);
 await fs.writeFile('review/products/evidence/gateway-results.json',JSON.stringify({passed:true,checks:['temporary virtual passkey login with unchanged verifier','existing gateway serves exact registered bundle','CSP-compatible hydration and navigation','artwork detail and enquiry','mailto destination','mobile overflow','preview write denied','lock denies assets'],exactBundleBytesVerified:true,combinedReviewVerified:true,productReference:'GO-S006',actualOwnerCredentialsUsed:false,enquiriesSent:false},null,2));
 console.log('PASS: authenticated gateway fixture, navigation, enquiry, write denial and locked assets.');
 await c.close();
}catch(error){if(globalThis.debugPage){console.log('FAILED URL',globalThis.debugPage.url());await globalThis.debugPage.screenshot({path:'review/products/evidence/gateway-failure.png',fullPage:true});}throw error;}finally{await b.close();tunnel.kill('SIGTERM');}
