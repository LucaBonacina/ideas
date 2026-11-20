---
tipo: idea
id: I-H03-2
ipotesi: "[[H03 Servizio di scraping a prodotto per clienti non finanziari]]"
punteggio_v2: 58
modello_ricavo: "canone mensile per brand (SKU × rivenditori) + report delle violazioni con prova"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "25-45 k€ il primo anno [stima]"
tags: [idea, S1]
---
# I-H03-2 — Monitoraggio dei rivenditori e dei prezzi minimi per brand italiani

## In una frase
Per brand produttori italiani di fascia media (bici e componenti, piccoli elettrodomestici, cosmesi, parafarmaco, outdoor, strumenti musicali), un servizio che controlla prezzi, presenza e conformità delle schede su decine di rivenditori online e marketplace. Segnala le violazioni della politica di prezzo minimo (MAP) e i rivenditori non autorizzati, con screenshot come prova.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** L'ufficio commerciale o trade marketing del brand, che deve proteggere margini e rete di vendita.
- **Prezzi di riferimento [fatto]:**
  - fascia bassa: Bright Data MAP da 250 $/mese, Priceva da 99 $;
  - fascia enterprise: Prowl (ex PriceSpider) da circa 6.000 $/mese ([[H03 Bucatore]] ev. 7, 24);
  - Price2Spy include il MAP nel piano Basic.
  - Prezzi dei servizi MAP gestiti in fascia media: **non trovati**.
  - [stima] 600-1.500 €/mese per 50-300 articoli × 30-100 rivenditori.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Outbound verso brand elencabili:** marchi presenti sui marketplace per categoria, espositori alle fiere di settore.
- **Agenzie di trade marketing e retail media** come partner che rivendono il report.

## Perché queste competenze danno un vantaggio
Molti siti diversi, spesso piccoli e difesi; serve riconoscere lo stesso prodotto con nomi e bundle diversi e raccogliere prove affidabili. È la stessa pipeline di [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]], con un cliente diverso.

## Concorrenti
- Strumenti low-end: Bright Data, Priceva, Price2Spy, Lengow NetMonitor.
- Enterprise: Prowl, Intelligence Node, che è stata acquisita da IPG per circa 100 M$.
- Wiser Solutions, fornitore MAP con più di 750 clienti, in Chapter 11 nel 2026.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** il conflitto con il datore di lavoro (vedi [[H03 Servizio di scraping a prodotto per clienti non finanziari]]).
- **Vendita più "enterprise"** di I-H03-1 (procurement del brand, cicli più lunghi), quindi più dipendente dal founder o da un venditore senior.
- **La fascia media è schiacciata** tra strumenti da 99-250 $ e soluzioni enterprise ([[H03 Bucatore]]).
- **Aspetto legale delle politiche MAP** verso i rivenditori: il brand non può imporre i prezzi di rivendita (norme antitrust UE sul prezzo di rivendita). Il servizio deve presentarsi come monitoraggio, non come strumento di imposizione. Da verificare con un legale.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- Stesso team di I-H03-1: sviluppatore, operatore QA, account manager.
- Il report è standardizzato.
- Founder 3-5 ore a settimana.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 3 | Categoria con offerte dedicate e un exit da circa 100 M$ | [[H03 Entusiasta]] ev. 20; https://www.adweek.com/commerce/ipg-intelligence-node-acquisition/ (estratto) |
| C2 Domanda | 3 | Molte offerte esistenti; brand italiani di fascia media non contati | [[H03 Bucatore]] ev. 24 |
| C3 Monetizzazione | 3 | Prezzi da 99-250 $ (low-end) a circa 6.000 $/mese (enterprise); fascia media non provata | [[H03 Bucatore]] ev. 7, 24 |
| C4 Vantaggio delle competenze | 4 | Molti siti difesi e matching tra nomi e bundle | — |
| C5 Distribuzione senza pubblico | 3 | Brand elencabili; partner agenzie possibili | — |
| C6 Resistenza all'AI | 5 | Monitoraggio continuo con prove | — |
| C7 Difendibilità | 3 | Storico delle violazioni e integrazione nel processo commerciale [stima] | — |
| C8 Debolezza incumbent | 3 | Wiser in Chapter 11; fascia media scoperta | https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline |
| C9 Tempo al primo euro | 3 | 1-3 mesi [stima] | — |
| C10 Delegabilità | 3 | Esecuzione delegabile, vendita ai brand più consultiva | [[H03 Bucatore]] ev. 27 |
| C11 Tetto a 24 mesi | 3 | 20-30 brand × 600-1.500 € = 150-540 k€/anno [stima] | — |

Totale lordo: (30+30+45+60+45+25+15+15+15+30+15)/5 = **65**. Penalità: conflitto potenziale con il lavoro −6, termini d'uso delle fonti e profili antitrust delle politiche MAP −1. **Punteggio v2 = 58.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Passo 0, cancello.** Lo stesso di I-H03-1: contratto e parere giuslavoristico.
- **Giorni 1-7.** Lista di 80 brand italiani in 2 categorie (es. bici e componenti, cosmesi). Per 10 di loro si prepara un report gratuito delle violazioni su 20 rivenditori.
- **Giorni 7-30.** Outbound ai responsabili commerciali con il report pronto; proposta di un pilota di 2 mesi.
- **Soglia di successo, decisa ora:** almeno 8 call qualificate **e** almeno 2 piloti pagati da almeno 400 €/mese entro il giorno 30. Con meno di 3 call l'idea è abbandonata.

## Fonti
Accesso 2026-11-20.
- [[H03 Bucatore]] (evidenze 7, 21, 24, 27)
- [[H03 Entusiasta]] (evidenza 20, offerta O2)
- https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline (verificata dal Giudice)
- https://brightdata.com/products/insights/map-monitoring
- https://www.import.io/post/best-map-monitoring-software-2026
