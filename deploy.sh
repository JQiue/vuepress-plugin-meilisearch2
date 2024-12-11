#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd docs

npm run docs:build

# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
# echo 'jinqiu.wang' > CNAME

git init
git add -A
git commit -m 'deploy'
git checkout -b deploy

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:JQiue/vuepress-plugin-meilisearch2.git deploy

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -