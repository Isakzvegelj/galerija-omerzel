import {createPreview} from '/home/isak/vm/dashboard/phone-unlock-preview/server.mjs';
import {createGateway} from '/home/isak/vm/dashboard/recep-live-gateway/gateway.mjs';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const dir=mkdtempSync(join(tmpdir(),'gallery-favicon-auth-'));
const origin='http://localhost:19395',owner='isakzv@gmail.com';
const {server:v}=createPreview({origin,owner,stateFile:join(dir,'keys.json'),bootstrapToken:'favicon-test-only'});
const g=createGateway({origin,owner,authOrigin:origin,authPort:19394,dashboardOrigin:'https://vma.tail8cd004.ts.net:8454'});
await new Promise(r=>v.listen(19394,'127.0.0.1',r));await new Promise(r=>g.server.listen(19395,'127.0.0.1',r));console.log('Temporary favicon fixture ready');
function stop(){v.closeAllConnections();g.server.closeAllConnections();v.close();g.server.close();rmSync(dir,{recursive:true,force:true});process.exit(0)}
process.on('SIGTERM',stop);process.on('SIGINT',stop);setTimeout(stop,300000);
