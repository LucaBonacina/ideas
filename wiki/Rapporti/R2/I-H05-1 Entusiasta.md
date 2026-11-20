---
tipo: rapporto
idea: I-H05-1
ruolo: Entusiasta
data: 2026-11-20
tags: [rapporto, R2]
---
# I-H05-1 — Micro-SaaS B2B trascurato con leva di prezzo — Entusiasta (R2)

## 1. Sintesi e posizione finale
- **I target sono elencabili oggi, con API pubbliche e in poche ore.** Le misure sono mie, fatte il 2026-11-20 su dati pubblici e aggregati:
  - WordPress.org: 1.708 plugin con ≥ 1.000 installazioni attive senza aggiornamenti da oltre 12 mesi; 510 se si sale a ≥ 5.000 installazioni.
  - Atlassian Marketplace: 173 app cloud **a pagamento** con ≥ 50 installazioni e nessuna release da 12 mesi. 128 di queste sono app Connect.
  - Shopify App Store: stimo circa 4.600 app con ≥ 50 recensioni, di cui circa il 10% senza recensioni negli ultimi 6 mesi.
  Il "deal flow" fuori dai marketplace di compravendita esiste nell'ordine delle **centinaia di target qualificati**, non delle decine.
- **Clienti che restano anche con un prodotto abbandonato:** ci sono prove testuali, per esempio "I don't know of an alternative so we stick with it" e licenze Pro acquistate per plugin poi abbandonati. È lock-in reale, ma è anche segno di clienti scontenti.
- **Novità forte: un'ondata di venditori forzati su Atlassian.** Il supporto di Connect finisce il 31/01/2027 e i Data Center vanno in fine vita il 28/03/2029. Chi non vuole migrare a Forge ha un motivo concreto per vendere ora. È l'angolo migliore per questo profilo tecnico.
- **Due prove contrarie importanti.**
  - (1) Su Shopify i prezzi degli abbonamenti esistenti **non si possono aumentare d'ufficio**: la leva di prezzo vale solo sui nuovi clienti.
  - (2) Gli aumenti di prezzo documentati su asset piccoli rendono meno del previsto. WP Fusion ha alzato i prezzi del 20% e ha ottenuto +10% di valore medio dell'ordine, ma −9,4% di ricavo dai nuovi clienti.
- **Economia.** Con un operatore pagato a mercato (H16) servono circa 110-140 k€ di SDE di portafoglio per lasciare 50 k€ al founder. A 3-3,5x SDE questo vuol dire 350-500 k€ di prezzo. È più del capitale indicato nella nota (150-300 k€).

**Posizione finale: l'idea regge e anzi si rafforza su sourcing ed elencabilità, ma va ristretta.** Il fuoco va su app Atlassian Connect e plugin WordPress con Pro, dove la leva di prezzo e la competenza tecnica (migrazione Connect→Forge) pesano davvero. Shopify è solo secondario. Il capitale reale per il "successo" è circa 1,5x quello stimato in R1.

## 2. Le sei sezioni del focus

### 2.1 Prove di domanda reale

#### (a) I clienti restano e chiedono manutenzione
- **[fatto]** Una recensione su Shopify (app Click & Drop, 89 recensioni, valutazione 1,6) dice: "It seems this app has been abandoned. At least it states it's not updated and is now unsupported. [...] I don't know of an alternative so we stick with it" [1]. L'app è di un grande operatore logistico, quindi non è un target comprabile. Mostra però il lock-in delle integrazioni operative.
- **[fatto]** Un'altra recensione su Shopify (GrowthHero, novembre 2025) dice: "Once upon a time this app was useful. More recently, they have virtually no support [...] It has been abandoned". Chi scrive dichiara "Over 3 years using the app" [2]. Il cliente resta per anni, poi se ne va quando il servizio si rompe. È un rischio da comprare *prima* della rottura.
- **[fatto]** Su WordPress.org, Enhanced Media Library (maggio 2025): "I was very satisfied with this plugin for years [...] I purchased a lifetime PRO license. Now it's useless. No support, no updates, official site down" [3].
  - Dall'API pubblica di WordPress.org il plugin ha ancora **60.000 installazioni attive** e l'ultimo aggiornamento è del 15/07/2024 [4].
  - È l'archetipo del target: base installata ampia, Pro esistente, manutenzione ferma.
