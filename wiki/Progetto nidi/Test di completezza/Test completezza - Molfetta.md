---
tipo: test-completezza
comune: "Molfetta"
provincia: "BA"
regione: "Puglia"
popolazione: "57.229 al 1/1/2025 (ISTAT, dataflow 22_289)"
criterio_scelta: "comune tra 15.000 e 100.000 abitanti, non capoluogo; scelto tra i comuni pugliesi con più servizi 0-3 per ISTAT (13) e un mix pubblico/privato, per misurare le due fonti regionali (registro e catalogo zerosei), uniche nel Sud"
data: 2026-11-20
sessione: P10
tags: [test-completezza, nidi, puglia]
---
# Test di completezza - Molfetta

## In breve
- **Elenco vero 0-3: 20 unità** (4 pubbliche, 16 private), contro **13 servizi attesi da ISTAT** (2024). Le fonti regionali trovano più servizi di quelli contati da ISTAT: in parte aperture recenti (catalogo 2026/27), in parte righe del registro 2023 forse non più attive.
- **Registro regionale 2023: 15 su 20 (75%)**; **catalogo zerosei 2026/27: 15 su 20 (75%)**, ma 15 su 16 privati (94%). L'unione delle due fonti copre tutte le 20 unità; **5 unità sono solo nel catalogo** (aperture o spostamenti dopo il 2023), **5 solo nel registro** (pubblici e domiciliare, non aderenti al buono).
- **Sito del Comune: 0%.** Il sito comune.molfetta.ba.it è protetto da un sistema anti-bot (pagina "Establishing a secure connection", HTTP 403) e non è stato letto; ricerche web e siti dei gestori **non hanno aggiunto nessuna struttura**, solo campi (orari, rette, posti).
- **Scuole dell'infanzia 3-6: 22 nell'anagrafe MIM** (16 statali, 6 paritarie). Nessuna non paritaria trovata (elenco USR Puglia 2026/27 non reperito). 3 paritarie hanno una sezione primavera nel catalogo.
- Campi utili ai genitori: rette e orari solo nelle carte dei servizi dei gestori (una del 2019); posti (ricettività) nel registro; nessuna fonte su posti liberi, scadenze del nido comunale, lingua.

## Totale atteso
- **ISTAT 2024** (dataflow 47_850, [[ISTAT - Nidi e servizi integrativi per la prima infanzia]]): **13 servizi**, 2 pubblici e 11 privati, 381 posti autorizzati (89 pubblici). Per tipologia: nidi 9 (1 pubblico, 8 privati), sezioni primavera 3 (1 pubblica, 2 private), spazi gioco 1 (privato). [fatto]
- **MIM 2026/27** ([[MIM - Anagrafe scuole statali e paritarie]]): **22 scuole dell'infanzia**, 16 statali (plessi di 5 istituti comprensivi) e 6 paritarie. [fatto]

## Elenco vero 0-3
Fonti: **Reg** = [[Regione Puglia - Registro strutture e servizi]] (CSV 2023); **Cat** = [[Regione Puglia - Catalogo telematico zerosei]] (export del 2026-11-20, avviso 2026/27); **MIM** = anagrafe (solo per le sezioni primavera annesse a paritarie); **Web** = ricerche web e siti dei gestori; **Com** = sito del Comune (non leggibile).

