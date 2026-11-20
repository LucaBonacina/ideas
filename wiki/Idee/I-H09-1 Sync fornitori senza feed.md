---
tipo: idea
id: I-H09-1
ipotesi: "[[H09 Estensioni e plugin su marketplace]]"
punteggio_v2: 49
punteggio_v2_r1: 69
verdetto_r2: "ridimensionata: solo esperimento con criteri di arresto, nessun investimento prima"
modello_ricavo: "abbonamento mensile tramite fatturazione dell'app store (Shopify, poi WooCommerce e PrestaShop)"
tempo_founder_h_sett: 4 # circa 10 nei primi 3 mesi
investimento_iniziale_eur: "55-75 k€ dopo il secondo giro (25-40 k€ al primo) [stima]"
tags: [idea, S3, R2]
---
# I-H09-1 — Sync fornitori senza feed

> **Superata in parte dal secondo giro.** Punteggio 69 → **49** (50 in [[Classifica]]), probabilità ~5%. Valgono la sezione "Approfondimento (round 2)" e il suo esperimento; le cifre del primo giro qui sotto restano per traccia. Cambiamenti principali: investimento 55-75 k€ (non 25-40 k€); i grossisti non sono un canale di vendita; delegabilità ridotta; i termini d'uso dei portali vietano i bot.

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
App per Shopify (poi WooCommerce e PrestaShop) che si collega ai portali web B2B dei grossisti che non offrono feed né API, usando le credenziali del negozio. Sincronizza stock, prezzi con ricarico e nuovi codici da una libreria di connettori mantenuti.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** negozi online e dropshipper che comprano da grossisti dotati solo di un portale B2B. Oggi aggiornano a mano disponibilità e prezzi, e vendono prodotti esauriti.
- **Prezzi di riferimento** [fatto, pagine lette il 2026-11-20]:
  - syncX: 7-300 $/mese, 946 recensioni, solo file e feed.
  - Syncee: 39,99-99,99 $/mese, 561 recensioni.
  - Stockistly: 20-120 $/mese.
  - EagleLytics: 39-139 $/mese, 2 recensioni, legge solo le vetrine pubbliche.
- **Prezzo proposto** [stima]: 29 / 79 / 199 $/mese, in base al numero di fornitori e alla frequenza di aggiornamento.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Ricerca nello Shopify App Store** ("supplier sync", "inventory sync", "[nome grossista] Shopify"), con la scheda localizzata in IT, ES, DE e FR.
- **Una pagina web per ogni grossista coperto** ("sincronizza [Grossista X] con Shopify"): coda lunga SEO con intento d'acquisto.
- **Connettori su richiesta per i primi 20 clienti**, in cambio di una recensione.
- **Grossisti stessi come canale** [stima]: l'app diventa di fatto il loro feed, e possono consigliarla ai propri rivenditori.

## Perché queste competenze danno un vantaggio
- Il prodotto è una libreria di connettori robusti: login B2B, gestione anti-bot, mappatura EAN/SKU, varianti, monitoraggio delle rotture.
- Copiare l'interfaccia richiede una settimana; copiare e mantenere centinaia di connettori no.
- È la competenza distintiva del founder, e il lavoro è misurabile (connettori rotti, tempi di ripristino), quindi delegabile.

## Concorrenti
- syncX, Syncee, Stockeo, Stockistly (file e feed).
- EagleLytics (vetrine pubbliche, nato il 12/10/2026).
- L'ondata 2026 di cloni (Everstock, FlowStock, Stockfeed).
- Nessun concorrente trovato che gestisca portali con login.

