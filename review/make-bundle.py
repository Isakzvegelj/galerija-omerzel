from pathlib import Path
import json,shutil,re,hashlib
out=Path('out');dest=Path('review/bundle');dest.mkdir(exist_ok=True)
manifest={}
allowed={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.json':'application/json','.txt':'text/javascript'}
for source in out.rglob('*'):
 if not source.is_file() or source.suffix not in allowed:continue
 rel=source.relative_to(out);target=dest/rel;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source,target)
 if source.suffix=='.html':
  text=target.read_text()
  text=text.replace('<head>','<head><meta name="robots" content="noindex,nofollow">')
  def script(m):
   attrs,body=m.group(1),m.group(2)
   if 'src=' in attrs:
    return '' if 'cloudflareinsights' in attrs else m.group(0)
   if 'application/ld+json' in attrs or 'application/json' in attrs or not body.strip():return m.group(0)
   name='preview-scripts/'+hashlib.sha256(body.encode()).hexdigest()[:20]+'.js'
   t=dest/name;t.parent.mkdir(exist_ok=True);t.write_text(body)
   manifest['/'+name]={'path':name,'type':'text/javascript'}
   return '<script'+attrs+' src="/previews/gallery-sales-20261101/'+name+'"></script>'
  text=re.sub(r'<script([^>]*)>(.*?)</script>',script,text,flags=re.S)
  target.write_text(text)
 item={'path':str(rel),'type':allowed[source.suffix]};manifest['/'+str(rel)]=item
 if rel.name=='index.html':manifest['/' if str(rel.parent)=='.' else '/'+str(rel.parent)+'/']=item
for route,item in list(manifest.items()):
 if route.endswith('/') and route != '/':
  manifest[route.rstrip('/')]=item
  txt=route+'index.txt'
  if txt in manifest:manifest[route.rstrip('/')+'.txt']=manifest[txt]
(dest/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(len(manifest),'manifest routes')
