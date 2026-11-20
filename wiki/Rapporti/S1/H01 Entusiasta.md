---
tipo: rapporto
sessione: S1
ipotesi: H01
ruolo: entusiasta
data: 2026-11-20
ricerche_web_usate: 16
tags: [rapporto, S1, H01]
---
# H01 — Dataset e API da scraping venduti a terzi · Entusiasta

Ipotesi: [[Registro delle ipotesi]] (H01). Profilo e vincoli: [[Profilo e vincoli]]. Metodo: [[Protocollo di discovery]].

## Sintesi

Il caso più forte per H01 è che **il mercato dei dati da scraping venduti "a consumo" è in forte crescita, ha già un canale di distribuzione integrato (Apify Store) e la domanda pagante sta per la maggior parte fuori dai domini esclusi**.

- **Crescita del canale [fatto, dati dichiarati da Apify]:** i pagamenti di Apify agli sviluppatori sono passati da circa 24 milioni di CZK in tutto il 2024 (circa 1 M$) a oltre 500 k$ al mese (ottobre 2025), poi a 1 M$ al mese (aprile-maggio 2026), poi a 1,4 M$ e infine a **2 M$ al mese** (pagina attuale, novembre 2026). In 12 mesi i pagamenti sono quintuplicati. Nello stesso periodo l'ARR di Apify è salito da 15 a circa 40 M$.
- **La domanda è fuori dai domini esclusi [fatto + stima]:** nei ~8.500 actor più popolari dello Store, il 48,6% degli utenti mensili attivi (MAU) è sui social media e solo lo 0,8% sugli immobili. Il "lead generation", in parte escluso, pesa il 18,3%. Nel mercato complessivo dello scraping il settore bancario, finanziario e assicurativo (BFSI) vale il 29,4% secondo Mordor. SerpApi dichiara il 40% dei ricavi da aziende AI, il 40% da SEO e marketing e il 20% da altri usi.
- **Esistono casi solidi fuori dai marketplace [dati autodichiarati]:**
  - Scrape Creators: API di dati social, 10-20 k$ di MRR in 12-18 mesi, con circa 12 clienti che pesano per la maggior parte.
  - ScrapingBee: avviata quasi senza capitale esterno, arrivata a 5 M$ di ARR e venduta per una cifra a otto zeri.
  - SerpApi: senza capitale esterno, 1,5 milioni di account attivati.
  - Bright Data: oltre 300 M$ di ARR, in crescita di oltre il 50% l'anno.
- **Il rischio legale non è sistematico per i dati pubblici non personali [fatto]:**
  - Negli USA sono state archiviate le cause di Meta e di X contro Bright Data (2024). Per Google contro SerpApi le pretese DMCA sono state archiviate due volte (luglio e novembre 2026).
  - Nell'UE la Corte di giustizia ha limitato il diritto *sui generis* sulle banche dati ai casi in cui l'estrazione danneggia l'investimento (CV-Online, 2021).
- **Punto debole, riportato con onestà [stima]:** la distribuzione dei guadagni sullo Store è a legge di potenza.
  - La media è circa 267 $ al mese per sviluppatore (2 M$ divisi per 7.500 sviluppatori). La mediana è certamente più bassa.
  - I primi 10 sviluppatori della community raccolgono il 52% dei MAU, i primi 100 l'88%.
  - Solo circa 40-55 sviluppatori sembrano sopra la soglia di successo.
  - La prima metà del primo criterio di confutazione è quindi probabilmente vera. La tesi dell'Entusiasta è che la mediana non è il riferimento giusto per un esperto di scraping avanzato con un team che lavora su un portafoglio. Il gruppo che conta è quello dei pubblicatori professionali, e quel gruppo sta crescendo.
- **Angolo migliore per questo profilo:** un **portafoglio di "data product" su 2-3 canali**: Apify Store per la distribuzione, un'API diretta a crediti per i clienti grandi e, come canali secondari, Datarade e AWS Data Exchange. Le verticali consigliate sono:
  - dati delle risposte dei motori AI in più lingue (GEO);
  - dati social e creator;
  - e-commerce europeo, recensioni e reputazione.

  Sono domini non esclusi, con pagatori evidenti, e la manutenzione è delegabile a un team.

## Evidenze a favore

