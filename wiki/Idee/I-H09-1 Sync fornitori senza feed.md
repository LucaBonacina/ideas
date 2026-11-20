---
tipo: idea
id: I-H09-1
ipotesi: "[[H09 Estensioni e plugin su marketplace]]"
punteggio_v2: 69
modello_ricavo: "abbonamento mensile tramite fatturazione dell'app store (Shopify, poi WooCommerce e PrestaShop)"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "25-40 k€ (MVP, primi 20-30 connettori, 12 mesi di supporto part-time) [stima]"
tags: [idea, S3]
---
# I-H09-1 — Sync fornitori senza feed

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
