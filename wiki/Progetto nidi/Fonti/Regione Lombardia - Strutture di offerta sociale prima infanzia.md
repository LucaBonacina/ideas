---
tipo: fonte
ente: "Regione Lombardia (DG Welfare / Famiglia), portale dati.lombardia.it"
livello: "regionale"
territorio: "Lombardia"
tipologie: [nido, micronido, nido famiglia, centro prima infanzia]
gestione: [pubblico, privato convenzionato, privato]
campi: [codice ATS, ATS, codice ASST, ASST, ambito, codice ente gestore, denominazione ente gestore, codice fiscale ente gestore, partita IVA ente gestore, tipologia unità d'offerta, codice CUDES, denominazione struttura, numero posti, provincia, CAP, comune, frazione, indirizzo, telefono, fax, email, sito web, coordinate WGS84]
formato: "open data (CSV/JSON via API Socrata)"
aggiornamento: "mensile dichiarato; dataUpdatedAt 2026-11-14 (verificato il 2026-11-20)"
licenza: "nessuna indicata nei metadati del dataset (campo license = null); il vecchio dataset jsvt-y3pu era CC0 1.0"
dati_personali: "sì, indiretti: 249 record hanno come ente gestore una persona fisica (codice fiscale personale, nome e cognome nel campo ente gestore); telefoni spesso cellulari"
url: "https://www.dati.lombardia.it/d/pej5-wp65"
verificato_il: "2026-11-20"
affidabilita: "alta: è l'elenco ufficiale delle unità d'offerta sociali in esercizio (CPE), aggiornato mensilmente; non dice però gestione pubblica/privata né accreditamento"
tags: [fonte, lombardia, registro, open-data]
---
# Regione Lombardia - Strutture di offerta sociale prima infanzia

Registro regionale delle unità d'offerta sociali (UdOS) per la prima infanzia in esercizio in Lombardia. Dataset Socrata `pej5-wp65`, titolo "Strutture di offerta sociale prima infanzia", categoria Famiglia, direzione Welfare. [fatto]

## Cosa copre
Quattro tipologie della rete regionale 0-3 (le stesse elencate dalla Regione nella pagina UdOS):

| Tipologia | Record | Posti totali | Posti mediani |
|---|---|---|---|
| ASILO NIDO | 2.091 | 67.177 | 27 |
| NIDO FAMIGLIA | 291 | 1.458 | 5 |
| MICRO NIDO | 261 | 2.511 | 10 |
| CENTRO PRIMA INFANZIA | 64 | 1.173 | 17,5 |
| **Totale** | **2.707** | **72.319** | |

[fatto, conteggio sul CSV scaricato il 2026-11-20]

- Record per provincia: MI 918, BS 336, BG 295, MB 240, VA 218, CO 142, PV 135, LC 118, MN 97, CR 94, LO 68, SO 46. 924 comuni distinti. 1.820 enti gestori distinti. Ogni record ha un codice CUDES univoco (2.707 distinti). [fatto]
- Copertura dei campi: telefono 2.567, email 2.516, sito web 741, coordinate 2.705 su 2.707. [fatto]
- Ente gestore "COMUNE DI ..." in 522 record (quindi titolarità comunale riconoscibile solo dal nome dell'ente gestore). [fatto]

## Cosa non copre
- **Nessun campo** su gestione (pubblico / privato / convenzionato), accreditamento comunale, rette, orari, età accolte, posti liberi. [fatto]
- **Sezioni primavera** e **scuole dell'infanzia**: non sono unità d'offerta sociali, quindi non ci sono (solo 6 strutture hanno "primavera" nel nome). [fatto]
- **Nidi aziendali**: non sono una tipologia separata; 14 strutture hanno "aziendale" nel nome. [fatto]
- **Unità d'offerta sperimentali** (art. 13 l.r. 3/2008) e servizi integrativi non UdOS (spazi gioco, "tempo per le famiglie"): non trovati nel dataset. [fatto per l'assenza della tipologia]

## Come si accede
- Pagina: https://www.dati.lombardia.it/d/pej5-wp65 (dominio canonico hub.dati.lombardia.it)
- Metadati: `https://www.dati.lombardia.it/api/views/metadata/v1/pej5-wp65`
- Conteggio: `https://www.dati.lombardia.it/resource/pej5-wp65.json?$select=count(*)` → 2707
- CSV completo: `https://www.dati.lombardia.it/api/views/pej5-wp65/rows.csv?accessType=DOWNLOAD`

## Esempio di record (ente pubblico)
`ATS DI BERGAMO | ambito BERGAMO | ente gestore COMUNE DI BERGAMO | ASILO NIDO | CUDES 055911 | NIDO MEUCCI | 20 posti | BG | BERGAMO | VIA ANTONIO MEUCCI,4 | 45.6906, 9.6428`

## Problemi noti
- Licenza non dichiarata nel dataset (Socrata mostra "La licenza per questo set di dati non è specificata"). Il dataset precedente `jsvt-y3pu` ("Lista unità offerte sociali - nidi e centri e comunità", 971 righe, fermo al 2021-12-14) era CC0 1.0. [fatto]
- Dati personali: 249 record con ente gestore persona fisica (codice fiscale personale). Da escludere o pseudonimizzare in qualunque riuso. [fatto]
- Il dataset è creato nel 2023-11-26; non c'è storico delle chiusure. [fatto]
- La Regione richiama l'"Anagrafe Unica delle unità d'offerta sociali e sociosanitarie" come base per Nidi Gratis Plus (DGR XII/6201/2026): questo dataset ne è verosimilmente l'estratto pubblico per la prima infanzia [stima].

## Fonti
- https://www.dati.lombardia.it/api/views/metadata/v1/pej5-wp65 (accesso 2026-11-20)
- https://www.dati.lombardia.it/api/views/pej5-wp65/rows.csv?accessType=DOWNLOAD (accesso 2026-11-20)
- https://www.dati.lombardia.it/api/views/metadata/v1/jsvt-y3pu (accesso 2026-11-20)
- https://www.regione.lombardia.it/politiche-sociali-e-abitative/unita-offerta-sociale-udos (accesso 2026-11-20)
