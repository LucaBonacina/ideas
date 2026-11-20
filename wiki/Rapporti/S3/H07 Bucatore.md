---
tipo: rapporto
ipotesi: H07
ruolo: Bucatore di palloncini
data: 2026-11-20
tags: [rapporto, S3, H07, bucatore]
---
# H07 Micro-SaaS B2B verticale: rapporto del Bucatore

## 1. Sintesi

- **Le distribuzioni pubblicate penalizzano l'ipotesi.** Nel sondaggio MicroConf 2024 il gruppo più numeroso (28%) fattura meno di 1 k$/mese, e quel campione considera solo aziende sopravvissute che già fatturano. Le fonti secondarie sui ricavi verificati via Stripe indicano mediane di poche centinaia di dollari al mese. Non ho potuto aprirle: bloccate o rimosse.
- **L'economia unitaria non regge l'outbound delegato.**
  - Sotto i 25 $/mese di ricavo medio per cliente, la mediana di abbandono è il 6,1% al mese (ChartMogul).
  - Le risposte ai cold email sono lo 0,45-0,74%. Belkins prenota 1.200 incontri su 7,5 milioni di email.
  - Un incontro esternalizzato costa tra 500 e 2.000 $ circa.
  - In Italia l'email commerciale non richiesta richiede il consenso. Il Garante lo ha ribadito anche nel 2026, per email da azienda a professionista.
- **Le nicchie ovvie sono sature.**
  - Nell'app store Shopify, 7 dei 9 tracker di prezzi concorrenti verificati sono stati lanciati nel 2026. Hanno tutti 0 recensioni e quasi tutti un piano gratuito.
  - Capterra elenca 501 prodotti di gestione della reputazione e 859 strumenti SEO.
  - Apify offre 126.812 "Actors" di scraping: la competenza distintiva del profilo è ormai una commodity.
  - Lovable dichiara 1 milione di nuovi progetti a settimana.
- **Verdetto del Bucatore:**
  - Criterio 1: soddisfatto sulla popolazione, incerto sui sopravvissuti.
  - Criterio 2: soddisfatto per la via outbound.
  - Criterio 3: soddisfatto per le nicchie ovvie, non dimostrato per le nicchie verticali profonde.
  - Secondo me H07 è **confutata nella forma "costruisci in fretta con AI + outbound delegato"**. Sopravvive solo una variante stretta: ricavo per cliente alto, nicchia non tecnica, canale tramite marketplace di integrazioni poco affollato. Per questa variante non ho trovato evidenze né a favore né contro.

## 2. Argomenti principali

### A. La distribuzione dei ricavi: il caso tipico è sotto 1 k$/mese

- **[fatto] MicroConf 2024, unico dato pubblico.** MicroConf riporta dal *2024 State of Indie SaaS* (p. 34) che "28% of independent SaaS companies are doing under $1,000 in MRR", definito "the single largest group in the entire survey". Altri dati dalla stessa pagina:
  - "65%" ha 1-10 clienti paganti (p. 25), secondo quanto riportato.
  - Il campione è di 469 founder, con dati raccolti a fine 2023.
  - Fonte: https://microconf.com/founders/0-10k-arr
  - Il report completo 2024 è dietro un modulo e non l'ho letto (https://microconf.com/state-of-indie-saas).
- **[fatto] Il campione MicroConf è sopravvissuto per costruzione.** Il report 2020 dichiara il filtro: rispondenti "in current operation", "revenue generating", "subscription-software". Le aziende chiuse sono state escluse e invitate a "a future survey". Le completate sono 1.556 su circa 25.000 contattati.
  - Fonte: https://static1.squarespace.com/static/5d6fd1b92a7aeb00017966dd/t/5e291fc7d2e9fa1df81e2a8c/1579753464656/sois
  - [stima] La mediana dell'intera popolazione dei tentativi, chiusi e a zero compresi, è quindi certamente più bassa di quella del campione.
- **[fatto] Effetto del tempo del founder (MicroConf).**
  - Il report 2020 trova "a strong correlation between the hours worked by a founder and revenue growth" (stesso PDF, p. 36 circa).
  - La pagina MicroConf su dati 2024 riporta che i founder a tempo pieno crescono "30%" più dei part-time (p. 45).
  - Il profilo prevede un founder a ≤ 5 ore/settimana: è esattamente il segmento che cresce meno. Il team delegato non è il founder.
- **[fatto, fonte secondaria debole] Micro-SaaS in generale.** Freemius cita "Rocking Web" su "1,000+ micro-SaaS products": circa il 70% sotto 1 k$ MRR, il 18% tra 1 e 5 k$. La metodologia non è dichiarata. Lo segnalo come numero di parte terza non verificabile.
  - Fonte: https://freemius.com/blog/state-of-micro-saas-2025/
