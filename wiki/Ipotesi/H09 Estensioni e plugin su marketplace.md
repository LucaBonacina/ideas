---
tipo: ipotesi
id: H09
titolo: "Estensioni e plugin su marketplace"
sessione: S3
stato: parziale # confutata nella forma generica; sopravvive la forma "app che vende dati web mantenuti"
fiducia: media
probabilita_successo: "10%"
tags: [ipotesi, S3]
---
# H09 — Estensioni e plugin su marketplace

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Estensioni browser e app per marketplace (Shopify, WordPress, Chrome, Figma, Atlassian…), dove la distribuzione è integrata. (Da [[Registro delle ipotesi]].)

## Criteri di confutazione (pre-registrati)
Confutata se:
1. la distribuzione dei ricavi è estremamente concentrata;
2. le policy delle piattaforme rendono il business fragile;
3. le nicchie con domanda sono già occupate.

## Caso a favore — Entusiasta
Rapporto integrale: [[H09 Entusiasta]].
- **Molti soldi in circolo e commissioni basse per chi entra.** Shopify ha pagato oltre 1,3 mld $ agli sviluppatori nel 2025, con più di 21.000 app (shopify.com/news/billion-dollar-ecosystem, 28/04/2026). Atlassian Marketplace ha superato 7 mld $ di vendite cumulative (blog Atlassian, 26/10/2026). Le commissioni per chi entra sono basse: 0% sul primo milione di $ lifetime su Shopify e su Atlassian Forge, 100% al primo anno su Wix, 0% fino a 200 k$ su monday.com [fatto].
- **C'è una fascia di mezzo che vive.** Barn2 (ottobre 2026) stima che l'app mediana *misurabile* incassi 2,5-5,2 k$/mese. Spur-i-t (2021) stimava il 17,6% degli sviluppatori sopra 10 k$/mese. La soglia di successo richiede circa 8-10 k$ di ricavo mensile ricorrente [stima], quindi il quintile alto, non il top 1%.
- **Le recensioni sottostimano i paganti.** Shopify dichiara circa 16.000 abbonati attivi per Locksmith, che ha 305 recensioni, e 3.000 negozi per Mechanic, che ne ha 152.
- **Angolo per il profilo: app che vendono dati web mantenuti, non interfacce.** Esempio di punta: sincronizzazione di stock e prezzi da fornitori **senza feed**. syncX ha 946 recensioni e piani da 7 a 300 $/mese; Syncee ne ha 561. Quasi tutti i concorrenti leggono file o feed. Solo EagleLytics (lanciata il 12/10/2026, 2 recensioni) legge il sito del fornitore.
- **Idee proposte:** (1) sync da portali B2B senza feed; (2) schede prodotto complete da EAN per categorie poco coperte da Icecat; (3) port di 1 e 2 su Wix, PrestaShop e WooCommerce; (4) posizione sui comparatori, debole; (5) estensione per i rivenditori di Vinted, scartabile.

## Caso contro — Bucatore di palloncini
Rapporto integrale: [[H09 Bucatore]].
- **Ricavi concentrati ovunque.**
  - Shopify: le 16 app più grandi incassano il 40,6% e metà delle app si divide lo 0,6% (Barn2). Il quinto più giovane ha una mediana di circa 190 $/mese, contro circa 19.100 $ per il più vecchio. Nel 2021 il 54,5% degli sviluppatori stava sotto 1 k$/mese (Spur-i-t).
  - Chrome: l'85% delle estensioni ha meno di 1.000 installazioni (DebugBear, 2024).
  - WordPress.org: dalla sua estrazione dall'API ufficiale, l'88% dei 57.582 plugin ha meno di 1.000 installazioni e i primi 100 hanno il 57,9% delle installazioni.
  - Atlassian: i primi 10 vendor hanno il 46% delle istanze (circa 2022).
- **Le policy cambiano sempre a sfavore dello sviluppatore.**
  - Chrome ha chiuso i pagamenti nel 2021, ha disabilitato le estensioni MV2 (luglio 2025) e le ha rimosse dallo store (31/08/2026). Ha vietato i link di affiliazione senza sconto e sospende account con appelli opachi.
  - Shopify ha reso l'esenzione sul milione una tantum per tutta la vita dello sviluppatore (2025).
  - Atlassian porta le app Connect al 25% e chiude il Data Center nel 2029. Figma non accetta nuovi venditori.
  - Estensioni compromesse (Cyberhaven, ShadyPanda con 4,3 milioni di utenti) rendono sospette quelle con permessi ampi.
- **Le nicchie ovvie sono occupate.**
  - Monitoraggio prezzi su Shopify: circa 40 app, la più recensita ne ha 243. Molti concorrenti e nessuno grande indicano domanda debole.
  - Dropshipping: 612 app.
  - Scraper gratuiti con 1 milione di utenti, Honey con 13 milioni.
