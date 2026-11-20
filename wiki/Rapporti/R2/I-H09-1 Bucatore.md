---
tipo: rapporto
idea: I-H09-1
ruolo: Bucatore
data: 2026-11-20
tags: [rapporto, R2]
---
# I-H09-1 Sync fornitori senza feed — Bucatore di palloncini (R2)

Idea: [[I-H09-1 Sync fornitori senza feed]]. Vincoli trasversali: [[H16 Founder a tempo parziale]], [[H17 Vantaggio dello scraping]].

## 1. Sintesi e posizione finale

Il dolore esiste, ma come **caso raro e disperso**, e il meccanismo centrale dell'idea va contro i contratti dei portali da cui dipende. Riassumo cinque punti.

- **Domanda debole e rada.** Le richieste pubbliche trovate sono poche: thread isolati nel 2020, 2023 e 2024, con poche risposte. Nei thread italiani il fornitore di solito **ha già un file**: un CSV a un link, un FTP o un web service.
- **I termini d'uso dei portali vietano due cose che servono all'app.** Il portale di un grande distributore vieta "scripts or spiders" e vieta di dare le credenziali a terzi, con risoluzione "without notice". Il negozio cliente rischia quindi l'account presso il suo fornitore principale. In Italia c'è anche il tema dell'accesso abusivo (art. 615-ter c.p.) per chi viola le prescrizioni del titolare.
- **I prezzi del segmento crollano.** Nel 2026 sono uscite molte app di sync da feed a 9-29 $/mese, con 0 recensioni. Chi fa scraping di siti pubblici (EagleLytics, il plugin SmartStoreLabs) ha 2 recensioni o meno di 10 installazioni.
- **L'economia per connettore regge solo se ogni connettore serve più negozi.** La coda lunga di grossisti fa del prodotto un servizio di sviluppo su misura, che oggi vendono agenzie e freelance.
- **Il conflitto con il lavoro è alto.** L'idea è, di fatto, scraping con login per conto terzi.

