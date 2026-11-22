---
tipo: progetto
tags: [progetto, nidi, piattaforma, completezza]
aggiornato: 2026-11-22
---
# Completezza della piattaforma

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
