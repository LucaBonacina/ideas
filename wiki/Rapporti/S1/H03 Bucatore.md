---
tipo: rapporto
sessione: S1
ipotesi: H03
ruolo: bucatore
data: 2026-11-20
ricerche_web_usate: 14
tags: [rapporto, S1, H03, bucatore]
---
# H03 — Servizio di scraping "a prodotto" per clienti non finanziari — Bucatore di palloncini

Ipotesi: offerta standardizzata (monitoraggio prezzi/catalogo, dati per e-commerce, ricerca di mercato) venduta a clienti fuori dagli ambiti esclusi, eseguita da un team. Successo = ≥ 50 k€/anno di margine entro 24 mesi, founder ≤ 5 h/settimana dopo l'avvio.
Criteri di confutazione (dal [[Registro delle ipotesi]]): (a) i prezzi di mercato comprimono il margine sotto il 30%; (b) la vendita richiede il founder; (c) c'è conflitto con il datore di lavoro.

## Sintesi
- **Il prezzo di riferimento è fissato da prodotti self-service molto economici.** Un e-commerce paga 99-399 $/mese per monitorare 100-5.000 prodotti (Prisync), un hotel 35-100 $/mese per il rate shopping, un brand 99-250 $/mese per un MAP monitoring base. I dati grezzi costano 1-3 $ ogni 1.000 record su Apify, e su Bright Data scendono a circa 0,5 $ con l'abbonamento mensile. Anche il servizio gestito "fatto per te" ha già un prezzo pubblico basso: ScrapeHero 199 $/sito/mese, Octoparse da 599 $, Browse AI da 500 $/mese.
- **L'offerta è affollata.** Su Freelancer.com ci sono 625 profili di web scraping, con tariffe visibili tra 6 e 50 $/h. L'Apify Store conta 126.812 Actor. Google Merchant Center dà gratis ai merchant un benchmark di prezzo.
- **Anche in questo settore si fallisce.** Wiser Solutions (price intelligence e MAP, più di 750 clienti) è andata in Chapter 11 ad aprile 2026 con circa 563 M$ di debito.
- **Margine [stima].** Con prezzi di 300-500 €/mese per cliente, il costo di manutenzione, QA, proxy e soprattutto vendita e account management porta il margine netto sotto il 30% fino a circa 40-50 clienti. Arrivare a 50 k€ di margine richiede circa 170-250 k€ di ricavi, cioè 35-60 clienti attivi da trovare senza pubblico e senza il founder. Questa è una stima, non un fatto verificato.
- **Rischio di dipendenza dal founder nella vendita.** È documentato per le agenzie: nel 61,8% delle 796 agenzie del campione Productive la vendita poggia molto o del tutto sui founder. Non ho però trovato un dato specifico sui servizi di scraping.
- **Conflitto con il datore di lavoro: rischio concreto.** La Cassazione considera sufficiente la "mera preordinazione" di un'attività potenzialmente concorrente nello stesso settore. L'art. 12-bis della L. 633/1941 assegna al datore il codice scritto dal dipendente nell'esercizio delle mansioni. Dipende però dal contratto e dall'offerta reale del datore, che non ho potuto verificare.
- **Verdetto del Bucatore.** Criterio (a): parziale, tendente a verificato per le offerte "ovvie". Criterio (b): parziale. Criterio (c): parziale, con rischio alto e non escludibile senza parere legale. Sopravvive solo una variante stretta e lontana dal settore del datore di lavoro (vedi sotto).

## Evidenze contro

