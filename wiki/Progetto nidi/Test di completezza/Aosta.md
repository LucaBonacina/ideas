---
tipo: test-completezza
comune: "Aosta"
provincia: "AO"
regione: "Valle d'Aosta"
codice_istat: "007003"
criterio: "comune 15-100 mila abitanti, non capoluogo di regione, almeno 10 servizi 0-3 ISTAT"
servizi_0_3_istat_2024: 15
scuole_infanzia_mim_2026_27: 15
elenco_vero_0_3: 7
elenco_vero_3_6: 15
verificato_il: 2026-11-20
tags: [test-completezza, nidi]
---
# Test di completezza: Aosta

> Eccezione al criterio, decisa dal coordinatore: in Valle d'Aosta l'unico comune sopra i 15.000 abitanti è Aosta, il capoluogo.

## In breve
- **Esiste un elenco regionale per struttura**, contrariamente a quanto scritto finora nella nota [[Valle d Aosta]]: un PDF della Regione con titolare, tipologia, posti, sede, autorizzazione (SCIA o DGR/PD) e **accreditamento con scadenza** dei nidi e degli spazi gioco di tutta la regione (creato il 03/08/2026). Per Aosta contiene **tutti i 7 nidi** trovati (7/7). [fatto]
- Il **sito del Comune** non pubblica nessun elenco: solo la procedura online di domanda per il nido comunale (0/7). [fatto]
- **Ricerche web:** nessuna struttura in più rispetto all'elenco regionale; i giornali locali servono per capire aperture e chiusure (ma un articolo del 2018 sulla chiusura del nido "La Farfavola" è smentito dall'elenco 2026, che lo dà accreditato fino al 2027).
- **Mancano del tutto le 9 "tate familiari"** (servizi domiciliari, 36 posti) dichiarate dall'ISTAT: c'è un registro regionale delle tate, ma è un elenco di persone e non è pubblico; nessuna fonte aperta le nomina.
- 3-6: l'anagrafe MIM contiene le 15 scuole (11 statali-regionali, 4 paritarie); nessuna scuola non paritaria trovata.

## Totale atteso
ISTAT, servizi 0-3 attivi (pacchetto del coordinatore, dataflow 47_850):

| Tipologia | 2023 priv/pub/tot | 2024 priv/pub/tot | Posti 2024 priv/pub/tot |
|---|---|---|---|
| Nidi (incl. micronidi) | 1/6/7 | 1/5/6 | 21/168/189 |
| di cui nidi aziendali | 0/1/1 | 0/1/1 | 0/18/18 |
| Sezioni primavera | 0/0/0 | 0/0/0 | 0/0/0 |
| Spazi gioco | 0/0/0 | 0/0/0 | 0/0/0 |
| Servizi domiciliari (tate familiari) | 9/0/9 | 9/0/9 | 36/0/36 |
| Centri bambini-genitori | 0/0/0 | 0/0/0 | 0/0/0 |
| **Totale** | 10/6/16 | **10/5/15** | 57/168/225 |

Controllo con l'Annuario statistico regionale 2025, tav. 4.17 (distretto "Aosta e Cintura", più ampio del comune), 2024: asilo nido 397 posti, nido aziendale 52, tata familiare 68, spazio gioco 20. [fatto]

3-6: anagrafe MIM a.s. 2026/27: **15 scuole dell'infanzia** (11 statali dell'ordinamento regionale, 4 paritarie). [fatto, pacchetto]

## Elenco vero 0-3
Legenda fonti: **R** = elenco regionale autorizzazioni/accreditamento (PDF pk=115707); **C** = sito del Comune di Aosta; **M** = MIM; **U** = USR non paritarie; **A** = altre fonti istituzionali (guida regionale "Nidi d'infanzia" 2024, PDF pk=60227); **W** = web (giornali locali, siti dei gestori).

