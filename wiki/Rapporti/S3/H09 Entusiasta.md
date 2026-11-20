---
tipo: rapporto
ipotesi: H09
ruolo: Entusiasta
data: 2026-11-20
tags: [rapporto, S3, H09]
---
# H09 Estensioni e plugin su marketplace: rapporto dell'Entusiasta

Ipotesi: [[Registro delle ipotesi#H09 Estensioni e plugin su marketplace]]. Metodo: [[Protocollo di discovery]]. Vincoli: [[Profilo e vincoli]].

## 1. Sintesi

- I marketplace pagano molto in totale e chiedono commissioni basse ai piccoli. Shopify ha versato oltre 1,3 mld $ agli sviluppatori nel 2025 [fatto]. Atlassian Marketplace ha superato 7 mld $ di vendite cumulative e l'ultimo miliardo è arrivato in 9 mesi [fatto]. Shopify e Atlassian (Forge) non trattengono nulla sul primo milione di $ di ricavi lifetime; Wix non trattiene nulla nel primo anno; monday.com non trattiene nulla fino a 200 k$ [fatto].
- I ricavi sono molto concentrati in cima: il top 1% delle app Shopify incassa circa il 72% dei ricavi stimati [fatto, dato di stima di terzi]. Esiste però una fascia di mezzo che vive. Nel 2021 circa il 17,6% degli sviluppatori Shopify stimati superava i 10 k$/mese [fatto, dato di stima di terzi]. Per l'obiettivo di 50 k€ di margine bastano circa 6-9 k$ MRR [stima].
- L'angolo migliore per questo profilo non è l'app di interfaccia, che si copia in una settimana e nel 2026 è invasa da app nuove senza recensioni. È l'app che vende **dati web mantenuti**. L'esempio più chiaro: sincronizzare stock e prezzi da siti di fornitori senza feed, con una libreria di connettori. Qui scraping e pulizia dei dati sono il prodotto e il fossato. Esiste un pagatore provato (syncX: 946 recensioni, piani da 7 a 300 $/mese) [fatto].
- Rischi onesti: i tempi di crescita sono lunghi (l'età dell'app è il miglior predittore dei ricavi). Le piattaforme hanno già cambiato le commissioni a sfavore degli sviluppatori. Molte nicchie "generiche" sono affollate. Le mie 5 idee le ordino per difendibilità dei dati, non per facilità.

## 2. Argomenti principali

### 2.1 Il denaro che passa dai marketplace è grande, in crescita e reale
- [fatto] Shopify: "more than $1.3 billion" pagati agli sviluppatori dell'ecosistema l'anno scorso (2025). Oltre 21.000 app nell'App Store. Installazioni attive cresciute di "nearly 20 percent" in un anno. Post del 28/04/2026. Fonte: shopify.com/news/billion-dollar-ecosystem.
- [stima] Media grezza: 1,3 mld $ / 21.000 app ≈ 62 k$ per app all'anno. È una media gonfiata dalla coda alta, quindi va usata solo come ordine di grandezza del "pozzo".
- [fatto] Atlassian Marketplace: "surpassed $7B in lifetime sales". L'ultimo miliardo è arrivato in nove mesi, "the fastest billion in Marketplace history". Oltre 6.000 app Cloud. Post del 26/10/2026. Su una pagina sviluppatori più vecchia, risalente all'epoca di circa 1 mld $ cumulato, Atlassian dichiarava "50 businesses built on Marketplace that have grossed over $1M" [fatto, dato datato].
- [fatto] monday.com: 850+ app, 1,6 M installazioni, circa 250.000 clienti. Il 49% degli account e l'87% degli account enterprise hanno installato almeno un'app (pagina monetization).
- [fatto] HubSpot: oltre 2.000 app. Nessuna fee per diventare partner o per il listing. Il 95% dei clienti ha installato almeno un'app e il cliente medio ne usa 9+ (pagina ecosystem-resources, materiale di marketing).

### 2.2 Le commissioni per un nuovo entrante sono quasi nulle
- [fatto] Shopify: 0% sul primo 1.000.000 $ di ricavi lordi lifetime (contano solo quelli maturati dall'1/1/2025), poi 15%. Si aggiungono il 2,9% di processing fee e una registrazione una tantum di 19 $ (shopify.dev, revenue-share).
- [fatto] Atlassian Forge: 0% finché il partner non raggiunge 1 M$ di ricavi Forge lifetime, poi 15-17%. Atlassian dichiara l'incentivo "temporary" (post del 05/05/2025).
- [fatto] Wix: 100% dei ricavi nel primo anno, poi 80/20, al netto di una fee di transazione del 2,5% (dev.wix.com).
- [fatto] monday.com: nessuna quota fino a 200.000 $ lifetime, poi 85/15. Dal luglio 2024 la fatturazione nativa è obbligatoria per le nuove app.
- [stima] Per un'app da 100-300 k$/anno la quota della piattaforma è quindi circa 3% (solo processing) su Shopify e circa 0% su Atlassian Forge. È molto meglio del 15-30% degli app store mobile.

### 2.3 Concentrazione: sì, ma esiste una "classe media" sufficiente per l'obiettivo
- [fatto, stima di terzi] RevenueHunt, istantanea di giugno 2026 su 22.546 app. Il top 1% (225 app) prende circa il 72% dei ricavi stimati. Solo circa il 36% delle app sembra incassare qualcosa. Il 51% ha zero recensioni. Il modello si basa su prezzi pubblici e recensioni, non su dati di fatturazione.
- [fatto, stima di terzi] Barn2 (19/10/2026, 1.675 app con prezzi completi, conteggi negozi da HTTP Archive). L'app mediana incassa circa 2.500-5.200 $/mese prima della quota Shopify. Il quinto più vecchio delle app è in media a circa 19.100 $/mese, il quinto più giovane a circa 190 $/mese. L'autore stima un possibile errore di fattore 2. Il campione esclude le app che non si possono misurare, quindi la mediana è probabilmente ottimistica.
- [fatto, stima di terzi] Spur-i-t (dati Store Leads, ottobre 2021, 2.265 sviluppatori, formula con conversione free→paid ipotizzata al 20-50%):

| Ricavi mensili | Sviluppatori | Quota |
|---|---|---|
| 10-50 k$ | 244 | 10,8% |
| 50-100 k$ | 56 | 2,5% |
| oltre 100 k$ | 99 | 4,4% |
| meno di 1 k$ | 1.235 | 54,5% |

  Ne risulta circa il 17,6% oltre 10 k$/mese. La formula è generosa, quindi va presa come limite superiore.
- [fatto] Le recensioni sottostimano molto la base paganti. Shopify cita Locksmith con "roughly 16,000 active subscribers", mentre la pagina dell'app mostra 305 recensioni (piani da 12 a 199 $/mese). Shopify cita anche Mechanic, che "powers 3,000 stores", contro 152 recensioni (piani da 16 $/mese). [stima] Il rapporto tra paganti e recensioni è quindi tra 20 e 50 a 1, e un'app con 50-100 recensioni può avere migliaia di paganti. I modelli basati sulle recensioni (RevenueHunt) potrebbero sottostimare la fascia di mezzo.
- [stima] Obiettivo: 50 k€ di margine con un team delegato, ipotizzando costi di team, proxy e infrastruttura pari a circa il 40-50% dei ricavi, richiede circa 90-110 k€ di ricavo, cioè circa 8-10 k$ MRR. Corrisponde a circa 250-350 paganti a 30 $/mese. Per Barn2 è la fascia appena sopra la mediana delle app misurabili; per Spur-i-t è il top 15-20%. Non è una lotteria da top 1%.

### 2.4 Dove lo scraping dà un vantaggio difficile da copiare
Le app più copiabili sono quelle di sola interfaccia (bundle, popup, badge). Barn2 definisce i Bundle "one of the most crowded" categorie [fatto]. Il vantaggio del profilo sta nelle app in cui **il valore è un flusso di dati esterni che si rompe di continuo e va mantenuto**:
- **Sync da fornitori.** syncX (dal 2014): 946 recensioni, valutazione 4,8, piani da 7 a 300 $/mese. Syncee: 561 recensioni, piani da 39,99 a 99,99 $/mese. Stockeo: 45 recensioni, da 9,99 a 39,99 $. Stockistly: 19 recensioni, da 20 a 120 $ [fatto, pagine app lette il 2026-11-20]. Quasi tutti leggono file o feed (CSV, XML, FTP). Solo EagleLytics (lanciata il 12/10/2026, 2 recensioni, da 39 a 199 $/mese) dichiara di leggere direttamente il sito del fornitore [fatto]. Il segmento "fornitore senza feed" è quindi servito poco e solo da poco.
- **Arricchimento schede da EAN o dal sito del produttore.** IceCat Product Catalog: da 19 a 49 $/mese, nessuna valutazione visibile. Newcraft IceCat: da 19 a 39 $, lanciata il 26/10/2026. ProductDataCloud: da 149 a 999 $/mese, lanciata a maggio 2026, nessuna recensione [fatto]. Il fatto che si paghino fino a 999 $/mese prova che i cataloghi grandi danno valore alla completezza dei dati.
- [stima] Il fossato è l'insieme di centinaia di connettori robusti: login B2B, anti-bot, normalizzazione SKU/EAN, gestione delle varianti, monitoraggio delle rotture. Un concorrente può clonare l'interfaccia in una settimana, ma non la libreria di connettori e la loro manutenzione. È esattamente la competenza distintiva del founder, ed è delegabile a un team di scraping-ops.

### 2.5 La distribuzione è davvero integrata
- [fatto] Barn2 indica le recensioni recenti come primo fattore di ranking e il conteggio recensioni come secondo predittore dei ricavi dopo l'età. Il canale è quindi "lavorabile" con l'esecuzione (onboarding, supporto, richiesta di recensioni), senza un pubblico proprio.
- [fatto] Il Chrome Web Store è molto meno favorevole: circa l'85% delle estensioni ha meno di 1.000 installazioni (DebugBear, 2024, citato da più fonti) e non c'è fatturazione nativa. Per questo profilo do la priorità a Shopify, WooCommerce, PrestaShop, Wix e monday/Atlassian rispetto a Chrome.

## 3. Criteri di confutazione, uno per uno

**a) "La distribuzione dei ricavi è estremamente concentrata"**: **in parte vero**.
- La concentrazione in cima è estrema: il top 1% prende circa il 72%, e su Chrome l'85% delle estensioni resta sotto 1.000 installazioni.
- Il criterio però non dice nulla sulla soglia che serve qui. Gli stessi dati indicano una mediana di 2,5-5,2 k$/mese tra le app misurabili (Barn2) e circa 1 sviluppatore su 6 oltre 10 k$/mese (Spur-i-t, stima generosa).
- Il nostro obiettivo (circa 8-10 k$ MRR) sta nel quintile alto, non nel top 1%. Il rapporto paganti/recensioni (Locksmith, Mechanic) suggerisce che i modelli basati sulle recensioni sottostimano la fascia di mezzo.
- Concedo che i dati di distribuzione sono tutti stime di terzi e che il fattore età (190 $/mese per le app giovani) implica 12-24 mesi prima di arrivare alla soglia.

**b) "Le policy delle piattaforme rendono il business fragile"**: **rischio reale ma gestibile**.
- Cambi recenti, tutti documentati [fatto]:
  - Shopify ha eliminato il reset annuale dell'esenzione da 1 M$ (changelog del 24/04/2025, in vigore dal 16/06/2025).
  - Atlassian ha portato le app Connect dal 15% fino al 25%.
  - L'incentivo Forge allo 0% è dichiarato "temporary".
- Tutti questi cambi colpiscono chi è già sopra 1 M$ o chi resta su tecnologie vecchie. Per un nuovo entrante sotto 1 M$ le condizioni del 2025-2026 sono le **più generose di sempre** (0% su Shopify e Forge, 100% il primo anno su Wix).
- Atlassian si impegna ad almeno 6 mesi di preavviso sui cambi di tariffa [fatto].
- Mitigazione strutturale [stima]: un unico motore dati (connettori) esposto su 3-4 marketplace (Shopify, WooCommerce, PrestaShop, Wix). Il rischio di piattaforma si diversifica, e il valore (la libreria di connettori) non appartiene alla piattaforma.

**c) "Le nicchie con domanda sono già occupate"**: **vero per le nicchie generiche, falso per quelle a dati mantenuti**.
- Il monitoraggio prezzi dei concorrenti su Shopify ne è l'esempio. Ho contato almeno 12 app, gran parte lanciate nel 2026 e senza recensioni, e la più vecchia (PriceMole, dal 2017) ha solo 34 recensioni [fatto]. È affollata **e** con domanda debole: la scarto.
- Nel sync da fornitori la domanda è provata (syncX 946 recensioni, Syncee 561). Gli incumbent servono però i file e i feed, non i portali senza feed; l'unico che fa scraping diretto ha 2 recensioni e un mese di vita [fatto].
- L'ondata di app nuove del 2026 (Everstock, FlowStock, Stockfeed, Newcraft: tutte lanciate ad agosto-ottobre 2026) segnala però che i cloni di interfaccia arriveranno anche qui [fatto]. La difesa deve essere la copertura dei connettori, non il codice.

