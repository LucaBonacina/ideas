---
tipo: ipotesi
id: H01
titolo: "Dataset e API da scraping venduti a terzi"
sessione: S1
stato: "parziale"
fiducia: "media"
probabilita_successo: "10%"
tags: [ipotesi, S1]
---
# H01 — Dataset e API da scraping venduti a terzi

> **Gate aggiornato.** Per le idee di questa ipotesi che vendono dati o servizi di scraping serve l'**autorizzazione scritta del datore prima di qualunque esperimento**, con parere di un avvocato del lavoro (vedi [[Raccomandazione]], punto 4). Prevale sulle indicazioni più leggere scritte sotto.

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

Rapporti integrali: [[H01 Entusiasta]] · [[H01 Bucatore]]. Metodo: [[Protocollo di discovery]]. Profilo: [[Profilo e vincoli]].

## Ipotesi (pre-registrata)
Vendere dati raccolti via scraping (dataset, API, "actor" su marketplace tipo Apify Store, RapidAPI, Datarade, AWS Data Exchange) in domini non esclusi. (dal [[Registro delle ipotesi]])

## Criteri di confutazione (pre-registrati)
1. I ricavi mediani degli sviluppatori sui marketplace sono < 500 €/mese e i top sono pochi e concentrati.
2. La domanda pagante sta quasi tutta in domini esclusi (finanza, aziende, immobili).
3. I prezzi sono in corsa al ribasso.
4. Il rischio legale è sistematico.

