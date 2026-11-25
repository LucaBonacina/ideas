# Sito Next.js in modalità standalone per Cloud Run. API_URL = indirizzo del servizio API.
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Le regole di inoltro /api/* verso il backend si fissano in build: API_URL serve anche qui.
ARG API_URL
ARG NEXT_PUBLIC_NOME_SITO
ENV API_URL=$API_URL NEXT_PUBLIC_NOME_SITO=$NEXT_PUBLIC_NOME_SITO
RUN npm run build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production PORT=8080 HOSTNAME=0.0.0.0
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
USER node
EXPOSE 8080
CMD ["node", "server.js"]