## 4. Idee concrete (ordinate per forza)

### I-1 "Supplier Sync senza feed": connettori pronti ai portali B2B dei grossisti europei (Shopify, poi WooCommerce e PrestaShop)
- **Chi paga:** negozi online e dropshipper che comprano da grossisti con un solo portale web B2B (niente CSV o API). Aggiornano a mano stock, prezzi e nuovi codici.
- **Prodotto:** il negozio sceglie il fornitore da una libreria (o chiede un nuovo connettore). L'app, con le credenziali del negozio, legge il catalogo e sincronizza stock, prezzi con ricarico e nuovi prodotti.
- **Prezzi di riferimento** [fatto, pagine del 2026-11-20]:
  - syncX: 7-300 $/mese, 946 recensioni.
  - Stockistly: 20-120 $, 19 recensioni.
  - Stockeo: 9,99-39,99 $, 45 recensioni.
  - EagleLytics, l'unico concorrente diretto che fa scraping: 39-199 $, 2 recensioni.
  - Prezzo proposto [stima]: 29 / 79 / 199 $ al mese per numero di fornitori e frequenza.
- **Vantaggio difficile da copiare:** la libreria di connettori mantenuti (login, anti-bot, mappatura EAN/SKU, monitoraggio delle rotture). Ogni connettore aggiunto attira tutti i clienti di quel grossista.
- **Primi 100 clienti** [stima]:
  - ricerca nell'App Store ("supplier sync", "inventory sync", "dropshipping [nome grossista]");
  - pagine del listing localizzate in IT, ES, DE, FR;
  - una pagina SEO per fornitore ("sincronizza [Grossista X] con Shopify"): long-tail con intento d'acquisto;
  - connettori su richiesta per i primi 20 clienti (white glove) in cambio di recensioni;
  - partnership con grossisti che non hanno un feed: l'app diventa il loro feed.