- **[non verificato direttamente] Ricavi verificati via Stripe/TrustMRR.**
  - Fonti secondarie (analisi Indie Hackers di 5.079 startup TrustMRR, BigIdeasDB) riportano mediane di 148 $/mese all'anno 0 e 334 $/mese all'anno 1. Altre mediane dello stesso fornitore sono 7 $ o 136 $ MRR e si contraddicono tra loro.
  - Non ho potuto aprire le pagine. Indie Hackers ha risposto 403, BigIdeasDB 429 o con verifica Vercel, Quasa 410.
  - Le cito solo come indizio coerente, non come fatto. Il Giudice, se vuole usarle, deve riaprirle con un browser.

### B. Economia unitaria: l'abbandono delle piccole imprese mangia l'outbound

- **[fatto] Abbandono per fascia di prezzo (ChartMogul).** La mediana mensile di abbandono clienti è del 6,1% sotto i 25 $/mese di ricavo medio per cliente e del 2,2% sopra i 500 $. Sotto i 300 k$ di ARR è del 6,5% al mese. I dati vengono dalla piattaforma ChartMogul (periodo nov. 2021-gen. 2022).
  - Fonte: https://chartmogul.com/blog/good-customer-churn-rate/
- **[fatto] Risposte ai cold email.**
  - Smartlead: mediana di risposta dello 0,74% per contatto su oltre 850 milioni di email (gen-giu 2026). Il top 10% arriva al 2,63%. Fonte: https://www.smartlead.ai/benchmarks/average-cold-email-reply-rate
  - Belkins, 2025: 0,45% di risposte su 7.530.489 email. Nel secondo semestre il tasso scende allo 0,40%, contro lo 0,50% del primo. Risultano "over 1,200 appointments" prenotati. Fonte: https://belkins.io/blog/cold-email-response-rates
  - [stima] Ne viene circa 1 incontro ogni 6.000 email, come limite inferiore.
- **[fatto] Costo dell'outbound esternalizzato (Belkins, ago. 2025).**
  - Full-funnel: "$500–$700 per appointment for mid-level targets".
  - Pay-per-appointment: "around $1,000–$2,000 per qualified meeting".
  - Retainer: "$10,000 to $50,000+ per month".
  - È un fornitore che vende il servizio, ma il punto è che i prezzi sono alti.
  - Fonte: https://belkins.io/blog/cost-to-outsource-sales
- **[stima] Conto per l'obiettivo di 50 k€/anno di margine.**
  - Ipotesi: costi del team delegato e dell'infrastruttura di circa 2,5 k€/mese.
  - Servono circa 6,7 k€ di MRR. A 50 €/mese per cliente sono circa 135 clienti.
  - Con il 6,1-6,5% di abbandono mensile servono circa 9 nuovi clienti al mese solo per restare fermi, di più per crescere.
  - Se un incontro su 5 chiude, servono circa 45 incontri al mese. Anche al prezzo più basso citato da altri venditori (100 $/incontro) il costo di acquisizione è di circa 500 $ per cliente.
  - Il valore lordo di un cliente è di circa 50/0,065 ≈ 770 €. Il rapporto valore/costo di acquisizione è vicino a 1,5, troppo basso.
  - Ai prezzi Belkins (500-2.000 $/incontro) il conto è nettamente negativo.
  - L'outbound regge solo con un ricavo per cliente di almeno 300-500 €/mese. Ma a quei prezzi la vendita richiede demo e trattativa, cioè un venditore capace: il founder o un venditore assunto, costoso.

### C. Il cold email in Italia/UE: vincolo legale, non solo di recapito

- **[fatto] Provvedimento del Garante del 17 aprile 2026 [doc. 10252188].**
  - Riguarda una microimpresa di consulenza ERP/IT che aveva inviato email promozionali a un avvocato.
  - Il Garante afferma che l'invio "non può essere fondato sul contratto o su legittimo interesse del titolare, ma unicamente sul consenso dell'interessato".
  - Afferma anche che i dati "non sono liberamente utilizzabili per finalità promozionali per il solo fatto di essere resi pubblici".
  - Il Garante ha respinto la tesi della "mera interlocuzione professionale".
  - Esito: ammonimento per le email, più una sanzione di 1.000 € per il mancato riscontro a una richiesta di accesso.
  - Fonte: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188
  - [stima] L'importo è basso, ma il precedente chiude la strada al cold email massivo verso professionisti italiani, che sono il bersaglio tipico dei SaaS verticali (studi, artigiani, agenzie). Restano telefono e LinkedIn manuale, che il provvedimento colloca fuori dall'art. 130 ma che costano tempo umano.
