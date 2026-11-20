---
tipo: rapporto
ipotesi: H08
ruolo: Entusiasta
data: 2026-11-20
tags: [rapporto, S3, H08]
---
# H08 App mobile B2C in abbonamento: rapporto dell'Entusiasta

Collegamenti: [[Registro delle ipotesi]] · [[Profilo e vincoli]] · [[Protocollo di discovery]]

## 1. Sintesi

- La parte dura va detta per prima: **l'app in abbonamento mediana guadagna circa 72 $/mese a un anno dal lancio** (RevenueCat 2026). Il top 10% di Adapty incassa il 95% dei ricavi. Il primo pezzo del criterio di confutazione ("ricavi mediani trascurabili") **è soddisfatto** e non lo contesto.
- Il caso a favore poggia su tre punti:
  1. **La coda alta esiste ed è raggiungibile in fretta.** Il 4,6% delle app nuove arriva a 10 k$ di MRR entro due anni, in una mediana di 109 giorni. Con un paywall rigido il ricavo per installazione a 60 giorni è 8 volte quello del freemium.
  2. **Il secondo pezzo del criterio non regge per il sotto-segmento "dati freschi".** Le app costruite su dati freschi e difficili da raccogliere crescono senza pubblicità a pagamento, almeno secondo quanto dichiarano i fondatori: Collectr (5 persone, ricavi ricorrenti annui "a otto cifre", "senza spendere un centesimo in pubblicità"), Seats.aero (8 M$ di ricavi ricorrenti annui, nessun capitale esterno, un solo fondatore), Campnab (2 fondatori). Flightradar24, che ha bilanci depositati, fattura 418,8 M SEK. Apple dichiara che quasi il 65% dei download avviene subito dopo una ricerca nello store.
  3. **Le app di "allerta disponibilità" e di "valore della collezione" hanno prezzi molto sopra la mediana.** Campnab chiede 90-270 $/anno, Collectr 59,99 $/anno, Seats.aero 109,99 $/anno, contro una mediana annuale di 34,80 $.
- Per questo profilo la scommessa giusta non è "un'app AI" generica (ChatGPT da solo prende 3,4 dei >5 mld $ della spesa in app AI). È **un'app che vende un dato che un chatbot non ha**, raccolto con lo scraping, in una nicchia con intenti di ricerca precisi nello store.
- Per raggiungere 50 k€ di margine bisogna stare circa nel **top 5%** della distribuzione [stima]. È possibile, ma va presentato come una scommessa sulla coda, non come esito atteso.

## 2. Argomenti principali

### A. Il mercato cresce e si sposta verso le app non-gioco e gli abbonamenti
- [fatto] Nel 2025 la spesa globale dei consumatori in app e giochi è stata di 155,8 mld $ (+21,6%). La spesa in app non-gioco è cresciuta del 33,9% fino a 82,6 mld $, mentre i download sono calati del 2,7%. Dati Appfigures riportati da TechCrunch, 14/01/2026.
- [fatto] Le entrate da acquisti in-app delle app di AI generativa sono più che triplicate, superando i 5 mld $ nel 2025. ChatGPT da solo ne ha generati 3,4 mld $. Dati Sensor Tower, TechCrunch, 21/01/2026.
- [stima] Più spesa con meno download significa più ricavo per utente. È uno scenario favorevole a chi vende un abbonamento di nicchia con alto valore percepito, sfavorevole a chi vive di volumi. La concentrazione su ChatGPT dice anche che **l'AI generica è già presa**: lo spazio è nel dato verticale.

### B. La coda alta: dove sta il successo e quanto in fretta arriva
Dal report RevenueCat *State of Subscription Apps 2026* (oltre 115.000 app, oltre 16 mld $ di ricavi), ricavo mensile a un anno dal lancio:

| Percentile | Ricavo mensile |
|---|---|
| 25° | 16 $ |
| 50° (mediana) | ~72 $ |
| 75° | 429 $ |
| 90° | 2.574 $ |

