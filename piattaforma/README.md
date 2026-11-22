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
