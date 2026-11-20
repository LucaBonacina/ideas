---
tipo: idea
id: I-H03-1
ipotesi: "[[H03 Servizio di scraping a prodotto per clienti non finanziari]]"
punteggio_v2: 66
modello_ricavo: "setup (matching iniziale) + canone mensile con SLA; vendita diretta e white-label tramite partner"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "30-50 k€ il primo anno (sviluppatore, commerciale part-time, infrastruttura) [stima]"
tags: [idea, S1]
---
# I-H03-1 — Monitoraggio prezzi gestito per cataloghi senza EAN

## In una frase
Un servizio gestito di monitoraggio dei prezzi e della disponibilità dei concorrenti per e-commerce e distributori italiani con cataloghi in cui il codice EAN/GTIN manca o non basta, come ricambi auto e moto, ferramenta e bricolage, nautica e bici. Il valore sta nell'abbinamento dei prodotti tra siti (codice produttore o OEM, attributi, confezioni), fatto da una pipeline con revisione umana.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** E-commerce e distributori con 1.000-20.000 articoli, che oggi confrontano i prezzi a mano o con strumenti che sbagliano l'abbinamento.
- **Lamentela documentata.** Gli strumenti fanno il matching solo per barcode (https://www.g2.com/products/prisync/reviews/prisync-review-5137281, da `docs/research/03-screening-ue-b2b.md`, da riverificare).
- **Prezzi di riferimento:**
  - [fatto, verificato dal Giudice] ScrapeHero Business da 199 $/mese per sito, setup a parte; Enterprise da 1.500 $/mese per 4 siti;
  - [fatto, solo estratto] Skuuudle, gestito, circa 850 £/mese;
  - [fatto] Prisync self-service 99-799 $/mese, matching a parte.
  - [stima] Proposta: setup da 1.500-3.000 €, canone da 500-1.200 €/mese.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Outbound.** Su liste costruite dai venditori delle categorie sui marketplace e sui comparatori, e dagli store pubblici: popolazione elencabile, circa 91.000 e-commerce italiani in totale (Netcomm 2025).
- **White-label tramite partner** che hanno già i clienti: agenzie Magento e Shopify, software house di gestionali per ricambi, integratori ERP. È la via indicata dal Bucatore per non dipendere dal founder.
- **Directory Apify Experts.**
- **Actor pubblici** su siti di ricambi come generatori di contatti (vedi [[I-H01-1 Portafoglio di actor su target difficili non personali]]).

## Perché queste competenze danno un vantaggio
Siti di nicchia, spesso con difese anti-bot, e un abbinamento senza codice comune: è il lavoro "difficile e continuo" in cui i SaaS da 99 $ falliscono e i freelance non danno continuità. Il catalogo degli abbinamenti già fatti si accumula e crea un costo di uscita per il cliente.

## Concorrenti
- Prisync, Price2Spy, Minderest: self-service, forti con l'EAN.
- Skuuudle, ScrapeHero, Grepsr: gestiti, generalisti, in inglese.
- Fornitori di dati ricambi di nicchia (Wolk Aftersales, Actowiz), citati negli estratti.
- Google Merchant Center: gratis solo per chi ha GTIN.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** il conflitto con il datore di lavoro (art. 2105 c.c., Cass. 19096/2013). Questa idea è scraping venduto come servizio, quindi il settore produttivo più vicino al lavoro attuale.
- **Velocità di acquisizione.** Servono circa 20 clienti a 650 €/mese per 50 k€ di margine; la vendita B2B senza pubblico è il dato più incerto.
- **Churn non noto.**
- **Termini d'uso dei siti monitorati.** Il rischio è moderato per prezzi pubblici senza login.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **1 sviluppatore di scraping:** pipeline e manutenzione.
- **1 operatore di matching e QA,** anche part-time.
- **Commerciale e account manager part-time** con offerte a listino.
- **Founder 3-5 ore a settimana:** architettura, casi anti-bot difficili, revisione dei prezzi. Nei primi 3 mesi partecipa alle prime 3-5 vendite di riferimento.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 4 | Lamentele ricorrenti sul matching solo per EAN; servizi specializzati esistenti per i ricambi | `docs/research/03-screening-ue-b2b.md` §33; [[H03 Entusiasta]] ev. 18-19 |
| C2 Domanda | 3 | 91.000 e-commerce in Italia; il monitoraggio prezzi è l'uso dello scraping che cresce di più; quota senza EAN non misurata | Netcomm 2025; Mordor (dal rapporto) |
| C3 Monetizzazione | 4 | Servizi gestiti a listino da 199 $/sito/mese e da 1.500 $/mese (verificato); Skuuudle circa 850 £ | https://www.scrapehero.com/pricing/ |
| C4 Vantaggio delle competenze | 5 | Matching difficile su siti di nicchia e difesi: il vantaggio dello scraping avanzato | [[H03 Entusiasta]] ev. 19 |
| C5 Distribuzione senza pubblico | 3 | Popolazione elencabile e partner possibili; nessun canale integrato | [[H03 Bucatore]] ev. 27-28 |
| C6 Resistenza all'AI | 5 | Dati freschi continui più workflow con SLA | — |
| C7 Difendibilità | 3 | Tabelle di abbinamento accumulate, quindi costo di uscita per il cliente [stima] | — |
| C8 Debolezza incumbent | 3 | I SaaS falliscono senza EAN; Wiser in Chapter 11; gestiti generalisti e non italiani | https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline |
| C9 Tempo al primo euro | 3 | Primo setup pagato in 1-3 mesi [stima] | — |
| C10 Delegabilità | 3 | Esecuzione delegabile; vendita a rischio founder (61,8% delle agenzie) | https://productive.io/bold/blog/founders-lead-the-way-but-how-far-can-they-take-an-agency-by-themselves |
| C11 Tetto a 24 mesi | 3 | 20-40 clienti × 650-900 € = 150-430 k€/anno [stima] | — |

Totale lordo: (40+30+60+75+45+25+15+15+15+30+15)/5 = **73**. Penalità: conflitto potenziale con il lavoro attuale (stesso settore tecnico) −6, termini d'uso delle fonti −1. **Punteggio v2 = 66.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Passo 0, cancello.** Lettura del contratto e parere giuslavoristico. Se il datore vende scraping a terzi, si chiede l'autorizzazione scritta. Senza via libera l'esperimento non parte.
- **Giorni 1-7.** Scelta di un verticale (es. ricambi moto). Lista di 150 e-commerce e distributori italiani costruita dai venditori sui marketplace e dagli store.
- **Giorni 7-25.** Outbound (email e telefono da parte di un commerciale part-time) con un'offerta concreta: un audit gratuito di 50 articoli contro 5 concorrenti, con le differenze di prezzo trovate.
- **Giorni 25-30.** Proposta di un pilota pagato di 2 mesi.
- **Soglia di successo, decisa ora:** almeno 10 audit richiesti **e** almeno 2 piloti pagati (setup o primo canone da almeno 300 €) entro il giorno 30.
- **Esiti:**
  - meno di 4 audit: verticale sbagliato o offerta debole, si ripete su un secondo verticale una sola volta;
  - nessun pilota dopo due verticali: abbandono.

## Fonti
Accesso 2026-11-20.
- https://www.scrapehero.com/pricing/ (verificata dal Giudice)
- https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline (verificata dal Giudice)
- https://www.studiocataldi.it/articoli/14116-cassazione-attivita-concorrenziale-e-violazione-dell-obbligo-di-fedelta.asp (verificata dal Giudice)
- https://prisync.com/pricing/
- https://productive.io/bold/blog/founders-lead-the-way-but-how-far-can-they-take-an-agency-by-themselves
- Rapporti [[H03 Entusiasta]] e [[H03 Bucatore]]; `docs/research/03-screening-ue-b2b.md` §33
