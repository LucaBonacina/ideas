---
tipo: fonte
ente: "Comune di Genova (dati.comune.genova.it)"
livello: "comunale"
territorio: "Comune di Genova"
tipologie: [nido, sezione primavera, servizi integrativi, servizi domiciliari, infanzia statale, infanzia paritaria, infanzia non paritaria]
gestione: [pubblico, privato convenzionato, privato]
campi: [denominazione, tipo (con gestione nel testo), indirizzo, CAP, area geografica, comune]
formato: "open data (JSON-LD; CSV per il dataset 2016), API CKAN"
aggiornamento: "dataset 'Scuole' pubblicato 2024-12-16, frequenza irregolare; anagrafica 2016 ferma"
licenza: "CC-BY 4.0 (sulla risorsa; license_id del pacchetto 'Scuole' vuoto)"
dati_personali: "no"
url: "https://dati.comune.genova.it/dataset/0d43e543-0ee0-4f3b-931b-dae28e69ec7d/resource/8eba9a1b-4f2b-41e7-88f6-131af4c254e0/download/scuole.jsonld"
verificato_il: "2026-11-20"
affidabilita: "media: include privati e domiciliari, ma tipi in testo libero, possibili doppioni per sezione, nessun aggiornamento dal 2024"
tags: [fonte, liguria, genova, open-data]
---
# Comune di Genova - Anagrafica scuole e nidi open data

## Dataset verificati
1. **"Scuole" (scuole-genova)**, JSON-LD, 749 record, pubblicato 2024-12-16. Campi: nome, tipo, indirizzo, CAP (744/749), area geografica, provincia, regione, comune. Nessuna coordinata, capienza o contatto. [fatto]
   Tipi 0-3 / 0-6 contati: Asilo Nido Privato 35; Asilo Nido (con 3 sezioni) 34; Asilo Nido Pac 28; Asilo Nido (con 2 sezioni) 19; Asilo Nido Privato Accreditato 6; Asilo Nido (con 2 sez. 12-36) 5; Asilo Nido Estivo 4; Asilo Nido part-time 3; Primavera Paritaria 21; Primavera Tempo Pieno 10; Primavera Part Time 4; Primavera Mista 2; Educatore Domiciliare 9 (+1 accreditato); Centro Bambini Comunale 2, Privato Conv. 3, Privato 2; Scuola Infanzia (comunale) 51, Statale 77, Paritaria 25, Ppc 25, Privata 9. [fatto] Significato di "Pac" e "Ppc" non documentato (forse privato accreditato convenzionato) [stima].
2. **"Anagrafica delle scuole pubbliche (dal nido alla secondaria di primo grado)"**, CSV 2016, 343 righe: 35 nidi comunali, 49 infanzia comunali, 76 infanzia statali, 10 sezioni primavera. CC-BY 4.0. Vecchio. [fatto]

## Esempio di record (Scuole)
`Coccinella | Scuola Infanzia | Via Benedetto Da Porto 14A | 16165 | NORD OVEST | Genova`

## Pagine del Comune
Iscrizioni online a nidi comunali e sezioni primavera a.s. 2026-27: **dal 24 marzo (ore 10) al 19 aprile 2026 (ore 20)**; nidi per nati 2024-2026, primavera per nati 2024 (PDF informativo, letto). [fatto]

## Problemi noti
Nessuna data di riferimento dell'anno scolastico nei record; tipi non normalizzati; nessun identificativo stabile utile (gli @id derivano dal nome file).

## Fonti
- https://dati.comune.genova.it/api/3/action/package_show?id=scuole-genova (accesso 2026-11-20)
- https://dati.comune.genova.it/api/3/action/package_show?id=anagrafica-delle-scuole-pubbliche-dal-nido-alla-secondaria-di-primo-grado (accesso 2026-11-20)
- https://opendatacomunegenova.s3.eu-south-1.amazonaws.com/risorse/anagrafica_scuole_2016.csv (accesso 2026-11-20)
- https://www.comune.genova.it/sites/default/files/2026-03/Info%20famiglie%20iscrizioni%20Nidi%20e%20sezioni%20Primavera%20comunali%20a.s.%202026-27%20%281%29.pdf (accesso 2026-11-20)