- **[fatto] Requisiti di recapito di Gmail.**
  - "Keep spam rates reported in Postmaster Tools below 0.30%". La guida indica di stare sotto lo 0,10%.
  - Sopra i 5.000 messaggi al giorno servono SPF, DKIM e DMARC.
  - Per i messaggi di marketing è obbligatoria la disiscrizione con un clic.
  - Fonte: https://support.google.com/a/answer/81126
  - [stima] Una campagna fredda su liste acquistate supera facilmente lo 0,1-0,3% di segnalazioni. Servono domini multipli e riscaldamento: lavoro operativo continuo, delegabile ma costoso.

### D. Saturazione: costruire costa quasi zero per tutti

- **[fatto] Lovable.** TechCrunch, 9 giugno 2026: l'uso è "accelerated to one million new projects a week", con "over 50 million projects" in totale (dato dichiarato dall'azienda).
  - Fonte: https://techcrunch.com/2026/06/09/lovable-says-it-has-hit-500m-in-annualized-revenue-with-1-million-new-projects-a-week/
  - Sottolinea che gli utenti, "primarily non-technical", costruiscono sempre più software da monetizzare.
- **[fatto] Tracker di prezzi concorrenti nell'app store Shopify.** Ho verificato una per una le pagine delle app il 2026-11-20.

| App | Lancio | Recensioni |
|---|---|---|
| PricePatrol | 27/04/2026 | 0 |
| PriceKit | 09/01/2026 | 0 |
| PriceSentry | 11/06/2026 | 0 |
| PricePing | 03/07/2026 | 0 |
| StoreSentry | 23/07/2026 | 0 |
| Waslio | 12/10/2026 | 0 |
| PricePulse | 13/10/2026 | 0 |
| Lurk | 28/03/2025 | 6 |
| Pricefy | 17/05/2022 | 71 |

  - Quasi tutte hanno "Free plan available". I prezzi a pagamento vanno da 4,99 a 249 $/mese.
  - [stima] È la firma della saturazione da prodotti costruiti con AI: ondata di lanci, zero trazione, prezzi schiacciati verso lo zero.
- **[fatto] Categorie Capterra.** Il markup schema.org delle pagine di categoria riporta "numberOfItems": 501 per la reputazione online e 859 per il software SEO.
  - Fonti: https://www.capterra.com/reputation-management-software/ e https://www.capterra.com/seo-software/
- **[fatto] Apify Store.** Mostra "Browse 126,812 Actors", con decine di scraper di recensioni Google già pronti.
  - Fonte: https://apify.com/store?search=google%20reviews
  - [stima] Lo scraping "medio" non è più un vantaggio difendibile: lo vende chiunque a pochi dollari.
- **[fatto, aneddotico] Product Hunt.** Un post del forum riporta 610 prodotti inviati in un giorno, di cui 16 messi in evidenza. È una singola osservazione non verificata.
  - Fonte: https://www.producthunt.com/p/general/are-product-launches-and-hunts-increasing-on-ph-since-we-have-generative-ai-and-vibe-coding

### E. Rischi di piattaforma

- **[fatto] Shopify.** Dal 16 giugno 2025 l'esenzione dalla quota di ricavi vale sul primo milione di dollari "of lifetime revenue" e non si azzera più ogni anno. Sopra quella soglia Shopify trattiene il 15%. È un esempio di come il marketplace cambia le regole in modo unilaterale; per un micro-SaaS sotto 1 M$ l'impatto è nullo.
  - Fonte: https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share
- **[fatto] Google contro SerpApi.** Il 19 dicembre 2025 Google ha fatto causa a SerpApi per lo scraping dei risultati di ricerca: "as a last resort we take legal action".
  - Fonte: https://blog.google/technology/safety-security/serpapi-lawsuit/
  - Secondo Search Engine Land le pretese DMCA sono state respinte il 20 luglio (2026), con possibilità di modificare la domanda. Non ho potuto aprire la pagina (403), quindi il dato non è verificato.
  - [stima] Uno strumento SEO costruito sullo scraping delle pagine di Google eredita un rischio legale e tecnico che l'utente finale non paga.
- **[fatto] Places API di Google.** Restituisce "A maximum of 5 reviews".
  - Fonte: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
  - Per avere tutte le recensioni bisogna fare scraping, contro i termini d'uso, oppure usare l'API del proprietario, che serve solo per le proprie sedi.

### F. Evidenze contrarie (per onestà)

