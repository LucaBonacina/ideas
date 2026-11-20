---
tipo: rapporto
sessione: S1
ipotesi: H03
ruolo: entusiasta
data: 2026-11-20
ricerche_web_usate: 22
tags: [rapporto, S1, H03]
---
# H03 — Servizio di scraping "a prodotto" per clienti non finanziari — Entusiasta

Ipotesi: [[Registro delle ipotesi]] (H03). Vincoli: [[Profilo e vincoli]]. Metodo: [[Protocollo di discovery]].

> **Nota di metodo.** Tutte le pagine citate sono state lette direttamente il 2026-11-20 salvo dove scritto "(solo estratto del motore di ricerca)": in quei casi la pagina ha restituito 403/404 e il dato va riverificato. Molti numeri sui ricavi delle aziende private sono **stime di terzi** (Growjo, Latka, Similarweb) o **autodichiarati**: sono segnalati come tali.

## Sintesi

Il caso a favore poggia su quattro punti.

1. **Il mercato esiste, cresce e per circa il 70 % non è finanziario.** Mordor stima il mercato del web scraping a 1,56 mld $ nel 2026. Secondo Mordor i servizi sono il segmento che cresce più in fretta (CAGR 18,35 %) e il monitoraggio prezzi e concorrenza è l'uso che cresce più in fretta (18,05 %). Il settore BFSI (banche, servizi finanziari, assicurazioni) pesa il 29,39 %, quindi circa il 70 % della domanda è fuori dagli ambiti esclusi.
2. **I servizi gestiti hanno prezzi pubblici molto sopra il self-service.** ScrapeHero chiede 199 $/mese per sito più il setup, e almeno 1.500 $/mese per il piano Enterprise Basic. Skuuudle, interamente gestito con abbinamento dei prodotti (matching) fatto dal team, è listato a circa 850 £/mese. Prisync, self-service, costa 99-799 $/mese. Lo strumento non lo vende nessuno a quei prezzi: si paga il matching e la manutenzione, cioè proprio il lavoro che un team delegato può fare.
3. **Ci sono esiti documentati su più scale.** In fascia alta: Intelligence Node (circa 100 M$, IPG, 2024), Profitero (200 M€, Publicis, 2022) e Lighthouse (370 M$ da KKR, 2024). In fascia media: Grepsr, PromptCloud e ScrapeHero, con ricavi stimati di 1-17 M$. In fascia piccola: un annuncio Flippa di un fornitore B2B di dati e-commerce con circa 7.500 $/mese di utile al 56 %, gestito da un fondatore non tecnico con sviluppatori esterni. Quest'ultimo dato viene solo da un estratto ed è da riverificare.
4. **Ci sono canali che non richiedono il founder.** La directory "Apify Experts" (agenzie certificate), Upwork e Fiverr come profilo agenzia, l'outbound verso una popolazione elencabile (91.000 aziende italiane con un sito e-commerce, Netcomm 2025) e i partner come le agenzie Shopify/Magento. Inoltre l'Apify Store come canale self-service: 24 M CZK pagati agli sviluppatori nel 2024.

Per arrivare a **50 k€/anno di margine** servono circa 15-25 clienti ricorrenti da 500-1.000 €/mese con un team di 1,5-2 persone [stima, calcolo sotto]. È plausibile in 24 mesi se le vendite partono da un canale già esistente (Apify Experts, Upwork) e da un verticale stretto.

**Rischio principale, onestamente:** il conflitto con il datore di lavoro (art. 2105 c.c.). Se il datore **vende servizi di scraping**, la Cassazione (16377/2006) considera violazione la sola costituzione di una società per "la medesima attività economica", anche con clienti diversi. La mitigazione forte è una sola: un'**autorizzazione scritta** del datore. Le altre (verticali disgiunti, nessun cliente o codice comune) riducono il rischio ma non lo azzerano.

## Evidenze a favore

