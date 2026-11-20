---
tipo: idea
id: I-H03-1
ipotesi: "[[H03 Servizio di scraping a prodotto per clienti non finanziari]]"
punteggio_v2: 52
punteggio_v2_r1: 66
verdetto_r2: "declassata: cancello eliminatorio sull'autorizzazione del datore; incumbent italiano diretto"
modello_ricavo: "setup (matching iniziale) + canone mensile con SLA; vendita diretta e white-label tramite partner"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "30-50 k€ il primo anno (sviluppatore, commerciale part-time, infrastruttura) [stima]"
tags: [idea, S1, R2]
---
# I-H03-1 — Monitoraggio prezzi gestito per cataloghi senza EAN

> **Superata in parte dal secondo giro.** Punteggio 66 → **52**, probabilità ~4%. Valgono la sezione "Approfondimento (round 2)" e il suo esperimento; le cifre del primo giro qui sotto restano per traccia. Cambiamenti principali: senza autorizzazione scritta del datore l'idea è scartata; la stima di ~91.000 e-commerce era sovrastimata; servono 26-32 clienti, non ~20; NetPricer copre già i ricambi auto in italiano.

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

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

## Approfondimento (round 2)
Rapporti integrali: [[I-H03-1 Entusiasta]] (13 ricerche web) e [[I-H03-1 Bucatore]] (15 ricerche web), in `wiki/Rapporti/R2/`.

### Sintesi dell'Entusiasta
- **Il dolore è monetizzato dagli incumbent stessi.** Prisync vende il matching a parte ("available to order"). Price2Spy fa pagare l'Automatch con un setup per concorrente più un canone e offre un "Hybrid Product Matching" con revisione umana. Dealavo ammette che i prodotti senza codici richiedono un matching "almost completely manual".
- **Recensioni** (solo estratti, perché G2 e Capterra rispondono 403): lamentele sul matching manuale per Prisync, Minderest, Competera e Price2Spy. I voti medi restano però alti.
- **Popolazione elencabile (Store Leads):**
  - 6.292 negozi italiani "Autos & Vehicles" su quattro piattaforme;
  - 1.344 negozi WooCommerce in "Parts & Services";
  - stima di 550-650 e-commerce di ricambi con almeno 1.000 SKU, e di 2.500-4.500 negozi qualificati includendo ferramenta, bici e nautica.
- **Economia.** Canone di 800 €/mese contro 60-130 € di accesso (Zyte), meno di 10 € di LLM e 70-140 € di QA: margine di contribuzione del 63-80%. Con un operatore pagato a mercato (vedi H16) il team costa 155-180 k€, quindi servono **26-32 clienti**.
- **Prove contrarie riportate:** NetPricer (Carpi) fa già matching OEM nei ricambi auto; nei forum non c'è domanda esplicita; il conflitto con il lavoro è eliminatorio senza autorizzazione.
- **Proposte:** partire da ferramenta, bici o nautica invece che dall'auto. Punteggio **62** (C4, vantaggio delle competenze, a 4; C8 a 2).

### Sintesi del Bucatore
- **Il vuoto in Italia è già occupato.** NetPricer (dal 2020): OEM, cross-reference, AI multimodale, onboarding e referente in italiano, più repricing e MAP. Ci sono anche Dealavo (gruppo JTL, QA umano, automotive), Price2Spy (ibrido e manuale) e Lengow NetRivals (pagine in italiano).
- **La lamentela "solo EAN" è debole.** Si regge su una recensione G2 letta solo nell'estratto. Prisync ha 4,2/5 su 96 recensioni Trustpilot, nessuna sul matching. Nessuna richiesta italiana trovata.
- **La popolazione con budget è piccola.** Stima di 150-500 aziende; la mediana degli addetti all'e-commerce nel settore Auto e Moto è 6. Per avere 25 clienti attivi bisogna acquisirne 35-45 in 24 mesi, cioè penetrare il 7-30% del segmento.
- **Il margine dipende dall'accesso.** Su siti protetti, con lettura giornaliera e Web Unlocker, l'accesso costa circa 1.000 $/mese, più del canone. Il matching per brand e MPN è in gran parte automatizzabile, quindi la revisione umana è un fossato sottile.
- **Conflitto con il lavoro: il caso peggiore del portafoglio.** È la stessa attività economica (vendita di dati da web a canone) e lo stesso know-how. Anche l'esperimento è attività preparatoria. Penalità proposta −8/−9.
- **Punteggio proposto:** circa **46**.

