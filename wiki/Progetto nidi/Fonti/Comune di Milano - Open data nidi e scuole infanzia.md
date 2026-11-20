---
tipo: fonte
ente: "Comune di Milano (dati.comune.milano.it)"
livello: "comunale"
territorio: "Comune di Milano"
tipologie: [nido, sezione primavera, servizi integrativi, infanzia statale, infanzia paritaria, infanzia non paritaria]
gestione: [pubblico, privato convenzionato, privato]
campi: [anno scolastico, denominazione, classe di età, tipo struttura (comunale/accreditato/convenzionato/privato), paritaria, indirizzo, municipio, NIL, capienza (solo infanzia), coordinate, telefono]
formato: "open data (CSV/JSON/GeoJSON, API CKAN)"
aggiornamento: "nidi: fermo all'a.s. 2018/19 (risorse 2021-04-12); infanzia: a.s. 2025/26 (risorsa 2026-10-26); servizi integrativi: risorsa 2023-12-01"
licenza: "CC-BY (license_id cc-by)"
dati_personali: "no (telefoni ed email di uffici/servizi)"
url: "https://dati.comune.milano.it/dataset/ds47-istruzione-asili-nido-localizzazione-delle-strutture"
verificato_il: "2026-11-20"
affidabilita: "media: dati ufficiali ma il dataset nidi è vecchio di 7 anni; quello infanzia è aggiornato"
tags: [fonte, lombardia, milano, open-data]
---
# Comune di Milano - Open data nidi e scuole infanzia

## Dataset verificati (API CKAN `package_search`, 2026-11-20)
| Dataset | Contenuto | Record | Ultimo dato |
|---|---|---|---|
| ds47 Asili Nido - localizzazione | nidi comunali, accreditati, convenzionati, privati, per classe di età (lattanti, medio/grandi, sezioni primavera) | 1.790 righe = 3 anni scolastici (16/17: 593, 17/18: 597, 18/19: 600) | a.s. 2018/19 |
| ds3014 Scuole dell'infanzia 2025/2026 | tutte le scuole dell'infanzia con tipo e capienza | 294 | a.s. 2025/26 |
| ds709 Servizi integrativi all'infanzia | Tempo per la famiglia 9, Centri prima infanzia 3, Ludoteca 2 | 14 | 2023-12 |
| ds678 Tipologie di servizio | unità educative comunali, flag sezione primavera / sezione piccoli | 278 | 2019 |

[fatto]

- ds47: nell'a.s. 2018/19 sono 377 strutture distinte (nome+indirizzo); una riga per ogni classe di età. Valori di TIPO_STRUTTURA su tutto il file: Privato accreditato 479, Privato convenzionato 459, Comunale 438, Privato 297, Comunale accreditato 117. Nel solo 2018/19 i valori cambiano molto (Comunale 16, Privato convenzionato 266): **etichetta incoerente tra anni**, da non usare senza verifica. [fatto]
- ds3014: TIPO Comunale 166, Statale 27, Ente privato laico 40, Ente religioso 36, Privato 17, Privato convenzionato 6, Privato accreditato 2; PARITARIA SI 251, No 43; campo CAPIENZA presente. [fatto]

## Confronto con il registro regionale
Il registro regionale [[Regione Lombardia - Strutture di offerta sociale prima infanzia]] conta nel comune di Milano 391 unità (352 asili nido, 17 micronidi, 16 nidi famiglia, 6 centri prima infanzia) a novembre 2026, di cui 138 con ente gestore "Comune di ...". [fatto] Il dataset comunale non è confrontabile record per record (anni diversi, nessun codice CUDES).

## Esempio di record (ds47)
`1819 | Sallustio 2 - Nido | Medio/Grandi | Nido d'infanzia | Comunale | SALLUSTIO CAIO 2 | cod. unità educativa 24 | Municipio 4`

## Problemi noti
- Pagine informative su comune.milano.it (iscrizioni, rette) rispondono **403** alle richieste automatiche: non lette direttamente. Da stampa e guide: iscrizioni 2026/27 dal 4 al 25 febbraio 2026 per nidi, sezioni primavera e infanzia [non verificato sul sito del Comune]. Mappa "Geoschool" citata, non verificata.
- Nessun dato su rette, posti liberi, graduatorie in open data. [fatto per la ricerca CKAN su "nidi" e "infanzia"]

## Fonti
- https://dati.comune.milano.it/api/3/action/package_search?q=nidi (accesso 2026-11-20)
- https://dati.comune.milano.it/dataset/443d69ac-8487-4707-b18b-04269a880a7e/resource/372d6b0e-af5b-4dad-a9c3-4fa0318a7dc8/download/ds47_nidi_infanzia.csv (accesso 2026-11-20)
- https://dati.comune.milano.it/dataset/f7c744ab-0b92-450f-a76c-536e86a78b30/resource/0dd0037a-b29a-42f1-88f1-92f4e4f9937f/download/ds3014_dst_an_statistica_totale_scuola-dellinfanzia_2025-2026.csv (accesso 2026-11-20)
- https://dati.comune.milano.it/dataset/6aeb0372-477f-462c-80f3-63191db0ad9d/resource/9078a3c2-4316-4179-9cc1-6b72de1842f8/download/ds709_servizi_infanzia_final.csv (accesso 2026-11-20)
- https://www.ilgiorno.it/milano/cronaca/domanda-iscrizione-nidi-materne-ga3ariwd (stampa, solo estratto)