## Rischi principali (e quello che la ucciderebbe)
- **Rischio che la ucciderebbe:** i grossisti bloccano l'accesso automatizzato o lo vietano nei termini d'uso dei portali, con contestazioni ai negozi clienti. Mitigazioni: accesso con le credenziali del cliente, frequenza moderata, accordi diretti con i grossisti. Va fatta una verifica legale caso per caso.
- **Crescita lenta:** le app giovani incassano in mediana circa 190 $/mese (Barn2), quindi servono 12-24 mesi.
- **Costo di manutenzione** dei connettori superiore al previsto.
- **Shopify** che cambia le regole o lancia una funzione nativa di sync dai fornitori.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Ruoli:**
  - uno sviluppatore part-time per i connettori e la manutenzione;
  - una persona part-time per supporto, onboarding e richiesta recensioni, anche multilingue con AI.
- **Founder:** definisce l'architettura dei connettori e il loro monitoraggio, decide le priorità. Circa 10 ore/settimana nei primi 3 mesi, poi ≤ 4 [stima].

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno/dolore (10) | 4 | Domanda adiacente provata: syncX con 946 recensioni e Syncee con 561 recensioni risolvono lo stesso dolore per i fornitori con feed | apps.shopify.com/stock-sync, /syncee-1 |
| C2 Domanda (10) | 3 | Il segmento "senza feed" non è misurato; le installazioni dei leader sono adiacenti | idem |
| C3 Monetizzazione (15) | 4 | Pagatori e prezzi provati da 7 a 300 $/mese; fatturazione integrata | idem; /eaglelytics |
| C4 Vantaggio competenze (15) | 4 | Lo scraping di portali con login e la manutenzione dei connettori sono il prodotto; EagleLytics copre solo le vetrine pubbliche | apps.shopify.com/eaglelytics |
| C5 Distribuzione senza pubblico (15) | 4 | Ricerca nello store integrata e commissione 0% fino a 1 M$; le recensioni però si accumulano lentamente | shopify.dev revenue-share; Barn2 |
| C6 Resistenza all'AI generalista (5) | 4 | Dati freschi e flusso di lavoro integrato nel negozio | [stima] |
| C7 Difendibilità (5) | 4 | La libreria di connettori cresce nel tempo; cambiare fornitore di sync costa al negozio | [stima] |
| C8 Debolezza degli incumbent (5) | 3 | Incumbent forti su file e feed, assenti sui portali con login | rapporti S3 |
| C9 Tempo al primo euro (5) | 4 | MVP con 1-3 connettori e revisione dell'app in circa 1-2 mesi | [stima] |
| C10 Delegabilità (10) | 3 | Lavoro ripetitivo e misurabile, ma serve un team con competenze di scraping | [stima] |
| C11 Tetto a 24 mesi (5) | 3 | 100-300 k$/anno plausibili; oltre 500 k$ improbabili in 24 mesi | Barn2 (effetto età) |
| **Totale lordo** | **74** | | |
| Penalità | −5 | −3 dipendenza da Shopify (mitigabile con il multi-piattaforma); −2 rischio legato ai termini d'uso dei portali | |
| **Totale** | **69** | | |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Censimento (settimana 1):** 40 grossisti italiani e UE con solo un portale B2B, in 3 categorie (ferramenta, cosmetica, ricambi moto).
2. **Pagine e annunci (settimane 1-3):**
   - 20 pagine "sincronizza [Grossista] con Shopify/WooCommerce", con lista d'attesa e preordine a 29 $ per il primo mese;
   - 300 € di Google Ads sulle query con il nome del grossista;
   - messaggi nei gruppi e forum italiani di e-commerce e nella community Shopify.
3. **Prototipo (settimane 2-4):** un connettore funzionante, come app non pubblicata, per 3 negozi pilota.

**Soglie fissate prima:**
- **Successo:** ≥ 25 iscrizioni che indicano un grossista, **e** ≥ 8 grossisti richiesti da almeno 2 negozi, **e** ≥ 3 preordini pagati.
- **Fallimento:** < 10 iscrizioni oppure 0 preordini → archiviare.

## Fonti
Accesso 2026-11-20.
- https://apps.shopify.com/stock-sync
- https://apps.shopify.com/eaglelytics
- https://apps.shopify.com/syncee-1
- https://apps.shopify.com/stockistly
- https://barn2.com/blog/shopify-app-store-saturation/
- https://shopify.dev/docs/apps/launch/distribution/revenue-share
- [[H09 Entusiasta]] · [[H09 Bucatore]]