| n. | Struttura | Tipologia | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Nido "Via Roma", Via Roma 29 | nido d'infanzia, 50 posti | pubblica (comunale, gestione coop. Aldia) | ✓ |  |  |  | ✓ | ✓ | accreditato 23/03/2026-23/03/2031; W = articolo 2018 sulla gara dei 3 nidi comunali (da risultato di ricerca) |
| 2 | Nido "Massimo Berra", Reg. Crou 21/b | nido d'infanzia, 36 posti | pubblica (comunale, gestione coop. Leone Rosso) | ✓ |  |  |  | ✓ | ✓ | accreditato fino al 19/03/2031 |
| 3 | Nido "Viale Europa", Viale Europa 7 | nido d'infanzia, 40 posti | pubblica (comunale, gestione coop. Leone Rosso) | ✓ |  |  |  | ✓ | ✓ | accreditato fino al 19/03/2031 |
| 4 | Nido Quartiere Dora, P.zza Battaglione Cervino 1 | nido d'infanzia, 24 posti | pubblica (comunale, gestione coop. Leone Rosso) | ✓ |  |  |  |  | ✓ | nuovo (PNRR): SCIA 14/02/2025, accreditato 19/03/2026-19/03/2027; non nella guida 2024 né, presumibilmente, nell'ISTAT 2024 [stima] |
| 5 | "La Farfavola", Via Pollio Salimbeni 7 | nido d'infanzia, 32 posti | privata (La Sorgente s.c.s.) | ✓ |  |  |  | ✓ | ✓ | SCIA 14/02/2023, accreditato fino al 28/01/2027; W = notizia di chiusura del 2018, superata |
| 6 | Nido aziendale USL "Le Marachelle", Via Roma 17 | nido aziendale 18 posti + 6 posti nido | pubblica (Azienda USL) | ✓ |  |  |  | ✓ |  | DGR 1191/2017 |
| 7 | "Le Petit Prince", Regione Borgnalle 10 | nido d'infanzia, 50 posti | privata (coop. La Coccinelle) | ✓ |  |  |  | ✓ | ✓ | SCIA 24/09/2025 (ampliamento: nuovo micronido da 15 posti annunciato nel 2025) |
| – | 9 tate familiari (servizio domiciliare) | servizio domiciliare | privata | – | – | – | – | – | – | **non identificate**: nessuna fonte aperta le nomina |

Nessuno spazio gioco, garderie o centro bambini-genitori ad Aosta nell'elenco regionale né nell'elenco regionale degli spazi gioco del 2020 (pk=60234), coerente con l'ISTAT (0). [fatto]

Confronto con l'ISTAT 2024: 6 nidi (5 pubblici, 1 privato). L'elenco ne ha 7 (5 pubblici, 2 privati) se si conta il nido di P.zza Battaglione Cervino, aperto nel 2025. Con un nido in più e uno in meno nella classificazione pubblico/privato (forse "La Farfavola" o "Le Petit Prince" contati diversamente) [stima]: non verificabile.

## Elenco vero 3-6
| n. | Scuola | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Infanzia Salvador Allende, Via Binel 44 | statale-regionale |  |  | ✓ |  |  |  | IS Emile Lexert |
| 2 | Infanzia Porossan | statale-regionale |  |  | ✓ |  |  |  | IS Luigi Einaudi |
| 3 | Infanzia Antica Vetreria | statale-regionale |  |  | ✓ |  |  |  | IS Saint-Roch |
| 4 | Infanzia "O. Marcoz" | statale-regionale |  |  | ✓ |  |  |  | IS Eugenia Martinet |
| 5 | Infanzia Excenex | statale-regionale |  |  | ✓ |  |  |  | IS San Francesco |
| 6 | Infanzia "C. Gex", V.le della Pace 30 | statale-regionale |  |  | ✓ |  |  |  | IS Luigi Einaudi |
| 7 | Infanzia Quartiere Cogne | statale-regionale |  |  | ✓ |  |  |  | IS Emile Lexert |
| 8 | Infanzia "St-Martin" | statale-regionale |  |  | ✓ |  |  |  | IS Eugenia Martinet |
| 9 | Infanzia Signayes | statale-regionale |  |  | ✓ |  |  |  | |
| 10 | Infanzia "Gianni Rodari" | statale-regionale |  |  | ✓ |  |  |  | IS San Francesco |
| 11 | Infanzia Quartiere Dora | statale-regionale |  |  | ✓ |  |  |  | IS Saint-Roch |
| 12 | Paritaria "San Giovanni Bosco", C.so Battaglione Aosta 95 | paritaria |  |  | ✓ |  |  | ✓ | sito del gestore letto (donboscoaosta.it) |
| 13 | Paritaria "Sant'Orso" | paritaria |  |  | ✓ |  |  |  | |
| 14 | Paritaria Asilo "Principe Amedeo" | paritaria |  |  | ✓ |  |  |  | |
| 15 | Paritaria "San Giuseppe", Via Roma 17 | paritaria |  |  | ✓ |  |  |  | sito del gestore: errore 500 |

