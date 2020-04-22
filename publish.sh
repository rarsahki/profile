#!/bin/bash

git add .
git commit
git push origin master
npm run deploy

echo Okay, Done Sir!