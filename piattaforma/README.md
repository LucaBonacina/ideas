# Piattaforma nidi

Codice della piattaforma per trovare e confrontare i servizi educativi 0-6 in Italia. Ricerca, fonti e decisioni sono nella wiki: `wiki/Progetto nidi/`.

## backend/
API e import dei dati (NestJS, MongoDB). Riprende architettura e regole del template fornito dall'utente, con soli pacchetti pubblici.

```bash
cd piattaforma/backend && npm ci
docker compose up -d                       # MongoDB locale
cp .env.template .env                      # e impostare MONGO_URI
npm run import -- tutto                    # comuni ISTAT, anagrafe MIM, registro Lombardia
npm run import -- mim --offline            # ripete il parsing sugli ultimi file salvati
npm run start:dev                          # API su http://localhost:8181
npm test && npm run lint
```

API:
- `GET /strutture?comune=<codice ISTAT>&fascia=0-3|3-6&tipologia=&q=&lat=&lng=&raggioKm=&pagina=&perPagina=`
- `GET /strutture/:id` (id Mongo o chiave `fonte:id`)
- `GET /strutture/copertura` (strutture per regione, tipologia e fonte)

Fonti importate: elenco comuni ISTAT, anagrafe MIM delle scuole dell'infanzia statali e paritarie (21.445 al 2026/27), registro lombardo delle unità d'offerta 0-3 (2.707). I file grezzi si salvano in `data/raw/` e non vanno nel repository.

## web/
Sito pubblico (Next.js). Pagine: ricerca del comune, elenco con mappa per comune (`/comune/<codice ISTAT>`), scheda della struttura, calcolatore del costo netto, fonti e copertura. Il browser chiama `/api/...`, che Next inoltra al backend (`API_URL`, predefinito `http://localhost:8181`).

```bash
cd piattaforma/web && npm ci
npm run build && API_URL=http://localhost:8181 npm start   # http://localhost:3000
```

Mappe: tile di OpenStreetMap, adatte a una prova; in produzione serve un fornitore di tile con un piano d'uso adeguato.
