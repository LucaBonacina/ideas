---
tipo: rapporto
ipotesi: H09
ruolo: Bucatore di palloncini
data: 2026-11-20
tags: [rapporto, S3, H09, bucatore]
---
# H09 — Estensioni e plugin su marketplace — Rapporto del Bucatore

## 1. Sintesi
- **Ricavi molto concentrati su tutti gli store misurabili.**
  - Shopify: secondo una stima indipendente di ottobre 2026 su 1.675 app con prezzo pubblico, le **16 app più grandi incassano il 40,6%** dei ricavi e **metà delle app si divide lo 0,6%**.
  - Chrome Web Store: l'**85%** delle estensioni ha meno di 1.000 installazioni (DebugBear, 2024).
  - WordPress.org: dalla mia estrazione dall'API ufficiale (57.582 plugin), l'**88%** ha meno di 1.000 installazioni attive e i **primi 100 plugin hanno il 57,9%** delle installazioni.
- **Chi entra adesso parte dal fondo.** Su Shopify il quinto di app più giovane ha un ricavo mediano di circa **190 $/mese**, contro circa 19.100 $/mese per il quinto più vecchio. Età e numero di recensioni sono i fattori che predicono meglio il ricavo.
- **Le regole cambiano spesso e sempre nella stessa direzione: a sfavore dello sviluppatore.**
  - Chrome ha chiuso i pagamenti nel Web Store (2020-21), ha imposto Manifest V3 (le estensioni MV2 sono disabilitate da luglio 2025 e rimosse dallo store dal 31/8/2026) e ha stretto le regole sui link di affiliazione (enforcement dal 10/6/2025).
  - Shopify nel 2025 ha trasformato l'esenzione sul primo milione da annuale a **una tantum sull'intera vita** dello sviluppatore.
  - Atlassian chiude il Data Center (fine vita 28/3/2029) e alza la commissione per le app Connect **dal 15% al 25%** (ottobre 2026).
  - Figma "non approva nuovi creator" per i file a pagamento.
- **Le nicchie ovvie per un profilo da scraper sono già occupate.**
  - Monitoraggio prezzi dei concorrenti su Shopify: circa 40 listing nelle prime due pagine di ricerca. Il più recensito (Prisync) ha 243 recensioni.
  - Dropshipping/import: 612 app nella categoria. Il leader DSers ha 6.442 recensioni.
  - Estensioni di scraping: Instant Data Scraper è **gratis** con 1.000.000 di utenti.
  - Coupon: Honey ha ancora 13.000.000 di utenti, nonostante lo scandalo.
- **Verdetto del Bucatore:** sono soddisfatti tutti e tre i criteri di confutazione, il terzo almeno per le idee ovvie. Come strada generica l'ipotesi è **confutata**. Sopravvive solo in forma ristretta: un'estensione o app usata come *canale* di un prodotto dati verticale, non come prodotto in sé (vedi §4).

## 2. Argomenti principali

### A. Concentrazione dei ricavi: Shopify App Store
- [fatto] Barn2 (Katie Keith, ottobre 2026) ha usato cinque fonti: listing dello store raccolti il 7/9/2026 (4.438 app), crawl HTTP Archive, Store Leads (12 mesi fino ad agosto 2026), annunci di app in vendita e i propri webhook di fatturazione.
  - "the 16 largest apps take 40.6% of all the revenue in those 1,675 apps"; le prime 83 app arrivano al 72,2%.
  - "half of those apps share 0.6% between them, which is less than the single largest app takes on its own".
  - Fonte: https://barn2.com/blog/shopify-app-store-saturation/
- [fatto] Ricavo per età dell'app (stesso studio): il quinto più vecchio ha una mediana di circa **19.100 $/mese**, il più giovane circa **190 $/mese** (intervalli 13.200-27.700 $ e 130-280 $).
  - Età e numero di recensioni sono i migliori predittori del ricavo. Il voto in stelle non è correlato al ricavo.
  - Ogni stima può essere sbagliata "by a factor of two in either direction".
