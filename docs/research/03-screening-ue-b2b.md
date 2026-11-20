# 03 — Screening: UE/internazionale e B2B (#13, #14, #15, #24, #25, #33, #34, #35, #36, #37)

Data di accesso alle fonti: 2026-11-19. Metodo: `docs/01-metodo.md` (gate G1-G5), formato: `docs/research/_brief.md`.

> **Limite importante di questa passata.** Il budget di ricerche web condiviso della sessione si è esaurito a metà lavoro, e il recupero diretto delle pagine (WebFetch) è bloccato dalla rete della sessione (host non raggiungibili, es. partoo.co, developers.google.com, lanazione.it). Quindi:
> - **#13, #14, #15, #24, #25, #33**: ricerca completata (4-9 ricerche ciascuno).
> - **#34, #35, #36, #37**: **ricerca specifica non eseguita**. Riporto solo le evidenze raccolte per altri candidati e utili anche qui, con il loro URL. Tutto il resto è "non trovato" o marcato **[stima]**. Per regola, questi quattro sono **INCERTO** e vanno ripresi in una passata successiva.
>
> Le fonti di molti prezzi sono aggregatori (Capterra, G2) o concorrenti: sono indicate come tali. I testi delle fonti sono stati letti tramite gli estratti del motore di ricerca, non con l'apertura diretta delle pagine.

Legenda: **[fatto]** = riportato da una fonte con URL · **[stima]** = ragionamento dichiarato, senza fonte diretta.

---

### #13 — Finanziamenti UE (Horizon, LIFE, Interreg…)
**Verdetto:** PASS — tutti i gate superati, ma il dato viene da una fonte unica, pulita e con API gratuita, e il mercato è già pieno di strumenti AI: C4 e C8 saranno bassi.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Servizio informativo e di matching: non è un'attività riservata. Non ho trovato fonti che indichino un albo per la "progettazione europea"; i concorrenti (EMDESK, Grantbot, Welcomeurope) operano come normali SaaS. | Non trovato (nessuna fonte specifica) |
| G2 Dati raggiungibili | sì | [fatto] Il portale Funding & Tenders espone una Search API pubblica; per i dati pubblici (call aperte) non serve autenticazione. Endpoint `api.tech.ec.europa.eu/search-api/prod/rest/search` citato da codice di terzi. Esistono vari scraper Apify (da $3 per 1.000 call). | https://www.emdesk.com/horizon-2020-horizon-europe-basics-guide/eu-funding-tenders-portal-api-guide · https://apify.com/tinyrex/eu-grants-scraper |
| G3 Pagatore identificabile | sì | [fatto] Science\|Business Funding Newswire: abbonamenti di gruppo da 600 € + IVA. Grantbot.pl: 49/99/299 €/mese. EMDESK: 15 €/utente/mese (gestione progetti). HELP AI GPT: 9 €/mese. | https://sciencebusiness.net/funding-newswire-subscriptions · https://www.capterra.com/p/10047180/Grantbot-pl/ · https://www.emdesk.com/ · https://globaldisruption.gumroad.com/l/jykoy |
| G4 Distribuzione senza pubblico | sì (debole) | [fatto] Un concorrente (grantedai.com) ha già una pagina per ogni call, cioè SEO programmatica. [stima] Il target B2B è elencabile: le organizzazioni registrate nel portale (Partner Search Tool) e i beneficiari in CORDIS. | https://grantedai.com/grants/horizon-europe-next-generation-ai-agents-european-commission-c3d4e5f6 · https://www.b2match.com/e/eu-clean-industrial-deal-brokerage/opportunities/UGFydGljaXBhdGlvbk9wcG9ydHVuaXR5OjIzOTMwMQ== |
| G5 Rischio legale gestibile | sì | [fatto] Il riuso dei dati del portale e di TED è consentito dalla Decisione 2011/833/UE, con attribuzione (lo dichiara uno strumento di monitoraggio terzo). I dati personali sono marginali (contatti dei PIC). | https://apify.com/gabriel_cr/eu-tenders.md |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| Portale Funding & Tenders (CE) + app | https://commission.europa.eu/funding-tenders/find-calls-tender_en | Gratis | La CE stessa ha pubblicato un report sull'esperienza utente ("Moving Towards Client Centricity"); il contenuto non è stato letto. https://www.ukro.ac.uk/news/ec-report-the-funding-tenders-portal-from-a-clients-perspective-moving-towards-client-centricity/ |
| Welcomeurope | https://www.welcomeurope.com/en/programs | Alert gratuiti; un livello a pagamento non è stato verificato | Non verificati |
| Science\|Business Funding Newswire | https://sciencebusiness.net/funding-newswire-subscriptions | Gruppo da 600 € + IVA | Newsletter editoriale, senza matching |
| Contexity sci-fund EU | https://www.contexity.ch/?p=5316 | Prova di 10 giorni; prezzi non trovati | Solo Horizon |
| Grantbot.pl | https://www.capterra.com/p/10047180/Grantbot-pl/ | 49/99/299 €/mese | Focus sulla scrittura, mercato PL |
| AI startup (InsightMatches, Grants8, Horizon Alliance, ProjectAdvisoryAI, Horizon Search, Sploro) | https://www.ai-market-watch.com/company/insightmatches · https://horizon.eu.com/about · https://sploro.eu/find-european-funding-ai-cascade-funding-matcher/ | Non trovato | Molte sono pre-lancio o in test: il segmento è affollato ma immaturo |
| IT: BandoFacile, Bando Pilot, Eunews bandi (da 5,75 €/mese, dato datato) | https://www.g2.com/products/bandofacile/discuss · https://www.eunews.it/?p=148035 | Vedi a sinistra | Coprono soprattutto la finanza agevolata nazionale |

