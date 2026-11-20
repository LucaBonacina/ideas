---
tipo: fonte
ente: "Regione Puglia (Sezione Inclusione sociale attiva), pubblicato su dati.puglia.it"
livello: "regionale"
territorio: "Puglia"
tipologie: [nido, micronido, sezione primavera, centro ludico prima infanzia, servizio educativo domiciliare, piccolo gruppo educativo o nido in famiglia, ludoteca]
gestione: [pubblico, privato]
campi: [registro, articolo del Reg. reg. 4/2007 (tipologia), tipo struttura o servizio, provincia, posizione, numero e data iscrizione al registro, numero e data provvedimento comunale di autorizzazione, cancellato, titolare, natura del titolare (pubblica o privata), ambito territoriale, gestore, denominazione sede operativa, indirizzo, comune, CAP, provincia, validità autorizzazione, cognome e nome legale rappresentante, fascia di età, ricettività]
formato: "open data (CSV, con XSD e legenda ODS)"
aggiornamento: "dichiarato annuale; file 'registri2023od.csv' caricato il 05/10/2023; ultima iscrizione presente 24/05/2023"
licenza: "CC-BY 4.0"
dati_personali: "sì: cognome e nome del legale rappresentante (COGNOME_LEGALE, NOME_LEGALE) e nomi di ditte individuali"
url: "https://dati.puglia.it/ckan/dataset/registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati"
verificato_il: "2026-11-20"
affidabilita: "media: è il registro ufficiale delle strutture autorizzate (pubbliche e private) ma l'estrazione open data è ferma a maggio 2023"
tags: [fonte, puglia, registro, open-data]
---
# Regione Puglia - Registro strutture e servizi

## Cosa copre
[fatto] Estrazione open data dei **Registri regionali delle strutture e dei servizi socio-assistenziali pubblici e privati autorizzati** (L.R. 19/2006, art. 53; Reg. reg. 4/2007). In Puglia l'autorizzazione al funzionamento la rilascia il Comune; la Regione iscrive poi la struttura nel registro (il file riporta sia il provvedimento comunale sia l'atto di iscrizione regionale).

[fatto] Conteggi fatti sul CSV scaricato il 2026-11-20:
- 4.923 righe in tutto (Minori 2.208, Anziani 1.587, Disabili 646, altri registri); tutte con CANCELLATO = "NO".
- **935 righe di servizi 0-3** nel registro Minori: Asilo nido (art. 53) 355, Sezione primavera (art. 53) 277, Centro ludico prima infanzia (art. 90) 137, Micro nido (art. 53) 130, Servizio di educazione familiare o servizio per l'infanzia a domicilio (art. 101a) 30, Piccolo gruppo educativo o nido in famiglia (art. 101b) 6. In più 211 ludoteche (art. 89, fascia 3-11 anni circa).
- Natura del titolare dei 935: privata 703, pubblica 232.
- Per provincia della sede: BA 275, LE 241, TA 137, FG 128, BR 80, BAT 74.
- Nei capoluoghi: Bari 54 (23 nidi, 18 sezioni primavera, 7 micronidi, 6 centri ludici), Lecce 39, Taranto 42, Foggia 55, Brindisi 17.
- 920 righe su 935 hanno la ricettività.
- Ultima data di iscrizione presente: 24/05/2023.

**Non copre:** strutture iscritte dopo maggio 2023; scuole dell'infanzia (non sono nel registro sociale); rette, orari, contatti. Non distingue i nidi aziendali (rientrano nell'art. 53).

## Come si accede
Download diretto del CSV (UTF-8, separatore virgola):
https://dati.puglia.it/ckan/dataset/bffa2d3d-c0b4-4fc9-a96c-7104a272ed38/resource/7aa651c7-b536-494e-861e-2adbcf798223/download/registri2023od.csv
Il dataset ha anche l'API CKAN (`package_show?id=registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati`).

## Esempio di record
| Campo | Valore |
|---|---|
| REGISTRO | Minori |
| ARTICOLO | Asilo Nido (art.53 Reg. R. n.4/2007) |
| DATA_ISCRIZIONE_REGISTRO | 04-apr-19 |
| NUM_PROVV_COMUNALE / DATA | 2019/263/00063 del 08-feb-19 |
| NATURA_TITOLARE | privata |
| DENOMINAZIONE_SEDE_OP | Istituto Figlie di Santa Maria di Leuca |
| INDIRIZZO_SEDE_OP | Via Camillo Rosalba 42, Bari |
| RICETTIVITA | 51 |

## Problemi noti
- Fermo a maggio 2023: per i servizi nati dopo serve il catalogo zerosei ([[Regione Puglia - Catalogo telematico zerosei]]) o i comuni.
- Contiene nomi di legali rappresentanti: vanno scartati all'importazione.
- Date nel formato "04-apr-19"; refusi negli indirizzi; alcune righe hanno PROVINCIA_REGISTRO incoerente (es. "RM" per una struttura di Bari con titolare a Roma).
- [fatto] Nel 2026 una determina regionale cita il nuovo "Registro regionale delle strutture e dei servizi socio-assistenziali per minori" istituito con DGR n. 1831 del 19/11/2025 (fonte: estratto di ricerca, atto non letto direttamente): l'open data potrebbe essere sostituito.

## Confronto
Il numero di servizi ISTAT per la Puglia non è stato letto in questa sessione (non trovato con le ricerche fatte): il confronto 935 (registro, 2023) contro ISTAT resta da fare con le note nazionali dell'altra sessione, sulle stesse tipologie.

## Fonti
- Scheda dataset: https://dati.puglia.it/ckan/dataset/registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati (accesso 2026-11-20, API letta direttamente)
- CSV: URL sopra (accesso 2026-11-20, scaricato e contato)
- Regione: [[Puglia]]
