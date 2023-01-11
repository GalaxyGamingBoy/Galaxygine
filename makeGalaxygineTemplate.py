#!/usr/bin/env python3
import urllib.request, shutil, sys, os
from zipfile import ZipFile

argv = sys.argv
GITHUB_REPO = "https://github.com/GalaxyGamingBoy/Galaxygine/releases/latest/download/"
DOWNLOAD_NAME = "template.zip"

def downloadFile():
    urllib.request.urlretrieve(GITHUB_REPO + DOWNLOAD_NAME, DOWNLOAD_NAME)

def extract():
    with ZipFile("template.zip", "r") as zipFile:
        zipFile.extractall()

def moveFiles():
    shutil.move("./sample/template/", ".")
    
def rename(name):
    shutil.move("template", name)

def cleanup():
    os.removedirs("sample")
    os.remove("template.zip")

def main():
    if len(argv) != 2:
        print("makeGalaxygineTemplate.py <name>")
        return
    downloadFile()
    extract()
    moveFiles()
    rename(argv[1])
    cleanup()

if __name__ == "__main__":
    if input("This script will remove the /sample directory, make sure you don't have any important files there. ( y / N ): ") == "y":
        main()
    else:
        print("Script aborted by user.")
