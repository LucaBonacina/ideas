---
tipo: sintesi
tags: [progetto, nidi, test-completezza, regioni, P10]
aggiornato: 2026-11-20
sessione: P10
---
# Test di completezza - Sud e isole

Sessione P10. Per ognuna delle 6 regioni ho fatto un test di completezza su un comune campione, come previsto dal [[Metodo del progetto]] e dalla sezione "Test di completezza" delle istruzioni del blocco 2. Note per comune:
- [[Test completezza - Battipaglia]] (Campania)
- [[Test completezza - Molfetta]] (Puglia)
- [[Test completezza - Melfi]] (Basilicata)
- [[Test completezza - Rende]] (Calabria)
- [[Test completezza - Bagheria]] (Sicilia)
- [[Test completezza - Alghero]] (Sardegna)

Rapporti di lavoro: [[P10 Molfetta Alghero Bagheria - coordinatore]], [[P10 Battipaglia Melfi Rende]]. Contesto: [[Regioni Sud e isole - sintesi]].

**Criterio di scelta.** Un comune per regione tra 15.000 e 100.000 abitanti, non capoluogo di regione, con un'offerta 0-3 mista (pubblica e privata) secondo ISTAT. In Basilicata solo Potenza e Matera superano i 5 servizi: ho scelto Melfi (17.000 abitanti, 5 servizi) per avere un comune piccolo. In tutto il campione va da 17.000 a 57.000 abitanti.

**Metro.** Per lo 0-3 uso il conteggio ISTAT 2024 dei servizi attivi per comune ([[ISTAT - Nidi e servizi integrativi per la prima infanzia]], dataflow 47_850). Per il 3-6 uso l'anagrafe MIM 2026/27 ([[MIM - Anagrafe scuole statali e paritarie]]). L'"elenco vero" l'ho costruito a mano incrociando tutte le fonti.

## In breve
- **La completezza dipende dalla fonte migliore disponibile, e nel Sud cambia da comune a comune.** Con le fonti pubbliche si nominano tutti i servizi ISTAT o quasi in quattro comuni: Molfetta, Battipaglia, Alghero e Bagheria (dove però restano senza nome le 8 sezioni primavera). In Calabria e in Basilicata si nomina **solo il 30-50%**. [fatto per i conteggi; stima per la generalizzazione a regione]
- **Le fonti regionali funzionano solo in Puglia e, a sorpresa, in Campania.**
  - In Puglia l'unione del registro 2023 e del catalogo zerosei 2026/27 copre il 100% dell'elenco vero.
  - In Campania esiste un **"Elenco nidi e micronidi" regionale** (allegato al voucher nidi 2023/24, aggiornato al 04/03/2024, 731 righe). La nota regione lo dava per inesistente. A Battipaglia copre il 79% dell'elenco vero.
  - Altrove le fonti regionali coprono dallo 0 al 50%:
    - Sicilia: decreti singoli e un elenco di nidi comunali finanziati;
    - Sardegna: il SIWE non è pubblico;
    - Basilicata e Calabria: nessun elenco.
- **Quando non c'è una fonte regionale, decide il sito del Comune.**
  - Bagheria pubblica nel bando 2026/27 tutte le strutture convenzionate (100% dei nidi). Alghero copre l'88%, ma per i privati con un avviso del 2018.
  - Rende pubblica solo il proprio nido (17%), Melfi niente (0%).
  - Il sito di Molfetta è protetto da un sistema anti-bot e non si legge con strumenti automatici.
- **Le ricerche web aggiungono poco dove ci sono elenchi pubblici e diventano l'unica fonte dove non ci sono.**
  - A Molfetta e a Battipaglia non hanno trovato nessuna struttura in più.
  - A Rende hanno trovato 5 delle 6 unità dell'elenco vero, a Melfi 2 su 2.
  - A Bagheria hanno trovato 3 ludoteche o baby parking che non compaiono in nessun elenco ufficiale.
  - Lo strumento di ricerca usato indicizza male le piccole strutture locali, e le directory commerciali bloccano l'accesso automatico o hanno dati vecchi e sbagliati: indirizzi comunali dismessi, un nido di un altro comune.
