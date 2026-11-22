#!/usr/bin/env bash
# Avvia in locale MongoDB (binario di mongodb-memory-server o mongod di sistema), API e sito.
# Uso: piattaforma/avvia-locale.sh   (Ctrl+C per fermare tutto)
set -euo pipefail
cd "$(dirname "$0")"
MONGOD=$(command -v mongod || ls backend/node_modules/.cache/mongodb-memory-server/mongod-* 2>/dev/null | head -1)
mkdir -p backend/data/db
pgrep -f "dbpath backend/data/db" >/dev/null || "$MONGOD" --dbpath backend/data/db --port 27017 --bind_ip 127.0.0.1 > backend/data/mongod.log 2>&1 &
sleep 3
(cd backend && MONGO_URI=mongodb://127.0.0.1:27017/nidi PORT=8181 npx ts-node src/main.ts > data/api.log 2>&1) &
(cd web && [ -d .next ] || npx next build; API_URL=http://localhost:8181 npx next start -p 3000 > ../backend/data/web.log 2>&1) &
trap 'kill 0' INT TERM
wait
