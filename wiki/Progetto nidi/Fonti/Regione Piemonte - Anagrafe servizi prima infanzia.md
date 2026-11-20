---
tipo: fonte
ente: "Regione Piemonte, Settore istruzione"
livello: "regionale"
territorio: "Piemonte"
tipologie: [nido, micronido, nido aziendale, sezione primavera, servizi integrativi, nido in famiglia]
gestione: [pubblico, privato]
campi: [provincia, comune, codice ISTAT, tipologia, comunale/pubblico/privato, denominazione, indirizzo, CAP, capacità ricettiva, codice geolocalizzazione RCERP, codice PES, atto di autorizzazione, titolare autorizzazione]
formato: "PDF (tabella di 62 pagine); riepilogo nella pagina web"
aggiornamento: "annuale; dati al 31/12/2025, PDF creato il 2026-03-31"
licenza: "nessuna indicata"
dati_personali: "possibili: il campo titolare autorizzazione può contenere nomi di persone fisiche (nidi in famiglia, ditte individuali)"
url: "https://www.regione.piemonte.it/web/media/24892/download"
verificato_il: "2026-11-20"
affidabilita: "media: elenco ufficiale ma dichiarato 'a soli fini conoscitivi e statistici', non esaustivo, solo PDF"
tags: [fonte, piemonte, registro]
---
# Regione Piemonte - Anagrafe servizi prima infanzia

Elenco annuale dei servizi 0-3 rilevati dalla Regione, pubblicato come allegato PDF "Servizi prima infanzia al 31 dicembre 2025" nella pagina "Sistema dei servizi educativi per l'infanzia 0-3 anni". [fatto]

## Cosa copre (riepilogo della pagina regionale, dati al 31/12/2025)
1.149 servizi pubblici e privati in 405 comuni, 29.100 posti massimi. [fatto]

| Tipologia | Comunale | Pubblico | Privato |
|---|---|---|---|
| Nido d'infanzia (ex asilo nido) | 210 | 4 | 96 |
| Micronido | 108 | 9 | 260 |
| Spazio gioco (ex baby parking / centro custodia oraria) | 15 | 3 | 169 |
| Nido in famiglia | | | 96 |
| Sezione primavera c/o nido o scuola infanzia | 22 | | 148 |
| Sezione primavera c/o scuola infanzia statale | | 9 (statale) | |

Per provincia: AL 90, AT 52, BI 47, CN 179, NO 101, TO 601, VB 28, VC 47. [fatto]

L'intestazione del PDF riporta 1.148 righe. Il mio parsing del testo ha riconosciuto 1.120 righe (alcune righe vanno a capo): COMUNALE 349, PRIVATO 754, PUBBLICO 17. [fatto, conteggio approssimato]

Righe per capoluogo (parsing approssimato): Torino 181, Novara 26, Asti 19, Vercelli 19, Cuneo 17, Alessandria 14, Biella 14, Verbania non riconosciuta dal parsing. [fatto, approssimato]

## Cosa non copre
- La Regione scrive che l'elenco "ha soli fini conoscitivi e di indagine statistica" e "in nessun modo può essere considerato esaustivo". [fatto]
- Centri per bambini e famiglie: tipologia prevista dalla L.R. 30/2023 ma non presente nel riepilogo. [fatto]
- Scuole dell'infanzia (3-6): no. Rette, orari, posti liberi: no.
- Esiste un **Sistema informativo regionale 0-6** con accesso RUPAR (riservato agli enti) [da estratto di ricerca, non verificato direttamente].

## Come si accede
- Pagina: https://www.regione.piemonte.it/web/temi/istruzione-formazione-lavoro/istruzione/0-6-anni-servizi-contributi/sistema-dei-servizi-educativi-per-linfanzia-03-anni
- PDF: https://www.regione.piemonte.it/web/media/24892/download (download instabile: una connessione su due interrotta)
- Istruzioni per trovare le strutture sul Geoportale regionale: https://www.regione.piemonte.it/web/media/36426/download (non aperto)
- Nessun dataset su dati.gov.it per "nidi" pubblicato dalla Regione Piemonte. [fatto]

## Esempio di record
`AL | ACQUI TERME | 006001 | SPAZIO GIOCO -EX BABY PARKING - C.C.O.- | COMUNALE | GIROTONDO | PIAZZA DON DOLERMO | 15011 | 25 posti | Z0060011002 | AL1N001002 | D.D. 375 del 22.4.2005 | COMUNE DI ACQUI TERME`

## Problemi noti
- Formato PDF con righe spezzate: l'estrazione richiede pulizia manuale.
- Campo autorizzazione in testo libero (a volte "richiesta inoltrata ...").
- Aggiornamento solo annuale.

## Fonti
- https://www.regione.piemonte.it/web/temi/istruzione-formazione-lavoro/istruzione/0-6-anni-servizi-contributi/sistema-dei-servizi-educativi-per-linfanzia-03-anni (accesso 2026-11-20)
- https://www.regione.piemonte.it/web/media/24892/download (accesso 2026-11-20)
