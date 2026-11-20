# 05 — Screening B2C: sintesi

Dettaglio, evidenze e fonti: `docs/research/05-screening-b2c-a.md` e `docs/research/05-screening-b2c-b.md`. Data: 2026-11-20.
Questa volta le pagine sono state lette direttamente. Per il gruppo A, ipotesi e criteri di scarto sono stati scritti e salvati in un commit separato prima di raccogliere le evidenze.

> **Limiti.** Google Trends (errore 429) e Reddit (errore 403) bloccano le richieste automatiche da questo ambiente. **La domanda (C2) è stimata solo con autocompletamento e SERP; il dolore (C1) ha poche evidenze dirette. La stagionalità non è misurata.**

## Esito

### Passano allo scoring
| ID | Candidato | Forza | Nota |
|---|---|---|---|
| T1 | Rifugi e sentieri: aperture, prenotazioni, condizioni | PASS | Il dato fresco batte i chatbot; rischio: portale CAI e app outdoor dominanti |
| M1 | Regole ZTL per città | PASS | Long-tail confermata su 23 località su 23; incumbent diretto ZigZag (26 città, 4,7★, versione Pro); pagatore: affiliazione noleggi |
| F3 | Centri estivi | PASS debole | 20 comuni su 20 nell'autocompletamento, ~250 varianti; visibilità venduta a 20-200 €; stagionalità estrema |
| #4+N3 | Concorsi + tracker delle candidature | PASS debole | inPA senza alert né stato candidature (app 3,29★); premium a 4,99 €/mese, affiliazione corsi 10%; fonte unica, SEO presidiata, IO annuncia "Bandi di concorso" |
| H1 | Calendario rifiuti per comune | PASS debole | Dati pubblici per obbligo ARERA; pagatore B2G già occupato da Junker e altri |
| A1 | Regole per cani | PASS debole | Spiagge.it presidia la parte che rende; stagionale |
| GN1 | Gioco: prezzo della spesa | PASS (giochi) | — |
| GN5 | Gioco semantico quotidiano in italiano | PASS (giochi) | — |

### Incerti (da decidere se portare allo scoring)
| ID | Candidato | Dubbio |
|---|---|---|
| F1 | Nidi: iscrizioni, graduatorie, scadenze | Domanda c'è (20 comuni su 20, oltre 170 varianti, risposte AI contraddittorie), ma **nessun pagatore con cifra pubblica** e lo spazio si sta chiudendo: IO ha un modello "Asilo nido" (~1.480 comuni) e INPS prepara la mappa dei nidi |
| #9 | RSA | Dolore e domanda forti (retta media oltre 2.000 €/mese, 115 giorni di attesa media), ma nessun listino per lead; i lead per avvocati sono vietati dal codice deontologico |
| F5 | Attività extrascolastiche | Long-tail per quartiere sottile, nessun listino |
| #18+N11 | Lavoro + annunci fantasma | G1: possibile autorizzazione all'intermediazione (D.Lgs. 276/2003), serve un parere |
| #20 | Bollette | SERP dei comparatori, nessuna long-tail per comune, regole AGCM severe |
| #19 | Prezzi supermercati | Cataloghi protetti; la domanda va sui volantini (ShopFully) |
| T2 | Spiagge e acque | Fonte unica, stagionalità estrema |
| N13 | Software per gestori camper | I gestori pagano per il pubblico, non per il software |
| #28 | Sagre | Ticket basso, modello già esistente |
| GN3 | Gioco "Più o meno, Italia" | Italiadle ha già una modalità simile |

### Scartati
| ID | Candidato | Motivo |
|---|---|---|
| F2 | Calendario burocratico familiare | Nessuno cerca il prodotto; avvisi già dati da IO e BonusX |
| F4 | Pediatri con posti liberi | Il problema è la carenza di pediatri, non l'informazione; nessun pagatore |
| #32 | Libri scolastici usati | Libraccio, RiAdotta e altri fanno già tutto gratis; affiliazione 3,7-5% |
| C1 | Trova-bonus personale | BonusX: oltre 700 bonus, oltre 850 mila utenti, Trustpilot 4,8; INPS proattiva |
| #10 | Tempi di attesa sanitari | Dati per struttura solo nel CUP con impegnativa |
| M2 | Scadenze del veicolo | Confronto polizze = distribuzione assicurativa (iscrizione IVASS) |
| #31+N14 | Treni e indennizzi | Mercato piccolo, nessun pagatore, operatori che automatizzano |
| #26 | Camper lato utenti | Banche dati utili dei concorrenti e protette |
| #29 | Musei | Già coperto da Stato e Arte.it; affiliazione 0,5-2 € a biglietto |
| GN4 | Gioco quotidiano sui comuni | Italiadle esiste già |

## Nuovi candidati emersi (rinumerati)
| ID | Candidato | Da |
|---|---|---|
| N16 | Calcolatore della quota RSA tra famiglia, Comune e SSN, per comune | A |
| N17 | Tasse universitarie, fasce ISEE e scadenze per ateneo (199 varianti nell'autocompletamento) | A |
| N18 | Interpelli e supplenze scolastiche per provincia (gruppo Telegram ATA con 9.267 membri) | A |
| N19 | Tari per comune: tariffe, riduzioni, scadenze | B |
| N20 | Mete naturali a numero chiuso: pass e parcheggi da prenotare, avvisi sulle aperture | B |
| N21 | Contestazione delle spese di gestione multe dei noleggiatori | B |

## Cosa abbiamo imparato (trasversale)
1. **Lo scarto più frequente è "esiste già".** BonusX, Libraccio, ZigZag, Spiagge.it, Italiadle. Il B2C informativo italiano è più presidiato di quanto sembri.
2. **Lo Stato è un concorrente in espansione.** L'app IO aggiunge servizi (nidi, concorsi) e INPS diventa proattiva. Il gruppo famiglia ne è il più colpito.
3. **La monetizzazione è il punto debole di tutto il B2C.** Nel gruppo A nessun candidato supera 3 su 5 in C3. I modelli che hanno cifre reali sono affiliazione nel turismo (noleggi, prenotazioni), visibilità venduta alle strutture e premium a pochi euro al mese.
4. **Ipotesi emergente (da verificare, non ancora una conclusione):** i candidati più solidi condividono un tratto, cioè **regole e disponibilità locali che cambiano spesso e servono a chi si sposta** (ZTL, rifugi, mete a numero chiuso, regole per cani, spiagge). Uniti in un unico prodotto per chi viaggia in Italia aumenterebbero le pagine indicizzabili e passerebbero dall'affiliazione turistica, che rende più del resto.
5. **Sul gruppo famiglia, in modo neutro:** la domanda c'è (F1, F3), ma i dati dicono che manca un pagatore e che lo Stato sta chiudendo lo spazio. Il miglior candidato del gruppo è F3 (centri estivi), solo PASS debole.

## Prossimo passo: scoring alla cieca
Candidati proposti: T1, M1, F3, #4+N3, H1, A1, F1, #9, N20, N16, N17 + traccia giochi GN1, GN5. Da fare prima o durante lo scoring: misurare stagionalità e dolore con fonti che non bloccano.
