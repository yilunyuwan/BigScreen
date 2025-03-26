#!/usr/bin/env sh

yarn build --base ./&&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@gitee.com:yilunyuwan/big-screen.git &&
git push -uf origin master:gh-pages &&
cd -;
