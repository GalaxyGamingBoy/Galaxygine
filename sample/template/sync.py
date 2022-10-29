import urllib.request, os
from zipfile import ZipFile

urllib.request.urlretrieve("https://github.com/GalaxyGamingBoy/Galaxygine/releases/latest/download/galaxygine.zip", "galaxygine.zip")
with ZipFile("galaxygine.zip", "r") as zipObj:
    for file in zipObj.namelist():
        if file.startswith('src/'):
            zipObj.extract(file, '.')
    zipObj.close()

os.remove("galaxygine.zip")