## Approfondimento (round 2)
Rapporti integrali: [[I-H09-1 Entusiasta]] (17 ricerche web) e [[I-H09-1 Bucatore]] (18 ricerche web), in `wiki/Rapporti/R2/`.

### Sintesi dell'Entusiasta
- **La lacuna è dichiarata dall'incumbent.** syncX (946 recensioni) scrive di non fare scraping e, se il fornitore non ha un feed, consiglia di chiedergli un export. I nuovi entranti del 2026 (EagleLytics, Codigle, SmartStoreLabs) leggono solo le vetrine pubbliche e si fermano alla prima protezione. Nessuna app trovata entra nei portali con login.
- **La domanda esiste da oltre 10 anni, ma è sparsa.** Ci sono thread nella Shopify Community (2020, 2023, 2025, 2026), uno dei quali dice "Most of (mine) suppliers don't have CSV files". Ci sono anche incarichi freelance pagati 250-1.500 € per un connettore singolo con login, senza manutenzione. Merchant con 8-15 marchi scrivono script per singolo fornitore da soli.
- **I negozi elencabili sono molti (StoreLeads):** in Italia 62.324 su Shopify, 119.252 su WooCommerce e 10.510 su PrestaShop. Il segmento "senza feed" non è misurato.
- **Economia.** Costo di infrastruttura di 3-10 € al mese per cliente; il costo vero sono le persone. Riposizionamento proposto: "servizio gestito a prezzo di app", con setup di 149-299 € per connettore e canone di 49-199 €/mese. Il team costa circa 80-95 k€/anno, quindi servono 130-140 clienti. L'investimento fino al pareggio è di 55-75 k€, non 25-40 k€.
- **Prove contrarie riportate:** quasi nessuna richiesta in italiano; syncX rilevato da StoreLeads in calo (−15% anno su anno); app di scraping pubbliche con 0-2 recensioni.
- **Punteggio proposto:** 68 (C8 +1; penalità di conflitto −2, che mancava).

### Sintesi del Bucatore
- **Domanda rara e dispersa.** I thread sono pochi e con poche risposte. Nei casi italiani il fornitore ha quasi sempre già un file (CSV a un link, FTP, web service). I prodotti che fanno scraping dei fornitori hanno trazione quasi nulla: EagleLytics 2 recensioni, SmartStoreLabs meno di 10 installazioni.
- **I termini d'uso dei portali vietano il meccanismo centrale.** I termini di Ingram Micro vietano gli "scripts or spiders" e la cessione delle credenziali a terzi, con chiusura dell'account "without notice". La sanzione colpisce il negozio cliente, che perde il fornitore. In Italia c'è anche l'accesso abusivo (art. 615-ter c.p.; SU 4694/2011: rileva la violazione delle prescrizioni del titolare).
- **I grossisti si stanno spostando sui feed.** Syncee è gratis per i fornitori, Faire sincronizza con Shopify, Flxpoint ha oltre 250 integrazioni. Un grossista che "approva" tende a dare un feed, e così rende inutile l'app.
- **Economia per connettore.** Costruzione 8-24 h e manutenzione 8-15 h/anno per connettore. Con 1 negozio a 29-79 $ il connettore non ripaga, ne servono almeno 3 per connettore. La fascia bassa è compressa da cloni a 9-29 $/mese. Churn stimato all'8-12% al mese.
- **Delega e conflitto.** I giudizi "questo portale si può collegare?" sono tecnici e legali, frequenti, da esperto (C10, delegabilità). L'attività è scraping con login per conto terzi, la più vicina a quella del datore tra le idee non escluse.
- **Punteggio proposto:** circa 46.

