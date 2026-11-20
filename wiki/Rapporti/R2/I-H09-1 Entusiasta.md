---
tipo: rapporto
idea: I-H09-1
ruolo: Entusiasta
data: 2026-11-20
tags: [rapporto, R2]
---
# I-H09-1 Sync fornitori senza feed: rapporto dell'Entusiasta (R2)

## 1. Sintesi e posizione finale

- **La lacuna esiste e l'incumbent la dichiara.** [fatto] syncX, il leader con 946 recensioni, scrive nel suo help center che "does not support custom web scraping, HTML scraping, or crawling third-party storefronts". A chi ha un fornitore senza feed consiglia di chiedere al fornitore un CSV [1].
- **I nuovi entranti del 2026 coprono solo le vetrine pubbliche** (EagleLytics, Codigle, SmartStoreLabs per WooCommerce). Quest'ultimo, se una pagina è protetta, dice di chiedere un feed al fornitore [3][4][5].
- **Nessuna app o modulo trovato** su Shopify, WordPress.org o PrestaShop accede ai portali B2B con login.
- **La domanda esatta esiste da 10 anni, ma in forma sparsa:**
  - thread nella Shopify Community, tra cui "Most of (mine) suppliers don't have CSV files" [6];
  - incarichi su Freelancer pagati 750-1.500 € per "signs in to an online portal, pulls [...] stock level, price" [9].
- **I clienti potenziali sono numerosi ed elencabili** [fatto, StoreLeads]: 62.324 negozi Shopify, 119.252 WooCommerce e 10.510 PrestaShop in Italia. Shopify conta anche 105.970 negozi in Germania, 118.588 in Francia e 71.873 in Spagna [13].
- **Il costo di servizio è basso** [stima]: 3-10 € al mese per cliente.
- **Prove contrarie importanti:**
  - la domanda esplicita è sottile e quasi assente in italiano;
  - StoreLeads rileva syncX su soli 358 negozi, in calo del 15,2% anno su anno [14];
  - le app pubbliche del 2026 hanno 0-2 recensioni;
  - l'idea non mette a costo il conflitto con il lavoro.

**Posizione finale:** idea da portare all'esperimento, non da finanziare subito.
- È la miglior combinazione vista finora tra lacuna verificata, canale integrato e competenza specifica.
- Il caso regge solo con un posizionamento più stretto e più caro del previsto: "servizio gestito a prezzo di app", con setup per connettore più canone (vedi §3).
- Punteggio proposto: da 69 a 68. +1 su C8 e −2 per il conflitto, che mancava (dettagli in §7).

---

## 2. Prove di domanda reale

### 2.1 Richieste esplicite di merchant

**Shopify Community, 2023-11 (288 visualizzazioni)** [fatto] [6]
- Primo messaggio: "I need an app that can track stock on website of my supplier".
- Dopo i consigli su Stock Sync e Syncee: "Is there an app that don't need CSV or similar file to work? Most of (mine) suppliers don't have CSV files of their web [...] Can I just put or connect website link to it?"
- Il supporto di Stock Sync risponde nel thread offrendo di "assess the supplier website and try to create automation". **La domanda arriva anche all'incumbent, che la tratta caso per caso.**

**Shopify Community, 2020-07 (76 visualizzazioni)** [fatto] [7]
- Un dropshipper: il fornitore "not able to send me an inventory file"; "I had Stock Sync look into their website but unfortunately they were not able to help me".
- Oggi aggiorna a mano cercando ogni prodotto sul sito del fornitore.
- Un secondo utente: "I am experiencing the same problem!"

**Shopify Community, 2025-01** [fatto] [8]
- Un negozio di scarpe personalizzate vuole collegare le taglie disponibili ai siti da cui compra (SportsDirect, JD Sports).
- Le risposte: "It's kind of scrapping thing [...] not an easy setup".

**Shopify Developer Community, 2026-09 (90 visualizzazioni)** [fatto] [10]
- Un negozio vende 15 marchi: "sometimes a customer places an order for a product that appears to be in stock on my website, but the vendor has actually run out of stock. Currently, I have to manually che[ck]".

