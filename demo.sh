#!/bin/bash

clear

rm -fr ./node_modules/
rm -fr ./packages/**/node_modules/
rm -fr ./*.tgz

echo "+--------------------------------+"
echo "|          Build - Core          |"
echo "+--------------------------------+"
npm install -w @test/core
sleep 2
npm run build -w @test/core

echo "+--------------------------------+"
echo "|          Build - Vue           |"
echo "+--------------------------------+"
npm install -w @test/vue
sleep 2
npm run build -w @test/vue

echo "+--------------------------------+"
echo "|         Prepare Demo           |"
echo "+--------------------------------+"
npm install -w @test/demo


echo "+--------------------------------+"
echo "|              END               |"
echo "+--------------------------------+"

echo Stencil : npm start -w @test/core
echo Demo    : npm start -w @test/demo