---
tipo: test-completezza
comune: "Melfi"
provincia: "PZ"
regione: "Basilicata"
popolazione: "16.961 residenti al 1/1/2025 (ISTAT, dataflow 22_289, https://esploradati.istat.it/SDMXWS/rest/data/IT1,22_289,1.0/A.065014+076048+078102.JAN.9.TOTAL.99?startPeriod=2025, accesso 2026-11-20, dato fornito dal coordinatore)"
criterio_scelta: "comune tra 15.000 e 100.000 abitanti, non capoluogo di regione; scelto dal coordinatore come campione lucano di piccola dimensione (motivo specifico non comunicato al subagente)"
data: 2026-11-20
sessione: P10
tags: [test-completezza, nidi, basilicata]
---
# Test completezza - Melfi

Regione: [[Basilicata]]. Pagine lette il 2026-11-20 con curl. [fatto] = letto alla fonte; [stima] = deduzione; "estratto" = solo estratto del motore di ricerca.

## In breve
- **Nessuna fonte pubblica nomina i servizi 0-3 pubblici di Melfi.** L'ISTAT ne conta 2 (nidi comunali), ma il sito del Comune, l'albo e la trasparenza, i siti regionali e il web non danno né il nome né l'indirizzo. L'esistenza di un nido comunale è confermata solo indirettamente [fatto: sito della scuola Bovio Sellitti; estratto: graduatoria Asmel per "educatore asilo nido" del Comune].
- **Elenco vero 0-3: 2 servizi identificati** (asilo nido e sezione primavera della scuola paritaria "Bovio Sellitti"), **entrambi trovati solo sul sito del gestore (100% solo web)**. Copertura: **Comune 0%, Regione o ambito 0%, MIM 0%**.
- **Rispetto all'ISTAT 2024** (5 servizi): identificati 2 su 5 (40%). **Non trovati: 2 nidi pubblici, 1 sezione primavera privata, 1 servizio domiciliare privato.** In più, l'ISTAT non conta nidi privati, mentre il Sellitti dichiara un "asilo nido": forse è classificato diversamente o non è autorizzato come nido [stima].
- **3-6: elenco vero 11 = MIM 11 (100%)**. Il Comune non pubblica un elenco delle scuole; nessuna scuola non paritaria trovata.
- Il sito comunale (ASP.NET) non ha una ricerca interrogabile né una sitemap (404); il motore di ricerca dell'albo (Halley) dà errore di connessione.

## Totale atteso
- **ISTAT 2024** ([[ISTAT - Nidi e servizi integrativi per la prima infanzia]], dataflow 47_850, estratto dal coordinatore): **5 servizi** (2 pubblici, 3 privati). Sono 2 nidi pubblici, 2 sezioni primavera private e 1 servizio in contesto domiciliare privato, per 99 posti.
- **MIM 2026/27** ([[MIM - Anagrafe scuole statali e paritarie]]): **11 scuole dell'infanzia**, 8 statali (I.C. Berardi-Nitti e I.C. Ferrara-Marottoli) e 3 paritarie (Bovio Sellitti, Piccole Orme, L'Albero delle caramelle).

## Elenco vero 0-3
Colonne: Com = sito del Comune e albo; Reg = Regione Basilicata e ambito Vulture-Alto Bradano; MIM; Web = ricerche web e sito del gestore.

| # | Struttura | Tipologia | Gestione | Indirizzo | Com | Reg | MIM | Web | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Asilo nido della scuola paritaria "Bovio Sellitti" | nido | privato (scuola paritaria di un istituto religioso) | Largo Santa Maria De Mattias | – | – | (la scuola compare come infanzia paritaria) | ✓ sito del gestore letto | Il sito non dice età, posti né autorizzazione |
| 2 | Sezione primavera "Bovio Sellitti" | sezione primavera (24-36 mesi, max 18 bambini) | privato | Largo Santa Maria De Mattias | – | – | – | ✓ sito del gestore letto | Il sito scrive che "il Comune non dispone di sezioni intermedie tra l'Asilo Nido e la sezione dei tre anni" |
| (3) | Nido comunale (nome e sede non trovati) | nido | pubblico | non trovato | – | – | – | indizi indiretti | Atteso dall'ISTAT (2 nidi pubblici) |

## Elenco vero 3-6
| Struttura | Gestione | Indirizzo | MIM | Com | Web | Note |
|---|---|---|---|---|---|---|
| 8 plessi statali (Castello-Cattedrale, S. Teodoro, Cappuccini, Chiuchiari, Foggiano, Marottoli, Valleverde, Bicocca) | statale | vari (Bicocca: "Non Disponibile" nel MIM) | ✓ | – | – | |
| Scuola materna paritaria "B. Sellitti" | paritaria | Largo S. Maria De Mattias | ✓ | – | ✓ sito | Circa 85 iscritti in 3 sezioni; ha una sezione primavera annessa |
| Piccole Orme | paritaria | Via delle Magnolie, c.da Foggiano | ✓ | – | (e) whatschool "0-5 anni" | Forse ha anche un servizio 0-3 [stima da estratto]: candidata per la seconda sezione primavera ISTAT |
| L'Albero delle caramelle | paritaria | Via Antonio de Curtis | ✓ | – | tuttitalia (copia dei dati MIM) | Nessun sito trovato |

Elenco vero 3-6: **11**. Non paritarie: nessuna trovata (elenco USR Basilicata non cercato).