- [fatto] Entro due anni il 17,3% delle app nuove raggiunge 1 k$ di MRR e il 4,6% raggiunge 10 k$. Fra quelle che ci arrivano, la mediana è di 58 giorni per 1 k$ e di 109 giorni per 10 k$.
- [stima] Chi vince lo capisce presto: entro 4-6 mesi si sa se l'app è nella coda. Questo limita il capitale bruciato e rende la scommessa "a portafoglio" (2-3 app in sequenza) gestibile con un team delegato.
- [fatto] **Paywall rigido contro freemium:** la conversione mediana a 35 giorni è 10,7% contro 2,1%. Il ricavo per installazione a 60 giorni è 3,09 $ contro 0,38 $. La retention a un anno degli abbonamenti annuali è quasi identica: 27% contro 28% (blog RevenueCat 2026).
- [fatto] **App AI:** valore realizzato mediano per pagante nel primo anno di 30,16 $ contro 21,37 $ (+41%), ma con churn più veloce (+36% secondo il blog, +30% secondo la pagina del report: le due pagine RevenueCat non coincidono).
- [fatto] **Fascia di prezzo:** le app ad alto prezzo hanno un valore mediano per pagante di 62,19 $ a un anno, contro 10,69 $ per quelle a basso prezzo, e convertono di più a 35 giorni (2,8% contro 1,4%). Sono dati contro l'intuizione che conviene essere economici.
- [fatto] **Utilities (Adapty 2026, oltre 16.000 app, ~3 mld $):**
  - valore nei 12 mesi degli utenti in prova di 68,90 $, il più alto fra le categorie;
  - valore per installazione di 1,09 $;
  - retention a un anno dei piani annuali del 22,1%, la più alta fra le categorie;
  - prezzi annuali delle Utilities in Europa +70,5% in due anni.
  - *Nota:* sono dati di un fornitore con interesse a mostrare un mercato sano. Le cifre del funnel Utilities (13,8% da installazione a prova, 26,2% da prova a pagamento) hanno un'etichetta ambigua fra "globale" e "Utilities".

### C. Le app di "dati che un chatbot non ha" crescono in modo organico
Casi con numeri, ordinati dal più al meno verificabile:

1. **Flightradar24** (Svezia). [fatto] Ricavi di 418,8 M SEK nel 2024, dal registro delle imprese svedese citato da Wikipedia. Il modello è freemium più dati B2B, alimentato da oltre 40.000 ricevitori ADS-B gestiti da volontari. È l'esempio estremo di fossato dati, ma oggi non è replicabile e non è un'app "piccola".
2. **Collectr** (valore delle carte collezionabili). [fatto, autodichiarato]
   - Ricavi ricorrenti annui "a otto cifre", oltre 4 milioni di utenti, 5 persone.
   - Crescita "senza spendere un centesimo in pubblicità", tramite forum e Reddit (+5.000 utenti in 24 ore al lancio).
   - Monetizzazione quasi nulla finché non è arrivato il piano Pro a 7,99 $/mese o 59,99 $/anno.
   - Fonte: BetaKit, 13/08/2025. Le stime di terzi parlano di circa 600-650 k$/mese.
   - Da App Store [fatto, iTunes lookup del 20/11/2026]: 70.491 valutazioni negli USA, **solo 1.450 in Italia e 1.486 in Germania**.
3. **Seats.aero** (disponibilità di posti premio con le miglia). [fatto, autodichiarato]
   - 8 M$ di ricavi ricorrenti annui e 500.000 utenti attivi mensili al 31/03/2025, un fondatore, nessun capitale esterno (arr.club, che rimanda al post X del fondatore).
   - Prezzo Pro: da 9,99 a 12,99 $/mese e da 99,99 a 109,99 $/anno dal 09/11/2026 (Upgraded Points). Il prezzo aumenta, segno di potere di prezzo.
   - Il prodotto è essenzialmente dato raccolto e aggiornato dalle compagnie aeree.
