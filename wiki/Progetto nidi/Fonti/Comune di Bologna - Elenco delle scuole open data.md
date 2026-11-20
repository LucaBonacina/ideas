---
tipo: fonte
ente: "Comune di Bologna"
livello: comunale
territorio: "Comune di Bologna"
tipologie: [nido, infanzia statale, infanzia comunale, infanzia paritaria, infanzia non paritaria]
gestione: [pubblico, privato convenzionato, privato]
campi: [denominazione, servizio, gestione, quartiere, indirizzo (codice via e civico), coordinate, istituzione scolastica, anno scolastico]
formato: "open data (Opendatasoft: CSV/JSON/GeoJSON/API)"
aggiornamento: "modificato 2026-10-31"
licenza: "CC BY 4.0"
dati_personali: "no"
url: "https://opendata.comune.bologna.it/explore/dataset/elenco-delle-scuole/"
verificato_il: "2026-11-20"
affidabilita: "alta per nidi comunali e convenzionati; bassa per nidi privati non convenzionati (1 solo record)"
tags: [fonte, nidi, emilia-romagna, bologna]
---
# Comune di Bologna - Elenco delle scuole (open data)

## Cosa copre
Dataset `elenco-delle-scuole`: 359 record, 15 campi (`civkey, quartiere, denominazi, geo_point_2d, geo_shape, nome, gestione, servizio, istituzione_scolastica, civico, subciv, codvia, anno_scolast, geo_id, area_stati`) [fatto] (API Opendatasoft, 2026-11-20).

Conteggio per servizio e gestione (0-6) [fatto]:
| Servizio | Gestione | N |
|---|---|---|
| Nido d'infanzia | Comunale | 50 |
| Nido d'infanzia | Comunale in concessione | 6 |
| Nido d'infanzia | Privata convenzionata | 31 |
| Nido d'infanzia | Privata | 1 |
| Scuola dell'infanzia | Comunale | 67 |
| Scuola dell'infanzia | Indiretta | 6 |
| Scuola dell'infanzia | Statale | 30 |
| Scuola dell'infanzia | Privata convenzionata | 25 |
| Scuola dell'infanzia | Privata paritaria | 2 |
| Scuola dell'infanzia | Privata non paritaria | 2 |

Totale nidi: **88**. SPI-ER (2022-23) conta per Bologna 126 servizi 0-3 (69 pubblici, 57 privati): mancano quindi servizi integrativi e quasi tutti i privati non convenzionati [stima].

## Altri dataset utili sullo stesso portale [fatto]
- `numero-iscritti-ai-servizi-educativi-nidi` (861 record, per struttura e anno; modificato 2020-10-15).
- `elenco-scuole-infanzia-e-bacini-utenza` (528 record, 2024-12-11).
- `domande-di-iscrizione-ai-servizi-educativi` (127 record, 2021).
- Tutti CC BY 4.0.

## Iscrizioni
Nidi comunali (diretti e indiretti) 2026/27: domande online dal 13 aprile al 4 maggio 2026, poi fuori termine dal 1 giugno al 31 dicembre 2026; SPID o CIE [fatto] (bolognazerodiciotto.it, 2026-11-20). Rette/tariffe ISEE: **non verificate**.

## Problemi noti
- Mancano servizi integrativi (spazi bambino, centri bambini e genitori) e privati autorizzati non convenzionati.
- Nessun campo su capienza, orari, età, rette.

## Fonti
- https://opendata.comune.bologna.it/api/explore/v2.1/catalog/datasets?where=search(%22infanzia%22)%20or%20search(%22nido%22)%20or%20search(%22educativi%22) (2026-11-20)
- https://opendata.comune.bologna.it/api/explore/v2.1/catalog/datasets/elenco-delle-scuole/records?select=servizio,gestione,count(*)&group_by=servizio,gestione (2026-11-20)
- https://www.bolognazerodiciotto.it/objects/iscrizione-nidi-infanzia-20262027 (2026-11-20)
