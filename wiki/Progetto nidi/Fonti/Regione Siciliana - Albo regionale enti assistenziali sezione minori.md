---
tipo: fonte
ente: "Regione Siciliana - Assessorato della Famiglia, delle Politiche sociali e del Lavoro, Dipartimento Famiglia e Politiche sociali, Servizio 6 Albi e RUNTS"
livello: regionale
territorio: "Sicilia"
tipologie: [nido, micronido]
gestione: [privato, privato convenzionato]
campi: [numero di iscrizione all'albo, denominazione e codice fiscale dell'ente, sezione, tipologia, indirizzo e dati catastali della sede operativa, ricettività, estremi dell'autorizzazione al funzionamento]
formato: "PDF (un decreto per ente/sede), nessun elenco consolidato trovato"
aggiornamento: "continuo (decreti pubblicati sul sito regionale; es. D.R.S. 2964 del 27/08/2026)"
licenza: "nessuna indicata"
dati_personali: "i decreti riportano nomi di dirigenti regionali e talvolta di legali rappresentanti (non riportati)"
url: "https://www.regione.sicilia.it/system/files/2026-08/002964-S6.pdf"
verificato_il: "2026-11-20"
affidabilita: "alta per il singolo ente (atto ufficiale), bassa come elenco: non esiste un elenco pubblico consolidato dei nidi iscritti"
tags: [fonte, nidi, sicilia, registro]
---
# Regione Siciliana - Albo regionale enti assistenziali, sezione Minori

## Cosa copre
L'albo unico regionale degli enti assistenziali pubblici e privati (art. 26 L.R. 9 maggio 1986 n. 22, istituito con D.A. 29/03/1989) ha una **sezione "Minori"** con le tipologie **"Asilo Nido"** e **"Micro Nido"**. [fatto] L'iscrizione serve "per la stipula di convenzioni con i Comuni"; è preceduta dall'**autorizzazione al funzionamento ex art. 28 L.R. 22/1986, rilasciata dalla Regione** con D.R.S. del Servizio 6, dopo accertamenti del Comune; gli standard sono quelli del D.P.Reg. 16/05/2013 (standard strutturali e organizzativi dei servizi per la prima infanzia).

Esempio [fatto]: D.R.S. n. 2964 del 27/08/2026 – un'associazione iscritta al n. 6402 dell'albo, sezione Minori, tipologia Asilo Nido, sede a Catania, ricettività 37; autorizzazione al funzionamento D.R.S. n. 2439 del 03/07/2026; accertamenti del Comune di Catania del 26/08/2026. Numeri di iscrizione oltre 6.400 riguardano **tutte** le sezioni dell'albo (anziani, inabili, minori…), non solo i nidi.

Vigilanza: il Comune verifica annualmente il mantenimento dei requisiti e comunica l'esito alla Regione entro il 30 aprile (Circolare 06/2015, Circolare 04/2021).

## Cosa non copre
Nidi comunali (non devono iscriversi), privati che non chiedono convenzioni (hanno solo l'autorizzazione), sezioni primavera, spazi gioco (nessuna tipologia nidi-integrativi trovata nell'albo).

## Come si accede
Solo come singoli decreti PDF sul sito regionale (percorsi `regione.sicilia.it/system/files/AAAA-MM/NNNNNN-S6.pdf`), trovabili via motore di ricerca. **Elenco consolidato non trovato.** Sul portale open data regionale (dati.regione.sicilia.it, harvestato su dati.gov.it) lo stesso Dipartimento pubblica "Elenco delle istituzioni socio-assistenziali per anziani", "per Inabili" e "Elenco comunità per minori" (CSV, CC-BY 4.0, aggiornati 2025-12-30), ma **nessun elenco di asili nido/micronidi** (verificato con l'API di dati.gov.it, 192 dataset della Regione Siciliana, ricerche "nido", "asili", "infanzia", "minori").

## Esempio di record
"[Ente] – iscritto al n. 6402 – sezione Minori – tipologia Asilo Nido – sede Catania – ricettività 37 unità".

## Problemi noti
- Portale dati.regione.sicilia.it irraggiungibile (503 / connessione chiusa) il 2026-11-20; metadati letti tramite dati.gov.it.
- Per costruire un elenco servirebbe una richiesta di accesso civico al Servizio 6 o la richiesta di pubblicare un dataset "sezione Minori" come quelli già esistenti per anziani e inabili.

## Fonti
- https://www.regione.sicilia.it/system/files/2026-08/002964-S6.pdf (accesso 2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=minori&fq=organization:regione-siciliana (accesso 2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_show?id=elenco-comunita-per-minori (accesso 2026-11-20)
