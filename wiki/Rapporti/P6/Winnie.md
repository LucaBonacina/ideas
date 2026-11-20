---
tipo: rapporto
tags: [progetto, nidi, rapporto, P6]
---
# P6: rapporto del subagente Winnie

## Note create
- [[Winnie]] (`wiki/Progetto nidi/Concorrenti/Winnie.md`)

## Letture e ricerche
**Ricerche web (WebSearch): 19 su 25.** Temi:
- prezzo di Winnie Pro (2 ricerche);
- round di finanziamento;
- Inc. 5000;
- Salesforce Ventures;
- post "What's ahead 2025";
- app Android;
- Reddit e lead (3 ricerche);
- bacheca lavoro;
- dati di licenza nelle schede;
- intervista al CEO 2025-26;
- datori di lavoro;
- round 2018;
- Capterra/G2;
- aiuto ad aprire un nido;
- licenziamenti e acquisizioni;
- post "A Decade of Winnie".

**Letture dirette:**
- **curl:**
  - Help Center `support.winnie.com`: crawl completo di 104 pagine, ospitato su HubSpot e non protetto;
  - `winnie.com/terms` e `winnie.com/privacy` (200);
  - `robots.txt`;
  - iTunes lookup e search API;
  - feed RSS delle recensioni App Store (vuoto);
  - Google Play: ricerca e 9 package ID, nessuna app Winnie;
  - API di Wikipedia.
- **WebFetch:**
  - TechCrunch 2016, 2018, 04/03/2022 e 21/06/2022;
  - Crunchbase News 2019 ed EdSurge 2019;
  - Apple Newsroom 2021;
  - Mercury 2022;
  - Van Leer (brainbuilding.org);
  - The 74 via KEYT (Redfin, ottobre 2026);
  - EverythingMarketplaces (solo l'indice);
  - Trustpilot e BBB;
  - pagina App Store con le recensioni;
  - justuseapp.

**Bloccati:**
- `winnie.com` (home, /pricing, /providers, /about, /blog, schede): 403 DataDome, sia con curl sia con WebFetch;
- Wayback Machine: connessione resettata con curl, "unable to fetch" con WebFetch;
- reddit.com (403 e "unable to fetch");
- yespress.io (403);
- EdSurge 2018 (404).

Un tentativo di lettura tramite un servizio proxy di terze parti (r.jina.ai) è stato negato dal sistema di permessi e non l'ho aggirato.

## Cosa non sono riuscito a verificare
- **Prezzo di Winnie Pro.** Non è pubblico (piani scelti in dashboard o tramite preventivo). I 199 $/mese delle sessioni precedenti restano una fonte singola non riconfermata.
- **Importi CPL** per le catene.
- **Elenco completo dei filtri** di ricerca e **campi esatti della scheda**, in particolare se le ispezioni e le violazioni sono mostrate in modo strutturato e per quali Stati. Ho solo l'Help Center ("link" al sito statale) e l'Apple Newsroom 2021 ("inspection and citation reports").
- **Serie B:** nessuna evidenza. Totale noto: 15,5 M$ al 2019, oltre 20 M$ al 2022 (autodichiarato), con note convertibili (2021) e un assegno di Salesforce Ventures (2022) di importo ignoto.
- **Ricavi** in valore assoluto: solo "×8" e la soglia Inc. 5000 (≥ 2 M$ nel 2022, mio calcolo dal metodo Inc.).
- **Stato attuale della community Q&A**: l'Help Center la descrive ancora, ma non ho potuto vedere il sito.
- **"Winnie Care Network"** o programma per aprire nidi: non trovato; esistono solo guide.
- **Testimonianze dei gestori** (Reddit, Capterra, G2): nessuna trovata.
- **Contenuti** dei post "What's ahead for Winnie in 2025" e "A Decade of Winnie".
- **Prodotto per i datori di lavoro:** prezzi e clienti.

## Prove contrarie cercate
- **Il pay-per-lead è stato abbandonato del tutto?** No. L'Help Center (Market Competition Report, Pacing Report) mostra che le catene pagano ancora a CPL con asta. Questo corregge la sintesi di S9 e S11 ("Winnie ha abbandonato il modello a lead"): l'ha abbandonato per i piccoli gestori, non per le catene.
- **Winnie è in crisi o è stata acquisita?** Nessuna notizia di licenziamenti o acquisizioni. Ci sono segnali di attività nel 2026: app aggiornata il 09/11/2026, partnership con Redfin a settembre 2026, schede aggiornate a novembre 2026.
- **Recensioni negative:**
  - App Store, raccolte da justuseapp: dati incompleti o vecchi, gestori che non rispondono;
  - Trustpilot: pagina con punteggio sospeso per "misleading" uso dei contenuti;
  - BBB: pulito.
- **I numeri sono attendibili?** Sono tutti autodichiarati: 250.000 strutture, 20 M di genitori, "10 volte" per le schede con recensioni. Nel 2021 Apple riportava 12 M di genitori; nel 2022 Mercury ne riportava 20 M.

## Livello di fiducia
- **Alto** su funzioni per genitori e gestori, struttura dei piani e garanzia di lead, CPL per le catene, policy su licenza e recensioni (documentazione ufficiale letta per intero), storia dei round fino al 2019, svolta del 2022 e relative motivazioni.
- **Medio** sullo stato del 2026 (Redfin, 25% di schede rivendicate, app iOS) e sulle funzioni abbandonate.
- **Basso** su prezzi in dollari, ricavi, finanziamenti dopo il 2019, opinioni dei gestori e opinioni da Reddit.