**A favore, onestamente:** nessun incumbent serio fa scraping di portali con login. syncX lo esclude in modo esplicito, mentre Flxpoint e Inventory Source non lo citano. Esistono costruzioni su misura che risparmiano "2+ ore al giorno" (dichiarazione di un'agenzia), e il benchmark di prezzo per integrazione è 50 $/mese (Inventory Source).

**Posizione finale:** idea **non confutata in modo definitivo, ma fortemente ridimensionata**. Punteggio proposto: da 69 a circa **46**. Va avviata solo se un esperimento di 30 giorni (§7) supera soglie dure su tre cose: densità delle richieste per grossista, quota di portali che permettono l'accesso automatizzato, preordini pagati.

## 2. Prove di domanda reale

- **[fatto]** Shopify Community, luglio 2020: un negozio chiede "Is there a way to sync my shopify inventory to the data displayed on their website?". syncX non poteva aiutarlo. Nel thread c'è una sola altra risposta (settembre 2020), "same problem", e nessuna soluzione [1].
- **[fatto]** Shopify Community, marzo-aprile 2024: un fornitore che offre "solo download manuali, no FTP". Le risposte rimandano a un'app su misura o all'aggiornamento manuale da parte di un assistente. La conclusione è che l'automazione via FTP "non si applica" [2].
- **[fatto]** Shopify Community, 2023: un caso "fornitore non elencato" che si è risolto con un feed FTP e syncX ("running reliably") [3]. È un esempio tipico: il fornitore un file ce l'aveva.
- **[fatto]** I thread italiani trovati riguardano quasi sempre un fornitore che **ha** un file:
  - "importare i prodotti da un normale csv partendo da un link del fornitore", con "ogni fornitore" che fornisce un CSV a un link diretto [4];
  - stock disponibile tramite web service, dove il problema è il connettore e non l'assenza di dati [5].
  Non ho trovato thread italiani di negozi bloccati da un grossista con solo un portale web.
- **[fatto]** syncX (946 recensioni) scrive nelle FAQ: "Stock Sync does not support custom web scraping". Consiglia di chiedere al fornitore "a scheduled export file (CSV/XML) or an FTP/Dropbox feed" [6]. Questo si può leggere in due modi: un buco di mercato, oppure una scelta prudente del leader dopo 12 anni di richieste dei clienti. [stima] Un leader con quasi mille recensioni che documenta il rifiuto suggerisce che le richieste esistono, ma che il costo e il rischio non valgono il ricavo.
- **[fatto]** I prodotti che leggono il sito del fornitore hanno trazione quasi nulla:
  - EagleLytics, lanciata il 12/10/2026: 2 recensioni, e "reads the product data the storefront already publishes" (solo dati pubblici) [7];
  - SmartStoreLabs Supplier Sync per WooCommerce (scraping di pagine pubbliche): "fewer than 10" installazioni attive e nessuna recensione [8].
- **[fatto, fonte di parte]** Una piccola agenzia di Singapore ha costruito su misura il login sui siti di 5+ fornitori, con sync ogni 4 ore. Dichiara di aver "eliminated 2+ hours of daily manual stock checking" [9]. È la prova a favore più concreta: il dolore c'è, ma oggi lo risolve un progetto su misura.
- **[fatto]** I freelance offrono apertamente lo scraping di siti con login "se il cliente fornisce le credenziali", secondo gli estratti di ricerca [10]. Le pagine Fiverr, Upwork, IndieHackers e Freelancehunt hanno restituito **403** alle letture dirette, quindi i prezzi dei gig sono **non trovati**.
- **[stima]** La domanda c'è, ma è (a) rara rispetto ai casi con feed o file, (b) dispersa su molti grossisti diversi e (c) già servita da lavoro su misura a progetto. Non ho trovato nessuna richiesta di funzionalità del tipo "vorrei un'app che si colleghi al portale X con le mie credenziali" con voti o seguito.

## 3. Clienti elencabili

- **[fatto]** Store Leads conta **55.299** negozi Shopify attivi in Italia (2026 Q2) [11]. Per WooCommerce e PrestaShop in Italia il dato è **non trovato**.
- **[fatto]** Il segmento "compra da un grossista con solo portale e senza export" **non è misurato** da nessuna fonte trovata. Non ho trovato nemmeno sondaggi sulla quota di distributori che offrono feed, API o EDI [12].
- **[fatto]** I grossisti si spostano verso canali che includono già la sincronizzazione:
  - Syncee è gratuito per i fornitori ("completely free to join"), che si collegano via store, file (CSV/XML/JSON via URL, FTP, API) o inserimento manuale. Dichiara "12,000+ trusted brands" e "200,000+ retailers" (numeri dell'azienda) [13];
  - Syncee lato negozio: 561 recensioni, piani da 39,99 a 99,99 $ [14];
  - Faire per i negozi Shopify: "sync your purchases and inventory from Faire to Shopify" [15];
  - Flxpoint dichiara oltre 250 integrazioni con fornitori già pronte [16].
- **[stima] Imbuto (ordine di grandezza):**
  1. si parte dai 55 mila negozi Shopify italiani;
  2. il 20-35% rivende merci di terzi comprate da grossisti, cioè circa 11-19 mila;
  3. di questi, forse il 10-20% ha almeno un fornitore importante con un portale senza file scaricabile né feed su richiesta, cioè circa 1-4 mila;
  4. di questi, solo una parte ha un volume di prodotti tale da pagare 29-79 $ e accetta di dare le credenziali a terzi contro i termini d'uso (vedi §6): forse il 10-25%.

  **Risultato: circa 100-1.000 negozi in Italia.** Il resto dell'UE moltiplica il numero, ma moltiplica anche i grossisti da coprire.
- **[stima]** I negozi **non sono elencabili per grossista** senza raccogliere dati di relazioni commerciali che non sono pubblici. Sono elencabili i grossisti (per categoria). Il canale passa quindi per il grossista o per la ricerca, non per l'outbound verso i negozi.

## 4. Prezzi ed economia unitaria

**Prezzi dei concorrenti** [fatto, pagine lette il 2026-11-20]:

| Prodotto | Prezzo | Fonti supportate | Recensioni | Fonte |
|---|---|---|---|---|
| Feedguard (lanciata il 20/10/2026) | 0 / 9 / 19 / 29 $ | CSV/Excel/XML/JSON da link, Google Sheet, FTP | 0 | [17] |
| Everstock (14/09/2026) | 0 / 9 / 29 / 79 / 199 $ | CSV, XML, JSON, Sheets, FTP, REST API | 0 | [18] |
| SupplierSync (19/08/2026) | 14,99 / 29,99 / 69,99 $ | feed via HTTP, FTP, SFTP | 0 | [19] |
| EagleLytics | 39 / 99 / 139 / 199 $ | sito pubblico o API | 2 | [7] |
| Inventory Source | 199-599 $ | 2-10 integrazioni incluse, **50 $/mese per ogni integrazione in più** | — | [20] |
| Flxpoint | 799 $/mese (699 $ con fatturazione annuale) | +50 $/mese per connettore, onboarding da 4.800 o 9.600 $ | — | [16] |

Nessuno di questi prodotti dichiara di fare scraping di portali con login.

- **[stima] Due mercati diversi.**
  - Nella fascia bassa (negozi piccoli) il prezzo di riferimento è sceso a 9-29 $.
  - Nella fascia alta il mercato accetta circa 50 $ al mese **per integrazione**, ma lì vendono piattaforme complete per dropshipping (Flxpoint, Inventory Source) a negozi già strutturati.
  - Il prezzo proposto (29 / 79 / 199 $ per più fornitori) si colloca nella fascia bassa e porta però i costi di una fascia alta, cioè connettori con login.
- **Costo per connettore:**
  - [fatto, dato di un vendor] Una sola osservazione registra circa **2,6 cambi di struttura per fonte all'anno**, senza contare anti-bot e consent wall [21].
  - [fatto, dato di un vendor] ProWebScraper stima 60-120 ore di manutenzione all'anno per 10 siti, cioè **6-12 ore per sito**. Scrive anche che i team stimano "10–15 hours per month, then discover 40–60" [22].
  - [stima] Un portale con login ha in più sessioni, scadenza delle password, a volte MFA o captcha, e prezzi diversi per cliente: ogni negozio vede il **suo** listino, quindi il connettore va verificato su più account.
  - [stima] Costruzione: 8-24 ore. Manutenzione e monitoraggio: 8-15 ore all'anno. A 35 €/h di costo pieno per uno sviluppatore italiano, fanno **280-840 € una tantum + 280-525 € all'anno per connettore**, più l'onboarding di ogni cliente (mappatura degli SKU).
- **Ricavo per connettore** [stima]:
  - se un connettore serve 1 negozio a 29-79 $ al mese, incassa 320-870 € all'anno: al massimo pareggia la manutenzione e non ripaga la costruzione né il supporto;
  - servono **almeno 3 negozi per connettore** perché il connettore abbia un margine.
  
  Nella coda lunga (ferramenta, cosmetica, ricambi moto: decine di grossisti regionali) mi aspetto che la maggioranza dei connettori abbia 1-2 negozi. È la stessa ragione per cui oggi il lavoro lo fanno freelance a progetto.
- **Infrastruttura per cliente** [stima]: un browser headless per i login e proxy residenziali "puliti" (con login si evita la rotazione aggressiva) costano circa 1-5 $ al mese per cliente con sync ogni ora, quindi una voce minore.
- **Churn:**
  - [fatto, blog di un vendor, nessuna fonte primaria] Benchmark citati: circa 14% di disinstallazioni entro 24 ore, circa 51% di clienti ancora attivi al giorno 30, circa 35% al giorno 90, churn mensile "sano" sotto il 5% [23];
  - [fatto, sintesi di ricerca] Un altro vendor indica 5-12% al mese per le app Shopify [23b];
  - [stima] Il segmento è fatto di negozi piccoli e dropshipper, ad alto churn, a cui si aggiunge il churn da "il grossista mi ha bloccato l'account" o "il grossista ora dà un feed". Lo stimo all'**8-12% al mese**.
- **Ricavi tipici delle app** [fatto, da R1]: Barn2 riporta circa **190 $/mese** di mediana per il quinto più giovane delle app, contro 19.100 $/mese per il quinto più vecchio [24].
- **Soglia di successo** [stima, coerente con H16]: 50 k€ di margine + team a mercato (§5) richiedono circa **130-170 k€ di ricavo all'anno**, cioè circa 12-15 k$ di MRR.
  - Con un ARPU di 60 $ servono **200-250 paganti**. Con un churn del 10% al mese servono 20-25 nuovi paganti al mese solo per restare fermi.
  - Con 3 o più negozi per connettore servono circa 70-100 connettori vivi, quindi circa 600-1.500 ore all'anno di sola manutenzione dei connettori.

## 5. Piano di delega e costo a mercato (H16)

- La nota dell'idea prevede "uno sviluppatore part-time + una persona part-time di supporto". H16 però richiede **un operatore pagato a mercato (60-75 k€/anno a regime)**, oppure una quota di utili dichiarata.
- **Team minimo a regime** [stima, costi aziendali italiani]:
  - sviluppatore scraping e integrazioni, 1 FTE con 70-100 connettori con login: 45-60 k€;
  - supporto, onboarding e mappatura SKU, multilingue, 0,5-1 FTE: 18-35 k€;
  - responsabile operativo: spesso coincide con lo sviluppatore senior, altrimenti +60-75 k€ (H16).
  - **Totale: 65-95 k€ all'anno**, oppure 120-170 k€ con un operatore distinto.
- **Costi aggiuntivi:** consulenza legale sui termini d'uso dei portali (da ripetere per ogni nuovo grossista importante), SRL (4-15 k€ all'anno secondo H16), infrastruttura.
- **Ore del founder** [stima]: 4 ore a settimana sono ottimistiche. Le decisioni "questo portale si può connettere o no?" (tecnica anti-bot più rischio contrattuale e penale) sono giudizi da esperto, frequenti nei primi 12-18 mesi. È proprio il tipo di giudizio tecnico settimanale che H16 indica come filtro eliminatorio per C10.
- **Conseguenza:** con 65-95 k€ di team, il margine di 50 k€ arriva solo sopra i 130-150 k€ di ricavo. Barn2 colloca questi livelli nelle app "vecchie" (oltre 3-5 anni), non entro 24 mesi.

## 6. Conflitto con il lavoro e rischio legale

### 6a. Termini d'uso dei portali B2B (il rischio che può uccidere l'idea)
- **[fatto]** Ingram Micro, termini del sito per i clienti (NZ):
  - "The running of scripts or spiders against this Website is strictly forbidden" (C.2);
  - il cliente "must not disclose the Unique Username or the Password to any third party" (B.3);
  - i dati di account e i prezzi non vanno comunicati a terzi (C.3);
  - Ingram "may terminate this agreement and the Customer's access to the Website at any time without notice" (F) [25].
- **[fatto]** IngramMicro24 (portale B2B europeo):
  - §4(6) vieta di rendere login e password "accessible to other persons";
  - §9(4) vieta di "duplicate and further use any content";
  - §4(8) prevede sospensione o cancellazione dell'account [26].
- **[stima]** È un campione di due documenti dello stesso gruppo, quindi non rappresentativo di tutti i grossisti. Le clausole però sono standard nei termini B2B (vedi le clausole raccolte in [27]).
  - Il modello "il negozio ci dà le sue credenziali e noi facciamo login con un bot" **viola due clausole tipiche alla volta**.
  - La sanzione colpisce il **negozio**, che perde l'accesso al fornitore da cui dipende il suo catalogo. Per il negozio questo rischio vale molto più dei 29-79 $ al mese.
  - È una barriera all'adozione, non solo un rischio legale residuo. Il "grossista come canale" della nota presuppone che il grossista approvi: ma un grossista che approva di solito preferisce dare un feed (gratis su Syncee) e rende inutile l'app.
- **[fatto]** In Italia l'art. 615-ter c.p. (accesso abusivo) può riguardare anche chi è abilitato:
  - SU n. 4694 del 27/10/2011 (Casani), secondo la ricostruzione di diritto.it: rileva l'accesso o il trattenimento "da parte di un soggetto non legittimato o che avesse violato le prescrizioni impartitegli dal titolare" [28];
  - SU 41210/2017 (Savarese) estende il reato all'accesso per "ragioni ontologicamente estranee", ma solo per pubblici ufficiali e incaricati di pubblico servizio [29].
  
  [stima] La probabilità di un procedimento penale per una sync di magazzino è bassa. Il rischio però non è zero, si somma alla responsabilità contrattuale del negozio e cresce con il numero di portali e clienti. Va valutato da un penalista prima del lancio (costo stimato 500-1.500 €).
- **[fatto]** Shopify: nelle linee guida lette non ho trovato un divieto esplicito di fare scraping di siti terzi. Le app però devono rispettare l'Acceptable Use Policy e gestire le credenziali in modo sicuro [30]. Conservare password di portali B2B di terzi è un rischio di sicurezza e di reputazione per l'app: un data breach equivale a dare gli account dei clienti presso i loro fornitori.

### 6b. Conflitto con il datore (art. 2105 c.c., Cass. 19096/2013 come letta in H16)
- **[stima]** Il datore fa scraping per conto terzi, anche con login, per istituti finanziari e business information provider. Questa idea fa **scraping di portali con login per conto terzi** (i negozi), a pagamento.
  - Mercato e clienti sono diversi. L'**attività economica** però è molto simile: accesso automatizzato a fonti web su incarico di clienti, con manutenzione di connettori.
  - Cass. 19096/2013 guarda alla "medesima attività economica" e alla potenzialità del danno, non ai clienti.
  - Inoltre il know-how specifico (gestione delle sessioni, anti-bot, monitoraggio delle rotture) è quello che il founder usa nel lavoro: rischio rivendicazione del codice (art. 12-bis L. 633/1941) e segreti (artt. 98-99 c.p.i.).
- **[stima]** Secondo la penalità standard di H16 (da −5 a −10 per chi vende servizi di scraping a terzi; da 0 a −3 quando lo scraping è interno a un prodotto di un altro mercato), questa idea sta nel mezzo: lo scraping **è** il prodotto venduto. Propongo **−3/−4 di conflitto**, separati dalla penalità per i termini d'uso. Serve l'autorizzazione scritta del datore ([[I-H16-1 Autorizzazione scritta e veicolo societario]]).

## 7. Esperimento di 30 giorni per uccidere l'idea in fretta

Soglie decise ora, prima di qualunque dato. **Basta un criterio di arresto per archiviare l'idea.**

| Sett. | Attività | Metrica | Arresto se |
|---|---|---|---|
| 1 | Censimento di 40 grossisti in 3 categorie (ferramenta, cosmetica, ricambi moto), ciascuno classificato in tre classi: (A) feed, API o CSV a un link; (B) portale con export scaricabile dopo il login; (C) solo HTML dietro login | quota di (C) | **(C) < 25%** (meno di 10 su 40) |
| 1 | Email a tutti i 40: "fornite un listino o un feed giacenze ai rivenditori online?" | quota che dà un feed su richiesta | **≥ 50%** offre un feed o export su richiesta |
| 1 | Lettura dei termini d'uso dei portali B e C | quota con divieto esplicito di bot o di condividere le credenziali | **≥ 70%** con divieto, se il punto sotto fallisce |
| 1-2 | Proposta a 10 grossisti di classe C: "vi facciamo da feed gratuito, potete autorizzarci?" | autorizzazioni scritte o interesse documentato | **0 su 10** |
| 1-2 | Parere di un penalista e di un civilista (budget ≤ 1.500 €) | rischio art. 615-ter e responsabilità del negozio | parere "rischio alto" senza autorizzazione del grossista, **e** 0 autorizzazioni |
| 1-3 | 20 landing page "sincronizza [Grossista] con Shopify/WooCommerce" + 300 € di Google Ads + community | iscrizioni con nome del grossista; costo per iscrizione | **< 25 iscrizioni** oppure **> 25 € per iscrizione** |
| 3-4 | Densità delle richieste | quota delle richieste coperta dai 10 grossisti più chiesti; grossisti con ≥ 3 negozi | **top-10 < 50%** delle richieste **oppure < 5 grossisti con ≥ 3 negozi** |
| 2-4 | Preordine a **49 $ al mese** (allineato al benchmark di 50 $ per integrazione) | preordini pagati | **< 5 preordini** |
| 2-4 | Un connettore reale con login su un portale autorizzato o con termini che lo permettono | ore per costruirlo; rotture in 2 settimane | **> 24 ore** di costruzione |

**Successo, tutto insieme:** classe C ≥ 25%, ≥ 1 grossista che autorizza, ≥ 25 iscrizioni a ≤ 25 € ciascuna, ≥ 5 grossisti con ≥ 3 negozi, ≥ 5 preordini pagati a 49 $. Solo così si passa allo sviluppo.

Differenze rispetto alla nota originale:
- **prezzo** del preordine alzato (29 → 49 $);
- **soglia di densità** più dura (≥ 3 negozi per grossista invece di 2);
- aggiunti i test su **disponibilità del feed su richiesta**, **termini d'uso** e **autorizzazione del grossista**, che sono le cause di morte più probabili e le meno costose da verificare.

## 8. Effetto proposto sul punteggio v2

| Criterio (peso) | Nota | Proposta | Motivo |
|---|---|---|---|
| C1 Bisogno (10) | 4 | **3** | Il dolore è reale ma raro: thread sparsi negli anni, e i casi italiani hanno quasi sempre un file [1-5]; la prova "adiacente" di syncX riguarda negozi che hanno un feed |
| C2 Domanda (10) | 3 | **2** | Segmento non misurato; l'imbuto stimato dà circa 100-1.000 negozi in Italia; i prodotti di scraping esistenti hanno 2 recensioni o meno di 10 installazioni [7][8] |
| C3 Monetizzazione (15) | 4 | **3** | Fascia bassa compressa a 9-29 $ dai cloni del 2026 [17-19]; i 50 $ per integrazione valgono per piattaforme complete [16][20] |
| C4 Vantaggio competenze (15) | 4 | **3** | Secondo la ricalibrazione di H17: fonti poche ma protette da login (3). I plugin di scraping dei fornitori nascono già da piccoli team [8] |
| C5 Distribuzione (15) | 4 | **3** | I negozi non sono elencabili per grossista; categoria dello store affollata di app nuove; l'unico canale forte (il grossista) di solito preferisce un feed |
| C6 AI generalista (5) | 4 | 4 | — |
| C7 Difendibilità (5) | 4 | **3** | La libreria di connettori si accumula, ma ogni connettore serve pochi negozi e può essere reso inutile da un feed del grossista |
| C8 Incumbent (5) | 3 | 3 | Confermato: nessuno fa portali con login; syncX lo esclude [6] |
| C9 Primo euro (5) | 4 | 4 | — |
| C10 Delegabilità (10) | 3 | **2** | Servono giudizi esperti frequenti (tecnici e contrattuali) e circa 1 FTE di sviluppatore scraping (§5) |
| C11 Tetto a 24 mesi (5) | 3 | **2** | 200-250 paganti con churn dell'8-12% al mese entro 24 mesi è improbabile (Barn2: mediana delle app giovani circa 190 $ al mese) |
| **Lordo** | 74 | **57** | |
| Penalità | −5 | **−11** | −3 dipendenza da Shopify; −5 termini d'uso dei portali e art. 615-ter, con rischio sul negozio cliente; −3 conflitto con il lavoro (scraping con login per conto terzi) |
| **Totale** | 69 | **≈ 46** | |

## 9. Fonti (accesso 2026-11-20)
1. https://community.shopify.com/t/how-do-i-sync-inventory-levels-to-a-wholesalers-website/16419
2. https://community.shopify.com/t/how-can-i-integrate-a-third-party-supplier-app-with-my-online-store/309132/1
3. https://community.shopify.com/t/how-can-i-manage-drop-shipping-with-an-unlisted-supplier/248866
4. https://community.shopify.com/t/importazione-ricorrente-prodotti-da-csv/197311
5. https://community.shopify.com/t/sincronizzazione-giacenze-con-servizio-web/125358
6. https://help.stock-sync.com/en/article/does-stock-sync-able-to-scrape-products-from-stores-15o4uqk
7. https://apps.shopify.com/eaglelytics
8. https://wordpress.org/plugins/smartstorelabs-supplier-sync/ (letta come https://wordpress.org/plugins/?p=396321)
9. https://developer.inlinex.com.sg/blog/web-scraping-supplier-stock-levels-python (agenzia, dati dichiarati)
10. Estratti di ricerca da fiverr.com (gig "connect any supplier source to shopify", "n8n workflow to scrape supplier"), upwork.com/services/product/development-it-e-commerce-product-page-scraper-and-shopify-csv-integration-1575039154171482112, indiehackers.com: **lettura diretta bloccata (403)**, prezzi non trovati
11. https://storeleads.app/reports/shopify/IT/top-stores (dato da estratto di ricerca)
12. Ricerca senza risultati utili; più vicino: https://distributionstrategy.com/wp-content/uploads/2026/01/The_State_Of_ECommerce_Whitepaper_Revised.pdf (non letto per intero)
13. https://syncee.com/suppliers/ (numeri dichiarati dall'azienda)
14. https://apps.shopify.com/syncee-1
15. https://help.shopify.com/en/manual/online-sales-channels/faire/retailers
16. https://flxpoint.com/pricing
17. https://apps.shopify.com/feedguard-3
18. https://apps.shopify.com/everstock
19. https://apps.shopify.com/suppliersync-stock-oversell
20. https://inventorysource.com/pricing-plans
21. https://www.getphyllo.com/post/why-scrapers-break (vendor, una sola osservazione)
22. https://prowebscraper.com/articles/scraper-breakage (vendor)
23. https://marmeto.com/blogs/elevate/shopify-app-customer-lifetime-value (vendor, benchmark senza fonte primaria); 23b: estratto di ricerca da https://ecommerce-platforms.com/ecommerce/how-to-reduce-churn-on-shopify (non letto direttamente)
24. https://barn2.com/blog/shopify-app-store-saturation/ (via [[H09 Bucatore]])
25. https://nz.ingrammicro.com/cms/Content-Pages/Services-Support/TermsAndConditions.aspx?pub=0
26. https://ingrammicro24.com/hr/termsMain
27. Clausole tipo da estratti di ricerca (es. https://bstock.com/terms-of-use/), non lette per intero
28. https://www.diritto.it/laccesso-abusivo-al-sistema-informatico-configura-un-reato-di-pericolo/ (ricostruzione di SU 4694/2011)
29. https://brocardi.it/massimario/47375.html
30. https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements (da estratto di ricerca)

Ricerche web usate: 18