### Verifiche del Giudice (fonti aperte il 2026-11-20)
| Affermazione decisiva | Chi la sostiene | Esito | Fonte |
|---|---|---|---|
| I termini d'uso dei grandi portali B2B vietano bot e cessione delle credenziali, con chiusura dell'account | Bucatore | **Confermata sul testo.** "The running of scripts or spiders against this Website is strictly forbidden"; "The Customer must not disclose the Unique Username or the Password to any third party" (ammesso solo verso i dipendenti); "may terminate [...] the Customer's access to the Website at any time without notice". Il campione è di un solo gruppo, ma il modello "il negozio ci dà le credenziali" viola due clausole alla volta | https://nz.ingrammicro.com/cms/Content-Pages/Services-Support/TermsAndConditions.aspx?pub=0 |
| L'incumbent non fa scraping e rimanda al feed del fornitore | Entrambi (lacuna per l'Entusiasta, scelta prudente per il Bucatore) | **Confermata.** "Stock Sync does not support custom web scraping"; "does not offer automated crawling, CSS-selector scraping, or DOM parsing tools for external websites"; per il fornitore senza feed: "Request a scheduled export file (CSV/XML) or an FTP/Dropbox feed". C'è però una sovrapposizione: syncX legge i cataloghi pubblici Shopify dei fornitori e scarica file dietro login semplice (rapporto Entusiasta, fonte 18). La lacuna vera è solo "dati nel solo HTML dietro login" | https://help.stock-sync.com/en/article/does-stock-sync-able-to-scrape-products-from-stores-15o4uqk |
| Esiste disponibilità a pagare per un connettore con login verso il negozio | Entusiasta | **Confermata come una tantum.** Incarico "Portal Scraper & WooCommerce Sync", 750-1.500 €, "signs in to an online portal, pulls every product detail—title, description, stock level, price"; "The portal changes frequently". Dato: 228 offerte, in media 1.102 €. Il bisogno e la consapevolezza della manutenzione ci sono, ma l'offerta di freelance è abbondante e il dato è un singolo incarico. StoreLeads conferma 62.324 negozi Shopify in Italia (aggiornato al 13/11/2026; il Bucatore citava 55.299 del 2° trimestre) | https://www.freelancer.de/projects/woocommerce/portal-scraper-woocommerce-sync ; https://storeleads.app/reports/shopify/IT/top-stores |

### Punteggio v2 ricalcolato (pesi invariati)
| Criterio (peso) | R1 | R2 | Motivo della variazione |
|---|---|---|---|
| C1 Bisogno (10) | 4 | **3** | Dolore reale e verificato, ma raro. I casi italiani trovati hanno quasi sempre un file; mancano richieste con seguito |
| C2 Domanda (10) | 3 | **2** | Il segmento "solo HTML dietro login" resta non misurato (regola: senza evidenza al massimo 2). Le app di scraping esistenti hanno 0-2 recensioni |
| C3 Monetizzazione (15) | 4 | **3** | Una tantum di 250-1.500 € verificata. Il canone ricorrente per questo servizio non è provato, e la fascia bassa delle app di sync è a 9-29 $ |
| C4 Vantaggio competenze (15) | 4 | **3** | Vantaggio dello scraping ricalibrato (vedi H17): fonti con login, poche e mutevoli, valgono 3. Il 5 richiede una libreria di oltre 100 fonti, non dimostrata |
| C5 Distribuzione (15) | 4 | **3** | Store affollato di cloni 2026. I negozi non sono elencabili per grossista. Il canale "grossista" tende a produrre un feed, non un cliente |
| C6 AI generalista (5) | 4 | 4 | — |
| C7 Difendibilità (5) | 4 | **3** | La libreria si accumula, ma un feed del grossista azzera il connettore |
| C8 Incumbent (5) | 3 | **4** | Lacuna dichiarata dal leader e verificata; i nuovi entranti si fermano alle pagine pubbliche |
| C9 Primo euro (5) | 4 | 4 | — |
| C10 Delegabilità (10) | 3 | **2** | Team a mercato di 80-95 k€ (H16), concorde tra i due ruoli. Decisioni frequenti su fattibilità tecnica e contrattuale per portale |
| C11 Tetto a 24 mesi (5) | 3 | **2** | Servono 130-250 paganti a seconda dell'ARPU; mediana delle app giovani circa 190 $ al mese |
| **Lordo** | 74 | **58** | (30+20+45+45+45+20+15+20+20+20+10)/5 |
| Penalità | −5 | **−9** | −2 dipendenza dalla piattaforma (mitigata dal multi-piattaforma); −4 termini d'uso dei portali e art. 615-ter, con rischio scaricato sul cliente (verificato); −3 conflitto con il lavoro (scraping con login per conto terzi: prodotto diverso, attività molto simile; H16) |
| **Totale** | 69 | **49** | |

