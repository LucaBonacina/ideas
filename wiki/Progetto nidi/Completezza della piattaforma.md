---
tipo: progetto
tags: [progetto, nidi, piattaforma, completezza]
aggiornato: 2026-11-22
---
# Completezza della piattaforma

## Aggiornamento del 24/11/2026: 0-3 al 78%
Nuove fonti scaricabili e raccolta comune per comune (gli accessi civici restano l'ultima risorsa, per decisione dell'utente).

- **Emilia-Romagna**: elenchi regionali dei servizi educativi autorizzati al funzionamento (art. 19 L.R. 19/2016, SPiER, aggiornati al 17/02/2026): 1.244 servizi. Regione dal 24% al 96%.
- **Sicilia**: albo regionale L.R. 22/1986, sezione Minori (aggiornato a settembre 2026), solo le tipologie 0-3: 309 servizi. Regione dal 33% al 68%.
- **Reggio Calabria**: registro comunale dei micronidi autorizzati e accreditati (L.R. 24/2024): 28.
- **Siti comunali**: raccolta automatica delle pagine (sitemap e sezioni sui servizi, robots.txt rispettato, client identificabile) in 595 comuni delle regioni scoperte con almeno 2 servizi mancanti; 296 con pagine pertinenti. Estrazione fatta da Claude nella sessione (senza chiave API), con URL e citazione della pagina per ogni struttura: 534 strutture in 236 comuni, 71 già presenti da altre fonti. Revisione: escluse 9 strutture la cui prova indica lavori, arredi o apertura non confermata.
- Resa: buona dove il comune pubblica un elenco o schede dei luoghi (Pescara, Foligno, Pesaro, Latina, Assemini); nulla dove ci sono solo pagine su bonus, graduatorie o iscrizioni (Merano, La Spezia, Messina, Roma). I privati sono quasi sempre citati senza nome.
- Copertura 0-3: **11.714 su 15.049 (77,8%)**, dal 67%.

| Regione | Copertura | Regione | Copertura |
|---|---|---|---|
| Puglia | 99% | Lazio | 67% |
| Piemonte | 97% | Liguria | 59% |
| Emilia-Romagna | 96% | Basilicata | 49% |
| Lombardia | 95% | Trentino-Alto Adige | 37% |
| Toscana | 91% | Abruzzo | 36% |
| Friuli-Venezia Giulia | 90% | Umbria | 32% |
| Veneto | 89% | Molise | 26% |
| Campania | 81% | Marche | 24% |
| Valle d'Aosta | 69% | Sardegna | 20% |
| Sicilia | 68% | Calabria | 14% |

Fonti individuate ma non scaricabili da qui: elenchi della Regione Liguria (robots.txt vieta tutti i client automatici) e elenco delle microstrutture della Provincia di Bolzano (pagina che carica i dati da un servizio esterno). Servono un download manuale dell'utente.

## Aggiornamento del 23/11/2026, sera: sezioni primavera, 0-3 al 67%
Sezioni primavera dagli elenchi di finanziamento degli Uffici scolastici regionali (e della Regione FVG) per 17 regioni, quasi tutti dell'a.s. 2025/26. Eccezioni: Toscana, Abruzzo e Puglia sono fermi al 2024/25; la Sardegna ha solo l'elenco provvisorio; per il FVG si usa il 2026/27 perché il file del 2025/26 non ha testo. Le sezioni con codice meccanografico prendono indirizzo e coordinate della scuola dell'infanzia che le ospita. Manca la Calabria: il sito dell'USR non è raggiungibile dall'ambiente di sviluppo.

- Sezioni primavera: 2.811 nel database, **2.327 coperte su 3.024 contate da ISTAT (77%)**; 196 erano già presenti da fonti regionali e sono state riconosciute come doppioni.
- Copertura 0-3 complessiva (con tetto ISTAT per comune): **10.145 su 15.049 (67%)**, dal 56%.

| Regione | Copertura | Regione | Copertura |
|---|---|---|---|
| Puglia | 99% | Liguria | 52% |
| Piemonte | 97% | Basilicata | 45% |
| Lombardia | 95% | Sicilia | 33% |
| Toscana | 91% | Trentino-Alto Adige | 30% |
| Friuli-Venezia Giulia | 90% | Emilia-Romagna | 24% |
| Veneto | 89% | Molise | 22% |
| Campania | 80% | Abruzzo | 17% |
| Valle d'Aosta | 69% | Umbria | 13% |
| Lazio | 66% | Sardegna | 11% |
| | | Marche | 4% |
| | | Calabria | 0% |

