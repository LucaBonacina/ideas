# 01 — Metodo di selezione

Principio: **ogni decisione deve avere un'evidenza verificabile e una fonte.** Dove l'evidenza manca, il punteggio è basso per costruzione (prudenza), non neutro.

## Funnel

| Fase | Input → Output | Come |
|---|---|---|
| 1. Generazione | → 40-60 candidati | Pescaggio sistematico da fonti diverse (sotto), senza filtrare |
| 2. Gate (pass/fail) | 40-60 → ~15 | 5 domande sì/no; basta un "no" per eliminare |
| 3. Scoring | ~15 → ranking | 9 criteri pesati, ognuno con evidenza e fonte |
| 4. Deep dive | top 6-8 → top 3-5 | Analisi dei concorrenti, prova tecnica dei dati, analisi delle parole chiave, unit economics |
| 5. Validazione | top 3-5 → 1-2 su cui investire | Esperimento di 1-2 settimane con soglia di successo **decisa prima** |

## Fonti per generare i candidati (fase 1)
Per evitare di pescare solo dalla propria esperienza:
1. **Open data e portali della PA** (IT/UE): dati pubblici esposti male → strato migliore sopra.
2. **Settori verticali con portali vecchi**: aste, appalti, bandi, concorsi, immobili, auto, lavoro, scuola, normativa.
3. **Recensioni negative** di app e siti esistenti (app store, Trustpilot, Reddit, forum): lamentele ricorrenti = dolore misurabile.
4. **Prodotti a pagamento costosi e brutti** (B2B): esistono già clienti che pagano, quindi c'è disponibilità a pagare.
5. **Pezzi di un portale generalista** da trasformare in un verticale (es. una categoria di un marketplace).
6. **Modelli che funzionano all'estero e mancano in Italia** (e viceversa).
7. **Giochi**: generi e meccaniche con domanda forte e pochi titoli buoni (traccia separata, la distribuzione funziona in modo diverso).