## Caso a favore — Entusiasta
Sintesi di [[H01 Entusiasta]] (16 ricerche web).
- **Il canale cresce in fretta [fatto, dichiarato da Apify].** I pagamenti di Apify agli sviluppatori sono passati da 24 M CZK in tutto il 2024 (circa 1 M$) a 0,5 M$ al mese (novembre 2025), 1 M$ al mese (maggio 2026) e 2 M$ al mese (novembre 2026). L'ARR di Apify è salito da 15 a circa 40 M$. Fonti: https://apify.com/partners/actor-developers ; https://www.lupa.cz/aktuality/cesky-obchod-s-aplikacemi-uz-vyvojarum-mesicne-vyplaci-milion-dolaru-nakopl-ho-rozvoj-ai/ ; https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools (accesso 2026-11-20).
- **La domanda è fuori dai domini esclusi [fatto, calcolo sull'API dello Store].** Per categoria *principale* degli actor, i social pesano il 48,6% degli utenti mensili, la lead generation il 18,3% e gli immobili lo 0,8%. Nel mercato complessivo dello scraping la finanza (BFSI) vale il 29,4% (Mordor). SerpApi dichiara circa l'80% dei ricavi da AI e SEO (Sacra). Fonti: https://api.apify.com/v2/store ; https://www.mordorintelligence.com/industry-reports/web-scraping-market ; https://sacra.com/c/serpapi/.
- **Casi con numeri, tutti autodichiarati:**
  - Scrape Creators: 10-20 k$ di MRR in 12-18 mesi; circa 12 clienti fanno la maggior parte (https://www.betterlaunch.co/playbooks/adrian-scrape-creators-6).
  - ScrapingBee: 5 M$ di ARR e uscita a otto cifre (https://www.startupsfortherestofus.com/episodes/episode-783-bootstrapping-scrapingbee-to-5m-arr-and-an-8-figure-exit).
  - ParseForge su Apify: 2.000 actor, mese migliore 8 k$ da un solo cliente (https://blog.apify.com/parseforge-2000-actors/).
  - Bright Data: oltre 300 M$ di ARR.
- **Prezzi.** Sui dati "commodity" scendono, ma la spesa totale cresce e la qualità si paga: SerpApi enterprise costa 37,5 $ ogni 1.000 ricerche contro 0,3-0,75 $ dei cloni.
- **Rischio legale [fatto].** Non è sistematico per i dati pubblici non personali raccolti senza login:
  - negli USA le cause di Meta e di X contro Bright Data sono state archiviate, e Google contro SerpApi è stata archiviata due volte;
  - nell'UE c'è la sentenza CV-Online (C-762/19), che limita il diritto *sui generis*.
- **Concessione.** Il ricavo mediano è sotto i 500 €/mese: la media è circa 267 $ al mese per sviluppatore, e lo sviluppatore mediano ha circa 14 utenti al mese e i primi 10 sviluppatori hanno il 52% degli utenti. Però circa 46 sviluppatori stanno sopra la soglia di successo, e un esperto con un team non è lo sviluppatore mediano.
- **Idee proposte.**
  1. Un portafoglio di 30-80 actor ad alta affidabilità.
  2. Un'API di dati sulle risposte dei motori AI (GEO) in più lingue europee: DataForSEO coprirebbe ChatGPT solo per USA e inglese; Peec AI ha superato 4 M$ di ARR con 1.300 clienti.
  3. Un'API social/creator a crediti.
  4. Feed e-commerce europei venduti all'ingrosso.
  5. Un dataset di recensioni unito da più fonti.

## Caso contro — Bucatore di palloncini
Sintesi di [[H01 Bucatore]] (19 ricerche web).
- **Concentrazione estrema [fatto, dati API].**
  - Lo Store ha circa 124 mila actor; solo 993 superano i 100 utenti al mese e 147 i 1.000.
  - I primi 100 actor raccolgono il 64,9% degli utenti; Apify da sola il 32,5%; i primi 10 account il 61,1%.
- **Ricavi per sviluppatore [stima].** Ripartendo i 2 M$ di payout in proporzione agli utenti, lo sviluppatore mediano con trazione incassa circa 38 $ al mese e circa 74 su 1.722 superano i 4.800 $. Sull'intero catalogo la mediana è circa 0.
- **Offerta che cresce più della domanda [fatto, conteggi con definizioni forse diverse].** Gli actor sono passati da circa 8.000 (novembre 2025) a 124 mila; nello stesso periodo i payout sono cresciuti di circa 3,5 volte.
- **Economia unitaria [fatto].** Apify trattiene il 20% più i costi di piattaforma. Il passaggio imposto al pay-per-event porta a zero i ricavi degli actor non migrati (https://blog.apify.com/standardizing-actor-pricing). Il caso "98 actor" richiede 15-20 ore a settimana, di cui 5-7 di manutenzione (https://blog.apify.com/building-98-actors-on-apify-store/).
- **Marketplace morti o ridimensionati [fatto].**
  - RapidAPI: valutata 1 miliardo, poi utenti "nell'ordine delle migliaia", organico ridotto dell'82% e asset venduti a Nokia (https://techcrunch.com/2024/11/13/nokia-acquires-rapid-the-api-company-once-valued-at-1b/).
  - Azure DataMarket: chiuso nel 2017 per scarso interesse.
  - Proxycurl: circa 10 M$ di ricavi, chiusa dopo la causa di LinkedIn (https://nubela.co/blog/goodbye-proxycurl/).
- **Domanda nei domini esclusi [fatto].**
  - Gli actor con l'etichetta LEAD_GENERATION assorbono il 42% degli utenti, il 51% tra quelli della community.
  - Nei dati alternativi compra soprattutto la finanza, con circa 20 clienti per dataset, in calo (https://www.neudata.co/blog/state-of-the-alternative-data-market-2026).
- **Prezzi [fatto, contro la confutazione].** I prezzi dei leader sono stabili o in aumento (TikTok da 3 a 3,7 $ ogni 1.000); la guerra di prezzo riguarda i cloni.
- **Rischio legale.** Alto sui target più richiesti: hiQ, Proxycurl, ProAPIs (LinkedIn), Reddit contro SerpApi, la multa GDPR di 240 k€ a KASPR (https://www.cnil.fr/en/data-scraping-kaspr-fined-eu240000) e CV-Online. Non è uniforme: Meta ha perso contro Bright Data.
- **Probabilità stimata dal Bucatore: 3-8%.** Sopravvivono solo nicchie non escluse con target difficili, con obiettivi iniziali di 1-5 k$ al mese.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| # | Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|---|
| 1 | La lead generation (esclusa) vale il 18% della domanda dello Store, secondo l'Entusiasta, oppure il 42%, secondo il Bucatore | Entrambi, con metodi diversi | **Hanno ragione tutti e due, ma su definizioni diverse.** Ho riscaricato l'API il 2026-11-20 (13.948 actor, 1,24 M di coppie utente-actor al mese). Per categoria *principale* la lead generation vale il 16,6%; per *qualunque* etichetta il 42,3%. Le etichette le sceglie lo sviluppatore: tra gli actor con etichetta lead ci sono Instagram, Twitter, Reddit e Google Search. Gli actor davvero da lead (Google Maps, LinkedIn) pesano circa il 15-25% [stima]. Le categorie non escluse sono la maggioranza: social media 44,7% per categoria principale, e-commerce, lavoro, video, AI e SEO. **Il criterio 2 non è verificato.** | https://api.apify.com/v2/store?limit=1000&offset=0…14000 (calcolo del Giudice) |
| 2 | Lo sviluppatore mediano incassa ben meno di 500 €/mese e solo alcune decine superano la soglia | Il Bucatore; l'Entusiasta lo concede | **Confermato.** La home di Apify dichiara "$2M paid out last month" (autodichiarato). Ho ripartito i payout in proporzione agli utenti degli actor della community (832 mila coppie, 1.656 sviluppatori). Lo sviluppatore mediano ha 16 utenti al mese, cioè circa 27-38 $ al mese con payout di 1,4-2 M$. Sopra i 4.800 $ al mese ci sono 51-73 sviluppatori. I primi 10 hanno il 45,5% degli utenti, i primi 100 l'82%. | https://apify.com/ ; API dello Store (calcolo del Giudice) |
| 3 | Google contro SerpApi: archiviata due volte (Entusiasta) oppure ancora pendente (Bucatore) | Divergenza | **Hanno ragione entrambi, in momenti diversi.** Il 10 novembre 2026 il giudice ha accolto la mozione di archiviazione anche sulla domanda modificata. Google può però modificarla ancora entro il 30 novembre 2026. La decisione riguarda la sufficienza delle accuse DMCA e "did not rule that SerpApi's scraping practices are lawful". Il rischio non è chiuso; resta un costo di difesa alto per chi rivende dati di grandi piattaforme. | https://www.seroundtable.com/google-loses-again-against-serpapi-42508.html |

### Applicazione dei criteri di confutazione
1. **Ricavi mediani < 500 €/mese e top pochi e concentrati: VERIFICATO.** Mediana di circa 30 $ al mese tra chi ha utenti, circa 0 sul catalogo. Il gruppo sopra la soglia esiste (51-73 sviluppatori), ma è circa il 3-4% dei 1.656 sviluppatori censiti.
2. **Domanda quasi tutta nei domini esclusi: NON VERIFICATO.** La parte esclusa è rilevante, circa 15-25% sullo Store e la quota finanziaria nei dati alternativi, ma non è "quasi tutta" (verifica 1).
3. **Prezzi in corsa al ribasso: PARZIALE.** I cloni costano 10-50 volte meno, ma i leader tengono o alzano i prezzi (storico prezzi dall'API, [[H01 Bucatore]] E16).
4. **Rischio legale sistematico: PARZIALE.** È alto su social, LinkedIn, Google e dati personali (GDPR, KASPR); è basso sui dati di prodotto e prezzo pubblici e senza login.

Il registro dice che un criterio verificato con evidenza basta per confutare o ridimensionare. Qui il criterio 1 è verificato. **L'ipotesi è ridimensionata.** La forma "pubblico actor o API su un marketplace e incasso" è confutata come strada attesa verso 50 k€: il risultato tipico è vicino a zero. Resta in piedi una forma più stretta: un portafoglio professionale su target difficili e non personali, in cui la competenza anti-bot fa la differenza tra leader e cloni, con un canale diretto B2B accanto allo Store.

### Verdetto
- **Stato:** parziale.
- **Fiducia:** media. Le distribuzioni le ho misurate io su dati primari. I payout per sviluppatore restano una stima: Apify non pubblica la mediana.
- **Probabilità di successo: 10%** (≥ 50 k€ di margine entro 24 mesi, founder ≤ 5 h/settimana). Perché:
  - la frequenza di base, cioè la quota di chi ha già trazione e supera la soglia, è circa del 3-4%;
  - la competenza anti-bot e un team pagato la alzano;
  - la manutenzione delegata è un costo fisso che alza la soglia di ricavo lordo;
  - pesano la dipendenza da Apify, che ha già cambiato unilateralmente il modello di ricavo, e la concorrenza di Apify stessa sugli actor più usati.

Su tutte le idee pesa un rischio trasversale: la compatibilità con il lavoro dipendente (art. 2105 c.c.). Il founder fa scraping per mestiere, e vendere dati da scraping è lo stesso settore tecnico anche con domini diversi. Va chiarito sul contratto prima di pubblicare qualunque cosa (vedi [[H03 Servizio di scraping a prodotto per clienti non finanziari]]).

## Idee concrete che sopravvivono
- [[I-H01-1 Portafoglio di actor su target difficili non personali]]: punteggio v2 **64** (58 in [[Classifica]]).
- [[I-H01-2 API dati di visibilità nelle risposte AI multilingua]]: punteggio v2 **53** (47 in [[Classifica]]).

Scartate:
- **API social/creator:** GDPR sui profili personali, Apify e grandi operatori già leader, terreno legale peggiore.
- **Dataset di recensioni:** dati personali dei recensori e prezzi a 0,04-0,6 $ ogni 1.000.
- **Dataset su Datarade/AWS:** il compratore con budget è la finanza (esclusa), servirebbe vendita consultiva e mancano dati sui ricavi dei venditori.
- **API su RapidAPI:** canale in declino documentato.
- **Feed e-commerce all'ingrosso:** confluito in [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]].

## Fonti
Verifiche del Giudice, accesso 2026-11-20:
- https://api.apify.com/v2/store?limit=1000&offset=0 (fino a offset 14000), scaricata e analizzata dal Giudice.
- https://apify.com/ ("$2M paid out last month. Many developers earn over $3k"), autodichiarato.
- https://www.seroundtable.com/google-loses-again-against-serpapi-42508.html

Le altre fonti sono elencate nei rapporti integrali [[H01 Entusiasta]] e [[H01 Bucatore]].

## Nota sui numeri di Apify
Le note H01 e H17 citano numeri diversi su Apify, perché misurano cose diverse:
- **Numero di actor:** ~124-127 mila è il totale dichiarato da Apify; ~14 mila (13.948) sono gli actor pubblici restituiti dall'API dello Store, scaricati dal giudice di H01.
- **Numero di sviluppatori:** 1.656 (H01) e ~7.500 (H17) vengono da fonti e definizioni diverse (sviluppatori della community con utenti contro tutti i creatori); non sono state riconciliate.
- **Pagamenti agli sviluppatori:** la crescita riportata in H01 (0,5 → 1 → 2 M$/mese) rende plausibili i 2 M$/mese, ma restano un dato dichiarato da Apify e non verificato in modo indipendente (H17). La conclusione non cambia: lo sviluppatore tipico incassa ~30 $/mese.

