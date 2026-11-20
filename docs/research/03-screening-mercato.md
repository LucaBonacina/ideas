# 03 — Screening: verticali di mercato (candidati #16-#23)

Data di accesso alle fonti: 2026-11-19. Mercato di riferimento: Italia (con confronti esteri).

> **Limite della ricerca (da leggere prima).** Durante la sessione il budget di ricerche web condiviso tra gli agenti si è esaurito dopo le ricerche su #16, #17 e #18, e lo scaricamento diretto delle pagine (WebFetch) era bloccato dalla rete della sessione per i domini provati (immobiliare.it, onlinemarketplaces.com). Quindi:
> - **#16, #17, #18**: screening completo, con fonti da risultati di ricerca (snippet e sintesi delle pagine, non sempre il testo integrale).
> - **#19-#23**: **nessuna evidenza web raccolta.** Per regola del brief ogni gate senza evidenza è "incerto" e il verdetto è INCERTO. Ho lasciato solo le ipotesi da verificare e le ricerche da fare, senza fatti inventati. Vanno ripresi in una sessione successiva.
> - Gli URL riportano quanto restituito dalla ricerca; dove la fonte è stampa di settore o materiale dell'azienda lo segnalo.

---

## Quadro legale comune (G5) per gli aggregatori di annunci

Vale per #16, #17, #18, #23 e in parte #22. È il punto che decide il verdetto di questa famiglia.

| Precedente | Cosa dice | Fonte |
|---|---|---|
| **CGUE C-202/12 Innoweb v Wegener (2013)** — meta-motore di annunci auto (Gaspedaal) | Un meta-motore di ricerca dedicato che interroga in tempo reale la banca dati di annunci altrui e ne mostra i contenuti **costituisce reimpiego** di una parte sostanziale: violazione del diritto *sui generis*. | https://www.pinsentmasons.com/out-law/news/database-rights-may-be-infringed-by-aggregation-of-others-data-via-website-search-engines-says-cjeu ; https://copyrightblog.kluweriplaw.com/2014/01/20/eu-does-innoweb-hinder-innovation-on-the-web/?output=pdf |
| **CGUE C-762/19 CV-Online Latvia v Melons (3/6/2021)** — motore di ricerca di annunci di lavoro | L'estrazione/reimpiego è vietata solo se **lede l'investimento** del costitutore (lo priva di ricavi necessari ad ammortizzarlo); si bilancia con l'accesso all'informazione e la concorrenza. Ha "ristretto" il diritto, ma non lo ha eliminato. | https://www.scl.org/12290-cjeu-search-engine-copying-of-databases-infringes-sui-generis-right-where-it-adversely-affects-database-maker-investment/ ; https://www.twobirds.com/en/insights/2021/uk/cv-online-latvia-cjeu-complicates-the-enforcement-of-database-rights ; https://mishcon.com/news/cjeu-ruling-narrows-the-scope-of-eu-database-rights |
| **CGUE C-30/14 Ryanair v PR Aviation (2015)** | Se la banca dati **non** è protetta (né diritto d'autore né *sui generis*), il titolare può vietare lo scraping **per contratto** (termini d'uso), nei limiti del diritto nazionale. I termini vincolano però solo chi li ha accettati. | https://www.pinsentmasons.com/out-law/news/website-operators-can-prohibit-screen-scraping-of-unprotected-data-via-terms-and-conditions-says-eu-court-in-ryanair-case ; https://legalblogs.wolterskluwer.com/copyright-blog/ryanair-ltd-v-pr-aviation-bv-contracts-rights-and-users-in-a-low-cost-database-law/ |
| **Francia: Leboncoin v Entreparticuliers** (CA Parigi 2/2/2021; Cass. 5/10/2022) | Riconosciuto il diritto *sui generis* sulla **sotto-banca dati immobiliare** di Leboncoin (investimento ~50 M€); lo scopo dell'estrattore è irrilevante. | https://cms.law/en/fra/news-information/arret-leboncoin-web-scraping-droit-sui-generis-sur-les-bases-de-donnees ; https://www.dreyfus.fr/en/2024/03/19/leboncoin-case-definitive-recognition-as-a-database-producer/ |
| **Francia: SeLoger e Leboncoin v Jinka** (app aggregatrice "1 app, tutti i siti immobiliari") | CA Versailles dic. 2025: stop all'estrazione, cancellazione dati, 60.000 € a SeLoger; appello aprile 2026: 200.000 € + ~53.000 € spese a Leboncoin; luglio 2026: terza condanna per pratica commerciale ingannevole e concorrenza sleale. | https://www.onlinemarketplaces.com/articles/seloger-wins-court-ruling-against-jinka-over-unauthorised-listing-scraping/ ; https://www.onlinemarketplaces.com/articles/jinka-loses-second-scraping-appeal-as-leboncoin-wins-e250000/ ; https://www.mysweetimmo.com/2026/07/02/annonces-immobilieres-jinka-condamnee-pour-pratique-commerciale-trompeuse-face-a-seloger/ |
| **Danimarca: BoligPortal v ReData** (22/10/2025) | Banca dati di annunci d'affitto protetta; ReData ha violato il diritto *sui generis* (sostanzialità **qualitativa**) e le buone pratiche di marketing. BoligPortal lo ha provato con 12 annunci-trappola fittizi. Una policy HTML che vieta scraping/TDM basta come riserva (robots.txt non necessario). Iter successivo non chiaro (fonti in conflitto). | https://bdkadvokati.com/boligportal-v-redata-danish-court-finds-data-scraping-infringes-database-rights ; https://digital-client-solutions.hoganlovells.com/resources/ai-litigation-case-law-tracker/case/boligportal-a-s-v-redata-a-s |
| **Ungheria: Reálmonitor (Árminimum) v Ingatlan.com** (dic. 2025) | Il tribunale ha ritenuto lecito l'aggregatore con modello **"funnel-back"** (rimanda il traffico al portale d'origine), applicando CV-Online. Ingatlan.com sostiene che la disputa non è chiusa. | https://www.onlinemarketplaces.com/articles/court-rules-in-favour-of-aggregator-in-case-versus-ingatlan/ ; https://www.economx.hu/magyar-gazdasag/jogeros-itelet-ingatlancom-lakashirdetesek-realmonitor.820860.html |
| **Italia** | Trib. Roma 2019 (app su tariffe Trenitalia): scraping lecito perché su **parti non sostanziali** e **su richiesta dell'utente**. Garante privacy, nota 20/5/2024: se lo scraping raccoglie dati di persone identificabili scatta il GDPR. **Nessuna sentenza italiana trovata** su portali immobiliari/auto/lavoro. | https://www.agendadigitale.eu/?p=106794 (sintesi; sentenza originale non consultata) ; https://dirittobancario.it/wp-content/uploads/2024/05/Nota-informativa-Garante-Privacy-20-maggio-2024.pdf |
| **Antitrust (direzione opposta)** | Belgio, 30/4/2026: l'Autorità della concorrenza ordina in via cautelare ad AutoScout24 di **ripristinare** il trasferimento automatico degli annunci dei venditori verso una piattaforma rivale (TCS), penale 20.000 €/giorno. Indica che il dominante non può sempre chiudere i dati che appartengono ai venditori. | https://www.belgiancompetition.be/en/about-us/actualities/press-release-nr-18-2026 ; https://cms.law/en/bel/legal-updates/belgian-competition-authority-orders-autoscout24-to-restore-sellers-data-portability-to-a-competing-platform-subject-to-penalty-payments |