4. **Campnab** (allerte quando si libera una piazzola in un campeggio esaurito).
   - [fatto] Gestito da 2 cofondatori. Nel 2023 monitorava 350.252 piazzole in 14.877 campeggi e aveva inviato 3,5 milioni di allerte (comunicato stampa).
   - [fatto] Prezzi attuali: 10/20/30 $ al mese, 90/180/270 $ all'anno, oppure 10-20 $ per singola scansione (campnab.com/pricing).
   - Ricavi: non trovati.
5. **Slopes** (tracker per lo sci). [fatto] 1 M$ di ricavi ricorrenti annui, ma **dopo 9 anni** (2013-2022), con 10.600 $ incassati nei primi due anni, crescita da passaparola e 5.000 $ di Instagram ads (blog RevenueCat, 28/09/2022).
   - È un controesempio utile sui tempi: un'app di utilità "senza dati" ci mette anni.

Altri punti a sostegno:
- [fatto] Apple: "Almost 65% of downloads happen directly after a search" (ads.apple.com, fonte di parte).
- [stima] Ricerche come "alta via 1 rifugi" o "pokemon card value" sono intenti precisi che l'ottimizzazione per lo store (ASO) può catturare senza budget.
- [fatto] **Localizzazione:** lo studio Distimo, datato e con causalità non isolata, trovava +128% di download nella settimana dopo l'aggiunta della lingua locale e circa +26% di ricavi (pocketgamer.biz). App Store Connect consente parole chiave diverse per ogni lingua.
- [stima] Per questo profilo la localizzazione è una leva quasi gratuita grazie all'AI. La sotto-penetrazione europea di Collectr (1.450 valutazioni in Italia contro 70.491 negli USA) suggerisce mercati locali meno presidiati.

### D. Perché lo scraping è il vantaggio giusto qui
- [stima] Nei casi C2-C4 il prodotto **è** il dato aggiornato: prezzi, disponibilità, posti. Mantenere centinaia di fonti funzionanti (anti-bot, cambi di layout, normalizzazione) è un costo operativo continuo. È la barriera che un concorrente "AI wrapper" non supera in una settimana, ed è la competenza distintiva del founder.
- [stima] **Resistenza all'AI generalista:** un chatbot non sa se stanotte c'è un letto al Rifugio Lagazuoi, quanto costa oggi un kWh su una data colonnina, o quanto vale oggi su Cardmarket una carta in edizione italiana.
- [fatto] **I gestori stessi non coprono il bisogno:** Prenota Rifugi CAI non prevede notifiche né liste d'attesa e per le date esaurite rimanda al contatto diretto col rifugio (prenotarifugi.cai.it, letto il 20/11/2026). Il sistema delle grandi associazioni alpine (Hut Reservation, oltre 500 rifugi DAV/ÖAV/SAC/AVS): una funzione di allerta non trovata.

### E. Economia unitaria rispetto all'obiettivo di 50 k€ di margine [stima]
- **Commissioni dello store:** 15% fino a 1 M$ di proventi (Apple Small Business Program) [fatto].
- **Costi annui ipotizzati per una gestione delegata:**
  - team part-time, cioè uno sviluppatore e operations: 40-60 k€;
  - infrastruttura e proxy: 5-15 k€;
  - totale 45-75 k€.
- **Ricavi lordi necessari:** circa 115-150 k€/anno, cioè 9,5-12,5 k€ di MRR. È esattamente la soglia "10 k$ di MRR" che il **4,6%** delle app nuove raggiunge entro due anni.
- **Con un prezzo "da allerta"** (~100 €/anno, livello Seats.aero e Campnab) servono circa 1.300-1.700 abbonati paganti. **Con 30 €/anno** (livello Chargeprice) ne servono circa 4.500-6.000.
- Conclusione: **puntare su prezzi alti e intenti forti**, non su prezzi bassi e volumi.

## 3. Criteri di confutazione, uno per uno

Il criterio è congiunto: "ricavi mediani trascurabili **e** crescita possibile solo con acquisizione a pagamento non sostenibile".

