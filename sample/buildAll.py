import os
for filename in os.scandir("."):
    if filename.is_dir():
        os.chdir(filename)
        os.system("npm run build")
        os.chdir("..")