### Mercato
1. **[fatto]** Mordor Intelligence: mercato del web scraping a **1,56 mld $ nel 2026**, poi 1,83 mld $ nel 2027 e **4,03 mld $ nel 2032** (CAGR 17,08 %). Il software vale il 57,93 % nel 2026. I **servizi** sono il segmento che cresce di più (**CAGR 18,35 %**, 2027-2032). Il **monitoraggio prezzi e concorrenza** è l'uso che cresce di più (**18,05 %**). Il **BFSI vale il 29,39 %**: è il primo settore, ma il resto (circa 70 %) è fuori dagli ambiti esclusi. Fonte: https://mordorintelligence.com/industry-reports/web-scraping-market (stima di un istituto di ricerca; metodologia non verificata).
2. **[fatto, solo estratto]** LP Information: i soli **servizi** di web scraping passano da **513 M$ (2025) a 803 M$ (2032)**, CAGR 6,6 %. Le stime divergono molto tra istituti (6,6 % contro 18 %). https://www.marketresearch.com/LP-Information-Inc-v4134/Global-Web-Scraping-Services-Growth-44922647/ (pagina 403, dato dall'estratto).
3. **[fatto, solo estratto, fonti deboli]** Il mercato della "price intelligence" è stimato a 4,8 mld $ (Dataintelo) o 5,8 mld $ (Marketintelo) nel 2025. Le definizioni sono larghe e gli istituti di ricerca sono di qualità bassa. https://dataintelo.com/report/price-intelligence-market · https://marketintelo.com/report/price-intelligence-market
4. **[fatto]** Il leader dei dati web, Bright Data, dichiara **oltre 300 M$ di ricavi annualizzati**, crescita **oltre il 50 % annuo**, "highly profitable", con un obiettivo di 400 M$ a metà 2026. Numeri **autodichiarati**, società privata. https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data
5. **[fatto]** Apify (piattaforma ceca di scraping): **ricavi 2024 di 298 M CZK (+65 %)**. Nel 2024 ha pagato **24 M CZK** agli sviluppatori dello Store (15 M nel 2023) e trattiene una commissione del 20 %. https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/ (articolo del 26/02/2025). La pagina partner di Apify oggi dichiara "$2M paid out last month" e "many developers earn over $3k" (**autodichiarato**). https://apify.com/partners
6. **[fatto]** Italia: l'e-commerce B2c **supera i 62 mld €** nel 2025 (+6 %, stima Osservatorio Netcomm-Polimi). Le **aziende italiane con un proprio sito e-commerce sono 91.000** (+3,4 %, Netcomm con Cribis). https://www.pagamentidigitali.it/ecommerce/ecommerce-b2c-in-italia-nel-2025-superati-i-62-miliardi-di-euro-6-cresce-il-numero-di-consumatori-digitali-e-aziende-con-sito-attivo/ (17/04/2025). Gli acquisti online di prodotto valgono circa 40,1 mld €, beauty & pharma 3,1 mld € (solo estratto: https://www.agi.it/economia/news/2025-05-27/acquisti-online-crescono-miliardi-euro-2025-31592630/).

### Prezzi praticati (il pricing gestito regge)
7. **[fatto]** **ScrapeHero**, servizio gestito:
   - On Demand: almeno 550 $ per sito per estrazione.
   - **Business: 199 $/mese per sito**, setup a parte.
   - **Enterprise Basic: almeno 1.500 $/mese** (fino a 4 siti).
   - **Enterprise Premium: almeno 8.000 $/mese**.
   - Pagine extra: 500-2.200 $ per milione.

   Sono prezzi base, non fissi. https://www.scrapehero.com/pricing/
8. **[fatto]** **PromptCloud** non pubblica listini e quota ogni progetto. Nel modulo contatti le fasce di **budget annuo** proposte sono <10 k$, 10-50 k$, 50-100 k$ e >100 k$. https://www.promptcloud.com/pricing/ — **Grepsr**: "Starter" da 100 $ una tantum; per i progetti ricorrenti il prezzo è su misura. https://www.grepsr.com/pricing/
9. **[fatto]** **Prisync**, self-service: da **99 $/mese** (100 prodotti) a **799 $/mese** (5.000 prodotti, modello ibrido). Le API costano il 20 % in più. Il "competitor matching service" è a parte, senza prezzo pubblicato. https://prisync.com/pricing/
10. **[fatto, fonti secondarie discordanti]** **Skuuudle**, monitoraggio prezzi **interamente gestito**: matching fatto dal team, onboarding di 6-12 settimane, nessun self-service. È listato a **850 £/mese**, a consumo, su Capterra, GetApp e Software Advice. Altre fonti indicano 100-199 $/£ di ingresso, fino a 1.299 $/mese per "Corporate". https://www.capterra.com/p/171527/Skuuudle/ · https://www.pricefy.io/comparisons/skuuudle-vs-pricefy (concorrente: possibile parzialità) · https://www.trustradius.com/compare-products/skuuudle (solo estratti).
11. **[fatto]** **Price2Spy** vende come servizi a pagamento separati il "Product matching", la "product data extraction", il "custom development" e un account manager dedicato. Include il **monitoraggio MAP** nel piano Basic. I prezzi non sono leggibili dalla pagina (caricati via JS). https://www.price2spy.com/pricing.html. Lo screening precedente riportava 157,95 $/mese per 2.000 URL (G2, non riverificato).
12. **[fatto]** Hospitality: Lighthouse Rate Insight costa circa **100 $/mese** (HotelTechReport, fonte secondaria). https://hoteltechreport.com/compare/lighthouse-rate-insight-vs-pricelabs-hotel-rate-shopper — Il prezzo di ingresso è basso, ma il mercato è enorme: Lighthouse dichiara oltre 70.000 strutture clienti (vedi i casi).
13. **[fatto, solo estratto]** Digital shelf: Bright Data "Digital Shelf Analytics" **da 250 $/mese**, a consumo. https://brightdata.com/products/insights/digital-shelf-analytics