**Segnali di domanda:** [fatto] Uffici di ricerca e reti nazionali pubblicano newsletter con le call consolidate (es. Università di Žilina), cioè il lavoro di filtraggio viene fatto a mano: https://pioneer.uniza.sk/wp-content/uploads/2026/06/Consolidated-list-of-funding-opportunities_EU-calls_2026-2027_Newsletter-July-2026-1.pdf. Volumi di ricerca: non trovato (servono Google Trends o uno strumento SEO).

**Segnali di dolore:** [fatto] Survey della CE sull'uso del portale (2022) e problemi di invio segnalati dal NCP tedesco: https://www.nks-msc.de/en/Tips-and-tricks-for-submitting-applications-2345.html. Science|Business ("bigger and more complex than ever"): https://sciencebusiness.net/news/horizon-europe-bigger-and-more-complex-ever-some-cases. Lamentele concrete su Reddit o forum: non trovate.

**Test chatbot (C6):** [stima] Domande come "quali call Horizon sono aperte sul tema X" sono ben coperte da un chatbot con ricerca web, perché le call sono pagine pubbliche e indicizzate. Esistono già server MCP dedicati (EUACC.ai: https://mcpservers.org/servers/www-euacc-ai). Resistono meglio gli alert, lo storico (chi ha vinto, con chi) e il matching continuo sul profilo dell'ente.

**Motivo più forte per scartarlo:** la fonte è unica, pulita e servita da un'API gratuita, quindi chiunque la replica in pochi giorni (lo dimostrano le decine di attori Apify). Il vantaggio dello scraping è vicino a zero, e il segmento "AI per bandi UE" ha già molti entranti.

**Note per lo scoring:** C4 basso (1-2) salvo integrare fonti frammentate, come le cascade funding/open call pubblicate su centinaia di siti di progetto (vedi Sploro e i nuovi candidati). C3 medio: prezzi tra 9 e 300 €/mese, enti pubblici lenti a comprare. C5: SEO per call possibile ma già fatta. C6 medio-basso.

---

### #14 — Gare d'appalto pan-UE
**Verdetto:** PASS — pagatori evidenti con prezzi alti, ma TED è una fonte aperta e già commoditizzata; il valore sta nei portali nazionali sotto soglia.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Servizio di informazione e alert. Nessuna autorizzazione trovata; i concorrenti operano come SaaS. | Non trovato (nessuna fonte specifica) |
| G2 Dati raggiungibili | sì | [fatto] La TED Search API è accessibile in forma anonima; esiste il bulk download giornaliero e mensile in XML (eForms e schema TED). Circa 800.000 avvisi l'anno, oltre 815 mld €. | https://ted.europa.eu/en/simap/developers-corner-for-reusers · https://op.europa.eu/en/web/ted-reusers-workshops/questions-and-answers-2025 · https://single-market-economy.ec.europa.eu/single-market/public-procurement/digital-procurement/tenders-electronic-daily_en |
| G3 Pagatore identificabile | sì | [fatto] TenderWolf: 79 €/mese (Standard), 149 €/mese (Professional). Tracker Intelligence: da 1.750 a 6.995 £/anno (listino 2024); "da circa 5.100 £/anno" secondo un concorrente. Tendium: Light da 125 €/mese. Tenderwell: da 540 €/anno. | https://www.tenderwolf.com/en/pricing · https://trackerintelligence.com/?p=19371 · https://jorpex.com/compare/jorpex-vs-tracker/ · https://europeanpurpose.com/tool/tendium · https://www.capterra.com/p/10047567/Tenderwell/ |
| G4 Distribuzione senza pubblico | sì | [fatto] Gli avvisi di aggiudicazione TED sono pubblici, quindi i fornitori che partecipano alle gare sono elencabili per CPV e paese (outbound). [stima] SEO per CPV × paese × ente. | https://apify.com/tidelane/ted-tenders |
| G5 Rischio legale gestibile | sì | [fatto] I dati TED sono riutilizzabili secondo la politica UE sugli open data. | https://ted.europa.eu/en/help/data-reuse |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| TED (ufficiale) | https://ted.europa.eu/en/news/welcome-to-the-new-ted | Gratis | Copre solo le gare sopra soglia UE |
| TenderWolf | https://www.tenderwolf.com/en/pricing | Free, 79 €, 149 €/mese, Enterprise | Prezzi incoerenti tra le sue stesse pagine (99 €/299 € in una versione di febbraio 2026): https://en.tenderwolf.com/nl/prijzen |
| Tracker Intelligence (UK/IE) | https://trackerintelligence.com/pricing | 1.750-6.995 £/anno | Contratti annuali, minimo 2 anni di attività per i clienti: https://www.trackerintelligence.com/solutions-for-micro-businesses/ |
| Tendium (SE) | https://europeanpurpose.com/tool/tendium | Da 125 €/mese | Poche recensioni: https://www.g2.com/products/tendium |
| Mercell | https://www.capterra.com/p/115670/Negometrix | Non trovato | Poche recensioni (4,7 su 3) |
| Vergabepilot.AI (DE) | https://www.capterra.com/p/10049359/Vergabepilot-AI/ | Free + piano a pagamento | Aggrega più di 300 portali DE/UE: prova che il valore sta nei portali nazionali |
| Decine di attori Apify su TED | https://apify.com/tagadanar/ted-tenders-monitor | Da $0,02 ad alert, da $2,80 per 1.000 gare | Rendono il monitoraggio TED una commodity |

**Segnali di domanda:** [fatto] Volume della fonte: circa 800.000 avvisi l'anno (vedi G2). Molti nuovi entranti nel 2026 (attori Apify, Vergabepilot), cioè domanda percepita. Volumi di ricerca: non trovato.

**Segnali di dolore:** Lamentele dirette su TED (Reddit, forum): non trovate. Indiretto [fatto]: il gran numero di wrapper della TED API suggerisce che l'interfaccia non basta, ma è un'inferenza. Su TenderWolf e Tracker: lamentele non trovate.

**Test chatbot (C6):** [stima] Un chatbot con ricerca web trova le singole gare, ma non fa monitoraggio continuo, deduplica né alert per profilo. Lo strumento operativo (alert, workflow bid/no-bid, storico dei vincitori) resiste.

**Motivo più forte per scartarlo:** il monitoraggio TED è già una commodity (alert a $0,02), e gli incumbent nazionali (Tracker, Tendium, Vergabepilot, i portali italiani del candidato #2) presidiano ciascuno il proprio paese. Un player "pan-UE" deve integrare decine di portali nazionali eterogenei: è un vantaggio per lo scraping, ma è un lavoro grande, con vendita paese per paese.

**Note per lo scoring:** C3 alto (fino a 7.000 £/anno). C4 alto solo se si includono i portali nazionali e regionali sotto soglia (fonti frammentate); basso se ci si ferma a TED. C5 buono (fornitori elencabili dalle aggiudicazioni). Da valutare insieme a #2 (gare IT), con cui condivide l'infrastruttura.

---

### #15 — Studi clinici per pazienti
**Verdetto:** INCERTO (G1, G5) — chi paga esiste (gli sponsor pagano a referral), ma il reclutamento richiede materiali approvati dai comitati etici e il matching tratta dati sanitari (art. 9 GDPR).

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [fatto] Nella UE i materiali di reclutamento (anche online e social) vanno sottoposti al comitato etico insieme al dossier. Il vincolo ricade sullo sponsor, ma limita cosa può mostrare la piattaforma. [stima] Un matching di "idoneità" su dati clinici potrebbe rientrare nella definizione di software medicale (MDR): non verificato. | https://uzleuven.be/en/advertisementrecruitment-clinical-studies-guidelines-ec-research · https://www.osborneclarke.com/insights/eu-introduces-harmonised-template-clinical-trial-recruitment-and-consent |
| G2 Dati raggiungibili | sì | [fatto] Ricerca pubblica CTIS (euclinicaltrials.eu), open data AIFA sulle sperimentazioni con almeno un centro italiano, mappa dei centri. | https://www.ema.europa.eu/en/human-regulatory-overview/research-development/clinical-trials-human-medicines/clinical-trials-information-system/development-clinical-trials-information-system · https://www.aifa.gov.it/-/sul-portale-aifa-open-data-sc · https://www.aifa.gov.it/it/mappa-dei-centri-di-sperimentazione-clinica |
| G3 Pagatore identificabile | sì | [fatto] Antidote incassava fee di referral dalle aziende farmaceutiche (2018). TrialScope Connect: gli sponsor pagano a performance. ePatientFinder: modello pagato dagli sponsor. | https://www.statnews.com/2018/09/06/with-big-name-backing-a-startup-launches-to-match-cancer-patients-with-clinical-trials/ · https://www.trialscope.com/trialscope-connect/ · https://www.beckershospitalreview.com/healthcare-information-technology/startup-insider-4-questions-with-epatientfinder-ceo-tom-dorsett/ |
| G4 Distribuzione senza pubblico | incerto | [fatto] Power (USA) usa la SEO programmatica: una pagina per patologia, e dichiara 1 milione di pazienti l'anno. [stima] In Europa vale lo stesso schema, ma sono query sanitarie (YMYL), dove pesa l'autorevolezza; nella UE manca la prova. | https://www.withpower.com/clinical-trials/hypertension · https://www.withpower.com/for-research-coordinators |
| G5 Rischio legale gestibile | incerto | [fatto] I dati sanitari sono una categoria particolare; anche le fonti di settore avvertono del rischio che i dati medici finiscano a terzi tramite i canali di reclutamento. Il consenso non è la base raccomandata in ambito trial. [stima] Una piattaforma che raccoglie la patologia del paziente per il matching tratta dati art. 9: serve consenso esplicito, una DPIA e probabilmente un DPO. È gestibile, ma è pesante. | https://uzleuven.be/en/advertisementrecruitment-clinical-studies-guidelines-ec-research · https://www.mondaq.com/unitedstates/privacy-protection/1792952/clinical-trials-in-europe-what-us-sponsors-need-to-get-right-under-gdpr-and-ctr |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| CTIS / euclinicaltrials.eu (EMA) | https://www.ema.europa.eu/en/development-clinical-trials-information-system | Gratis | Il go-live è stato rinviato per difficoltà tecniche (stessa fonte); critiche sull'usabilità pubblica non trovate |
| AIFA open data e mappa dei centri | https://www.aifa.gov.it/it/mappa-dei-centri-di-sperimentazione-clinica | Gratis | La ricerca dei centri va fatta su una colonna del dataset: strumento per tecnici |
| Power (USA) | https://www.withpower.com/clinical-trials | Gratis per i pazienti; prezzi per gli sponsor non trovati | Presenza UE non trovata |
| TrialScope Connect | https://www.trialscope.com/trialscope-connect/ | A performance | — |
| TrialGPT (NIH, ricerca) | https://www.ncbi.nlm.nih.gov/research/trialgpt/ | Codice su GitHub | Strumento per clinici, non per pazienti; solo ClinicalTrials.gov |

**Segnali di domanda:** [fatto] In Italia solo l'8% sa come entrare in uno studio, ma il 71% sarebbe disposto: https://www.torrinomedica.it/burocrazia-sanitaria/ricerca-clinica-italia-accedere-studi/. Power dichiara 1 milione di pazienti l'anno negli USA (fonte del vendor, vedi G4). Volumi di ricerca IT: non trovato.

**Segnali di dolore:** il dato 8% contro 71% (sopra) è il segnale più concreto. Lamentele su Reddit o forum: non trovate.

**Test chatbot (C6):** [stima] Un chatbot con ricerca web trova gli studi per patologia e li spiega. TrialGPT mostra che un LLM fa matching di idoneità quasi come i clinici (https://www.nih.gov/news-events/news-releases/nih-developed-ai-algorithm-matches-potential-volunteers-clinical-trials). Restano non sostituibili gli alert su nuovi studi vicini a casa e il contatto con il centro.

**Motivo più forte per scartarlo:** il ricavo dipende dagli sponsor (grande pharma e CRO), cioè da una vendita enterprise lenta. Intanto il prodotto tocca dati sanitari e materiali soggetti al vaglio dei comitati etici. La STAT stessa dubitava che questi servizi diventino business sostenibili (fonte G3).

**Note per lo scoring:** C1 medio (8% contro 71%). C3 potenzialmente alto (referral) ma lento. C5 SEO forte in teoria, YMYL in pratica. Penalità per rischio legale residuo.

---

### #24 — Database aziende per vendite B2B (verticale)
**Verdetto:** PASS a una condizione — solo dati e segnali **a livello di azienda** (tecnologie, assunzioni, registri). Chi vende **contatti di persone** raccolti con scraping in Italia oggi rischia la sanzione: Lusha ha preso 2 milioni di euro nel 2026.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Attività di informazione commerciale. Non ho trovato fonti su autorizzazioni (le agenzie di informazioni commerciali ex art. 134 TULPS non sono state verificate). | Non trovato |
| G2 Dati raggiungibili | sì | [fatto] Atoka si basa su dati Cerved (6 milioni di imprese, 15 milioni di contatti) e INPS per i dipendenti. Le tecnologie usate dai siti si rilevano con lo scraping (BuiltWith, Wappalyzer, attori Apify da $3 per 1.000 domini). | https://atoka.io/it/atoka-api/ · https://apify.com/canadesk/builtwith |
| G3 Pagatore identificabile | sì | [fatto] Clay: Launch 185 $/mese, Growth 495 $/mese. BuiltWith: Basic 295 $/mese (fonte terza). Atoka: crediti, su preventivo. Clay oltre 150 mln $ l'anno di ricavi. | https://crustdata.com/reviews/clay · https://launchspace.net/product/builtwith-pricing-overview/ · https://sacra.com/research/clay-crosses-150m-year/ · https://atoka.io/it/tos/ |
| G4 Distribuzione senza pubblico | sì [stima] | Chi compra (agenzie, SDR, venditori di SaaS verticali) è elencabile e raggiungibile con l'outbound, cioè con il prodotto stesso. Integrazioni/marketplace: Clay ha un marketplace di provider di dati (fonte G3). | https://landbase.com/blog/clay-pricing |
| G5 Rischio legale gestibile | sì solo per dati aziendali; **no** per contatti personali | [fatto] Garante, 14/07/2026: Lusha sanzionata con 2 mln €, divieto di trattamento e cancellazione; il legittimo interesse non è base idonea; scraping dai social; l'aggiornamento continuo dei dati è qualificato come "monitoraggio". Trovanumeri: 60.000 € per scraping di numeri. Provvedimento del 17/04/2026 su contatti presi da Sales Navigator. | https://ppc.land/italy-fines-lusha-2-million-euros-orders-erasure-of-italian-contact-data/ · https://www.punto-informatico.it/vendita-dati-personali-sanzione-2-milioni-lusha/ · https://www.cybersecurity360.it/news/garante-privacy-web-scraping-vietato-serve-idonea-base-di-legittimita/ · https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188 |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| Atoka (Cerved) | https://atoka.io/ | Crediti, su preventivo | Prezzo non pubblico; il dato è generalista, non verticale |
| Apollo.io | https://www.g2.com/products/apollo-io/reviews | Freemium (cifre non verificate) | Dati UE deboli: email che rimbalzano, copertura EMEA più bassa; la conformità GDPR resta a carico dell'utente (fonti in parte concorrenti). https://pipeline.zoominfo.com/sales/apollo-reviews · https://prospeo.io/s/apolloio-reviews |
| Clay | https://clay.com/blog/introducing-clays-new-pricing | Free, 185 $, 495 $/mese, Enterprise | È un orchestratore che compra dati da altri: per un fornitore verticale è un canale, non un nemico |
| BuiltWith | https://builtwith.com/plans | Da 295 $/mese | Solo tecnologie; costoso per le PMI |
| Cognism, Lusha | https://cognism.com/blog/apollo-competitors | Non trovato | Lusha è sotto sanzione in Italia |

**Segnali di domanda:** [fatto] Clay supera i 150 mln $ di ricavi annui (fonte G3), segno che si spende molto per arricchire i lead. Volumi di ricerca per il verticale italiano: non trovato.

**Segnali di dolore:** [fatto] Su G2 molti tag "inaccurate data" per Apollo; i dati europei sono il punto debole (vedi incumbent). Thread Reddit originali: non trovati (citati solo di seconda mano da Prospeo).

**Test chatbot (C6):** [stima] Un chatbot elenca le aziende note di un settore, ma non produce liste complete, fresche ed esportabili con segnali (assunzioni recenti, cambio di tecnologia). Il dato fresco e strutturato resiste.

**Motivo più forte per scartarlo:** il valore che i clienti pagano di più, cioè il contatto della persona giusta, è proprio quello che in Italia è a rischio sanzione. Senza contatti, il prodotto compete con Atoka/Cerved (registri) e BuiltWith (tecnologie) su un pezzo più stretto del valore.

**Note per lo scoring:** C4 alto (siti, annunci di lavoro e registri da unire di continuo, fit forte con lo scraping). C3 alto. Penalità legale da valutare (−3/−5) anche limitandosi ai dati aziendali, perché i titolari di ditte individuali sono persone fisiche. Scegliere il verticale con cura.

---

### #25 — Fiere ed eventi B2B
**Verdetto:** INCERTO (G5) — i dati sono pubblici e c'è chi già paga 100-650 $ per una lista di espositori, ma i termini d'uso degli organizzatori vietano il riuso e c'è il diritto *sui generis*.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Servizio informativo; nessuna licenza trovata. | Non trovato |
| G2 Dati raggiungibili | sì | [fatto] Molti organizzatori pubblicano gratis la lista espositori sul proprio sito. Calendari pubblici: Regione Lombardia (elenchi 2027), database AUMA (oltre 5.000 eventi), EventsEye (oltre 10.000). | https://bizprospex.com/how-to-find-trade-show-exhibitors-and-attendees · https://www.regione.lombardia.it/content/dam/rl/Dec%209712%20All.%20A%20-%20Calendario%20manifestazioni%20fieristiche%20Internazionali%20in%20Lombardia%20per%20l%27anno%202027.pdf · https://neuseeland.ahk.de/en/trade-fairs/useful-trade-fair-tools · https://globaledge.msu.edu/global-resources/resource/11306 |
| G3 Pagatore identificabile | sì | [fatto] ExhibitorsData vende le liste per singola fiera: CES 2025 a 500 $ (1.864 espositori), International Builders Show a 650 $, Spring Fair a 450 $. Expolista vende per evento, senza abbonamento. | https://exhibitorsdata.com/?p=17846 · https://exhibitorsdata.com/product/international-builders-show-exhibitor-list-2024 · https://expolista.com/pricing |
| G4 Distribuzione senza pubblico | sì | [fatto] ExhibitorsData ha una pagina per ogni fiera: SEO programmatica sul nome della fiera più "exhibitor list". [stima] Outbound verso venditori B2B dei settori delle fiere. | https://exhibitorsdata.com/?p=5129 |
| G5 Rischio legale gestibile | incerto | [fatto] Le condizioni di Messe Essen limitano l'uso del portale alla pianificazione della propria visita e vietano il riuso in proprie pubblicazioni. La CGUE (Ryanair) consente di vietare lo scraping per contratto anche senza diritto *sui generis*. Il diritto *sui generis* protegge le banche dati con investimento sostanziale. [stima] Le liste contengono soprattutto dati aziendali (meno GDPR), ma i referenti sono dati personali. | https://www.ipm-essen.de/media/neue-medien/uebergeordnete-dokumente/messe-essen_meine-messe_agb-2.pdf · https://www.pinsentmasons.com/out-law/news/website-operators-can-prohibit-screen-scraping-of-unprotected-data-via-terms-and-conditions-says-eu-court-in-ryanair-case · https://www.twobirds.com/en/insights/2021/global/legal-weapons-in-the-fight-against-data-scraping |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| 10times | https://apify.com/zen-studio/10times-events-scraper | Free + "Prospector" (prezzo non trovato) | Le liste complete richiedono l'abbonamento (fonte concorrente: https://share.transistor.fm/s/08695af1) |
| ExhibitorsData | https://exhibitorsdata.com/pricing | 100-650 $ per fiera | Mercato soprattutto USA; dati una tantum, non monitoraggio |
| Expolista | https://expolista.com/pricing | Per evento | Spesso solo nome dell'azienda e stand, senza referente |
| AUMA (DE) | https://toolbox.auma.de/en/top-navi/help | Gratis | Calendario, niente lead |
| EventsEye | https://globaledge.msu.edu/global-resources/resource/11306 | Non trovato | Directory, niente lead |
| Calendari regionali IT, calendariofiereinternazionali.it | https://www.regione.lombardia.it/content/dam/rl/Dec%209712%20All.%20B%20-%20Calendario%20manifestazioni%20fieristiche%20Nazionali%20in%20Lombardia%20per%20l%27anno%202027.pdf | Gratis | PDF, nessuna ricerca né liste espositori |

**Segnali di domanda:** [fatto] Esiste un mercato di liste a pagamento con più fornitori (ExhibitorsData, Expolista, BizProspex) e una guida di Apollo dedicata a come raggiungere gli espositori: https://www.apollo.io/insights/find-and-reach-the-exhibitors-and-attendees-for-an-upcoming-trade-show. Volumi di ricerca IT ("lista espositori + nome fiera"): non trovato.

**Segnali di dolore:** [fatto] Le directory degli espositori di solito hanno nome dell'azienda e stand, non il responsabile marketing (BizProspex, fonte G2). Lamentele su forum: non trovate.

**Test chatbot (C6):** [stima] Il calendario fiere è ben coperto da un chatbot (informazione pubblica e statica). La lista espositori completa ed esportabile, con alert su "nuovi espositori nel mio settore", non lo è.

**Motivo più forte per scartarlo:** il dato vale soprattutto in finestre stagionali (prima e dopo la fiera), è legalmente fragile (termini d'uso degli organizzatori) e gli organizzatori stessi possono venderlo o chiuderlo. Il calendario da solo non si monetizza.

**Note per lo scoring:** C4 medio-alto (centinaia di siti di fiere con formati diversi, aggiornamento continuo prima di ogni edizione). C5 buono (pagina per fiera). C3 medio (transazioni una tantum da 100-650 $). Penalità per stagionalità e rischio contrattuale.

---

### #33 — Monitoraggio prezzi dei concorrenti per e-commerce di nicchia
**Verdetto:** PASS — gate superati e pagatori chiari, ma il mercato è affollato e gli utenti attuali sono soddisfatti (4,7-4,8). Lo spazio c'è solo dove il matching per EAN non funziona.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Software per e-commerce; nessuna licenza. | Non trovato (nessuna fonte specifica) |
| G2 Dati raggiungibili | sì | [fatto] Gli strumenti esistenti fanno scraping dei siti concorrenti (Prisync "SmartMatch" cerca gli URL sul web); il catalogo lo fornisce l'utente. | https://capterra.com/p/153451/Prisync/reviews/ |
| G3 Pagatore identificabile | sì | [fatto] Prisync da 99 $/mese; Pricefy free fino a 50 SKU, poi da 49 $/mese (dato del vendor); Price2Spy Basic 157,95 $/mese per 2.000 URL (G2); Pricemole 99 $/mese per 100 SKU. | https://www.g2.com/compare/pricefy-vs-prisync · https://www.pricefy.io/comparisons/prisync-vs-pricefy · https://www.g2.com/compare/price2spy-vs-pricefy · https://apps.shopify.com/pricemole?locale=it |
| G4 Distribuzione senza pubblico | sì | [fatto] App store delle piattaforme (Shopify: Pricefy, Price Parrot, Pricemole) e directory di software (Capterra IT ha una categoria dedicata). | https://apps.shopify.com/pricefy-io?locale=it · https://www.capterra.it/directory/34295/competitor-price-monitoring/software |
| G5 Rischio legale gestibile | sì [stima] | I prezzi non sono dati personali; restano i termini d'uso dei siti monitorati e misure anti-bot. Non ho trovato contenziosi su price monitoring. | Non trovato |

**Incumbent**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| Prisync | https://www.capterra.com/p/153451/Prisync/pricing/ | Da 99 $/mese | Matching basato su EAN/GTIN; prezzi errati su alcuni siti; manca l'alert per URL rotti; l'export dello storico non è possibile. https://www.g2.com/products/prisync/reviews/prisync-review-5137281 · https://www.softwareadvice.co.uk/software/151258/prisync |
| Pricefy | https://www.pricefy.io/comparisons/prisync-vs-pricefy | Free, da 49 $/mese | Aggiornamento ogni 12 ore |
| Price2Spy | https://www.getapp.com/sales-software/a/price2spy/reviews/ | 39,95-157,95 $/mese (fonti discordanti) | Non verificati |
| NetRivals (Lengow) | https://www.lengow.com/it/offerte/netrivals/ | Non trovato | Enterprise |
| Minderest, Competera, Priceva, Multiply, SmapraTracker | https://priceva.com/blog/prisync-alternatives | Vari | Non verificati |

**Segnali di domanda:** [fatto] Numerosi prodotti e app con centinaia di recensioni (Prisync: circa 165 su G2, 129 su Capterra, fonte sotto). Volumi di ricerca IT ("monitoraggio prezzi concorrenti"): non trovato.

**Segnali di dolore:** [fatto] Le lamentele riguardano il matching (solo per barcode, prodotti del mercato grigio inclusi per errore), gli errori di scraping e il setup manuale. Ma i voti medi sono alti: G2 circa 4,7, Capterra 4,8. https://www.g2.com/products/prisync/reviews · https://www.g2.com/products/prisync/reviews/prisync-review-8236594

**Test chatbot (C6):** [stima] Un chatbot non fa monitoraggio continuo di centinaia di SKU con storico e alert: resiste bene. Le risposte AI degli shopping engine (Google Shopping) però mostrano già i prezzi, a costo zero, per i prodotti con EAN.

**Motivo più forte per scartarlo:** è una categoria matura con prezzi d'ingresso bassi (49-99 $) e utenti soddisfatti, quindi c'è poco dolore misurabile. Il verticale di nicchia (ricambi, prodotti senza EAN) è l'unica leva, ma va dimostrato che quelle nicchie paghino.

**Note per lo scoring:** C1 basso-medio (2-3). C3 medio (50-160 $/mese). C4 alto nelle nicchie senza EAN (matching per titolo, immagine e attributi: lavoro difficile e continuo). C5 buono tramite app store. C8 basso (incumbent attivi).

---

### #34 — Monitoraggio delle recensioni locali e della reputazione
**Verdetto:** INCERTO — ricerca specifica non eseguita (budget di ricerca esaurito); nessuna evidenza raccolta.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Software di marketing; nessuna licenza attesa. | Non trovato |
| G2 Dati raggiungibili | incerto | [stima] Le recensioni di Google si leggono via API solo come proprietario della scheda (dati forniti dall'utente con OAuth); TripAdvisor e altre piattaforme vanno verificate. Pagina API Google non raggiungibile da questa sessione. | Non trovato |
| G3 Pagatore identificabile | incerto | Prezzi di Birdeye, Partoo, Localo e simili non raccolti. | Non trovato |
| G4 Distribuzione senza pubblico | incerto | [stima] Outbound verso attività locali elencabili da Google Maps; da verificare. | Non trovato |
| G5 Rischio legale gestibile | incerto | [stima] I nomi dei recensori sono dati personali; i termini d'uso delle piattaforme vietano lo scraping. Da verificare. | Non trovato |

**Incumbent:** non trovato in questa passata. Nomi da verificare (nessuna fonte raccolta): Birdeye, Podium, ReviewTrackers, Partoo, Uberall, Localo.
**Segnali di domanda:** non trovato.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] Un chatbot genera bene le risposte alle recensioni, quindi la funzione "risposte AI" da sola non difende; resiste l'aggregazione continua multi-piattaforma con alert. Da verificare se Google offre già suggerimenti di risposta nativi (ricerca non eseguita).
**Motivo più forte per scartarlo (ipotesi da verificare):** categoria affollata e funzione "risposta AI" diventata commodity; dipendenza dalle API delle piattaforme.
**Note per lo scoring:** riprendere con 6-8 ricerche: prezzi per sede, recensioni degli incumbent (contratti, disdette), API di Google Business Profile e TripAdvisor.

---

### #35 — Monitoraggio dei bandi di ricerca e dei finanziamenti per università
**Verdetto:** INCERTO — ricerca specifica non eseguita; le evidenze riprese da #13 indicano pagatori istituzionali e una fonte UE aperta, ma mancano i dati sugli incumbent del segmento università.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Servizio informativo. | Non trovato |
| G2 Dati raggiungibili | sì (parziale) | [fatto] Per i bandi UE: Search API pubblica (vedi #13). Fondazioni e finanziatori nazionali e privati: non verificato. | https://www.emdesk.com/horizon-2020-horizon-europe-basics-guide/eu-funding-tenders-portal-api-guide |
| G3 Pagatore identificabile | sì (parziale) | [fatto] Science\|Business vende abbonamenti istituzionali al Funding Newswire. Gli uffici di ricerca producono newsletter interne di call (lavoro manuale). | https://sciencebusiness.net/funding-newswire-subscriptions · https://elke.uom.gr/wp-content/uploads/2026/09/Newsletter_01-09-2026.pdf |
| G4 Distribuzione senza pubblico | incerto | [stima] Le università e i loro grant office sono un elenco chiuso e noto (outbound); cicli d'acquisto lunghi. Non verificato. | Non trovato |
| G5 Rischio legale gestibile | sì [stima] | I bandi sono dati pubblici; i profili dei ricercatori (pubblicazioni) sono dati personali pubblici, da valutare. | Non trovato |

**Incumbent:** non trovato in questa passata. Nomi da verificare (nessuna fonte raccolta): Research Professional (Clarivate), Pivot-RP (ProQuest), Instrumentl, GrantForward. Dal lavoro su #13: Contexity sci-fund (https://www.contexity.ch/?p=5316), UKRO per gli enti UK (https://ukro.ac.uk/about-ukro/what-we-offer).
**Segnali di domanda:** [fatto] Newsletter di call consolidate prodotte a mano dalle università (Žilina, Macedonia): vedi #13 e la fonte G3.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] Come per #13; il matching ricercatore-bando sulle pubblicazioni è più difendibile della semplice ricerca.
**Motivo più forte per scartarlo (ipotesi da verificare):** incumbent globali radicati negli atenei con licenze istituzionali e acquisti lenti; si sovrappone a #13.
**Note per lo scoring:** valutare insieme a #13 come un unico candidato con due segmenti (PMI/consulenti e università).

---

### #36 — Monitoraggio di cantieri e permessi → lead per l'edilizia
**Verdetto:** INCERTO — ricerca specifica non eseguita; nessuna evidenza su fonti (SUE, albi) né su incumbent italiani.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì [stima] | Servizio di informazione commerciale. | Non trovato |
| G2 Dati raggiungibili | incerto | [stima] Permessi e SCIA passano dagli sportelli edilizi comunali (SUE) e talvolta dagli albi pretori: migliaia di siti diversi (vedi #5). Pubblicazione e completezza non verificate. | Non trovato |
| G3 Pagatore identificabile | incerto | [fatto, solo per il modello] Esistono database di progetti di costruzione in abbonamento, anche per l'edilizia residenziale (Blackridge Research); prezzi non raccolti. Incumbent italiani non verificati. | https://www.blackridgeresearch.com/new-projects-near-me/semidetached-home-construction-database/c/chile/subscribe |
| G4 Distribuzione senza pubblico | incerto | [stima] Fornitori edili, serramentisti e impiantisti sono elencabili (registri, ATECO); non verificato. | Non trovato |
| G5 Rischio legale gestibile | incerto | [stima] I titoli edilizi riportano il nome del committente, spesso una persona fisica: usarlo per contattarla a fini commerciali è il punto critico (vedi la linea del Garante in #24). | https://www.cybersecurity360.it/news/garante-privacy-web-scraping-vietato-serve-idonea-base-di-legittimita/ |

**Incumbent:** non trovato in questa passata (in Italia sono da verificare servizi di "notizie cantieri" per l'edilizia).
**Segnali di domanda:** non trovato.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] Resistenza alta: dato fresco, frammentato e locale, non indicizzato bene.
**Motivo più forte per scartarlo (ipotesi da verificare):** il lead utile è il committente privato, cioè un dato personale. Senza di esso resta l'indirizzo del cantiere, che vale meno.
**Note per lo scoring:** C4 potenzialmente molto alto (migliaia di fonti comunali). Da approfondire per primo tra i quattro INCERTO: è quello con il fit più forte con lo scraping.

---

### #37 — Due diligence fornitori/controparti
**Verdetto:** INCERTO — ricerca specifica non eseguita; le evidenze da #14 e #24 mostrano fonti aperte (appalti vinti) e un rischio GDPR se si profilano persone.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] La sintesi da fonti pubbliche è attività informativa, ma in Italia le agenzie di informazioni commerciali possono ricadere nell'art. 134 TULPS (licenza prefettizia). Non verificato: punto da chiarire prima di tutto. | Non trovato |
| G2 Dati raggiungibili | sì (parziale) | [fatto] Appalti vinti: TED (aperto, vedi #14). [fatto] Dati camerali tramite fornitori come Atoka/Cerved (a pagamento). Notizie e procedure concorsuali: non verificato. | https://ted.europa.eu/en/help/data-reuse · https://atoka.io/it/atoka-api/ |
| G3 Pagatore identificabile | incerto | [stima] Report e rating dei fornitori (Cerved, CRIBIS, Creditsafe) sono a pagamento; prezzi non raccolti in questa passata. | Non trovato |
| G4 Distribuzione senza pubblico | incerto | Non verificato. | Non trovato |
| G5 Rischio legale gestibile | incerto | [fatto] Il Garante considera "monitoraggio" l'aggiornamento continuo di dati su persone (caso Lusha). Sulle aziende il rischio è minore; su amministratori e titolari va valutato. | https://ppc.land/italy-fines-lusha-2-million-euros-orders-erasure-of-italian-contact-data/ |

**Incumbent:** non trovato in questa passata. Nomi da verificare (nessuna fonte raccolta): Cerved, CRIBIS, Creditsafe, Dun & Bradstreet.
**Segnali di domanda:** non trovato.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] Un chatbot con ricerca web fa già una sintesi di notizie su un'azienda; resistono il monitoraggio continuo con alert e le fonti non indicizzate (procedure, appalti).
**Motivo più forte per scartarlo (ipotesi da verificare):** incumbent molto forti con dati camerali e di bilancio ufficiali; possibile vincolo TULPS.
**Note per lo scoring:** si sovrappone a #7 (procedure concorsuali) e #24.

---

## Nuovi candidati emersi
1. **Cascade funding / open call dei progetti UE (FSTP)** — sono bandi per PMI e startup pubblicati da singoli consorzi su centinaia di siti di progetto, fuori dal portale centrale. Sono frammentati, cioè hanno il fit con lo scraping che manca a #13. Esiste già almeno un tentativo (Sploro: https://sploro.eu/find-european-funding-ai-cascade-funding-matcher/).
2. **Gare sotto soglia multi-paese dai portali nazionali e regionali** — il valore di #14 non sta in TED (commodity, alert a $0,02: https://apify.com/tagadanar/ted-tenders-monitor) ma nei portali nazionali; Vergabepilot ne aggrega oltre 300 solo per la Germania (https://www.capterra.com/p/10049359/Vergabepilot-AI/), quindi il modello ha pagatori.
3. **Monitoraggio prezzi per prodotti senza EAN (ricambi, B2B industriale, usato)** — la lamentela ricorrente sugli incumbent è il matching basato solo su barcode (https://www.g2.com/products/prisync/reviews/prisync-review-5137281): una nicchia dove il matching per titolo, immagine e attributi è difficile e continuo.

## Fiducia nelle evidenze
- **Alta** su fonti dati e riusabilità (#13, #14: documentazione ufficiale CE/Publications Office) e sulla sanzione Lusha (#24: più testate concordi, date precise).
- **Media** sui prezzi: molti vengono da aggregatori (Capterra, G2) o da concorrenti, con discrepanze già segnalate (TenderWolf, Price2Spy, Tracker).
- **Bassa** sui segnali di dolore: quasi nessuna lamentela diretta trovata su Reddit o forum, e nessun volume di ricerca (serve uno strumento SEO).
- **Nulla** su #34-#37: ricerca specifica non eseguita.