### Verifiche del Giudice (fonti aperte il 2026-11-20)
| Affermazione decisiva | Chi la sostiene | Esito | Fonte |
|---|---|---|---|
| Esiste un concorrente italiano che fa già matching OEM senza EAN nei ricambi | Bucatore (l'Entusiasta la riporta come prova contraria) | **Confermata.** "NetPricer per auto e ricambi: matching su codici OEM e cross-reference aftermarket, prezzi e disponibilità su marketplace e specialisti"; "L'abbinamento risulta corretto nel 99,5% dei casi" (dato dichiarato); sede in Via delle Magliaie 39, Carpi (MO). L'angolo "nessuno lo fa in italiano" cade almeno per l'auto | https://www.netpricer.com/it/settori/auto ; https://www.netpricer.com/ |
| Gli incumbent fanno pagare il matching difficile e usano la revisione umana | Entusiasta (prova di dolore pagato); Bucatore (prova che il servizio esiste già) | **Confermata, e taglia in due direzioni.** Automatch: "Setup (one-off) costs – calculated per competitor"; "Monthly costs (on top of the regular Price2Spy subscription)". Se l'automazione non basta: "Hybrid Product Matching [...] backed by human checks from our dedicated team". Il bisogno è pagato, ma l'offerta "pipeline con revisione umana" esiste già | https://www.price2spy.com/automatch.html |
| La popolazione elencabile nei ricambi è di poche migliaia di negozi o di poche centinaia | Entusiasta (550-650 nei ricambi, 2.500-4.500 in totale); Bucatore (150-500 con budget) | **Dato base confermato, stime entrambe non misurate.** Store Leads: in Italia 1.344 negozi WooCommerce in "Parts & Services" (aggiornato al 13/11/2026). La quota con budget di almeno 500 €/mese non è misurata da nessuno dei due. Il Giudice la considera **centinaia, non migliaia**: mediana di 6 addetti all'e-commerce nel settore (dato del Bucatore, Casaleggio 2025, non riverificato) | https://storeleads.app/reports/woocommerce/category/Autos%20&%20Vehicles/Parts%20&%20Services |

### Punteggio v2 ricalcolato (pesi invariati)
| Criterio (peso) | R1 | R2 | Motivo della variazione |
|---|---|---|---|
| C1 Bisogno (10) | 4 | 4 | Il bisogno è pagato (servizi di matching a listino separato, verificato), anche se manca la domanda esplicita nei forum |
| C2 Domanda (10) | 3 | **2** | Base verificata di 1.344 negozi WooCommerce nei ricambi; il segmento con budget è di centinaia di aziende. Il dato di 91.000 e-commerce della nota sovrastimava il mercato |
| C3 Monetizzazione (15) | 4 | 4 | Listini gestiti verificati; margine sano solo se l'accesso ai siti protetti è prezzato a parte |
| C4 Vantaggio competenze (15) | 5 | **3** | Vantaggio dello scraping ricalibrato (vedi H17): 5-10 fonti per cliente, accesso acquistabile, matching brand+MPN in gran parte automatizzabile |
| C5 Distribuzione (15) | 3 | 3 | Outbound su una popolazione elencabile; partner non provati |
| C6 Resistenza all'AI (5) | 5 | **4** | Il matching AI multimodale è già il prodotto dei concorrenti |
| C7 Difendibilità (5) | 3 | 3 | — |
| C8 Debolezza degli incumbent (5) | 3 | **2** | Concorrente italiano verticale verificato (NetPricer); Price2Spy ibrido con umani verificato; Dealavo |
| C9 Primo euro (5) | 3 | 3 | — |
| C10 Delegabilità (10) | 3 | **2** | Team a mercato di 145-180 k€ (l'Entusiasta stima 155-180 k€; i due ruoli concordano sull'ordine di grandezza); la vendita tecnica dei primi 6-12 mesi dipende dal founder |
| C11 Tetto a 24 mesi (5) | 3 | 3 | — |
| **Lordo** | 73 | **61** | (40+20+60+45+45+20+15+10+15+20+15)/5 |
| Penalità | −7 | **−9** | −8 conflitto con il lavoro (stessa attività economica del datore: vendita a terzi di dati estratti dal web; H16 fascia −5/−10, parte alta); −1 termini d'uso delle fonti |
| **Totale** | 66 | **52** | |

### Verdetto aggiornato
**Declassata.** Tra le idee del portafoglio è quella con il conflitto più forte con il lavoro, e il vuoto di mercato che la giustificava (nessuno fa matching OEM in italiano) è falso almeno per l'auto.
- **Cancello eliminatorio, non penalità:** senza autorizzazione scritta del datore l'idea è **scartata**. L'esperimento non parte: costruire liste e contattare clienti per una futura società è già attività preparatoria (Cass. 19096/2013, come interpretata nella nota [[H16 Founder a tempo parziale]]).
- **Versione che sopravvive (solo con l'autorizzazione):** un verticale non auto (ferramenta/utensileria, bici, nautica) dove NetPricer non ha pagine dedicate, con l'accesso ai siti protetti prezzato a parte.
- **Probabilità di successo** (50 k€ di margine in 24 mesi, founder ≤ 5 h/sett.): **circa 4%** [stima]. Probabilità di ottenere l'autorizzazione circa 30%, per circa 15% di successo commerciale contro incumbent con referenze, con il fattore di correzione per la delega (vedi H16) già incluso.

### Esperimento di 30 giorni (affinato, soglie decise ora)
**Giorno 0, cancello:** autorizzazione scritta del datore con un perimetro definito: monitoraggio prezzi retail, nessun cliente finanziario o di business information, nessun codice o dato del datore. Senza autorizzazione: stop.

**Giorni 1-5, scelta del verticale con dati.** Store Leads filtrato per Italia, categoria e almeno 1.000 prodotti, su ferramenta, bici, nautica e ricambi moto.
- **Soglia di scelta:** almeno 300 negozi qualificati **e** almeno il 40% di SKU senza EAN visibile su un campione di 20 cataloghi. Se nessun verticale passa: stop.

**Giorni 3-10, il fossato tecnico.** 300 SKU, 3 negozi del verticale scelto, pipeline con API gestita, LLM e QA.
- **Successo:** precisione finale ≥ 95% su un campione di controllo di 100, con QA ≤ 3 minuti per SKU incerto.
- **Kill:** precisione < 90%, oppure matching solo automatico già ≥ 90%. Nel secondo caso la revisione umana non è un fossato e bastano i SaaS.

**Giorni 5-25, mercato.** 200 aziende del verticale contattate tramite canali aziendali generici, offerta **a prezzo pieno**: pilota di 2 mesi a 900 €, poi 650-900 €/mese. A ogni conversazione si chiede che strumento usano oggi.

| Metrica | Successo | Kill |
|---|---|---|
| Risposte positive su 200 | ≥ 10 (5%) | < 4 (2%) |
| Piloti pagati da ≥ 900 € entro il giorno 30 | **≥ 3** | 0 |
| Prospect già serviti e soddisfatti da un concorrente con matching senza EAN | < 30% | ≥ 50% |

**Regola:** basta un valore "kill" per archiviare. Niente secondo verticale, perché 26-32 clienti a regime richiedono un primo verticale che funzioni subito.