### Margini
14. **[fatto]** OC&C Strategy Consultants (intervista, 10/10/2025): nei servizi IT gestiti europei del mid-market il margine lordo tipico è **40-50 %**, l'EBITDA **15-25 %**; alcuni arrivano a un EBITDA del 30-40 %. Avvertono anche di una pressione sui prezzi causata dall'AI. https://marketing.gain.pro/hubfs/OCC%20collaboration%20industry%20reports%20%2B%20transcript/Managed%20IT%20Services%20(EU)%20-%20Expert%20Interview.pdf
15. **[fatto, solo estratto, da riverificare]** Annuncio Flippa: "B2B data provider with a **50% profit margin** offering marketplace and ecommerce data and custom web scraping services requires **under 2 hours of work a day**". L'estratto indica **7.547 $/mese di utile, margine del 56 %**, con un fondatore **non tecnico** che coordina sviluppatori. https://flippa.com/11841050-b2b-data-provider-with-a-50-profit-margin-offering-marketplace-and-ecommerce-data-and-custom-web-scraping-services-requires-under-2-hours-of-work-a-day (403 alla lettura diretta; numeri del venditore, **non verificati**). È l'evidenza più vicina al modello "eseguito da un team, founder poco presente".
16. **[fatto]** Il costo dell'infrastruttura è basso rispetto ai prezzi. Zyte API costa da **0,06-0,13 $ ogni 1.000 risposte HTTP** (siti semplici) fino a 1,27 $ (siti difficili); con rendering browser costa 0,48-16 $ ogni 1.000. https://www.zyte.com/pricing/
17. **[stima]** Economia unitaria di un cliente "monitoraggio prezzi gestito": 2.000 SKU, 8 concorrenti, aggiornamento giornaliero, quindi circa 480.000 pagine al mese.
   - **Infrastruttura**: con un mix di 0,10-0,50 $ ogni 1.000 pagine sono circa **50-240 $/mese**. Meno se una parte dei siti si legge con proxy propri.
   - **Lavoro**: circa 2-4 ore al mese di manutenzione e QA per cliente, più l'onboarding (matching) pagato con il setup.
   - **Canone**: 700-900 €/mese, il prezzo di Skuuudle e circa la metà del minimo Enterprise di ScrapeHero.
   - **Margine lordo**: **55-75 %**, sopra la soglia di confutazione del 30 % e in linea con il 56 % dichiarato dall'annuncio Flippa (punto 15).

### Dolore e verticali
18. **[fatto]** Lo screening precedente aveva raccolto lamentele ricorrenti sugli strumenti self-service: matching solo per EAN/GTIN, prezzi errati su alcuni siti, nessun alert per gli URL rotti. Dati da riverificare: [[03-screening]], `docs/research/03-screening-ue-b2b.md` §33, fonti G2/Capterra lì citate.
19. **[fatto]** Ricambi auto: senza EAN affidabile servono abbinamenti per codice produttore o OEM, normalizzazione dei nomi e controlli di equivalenza (confezione, quantità, qualità). Ci sono fornitori specializzati che lo vendono come servizio, con crawling più mystery calling e desk research (Wolk Aftersales). Bright Data vende tracker per singolo sito di ricambi, e anche un'agenzia indiana (Actowiz) offre il servizio. https://brightdata.com/blog/web-data/auto-parts-and-tire-data · https://apify.com/studio-amba/car-parts-price-matrix · https://www.actowizsolutions.com/mirefaccion-auto-parts-data-scraping.php (solo estratti per Wolk e Actowiz). **[stima]** È proprio il lavoro "difficile e continuo" in cui la competenza di scraping del founder è un vantaggio.
20. **[fatto]** Il MAP (prezzo minimo pubblicizzato) e il controllo dei rivenditori sono una categoria con offerte dedicate: Lengow NetMonitor, Intelligence Node (prodotto MAP separato), Price2Spy (MAP nel piano Basic). https://www.lengow.com/it/soluzioni/netmonitor/monitoraggio-dei-prezzi-map/ · https://www.intelligencenode.com/pricing/ — Prezzi dei servizi MAP gestiti (TrackStreet ecc.): **non trovato**.