### A. Prezzi delle alternative self-service e SaaS
1. [fatto] **Prisync** (price monitoring per e-commerce) costa 99 $/mese fino a 100 prodotti, 199 $ fino a 1.000 e 399 $ fino a 5.000 nel modello URL-based. I modelli "channel" e "hybrid" arrivano a 599-799 $/mese. Prova gratuita di 14 giorni senza carta. Fonte: https://prisync.com/pricing/ (accesso 2026-11-20).
2. [fatto] **Price2Spy** non pubblica più i prezzi sulla pagina pricing (Premium "price upon request"). Una pagina di Import.io indica il piano Basic "around $157.95/mo". Il dato è di seconda mano e viene da un concorrente. Fonti: https://www.price2spy.com/pricing.html ; https://www.import.io/post/best-map-monitoring-software-2026 (accesso 2026-11-20).
3. [fatto] **Apify**: piani da 0, 19, 199 e 999 $/mese. Proxy residenziali a 7-8 $/GB, Unblocker a 1-1,5 $ ogni 1.000 richieste. Gli Actor già pronti costano da 3,00 $ per 1.000 risultati (Amazon Product Scraper, 33K utenti) e da 1,00 $ per 1.000 schede prodotto (E-commerce Scraping Tool generico, 16K utenti). Fonti: https://apify.com/pricing ; https://apify.com/junglee/amazon-crawler ; https://apify.com/apify/e-commerce-scraping-tool (accesso 2026-11-20).
4. [fatto] **Apify Store**: "Browse 126,812 Actors"; Apify dichiara "$2M paid out last month" agli sviluppatori. Il dato è autodichiarato. Fonte: https://apify.com/store (accesso 2026-11-20).
5. [fatto] **Browse AI** (no-code): Personal a 19-48 $/mese, Professional a 69-87 $/mese. Il Premium "fully managed" (setup, trasformazioni, account manager dedicato) parte da 500 $/mese con fatturazione annuale. Fonte: https://www.browse.ai/pricing (accesso 2026-11-20).
6. [fatto] **Octoparse**: piani da 19 a 299 $/mese. "Crawler Setup" da 99 $, "Data Service" (scraping eseguito da Octoparse con consegna dei dati) da 599 $. Fonte: https://www.octoparse.com/pricing (accesso 2026-11-20).
7. [fatto] **Bright Data Datasets**: da 2,5 $ ogni 1.000 record (100K record a 250 $ una tantum). Sconto dell'80% per aggiornamento mensile, quindi circa 0,5 $ ogni 1.000. Il MAP Monitoring Tool parte da 250 $/mese, "No Additional Setup Costs". Fonti: https://brightdata.com/pricing/datasets ; https://brightdata.com/products/insights/map-monitoring (accesso 2026-11-20).
8. [fatto] **Zyte API**: da 0,13 $ (HTTP semplice) a 16,08 $ (browser su siti "Advanced") ogni 1.000 risposte riuscite in pay-as-you-go. Con il piano da 500 $/mese si scende a 0,06-7,68 $. Fonte: https://www.zyte.com/pricing/ (accesso 2026-11-20).
9. [fatto] **Firecrawl** (estrazione per LLM e agenti): da 19 $/mese per 5.000 pagine a 749 $/mese per 1.000.000 di pagine. Fonte: https://www.firecrawl.dev/pricing (accesso 2026-11-20).
10. [fatto] **ScrapeHero** (servizio gestito, cioè proprio il modello H03): "Business" da 199 $ per sito al mese, "On Demand" da 550 $ minimo per sito, "Enterprise Basic" da 1.500 $/mese per 4 siti. Fonte: https://www.scrapehero.com/pricing/ (accesso 2026-11-20). Significa che un concorrente già affermato vende la stessa cosa a circa 185 € per sito al mese.
11. [fatto] **Google Merchant Center** mostra ai merchant un "benchmark" di prezzo per GTIN (prezzo medio dei concorrenti in Shopping), il "price gap" e i prezzi suggeriti. La pagina non indica alcun costo. Fonte: https://support.google.com/merchants/answer/9626903 (accesso 2026-11-20). Per molti e-commerce con GTIN il bisogno base di price monitoring è già coperto gratis.

