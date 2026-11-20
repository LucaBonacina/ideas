---
tipo: rapporto
sessione: P1
data: 2026-11-20
tags: [progetto, nidi, rapporto]
---
# Fonti nazionali sui servizi 0-6: ISTAT, INPS, Openpolis, Dipartimento famiglia, OpenCivitas, dati.gov.it

Verifica diretta, fatta il 20/11/2026, delle fonti nazionali da cui si potrebbe costruire un elenco nominativo completo dei servizi educativi 0-6 in Italia, pubblici e privati.
I file scaricati sono in `/tmp/claude-0/-home-user-ideas/5f53a650-3152-5bd6-9d5f-a5c56e99f6ec/scratchpad/dati/` (cartella temporanea: si può cancellare).

**In sintesi.** Nessuna fonte nazionale pubblica oggi, liberamente e in open data, un **elenco nominativo** di nidi e servizi 0-3. Due archivi nominativi esistono ma sono chiusi:
- l'archivio ISTAT delle unità di offerta, che i Comuni aggiornano ogni anno con ID struttura, indirizzo, denominazione, tipologia, titolarità e posti. È diffuso solo in forma aggregata per comune;
- l'"Agenda Asili Nido" INPS. Per legge i Comuni la alimentano dal 2026 con codice fiscale, gestore, sede e titolo abilitativo. È consultabile solo con SPID, dentro il Portale della famiglia.

Ciò che è aperto (ISTAT IstatData e il suo derivato Openpolis) dà **conteggi e posti per comune**. È ottimo come "verità di controllo": dice quante strutture ci si deve aspettare in ogni comune e quanto è completo l'elenco. Non è però una base nominativa.

---

## Tabella delle evidenze