**Shopify Community, 2025-02 e 2026-03 (469 visualizzazioni)** [fatto] [11]
- Un negozio con 10.000 prodotti di 8 marchi chiede come gestire cataloghi che cambiano ogni mese.
- Un altro merchant risponde: "vendors [...] recommend we scrape their site [...] We ended up writing vendor-specific scripts (scraping + some AI + huma[n])".
- **Il pattern "connettore per fornitore" è quello che i merchant costruiscono già da soli.**

### 2.2 Disponibilità a pagare: incarichi pubblicati

| Incarico (piattaforma) | Budget | Offerte | Data | Fonte |
|---|---|---|---|---|
| "Portal Scraper & WooCommerce Sync": "signs in to an online portal, pulls every product detail—title, description, stock level, price" | 750-1.500 € | 228 freelance, media 1.102 € | circa 10 mesi fa | [9] |
| "Web Scraping & Shopify Stock Sync": dati dal sito del fornitore | 250-750 $ | 156, media 510 $ | circa 2 anni fa | [12] |
| Confronto quotidiano di prezzi e stock dei fornitori (webshop B2B) | 12-18 €/h | 75 | circa 9 mesi fa | [12b] |
| WooCommerce: "scrape and import products from my suppliers website" | 30-250 $ | 24 | circa 9 anni fa | [12c] |
| osCommerce: "We login to suppliers' website to look at inventory level, and manually sync" | 200-350 NZD | n.d. | circa 11 anni fa | [12d] |

Lettura [stima]:
- Il bisogno è ricorrente da oltre 10 anni e su piattaforme diverse.
- I merchant pagano già una tantum 250-1.500 € per un connettore singolo, senza manutenzione.
- Un canone con manutenzione inclusa è un'offerta migliore per chi ha già pagato e poi visto rompersi lo script.
- Il gran numero di offerte (150-230) dice però che anche l'offerta di freelance è abbondante.

### 2.3 Recensioni dei concorrenti

- [fatto] Ho letto 400 delle 946 recensioni di syncX (pagine 1-40) cercando "scrap", "website", "portal", "login", "password", "crawl". **Nessuna recensione chiede il supporto a siti senza feed.**
  - Il riassunto di Shopify Magic cita "flexible sync options (CSV/XML, APIs, Google Sheets, FTP/SFTP)" e il supporto che "sets up or fixes complex feeds and custom integrations" [2].
  - Prova contraria onesta: chi recensisce syncX ha già un feed. Chi non ce l'ha disinstalla e non recensisce, quindi le recensioni non misurano il segmento.
- [fatto] Il servizio clienti è il valore percepito: decine di recensioni citano per nome chi ha configurato il feed. Esempio: "modify the internal templates for us when the standard settings weren't enough" (auto parts, 2025-12) [2].
  - **Nel segmento il cliente paga per il "fatto per te"**, e questo è coerente con il modello a connettori gestiti.

### 2.4 Domanda in italiano

- [fatto] Nella community Shopify in italiano ho trovato solo casi adiacenti:
  - 27.000 prodotti da più fornitori, con le scorte impossibili da gestire a mano [15];
  - il bisogno di sincronizzare da un web service [16];
  - l'import da link CSV dei fornitori (con StoreManager su PrestaShop) [17].
- **Richieste esplicite "il mio grossista ha solo l'area riservata": non trovate.** Facebook e gruppi chiusi non sono leggibili. Il punto va verificato con l'esperimento.

### 2.5 Il segnale più forte: la lacuna dichiarata dall'incumbent

- [fatto] syncX, nell'articolo "Does Stock Sync able to scrape products from stores?" [1]:
  - "Stock Sync cannot scrape custom product data from arbitrary external websites";
  - per il caso "Supplier does not provide a CSV or API feed and asks you to scrape their site", la soluzione indicata è "Request a scheduled export file".