### B. Tariffe dei freelance
12. [fatto] Freelancer.com, categoria Web Scraping: "Showing 625 results". Le tariffe orarie visibili vanno da 6 a 50 $/h (Pakistan, Bangladesh, Marocco, Egitto). Fonte: https://www.freelancer.com/freelancers/skills/web-scraping (accesso 2026-11-20).
13. [fatto] Freelancer.in, categoria Data Scraping: profili indiani visibili tra 8 e 50 $/h. Fonte: https://www.freelancer.in/hire/data-scraping (accesso 2026-11-20).
14. [fatto, fonte debole] Truelancer (pagine SEO senza dati di base) indica 25-60 $/h per l'Est Europa e 35-80 $/h per l'Europa occidentale. Ho letto solo l'estratto del motore di ricerca. Fonte: https://www.truelancer.com/web-crawling-freelancers?page=7 (accesso 2026-11-20).
15. **Upwork, Fiverr e Malt**: non trovato. Le pagine rispondono 403 a fetch e curl. Un annuncio Upwork visto solo nell'estratto del motore indicava 15 $/h con "Proposals: 50+". Non l'ho verificato direttamente, quindi non va usato come fatto.
16. [stima] Per un PMI italiano lo sviluppo una tantum di uno scraper costa poche centinaia di euro su questi marketplace (da 8-50 $/h per qualche ora). Il servizio a canone deve quindi giustificare un premio ricorrente solo con manutenzione e affidabilità.

### C. Costi del servizio gestito (manutenzione, proxy, anti-bot)
17. [fatto, autodichiarato da survey] Apify e Web Scraping Club, survey di dicembre 2025 su "hundreds of web scraping professionals" (numero esatto non indicato): oltre il 62% dichiara costi di infrastruttura in aumento, attribuiti soprattutto agli anti-bot. Il 65,8% usa più proxy e il 58,3% spende di più in proxy rispetto all'anno prima. Il 35,8% dei rispondenti è freelance. Fonte: https://blog.apify.com/web-scraping-report-2026/ (accesso 2026-11-20).
18. [fatto] Cloudflare dal 1° luglio 2025 blocca di default i crawler AI ("changing the default to block AI crawlers"). L'annuncio riguarda i crawler AI, non lo scraping in generale, ma conferma la tendenza a difese più aggressive. Fonte: https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/ (accesso 2026-11-20).
19. Percentuale di scraper che si rompono al mese o quota di ore di manutenzione: **non trovato**.
20. [stima] **Conto economico di un servizio gestito di price monitoring "a prodotto" in Italia.**
    - Ipotesi di partenza:
      - prezzo medio 400 €/mese per cliente, cioè circa 2× Prisync entry e allineato a ScrapeHero più setup;
      - ogni cliente monitora 5-10 siti concorrenti;
      - manutenzione 2-4 h/mese per cliente, perché ogni sito si rompe qualche volta l'anno, più il QA;
      - proxy e unblocker pari all'8-12% dei ricavi.
    - Costi fissi annui per un team delegato:
      - 1 sviluppatore/manutentore: circa 30-45 k€ (offshore o junior italiano);
      - account manager / customer success part-time: circa 15-25 k€;
      - vendita (SDR o commissioni) per un'offerta B2B senza pubblico: circa 20-40 k€;
      - contabilità, legale e tool: circa 6-10 k€.
      - Totale fissi: circa 70-120 k€.
    - Margine a 30 clienti: ricavi circa 144 k€, costi circa 85-135 k€, margine tra 6% e 40%; nel caso centrale circa 15-20%.
    - Soglia di successo: per arrivare a 50 k€ di margine servono circa 50-60 clienti attivi in contemporanea entro 24 mesi, al netto del churn.
    - Il margine lordo per cliente (prezzo meno manutenzione e proxy) è alto, circa 60-70%. Il margine netto resta sotto il 30% a lungo per il peso fisso di vendita e gestione. Tutti i numeri sono stime; nessun costo-dato specifico trovato.