- **[fatto] Istat, "Imprese e ICT 2025"** (15/12/2025), su imprese con almeno 10 addetti: 68,1% compra servizi cloud intermedi o avanzati; 56,0% usa software gestionali.
  - Fonte: https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/
  - La disponibilità a pagare software in abbonamento esiste. Il dato esclude però le microimprese, che sono il bersaglio tipico dei micro-SaaS.
- **[fatto] MicroConf 2025.** Freemius riporta che il 28% di 230 founder presenti alla conferenza dichiarava oltre 100 k$ MRR. È un campione auto-selezionato di vincitori, fonte: https://freemius.com/blog/state-of-micro-saas-2025/

## 3. Analisi dei criteri di confutazione

| Criterio | Evidenza | Giudizio del Bucatore |
|---|---|---|
| **1. La mediana dei micro-SaaS resta sotto 1 k$/mese** | Nel campione sopravvissuto MicroConf il gruppo più numeroso (28%) è sotto 1 k$. Il campione esclude le aziende chiuse e quelle a zero. Fonti secondarie su TrustMRR (non verificate) danno mediane di 150-330 $/mese; Rocking Web dà il 70% sotto 1 k$ (metodologia ignota). | **Soddisfatto sulla popolazione dei tentativi** [stima forte]. Sui soli sopravvissuti MicroConf la mediana potrebbe superare 1 k$, ma il report 2024 completo non è pubblico e non posso dimostrarlo né escluderlo. Un'ipotesi che punta su "costruisci in fretta" va misurata sulla popolazione dei tentativi, non sui sopravvissuti. |
| **2. Il costo di acquisizione richiede la vendita diretta del founder** | Abbandono del 6,1-6,5% al mese a basso prezzo. Risposte ai cold email dello 0,45-0,74%. Incontri esternalizzati a 500-2.000 $. Consenso obbligatorio in Italia. I founder a tempo pieno crescono il 30% in più e c'è una "strong correlation" tra ore del founder e crescita. | **Soddisfatto per la via outbound.** A basso prezzo l'outbound delegato non si ripaga. Ad alto prezzo serve un venditore vero. Il criterio parla di "founder": un venditore assunto è un'alternativa, ma costa almeno 40-60 k€/anno [stima], cioè quanto l'intero margine obiettivo. La via marketplace evita la vendita diretta ma ricade nel criterio 3. |
| **3. Le nicchie accessibili sono sature di prodotti costruiti con AI** | Shopify: 7 tracker di prezzo su 9 lanciati nel 2026, a 0 recensioni, quasi tutti con piano gratuito. Capterra: 501 prodotti di reputazione online e 859 SEO. Apify: 126.812 Actors. Lovable: 1 milione di progetti a settimana. | **Soddisfatto per le nicchie ovvie** (prezzi, recensioni, SEO, monitoraggio). **Non dimostrato** per le nicchie verticali profonde, dove non ho dati: l'assenza di prove non è una prova di spazio libero. |

**Conclusione del Bucatore:** due criteri su tre sono soddisfatti in modo chiaro e il terzo lo è nella forma più probabile, cioè una nicchia "accessibile" a chi parte senza pubblico. Propongo al Giudice di considerare H07 **confutata nella forma generale**. Lascerei aperta solo la variante descritta in fondo alla sezione 4.

## 4. Idee concrete (attaccate)

1. **Monitoraggio prezzi concorrenti per piccoli e-commerce (Shopify/WooCommerce).** **Morta.**
   - Nel 2026 è arrivata un'ondata di app con piano gratuito e 0 recensioni.
   - Gli incumbent hanno prezzi d'ingresso bassi: Prisync parte da 99 $/mese secondo i comparatori (https://www.capterra.com/compare/153451-154047/Prisync-vs-Price2Spy), Pricefy ha 71 recensioni.
   - Un negozio piccolo osserva pochi rivali: StoreSentry si presenta come "Built for stores watching 1–15 rivals". Ne segue una disponibilità a pagare bassa e un abbandono alto (6,1% al mese sotto i 25 $).
   - Lo scraping del profilo non fa la differenza: i cataloghi Shopify espongono già dati strutturati, e StoreSentry dichiara di leggere "structured catalog data".
2. **Monitoraggio prezzi per prodotti senza EAN (N9 dello screening).** **Ferita, non morta.**
   - Il vantaggio dichiarato è il confronto dei prodotti, ma ora le app lo promettono con l'AI: Dixxi PricePilot AI "helps merchants match products" (https://apps.shopify.com/pricetracker-ai-competitive).
   - I clienti che pagano davvero sono marchi e catene medie, con alto prezzo e ciclo di vendita con demo. Si ricade nel criterio 2.