1. **Ricavi mediani trascurabili: SODDISFATTO.**
   - [fatto] Mediana di ~72 $/mese a un anno, il 57,7% delle app con ricavi sta fra 1 e 1.000 $/anno (Adapty), il 95% dei ricavi va al top 10%.
   - Il mio unico contro-argomento: la mediana include migliaia di app clonate o hobbistiche (14.000+ app nuove al mese secondo RevenueCat). Per un team finanziato con un fossato dati la base di riferimento è peggiore della mediana ma il campione di confronto non è quello. **Non posso dimostrarlo con dati:** lo segnalo come [stima].
2. **Crescita possibile solo con acquisizione a pagamento non sostenibile: NON soddisfatto, almeno per il sotto-segmento "dati freschi e nicchie a intento".**
   - Contro questo pezzo ci sono quattro casi di crescita prevalentemente organica: Collectr, Seats.aero, Campnab, Flightradar24.
   - Ci sono anche il dato Apple sul 65% dei download da ricerca e la presenza di comunità di nicchia (Reddit, forum) come canale di lancio.
   - **Limite onesto:** i ricavi di Collectr e Seats.aero sono autodichiarati, quelli di Campnab non sono noti, e i casi di successo sono per costruzione sopravvissuti. Una statistica di settore sulla quota di ricavi da acquisizione organica rispetto a quella a pagamento: **non trovata** (RevenueCat e Adapty non la pubblicano nelle pagine lette).
3. **Verdetto dal mio ruolo:** poiché il criterio richiede entrambe le condizioni, l'ipotesi **non è confutata nella sua forma "app di dati verticali"**. È invece **sostanzialmente confutata nella forma "app utility/AI generica"**: wrapper AI, scanner, convertitori. Lì contano i volumi, l'AI generalista sostituisce il prodotto e il canale tipico è la pubblicità a pagamento sui social (non verificato da me per mancanza di statistiche di settore). Lascio al Giudice questa distinzione.

## 4. Idee concrete (le 4 migliori per questo profilo)

### I1. Allerte letti nei rifugi alpini ("Campnab per le Alpi")
- **Cosa fa:** monitora la disponibilità sui sistemi di prenotazione dei rifugi (Prenota Rifugi CAI, Hut Reservation DAV/ÖAV/SAC/AVS, sistemi del Tour del Monte Bianco e delle Dolomiti) e notifica quando si libera un letto su una data o su un itinerario completo (Alta Via 1/2, Tour del Monte Bianco, Haute Route).
- **Chi paga:** trekker internazionali, soprattutto anglofoni, che pianificano mesi prima e trovano tutto esaurito [stima, da verificare sui forum].
- **Prezzo di riferimento:** Campnab 10-30 $/mese, 90-270 $/anno, 10-20 $ per singola scansione [fatto]. Proposta: 15-25 € per itinerario o 49-79 €/anno.
- **Primi utenti senza pubblicità:**
  - pagine SEO per rifugio e per itinerario (migliaia di pagine lunga coda);
  - ottimizzazione per lo store in EN/DE/FR/IT;
  - post utili su Reddit e Facebook (gruppi Alta Via e TMB) e forum (Rick Steves).
- **Perché lo scraping aiuta:** sistemi eterogenei, alcuni senza calendario online. Una base dati unificata e fresca è il prodotto.
- **Rischi:**
  - stagionalità forte;
  - mercato più piccolo dei campeggi nordamericani;
  - termini d'uso delle piattaforme;
  - concorrenti emergenti: HutScanner (in beta gratuita, 0 valutazioni) e l'app di The Hiking Club con allerte email.
- **Tetto:** limitato, 100-300 k€/anno [stima, ragionamento: poche decine di migliaia di trekker internazionali ad alta disponibilità a pagare per stagione]. Era già risultato PASS in docs/05 (T1).