1. **[fatto, dichiarato da Apify] Apify paga agli sviluppatori della community 2 M$ al mese.** La pagina per gli sviluppatori riporta "$2M Paid out monthly", "7,500 Community developers", "126,812 Tools & automations" e "Many developers earn over $3k". Le pagine del blog, aggiornate in un altro momento, riportano "$1.4M paid out last month". (Fonti 1, 2)
2. **[fatto, dichiarato] La crescita dei pagamenti agli sviluppatori è molto rapida:**
   - 15 milioni di CZK nel 2023 e 24 milioni di CZK nel 2024 (Lupa.cz, febbraio 2025, fonte 3);
   - "last month… over half a million dollars", dichiarazione del CEO Jan Čurn del 3 novembre 2025 (fonte 4);
   - 1 M$ nell'ultimo mese, "quintuplicato in 12 mesi" (Lupa.cz, 15 maggio 2026, fonte 5);
   - 2 M$ al mese nella pagina di novembre 2026 (fonte 1).
   - [stima] Il ritmo annuo attuale è di circa 24 M$ contro circa 1 M$ in tutto il 2024, cioè circa 20 volte in meno di due anni.
3. **[fatto, dichiarato] La piattaforma cresce.** I clienti di Apify sono passati da circa 7.000 (2024) a 25.000 (fine 2025). L'ARR è passato da 15 a circa 40 M$ (fonte 5). Il fatturato 2024 è cresciuto del 65% a 298 milioni di CZK (fonte 3).
4. **[fatto, misurato da me] La domanda sullo Store sta per la maggior parte in domini non esclusi.** Ho scaricato dall'API pubblica `api.apify.com/v2/store` i ~8.500 actor più popolari, su 127.307 totali (fonte 6). Ripartizione dei MAU a 30 giorni per categoria principale, su 1,06 milioni di MAU in totale:

   | Categoria principale | Quota dei MAU |
   |---|---|
   | Social media | 48,6% |
   | Lead generation (in parte esclusa) | 18,3% |
   | Lavoro (annunci) | 5,3% |
   | Video | 4,6% |
   | AI | 4,6% |
   | Automazione | 4,5% |
   | Strumenti SEO | 4,4% |
   | E-commerce | 4,3% |
   | Viaggi | 1,9% |
   | Immobili (esclusa) | 0,8% |

   [stima] Almeno il 75% della domanda misurabile è in domini ammessi.
5. **[fatto] Lo scraping è un mercato ampio che non dipende dalla finanza.**
   - Mordor stima il mercato dello scraping a 1,56 mld$ nel 2026, con previsione di 4,03 mld$ nel 2032 (crescita annua del 17%). Il BFSI vale il 29,4% (fonte 7).
   - Le stime di mercato variano molto da un istituto all'altro (ScrapeOps, fonte 8). Le uso solo come indicazione di direzione.
