---
tipo: rapporto
ipotesi: H08
ruolo: Bucatore di palloncini
data: 2026-11-20
tags: [rapporto, S3, H08, bucatore]
---
# H08 — App mobile B2C in abbonamento (utility/AI) — Rapporto del Bucatore

## 1. Sintesi
- Il dato più forte contro l'ipotesi viene proprio dal report annuale di settore: secondo RevenueCat (State of Subscription Apps 2026, oltre 115.000 app), **la mediana dei ricavi mensili a un anno dal lancio è di circa 72 $**. Solo il **17,3%** delle app nuove arriva a 1.000 $/mese entro 2 anni e solo il **4,6%** a 10.000 $/mese. Le app lanciate dal 2025 in poi valgono il **3%** dei ricavi del campione; quelle nate prima del 2020 il **69%**.
- La soglia di successo del protocollo (50 k€/anno di margine con team delegato) richiede, per mia stima, **almeno 10-20 k$ di ricavo mensile ricorrente (MRR)**. È un esito da 5% superiore, non da caso mediano.
- **L'acquisizione a pagamento non regge.** Il costo mediano per utente pagante è di circa **65 $ su Meta** (Adapty, terzo trimestre 2026) e di circa **67 $ con Apple Ads negli USA**. Il valore realizzato mediano di un pagante nel primo anno è di circa **23 $** (RevenueCat). Il ritorno sulla spesa (ROAS) mediano su Meta a 7 giorni è del 39%, e negli USA del 33%.
- **Le app AI incassano di più per pagante ma trattengono meno abbonati:** dopo un anno ne resta il 21,1%, contro il 30,7% delle app non AI. ChatGPT da solo fa circa due terzi della spesa in app AI generativa.
- **L'offerta esplode e la domanda è ferma:** nel primo semestre 2026 sono uscite circa 560.000 app nuove sull'App Store, mentre i download sono cresciuti del 2%. Apple ha respinto 1,93 milioni di invii nel 2024, e la linea guida 4.3 vieta i cloni.
- **Le idee ovvie per un profilo da scraper muoiono quasi tutte.** Carburanti: c'è l'app gratuita del Ministero (MIMIT) e il premium dei concorrenti costa 0,99 €/mese. Tracker prezzi Amazon: camelcamelcamel e Keepa sono gratis. Scanner/OCR: funzione già nel sistema operativo e mercato saturo. AI utility generica: sostituita dai chatbot generalisti.
- **Verdetto del Bucatore: il primo criterio di confutazione è soddisfatto in pieno, il secondo in larga parte.**

## 2. Argomenti principali

### A. I ricavi mediani sono trascurabili (fonte primaria RevenueCat 2026)
- [fatto] Il campione copre "over 115,000 apps, representing more than $16 billion in revenue". RevenueCat (citato da PPC Land) dichiara di rappresentare circa il 20% dei ricavi globali da abbonamenti in app. Fonte: revenuecat.com/state-of-subscription-apps-2026 e ppc.land.
- [fatto] **Ricavi mensili a un anno dal lancio** (MTR, ricavo mobile su 30 giorni): "Cross-category median is ~$72, but the top 10% pull $2,500+". Si entra nel quartile superiore sopra 429 $ e nel 10% migliore sopra 2.574 $. PPC Land riporta che il 50% centrale delle app sta tra 16 $ e 429 $ al mese.
- [fatto] "Share of newly-launched apps that hit revenue milestones in their first 2 years": il **17,3%** raggiunge 1.000 $ al mese, il **4,6%** 10.000 $ al mese. Rispetto all'anno precedente sono in calo: dal 19% al 17% e dal 5,3% al 4,6% (PPC Land).
- [fatto] "apps launched before 2020 generate 69% of all subscription revenue". Le app lanciate dal 2025 in poi fanno il 3% dei ricavi. Il mercato premia chi c'è già.
- [fatto] Distribuzione della crescita: la mediana cresce del 5,3% l'anno, il quartile superiore del +80%, il quartile inferiore del −33%. Il divario tra le app migliori e le peggiori è "400x, up from 200x in 2024" (blog RevenueCat).
- [fatto] Nel report 2025 (dati 2024), secondo la sintesi di Paddle, metà delle app incassava meno di 50 $ al mese. È una fonte secondaria e non l'ho aperta.
- [stima] **Bias del sopravvissuto a favore dell'ipotesi.** Il campione RevenueCat include solo app che hanno già integrato un SDK di abbonamento, quindi progetti mediamente più seri della media dello store. La distribuzione reale delle app nuove è con ogni probabilità peggiore.
- [stima] **Soglia di successo.** 50 k€ di margine annuo sono circa 4,8 k$ al mese. Per arrivarci vanno sottratti dal lordo:
  - commissione store del 15% (Small Business Program);
  - IVA inclusa nei prezzi UE, circa il 18% del lordo;
  - team operativo delegato: sviluppo, ASO, assistenza, aggiornamenti per le nuove versioni di iOS e Android;
  - eventuali costi di inferenza AI o di scraping.

  Con un team anche minimo (≥ 3-5 k€ al mese) servono **≥ 10-15 k$ di MRR lordo**. È l'esito del ~4,6% migliore dopo 2 anni.

