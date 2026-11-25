# API e job di import: stessa immagine, comando diverso.
#   API:  node dist/main.js           (Cloud Run service)
#   Job:  node dist/cli.js tutto      (Cloud Run job, file grezzi in DATA_DIR = bucket montato)
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
# unzip serve alla geocodifica per estrarre lo stradario dei civici.
RUN apt-get update && apt-get install -y --no-install-recommends unzip ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
USER node
EXPOSE 8080
ENV PORT=8080
CMD ["node", "dist/main.js"]
