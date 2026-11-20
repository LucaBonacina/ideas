---
tipo: ipotesi
id: H07
titolo: "Micro-SaaS B2B verticale"
sessione: S3
stato: parziale # confutata come strategia generica; sopravvive solo il verticale a dati difficili con prezzo ≥ 100 €/mese
fiducia: media
probabilita_successo: "8%"
tags: [ipotesi, S3]
---
# H07 — Micro-SaaS B2B verticale

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Software in abbonamento per una nicchia B2B fuori dagli ambiti esclusi, costruito rapidamente con AI, distribuito via outbound o marketplace di integrazioni. (Da [[Registro delle ipotesi]].)

## Criteri di confutazione (pre-registrati)
Confutata se:
1. la mediana dei micro-SaaS resta sotto 1 k$/mese di ricavi ricorrenti;
2. il costo di acquisizione cliente richiede vendita diretta del founder;
3. le nicchie accessibili sono sature di prodotti costruiti con AI.

## Caso a favore — Entusiasta
Rapporto integrale: [[H07 Entusiasta]].
- **Concede il primo criterio sulla popolazione generale.** Su TrustMRR il 68% delle startup sta in 0-1 k$. Sostiene però che quella popolazione è dominata da prodotti trasversali e per consumatori: 4.693 startup "AI" contro 201 "Travel" e 96 "Legal".
- **Il prezzo alto cambia la traiettoria.** Secondo MicroConf 2024, chi ha piani d'ingresso da 1.000 $/mese o più aggiunge circa 1.073 $ di MRR nuovo al mese, contro circa 316 $ per i piani da 1-9 $. Secondo ChartMogul, un ARPA alto si accompagna a retention migliore.
- **Casi verificati dal processore di pagamento:** ConvertLabs (27,6 k$ di MRR, servizi a domicilio, ma il founder ha circa 23 k follower) e CartBoss (504 k$ in 12 mesi, B2B europeo, 224 follower).
- **Il pubblico conta poco:** la correlazione tra follower e ricavi è r = 0,25.
- **La saturazione colpisce i wrapper generici.** I tool di monitoraggio prezzi fatti con AI incassano circa zero (MarketMiner: 3.295 $ in 12 mesi, MRR 0), mentre Prisync fa pagare 99-799 $/mese. Il vantaggio sta dove il dato è difficile da raccogliere.
- **Acquisizione:** outbound misurato (risposta media 3,43%, fonte Instantly) e acquistabile a 3-8 k$/mese, con un audit gratuito generato dallo scraper come aggancio. A questo si aggiungono i marketplace di integrazioni (App Store di Bókun, integrazioni con i gestionali).
- **Idee:**
  1. intelligence OTA per gli operatori di tour;
  2. rilevatore dei prezzi della concorrenza per autonoleggi indipendenti;
  3. monitoraggio dei prezzi minimi (MAP) per marchi senza EAN;
  4. rilevatore di tariffe per piccole strutture ricettive (riserva).

## Caso contro — Bucatore di palloncini
Rapporto integrale: [[H07 Bucatore]].
- **Mediana sotto 1 k$:** secondo MicroConf 2024 il gruppo più numeroso (28%) sta sotto 1 k$/mese, e il campione comprende solo aziende attive e già paganti. I founder a tempo pieno crescono il 30% in più, un dato che pesa contro un founder a ≤ 5 h/settimana.
- **Outbound:**
  - abbandono mensile mediano del 6,1% sotto 25 $ di ARPA (ChartMogul);
  - risposte alle email a freddo tra lo 0,45% e lo 0,74%; appuntamenti esternalizzati a 500-2.000 $ l'uno;
  - rapporto tra valore del cliente e costo di acquisizione stimato intorno a 1,5 nel caso ottimista;
  - in Italia il Garante (17/04/2026) ribadisce che l'email commerciale richiede il **consenso**, anche se il destinatario è un professionista.
- **Saturazione:**
  - su Shopify 7 tracker di prezzi su 9 sono stati lanciati nel 2026 e hanno 0 recensioni;
  - Capterra elenca 501 prodotti di reputazione online e 859 strumenti SEO;
  - Apify ha 126.812 scraper pronti, quindi lo scraping è una commodity.
- **Idee ovvie attaccate:**
  - morte: monitoraggio prezzi per piccoli e-commerce, monitoraggio recensioni, strumenti SEO, wrapper AI;
  - ferita: prezzi senza EAN;
  - esclusa dagli ambiti: lead generation.