- **Rischi:**
  - termini d'uso dei portali (attenuato dal fatto che l'accesso avviene con le credenziali del cliente; da valutare caso per caso);
  - costo di manutenzione dei connettori;
  - tempo: 12-24 mesi alla soglia.
- **Non tocca ambiti esclusi** (e-commerce, non dati su aziende per lead o finanza).

### I-2 "Schede prodotto complete da EAN": arricchimento da siti produttore e fonti aperte per retailer IT/EU
- **Chi paga:** negozi con cataloghi ampi (ferramenta, ricambi, elettronica, giardinaggio, articoli tecnici) che hanno EAN e prezzo ma schede vuote.
- **Prezzi di riferimento** [fatto]:
  - IceCat Product Catalog: 19-49 $/mese.
  - Newcraft IceCat: 19-39 $ (lanciata il 26/10/2026).
  - ProductDataCloud: 149-999 $/mese (0 recensioni, lanciata a maggio 2026).
  - Icecat copre bene l'elettronica [stima]; la differenziazione sta nelle categorie dove Icecat è scarso, come ferramenta e ricambi [stima, da validare].
- **Vantaggio:** scraping e pulizia delle specifiche da centinaia di siti di produttori, normalizzazione degli attributi, traduzione con AI. Il dataset si accumula a ogni cliente.
- **Primi 100 clienti** [stima]: ricerca nell'App Store ("product data", "EAN import", "bulk product description"), demo gratuita su 50 SKU, pagine per categoria merceologica.
- **Rischi:** diritti su immagini e testi dei produttori (da valutare: molti produttori vogliono che i rivenditori usino i loro contenuti, ma non tutti) e concorrenza dei generatori AI di descrizioni. Il dato tecnico reale resiste meglio di una descrizione generata (C6).

