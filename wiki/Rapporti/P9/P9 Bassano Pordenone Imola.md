---
tipo: rapporto
sessione: P9
comuni: [Bassano del Grappa, Pordenone, Imola]
data: 2026-11-20
tags: [rapporto, test-completezza, nidi]
---
# P9: Bassano del Grappa, Pordenone, Imola (rapporto di lavoro)

## Cosa ho fatto
- Ho letto il brief, il Metodo, le istruzioni delle sessioni e del blocco 2, la nota di esempio [[Legnano]]. Poi le note regione [[Veneto]], [[Friuli-Venezia Giulia]] e [[Emilia-Romagna]] e le note fonte collegate: DDR Veneto, Nidi in Famiglia, registro FVG, SPI-ER e USR non paritarie.
- Ho usato i pacchetti del coordinatore (ISTAT, MIM, DDR 58/2024, registro FVG) senza riscaricarli.
- **Bassano:** cercato il DDR dei contributi 2025 (non trovato). Trovato con l'API WordPress dell'USR Veneto l'**elenco delle sezioni primavera autorizzate 2025/26**, equivalente al decreto USR Lombardia, e l'albo delle non paritarie 2025/26. Letti i PDF comunali dei nidi; il portale MyPortal non è leggibile con curl né con WebFetch. Letto il sito Graziani, con le rette.
- **Pordenone:** letto il sito comunale tramite l'API Plone (`/api/...`). Ci sono l'elenco dei nidi privati accreditati, le tariffe, le scadenze e una cartella con le rette 2026/27 di ogni servizio accreditato. Trovato il **decreto regionale 63588/2026 sulle sezioni primavera 2026/27**.
- **Imola:** scaricata la tavola SPI-ER (26 servizi nel 2022/23). Letti il bando nidi 2026/27, il bando infanzia 2026/27 e, tramite l'API del sottosito temi, la pagina **"Nidi e PGE privati"** (05/11/2026) con 3 privati non convenzionati.
- Ho scritto 3 note in `wiki/Progetto nidi/Test di completezza/` (Bassano del Grappa, Pordenone, Imola). Nessun commit, nessuna nota esistente modificata.

## Evidenze decisive
| Affermazione | Tipo | URL | Data | Letta direttamente |
|---|---|---|---|---|
| USR Veneto: 4 sezioni primavera autorizzate 2025/26 a Bassano (Graziani 10 bambini, Maria Immacolata 17, Beato Lorenzino 5, Gaetana Sterni 16) | [fatto] | https://istruzioneveneto.gov.it/wp-content/uploads/2025/11/02-All.Elenco2-Sezioni-Primavera-autorizzate-25-26.pdf | 2026-11-20 | sì (pdftotext) |
| L'albo USR Veneto delle non paritarie 2025/26 non ha scuole a Bassano | [fatto] | https://istruzioneveneto.gov.it/wp-content/uploads/2025/11/Elenco-ALBO_2025-2026_ep.pdf | 2026-11-20 | sì |
| La pagina regionale veneta dei servizi 0-3 elenca i decreti fino al DDR 87 del 26/08/2024: nessun DDR 2025 | [fatto] | https://www.regione.veneto.it/web/sociale/servizi-educativi-0-3-anni | 2026-11-20 | sì |
| Bassano: nido Rondò Brenta 12 posti 12-36 mesi; nido via Rivana 72 posti, 7:30-18:15; gestione affidata a cooperative | [fatto] | https://www.comune.bassano.vi.it/myportal/C_A703/api/download/rondobrenta_schedaservizi ; .../nidorivana_schedaservizio | 2026-11-20 | sì |
| Asilo nido Graziani: rette 2027/28, 3 rate da 2.145 € (tempo pieno), iscrizione 250 € | [fatto] | https://www.ilgraziani.it/s/RETTE-NIDO-27-28.pdf | 2026-11-20 | sì |
| Pordenone: 9 nidi privati accreditati, compreso il domiciliare Piccolo Principe e il nido aziendale (aggiornato al 24/08/2026) | [fatto] | https://www.comune.pordenone.it/it/servizi/educazione-e-formazione/iscrizione-nidi-di-infanzia/elenco-servizi-accreditati-a-set-26.pdf/@@download/file | 2026-11-20 | sì |
| Regione FVG, decreto 63588/2026: sezioni primavera "Sacro Cuore" e "San Giorgio" di Pordenone ammesse per il 2026/27 | [fatto] | https://www.regione.fvg.it/rafvg/export/sites/default/RAFVG/famiglia-casa/politiche-famiglia/FOGLIA40/allegati/20261117_Decr_riparto_Sezioni_Primavera_2026_2027_allegato.pdf | 2026-11-20 | sì |
| Pordenone: tariffe nidi comunali 2026/27 da 61,18 a 548,22 €/mese; iscrizioni 2-27/02/2026 e 1/09-30/11/2026 | [fatto] | https://www.comune.pordenone.it/it/servizi/educazione-e-formazione/iscrizione-nidi-di-infanzia | 2026-11-20 | sì (dati della pagina) |
| "Carl e Ellie" (domiciliare, Villanova) è nell'elenco comunale 2026/27 dei servizi accreditati, ma non nel registro FVG di novembre 2026 | [fatto] i dati; [stima] la chiusura | https://www.comune.pordenone.it/it/argomenti/infanzia/strutture-per-linfanzia/strutture-per-la-prima-infanzia-accreditate-per-abbattimento-rette | 2026-11-20 | sì |
| SPI-ER 2022/23, Imola: 7 servizi pubblici (399 posti), 19 privati (389 posti), 26 in totale | [fatto] | https://sociale.regione.emilia-romagna.it/.../2-tavolexsitocomuni-0-3.xlsx/@@download/file | 2026-11-20 | sì (openpyxl) |
| Imola: bando nidi 2026/27 con 7 nidi comunali + 1 piccolo gruppo comunale, 12 nidi e 3 piccoli gruppi convenzionati | [fatto] | https://www.comune.imola.bo.it/servizi/educazione-e-formazione/iscrizione-nidi-di-infanzia/allegati/bando-nido-2026_2027.pdf | 2026-11-20 | sì |
| Imola: pagina "Nidi e PGE privati" (05/11/2026) con Nido delle Coccole, Lo Scarabocchio, La fattoria degli gnomi | [fatto] | https://temi.comune.imola.bo.it/scuola-formazione/servizi-educativi-0-6/nidi-infanzia/nidi-privati | 2026-11-20 | sì (API) |
| Imola: centro bambini e famiglie "Cappuccetto Verde" inaugurato il 31/01/2026 | [fatto] | https://www.comune.imola.bo.it/novita/notizie/2026/01/inaugurazione-cappuccetto-verde | 2026-11-20 | sì |