- **[fatto]** CHP Ads Block Detector (luglio 2024): "I didn't expect that I buy a plugin and is abandoned. No updates, creating tickets doesn't work" [5]. Widget Builder for Elementor (2020): "Is there any hope of reviving this" [6].
- **[fatto]** La politica di Shopify prevede 9 mesi per adeguarsi ai cambi di API, poi l'app diventa "unsupported" ma spesso continua a fatturare [7]. Quindi esiste una popolazione di app con ricavi e manutenzione a rischio.
- **[stima]** Le recensioni provano che i clienti *restano finché funziona*, non che pagherebbero di più. Il valore sta nel comprare prima che la rottura faccia scappare i clienti.

#### (b) I venditori esistono e accettano offerte
- **[fatto, estratti di motore di ricerca: le pagine di Acquire sono JavaScript e non le ho lette direttamente]** Su Acquire.com ci sono annunci di app Shopify a più livelli [8]:
  - un'app di sconti chiede 248 k$ con circa 41 k$ di profitto annuo (circa 6x);
  - un'app di opzioni prodotto chiede 540 k$ con 112 k$ di ARR;
  - un'app di verifica dell'età chiede 100 k$ con 3 k$ di MRR.
  Sono prezzi richiesti, non prezzi di chiusura.
- **[fatto]** Acquire dichiara "an average of 10 offers per listing" e "2k+ closed acquisitions". È un dato dell'azienda stessa [9].
- **[fatto]** Barn2 (ottobre 2026) ha esaminato 28 annunci pubblici di app Shopify in vendita.
  - In 4 l'ARR dichiarato supera di oltre il 25% quello ricostruito, e nel caso peggiore del 61%.
  - "Not one listing reports on new customer revenue separately from total revenue" [10].
  È un argomento a favore della due diligence tecnica del founder, e un avvertimento sui marketplace.
- **[fatto]** Vendite dirette documentate:
  - un plugin WordPress (Social Link Pages) è passato a un consulente dopo un annuncio in community, a circa 3.000 $ [11];
  - Shop Circle ha comprato Order Tagger e Customer Tagger a "3-4x ARR" (dicembre 2021) [12].
  Non ho trovato un resoconto in prima persona di acquisti *off-market via cold email* di app o plugin: **non trovato**.
- **[fatto]** Concorrenza tra acquirenti:
  - Shop Circle/Circeus ha raccolto 60 M$ di Series B nel 2025 e ha una linea di credito da 100 M$ (dicembre 2025), con 16 acquisizioni [13].
  - Un'azienda vende già su Apify uno scraper di "Shopify app developer leads" [12b].
  Il sourcing via scraping **non è esclusivo**.
- **[stima]** Gli aggregatori finanziati puntano ad asset da centinaia di k$ di ARR in su. Sotto i 50 k$ di SDE la concorrenza tra acquirenti è più rada: è la fascia dell'idea.

#### Nuovo motivo di vendita forzata (Atlassian)
- **[fatto]** Supporto di Connect esteso fino al 31/01/2027. Dopo quella data Atlassian correggerà solo le vulnerabilità critiche, e le deprecazioni di Connect arriveranno "with little notice" [14].
- **[fatto]** Calendario dei Data Center [15]:
  - niente nuovi acquisti di app DC dal 30/03/2026;
  - niente espansioni dal 30/03/2028;
  - fine vita il 28/03/2029.
- **[stima]** Uno sviluppatore solitario con un'app Connect a pagamento deve scegliere entro pochi mesi tra riscrivere su Forge e vendere. Un acquirente capace di fare la migrazione ha un argomento di prezzo forte, e quella migrazione è il tipo di lavoro in cui il profilo eccelle.

### 2.2 Clienti (target) elencabili

Tutte le misure sono mie, fatte il 2026-11-20 su endpoint pubblici. Ho raccolto solo campi aggregati del prodotto (installazioni, date, numero di recensioni), senza nomi di sviluppatori né contatti.

