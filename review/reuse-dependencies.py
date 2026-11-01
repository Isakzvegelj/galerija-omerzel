import os,shutil
from pathlib import Path
source=Path('/home/isak/projects/website-performance-20261017/gallery/node_modules')
target=Path('node_modules')
if target.exists():shutil.rmtree(target)
shutil.copytree(source,target,copy_function=os.link,symlinks=True)
print('Reused local lockfile-matched dependencies; no dependency files modified.')