- [fatto] Barn2 riporta anche, a favore dell'ipotesi: "The middle app of the 1,675 earns somewhere between $2,500 and $5,200 a month, before Shopify's cut".
  - [stima] Questa mediana riguarda solo le app con prezzo pubblico e dati Store Leads (1.675 su 4.438), quindi esclude molte app ferme a zero: è ottimista.
  - [stima] Il dato convive a fatica con "metà delle app si divide lo 0,6%". Se le 16 app maggiori superano 1 M$/mese ciascuna e valgono il 40,6%, il totale è almeno circa 39 M$/mese. Lo 0,6% di quel totale, diviso tra circa 837 app, fa una media della metà inferiore di qualche centinaio di dollari al mese. Il Giudice dovrebbe considerare la mediana di 2.500-5.200 $ come limite alto.
- [fatto] Saturazione, sempre da Barn2:
  - le app per mille negozi Shopify passano da 5,5 (luglio 2023) a 8,8 (2026); il numero di app cresce di oltre il 28% l'anno, i negozi del 10-14%;
  - l'app tipica perde circa 4 negozi per ogni 10 che acquisisce in un anno;
  - categoria Discounts: circa 1.100 app; categoria Product Bundles: 472;
  - l'app dell'autrice aveva 10 recensioni contro concorrenti con 3.526, 4.434 e 411;
  - "It still took about six months and 1,000 free users to collect enough reviews to qualify for the Built for Shopify badge".