**WordPress.org (API `plugins/info/1.2`, 75.689 plugin; ho scaricato i primi 14.666 per popolarità) [4].** Righe in grassetto: target più probabili.

| Installazioni attive | Plugin | Fermi da >12 mesi | Fermi da >24 mesi | Fermi >12 mesi con homepage esterna (proxy di un Pro) | Fermi >12 mesi con ≥ 50 valutazioni |
|---|---|---|---|---|---|
| ≥ 1.000 | 6.873 | 1.708 | 1.219 | 1.103 | 175 |
| **≥ 5.000** | 3.195 | **510** | 350 | **338** | 124 |
| ≥ 10.000 | 2.152 | 248 | 156 | 166 | 91 |
| ≥ 50.000 | 779 | 43 | 27 | 32 | 34 |

- **[stima]** Il proxy "homepage esterna" sovrastima i plugin con un Pro venduto. Ipotizzo che il 30-50% abbia davvero un Pro a pagamento. Restano **circa 100-170 target** tra 5.000 e oltre installazioni.

**Atlassian Marketplace (API REST v2, filtro cloud + a pagamento): 5.462 app [16].** Riga in grassetto: segmento centrale.

| Installazioni | App | Nessuna release da >12 mesi | da >24 mesi | Ferme >12 mesi e su Connect |
|---|---|---|---|---|
| ≥ 50 | 1.401 | 173 | 98 | 128 |
| **≥ 200** | 758 | **55** | 27 | **37** |
| ≥ 1.000 | 254 | 3 | 2 | 1 |

- **[fatto]** 5.081 app su 5.462 usano il pagamento gestito da Atlassian: i ricavi passano dalla piattaforma e sono verificabili in due diligence.
- **[stima]** Un'app Atlassian con 200 installazioni a 2-5 $ per utente al mese su istanze piccole può fare 20-80 k$ all'anno. Il segmento ≥ 200 installazioni e fermo (55 app) è quello giusto per SDE ≥ 30 k€. Non ho dati di ricavo per app: **non trovato**.

**Shopify App Store.**
- **[fatto]** La sitemap inglese elenca **30.794 schede** [17]. In un campione casuale di 400, tutte erano schede attive.
  - Questo è in conflitto con le 4.438 app di Barn2 [10] e con le stime di 12-17 mila delle fonti secondarie [18]. La definizione di Barn2 non è dichiarata.
  - Nel campione, 141 app su 400 sono state lanciate nel 2026: c'è un'esplosione di app nuove.
- **[fatto, campione di 400]**
  - 60 app (15%) hanno ≥ 50 recensioni; 58 di queste sono state lanciate da più di 3 anni.
  - Tra le 60, 6 (10%) non ricevono recensioni da oltre 6 mesi e 3 da oltre 12 mesi.
  - 30 su 60 non hanno risposte dello sviluppatore nelle ultime recensioni.
- **[stima]** Circa **4.600 app con ≥ 50 recensioni** (intervallo al 95%: 3.500-5.700) e circa **460 "spente"** (intervallo largo: 170-950).
- **Limite:** Shopify non pubblica la data dell'ultimo aggiornamento, quindi il filtro "ultimo aggiornamento > 12 mesi" della nota **non è osservabile**. Servono proxy: data dell'ultima recensione, risposte dello sviluppatore, badge "unsupported".

**HubSpot:** non misurato.

**Sintesi [stima].** Su tre store ci sono circa 700-1.000 target "trascurati e con base clienti" (WordPress circa 340, Atlassian circa 170, Shopify circa 460). Con un tasso di risposta del 5-10% e una quota di deal sensati del 10-20%, si ottengono **circa 5-20 trattative concrete per ciclo di contatto**. Bastano per 1-3 acquisti.

### 2.3 Prezzi ed economia unitaria

**Multipli**
- **[fatto]** FE International (25/08/2026): "Businesses under $1M ARR are usually priced on seller discretionary earnings at 2.5x to 4x SDE" e "Below about $1M ARR, a buyer is largely purchasing a job" [19].
- **[fatto]** Shop Circle ha comprato a 3-4x ARR [12]; un annuncio Flippa di plugin dichiara 2,9x il profitto [11b].
- **[fatto]** Mediana di Acquire 3,9x ed Empire Flippers con il 68,1% del prezzo pagato alla firma: già nella nota, verificati in R1.

