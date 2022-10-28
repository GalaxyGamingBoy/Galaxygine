import shutil, os
from pathlib import Path
def sync():
    for filename in os.scandir("."):
        if filename.is_dir():
            shutil.copytree(Path("../src/").resolve(), Path(f"./{filename.name}/src/").resolve(), dirs_exist_ok=True)

sync()