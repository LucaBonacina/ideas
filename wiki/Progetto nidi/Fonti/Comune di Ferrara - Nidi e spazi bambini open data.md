---
tipo: fonte
ente: "Comune di Ferrara"
livello: comunale
territorio: "Comune di Ferrara"
tipologie: [nido, spazio bambini, nido+infanzia]
gestione: [pubblico, privato]
campi: [nome, descrizione, tipo, indirizzo, località, gestione, attivo nell'anno, coordinate]
formato: "open data (WFS/WMS GeoServer; CKAN dati.comune.fe.it)"
aggiornamento: "annuale dichiarato; metadati CKAN 2024-02-02; campo A_2021 (dato riferito al 2021)"
licenza: "A2.1 (id licenza CKAN locale; su dati.gov.it risulta CC BY 4.0)"
dati_personali: "no"
url: "https://sit.comune.fe.it/geoserverckan/Ferrara/Nido_preview/wfs?service=WFS&version=2.0.0&request=GetCapabilities"
verificato_il: "2026-11-20"
affidabilita: "media: pubblici e privati, ma dato fermo al 2021"
tags: [fonte, nidi, emilia-romagna, ferrara]
---
# Comune di Ferrara - Nidi e spazi bambini (open data)

## Cosa copre
"Mappatura istituti pubblici e privati fascia 0-3 anni", creata annualmente dai Servizi educativi del Comune [fatto] (descrizione su dati.gov.it, 2026-11-20).

Scaricato via WFS GetFeature (layer `Ferrara:Nido_preview`): **37 record** [fatto]. Campi: `NOME, DESCRIZION, TIPO, INDIRIZZO, AUTO_ID, ID, RECNOS, LOC, A_2021, GESTIONE, LEGENDA`. Gestione: comunale 15, privata 18 (+1 "privato"), vuoto 3. Campo A_2021: attivo 30, "nessun iscritto" 2, vuoto 4.

Il totale 37 coincide con SPI-ER 2022-23 per Ferrara (21 pubblici + 16 privati) [fatto], ma la ripartizione pubblico/privato è diversa.

## Esempio di record
`San Vincenzo - Scuola Infanzia | Nido + Infanzia privata | Via Fossato 19 | Centro urbano Ferrara | PRIVATA | Attiva`

## Problemi noti
- Dato riferito al 2021; nessuna capienza, orari, rette.
- Coordinate in proiezione metrica (non WGS84) nel default.

## Fonti
- https://dati.comune.fe.it/api/3/action/package_search?q=nidi (2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_show?id=nidi-e-spazi-bambini (2026-11-20)
