#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

git fetch origin
git reset --hard "origin/main"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  . "$NVM_DIR/nvm.sh"
fi

npm ci
npm run build
pm2 restart khwhite-landscape --update-env
