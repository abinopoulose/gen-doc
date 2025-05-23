#!/bin/bash

set -e  # Exit on any error

#clean 
git checkout release
rm -rf assets/ index.html vite.svg || true
rm -rf digi-sign || true

#build
git clone git@github.com:abinopoulose/digi-sign.git
cd digi-sign
git checkout main
git pull

npm install
npm run build
cd ..

#copy build files correct path
cp -r digi-sign/dist/* .
sed -i 's|assets|digi-sign/assets|g' index.html assets/*


# commit and push
rm -rf digi-sign || true
git add .
DATETIME=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "release @ $DATETIME"
git push


echo "script completed successfully!"