| # | Struttura | Tipologia | Titolarità | Indirizzo | Reg | Cat | MIM | Web | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Asilo nido comunale | nido (59 posti) | pubblica | via Don Minzoni | sì | no | – | sì (estratto: carta dei servizi della mensa comunale) | nel registro la natura del titolare è "privata" (probabile errore o gestore) |
| 2 | Sezione primavera del nido comunale | sezione primavera (20) | pubblica | via Don Minzoni | sì | no | – | no | |
| 3 | Sezione primavera annessa alla scuola dell'infanzia E. De Amicis | sezione primavera (20) | pubblica | viale Papa Giovanni XXIII | sì (2 righe, 2008 e 2012) | no | plesso statale presente, sezione no | no | attività attuale non verificata |
| 4 | Sezione primavera c/o scuola dell'infanzia "M. Montessori" | sezione primavera (20) | pubblica | viale Gramsci | sì | no | plesso presente (indirizzo MIM: via Maggialetti) | no | attività attuale non verificata |
| 5 | Baby Planet - via Moscati | nido (25) | privata | via S. Giuseppe Moscati 94 | sì | sì | – | no | |
| 6 | Baby Planet - via Almirante | nido | privata | via G. Almirante 12-16 | no | sì | – | no | apertura dopo il 2023 [stima] |
| 7 | Tutti giù per terra | nido (50) | privata | via Olivetti 17 | sì | sì | – | no | |
| 8 | Raggio di Luce - nido | nido (30) | privata | via S. Fontana 14 | sì | sì | – | no | |
| 9 | Raggio di Luce - sezione primavera | sezione primavera (14) | privata | via S. Fontana 14/A | sì | sì | sì (paritaria infanzia omonima) | no | |
| 10 | L'Amaca | micronido (20) | privata | Reg: via Goerlitz 12; Cat: via Mons. Bello 20 | sì | sì | – | no | indirizzo cambiato |
| 11 | L'Amaca - servizio domiciliare | servizio per l'infanzia a domicilio (art. 101a) | privata | via Goerlitz 12 | sì | no | – | no | attività attuale non verificata |
| 12 | Hakuna Matata | nido (23) | privata | via G. Mameli 72 | sì | sì | – | no | |
| 13 | Baby Fun by Hakuna Matata | nido (30) | privata | Reg: zona industriale (Fashion District); Cat: via dei Portuali 12 | sì | sì | – | no | indirizzo cambiato |
| 14 | L'isola di Peter Pan / Peter Pan impresa sociale - nido | nido (50) | privata | via Sibilla Aleramo 26 | sì (3 righe 2009, 2015, 2022) | sì | – | sì (sito del gestore) | |
| 15 | Micronido L'isola di Peter Pan | micronido | privata | via Baccarini 19 | no | sì | – | no | |
| 16 | Piccole Orme - scuola in natura | nido | privata | strada vicinale Torre Villotta | no | sì | – | no (ricerca senza esito) | nido all'aperto, segmento outdoor |
| 17 | Centro ludico prima infanzia L'isola di Peter Pan | centro ludico (art. 90) (16) | privata | via Baccarini 17-19 | sì | sì | – | sì (sito e carta dei servizi) | = "spazio gioco" ISTAT |
| 18 | Valentina | micronido (13) | privata | via S. Pertini 68 | sì | sì | – | sì (carta dei servizi su portale tirocini Uniba) | |
| 19 | Il Giardino dei colori - sezione primavera | sezione primavera | privata | viale XXV Aprile 3 | no | sì | sì (paritaria infanzia) | no | |
| 20 | Fratelli Attanasio - sezione primavera | sezione primavera | privata (religiosa) | via M. d'Azeglio 34 | no | sì | sì (paritaria infanzia) | no | |

Posti tra parentesi: ricettività dichiarata nel registro 2023. [fatto per presenza nelle fonti; stima per "attività attuale" delle righe solo nel registro]