## Copertura per fonte
| Fonte | 0-3 trovate / 2 | % | 3-6 trovate / 11 | % | Note |
|---|---|---|---|---|---|
| Sito del Comune e albo | 0 | 0% | 0 | 0% | Area "Istruzione" con 3 pagine (mense, trasporto, libri); niente sul nido |
| Regione Basilicata (avvisi "Un nido per l'infanzia", allegati 2026) | 0 | 0% | – | – | Melfi non è tra i comuni finanziati; la graduatoria della misura privati (DGR 211/2026) non è pubblicata ([[Regione Basilicata - Avvisi Un nido per l infanzia]]) |
| Ambito Vulture-Alto Bradano | 0 | 0% | – | – | Nessun sito o avviso sui nidi trovato (capofila Rapolla secondo un estratto) |
| MIM anagrafe | 0 | 0% | 11 | 100% | |
| Ricerche web e siti dei gestori | 2 | 100% | 3 | 27% | Sito Bovio Sellitti; tuttitalia e whatschool ricopiano i dati MIM |
| INPS | non consultata | – | – | – | Citata soltanto ([[INPS - Agenda asili nido e mappa Bonus nido]]) |

Rispetto all'atteso ISTAT (5 servizi) la copertura dell'elenco nominativo è **40%**.

## Trovate solo con ricerche web
- Asilo nido "Bovio Sellitti" (privato).
- Sezione primavera "Bovio Sellitti" (privata).

## Attese ma non trovate
- **2 nidi pubblici** (ISTAT): nessun nome, indirizzo o avviso di iscrizione sul sito del Comune né sul web (11 ricerche).
- **1 sezione primavera privata** (ISTAT ne conta 2; trovata solo quella del Sellitti). Candidata: Piccole Orme (estratto "0-5 anni") [stima].
- **1 servizio educativo in contesto domiciliare privato** (es. nido familiare o tagesmutter, L.R. 16/2016): non trovato.
- Nessun baby parking o ludoteca trovato.

## Campi disponibili
| Struttura | Rette | Orari | Età | Posti | Scadenze | Progetto pedagogico | Lingua | Inclusione |
|---|---|---|---|---|---|---|---|---|
| Sezione primavera Bovio Sellitti | non trovato | solo orari della segreteria (lun-ven 8:00-9:30 e 15:00-16:00) | ✓ 24-36 mesi | ✓ massimo 18 | non trovato | ✓ descrizione (attività, rapporto 1 educatrice + 1 assistente) | non trovato | non trovato |
| Asilo nido Bovio Sellitti | non trovato | non trovato | non indicata ("i più piccoli") | non trovato | non trovato | ✓ descrizione generica | non trovato | non trovato |
| Scuola dell'infanzia Bovio Sellitti | non trovato | non trovato | ✓ 3-5 anni | ✓ circa 85 iscritti | non trovato | ✓ storia, PTOF (pagina) | ✓ attività di inglese | non trovato |
| Nido comunale | non trovato | non trovato | non trovato | non trovato | non trovato | non trovato | non trovato | non trovato |
| Infanzia statale (es. Marottoli) | – | non trovato | 3-6 | non trovato | iscrizioni MIM | sito dell'istituto comprensivo (MIM), non letto | – | – |

## Fonti consultate
| URL | Accesso | Letta | Esito |
|---|---|---|---|
| https://www.comune.melfi.pz.it/ | 2026-11-20 | sì | Home; la ricerca interna è un controllo ASP.NET non interrogabile via URL; /sitemap.xml dà 404 |
| https://www.comune.melfi.pz.it/schedaArgomento/35 (Istruzione) e /schedaArgomento/11 (Assistenza sociale) | 2026-11-20 | sì | Nessuna pagina sul nido |
| https://www.comune.melfi.pz.it/page/contributi-per-le-attivit-educative-e-ricreative-d | 2026-11-20 | sì | Sospesi i contributi per i centri invernali 2026; non riguarda il nido |
| https://melfi.trasparenza-valutazione-merito.it/web/trasparenza/albo-pretorio | 2026-11-20 | sì | Raggiungibile; la ricerca per "asilo nido" non dà risultati |
| https://halleyweb.com/c076048/mc/mc_p_ricerca.php | 2026-11-20 | no | Errore di connessione (connection reset) |
| https://portalebandi.regione.basilicata.it/wp-content/uploads/2026/10/allegato_risultato_6ac5f716ef945.pdf e .../2026/09/allegato_risultato_6ab509089c349.pdf | 2026-11-20 | sì | Melfi non presente |
| API https://portalebandi.regione.basilicata.it/wp-json/wp/v2/avvisi-e-bandi?search=infanzia | 2026-11-20 | sì | Nessuna graduatoria nuova |
| https://www.scuolaboviosellitti.it/ con /p/asilo-nido.html, /p/sezione-primavera.html, /p/contatti-e-orari.html, /p/scuola-dellinfanzia.html | 2026-11-20 | sì | Nido e sezione primavera |
| https://www.tuttitalia.it/basilicata/31-melfi/34-scuole/ | 2026-11-20 | sì | Copia dell'anagrafe MIM |
| https://www.comuni-italiani.it/076/048/scuole/ | 2026-11-20 | no | 403 |
| https://www.concorsipubblici.com/comune-di-melfi-avviso-funzionario-istruttore-operatore-educatore-asilo-nido-educatore | – | no (estratto) | Profilo "educatore asilo nido" nella graduatoria Asmel del Comune |
| https://it.whatschool.ai/en/italy/school/piccole-orme-melfi | – | no (estratto) | "0-5 anni" |

## Cosa resta aperto
- Nome, sede, posti e rette dei 2 nidi comunali: chiedere all'Ufficio servizi sociali o istruzione del Comune, oppure cercare nell'albo Halley con una connessione che funzioni.
- Graduatoria della misura regionale per i privati (DGR 211/2026): quando uscirà potrebbe nominare i privati autorizzati di Melfi.
- Servizio domiciliare e seconda sezione primavera: nessuna traccia.
- Elenco USR Basilicata delle scuole non paritarie: non cercato.