Le regioni sotto il 50% non hanno un registro regionale dei nidi pubblico: si chiudono con la raccolta comune per comune o con le richieste di accesso civico.

## Aggiornamento del 23/11/2026: Veneto al 67%, 0-3 al 56%
Con gli allegati C e D del DDR 58/2024 (802 servizi accreditati e finanziati) e l'elenco dei Nidi in Famiglia al 04/04/2025 (213), scaricati a mano dall'utente perché i siti regionali non sono raggiungibili dall'ambiente di sviluppo, il Veneto passa da 0 a **974 servizi coperti su 1.449 (67%)**. Il totale nazionale stimato sale a circa **8.455 su 15.049 (56%)**.

## Aggiornamento del 22/11/2026, sera: 0-3 al 50%
Dopo gli import di Lazio, Roma, Toscana, Puglia, Campania, Napoli, Trento, Valle d'Aosta e degli open data di Bologna, Ferrara, Reggio Emilia e Genova, e dopo la deduplica tra fonti, i servizi 0-3 coperti sono **7.481 su 15.049 (50%)**. In ogni comune si conta al massimo il numero ISTAT, così i doppioni non nascondono i buchi.

| Regione | Coperti / ISTAT | Regione | Coperti / ISTAT |
|---|---|---|---|
| Puglia | 736 / 742 (99%) | Liguria | 133 / 354 (38%) |
| Piemonte | 1.056 / 1.087 (97%) | Trentino-Alto Adige | 175 / 592 (30%) |
| Toscana | 841 / 944 (89%) | Emilia-Romagna | 262 / 1.278 (21%) |
| Friuli-Venezia Giulia | 309 / 377 (82%) | Veneto | 974 / 1.449 (67%): aggiornato il 23/11 |
| Lombardia | 2.460 / 3.135 (78%) | Sicilia | 0 / 808 |
| Valle d'Aosta | 37 / 54 (69%) | Marche | 0 / 395 |
| Campania | 662 / 988 (67%) | Sardegna | 0 / 368 |
| Lazio | 810 / 1.377 (59%) | Calabria, Abruzzo, Umbria, Basilicata, Molise | 0 |

Note: in Puglia il registro regionale è fermo al 2023 e conta più strutture di ISTAT (centri ludici, strutture chiuse): le schede che vengono solo dal registro sono da verificare. La misura di metà giornata (28%) resta qui sotto per confronto.


Misura del 22/11/2026: strutture nel database della piattaforma ([[Piattaforma - stato]]) confrontate con il censimento ISTAT 2024 dei servizi 0-3 per comune (dataflow `47_850`, 15.049 servizi; vedi [[ISTAT - Nidi e servizi integrativi per la prima infanzia]]). Il confronto è per conteggi: ISTAT non diffonde l'elenco nominativo.

