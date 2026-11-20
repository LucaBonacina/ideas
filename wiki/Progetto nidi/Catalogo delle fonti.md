---
tipo: progetto
tags: [progetto, nidi, fonti]
aggiornato: 2026-11-20
stato: prima versione completa
---
# Catalogo delle fonti

Risponde alla domanda: **come si arriva a conoscere tutti i servizi educativi 0-6 in Italia, pubblici e privati?** Metodo in [[Metodo del progetto]]. Ogni fonte ha una nota in `Fonti/` (circa 100 note) con copertura, campi, formato, aggiornamento, licenza e dati personali; ogni regione una nota in `Regioni/`.

## In sintesi
1. **Non esiste oggi un registro unico nazionale 0-6 aperto.** Due sono in costruzione: l'**Agenda Asili Nido dell'INPS** (obbligatoria per i comuni dal 1° luglio 2026, solo 0-3, consultabile solo con SPID; flusso dati tra amministrazioni dal 2027/28) e il **sistema informativo del Ministero dell'Istruzione e del Merito** (da attivare entro settembre 2027, adesione obbligatoria). Vedi [[Normativa nazionale 0-6]].
2. **3-6 anni: base nazionale solida.** L'anagrafe del MIM (open data) contiene circa 21.400 scuole dell'infanzia statali e paritarie e nei test copre **200 scuole su 201** fuori da Trento e Bolzano. Mancano le non paritarie (elenchi regionali degli USR, in PDF) e le province autonome (fonti provinciali).
3. **0-3 anni: si costruisce regione per regione.** Le fonti nazionali aperte danno solo conteggi (ISTAT, per comune). L'elenco nominativo viene da registri regionali, siti dei comuni e, dove mancano, ricerche web.
4. **Nei 21 comuni del test le fonti istituzionali coprono la grande maggioranza dei servizi 0-3** (95% al Nord e al Centro), ma con forti differenze tra regioni. Restano scoperti soprattutto **servizi domiciliari** (tagesmutter, nidi famiglia) e **sezioni primavera**.
5. **Le informazioni che servono ai genitori quasi non ci sono:** nessun registro regionale ha rette, orari o scadenze; le rette dei privati sono pubbliche in un solo comune su 21; la lingua compare solo sui siti dei gestori. Questi dati vanno raccolti dai comuni (avvisi e regolamenti) e dai gestori.

## Fonti nazionali
Dettaglio in [[Fonti nazionali - sintesi]].

| Fonte | Copre | Valore come base |
|---|---|---|
| [[MIM - Anagrafe scuole statali e paritarie]] | Infanzia statale e paritaria, nominativa, open data | Alto per il 3-6 |
| [[MIM - Scuola in Chiaro]] | Stesse scuole, con coordinate; API JSON aperta | Medio (complementare) |
| [[USR - Elenchi regionali scuole non paritarie]] | Infanzia non paritaria; sezioni primavera finanziate | Medio (indispensabile per le non paritarie) |
| [[INPS - Agenda asili nido e mappa Bonus nido]] | 0-3 abilitati, nominativa ma chiusa | Alto in potenza, basso oggi |
| [[ISTAT - Nidi e servizi integrativi per la prima infanzia]] | 0-3 per comune, tipologia e titolarità (solo conteggi) | Basso come elenco, alto come metro di completezza |
| [[dati.gov.it - Catalogo nazionale open data]] | Indice dei dataset regionali e locali | Alto come indice |

## Regioni: fonte migliore e completezza 0-3
"Stima" = confronto dei totali con ISTAT (sessioni P2-P4). "Test" = misura sul comune campione (sessioni P9-P10), da leggere come indicazione: un comune per regione.