### I-3 Port di I-1 e I-2 su marketplace meno affollati (Wix, PrestaShop Addons, WooCommerce)
- **Perché:**
  - Wix offre il 100% il primo anno, poi 80/20 [fatto].
  - PrestaShop e WooCommerce pesano molto in Italia e nell'Europa meridionale [stima: non ho un dato di quota verificato in questa sessione].
  - Il motore dati è lo stesso, cambia solo l'adattatore: il costo marginale è basso e la piattaforma si diversifica (criterio b).
- **Prezzi di riferimento** [fatto]: esiste già un "Supplier Feed Sync" sul Wix App Market (listing trovato in ricerca, prezzo non verificato).
- **Primi 100 clienti** [stima]: nei marketplace piccoli il ranking per parola chiave si conquista con poche recensioni.

### I-4 (più debole) Posizione di prezzo sui comparatori EU (Trovaprezzi, idealo, Google Shopping) per merchant Shopify/Woo
- **Pro:** il dato si ottiene con lo scraping, e il comparatore è un luogo preciso dove il merchant compete.
- **Contro, onestamente:**
  - il monitoraggio prezzi su Shopify ha una domanda debole (PriceMole: 34 recensioni in 9 anni) e almeno 10 cloni del 2026 [fatto];
  - Trovaprezzi conta circa 3.000 negozi [fatto], quindi il mercato italiano da solo è piccolo;
  - Omnia Retail (enterprise) è entrata nello Shopify App Store a luglio 2026 [fatto].
