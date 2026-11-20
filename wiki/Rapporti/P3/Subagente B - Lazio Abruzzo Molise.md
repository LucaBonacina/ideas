---
tipo: rapporto
sessione: P3
autore: "Subagente B"
regioni: [Lazio, Abruzzo, Molise]
data: 2026-11-20
tags: [rapporto, progetto-nidi, fonti, centro]
---
# Subagente B - Lazio Abruzzo Molise

## Cosa ho fatto
- Note regione: [[Lazio]], [[Abruzzo]], [[Molise]].
- Note fonte (11):
  - Lazio: [[Regione Lazio - Elenco servizi educativi accreditati SIRSE]], [[Regione Lazio - Open data strutture socio-educative prima infanzia]], [[Regione Lazio - Buoni servizio asili nido FSE plus]], [[Roma Capitale - Elenco strutture educative 0-3]], [[Roma Capitale - Iscrizioni e quote contributive servizi 0-3]], [[Roma Capitale - Open data nidi capitolini e convenzionati]], [[Comune di Latina - Open data asili nido]].
  - Abruzzo: [[Regione Abruzzo - Report statistico servizi per la prima infanzia]], [[Regione Abruzzo - Contributi rette nidi FSE plus tramite ambiti e comuni]].
  - Molise: [[Regione Molise - Finanziamento micronidi e sezioni primavera]], [[Comune di Isernia - Servizi educativi infanzia e voucher nido]].
- Nomi file senza "+" (ho scritto "FSE plus") per rispettare la regola sui caratteri; le note Marche e Umbria usano "FSE+": da uniformare se serve.

## Risultato principale
| Regione | Registro/elenco pubblico | Formato | Record | Aggiornamento | Licenza |
|---|---|---|---|---|---|
| Lazio | sì, solo accreditati (pubblici tutti, privati accreditati) | PDF da SIRSE | 757 (697 nidi, 40 micronidi, 15 spazi gioco, 5 sezioni primavera) | 16/11/2026 | nessuna |
| Abruzzo | no | – | – (statistica: 239 servizi al 31/12/2020) | – | – |
| Molise | no | – | – | – | – |

## Ricerche web usate (13 su 25)
1. Regione Lazio legge regionale 7/2020 sistema integrato 0-6 regolamento attuativo servizi educativi autorizzazione accreditamento
2. Roma Capitale iscrizioni nidi capitolini 2026/2027 domanda online scadenza tariffe
3. comune.roma.it "nidi" iscrizione domanda 2026-2027 bando servizi educativi 0-3 Roma Capitale municipi (solo comune.roma.it)
4. Regione Lazio contributo famiglie rette asili nido 2026 abbattimento rette avviso ISEE nidi privati accreditati
5. "Buoni asili nido 2026-2027" Regione Lazio avviso pubblico buoni servizio requisiti ISEE scadenza domanda
6. Abruzzo legge regionale servizi educativi prima infanzia 0-6 nuova legge 2023 2024 2025 abroga L.R. 76/2000 autorizzazione accreditamento
7. Regione Abruzzo 2026 contributo rette asili nido famiglie avviso "sistema integrato 0-6" elenco servizi educativi autorizzati
8. regione.abruzzo.it servizi educativi prima infanzia nidi "0-6" ... DGR 759/2025
9. Molise legge regionale servizi educativi prima infanzia nidi autorizzazione accreditamento regolamento 0-6 "Regione Molise" nidi gratis 2026
10. Molise 2026 asili nido contributo regionale rette famiglie micronidi sezioni primavera FSE+ avviso Campobasso Isernia
11. Comune di Viterbo asili nido comunali iscrizioni 2026/2027 avviso tariffe
12. Comune dell'Aquila asili nido comunali iscrizioni 2026/2027 avviso rette
13. Comune di Campobasso asili nido comunali iscrizioni 2026/2027 avviso tariffe nido

