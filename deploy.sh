#!/bin/bash
set -e

source ~/.bashrc 2>/dev/null || source ~/.profile 2>/dev/null || true

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

DEPLOY_LOCK="/var/tmp/khwhite-landscape-deploy.lock"
mkdir -p "$(dirname "$DEPLOY_LOCK")"

(
  echo "Acquiring deploy lock (waiting if another deploy is running)..."
  flock 200
  cd /var/www/landscape

  # next-env.d.ts is auto-updated by Next on this host; discard those edits so pulls never block.
  git fetch origin main
  git reset --hard origin/main

  pnpm install --frozen-lockfile
  pnpm build

  pm2 restart khwhite-landscape --update-env
  echo "Deploy complete!"
) 200>"$DEPLOY_LOCK"
