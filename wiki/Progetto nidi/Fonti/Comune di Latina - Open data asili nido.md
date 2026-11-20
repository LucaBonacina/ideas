---
tipo: fonte
ente: "Comune di Latina"
livello: comunale
territorio: "Comune di Latina"
tipologie: [nido]
gestione: [pubblico, privato convenzionato]
campi: [denominazione, indirizzo, coordinate, tipo di gestione, giorni, orari, posti, telefono; per i convenzionati ditta, nome nido, indirizzo, coordinate, telefono]
formato: "open data (CSV, due file) tramite dati.gov.it"
aggiornamento: "annuale dichiarato; modified 2025-08-12"
licenza: "non indicata nei metadati letti"
dati_personali: "alcuni telefoni dei nidi convenzionati sono cellulari; da non riusare"
url: "https://www.dati.gov.it/sites/default/files/c-e472_asili-nido.csv"
verificato_il: 2026-11-20
affidabilita: "media: piccolo ma aggiornato al 2025; colonne dei comunali sfasate"
tags: [fonte, lazio, latina, open-data, elenco-servizi]
---
# Comune di Latina - Open data asili nido

**Cosa copre [fatto]:** due CSV pubblicati su dati.gov.it (codice catastale E472): "Asili nido" con **6 nidi comunali** (gestione diretta o in convenzione, posti, orari) e "Asili nido convenzionati" con **15 nidi privati convenzionati**. Il Comune pubblica anche "Scuole dell'infanzia paritarie comunali" (non scaricato).

**Esempio di record:** `Asilo Nido Piccolo Mondo via degli Aurunci;Via degli Aurunci 67 Latina;41.4614..., 12.9237...;diretta;dal lunedì al venerdì;dalle ore 7:40 alle ore 17:20;tempo pieno – n. posti 42;...`

**Cosa non copre:** privati non convenzionati; rette; scadenze. Confronto: l'elenco regionale degli accreditati conta 22 servizi nel comune di Latina [fatto].

**Problemi noti:** nel file dei comunali le colonne "Orari", "Servizi", "Contatti" contengono valori sfasati (giorni in "Orari", orari in "Servizi", posti in "Contatti").

## Fonti
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=asili%20nido%20Latina (accesso 2026-11-20)
- https://www.dati.gov.it/sites/default/files/c-e472_asili-nido.csv e https://www.dati.gov.it/sites/default/files/c-e472_asili-nido-convenzionati.csv (scaricati 2026-11-20)