### Concorrenza sul prezzo (riportata per onestà)
21. **[fatto]** Esistono offerte a basso costo che comprimono la fascia bassa:
   - Getdataforme (Nepal, 5-15 persone, partner Apify) ha una spesa minima di 100 $ e progetti da 501-5.000 $. https://apify.com/partners/find/getdataforme
   - Annunci Upwork per scraping a 25-60 $/h o 40-80 $/h (solo estratti, singoli annunci, nessuna media). https://www.upwork.com/resources/upwork-hourly-rates (403)

   **[stima]** Questa concorrenza colpisce i **progetti una tantum**, non il **canone ricorrente con SLA, matching e QA**, che è l'offerta proposta qui (vedi i criteri di confutazione).

## Casi di successo con numeri

| Azienda | Modello | Numeri | Tipo di dato | Fonte |
|---|---|---|---|---|
| Intelligence Node (India, 2012) | Price intelligence e digital shelf per retailer e brand | Acquisita da IPG il 5/12/2024 per **circa 100 M$** (cifra di stampa che include i costi di integrazione; termini non divulgati); **120 dipendenti** | Stampa, non confermato dalle parti | https://www.adweek.com/commerce/ipg-intelligence-node-acquisition/ · https://www.exchange4media.com/digital-news/interpublic-group-acquires-mumbai-based-intelligence-node-in-100-million-deal-139304.html (solo estratti) |
| Profitero | Analytics e-commerce (digital shelf) per brand | Acquisita da Publicis nel 05/2022 per **200 M€ (210 M$)** | Stampa | https://www.businesswire.com/news/home/20220503005971/en/Publicis-Groupe-to-Acquire-Profitero-Creating-Industry-leading-Commerce-Solution (solo estratto) |
| Netrivals (Barcellona) | Monitoraggio prezzi, con clienti anche in **Italia** | Acquisita da Lengow il 26/04/2022, termini non divulgati | Stampa | https://www.lengow.com/fr/?p=54566 (solo estratto) |
| Lighthouse (ex OTA Insight) | Rate shopping e intelligence per l'hospitality | **370 M$** di Serie C guidata da KKR (11/2024); **oltre 70.000 strutture**; valutazione >1 mld $ (Bloomberg, non confermata) | Comunicato aziendale e stampa | https://www.businesswire.com/news/home/20241120724034/en/Lighthouse-Announces-370-Million-Series-C-Investment-Led-by-KKR-to-Accelerate-Platform-Innovation-and-Growth · https://www.bnnbloomberg.ca/investing/2024/11/21/kkr-leads-hospitality-tech-firm-lighthouses-370-million-round/ (solo estratti) |
| RateGain (quotata, India) | Dati e distribuzione per il travel (incluso il segmento DaaS rate shopping) | FY25: ricavi operativi **10.767 M INR** (+12,5 %), **EBITDA al 21,6 %**; DaaS +8,5 %, ma con "pricing pressure" segnalata nel Q2 FY25 | Bilancio di una società quotata (solo estratti) | https://rategain.com/press-release/fy25-results · https://www.multibagg.ai/market-pulse/articles/rategain-q4-fy25-results-pat-cmpfefk9w00bup40j0yel2odt |
| Grepsr (Nepal/USA) | Scraping gestito | Ricavi 2023 **circa 12,4 M$**, 81 dipendenti; risulta acquisita (acquirente non indicato) | **Stima di terzi** (Growjo via Latka); altre stime: 5,5 M$ | https://getlatka.com/companies/grepsr.com |
| PromptCloud (India) | Scraping gestito | **14,7-17 M$** di ricavi, circa 105 dipendenti | **Stima di terzi** | https://growjo.com/company/PromptCloud · https://getlatka.com/companies/promptcloud-technologies (solo estratti) |
| ScrapeHero (USA) | Scraping gestito con listino pubblico | **1,4 M$** (Latka, 12 dipendenti) oppure **5-10 M$** (Similarweb) | **Stime di terzi** discordanti | https://getlatka.com/companies/scrapehero · https://www.similarweb.com/company/scrapehero.com (solo estratti) |
| Annuncio Flippa "B2B data provider" | Dati e-commerce/marketplace più scraping su misura | **7.547 $/mese di utile, margine del 56 %**, meno di 2 h/giorno, fondatore non tecnico | **Dichiarato dal venditore**, non verificato, solo estratto | link al punto 15 |
| ScrapingAnt | API più estrazioni su misura | 20 k$/mese di ricavi in annuncio; utile di dicembre 2021 di 7,1 k$, "mese tipico circa la metà"; margine lordo del 90 % (dato della piattaforma) | **Autodichiarato** | https://www.starterstory.com/stories/i-started-my-first-business-at-12-yrs-old-now-my-friend-i-run-a-profitable-web-scraping-service |

