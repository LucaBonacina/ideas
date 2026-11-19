# 02 — Long list (v1, NON ancora valutata)

Prima passata generata dalle fonti del metodo. Ogni riga è un'**ipotesi**: gli incumbent indicati e i problemi ipotizzati vanno verificati nella fase di screening.
Modelli: **A** concorrente diretto · **B** strato sopra dati pubblici/esistenti · **D** verticale preso da un portale generalista · **E** gioco/prodotto. (Il modello C, rifare il sito per il proprietario, è tenuto fuori: è consulenza, non prodotto.)

## Dati pubblici e PA (Italia)
| # | Candidato | Mod. | Utente/pagatore | Ipotesi di miglioramento | Fonti dati |
|---|---|---|---|---|---|
| 1 | Aste giudiziarie immobiliari | B | Investitori, privati, agenzie | Ricerca moderna, alert, stima del valore vs prezzo base, storico dei ribassi, sintesi AI delle perizie (PDF) | Portale Vendite Pubbliche, siti dei gestori delle aste, dati OMI |
| 2 | Gare d'appalto pubbliche | B | PMI, consulenti | Ricerca semantica, matching con il profilo aziendale, alert, sintesi dei capitolati, storico dei vincitori | ANAC (open data), TED, piattaforme regionali |
| 3 | Bandi e finanziamenti agevolati | B | PMI, commercialisti, consulenti | Un solo posto per bandi nazionali/regionali/camerali, verifica di idoneità, scadenze | Siti di Regioni, Invitalia, Camere di commercio, MIMIT |
| 4 | Concorsi pubblici | B | Candidati (B2C), editori di corsi | Ricerca e alert per profilo, requisiti chiari, storico delle prove, materiale di studio | inPA, Gazzetta Ufficiale, siti degli enti |
| 5 | Albi pretori comunali aggregati | B | Imprese edili, fornitori, giornalisti, consulenti | Alert su delibere, permessi edilizi, varianti: lead per fornitori | Albi pretori (migliaia di siti diversi) |
| 6 | Chi ha ricevuto fondi pubblici (lead gen) | B | Venditori B2B | Aziende appena finanziate = clienti con budget | RNA, OpenCoesione, decreti di concessione |
| 7 | Procedure concorsuali e aziende in crisi | B | Investitori, fornitori, legali | Alert su controparti, opportunità di acquisto di asset | Portali dei fallimenti, tribunali, aste mobiliari |
| 8 | Scuole: confronto per genitori | B | Genitori (B2C), scuole paritarie (pubblicità) | Confronto chiaro, mappa, dati INVALSI/esiti, recensioni | Scuola in Chiaro, open data MIM |
| 9 | Asili nido, RSA, centri diurni | A/B | Famiglie (B2C), strutture (lead/listing) | Disponibilità, rette, recensioni, confronto | Registri regionali, siti delle strutture |
| 10 | Tempi di attesa sanitari (CUP) | B | Pazienti (B2C), strutture private (lead) | Dove trovo prima una visita, pubblico vs privato | Portali regionali dei tempi di attesa |
| 11 | Normativa e giurisprudenza con AI | B | Professionisti (avvocati, commercialisti) | Ricerca in linguaggio naturale, alert sulle modifiche, a prezzo più basso degli editori giuridici | Normattiva, Gazzetta Ufficiale, sentenze pubbliche |
| 12 | Marchi e brevetti | B | PMI, consulenti in proprietà industriale | Ricerca di anteriorità, sorveglianza dei marchi | UIBM, EUIPO, WIPO |

## Dati pubblici e PA (UE / internazionale)
| # | Candidato | Mod. | Utente/pagatore | Ipotesi | Fonti dati |
|---|---|---|---|---|---|
| 13 | Finanziamenti UE (Horizon, LIFE, Interreg…) | B | PMI, università, consulenti | Il portale ufficiale delle opportunità di finanziamento UE è notoriamente difficile: matching, ricerca partner, sintesi | Portale Funding & Tenders, CORDIS |
| 14 | Gare d'appalto pan-UE | B | PMI esportatrici | Traduzione AI, matching, alert multilingua | TED + portali nazionali |
| 15 | Studi clinici per pazienti | B | Pazienti, associazioni, sponsor (reclutamento) | Ricerca comprensibile, "per cui sono idoneo" | Registri UE/USA degli studi clinici |

