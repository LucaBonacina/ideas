---
tipo: rapporto
tags: [nidi, rapporto, P2]
data: 2026-11-20
---
# P2 - Nord-Est (Trento, Bolzano, Veneto, FVG, Emilia-Romagna)

## Cosa è stato fatto
- Note regione: [[Emilia-Romagna]], [[Veneto]], [[Friuli-Venezia Giulia]], [[Provincia autonoma di Trento]], [[Provincia autonoma di Bolzano]].
- Note fonte (13): [[Regione Emilia-Romagna - SPI-ER tavole servizi 0-3 per comune]], [[Regione Emilia-Romagna - Misure riduzione rette nidi FSE]], [[Comune di Bologna - Elenco delle scuole open data]], [[Comune di Ferrara - Nidi e spazi bambini open data]], [[Comune di Reggio Emilia - Nidi d infanzia open data]], [[Regione Veneto - Servizi prima infanzia finanziati DDR]], [[Regione Veneto - Elenco Nidi in Famiglia]], [[Regione FVG - Registro servizi prima infanzia attivi]], [[Regione FVG - Abbattimento rette servizi prima infanzia]], [[Provincia autonoma di Trento - Elenco nidi d infanzia]], [[Provincia autonoma di Trento - Elenco nidi familiari Tagesmutter]], [[Provincia autonoma di Trento - Bonus nidi d infanzia]], [[ASSB Bolzano - Asili nido e microstrutture]].
- File scaricati e analizzati in scratchpad `Nord-Est/dl` (non nel repo).

## Conteggi grezzi
| Fonte | Record | Data dato |
|---|---|---|
| ER SPI-ER xlsx 0-3 | 1.207 servizi (661 pub / 546 priv), 40.680 posti, 330 comuni | a.e. 2022-23 |
| Bologna `elenco-delle-scuole` | 359 record, di cui 88 nidi | mod. 2026-10-31 |
| Ferrara WFS nidi | 37 | dato 2021 |
| Reggio Emilia WFS nidi | 25 | 2022 |
| Veneto DDR 58/2024 all. C + D | 544 + 258 = 802 | 2024 |
| Veneto Nidi in Famiglia | 213 | 04-04-2025 |
| FVG registro xlsx | 341 servizi, 9.036 posti, 128 comuni | 06-11-2026 |
| Trento nidi PDF | 107 nidi, 4.119 posti | 1-9-2025 |
| Trento Tagesmutter PDF | 76 nidi familiari, 439 posti | 1-9-2026 |
| Bolzano ASSB | 10 nidi + 12 microstrutture | n.d. |

## Ricerche web usate (11 su 25)
1. Emilia-Romagna elenco servizi educativi prima infanzia autorizzati open data anagrafe regionale
2. Regione Veneto elenco servizi prima infanzia autorizzati accreditati nidi micronidi download
3. Friuli Venezia Giulia elenco regionale servizi educativi prima infanzia accreditati abbattimento rette nidi
4. Provincia autonoma di Trento elenco servizi prima infanzia nidi Tagesmutter albo L.P. 4/2002
5. Provincia Bolzano registro servizi prima infanzia microstrutture Kita Tagesmütter elenco
6. famiglia.provincia.bz.it microstrutture elenco enti gestori Tagesmutter accreditati
7. ASTAT Bolzano servizi prima infanzia posti 2025
8. Comune di Bolzano asili nido comunali elenco microstrutture tariffe ASSB
9. Comune di Venezia nidi comunali e privati accreditati elenco iscrizioni 2026/2027
10. comune.bologna.it iscrizione nidi 2026-2027 posti convenzionati tariffe ISEE
11. Comune di Trieste nidi comunali e convenzionati iscrizioni 2026/2027
(+ WebFetch su API Opendatasoft di Bologna, non ricerche)

## Cosa non è stato possibile verificare
- `dati.emilia-romagna.it` e `opendata.comune.bologna.it` via curl: connessione chiusa dal proxy (ws_closed_mid_exchange); WebFetch sul portale regionale ER: HTTP 503. Bologna verificata via WebFetch.
- Portale famiglia Provincia di Bolzano: app JavaScript; l'API di ricerca non è stata interrogata (azione negata dal sistema di permessi). PDF ASTAT: 404.
- Venezia: pagine nidi renderizzate in JS; dati.venezia.it 403. Padova, Modena, Ravenna open data: non raggiungibili.
- Sito Comune di Trento: pagine tematiche 410.
- Normativa BZ e scuole dell'infanzia provinciali TN/BZ: solo da estratti, non letti.
- Capoluoghi minori (Parma, Piacenza, Forlì, Cesena, Padova, Vicenza, Treviso, Rovigo, Belluno, Udine, Gorizia): non controllati o solo tramite registri regionali.

## Dati personali
- Veneto Nidi in Famiglia: nomi di educatori e coordinatori. Veneto DDR all. C: codici fiscali di persone fisiche (ditte individuali). FVG registro: telefoni/email dei servizi domiciliari possibilmente personali. Nessuno di questi dati è stato copiato nelle note.
