---
tipo: rapporto
sessione: P10
regioni: [Puglia, Sardegna, Sicilia]
data: 2026-11-20
tags: [rapporto, nidi, P10, test-completezza]
---
# P10 Molfetta, Alghero, Bagheria (lavoro del coordinatore)

## Cosa ho fatto
- Scelta dei comuni campione: estratti i conteggi ISTAT 2024 (dataflow 47_850) per tutti i comuni delle 6 regioni e i conteggi MIM delle scuole dell'infanzia 2026/27; scelti un comune tra 15.000 e 100.000 abitanti, non capoluogo di regione, per regione: Battipaglia, Molfetta, Melfi, Rende, Bagheria, Alghero. Popolazione dal dataflow ISTAT 22_289.
- Molfetta: scaricati il registro regionale Puglia (CSV 2023) e l'export Excel del catalogo zerosei 2026/27; letti il sito e la carta dei servizi di un gestore e la carta dei servizi di un micronido (portale tirocini Uniba). Il sito del Comune è protetto da un sistema anti-bot: non letto e non aggirato.
- Alghero: letti avvisi del Comune (2018/19, 2024/25, Nidi gratis 2025, contributi ai privati, ludoteca), regolamento del nido, sito IC 2, elenco USR Sardegna non paritarie 2026/27.
- Bagheria: letti la notizia del bando 2026/27 (elenco strutture), l'avviso 2024/25 (rette, orari), la manifestazione di interesse ai privati, l'Allegato A D.D.G. 715/2026, due decreti dell'albo regionale, l'albo regionale delle non paritarie 2026/27.
- Affidato a un subagente il test su Battipaglia, Melfi e Rende (rapporto separato).

## Evidenze
| Affermazione | Tipo | URL | Accesso | Letta direttamente |
|---|---|---|---|---|
| ISTAT 2024: Molfetta 13, Alghero 9, Bagheria 14 servizi 0-3 | fatto | https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.072029....?startPeriod=2023 (e codici 090003, 082006) | 2026-11-20 | sì |
| Registro Puglia: 18 righe 0-3 a Molfetta (15 unità) | fatto | https://dati.puglia.it/ckan/dataset/bffa2d3d-c0b4-4fc9-a96c-7104a272ed38/resource/7aa651c7-b536-494e-861e-2adbcf798223/download/registri2023od.csv | 2026-11-20 | sì |
| Catalogo zerosei 2026/27: 15 unità a Molfetta, 565 righe totali | fatto | https://www.studioinpuglia.regione.puglia.it/bs/udo_tevlist.php?export=excel | 2026-11-20 | sì |
| Sito del Comune di Molfetta: HTTP 403 con challenge anti-bot | fatto | https://www.comune.molfetta.ba.it/ | 2026-11-20 | sì |
| Alghero: nido comunale con 2 sedi (69 + 20 posti), scadenza 3/6/2024 | fatto | https://comune.alghero.ss.it/.galleries/doc-documenti/AVVISO-iscrizioni-servizi-educativi-prima-infanzia-2024-2025.pdf | 2026-11-20 | sì |
| Alghero: 5 privati convenzionati nel 2018/19 (3 sezioni primavera in paritarie, 1 nido, 1 micronido) | fatto | https://comune.alghero.ss.it/it/novita/notizia/Nido-dInfanzia-e-Mamma-Accogliente-2018-19/ | 2026-11-20 | sì |
| Sardegna: una sola scuola dell'infanzia non paritaria nel 2026/27 (Olbia) | fatto | https://www.mim.gov.it/web/usr-sardegna/-/avviso-pubblico-elenco-scuole-non-paritarie-della-regione-sardegna-a-s-2026-2027 | 2026-11-20 | sì |
| Bagheria: bando 2026/27 con 2 nidi comunali, 4 nidi privati, 2 spazi gioco, 11 paritarie; voucher 3.000 €, quota 200 €/mese, scadenza 2/4/2026 | fatto | https://comune.bagheria.pa.it/index.php/it/news/on-line-il-bando-per-i-servizi-educativi-e-assegnazione-voucher-anno-2026-2027 | 2026-11-20 | sì |
| Bagheria: rette nido comunale 95-170 €/mese per ISEE (2024/25) | fatto | https://bagheria-api.municipiumapp.it/s3/448/allegati/avvisopubblico24-25-signed.pdf | 2026-11-20 | sì |
| Sicilia: micronido via Cusina 42-44 (18 posti) e spazio gioco via Papa Giovanni XXIII (22 posti) iscritti all'albo | fatto | https://www.regione.sicilia.it/system/files/2024-04/000657-S6.pdf · https://www.regione.sicilia.it/system/files/2024-04/000883-S6.pdf | 2026-11-20 | sì |
| Sicilia: albo non paritarie 2026/27 con 3 scuole dell'infanzia, tutte nel Catanese | fatto | https://www.regione.sicilia.it/system/files/2026-06/2246%20DDG%20del%2004_06_2026%20albo%20scuole%20non%20paritarie%202026_2027_0.pdf | 2026-11-20 | sì |

## Ricerche web usate (coordinatore: 21)
Molfetta (6): iscrizioni nido comunale 2026/27; nido micronido sezione primavera; nido comunale via Don Minzoni retta; nomi dei nidi privati; USR Puglia non paritarie 2026/27; "Piccole Orme" scuola in natura; ludoteca baby parking (7 in tutto con l'ultima).
Alghero (7): iscrizioni 2026/27; Nidi gratis elenco strutture; nido privato micronido; Primi Passi beneficiari; nido sezione primavera 12-36 mesi (extended); materne comunali; Girotondo/An Glin Glò/Corocreo (extended).
Bagheria (5): iscrizioni 2026/27; privati convenzionati voucher; elenco servizi educativi convenzionati (extended); micronido baby parking ludoteca (extended); decreti albo regionale.

## Problemi
- Il motore di ricerca disponibile indicizza male le piccole strutture locali: molte risposte riguardano altre città. Le directory commerciali (Pagine Gialle) rispondono 403 a richieste automatiche.
- Tentativo di leggere il sito del Comune di Molfetta con un browser automatico: negato dal sistema di permessi, e non ripetuto (non si aggirano protezioni anti-bot).
- I PDF della Regione Siciliana rispondono 404 sul percorso `sites/default/files` e funzionano su `system/files`.
