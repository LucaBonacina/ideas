---
tipo: fonte
ente: "Regione Toscana - Osservatorio regionale educazione e istruzione"
livello: regionale
territorio: "Toscana"
tipologie: [nido, servizi integrativi]
gestione: [pubblico, privato convenzionato, privato]
campi: [anno educativo, provincia, zona educativa, comune, codice ISTAT, popolazione 3-36 mesi, n. nidi pubblici e privati, n. servizi integrativi pubblici e privati, ricettività, domande, rinunce, lista d'attesa, iscritti per gestione e per età, anticipatari, indicatore di Lisbona]
formato: "open data (CSV, separatore ;, codifica ISO-8859-1)"
aggiornamento: "annuale; ultimo anno pubblicato 2024/25 (risorsa caricata il 2025-09-15); serie dal 2014/15"
licenza: "Other (Non-Commercial) secondo i metadati CKAN (license_id other-nc)"
dati_personali: "no (dati aggregati per comune; valori < 3 oscurati)"
url: "https://dati.toscana.it/dataset/serviziprimainfanzia"
verificato_il: 2026-11-20
affidabilita: "alta per i numeri aggregati (fonte SIRIA, validata dai comuni); inutile come elenco perché non ha righe per servizio"
tags: [fonte, toscana, open-data, statistica]
---
# Regione Toscana - Open data servizi educativi prima infanzia (3-36 mesi)

**Cosa copre [fatto]:** un file CSV per anno educativo (dal 2014/15 al 2024/25) con **una riga per comune**, non per servizio. Per il 2024/25: 278 righe (273 comuni più righe di totale), totale Toscana **917 servizi**: 832 nidi (415 a titolarità pubblica, 417 privata) e 85 servizi integrativi (32 pubblici, 53 privati); ricettività potenziale 28.077 posti; 27.436 iscritti. Somme calcolate da me sulle righe comunali; coincidono con la riga "Toscana" del file.

**Cosa non copre:** nome, indirizzo, gestore, rette, orari del singolo servizio. Non distingue spazio gioco, centro bambini e famiglie e servizio domiciliare (solo "servizi integrativi"). Niente scuole dell'infanzia (c'è un dataset separato "Scuola dell'infanzia (3-5 anni) - Toscana", fermo al 2017/18, licenza CC-BY-SA).

**Come si accede:** download libero da CKAN. API: `https://dati.toscana.it/api/3/action/package_show?id=serviziprimainfanzia`. Guida alla lettura in PDF nella stessa pagina.

**Esempio di record (2024/25):** `2024-25;AR;Aretina;;Arezzo;51002;1700;12;9;21;;;;21;468;231;699;...;43,6` (Arezzo: 12 nidi pubblici, 9 privati, 699 posti, indicatore di Lisbona 43,6).

**Uso per il progetto:** denominatore per misurare la completezza di un elenco per comune (es. confronto con [[Regione Toscana - Nidi gratis elenco servizi e comuni aderenti]]). Esempi: Lucca 16 servizi nel 2024/25 contro 11 nell'elenco Nidi gratis 2026/27; Massa 13 contro 8; Firenze 117 contro 123.

**Problemi noti:** licenza non commerciale (da chiarire con la Regione per un uso in prodotto); popolazione 3-36 mesi stimata; codifica Latin-1 e spazi doppi nei nomi dei comuni; ritardo di circa un anno.

**Fonte a monte:** il sistema informativo regionale SIRIA (art. 53 DPGR 41/R/2013), vedi [[Regione Toscana - SIRIA sistema informativo regionale infanzia]].

## Fonti
- https://dati.toscana.it/dataset/serviziprimainfanzia (API package_show, accesso 2026-11-20)
- CSV 2024/25: https://dati.toscana.it/dataset/98ee6064-b61a-45e2-a790-86c55b278574/resource/01588909-8f0b-4b80-8af7-1749bab80a5e/download/opendata-_-da-pubblicare-24-25.csv (scaricato 2026-11-20)
- Guida: https://dati.toscana.it/dataset/98ee6064-b61a-45e2-a790-86c55b278574/resource/4d9a09c0-3ccc-4086-8cf9-b5803b75288b/download/guida.pdf (2026-11-20)
