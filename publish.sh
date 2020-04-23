#!/bin/bash

git add .
echo Please enter your commit message
read var
git commit -m "$var"
git push origin master
npm run deploy

echo Okay, Done Sir!