### D. Concorrenza e destino degli operatori
21. [fatto] **Wiser Solutions** (SaaS di commercial intelligence per più di 750 brand e retailer, con prodotto MAP monitoring) ha depositato il Chapter 11 il 26-04-2026 (N.D. Tex., 26-80002) con circa 563 M$ di debito. È stata messa in vendita con credit bid del creditore Crestline. La dichiarazione dice che "ARR grew… but operating costs grew faster"; le cause indicate sono una strategia di 11 acquisizioni a debito e un giudizio da 15 M$. Fonte: https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline (accesso 2026-11-20). È un caso di leva finanziaria più che di mercato, ma mostra che un leader del settore non ha creato abbastanza margine.
22. [fatto] **Intelligence Node** (retail price intelligence) è stata acquisita da IPG per circa 100 M$, una cifra che secondo Adweek include i costi di scaling. Fonte: https://www.adweek.com/commerce/ipg-intelligence-node-acquisition/ (estratto del motore, non letta integralmente; accesso 2026-11-20). È un'uscita positiva, quindi un'evidenza a favore della categoria e non contro. La riporto per onestà.
23. [fatto, stima di terzi non verificata] **Prisync**, sul mercato dal 2013 circa: Latka indica 6,6 M$ di ricavi annui a marzo 2024. Altri stimatori danno valori diversi (techlist.ai 8,2 M$). Price2Spy ha stime tra 1,9 e 25 M$. Fonti: https://getlatka.com/companies/prisync ; https://zoftwarehub.com/en-ae/products/price2spy/product-details (estratti, accesso 2026-11-20). Il leader self-service per PMI fa pochi milioni dopo oltre 10 anni: il mercato PMI del price monitoring non è grande per prodotto.
24. [fatto] **MAP monitoring**: le soluzioni enterprise (Prowl/Wayvia, ex PriceSpider) partono da circa 6.000 $/mese secondo Software Advice; quelle low-end (Priceva, Bright Data) da 99-250 $/mese. Fonti: https://www.softwareadvice.com/competitor-price-monitoring/prowl-profile/ ; https://www.import.io/post/best-map-monitoring-software-2026 (accesso 2026-11-20). La fascia media, quella in cui finirebbe H03, è stretta tra le due.
25. Numero di agenzie di scraping su Clutch: **non trovato** (pagina di categoria 404). Una lista Apify dichiara 257.808 aziende su Clutch in totale, ma non per categoria.
26. Aziende di scraping-as-a-service chiuse (es. Kimono Labs): **non trovato** con fonte verificabile in questa sessione.

### E. Vendita B2B dei servizi e dipendenza dal founder
27. [fatto, survey] Productive/Bold, 796 agenzie, gennaio-giugno 2023:
    - il 35,3% ha strategia e team BD ma "still rely heavily on founders";
    - il 26,5% non ha un processo e i clienti li porta il founder;
    - solo il 38,2% ha un team che possiede la vendita.
    Fonte: https://productive.io/bold/blog/founders-lead-the-way-but-how-far-can-they-take-an-agency-by-themselves (accesso 2026-11-20).
28. [fatto, survey] SparkToro, State of Digital Agencies 2025 (pubblicato il 17-02-2026; numero di rispondenti non indicato):
    - le referenze dei clienti sono "by far the biggest driver of new business";
    - solo il 14% ha una pipeline "healthy";
    - il 70% non ha personale di vendita full-time;
    - il 79% non ha una persona dedicata al marketing.
    Fonte: https://sparktoro.com/blog/digital-agency-new-business-still-a-concern-referrals-still-rule-for-lead-gen-and-are-sales-pipelines-finally-recovering/ (accesso 2026-11-20). Un servizio nuovo non ha clienti passati da cui ricevere referenze; il founder non ha pubblico (vedi [[Profilo e vincoli]]).
29. Churn specifico dei clienti di price monitoring: **non trovato**.
30. [stima] Le prove gratuite di 14 giorni senza carta (Prisync) e gli strumenti da 19 $/mese abituano le PMI a cicli d'acquisto self-service. Un servizio a 300-500 €/mese con onboarding richiede invece demo e call, cioè vendita consultiva.

