#!/bin/bash

set -e  # Exit on any error

#clean 
git checkout release
rm -rf assets/ index.html vite.svg || true
rm -rf letterhead || true

#build
git clone git@github.com:abinopoulose/letterhead.git
cd letterhead
git checkout main
git pull

npm install
npm run build
cd ..

#copy build files correct path
cp -r letterhead/dist/* .
sed -i 's|assets|letterhead/assets|g' index.html assets/*


# commit and push
rm -rf letterhead || true
git add .
DATETIME=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "release @ $DATETIME"
git push


echo "script completed successfully!"

