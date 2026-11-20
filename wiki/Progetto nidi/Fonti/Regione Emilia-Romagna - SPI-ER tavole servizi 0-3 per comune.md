---
tipo: fonte
ente: "Regione Emilia-Romagna (Osservatorio infanzia e adolescenza, sistema informativo SPI-ER)"
livello: regionale
territorio: "Emilia-Romagna"
tipologie: [nido, micronido, sezione aggregata a scuola infanzia, servizi integrativi, servizi sperimentali]
gestione: [pubblico, privato convenzionato, privato]
campi: [distretto, comune, numero servizi pubblici, posti pubblici, bambini pubblici, numero servizi privati, posti privati, bambini privati, popolazione 0-3]
formato: "XLSX aggregato per comune (nessun elenco per struttura); report PDF"
aggiornamento: "annuale; ultime tavole xlsx = a.e. 2022-2023; pagina aggiornata 13-01-2026 (rapporto 2024-2025 solo PDF)"
licenza: "nessuna indicata sulla pagina"
dati_personali: "no"
url: "https://sociale.regione.emilia-romagna.it/infanzia-adolescenza/osservatorio-infanzia-e-adolescenza/il-sistema-informativo-dei-servizi-prima-infanzia-della-regione-emilia-romagna-spi-er/i-dati-e-le-statistiche"
verificato_il: "2026-11-20"
affidabilita: "alta per i conteggi (anagrafe regionale alimentata da comuni e gestori), ma inutile come elenco: solo aggregati"
tags: [fonte, nidi, emilia-romagna]
---
# Regione Emilia-Romagna - SPI-ER tavole servizi 0-3 per comune

## Cosa copre
- SPI-ER è l'applicativo regionale che **gestisce l'anagrafe dei servizi 0-3 e degli enti titolari e gestori** e raccoglie ogni anno i dati dai gestori, pubblici e privati (convenzionati e non) [fatto] (pagina SPI-ER, letta 2026-11-20).
- Base: L.R. 19/2016 art. 14 e DGR 1564/2017, Allegato A punto IV [fatto].
- I comuni inseriscono anche domande presentate e liste d'attesa per i servizi pubblici e privati convenzionati [fatto] — ma questi dati non sono pubblicati per struttura.

## Cosa NON copre (pubblicamente)
- **Nessun elenco per struttura** scaricabile: l'anagrafe non è pubblica [fatto: pagina e allegati controllati]. Si pubblicano solo tavole per comune e report PDF.
- Il portale open data regionale `dati.emilia-romagna.it` non era raggiungibile dal nostro ambiente (connessione chiusa dal proxy, poi HTTP 503 via WebFetch) → **non verificato** se esista lì un dataset SPI-ER.

## Accesso
- XLSX "Tavole dati Rapporto informativo 0-3 anni 2022-2023": `.../documenti-allegati-i-dati-e-le-statistiche/2-tavolexsitocomuni-0-3.xlsx/@@download/file` (88,5 KB).
- Un foglio per provincia (9 fogli: Piacenza, Parma, Reggio Emilia, Modena, Bologna, Ferrara, Ravenna, Forlì Cesena, Rimini).

## Conteggi verificati (a.e. 2022-2023) [fatto]
| | Servizi | Posti |
|---|---|---|
| Titolarità pubblica | 661 | 28.563 |
| Titolarità privata | 546 | 12.117 |
| **Totale** | **1.207** | **40.680** |

330 comuni (tutti quelli della regione). Capoluoghi (servizi pubblici / privati): Bologna 69/57, Modena 35/23, Parma 30/41, Reggio Emilia 25/18, Ferrara 21/16, Ravenna 20/22, Forlì 12/30, Cesena 11/12, Rimini 15/18, Piacenza 9/19.

## Esempio di record
`Distretto di CARPI | CARPI | pubblici 6 servizi, 344 posti, 290 bambini | privati 12 servizi, 351 posti, 332 bambini | pop. 0-3: 1630`

## Problemi noti
- La colonna "Numero servizi" non distingue nido / integrativo / sperimentale.
- Ultimo xlsx = 2022-23; per 2023-24 e 2024-25 solo PDF.
- Utile come **denominatore** per misurare la copertura di altre fonti (es. Bologna: 126 servizi SPI-ER contro 88 nidi nell'open data comunale).

## Fonti
- https://sociale.regione.emilia-romagna.it/infanzia-adolescenza/osservatorio-infanzia-e-adolescenza/il-sistema-informativo-dei-servizi-prima-infanzia-della-regione-emilia-romagna-spi-er (2026-11-20)
- https://sociale.regione.emilia-romagna.it/novita/prodotti-editoriali/2025/lofferta-educativa-0-6-anni-in-emilia-romagna-primo-rapporto-informativo (pubblicato 13/01/2026; letto 2026-11-20)