### F. Rischi legali
31. [fatto] CGUE C-30/14 *Ryanair c. PR Aviation*, 15-01-2015: se una banca dati non è protetta né da diritto d'autore né dal diritto *sui generis*, la direttiva 96/9 non impedisce al suo autore di imporre restrizioni contrattuali (ToS) all'uso da parte di terzi, salvo il diritto nazionale. Fonte: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:62014CJ0030 (accesso 2026-11-20). I ToS anti-scraping possono quindi essere opponibili.
32. [fatto] *Ryanair v. Booking.com* (D. Del.): nel luglio 2024 una giuria ha ritenuto Booking responsabile ai sensi del CFAA per lo scraping indotto (danno di 5.000 $). Il verdetto è stato annullato in JMOL il 22-01-2025. Fonti: https://blog.ericgoldman.org/archives/2024/08/ryanair-v-booking-cfaa-trial-ends-with-strangest-possible-outcome-guest-blog-post.htm ; https://news.bloomberglaw.com/litigation/booking-com-wins-reversal-of-verdict-for-ryanair-scraping-case (estratti, accesso 2026-11-20). Il rischio di contenzioso esiste, ma l'esito finale è stato favorevole allo scraper.
33. [fatto] In Italia, *Ryanair c. Viaggiare/Lastminute*: in primo grado (Milano, 2013) Ryanair fu condannata a risarcire circa 50.000 € a Viaggiare. Fonte: https://www.pinsentmasons.com/out-law/news/unauthorised-screen-scraping-may-breach-computer-misuse-act-says-expert-in-wake-of-italian-court-ruling (estratto, accesso 2026-11-20). La giurisprudenza italiana non risulta ostile allo screen scraping di dati pubblici. Questo è un punto **contro** la tesi del Bucatore, che riporto.
34. [stima] Per il price monitoring di prezzi pubblici il rischio legale è moderato. Cresce per scraping con login, per dati personali (recensioni con nomi) e per l'estrazione sostanziale di banche dati protette da *sui generis*.