**Costi della piattaforma**
- **[fatto]** Shopify: 0% di revenue share sul primo milione di dollari *lifetime* (dal 2025), 15% oltre; soglia calcolata su tutti gli "Associated Developer Accounts" [20].
- La pagina non dice nulla su come si conta la soglia dopo il trasferimento di un'app: **non trovato**.
- **[stima]** Su app sotto 1 M$ la quota di Shopify è quasi nulla.

**Costi di due diligence**
- **[fatto]** Revisione del codice da freelance: 500-2.000 $ (dato di un broker). Quality of earnings a prezzo fisso: 6-12 k$ (listino di un fornitore). Due diligence completa sotto 10 M$: 25-75 k$ (blog di fornitori, da prendere con cautela) [21].
- **[stima]** Per un deal da 100-200 k€ servono 3-8 k€ in tutto:
  - revisione del codice fatta dal founder o dal suo operatore;
  - verifica dei ricavi su Stripe, Partner Dashboard o report Atlassian in sola lettura;
  - legale e notaio in Italia per la cessione degli asset: 2-5 k€.
  A questo si aggiungono circa 1-2 k€ per ogni deal abbandonato.

**Leva di prezzo: casi documentati e distribuzione**

| Caso | Prezzo | Risultato | Natura della fonte |
|---|---|---|---|
| Baremetrics (2022) [22] | prezzi x2,5 ("raised prices by 250%"), senza mantenere i vecchi prezzi | MRR "+86% practically overnight"; churn utenti al 4-6,9% nei 7 mesi dopo | Dichiarato dall'azienda |
| WP Fusion (2024) [23] | +20%, vecchi clienti ai vecchi prezzi | AOV +10%; nuovi clienti −20%; ricavo dai nuovi −9,4%; upgrade −39% | Dichiarato dall'azienda; **controevidenza** |
| Robokiller / Bending Spoons (2024) [24] | +125% | Ricavo +28% anno su anno, download −50% e oltre | Stima Appfigures |
| Skaling Ventures, micro-SaaS acquisito (2024) [25] | Revisione dei prezzi | ARPU +12%; churn mensile da 1,5% a 0,83%; circa 20 k$ di MRR stabile | Dichiarato da un acquirente |
| Meetup / Bending Spoons (nella nota) | Revisione dei prezzi | Ricavo mobile da circa 55 a 291 k$ al mese | Stima Appfigures |

- **[stima]** Distribuzione realistica su asset piccoli: aumento di listino del 20-40% → **ricavo netto +5-20%** a 12 mesi. Il caso peggiore è WP Fusion (circa −5/−10% sui nuovi).
- **[fatto] Vincolo su Shopify.** Un membro dello staff Shopify (15/10/2025): "You currently can not update existing recurring subscriptions with new prices"; "Current users won't see a price change as they will keep their existing subscriptions" [26]. La migrazione a Shopify App Pricing (settembre 2026) non è un meccanismo generale di aumento [27].
- Su Shopify, quindi, la leva vale solo sui nuovi clienti oppure con una nuova approvazione del commerciante, che genera churn. Su WordPress (licenze proprie) e su Atlassian l'aumento al rinnovo è possibile. Le regole di preavviso di Atlassian sono **da verificare**.

**Churn dopo il passaggio di proprietà**
- **[fatto]** Non ho trovato nessun dataset aggregato. Ci sono solo aneddoti: Skaling Ventures ha visto il churn migliorare dopo l'acquisto [25]; FOMO, da un riassunto secondario non letto direttamente, era al 19% al mese all'acquisto, è sceso all'8% in 3 mesi ed è poi rimasto sotto il 7%.
- **[fatto]** Barn2: una tipica app Shopify perde circa 4 negozi ogni 10 che acquisisce in un anno [10].

**Conto economico di portafoglio [stima, con operatore a mercato secondo H16]**