**Distribuzione dei risultati:** non trovata. Non esistono dati sulla mediana o sul tasso di fallimento delle agenzie di scraping. I casi sopra sono per costruzione sopravvissuti. L'unica indicazione sulla "coda" è il prezzo minimo delle agenzie offshore (punto 21), che segnala molta offerta nella fascia bassa.

## Risposta preventiva ai criteri di confutazione

### 1. "I prezzi di mercato (freelance, piattaforme self-service) comprimono il margine sotto il 30 %"
- **Evidenza contraria:**
  - I servizi gestiti con prezzi pubblici (ScrapeHero 199 $/sito/mese più setup, almeno 1.500 $/mese per Enterprise; Skuuudle circa 850 £/mese) restano 2-10 volte sopra il self-service (Prisync 99-799 $), che non include il matching (Prisync lo vende a parte).
  - Il benchmark dei servizi gestiti è del 40-50 % lordo (OC&C 2025).
  - L'unico caso piccolo con numeri dichiarati ha un margine del 56 % (Flippa).
  - L'infrastruttura costa circa il 5-30 % del canone (calcolo al punto 17).
- **Dove il criterio può scattare [stima]:** nei progetti una tantum e nei siti facili, dove competono agenzie offshore da 100 $ e freelance da 25-60 $/h. La risposta è non vendere progetti ma **canoni con SLA** su **siti difficili e matching senza EAN**, dove il costo per il cliente non è lo scraper ma l'errore di abbinamento.
- **Esito [stima]:** con un canone di 500-1.000 €/mese per cliente e un team snello (calcolo sotto), il margine lordo atteso è 50-70 %. Il criterio non scatta, salvo un posizionamento sbagliato sul generico.