- [fatto] syncX offre però "3rd Party Download with Login": scarica **un file** da un URL dietro login con form semplice, senza MFA o 2FA [18].
  - Copre quindi i portali che espongono un listino scaricabile, non quelli dove stock e prezzi sono solo nelle pagine HTML.
  - È una sovrapposizione parziale da non sottovalutare: alcuni grossisti "senza feed" hanno in realtà un export XLS nell'area riservata.

---

## 3. Clienti elencabili

### 3.1 Negozi (lato pagatore)

[fatto] Dati StoreLeads, pagine pubbliche lette il 2026-11-20 [13]:

| Paese | Shopify | WooCommerce | PrestaShop |
|---|---|---|---|
| Italia | 62.324 (+16% anno su anno nel 3° trim. 2026) | 119.252 | 10.510 |
| Germania | 105.970 | n.d. | n.d. |
| Francia | 118.588 | n.d. | n.d. |
| Spagna | 71.873 | n.d. | n.d. |

- [fatto] syncX, rilevato da StoreLeads [14]:
  - 358 installazioni rilevate, −15,2% anno su anno;
  - il 23,5% vende 250-999 prodotti e il 18,4% 100-249;
  - categorie principali: abbigliamento 24,9%, casa e giardino 13,4%, bellezza 9,2%.
- [stima] Il dato di 358 è quasi certamente una forte sottostima, perché StoreLeads rileva le app dal codice della vetrina e le app di backend lasciano poche tracce. Per Syncee, con 561 recensioni, rileva **3** negozi [14b]. Non va usato come dimensione del mercato. Il calo anno su anno resta un segnale debole contrario.
- **Come si trovano i clienti senza dati personali:**
  - filtri StoreLeads a pagamento per paese, piattaforma, numero di prodotti e categoria;
  - gli elenchi "rivenditori autorizzati" e "dove acquistare" pubblicati da grossisti e marchi (nomi di aziende);
  - le pagine per grossista (SEO) e le ricerche nello Shopify App Store.
  - Nessun nome o email di persone va raccolto. Si contattano le aziende dai loro canali pubblici.

### 3.2 Grossisti con area riservata (lato connettori)

- [fatto] Osservatorio B2b Digital Commerce & Experience del Politecnico di Milano (presentato il 7/10/2025) [19]:
  - nel 2024 il B2b digital commerce di prodotto vale 278 mld €, ma solo il 22% delle transazioni;
  - i "canali digitali proprietari – dai portali aziendali agli eShop B2b" sono "presenti in circa il 16% delle imprese italiane";
  - "Solo il 18% delle aziende effettua controlli regolari sulla qualità dei dati";
  - il PIM è adottato solo dal 21% delle grandi imprese.
- [stima] Lettura favorevole: il portale B2B è diffuso ma la disciplina dei dati è scarsa. Il caso "portale sì, feed no" è plausibilmente la norma tra i grossisti medi e piccoli.
- **Numero assoluto di grossisti italiani con portale e senza feed: non trovato.** Una directory affidabile non esiste (la ricerca restituisce solo guide generiche). Il censimento va fatto a mano nell'esperimento (§6).
- [stima] Leva da sfruttare: molti portali B2B girano su poche piattaforme (moduli B2B di gestionali, Magento/Adobe Commerce, Shopware, PrestaShop e WooCommerce con area riservata).
  - EagleLytics fa già la stessa cosa sul pubblico ("detects the platform") [3].
  - Un connettore per piattaforma, con login generico, copre molti grossisti. Il costo marginale di un connettore nuovo scende nel tempo, ed è il cuore della difendibilità (C7).

---

## 4. Prezzi ed economia unitaria

### 4.1 Prezzi dei concorrenti (pagine lette il 2026-11-20)

