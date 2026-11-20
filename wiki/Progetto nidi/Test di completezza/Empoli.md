---
tipo: test-completezza
comune: "Empoli"
provincia: "FI"
regione: "Toscana"
codice_istat: "048014"
criterio: "comune 15-100 mila abitanti, non capoluogo di regione, almeno 10 servizi 0-3 ISTAT"
servizi_0_3_istat_2024: 10
scuole_infanzia_mim_2026_27: 15
elenco_vero_0_3: 10
elenco_vero_3_6: 15
verificato_il: 2026-11-20
tags: [test-completezza, nidi]
---
# Test di completezza: Empoli

## In breve
- L'**elenco regionale Nidi gratis 2026/27** (decreto 22561 del 12/10/2026, Allegato B) contiene **8 dei 10 nidi** (80%): i 6 comunali e 2 privati accreditati. Mancano il nido privato accreditato **"Onte Bollonte"** (via Dogali 25) e il nido aziendale **"SeSa Baby"** (via Piovola 138). [fatto]
- Il **sito del Comune** copre **10/10**: ha una scheda PDF per ogni nido, pubblico e privato. Le schede danno capienza, età, orari, sezioni, personale e indirizzo. Si trovano con l'API open data del sito (OpenCity), che le classifica come "documenti" e non come "luoghi". [fatto]
- I 10 nidi coincidono con l'ISTAT 2024 e con la statistica regionale 2024/25: 6 pubblici e 4 privati, di cui 1 aziendale. Anche i posti tornano: 285 pubblici (tabella comunale 2026/27) contro 286 ISTAT; 123 privati dalle schede contro 121 ISTAT. [fatto]
- **Web:** nessuna struttura trovata solo con il web. Due ricerche mirate non hanno dato risultati (una su "Onte Bollonte"). [fatto]
- **3-6:** 15 scuole MIM (11 statali, 4 paritarie). Il Comune le elenca tutte: le statali in una pagina, le 3 paritarie private nel bando buoni scuola 2026, il Centro Zerosei come servizio comunale. [fatto]

## Totale atteso
ISTAT, servizi 0-3 attivi (pacchetto del coordinatore):

| Tipologia | 2023 priv/pub/tot | 2024 priv/pub/tot | Posti 2024 priv/pub/tot |
|---|---|---|---|
| Nidi (incl. micronidi) | 4/6/10 | 4/6/10 | 121/286/407 |
| di cui nidi aziendali | 1/0/1 | 1/0/1 | 50/0/50 |
| Sezioni primavera | 0/0/0 | 0/0/0 | 0 |
| Spazi gioco | 0/0/0 | 0/0/0 | 0 |
| Servizi domiciliari | 0/0/0 | 0/0/0 | 0 |
| Centri bambini-genitori | 0/0/0 | 0/0/0 | 0 |
| **Totale** | 4/6/10 | **4/6/10** | 121/286/407 |

Controllo regionale (open data Regione Toscana 2024/25, dal pacchetto): 6 nidi pubblici, 4 privati, nessun servizio integrativo; 400 posti. [fatto]

3-6: anagrafe MIM a.s. 2026/27: **15 scuole dell'infanzia** (11 statali, 4 paritarie). [fatto, pacchetto]

## Elenco vero 0-3
Legenda: **R** = elenco regionale dei servizi aderenti a Nidi gratis 2026/27 (decreto 22561/2026, Allegato B, dal pacchetto); **C** = sito del Comune (schede PDF dei nidi, pagina iscrizioni, tabella posti 2026/27); **M** = MIM; **U** = USR non paritarie; **A** = altre fonti istituzionali (open data regionale: solo conteggi, nessun nome); **W** = siti dei gestori e stampa.