**Lettura [stima]:** dopo CV-Online un aggregatore che rimanda traffico al portale (funnel-back) ha argomenti difendibili; uno che **sostituisce** il portale (mostra l'annuncio completo, foto, contatti, e trattiene l'utente) o che rivende i dati (B2B) è nella zona Jinka/ReData/Innoweb, dove i portali hanno vinto ripetutamente nel 2021-2026. In Italia non c'è giurisprudenza specifica: incertezza, non via libera. Ridurre il rischio: estrarre poco e su richiesta, usare dati forniti dagli agenti/concessionari stessi (feed), funnel-back, oppure fonti non protette (siti delle agenzie/dei concessionari singoli, dove l'investimento del singolo è piccolo, ma attenzione: ciascuno può comunque vantare il diritto *sui generis*).

---

### #16 — Meta-ricerca di immobili con storico dei prezzi
**Verdetto:** INCERTO, tendente a FAIL (G5) per il B2C italiano — il modello "un'app per tutti i portali" è stato condannato tre volte in Francia (Jinka) e una in Danimarca (ReData); resta aperta solo una variante B2B/funnel-back o basata su feed delle agenzie.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Mostrare annunci e storico prezzi non è mediazione immobiliare. [stima] Diventerebbe mediazione (iscrizione al registro agenti) solo mettendo in contatto le parti dietro compenso; nessuna fonte specifica consultata. | non trovato (ragionamento) |
| G2 Dati raggiungibili | sì (tecnicamente) | Esistono scraper pronti per Immobiliare.it, Casa.it, Subito (Apify), quindi i siti sono raggiungibili. Casafari indicizza "migliaia di siti" e deduplica anche in Italia. | https://apify.com/studio-amba/immobiliare-scraper ; https://apify.com/lorify/casa-scraper.md ; https://www.economyup.it/proptech/135-milioni-per-la-scaleup-portoghese-casafari-che-porta-ordine-mercato-immobiliare/ |
| G3 Pagatore identificabile | sì | Agenzie, banche, periti e investitori pagano Immobiliare.it Insights (prezzi non pubblici) e Casafari (prezzi non pubblici; convenzione FIMAA Milano). Lato B2C, gli aggregatori Lifull (Trovit, Mitula, Nestoria) vivono di vendita di traffico ai portali. | https://www.immobiliare.it/insights/ ; https://www.fimaamilano.it/public/filetiny/2022-propostadiconvenzionefimaamilmbaggiornata.pdf ; https://www.onlinemarketplaces.com/articles/what-are-real-estate-aggregators-and-are-they-about-to-disappear/ |
| G4 Distribuzione senza pubblico | incerto | La SEO programmatica è il canale storico degli aggregatori, ma è in declino: Lifull Connect in calo costante, attribuito anche alla spinta di Google a ridurre i click; Trovit.es ~50% traffico organico (Semrush). Outbound B2B verso agenzie è elencabile. | https://www.onlinemarketplaces.com/articles/aggregators-continue-to-drag-lifulls-overseas-business-down-in-q3/ ; https://nl.semrush.com/website/trovit.es/overview |
| G5 Rischio legale gestibile | **no / incerto** | Vedi quadro comune: Jinka condannata (60k€ + 200k€ + concorrenza sleale), ReData condannata, Leboncoin titolare della sotto-banca dati immobiliare. Unica vittoria: Árminimum (Ungheria) con funnel-back. I termini di Immobiliare.it contengono un divieto "perseguito a norma di legge" (testo esatto non consultabile: dominio bloccato). Il gruppo Immobiliare.it è aggressivo in giudizio (multato 500k€ su causa di Idealista: mostra che i due litigano). | quadro comune sopra ; https://www.immobiliare.it/terms/ ; https://onlinemarketplaces.com/articles/immobiliare-it-fined-e500k-over-leadership-claims-after-court-case-brought-by-rival-idealista |