## Letture dirette (curl, pdftotext)
- Regione Lazio: pagine "Servizi alla prima infanzia" e "Accreditamento"; PDF elenco accreditati al 16/11/2026 (contato riga per riga); L.R. 7/2020; R.R. 12/2021; circolare SIRSE 2023; istruzioni SIRSE; API CKAN dati.lazio.it (dataset 2013/14, CSV in errore 500); avviso soggetti erogatori buoni; rettifica avviso famiglie 2026/27; DD G15269/2026.
- Roma Capitale: avviso iscrizioni 2026/27 (34 pagine); elenco strutture 11/08/2026 (50 pagine); API CKAN dati.comune.roma.it e CSV 2022/23 nidi (403 righe) e infanzia (317).
- Frosinone avviso nidi 2026/27; Latina CSV (dati.gov.it); Pescara avviso posti vacanti 2026/27; Teramo pagina istruzione.
- Abruzzo: L.R. 76/2000 e DGR 565/2001 (copie minori.gov.it), DGR 461/2025 (BURA), report statistico 2020, avviso ECAD 17.
- Molise: schede minori.gov.it, avvisi di Montenero di Bisaccia e Isernia.

## Problemi tecnici
- regione.abruzzo.it: errore TLS con curl e 503 con WebFetch; consiglio regionale Abruzzo: 503.
- regione.molise.it: connessione chiusa; prfesrfse2127.regione.molise.it: errore 500.
- comune.viterbo.it, comune.rieti.it, comune.chieti.it: non raggiungibili con curl.
- comune.laquila.it e comune.campobasso.it: contenuti caricati via JavaScript, non leggibili.
- dati.lazio.it: 503 dopo poche richieste API (limite di frequenza).

## Dubbi
- Lazio: il SIRSE dovrebbe essere un servizio informativo per i cittadini (L.R. 7/2020 art. 48), ma ho visto solo il login. Possibile che esista una ricerca pubblica che non ho trovato.
- Lazio buoni 2026/27: ISEE 40.000, 15 milioni e scadenza 05/08/2026 solo da stampa.
- Abruzzo: non so se l'accreditamento sperimentale (DGR 935/2011, 833/2015) sia ancora in vigore.
- Molise: testo del R.R. 1/2015 non letto; tipologie e requisiti sono parziali.
- I conteggi del PDF Lazio sono fatti su testo estratto: 757 righe con numero di accreditamento; 9 righe senza provincia riconosciuta.

## Cosa resta aperto
- Capoluoghi non verificati: Rieti, Viterbo, Chieti, L'Aquila (avviso non leggibile), Campobasso; rette di Latina, Teramo, Pescara.
- Mappa geoportale di Roma ("Trova il nido capitolino"): possibile fonte con coordinate, non esplorata.
- Elenchi degli autorizzati nei municipi di Roma.
- Atti regionali Molise sui micronidi finanziati (elenco gestori).
- Confronto con ISTAT per comune (fonte nazionale, altra sessione).

## Affermazioni da riverificare
1. Elenco accreditati Lazio al 16/11/2026: 757 servizi, 340 pubblici e 417 privati, 480 nei municipi di Roma. https://regione.lazio.it/sites/default/files/2026-11/Elenco-Servizi-Educativi-Accreditati-16-11-26.pdf
2. In Lazio l'accreditamento è obbligatorio per i servizi a titolarità pubblica e lo rilascia il comune o municipio (DGR 964/2022). https://regione.lazio.it/cittadini/sociale-famiglie/Servizi-Prima-Infanzia/Accreditamento-Servizi-Educativi
3. L'open data regionale del Lazio è fermo al 2013/14 e il CSV dà errore 500. https://dati.lazio.it/api/3/action/package_show?id=strutture-socio-educative-per-la-prima-infanzia
4. Roma 2026/27: domande 24/02-30/03/2026, quote 0-600 euro al mese (DGC 492/2025). https://www.comune.roma.it/web-resources/cms/documents/Avviso_Pubblico_202627_Iscrizioni_Servizi_educativi.pdf
5. Abruzzo: L.R. 76/2000 ancora vigente e richiamata nel 2025; nessun elenco regionale. https://bura.regione.abruzzo.it/sites/bura.regione.abruzzo.it/files/bollettini/2025-09-12/dgr-pubblica-461-2025.pdf