### I2. Prezzi delle carte collezionabili per l'Europa (Cardmarket, edizioni locali)
- **Cosa fa:** valore della collezione, storico dei prezzi e allerte di prezzo su Cardmarket (il mercato di riferimento in UE), con edizioni italiane, tedesche e francesi. Aggiunge allerte sulle uscite e sui riassortimenti dei prodotti sigillati presso i rivenditori UE.
- **Chi paga:** collezionisti e piccoli rivenditori di Pokémon, One Piece, Magic.
- **Prezzo di riferimento:** Collectr Pro 7,99 €/mese o 59,99 €/anno; PokéItem fino a 49,99 $/anno; Collector AI 29,99 $/anno [fatto].
- **Primi utenti senza pubblicità:** comunità Reddit e Discord nazionali, ottimizzazione per lo store localizzata. Collectr dichiara che il lancio su forum gli ha portato 5.000 utenti in 24 ore.
- **Perché lo scraping aiuta:** prezzi di Cardmarket e dei rivenditori, riassortimenti in tempo reale, normalizzazione delle varianti (holo o reverse, lingua). È proprio il punto debole lamentato nelle recensioni dei concorrenti.
- **Rischi:**
  - **affollamento alto** (decine di app scanner);
  - termini d'uso di Cardmarket;
  - un aggiornamento di Collectr sull'Europa annullerebbe il vantaggio.
- **Tetto:** alto [stima]. Il segnale a favore è la scarsa penetrazione in Europa del leader (1.450 valutazioni in Italia contro 70.491 negli USA).