- La tengo solo come estensione premium di I-1 (prezzo del fornitore più prezzo sul comparatore uguale margine reale), non come prodotto a sé.

### I-5 (più debole, scartabile) Estensione Chrome per reseller Vinted/Subito/eBay Italia
- **Prezzi di riferimento** [fatto]:
  - Vendoo: circa 70.000 utenti, 72 valutazioni con media 3,5.
  - Listelf: 9,99 $/mese.
  - List Perfectly: 29 $/mese, da fonti di concorrenti.
- **Contro:** il mercato è affollato, la fragilità verso le policy di Vinted ed eBay (automazione) è alta e il Chrome Web Store non ha fatturazione. La segnalo solo per completezza: per questo profilo è dominata da I-1 e I-2.

**Stima economica per I-1** [stima]:
- 300 paganti × 35 $ medi ≈ 10,5 k$ MRR ≈ 126 k$/anno.
- Commissioni Shopify circa 3%, team di supporto e connettori più proxy circa 50 k$.
- Margine di circa 60-70 k$/anno, raggiungibile in 18-24 mesi se il fattore età di Barn2 vale anche qui.
- Founder ≤ 5 h/settimana: plausibile dopo l'avvio, perché il lavoro ricorrente (manutenzione dei connettori e supporto) è delegabile e misurabile (numero di connettori rotti e ticket aperti).