| Regione | Fonte migliore | Stima | Comune del test | Test |
|---|---|---|---|---|
| [[Lombardia]] | Registro regionale open data, 2.707 servizi, mensile | ~100% (senza sezioni primavera) | Legnano | vedi [[Test di completezza - Nord e Centro]] |
| [[Friuli-Venezia Giulia]] | Registro regionale XLSX, 341 servizi, mensile | ~100% (senza sezioni primavera) | Pordenone | idem |
| [[Piemonte]] | Elenco regionale PDF, 1.149 servizi | 85-100% | Alba | idem |
| [[Provincia autonoma di Trento]] | 2 PDF provinciali, 183 servizi | ~85% | Rovereto | idem |
| [[Veneto]] | Allegati di decreti regionali e Nidi in famiglia | ~70-75% | Bassano del Grappa | idem |
| [[Toscana]] | Elenco dei servizi Nidi gratis 2026/27 (PDF, 900 servizi); registro SIRIA chiuso | ~90% | Empoli | idem |
| [[Lazio]] | Elenco degli accreditati (PDF, 757 servizi); registro SIRSE chiuso | 60-75% | Viterbo | idem |
| [[Puglia]] | Registro regionale CSV (CC-BY, 935 servizi, fermo al 2023) + catalogo zerosei 2026/27 | 80-90% | Molfetta | ~100% (le due fonti insieme) |
| [[Campania]] | Elenco regionale nidi e micronidi (2024, 731 righe) + Napoli | 25-35% (prima del ritrovamento dell'elenco regionale) | Battipaglia | ~100% |
| [[Liguria]] | Solo open data di Genova | 30-40% | Rapallo | idem (comune sotto soglia) |
| [[Emilia-Romagna]] | Open data di Bologna, Ferrara, Reggio Emilia; anagrafe regionale SPI-ER non pubblicata | ~12% | Imola | idem (il sito del comune copre tutto) |
| [[Umbria]] | Elenco degli accreditati previsto ma non pubblicato | <20% | Foligno | idem (il sito del comune copre tutto) |
| [[Marche]] | Nessun elenco regionale | <10% | Fano | idem (il sito del comune copre tutto) |
| [[Abruzzo]] | Solo statistiche aggregate | ~0% da fonti regionali | Lanciano | idem (il sito del comune copre tutto) |
| [[Molise]] | Nessun elenco | ~0% da fonti regionali | Termoli | idem (6 strutture trovate solo con il web) |
| [[Valle d Aosta]] | Elenco regionale per struttura (trovato nel test) | da rivedere | Aosta | idem |
| [[Provincia autonoma di Bolzano]] | Solo la città (ASSB) | ~6% | Merano | idem (23 Tagesmütter non elencate) |
| [[Sardegna]] | Registro SIWE chiuso | <15% (>80% se ottenuto) | Alghero | 89% |
| [[Sicilia]] | Albo regionale pubblicato solo come decreti; elenchi comunali | 20-30% | Bagheria | tutti i nidi, senza le sezioni primavera |
| [[Calabria]] | Nessun registro; rilevazione regionale in corso | <10% | Rende | 30-50% |
| [[Basilicata]] | Nessun registro | <20% | Melfi | 40% |

**Nord e Centro, somma dei 15 comuni** ([[Test di completezza - Nord e Centro]]): elenco vero 197 servizi contro 234 dell'ISTAT; registro regionale, dove esiste, 83%; sito del comune 58% (100% nei comuni del Centro); tutte le fonti istituzionali insieme 95%; solo con ricerche web 5%. Delle 52 strutture ISTAT non trovate, 36 sono servizi domiciliari.
**Sud e isole** ([[Test di completezza - Sud e isole]]): dove manca una fonte regionale conta il sito del comune; a Rende e Melfi si recupera poco anche con le ricerche web.

## Segmenti
Dettaglio in [[Segmenti - sintesi]]. Quasi nessun segmento ha un registro aperto: il riconoscimento è verificabile solo per Montessori (Opera Nazionale Montessori), Steiner-Waldorf e alcune reti di scuole internazionali; bilingue, "ispirato a Reggio Emilia" e "nel bosco" sono dichiarazioni dei gestori. Per l'inclusione non esistono dati per singola struttura, salvo le barriere architettoniche delle scuole statali.

## I buchi e come colmarli
| Buco | Dove | Come colmarlo |
|---|---|---|
| Registri regionali chiusi o non pubblicati | Toscana (SIRIA), Lazio (SIRSE), Emilia-Romagna (SPI-ER), Sardegna (SIWE), Umbria, Liguria, Bolzano, Sicilia, Veneto (elenco completo) | Richieste di accesso civico generalizzato (FOIA) |
| Elenchi nazionali chiusi | INPS (Agenda), ISTAT (elenco delle unità di offerta), MIM (coordinate e gestore) | Richieste di accesso civico; seguire i flussi del 2027/28 |
| Regioni senza registro | Marche, Abruzzo, Molise, Calabria, Basilicata, Campania (in parte) | Siti dei comuni (scraping), ricerche web, poi gestori |
| Sezioni primavera | Tutte | Decreti ed elenchi USR e regionali di finanziamento |
| Servizi domiciliari | Tutte (36 dei 52 servizi mancanti al Nord e Centro) | Elenchi regionali dove esistono (es. Lombardia Nidi famiglia), comuni, reti di categoria |
| Scuole non paritarie e straniere | Tutte | Elenchi USR regione per regione |
| Rette, orari, scadenze, posti, lingua | Tutte | Avvisi e regolamenti comunali; gestori (scheda rivendicata) |

## Strategia proposta per la completezza
1. **3-6:** anagrafe MIM + elenchi USR delle non paritarie + fonti provinciali di Trento e Bolzano.
2. **0-3, livello 1:** registri regionali aperti (Lombardia, Friuli-Venezia Giulia, Piemonte, Puglia, Trento, Campania, Toscana e Lazio dai PDF).
3. **0-3, livello 2:** siti dei comuni, partendo dai capoluoghi e dai comuni più grandi; nel Centro coprono tutto.
4. **0-3, livello 3:** richieste di accesso civico per i registri chiusi e, dal 2027/28, i flussi INPS e MIM.
5. **Controllo continuo:** confronto per comune con i conteggi ISTAT, per sapere sempre quanto manca e dove.
6. **Dati per i genitori:** rette pubbliche dagli avvisi comunali; rette dei privati, posti, orari e lingua dai gestori.

## Avvertenze
- Le stime di completezza regionali (P2-P4) e i test su un comune per regione (P9-P10) sono indicazioni, non statistiche.
- Alcuni registri contengono **dati personali** (nomi dei legali rappresentanti, servizi domiciliari presso abitazioni): vanno trattati nel rispetto del GDPR e non ripubblicati così come sono.
- Diversi siti non erano raggiungibili dall'ambiente di ricerca: sono elencati nelle note regione e fonte.