## Elenco vero 3-6
Fonte unica utile: anagrafe MIM 2026/27. **16 statali**: IC Azzollini-Giaquinto (via Salvemini, via Papa Giovanni XXIII), IC Manzoni-Poli (Don Milani, Agazzi, San Pio, P. Harris), IC Battisti-Pascoli (Ten. Lusito, Filippetto, Zona Levante), IC Scardigno-Savio (Maria Montessori, Jean Piaget, Aldo Capitini), IC San Giovanni Bosco (Madre Teresa di Calcutta, Gianni Rodari, De Amicis, Papa Giovanni XXIII). **6 paritarie**: Fratelli Attanasio, SS. Nome di Gesù, L'isola di Peter Pan, Santa Maria Goretti, Raggio di Luce, Il Giardino dei Colori. [fatto]
- Scuole comunali dell'infanzia: nessuna trovata.
- Non paritarie: **non trovate**; l'elenco regionale USR Puglia 2026/27 delle non paritarie non è stato reperito (si trovano solo gli aggiornamenti delle paritarie, novembre 2026).
- Ricerche web e siti dei gestori: nessuna scuola in più. Il sito di Peter Pan conferma 2 sezioni di infanzia paritaria, 47 posti, accesso da 2 anni e mezzo.

## Copertura per fonte
| Fonte | 0-3 trovate / 20 | % | 3-6 trovate / 22 | Note |
|---|---|---|---|---|
| ISTAT 2024 (solo conteggio) | 13 attese | – | – | nessun nome; 7 unità in meno dell'elenco vero |
| Registro regionale Puglia (2023) | 15 | 75% | 0 | 18 righe per 15 unità (duplicati storici); tutte le pubbliche; fermo a maggio 2023 |
| Catalogo zerosei 2026/27 | 15 | 75% (privati 15/16 = 94%) | 0 (ma 3 sezioni primavera di paritarie) | nessuna struttura pubblica; contatti del gestore |
| Registro + catalogo | 20 | 100% | 0 | l'unione è l'elenco vero |
| MIM anagrafe | 3 (solo come scuola che ospita la sezione primavera) | 15% | 22 | |
| Sito del Comune | 0 | 0% | 0 | bloccato da protezione anti-bot |
| INPS Agenda asili nido / mappa | non verificabile | – | – | solo con SPID ([[INPS - Agenda asili nido e mappa Bonus nido]]) |
| Ricerche web e siti dei gestori | 4 (confermano strutture già note) | 20% | 1 | **0 strutture trovate solo con il web** |

## Trovate solo con ricerche web
Nessuna. Su 6 ricerche web mirate, i risultati riguardavano quasi solo altre città; le uniche pagine di Molfetta erano documenti del Comune (non apribili) e carte dei servizi di gestori già noti. Il motore di ricerca disponibile indicizza male le piccole strutture locali, quindi questo risultato **non dimostra** che non esistano servizi fuori dalle fonti regionali (per esempio baby parking o ludoteche non autorizzate). [fatto per l'esito; stima per l'interpretazione]

## Attese ma non trovate
Nessuna: l'elenco vero (20) supera il conteggio ISTAT (13). Possibili spiegazioni [stima]: 5 unità del catalogo aperte o trasferite dopo il 2024; le 2 sezioni primavera statali (righe 3-4) e il servizio domiciliare (riga 11) forse non più attivi; ISTAT conta 1 sola sezione primavera pubblica e nessun servizio domiciliare.

## Campi disponibili (campione)
| Struttura | Rette | Orari | Età | Posti | Scadenze | Progetto pedagogico | Lingua | Inclusione | Dove |
|---|---|---|---|---|---|---|---|---|---|
| Asilo nido comunale | non trovato | non trovato | non trovato | 59 (registro) | non trovato (avviso 2026/27 non letto: sito bloccato) | non trovato | – | non trovato | registro; sito comunale illeggibile |
| Valentina (micronido) | sì: tempo pieno 800/500/400 € al mese per lattanti/semidivezzi/divezzi, part-time 400/350/250 € (carta non datata, caricata nel 2019) | 8:00-15:00, uscita part-time 12-13 | 3-36 mesi | 13 | iscrizioni tutto l'anno | sì (spazi per fascia d'età) | – | sì: punteggio per disabilità nel nucleo | carta dei servizi sul portale tirocini Uniba |
| L'isola di Peter Pan (nido, infanzia, centro ludico) | non trovato | nido lun-ven 8:00-14:30, sab 8:00-13:30; infanzia 8:00-16:00; spazio ludico 16:00-20:00 | nido 3-36 mesi; infanzia da 2,5 anni | infanzia 47 (sito); nido 50 (registro) | non trovato | sì (progetto con la cattedra di pedagogia sperimentale Uniba) | educazione linguistica generica | non trovato | sito del gestore; carta dei servizi 2022 |
| Baby Planet (nido) | non trovato | non trovato | – | 25 (registro, sede via Moscati) | – | non trovato | – | – | registro, catalogo (contatti) |
| Scuola statale "Gianni Rodari" (IC San Giovanni Bosco) | gratuita (statale) | non verificato | 3-6 | non in anagrafe; bambini per scuola nei dataset MIM 2024/25 | iscrizioni nazionali di gennaio | sul sito dell'istituto (non letto) | – | – | MIM (indirizzo, sito istituto) |

