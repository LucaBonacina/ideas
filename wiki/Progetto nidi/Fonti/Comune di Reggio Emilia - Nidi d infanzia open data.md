---
tipo: fonte
ente: "Comune di Reggio nell'Emilia"
livello: comunale
territorio: "Comune di Reggio Emilia"
tipologie: [nido]
gestione: [pubblico]
campi: [nome, indirizzo, ambito, polo sociale, codice scuola, coordinate]
formato: "open data (GeoJSON/KML/SHP via WFS; CKAN opendata.comune.re.it)"
aggiornamento: "metadati CKAN 2022-02-22"
licenza: "CC BY"
dati_personali: "no"
url: "https://geoserver.comune.re.it/geoserver/geo_re/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo_re:SCU_SCUOLE_NIDO&outputFormat=application/json&srsName=EPSG:4326"
verificato_il: "2026-11-20"
affidabilita: "media: solo nidi (presumibilmente comunali), datato 2022"
tags: [fonte, nidi, emilia-romagna, reggio-emilia]
---
# Comune di Reggio Emilia - Nidi d'infanzia (open data)

## Cosa copre
Layer `geo_re:SCU_SCUOLE_NIDO`: **25 record**, tutti `DESCR_GRUPPO = NIDO` [fatto] (scaricato 2026-11-20). Campi: `OGR_FID, ID_SCUOLA, NOME, INDIRIZZO, AMBITO, POLO_SOC, CODICE_SCUOLA, GRUPPO, DESCR_GRUPPO`.

SPI-ER 2022-23 per Reggio Emilia: 25 servizi pubblici + 18 privati [fatto] → il dataset corrisponde ai **soli servizi pubblici** [stima: coincidenza del numero, campo gestione assente].

## Esempio di record
`AGUAS CLARAS | VIA MEUCCIO RUINI, 10 | Mancasale | Polo Nord | NIDO`

## Problemi noti
- Nessun campo gestione, capienza, età, rette. Mancano i privati.
- Sullo stesso portale: "Iscritti ai servizi prescolari fascia 0-3 anni a.s. 2024/25" della Provincia di Reggio Emilia (2026-04-13, CC BY) — non aperto in questa sessione.

## Fonti
- https://opendata.comune.re.it/api/3/action/package_search?q=nidi (2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_show?id=nidi-dinfanzia1 (2026-11-20)