## Risultati in sintesi
| Comune | ISTAT 2024 | Elenco vero 0-3 | Migliore fonte 0-3 | Solo web | Elenco vero 3-6 |
|---|---|---|---|---|---|
| Bassano del Grappa | 11 | 11 | R (DDR) 7/11 = 64%; R + USR 11/11 | 0 (2 dubbie) | 15 (MIM 15/15) |
| Pordenone | 15 | 14 | R 12/14 = 86% e C 12/14 = 86%; R + decreto 14/14 | 0 | 13 (MIM e C 13/13) |
| Imola | 26 | 28 | C 28/28 = 100% (nessun elenco regionale) | 0 | 22 (MIM e C 22/22) |

## Cosa non ho trovato
- DDR Veneto dei contributi 2025 ai servizi accreditati (pagina regionale e 2 ricerche).
- Bassano: nessun elenco dei privati autorizzati non accreditati; "La Coccinella" e "Spaziobimbi" sono solo in un estratto di un elenco commerciale (pagina HTTP 523).
- Pordenone: il centro bambini-genitori pubblico dichiarato dall'ISTAT; l'elenco USR FVG delle non paritarie (la pagina ha le paritarie).
- Imola: l'elenco USR Emilia-Romagna delle non paritarie non è stato cercato; Nuovo Circondario Imolese e ASP non controllati (servizio nidi comunale).
- INPS: non verificabile (SPID).

## Strumenti e permessi
- Nessuno strumento bloccato dai permessi. Il portale MyPortal di Bassano restituisce solo lo scheletro della pagina (JavaScript) sia con curl sia con WebFetch. Alcuni siti di gestori non rispondono: lescuolegraziani.it (connessione chiusa, poi letto il nuovo dominio ilgraziani.it), vendraminibassano.it (DNS), infanziasanvito.it, maternasacrocuore.com, itaca.coopsoc.it. Il PDF TED è servito come pagina vuota; letti i metadati con l'API TED.

## Conteggio
- **WebSearch: 16** (su 25).
- Letture dirette: circa 60 richieste curl (pagine, API Plone/WordPress/TED, PDF, XLSX) e 3 WebFetch.
- File scaricati in `/tmp/claude-0/-home-user-ideas/65ad3d1e-7b96-5706-bfd9-a1766591df7e/scratchpad/sub/bpi/`.