| App | Prezzi | Recensioni | Login a portali? | Fonte |
|---|---|---|---|---|
| syncX | Starter 7 $, Expert 10 $, ... Scale 200 $/mese | 946 (4,8) | Solo download di file con form di login semplice | [2][18] |
| Syncee | 39,99 / 59,99 / 99,99 $/mese | 561 | No (marketplace di fornitori) | [20] |
| Stockistly | 20 $ (3 fornitori), 35 $ (5), 70 $ (10), 120 $ (15) | n.d. | No (CSV/XML/API/FTP) | [21] |
| EagleLytics | 39 / 99 / 139 / 199 $/mese; sync ogni 24 h nei piani base, ogni ora dai piani alti | 2 (lanciata il 12/10/2026) | No: "reads the product data the storefront already publishes" | [3] |
| SupplierSync | da 14,99 $/mese | 0 (agosto 2026) | No (feed) | [22] |
| Codigle Product Finder | gratis con un sito seguito, piani a pagamento a consumo | 0 (luglio 2026) | Non dichiarato | [4] |
| SmartStoreLabs (WooCommerce) | gratuito + Pro | < 10 installazioni (novembre 2026) | No: se c'è un controllo anti-bot, "the plugin does not try to get around a site's protection" | [5] |
| Freelance su misura | 250-1.500 € una tantum | - | Sì, ma senza manutenzione | [9][12] |

**Prezzo proposto (rivisto)** [stima]:
- **Setup per connettore nuovo: 149-299 €**, gratis se il grossista è già in libreria.
  - È sotto la mediana dei budget freelance (510 $ - 1.102 €) e include la manutenzione.
- **Canone:**
  - 49 €/mese per 1 fornitore, sync ogni 6 h;
  - 99 €/mese per 3 fornitori, ogni 2 h;
  - 199 €/mese per 10 fornitori, ogni ora.
- Il canone sta sopra Stockistly e syncX, perché il servizio non esiste altrove, ed è allineato a EagleLytics che fa meno.
- ARPU atteso [stima]: circa 85 €/mese più circa 150 € di setup ammortizzato nell'anno, cioè circa 1.150 €/anno per cliente.

### 4.2 Costo di servizio per cliente

[fatto] Listini letti il 2026-11-20:
- Hetzner Cloud da 5,49-5,99 €/mese [23];
- Browserless 25 $/mese per 20.000 unità (unità di 30 s) e 0,0015-0,002 $ a unità oltre [24];
- Zyte da 0,13 a 1,27 $ ogni 1.000 richieste HTTP, e da 1,01 a 16,08 $ con rendering del browser [25];
- Bright Data residenziale da 5 $/GB (con sconto del 50% indicato in pagina) [26].