- [fatto] Avvertenza sulla fonte: l'autrice vende plugin WordPress/WooCommerce e un'app Shopify, quindi non è neutrale. La metodologia però è esplicita e i numeri vanno *contro* il suo interesse a promuovere l'ecosistema.
- [fatto] Studio Spur-i-t (novembre 2021; dati Storeleads fino all'1/10/2021; 2.265 sviluppatori, 7.378 app; solo addebiti ricorrenti, stimati con una formula propria):
  - il **54,53%** degli sviluppatori sta sotto 1.000 $/mese;
  - il 27,86% tra 1.000 e 10.000 $;
  - solo il 6,84% sopra 50.000 $/mese.
  - Fonte: https://spur-i-t.com/blog/shopify-app-store-analysis-2021/ (autore: sviluppatore di app Shopify; stime, non dati Shopify).
- [stima] **Soglia di successo.** 50 k€/anno di margine con team delegato richiedono, per mia stima, circa 8-15 k$ di ricavo mensile ricorrente. Il calcolo: 50 k€ ≈ 4,5 k$/mese di margine, più il costo di sviluppo e supporto delegato (≥ 3-6 k$/mese), più fee e infrastruttura. Nel 2021 sopra 10 k$/mese c'era il **17,6%** degli sviluppatori, e dopo diversi anni di attività. Per un'app nuova la mediana è nell'ordine di centinaia di dollari al mese.

### B. Concentrazione: Chrome Web Store
- [fatto] DebugBear (19/7/2024, aggiornato 29/8/2024):
  - 111.933 estensioni, di cui "About 95,000 extensions" (**85%**) sotto 1.000 installazioni;
  - solo 242 (0,2%) sopra 1 milione;
  - il numero di estensioni è sceso da 137.345 (2020) a 111.933 (-18,5%).
  - Fonte: https://www.debugbear.com/blog/chrome-extension-statistics
- [fatto] Analisi DebugBear precedente (2020): "70% of Chrome extensions have fewer than 100 users"; mediana di **17 installazioni**. Fonte: https://www.debugbear.com/blog/counting-chrome-extensions
- [fatto] Rapporto installazioni/recensioni: circa 140, cioè 1.000 installazioni producono circa 7 recensioni. La prova sociale si accumula lentamente. Fonte: stessa pagina DebugBear 2020.
- [fatto] Monetizzazione: secondo il fondatore di ExtensionPay (fonte autodichiarata), i ricavi della piattaforma sono "still very low with a lot of it coming from only a handful of extensions". Fonte: https://www.indiehackers.com/product/extensionpay (estratto del motore di ricerca, pagina non aperta; valore indiziario).

### C. Concentrazione: WordPress.org (verifica diretta)
- [fatto, mia elaborazione] Ho interrogato l'API pubblica `api.wordpress.org/plugins/info/1.2/?action=query_plugins&browse=popular` il 2026-11-20. L'API dichiara 75.676 risultati; scaricando 303 pagine da 250 ho ottenuto 57.582 plugin unici. La differenza è dovuta probabilmente alla paginazione; i plugin mancanti sono verosimilmente quelli in coda, con meno installazioni, quindi i dati sotto sono *prudenti*.
  - meno di 10 installazioni attive: 29,7%;
  - meno di 100: 71,2%;
  - **meno di 1.000: 88,0%**;
  - meno di 10.000: 96,3%;
  - mediana: 10 installazioni;
  - i primi 10 plugin hanno il **22,4%** delle installazioni, i primi 100 il **57,9%**, i primi 1.000 l'**89,6%**.
  - Il dato è riproducibile con la stessa chiamata.
- [fatto] Da un'analisi indipendente (Jean Galea, 22/7/2026): i plugin con più di 10.000 installazioni sono 2.226 e totalizzano 311 milioni di installazioni. Fonte: https://jeangalea.com/wordpress-plugin-install-counts/

### D. Concentrazione: Atlassian Marketplace
- [fatto] Articolo della community Atlassian (circa 2022) sul consolidamento:
  - "the top 10 vendors controlled 36% of all instances at the beginning of 2021, this figure is up to 46% today";
  - "Appfire and Tempo together control 23% of all paid Marketplace installs";
  - Appfire ha acquisito 8 vendor nel 2021.
  - Fonte: https://community.atlassian.com/forums/App-Central-articles/Consolidation-in-the-Atlassian-Marketplace/ba-p/1964558
  - Si tratta di quota di istanze, non di ricavi. Un dato pubblico sulla concentrazione dei payout non è stato trovato.

### E. Fragilità da policy: Chrome
- [fatto] Pagamenti del Chrome Web Store:
  - sospesi per i nuovi item a marzo 2020;
  - API deprecata il 21/9/2020;
  - trial chiusi l'1/12/2020;
  - pagamenti chiusi a febbraio 2021 (9to5Google indica il 21/2/2021);
  - licensing API spenta più avanti nel 2021.
  - Fonte: https://9to5google.com/2020/09/22/google-chrome-paid-extensions-deprecation/ (la pagina ufficiale developer.chrome.com/webstore/cws-payments-deprecation restituisce oggi 404).
  - Ogni sviluppatore deve quindi gestire da sé checkout, licenze, IVA e frodi.
- [fatto] Manifest V3, timeline ufficiale:
  - gennaio 2022: niente nuove estensioni MV2 pubbliche;
  - 24/7/2025: "With Chrome 138 all users on all channels of Chrome have now Manifest V2 extensions disabled";
  - 31/8/2026: "All remaining Manifest V2 extensions have been removed from the Chrome Web Store".
  - Fonte: https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline
- [fatto] Link di affiliazione (policy del 11/3/2025, enforcement dal 10/6/2025):
  - "Extensions must not insert affiliate links when no coupon or discount is found";
  - serve un'azione dell'utente prima di ogni link;
  - in caso di violazione l'estensione può essere rimossa.
  - Fonte: https://developer.chrome.com/blog/cws-policy-update-affiliate-ads-2025
  - Il modello coupon/cashback "silenzioso" è stato reso illegittimo per decreto della piattaforma.
- [fatto] Rimozioni opache: l'8/9/2026 uno sviluppatore con account di 15 anni riporta la rimozione delle estensioni e la sospensione dell'intero account per "malicious behavior", su codice non aggiornato da oltre un anno. L'appello non aveva "visible ticket number or status indicator". Fonte: https://groups.google.com/a/chromium.org/g/chromium-extensions/c/MUe0EkfKCnY
  - [stima] È un caso singolo, ma rappresentativo di un pattern visibile in decine di thread dello stesso gruppo: rimozioni con motivazioni generiche ("Spam policy") e appelli senza risposta.
- [fatto] Concorrenza della piattaforma stessa: dal 28/1/2026 Chrome ha "auto browse" (Gemini), in preview USA per gli abbonati AI Pro/Ultra. Gli esempi ufficiali includono confrontare i prezzi di hotel e voli su più date e raccogliere preventivi. Fonte: https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/
  - [stima] Erode il valore delle estensioni di estrazione dati e confronto prezzi per l'utente finale.

### F. Fragilità da policy: Shopify, Atlassian, Figma
- [fatto] Shopify, changelog del 24/4/2025 (in vigore dal 16/6/2025):
  - prima: "an exemption on the first $1M earned each year";
  - ora: "a revshare exemption on the first $1 million USD of lifetime revenue", poi 15%.
  - Fonti: https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share e https://shopify.dev/docs/apps/launch/distribution/revenue-share
  - Restano a carico dello sviluppatore il 2,9% di processing e i requisiti di registrazione.
  - [stima] Per un piccolo sviluppatore la fee resta bassa, ma la modifica mostra che Shopify cambia unilateralmente le regole quando gli conviene.
- [fatto] Shopify che costruisce funzioni native:
  - Modern Retail (25/8/2023): Shopify Collective (gratuito) compete con Carro e Convictional, Shopify Collabs con Grin;
  - Shopify sostiene di non avere preso di mira volutamente i merchant dei concorrenti.
  - Fonte: https://www.modernretail.co/technology/shopifys-new-tools-are-encroaching-upon-the-business-of-existing-vendors/
  - Altre segnalazioni del 2026 (checkout B2B nativo, merchandising nel pannello di amministrazione) vengono da blog di vendor e **non le ho verificate**.
- [fatto] Atlassian Data Center:
  - niente nuove app DC dal 16/12/2025;
  - niente vendite a nuovi clienti dal 30/3/2026;
  - fine vita il 28/3/2029, con licenze in sola lettura.
  - Fonte: https://www.atlassian.com/blog/developer/from-data-center-to-cloud-the-next-chapter-for-marketplace-apps (8/9/2025)
- [fatto] Atlassian, commissioni (post del 3/11/2025):
  - Forge: dal 15% al 16% l'1/4/2026, al 17% l'1/10/2026;
  - Connect: **dal 15% al 20% l'1/4/2026, al 25% l'1/10/2026**;
  - 0% su Forge fino a 1 M$ di ricavi lifetime.
  - Fonte: https://www.atlassian.com/blog/developer/extended-timelines-for-marketplace-revenue-share-changes
- [fatto] Figma: "We are not approving new creators to sell paid files on Community at this time". Su ogni vendita c'è una "flat 15% fee". Possono vendere solo account individuali approvati. Fonte: https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources

### G. Rischio reputazionale e di sicurezza (estensioni compromesse o "girate")
- [fatto] Cyberhaven, 24-26/12/2024: un phishing sulle credenziali del Chrome Web Store ha portato alla pubblicazione di un aggiornamento malevolo che esfiltrava sessioni e cookie. Il listing indicava circa 400.000 utenti aziendali. Secondo Nudge Security la campagna era "opportunistically targeting extension developers". Fonte: https://techcrunch.com/2024/12/27/cyberhaven-says-it-was-hacked-to-publish-a-malicious-update-to-its-chrome-extension
- [fatto] ShadyPanda (Koi Security, dicembre 2025): 4,3 milioni di utenti Chrome/Edge. Tre estensioni caricate nel 2018-2019, con badge Featured e Verified, hanno ricevuto un aggiornamento malevolo a metà 2024. Fonte: https://www.theregister.com/2025/12/01/chrome_edge_malicious_browser_extensions/
- [stima] Conseguenze per il profilo:
  - un'estensione di scraping chiede per natura permessi ampi ("read all sites"), è un bersaglio e attira sospetto da parte di revisori, aziende clienti e strumenti di sicurezza;
  - l'"exit" naturale di un'estensione con molti utenti gratuiti è la vendita, il canale con cui molte estensioni diventano adware;
  - le aziende clienti adottano sempre più spesso allowlist di estensioni.

### H. Nicchie occupate: le categorie ovvie per uno scraper (verifica diretta)
- [fatto] Shopify, ricerca "competitor price" (apps.shopify.com/search, consultata il 20/11/2026):
  - nelle prime due pagine ci sono circa 40 listing dedicati a monitoraggio prezzi e repricing (Prisync, Pricefy, Intelis, PriceMole, Price Parrot, PriceSpidey, PriceOtus, Snoopie, Price Mirror, Lurk, PricePirate, Omnia, PricePulse, Waslio, MarginWatch…);
  - recensioni: Prisync 243, Pricefy 71, Intelis 70, PriceMole 34, Snoopie 32, molti tra 1 e 18;
  - la maggior parte ha un piano gratuito o una prova.
  - [stima] È il segnale peggiore: tanti concorrenti e nessuno grande. Indica **domanda scarsa** (i merchant Shopify piccoli non pagano molto per il monitoraggio prezzi) più che una nicchia libera.
- [fatto] Shopify, categoria Dropshipping: **612 app**. Le prime per visibilità: DSers con 6.442 recensioni, Printful con 4.047, Reputon Amazon Importer con 716, EPROLO con 577. Fonte: https://apps.shopify.com/categories/finding-products-sourcing-options-dropshipping/all
- [fatto] Shopify, categoria Analytics: **1.798 app**. Fonte: https://apps.shopify.com/categories/store-management-analytics
- [fatto] Chrome Web Store (consultato il 20/11/2026):
  - Instant Data Scraper: **1.000.000 utenti**, gratuito;
  - Web Scraper (webscraper.io): **900.000 utenti**;
  - Honey: **13.000.000 utenti**;
  - Fonti: le pagine chromewebstore.google.com/detail/... nell'elenco fonti.

## 3. Criteri di confutazione, uno per uno

**Criterio 1. "La distribuzione dei ricavi è estremamente concentrata": SODDISFATTO.**
- Su Shopify le prime 16 app incassano il 40,6% e metà delle app si divide lo 0,6% (Barn2, 2026). Nel 2021 il 54,5% degli sviluppatori stava sotto 1 k$/mese (Spur-i-t).
- Su Chrome l'85% delle estensioni ha meno di 1.000 installazioni.
- Su WordPress.org l'88% dei plugin ha meno di 1.000 installazioni e i primi 100 hanno il 57,9% delle installazioni (mia estrazione).
- Su Atlassian i primi 10 vendor avevano il 46% delle istanze, in crescita.
- Soprattutto, i ricavi crescono con età e recensioni: un nuovo entrante parte da mediane di circa 190 $/mese. Distribuzione a legge di potenza, con vantaggio cumulativo agli incumbent.

**Criterio 2. "Le policy delle piattaforme rendono il business fragile": SODDISFATTO (forte per Chrome, medio per Shopify e Atlassian, forte per Figma lato vendita).**
- Chrome:
  - ha eliminato i pagamenti;
  - ha imposto MV3, con estensioni MV2 rimosse dallo store il 31/8/2026;
  - ha vietato l'affiliazione senza beneficio diretto;
  - sospende account senza un appello efficace;
  - fa concorrenza diretta con l'agente integrato.
- Shopify ha peggiorato unilateralmente la revenue share e assorbe funzioni nella piattaforma.
- Atlassian forza la migrazione al cloud e porta Connect al 25%.
- Attenuante onesta: oggi le fee per chi è piccolo sono basse (0% fino a 1 M$ lifetime su Shopify e su Forge). La fragilità riguarda il **cambiamento unilaterale**, non il livello attuale.

**Criterio 3. "Le nicchie con domanda sono già occupate": SODDISFATTO per le idee ovvie, NON DIMOSTRATO per tutte le nicchie.**
- Monitoraggio prezzi, import/dropshipping, scraping generico e coupon hanno leader con migliaia di recensioni o milioni di utenti gratuiti, oppure decine di concorrenti piccoli, segno di domanda scarsa.
- Non posso dimostrare che *ogni* nicchia verticale sia occupata: è un'affermazione universale. Il Giudice dovrebbe chiedere all'Entusiasta nicchie specifiche con domanda misurata e verificarle una per una.

**Vincoli del profilo (non sono criteri, ma pesano):**
- [stima] Il supporto è il costo nascosto. Recensioni e badge Built for Shopify si ottengono con risposte rapide e onboarding curato (Barn2: 6 mesi e 1.000 utenti gratuiti per il badge).
- Con il founder a 5 h/settimana serve un team di supporto pagato prima che arrivino i ricavi.
- Le app di scraping si rompono quando cambiano i siti target, quindi la manutenzione è continua e non delegabile a basso costo.

## 4. Idee concrete: attacco alle idee ovvie

| Idea ovvia | Cosa la uccide | Esito |
|---|---|---|
| **Estensione di scraping/estrazione dati generica** | Instant Data Scraper gratis con 1 M utenti; Web Scraper con 900 k utenti e cloud a pagamento; auto browse di Gemini in Chrome dal 2026; nessun pagamento nativo nello store; permessi ampi = sospetto e rischio di rimozione | **Morta** |
| **App Shopify di monitoraggio prezzi dei concorrenti** | Circa 40 listing nelle prime due pagine di ricerca, quasi tutti con piano gratuito; il leader ha solo 243 recensioni, quindi domanda debole tra i merchant Shopify; Prisync, Omnia e Boostmyshop servono la fascia alta fuori dallo store | **Morta** come prodotto da store (il segmento enterprise è materia di H03) |
| **Estensione coupon/confronto prezzi/cashback** | Honey con 13 M utenti; policy Chrome sull'affiliazione dal 10/6/2025 che vieta l'inserimento di link senza sconto; ricavo per utente basso; richiede volume B2C e brand | **Morta** |
| **App di import prodotti/dropshipping** | 612 app in categoria; DSers ha 6.442 recensioni e un piano gratuito; i fornitori (AliExpress, CJ, ecc.) offrono integrazioni proprie; Shopify Collective gratuito nel cross-selling; churn alto dei merchant dropshipping | **Morta** |
| **Price tracker per Amazon** | Keepa e camelcamelcamel consolidati (vedi anche H08) | **Morta** |
| **App Shopify "Omnibus" (storico prezzi 30 giorni, direttiva UE)** | Esistono già Omnibus Insight (17 recensioni) e Omnibus Price Tracker; domanda limitata ai negozi UE; è una funzione che Shopify potrebbe aggiungere in modo nativo | **Debole**: nicchia piccola, tetto basso |

**Cosa resiste (poco), in forma ristretta** [stima]:
1. **Estensione come canale di distribuzione di un prodotto dati verticale proprietario, non come prodotto.**
   - Esempio: overlay con storico prezzi e disponibilità su marketplace dell'usato o del collezionismo italiani/UE, dove Keepa non arriva. Il valore sta nel database storico accumulato con lo scraping lato server, che è difendibile; l'estensione è solo l'interfaccia e il pagamento avviene fuori dallo store (es. abbonamento web).
   - Rischi:
     - termini d'uso dei siti target e diritto *sui generis* sulle banche dati;
     - dipendenza da Chrome;
     - domanda non misurata.
   - Da verificare con dati di ricerca, non da presumere.
2. **App per marketplace B2B con ticket alto e utenti professionali** (Atlassian Forge, 0% fino a 1 M$), dove contano integrazione e affidabilità più delle recensioni.
   - Non ho trovato una nicchia specifica legata allo scraping che non tocchi gli ambiti esclusi (dati su aziende come lead).
   - Le aspettative di sicurezza e conformità dei clienti enterprise aumentano il costo fisso.

Nessuna delle due mostra evidenza di raggiungere 50 k€ di margine in 24 mesi con il founder a 5 h/settimana. Restano ipotesi da validare, non idee promosse.

## 5. Fonti (data di accesso per tutte: 2026-11-20)
- https://barn2.com/blog/shopify-app-store-saturation/
- https://spur-i-t.com/blog/shopify-app-store-analysis-2021/
- https://www.debugbear.com/blog/chrome-extension-statistics
- https://www.debugbear.com/blog/counting-chrome-extensions
- https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[browse]=popular&request[per_page]=250&request[page]=1..303 (estrazione propria)
- https://jeangalea.com/wordpress-plugin-install-counts/
- https://community.atlassian.com/forums/App-Central-articles/Consolidation-in-the-Atlassian-Marketplace/ba-p/1964558
- https://9to5google.com/2020/09/22/google-chrome-paid-extensions-deprecation/
- https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline
- https://developer.chrome.com/blog/cws-policy-update-affiliate-ads-2025
- https://groups.google.com/a/chromium.org/g/chromium-extensions/c/MUe0EkfKCnY
- https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/
- https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share
- https://shopify.dev/docs/apps/launch/distribution/revenue-share
- https://www.modernretail.co/technology/shopifys-new-tools-are-encroaching-upon-the-business-of-existing-vendors/
- https://www.atlassian.com/blog/developer/from-data-center-to-cloud-the-next-chapter-for-marketplace-apps
- https://www.atlassian.com/blog/developer/extended-timelines-for-marketplace-revenue-share-changes
- https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources
- https://techcrunch.com/2024/12/27/cyberhaven-says-it-was-hacked-to-publish-a-malicious-update-to-its-chrome-extension
- https://www.theregister.com/2025/12/01/chrome_edge_malicious_browser_extensions/
- https://apps.shopify.com/search?q=competitor+price (pagine 1-3)
- https://apps.shopify.com/categories/finding-products-sourcing-options-dropshipping/all
- https://apps.shopify.com/categories/store-management-analytics
- https://chromewebstore.google.com/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah
- https://chromewebstore.google.com/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn
- https://chromewebstore.google.com/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj
- https://www.indiehackers.com/product/extensionpay (solo estratto del motore di ricerca, non aperta)

## 6. Ricerche web usate: 18