6. **[fatto, dichiarato da Sacra e dall'azienda] Nel caso SerpApi i clienti pagano bene e non sono soprattutto finanziari.**
   - Ricavi: circa il 40% da aziende AI (OpenAI, Cursor, Perplexity, Meta), il 40% da SEO e marketing, il 20% da altri usi.
   - Piani enterprise da 3.750 $ al mese per 100.000 ricerche, cioè 37,5 $ ogni 1.000. I concorrenti "commodity" sono a 0,30-0,75 $ ogni 1.000.
   - SerpApi è senza capitale esterno dal 2017 (fonte 9) e dichiara 1,5 milioni di account attivati (fonte 10).
   - [stima] La differenza di prezzo di 50-100 volte mostra che affidabilità e qualità sono pagate molto più del dato "grezzo".
7. **[fatto, dichiarato] Bright Data ha superato i 300 M$ di ARR, cresce di oltre il 50% l'anno e punta a 400 M$ a metà 2026.** La domanda è trainata dai dati per l'AI (CTech, 23 novembre 2025, fonte 11; blog aziendale, fonte 12). La domanda di dati web freschi cresce a livello strutturale.
8. **[fatto] La domanda "nuova" viene dall'AI e dagli agenti.**
   - Apify sta passando tutto lo Store al pagamento per evento (PPE): "73% of our customers… preferred the pay-per-event model" e "An AI agent cannot effectively manage a dozen different $50/month subscriptions" (fonte 13).
   - Il plugin Apify per Claude ha oltre 57.000 installazioni (vmblog, fonte 14).
   - [stima] Un actor pubblicato diventa automaticamente vendibile anche agli agenti tramite MCP. È un canale di distribuzione che non richiede un pubblico proprio.
9. **[fatto] Esiste una categoria nuova di acquirenti di dati raccolti dal web, la GEO (ottimizzazione per i motori di risposta AI).**
   - Peec AI (Berlino) ha superato 4 M$ di ARR in 10 mesi con 1.300 clienti e ne aggiunge circa 300 al mese (TechCrunch, 17 novembre 2025, fonte 15). Secondo Dealroom ha superato 10 M$ di ARR a maggio 2026 (fonte 16).
   - Profound ha raccolto 180 M$ con una valutazione di 1,8 mld$ (settembre 2026). Sette startup GEO hanno raccolto 472 M$ in tutto (Dealroom, fonte 16).
   - DataForSEO vende "LLM Mentions" a consumo, ma i dati di ChatGPT coprono **solo gli USA e l'inglese** (fonte 17).
   - [stima] Per le lingue europee c'è uno spazio libero.
10. **[fatto] Il canale si costruisce senza pubblico.** Apify dichiara oltre 10.000 nuove registrazioni al giorno, gestisce fatturazione ed esecuzione e trattiene il 20% (fonti 1, 18). RapidAPI trattiene circa il 20-25% (fonte 19, autodichiarato da un venditore). Esistono cataloghi B2B:
    - Datarade: oltre 2.000 fornitori, commissione intorno al 30%, ricavi stimati da Latka circa 2,1 M$ nel 2024 (fonte 20);
    - AWS Data Exchange: oltre 3.500 prodotti di oltre 300 fornitori (fonte 21).
11. **[fatto] I prezzi unitari sul marketplace sono bassi ma i margini sono alti**, perché il costo marginale per risultato è minimo:
    - TikTok Scraper: da 3,7 $ ogni 1.000 risultati (piano gratuito) fino a 0,5 $ ogni 1.000 (piano Diamond);
    - componenti aggiuntivi AI come "ai-video-description": 15 $ ogni 1.000, cioè 3-4 volte il dato base (prezzi letti dall'API dello Store, fonte 6).
    - Un venditore su RapidAPI dichiara "Margins north of 95% are normal" sugli abbonati paganti (fonte 19, autodichiarato).
12. **[fatto] Lo Store premia la qualità, e questo aiuta un nuovo arrivato competente.** Dal 19 novembre 2026 nelle categorie affollate la ricerca dello Store pesa l'uso reale: gli actor con poco uso escono dai risultati (fonte 22). Al contrario, "An Actor that pulls Instagram comment sentiment for brand monitoring has almost no competition" (fonte 22).
    - [stima] Per chi sa fare scraping difficile (anti-bot, alta affidabilità) la selezione per qualità è un vantaggio, non una barriera.

## Casi di successo con numeri

Tutti i numeri sono **autodichiarati** dagli interessati o pubblicati da Apify, che ha interesse a mostrarli. Nessuno è certificato.

| # | Caso | Numeri | Natura della fonte |
|---|---|---|---|
| 1 | **Apify Store, aggregato** | 2 M$ al mese pagati a 7.500 sviluppatori; "the most successful independent creators… over $10,000 monthly recurring revenue. Many others make more than $1,000" | Apify (fonti 1, 18) |
| 2 | **Scrape Creators** (Adrian Horning, API di dati social) | Avvio a giugno 2024; oltre 10 k$ di MRR in 12 mesi; in seguito citato a 20 k$ al mese; "600 people who have paid… maybe like 12 who pay for the majority"; acquisizione clienti con messaggi diretti su X e SEO programmatica | Intervista e post del fondatore (fonti 23, 24). Aveva già un pubblico da corsi di scraping, cosa che il nostro founder non ha |
| 3 | **ScrapingBee** (API di scraping) | Avviata quasi senza capitale esterno (solo TinySeed), arrivata a 5 M$ di ARR, venduta per una cifra a otto zeri (2025) | Podcast "Startups for the Rest of Us", ep. 783 (fonte 25) |
| 4 | **SerpApi** (dati dalle pagine dei risultati di ricerca) | Senza capitale esterno dal 2017; 1,5 milioni di account; piani enterprise da 3.750 $ al mese | Sacra e comunicato aziendale (fonti 9, 10) |
| 5 | **ParseForge** (fabbrica di actor su Apify) | Primo actor circa 1.000 $ al mese; mese migliore 8.000 $ da un solo cliente; da 124 a 2.000 actor in 8 mesi; 31.000 utenti totali e 4.300 al mese; strategia: replicare i 100 actor più usati in versioni migliori o più economiche | Case study di Apify (fonti 26, 27) |
| 6 | **Goldmine / Logical Scrapers** (Daniel Mesfin) | 40 actor, circa 15.000 utenti, circa 1.100 MAU; premio regionale EMEA; "There are people going full-time on Apify" | Case study di Apify (fonte 28), ricavi non dichiarati |
| 7 | **Guillaume Lancrenon** (attività a tempo parziale) | Da 500 $ al mese con altri progetti a oltre 2.000 $ al mese su Apify Store, con actor per prospezione commerciale | Case study di Apify (fonte 29). Dominio "lead", quindi escluso per noi; vale come prova del modello |
| 8 | **Bright Data** (riferimento di scala) | Oltre 300 M$ di ARR, crescita di oltre il 50% l'anno | Dichiarazione del CEO (fonte 11) |
| 9 | **Peec AI** (acquirente o uso tipo dei dati GEO) | Oltre 4 M$ di ARR in 10 mesi, oltre 10 M$ a maggio 2026 | TechCrunch, Dealroom (fonti 15, 16) |

**Distribuzione, riportata con onestà (dati misurati da me sull'API dello Store, fonte 6):**
- I 10 actor più usati hanno da 45.000 a 324.000 utenti; "Most published Actors have somewhere between 0 and 5 users" (fonte 30, autodichiarato da uno sviluppatore).
- Su 1.129 sviluppatori della community presenti fra i ~8.500 actor più popolari:

  | Soglia di MAU aggregati | Sviluppatori |
  |---|---|
  | ≥ 100 | 303 |
  | ≥ 500 | 146 |
  | ≥ 1.000 | 99 |
  | ≥ 2.400 | 46 |
  | ≥ 5.000 | 23 |

  La mediana è circa 14 MAU. I primi 10 raccolgono il 52% dei MAU della community, i primi 100 l'88%.

  Limite del dato: la coda lunga è sottostimata, perché ParseForge risulta con 672 MAU nel mio campione contro i 4.300 dichiarati. Inoltre la somma dei MAU conta due volte gli utenti che usano più actor.
- Il caso "medio" reale è un actor Vinted che dopo 3 mesi incassa circa 200 $ al mese con 13 MAU (fonte 31, autodichiarato).
- **[stima] Ricavo per MAU:** 2 M$ pagati divisi per circa 690.000 MAU della community fanno circa 2,9 $ di pagamento allo sviluppatore per MAU al mese. È un valore per eccesso, perché i MAU sono sottostimati nella coda. Coincide con il premio della challenge Apify di 2 $ per MAU (fonte 4) e con "1.000 MAU ≈ oltre 3k$" della pagina sviluppatori.

## Risposta preventiva ai criteri di confutazione

**C-1. "Ricavi mediani degli sviluppatori < 500 €/mese e top pochi e concentrati."**
- *Cosa è vero:* la mediana è quasi certamente sotto i 500 €. La media è circa 267 $ al mese ed è tirata su dalla coda alta. La concentrazione è forte: i primi 10 hanno il 52% dei MAU. **Su questo l'Entusiasta concede.**
- *Perché non basta a confutare:*
  1. Il criterio chiede che *anche* i top siano "pochi". [stima] Con circa 2,9 $ per MAU, la soglia di successo (circa 7 k$ al mese di pagamenti, vedi sotto) richiede circa 2.400 MAU. Oggi ci sono circa 46 sviluppatori sopra questa soglia e 99 sopra i 1.000 MAU. Sono decine di attività, non una manciata, e il gruppo cresce con un mercato che si è moltiplicato per circa 20 in due anni.
  2. La mediana comprende migliaia di pubblicazioni amatoriali: 126.812 strumenti per 7.500 sviluppatori. Il riferimento giusto per un esperto con un team sono i pubblicatori professionali (ParseForge, Goldmine, automation-lab con 68 actor e oltre 15.000 MAU).
  3. Il marketplace è *uno* dei canali. I casi diretti (Scrape Creators 10-20 k$ di MRR, ScrapingBee 5 M$ di ARR, SerpApi) non compaiono nella distribuzione Apify.
- *Conto della soglia [stima]:* 50 k€ l'anno di margine sono circa 4,8 k$ al mese, con un cambio ipotizzato di 1 € ≈ 1,15 $ non verificato. Aggiungendo circa 2 k€ al mese per un manutentore a tempo parziale servono circa 7 k$ al mese di pagamenti Apify, cioè circa 2.400 MAU. In alternativa bastano 10-15 clienti diretti da 300-500 $ al mese più una base Apify più piccola.

**C-2. "La domanda pagante sta quasi tutta in domini esclusi."**
- **Confutato dai dati.**
  - Apify Store: social media 48,6% dei MAU, immobili 0,8%. Il lead generation (18,3%) è la sola grande categoria esclusa.
  - Mercato dello scraping: BFSI al 29,4% (Mordor).
  - SerpApi: 80% dei ricavi da AI e SEO.
  - Nuova domanda: GEO e dati per l'AI.
- Il mercato dei "dati alternativi" per i fondi è davvero dominato dalla finanza: 2,8 mld$ di spesa dei gestori patrimoniali nel 2025 secondo Neudata (fonte 32). È un segmento che va evitato, non la domanda complessiva.

**C-3. "I prezzi sono in corsa al ribasso."**
- *Parzialmente vero* nelle categorie "commodity":
  - prezzi a scaglioni fino a 0,5 $ ogni 1.000 risultati;
  - un tweet scraper a 0,4 $ ogni 1.000, "cheapest";
  - Bright Data scesa da 1 $ a 0,75 $ ogni 1.000 record, con proxy residenziali "50% OFF" (fonti 6, 12).
- *Ma* la spesa totale cresce molto più del calo dei prezzi: pagamenti Apify circa 20 volte, Bright Data +50% l'anno, ARR Apify da 15 a 40 M$.
- Inoltre i prezzi restano molto diversi a seconda della qualità:
  - SerpApi a 37,5 $ ogni 1.000 contro 0,3 $ dei concorrenti economici;
  - componenti aggiuntivi AI a 3-4 volte il dato base;
  - rivendite di dati LLM a 350 $ ogni 1.000 query (fonte 17).
- [stima] Il ribasso colpisce chi vende il dato grezzo facile, non chi vende dati difficili da ottenere o arricchiti.

**C-4. "Il rischio legale è sistematico."**
- *Non per i dati pubblici, non personali e raccolti senza login:*
  - X Corp contro Bright Data, archiviata nel maggio 2024. Il giudice Alsup ha avvertito del rischio di "information monopolies" (fonte 33).
  - Meta contro Bright Data, archiviata nel 2024 (fonte 33).
  - Google contro SerpApi: pretese DMCA archiviate il 20 luglio 2026 e di nuovo, sulla versione emendata, nel novembre 2026 (fonti 34, 35). La corte però "did not rule that SerpApi's scraping practices are lawful".
  - UE: con la sentenza CV-Online (C-762/19) il diritto *sui generis* è violato solo se l'estrazione danneggia l'investimento del costitutore della banca dati (fonte 36).
- *Rischi residui veri, da ammettere:*
  - Reddit contro SerpApi va avanti a New York (fonte 34);
  - GDPR sui dati personali, anche dei profili pubblici di creator;
  - termini d'uso nei casi con login.
- [stima] Il rischio è **gestibile con il design del prodotto** e non è sistematico:
  - preferire dati di prodotto, prezzi e risposte AI;
  - per i social, limitarsi a contenuti pubblici aggregati e account business;
  - niente login;
  - valutazione legale per verticale.
- Resta da verificare la compatibilità con il contratto di lavoro (art. 2105 c.c.). Le idee sotto stanno fuori dagli ambiti del datore.

## Idee concrete

Le idee sono ordinate per forza del caso. Tutte escludono finanza, aziende come lead, immobili, appalti e aste.

### Idea 1 — "Data factory" di actor ad alta affidabilità in categorie non escluse (Apify Store e altri canali)
- **Cosa:** un portafoglio di 30-80 actor nelle categorie con domanda misurata: social e video (TikTok, Instagram, YouTube, X, Reddit), recensioni (Google Maps Reviews, Trustpilot, Tripadvisor, App Store), e-commerce (Amazon, eBay venduti, TikTok Shop, Temu, Etsy), SEO e trend (Google Trends, risultati di ricerca con AI Overview). È la strategia di ParseForge: battere i 100 actor più usati per copertura, prezzo e affidabilità, e aggiungere componenti AI.
- **Chi paga:** agenzie di marketing, startup AI e agenti tramite MCP, analisti, piccoli brand.
- **Prezzi di riferimento [fatto]:**
  - 0,5-5 $ ogni 1.000 risultati per il dato base;
  - 10-15 $ ogni 1.000 per gli arricchimenti AI;
  - MAU di riferimento per singolo actor: Google Maps Reviews 10.025, Trustpilot (automation-lab) 1.369, eBay venduti 1.040, Google Trends (Apify) 3.559 (fonte 6).
- **Distribuzione:** integrata (Store con oltre 10.000 registrazioni al giorno, MCP e agenti). In aggiunta, pubblicazione speculare su RapidAPI e collegamenti diretti.
- **Vantaggio:** lo scraping difficile (anti-bot, proxy legati al paese, superamento di Datadome) è proprio ciò che fa perdere utenti ai concorrenti (vedi l'actor Vinted che ha perso il 76% degli utenti, fonte 31). La nuova ricerca dello Store premia l'affidabilità.
- **Delegabilità:** alta. Uno o due sviluppatori fanno manutenzione e pubblicazione, il founder decide le priorità e cura i casi difficili per circa 3-5 ore a settimana.
- **Obiettivo [stima]:** circa 2.400 MAU, cioè circa 7 k$ al mese di pagamenti, in 18-24 mesi. Rischi: dipendenza dalla piattaforma e concentrazione.

### Idea 2 — API dati "AI answer visibility" in più lingue (IT, ES, FR, DE e altre)
- **Cosa:** raccolta strutturata delle risposte di ChatGPT, Perplexity, Gemini, Google AI Overview e AI Mode per insiemi di domande in lingue europee: citazioni, marchi menzionati, sentiment, fonti. Venduta come API e dataset.
- **Chi paga:** strumenti GEO (Peec AI ha 1.300 clienti e ne aggiunge circa 300 al mese), agenzie SEO europee, brand.
- **Prezzi di riferimento [fatto]:**
  - DataForSEO LLM Mentions: da 0,02 a 0,1 $ per richiesta, impegno minimo da 50 a 100 $ al mese a seconda della pagina, ChatGPT **solo USA e inglese** (fonte 17);
  - Apify: componente "AI Mode" da 0,001 a 0,2 $ per evento (fonte 6);
  - una rivendita su Apify chiede 350 $ ogni 1.000 query (fonte 17).
- **Distribuzione:** Apify (gli actor "chatgpt" e "perplexity" esistenti hanno solo poche centinaia di MAU, quindi la categoria è poco affollata) e contatti diretti con un elenco definito di strumenti GEO e agenzie.
- **Vantaggio:** raccolta resistente ai blocchi, su larga scala e con geolocalizzazione per paese. Copertura delle lingue che i grandi fornitori non hanno.
- **Delegabilità:** media-alta. Pipeline e controllo qualità li gestisce il team.
- **Rischi:** termini d'uso dei fornitori AI, cambi frequenti delle interfacce, sovrapposizione con H02.

### Idea 3 — API diretta di dati social e creator a crediti (modello Scrape Creators)
- **Cosa:** un'API unica con molti endpoint (profili pubblici, post, commenti, annunci pubblicitari, TikTok Shop), crediti che non scadono, pagamento a consumo.
- **Chi paga:** piattaforme di influencer marketing, agenzie, applicazioni AI, ricercatori.
- **Prezzi di riferimento [fatto]:** Scrape Creators ha raggiunto 10-20 k$ di MRR con circa 600 paganti, di cui circa 12 pesano per la maggior parte (fonte 24). Sullo Store i social sono il 48,6% dei MAU.
- **Distribuzione:** SEO programmatica, una pagina per endpoint e per piattaforma; versione "light" su Apify come canale di acquisizione; contatti diretti con i clienti che già usano actor social.
- **Vantaggio:** qualità e affidabilità su piattaforme difficili. Il founder non ha il pubblico di Horning, quindi il canale Apify deve fare da sostituto.
- **Delegabilità:** alta, a regime.
- **Rischi:** GDPR sui profili personali (meglio account business e creator e dati aggregati), termini d'uso delle piattaforme, concorrenza forte (harvestapi, apidojo, clockworks).

### Idea 4 — Dati e-commerce e marketplace europei per la gestione prezzi e assortimento
- **Cosa:** feed giornalieri o API di prezzi, disponibilità, assortimento e recensioni su marketplace UE (Amazon EU, Zalando, eBay, Vinted e rivendita, Temu e Shein, comparatori di prezzo), venduti all'ingrosso a strumenti di price intelligence e a brand per il monitoraggio dei prezzi minimi (MAP).
- **Chi paga:** brand e distributori, rivenditori, software di pricing.
- **Prezzi di riferimento [fatto]:** Prisync da 199 a 799 $ al mese per 100-5.000 prodotti, con l'accesso API al 20% in più (fonte 37).
- **Distribuzione:** inserimento in cataloghi (Datarade, AWS Data Exchange) più contatti diretti con un elenco definito di software di pricing.
- **Onestà:** la domanda *self-service* sullo Store per i siti europei è piccola (Vinted 451 MAU totali, Zalando 23, idealo 63; fonte 6). Il valore è nel B2B all'ingrosso, quindi la vendita è più lenta.
- **Delegabilità:** media. Serve qualcuno per la vendita business. Rischio legale basso, perché i dati di prodotto non sono personali.

### Idea 5 — Dataset "recensioni e reputazione" per il turismo e i brand di consumo
- **Cosa:** recensioni normalizzate da più fonti (Google Maps, Tripadvisor, Booking, Trustpilot, App Store e Play Store) con analisi di sentiment e temi, per punti vendita e strutture, aggiornate ogni settimana.
- **Chi paga:** catene dell'ospitalità e della ristorazione, agenzie di reputazione, brand di app.
- **Prezzi e domanda [fatto]:**
  - Google Maps Reviews: 10.025 MAU a 0,15-0,6 $ ogni 1.000 recensioni;
  - Trustpilot: 3.099 MAU sommando gli actor;
  - Booking: 2.377 MAU;
  - Tripadvisor: 1.792 MAU (fonte 6).
- **Distribuzione:** Apify più pacchetti dataset su Datarade.
- **Vantaggio:** unione e normalizzazione di più fonti, cosa che gli actor attuali (una fonte ciascuno) non fanno.
- **Delegabilità:** alta.
- **Rischi:** dati personali dei recensori, da rendere anonimi; fare attenzione a non derivare verso "aziende come lead".

## Fonti

Tutte consultate il 2026-11-20.

1. Apify — Monetize your code / actor developers: https://apify.com/partners/actor-developers
2. Apify Blog — Developer community (intestazione "$1.4M paid out last month"): https://blog.apify.com/tag/developer-community/
3. Lupa.cz, 26 febbraio 2025 — "Scrapují všichni na světě… vyplatil 24 milionů": https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/
4. National Law Review / EINPresswire, 3 novembre 2025 — Apify $1M Challenge: https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools
5. Lupa.cz, 15 maggio 2026 — "…vývojářům měsíčně vyplácí milion dolarů": https://www.lupa.cz/aktuality/cesky-obchod-s-aplikacemi-uz-vyvojarum-mesicne-vyplaci-milion-dolaru-nakopl-ho-rozvoj-ai/
6. Apify Store API pubblica (dati scaricati e analizzati da me: ~8.548 actor, MAU, categorie, prezzi a evento): https://api.apify.com/v2/store?limit=1000&sortBy=popularity
7. Mordor Intelligence — Web Scraping Market: https://www.mordorintelligence.com/industry-reports/web-scraping-market
8. ScrapeOps — Web Scraping Market Report 2025: https://scrapeops.io/web-scraping-playbook/web-scraping-market-report-2025/
9. Sacra — SerpApi: https://sacra.com/c/serpapi/
10. SerpApi Blog, 19 agosto 2026 — 1.5 million activated user accounts: https://serpapi.com/blog/we-have-surpassed-1-5-million-activated-user-accounts/
11. CTech (Calcalist), 23 novembre 2025 — Bright Data crosses $300M ARR: https://www.calcalistech.com/ctechnews/article/sjeyg2ezwe
12. Bright Data Blog — Data for AI is fueling massive growth (e listino prezzi nella pagina): https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data
13. Apify Blog — Why Apify is standardizing Actor pricing: https://blog.apify.com/standardizing-actor-pricing
14. vmblog — Apify AI agent capabilities (installazioni del plugin): https://vmblog.com/news/apify-unveils-new-ai-agent-capabilities-and-server-actors-to-support-growing-demand/ (riportato dal riepilogo della ricerca, pagina non letta direttamente)
15. TechCrunch, 17 novembre 2025 — Peec AI raises $21M: https://techcrunch.com/2025/11/17/as-ai-search-upends-brand-discovery-peec-ai-hits-4m-arr-and-raises-21m
16. Dealroom — Generative engine optimization startups: https://dealroom.co/charts/generative-engine-optimization-startups (cifre di Profound e Peec oltre 10 M$ dal riepilogo della ricerca; la pagina non ha restituito il testo integrale via curl)
17. DataForSEO — LLM Mentions API e prezzi: https://dataforseo.com/apis/ai-optimization-api/llm-mentions-api ; https://dataforseo.com/help-center/llm-mentions-api-subscription-explained ; actor di rivendita: https://apify.com/changeable_peddler/llm-brand-mentions-monitor (dal riepilogo della ricerca)
18. Apify Help — How does Actor monetization work: https://help.apify.com/en/articles/8684010-how-does-actor-monetization-work
19. DEV Community, Donny Nguyen — The honest economics of selling APIs on RapidAPI: https://dev.to/donnyautomation/the-honest-economics-of-selling-apis-on-rapidapi-from-a-live-portfolio-13k0
20. Latka — Datarade (stima dei ricavi): https://getlatka.com/companies/datarade ; ZoomInfo Pipeline — Datarade pricing: https://pipeline.zoominfo.com/sales/datarade-pricing (dal riepilogo della ricerca)
21. AWS Data Exchange — Discover data: https://www.aws.amazon.com/data-exchange/discover-data (dal riepilogo della ricerca)
22. Apify Blog, 19 novembre 2026 — Apify Store search is changing: https://blog.apify.com/apify-store-search-update/
23. WeAreFounders, 7 agosto 2025 — From Side Projects to $10k MRR (Scrape Creators): https://www.wearefounders.uk/from-side-projects-to-10k-mrr-how-adrian-horning-built-scrape-creators/
24. Better Launch — Founder Playbook, Adrian / Scrape Creators: https://www.betterlaunch.co/playbooks/adrian-scrape-creators-6
25. Startups for the Rest of Us, ep. 783, 15 luglio 2025 — ScrapingBee to $5M ARR and an 8-figure exit: https://www.startupsfortherestofus.com/episodes/episode-783-bootstrapping-scrapingbee-to-5m-arr-and-an-8-figure-exit
26. Apify Blog — ParseForge hit 2,000 Actors: https://blog.apify.com/parseforge-2000-actors/
27. Apify Blog — ParseForge's Actor Factory: https://blog.apify.com/parseforge-actor-factory/
28. Apify Blog, 31 agosto 2026 — Builder spotlight: Goldmine: https://blog.apify.com/apify-builder-spotlight-goldmine/
29. Apify Blog, 2 ottobre 2024 — Turning code into cash: https://blog.apify.com/turning-code-into-cash-with-apify/
30. DEV Community, agenthustler — The Apify Actor Survival Guide: https://dev.to/agenthustler/the-apify-actor-survival-guide-why-99-of-scrapers-get-zero-users-and-how-to-fix-it-5eoh
31. DEV Community, Boon, maggio 2026 — 3 Months Shipping My First Apify Actor: 64 Users, $200/mo: https://dev.to/boo_n/3-months-shipping-my-first-apify-actor-64-users-200mo-and-everything-i-got-wrong-52i7
32. Neudata — State of the alternative data market 2026: https://www.neudata.co/blog/state-of-the-alternative-data-market-2026 (dato di 2,8 mld$ dal riepilogo della ricerca)
33. VentureBeat, 2 luglio 2025 — Bright Data beat Elon Musk and Meta in court: https://venturebeat.com/ai/bright-data-beat-elon-musk-and-meta-in-court-now-its-100m-ai-platform-is-taking-on-big-tech
34. SerpApi Blog, 21 luglio 2026 — Google v. SerpApi: motion to dismiss granted: https://serpapi.com/blog/google-v-serpapi-the-court-granted-our-motion-to-dismiss/ ; Reddit contro SerpApi (SDNY) e nuova citazione di Google: https://www.mediapost.com/publications/article/416687/judge-dismisses-google-complaint-against-serpapi-o.html (dal riepilogo della ricerca)
35. Search Engine Roundtable, 10 novembre 2026 — Google Loses Another Round against SerpApi: https://seroundtable.com/google-loses-again-against-serpapi-42508.html
36. SCL — CJEU (C-762/19 CV-Online Latvia v Melons): https://www.scl.org/12290-cjeu-search-engine-copying-of-databases-infringes-sui-generis-right-where-it-adversely-affects-database-maker-investment/ (dal riepilogo della ricerca)
37. Prisync — Pricing: https://prisync.com/pricing/

**Non trovato:** ricavi mediani ufficiali degli sviluppatori su Apify, RapidAPI, Datarade e AWS Data Exchange; ricavi dei singoli venditori su Datarade e AWS Data Exchange; numero di abbonati delle API principali su RapidAPI; ricavi certificati di SerpApi e DataForSEO, per cui esistono solo stime di terzi, molto incoerenti.
**Note sulle fonti:** Reddit non consultato. La pagina della storia di successo "Tugkan" su apify.com reindirizza alla pagina generica degli sviluppatori.