### Verdetto aggiornato
**Ridimensionata: da finanziare solo dopo un esperimento di arresto.**
- I due ruoli concordano su tre fatti verificati: la lacuna di prodotto esiste, la domanda è sparsa, il costo vero è il team.
- Il fatto nuovo e decisivo è che il meccanismo centrale (credenziali del negozio usate da un bot) viola clausole tipiche dei portali, e il rischio cade sul cliente. Questo rende la vendita difficile anche quando il dolore c'è.
- **Versione che sopravvive:** connettori solo per grossisti che **autorizzano** l'accesso o forniscono un export, più i portali con export dietro login. Questa versione però riduce il vantaggio dello scraping e avvicina il prodotto ai cloni di sync da feed.
- **Probabilità di successo** (50 k€ di margine in 24 mesi, founder ≤ 5 h/sett.): **circa 5%** [stima]. Base delle app nuove circa 20%, ×0,5 per l'adozione frenata dai termini d'uso, ×0,5 per il fattore di correzione per la delega (vedi H16).

### Esperimento di 30 giorni (affinato, soglie decise ora)
Unisce le proposte dei due ruoli. **Basta un criterio di arresto per archiviare.**

**Passo 0, cancello:** autorizzazione scritta del datore o parere sul contratto ([[I-H16-1 Autorizzazione scritta e veicolo societario]]).

**Settimana 1: censimento di 40 grossisti** (ferramenta, cosmetica professionale, ricambi moto e bici). Si classificano in tre classi:
- **A:** feed, API o CSV a un link;
- **B:** export scaricabile dopo il login;
- **C:** solo HTML dietro login.

Per ogni grossista si annotano 2FA/CAPTCHA e le clausole dei termini d'uso. Poi si scrive a tutti: "fornite un feed ai rivenditori online?".
- Arresto se la classe C è **< 25%**.
- Arresto se **≥ 50%** fornisce un feed su richiesta.

**Settimane 1-2: grossisti.** Proposta "vi facciamo da feed" ai grossisti di classe C.
- Arresto se **0 su 10** autorizzano per iscritto o si dicono interessati.

**Settimane 1-2: legale.** Parere di un penalista e di un civilista (≤ 1.500 €) sull'uso delle credenziali per mandato.

**Settimane 1-3: domanda.** 20 pagine "Sincronizza [Grossista] con Shopify/WooCommerce/PrestaShop", con il campo obbligatorio "grossista", più 300 € di Google Ads e risposte nelle community.
- Successo: **≥ 25 iscrizioni** a **≤ 20 € ciascuna**.
- Successo: **≥ 5 grossisti richiesti da ≥ 3 negozi**.

**Settimane 2-4: pagamento.** Preordine con setup di 149 € (rimborsabile) oppure primo mese a 49 $.
- Successo: **≥ 5 pagamenti**.

**Settimane 2-4: tecnica.** 1-2 connettori, solo su portali autorizzati.
- Successo: costruzione **≤ 16 h**.
- Successo: **≥ 95%** degli SKU abbinati.
- Successo: 0 errori di stock non rilevati in 14 giorni.

**Esito:** si passa allo sviluppo solo se tutte le soglie di successo sono raggiunte. Con la zona grigia (iscrizioni sì, pagamenti no) si archivia: un secondo ciclo non è giustificato dal punteggio.
