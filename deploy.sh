#!/bin/bash
set -e

source ~/.bashrc 2>/dev/null || source ~/.profile 2>/dev/null || true

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

cd /var/www/landscape

git pull origin main

pnpm install --frozen-lockfile
pnpm build

pm2 restart khwhite-landscape --update-env
echo "Deploy complete!"