| Voce | Scenario base | Scenario buono |
|---|---|---|
| SDE acquistato (2-3 asset) | 110 k€ | 140 k€ |
| Prezzo (3,2x) | 350 k€ (240 k€ alla firma, 110 k€ differiti) | 450 k€ |
| Aumento di SDE da prezzi e retention | +10 k€ | +25 k€ |
| Operatore (0,6-1 FTE, H16 60-75 k€/anno pieno) | −45 k€ | −65 k€ |
| Infrastruttura, strumenti, contabile, SRL | −12 k€ | −15 k€ |
| **Margine per il founder** | **circa 53 k€** | **circa 85 k€** |
| Rientro del capitale | circa 6,6 anni | circa 5,3 anni |

Il "successo" (50 k€) è raggiungibile solo con circa 110 k€ o più di SDE acquistato. È circa il doppio della scala implicita nella nota, che metteva l'operatore a 15-25 k€, sotto il mercato.

### 2.4 Piano di delega

| Ruolo | Chi | Costo annuo [stima] | Note |
|---|---|---|---|
| Founder | Criteri, approvazione dei deal, prezzi, revisione tecnica dei deal finali | — | 8-10 h/sett. per 2-3 mesi di ricerca, poi 2-4 h/sett. |
| Analista/searcher | Freelance: liste dagli store (gli script sono banali: API pubbliche), primo contatto, raccolta delle metriche | 6-12 k€ (a progetto) | Solo nella fase di ricerca |
| Sviluppatore-operatore | Dipendente o collaboratore a mercato: manutenzione, migrazione Connect→Forge, rilasci, supporto di secondo livello | 45-65 k€ (0,6-1 FTE; H16: 60-75 k€ a tempo pieno) | Più una quota utili del 10-15% come incentivo |
| Supporto di primo livello | Agente AI più 1 h al giorno di un assistente | 8-12 k€ | |
| Contabile e legale | Studio | 4-8 k€ | Cessione di asset; avviamento in 18 anni |
| **Totale a regime** | | **circa 60-90 k€** | Coerente con H16 solo se il portafoglio supera circa 110 k€ di SDE |

- **[stima]** La migrazione Connect→Forge di un'app media richiede settimane-uomo di uno sviluppatore senior, una tantum. L'operatore la può fare. Il founder la supervisiona solo nelle scelte architetturali.

### 2.5 Conflitto con il lavoro
- **[stima]** Somiglianza bassa: si comprano e gestiscono software B2B per merchant, team Jira o siti WordPress. Non si vendono dati né servizi di scraping a istituti finanziari o a business information provider.
  - Lo scraping è solo uno strumento interno di sourcing, e su API pubbliche.
  - Secondo H16 la penalità è **0/−3** se si evita di comprare asset che vendono dati aziendali, lead B2B o scraping (filtro esplicito).
- Lettura di Cass. 19096/2013 secondo H16: conta la "medesima attività economica" del datore. Un portafoglio di plugin e app non lo è.
- **Rischio residuo.** Comprare un'app di "data enrichment" o di "competitor price scraping", come alcune in vendita su Acquire [8], riaprirebbe il conflitto: va escluso nei criteri.
- Restano validi i prerequisiti di H16: comunicazione o autorizzazione scritta del datore prima di costituire il veicolo; nessun ex collega come operatore senza verifica; tempo, codice e dispositivi separati.

### 2.6 Esperimento di 30 giorni (versione affinata)
**Obiettivo:** misurare in 30 giorni, senza impegnare capitale, se il sourcing fuori dai marketplace di compravendita produce deal migliori di quelli sui marketplace. Le soglie sono decise ora.

**Settimana 1 — liste (circa 4 h del founder più un freelance).**
- Lista A: WordPress.org, ≥ 5.000 installazioni, fermi da oltre 12 mesi, con un Pro verificato a mano. Obiettivo: ≥ 80 target.
- Lista B: Atlassian, cloud a pagamento, ≥ 100 installazioni, nessuna release da oltre 9 mesi, con priorità alle app Connect. Obiettivo: ≥ 60 target.
- Lista C: Shopify, ≥ 50 recensioni, a pagamento, ultima recensione da oltre 6 mesi o nessuna risposta dello sviluppatore. Obiettivo: ≥ 60 target.
- Esclusioni: prodotti di dati aziendali, lead o scraping (conflitto); prodotti con più del 50% dei clienti da Google organico (filtro della nota).
- In parallelo, schedatura di 30 annunci su Acquire, Microns o Flippa sotto 300 k$, con multiplo richiesto e qualità delle metriche.