**Incumbent**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Immobiliare.it (+ Trovacasa, MioAffitto, e da apr. 2026 annunci anche su Subito) | https://www.milanofinanza.it/news/immobiliare-it-si-allea-con-subito-202604231048481573 | Abbonamento agenzie; Insights su preventivo | Non deduplica tra agenzie (la stessa casa appare più volte con prezzi diversi) — non verificato direttamente |
| Idealista / Casa.it (stesso gruppo) | https://www.casa.it/casait/chi-siamo/ | Abbonamento agenzie | Mostra quota di annunci con prezzo ribassato (dato aggregato) |
| Casafari (B2B, PT) | https://www.economyup.it/proptech/135-milioni-per-la-scaleup-portoghese-casafari-che-porta-ordine-mercato-immobiliare/ | Abbonamento (non pubblico) | Già fa dedup + storico prezzi + "chi altro pubblica lo stesso immobile" in Italia: è esattamente il prodotto B2B ipotizzato |
| Lifull Connect (Trovit, Mitula, Nestoria) | https://www.onlinemarketplaces.com/articles/what-are-real-estate-aggregators-and-are-they-about-to-disappear/ | Vendita di traffico (CPC) ai portali | In declino costante; management locale rimosso nel 2024 |
| Estensioni Chrome (Immobiliare.it Price History Tracker ~20 utenti; CasaLens con dati OMI) | https://chromewebstore.google.com/detail/immobiliareit-–-price-his/kfabaejkmkgmijjccdajmkgnaljninhc ; https://chromewebstore.google.com/detail/casalens-%E2%80%94-prezzi-immobil/aabbadmmckghfpoopbbbhhafmfoabmhj?hl=en | Gratis | Adozione quasi nulla |

