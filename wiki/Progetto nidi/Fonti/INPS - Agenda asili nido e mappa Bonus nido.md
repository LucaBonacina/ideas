---
tipo: fonte
ente: "INPS"
livello: nazionale
territorio: "Italia"
tipologie: [nido, micronido, sezione primavera, spazio gioco, servizio domiciliare]
gestione: [pubblico, privato, concessione, appalto]
campi: [codice fiscale, denominazione, gestore, sede operativa, tipologia, modalità di gestione, ente che ha rilasciato il titolo, estremi del titolo abilitativo]
formato: "banca dati interna (Excel nel 2026/27, PDND dal 2027/28); mappa consultabile solo dopo login SPID, CIE o CNS; osservatori statistici in PDF"
aggiornamento: "annuale per legge: prima comunicazione dei Comuni entro l'1/9/2026, poi aggiornamenti entro l'1/9 di ogni anno; mappa 'Servizi vicino a me' attiva dal 18/11/2026"
licenza: "nessun open data; termini del Portale INPS"
dati_personali: "sì: codice fiscale dei gestori, che per ditte individuali e nidi famiglia è di una persona fisica"
url: "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.11.servizi-vicino-a-me-la-mappa-per-le-famiglie.html"
verificato_il: 2026-11-20
affidabilita: "alta in potenza (obbligo di legge, tutti i servizi abilitati); oggi non accessibile come dato, qualità del primo anno da verificare"
tags: [fonte, nazionale, inps, nido, bonus-nido]
---
# INPS - Agenda asili nido e mappa Bonus nido

> Dal 2026 l'INPS tiene la prima **banca dati nazionale nominativa** dei servizi 0-3 abilitati, pubblici e privati, alimentata **per legge** dai Comuni. Le famiglie la vedono come mappa nel Portale della famiglia, ma **solo con SPID**. Non è aperta.

## Base giuridica e contenuto
- L. 232/2016, art. 1 c. 355-bis: dal 1/7/2026 "gli enti locali comunicano all'INPS il codice fiscale e gli altri elementi identificativi delle strutture pubbliche e private in possesso del titolo abilitativo" dei servizi dell'art. 2 c. 3 D.Lgs. 65/2017. Prima comunicazione entro l'1/9/2026, poi aggiornamenti annuali entro l'1/9. I dati vanno anche alla Commissione tecnica per i fabbisogni standard [fatto, testo letto su Normattiva dal coordinatore].
- Circolare INPS 93 del 9/9/2026 [fatto, letta dal subagente su una copia PDF; la pagina INPS carica il testo via JavaScript]:
  - nome: "Agenda Asili Nido";
  - tipologie: nido, micronido, sezione primavera, spazio gioco, servizio domiciliare; **esclusi i centri per bambini e famiglie**;
  - campi: tipologia, modalità di gestione (pubblica, privata, concessione, appalto, scuola dell'infanzia con progetto), ente che ha rilasciato il titolo, gestore, sede operativa, titolo abilitativo, codice fiscale;
  - canale: Excel alle Direzioni regionali INPS nel 2026/27, poi PDND dal 2027/28 per ogni inserimento o aggiornamento (nuove autorizzazioni, accreditamenti, sospensioni, revoche);
  - l'Agenda contiene già dati del 2025/26 forniti da Regioni ed enti.
- Notizia INPS dell'11/9/2026: la mappa riguarda le "strutture convenzionate per il Bonus nido"; nel frattempo "gli utenti devono far riferimento agli elenchi comunali" [fatto].

## Accesso (verificato)
- Notizia INPS del 18/11/2026 "Servizi vicino a me": tra le categorie c'è "educazione e prima infanzia: strutture educative pubbliche e strutture educative private". L'accesso richiede "SPID… di livello 2 o superiore; CIE… di livello 3; CNS; eIDAS" [fatto, letto dal coordinatore con curl].
- `https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/` reindirizza alla pagina di login SPID [fatto, subagente e sessione S11].
- Nessuna API pubblica né open data trovati. `dati.inps.it` non è raggiungibile da questo ambiente. Su dati.gov.it gli unici dataset INPS sui nidi sono tabelle regionali del 2004-2011 [fatto].
- Estrarre in massa da un'area autenticata non è appropriato.

## Osservatori statistici
Il Focus genitorialità 2025 (PDF, luglio 2026) riporta 530.197 bambini beneficiari del Bonus nido nel 2025, il 62,6% in nidi privati, con dettaglio solo per regione [fatto]. Serve per il dimensionamento del mercato, non per l'elenco.

## Cosa NON copre
- Centri per bambini e famiglie.
- Scuole dell'infanzia (salvo sezioni primavera).
- Servizi non abilitati e baby parking.
- Rette, posti liberi, orari.
- La completezza del primo anno dipende da quanti Comuni hanno inviato il file: **non trovato** un dato sui Comuni adempienti.

## Valore come base per l'elenco completo
**Alto in potenza, basso oggi.** È l'unico elenco nazionale nominativo dello 0-3 con obbligo di legge, ma è chiuso. Due strade:
1. una richiesta di **accesso civico generalizzato (FOIA)** all'INPS per l'elenco senza codici fiscali di persone fisiche (denominazione, indirizzo, tipologia, gestione, ente autorizzante);
2. il monitoraggio dell'e-service PDND dal 2027/28, che è rivolto agli enti e non ai privati.

## Fonti (accesso 2026-11-20)
- https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.11.servizi-vicino-a-me-la-mappa-per-le-famiglie.html (curl, coordinatore)
- https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html
- Circolare 93/2026: https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.09.circolare-numero-93-del-09-09-2026_15363.html (testo da https://www.fiscoetasse.com/files/22412/circolare-n-93-del-09-09-2026.pdf)
- Focus genitorialità 2025: https://www.inps.it/content/dam/inps-site/pdf/dati-analisi-bilanci/osservatori-statistici/Focus_genitorialit%C3%A0_2025.pdf
- Dettagli: [[Fonti ISTAT INPS Openpolis famiglia - subagente]] (E11-E17), [[Normativa nazionale 0-6]]