- **Cosa resiste:** solo l'estensione o l'app usata come *canale* di un prodotto dati proprietario.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate (pagine aperte il 2026-11-20)
| Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|
| L'app Shopify mediana incassa 2,5-5,2 k$/mese | Entusiasta (contestata dal Bucatore) | **Confermata nel testo, ma su un campione distorto.** Il campione sono le 1.675 app che pubblicano un prezzo *e* sono rilevabili da Store Leads, su 4.438. Lo studio stesso dice che "overlooks the smallest apps", ha errore fino a ×2 ed è calibrato su "a dozen or so apps". La stessa pagina riporta 190 $/mese per il quinto più giovane e "half of those apps share 0.6%". **Per un nuovo entrante il riferimento giusto è circa 190 $/mese, non la mediana.** | https://barn2.com/blog/shopify-app-store-saturation/ |
| Il segmento "fornitore senza feed" è poco servito | Entusiasta | **Confermata.** syncX: 4,8 stelle con 946 recensioni, lanciata nel 2014, piani da 7 a 300 $/mese; dichiara solo fonti "CSV/XLSX, Google Sheets, FTP feeds, Dropbox, APIs, or custom URLs". EagleLytics: lanciata il 12/10/2026, 5,0 stelle con 2 recensioni, piani da 39 a 139 $/mese. Legge però solo i dati che la vetrina pubblica del fornitore espone ("detects the platform and reads the product data the storefront already publishes"), **non i portali B2B con login**. Lo spazio dei portali con login resta scoperto. | https://apps.shopify.com/stock-sync ; https://apps.shopify.com/eaglelytics |
| Le recensioni sottostimano molto i paganti | Entusiasta | **Confermata.** Locksmith: "more than 162,000 installs and roughly 16,000 active subscribers and 8-figure revenue". Mechanic: "powers 3,000 stores". La fonte è Shopify, quindi di parte. | https://www.shopify.com/news/billion-dollar-ecosystem |

### Criteri di confutazione, uno per uno
1. **Distribuzione estremamente concentrata: SODDISFATTO.** Lo dicono tutti gli store e lo riconoscono entrambi i ruoli. Il punto decisivo è l'età: un'app nuova parte da mediane di circa 190 $/mese e deve accumulare recensioni per 12-24 mesi. La "classe media" dell'Entusiasta esiste, ma è fatta di app vecchie.
2. **Policy che rendono il business fragile: SODDISFATTO per Chrome e Figma, PARZIALE per Shopify, WooCommerce e Atlassian Forge.**
   - Chrome non ha pagamenti, ha cambiato regole a forza (MV3, affiliazione) e sospende in modo opaco: per un business delegato lo escludo come canale principale.
   - Shopify e Forge hanno cambiato le regole a sfavore, ma oggi sotto 1 M$ trattengono 0% più il costo di pagamento.
   - Distribuire lo stesso motore dati su 3-4 piattaforme di e-commerce attenua il rischio.
3. **Nicchie con domanda già occupate: SODDISFATTO per le idee ovvie, NON SODDISFATTO per la sincronizzazione da portali B2B con login.** Monitoraggio prezzi, dropshipping, coupon e scraper generici sono morti. Il segmento dei fornitori senza feed ha domanda adiacente provata (syncX, Syncee) e un solo concorrente diretto, nato da un mese, che non gestisce i portali con login.

### Verdetto
- **Stato: parziale.** Come strategia generica ("faccio estensioni e plugin") l'ipotesi è confutata da due criteri su tre.
- Sopravvive in forma stretta: **app per piattaforme e-commerce (Shopify, poi WooCommerce e PrestaShop) il cui prodotto è un flusso di dati web mantenuto**, dove la libreria di connettori è il vantaggio e la piattaforma è solo canale e sistema di fatturazione.
- **Fiducia: media.** Le distribuzioni dei ricavi sono tutte modelli di terzi, non dati di fatturazione.
- **Probabilità di successo: circa 10%** [stima]. Ragionamento:
  - circa il 15-20% degli sviluppatori Shopify supera 10 k$/mese (Spur-i-t, generoso), ma dopo anni di attività;
  - entro 24 mesi un'app nuova lo fa molto più di rado (190 $/mese di mediana nel quinto più giovane);
  - il vantaggio dei dati e un segmento poco servito alzano le probabilità rispetto alla base;
  - il founder a 5 ore/settimana le abbassa.

## Idee concrete che sopravvivono
- [[I-H09-1 Sync fornitori senza feed]] — punteggio v2: **49** dopo il secondo giro (69 al primo)
- [[I-H09-2 Schede prodotto da EAN]] — punteggio v2: **56**

Scartate: posizione sui comparatori (domanda debole, al massimo una funzione dell'idea 1); estensione per i rivenditori di Vinted (policy di Chrome e Vinted, nessun pagamento nativo); tutte le idee ovvie attaccate dal Bucatore.

## Fonti
Accesso 2026-11-20. Elenchi completi nei rapporti [[H09 Entusiasta]] e [[H09 Bucatore]].
- https://barn2.com/blog/shopify-app-store-saturation/ (verificata dal Giudice)
- https://apps.shopify.com/stock-sync (verificata dal Giudice)
- https://apps.shopify.com/eaglelytics (verificata dal Giudice)
- https://www.shopify.com/news/billion-dollar-ecosystem (verificata dal Giudice)
- https://shopify.dev/docs/apps/launch/distribution/revenue-share
- https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share
- https://www.atlassian.com/blog/teamwork/atlassian-marketplace-7-billion
- https://www.atlassian.com/blog/developer/extended-timelines-for-marketplace-revenue-share-changes
- https://spur-i-t.com/blog/shopify-app-store-analysis-2021/
- https://revenuehunt.com/state-of-the-shopify-app-economy/
- https://www.debugbear.com/blog/chrome-extension-statistics
- https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline
- https://developer.chrome.com/blog/cws-policy-update-affiliate-ads-2025
- https://help.figma.com/hc/en-us/articles/12067637274519-About-selling-Community-resources
- https://apps.shopify.com/search?q=competitor+price