## Fonti consultate
| Fonte | URL | Accesso | Letta | Esito |
|---|---|---|---|---|
| ISTAT servizi 0-3 per comune | https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.072029....?startPeriod=2023 | 2026-11-20 | sì | 13 servizi, 381 posti |
| ISTAT popolazione | https://esploradati.istat.it/SDMXWS/rest/data/IT1,22_289,1.0/A.072029.JAN.9.TOTAL.99?startPeriod=2025 | 2026-11-20 | sì | 57.229 |
| MIM anagrafe statali e paritarie 2026/27 | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/SCUANAGRAFESTAT20262720260901.csv (e ...PAR...) | 2026-11-20 | sì | 22 scuole |
| Registro regionale Puglia | https://dati.puglia.it/ckan/dataset/bffa2d3d-c0b4-4fc9-a96c-7104a272ed38/resource/7aa651c7-b536-494e-861e-2adbcf798223/download/registri2023od.csv | 2026-11-20 | sì | 18 righe 0-3 a Molfetta |
| Catalogo zerosei 2026/27 (export Excel) | https://www.studioinpuglia.regione.puglia.it/bs/udo_tevlist.php?cmd=search&t=udo_tev&z_cas_avv=%3D&x_cas_avv=10001 | 2026-11-20 | sì | 15 unità a Molfetta (565 righe in tutto) |
| Sito del Comune di Molfetta | https://www.comune.molfetta.ba.it/ (e PDF della carta dei servizi Socialità 2026, delibera commissariale 54/2026) | 2026-11-20 | **no** | HTTP 403, challenge anti-bot; contenuti noti solo da estratti di ricerca |
| Sito L'isola di Peter Pan | https://peterpanmolfetta.wordpress.com/ | 2026-11-20 | sì | servizi, età, posti infanzia |
| Carta dei servizi Peter Pan 2022 | https://portiamovalore.uniba.it/uploads/aziende/CARTA%20DEI%20SERVIZI%202022_1647278066.pdf | 2026-11-20 | sì | orari |
| Carta dei servizi micronido Valentina | https://portiamovalore.uniba.it/uploads/aziende/Carta%20servizi%20Regione%20Puglia_03_1564155505.pdf | 2026-11-20 | sì | rette, orari, posti, criteri |
| Sito Koinos (gestore Hakuna Matata) | http://www.koinos-coop.it/ | 2026-11-20 | no | errore del server (HTTP 999) |
| Ricerche web (6) | – | 2026-11-20 | – | nessuna struttura nuova |

## Cosa resta aperto
- Leggere il sito del Comune da un browser normale: avviso iscrizioni 2026/27 del nido comunale, rette, carta dei servizi Socialità 2026, eventuale albo delle strutture accreditate.
- Verificare se le sezioni primavera statali (righe 3-4) e il servizio domiciliare L'Amaca sono attivi.
- Elenco USR Puglia delle scuole non paritarie 2026/27.
- Ricerca su mappe (Google Maps) di baby parking e ludoteche non autorizzate: non fatta.
