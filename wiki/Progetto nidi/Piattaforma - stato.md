---
tipo: progetto
tags: [progetto, nidi, piattaforma]
aggiornato: 2026-11-22
---
# Piattaforma - stato

Il codice è in `piattaforma/backend/` (istruzioni nel README della cartella). Decisioni in [[Decisioni del progetto]]; funzioni in [[Bisogni e funzioni]].

## Funzioni costruite
| Funzione | Stato | Note |
|---|---|---|
| F01 Elenco 0-6 per zona | parziale | 3-6 su tutta Italia (anagrafe MIM, 21.445 scuole); 0-3 in Lombardia (2.707), Piemonte (1.148, comprese 179 sezioni primavera) e Friuli-Venezia Giulia (341). Ogni scheda riporta fonte, licenza e data. Sito pubblico con ricerca per comune, mappa e schede. |
| F02 Scheda della struttura | parziale | Anagrafica, tipologia, gestione (solo con evidenza), posti, contatti istituzionali; in FVG anche età accolte, accreditamento e adesione all'abbattimento rette. Mancano orari, rette, abilitazione al Bonus nido. |
| F04 Calcolatore del costo netto | prima versione | Bonus nido INPS su tutta Italia; Nidi Gratis Plus in Lombardia. Le condizioni non note (convenzione, adesione del Comune, lavoro dei genitori) restano "da verificare" e non entrano nel costo certo. |

## Dati (import del 22/11/2026)
| Fonte | Strutture | Con coordinate |
|---|---|---|
| [[MIM - Anagrafe scuole statali e paritarie]] | 21.445 | 20.675 (96,4%) da [[MIM - Scuola in Chiaro]] |
| [[Regione Lombardia - Strutture di offerta sociale prima infanzia]] | 2.707 | 2.414; i 291 nidi famiglia volutamente senza coordinate |
| [[Regione Piemonte - Anagrafe servizi prima infanzia]] (PDF letto con le posizioni del testo) | 1.148 | 0: indirizzi presenti, geocodifica da fare |
| [[Regione FVG - Registro servizi prima infanzia attivi]] | 341 | 0: la fonte non ha indirizzi |

- Controllo delle coordinate: 58 scuole su 17.406 controllabili cadono a più di 25 km dalla mediana del loro comune (0,3%): da verificare, per esempio con l'archivio dei numeri civici ANNCSU.
- 770 scuole dell'infanzia non hanno coordinate nemmeno in Scuola in Chiaro.
- Gestione in Lombardia: 519 comunali, 30 altri enti pubblici, 1.755 private (forma giuridica nel nome del gestore), 403 non note.

## Regole del calcolatore (verificate sui testi originali)
- **Bonus nido 2026** ([circolare INPS 29/2026](https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/03/Circolare_15207/Allegati/16651_Circolare-numero-29-del-27-03-2026.pdf)): nati dal 1/1/2024: 3.600 euro con ISEE neutralizzato fino a 40.000, altrimenti 1.500. Nati prima: 3.000 fino a 25.000,99; 2.500 da 25.001 a 40.000; 1.500 oltre o senza ISEE. ISEE neutralizzato = ISEE per specifiche prestazioni familiari meno Assegno unico diviso per la scala di equivalenza. Rimborso mensile mai oltre la retta, massimo 11 mensilità; non cumulabile con la detrazione del 19%. Servizi ammessi: nidi, micronidi, sezioni primavera, spazi gioco, servizi domiciliari; esclusi i centri per bambini e famiglie. Il decreto lavoro di luglio 2026 (D.L. 62/2026) cambia la comunicazione delle strutture all'INPS, non gli importi.
- **Nidi Gratis Plus 2026/27** ([D.G.R. XII/6201/2026](https://anci.lombardia.it/documenti/23510-DGR_6201_2026.pdf), allegato A): ISEE minorenni o per specifiche prestazioni familiari fino a 25.000; almeno un genitore occupato o disoccupato con DID e PSP; nidi, micronidi e nidi famiglia pubblici o privati in convenzione con un Comune ammesso. Fino a 20.000 di ISEE copre tutta la retta oltre l'importo INPS della prima fascia (272,73 o 327,27 euro al mese); da 20.000,01 a 25.000 fino a 100 euro al mese; 11 mensilità; il contributo va al Comune.
- Limite: l'elenco dei Comuni ammessi a Nidi Gratis Plus non è pubblico (vedi [[Regione Lombardia - Nidi Gratis Plus]]); il convenzionamento dei nidi privati non è nelle fonti.

## Prossimi passi
1. Altre fonti 0-3: Puglia (registro CSV del 2023 e catalogo zerosei 2026/27), Trento, Bolzano, comuni con open data (Roma, Napoli, Palermo, Bologna, Genova, Firenze…). Lazio e Toscana non hanno un elenco attuale per struttura: servono le richieste di accesso civico.
2. Geocodifica degli indirizzi senza coordinate con l'archivio dei numeri civici (ANNCSU), dopo la verifica di licenza e accesso.
3. Sito pubblico (proposta: Next.js con pagine per comune).

## Geocodifica (23/11/2026)
Stradario dei civici fornito dall'utente (export del 23/11/2026, 107 province): ANNCSU (aggiornamento del 02/11/2026) integrato con fonti regionali e comunali (Piemonte, Torino, Toscana, Lombardia, Bari, Puglia, Sicilia, Sardegna) e con OpenStreetMap. I file restano in `data/raw/civici-utente/` e non entrano in git né nel database del sito.

- Comando: `npm run import -- geocodifica`. Lavora solo sulle strutture con indirizzo e senza coordinate, esclusi i servizi domiciliari (indirizzo = abitazione di una persona).
- Abbinamento a livelli, con la precisione salvata sulla struttura (`posizionePrecisione`): civico esatto, civico vicino sullo stesso lato della via (entro 10 numeri), oppure solo via, ma solo se la via è corta (raggio sotto i 750 m).
- Controlli contro gli errori: tipi di via diversi solo nella stessa famiglia (via/strada, località/frazione, piazza/largo); due vie ugualmente compatibili = nessun abbinamento; punti fuori dall'area del comune scartati (in qualche comune lo stradario ha civici con coordinate in un'altra regione, es. Scillato).
- Verifica su 2.100 scuole statali con coordinate ufficiali: distanza mediana 43 m al civico, 74 m al civico vicino, 87 m alla via. Gli scarti oltre 5 km (circa 2%) sono in buona parte errori delle coordinate ufficiali di riferimento.
- Risultato: 5.147 strutture geocodificate su 6.456 senza coordinate (80%); strutture fisiche con coordinate dal 77% al **92%**. Restano fuori soprattutto Puglia (464), Campania (336), Toscana (120) e Lazio (101), dove lo stradario è rado in alcuni comuni, e la Valle d'Aosta, dove ha civici solo per 65 comuni.
- **Da chiarire per la pubblicazione:** OpenStreetMap (ODbL) richiede l'attribuzione "© OpenStreetMap contributors"; vanno verificate le licenze delle fonti regionali e comunali dei civici. Ogni coordinata conserva la sua fonte (`posizioneFonte`), così la pagina delle fonti può citarle.