| # | Affermazione | Tipo | URL | Accesso | Letto direttamente? |
|---|---|---|---|---|---|
| E1 | ISTAT, a.e. 2023/24: 14.570 nidi e servizi integrativi attivi, circa 378.500 posti autorizzati, copertura del 31,6% | [fatto] | https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf | 2026-11-20 | sì, PDF scaricato e letto con pdftotext |
| E2 | Le unità di rilevazione ISTAT sono i Comuni e gli ATS (circa 8.600 enti). Dal 2012/13 c'è un "Censimento annuale delle unità di offerta": il Comune aggiorna l'elenco dei servizi attivi con tipologia, natura giuridica del titolare e posti. Il tasso di risposta nel 2023/24 è stato del 79,9% | [fatto] | stesso PDF, nota metodologica | 2026-11-20 | sì |
| E3 | ISTAT diffonde i dati per Comune, ATS, provincia e regione su IstatData. I dati comunali contengono una componente stimata, ripartita in base alla popolazione 0-2 anni per gli enti associativi | [fatto] | stesso PDF | 2026-11-20 | sì |
| E4 | Il questionario ISTAT 2025 ha una Sezione E "elenco strutture" con i campi ID Struttura, Indirizzo, Denominazione, Servizio, Titolarità, N. posti, Stima posti, Inattivo, Accreditamento, Polo infanzia, Stato. Nella modifica del servizio ci sono anche telefono, fax ed email | [fatto] | https://www.istat.it/fascicoloSidi/2073/QuestionarioAsiliNido2025.pdf ; https://www.istat.it/fascicoloSidi/2073/GuidaCompilazioneAsiliNido2025.pdf | 2026-11-20 | sì, PDF scaricati e letti |
| E5 | Il dataflow IstatData `47_850` "Servizi socio-educativi per la prima infanzia" (DSD DCIS_SERVSOCEDU1) ha le dimensioni REF_AREA, DATA_TYPE (SERV = servizi attivi, AUTP = posti autorizzati, utenti, spesa…), TYPE_SOCIO_EDUC_SERVICE (CDNUR nidi, COMNUR aziendali, DNISC sez. primavera, GUARD spazi gioco, HNUR domiciliari, CCHP centri bambini-genitori), TYPE_MANAGEMENT e HOLDER_SECTOR_PUBPRIV (1 = privato, 2 = pubblico, 9 = totale) | [fatto] | https://esploradati.istat.it/SDMXWS/rest/datastructure/IT1/DCIS_SERVSOCEDU1/latest?references=children | 2026-11-20 | sì, API SDMX via curl |
| E6 | Nel dataflow 47_850, a livello Italia, TIME_PERIOD 2023 = 14.570 servizi e 378.496 posti (coincide con l'a.e. 2023/24 del report). TIME_PERIOD 2024 = **15.049 servizi** (10.114 privati, 4.935 pubblici) e **388.251 posti**: è un'annualità più recente del report di febbraio 2026, presumibilmente l'a.e. 2024/25 | [fatto] i numeri; [stima] la corrispondenza 2024 = a.e. 2024/25 | https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.IT.SERV+AUTP.ALL.ALL.?startPeriod=2022 | 2026-11-20 | sì, CSV SDMX |
| E7 | Nel periodo 2024, 4.924 codici comunali hanno almeno un servizio attivo, su 8.499 righe comunali (codici a 6 cifre, compresi codici storici) | [fatto] | https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A..SERV.ALL.ALL.9?startPeriod=2024&endPeriod=2024 | 2026-11-20 | sì, CSV scaricato e contato |
| E8 | Esempio Milano (015146), periodo 2024: 460 servizi (284 privati, 176 pubblici), 14.024 posti; 367 nidi, 70 sezioni primavera, 15 domiciliari, 7 spazi gioco, 1 centro bambini-genitori | [fatto] | https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.015146.SERV+AUTP+P_100CH_Y0_2...?startPeriod=2020 | 2026-11-20 | sì |
| E9 | I contenuti ISTAT sono in licenza CC BY 4.0, riuso commerciale incluso | [fatto] | https://www.istat.it/note-legali/ | 2026-11-20 | sì |
| E10 | Per la scuola dell'infanzia ISTAT (dataflow `52_1045_DF_DCIS_SCUOLE1_2`), TIME_PERIOD 2025: 21.690 scuole (13.028 statali, 1.877 pubbliche non statali, 6.785 private), 1.217.844 iscritti. Il dettaglio arriva al massimo alla provincia | [fatto] i numeri; [stima] l'anno scolastico di riferimento esatto | https://esploradati.istat.it/SDMXWS/rest/data/IT1,52_1045_DF_DCIS_SCUOLE1_2,1.0/A.IT.......?lastNObservations=1 | 2026-11-20 | sì |
| E11 | Circolare INPS n. 93 del 9/9/2026: in base all'art. 1, c. 355-bis, L. 232/2016 (introdotto dal DL 62/2026, conv. L. 112/2026), gli enti locali comunicano all'INPS il codice fiscale e gli altri elementi identificativi delle strutture pubbliche e private abilitate (d.lgs. 65/2017, art. 2 c. 3). Scadenza: 1° settembre di ogni anno. Per il 2026/27 si usa un Excel allegato inviato alle Direzioni regionali INPS; dal 2027/28 la PDND | [fatto] | https://www.fiscoetasse.com/files/22412/circolare-n-93-del-09-09-2026.pdf (copia del testo; la pagina INPS carica il testo via JS) | 2026-11-20 | sì, PDF letto |
| E12 | Il tracciato dell'Agenda Asili Nido contiene, tra gli altri, i campi "Tipologia" (asilo nido, micronido, sezione primavera, spazio gioco, servizio domiciliare), "Modalità di gestione" (pubblica, privata, concessione, appalto, scuola dell'infanzia con progetto), "Rilasciata da (Ente)", gestore, sede operativa e titolo abilitativo. L'Agenda contiene già i dati 2025/26 forniti da Regioni ed enti. I dati vanno anche alla Commissione tecnica fabbisogni standard | [fatto] | come E11 | 2026-11-20 | sì |
| E13 | INPS, notizia dell'11/9/2026: una mappa geolocalizzata delle strutture convenzionate sarà disponibile "nelle prossime settimane" sul Portale della famiglia. Nel frattempo si rimanda agli elenchi comunali | [fatto] | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html | 2026-11-20 | sì, HTML via curl |
| E14 | INPS, notizia del 18/11/2026: è attiva la sezione "Servizi vicino a me" del Portale della famiglia, con la categoria "educazione e prima infanzia: strutture educative pubbliche e private". Serve l'autenticazione **SPID livello 2, CIE o CNS** | [fatto] | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.11.servizi-vicino-a-me-la-mappa-per-le-famiglie.html | 2026-11-20 | sì |
| E15 | L'URL del Portale (serviziweb2.inps.it/AS0207/PortaledelleFamiglie/) reindirizza a loginSPID.jsp: nessun accesso anonimo | [fatto] | https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/ | 2026-11-20 | sì, curl ha seguito il redirect |
| E16 | INPS Focus genitorialità 2025 (appendice di luglio 2026): 530.197 minori beneficiari del bonus nido nel 2025 (62,6% in nidi privati, 37,4% pubblici), con ripartizione solo per regione | [fatto] | https://www.inps.it/content/dam/inps-site/pdf/dati-analisi-bilanci/osservatori-statistici/Focus_genitorialit%C3%A0_2025.pdf | 2026-11-20 | sì, PDF letto |
| E17 | dati.inps.it non è raggiungibile dall'ambiente (errore 502 del proxy, host irraggiungibile). Su dati.gov.it, i dataset INPS sui nidi sono solo "Asili nido e servizi per prima infanzia 2011" e "Servizi per prima infanzia 2004-2011": tabelle regionali vecchie, CC BY 4.0 | [fatto] | https://opendata.inps.it/download/dataset/migr2015/ID-2519.csv | 2026-11-20 | sì, CSV scaricato |
| E18 | Openpolis/Con i Bambini, articolo del 5/5/2026 "Asili nido, obiettivo 33% più vicino": fonte "elaborazione Openpolis – Con i bambini su dati Istat (ultimo aggiornamento 3/2/2026)". L'articolo linka file XLS per regione su S3 | [fatto] | https://www.openpolis.it/asili-nido-obiettivo-33-piu-vicino-ma-restano-i-divari/ | 2026-11-20 | sì, HTML via curl |
| E19 | Il file Openpolis `2023_asili_nido/umbria.xls` contiene in realtà **tutti i 7.901 comuni** con le colonne Comune, Provincia, Regione, Macroarea, Servizi attivi, Posti autorizzati, Posti per 100 bambini 0-2, Classificazione aree interne. Milano: 454 servizi, 14.238 posti, il valore ISTAT TIME_PERIOD 2023 | [fatto] | https://s3.eu-central-1.amazonaws.com/minidossier.openpolis.it/comuni/Canale+pov+edu/2023_asili_nido/umbria.xls | 2026-11-20 | sì, XLS convertito in CSV con LibreOffice |
| E20 | Il sito Openpolis è in licenza **CC BY-NC 4.0** (link rel="license" nel footer). Nessun repository GitHub Openpolis contiene dati sui nidi (42 repository, tutti di software) | [fatto] | https://www.openpolis.it/ ; GitHub API org:openpolis | 2026-11-20 | sì |
| E21 | conibambini.openpolis.it reindirizza a openpolis.it/poverta-educativa/ | [fatto] | https://conibambini.openpolis.it/ | 2026-11-20 | sì |
| E22 | Accordo DIPOFAM–ISTAT–Ca' Foscari (nuovo accordo, decreto di approvazione): potenzia l'indagine ISTAT, prevede indagini campionarie annuali estese ai servizi domiciliari e il database delle normative regionali 0-6. Non prevede un elenco pubblico delle strutture | [fatto] | https://presidenza.governo.it/AmministrazioneTrasparente/Provvedimenti/ProvvedimentiDirigenti/Dip_PoliticheFamiglia/DECRETOAPPROVAZIONE%20E%20IMPEGNO.pdf | 2026-11-20 | sì, PDF letto |
| E23 | Accordo DIPOFAM–Istituto degli Innocenti 2026 (L. 285): prevede una banca dati dei **progetti** (L. 285/97), non delle strutture 0-3 | [fatto] | https://presidenza.governo.it/AmministrazioneTrasparente/Provvedimenti/ProvvedimentiDirigenti/Dip_PoliticheFamiglia/Accordo%20collaborazione%20DIPOFAM_IDI%20285%20anno%202026.pdf | 2026-11-20 | sì, grep sul testo |
| E24 | Gli ultimi rapporti di monitoraggio del "Piano nidi" degli Innocenti trovati su minori.gov.it si fermano al 31/12/2016 | [stima], basata sui risultati di ricerca | https://www.minori.gov.it/sites/default/files/allegati/Rapporto_servizi_educativi_al_31_12_16.pdf | 2026-11-20 | no, solo risultato di ricerca |
| E25 | Il dataset OpenCivitas open data "Comuni – Sociale e asili nido – Indicatori e determinanti" 2023 (pubblicato il 01/10/2026) è un CSV lungo (USERNAME ente; indicatore; valore) da 573.070 righe e 6.587 enti (comuni delle Regioni a statuto ordinario), con COPERTURA_NID_NEW, SPESA_STORICA_NID, UTENTI_*_C e altri | [fatto] | https://www.opencivitas.it/portale/open-data | 2026-11-20 | sì, CSV scaricato |
| E26 | Nelle note legali OpenCivitas non c'è una licenza aperta esplicita (contenuti "di proprietà di Sogei"). La pagina open data parla di dati "accessibili, fruibili e riutilizzabili" in CSV/RDF | [fatto] | https://www.opencivitas.it/portale/note-legali | 2026-11-20 | sì |
| E27 | Su dati.gov.it (API CKAN, ricerche per frase) ci sono 304 dataset unici per "asili nido", "asilo nido", "nidi d'infanzia", "prima infanzia", "scuola/e dell'infanzia", "sezioni primavera" e "micronido": 147 regionali, 149 locali, 5 GeoDati-RNDT (locali), 3 "nazionali", di cui 2 INPS 2004-2011 e 1 falso positivo MUR | [fatto] | https://www.dati.gov.it/opendata/api/3/action/package_search?q=%22asili%20nido%22&rows=1000 | 2026-11-20 | sì, JSON via curl |
| E28 | Il datasets più numerosi su dati.gov.it vengono da Regione Toscana (47 su "asili nido"), Regione Puglia (19) e Comune di Milano (72 su "scuola dell'infanzia"). Non c'è nessun dataset MIM o ISTAT sui nidi harvestato | [fatto] | come E27 | 2026-11-20 | sì |
| E29 | Il Fondo di solidarietà comunale finanzia gli obiettivi di servizio per i nidi, monitorati tramite OpenCivitas / "Obiettivi in Comune" (FAQ IFEL, febbraio 2026) | [stima], da risultati di ricerca | https://fondazioneifel.it/images/Obiettivi_In_Comune/FAQ_webinar_25_02_2026_Obiettivodiservizio_Nidi.pdf | 2026-11-20 | no |

