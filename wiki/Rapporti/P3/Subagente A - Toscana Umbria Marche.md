---
tipo: rapporto
sessione: P3
autore: "Subagente A"
data: 2026-11-20
tags: [rapporto, nidi, toscana, umbria, marche]
---
# Rapporto - Subagente A (Toscana, Umbria, Marche)

## Cosa ho fatto
- Note regione: [[Toscana]], [[Umbria]], [[Marche]].
- Note fonte (11): [[Regione Toscana - Open data servizi educativi prima infanzia]], [[Regione Toscana - Nidi gratis elenco servizi e comuni aderenti]], [[Regione Toscana - SIRIA sistema informativo regionale infanzia]], [[Comune di Firenze - Elenco servizi educativi 0-3]], [[Comune di Firenze - Iscrizioni e tariffe nidi]], [[Comune di Livorno - Open data nidi dinfanzia]], [[Comune di Prato - Open data asili nido]], [[Regione Umbria - Avviso rette servizi educativi FSE+]], [[Comune di Perugia - Iscrizioni nidi e convenzionamenti]], [[Regione Marche - Programmazione 0-6 e abbattimento rette FSE+]], [[Comune di Ancona - Nidi comunali e rette]].
- **Commit e push non eseguiti:** il coordinatore ha chiesto di fare commit e push su `claude/nidi-p3` dopo ogni nota; il classificatore dei permessi ha negato il comando git. Non ho cercato vie alternative. I file sono scritti e non committati.

