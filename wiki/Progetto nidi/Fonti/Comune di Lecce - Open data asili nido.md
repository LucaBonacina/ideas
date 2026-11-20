---
tipo: fonte
ente: "Comune di Lecce (OpenData Lecce, raccolto anche su dati.puglia.it)"
livello: "comunale"
territorio: "Comune di Lecce"
tipologie: [nido]
gestione: [pubblico, privato convenzionato]
campi: [denominazione, indirizzo, comunale, capienza, fascia utenza mesi, mensa interna, pediatra, orario giornaliero, orario sabato, mesi di funzionamento, estensione luglio, esternalizzazione, coordinate]
formato: "open data (GeoJSON; CSV e XLSX tramite link accorciati goo.gl)"
aggiornamento: "irregolare; dati di contenuto dell'a.s. 2013/14 circa (titolo della landing page originale); metadati rigenerati nel 2026"
licenza: "CC-BY 4.0"
dati_personali: "no"
url: "https://dati.puglia.it/ckan/dataset/elenco-e-ubicazione-asili-nido-comunali-lecce"
verificato_il: "2026-11-20"
affidabilita: "bassa: dati vecchi; l'elenco delle strutture per minori autorizzate collegato allo stesso portale non è più scaricabile"
tags: [fonte, puglia, lecce, open-data]
---
# Comune di Lecce - Open data asili nido

## Cosa copre
[fatto] Il GeoJSON "asilinido.json" contiene **4 nidi comunali** (Il Piccolo Principe 64 posti, Il Cerbiatto 64, Ilaria Alpi 60, Nicholas Green 49; gli ultimi due a gestione esternalizzata). La descrizione avverte che per le rette agevolate nei nidi esternalizzati bisogna iscriversi al portale regionale dei buoni servizio.

[fatto] Il dataset collegato "Elenco strutture per minori autorizzate città di Lecce" (strutture iscritte all'albo regionale ex L.R. 19/2006) punta a link goo.gl: il CSV rimanda a un foglio Google che il 2026-11-20 risponde **HTTP 410 (non più disponibile)**.

Sullo stesso portale ci sono dataset storici di Lecce su rette per fasce ISEE, posti disponibili e iscrizioni (2014-2020), questionari di gradimento, menù.

**Non copre:** privati; dati attuali. Per Lecce sono più aggiornati il registro regionale (39 servizi 0-3 al 2023) e il catalogo zerosei (21 unità 2026/27).

## Come si accede
GeoJSON: https://dati.comune.lecce.it/dataset/4849881a-c887-463e-acd3-b1e4f74085e2/resource/91b46b6c-1f33-47e5-b2be-1912dbeb3647/download/asilinido.json

## Esempio di record
Il Piccolo Principe – Via Nino della Notte – comunale SI – capienza 64 – 3-36 mesi – 7.45-15 – settembre-giugno, estensione luglio – esternalizzazione NO.

## Problemi noti
Link goo.gl (servizio dismesso) per CSV e XLSX; dati fermi.

## Fonti
- https://dati.puglia.it/ckan/dataset/elenco-e-ubicazione-asili-nido-comunali-lecce (accesso 2026-11-20, API e GeoJSON letti)
- https://dati.puglia.it/ckan/dataset/elenco-strutture-per-minori-autorizzate-citta-di-lecce (accesso 2026-11-20; risorsa 410)
- Regione: [[Puglia]]
