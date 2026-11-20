---
tipo: rapporto
ipotesi: H07
ruolo: Entusiasta
data: 2026-11-20
tags: [rapporto, S3, H07]
---
# H07 Micro-SaaS B2B verticale: il rapporto dell'Entusiasta

Ipotesi: [[Registro delle ipotesi#H07 Micro-SaaS B2B verticale]]. Metodo: [[Protocollo di discovery]]. Vincoli: [[Profilo e vincoli]].

## 1. Sintesi

- **Il micro-SaaS "medio" non arriva a 1 k$ al mese, e va detto subito.** Nel database con ricavi verificati più grande (TrustMRR), il 68% delle startup sta nella fascia 0-1 k$ [fatto]. Letto alla lettera, il primo criterio di confutazione è quindi **colpito** sulla popolazione generale.
- **Quella popolazione però non è il caso di H07.** È dominata da prodotti per consumatori o trasversali, costruiti da singoli sviluppatori con pochi dollari al mese di prezzo. Nel sottoinsieme che conta per H07 (B2B, prezzo ≥ 100 $/mese, prodotto che sopravvive qualche anno) i numeri cambiano. Prodotti con piani d'ingresso da 1.000 $/mese o più aggiungono circa 1.073 $ di MRR nuovo al mese, contro circa 316 $ per piani da 1-9 $ [fatto, MicroConf]. Tra le app Shopify, il quinto più vecchio ha un ricavo mediano stimato di circa 19,1 k$/mese [fatto, ma la stima di fonte è approssimativa e soffre del bias del sopravvissuto].
- **Il pubblico del founder serve poco.** Il 52,9% dei founder su TrustMRR ha meno di 1.000 follower su X. La correlazione tra follower e ricavi è debole (r = 0,25) [fatto]. Ci sono casi B2B verticali verificati senza pubblico, per esempio CartBoss: 224 follower e 504 k$ di ricavi negli ultimi 12 mesi [fatto].
- **L'offerta costruita con AI si concentra in categorie trasversali.** Su TrustMRR ci sono 4.693 startup "AI" e 3.720 "Productivity", contro 201 "Travel" e 96 "Legal" [fatto]. I tool generici di monitoraggio prezzi fatti con AI incassano circa zero [fatto], mentre gli incumbent verticali fanno pagare da 100 a 800 $/mese [fatto]. **Lo spazio c'è dove la fonte dati è difficile da raccogliere.**
- **È il punto di forza del profilo.** Le idee migliori sono quelle in cui il prodotto **è** lo scraping di fonti protette e il matching sporco dei dati: OTA delle esperienze, broker di autonoleggio, rivenditori senza EAN. La stessa infrastruttura genera sia il prodotto sia l'aggancio per l'outbound (un audit gratuito personalizzato), e questo rende l'acquisizione delegabile.
- **Idee di punta:**
  1. Intelligence OTA per gli operatori di tour e attività.
  2. Rilevatore dei prezzi della concorrenza per gli autonoleggi indipendenti.
  3. Monitoraggio dei prezzi minimi (MAP) e dei listing per marchi in verticali senza EAN.

## 2. Argomenti principali

### 2.1 La distribuzione dei ricavi: prima quella sfavorevole, poi il sottoinsieme rilevante

**Popolazione generale (sfavorevole)**
- [fatto] Distribuzione dei ricavi su TrustMRR (pagina Stats, snapshot del 19/11/2026): 0-1 k$ 68,0%; 1-10 k$ 16,9%; 10-100 k$ 10,2%; 100 k$-1 M$ 4,0%; oltre 1 M$ 1,0%. La pagina non dice se la metrica è il ricavo mensile o quello totale. In entrambi i casi la mediana sta sotto 1 k$. Fonte: trustmrr.com/stats.
- [fatto] Sulla stessa pagina, il ricavo mediano *cumulato* (all-time) per chi incassa con Stripe è di 257 $.
- [non verificato] Un aggregatore terzo (BigIdeasDB) riporta una mediana tra 7 e 145 $/mese su circa 3.500 startup. Le sue due pagine si contraddicono e la pagina è protetta da un controllo anti-bot (non letta direttamente). Non la uso.

**Perché questa popolazione non è un buon riferimento per H07**
- [fatto] Su TrustMRR le categorie più affollate sono SaaS (4.865), AI (4.693), Productivity (3.720), Mobile Apps (2.578), Content Creation (2.413) e Marketing (1.999). I verticali sono sottili: Travel 201, Real Estate 199, Legal 96, IoT 42 (conteggi letti dalle pagine di categoria il 20/11/2026; una startup può avere più categorie).
- [fatto] Il canale X/Twitter conta 1.511 startup, il cold email 333. È un campione di sviluppatori indipendenti che vendono a sviluppatori e creator, non di software verticale B2B con un team.

**Il sottoinsieme rilevante (favorevole)**
- [fatto] MicroConf, State of Independent SaaS 2024 (469 founder, dati di fine 2023): chi ha piani d'ingresso da 1.000 $/mese o più aggiunge circa 1.073 $ di MRR nuovo al mese, contro circa 316 $ per chi ha piani da 1-9 $. Fonte: microconf.com/founders/10k-100k-arr. Nella stessa fonte c'è anche il rovescio: circa il 30% cresce solo dell'1-4% al mese e un altro 30% circa è fermo o in calo.
- [fatto] ChartMogul, SaaS Benchmarks 2023 (oltre 2.100 aziende): "The median company with a higher ARPA grows faster than the median company with a lower ARPA" (correlazione "weak but still present"). Solo il 2% dei SaaS con ARPA sotto 25 $/mese ha una retention netta sopra il 100%, contro quasi la metà di quelli con ARPA sopra 1 k$/mese.
- [fatto] ChartMogul, SaaS Growth Report 2023 (oltre 2.200 aziende): l'azienda mediana impiega circa 2 anni e 9 mesi dal primo cliente pagante per arrivare a 1 M$ di ARR, i migliori 9 mesi. Attenzione al bias: il campione è di clienti ChartMogul, cioè aziende già strutturate.
- [fatto] Barn2 (19/10/2026), stime sulle app dello Shopify App Store: il ricavo mediano mensile va da circa 190 $ per il quinto più giovane a circa 19.100 $ per il quinto più vecchio. Le stime derivano da un fattore di scala tarato su circa una dozzina di app, con un errore possibile "di un fattore due". Lettura: chi sopravvive qualche anno in un canale integrato supera di molto 1 k$/mese. Il prezzo da pagare è il bias del sopravvissuto: le app morte non sono nel campione.

**Casi B2B verticali con ricavi verificati dal processore di pagamento** (non autodichiarati)
- [fatto] **ConvertLabs**, software per imprese di servizi a domicilio (pulizie, giardini): MRR attuale 27.617 $, 470 abbonamenti attivi, piani da 67, 197 e 397 $/mese, 367 k$ di ricavi negli ultimi 12 mesi. È un verticale puro, con prezzi da professionisti. Il founder però ha circa 23 k follower, quindi non è un caso "senza pubblico".
- [fatto] **CartBoss** (Slovenia), recupero dei carrelli abbandonati via SMS per venditori Shopify e WooCommerce: 504 k$ di ricavi negli ultimi 12 mesi, margine al 45% negli ultimi 30 giorni, **224 follower**. È un caso europeo, B2B, distribuito sulle piattaforme e senza pubblico. È a consumo, non in abbonamento.
- [fatto] **PriceLabs**, prezzi dinamici per affitti brevi costruiti sui dati di mercato raccolti dal web: dichiara oltre 70 mila clienti e oltre 160 integrazioni. Una fonte di settore conferma 161 integrazioni con gestionali (PMS), di cui 18 aggiunte in un anno (Travolution, 05/09/2025). Il numero di clienti è **autodichiarato**. Lo cito solo come prova del modello "dati raccolti dal web + distribuzione tramite integrazioni con i gestionali", non come idea: il settore è adiacente agli immobili, quindi escluso.

### 2.2 Acquisizione clienti senza il founder

**Outbound delegabile e misurabile**
- [fatto] Instantly, Cold Email Benchmark Report 2026 (dati dal 1/1 al 18/12/2025): tasso medio di risposta 3,43%, quartile migliore oltre il 5,5%, primi in classifica oltre il 10,7%. Il 58% delle risposte arriva dalla prima email. È un dato di un venditore dello strumento, su tutta la piattaforma e senza segmentazione per settore.
- [fatto] Il costo per far fare l'outbound a terzi è noto: agenzie con canone di 3-8 k$/mese oppure 150-750 $ per appuntamento qualificato. Fonte: Prospeo, che vende dati di contatto (fonte interessata).
- [fatto] Su TrustMRR esistono startup che crescono con cold email anche nel segmento B2B, per esempio AiSDR, con MRR di 172 k$ verificato.

**Perché per questo profilo l'outbound è più facile della media** [stima]
- Lo scraper che alimenta il prodotto produce anche: (a) l'elenco completo degli operatori del verticale, presi dalle pagine pubbliche delle OTA o dei marketplace; (b) un **audit personalizzato** gratuito per ciascuno ("il tuo tour è sceso dal 3° al 9° posto per 'Colosseo'; due concorrenti costano il 12% in meno").
- Un'email con un dato vero e specifico sul destinatario tende a superare la media del 3,43%. **Non ho trovato una misura indipendente** di quanto la superi.
- Il processo (estrazione, report, sequenza) si può automatizzare e affidare a un operatore junior o a un'agenzia. Il founder non deve vendere.

**Marketplace di integrazioni**
- [fatto] Shopify trattiene lo 0% sul primo milione di dollari di ricavi lordi di un'app (cumulativo dal 1/1/2025) e il 15% oltre. Fonte: shopify.dev.
- [fatto] Bókun, gestionale di prenotazione per tour e attività di proprietà del gruppo Tripadvisor/Viator secondo le fonti di settore (proprietà non riverificata qui), ha un App Store aperto "to third-party app developers and service providers" (post del 18/01/2021). Il numero di app non è stato trovato.
- [fatto] PriceLabs (sopra) mostra che un'integrazione per ogni gestionale è una leva di distribuzione concreta in un verticale.

**Il pubblico non è un prerequisito**
- [fatto] TrustMRR: il 52,9% dei founder ha 0-1 K follower su X. La correlazione follower-ricavi è r = 0,25 (n = 6.406). Nella classifica "High revenue ($1M+), least followers" ci sono 5 aziende sopra 1 M$ di ricavi con 40-89 follower.

### 2.3 Saturazione da AI: dove c'è e dove no

**Dove c'è** [fatto]
- Le nuove app sugli store sono cresciute del 60% anno su anno nel primo trimestre 2026 (+80% su iOS), secondo Appfigures (TechCrunch, 18/04/2026). Dominano giochi, utility, lifestyle, produttività e salute: categorie per consumatori o trasversali.

**Il test più eloquente: i tool generici di monitoraggio prezzi** [fatto]
- Pagine TrustMRR lette il 20/11/2026:

| Prodotto | Ricavi ultimi 12 mesi | MRR attuale |
|---|---:|---:|
| MarketMiner AI (monitoraggio prezzi e-commerce, B2B) | 3.295 $ | 0 $ |
| ShopifyWebScraper | 78 $ | 0 $ |
| PricingMonitor | 0 $ | 0 $ |

- Nello stesso segmento, l'incumbent Prisync fa pagare 99-799 $/mese (pagina prezzi letta il 20/11/2026).
- **Lettura:** la saturazione colpisce i wrapper trasversali facili da copiare. Non colpisce il prodotto che funziona perché i dati arrivano davvero da fonti difficili, matching compreso. È esattamente il vantaggio di chi fa scraping avanzato di professione.

### 2.4 Prezzi di riferimento reali nei verticali candidati

| Verticale | Concorrente | Prezzo | Fonte |
|---|---|---|---|
| Hotel, rilevazione delle tariffe concorrenti (rate shopper) | Lighthouse Rate Insight | da 100 $/mese | [fatto] Hotel Tech Report |
| Hotel, rate shopper | RateMate | da 100 $/mese | [fatto] Hotel Tech Report |
| Autonoleggio, rate shopper | Rate-Highway Rate-Monitor | da 500 $/mese | [fatto] Slashdot (directory, non il sito del venditore) |
| Monitoraggio prezzi e-commerce | Prisync | 99-799 $/mese; MAP solo nel piano Platinum (399-799 $) | [fatto] prisync.com |
| Monitoraggio prezzi e-commerce | Price2Spy | MAP dal piano Basic, prezzo non pubblicato in pagina | [fatto] price2spy.com |
| Posizioni locali su Google Maps | Local Falcon | 24,99-199,99 $/mese | [fatto] localfalcon.com |
| Tour e attività, intelligence sulle OTA | OTAlytics | esiste (Capterra), prezzo **non trovato** (pagina con blocco 403) | — |

## 3. Criteri di confutazione, uno per uno

**C-1. "La mediana dei micro-SaaS resta sotto 1 k$/mese di ricavi ricorrenti."**
- Sulla popolazione generale **il criterio è soddisfatto**: TrustMRR mostra il 68% sotto 1 k$, e la conclusione non dipende dall'unità di misura della pagina. Non lo nascondo: letto alla lettera, il criterio colpisce.
- La mia tesi è che il criterio misuri la popolazione sbagliata per H07. H07 non è "un micro-SaaS qualunque": è B2B verticale, con un team pagato e capitale, prezzo ≥ 100 €/mese e un vantaggio sui dati. Su questo sottoinsieme le evidenze puntano sopra 1 k$:
  - il prezzo alto raddoppia o triplica il MRR nuovo mensile (MicroConf);
  - un ARPA alto si accompagna a retention migliore (ChartMogul);
  - le app sopravvissute qualche anno in un canale integrato hanno mediane di decine di k$ al mese (Barn2, stima);
  - esistono casi verificati di verticali europei senza pubblico sopra 40 k$/mese (CartBoss).
- **Aritmetica dell'obiettivo** [stima]: con 99-300 €/mese bastano 25-80 clienti paganti per superare 1 k$/mese di gran lunga, e 60-150 clienti per l'obiettivo di 50 k€/anno di margine (dettaglio nelle idee).
- **Cosa non ho trovato:** una mediana pubblicata per il solo segmento "B2B verticale ≥ 100 $/mese". Il Giudice dovrà decidere se il criterio va letto sulla popolazione generale (allora H07 è colpita) o sul segmento (allora regge, ma con evidenze indirette).

**C-2. "Il costo di acquisizione cliente richiede vendita diretta del founder."**
- Il criterio è **superabile** per prodotti con prezzo da 100 a 500 €/mese e un aggancio basato sui dati:
  - l'outbound è uno standard misurato (risposta media 3,43%, quartile migliore 5,5%) e si compra a canone o a risultato (3-8 k$/mese oppure 150-750 $ ad appuntamento, fonte interessata);
  - i marketplace di integrazioni (Shopify con lo 0% fino a 1 M$, l'App Store di Bókun, le integrazioni con i gestionali alla PriceLabs) portano installazioni senza venditori.
- **Rischio vero** [stima]: nei primi 10-20 clienti serve qualcuno che capisca il dominio per trasformare il feedback in prodotto. Questo ruolo può essere un product manager del team di fiducia; non deve essere il founder.
- Sotto 100 €/mese l'outbound a pagamento non si ripaga [stima]: a 300 $ ad appuntamento e con 1 cliente ogni 3-4 appuntamenti, il costo di acquisizione arriva a circa 1.000 $, recuperato in 10 mesi a 100 $/mese. Per questo propongo prezzi tra 99 e 500 € e un audit gratuito automatico che riduca il bisogno di appuntamenti.

**C-3. "Le nicchie accessibili sono sature di prodotti costruiti con AI."**
- **Vero per le nicchie trasversali e per consumatori.** Lo mostrano le nuove app (+60% anno su anno) e i monitor di prezzo generici con ricavi zero su TrustMRR.
- **Non vero per i verticali in cui il collo di bottiglia è il dato**:
  - su TrustMRR, Travel ha 201 startup contro 4.693 per AI;
  - nell'intelligence per gli operatori di tour ho trovato un solo strumento dedicato (OTAlytics) oltre ai servizi di scraping su commissione;
  - nel rate shopping per autonoleggi, l'incumbent visibile parte da 500 $/mese e dichiara di fare raccolta dati web dal 1998.
- Un prodotto "costruito con AI" senza infrastruttura di scraping anti-bot (GetYourGuide è protetto da Cloudflare, come segnalano le stesse pagine degli scraper su Apify) non funziona. La barriera all'ingresso è il dato, non il codice.

## 4. Idee concrete (in ordine di preferenza)

> Le idee rispettano gli ambiti esclusi: nessun immobile, asta, gara, dato di bilancio, istituto finanziario o settore con licenza. Usare elenchi pubblici di operatori per il **proprio** outbound non equivale a vendere "dati su aziende come lead". Va comunque confermato con il Giudice e rispettando il GDPR: email generiche aziendali e opt-out.

### Idea 1: Intelligence OTA per operatori di tour e attività
- **Nicchia e pagatore:** tour operator, guide organizzate, attrazioni e scuole di attività (cucina, barca, e-bike) che vendono su GetYourGuide, Viator, Tiqets, Klook e Musement. Italia, Spagna e Grecia per prime.
- **Mercato:** GetYourGuide dichiarava 118 mila attività di oltre 18 mila fornitori [fatto, Skift 13/11/2023], oltre 1 miliardo di euro di vendite e la redditività raggiunta [fatto, Skift 21/10/2025].
- **Prodotto:** posizione nella ricerca per parola chiave e città, prezzi e disponibilità dei concorrenti, recensioni nuove dei concorrenti, avvisi sui cambi di prezzo, report settimanale. Con AI: suggerimenti di prezzo e analisi del testo delle recensioni.
- **Prezzo di riferimento:** il concorrente diretto OTAlytics esiste ma il suo prezzo non è stato trovato. Analogo più vicino: i rate shopper per hotel a 100 $/mese per struttura [fatto]. Proposta [stima]: 79-199 €/mese per operatore, secondo il numero di prodotti monitorati.
- **Canale per i primi 100 clienti:** (1) outbound con audit automatico ("ecco dove sei posizionato oggi su 5 parole chiave"), costruito sull'elenco di operatori estratto dalle schede OTA; (2) app nell'App Store di Bókun e integrazioni con altri gestionali di prenotazione (canale da verificare per ciascuno).
- **Perché lo scraping aiuta:** fonti protette da anti-bot, risultati di ricerca che cambiano per lingua, valuta e data, matching dello stesso tour tra più OTA. Copiarlo non è questione di una settimana.
- **Conti** [stima]: 120 clienti a 120 € = circa 173 k€/anno di ricavi. Costi: proxy e infrastruttura 1-2 k€/mese, un operatore part-time per assistenza e outbound 30-40 k€/anno, sviluppo di manutenzione 20-30 k€/anno. Margine 80-100 k€.
- **Rischi:** termini d'uso delle OTA (va fatta un'analisi legale caso per caso, non verificata qui), clienti piccoli con churn alto, possibile prodotto concorrente lanciato dalle OTA stesse.

### Idea 2: Rate shopper per autonoleggi indipendenti (aeroporti e isole)
- **Nicchia e pagatore:** autonoleggi locali e di franchising (Italia, Spagna, Grecia, Portogallo) che vendono anche tramite broker come Rentalcars e DiscoverCars e devono riallineare i prezzi ogni giorno.
- **Prezzo di riferimento:** Rate-Monitor (Rate-Highway) da 500 $/mese [fatto, Slashdot]. È un incumbent storico (dal 1998, focalizzato sul mercato USA). Proposta [stima]: 149-399 €/mese per sede.
- **Mercato:** il numero di imprese italiane con codice ATECO 77.11 **non è stato trovato** in fonte ufficiale. Una directory commerciale ne riporta 7.619, senza data e senza distinguere le attive [dato debole].
- **Canale:** outbound stagionale (gennaio-aprile, prima della stagione) con un "report gratuito dei tuoi prezzi contro 10 concorrenti nel tuo aeroporto". L'elenco viene dai broker stessi, dove i fornitori sono visibili per località. Integrazioni con i gestionali di autonoleggio: canale **non dimostrato** (la ricerca non ha trovato marketplace di app dedicati).
- **Perché lo scraping aiuta:** i broker hanno prezzi dinamici per data, durata e categoria. Richiede molte richieste geolocalizzate e una difesa contro gli anti-bot. La classificazione dei veicoli tra broker diversi è un problema di pulizia dati.
- **Conti** [stima]: 40 sedi a 250 € = 120 k€/anno. Margine 50-70 k€ con infrastruttura e operatore part-time.
- **Rischi:** stagionalità (rischio di disdette a fine stagione: proporre piani annuali), termini d'uso dei broker, nicchia più piccola dell'Idea 1.

### Idea 3: Monitoraggio MAP e listing per marchi in verticali senza EAN
- **Nicchia e pagatore:** produttori e distributori di marchi PMI in verticali dove il matching per codice EAN fallisce o manca: ricambi (codici OE), bici e componenti, cosmetica professionale, vino (annata e formato). L'obiettivo è controllare i rivenditori online che vendono sotto il prezzo minimo pubblicizzato (MAP) o con listing non autorizzati.
- **Prezzo di riferimento:** Prisync include il MAP solo nel piano Platinum, a 399-799 $/mese [fatto]; Price2Spy lo include dal piano Basic, prezzo non pubblicato [fatto]. Proposta [stima]: 249-599 €/mese.
- **Canale:** outbound ai responsabili e-commerce e commerciali dei marchi, con un "report gratuito: 37 rivenditori sotto MAP questa settimana". Partnership con agenzie Amazon e con i distributori.
- **Perché lo scraping aiuta:** centinaia di e-shop eterogenei, marketplace nazionali, prodotti senza identificativo comune. Il valore è nel matching e nella pulizia, la competenza distintiva del profilo. La screening precedente aveva già segnalato la lamentela ricorrente sugli strumenti attuali per i prodotti senza EAN (candidato N9 in `docs/03-screening.md`, da riverificare).
- **Conti** [stima]: 25 marchi a 400 € = 120 k€/anno. Bastano pochi clienti, ma ogni vendita è più lunga.
- **Rischi:** è il mercato più affollato dei tre (Prisync, Price2Spy e molti altri). Il ciclo di vendita più lungo può richiedere demo, delegabili solo a un venditore del team.

### Idea 4 (riserva): Rate shopper e controllo della parità tariffaria per piccole strutture ricettive italiane
- **Pagatore:** hotel indipendenti, B&B e agriturismi.
- **Prezzo di riferimento:** 100 $/mese (Lighthouse, RateMate) [fatto].
- **Canale:** marketplace dei gestionali e dei channel manager italiani (da verificare uno per uno).
- **Valutazione:** mercato ampio, ma incumbent forti e moderni (Lighthouse, PriceLabs Hotel, Cloudbeds integrato). Va considerata solo se l'Idea 1 mostra trazione e si vuole riusare l'infrastruttura sulle OTA alberghiere.

### Scartate da me in corso di ricerca
- **Intelligence sui menu delle piattaforme di consegna:** Deliverect ha lanciato Pulse, Juicer offre gratis negli USA la comparazione dei prezzi dei menu. Incumbent che si muovono.
- **Rank tracker locale su Google Maps:** Local Falcon a 24,99-199,99 $/mese, mercato maturo con poca differenziazione.

## 5. Fonti (accesso 2026-11-20)
- TrustMRR, Stats: https://trustmrr.com/stats
- TrustMRR, pagine di categoria (conteggi): https://trustmrr.com/category e /category/{ai, travel, legal, …}
- TrustMRR, canali: https://trustmrr.com/channels/cold-email ; https://trustmrr.com/channels/twitter
- TrustMRR, ConvertLabs: https://trustmrr.com/startup/convertlabs.md
- TrustMRR, CartBoss: https://trustmrr.com/startup/cartboss.md
- TrustMRR, MarketMiner AI: https://trustmrr.com/startup/marketminer-ai.md ; PricingMonitor: https://trustmrr.com/startup/pricingmonitor-ai-agent-that-keeps-an-eye-on-your-competitors.md ; ShopifyWebScraper: https://trustmrr.com/startup/shopifywebscraper.md
- TrustMRR, llms.txt (metodo di verifica dei ricavi): https://trustmrr.com/llms.txt
- MicroConf, benchmark dalla State of Indie SaaS 2024: https://microconf.com/founders/10k-100k-arr
- ChartMogul, SaaS Growth Report 2023: https://chartmogul.com/reports/saas-growth-report/
- ChartMogul, SaaS Benchmarks Report 2023: https://chartmogul.com/blog/saas-benchmarks-report-2023/
- Barn2, "The average Shopify app is doing worse than you think" (19/10/2026): https://barn2.com/blog/shopify-app-store-saturation/
- Shopify, revenue share: https://shopify.dev/docs/apps/launch/distribution/revenue-share (dal risultato di ricerca, non riaperta)
- Instantly, Cold Email Benchmark Report 2026: https://instantly.ai/cold-email-benchmark-report-2026
- Prospeo, Appointment Setting Pricing 2026 (fonte interessata): https://prospeo.io/s/appointment-setting-pricing
- PriceLabs, pagina property manager: https://hello.pricelabs.co/property-manager/
- Travolution, PriceLabs e le 161 integrazioni (05/09/2025): https://www.travolution.com/news/pricelabs-becomes-most-integrated-revenue-management-platform/
- Hotel Tech Report, Lighthouse vs RateMate: https://hoteltechreport.com/compare/lighthouse-rate-insight-vs-ratemate-rate-shopper
- Slashdot, Rate-Monitor: https://slashdot.org/software/p/Rate-Monitor/
- Prisync, prezzi: https://prisync.com/pricing/
- Price2Spy, prezzi: https://www.price2spy.com/pricing.html
- Local Falcon, prezzi: https://www.localfalcon.com/pricing
- Skift, GetYourGuide CFO (13/11/2023): https://skift.com/2023/11/13/getyourguide-cfo-latest-experience-trends-and-cracking-the-u-s/
- Skift, GetYourGuide redditizia (21/10/2025): https://skift.com/2025/10/21/getyourguide-profitable-travel-experiences/ (dal risultato di ricerca, non riaperta)
- Bókun, App Store (18/01/2021): https://www.bokun.io/make-your-business-more-powerful-with-the-bokun-app-store
- TechCrunch, Appfigures sulle nuove app (18/04/2026): https://techcrunch.com/2026/04/18/the-app-store-is-booming-again-and-ai-may-be-why/
- Capterra, OTAlytics (403, non letta): https://www.capterra.in/software/1326529/OTAlytics
- Apify, scraper per tour (nota su Cloudflare): https://apify.com/memo23/tours-activities-scraper
- Deliverect Pulse (QSR Magazine) e Juicer (Food On Demand): https://www.qsrmagazine.com/news/deliverect-launches-pulse-marketing-intelligence-platform/ ; https://foodondemand.com/07252024/juicer-launches-free-menu-price-comparison-tech-for-restaurant-industry/ (dai risultati di ricerca)
- Directory delle imprese ATECO 77.11 (dato debole): https://www.informazione-aziende.it/77-11_NOLEGGIO-E-LEASING-OPERATIVO-DI-AUTOMOBILI-E-AUTOVEICOLI-LEGGERI/
- Non accessibili: Indie Hackers (403), BigIdeasDB (controllo anti-bot di Vercel), VEVS Rate Radar (503).

## 6. Ricerche web usate: 19
