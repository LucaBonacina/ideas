# Dati da conservare

File che non si possono riscaricare in automatico dalle fonti e che vanno rimessi in `backend/data/raw/` (o nel bucket dei file grezzi) prima di ricostruire il database.

- `comuni/<codice ISTAT>/estratto*.json`: strutture estratte dalle pagine dei siti comunali (novembre 2026), una per comune, con URL e citazione della pagina. Si importano con `npm run import -- siti-comunali`. Per rimetterle a posto: `cp -r dati-conservati/comuni backend/data/raw/`.

File scaricati a mano che non stanno nel repository (alcuni contengono dati personali o sono troppo grandi). Si trovano nel bucket dei file grezzi, o vanno scaricati di nuovo:

| Fonte (`data/raw/<cartella>`) | Come ottenerlo |
|---|---|
| `veneto-servizi-finanziati-ddr` (allegato-C.pdf, allegato-D.pdf) | Allegati C e D del DDR Veneto 58/2024, dal BUR del Veneto |
| `veneto-nidi-in-famiglia` (nidi-famiglia.pdf) | Allegato A al DDR Veneto 39/2025 |
| `veneto-educatori-nidi-in-famiglia` (educatori.pdf) | Allegato A al DDR Veneto 40/2025: contiene dati personali, non va mai messo nel repository |
| `bolzano-microstrutture-prima-infanzia` (pagina.html) | Salvare dal browser https://famiglia.provincia.bz.it/it/elenco-microstrutture-prima-infanzia |
| `civici-utente` (export_civici_*.zip) | Stradario dei civici fornito dall'utente (ANNCSU integrato), circa 250 MB |
| `sezioni-primavera-<regione>` | PDF dei decreti USR: link in `backend/src/business/import/sezioni-primavera/regioni/`; per Veneto, Abruzzo, Molise e Puglia il file va scaricato dalla pagina ufficiale indicata nel commento |