### B. La crescita a pagamento non è sostenibile
- [fatto] **Meta Ads**, benchmark Adapty del terzo trimestre 2026 (5.000 app, 45 paesi, valori mediani):
  - costo per utente pagante **64,93 $**;
  - costo per trial **20,28 $**, se la campagna ottimizza le prove gratuite;
  - ROAS a 7 giorni **39%**; negli USA **33%**, 26° paese su 27.
- [fatto] **Apple Ads**, benchmark Adapty 2026 (8.000+ app, dati 2025):
  - costo per installazione (CPI) USA **2,51 $**; mediana sui 90 mercati 0,51 $;
  - "$1,000 buys … 15 [paying subscribers] in the US", cioè circa 67 $ per pagante (calcolo mio);
  - conversione da installazione a pagante: 1,92% con Apple Ads, 0,91% con gli altri canali a pagamento.
- [fatto] **Valore di un pagante.** RevenueCat 2026: "$23 annual RLTV per payer is the global median". Per l'Europa occidentale la mediana annua è 26,64 $. Il blog RevenueCat dà 21,37 $ per le app non AI e 30,16 $ per le app AI (valore realizzato nel primo anno).
- [stima] **Confronto.** Pagare circa 65 $ per un utente che rende 23-30 $ nel primo anno significa perdere circa il 55-65% su ogni pagante. Per andare in pari servirebbero 2-3 anni di permanenza. Ma dopo un anno resta solo il 27-28% degli abbonati annuali (blog RevenueCat) e il 21% nelle app AI.
  - **Cautela:** le fonti sono diverse (Adapty e RevenueCat) e le mediane non sono condizionate per categoria. Le app migliori stanno sopra il pareggio, ma la mediana no.
- [fatto] **I prezzi sono bassi.** Il mensile più comune è 10 $ (mediana 8 $), l'annuale più comune 30 $ (mediana 34,80 $). La struttura dominante è 4,99-6,99 $ a settimana, 7,99-9,99 $ al mese, 29,99-39,99 $ all'anno (RevenueCat 2026).
- [fatto] **Conversione.** La conversione da download a pagante a 35 giorni è del 2,1% con modello freemium e del 10,7% con paywall rigido. I trial lunghi (17-32 giorni) convertono al 42,5%, quelli di 4 giorni o meno al 25,5%. Nell'Europa occidentale la conversione da download a pagante è del 2,0% (RevenueCat 2026).
- [stima] **Conseguenza.** Senza pubblico proprio, i canali gratuiti restano l'ottimizzazione per gli store (ASO), la SEO e il passaparola. In un mercato dove i ricavi sono concentrati sulle app più vecchie, l'ASO favorisce chi ha storico di recensioni e download. Il canale "integrato" (lo store) esiste, ma è sovraffollato (vedi D).

### C. Churn e retention: il caso AI è il peggiore
- [fatto] TechCrunch (10 marzo 2026, dati RevenueCat):
  - **retention annuale** "21.1% for AI apps, compared with a higher 30.7% for non-AI apps";
  - **retention mensile** a 12 mesi: 6,1% contro 9,5%;
  - **rimborsi:** 4,2% contro 3,5% di mediana; il 4,2% è circa il 20% in più;
  - le app AI sono il 27,1% delle app del campione.
- [fatto] Blog RevenueCat: "the first month accounts for 35% of all annual cancellations".
- [fatto] Adapty 2025 (11.000+ app, 1,9 mld $): rimborsi del 4,2% sui piani annuali; negli USA sopra il 3%.