## Risultato per regione
| Regione | Registro/elenco pubblico per servizio | Formato | N. record | Licenza | Stima completezza raggiungibile oggi |
|---|---|---|---|---|---|
| Toscana | sì, parziale: elenco servizi Nidi gratis 2026/27 (sistema pubblico) + statistica per comune | PDF (elenco); CSV (statistica) | 900 servizi (elenco); 917 servizi 2024/25 (statistica, 278 righe) | nessuna (PDF); Other Non-Commercial (CSV) | circa 90% dei nidi, poco sui servizi integrativi |
| Umbria | no (elenco regionale accreditati previsto dall'art. 16 L.R. 13/2023, non trovato) | – | – | – | sotto 20% |
| Marche | no | – | – | – | sotto 10% |

## Ricerche web (14 su 25)
1. Regione Toscana elenco servizi educativi prima infanzia accreditati autorizzati per comune 41/R/2013
2. "Nidi gratis" Toscana 2026-2027 avviso comuni ISEE 35.000
3. Comune di Firenze iscrizioni nidi d'infanzia 2026/2027 elenco servizi comunali e accreditati tariffe
4. Umbria legge regionale servizi socio-educativi prima infanzia 30/2005 regolamento autorizzazione accreditamento nidi vigente
5. "legge regionale" Umbria 2023 "Sistema integrato di educazione e istruzione per l'infanzia fino a sei anni" n.
6. Regione Umbria regolamento regionale servizi educativi infanzia attuazione legge 13/2023 elenco regionale servizi accreditati nidi
7. Regione Marche legge regionale 9/2003 servizi per l'infanzia nidi regolamento 13/2004 modifiche autorizzazione accreditamento comune 2024
8. Regione Marche FSE+ 2021-2027 servizi educativi per l'infanzia abbattimento rette nidi 2026/2027 avviso comuni elenco servizi
9. (dominio regione.marche.it) servizi educativi infanzia nidi "Fondi Ministeriali 0-6" FSE+ contributi comuni rette 2025 2026
10. Regione Umbria abbattimento rette nidi 2026/2027 avviso FSE+ famiglie servizi educativi prima infanzia contributo
11. (dominio regione.umbria.it) servizi educativi infanzia elenco nidi autorizzati accreditati comuni umbria posti FSE+ manifestazione interesse 2026
12. Umbria avviso FSE+ "servizi educativi per la prima infanzia" contributo rette famiglie settembre 2025 gennaio 2026 domande 23/02/2026 30/03/2026
13. Comune di Perugia nidi d'infanzia comunali elenco iscrizioni 2026/2027 scadenza tariffe
14. Comune di Ancona nidi d'infanzia iscrizioni 2026/2027 elenco nidi comunali e convenzionati rette

## Letture dirette principali
- dati.toscana.it API CKAN (ricerche "infanzia", "nidi", "nido", "asili", "servizi educativi"); CSV 2024/25 scaricato e sommato; guida PDF.
- Elenco servizi Nidi gratis (Allegato B decreto 22561/2026) estratto con pdfplumber in CSV e contato per tipologia, titolare, comune.
- Testo vigente DPGR 41/R/2013 dalla Raccolta normativa toscana (articoli 2-53).
- Portale Educazione Firenze: 13 pagine di elenco (110 schede), una scheda dettaglio, pagine iscrizioni e tariffe, tabella tariffe PDF, DD 1503/2026, avviso Nidi gratis privati.
- Open data Livorno (GeoJSON 33 record), Prato (CSV 43), Siena (CSV 9), Arezzo (ZIP senza dati).
- L.R. Umbria 13/2023 testo coordinato; DTR 121/2026; comunicato approvazione 2023; informativa FSE+ 25-11-2025 (via WebFetch, poi pdftotext); pagina iscrizioni e avviso convenzionamenti di Perugia.
- L.R. Marche 9/2003 testo coordinato e R.R. 13/2004 (copie non ufficiali); comunicato regionale programmazione 0-6 2025; comunicato Ancona nidi 2024/25.

## Problemi di accesso
- dati.umbria.it: DNS non risolve.
- dati.regione.marche.it: reset di connessione e 503.
- static.regione.marche.it e consiglio.marche.it: errore di certificato o irraggiungibili; non ho disattivato la verifica TLS.
- www.regione.umbria.it: reset intermittenti (WebFetch ha funzionato per un PDF).
- comuneancona.it: verifica anti-bot; comune.ancona.gov.it: 502.
- Host del CSV di Macerata (task.macerata.sinp.net): non risolve.

## Dubbi e cose aperte
- Toscana: l'elenco Nidi gratis e la statistica non coincidono come insiemi; serve un confronto comune per comune (Lucca 11 contro 16, Massa 8 contro 13 suggeriscono privati non accreditati mancanti).
- Toscana: licenza "non commerciale" del dataset statistico da chiarire con la Regione.
- Capoluoghi di provincia toscani diversi da Firenze, Terni, e quattro capoluoghi marchigiani: rette e scadenze non verificate.
- Umbria: date e regole dell'avviso rette 2025/26 da riverificare; requisiti numerici del R.R. 13/2006 non letti.
- Marche: quota di 5.700 euro per azzeramento retta solo da estratto di ricerca; mozione 2025 non aperta.
- Firenze: 110 schede sul portale contro 123 servizi in Nidi gratis: da spiegare.

## Affermazioni da riverificare (le più decisive)
1. L'elenco Nidi gratis Toscana (decreto 22561 del 12-10-2026, Allegato B) ha 900 servizi: 858 nidi, 33 domiciliari, 9 spazi gioco. https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5534458&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+B+
2. Il dataset regionale toscano è aggregato per comune, conta 917 servizi nel 2024/25 e ha licenza "Other (Non-Commercial)". https://dati.toscana.it/api/3/action/package_show?id=serviziprimainfanzia
3. Nidi gratis 2026/27: ISEE fino a 40.000 euro, sconto fino a 527,27 euro al mese per 11 mesi, domande 04/06-26/06/2026, esclusi i centri bambini e famiglie. https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5512222&nomeFile=Decreto+n.9186+del+27-04-2026-+Allegato+A+
4. Umbria: L.R. 13/2023 art. 16 c. 10 istituisce l'elenco regionale degli accreditati; il regolamento attuativo era "in corso di stesura" a febbraio 2026. https://consiglio.regione.umbria.it/sites/default/files/2026-03/legge-regionale-16-10-2023-n-13-umbria.pdf e https://consiglio.regione.umbria.it/sites/default/files/2026-03/DTR%20121%2012_2_2026.pdf
5. Marche: nessun registro regionale; autorizzazione e accreditamento comunali (L.R. 9/2003 art. 4, 14, 15); la misura rette passa dai comuni (programmazione 0-6 2025, 7,5 milioni). https://www.minori.gov.it/sites/default/files/lr_9_2003_-_testo_coordinato.pdf e https://www.regione.marche.it/News-ed-Eventi/Post/111893/Sistema-integrato-di-educazione-e-istruzione-dalla-nascita-ai-6-anni-approvata-la-Programmazione-degli-interventi-2025