### 2. "La vendita richiede il founder"
- **Evidenza contraria:**
  - **Apify Experts**: directory pubblica di agenzie certificate con valutazioni, budget e regioni servite. https://apify.com/partners · esempio: https://apify.com/partners/find/getdataforme
  - **Upwork/Fiverr**: profili agenzia gestiti da un account manager. Esistono agenzie di scraping attive su Upwork (es. https://www.upwork.com/agencies/1710554484446138368/, solo estratto).
  - **Outbound elencabile**: 91.000 aziende italiane con sito e-commerce. Le liste si costruiscono dagli store pubblici (directory Shopify, venditori sui comparatori, venditori marketplace).
  - **Partner**: agenzie e-commerce e piattaforme di feed (es. Lengow, che ha comprato Netrivals per fare proprio questo).
  - **SEO**: lo usa ScrapingAnt (pagina gratuita di proxy, articoli tecnici), che però ha detto che RapidAPI rendeva poco.
  - Il caso Flippa dichiara un fondatore **non tecnico** con meno di 2 h/giorno.
- **[stima]** Il founder serve nella fase di avvio (definizione dell'offerta, primi 3-5 clienti di riferimento, revisione tecnica delle pipeline). Dopo, un account manager commerciale con offerte standard, a listino e senza preventivi su misura, può chiudere i contratti da 500-1.000 €/mese senza di lui. Il listino pubblico di ScrapeHero mostra che il prodotto si vende a pacchetti.
- **Rischio residuo:** clienti enterprise (cicli lunghi, OC&C) che chiedono un interlocutore tecnico senior. Mitigazione: un responsabile tecnico delegato e niente enterprise nei primi 24 mesi.

### 3. "C'è conflitto con il datore di lavoro"
- **[fatto]** Per l'art. 2105 c.c. è violazione trattare affari "in concorrenza ... nel medesimo settore produttivo o commerciale", valutando anche la "potenzialità lesiva" (Cass. ord. 19377/2025). https://brocardi.it/massimario/83743.html
- **[fatto]** "Integra violazione ... la costituzione, da parte di un lavoratore dipendente, di una società per lo svolgimento della medesima attività economica svolta dal datore di lavoro" (Cass. 16377/2006). https://brocardi.it/massimario/9634.html
- **[fatto, solo estratto]** Il dovere di fedeltà è più ampio dell'art. 2105 e si integra con correttezza e buona fede (Cass. 26181/2024). Dopo la cessazione del rapporto vale solo un eventuale patto di non concorrenza (Cass. 3543/2021).
- **Lettura onesta:** dipende da **che cosa vende il datore**.
   - **(a)** Se è un istituto finanziario o un business information provider che fa scraping **per uso interno**, un servizio di monitoraggio prezzi per l'e-commerce è un settore commerciale diverso. **[stima]** Il rischio è basso.
   - **(b)** Se il datore **vende servizi di scraping** (anche solo a clienti finanziari), "web scraping as a service" può essere letto come "medesima attività economica" anche con clienti diversi. **[stima]** Il rischio è alto senza un consenso del datore.
- **Mitigazioni, in ordine di forza:**
   1. **Autorizzazione scritta del datore** che descriva l'attività, i verticali e i clienti esclusi. È l'unica che risolve il caso (b).
   2. Controllo delle clausole del contratto (esclusiva, non concorrenza, proprietà intellettuale).
   3. Verticali disgiunti e dichiarati (retail e e-commerce, hospitality, aftermarket).
   4. Nessun cliente, fornitore, codice, infrastruttura o orario in comune con il datore.
   5. Founder socio di capitale e non amministratore, con gestione affidata a terzi. **[stima]** Questo **non** basta da solo: la giurisprudenza guarda alla sostanza.
- **Esito:** questo criterio **non è confutabile o confermabile con le evidenze pubbliche**. Va chiarito con il contratto e con un legale prima di costituire la società. Per l'Entusiasta il caso (a), o il caso (b) con consenso scritto, rende H03 fattibile.

### Il "successo" (≥ 50 k€/anno di margine entro 24 mesi, founder ≤ 5 h/settimana) è raggiungibile?
**[stima]** Scenario a 24 mesi:
- **Ricavi**: 20 clienti × 650 €/mese medi = **156 k€/anno**, più setup da 1.000-2.500 € per i nuovi clienti.
- **Costi**:
  - 1 sviluppatore scraping a tempo pieno: RAL 26-37 k€ secondo gli annunci (https://it.indeed.com/career/python-developer/salaries, media 32.154 €, solo estratto), cioè un costo aziendale di circa 42-48 k€ [stima: RAL × 1,35-1,4].
  - 0,5 account manager commerciale (provvigioni e fisso): circa 25 k€.
  - Infrastruttura: circa 10 % dei ricavi, quindi 15 k€.
  - Strumenti e amministrazione: circa 8 k€.
- **Margine**: 156 − (45 + 25 + 15 + 8) ≈ **63 k€** (40 % sul fatturato). Con 15 clienti a 900 € si arriva a margini simili.
- **Ritmo commerciale necessario**: circa 1 cliente netto al mese dal mese 4.
- **[stima]** È plausibile con Apify Experts, Upwork e outbound su un verticale stretto, ma non è dimostrato: la velocità di acquisizione è il dato più incerto dell'ipotesi.

## Offerte concrete (3-5)

### O1 — Monitoraggio prezzi gestito per cataloghi senza EAN (ricambi auto/moto, ferramenta e bricolage, nautica, bici)
- **Chi paga:** e-commerce e distributori italiani con 1.000-20.000 SKU in categorie dove Prisync & co. falliscono il matching.
- **Prezzi di riferimento reali:** Skuuudle circa 850 £/mese, interamente gestito; ScrapeHero 199 $/sito/mese più setup, Enterprise almeno 1.500 $/mese; Prisync 99-799 $ self-service (fonti ai punti 7, 9, 10).
- **Proposta [stima]:** setup e matching iniziale **1.500-3.000 €**, canone **500-1.200 €/mese**. Include dashboard ed export, alert e garanzia sulla qualità degli abbinamenti (abbinamenti per codice produttore/OEM con verifica umana).
- **Distribuzione:**
  - outbound su liste costruite dagli store e dai venditori delle categorie;
  - partner agenzie Magento/Shopify e gestionali per ricambi;
  - Apify Experts;
  - SEO su pagine per verticale.
- **Margine stimato:** **55-75 % lordo** (punto 17).
- **Delegabilità:** alta. Il matching è un processo con revisione umana affidabile a un operatore formato; il founder progetta la pipeline una volta.
- **Conflitto:** settore retail/aftermarket, nessun cliente finanziario e nessun dato su aziende come lead. Rischio basso nel caso (a).

### O2 — Monitoraggio MAP e rivenditori per brand produttori italiani (bici e componenti, piccoli elettrodomestici, cosmesi, outdoor, strumenti musicali)
- **Chi paga:** l'ufficio commerciale o trade marketing del brand, che deve far rispettare la politica di prezzo a decine di rivenditori online e marketplace.
- **Prezzi di riferimento:**
  - [fatto] il MAP è venduto come prodotto dedicato (Intelligence Node, Lengow NetMonitor, Price2Spy Basic);
  - [fatto] Intelligence Node, che offre anche il MAP, è stata valutata circa 100 M$;
  - **prezzi dei servizi MAP gestiti: non trovato**;
  - [stima] 600-1.500 €/mese per 50-300 SKU × 30-100 rivenditori, con report delle violazioni con screenshot e prova.
- **Distribuzione:** outbound verso i brand (elencabili da fiere di settore, liste di marchi sui marketplace) e agenzie di trade marketing come partner.
- **Margine stimato [stima]:** 60-70 %. Pochi SKU, molte pagine, ma ripetitive.
- **Delegabilità:** alta (report standard, account manager).
- **Conflitto:** basso nel caso (a). Il prezzo al consumo dei prodotti non è un dato su aziende.

### O3 — Digital shelf "light" per brand su retailer e farmacie online italiani (OTC, parafarmaco, beauty, pet)
- **Che cosa:** presenza, prezzo, disponibilità, posizione nella ricerca e conformità delle schede su Amazon.it e sui retailer e farmacie online italiani.
- **Chi paga:** brand medi del beauty & pharma (3,1 mld € online in Italia, punto 6), che non possono permettersi Profitero.
- **Prezzi di riferimento:**
  - [fatto] Bright Data Digital Shelf da 250 $/mese;
  - [fatto] Profitero, l'incumbent di fascia alta, valutato 200 M€ nel 2022;
  - [stima] 400-1.000 €/mese.
- **Distribuzione:** outbound ai brand e partnership con agenzie Amazon/retail media, che rivendono il report ai loro clienti con un margine per l'agenzia.
- **Margine stimato [stima]:** 55-70 %.
- **Delegabilità:** alta.
- **Attenzione [stima]:** si raccolgono solo dati di prodotto, senza dati personali né recensioni nominative. Verificare i termini d'uso dei retailer.

### O4 — Rate shopping di nicchia per l'ospitalità non alberghiera italiana (campeggi e villaggi, agriturismi, traghetti e noleggi)
- **Chi paga:** strutture e piccole catene che i rate shopper per hotel (Lighthouse circa 100 $/mese) coprono male.
- **Prezzi di riferimento:**
  - [fatto] Lighthouse: 370 M$ raccolti, oltre 70.000 strutture;
  - [fatto] rateparities.com: 35 $/mese per 1 hotel (solo estratto: https://www.capterra.com/p/10045186/rateparities-com/);
  - [stima] 80-200 €/mese per struttura, oppure 500-1.500 €/mese per una catena o un consorzio.
- **Distribuzione:** associazioni e consorzi di categoria, channel manager e PMS come partner.
- **Margine [stima]:** 60-75 %.
- **Delegabilità:** alta.
- **Debolezza onesta:** i prezzi d'ingresso sono bassi e gli incumbent forti. È da tenere come quarta opzione.

### O5 — Canale self-service complementare: actor a pagamento sull'Apify Store per i siti e-commerce europei difficili
- **Chi paga:** sviluppatori e analisti di tutto il mondo, a consumo. Apify trattiene il 20 % e ha pagato 24 M CZK nel 2024 (punto 5).
- **Prezzi di riferimento:** prezzo per risultato stabilito dallo sviluppatore (vedi https://blog.apify.com/standardizing-actor-pricing, non letto).
- **Ruolo:** non porta da solo a 50 k€ [stima], ma è **distribuzione senza founder** e **generazione di contatti** per O1-O3. I clienti che usano un actor diventano candidati al servizio gestito.
- **Margine [stima]:** alto (solo manutenzione).
- **Delegabilità:** alta.
- **Conflitto:** da verificare come gli altri. Evitare actor su fonti degli ambiti esclusi.

**Raccomandazione dell'Entusiasta:** partire con **O1 più O2** (stesso motore, dolore più forte, prezzi gestiti già provati), usare **O5** e **Apify Experts** come canali, e posizionarsi su "matching difficile più SLA", non su "scraping a richiesta".

## Fonti
Tutte con data di accesso **2026-11-20**. "(estratto)" indica pagine non leggibili direttamente (403/404), con dato preso dall'estratto del motore di ricerca.

- https://mordorintelligence.com/industry-reports/web-scraping-market
- https://www.marketresearch.com/LP-Information-Inc-v4134/Global-Web-Scraping-Services-Growth-44922647/ (estratto)
- https://dataintelo.com/report/price-intelligence-market (estratto)
- https://marketintelo.com/report/price-intelligence-market (estratto)
- https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data
- https://www.calcalistech.com/ctechnews/article/sjeyg2ezwe (estratto)
- https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/
- https://apify.com/partners
- https://apify.com/partners/find/getdataforme
- https://www.pagamentidigitali.it/ecommerce/ecommerce-b2c-in-italia-nel-2025-superati-i-62-miliardi-di-euro-6-cresce-il-numero-di-consumatori-digitali-e-aziende-con-sito-attivo/
- https://www.agi.it/economia/news/2025-05-27/acquisti-online-crescono-miliardi-euro-2025-31592630/ (estratto)
- https://www.scrapehero.com/pricing/
- https://www.promptcloud.com/pricing/
- https://www.grepsr.com/pricing/
- https://prisync.com/pricing/
- https://www.price2spy.com/pricing.html
- https://www.capterra.com/p/171527/Skuuudle/ (estratto)
- https://www.trustradius.com/compare-products/skuuudle (estratto)
- https://www.pricefy.io/comparisons/skuuudle-vs-pricefy (estratto)
- https://hoteltechreport.com/compare/lighthouse-rate-insight-vs-pricelabs-hotel-rate-shopper
- https://www.capterra.com/p/10045186/rateparities-com/ (estratto)
- https://brightdata.com/products/insights/digital-shelf-analytics (estratto)
- https://www.intelligencenode.com/pricing/ (estratto)
- https://www.lengow.com/it/soluzioni/netmonitor/monitoraggio-dei-prezzi-map/ (estratto)
- https://www.zyte.com/pricing/
- https://marketing.gain.pro/hubfs/OCC%20collaboration%20industry%20reports%20%2B%20transcript/Managed%20IT%20Services%20(EU)%20-%20Expert%20Interview.pdf
- https://flippa.com/11841050-b2b-data-provider-with-a-50-profit-margin-offering-marketplace-and-ecommerce-data-and-custom-web-scraping-services-requires-under-2-hours-of-work-a-day (estratto; 403)
- https://www.starterstory.com/stories/i-started-my-first-business-at-12-yrs-old-now-my-friend-i-run-a-profitable-web-scraping-service
- https://www.starterstory.com/stories/mrscraper (letto; numeri contraddittori, non usato come caso)
- https://getlatka.com/companies/grepsr.com
- https://growjo.com/company/PromptCloud (estratto)
- https://getlatka.com/companies/promptcloud-technologies (estratto)
- https://getlatka.com/companies/scrapehero (estratto)
- https://www.similarweb.com/company/scrapehero.com (estratto)
- https://www.adweek.com/commerce/ipg-intelligence-node-acquisition/ (estratto)
- https://www.exchange4media.com/digital-news/interpublic-group-acquires-mumbai-based-intelligence-node-in-100-million-deal-139304.html (estratto)
- https://www.businesswire.com/news/home/20220503005971/en/Publicis-Groupe-to-Acquire-Profitero-Creating-Industry-leading-Commerce-Solution (estratto)
- https://www.lengow.com/fr/?p=54566 (estratto)
- https://www.businesswire.com/news/home/20241120724034/en/Lighthouse-Announces-370-Million-Series-C-Investment-Led-by-KKR-to-Accelerate-Platform-Innovation-and-Growth (estratto)
- https://www.bnnbloomberg.ca/investing/2024/11/21/kkr-leads-hospitality-tech-firm-lighthouses-370-million-round/ (estratto)
- https://rategain.com/press-release/fy25-results (estratto)
- https://www.multibagg.ai/market-pulse/articles/rategain-q4-fy25-results-pat-cmpfefk9w00bup40j0yel2odt (estratto)
- https://brightdata.com/blog/web-data/auto-parts-and-tire-data (estratto)
- https://apify.com/studio-amba/car-parts-price-matrix (estratto)
- https://www.actowizsolutions.com/mirefaccion-auto-parts-data-scraping.php (estratto)
- https://www.upwork.com/resources/upwork-hourly-rates (403; estratto)
- https://www.upwork.com/agencies/1710554484446138368/ (estratto)
- https://it.indeed.com/career/python-developer/salaries (estratto)
- https://brocardi.it/massimario/83743.html
- https://brocardi.it/massimario/9634.html
- https://brocardi.it/massimario/78222.html (estratto)
- https://brocardi.it/massimario/74737.html (estratto)
- Contesto interno (non riverificato riga per riga): `docs/03-screening.md`, `docs/research/03-screening-ue-b2b.md` §33.