[stima] Profilo tipo: 3 fornitori × 2.000 SKU, liste da 50 prodotti per pagina (40 pagine a run), 6 run al giorno.
- Sono circa 720 pagine al giorno, cioè circa 21.600 al mese.
- **Caso base:** portali B2B senza anti-bot (frequente: sono dietro login), sessione HTTP autenticata da un VPS condiviso → **< 1 €/mese per cliente**.
- **Caso headless:** login e navigazione in un browser, circa 2 min a run = 4 unità × 18 run al giorno × 30 → circa 2.160 unità al mese → **circa 4 $/mese**.
- **Caso proxy residenziale:** circa 100 KB per pagina HTML → circa 2,2 GB al mese → **5-11 $/mese**.
- **Caso peggiore (Zyte rendering "moderate", 2 $ ogni 1.000):** circa 43 $/mese. Va riservato ai pochi portali protetti e prezzato nel piano più alto.
- **Media ponderata stimata: 3-10 € al mese per cliente** (90-95% di margine lordo sull'infrastruttura).
- Il costo vero sono le **persone**: costruzione e manutenzione dei connettori, onboarding.
- Commissione Shopify: 0% fino a 1 M$ di ricavi (fonte già nella nota dell'idea).

### 4.3 Manutenzione dei connettori

[stima] Ipotesi esplicite: 1 rottura ogni 3 mesi per connettore e 3 ore per ripararla, più 8-16 ore per costruirne uno nuovo.

| Connettori attivi | Ore/anno di manutenzione | Ore/anno di costruzione (50 nuovi l'anno) | FTE |
|---|---|---|---|
| 100 | 1.200 | 400-800 | circa 1 |
| 300 | 3.600 | - | circa 2 |

- Con connettori per piattaforma (§3.2) e test di regressione automatici le ore scendono, ma il dato reale va misurato (§6).

### 4.4 Ricavi necessari

[stima]
- Team (§5): circa 85-95 k€/anno. Più costi fissi (SRL, commercialista, legale, strumenti): circa 12 k€.
- Per lasciare 50 k€ servono circa **150-160 k€ di ricavo annuo**, cioè **circa 130-140 clienti a 1.150 €/anno**.
- Con 2-3 negozi per grossista, sono circa 50-70 grossisti coperti con 100-150 connettori.
- Una sola persona di sviluppo regge 100 connettori; per 150 ne servono circa 1,5.
- Confronto con la distribuzione: la mediana delle app giovani è circa 190 $/mese (Barn2, nella nota dell'idea). Arrivare a circa 12 k€/mese in 24 mesi vuol dire stare nella coda alta.
- **Leve dell'Entusiasta:**
  - l'ARPU è 3-5 volte quello di syncX;
  - il setup a pagamento finanzia la libreria dei connettori;
  - le pagine per grossista generano domanda già qualificata;
  - un grossista che consiglia l'app porta più negozi con un connettore solo.

---

## 5. Piano di delega (costi italiani)

| Ruolo | Chi fa cosa | Impegno | Costo annuo |
|---|---|---|---|
| Operatore / sviluppatore senior (amministratore della SRL) | Costruisce e mantiene i connettori, monitora le rotture, gestisce la coda dei grossisti richiesti, rilasci dell'app | tempo pieno | RAL 38-42 k€ → costo azienda circa 52-58 k€ [stima: RAL × 1,35-1,4]; oppure 60-75 k€ secondo H16, con quota utili |
| Supporto e onboarding (multilingue, con AI) | Prova del portale del cliente, mappatura SKU/EAN, raccolta recensioni, pagine SEO per grossista | 50% | RAL 24-26 k€ al 50% → circa 17-18 k€ [stima] |
| Freelance di picco | Connettori in eccesso nei mesi di crescita | a ore, 25-40 €/h | 5-10 k€ |
| Consulente legale | Revisione dei termini d'uso dei portali principali, contratto con i clienti (mandato all'accesso), DPA | a progetto | 3-5 k€ |
| **Totale** | | | **circa 80-95 k€** |

- [fatto] Riferimenti salariali da estratti dei motori di ricerca, con le pagine bloccate alla lettura diretta: Indeed Italia indica una media di circa 32,2 k€ per lo sviluppatore Python (aggiornata al 2/10/2026); Jooble circa 2.733 €/mese [27]. **Da trattare come indicativi**: un senior con competenze di scraping costa di più, e per questo ho usato 38-42 k€ di RAL.
- **Ore del founder** [stima]:
  - circa 10 h/sett. nei primi 3 mesi: architettura dei connettori come plugin dichiarativi (selettori e flussi in configurazione, non nel codice), cruscotto delle rotture, criteri di priorità;
  - poi ≤ 4 h/sett.: revisione settimanale degli indicatori (connettori rotti, tempo di ripristino, richieste in coda, MRR), decisioni sui portali a rischio legale.
- **Coerenza con H16:** sì, l'operatore è pagato a mercato e il lavoro è misurabile.
- **Avvertenza:** sotto circa 60-70 clienti paganti l'operatore a tempo pieno non si ripaga. Nei primi 9-12 mesi serve un freelance a ore o capitale di avvio. L'investimento di 25-40 k€ della nota è sottostimato se include 12 mesi di operatore: realisticamente **55-75 k€** fino al pareggio [stima].

---

## 6. Conflitto con il lavoro

- **Somiglianza:**
  - il datore fa scraping per istituti finanziari e business information provider;
  - qui lo scraping è il motore del prodotto, ma il prodotto è un software di inventario per negozi;
  - i dati sono **del cliente** (i suoi prezzi d'acquisto e la disponibilità sul suo account presso il grossista) e non vengono rivenduti a terzi;
  - clienti, mercato e dati sono diversi da quelli del datore.
- **Lettura secondo H16:**
  - Cass. 19096/2013 guarda alla "medesima attività economica", non ai clienti;
  - "scraping per conto terzi" e "SaaS di sync dell'inventario per negozi" sono attività economiche diverse, ma la tecnica e le competenze coincidono;
  - secondo H16 il rischio è "più basso" quando lo scraping è un mezzo interno di un prodotto in un altro mercato. Qui lo scraping è quasi tutto il prodotto, quindi la penalità va presa nella parte alta di quella fascia o poco sopra.
- **Proposta:** penalità di conflitto **−2** (la nota dell'idea oggi non ne ha), da portare a −3 se il datore ha clienti nel retail o nell'e-commerce.
- **Condizioni:** autorizzazione scritta del datore prima di costituire la SRL (vedi [[I-H16-1 Autorizzazione scritta e veicolo societario]]); nessun codice, libreria o persona proveniente dal datore.
- **Rischio legale verso i grossisti (spunto favorevole, da verificare per l'Italia):**
  - [fatto] Il BGH tedesco (I ZR 224/12, 30/4/2014) ha ritenuto lo screen scraping non sleale: "allein das Hinwegsetzen über den ausdrücklichen Willen [...] genüge nicht". L'aggiramento di "technischer Schutzvorrichtungen" potrebbe invece esserlo, così come rallentare il sito [28].
  - [stima] Applicato al prodotto:
    - niente aggiramento di CAPTCHA o 2FA;
    - frequenza moderata;
    - accesso solo con le credenziali e su mandato del cliente.
    Questo resta nel perimetro più difendibile.
  - Non copre il contratto tra negozio e grossista, che va gestito con un controllo dei termini d'uso per ogni portale.

---

## 7. Esperimento di 30 giorni (soglie decise prima)

Cambiamenti rispetto alla nota:
1. si misura anche la **fattibilità tecnica e legale per portale**;
2. si usa il canale "incarichi freelance già pubblicati";
3. il preordine è un **setup a pagamento**, non 29 $.

**Settimana 1: censimento (solo nomi di aziende)**
- 60 grossisti IT e UE in 3 categorie (ferramenta e utensili, cosmetica professionale, ricambi moto e bici), ciascuno con:
  - area riservata;
  - nessun feed, CSV o API dichiarati;
  - una pagina pubblica "rivenditori" o "diventa rivenditore".
- Per ognuno si annotano: piattaforma del portale, presenza di CAPTCHA o 2FA al login, clausole dei termini d'uso sull'accesso automatizzato.
- **Soglia:** ≥ 40 grossisti che rispettano i criteri **e** ≤ 30% con 2FA, CAPTCHA o divieto esplicito. Altrimenti il segmento è troppo piccolo o troppo ostile.

**Settimane 1-3: domanda**
- 20 pagine "Sincronizza [Grossista] con Shopify / WooCommerce / PrestaShop", con lista d'attesa e un campo obbligatorio "quale grossista".
- Preordine: **setup di 149 €**, rimborsabile se il connettore non funziona entro 21 giorni.
- 300 € di Google Ads sulle query con il nome del grossista più "listino", "area riservata", "Shopify".
- Risposte utili (non spam) a 10 thread della Shopify Community in inglese e italiano con il problema "no feed".
- Risposta a 10 incarichi freelance recenti "scrape supplier portal → store" con un'offerta in abbonamento.
- **Soglie di successo:**
  - ≥ 25 iscrizioni che indicano un grossista;
  - ≥ 8 grossisti richiesti da ≥ 2 negozi;
  - **≥ 4 setup pagati** (≥ 596 €);
  - costo per iscrizione da Ads ≤ 15 €.

**Settimane 2-4: tecnica**
- 3 connettori per 3 negozi pilota (app non pubblicata), su almeno 2 piattaforme di portale diverse.
- **Soglie:**
  - costruzione ≤ 16 h per connettore;
  - ≥ 95% degli SKU abbinati automaticamente (EAN/SKU);
  - 0 errori di stock non rilevati in 14 giorni di confronto a campione con controllo manuale;
  - costo infrastrutturale misurato ≤ 10 € per cliente al mese.

**Settimana 4: grossisti**
- Contatto ai 3 grossisti dei pilota, tramite i canali aziendali, per un "via libera" o un feed ufficiale.
- **Soglia:** ≥ 1 grossista che autorizza per iscritto o si dichiara interessato a consigliare l'app; 0 diffide.

**Decisione**
- **Avanti** se passano tutte e quattro le soglie di gruppo.
- **Archiviare** se c'è anche una sola di queste condizioni:
  - < 10 iscrizioni;
  - 0 setup pagati;
  - > 30% dei portali con 2FA, CAPTCHA o divieto;
  - una diffida da un grossista.
- **Zona grigia** (iscrizioni sì, pagamenti no): un secondo ciclo di 30 giorni solo su WooCommerce e PrestaShop in Italia, dove la concorrenza delle app è minore.

Budget [stima]: 300 € di Ads, circa 40-60 h di sviluppo dei pilota (1,5-2,5 k€ se fatte da un freelance), circa 100 € di infrastruttura.

---

## 8. Effetto proposto sul punteggio v2

| Criterio | Nota | Proposta | Motivo |
|---|---|---|---|
| C1 Bisogno (10) | 4 | 4 (conferma) | Richieste esplicite trovate (§2.1) e incarichi pagati (§2.2), ma poche e quasi nessuna in italiano |
| C2 Domanda (10) | 3 | 3 | Basi di negozi grandi e misurate (§3.1), ma il segmento "senza feed" resta non misurato; installazioni rilevate di syncX in calo |
| C3 Monetizzazione (15) | 4 | 4 | Budget una tantum di 250-1.500 € verificati; ARPU proposto più alto |
| C4 Vantaggio competenze (15) | 4 | 4 | Fonti con login e mutevoli; diventa 5 (regola H17) solo con ≥ 100 connettori, non ancora dimostrato |
| C8 Debolezza incumbent (5) | 3 | **4** | L'incumbent dichiara di non fare scraping e rimanda al CSV; i nuovi entranti si fermano alle pagine pubbliche e alla prima protezione (§2.5, §4.1) |
| Altri | - | invariati | Nessuna evidenza nuova |
| **Totale lordo** | 74 | **75** | +1 da C8 |
| **Penalità** | −5 | **−7** | Si aggiunge −2 per il conflitto con il lavoro (§6), assente nella nota |
| **Totale** | 69 | **68** | |

Nota: con il posizionamento "setup più canone" il tetto a 24 mesi (C11) migliora sulla carta. Senza clienti paganti però non lo alzo.

---

## 9. Fonti (accesso 2026-11-20)

1. syncX help center, "Does Stock Sync able to scrape products from stores?": https://help.stock-sync.com/en/article/does-stock-sync-able-to-scrape-products-from-stores-15o4uqk
2. syncX nello Shopify App Store, scheda e recensioni (pagine 1-40): https://apps.shopify.com/stock-sync , https://apps.shopify.com/stock-sync/reviews?page=1 ... ?page=40
3. EagleLytics: https://apps.shopify.com/eaglelytics
4. Codigle Product Finder: https://apps.shopify.com/stock-tracker
5. SmartStoreLabs Supplier Sync (WordPress.org): https://wordpress.org/plugins/smartstorelabs-supplier-sync/
6. Shopify Community, "How can I automatically track supplier stock for my online store?": https://community.shopify.com/t/how-can-i-automatically-track-supplier-stock-for-my-online-store/272668
7. Shopify Community, "How do I sync inventory levels to a wholesaler's website": https://community.shopify.com/t/how-do-i-sync-inventory-levels-to-a-wholesalers-website/16419
8. Shopify Community, "linking shoe size availabilities from another website": https://community.shopify.com/t/need-help-linking-shoe-size-availabilities-from-another-website-to-mine/385517
9. Freelancer, "Portal Scraper & WooCommerce Sync": https://www.freelancer.de/projects/woocommerce/portal-scraper-woocommerce-sync
10. Shopify Developer Community, "Syncing Inventory from Multiple Vendors": https://community.shopify.dev/t/looking-for-suggestions-on-syncing-inventory-from-multiple-vendors/37484
11. Shopify Community, "How to Handle Constantly Changing Product Catalog": https://community.shopify.com/t/how-to-handle-constantly-changing-product-catalog/395054
12. Freelancer, "Web Scraping & Shopify Stock Sync Automation": https://www.freelancer.com/projects/web-scraping/web-scraping-shopify-stock-sync
    - 12b. https://www.freelancer.com/projects/api/webshop-supplier-data-retrieval
    - 12c. https://www.freelancer.com/projects/php/woocommerce-product-scraper-live-update
    - 12d. https://www.freelancer.co.it/projects/python/web-scraping-sync-suppliers-product
13. StoreLeads, conteggio dei negozi per paese e piattaforma:
    - https://storeleads.app/reports/shopify/IT/top-stores
    - https://storeleads.app/reports/woocommerce/IT/top-stores
    - https://storeleads.app/reports/prestashop/IT/top-stores
    - https://storeleads.app/reports/shopify/DE/top-stores
    - https://storeleads.app/reports/shopify/FR/top-stores
    - https://storeleads.app/reports/shopify/ES/top-stores
14. StoreLeads, report sull'app syncX: https://storeleads.app/reports/shopify/app/stock-sync
    - 14b. Syncee: https://storeleads.app/reports/shopify/app/syncee-1
15. Shopify Community IT, "Monitoraggio scorte": https://community.shopify.com/t/monitoraggio-scorte/323398
16. Shopify Community IT, "Sincronizzazione giacenze con servizio web": https://community.shopify.com/t/sincronizzazione-giacenze-con-servizio-web/125358
17. Shopify Community IT, "Importazione ricorrente prodotti da csv": https://community.shopify.com/t/importazione-ricorrente-prodotti-da-csv/197311
18. syncX help center, "3rd Party Download with Login": https://help.stock-sync.com/en/article/3rd-party-download-with-login-4pftet/
19. EconomyUp, Osservatorio B2b Digital Commerce & Experience del Politecnico di Milano (8/10/2025): https://www.economyup.it/retail/b2b-digital-commerce-in-crescita-ma-il-mercato-italiano-non-e-ancora-maturo/
20. Syncee: https://apps.shopify.com/syncee-1
21. Stockistly: https://apps.shopify.com/stockistly
22. SupplierSync, Everstock, Stockfeed, FlowStock, Stockfile (data di lancio e recensioni):
    - https://apps.shopify.com/suppliersync-stock-oversell
    - https://apps.shopify.com/everstock
    - https://apps.shopify.com/stockfeed
    - https://apps.shopify.com/flowstock-1
    - https://apps.shopify.com/stockfile
23. Hetzner Cloud: https://www.hetzner.com/cloud/
24. Browserless, prezzi: https://www.browserless.io/pricing
25. Zyte, prezzi: https://www.zyte.com/pricing/
26. Bright Data, prezzi: https://brightdata.com/pricing/proxy-network/residential-proxies
27. Stipendi sviluppatore Python in Italia (estratti dei motori di ricerca; pagine bloccate alla lettura diretta):
    - https://it.indeed.com/career/sviluppatore-python/salaries
    - https://it.jooble.org/salary/sviluppatore-python
28. LTO, BGH I ZR 224/12 sullo screen scraping: https://www.lto.de/recht/hintergruende/h/bgh-urteil-izr22412-screen-scraping-flugdaten-automatisiert-auslesen-ryanair-reiseportal
29. Shopify, requisiti dell'App Store (credenziali di test anche per le piattaforme di terzi): https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements
30. Shopify Developer Community, connettori verso marketplace e requisito 1.1.6 (rischio di policy, riguarda i flussi in uscita): https://community.shopify.dev/t/are-third-party-marketplace-feed-apps-no-longer-allowed-in-the-shopify-app-store/33955

Ricerche web usate: 17