3. **Monitoraggio recensioni per attività locali.**
   - L'API ufficiale dà solo 5 recensioni per luogo. Per le proprie sedi il proprietario ha già l'API e le notifiche di Google.
   - Il mercato conta 501 prodotti su Capterra e decine di scraper pronti su Apify. Il nome del recensore è un dato personale (GDPR).
   - Il canale verso i ristoratori italiani passa per il cold email, che richiede consenso, o per la vendita sul campo.
4. **Strumenti SEO o di tracciamento delle posizioni per PMI.** **Morta.**
   - Ci sono 859 prodotti su Capterra e incumbent forti.
   - Lo scraping delle pagine di Google è oggetto di contenzioso (Google contro SerpApi, dic. 2025).
   - Il costo dei dati SERP rende sottili i margini.
5. **Lead generation e arricchimento contatti.** **Esclusa** dagli ambiti ("dati su aziende come lead"). Ricade anche nel provvedimento del Garante sull'uso promozionale dei dati pubblici.
6. **"Wrapper AI" verticale** (preventivi, generatori di documenti per un mestiere). **Morta come micro-SaaS.**
   - Si costruisce in un giorno su Lovable e simili, con 1 milione di progetti a settimana.
   - C6 è basso: un chatbot generalista fa la stessa cosa.
   - Non c'è difendibilità.

**Che cosa resiste (poco):**
- Un SaaS verticale per una nicchia B2B non tecnica e non esclusa, con queste caratteristiche:
  - il prezzo è di almeno 200-300 €/mese, così l'abbandono e il costo di acquisizione tornano sostenibili, almeno secondo i dati ChartMogul sopra i 500 $;
  - il valore viene da dati web difficili da raccogliere e da ripulire con continuità, dove il cliente non può fare da solo con Apify;
  - la distribuzione passa da un marketplace di integrazioni con poche app nella categoria, per esempio il gestionale di settore, non Shopify.
- Non ho evidenze che una nicchia simile esista con domanda misurabile. Resiste ai miei attacchi solo perché non ho dati per colpirla.
- Il Giudice dovrebbe chiedere all'Entusiasta un caso concreto con prezzo, canale e numero di app concorrenti verificati.

## 5. Fonti (accesso 2026-11-20)

- https://microconf.com/founders/0-10k-arr
- https://microconf.com/state-of-indie-saas (landing; report 2024 dietro modulo; PDF 2022 su Dropbox non scaricabile)
- https://static1.squarespace.com/static/5d6fd1b92a7aeb00017966dd/t/5e291fc7d2e9fa1df81e2a8c/1579753464656/sois (PDF 2020 State of Independent SaaS)
- https://freemius.com/blog/state-of-micro-saas-2025/
- https://chartmogul.com/blog/good-customer-churn-rate/
- https://www.smartlead.ai/benchmarks/average-cold-email-reply-rate
- https://belkins.io/blog/cold-email-response-rates
- https://belkins.io/blog/cost-to-outsource-sales
- https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188
- https://support.google.com/a/answer/81126
- https://techcrunch.com/2026/06/09/lovable-says-it-has-hit-500m-in-annualized-revenue-with-1-million-new-projects-a-week/
- Pagine dell'app store Shopify: https://apps.shopify.com/competitor-price-tracker-1, /pricekit, /pricesentry-1, /priceping, /storesentry-1, /waslio-competitor-prices, /pricepulse-competitor-spy, /lurk, /pricefy-io, /pricetracker-ai-competitive
- https://www.capterra.com/reputation-management-software/ ; https://www.capterra.com/seo-software/
- https://www.capterra.com/compare/153451-154047/Prisync-vs-Price2Spy (prezzo Prisync dagli estratti di ricerca, pagina non aperta)
- https://apify.com/store?search=google%20reviews
- https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
- https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share
- https://blog.google/technology/safety-security/serpapi-lawsuit/
- https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/
- https://www.producthunt.com/p/general/are-product-launches-and-hunts-increasing-on-ph-since-we-have-generative-ai-and-vibe-coding (aneddoto, non aperto)
- Non accessibili: https://www.indiehackers.com/post/i-analyzed-5-079-stripe-verified-startups-f0f6bd053f (403), https://bigideasdb.com/state-of-indie-saas-revenue-2026 e /trustmrr-saas-revenue-benchmarks-2026 (429/verifica Vercel), https://quasa.io/media/startup-reality-the-hard-numbers-from-trustmrr (410), https://searchengineland.com/google-loses-key-dmca-claims-against-serpapi-in-scraping-lawsuit-483185 (403)

## 6. Ricerche web usate: 19
