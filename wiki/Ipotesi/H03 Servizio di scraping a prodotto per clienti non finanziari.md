---
tipo: ipotesi
id: H03
titolo: "Servizio di scraping a prodotto per clienti non finanziari"
sessione: S1
stato: "incerta"
fiducia: "bassa"
probabilita_successo: "8%"
tags: [ipotesi, S1]
---
# H03 — Servizio di scraping "a prodotto" per clienti non finanziari

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

Rapporti integrali: [[H03 Entusiasta]] · [[H03 Bucatore]]. Metodo: [[Protocollo di discovery]]. Profilo: [[Profilo e vincoli]].

## Ipotesi (pre-registrata)
Offerta standardizzata (es. monitoraggio prezzi/catalogo, dati per e-commerce, ricerca di mercato) venduta a clienti fuori dagli ambiti esclusi ed eseguita da un team. (dal [[Registro delle ipotesi]])

## Criteri di confutazione (pre-registrati)
1. I prezzi di mercato (freelance, piattaforme self-service) comprimono il margine sotto il 30%.
2. La vendita richiede il founder.
3. C'è conflitto con il datore di lavoro.

## Caso a favore — Entusiasta
Sintesi di [[H03 Entusiasta]] (22 ricerche web).
- **Mercato [fatto, stime di istituti di ricerca].** Lo scraping vale 1,56 mld$ nel 2026 secondo Mordor. I servizi sono il segmento che cresce di più (CAGR 18,35%) e il monitoraggio prezzi è l'uso che cresce di più (18,05%). La finanza (BFSI) pesa il 29,39%, quindi circa il 70% della domanda è fuori dagli ambiti esclusi (https://mordorintelligence.com/industry-reports/web-scraping-market). In Italia 91.000 aziende hanno un proprio sito e-commerce (Netcomm 2025).
- **Prezzi dei servizi gestiti molto sopra il self-service [fatto]:**
  - ScrapeHero: 199 $/sito/mese più setup; Enterprise Basic almeno 1.500 $/mese (https://www.scrapehero.com/pricing/);
  - Skuuudle, interamente gestito: circa 850 £/mese (Capterra, solo estratto);
  - Prisync, self-service: 99-799 $/mese, con il matching venduto a parte.
- **Margini.** Il benchmark dei servizi IT gestiti europei è 40-50% lordo (OC&C 2025). La stima dell'Entusiasta per un cliente di monitoraggio gestito è 55-75% lordo, con infrastruttura a 50-240 $/mese per circa 480 mila pagine (prezzi Zyte). Un annuncio Flippa dichiara un margine del 56% e meno di 2 h/giorno di lavoro per un fondatore non tecnico, ma è solo un estratto ed è autodichiarato.
- **Esiti:**
  - Intelligence Node: circa 100 M$ (IPG);
  - Profitero: 200 M€ (Publicis);
  - Lighthouse: 370 M$ da KKR;
  - Grepsr, PromptCloud e ScrapeHero: 1,4-17 M$ di ricavi (stime di terzi).
- **Canali senza founder:** Apify Experts, Upwork, outbound su liste elencabili, partner e-commerce, Apify Store.
- **Scenario [stima].** 20 clienti × 650 €/mese con 1,5 persone danno circa 63 k€ di margine, ma serve circa 1 cliente netto al mese dal quarto mese.
- **Conflitto con il datore.** È il rischio principale: Cass. 16377/2006 considera violazione la sola costituzione di una società per "la medesima attività economica". Serve un'autorizzazione scritta se il datore vende servizi di scraping.
- **Offerte proposte:**
  1. O1, monitoraggio prezzi per cataloghi senza EAN;
  2. O2, MAP e controllo dei rivenditori per brand italiani;
  3. O3, digital shelf "light";
  4. O4, rate shopping per l'ospitalità non alberghiera (debole);
  5. O5, actor su Apify come canale.

## Caso contro — Bucatore di palloncini
Sintesi di [[H03 Bucatore]] (14 ricerche web).
- **Prezzi di riferimento bassi e pubblici [fatto]:**
  - Prisync 99-399 $/mese con prova gratuita senza carta;
  - MAP base 99-250 $/mese (Bright Data, Priceva);
  - rate shopping 35-100 $/mese;
  - dati a 0,5-3 $ ogni 1.000 record;
  - servizio gestito già a listino: ScrapeHero 199 $/sito/mese, Octoparse da 599 $, Browse AI da 500 $/mese.
  - Google Merchant Center dà gratis il benchmark di prezzo per prodotto con GTIN (https://support.google.com/merchants/answer/9626903).
- **Offerta affollata [fatto].** 625 profili di scraping su Freelancer.com a 6-50 $/h; 126.812 actor su Apify. Upwork, Fiverr e Malt hanno risposto 403.
- **Costi in aumento [fatto, survey].** Oltre il 62% degli operatori segnala costi di infrastruttura in aumento per gli anti-bot (https://blog.apify.com/web-scraping-report-2026/).
- **Fallimenti.** Wiser Solutions (price intelligence e MAP, più di 750 clienti) è andata in Chapter 11 il 26/04/2026 con circa 563 M$ di debito. Leader per PMI come Prisync fanno pochi milioni dopo oltre 10 anni (stima Latka).
- **Margine [stima].** Con 30 clienti a 400 €/mese il margine netto è circa 15-20%. Per 50 k€ servono 50-60 clienti. Il margine lordo per cliente invece supera il 60%.
- **Vendita [fatto, survey sulle agenzie in generale].** Nel 61,8% delle agenzie la vendita dipende molto o del tutto dai founder (Productive 2023). Il 70% non ha venditori a tempo pieno e il canale principale sono le referenze (SparkToro 2025).
- **Conflitto con il datore [fatto]:**
  - Cass. 19096/2013: basta la "mera preordinazione" di un'attività concorrente;
  - Cass. ord. 19377/2025: conta anche la concorrenza potenziale nel "medesimo settore produttivo";
  - art. 12-bis LDA: il codice scritto per lavoro appartiene al datore.
- **Rischio legale dello scraping: moderato per i prezzi pubblici.** In primo grado Ryanair ha perso contro Viaggiare (Milano, 2013) e il verdetto CFAA contro Booking è stato annullato. Restano opponibili i termini d'uso (CGUE C-30/14).
- **Cosa sopravvive per il Bucatore.** Un servizio verticale su siti difficili, da 800 € in su al mese, venduto in white-label tramite partner che hanno già i clienti, subordinato a un parere legale.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| # | Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|---|
| 1 | Il servizio gestito ha già un prezzo pubblico basso (ScrapeHero 199 $/sito/mese) che comprime il margine (Bucatore), oppure dimostra che il gestito si vende ben sopra il self-service (Entusiasta) | Divergenza di lettura | **Il listino è confermato e dà più ragione all'Entusiasta.** "Business Starts at $199… per month per website", setup a parte, "Up to 2" siti, 1-5K pagine per sito; "Complex websites cost more". Enterprise Basic "Minimum price is $1500 per month", fino a 4 siti. Un cliente di monitoraggio con 8 concorrenti costerebbe da ScrapeHero almeno circa 1.600 $/mese più setup [stima]. Un canone di 500-900 €/mese è quindi *sotto* il riferimento di mercato per un servizio gestito: lo spazio di prezzo c'è. | https://www.scrapehero.com/pricing/ |
| 2 | Basta la "mera preordinazione" di un'attività concorrente per violare l'art. 2105 c.c. | Bucatore (e l'Entusiasta, con Cass. 16377/2006) | **Confermato.** Cass. 19096/2013: "è sufficiente la mera preordinazione di un'attività contraria agli interessi del datore di lavoro anche solo potenzialmente produttiva di danno" (licenziamento legittimo di un dipendente socio di una Srl concorrente). Per H03, che vende proprio servizi di scraping come il founder fa per lavoro, la questione non è teorica. | https://www.studiocataldi.it/articoli/14116-cassazione-attivita-concorrenziale-e-violazione-dell-obbligo-di-fedelta.asp |
| 3 | Il fallimento di Wiser mostra che la price intelligence non genera margini (Bucatore) | Bucatore | **Il fatto è confermato, l'inferenza è debole.** Chapter 11 del 26/04/2026, circa 563 M$ di debito. Le cause dichiarate sono 11 acquisizioni a debito e piattaforme duplicate: "ARR grew… but operating costs grew faster". È un caso di leva finanziaria e integrazione fallita, non una prova sull'economia di un servizio piccolo. | https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline |

Non verificato: l'annuncio Flippa con margine del 56% e meno di 2 h/giorno risponde 403. Escluso dal giudizio.

### Applicazione dei criteri di confutazione
1. **Prezzi che comprimono il margine sotto il 30%: NON VERIFICATO.**
   - Entrambi concordano su un margine lordo per cliente del 55-75%.
   - Il margine netto sotto il 30% del Bucatore dipende da costi fissi di vendita (20-40 k€) e da un prezzo di 400 €/mese che la verifica 1 mostra inferiore al mercato del gestito.
   - È però vero che per le offerte "ovvie" con GTIN (e-commerce generico, hotel) il riferimento self-service e gratuito (Merchant Center) taglia il prezzo. Vale solo per nicchie senza EAN o con siti difficili.
2. **La vendita richiede il founder: PARZIALE.** Le evidenze sono sulle agenzie in generale, non sullo scraping. Il founder non ha pubblico e non ha referenze. White-label tramite partner e outbound su liste elencabili sono plausibili ma non dimostrati.
3. **Conflitto con il datore di lavoro: NON DETERMINABILE con le evidenze pubbliche, rischio ALTO.** La giurisprudenza è severa (verifica 2) e H03 è l'ipotesi più vicina al lavoro del founder, cioè scraping venduto come servizio. Gli ambiti esclusi del profilo evitano la concorrenza sui clienti, non sul "medesimo settore produttivo". **È un cancello**: se il contratto o il datore lo vietano, l'ipotesi cade per questo profilo.

### Verdetto
- **Stato:** incerta.
- **Fiducia:** bassa. L'economia unitaria regge, ma il criterio decisivo (conflitto) dipende da dati privati: contratto e attività reale del datore. Mancano dati su churn, tassi di rottura e margini reali delle agenzie.
- **Probabilità di successo: 8%.** Stimo circa il 15% condizionata al via libera del datore, per l'economia plausibile ma la vendita B2B lenta (servono circa 20 clienti a 650 €). Per il rischio che il contratto vieti o renda imprudente l'attività scendo all'8%.

**Prima azione per qualunque idea di S1:** leggere il contratto e chiedere un parere giuslavoristico (1-2 ore). Se il datore vende scraping a terzi, serve un'autorizzazione scritta, che è anche la mitigazione indicata dall'Entusiasta.

## Idee concrete che sopravvivono
- [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]]: punteggio v2 **52** dopo il secondo giro, 66 al primo (52 in [[Classifica]]).
- [[I-H03-2 Monitoraggio rivenditori e prezzi minimi per brand italiani]]: punteggio v2 **58** (56 in [[Classifica]]).

Scartate:
- **Rate shopping per l'ospitalità:** strumenti a 35-100 $/mese, incumbent forte (Lighthouse con oltre 70.000 strutture), siti OTA molto difesi.
- **Dati per ricerca di mercato:** progetti una tantum e clienti spesso finanziari, quindi ambito escluso.
- **Monitoraggio prezzi generico per e-commerce con GTIN:** Prisync da 99 $ e Merchant Center gratis.
- **Digital shelf "light":** confluito in I-H03-2.

## Fonti
Verifiche del Giudice, accesso 2026-11-20:
- https://www.scrapehero.com/pricing/
- https://www.studiocataldi.it/articoli/14116-cassazione-attivita-concorrenziale-e-violazione-dell-obbligo-di-fedelta.asp
- https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline

Le altre fonti sono nei rapporti integrali [[H03 Entusiasta]] e [[H03 Bucatore]].
