---
tipo: fonte
ente: "ISTAT – Indagine sui nidi e i servizi integrativi per la prima infanzia (IST-02647), con Regioni compartecipanti e RGS"
livello: "nazionale"
territorio: "Italia (dettaglio regionale e provinciale per Trento e Bolzano)"
tipologie: [nido, micronido, nido aziendale, sezione primavera, servizi integrativi, servizi in contesto domiciliare, spazio gioco, centro bambini-genitori]
gestione: [pubblico, privato convenzionato, privato]
campi: [numero servizi attivi, posti autorizzati, posti per 100 bambini 0-2, titolarità pubblica/privata, tipologia, utenti e spesa comunale]
formato: "XLSX (tavole) + PDF (report)"
aggiornamento: "annuale; ultima uscita 02/02/2026, dati al 31/12/2023 (a.e. 2023/24)"
licenza: "CC-BY 4.0 (licenza generale dei dati ISTAT; non indicata nel file)"
dati_personali: "no"
url: "https://www.istat.it/wp-content/uploads/2026/02/tavole_nidi_2023.xlsx"
verificato_il: "2026-11-20"
affidabilita: "alta per il totale (censimento delle unità di offerta tramite i Comuni); media per le sottotipologie, che dipendono da come i Comuni classificano i servizi; nessun elenco nominativo"
tags: [fonte, nidi, nidi-aziendali, domiciliari, sezioni-primavera, nazionale, statistica]
---
# ISTAT – Tavole "Offerta di nidi e servizi integrativi" per tipologia

**Cosa copre.** Conteggio di servizi e posti per regione e titolarità, separando **nidi aziendali** (Tav. 1.7 segue a1), **sezioni primavera** (1.7 segue b), **servizi in contesto domiciliare** (1.8 b), spazi gioco (1.8 a) e centri bambini-genitori (1.8 c). **Non contiene** un elenco dei servizi: i microdati con gli indirizzi non sono pubblici. Non copre le scuole dell'infanzia.

**Numeri chiave al 31/12/2023** [fatto]:
- Totale: 14.570 servizi, circa 378.500 posti.
- Nidi, micronidi e nidi aziendali: 9.651 servizi, 303.464 posti.
- **Nidi aziendali: 200 servizi, 6.444 posti** (30 pubblici, 170 privati). Lazio 40, Lombardia 29, Emilia-Romagna 24, Bolzano 20, Veneto 21; Marche, Abruzzo, Molise e Sicilia 0.
- **Domiciliari: 1.046 servizi, 5.883 posti** (16 pubblici). Bolzano 243, Lombardia 182, Veneto 133, Emilia-Romagna 116, Piemonte 89, Trento 80; Molise, Calabria e Sicilia 0.
- **Sezioni primavera: 2.979, 50.769 posti** (478 pubbliche).

**Come si accede.** Il link all'XLSX si trova nel comunicato stampa: https://www.istat.it/comunicato-stampa/offerta-di-nidi-e-servizi-integrativi-per-la-prima-infanzia-anno-educativo-2023-2024/

**Esempio di record.** `Lazio | nidi aziendali | pubblici 0 | privati 40 | totale 40 | posti 1.173 | 1,0 posti per 100 bambini`

**Problemi noti.**
- In Lombardia l'elenco regionale dei nidi famiglia (novembre 2026) ha circa 284 righe contro i 182 domiciliari ISTAT del 2023: possibile sottoconteggio dei servizi che richiedono solo una comunicazione al Comune [stima].
- Nidi aziendali aperti al territorio: classificazione incerta.
- I dati arrivano con 2 anni di ritardo.

**Fonti.** XLSX letto con openpyxl il 2026-11-20. Report: https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf (glossario: nido aziendale = figli dei dipendenti di un'azienda o di più aziende; servizi integrativi = domiciliari "Tagesmutter o Nidi famiglia", spazi gioco, centri bambini-genitori; criteri di priorità nei regolamenti comunali: disabilità nell'89,5%).
