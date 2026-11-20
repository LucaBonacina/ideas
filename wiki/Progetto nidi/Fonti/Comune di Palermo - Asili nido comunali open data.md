---
tipo: fonte
ente: "Comune di Palermo"
livello: comunale
territorio: "Comune di Palermo"
tipologie: [nido]
gestione: [pubblico]
campi: [numero_circoscrizione, nome_asilo_nido, unita_didattica_educativa, email_ude, ubicazione_via, ubicazione_civico, telefono, numero_sezioni, orari_apertura, orari_chiusura, capacita_ricettiva, lista_attesa_inizio_anno, scorrimento_graduatoria_31_12_2017, scorrimento_graduatoria_31_03_2018]
formato: "open data (CSV, separatore ;)"
aggiornamento: "fermo: ultimo dataset 2018 (modificato 2018-04-11); precedente 2016"
licenza: "CC-BY 4.0"
dati_personali: "nessuno (email e telefoni istituzionali)"
url: "https://opendata.comune.palermo.it/js/server/uploads/dataset/csv/_17042018064814.csv"
verificato_il: "2026-11-20"
affidabilita: "bassa per l'uso attuale (dati del 2018), alta come struttura dei campi"
tags: [fonte, nidi, sicilia, palermo, open-data]
---
# Comune di Palermo - Asili nido comunali open data

## Cosa copre
Dataset "Il dataset contiene i dati relativi ai servizi degli asili nido comunali 2018" (portale open data del Comune, dataset 1020; harvestato anche su dati.gov.it). [fatto] **28 righe** (nidi comunali), con capacità ricettiva, sezioni, orari, lista d'attesa. Esiste anche la versione 2016 (dataset 461) e un KML "Le scuole comunali" (dataset 328).

Nel catalogo DCAT del portale (https://opendata.comune.palermo.it/dcat/dcat.php, 1.611 dataset) solo i dataset 1019 (scuola comunale dell'infanzia 2018) e 1020 (nidi 2018) riguardano 0-6: **nessun aggiornamento dopo il 2018**.

## Cosa non copre
Nidi privati (convenzionati e non), spazi gioco, sezioni primavera; dati successivi al 2018.

## Esempio di record
`1;BRACCIO DI FERRO;1;…;VIA SANTISSIMO CROCIFISSO;1;…;3;7.30;15.30;44;5;0;5` (3 sezioni, capienza 44, lista d'attesa 5).

## Problemi noti
Dataset fermo da 8 anni; la pagina del dataset (opendata-dataset.php?dataset=1020/) restituisce "Parametro scorretto", ma il CSV è scaricabile. L'API CKAN non esiste (404): usare il DCAT o dati.gov.it.

## Fonti
- https://www.dati.gov.it/opendata/api/3/action/package_show?id=il-dataset-contiene-i-dati-relativi-ai-servizi-degli-asili-nido-comunali-2018 (accesso 2026-11-20)
- https://opendata.comune.palermo.it/js/server/uploads/dataset/csv/_17042018064814.csv (accesso 2026-11-20)
- https://opendata.comune.palermo.it/dcat/dcat.php (accesso 2026-11-20)
