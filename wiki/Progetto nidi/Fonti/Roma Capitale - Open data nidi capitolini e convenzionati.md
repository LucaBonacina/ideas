---
tipo: fonte
ente: "Roma Capitale"
livello: comunale
territorio: "Roma Capitale"
tipologie: [nido, spazio be.bi, nido aziendale, infanzia comunale, sezione ponte]
gestione: [pubblico, privato convenzionato]
campi: [municipio, codice scuola, tipo scuola, natura giuridica, tipologia, nome, indirizzo, telefono, orario entrata/uscita, corsi attivi, capienza totale, iscritti, iscritti per sesso, piccoli, medi, grandi, iscritti italiani e non italiani]
formato: "open data (CSV, separatore punto e virgola, codifica ISO-8859-1)"
aggiornamento: "un dataset per anno educativo dal 2009/10; ultimo 2022/23, pubblicato 2023-02-21"
licenza: "CC-BY (Creative Commons Attribution)"
dati_personali: "no"
url: "https://dati.comune.roma.it/catalog/dataset/d158"
verificato_il: 2026-11-20
affidabilita: "media: campi ricchi (capienza, iscritti) ma fermo da tre anni educativi"
tags: [fonte, lazio, roma, open-data, elenco-servizi]
---
# Roma Capitale - Open data nidi capitolini e convenzionati

**Cosa copre [fatto]:** CSV 2022/23 con **403 nidi**: 217 comunali "Capitolina", 7 comunali "In appalto", 152 privati in convenzione, 17 privati aziendali, 4 privati "Progetto finanziato", 6 "Spazio Be.Bi" privati convenzionati. Serie storica dal 2009/10 (12 dataset "Nidi capitolini e convenzionati"). Dataset collegati: "Scuole d'infanzia comunali" 2022/23 (317 scuole, CSV) e "Scuole d'infanzia comunali con servizio ponte".

**Esempio di record:** `1;3112;NIDO;COMUNALE;Capitolina;BRONTOLO;VIA ANTONIO GENOVESI 24;/;08:00 / 16:30;3;69;64;...`

**Cosa non copre:** privati non convenzionati; anni dopo il 2022/23; rette.

**Come si accede:** catalogo CKAN https://dati.comune.roma.it/catalog (API `package_search?q=nidi`). CSV 2022/23: https://dati.comune.roma.it/catalog/dataset/b5ec3077-f30a-4c98-9330-68c92595fd03/resource/844f44e3-9e13-453a-b6c6-e7799363de47/download/opendata_2022_23_nido.csv

**Problemi noti:** codifica Latin-1; nessun dataset 2023/24-2026/27 (ricerca del 2026-11-20). Il codice scuola sembra coincidere con il codice dell'elenco iscrizioni (da verificare).

## Fonti
- https://dati.comune.roma.it/catalog/api/3/action/package_search?q=nidi (accesso 2026-11-20)
- https://dati.comune.roma.it/catalog/api/3/action/package_show?id=d158 (2026-11-20)
