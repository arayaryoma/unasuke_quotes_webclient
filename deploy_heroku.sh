#!/bin/sh

function git_dirty {
  git add -A .
  [[ $(git diff --cached --shortstat 2> /dev/null | tail -n1) != "" ]] && echo "*"
}

COMMIT_REV=$(cat .git/ORIG_HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ -n "$(git_dirty)" ]; then
    GIT_DIRTY=true
    git stash save
fi

rm -rf .tmp
mkdir -p .tmp

cp -r dist .tmp/public
cp server/app.js server/package.json .tmp/

git checkout staging

rm -rf package.json app.js public
cp -r .tmp/public ./
cp .tmp/package.json .tmp/app.js ./

git add -A
git commit -m "${COMMIT_REV}"
git push -f heroku staging:master

git checkout ${BRANCH}

if [ -n "${GIT_DIRTY}" ]; then
    git stash pop
fi