**Settimane 2-3 — contatti.**
- Almeno 150 contatti tramite i canali aziendali pubblici del prodotto (form o email di supporto), con un messaggio breve e un'offerta di acquisto o di partnership per la migrazione Forge.
- Si registra la base giuridica (legittimo interesse B2B). Nessuna raccolta di dati personali oltre al canale pubblico di contatto.

**Settimana 4 — metriche in sola lettura dai migliori 5:** Partner Dashboard, report vendor di Atlassian, Stripe/Freemius.

**Soglie di successo (tutte necessarie):**
1. Tasso di risposta ≥ 8% (≥ 12 risposte su 150).
2. ≥ 5 venditori che condividono metriche verificabili.
3. ≥ 2 venditori con SDE ≥ 30 k€ disposti a trattare a ≤ 3,5x, di cui ≥ 1 con pagamento differito ≥ 20%.
4. ≥ 1 asset con churn di ricavo ≤ 3% al mese negli ultimi 6 mesi e meno del 50% dei clienti da Google organico.
5. Multiplo richiesto off-market (mediana) ≤ mediana degli annunci pubblici schedati meno 0,5x.
6. Ore del founder ≤ 25 nel mese.

**Soglie di archiviazione:** tasso di risposta < 4%, oppure nessun venditore ≤ 4x, oppure il punto 5 fallito (cioè lo scraping non dà un vantaggio di prezzo).

**Costo:** 1-2 k€ (freelance e strumenti).

## 3. Effetto proposto sul punteggio v2

| Criterio | R1 | Proposta | Motivo |
|---|---|---|---|
| C2 Domanda | 3 | 3 (invariato) | Universo elencabile misurato: centinaia di target qualificati. Sufficiente, ma non ampio |
| C3 Monetizzazione | 4 | 4, ristretto a WordPress e Atlassian | La leva di prezzo è bloccata sugli abbonamenti Shopify esistenti [26]; il caso WP Fusion è contrario [23]. Se il portafoglio resta su Shopify: 3 |
| C4 Vantaggio delle competenze | 3 | 3 (invariato) | Lo scraping degli store è banale: le API sono pubbliche e le liste mi hanno richiesto meno di un'ora, quindi non è un fossato (H17). La due diligence tecnica e la migrazione Connect→Forge sono invece un vantaggio reale |
| C8 Debolezza degli incumbent | 3 | 4 | I venditori sono forzati da Connect EOS e DC EOL [14][15]; la fascia sotto 50 k€ di SDE è poco presidiata dagli aggregatori finanziati [13] |
| C10 Delegabilità | 2 | 2 (invariato) | Delegabile solo con un operatore a mercato da 45-65 k€ |
| C11 Tetto di ricavo | 3 | 3 (invariato) | Il tetto dipende dal capitale |

Penalità:
- da −6 a **−7**: capitale necessario circa 1,5x quello stimato (350-450 k€), più il rischio piattaforma di Connect per chi non migra;
- conflitto: 0/−3, solo se non si filtrano gli asset di dati.

Punteggio stimato: (40 + 30 + 60 + 45 + 60 + 10 + 15 + 20 + 20 + 20 + 15) / 5 = 335 / 5 = 67, meno 7 di penalità = **circa 60** (invariato), ma con un focus più netto.