- **Resiste solo:** un verticale da ≥ 200-300 €/mese con dati difficili, distribuito tramite il marketplace del gestionale di settore.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate (pagine aperte il 2026-11-20)
| Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|
| La mediana dei micro-SaaS è sotto 1 k$ | entrambi | **Confermata.** TrustMRR: "$0 - $1k 68.0 %", su 1,99 mld $ di ricavi verificati; ricavo mediano cumulato con Stripe di 257 $. La metrica (mensile o cumulata) non è dichiarata, ma la mediana resta sotto 1 k$ in entrambi i casi. | https://trustmrr.com/stats |
| Il prezzo alto triplica la crescita del MRR | Entusiasta | **Confermata.** MicroConf: "companies with $1,000+/mo entry plans added ~$1,073 in new MRR monthly, vs ~$316 for those priced at $1–9". La stessa pagina: "30% grow just 1–4% month over month, and another ~30% are flat or shrinking". | https://microconf.com/founders/10k-100k-arr |
| L'outbound via email a freddo è un canale delegabile | Entusiasta (contestata dal Bucatore) | **Fortemente ridimensionata in Italia.** Il Garante afferma che l'email commerciale "non può essere fondato sul contratto o su legittimo interesse del titolare, ma unicamente sul consenso dell'interessato" (art. 130 Codice privacy) e respinge la tesi della "mera interlocuzione professionale". Il reclamante era una persona fisica contattata tramite LinkedIn: l'estensione agli indirizzi generici di società non è stata verificata qui. L'outbound via email in Italia e in buona parte dell'UE è quindi un rischio legale, non un canale libero. | https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188 |

### Criteri di confutazione, uno per uno
1. **Mediana sotto 1 k$/mese: SODDISFATTO.** TrustMRR e MicroConf concordano. L'argomento dell'Entusiasta sul sottoinsieme ad alto prezzo è plausibile ma **senza una mediana misurata**: lo prendo come attenuante, non come confutazione del criterio.
2. **Serve la vendita diretta del founder: SODDISFATTO IN PARTE.**
   - La strada outbound via email è stretta: legalmente in Italia, economicamente sotto 100 €/mese di prezzo.
   - Resta possibile un outbound delegato per telefono e social con prezzi di 100-500 €/mese, ma non è dimostrato senza il founder.
   - Il canale dei marketplace di integrazioni esiste, ma il suo esempio più solido (Shopify) ricade già in [[H09 Estensioni e plugin su marketplace]].
3. **Nicchie sature di prodotti costruiti con AI: SODDISFATTO per le nicchie ovvie, NON SODDISFATTO per i verticali a dati difficili.** Su questo i due ruoli concordano nei fatti: i tracker generici incassano zero, mentre nei verticali di tour e autonoleggio pochi concorrenti chiedono da 100 a 500 $/mese.

### Verdetto
- **Stato: parziale.** Come strategia generica ("micro-SaaS fatto in fretta con AI e venduto via outbound") l'ipotesi è confutata: il primo criterio è soddisfatto e il secondo lo è in buona parte.
- Sopravvive una forma stretta: **SaaS verticale a ≥ 100 €/mese il cui prodotto è un dato difficile da raccogliere** (OTA, broker), con acquisizione delegata non basata sull'email a freddo.
- **Fiducia: media.**
- **Probabilità di successo: circa 8%** [stima]. Ragionamento:
  - circa il 15% dei micro-SaaS supera 10 k$/mese (TrustMRR, la somma delle fasce sopra 10 k$), e meno ancora entro 24 mesi;
  - il prezzo alto e il vantaggio sui dati alzano le probabilità;
  - il founder a 5 h/settimana e il canale di acquisizione incerto le abbassano.

## Idee concrete che sopravvivono
- [[I-H07-1 Intelligence OTA per operatori di tour]] — punteggio v2: **57**
- [[I-H07-2 Rate shopper per autonoleggi]] — punteggio v2: **56**

Scartate:
- **Monitoraggio MAP senza EAN:** il mercato è affollato, la vendita richiede demo e si sovrappone a H03.
- **Rilevatore di tariffe per piccole strutture ricettive:** incumbent forti e moderni.
- **Tutte le idee ovvie attaccate dal Bucatore.**

Il miglior "micro-SaaS" trovato in questa sessione passa da un marketplace ed è valutato in H09: [[I-H09-1 Sync fornitori senza feed]].

## Fonti
Accesso 2026-11-20. Elenchi completi in [[H07 Entusiasta]] e [[H07 Bucatore]].
- https://trustmrr.com/stats (verificata dal Giudice)
- https://microconf.com/founders/10k-100k-arr (verificata dal Giudice)
- https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188 (verificata dal Giudice)
- https://chartmogul.com/blog/saas-benchmarks-report-2023/
- https://instantly.ai/cold-email-benchmark-report-2026
- https://trustmrr.com/startup/cartboss.md ; https://trustmrr.com/startup/convertlabs.md ; https://trustmrr.com/startup/marketminer-ai.md
- https://prisync.com/pricing/
- https://skift.com/2023/11/13/getyourguide-cfo-latest-experience-trends-and-cracking-the-u-s/
- https://www.bokun.io/make-your-business-more-powerful-with-the-bokun-app-store
- https://slashdot.org/software/p/Rate-Monitor/
