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
| F01 Elenco 0-6 per zona | parziale | 3-6 su tutta Italia (anagrafe MIM, 21.445 scuole); 0-3 solo Lombardia (registro regionale, 2.707). Ogni scheda riporta fonte, licenza e data. |
| F02 Scheda della struttura | parziale | Anagrafica, tipologia, gestione (solo con evidenza), posti (Lombardia), contatti istituzionali. Mancano orari, età accolte, abilitazione al Bonus nido. |
| F04 Calcolatore del costo netto | prima versione | Bonus nido INPS su tutta Italia; Nidi Gratis Plus in Lombardia. Le condizioni non note (convenzione, adesione del Comune, lavoro dei genitori) restano "da verificare" e non entrano nel costo certo. |

## Dati (import del 22/11/2026)
| Fonte | Strutture | Con coordinate |
|---|---|---|
| [[MIM - Anagrafe scuole statali e paritarie]] | 21.445 | 20.675 (96,4%) da [[MIM - Scuola in Chiaro]] |
| [[Regione Lombardia - Strutture di offerta sociale prima infanzia]] | 2.707 | 2.414; i 291 nidi famiglia volutamente senza coordinate |

- Controllo delle coordinate: 58 scuole su 17.406 controllabili cadono a più di 25 km dalla mediana del loro comune (0,3%): da verificare, per esempio con l'archivio dei numeri civici ANNCSU.
- 770 scuole dell'infanzia non hanno coordinate nemmeno in Scuola in Chiaro.
- Gestione in Lombardia: 519 comunali, 30 altri enti pubblici, 1.755 private (forma giuridica nel nome del gestore), 403 non note.

## Regole del calcolatore (verificate sui testi originali)
- **Bonus nido 2026** ([circolare INPS 29/2026](https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/03/Circolare_15207/Allegati/16651_Circolare-numero-29-del-27-03-2026.pdf)): nati dal 1/1/2024: 3.600 euro con ISEE neutralizzato fino a 40.000, altrimenti 1.500. Nati prima: 3.000 fino a 25.000,99; 2.500 da 25.001 a 40.000; 1.500 oltre o senza ISEE. ISEE neutralizzato = ISEE per specifiche prestazioni familiari meno Assegno unico diviso per la scala di equivalenza. Rimborso mensile mai oltre la retta, massimo 11 mensilità; non cumulabile con la detrazione del 19%. Servizi ammessi: nidi, micronidi, sezioni primavera, spazi gioco, servizi domiciliari; esclusi i centri per bambini e famiglie. Il decreto lavoro di luglio 2026 (D.L. 62/2026) cambia la comunicazione delle strutture all'INPS, non gli importi.
- **Nidi Gratis Plus 2026/27** ([D.G.R. XII/6201/2026](https://anci.lombardia.it/documenti/23510-DGR_6201_2026.pdf), allegato A): ISEE minorenni o per specifiche prestazioni familiari fino a 25.000; almeno un genitore occupato o disoccupato con DID e PSP; nidi, micronidi e nidi famiglia pubblici o privati in convenzione con un Comune ammesso. Fino a 20.000 di ISEE copre tutta la retta oltre l'importo INPS della prima fascia (272,73 o 327,27 euro al mese); da 20.000,01 a 25.000 fino a 100 euro al mese; 11 mensilità; il contributo va al Comune.
- Limite: l'elenco dei Comuni ammessi a Nidi Gratis Plus non è pubblico (vedi [[Regione Lombardia - Nidi Gratis Plus]]); il convenzionamento dei nidi privati non è nelle fonti.

## Prossimi passi
1. Altre regioni 0-3 con dati aperti (Friuli-Venezia Giulia, Puglia, Piemonte, Toscana, Lazio, Trento, Bolzano) e comuni con open data.
2. Geocodifica degli indirizzi senza coordinate con l'archivio dei numeri civici (ANNCSU), dopo la verifica di licenza e accesso.
3. Sito pubblico (proposta: Next.js con pagine per comune).