## 4. Fonti
Tutte accedute il 2026-11-20.
1. Shopify App Store, recensioni di Click & Drop: https://apps.shopify.com/reviews/1135510
2. Shopify App Store, recensioni di GrowthHero: https://apps.shopify.com/reviews/701360
3. WordPress.org, recensione di Enhanced Media Library: https://wordpress.org/support/topic/disappointed-once-great-now-abandoned/
4. API di WordPress.org (query `browse=popular`, 60 pagine × 250): https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[browse]=popular — elaborazione propria
5. WordPress.org, recensione di CHP Ads Block Detector: https://wordpress.org/support/topic/have-bought-pro-but-this-plugin-is-abandoned/
6. WordPress.org, thread su Widget Builder for Elementor: https://wordpress.org/support/topic/paid-for-the-pro-seems-theyve-abandoned-the-plugin/
7. Shopify Help, app non supportate: https://help.shopify.com/manual/apps/update-apps (estratto di motore di ricerca)
8. Annunci Acquire.com, app Shopify (estratti di motore di ricerca; pagine JavaScript non leggibili), per esempio https://app.acquire.com/startup/moplldz7q0-shopify-discounts-app-166-growth-68k-arr-5700-mrr-230-merchants
9. Acquire.com, Shopify apps for sale: https://acquire.com/shopify-apps-for-sale/
10. Barn2, "The average Shopify app is doing worse than you think" (19/10/2026): https://barn2.com/blog/shopify-app-store-saturation/
11. WP Tavern, vendita di Social Link Pages: https://wptavern.com/matthaus-klute-acquires-social-link-pages-plugin (estratto); 11b. annunci Flippa di plugin, per esempio https://flippa.com/11866690 (estratto; Flippa risponde 403 alle letture automatiche)
12. They Got Acquired, Order Tagger e Shop Circle: https://theygotacquired.com/saas/order-tagger-customer-tagger-acquired-by-shop-circle/ (estratto); 12b. Apify, Shopify app developer leads scraper: https://apify.com/automation-lab/shopify-app-developer-leads-scraper (estratto)
13. Tech.eu, linea di credito Shop Circle (03/12/2025): https://tech.eu/2025/12/03/shop-circle-secures-100m-credit-facility-as-it-positions-itself-as-europes-alternative-to-vc-funding/; TechCrunch (26/02/2025): https://techcrunch.com/2025/02/26/shop-circle-raises-60m-to-encircle-ecommerce-with-an-app-suite (estratti)
14. Atlassian Developer Community, "Connect End of Support extended to January 31, 2027": https://community.developer.atlassian.com/t/connect-end-of-support-extended-to-january-31-2027/102002 (estratto)
15. Atlassian, Data Center end of life: https://www.atlassian.com/licensing/data-center-end-of-life (estratto)
16. API REST di Atlassian Marketplace (`/rest/2/addons?hosting=cloud&cost=paid&withVersion=true`, 5.462 app): https://marketplace.atlassian.com/rest/2/addons — elaborazione propria
17. Sitemap e schede di Shopify App Store (campione casuale di 400 schede e 60 pagine di recensioni): https://apps.shopify.com/sitemap_apps_en.xml — elaborazione propria
18. Fonti secondarie sul numero di app Shopify, per esempio https://adsx.com/blog/shopify-app-store-statistics-2026 (estratto)
19. FE International, SaaS Valuation Multiples (25/08/2026): https://www.feinternational.com/blog/saas-valuation-multiples
20. Shopify.dev, revenue share: https://shopify.dev/docs/apps/launch/distribution/revenue-share
21. Peony, costi di due diligence (blog di un fornitore): https://www.peony.ink/blog/due-diligence-cost-breakdown; Exitbid, checklist: https://exitbid.io/blog/saas-due-diligence-checklist (estratti)
22. Baremetrics, "We raised prices by 250%": https://baremetrics.com/blog/we-raised-prices-by-250-the-good-the-bad-and-what-we-would-have-done-differently
23. WP Fusion, "Retrospective: We raised prices by 20%" (24/09/2024): https://wpfusion.com/business/retrospective-we-raised-prices-by-20-in-june-what-happened/
24. Appfigures, Robokiller (15/11/2024): https://appfigures.com/resources/insights/20241115/amp?f=4
25. Skaling Ventures, Year One (20/04/2024): https://skalingventures.substack.com/p/achievements-and-learning-lessons
26. Shopify Developer Community, "How to grandfather users" (ottobre 2025): https://community.shopify.dev/t/how-to-grandfather-users/23749
27. Shopify.dev changelog, Move existing subscriptions to Shopify App Pricing: https://shopify.dev/changelog/move-existing-subscriptions-to-shopify-app-pricing (estratto)
28. WordPress.org, thread su Ajax Edit Comments dopo la vendita (reazioni all'aumento di prezzo): https://wordpress.org/support/topic/604365

Ricerche web usate: 16