### D. Saturazione: le nuove app raddoppiano, i download no
- [fatto] Sensor Tower, ripreso da 9to5Mac (20 luglio 2026):
  - nel primo semestre 2026 sono uscite **circa 560.000 app nuove** sull'App Store, contro circa 600.000 in tutto il 2025;
  - i download sono cresciuti del 3% nel 2025 e del **2%** nel primo semestre 2026.

  La concorrenza per ogni download cresce di circa 2 volte l'anno. La fonte attribuisce l'aumento al "vibe coding".
- [fatto] Lo stesso articolo cita due app nuove: 1.300 download e circa 500 $ di profitto, 20.000 download e circa 3.000 $.
- [fatto] **Concentrazione nell'AI.** Nel 2025 ChatGPT ha generato **3,4 mld $** di acquisti in app, su un totale di oltre **5 mld $** di spesa nelle app di AI generativa (TechCrunch, 21 gennaio 2026, dati Sensor Tower). OpenAI e DeepSeek fanno quasi il 50% dei download delle app AI. Tutte le prime 10 app per download sono assistenti AI.
- [stima] ChatGPT cattura circa il 65-70% della spesa in app AI generativa (3,4 su oltre 5). Il resto è conteso da decine di migliaia di app "wrapper" (app che rivestono un modello altrui).

### E. Rischi di piattaforma
- [fatto] **Linee guida Apple:**
  - **4.3(b):** "Don't submit apps that are indistinguishable from what's already widely available… Opportunistically creating variants of existing app categories…" seguito da un elenco di categorie già sature;
  - **4.3(a):** vieta più app identiche per città o località;
  - **4.2.2:** "apps shouldn't primarily be … web clippings, content aggregators, or a collection of links". Rischio diretto per le app che riconfezionano dati raccolti con lo scraping.
- [fatto] **Rifiuti e rimozioni nel 2024** (Apple Transparency Report, via MacRumors):
  - 7,77 milioni di invii esaminati, **1,93 milioni respinti**;
  - 82.509 app rimosse;
  - 26.224 ricorsi contro le rimozioni.