### I3. Comparatore di tariffe di ricarica per auto elettriche in Italia e nel Sud Europa
- **Cosa fa:** costo reale per sessione in base al veicolo, all'operatore della colonnina e all'abbonamento usato, con prezzi aggiornati via scraping delle app e dei siti dei gestori.
- **Chi paga:** guidatori di auto elettriche, flotte di piccole imprese, utenti in roaming.
- **Prezzo di riferimento:** Chargeprice 2,99 €/mese o 29,99 €/anno [fatto, App Store IT]. Ha solo 29 valutazioni in Italia [fatto], quindi presidio debole.
- **Primi utenti senza pubblicità:** pagine SEO del tipo "costo ricarica [operatore] [città]", ottimizzazione per lo store, gruppi Facebook e forum di proprietari di auto elettriche.
- **Perché lo scraping aiuta:** le tariffe cambiano spesso, sono sparse e spesso visibili solo nelle app dei gestori. Il chatbot non le ha.
- **Rischi:**
  - prezzo basso, quindi servono volumi (~5.000 paganti per l'obiettivo);
  - concorrenti europei consolidati (Chargeprice, Chargemap);
  - possibile arrivo della trasparenza dei prezzi per norma UE, che renderebbe il dato aperto (rischio da verificare, non indagato).

### I4. Allerte voli premio con le miglia per i programmi europei (variante di nicchia di Seats.aero)
- **Cosa fa:** allerte di disponibilità dei posti premio per Flying Blue, Miles & More, Avios e ITA Volare, dagli aeroporti italiani e del Sud Europa, in lingua locale.
- **Chi paga:** chi accumula miglia e punti.
- **Prezzo di riferimento:** Seats.aero 12,99 $/mese o 109,99 $/anno [fatto].
- **Primi utenti senza pubblicità:** blog e forum di viaggi a punti italiani e tedeschi, pagine SEO per rotta.
- **Perché lo scraping aiuta:** il dato è proprio lo scraping dei programmi fedeltà, cioè la competenza del founder.
- **Rischi:**
  - **Seats.aero copre già molto**;
  - conflitti con i termini d'uso delle compagnie aeree;
  - mercato italiano dei punti piccolo.
- Da validare prima di investire.

### Idee scartate (dal mio stesso ruolo)
- **Wrapper AI generici** (scanner, riassunti, chatbot): l'AI generalista li sostituisce, ChatGPT domina la spesa.
- **App per i treni italiani:** Trenìt! ha 70.000 valutazioni ma monetizza con 1,99 € una tantum più pubblicità [fatto]. Trainline offre già il "Bigliettometro" gratuito: la disponibilità a pagare italiana è bassa.
- **Allerte annunci Vinted o Subito:** le app esistenti hanno trazione quasi nulla (Vinotify ha 1 valutazione) e il rischio con i termini d'uso è alto.
- **Allerte appuntamenti PA** (passaporti, visti): rischio etico e di bagarinaggio, oltre al blocco da parte degli enti.

**Note di compatibilità:**
- Nessuna idea tocca gli ambiti esclusi: niente aziende, immobili, aste, bandi o clienti finanziari.
- Nessuna richiede licenze. Per I3 va verificato che non serva un ruolo di fornitore di servizi di mobilità elettrica: il servizio resta informativo e non vende ricariche.
- L'operatività (manutenzione degli scraper, supporto, ottimizzazione per lo store) è delegabile. Il founder serve per l'architettura dello scraping.

## 5. Fonti (accesso 2026-11-20)

**Report e dati di mercato**
- RevenueCat, State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps-2026/
- RevenueCat, categoria Productivity: https://www.revenuecat.com/state-of-subscription-apps-2026-productivity
- RevenueCat blog, tendenze e benchmark 2026: https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026.md
- Adapty, benchmark Utilities: https://adapty.io/blog/markdown/utilities-app-subscription-benchmarks.md
- PPC Land su Adapty 2026: https://ppc.land/95-of-app-subscription-revenue-goes-to-top-10-adaptys-2026-benchmark-report/
- TechCrunch su Sensor Tower: https://techcrunch.com/2026/01/21/consumers-spent-more-on-mobile-apps-than-games-in-2025-driven-by-ai-app-adoption
- TechCrunch su Appfigures: https://techcrunch.com/2026/01/14/app-downloads-declined-again-in-2025-but-consumer-spending-soared-to-nearly-156b
- Apple Ads (dato sul 65%): https://ads.apple.com/app-store/advanced
- Apple Small Business Program: https://developer.apple.com/app-store/small-business-program/
- Distimo, localizzazione (letto solo l'estratto del motore di ricerca): https://www.pocketgamer.biz/r/PG.Biz/Distimo+news/feature.asp?c=45474

**Casi**
- Flightradar24: https://en.wikipedia.org/wiki/Flightradar24
- Collectr: https://betakit.com/how-collectr-bootstrapped-a-trading-card-hobby-into-an-eight-figure-business/
- Seats.aero, ricavi ricorrenti: https://www.arr.club/seats-aero/seats-aero-arr-hits-8m
- Seats.aero, aumento di prezzo: https://upgradedpoints.com/news/seats-aero-price-increase
- Campnab, prezzi: https://campnab.com/pricing
- Campnab, blog: https://campnab.com/blog/what-your-campnab-subscription-pays-for
- Campnab, dati 2023 (letto solo l'estratto del motore di ricerca): https://sportsdigest.in/campnab-celebrates-sending-3-5-million-campsite-availability-alerts/82222/
- Slopes: https://www.revenuecat.com/blog/slopes-from-indie-side-hustle-to-1m-in-arr-and-an-apple-design-award/
- Prenota Rifugi CAI: https://prenotarifugi.cai.it/en/how-it-works/
- DAV, Hut Reservation (letto solo l'estratto del motore di ricerca): https://www.alpenverein.de/artikel/onlinereservierungssystem-der-alpenvereinshutten_c060cfdc-a751-43ae-adc2-0d3e3e640bda

**Schede App Store**
- Chargeprice: https://apps.apple.com/it/app/chargeprice/id1552707493
- Trenìt!: https://apps.apple.com/it/app/tren%C3%ACt-find-trains-in-italy/id1058908183
- Flighty: https://apps.apple.com/us/app/flighty-live-flight-tracker/id1358823008
- Vinotify: https://apps.apple.com/app/id6756068329
- Clothing Alerts: https://apps.apple.com/us/app/-/id6752218795
- Lookup iTunes per Collectr, Flighty, HutScanner, Chargeprice e Seats.aero, con numero di valutazioni per paese: https://itunes.apple.com/lookup?id=…&country=us|de|it

**Fonti bloccate o non usate**
- Indie Hackers ha risposto 403 alla lettura automatica: il caso "10k MRR solo con l'ottimizzazione per lo store" non è usato.

## 6. Ricerche web usate: 18 (su 22)