**Segnali di domanda:** 767.000 compravendite residenziali nel 2025 [fatto] (https://www.teleborsa.it/News/2026/07/24/immobiliare-767mila-compravendite-nel-2025-31.html); Immobiliare.it dichiara 359 milioni di minuti/mese di utilizzo (dato aziendale, Similarweb/SensorTower lug. 2026) (https://www.immobiliare.it/info/leader/); Subito 2,8 M visitatori/giorno (https://www.milanofinanza.it/news/immobiliare-it-si-allea-con-subito-202604231048481573). Volumi di ricerca per "storico prezzo casa"/"quanto è stata ribassata": non trovato.

**Segnali di dolore:** secondo Casafari ~90% dei portafogli delle agenzie si sovrappone e il prezzo dello stesso immobile varia "molto" tra agenzie (citato da EconomyUp, fonte di parte) (https://www.economyup.it/proptech/i-5-peccati-capitali-del-mercato-immobiliare-e-cosa-puo-fare-il-proptech-per-eliminarli/); RealAdvisor spiega i mandati multipli non esclusivi (https://realadvisor.it/it/blog/casa-in-vendita-da-due-agenzie); recensioni Trustpilot su prezzi gonfiati e annunci non aggiornati (https://es.trustpilot.com/review/casa.it). Thread Reddit/forum italiani specifici: non trovato.

**Test chatbot (C6):** [stima] Un chatbot non conosce lo storico dei ribassi di un annuncio specifico né i giorni sul mercato: il valore è nei dati freschi accumulati. Resistenza alta *se* i dati si possono raccogliere lecitamente. Le stime di valore per zona (OMI, report dei portali) invece un chatbot le riassume già.

**Motivo più forte per scartarlo:** il caso Jinka è il controfattuale perfetto: stessa idea, mercato vicino (Francia), stessa direttiva, tre condanne in sette mesi; i portali italiani sono concentrati in due gruppi (Immobiliare.it e Idealista/Casa.it) con mezzi e interesse a fare causa. In più, il B2B (dedup + storico) è già coperto da Casafari e Immobiliare Insights.

**Note per lo scoring:** C1 medio (dolore reale ma senza misure italiane); C2 alto; C3 alto solo in B2B (agenzie, banche, periti); C4 alto (dedup tra agenzie e storico è difficile e continuo); C5 medio (SEO degli aggregatori in calo); C6 alto; C7 alto (lo storico si accumula); C8 basso (incumbent forti e moderni); penalità legale e di dipendenza da piattaforma massime. Variante da valutare: storico prezzi costruito da **siti delle singole agenzie** + funnel-back, oppure strumento per agenzie che usa i loro stessi dati.

---

### #17 — Auto usate: valutazione e storico
**Verdetto:** FAIL (G5) nella forma "meta-ricerca tra portali"; e il "è un buon prezzo?" è già commodity — Innoweb (C-202/12) è proprio un caso di meta-motore di annunci auto condannato, e AutoScout24, Quattroruote e AutoUncle già etichettano il prezzo in Italia.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Valutare e mostrare annunci non richiede licenze [stima, nessuna fonte specifica]. | non trovato (ragionamento) |
| G2 Dati raggiungibili | sì | AutoUncle aggrega ~755.000 annunci in Italia da siti e concessionari; i dati sono quindi raggiungibili. | https://www.autouncle.it/it/auto-usate |
| G3 Pagatore identificabile | sì | CarGurus: ricavi 2025 907 M$, in gran parte abbonamenti dei concessionari; ~20.000 dealer usano il suo strumento di pricing. Quattroruote vende la quotazione a 3,99 €. Eurotax ha edizione per concessionari (prezzi non trovati). | https://finance.yahoo.com/news/cargurus-q4-earnings-call-highlights-011250100.html ; https://www.fool.com/earnings/call-transcripts/2025/11/27/cargurus-carg-q3-2025-earnings-call-transcript/ ; https://www.quattroruote.it/auto-usate/annuncio/mg-zs-109745167 ; https://www.motorimagazine.it/guida-pratica-alle-quotazioni-eurotax-codici-e-correzioni/ |
| G4 Distribuzione senza pubblico | incerto | AutoUncle ha migliaia di pagine programmatiche (marca/modello/comune) già indicizzate: la SEO esiste ma è occupata. Outbound verso concessionari elencabile. | https://www.autouncle.it/it/auto-usate/Fiat/in/Sicilia/Troina%20/%20Draginai |
| G5 Rischio legale gestibile | **no** (meta-ricerca) / incerto (tool B2B con dati dei concessionari) | Innoweb v Wegener: meta-motore di annunci auto = violazione *sui generis*. Il caso belga TCS v AutoScout24 mostra però che i dati caricati dai venditori possono essere trasferiti con il loro consenso (feed), e che il blocco può essere abuso di posizione dominante. | https://www.pinsentmasons.com/out-law/news/database-rights-may-be-infringed-by-aggregation-of-others-data-via-website-search-engines-says-cjeu ; https://www.belgiancompetition.be/en/about-us/actualities/press-release-nr-18-2026 |

**Incumbent**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| AutoScout24 | https://www.autoscout24.it/promo/valutazione-prezzo-auto/ | Abbonamento concessionari; etichette "Super/Ottimo/Buon prezzo" già sugli annunci; valutazione auto gratuita | Algoritmo opaco ("proprietario"); esclude prezzi estremi |
| AutoUncle (DK) | https://www.autouncle.it/it/informazioni-su-autoscore | Gratis per l'utente; prodotti B2B per concessionari e DMS (prezzi non pubblici); >1.000 dealer in Europa (dato aziendale) | Già fa esattamente "aggregatore + giudizio sul prezzo" in Italia dal 2014 |
| Quattroruote | https://www.quattroruote.it/guide/auto-usate/come-valutare-correttamente-il-valore-di-mercato-di-un-veicolo.html | Quotazione 3,99 €; valutazione sugli annunci | — |
| carVertical (LT) | https://www.carvertical.com/it/precheck | Report storico veicolo a pagamento (prezzo non trovato) | Solo il 6% dei concessionari italiani fornisce un report storico (dato carVertical) |
| CarGurus (USA, riferimento estero) | https://www.cargurus.com/about/how-cargurus-works | Abbonamento dealer + lead | Non presente in Italia |

**Segnali di domanda:** ~755.000 annunci aggregati da AutoUncle (https://www.autouncle.it/it/auto-usate); i concessionari cambiano prezzo ~8.000 volte al giorno (dato AutoUncle riportato da SicurAuto) (https://www.sicurauto.it/news/novita-del-mercato/concessionari-auto-usate-tagliano-quasi-sempre-i-prezzi-8-000-modifiche-al-giorno/). Volumi di ricerca "quanto vale la mia auto": non misurati (Aranzulla ha una guida dedicata: https://www.aranzulla.it/siti-per-valutare-auto-1545150.html).

**Segnali di dolore:** contachilometri manomessi nel 2,91% delle auto controllate da carVertical in Italia, 7,1% sopra 150.000 km (fonte di parte) (https://it.motor1.com/news/807663/auto-usate-chilometri-scalati-rischi/ ; https://lespresso.it/c/mobilita/2026/9/15/contachilometri-manomessi-acquirenti-auto-usata-denunciare-frode-studio-carvertical/64696); Quattroruote dedica guide alle truffe sull'usato (https://www.quattroruote.it/guide/truffe-auto-usate/truffa-offerta-come-riconoscere-prezzo-troppo-basso.html). Lamentele specifiche sulla mancanza di valutazione del prezzo: non trovate (e coerentemente, il bisogno è già servito).

**Test chatbot (C6):** [stima] "Quanto vale una Golf 2019 con 80.000 km?" ha già risposte gratuite da AutoScout24/AutoUncle e un chatbot dà un range plausibile; lo storico del singolo annuncio no. Resistenza media.

**Motivo più forte per scartarlo:** il prodotto esiste già, gratis, in Italia (AutoUncle dal 2014, AutoScout24 con etichette di prezzo), e la versione meta-motore è il caso esatto condannato dalla CGUE in Innoweb.

**Note per lo scoring:** se si tiene, la sola variante con spazio è B2B per concessionari (pricing dinamico in stile CarGurus "PriceVantage"/AutoUncle B2B) o storico veicolo; C8 basso, C3 alto in B2B, penalità legale alta per il B2C.

---

### #18 — Lavoro con dati veri
**Verdetto:** INCERTO, tendente a PASS se la fonte sono i **siti carriere delle aziende** (non i portali) — G5 gestibile con quella scelta; la trasparenza retributiva obbligatoria (D.Lgs. 96/2026) erode però l'ipotesi "retribuzione stimata".

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | In Italia l'intermediazione tra domanda e offerta di lavoro richiede autorizzazione (D.Lgs. 276/2003); un motore che mostra annunci e rimanda al sito dell'azienda [stima] non intermedia. Norma specifica sui siti internet non verificata (ricerca non eseguita per esaurimento budget). Annunci anonimi vietati (art. 9 D.Lgs. 276/2003). | https://www.lexplain.it/annunci-truffa-come-riconoscere-e-denunciare-le-false-offerte-di-lavoro/ |
| G2 Dati raggiungibili | sì | HiringCafe indicizza "decine di migliaia" di pagine carriere più volte al giorno (5M+ offerte), dimostrando la fattibilità tecnica. Per l'Italia, mappa degli ATS (Workday, Greenhouse, InRecruiting, ecc.): non trovata. | https://thenextweb.com/news/hiringcafe-6-8m-pre-seed-ai-talent-agent ; https://www.startupresearcher.com/news/hiringcafe-raises-usd6-8-million-and-launches-ai-talent-agent |
| G3 Pagatore identificabile | sì | Jobrapido (Italia, 2006): ricavi 24 M€ e utile 6 M€ nel 2011, venduta a DMGT per ~30 M€ (2012). I portali vendono annunci sponsorizzati alle aziende. | https://www.journalism.co.uk/daily-mail-publisher-dmgt-buys-italian-recruitment-search-engine-jobrapido/ ; https://thedrum.com/news/2012/04/16/search-engine-jobrapido-bought-daily-mail-general-trusts-media-30-million-deal |
| G4 Distribuzione senza pubblico | sì (evidenza estera) | HiringCafe: ~2 M utenti mensili senza spesa in marketing, crescita guidata da Reddit (dato aziendale). | https://thenextweb.com/news/hiringcafe-6-8m-pre-seed-ai-talent-agent |
| G5 Rischio legale gestibile | incerto → sì con fonti aziendali | CV-Online v Melons nasce proprio da un motore di annunci di lavoro: indicizzare è lecito se non lede l'investimento. Le pagine carriere delle singole aziende non sono un "investimento in banca dati" paragonabile a un portale [stima]; gli annunci sono pubblicati per essere diffusi. GDPR: i nomi dei recruiter vanno evitati (nota Garante 2024). Scrapare Indeed/InfoJobs/LinkedIn invece è zona rossa. | https://www.scl.org/12290-cjeu-search-engine-copying-of-databases-infringes-sui-generis-right-where-it-adversely-affects-database-maker-investment/ ; https://dirittobancario.it/wp-content/uploads/2024/05/Nota-informativa-Garante-Privacy-20-maggio-2024.pdf |

**Incumbent**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Indeed | https://it.indeed.com/help/employers/articles/fraudulent-job-policy | Annunci sponsorizzati (CPC) | Annunci fraudolenti e campagne di phishing a suo nome (ago. 2026) |
| InfoJobs | https://fr-be.trustpilot.com/review/www.infojobs.it | Pacchetti annunci per aziende (prezzi non verificati) | Trustpilot ~2,9/5 su 218 recensioni; lamentele su annunci falsi |
| LinkedIn | non verificato | Annunci a pagamento, Premium | non verificato |
| Jobrapido (aggregatore, oggi di STG) | https://www.cbinsights.com/company/jobrapido | Traffico/CPC | Stato attuale e quota in Italia non trovati |
| HiringCafe (USA, riferimento estero) | https://thenextweb.com/news/hiringcafe-6-8m-pre-seed-ai-talent-agent | Gratis per i candidati; ricavi dichiarati in modo contraddittorio | Non localizzato per l'Italia (non verificato) |

**Segnali di domanda:** quota annunci Indeed Italia con retribuzione passata dal 26% (lug. 2025) al 61% (lug. 2026) dopo il recepimento della direttiva (https://www.euronews.com/business/2026/09/08/eu-pay-transparency-are-job-ads-finally-getting-honest-about-salaries ; https://www.hiringlab.org/uk/blog/2026/05/07/full-salary-transparency-in-europe-is-still-a-distant-prospect/). Volumi di ricerca "offerte di lavoro [città]": non misurati.

**Segnali di dolore:** "una posizione aperta su cinque è un lavoro fantasma" (studio 2025 citato da Fanpage), con il consiglio esplicito di controllare se l'annuncio esiste sul sito aziendale — cioè esattamente la verifica che il prodotto automatizzerebbe (https://www.fanpage.it/innovazione/tecnologia/mandi-il-curriculum-e-nessuno-ti-risponde-siamo-entrati-nella-trappola-dei-ghost-job/); truffe con falsi annunci Indeed (https://www.open.online/2026/08/31/truffa-annunci-lavoro-indeed-hacker-rubano-dati-bancari/); recensioni InfoJobs (sopra).

**Test chatbot (C6):** [stima] Un chatbot non ha l'elenco aggiornato delle posizioni aperte oggi né sa se un annuncio è "fantasma"; per gli stipendi medi per ruolo invece risponde già in modo accettabile. Resistenza alta per il motore di ricerca/alert, bassa per la sola stima retributiva.

**Motivo più forte per scartarlo:** il B2C lavoro si monetizza male senza vendere annunci alle aziende (dove Indeed/LinkedIn dominano), e il D.Lgs. 96/2026 (in vigore dal 7/6/2026) rende la retribuzione sempre più dichiarata negli annunci, togliendo uno dei due punti di forza. Il mercato italiano del lavoro qualificato è piccolo rispetto agli USA, dove HiringCafe è cresciuta.

**Note per lo scoring:** C4 alto (migliaia di siti carriere, ATS diversi, dedup, rilevamento annunci fantasma = continuo); C5 buono (pagine programmatiche ruolo×città + Reddit/passaparola, provato all'estero); C3 basso-medio in B2C; il modello funziona probabilmente meglio **multi-paese UE** o con focus su lavoro remoto. C9 rapido (indice di N siti carriere in pochi giorni).

---

### #19 — Prezzi dei supermercati e spesa
**Verdetto:** INCERTO — nessuna evidenza web raccolta (budget di ricerca esaurito); da rifare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | non trovato | — |
| G2 Dati raggiungibili | incerto | non trovato | — |
| G3 Pagatore identificabile | incerto | non trovato | — |
| G4 Distribuzione senza pubblico | incerto | non trovato | — |
| G5 Rischio legale gestibile | incerto | Il quadro comune *sui generis* si applica agli e-commerce GDO; caso specifico non cercato. | vedi quadro comune |

**Incumbent / domanda / dolore:** non trovato. Da verificare: app di volantini (es. DoveConviene, PromoQui), confronto carrello, osservatori pubblici sui prezzi (Osservatorio prezzi MIMIT), iniziative tipo "carrello tricolore"; esempi esteri (es. Regno Unito, Grecia, Spagna con obblighi di trasparenza sui prezzi della GDO; Australia con l'inchiesta ACCC sui supermercati) — tutti **da verificare con fonti**.
**Test chatbot (C6):** [stima] Prezzi correnti per punto vendita non sono nel sapere di un chatbot: resistenza potenzialmente alta.
**Motivo più forte per scartarlo (ipotesi):** margini bassissimi del B2C, prezzi online della GDO spesso diversi da quelli in negozio, disponibilità a pagare dei consumatori bassa. Da verificare.
**Note per lo scoring:** da riprendere integralmente.

---

### #20 — Bollette luce e gas
**Verdetto:** INCERTO — nessuna evidenza web raccolta; da rifare. Attenzione a G1.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | Da verificare se l'intermediazione/procacciamento di contratti energia richiede iscrizioni o qualifiche (es. elenco venditori, codice di condotta commerciale ARERA). | non trovato |
| G2 Dati raggiungibili | incerto | Il Portale Offerte ARERA è pubblico (indicato nella long list); open data e condizioni d'uso non verificati. | non trovato |
| G3 Pagatore identificabile | incerto | Ipotesi: i comparatori incassano commissioni dai fornitori. | non trovato |
| G4 Distribuzione senza pubblico | incerto | non trovato | — |
| G5 Rischio legale gestibile | incerto | Upload della bolletta = dati personali (GDPR). | non trovato |

**Incumbent / domanda / dolore:** non trovato. Da verificare: comparatori (Facile.it, SOStariffe, Segugio), Portale Offerte ARERA, fine del mercato tutelato e Servizio a tutele graduali; estero: switching automatico (es. modelli di auto-switching nel Regno Unito), con le chiusure legate alla crisi energetica 2021-22 — **da verificare**.
**Test chatbot (C6):** [stima] Un chatbot non legge la bolletta dell'utente né conosce le offerte di oggi, ma con l'upload di un PDF un assistente generalista può già spiegare la bolletta: resistenza media.
**Motivo più forte per scartarlo (ipotesi):** CPC altissimi e comparatori con budget pubblicitari enormi; rischio G1. Da verificare.

---

### #21 — Prezzi carburanti per flotte
**Verdetto:** INCERTO — nessuna evidenza web raccolta; da rifare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] nessuna licenza per report e ottimizzazione; non verificato. | non trovato |
| G2 Dati raggiungibili | incerto | Open data prezzi carburanti MIMIT indicati nella long list; licenza e aggiornamento non verificati. | non trovato |
| G3 Pagatore identificabile | incerto | Ipotesi: flotte pagano già carte carburante e software di fleet management. | non trovato |
| G4 Distribuzione senza pubblico | incerto | Ipotesi: outbound verso aziende con flotte (elencabili). | non trovato |
| G5 Rischio legale gestibile | incerto | [stima] basso se si usano open data pubblici; non verificato. | non trovato |

**Incumbent / domanda / dolore:** non trovato. Da verificare: app consumer sui prezzi (es. Prezzi Benzina), carte carburante (es. emittenti delle compagnie petrolifere, DKV, UTA), software di fleet management; estero (es. GasBuddy for Business negli USA) — **da verificare**.
**Motivo più forte per scartarlo (ipotesi):** dato unico, pulito e gratuito (open data MIMIT) = vantaggio dei dati quasi nullo (C4 basso); le carte carburante bundle già report e sconti.

---

### #22 — Ricambi auto/moto/elettrodomestici
**Verdetto:** INCERTO — nessuna evidenza web raccolta; da rifare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] nessuna; non verificato. | non trovato |
| G2 Dati raggiungibili | incerto | Le compatibilità (es. cataloghi TecDoc per l'auto) potrebbero essere dati a licenza: da verificare. | non trovato |
| G3 Pagatore identificabile | incerto | Ipotesi: affiliazione dagli e-commerce di ricambi. | non trovato |
| G4 Distribuzione senza pubblico | incerto | Ipotesi: SEO su codici ricambio (long-tail transazionale enorme). | non trovato |
| G5 Rischio legale gestibile | incerto | Cataloghi di compatibilità probabilmente protetti; prezzi da e-commerce: quadro comune. | non trovato |

**Incumbent / domanda / dolore:** non trovato. Da verificare: e-commerce ricambi (es. Autodoc, Oscaro), comparatori di ricambi, marketplace generalisti; per elettrodomestici: siti di ricambi e codici E-Nr — **da verificare**.
**Motivo più forte per scartarlo (ipotesi):** la compatibilità è il dato chiave ed è probabilmente sotto licenza commerciale; affiliazione a margini bassi.

---

### #23 — Usato di nicchia (bici, strumenti musicali, fotografia, orologi)
**Verdetto:** INCERTO — nessuna evidenza web raccolta; G5 segue il quadro comune (aggregare Subito/eBay = zona Jinka); da rifare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] nessuna; non verificato. | non trovato |
| G2 Dati raggiungibili | incerto | non trovato | — |
| G3 Pagatore identificabile | incerto | Ipotesi: abbonamenti per alert di appassionati, affiliazione. | non trovato |
| G4 Distribuzione senza pubblico | incerto | Ipotesi: community di nicchia molto frustrate (forum). | non trovato |
| G5 Rischio legale gestibile | incerto | Quadro comune: aggregare un portale generalista (es. Subito) con funnel-back è la variante più difendibile; annunci di privati contengono dati personali (GDPR). | vedi quadro comune |

**Incumbent / domanda / dolore:** non trovato. Da verificare: Subito, eBay, Vinted; verticali (es. Mercatino Musicale, Chrono24 per orologi, Reverb per strumenti, marketplace di usato fotografico); estero: aggregatori di alert su annunci (es. Jinka in Francia, condannata: vedi quadro comune) — **da verificare**.
**Motivo più forte per scartarlo (ipotesi):** nicchie piccole con disponibilità a pagare bassa; verticali globali già forti (Chrono24, Reverb) [nomi da verificare].

---

## Nuovi candidati emersi

1. **Storico prezzi e "giorni sul mercato" per agenzie immobiliari, costruito sui loro stessi annunci (B2B, feed autorizzati).** Il dolore della sovrapposizione dei portafogli (~90%, dato Casafari via EconomyUp) esiste, il pagatore B2B esiste (Casafari, Immobiliare Insights), e usare i dati forniti dagli agenti evita la zona Jinka; da confrontare direttamente con Casafari in Italia. (https://www.economyup.it/proptech/i-5-peccati-capitali-del-mercato-immobiliare-e-cosa-puo-fare-il-proptech-per-eliminarli/)
2. **Rilevatore di annunci di lavoro fantasma/truffa (verifica incrociata annuncio ↔ sito carriere dell'azienda), anche come estensione del browser o API per i portali.** Una posizione su cinque sarebbe fantasma (Fanpage, studio 2025) e la verifica consigliata è proprio "c'è sul sito dell'azienda?"; i dati sono pagine carriere aziendali, a basso rischio G5. (https://www.fanpage.it/innovazione/tecnologia/mandi-il-curriculum-e-nessuno-ti-risponde-siamo-entrati-nella-trappola-dei-ghost-job/)
3. **Pricing dinamico dell'usato per piccoli concessionari indipendenti (B2B).** CarGurus sta spostando l'azienda da marketplace a software/dati per dealer (strumento di pricing usato da ~20.000 dealer, ~700.000 cambi di prezzo a trimestre) e i concessionari italiani cambiano prezzo ~8.000 volte al giorno; in Italia l'offerta B2B equivalente non è stata verificata (AutoUncle B2B esiste). (https://finance.yahoo.com/news/cargurus-pivots-beyond-marketplace-needham-125038115.html ; https://www.sicurauto.it/news/novita-del-mercato/concessionari-auto-usate-tagliano-quasi-sempre-i-prezzi-8-000-modifiche-al-giorno/)