- [fatto] **Commissione:** 15% con lo Small Business Program, sotto 1 mln $ di proventi. Linea guida 3.1.1: le funzioni a pagamento in app devono passare dall'acquisto in-app.
- [fatto] **"Sherlocking"** (Apple integra nel sistema la funzione che vendeva un'app di terzi):
  - **iOS 18:** secondo Appfigures (TechCrunch, 16 luglio 2024) le app minacciate valevano circa **393 mln $** l'anno di ricavi (sentieri, grammatica, matematica, password, emoji);
  - **WWDC 2025:** colpiti gli screening chiamate (Truecaller, Robokiller), il **tracciamento pacchi in Wallet**, Flighty, la cronologia appunti, le app di registrazione chiamate (MacRumors, 11 giugno 2025). Le utility per i consumatori sono la categoria più esposta.

### F. Concorrenza delle funzioni native e dei chatbot generalisti
- [fatto] Il tracciamento pacchi e voli è stato integrato in Wallet con iOS 26 (vedi E).
- [stima] **Scansione/OCR, traduzione, riassunti, "chiedi alla foto":** Note e File di iOS, Google Lens e gli assistenti generalisti già lo fanno gratis. Non ho cercato una fonte specifica per ciascuna funzione.
- [stima] Un'utility AI generica è un caso d'uso di ChatGPT o Gemini. L'utente che paga già l'assistente non paga un secondo abbonamento per lo stesso modello.

## 3. Criteri di confutazione, uno per uno

**Criterio 1 — "I dati di settore mostrano ricavi mediani trascurabili".**
- **Esito: SODDISFATTO.** È la fonte esattamente prevista dal criterio (report annuale sulle app in abbonamento).
  - mediana di **~72 $ al mese a un anno**;
  - 82,7% delle app sotto 1.000 $ al mese dopo 2 anni;
  - 95,4% sotto 10.000 $ al mese.
- Il report precedente (sintesi Paddle) dava metà delle app sotto 50 $ al mese.
- Con la soglia di successo del protocollo, l'esito mediano vale circa l'1-2% dell'obiettivo. [stima]

**Criterio 2 — "Crescita possibile solo con acquisizione a pagamento non sostenibile".**
- **Esito: SODDISFATTO IN LARGA PARTE, per la mediana.**
  - il costo mediano per pagante (Meta ~65 $, Apple Ads USA ~67 $) supera di 2-3 volte il valore mediano a un anno (23 $);
  - il ROAS mediano a 7 giorni è 33-39%;
  - con un'uscita del 70-80% degli abbonati nel primo anno, il ritorno a 24 mesi resta sotto 1 per l'app mediana. [stima]
- **Dove il criterio non è pienamente soddisfatto:**
  - esiste un canale organico (ricerca negli store/ASO, SEO) che non costa per installazione;
  - i paywall rigidi e i trial lunghi alzano molto la conversione;
  - quindi un'app nel 10% migliore può essere sostenibile.
- Ma l'evidenza dice che l'organico è dominato dalle app storiche (69% dei ricavi da app nate prima del 2020) e intasato da un'offerta che raddoppia. Il profilo non ha pubblico proprio che compensi.

**Conclusione del Bucatore:** H08 è **confutata come strategia generale**. Sopravvive solo come scommessa a bassa probabilità: circa il 5% delle app nuove raggiunge 10 k$ al mese in 2 anni, e meno ancora le soglie compatibili con un team delegato. Per stare in piedi le servirebbe un vantaggio specifico che non sia "so costruire l'app" (vedi idee). [stima]

## 4. Idee concrete attaccate

| # | Idea ovvia per il profilo | Cosa la uccide | Esito |
|---|---|---|---|
| 1 | **App di confronto carburanti (Italia)** con dati raccolti via scraping | Il dato è **open data MIMIT**, quindi lo scraping non dà vantaggio. Dal 20 luglio 2026 c'è l'**app ufficiale gratuita Osservaprezzi Carburanti** (tuttoandroid.net). Libero.it (28 settembre 2026) elenca altri 7 strumenti, quasi tutti gratuiti (Trova Carburante, Ottano, iFuel, Fuelio…). Il premium di Prezzi Benzina costa **0,99 €/mese**: un tetto di prezzo che rende impossibile arrivare a 10 k$ al mese senza circa 12.000+ paganti. La linea guida 4.3 vede di cattivo occhio le varianti di categorie già piene. | **Morta** |
| 2 | **Tracker prezzi/offerte** (Amazon e e-commerce) con avvisi | **camelcamelcamel è gratis** e copre milioni di prodotti; Keepa ha un livello gratuito e il Pro è pensato per i venditori, non per i consumatori. Chrome e Google hanno avvisi di prezzo nativi. Lo scraping di Amazon viola i termini d'uso, e vietato da Amazon significa rischio di blocchi. Monetizzare con l'affiliazione non è abbonamento. Rischio 4.2.2 ("content aggregators"). | **Morta come abbonamento** (forse sito con affiliazione, fuori da H08) |
| 3 | **Volantini / prezzi del supermercato** | Il precedente screening (docs/05) notava che i cataloghi sono protetti e che la domanda va sui volantini, dove domina ShopFully. È un mercato a disponibilità a pagare quasi nulla: chi cerca il risparmio non paga un abbonamento. | **Morta** |
| 4 | **Scanner documenti / OCR** | La funzione è nel sistema operativo e nelle app Google/Adobe gratuite (stima, non verificato fonte per fonte). La categoria è presidiata da tempo (Appfigures 2021: già 47 scanner USA sopra 10 k$/mese netti). È uno dei bersagli più classici della linea guida 4.3. | **Morta** |
| 5 | **Utility AI generica** (riassunti, traduttore, "chiedi alla foto", chatbot tematico) | ChatGPT prende ~2/3 della spesa AI. La retention annuale delle app AI è del 21%, con il 20% di rimborsi in più. È copiabile in giorni nell'ondata di app scritte con l'AI. Chi la costruisce ha anche i costi di inferenza a margine. | **Morta** |
| 6 | **Tracciamento pacchi / voli / avvisi da email** | Sherlockata da Wallet con iOS 26 (MacRumors). | **Morta** |
| 7 | **App "alert" su annunci** di marketplace (usato, Vinted/Subito, ricerche salvate) | I marketplace offrono già notifiche native sulle ricerche salvate (stima, non verificato). Lo scraping viola i termini d'uso e c'è rischio di blocco tecnico e legale. La dipendenza da una sola fonte che può chiudere il rubinetto è fatale. | **Morta o fragile** |

**Che cosa resiste (poco, e con probabilità bassa) [stima].** Resistono solo le idee che soddisfano **tutte** le condizioni seguenti:
- il dato fresco raccolto con lo scraping è il prodotto stesso e non è open data;
- non c'è un'alternativa gratuita ufficiale o nativa;
- il pubblico è una nicchia ad alta intenzione che paga un paywall rigido a ≥ 30-50 $ l'anno;
- la nicchia è trovabile con la ricerca negli store o il long tail SEO.

Esempi da verificare, senza alcuna evidenza raccolta qui: avvisi di disponibilità o riassortimento per collezionisti (carte collezionabili, LEGO in uscita di produzione), monitor di posti o disponibilità per attività stagionali.

Anche queste avrebbero due limiti:
- un **tetto di ricavo** da nicchia, molto probabilmente sotto i 50 k€ di margine;
- uno scontro con le **linee guida 4.2.2 e 4.3** e con i termini d'uso delle fonti.

Per questo le considero più adatte a un modello web o SEO (vedi altre ipotesi) che a un abbonamento mobile.

## 5. Fonti (accesso 2026-11-20)
- RevenueCat, State of Subscription Apps 2026 — https://www.revenuecat.com/state-of-subscription-apps-2026/ (letta direttamente; contenuto troncato, PDF completo non letto)
- RevenueCat, Utilities 2026 — https://www.revenuecat.com/state-of-subscription-apps-2026-utilities/
- RevenueCat blog, benchmark 2026 — https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026.md
- PPC Land, "The app middle class is dying…" (6 marzo 2026) — https://ppc.land/the-app-middle-class-is-dying-and-revenuecats-data-shows-exactly-how-fast/
- TechCrunch, AI apps retention (10 marzo 2026) — https://techcrunch.com/2026/03/10/ai-powered-apps-struggle-with-long-term-retention-new-report-shows
- TechCrunch, spesa app 2025 e AI (21 gennaio 2026) — https://techcrunch.com/2026/01/21/consumers-spent-more-on-mobile-apps-than-games-in-2025-driven-by-ai-app-adoption/
- Adapty, Meta Ads benchmarks Q3 2026 — https://adapty.io/meta-ads-benchmarks/
- Adapty, Apple Ads benchmarks 2026 — https://adapty.io/apple-ads-for-subscription-apps/
- Adapty, State of in-app subscriptions 2025 (dati sui rimborsi, solo dall'estratto di ricerca; pagina non aperta) — https://adapty.io/blog/state-of-in-app-subscriptions-2025-in-10-minutes/
- Paddle (sintesi RevenueCat 2025, "metà delle app sotto 50 $/mese"; solo dall'estratto di ricerca, non aperta) — https://paddle.com/news/industry/subscription-apps-revenue-struggle
- 9to5Mac, nuove app H1 2026 (20 luglio 2026) — https://9to5mac.com/2026/07/20/report-app-store-added-nearly-as-many-new-apps-in-h1-2026-as-in-all-of-2025
- MacRumors, App Store Transparency Report 2024 — https://www.macrumors.com/2025/05/30/app-store-2024-transparency-report/
- Apple, App Review Guidelines — https://developer.apple.com/app-store/review/guidelines/
- Apple, Small Business Program — https://developer.apple.com/app-store/small-business-program/
- TechCrunch/Appfigures, iOS 18 sherlock (16 luglio 2024) — https://techcrunch.com/2024/07/16/ios-18-could-sherlock-400m-in-app-revenue
- MacRumors, Sherlocked WWDC 2025 — https://www.macrumors.com/2025/06/11/apple-sherlocked-these-apps-at-wwdc-2025/
- TuttoAndroid, app Osservaprezzi Carburanti (20 luglio 2026) — https://www.tuttoandroid.net/news/2026/07/20/mimit-app-osservaprezzi-carburanti-download-1163375/ (la pagina MIMIT originale ha risposto 503 / vuota alle richieste automatiche)
- Libero Tecnologia, app prezzi benzina (28 settembre 2026) — https://www.libero.it/tecnologia/prezzi-benzina-app-confronti-cosa-usare-124327
- camelcamelcamel/Keepa (solo dall'estratto di ricerca, prezzo Keepa Pro non verificato) — https://ecommerce-platforms.com/articles/camelcamelcamel-vs-keepa
- Appfigures Insights, scanner apps (dicembre 2021; solo dall'estratto di ricerca) — https://appfigures.com/resources/insights/20211203/3-like-fax-but-muuuuuuch-bigger

## 6. Ricerche web usate: 12