## Fase 2 — Gate (basta un NO per eliminare)
| # | Gate | Domanda |
|---|---|---|
| G1 | Nessuna licenza | Si può operare senza autorizzazioni o albi (OAM, IVASS, Banca d'Italia, ecc.)? |
| G2 | Dati raggiungibili | I dati chiave sono pubblici, scrapabili in modo sostenibile o forniti dall'utente? |
| G3 | Pagatore identificabile | Esiste almeno un soggetto che **oggi già paga** per qualcosa di simile (abbonamenti, lead, pubblicità, commissioni)? |
| G4 | Distribuzione senza pubblico | Esiste un canale plausibile che non richieda un pubblico già esistente? |
| G5 | Rischio legale sui dati gestibile | Il rischio è accettabile, considerando dati personali (GDPR), diritto *sui generis* sulle banche dati UE (estrazione di parti sostanziali) e termini d'uso? |

## Fase 3 — Criteri pesati (punteggio 1-5)
| # | Criterio | Peso | 5 = | 1 = | Evidenza richiesta |
|---|---|---|---|---|---|
| C1 | Dolore degli utenti | 15 | Lamentele forti e ricorrenti, strumenti attuali pessimi | Utenti soddisfatti | Valutazioni sugli store, Trustpilot, thread Reddit/forum, prova d'uso diretta |
| C2 | Domanda | 15 | Volume di ricerca/utenti alto e stabile/in crescita | Nicchia minuscola o in calo | Volumi di ricerca (Google Trends, autocomplete, strumenti SEO), traffico stimato dei concorrenti |
| C3 | Monetizzazione | 15 | Pagatori evidenti con prezzo alto (B2B in abbonamento, lead costosi) | Solo pubblicità su traffico a basso valore | Listini dei concorrenti, CPC delle parole chiave, modelli esistenti |
| C4 | Vantaggio dei dati (fit con lo scraping) | 15 | Dati frammentati in molte fonti, sporchi, da unire e arricchire di continuo | Una fonte unica e pulita, replicabile da chiunque in un giorno | Mappa delle fonti + prova tecnica |
| C5 | Distribuzione senza pubblico | 15 | SEO programmatica con molte query long-tail transazionali, oppure outbound B2B con target elencabile | Serve brand, pubblicità costosa o un pubblico esistente | Analisi SERP, numero di pagine generabili, elencabilità dei clienti B2B |
| C6 | Resistenza all'AI generalista | 10 | Dati freschi/proprietari, alert, workflow, transazioni | Un chatbot risponde altrettanto bene | Prova: porre la domanda dell'utente a un chatbot/motore AI e valutare la risposta |
| C7 | Difendibilità | 5 | Lo storico dei dati si accumula, effetto rete, costi di uscita per il cliente | Copiabile in una settimana | Ragionamento + analisi dei concorrenti |
| C8 | Debolezza degli incumbent | 5 | Incumbent lenti, vecchi, poco attenti al prodotto | Incumbent forti e moderni | Prova dei prodotti, ultimi rilasci, team |
| C9 | Tempo alla prima evidenza | 5 | Un esperimento convincente in <2 settimane | Servono mesi prima di sapere | Piano dell'esperimento |

**Penalità (da sottrarre):** rischio di dipendenza da una singola piattaforma, rischio legale residuo, stagionalità estrema (da 0 a -10 punti).

Punteggio finale = Σ(punteggio × peso) / 5 − penalità, su una scala 0-100.

## Regole di rigore
- Ogni cella dello scoring riporta **evidenza + link alla fonte + data**.
- Distinguere i **fatti** (misurati) dalle **stime** (dichiarate come tali, con il ragionamento).
- Nessun criterio senza evidenza riceve più di 2.
- Per evitare di confermare le proprie ipotesi, per ogni candidato si cerca esplicitamente anche il **motivo più forte per scartarlo**.
- I pesi si fissano **prima** dello scoring e non si toccano dopo aver visto i risultati.

## Traccia separata: giochi
I giochi non passano dai gate G3/G4 così come sono scritti, perché distribuzione e monetizzazione funzionano in modo diverso. Hanno gate e criteri propri.

**Gate giochi:** (GG1) originale: genere/meccanica sì, copia di un gioco preciso no · (GG2) esiste un canale di distribuzione senza pubblico (portali di giochi web, store con scoperta organica, formato condivisibile/daily) · (GG3) esiste un modello di monetizzazione provato per quel genere.

| # | Criterio giochi | Peso | Evidenza |
|---|---|---|---|
| CG1 | Domanda del genere/formato | 20 | Classifiche dei portali e degli store, Google Trends, community |
| CG2 | Qualità media dell'offerta (spazio per fare meglio) | 15 | Prova dei titoli principali, recensioni |
| CG3 | Viralità/condivisibilità intrinseca | 20 | Meccaniche di condivisione, casi noti |
| CG4 | Monetizzazione per il genere | 15 | Benchmark (pubblicità, abbonamenti, acquisti in-app) |
| CG5 | Fit con dati/scraping/AI (vantaggio non copiabile) | 15 | Contenuti generati da dati reali o da AI |
| CG6 | Retention (abitudine quotidiana, progressione) | 10 | Struttura del gioco, benchmark |
| CG7 | Tempo alla prima evidenza | 5 | Piano dell'esperimento |

## Decisioni registrate
- 2026-11-19: pesi C1-C9 confermati così come scritti (l'utente ha dato il via senza modifiche). Giochi: traccia separata.

## Protocollo anti-bias (aggiunto 2026-11-20)
L'utente ha dichiarato un interesse personale (famiglia, asili, burocrazia per genitori) e ha chiesto un'analisi oggettiva. Regole:
1. **Ipotesi pre-registrate.** Prima di cercare evidenze, per ogni candidato si scrive cosa ci aspettiamo e quale risultato lo farebbe scartare.
2. **Scoring alla cieca.** Gli agenti che danno i punteggi non sanno quali candidati preferisce l'utente.
3. **Avvocato del diavolo separato.** Un agente diverso cerca solo i motivi per scartare i primi classificati.
4. **Stessa asticella di evidenza** per tutti i candidati, nessuna eccezione.
5. **Il fit personale non entra nel punteggio.** Essere un genitore dà un vantaggio reale (capire il problema, intervistare altri genitori), ma si annota a parte e si usa solo per decidere tra candidati con punteggi molto vicini.
6. **Si riporta il risultato com'è,** anche se i candidati legati alla famiglia finiscono in basso.

## Decisioni registrate (segue)
- 2026-11-20: esclusi gli ambiti sovrapposti al lavoro dell'utente: aste, procedure concorsuali, aziende e bilanci, immobili. Focus spostato sul B2C.