## 0-3 anni: 4.196 servizi su 15.049 (28%)
| Regione | ISTAT 2024 | Piattaforma | Copertura | Fonte disponibile (dal [[Catalogo delle fonti]]) |
|---|---|---|---|---|
| Lombardia | 3.135 | 2.707 | 86% | mancano le 726 sezioni primavera |
| Veneto | 1.449 | 0 | 0% | allegati dei decreti regionali e Nidi in famiglia (~70-75%) |
| Lazio | 1.377 | 0 | 0% | elenco degli accreditati PDF (757) + open data di Roma; SIRSE chiuso |
| Emilia-Romagna | 1.278 | 0 | 0% | open data di Bologna, Ferrara, Reggio Emilia (~12%); SPI-ER chiuso |
| Piemonte | 1.087 | 1.148 | 106% | completo (la differenza viene da come si contano i servizi) |
| Campania | 988 | 0 | 0% | elenco regionale nidi e micronidi 2024 (731 righe) + Napoli |
| Toscana | 944 | 0 | 0% | elenco dei servizi Nidi gratis 2026/27 (PDF, ~900) |
| Sicilia | 808 | 0 | 0% | decreti dell'albo regionale; elenchi comunali |
| Puglia | 742 | 0 | 0% | registro CSV (CC-BY, 2023) + catalogo zerosei 2026/27 |
| Trentino-Alto Adige | 592 | 0 | 0% | Trento: 2 PDF provinciali (183); Bolzano: quasi nulla (324 domiciliari in regione) |
| Marche | 395 | 0 | 0% | nessun elenco regionale: siti dei comuni |
| Friuli-Venezia Giulia | 377 | 341 | 90% | mancano le 70 sezioni primavera |
| Sardegna | 368 | 0 | 0% | SIWE chiuso: accesso civico |
| Liguria | 354 | 0 | 0% | open data di Genova |
| Calabria | 331 | 0 | 0% | nessun registro |
| Abruzzo | 278 | 0 | 0% | nessun registro |
| Umbria | 269 | 0 | 0% | elenco degli accreditati non pubblicato |
| Basilicata | 134 | 0 | 0% | nessun registro |
| Molise | 89 | 0 | 0% | nessun registro |
| Valle d'Aosta | 54 | 0 | 0% | elenco regionale PDF |

Per tipologia: nidi e micronidi 3.307 su 10.070; **sezioni primavera 179 su 3.024** (solo Piemonte); servizi domiciliari 447 su 1.050; spazi gioco e centri bambini-genitori 263 su 905.

Per comune, nelle tre regioni coperte: comuni in cui la piattaforma ha almeno tanti servizi quanti ISTAT: Lombardia 555 su 957, Piemonte 371 su 402, Friuli-Venezia Giulia 77 su 123. I buchi lombardi e friulani sono soprattutto le sezioni primavera.

## 3-6 anni: base quasi completa, con tre buchi
- 21.445 scuole statali e paritarie dall'anagrafe MIM.
- **Mancano le scuole dell'infanzia provinciali e equiparate di Trento e Bolzano** (l'anagrafe MIM non le contiene): da fonti provinciali.
- **Mancano le scuole dell'infanzia non paritarie** (elenchi degli USR, poche decine per regione).
- Le sezioni primavera nelle scuole non sono distinguibili nell'anagrafe MIM.

## Campi: cosa sanno le schede
| Campo | 0-3 | 3-6 |
|---|---|---|
| Posizione sulla mappa | 58% | 96% |
| Indirizzo | 83% | 99% |
| Posti autorizzati | 100% | 0% |
| Telefono | 40% | 0% (disponibile in Scuola in Chiaro) |
| Email o PEC | 38% | 88% |
| Età accolte | 8% (solo FVG) | 0% |
| Gestione nota | 90% | 63% (paritarie: comunale o privata non distinta) |
| Rette, orari, calendario, posti liberi, scadenze | 0% | 0% |

## Ordine di lavoro proposto
1. **Accesso civico all'INPS** ([[Richieste di accesso civico]]): dal 1/9/2026 i comuni comunicano all'INPS tutte le strutture 0-3 abilitate; è l'unica fonte che può chiudere da sola il buco nazionale. Poi ISTAT, Sardegna, Sicilia, e le regioni con registro chiuso (Toscana, Lazio, Emilia-Romagna, Umbria).
2. **Fonti pubbliche già individuate**, in ordine di servizi recuperabili: Veneto, Lazio, Campania, Toscana, Puglia, Trento, Valle d'Aosta, open data dei grandi comuni. Stima [stima]: copertura 0-3 nazionale dal 28% a circa 60-65%.
3. **Sezioni primavera** (3.024): decreti ed elenchi USR e regionali di finanziamento.
4. **Regioni senza registro** (Marche, Abruzzo, Molise, Calabria, Basilicata, parte di Campania e Sicilia): siti dei comuni e ricerca web, con controllo per comune contro il conteggio ISTAT.
5. **Campi**: rette pubbliche dai regolamenti tariffari comunali; per i privati, rette, orari e posti liberi solo dai gestori (scheda rivendicata, dopo le interviste).
6. **Nel prodotto**: mostrare per ogni comune il conteggio ISTAT accanto al nostro ("ISTAT conta 12 servizi, ne mostriamo 9"), così la completezza è dichiarata e misurabile.