- **Per lo 3-6 il MIM basta quasi sempre: 89-100% dell'elenco vero.** I buchi sono 1-2 scuole private per comune, presenti solo sul sito del Comune o nelle directory, con stato incerto. In nessun comune ho trovato scuole dell'infanzia non paritarie. Gli elenchi verificati (Sardegna, Sicilia) ne contano pochissime in tutta la regione.
- **Le sezioni primavera sono il buco comune.** Stanno quasi sempre dentro scuole dell'infanzia paritarie, ma né il MIM né i registri sociali (salvo la Puglia) dicono quali paritarie le hanno. A Bagheria sono 8 su 14 servizi ISTAT e nessuna fonte le nomina.

## Tabella 1 - Copertura per fonte e per regione (servizi 0-3)
Percentuale dell'elenco vero del comune contenuta in ciascuna fonte. "n.d." = fonte inesistente o non leggibile.

| Regione (comune) | ISTAT 2024 atteso | Elenco vero | Registro o elenco regionale | Altra fonte regionale (misure, decreti) | Sito del Comune | Ambito | MIM (solo come scuola ospite) | Web e siti dei gestori | Nominati rispetto a ISTAT [stima] |
|---|---|---|---|---|---|---|---|---|---|
| Campania (Battipaglia) | 12 | 14 | **79%** (elenco nidi e micronidi 2024) | – | 36% | 36% (voucher conciliazione) | 0% | 29% | circa 100% (11 su 12 tipologie trovate; 1 spazio gioco mancante, 3 micronidi in più) |
| Puglia (Molfetta) | 13 | 20 | **75%** (registro 2023) | **75%** (catalogo zerosei 2026/27); unione 100% | n.d. (anti-bot) | – | 15% | 20% | 100% (l'elenco vero supera ISTAT) |
| Basilicata (Melfi) | 5 | 2 | n.d. | 0% | 0% | 0% | 0% | **100%** | **40%** |
| Calabria (Rende) | 10 | 6 | n.d. | 0% | 17% | 0% | 0% | **83%** | **30-50%** |
| Sicilia (Bagheria) | 14 | 8 servizi più le sezioni primavera dentro 11 paritarie | n.d. (albo solo a decreti) | 50% (All. A D.D.G. 715/2026 + 2 decreti dell'albo) | **100%** (bando 2026/27) | – | 38% | 25% | 100% dei nidi; 0% delle 8 sezioni primavera per nome |
| Sardegna (Alghero) | 9 | 8 | n.d. (SIWE non pubblico) | 0% (Nidi gratis senza elenco) | **88%** (privati: avviso 2018) | – | 38% | 50% | 89% |

## Tabella 2 - Strutture trovate solo con ricerche web
| Regione (comune) | Solo web | Quali | Attese ISTAT ma non trovate |
|---|---|---|---|
| Campania (Battipaglia) | 0 (0-3) | – (3 "scuole private materne" solo in directory, non verificate) | 1 spazio gioco privato |
| Puglia (Molfetta) | 0 | – | 0 |
| Basilicata (Melfi) | 2 (100% dell'elenco vero) | nido e sezione primavera della paritaria "Bovio Sellitti" | 3-4: 2 nidi pubblici, 1 sezione primavera, 1 servizio domiciliare |
| Calabria (Rende) | 5 (2 solo da estratti) | nido del Polo d'infanzia Unical; nido e sezione primavera "La Filastrocca"; "Il Mondo di Lolli"; "Bimbi Felici" | 4-6 nidi privati |
| Sicilia (Bagheria) | 3, **fuori dall'elenco vero** | un nido-ludoteca e due baby parking o ludoteche, assenti da Comune, albo e ISTAT: probabilmente non autorizzati [stima] | nessun nido; 8 sezioni primavera non identificabili per nome |
| Sardegna (Alghero) | 1 | nido "Il Girasole" della Fondazione Lavagna (pagina Facebook) | 1 sezione primavera pubblica |
| **Totale** | **11 nell'elenco vero + 3 fuori** | | **da 9 a 12 servizi ISTAT senza nome, più 8 sezioni primavera a Bagheria** |

## Tabella 3 - Campi utili ai genitori: dove si trovano
Campione di 3-5 strutture per comune.

| Campo | Servizi pubblici (comunali o d'ambito) | Privati | Scuole dell'infanzia statali | Fonte tipica |
|---|---|---|---|---|
| Rette | sì in 4 comuni su 6, per fasce ISEE (Battipaglia, Bagheria; Alghero solo il riferimento alla delibera 2011; Rende) | quasi mai. Eccezioni: una carta dei servizi a Molfetta (2019, 250-800 €/mese); quota per i convenzionati a Bagheria (200 €/mese + voucher 3.000 €) | gratuite | avvisi comunali di iscrizione (PDF); carte dei servizi dei gestori |
| Orari | sì (avvisi, regolamenti) | raramente (siti dei gestori, directory) | sul sito dell'istituto (40 ore settimanali, ridotto 25) | avvisi; siti degli istituti |
| Età accolte | sì | sì (registro Puglia: fascia d'età; siti) | 3-6 | registro regionale; siti |
| Posti | sì | sì dove c'è un registro (Puglia, Campania, decreti in Sicilia) | no (alunni per scuola nei dataset MIM 2024/25) | registri regionali, decreti |
| Scadenze iscrizione | sì, ma l'avviso dell'anno in corso non sempre si trova (Alghero 2026/27, Molfetta) | quasi mai ("iscrizioni tutto l'anno") | iscrizioni nazionali | avvisi comunali |
| Progetto pedagogico | carta dei servizi a volte (PDF scansionati) | generico sui siti | PTOF sui siti degli istituti (non letti) | siti |
| Lingua | non trovato in nessun comune | non trovato | non trovato | – |
| Inclusione e disabilità | sì: priorità o punteggio in graduatoria (Battipaglia, Bagheria, Alghero) | raramente (una carta dei servizi a Molfetta) | non verificato | avvisi comunali |
| Contatti del gestore | uffici comunali | catalogo zerosei (Puglia) ed elenco regionale (Campania), con email e telefoni in parte personali | MIM (email, PEC, sito) | registri e cataloghi regionali |

## Cosa cambia rispetto alle stime della sintesi regioni
Le stime di [[Regioni Sud e isole - sintesi]] erano per regione. Qui misuro un solo comune, quindi il confronto è indicativo [stima].
- **Campania: stima da rivedere al rialzo.** L'elenco regionale nidi e micronidi 2024 copre i nidi di tutti i comuni, non solo Napoli. La stima "25-35%" vale ancora per sezioni primavera e servizi integrativi, non per i nidi.
- **Puglia: confermata, anzi superata.** Registro più catalogo danno il 100% a Molfetta, più del conteggio ISTAT.
- **Sicilia: stima "20-30%" troppo bassa per i comuni che pubblicano il bando dei convenzionati** (Bagheria 100% dei nidi). Resta bassa dove il Comune non pubblica. L'albo regionale resta inutilizzabile come elenco.
- **Sardegna: "sotto il 15%" troppo pessimista per Alghero (89%)**, grazie agli avvisi comunali. Restano però vecchi e senza conferma dell'attività attuale.
- **Basilicata e Calabria: confermate le stime basse** (40% e 30-50% dei servizi ISTAT nominati, quasi tutti solo grazie al web).

## Lezioni per il prodotto
1. **Sequenza di raccolta consigliata per il Sud** [stima]:
   - elenchi regionali dove esistono (Puglia: registro e catalogo; Campania: elenco nidi e micronidi);
   - avvisi e bandi comunali (nidi comunali e convenzionati);
   - MIM per le scuole dell'infanzia;
   - siti e pagine social dei gestori, per Calabria e Basilicata e per le sezioni primavera;
   - verifica finale con il conteggio ISTAT per comune, per sapere quanti servizi mancano.
2. **Il conteggio ISTAT è un buon allarme ma non un tetto.** A Molfetta e Battipaglia l'elenco vero supera ISTAT per aperture recenti o record superati. A Melfi e Rende ISTAT segnala servizi che nessuna fonte pubblica nomina.
3. **Sezioni primavera e servizi integrativi vanno cercati presso le scuole paritarie e i gestori**: nessuna fonte nazionale li nomina.
4. **Le richieste di accesso civico più utili**, perché sbloccano la maggior parte dei buchi:
   - Calabria: la rilevazione regionale dei servizi 0-3;
   - Sardegna: estratto SIWE, sezione E;
   - Basilicata: elenco dei privati della DGR 211/2026;
   - comuni senza elenco: autorizzazioni rilasciate.
   La banca dati INPS dei servizi abilitati, alimentata per legge dai Comuni, sarebbe la soluzione nazionale, ma oggi si consulta solo con SPID ([[INPS - Agenda asili nido e mappa Bonus nido]]).

## Limiti del test
- Un comune per regione: i risultati descrivono il comune, non la regione.
- Strutture non autorizzate (baby parking, ludoteche) cercate solo con le ricerche web. Mappe (Google Maps) e social non sono stati esplorati in modo sistematico.
- Siti non letti:
  - Comune di Molfetta: protezione anti-bot, non aggirata;
  - albo pretorio di Rende e sito della Regione Calabria: 403;
  - albo di Melfi: errore di connessione;
  - Pagine Gialle: 403;
  - SIWE: nessuna risposta.
- Diversi dati sui privati vengono da estratti dei motori di ricerca, segnalati come tali nelle note per comune.
- Ricerche web usate: 21 dal coordinatore e 27 dal subagente.

## Fonti principali (accesso 2026-11-20)
- ISTAT servizi 0-3 per comune: https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.<codice comune>....?startPeriod=2023
- ISTAT popolazione: https://esploradati.istat.it/SDMXWS/rest/data/IT1,22_289,1.0/A.<codice comune>.JAN.9.TOTAL.99?startPeriod=2025
- MIM anagrafe 2026/27: https://dati.istruzione.it/opendata/opendata/catalogo/elements1/SCUANAGRAFESTAT20262720260901.csv e SCUANAGRAFEPAR20262720260901.csv
- Registro Puglia: [[Regione Puglia - Registro strutture e servizi]]; catalogo zerosei: [[Regione Puglia - Catalogo telematico zerosei]]
- Elenco nidi e micronidi Regione Campania (04/03/2024): https://www.comune.battipaglia.sa.it/download/ec270586b4914122964f627510ff1df9/elenco_aggiornato_al_04.03.24.pdf
- Bando servizi educativi Bagheria 2026/27: https://comune.bagheria.pa.it/index.php/it/news/on-line-il-bando-per-i-servizi-educativi-e-assegnazione-voucher-anno-2026-2027
- Elenchi delle scuole non paritarie 2026/27: Sardegna (USR) https://www.mim.gov.it/web/usr-sardegna/-/avviso-pubblico-elenco-scuole-non-paritarie-della-regione-sardegna-a-s-2026-2027; Sicilia (Regione) https://www.regione.sicilia.it/system/files/2026-06/2246%20DDG%20del%2004_06_2026%20albo%20scuole%20non%20paritarie%202026_2027_0.pdf
- Altre fonti: nelle note per comune.
