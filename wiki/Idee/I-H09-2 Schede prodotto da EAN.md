---
tipo: idea
id: I-H09-2
ipotesi: "[[H09 Estensioni e plugin su marketplace]]"
punteggio_v2: 56
modello_ricavo: "abbonamento per volume di SKU arricchiti tramite app store (Shopify, WooCommerce, PrestaShop)"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "20-35 k€ [stima]"
tags: [idea, S3]
---
# I-H09-2 — Schede prodotto da EAN

## In una frase
App che, partendo da EAN e codice del produttore, compila schede prodotto complete (specifiche tecniche, attributi normalizzati, traduzioni) raccogliendole dai siti dei produttori. È pensata per categorie poco coperte da Icecat, come ferramenta, ricambi, giardinaggio e articoli tecnici.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** negozi con cataloghi ampi che hanno EAN e prezzo ma schede vuote, e quindi perdono posizioni SEO e conversioni [stima].
- **Prezzi di riferimento** [fatto, letti dall'Entusiasta il 2026-11-20]:
  - IceCat Product Catalog: 19-49 $/mese;
  - Newcraft IceCat: 19-39 $/mese (lanciata il 26/10/2026);
  - ProductDataCloud: 149-999 $/mese, 0 recensioni.
- I prezzi esistono, ma **non c'è una prova di pagatori**: nessuna di queste app ha recensioni significative.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- Ricerca negli store ("product data", "EAN import", "bulk product description").
- Prova gratuita su 50 SKU.
- Pagine per categoria merceologica.
- Stesso motore e stessi canali di [[I-H09-1 Sync fornitori senza feed]]: le due app si vendono in coppia.

## Perché queste competenze danno un vantaggio
- Raccogliere e normalizzare specifiche da centinaia di siti di produttori è lavoro di scraping e pulizia.
- Il dataset si accumula: ogni SKU arricchito serve al cliente successivo.

## Concorrenti
- Icecat e le app che lo usano.
- ProductDataCloud.
- I generatori di descrizioni con AI, gratuiti o integrati in Shopify Magic.

## Rischi principali (e quello che la ucciderebbe)
- **Rischio che la ucciderebbe:** i generatori AI integrati nelle piattaforme diventano "abbastanza buoni" e i negozi non pagano la differenza tra specifiche reali e testo generato.
- Diritti su testi e immagini dei produttori (diritto d'autore e diritto *sui generis* sulle banche dati).
- Domanda non misurata.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- Si condivide il team di [[I-H09-1 Sync fornitori senza feed]].
- Una persona dedicata al controllo qualità degli attributi.
- Founder ≤ 4 ore/settimana dopo l'avvio [stima].

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno/dolore (10) | 3 | Bisogno plausibile, dimostrato solo dall'esistenza di app a pagamento | apps.shopify.com/icecat-product-catalog |
| C2 Domanda (10) | 2 | Nessuna metrica: concorrenti senza recensioni | idem, /productdatacloud |
| C3 Monetizzazione (15) | 3 | Prezzi pubblicati da 19 a 999 $/mese, senza prova di volumi | idem |
| C4 Vantaggio competenze (15) | 4 | Scraping e normalizzazione da molte fonti | [stima] |
| C5 Distribuzione senza pubblico (15) | 3 | Ricerca negli store, ma categoria con poca domanda visibile | [stima] |
| C6 Resistenza all'AI generalista (5) | 3 | Le specifiche reali reggono, le descrizioni no | [stima] |
| C7 Difendibilità (5) | 3 | Il dataset si accumula | [stima] |
| C8 Debolezza degli incumbent (5) | 3 | Icecat forte sull'elettronica, debole altrove [stima da validare] | — |
| C9 Tempo al primo euro (5) | 3 | 2-3 mesi | [stima] |
| C10 Delegabilità (10) | 3 | Come I-H09-1 | [stima] |
| C11 Tetto a 24 mesi (5) | 3 | 50-200 k$/anno | [stima] |
| **Totale lordo** | **61** | | |
| Penalità | −5 | −3 diritti sui contenuti dei produttori; −2 dipendenza dalla piattaforma | |
| **Totale** | **56** | | |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. Selezionare 30 negozi italiani di ferramenta e ricambi su Shopify o WooCommerce, contattati tramite i canali pubblici di assistenza e i forum di e-commerce (niente email promozionali senza consenso).
2. Offrire l'arricchimento gratuito di 50 SKU, fatto a mano con scraper esistenti.
3. Misurare la copertura ottenuta e l'interesse a pagare.

**Soglie fissate prima:**
- **Successo:** copertura ≥ 70% degli SKU con almeno 5 attributi verificati, **e** ≥ 5 negozi che accettano un'offerta a 49 €/mese.
- **Fallimento:** copertura < 50% oppure < 2 negozi interessati → archiviare.

## Fonti
Accesso 2026-11-20.
- https://apps.shopify.com/icecat-product-catalog
- https://apps.shopify.com/newcraft-icecat-1
- https://apps.shopify.com/productdatacloud
- [[H09 Entusiasta]] · [[H09 Bucatore]]