| n. | Struttura | Tipologia | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | "Stacciaburatta", via Righi 42-43 | nido | pubblica (personale comunale) | ✓ | ✓ |  |  |  |  | 72 posti, 3-36 mesi; R: n. 42, scheda comunale: n. 43 |
| 2 | "La casa dei canguri", via Garigliano 17-19 | nido | pubblica (gestione in appalto) | ✓ | ✓ |  |  |  |  | 57 posti, 3-36 mesi |
| 3 | "Piccolo Mondo", via Valgardena | nido | pubblica (appalto) | ✓ | ✓ |  |  |  |  | 57 posti, 3-36 mesi |
| 4 | "Trovamici", largo della Resistenza 2 | nido | pubblica (appalto) | ✓ | ✓ |  |  |  |  | 36 posti, 12-36 mesi |
| 5 | "Melograno", via Arnovecchio 11 (Cortenuova) | nido | pubblica (appalto) | ✓ | ✓ | (✓) |  |  |  | 36 posti; nuova sede inaugurata il 31/01/2026 |
| 6 | "Centro Zerosei", via Cherubini 40 | nido (centro 0-6) | pubblica | ✓ | ✓ | (✓) |  |  |  | 27 posti nido nel 2026/27 (solo tempo lungo); parte 3-6 nel MIM |
| 7 | "L'Arca di Noè", via Carrucci 23 (Istituto Calasanzio) | nido | privata accreditata | ✓ | ✓ | (✓) |  |  | ✓ | 21 posti, 12-36 mesi |
| 8 | "San Giovanni Evangelista", via Pontorme 26/a | nido | privata accreditata (cooperativa) | ✓ | ✓ | (✓) |  |  |  | 21 posti, 12-36 mesi |
| 9 | "Onte Bollonte", via Dogali 25 | nido | privata autorizzata e accreditata | | ✓ |  |  |  |  | 31 posti, 12-36 mesi; **non** aderisce a Nidi gratis 2026/27 |
| 10 | "SeSa Baby", via Piovola 138 | nido aziendale | privata autorizzata e accreditata (welfare aziendale di un'impresa) | | ✓ |  |  |  |  | 50 posti, 3-36 mesi, 8:00-19:00; sito aziendale: 403 |

(✓) in colonna M: è nel MIM la scuola dell'infanzia della stessa sede o dello stesso gestore; il MIM non elenca i nidi. Non conteggiato.

**Dubbie, non contate:** "Centro Trovamici - Centro dei bambini e delle famiglie": il regolamento comunale prevede un'"area 0-3" per bambini con adulti, ma la struttura è un centro di aggregazione per tutte le età (oggi "Extrascuola" 3-10 anni). L'ISTAT e la Regione non dichiarano servizi integrativi.

## Elenco vero 3-6
| n. | Scuola | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Piero della Francesca, via P. della Francesca 37 | statale (IC Empoli Ovest) |  | ✓ | ✓ |  |  |  | |
| 2 | Ponzano, via Righi 50 | statale (IC Est) |  | ✓ | ✓ |  |  |  | Comune: via Ponzano 43 |
| 3 | Pascoli, via Leopardi 76 | statale (IC Est) |  | ✓ | ✓ |  |  |  | Comune: via Pascoli 43 |
| 4 | Serravalle, via Adda 37 | statale (IC Est) |  | ✓ | ✓ |  |  |  | |
| 5 | Carlo Collodi (Monterappoli), via Salaiola 293 | statale (IC Ovest) |  | ✓ | ✓ |  |  |  | |
| 6 | Rodari, via Meucci 105 | statale (IC Ovest) |  | ✓ | ✓ |  |  |  | |
| 7 | Peter Pan, via Antiche Mura 9 | statale (IC Est) |  | ✓ | ✓ |  |  |  | |
| 8 | Pianezzoli, via di Pianezzoli 8/a | statale (IC Ovest) |  | ✓ | ✓ |  |  |  | |
| 9 | Pagnana, piazza Arno | statale (IC Ovest) |  | ✓ | ✓ |  |  |  | |
| 10 | Valgardena, via Val Gardena 2 (Comune: n. 35) | statale (IC Ovest) |  | ✓ | ✓ |  |  |  | |
| 11 | Cortenuova, via Arnovecchio 11 | statale (IC Est) |  | ✓ | ✓ |  |  |  | |
| 12 | "San Giuseppe Calasanzio", via Carrucci 23 | paritaria privata |  | ✓ | ✓ |  |  | ✓ | bando buoni scuola 2026 |
| 13 | "San Giovanni Evangelista", via Pontorme 26/A | paritaria privata (cooperativa) |  | ✓ | ✓ |  |  |  | bando buoni scuola 2026 |
| 14 | "Municchi Rosano", via Bastia 38 | paritaria privata (religiosa) |  | ✓ | ✓ |  |  |  | bando buoni scuola 2026 |
| 15 | "Centro Zerosei", via Cherubini 43 | paritaria comunale |  | ✓ | ✓ |  |  |  | |

Scuole non paritarie: nessuna trovata (nessuna ricerca dedicata all'elenco USR Toscana).

## Copertura per fonte
| Fonte | 0-3 n/N | % | 3-6 n/N | % | Note |
|---|---|---|---|---|---|
| R - Nidi gratis 2026/27 (Regione Toscana) | 8/10 | 80% | – | – | mancano un privato accreditato non aderente e il nido aziendale |
| C - Sito del Comune | 10/10 | 100% | 15/15 | 100% | schede PDF dei nidi (agosto 2025); pagina statali (marzo 2025); bando buoni scuola 2026 per le paritarie private |
| M - Anagrafe MIM | 0/10 | 0% | 15/15 | 100% | |
| U - USR non paritarie | non cercato | – | non cercato | – | |
| A - Open data regionale 2024/25 | 0/10 nominativi (conteggio 10) | – | – | – | conferma il totale |
| W - Web (gestori, stampa) | 1/10 | 10% | 1/15 | 7% | solo il sito del Calasanzio; nessuna struttura nuova |

- **Strutture trovate solo con il web:** 0.
- **Dichiarate dall'ISTAT ma non trovate:** 0 (10 contro 10, stessa ripartizione pubblico/privato e 1 aziendale).

## Campi utili ai genitori
| Struttura | Retta | Orari | Età | Posti | Scadenze iscrizioni | Progetto pedagogico | Lingua | Inclusione/disabilità |
|---|---|---|---|---|---|---|---|---|
| Nido comunale Stacciaburatta | sì (Comune, Allegato C: 253-335 €/mese per 4-8 ore; riduzioni 20/50/80% secondo ISEE fino a 13.000 €) | sì (scheda: 7:30-17:30, uscite) | sì (scheda: 3-36 mesi) | sì (scheda 72; tabella posti 2026/27 per fascia d'età) | sì (pagina iscrizioni: 01/04-30/04/2026 e 01/05-31/05/2026 per i piccoli) | sì (progetto pedagogico e progetto educativo 2026/27 di ogni nido comunale, pagina "Nidi di qualità") | no | parziale (pagina iscrizioni: punteggio per invalidità e bisogni educativi certificati) |
| Nido privato accreditato L'Arca di Noè | no | sì (scheda comunale: 7:30-17:30, 3 uscite) | sì (12-36 mesi) | sì (21) | no | parziale (scheda: spazi e laboratori) | no | no |
| Nido aziendale SeSa Baby | no | sì (scheda: 8:00-19:00) | sì (3-36 mesi) | sì (50, 2 sezioni) | no | parziale (scheda) | no | no |
| Nido Onte Bollonte (privato accreditato) | no | sì (scheda: 7:30-17:30) | sì (12-36 mesi) | sì (31) | no | parziale (scheda: atelier, giardino) | no | no |
| Scuola dell'infanzia paritaria Calasanzio | parziale (bando buoni scuola 2026: contributo regionale alle famiglie; retta della scuola non letta) | no | no | no | no | no (sito del gestore non letto in dettaglio) | no | no |
| Scuola dell'infanzia statale Peter Pan | no | no | no | no | no | no | no | no |

## Problemi e prova contraria
- **Due nidi fuori dall'elenco regionale:** Onte Bollonte e SeSa Baby sono accreditati secondo il Comune ma assenti da Nidi gratis 2026/27. Per Onte Bollonte la ricerca web non trova nulla, e un sito del gestore non risulta (ho provato un dominio ricavato dal nome del gestore: nessuna risposta). La scheda comunale è dell'agosto 2025: l'apertura nel 2026/27 non è confermata [stima: attivo, perché anche la statistica 2024/25 conta 4 privati].
- **Unione dei Comuni Circondario Empolese Valdelsa:** non consultata. Il regolamento zonale dei servizi educativi è pubblicato sul sito del Comune.
- **Servizi integrativi e domiciliari:** nessuno trovato. ISTAT e Regione ne dichiarano 0.
- **Sezioni primavera:** l'ISTAT ne dichiara 0. L'elenco USR Toscana delle sezioni primavera non è stato cercato.
- **Ricerca sul sito:** il motore OpenCity indicizza le schede dei nidi come documenti; la sezione "Luoghi" non ha i nidi privati.
- INPS "Servizi vicino a me": non verificabile (dietro SPID).

## Dati per la sintesi
```
istat_0_3_2024=10; elenco_vero_0_3=10; elenco_vero_3_6=15; R_0_3=8/10; C_0_3=10/10; A_0_3=0/10 (open data regionale solo conteggio 10); W_0_3=1/10; solo_web_0_3=0; M_3_6=15/15; C_3_6=15/15; W_3_6=1/15; solo_web_3_6=0; non_trovate_vs_istat=0; campi_rette=sito comunale (Allegato C, solo comunali); campi_orari=schede comunali di tutti i nidi; campi_posti=schede comunali e tabella posti 2026/27; campi_scadenze=pagina iscrizioni comunale (solo comunali); campi_progetto=progetti educativi 2026/27 dei nidi comunali (pagina Nidi di qualità); campi_lingua=nessuna fonte; campi_inclusione=pagina iscrizioni (criteri di punteggio)
```

## Fonti
- Pacchetto del coordinatore: ISTAT 47_850, MIM 2026/27, Nidi gratis 2026/27 (decreto 22561 del 12-10-2026, Allegato B: https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5534458&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+B+), open data regionale 2024/25.
- Comune di Empoli (accesso 2026-11-20, sito OpenCity letto tramite `/api/opendata/v2/`):
  - schede dei nidi (documenti 7277, 17257-17266, 17261), per esempio Onte Bollonte: https://www.comune.empoli.fi.it/content/download/17264/356905/2/Nido_d%27_infanzia_Onte_Bollonte.pdf ; SeSa Baby: https://www.comune.empoli.fi.it/content/download/17266/356989/2/Nido_d%27infanzia_SeSa_Baby.pdf ; Arca di Noè: https://www.comune.empoli.fi.it/content/download/17263/356863/2/Nido_d%27_infanzia_L%27Arca_di_No%C3%A8.pdf
  - iscrizioni 2026/27: https://www.comune.empoli.fi.it/api/opendata/v2/content/read/399
  - tabella posti 2026/27 (det. 400 del 25/03/2026): https://www.comune.empoli.fi.it/content/download/28241/585066/1/AllgatoA_Posti.pdf
  - tariffe (Allegato C): https://www.comune.empoli.fi.it/content/download/4799/81366/10/ALLEGATO+C++tariffe+a+carico+degli+utenti+nidi+Centro+06+def.pdf
  - "Nidi di qualità 2026/27" (progetti educativi): https://www.comune.empoli.fi.it/api/opendata/v2/content/read/31086
  - "Scuole dell'infanzia di Empoli": https://www.comune.empoli.fi.it/api/opendata/v2/content/read/17797
  - paritarie private (contributo regionale 2025/26): https://www.comune.empoli.fi.it/api/opendata/v2/content/read/25690 ; bando buoni scuola 2026: https://www.comune.empoli.fi.it/content/download/29946/618001/1/Bando-buoni-scuola-2026.pdf
  - regolamento Centro Trovamici: https://www.comune.empoli.fi.it/content/download/4997/89661/8/trovamici.pdf
- Gestori: https://www.calasanzioempoli.com/ (200); https://www.sesa.it/ (403) (2026-11-20)
- Note collegate: [[Toscana]], [[Regione Toscana - Nidi gratis elenco servizi e comuni aderenti]], [[Regione Toscana - Open data servizi educativi prima infanzia]], [[Regione Toscana - SIRIA sistema informativo regionale infanzia]], [[ISTAT - Nidi e servizi integrativi per la prima infanzia]], [[MIM - Anagrafe scuole statali e paritarie]], [[USR - Elenchi regionali scuole non paritarie]], [[INPS - Agenda asili nido e mappa Bonus nido]]