## 5. Fonti (accesso 2026-11-20)
- https://www.shopify.com/news/billion-dollar-ecosystem (1,3 mld $ pagati, 21.000+ app, Locksmith e Mechanic)
- https://www.shopify.com/news/a-world-with-more-builders (ecosistema 2025, Gorgias)
- https://shopify.dev/docs/apps/launch/distribution/revenue-share (0%/15%, soglie, 2,9%)
- https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share (fine del reset annuale, 24/04/2025)
- https://www.atlassian.com/blog/teamwork/atlassian-marketplace-7-billion (7 mld $, 26/10/2026)
- https://www.atlassian.com/blog/developer/updates-to-marketplace-revenue-share-2026 (tariffe Forge e Connect, 05/05/2025)
- https://www.atlassian.com/hu/developers (50 aziende oltre 1 M$, dato datato)
- https://monday.com/appdeveloper/monetization (850+ app, 85/15 oltre 200 k$)
- https://dev.wix.com/docs/build-apps/launch-your-app/pricing-and-billing/about-monetizing-your-app (100% il primo anno, poi 80/20)
- https://www.hubspot.com/app/ecosystem-resources (2.000+ app, nessuna fee)
- https://revenuehunt.com/state-of-the-shopify-app-economy/ (top 1% circa 72%, 51% delle app con zero recensioni)
- https://barn2.com/blog/shopify-app-store-saturation/ (mediana 2,5-5,2 k$/mese, effetto età, saturazione)
- https://spur-i-t.com/blog/shopify-app-store-analysis-2021/ (distribuzione per fasce 2021)
- https://debugbear.com/blog/chrome-extension-statistics e https://www.techspot.com/news/81286-most-google-chrome-extensions-have-fewer-than-1000.html (Chrome: circa 85-87% sotto 1.000 installazioni; letti via estratto di ricerca, non aperti direttamente)
- Pagine app Shopify lette direttamente (curl, dati JSON-LD e piani): https://apps.shopify.com/stock-sync, /syncee-1, /stockeo, /stockistly, /eaglelytics, /everstock, /flowstock-1, /stockfeed, /new-craft-feed-sync, /appsbyb-inventory-price-sync, /inventory-sync-convert, /pricemole, /snoopie, /lurk, /competetracker, /competitor-price-monitor, /competitor-price-tracker-1, /competitor-price-tracker-pro, /pricekit, /price-patrol, /pricesentry-1, /priceping, /pricewatchlabs, /pricemonitor-by-omnia-retail, /icecat-product-catalog, /newcraft-icecat-1, /productdatacloud, /locksmith, /mechanic
- https://storeleads.app/reports/shopify/app/stock-sync (solo 358 negozi rilevati: Store Leads vede solo le app visibili nel front-end, quindi è inaffidabile per le app di back-office)
- https://www.trovaprezzi.it/domande-frequenti (circa 3.000 negozi; letta via estratto di ricerca)
- https://chromewebstore.google.com/detail/vendoo-extension-v3/mnampbajndaipakjhcbbaihllmghlcdf (circa 70.000 utenti, valutazione 3,5)
- Prezzi di List Perfectly, Crosslist e Listelf: da estratti di ricerca su blog di concorrenti (crosslist.com, blog.vendoo.co), non verificati direttamente.

## 6. Ricerche web usate: 19
