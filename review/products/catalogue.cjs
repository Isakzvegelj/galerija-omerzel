const ts=require('/home/isak/projects/website-performance-20261017/gallery/node_modules/typescript');
const fs=require('fs');const path=require('path');
require.extensions['.ts']=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2020}}).outputText,file);
module.exports=require(path.resolve('src/data/artworks.ts'));