## Verticali di mercato (scraping di annunci/prezzi)
| # | Candidato | Mod. | Utente/pagatore | Ipotesi | Fonti dati |
|---|---|---|---|---|---|
| 16 | Meta-ricerca di immobili con storico dei prezzi | A | Chi compra o affitta casa | Deduplica tra portali, storico dei ribassi, giorni sul mercato, valutazione | Portali immobiliari, siti delle agenzie |
| 17 | Auto usate: valutazione e storico | A | Acquirenti, venditori privati | "È un buon prezzo?", storico dell'annuncio, deduplica | Portali di auto, siti delle concessionarie |
| 18 | Lavoro con dati veri | A | Candidati (B2C), aziende (job post) | Retribuzione stimata, lavoro da remoto vero, deduplica, annunci fantasma | Siti carriere delle aziende, portali di lavoro |
| 19 | Prezzi dei supermercati e spesa | A | Consumatori, brand (insight) | Confronto del carrello, storico dei prezzi, "shrinkflation" | E-commerce della GDO, volantini |
| 20 | Bollette luce e gas | B | Consumatori; pagano i fornitori (lead) | Analisi della bolletta via upload, alert sul cambio | Portale Offerte ARERA, siti dei fornitori |
| 21 | Prezzi carburanti | B | Automobilisti, flotte (B2B) | Per le flotte: costi, percorsi, report | Open data MIMIT |
| 22 | Ricambi auto/moto/elettrodomestici | D | Consumatori, officine | Ricerca per codice/compatibilità tra molti negozi | E-commerce di ricambi |
| 23 | Usato di nicchia (bici, strumenti musicali, fotografia, orologi) | D | Appassionati | Aggregatore con storico prezzi e alert | Marketplace, forum, negozi |
| 24 | Database aziende per vendite B2B (verticale) | A | Venditori, agenzie | Liste di aziende arricchite (tecnologie usate, assunzioni, segnali) per settore | Siti delle aziende, annunci di lavoro, registri |
| 25 | Fiere ed eventi B2B | B | Espositori, visitatori, venditori | Calendario completo, liste di espositori → lead | Siti delle fiere |

## Consumer e tempo libero
| # | Candidato | Mod. | Utente/pagatore | Ipotesi | Fonti dati |
|---|---|---|---|---|---|
| 26 | Aree di sosta e campeggi per camper/van | A | Camperisti; pagano le strutture | App esistenti con problemi di qualità dei dati e di abbonamento | Siti dei campeggi, mappe aperte, recensioni |
| 27 | Calcio e sport dilettantistico | B | Giocatori, genitori, società | Risultati, classifiche, statistiche dei giocatori; pubblicità locale | Siti delle federazioni e dei comitati |
| 28 | Eventi locali e sagre | B | Famiglie, turisti; pagano gli organizzatori | Calendario completo e filtrabile | Siti dei comuni, Pro Loco, social |
| 29 | Mostre e musei | B | Turisti, appassionati | Cosa vedere ora, biglietti, orari aggiornati | Siti dei musei |
| 30 | Disponibilità di campi sportivi (padel, tennis, calcetto) | A | Giocatori; pagano i circoli | Meta-ricerca tra sistemi di prenotazione diversi | Piattaforme di prenotazione |
| 31 | Ritardi treni e rimborsi | B | Pendolari | Statistiche dei ritardi, richiesta di rimborso assistita | Dati in tempo reale dei vettori |
| 32 | Libri scolastici usati | D | Famiglie | Lista ISBN per classe → miglior prezzo usato/nuovo | Adozioni (open data MIM), marketplace |

## B2B verticale / strumenti
| # | Candidato | Mod. | Utente/pagatore | Ipotesi | Fonti dati |
|---|---|---|---|---|---|
| 33 | Monitoraggio prezzi dei concorrenti per e-commerce di nicchia | A | E-commerce PMI | Strumenti esistenti costosi o generici: verticalizzare (es. ricambi, cosmetica) | Siti dei concorrenti |
| 34 | Monitoraggio delle recensioni locali e della reputazione | A | Ristoranti, hotel, studi professionali | Tutte le piattaforme in un posto, risposte AI | Piattaforme di recensioni |
| 35 | Monitoraggio dei bandi di ricerca e dei finanziamenti per università | B | Uffici di ricerca | Matching tra ricercatori e bandi | Portali dei finanziatori |
| 36 | Monitoraggio di cantieri e permessi → lead edilizia | B | Fornitori edili, serramentisti, impianti | Nuovi permessi = clienti futuri | Albi, SUE comunali, cartelli di cantiere |
| 37 | Due diligence fornitori/controparti | A | Uffici acquisti PMI | Sintesi da fonti pubbliche: notizie, procedure, appalti vinti | Fonti pubbliche varie |

## Giochi (traccia separata)
| # | Candidato | Mod. | Ipotesi |
|---|---|---|---|
| 38 | Giochi quotidiani di parole/logica in italiano | E | Formato daily virale, poca offerta di qualità in italiano |
| 39 | Giochi educativi basati su dati reali (geografia, prezzi, storia) | E | Gli asset di dati diventano gameplay |
| 40 | Gestionali/idle in nicchie verticali | E | Genere molto giocato, giudicabile su meccaniche e retention |

## Da aggiungere nella prossima iterazione
- Ricerca strutturata su lamentele (Reddit, store) per far emergere candidati che non vengono dalla mia esperienza.
- Modelli esteri di successo da importare in Italia (e il contrario).