---

## Schede per fonte

### 1. ISTAT – Indagine "Nidi e servizi integrativi per la prima infanzia" (IST-02647) e IstatData

- **Ente:** ISTAT, con Ragioneria Generale dello Stato e 13 Regioni/PA compartecipanti. È affiancata dall'accordo DIPOFAM–ISTAT–Università Ca' Foscari per le indagini campionarie (circa 3.000 servizi) (E2, E22).
- **Chi risponde:** Comuni e ATS (circa 8.600 enti) tramite una piattaforma web. Il Comune, che autorizza il funzionamento, aggiorna ogni anno l'elenco delle unità di offerta pubbliche e private (E2). Nel 2023/24 ha risposto il 79,9%; per chi non risponde l'ISTAT stima dai dati dell'anno precedente.
- **Tipologie coperte:** nidi e micronidi (compresi gli aziendali), sezioni primavera, servizi integrativi (spazi gioco, centri bambini-genitori, servizi in contesto domiciliare). **Non coperte:** la scuola dell'infanzia, rilevata a parte da MIM e ISTAT (E10); le ludoteche, solo in parte.
- **Gestione:** titolarità pubblica o privata. Per l'offerta comunale c'è anche il tipo di gestione: diretta, affidata a terzi, privato con o senza riserva di posti (E5).
- **Elenco nominativo?** Esiste **internamente**: Sezione E del questionario, con ID struttura, indirizzo, denominazione, contatti, tipologia, titolarità, posti, accreditamento e polo 0-6 (E4). **Non è pubblicato.** Non risultano microdati né un file pubblico dell'elenco. L'accesso si chiederebbe tramite contact.istat.it o i canali per la ricerca, con esito incerto (vedi "Cosa resta aperto").
- **Livello di dettaglio diffuso:** comune, ATS, provincia, regione (E3).
- **Campi diffusi:** servizi attivi, posti autorizzati, posti per 100 bambini 0-2, utenti, spesa, compartecipazione, ripartiti per tipologia × settore pubblico/privato (E5).
- **Formato e accesso:** API SDMX REST senza login (`esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/...`), CSV e XML; interfaccia IstatData. Il report annuale è in PDF.
- **Ultimo aggiornamento:** report del 2/2/2026 (a.e. 2023/24). Il dataflow ha già il periodo 2024, con 15.049 servizi e 388.251 posti (E6).
- **Licenza:** CC BY 4.0 (E9). **Dati personali:** nessuno nei dati diffusi.
- **Esempio di record (CSV SDMX):** `IT1:47_850(1.0),A,015146,SERV,CDNUR,ALL,1,2024,234` = Milano, nidi privati attivi, 234.
- **Problemi:** i dati comunali sono in parte stimati (riparto ATS). Una convenzione tra comuni vicini può far risultare "vuoto" un comune che in realtà è servito. I codici di periodo sono ambigui (TIME_PERIOD = anno di inizio dell'a.e.?). Il 20% degli enti non risponde e viene stimato.
- **Valore come base per l'elenco nominativo: MEDIO-BASSO** come fonte diretta (nessun nome o indirizzo). È invece **ALTO come denominatore di controllo**: il numero atteso di strutture e posti per comune, tipologia e titolarità serve a misurare la completezza di un elenco costruito da fonti regionali o comunali. Se l'ISTAT concedesse l'elenco delle unità di offerta, sarebbe la base nazionale migliore.

### 1-bis. ISTAT – Scuola dell'infanzia (fonte MIM)

- Dataflow `52_1045_DF_DCIS_SCUOLE1_2` "Infanzia - scuole, classi, bambini". Gestione: statale, pubblica non statale (comunale), privata. Ultimo periodo 2025: 21.690 scuole (E10).
- Dettaglio massimo: **provincia**. Nessun elenco nominativo, per il quale serve l'anagrafe scuole MIM, fuori da questo rapporto. **Valore: basso** (solo controllo provinciale).

### 2. INPS – Agenda Asili Nido, mappa del Portale della famiglia, Osservatori bonus nido

- **Agenda Asili Nido (banca dati nazionale):**
  - Obbligo di legge dal 1/7/2026. I Comuni, le Unioni e gli ATS comunicano entro il 1° settembre di ogni anno il codice fiscale e gli elementi identificativi delle strutture pubbliche e private **abilitate** 0-36 mesi: nido, micronido, sezione primavera, spazio gioco, servizio domiciliare. Il documento li indica come tipologie dell'art. 2 c. 3 d.lgs. 65/2017 lett. a), b) e c) n. 1 e 3 (E11, E12).
  - Campi: tipologia, modalità di gestione (pubblica, privata, concessione, appalto, infanzia con progetto), ente che ha rilasciato il titolo, gestore, sede operativa, estremi del titolo, CF. L'Agenda contiene già il 2025/26 da Regioni ed enti.
  - Canale: Excel tramite le Direzioni regionali INPS per il 2026/27; PDND dal 2027/28.
  - I dati vanno anche alla Commissione tecnica fabbisogni standard.
  - **Non è prevista nessuna pubblicazione in open data.** La circolare ne parla solo come base istruttoria e per la mappa.
- **Mappa / "Servizi vicino a me":** online dal 18/11/2026 sul Portale della famiglia, con "strutture educative pubbliche e private" per regione e provincia. **Serve SPID L2, CIE o CNS** (E14, E15). Nessuna API pubblica trovata. Estrarre i dati in massa da un'area autenticata sarebbe inappropriato e probabilmente contrario ai termini d'uso.
- **Osservatori:** Focus genitorialità 2025 in PDF, solo per regione (E16). L'Osservatorio prestazioni famiglia è anch'esso aggregato. La sezione Osservatori del Portale è dietro SPID (messaggio 3179/2026). dati.inps.it non è raggiungibile. Gli unici open data INPS sui nidi trovati su dati.gov.it sono tabelle regionali del 2004-2011 (E17).
- **Tipologie:** solo 0-3 ammessi al bonus. **Esclusi:** centri bambini-genitori (secondo la stampa specializzata), scuola dell'infanzia (salvo le sezioni primavera) e strutture non autorizzate.
- **Dati personali:** nell'Agenda può comparire il CF di gestori persone fisiche (ditte individuali, nidi famiglia, Tagesmutter): è un dato personale.
- **Valore come base per l'elenco nominativo: ALTO in potenza, BASSO oggi per accessibilità.**
  - È la prima banca dati nazionale nominativa degli 0-3 abilitati, aggiornata ogni anno per obbligo di legge. È però chiusa.
  - Strade possibili: richiesta FOIA/accesso civico generalizzato all'INPS per l'elenco (CF, denominazione, indirizzo, tipologia, gestione, ente autorizzante), oppure un accordo istituzionale.
  - Si può monitorare la pubblicazione delle specifiche e-service PDND.

### 3. Openpolis / Con i Bambini – Osservatorio povertà educativa

- **Cosa ripubblica:** dati ISTAT (IstatData) rielaborati. "Elaborazione Openpolis – Con i bambini su dati Istat" (E18).
- **Dataset trovato:**
  - XLS su S3, `minidossier.openpolis.it/comuni/Canale pov edu/2023_asili_nido/<regione>.xls` più `totale_generale.xls`.
  - Il file "umbria.xls" contiene tutti i 7.901 comuni (E19).
  - Colonne: Comune, Provincia, Regione, Macroarea, Servizi attivi, Posti autorizzati, Posti per 100 bambini 0-2, Classificazione aree interne. Manca il codice ISTAT del comune.
  - Esempio: `Milano,Milano,Lombardia,Nord-ovest,454,14238,48.7,A - Polo`.
  - Altri articoli 2026 trattano spesa, mense e altri temi (fonti ISTAT e SOSE).
- **Livello:** comune. **Tipologie:** totale servizi 0-3 (secondo la stampa esclusi nidi aziendali e sezioni primavera, da verificare). Nessuna distinzione pubblico/privato nel file. **Niente scuola dell'infanzia.**
- **Licenza:** **CC BY-NC 4.0**, quindi **non utilizzabile commercialmente** senza permesso (E20). Nessun GitHub con dati. **Aggiornamento:** 3/2/2026 (a.e. 2023/24).
- **Problemi:** il file per regione non è filtrato. Il formato XLS ha intestazioni descrittive su 3 righe. Manca il codice comune. Sono dati derivati e meno aggiornati di IstatData (ISTAT ha già il 2024).
- **Valore come base per l'elenco: BASSO.** Usare direttamente ISTAT (CC BY) al posto di Openpolis (NC). Openpolis resta utile per la classificazione aree interne e la narrazione.

### 4. Dipartimento per le politiche della famiglia, Istituto degli Innocenti, Centri per la famiglia

- **DIPOFAM:** finanzia e co-progetta l'indagine ISTAT e le indagini campionarie con Ca' Foscari. Il nuovo accordo aggiunge servizi domiciliari, soddisfazione dei genitori e database delle normative regionali (E22). Non produce un elenco nominativo proprio.
- **Istituto degli Innocenti / Centro nazionale documentazione:** il monitoraggio del Piano nidi pubblicato su minori.gov.it risulta fermo al 2016 (E24, non verificato direttamente). L'accordo 2026 riguarda la banca dati dei progetti L. 285 (E23).
- **Mappa dei Centri per la famiglia:** è integrata nel Portale INPS della famiglia (dietro SPID). Riguarda i centri per la famiglia, **non** i servizi educativi.
- **Fondo nazionale sistema integrato 0-6:** è di competenza MIM, con riparto alle Regioni e programmazione regionale verso i Comuni. Non verificato in questa sessione.
- **Valore come base per l'elenco: BASSO.** Utile per la normativa regionale (database delle schede normative) e i contatti istituzionali.

### 5. Altri

**OpenCivitas (Sogei/SOSE, MEF)**
- Il dataset "Comuni – Sociale e asili nido – Indicatori e determinanti" (annualità 2023, pubblicato il 01/10/2026) è un CSV senza login (E25).
- Contenuto: utenti per tipologia (lattanti, part-time, refezione, voucher, gestione esterna), copertura nidi su 0-2, spesa storica e standard dei nidi, per **6.587 comuni delle RSO**. Mancano le Regioni a statuto speciale.
- Chiave: codice USERNAME dell'ente, con un file anagrafico "Metadati_Enti" separato.
- Ci sono anche il dataset "Fondo di solidarietà comunale 2026 – componenti" e lo storico SOCNID dal 2017.
- Licenza non esplicita (E26).
- **Valore: basso** per l'elenco nominativo, **medio** per arricchimento (domanda e spesa comunale, obiettivi LEP 33%).

**Ministero dell'Interno / DAIT (FSC obiettivi nidi):** il PDF dell'allegato al decreto 18/01/2024 indicato dai risultati di ricerca restituisce 404. I dati per comune sono replicati in OpenCivitas. **Valore: basso.**

**dati.gov.it:** 304 dataset unici pertinenti (E27).
- Composizione: 147 regionali, 149 locali e un pugno di GeoDati-RNDT locali.
- **Nessun dataset nazionale nominativo** e nessun dataset MIM o ISTAT sui nidi harvestato. Gli unici "nazionali" sono INPS 2004-2011 aggregati.
- I dataset regionali (Toscana, Puglia, Marche, Emilia-Romagna, Lazio, Umbria, PA Trento, Lombardia) e comunali (Milano, Torino, Palermo, Unioni valdostane) sono il vero serbatoio di elenchi nominativi, da censire uno per uno.
- **Valore: alto come indice delle fonti locali**, nullo come fonte nazionale.

**Con i Bambini:** non pubblica dati propri sui nidi; usa Openpolis (vedi la scheda 3).

---

## Cosa resta aperto

1. **Elenco ISTAT delle unità di offerta:** va verificato se l'ISTAT concede l'estrazione nominativa (ID, denominazione, indirizzo, tipologia, titolarità, posti), via contact.istat.it, protocollo di ricerca o accesso civico. Il segreto statistico (d.lgs. 322/89) potrebbe applicarsi anche alle unità non persone fisiche: esito incerto.
2. **Agenda Asili Nido INPS:** da valutare una richiesta FOIA (accesso civico generalizzato) all'INPS, DC Inclusione e sostegno famiglia, per l'elenco delle strutture senza CF delle persone fisiche. Da monitorare se e quando l'INPS pubblicherà le specifiche PDND o un open data. Da verificare se la mappa del Portale espone un endpoint pubblico (non verificato, non va forzato).
3. **Corrispondenza dei periodi ISTAT:** confermare che TIME_PERIOD 2024 = a.e. 2024/25 tramite i metadati IstatData o il prossimo report (atteso inizio 2027).
4. **Openpolis:** verificare se il conteggio esclude aziendali e sezioni primavera, e se è possibile ottenere un permesso d'uso commerciale. In pratica basta usare ISTAT (CC BY).
5. **Fondo 0-6 MIM** (riparto regionale e liste comunali) e **anagrafe scuole dell'infanzia MIM**: da trattare in un rapporto dedicato al MIM.
6. **dati.gov.it:** censire uno per uno i 296 dataset regionali e locali, cioè freschezza, campi, licenza e copertura, e confrontarli con i conteggi ISTAT per comune.
7. **Rapporti Innocenti dopo il 2016** e banca dati normativa regionale DIPOFAM–Ca' Foscari: verificare se è pubblica.
8. **OpenCivitas:** licenza effettiva e mappatura USERNAME → codice ISTAT.

---

## Ricerche web fatte (7 su 25, modalità standard)

1. `INPS circolare 93 2026 bonus asilo nido banca dati strutture`
2. `Istat microdati nidi servizi integrativi prima infanzia unità di offerta elenco questionario`
3. `INPS osservatorio statistico bonus asilo nido dati per regione provincia 2025 focus genitorialità`
4. `openpolis posti asili nido per comune dati scaricabili licenza github`
5. `openpolis asili nido 2026 posti per 100 bambini comuni con i bambini`
6. `famiglia.governo.it monitoraggio servizi educativi prima infanzia Istituto degli Innocenti piano nidi banca dati 2026`
7. `opencivitas asili nido obiettivi di servizio utenti per comune dati open download fondo solidarietà comunale`

Le altre verifiche sono state fatte con curl diretto: API SDMX ISTAT, pagine e PDF INPS, WordPress REST di Openpolis, GitHub API, API CKAN di dati.gov.it, portale open data di OpenCivitas.