### G. Conflitto con il datore di lavoro
35. [fatto] Art. 2105 c.c.: "Il prestatore di lavoro non deve trattare affari, per conto proprio o di terzi, in concorrenza con l'imprenditore, né divulgare notizie attinenti all'organizzazione e ai metodi di produzione dell'impresa, o farne uso in modo da poter recare ad essa pregiudizio." Fonte: https://brocardi.it/codice-civile/libro-quinto/titolo-ii/capo-i/sezione-iii/art2105.html (accesso 2026-11-20).
36. [fatto] Cass. ord. 19377/2025 (massima): l'obbligo di fedeltà include il divieto di trattare affari in concorrenza "nel medesimo settore produttivo o commerciale". Va integrato con correttezza e buona fede, "tenendo conto anche della potenzialità lesiva della condotta… e non solo della concorrenza effettiva". Fonte: https://brocardi.it/massimario/83743.html (accesso 2026-11-20).
37. [fatto] Cass. 19096/2013: è legittimo il licenziamento del dipendente che aveva partecipato alla costituzione di una Srl con la stessa attività economica del datore. Basta "la mera preordinazione di un'attività contraria agli interessi del datore", anche solo potenzialmente dannosa, ed è irrilevante che poi sia uscito dalla società. Fonte: https://www.studiocataldi.it/articoli/14116-cassazione-attivita-concorrenziale-e-violazione-dell-obbligo-di-fedelta.asp (accesso 2026-11-20).
38. [fatto] Cass. ord. 26181/2024 (massima secondo l'estratto): l'obbligo si estende anche al divieto di assumere ruoli che creino conflitti di interesse potenzialmente pregiudizievoli. Fonte: https://brocardi.it/massimario/78222.html (estratto, accesso 2026-11-20).
39. [fatto] L. 633/1941, art. 12-bis: "Salvo patto contrario, il datore di lavoro è titolare del diritto esclusivo di utilizzazione economica del programma per elaboratore o della banca di dati creati dal lavoratore dipendente nell'esecuzione delle sue mansioni o su istruzioni impartite dallo stesso datore di lavoro." Fonte: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1941-04-22;633~art12bis (accesso 2026-11-20). Riusare librerie, framework anti-bot o pipeline scritti al lavoro sarebbe un rischio diretto.
40. [stima] H03 sta **nello stesso settore tecnico** del datore: vendita di dati raccolti via scraping. La concorrenza "effettiva" sui clienti potrebbe mancare (clienti non finanziari). La giurisprudenza citata però valorizza la concorrenza *potenziale* e il "medesimo settore produttivo". Se il datore vende o potrebbe vendere scraping anche a e-commerce o retail, il conflitto è diretto. Offerta reale del datore e clausole del contratto del founder: **non trovato / non verificabile** (dati privati). Clausole tipiche (esclusiva, divieto di attività extra senza autorizzazione) nei CCNL o contratti IT italiani: **non trovato** con fonte primaria in questa sessione.

## Distribuzione dei risultati
- Il successo medio di un servizio di scraping gestito avviato da zero: **non trovato**. Nessuna fonte riporta mediane o tassi di fallimento delle agenzie di scraping.
- Proxy indiretti:
  - (i) la maggior parte delle agenzie ha pipeline deboli (solo il 14% "healthy", SparkToro 2025) e dipende dai founder per la vendita (61,8%, Productive 2023);
  - (ii) il mercato è pieno di offerta a basso costo (625 freelance su un solo marketplace, 126.812 Actor su Apify);
  - (iii) sopra i 300 €/mese c'è un concorrente già pronto a 199 $/sito (ScrapeHero).
- I casi "di successo" visibili (Prisync, Price2Spy, Intelligence Node) sono **prodotti SaaS** con anni di sviluppo, non servizi gestiti. Per Prisync e Price2Spy i ricavi sono stime di terzi o autodichiarati. Il fallimento più grande del settore (Wiser, 2026) mostra che anche con più di 750 clienti i costi possono superare la crescita.
- [stima] Bias del sopravvissuto: le agenzie di scraping che chiudono sono piccole e non lasciano traccia pubblica, quindi la visibilità dei fallimenti è bassa.

## Criteri di confutazione uno per uno

### (a) I prezzi di mercato comprimono il margine sotto il 30% → **PARZIALE (tendente a verificato per le offerte ovvie)**
- **Evidenza a favore della confutazione.**
  - Il prezzo che il cliente può confrontare è basso e pubblico: Prisync 99-399 $, rate shopper 35-100 $, MAP low-end 99-250 $, ScrapeHero gestito 199 $/sito, Browse AI gestito da 500 $, dati a 0,5-3 $/1.000 record.
  - I costi di infrastruttura e proxy sono in aumento per oltre il 62% e il 58% degli operatori (survey Apify).
  - La mia stima di conto economico dà un margine netto del 15-20% a 30 clienti.
- **Evidenza contro la confutazione.**
  - Il margine *lordo* per cliente può superare il 60%: i costi diretti di proxy ed esecuzione sono bassi.
  - Il margine netto può superare il 30% a scala (oltre 50 clienti) o con prezzi più alti in nicchie dove l'off-the-shelf non arriva.
  - Non ho dati reali di margine di agenzie di scraping (**non trovato**).
- **Esito.** La compressione sotto il 30% è **plausibile ma basata su stime**, non verificata con dati di margine reali.

### (b) La vendita richiede il founder → **PARZIALE**
- Evidenza generale sulle agenzie: 61,8% con forte dipendenza dai founder; il 70% non ha venditori full-time; il canale principale sono le referenze, che un servizio nuovo non ha.
- Il founder non ha pubblico. Il suo vantaggio distintivo (competenza scraping) si esprime soprattutto in prevendita tecnica: fattibilità, preventivi su siti difficili.
- Non ho però dati specifici sul fatto che un servizio standardizzato di scraping *non possa* essere venduto da un commerciale o via outbound.
- **Esito.** Il rischio è documentato per categoria affine, non per H03 in sé.

### (c) C'è conflitto con il datore di lavoro → **PARZIALE (rischio alto, non escludibile)**
- Il testo dell'art. 2105 e la giurisprudenza (Cass. 19096/2013, 19377/2025) danno rilievo a concorrenza potenziale e "medesimo settore produttivo". Basta la preordinazione per giustificare il licenziamento.
- L'art. 12-bis LDA vieta di fatto il riuso del codice aziendale.
- H03 vende lo stesso tipo di servizio (dati via scraping), cambia solo il cliente finale.
- Non ho verificato:
  - se il datore serve o potrebbe servire clienti e-commerce o retail;
  - il contratto del founder;
  - eventuali autorizzazioni ottenibili.
- **Esito.** Non risulta verificato come conflitto certo, ma è il criterio più pericoloso. Serve un parere legale e la lettura del contratto prima di qualsiasi passo, anche solo la costituzione della società.

## Attacco alle offerte concrete ovvie
1. **Monitoraggio prezzi per e-commerce (PMI).**
   - Prisync da 99 $/mese con trial senza carta; Price2Spy; Apify e-commerce tool a 1 $/1.000 prodotti; Google Merchant Center gratis per chi ha GTIN.
   - Il servizio gestito deve costare 3-5 volte di più e deve essere venduto a PMI che comprano in self-service.
   - Il leader PMI (Prisync) fa circa 6,6 M$/anno dopo oltre 10 anni (stima Latka): mercato piccolo e già servito. **Debole.**
2. **MAP monitoring per brand.**
   - Esiste un bisogno pagante, ma è stretto tra tool low-end (Bright Data da 250 $/mese con onboarding "personalizzato", Priceva 99 $) ed enterprise (Prowl da circa 6.000 $/mese).
   - Il caso Wiser (fornitore MAP con più di 750 clienti, Chapter 11 nel 2026) mostra che i clienti ci sono ma la redditività è difficile.
   - La vendita ai brand è enterprise: cicli lunghi, procurement, quindi founder o venditore senior. **Medio-debole.**
3. **Dati per ricerca di mercato.**
   - Bright Data vende dataset già pronti a 2,5 $/1.000 record (0,5 $ con abbonamento mensile).
   - Le società di ricerca hanno team interni o comprano da fornitori consolidati.
   - Si tratta spesso di progetti una tantum (ScrapeHero "On Demand" da 550 $), non di canoni ricorrenti, quindi il "prodotto" diventa progetto e consulenza: torna la dipendenza dal founder.
   - Rischio: i clienti di ricerca di mercato includono spesso banche e fondi (dati alternativi), cioè **ambiti esclusi**. **Debole e con rischio di sconfinamento.**
4. **Rate shopping hotel.**
   - Strumenti da 35-100 $/mese (Rate Parity Monitor, Lighthouse da 100 $/mese secondo HotelTechReport); PriceLabs lo include nel prezzo per camera.
   - Gli OTA (Booking) sono tra i siti più difesi. Il prezzo di riferimento è troppo basso per un servizio gestito. **Molto debole.**
5. **Trasversale.**
   - Gli agenti e gli strumenti AI (Firecrawl, Browse AI "AI-powered", Actor Apify richiamabili via MCP) abbassano il costo di "costruire lo scraper" verso zero.
   - Il 66,2% degli operatori intende provare tool AI (survey Apify). Il valore residuo del servizio si sposta su affidabilità, QA e anti-bot, proprio i costi che comprimono il margine.

## Cosa sopravvive comunque
- **Margine lordo per cliente.** È alto [stima], e il costo variabile (proxy, compute) è basso e documentato: Zyte da 0,13 $/1.000 richieste semplici, Apify da 1 $/1.000 schede prodotto. Se il problema vendita fosse risolto, l'economia unitaria non sarebbe negativa.
- **Spazio di prezzo per il servizio gestito.** ScrapeHero (199 $/sito/mese), Octoparse (Data Service da 599 $) e Browse AI (gestito da 500 $/mese) mostrano che *esiste* domanda pagante per il servizio "fatto per te" sopra il self-service. Il mercato non è vuoto, è conteso.
- **Rischio legale gestibile** per dati pubblici di prezzo: in Italia Ryanair ha perso in primo grado contro Viaggiare, e negli USA il verdetto CFAA contro Booking è stato annullato.
- **Variante meno attaccabile [stima].**
  - Un servizio verticale per una nicchia che il self-service non copre bene: siti difficili, molti piccoli siti locali, normalizzazione di cataloghi eterogenei, mercati italiani di nicchia.
  - Prezzo da 800 € in su al mese, venduto tramite un partner che ha già i clienti (agenzie e-commerce, software house verticali, integratori ERP) in white-label. Così la vendita non pesa sul founder.
  - Condizione preliminare: parere legale e verifica del contratto sul conflitto con il datore, e nessun riuso di codice aziendale.
  - Anche in questa forma, il traguardo di 50 k€ di margine in 24 mesi con founder ≤ 5 h/settimana resta **non dimostrato**.

## Fonti
Tutte con accesso il 2026-11-20.
- https://prisync.com/pricing/
- https://www.price2spy.com/pricing.html
- https://apify.com/pricing
- https://apify.com/store
- https://apify.com/junglee/amazon-crawler
- https://apify.com/apify/e-commerce-scraping-tool
- https://www.browse.ai/pricing
- https://www.octoparse.com/pricing
- https://brightdata.com/pricing/datasets
- https://brightdata.com/products/insights/map-monitoring
- https://www.zyte.com/pricing/
- https://www.firecrawl.dev/pricing
- https://www.scrapehero.com/pricing/
- https://support.google.com/merchants/answer/9626903
- https://www.freelancer.com/freelancers/skills/web-scraping
- https://www.freelancer.in/hire/data-scraping
- https://www.truelancer.com/web-crawling-freelancers?page=7 (solo estratto del motore)
- https://blog.apify.com/web-scraping-report-2026/
- https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/
- https://chapter11cases.com/blogs/news/in-re-wiser-solutions-a-credit-bid-section-363-sale-on-a-65-day-timeline
- https://www.minderest.com/blog/wiser-pricing-intelligence-alternative
- https://www.adweek.com/commerce/ipg-intelligence-node-acquisition/ (solo estratto)
- https://getlatka.com/companies/prisync (solo estratto)
- https://zoftwarehub.com/en-ae/products/price2spy/product-details (solo estratto)
- https://www.import.io/post/best-map-monitoring-software-2026
- https://www.softwareadvice.com/competitor-price-monitoring/prowl-profile/ (solo estratto)
- https://hoteltechreport.com/compare/lighthouse-rate-insight-vs-pricelabs-hotel-rate-shopper
- https://productive.io/bold/blog/founders-lead-the-way-but-how-far-can-they-take-an-agency-by-themselves
- https://sparktoro.com/blog/digital-agency-new-business-still-a-concern-referrals-still-rule-for-lead-gen-and-are-sales-pipelines-finally-recovering/
- https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:62014CJ0030
- https://blog.ericgoldman.org/archives/2024/08/ryanair-v-booking-cfaa-trial-ends-with-strangest-possible-outcome-guest-blog-post.htm (solo estratto)
- https://news.bloomberglaw.com/litigation/booking-com-wins-reversal-of-verdict-for-ryanair-scraping-case (solo estratto)
- https://www.pinsentmasons.com/out-law/news/unauthorised-screen-scraping-may-breach-computer-misuse-act-says-expert-in-wake-of-italian-court-ruling (solo estratto)
- https://brocardi.it/codice-civile/libro-quinto/titolo-ii/capo-i/sezione-iii/art2105.html
- https://brocardi.it/massimario/83743.html
- https://brocardi.it/massimario/78222.html (solo estratto)
- https://www.studiocataldi.it/articoli/14116-cassazione-attivita-concorrenziale-e-violazione-dell-obbligo-di-fedelta.asp
- https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1941-04-22;633~art12bis

Non raggiungibili o non trovati:
- Upwork, Fiverr e Malt: 403;
- Clutch, categoria web scraping: 404;
- churn del price monitoring, tasso di rottura degli scraper e margini reali delle agenzie di scraping: non trovati.