Scuole dell'infanzia non paritarie: nessun elenco USR per la Valle d'Aosta trovato (in Valle d'Aosta la scuola è di competenza regionale); nessuna trovata con le ricerche.

## Copertura per fonte
| Fonte | 0-3 n/N | % | 3-6 n/N | % | Note |
|---|---|---|---|---|---|
| R - Elenco regionale autorizzazioni e accreditamento (PDF) | 7/7 | 100% | – | – | nessuna tata familiare |
| C - Sito del Comune di Aosta | 0/7 | 0% | 0/15 | 0% | solo procedura di domanda (SPID/CIE), nessun elenco |
| M - Anagrafe MIM | – | – | 15/15 | 100% | |
| U - USR non paritarie | non trovato | – | non trovato | – | |
| A - Guida regionale "Nidi d'infanzia" (aprile 2024) | 6/7 | 86% | – | – | manca il nido aperto nel 2025; ha i telefoni delle strutture |
| A - Annuario statistico regionale | 0/7 | 0% | – | – | solo posti per distretto |
| W - Web (giornali locali, siti gestori) | 6/7 | 86% | 1/15 | 7% | nessuna struttura in più; per il 3-6 controllato solo un sito |

- **Strutture trovate solo con il web:** 0 (0-3), 0 (3-6).
- **Dichiarate dall'ISTAT ma non trovate:** 9 servizi domiciliari (tate familiari, 36 posti). Per i nidi l'elenco vero ne ha uno in più dell'ISTAT 2024 (apertura 2025).

## Campi utili ai genitori
| Struttura | Retta | Orari | Età | Posti | Scadenze iscrizioni | Progetto pedagogico | Lingua | Inclusione/disabilità |
|---|---|---|---|---|---|---|---|---|
| Nido comunale Via Roma (pubblica) | no (non trovata sul sito comunale) | no | sì (regolamento comunale: 6 mesi-3 anni, da risultato di ricerca) | sì (elenco regionale: 50) | parziale (sportello telematico: procedimento max 30 giorni; date di apertura non indicate) | no | no | parziale (la domanda chiede i certificati di disabilità del bambino o di un familiare) |
| Le Petit Prince (privata) | no | sì (articolo 2025: 7:30-17:30) | parziale (menu per 6-36 mesi) | sì (elenco regionale: 50) | no | parziale (articolo promozionale) | sì (progetti di inglese e francese, articolo 2025) | no |
| Nido aziendale USL (pubblica) | no | no | no | sì (elenco regionale) | no | no | no | no |
| Scuola dell'infanzia paritaria San Giovanni Bosco | no | no (orari solo del doposcuola) | sì (infanzia) | no | parziale (pagina "Iscrizioni"; inizio anno 10/09/2026) | sì (PTOF e curricolo sul sito) | no | no |
| Scuola dell'infanzia statale "Gianni Rodari" | no | no | no | no | no | no (non controllato) | no | no |

## Problemi e prova contraria
- **Tate familiari:** cercati elenco pubblico e registro regionale. Esiste il "registro regionale aperto delle tate familiari" (avviso regionale sulla qualifica, DGR 101/2023), ma non è pubblicato: è un elenco di persone. ISTAT ne conta 9 ad Aosta, l'annuario 68 posti nel distretto. Nessuna fonte aperta le rende trovabili. [fatto per la ricerca]
- **Elenco regionale:** trovato tramite ricerca web (allegato pk=115707); **non ho trovato la pagina regionale** che lo pubblica (gli indirizzi provati su regione.vda.it danno 404). Non contiene le tate familiari. Il riassunto del motore di ricerca lo dava come "datato 2013-2017": è falso, le date arrivano al 2026 e il PDF è stato creato il 03/08/2026. [fatto]
- **Sito comunale:** cercati "nido", "tata familiare", "garderie" con il motore interno: nessun elenco. [fatto]
- Baby parking o ludoteche private ad Aosta: nessuno trovato.
- INPS "Servizi vicino a me": non verificabile (dietro SPID).

## Dati per la sintesi
```
istat_0_3_2024=15; elenco_vero_0_3=7; elenco_vero_3_6=15; R_0_3=7/7; C_0_3=0/7; A_0_3=6/7; W_0_3=6/7; solo_web_0_3=0; M_3_6=15/15; C_3_6=0/15; W_3_6=1/15; solo_web_3_6=0; non_trovate_vs_istat=9 servizi domiciliari (tate familiari); campi_rette=nessuna fonte; campi_orari=siti gestori/stampa; campi_posti=elenco regionale; campi_scadenze=sportello telematico comunale (parziale); campi_progetto=siti gestori (paritarie); campi_lingua=stampa locale (privato); campi_inclusione=modulo di domanda comunale (parziale)
```

## Fonti
- Elenco regionale autorizzazioni e accreditamento nidi e spazi gioco: https://gestionewww.regione.vda.it/allegato.aspx?pk=115707 (PDF 2 pagine, creato 03/08/2026; accesso 2026-11-20, letto con pdftotext)
- Guida regionale "Nidi d'infanzia" (aprile 2024): https://gestionewww.regione.vda.it/allegato.aspx?pk=60227 (accesso 2026-11-20)
- Elenco regionale spazi gioco ed ex garderies (2020): https://gestionewww.regione.vda.it/allegato.aspx?pk=60234 (accesso 2026-11-20)
- Avviso regionale qualifica e registro tate familiari: https://gestionewww.regione.vda.it/allegato.aspx?pk=102444 (accesso 2026-11-20)
- Annuario statistico regionale 2025, tav. 4.17: https://www.regione.vda.it/statistica/pubblicazioni/annuari/annuario2025/SITE/4/17.PDF (accesso 2026-11-20)
- Comune di Aosta, Educazione e formazione: https://www.comune.aosta.it/it/page/educazione-e-formazione-46?fromService=1 ; domanda di ammissione al nido: https://sportellotelematico.comune.aosta.it/procedure%3Ac_a326%3Aammissione.nidi.infanzia (aggiornata 29/12/2025; accesso 2026-11-20)
- Gazzetta Matin, 28/02/2024 (nido Quartiere Dora, 150→174 posti): https://gazzettamatin.com/2024/02/28/aosta-asili-nido-il-comune-punta-raggiungere-174-posti (accesso 2026-11-20)
- Gazzetta Matin, 28/02/2025 (Le Petit Prince, pubbliredazionale): https://gazzettamatin.com/2025/02/28/asilo-nido-a-aosta-le-petit-prince-si-espande-per-accogliere-piu-bambini (accesso 2026-11-20)
- Gazzetta Matin 2018 (gara 3 nidi comunali; chiusura Farfavola): https://www.gazzettamatin.com/2018/10/17/asili-nido-nuova-gara-dappalto-tre-strutture-comunali-aosta , https://www.gazzettamatin.com/2018/06/01/asilo-nido-farfavola-aosta-chiude-31-agosto (solo risultati di ricerca)
- Istituto Don Bosco Aosta: https://www.donboscoaosta.it (accesso 2026-11-20)
- Note collegate: [[Valle d Aosta]], [[Regione Valle d Aosta - Annuario statistico posti prima infanzia]], [[ISTAT - Nidi e servizi integrativi per la prima infanzia]], [[MIM - Anagrafe scuole statali e paritarie]], [[USR - Elenchi regionali scuole non paritarie]], [[INPS - Agenda asili nido e mappa Bonus nido]]
