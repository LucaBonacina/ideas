# 05 — Screening B2C, parte B (mobilità, casa e consumi, tempo libero, giochi)

Data di accesso alle fonti: **2026-11-20**. Mercato: Italia. Metodo: `docs/01-metodo.md` (gate G1-G5, criteri C1-C9, traccia giochi GG1-GG3 / CG1-CG7, protocollo anti-bias). Formato: `docs/research/_brief.md`.
Per ogni candidato la sezione "Ipotesi e criterio di scarto" è stata scritta **prima** di raccogliere le evidenze. La stessa asticella vale per tutti. Le evidenze dello screening precedente (`03-screening-*.md`) sono state riverificate e non riprese così come erano.

## Sintesi

| Candidato | Verdetto | Motivo in una riga |
|---|---|---|
| **M1** ZTL per città | **PASS** (incumbent forte) | Long-tail ampia (23 località su 23 con suggerimenti), dolore e pagatori reali (affiliazione noleggi). Però ZigZag (2024, 26 città, iOS 4,7★ su 756 voti, Pro a pagamento) fa già quasi esattamente il prodotto |
| **M2** Scadenze del veicolo | **INCERTO (G1, G3), tendente a FAIL** | Confrontare polizze RC è distribuzione assicurativa (art. 106 CAP → RUI IVASS). Resta solo la "mera fornitura di dati" (art. 107), che è un confine interpretativo. Per i finanziamenti serve l'OAM. Promemoria gratuiti già offerti da IO e iPatente, molte app private |
| **#31 + N14** Ritardi treni e indennizzi | **INCERTO (G3), tendente a FAIL** | Mercato piccolo (16.894 richieste di indennizzo Trenord nel 2025). Gli operatori stanno automatizzando i rimborsi (Italo, Trenitalia, impegni AGCM 2026). Nessun pagatore italiano |
| **H1** Calendario rifiuti per comune | **PASS (debole)** | Dati pubblici per obbligo ARERA (TITR) e long-tail reale (16 comuni su 18). Ma il pagatore B2G è già occupato (Junker, Golem Net, Municipium, app dei gestori) e lato utente resta solo la pubblicità |
| **#20** Bollette luce e gas | **INCERTO (G4)** | G1 sì: nessuna iscrizione per il comparatore, ma regole AGCM severe (Supermoney multata 1,48 M€). I pagatori esistono ma le cifre per contratto non sono pubbliche. SERP presidiata da Facile, Segugio, Selectra e Switcho. Portale Offerte ARERA gratuito. Nessuna long-tail per comune |
| **#19** Prezzi supermercati | **INCERTO (G2/G5)** | Pagatori reali (ShopFully 43,8 M€ di ricavi nel 2024). Ma i cataloghi online sono protetti (Cloudflare, termini d'uso), i prezzi in negozio non sono online e la domanda di "confronto carrello" è debole rispetto a "volantino [insegna]" |
| **A1** Regole per cani | **PASS (debole)** | Long-tail presente ma stagionale. La parte che rende (prenotare il lido) è già di Spiagge.it. Affiliazione senza cifre pubbliche. Sui trasporti la risposta AI è quasi completa |
| **T1** Rifugi e sentieri | **PASS** | Ricerche legate al nome del singolo rifugio e risposte AI incapaci di confermare le aperture: il dato fresco vale. Rischio: prenotazioni già sul portale CAI (130 €/anno per i gestori) e app outdoor dominanti (19,99-65,99 €/anno) |
| **T2** Spiagge e qualità delle acque | **INCERTO (G4)** | Dato sulle acque pubblico e quasi in una sola fonte (Portale Acque), quindi nessun vantaggio dai dati. SERP per località di Spiagge.it. Stagionalità estrema |
| **#26** Camper, lato utenti | **FAIL (G5)** | Le banche dati utili sono quelle dei concorrenti (park4night, Campercontact), protette dai termini d'uso. Le risposte AI attingono già a quelle schede |
| **N13** Software e visibilità per gestori camper | **INCERTO (G4)** | I gestori pagano (park4night 100-3.000 €/anno, Campercontact 15% o da 299 €/anno, Caramaps 99 €/anno), ma pagano per il pubblico, non per il software. Campercontact dà il software gratis |
| **#28** Eventi e sagre | **INCERTO (G3 debole)** | Listino reale (eventiesagre.it 30-540 € per evento in evidenza) e long-tail ampia. Ma il modello con pagine per comune esiste già, il ticket è basso e la stagionalità forte |
| **#29** Mostre e musei | **FAIL (G4) [stima]** | Lo Stato aggrega già (museiitaliani.it). Arte.it e thewom.it hanno pagine per città e data. Affiliazione da 0,5-2 € a biglietto. Risposta AI già buona |
| **#39 / GN1** Prezzo della spesa (gioco) | **PASS gate giochi** | Nessun equivalente italiano trovato e vantaggio dai dati (storico prezzi). Domanda di ricerca non misurabile (nessun suggerimento) |
| **#39 / GN3** Più o meno, Italia | **INCERTO (GG2/CG5)** | Italiadle ha già una modalità Higher/Lower sui comuni. I dati sono open e statici, quindi copiabili |
| **#39 / GN4** Daily sui comuni | **FAIL (criterio di scarto pre-registrato)** | Esiste già Italiadle ("Città del Giorno", "Dove si trova?"). La variante "sagoma del comune" ricalcherebbe Worldle (rischio GG1) |
| **#39 / GN5** Daily semantico in italiano | **PASS gate giochi** | Domanda misurabile ("contexto italiano" nell'autocompletamento) e nessuna versione italiana ufficiale trovata. Vantaggio AI copiabile, rischio che entri Contexto o il Corriere |

**Lettura trasversale.**
1. Nessun candidato di questo gruppo combina insieme un pagatore con cifre alte, dati difficili da replicare e una distribuzione non presidiata.
2. I più promettenti per lo scoring sono **T1** (dato fresco che i chatbot non hanno), **M1** (pagatori e long-tail, ma con un incumbent diretto) e, nella traccia giochi, **GN1** e **GN5**.
3. Si conferma l'ipotesi trasversale del doc 04: dove il dato è pubblico e in una sola fonte (acque, musei, scadenze del veicolo), lo Stato o un incumbent copre già il bisogno gratis.

## Limiti di affidabilità (leggere prima dello scoring)
- **Google Trends non raggiungibile** (HTTP 429). I rate limit non sono stati aggirati. C2 si basa solo su autocompletamento, SERP via WebSearch e dati pubblici: tutte le misure di domanda sono **[stima]**.
- **Reddit non leggibile** (endpoint JSON 403, e le ricerche `site:reddit.com` non hanno restituito thread). Il dolore (C1) viene soprattutto da recensioni degli store (lette dalle API iTunes e dalle pagine Google Play), stampa, ART e AGCM. Per C1 vale quindi il tetto prudenziale dove manca la voce diretta degli utenti.
- **SERP:** l'analisi via curl della pagina dei risultati di Google è vietata dai permessi della sessione, quindi la SERP è stata osservata con WebSearch, che non mostra le risposte AI di Google. Il test C6 è un ragionamento sui contenuti indicizzati e sui limiti di un LLM generalista, non una cattura delle AI Overview.
- **Stagionalità:** spiagge, cani e sagre sono stati testati a novembre, fuori stagione.
- **Fonti bloccate dal proxy:** `osservaprezzi.mimit.gov.it` (host non risolto) e `ilportaleofferte.it` (403).
- **Verifiche a campione nella revisione finale:** ZigZag (lookup iTunes: 756 voti, 4,73★), le modalità di Italiadle ("Dove si trova", "Higher") e la cifra "3500 Comuni" di Junker sono confermate rileggendo le fonti. Il "70%" dell'affiliazione DiscoverCars non compare nell'HTML grezzo della pagina (probabilmente caricato via JavaScript): l'agente l'ha dichiarato letto, ma va riconfermato prima dello scoring. Sulla pagina Junker convivono "3500 Comuni e gestori" e "1.000 Comuni abbonati": va usato il dato prudente.
- I riferimenti a `scratchpad/...` indicano file di lavoro della sessione (pagine scaricate, ipotesi, risposte dell'autocompletamento): non sono versionati.
- **Ricerche usate:** 63 WebSearch in tutto (14+13+20+16) e circa 185 letture dirette di pagine (curl/WebFetch), più circa 150 chiamate all'autocompletamento.

---

## Screening B2C — Gruppo A (mobilità): M1, M2, #31/N14

Data di accesso a tutte le fonti: **2026-11-20** (salvo diversa indicazione). Le fonti sono state lette direttamente (curl o WebFetch) quando indicato con "letto"; le altre vengono dai riassunti di WebSearch e sono segnate "(da SERP)".
File scaricati in `scratchpad/A/`.

---

### M1 — Regole ZTL, accessi e sanzioni per città (turisti e residenti)

1. **Ipotesi e criterio di scarto (scritta prima di cercare).**
   Mi aspetto: dolore forte e documentato (multe ZTL a turisti con auto a noleggio, notifiche mesi dopo, spese di gestione del noleggiatore); domanda long-tail ampia ("ztl [città] orari/mappa/permesso") su molti comuni; dati frammentati sui siti comunali, quindi buon fit con lo scraping; pagatori deboli lato B2C (affiliazione noleggio auto possibile, assicurazioni poco pertinenti); un chatbot risponde in modo generico ma non sa dire "questo varco è attivo adesso per la mia targa".
   **Criterio di scarto:** (a) se un incumbent copre già bene, gratis e in modo aggiornato, la maggior parte dei comuni con navigazione e avvisi, oppure (b) se Google Maps/Waze evitano le ZTL in modo affidabile, oppure (c) se non trovo nessun pagatore con cifre.

2. **Verdetto:** **PASS**, ma con un concorrente diretto, moderno e già a pagamento (ZigZag) che fa quasi esattamente il prodotto ipotizzato. Il candidato passa i gate, ma C8 (debolezza degli incumbent) va rivisto al ribasso.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Informazione e navigazione non richiedono licenze. [fatto] L'affiliazione al noleggio auto paga una commissione sul profitto, senza albi. [stima] Se si aggiungesse l'affiliazione assicurativa valgono i limiti IVASS descritti in M2: va esclusa o limitata a un semplice link. | https://www.discovercars.com/affiliate (letto) |
| G2 Dati raggiungibili | sì | [fatto] I dati (perimetri, orari, deroghe, permessi giornalieri) sono pubblicati comune per comune; ZigZag dichiara "26 città coperte" e linka le "fonti ufficiali" del Comune. [fatto] Esiste un aggregatore di settore, accessibilitacentristorici.it, con `dateModified` 2023-08-21 nei metadati, quindi aggiornato raramente. [stima] Ci sono migliaia di regole e calendari locali da tenere aggiornati di continuo, un buon fit con lo scraping. | https://zigzagmaps.com/ (letto) · https://www.accessibilitacentristorici.it/ (letto) |
| G3 Pagatore identificabile | sì | [fatto] DiscoverCars paga agli affiliati il "70% commission from our car rental profit" e il 30% sulla Full Coverage, con cookie di 365 giorni. [fatto] Gli utenti pagano già un'app ZTL: ZigZag Pro, con prezzi citati nelle recensioni (5,99 € a settimana; "Ho pagato abb da 19,99 euro"). Le app a pagamento "ZTL" (1,99 €) e "ZTL Italia" (0,99 €) esistono, ma hanno pochi voti. | https://www.discovercars.com/affiliate (letto) · https://itunes.apple.com/it/rss/customerreviews/id=6738909628/sortby=mostrecent/json (letto) · https://itunes.apple.com/lookup?id=926415425&country=it (letto) |
| G4 Distribuzione senza pubblico | sì | [stima] SEO programmatica: l'autocompletamento mostra varianti per tutte le 23 località testate, anche piccole (Montepulciano, Cortona, Taormina, San Gimignano), più query in inglese ("ztl rental car", "ztl fine italy reddit"). La SERP è però già affollata da aggregatori (vedi Domanda). | autocompletamento (sotto) |
| G5 Rischio legale gestibile | sì | [stima] Orari e perimetri delle ZTL sono atti amministrativi e fatti, non dati personali. Copiare in blocco banche dati di terzi (tyremap, urbanaccessregulations.eu, ZigZag) esporrebbe al diritto *sui generis*, quindi i dati vanno costruiti dalle fonti comunali primarie. **Rischio di responsabilità** se un'informazione sbagliata porta a una multa: ZigZag mette in evidenza la clausola "La navigazione non garantisce l'assenza di restrizioni". | https://itunes.apple.com/lookup?id=6738909628&country=it (letto) |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| **ZigZag: navigatore ZTL** (The Stolen Spot S.r.l., uscita 2024-12) | https://zigzagmaps.com/ | Sito: "26 città coperte" con il numero di zone per città (es. Bologna 79, Brescia 35, Bergamo 25), guide SEO per città ("ZTL Firenze: settori, orari…", "Google Maps vs Waze"). App: verifica personalizzata per veicolo e permessi; la versione Pro aggiunge la verifica per altra data e ora e la navigazione interna. | Freemium. Pro a 5,99 €/settimana e abbonamento a 19,99 € (dalle recensioni). iOS 4,73/5 su **756 voti**; Android **10K+ download** | Recensioni: "Troppo costosa", "non ti fa neanche provare", "mancano le città… Pavia e Vigevano", "Impossibile annullare abbonamento". Copertura limitata a 26 città |
| Waze | https://apps.apple.com/it/app/id323229106 | Navigazione generica; secondo un thread Apple un consulente consiglia "Waze plus ZTL Radar" (da SERP) | Gratis (pubblicità). iOS 4,71 su 62.759 voti | Copertura ZTL non verificata; le regole per permessi e orari non sono personalizzate |
| Google Maps / Apple Maps | https://discussions.apple.com/thread/256234985 | Avvisi ZTL parziali (da SERP: Aranzulla e Motor1 parlano di copertura non uniforme) | Gratis | Non affidabili per orari e deroghe; secondo Motor1 le ZTL di Roma "spariscono" in navigazione (articolo datato) |
| ZTL Alert Free | https://apps.apple.com/it/app/ztl-alert-free/id806239134 | "Over 3000 ZTL", avvisi in base alla distanza in linea d'aria (da SERP) | Gratis + pacchetti città a pagamento | Distanze in linea d'aria, dati di qualità sconosciuta |
| ZTL (Marco Tini) | https://apps.apple.com/it/app/id926415425 | Varchi in tutta Italia | 1,99 €; 3,57/5 su 7 voti; aggiornata 2026-11-08 | Pochissimi utenti |
| ZTL Italia (G. Ruggeri) | https://apps.apple.com/it/app/id1090865062 | Varchi | 0,99 €; 3,39/5 su 28 voti; ultimo aggiornamento **2016** | Abbandonata |
| App comunali (TorinoZTL, PalerMobilità, Bresciapp!) | https://apps.apple.com/it/app/id1483908799 | Una sola città: permessi e pagamento dei pass | Gratis. PalerMobilità 1,78/5 su 282 voti; TorinoZTL 3,75 su 20 (aggiornata nel 2022); Bresciapp! 2,35 su 86 | Una città ciascuna, qualità bassa |
| Siti comunali (servizio pubblico gratuito) | es. https://www.turismo.lucca.it/en/information/FAQ%3A-How-and-why-in-Lucca/ | Regole ufficiali, acquisto di permessi e pass giornalieri | Gratis | Frammentati, spesso in PDF, raramente in inglese |
| accessibilitacentristorici.it | https://www.accessibilitacentristorici.it/ | "Modalità per accedere nelle principali ZTL delle città italiane" | Gratis | Ultima modifica nei metadati: 2023 |
| urbanaccessregulations.eu, tyremap.com, autovia.it, TCS | https://urbanaccessregulations.eu/countries-mainmenu-147/italy-mainmenu-81/toscana-tuscany/lucca-ar | Schede per città (si posizionano in SERP) | Gratis/editoriale | Generici, aggiornamento non verificato |

5. **Domanda (C2)** [stima]
   - **Autocompletamento** (23 località testate + 5 query generiche; file `A/ztl_suggest.txt` e `A/ztl_suggest2.txt`). **Tutte le 23 località** restituiscono da 7 a 10 suggerimenti. Città grandi: Roma, Milano, Firenze, Bologna, Napoli, Torino, Palermo, Genova, Bari. Medie: Verona, Bergamo, Parma, Reggio Emilia, Perugia, Cagliari, Trento, Pisa, Lucca, Siena. Piccole e turistiche: San Gimignano, Montepulciano, Cortona, Taormina. Le varianti ricorrenti sono **orari, mappa, permesso/permesso giornaliero, oggi, domenica, disabili, NCC, bus turistici, multa** e varianti temporali ("ztl roma agosto 2026", "ztl torino sospensione estiva"). Ci sono anche query transazionali: "ztl bologna ticket online", "ztl palermo pass giornaliero online", "ztl milano pagamento". Query in inglese: "ztl rental car" → "ztl florence/rome/palermo/milan/bologna rental car"; "ztl fine italy" → "amount", "reddit", "how to pay ztl fine italy". La long-tail è ampia e anche turistica.
   - **Google Trends:** non raggiungibile (HTTP 429 al primo e unico tentativo).
   - **SERP** (WebSearch "ztl lucca orari mappa permesso turisti hotel"): si posizionano tyremap.com, il PDF del PAMS del Comune, La Nazione, turismo.lucca.it, accessibilitacentristorici.it, urbanaccessregulations.eu, autovia.it, TCS e landfolk. Il motore produce una **risposta AI sintetica** (H24, ospiti degli hotel, permesso LuccaPlus) ma ammette che "some may be out of date". ZigZag ha già una sezione città con guide (zigzagmaps.com).
   - **Volume del fenomeno:** [fatto] Firenze, 2025: "le porte telematiche che controllano Ztl, aree pedonali e corsie riservate hanno registrato **506.965 violazioni**" (letto: https://www.lanazione.it/firenze/cronaca/firenze-la-giungla-delle-strade-7b0198b3). [fatto] Nel noleggio l'accesso in ZTL è la prima infrazione, con il **35%** dei casi (dati ANIASA 2022), "specie gli stranieri" (letto: https://www.fleetmagazine.com/multe-piu-frequenti-auto-noleggio-classifica-infrazioni-2024/).

6. **Dolore (C1)**
   - [fatto] La sanzione per l'accesso in ZTL va **da 83 a 332 €** (art. 7 CdS, testo su Brocardi; letto: https://www.brocardi.it/codice-della-strada/titolo-i/art7.html). A questa si sommano le spese di gestione del noleggiatore: Sicily by Car addebitava "50 euro più IVA" (sanzione AGCM a Sicily by Car e Locauto per 8,4 M€ complessivi); per Europcar Sicurauto riporta una "penale contrattuale" di 45 € (da SERP: https://www.sicurauto.it/news/attualita-e-curiosita/locauto-e-sicily-by-car-multa-per-clausole-vessatorie/ · https://www.sicurauto.it/guide-utili/noleggio-auto/multa-con-auto-a-noleggio-attenti-ai-costi-di-notifica-poco-chiari/). Procedimento AGCM CV243 su Hertz: https://agcm.it/dotcmsdoc/allegati-news/CV243%20HERTZ.pdf (da SERP).
   - [fatto] Forum di turisti con thread ricorrenti su multe che arrivano mesi o anni dopo: "ztl ticket rome over 1 year later", "traffic violation notice 6 months after trip", "tzl siena" (https://community.ricksteves.com/travel-forum/italy/ztl-ticket-rome-over-1-year-later · https://community.ricksteves.com/travel-forum/italy/traffic-violation-notice-6-months-after-trip · https://www.fodors.com/community/europe/florence-italy-ztl-fine-advice-on-how-to-handle-1002209/) (da SERP, titoli verificati nei risultati). Reddit: l'API JSON ha risposto con un errore, nessun thread letto direttamente.
   - [fatto] Recensioni ZigZag (lette): bisogno confermato ("Ottima app per sapere se ztl attive"), insieme a frustrazione per prezzo e copertura.
   - [fatto] Autocompletamento "ricorso multa ztl" → "fac simile", "permesso invalidi", "roma/milano/bologna/firenze": esiste un bisogno anche dopo la multa.

7. **Pagatori (G3/C3)**
   - [fatto] DiscoverCars: 70% del profitto sul noleggio e 30% sulla Full Coverage, cookie di 365 giorni, pagamento mensile (letto: https://www.discovercars.com/affiliate). La cifra in euro per prenotazione non è pubblica.
   - [fatto] Utenti paganti: ZigZag Pro (5,99 €/settimana e 19,99 €, dalle recensioni App Store lette); le app ZTL a 0,99-1,99 € hanno pochi utenti.
   - Servizi di ricorso multe a pagamento con listino: **non trovato** (2 ricerche). Trovati solo i costi pubblici: contributo unificato di 43 € davanti al giudice di pace per multe fino a 1.033 €, ricorso al Prefetto gratuito ma con rischio di raddoppio (da SERP: https://www.altroconsumo.it/auto-e-moto/automobili/consigli/multe).
   - Affiliazione assicurativa: non pertinente al bisogno ZTL e soggetta ai limiti IVASS (vedi M2).
   - [stima] I comuni turistici vendono pass giornalieri online (Bologna, Palermo, Firenze): un'affiliazione con loro è improbabile, ma il rinvio all'acquisto è un buon gancio SEO.

8. **Test chatbot (C6)** [stima] Con la query su Lucca, la risposta AI del motore copre le regole generali (H24, hotel, LuccaPlus) ma avverte che possono essere superate. Un LLM generalista sa le regole stabili delle grandi città. **Non sa:** sospensioni estive e deroghe del giorno ("ztl torino agosto 2026", "ztl roma oggi"), il caso personale (targa, alimentazione, permesso, prenotazione in hotel) né dare avvisi in navigazione. Resistenza media-alta per la parte "posso entrare adesso con questa auto + avviso al varco", bassa per le schede informative.

9. **Motivo più forte per scartarlo:** **ZigZag** (S.r.l. italiana, uscita a dicembre 2024) fa già esattamente questo: verifica personalizzata per veicolo, navigazione che evita le ZTL e SEO programmatica per città con guide. Ha 756 voti a 4,7 su iOS, 10K+ download e un abbonamento a pagamento. Entrare ora significa competere con un incumbent giovane e attento al prodotto. Restano i suoi punti deboli: 26 città, prezzo percepito alto e nessuna prova gratuita. A questo si aggiunge il rischio di responsabilità per dati sbagliati.

10. **Note per lo scoring C1-C9**
   - C1 Dolore: **4**. Multa da 83-332 € più 45-50 € di gestione del noleggiatore; 35% delle infrazioni sulle auto a noleggio; forum di turisti pieni di casi.
   - C2 Domanda: **4** [stima]. Long-tail su 23/23 località, comprese quelle piccole; query anche in inglese. Mancano i volumi assoluti (niente Trends).
   - C3 Monetizzazione: **3**. Affiliazione al noleggio al 70% del profitto (cifra per prenotazione non nota) e abbonamenti già pagati (ZigZag). Nessun pagatore B2B con prezzo alto.
   - C4 Dati: **4**. Fonti comunali frammentate e mutevoli (calendari, deroghe, PDF); l'aggregatore pubblico più vicino è fermo al 2023.
   - C5 Distribuzione: **3**. La SEO programmatica è possibile, ma la SERP è affollata (ZigZag, tyremap, autovia, urbanaccessregulations) e c'è la risposta AI.
   - C6 Resistenza all'AI: **4** per l'alert in tempo reale personalizzato, **2** per le schede informative.
   - C7 Difendibilità: **2**. Il dato ZTL si ricostruisce; ZigZag ha già il vantaggio di essere arrivato prima.
   - C8 Debolezza degli incumbent: **2**. ZigZag è moderno e attivo (aggiornato a novembre 2026); le app vecchie sono deboli, ma conta il primo.
   - C9 Tempo alla prima evidenza: **4**. Pagine SEO per 30-50 comuni turistici più un affiliato noleggio si testano in 2 settimane, ma l'indicizzazione richiede tempo.
   - Penalità: stagionalità turistica moderata; rischio legale residuo (responsabilità per informazioni errate).

---

### M2 — Scadenze del veicolo (bollo, revisione, assicurazione)

1. **Ipotesi e criterio di scarto (scritta prima di cercare).**
   Mi aspetto: domanda alta ma soddisfatta da servizi ufficiali gratuiti (app IO, ACI, Portale dell'Automobilista) e da app con promemoria; dolore basso; unico pagatore "ricco" l'assicurazione RC auto (lead e affiliazione), che però rischia di essere attività di distribuzione assicurativa soggetta al RUI IVASS; frammentazione dei dati bassa.
   **Criterio di scarto:** (a) se il modello assicurativo richiede l'iscrizione al RUI (G1 = no) e non resta un pagatore alternativo, oppure (b) se i promemoria ufficiali gratuiti coprono già bollo e revisione.

2. **Verdetto:** **INCERTO (G1, G3), tendente a FAIL**. Il semplice link pubblicitario o la cessione di un contatto a un comparatore sembrano fuori dalla definizione di distribuzione (art. 107 c.3 CAP), ma qualunque confronto o preventivo con possibilità di acquisto è distribuzione (art. 106) e richiede il RUI. La segnalazione di finanziamenti richiede l'OAM. Le funzioni gratuite (IO, iPatente, iTarga, Scanner Veicoli) coprono già il bisogno di base.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | **incerto** | [fatto, norma letta] **Art. 106 c.1 CAP**: è distribuzione assicurativa anche "la fornitura di informazioni relativamente a uno o più contratti di assicurazione sulla base di criteri scelti dal cliente tramite un sito internet… e la predisposizione di una classifica… compreso il confronto tra prezzi… **se il cliente è in grado di stipulare direttamente o indirettamente un contratto**". [fatto] **Art. 107 c.3 CAP**, non è distribuzione: "c) la **mera fornitura di dati e informazioni su potenziali assicurati** a intermediari… o a imprese… se il fornitore non intraprende ulteriori iniziative di assistenza nella conclusione"; "d) la **mera fornitura a potenziali assicurati di informazioni su prodotti**… su un intermediario… se il fornitore non intraprende ulteriori iniziative di assistenza". [fatto] Il regime "a titolo accessorio" (art. 1 lett. cc-septies CAP) vale solo per prodotti "complementari rispetto ad un bene o servizio" e **non per la responsabilità civile**, "a meno che tale copertura non integri il bene o il servizio" fornito: un'app di promemoria non vende il veicolo, quindi il regime non si applica [stima sull'applicazione]. [fatto] **Reg. IVASS 40/2018**: sezione E del RUI per "gli addetti all'attività di distribuzione al di fuori dei locali dell'intermediario" iscritto in A/B/D/F (art. 4 c.2 lett. e). L'art. 80 impone obblighi ai comparatori (quota di mercato comparata, elenco delle imprese, trasparenza delle remunerazioni). Il regolamento non contiene una disciplina dei "segnalatori" (nessuna occorrenza di "segnal*" nel testo consolidato letto). [fatto] **OAM**: circolare MEF del 21/12/2012: "risulta del tutto pacifico che l'esercizio dell'attività di 'segnalazione' è subordinato all'iscrizione nell'elenco tenuto dall'OAM", quindi niente lead di finanziamenti senza OAM. **Conclusione [stima]:** link di affiliazione o banner verso un comparatore e cessione di un contatto "puro" = probabilmente fuori dal RUI (art. 107 c.3 c-d). Mostrare preventivi, classifiche o confronti cliccabili verso l'acquisto, oppure assistere il cliente = distribuzione, quindi serve iscrizione (sezione E come collaboratore di un broker, o sezione B). Il confine è interpretativo: serve un parere legale, e il vincolo del brief ("niente intermediazione assicurativa") rende il modello fragile. | https://www.brocardi.it/codice-delle-assicurazioni-private/titolo-ix/capo-i/art106.html (letto) · https://www.brocardi.it/codice-delle-assicurazioni-private/titolo-ix/capo-i/art107.html (letto, "Aggiornato al 30/10/2026") · https://www.brocardi.it/codice-delle-assicurazioni-private/titolo-i/capo-i/art1.html (letto) · https://www.ivass.it/normativa/nazionale/secondaria-ivass/regolamenti/2018/n40/Regolamento_IVASS_40_del_2_agosto_2018_consolidato.pdf (letto) · https://www.dirittobancario.it/wp-content/uploads/sites/default/files/allegati/circolare_21_dicembre_2012_prot_dt_100578.pdf (letto) |
| G2 Dati raggiungibili | sì | [fatto] Le date le inserisce l'utente o sono verificabili per targa: il Portale dell'Automobilista ha "Verifica Ultima Revisione", con captcha in alcune pagine (da SERP). La scadenza del bollo è su ACI e IO. [stima] Lo scraping dietro captcha è sconsigliato (G5); i dati forniti dall'utente bastano. | https://it.motor1.com/features/813580/revisione-auto-verificare-scadenza-esito/ (da SERP) |
| G3 Pagatore identificabile | incerto | [fatto] Abbonamenti esistenti ma minimi: Scanner Veicoli "abbonamento… mensilmente al costo di 0,99€"; iTarga Pro con "Gestire le scadenze bollo e RCA tramite notifiche". [fatto] Facile.it dichiara di essere pagato dalle compagnie con "accordi commerciali" (da SERP). **Commissioni di affiliazione RC auto per siti terzi: non trovato** (2 ricerche; le pagine partner di Prima e Segugio rispondono 403). | https://itunes.apple.com/lookup?id=1247460491&country=it (letto) · https://itunes.apple.com/lookup?id=1222570860&country=it (letto) |
| G4 Distribuzione senza pubblico | incerto | [stima] Le query hanno volume ("scadenza bollo auto [regione]", "scadenza revisione auto targa"), ma la SERP è presidiata da editori auto, Facile.it e Telepass, con la risposta AI completa (vedi test). Pochi spazi per pagine programmatiche: la long-tail è solo per regione (20), non per comune. | WebSearch "scadenza revisione auto da targa verifica gratis" |
| G5 Rischio legale gestibile | sì (con cautele) | [stima] Targhe e scadenze inserite dall'utente sono dati personali gestibili (GDPR standard). Il rischio principale è regolatorio (G1), non sui dati. | — |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| **app IO + ACI/Regioni** (pubblico) | https://www.regione.piemonte.it/web/node/19914 | [fatto, letto] Piemonte: "A partire da febbraio 2025… riceveranno un messaggio come **promemoria della scadenza del bollo** direttamente sull'app", che sostituisce l'avviso cartaceo; c'è anche il servizio e-mail "Memobollo". Pagamento del bollo in IO (da SERP). | Gratis | Copertura regionale variabile; nessun promemoria nativo per la revisione (da SERP) |
| **iPatente** (MIT, pubblico) | https://apps.apple.com/it/app/id417705371 | [fatto, letto] "servizio di notifica che segnalerà la prossima scadenza della patente… **la scadenza della revisione**" | Gratis. **1,55/5 su 2.932 voti** | UX pessima (voto), accreditamento al Portale |
| ACI Memo / ACI Space | https://www.investireoggi.it/promemoria-per-la-scadenza-bollo-auto-come-attivarlo-gratis/ | Agenda dei promemoria per bollo, patente e revisione (da SERP) | Gratis | Non verificato direttamente |
| Scanner Veicoli | https://apps.apple.com/it/app/id1247460491 | Verifica per targa di assicurazione, bollo, revisione, km | Gratis + 0,99 €/mese. **4,74 su 52.471 voti** | — |
| iTarga | https://apps.apple.com/it/app/id1222570860 | Verifica copertura RCA e bollo; notifiche scadenze nella versione Pro | Freemium. **4,6 su 29.470 voti** | "Le date del bollo sono puramente indicative" |
| Targa Scan | https://apps.apple.com/it/app/id1382604445 | Verifica targa | 4,68 su 16.342 voti | — |
| App di promemoria minori (Scadenze Auto, Galindo, Garage, Project Garage, Scadora) | https://apps.apple.com/it/app/id6754245413 | Promemoria manuali | Gratis; da 0 a 44 voti | Irrilevanti, ma dimostrano quanto sia facile entrare |
| Comparatori (Facile.it, Segugio) e compagnie | https://www.facile.it/assicurazioni/compagnie/prima.html | Preventivi RC auto; promemoria del rinnovo: **non verificato** | Pagati dalle compagnie | Iscritti al RUI: hanno la licenza che a noi manca |

5. **Domanda (C2)** [stima]
   - Autocompletamento (file `A/sugg3.txt`): "scadenza bollo" → "auto con targa", "auto 2026", "veneto/piemonte/lombardia/toscana"; "scadenza revisione" → "auto targa", "tolleranza", "quanto tempo ho"; "scadenza assicurazione" → "15 giorni", "tolleranza", "da targa"; "promemoria scadenza" → "bollo auto", "revisione auto", "patente". Esiste una domanda di promemoria esplicita ma piccola. La long-tail è regionale (bollo), non comunale.
   - Trends: non raggiungibile (429).
   - SERP "scadenza revisione auto da targa verifica gratis": Sicurauto, Motor1, Quotidiano Motori, Facile.it, Telepass, Automobile.it, Autoscout24. **Risposta AI completa** (Portale dell'Automobilista, campo V.9 del DU, tolleranza fino a fine mese).

6. **Dolore (C1)** Recensioni di iPatente: voto 1,55/5 su 2.932, segno di frustrazione per lo strumento ufficiale (non ho letto i testi). Lamentele specifiche per bollo o revisione dimenticati: **non trovato**. [stima] Il dolore è episodico (scadenza annuale o biennale) e ormai attenuato dagli avvisi IO e dalle app di verifica targa gratuite.

7. **Pagatori (G3/C3)** Commissioni di affiliazione o lead RC auto per terzi: **non trovato**. Abbonamenti consumer esistenti: 0,99 €/mese (Scanner Veicoli). Lead di finanziamento: **precluso senza OAM** (circolare MEF 2012, letta). [stima] Altri pagatori possibili: centri revisione (prenotazioni), officine e gommisti (lead locali), ma nessuna cifra trovata.

8. **Test chatbot (C6)** [stima] La risposta AI del motore spiega già come verificare la revisione dalla targa e le regole di tolleranza. Un LLM non conosce le date dell'utente, ma i promemoria sono una funzione banale e già gratuita (IO, iPatente, iTarga). Resistenza bassa per l'informazione; per l'alert, il valore aggiunto rispetto ai servizi gratuiti è minimo.

9. **Motivo più forte per scartarlo:** il pagatore che conta (assicurazione RC auto) è esattamente sul confine regolatorio: oltre il semplice link o la cessione di un contatto serve il RUI (art. 106 CAP). Il resto del bisogno (promemoria) è già coperto **gratis dallo Stato** (IO per il bollo dal 2025, iPatente per la revisione) e da app con decine di migliaia di voti.

10. **Note per lo scoring C1-C9**
   - C1 **2**: nessuna lamentela specifica trovata; l'unica frustrazione documentata è il voto basso dell'app ministeriale.
   - C2 **3**: query presenti e stabili, long-tail solo regionale.
   - C3 **2**: l'affiliazione RC auto non ha cifre trovate ed è vincolata da IVASS; abbonamento a 0,99 €.
   - C4 **1**: dato fornito dall'utente o da un'unica fonte ufficiale.
   - C5 **2**: SERP presidiata e coperta dalla risposta AI.
   - C6 **2**: promemoria banali e già gratuiti.
   - C7 **1**: copiabile in una settimana.
   - C8 **3**: lo strumento ufficiale è pessimo (1,55/5), ma le app private sono buone (4,6-4,7).
   - C9 **4**: un test è facile; un test assicurativo richiede prima il parere legale.
   - Penalità: rischio legale e regolatorio residuo alto (IVASS/OAM).

---

### #31 insieme a N14 — Ritardi treni e indennizzi automatici (abbonati e viaggiatori)

1. **Ipotesi e criterio di scarto (scritta prima di cercare).**
   Mi aspetto: dolore reale per i pendolari regionali (Trenord in particolare, indennizzo da richiedere dal 2024); dati di circolazione raggiungibili; regole frammentate per regione e operatore; importi piccoli. Le grandi imprese (Italo, Trenitalia) vanno verso l'indennizzo automatico, che toglie spazio. Nessuna claim agency italiana per i treni.
   **Criterio di scarto:** (a) se gli operatori pagano già in automatico nei casi principali o lo faranno a breve, oppure (b) se il volume di richieste per cui qualcuno pagherebbe una commissione è minuscolo, oppure (c) se non esiste alcun pagatore con cifre.

2. **Verdetto:** **INCERTO (G3), tendente a FAIL.** Nessun pagatore italiano trovato. Il mercato misurato è piccolo: Trenord, **16.894 richieste di indennizzo abbonati in tutto il 2025**. Operatori e regolatori stanno automatizzando: Italo è automatico; i biglietti regionali digitali Trenitalia sono automatici; Trenord ha promesso all'ART un sistema "pressoché automatico" entro fine 2026; AGCM ha accettato impegni di Trenitalia a luglio 2026.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] Le statistiche sui ritardi e la preparazione della richiesta per conto proprio dell'utente non richiedono licenze. Una richiesta per conto terzi con mandato e commissione: nessuna norma specifica trovata (né divieto né albo). Da verificare se gli operatori accettano richieste da intermediari. | — (non trovato) |
| G2 Dati raggiungibili | sì | [fatto] Trenord pubblica "entro la fine di ogni mese… l'elenco delle direttrici con diritto di indennizzo" (letto: Regione Lombardia). [fatto, screening precedente non riverificato] Progetti aperti scaricano ogni giorno i dati di ViaggiaTreno e Trenord. [fatto] Regole frammentate per regione: l'autocompletamento mostra "bonus abbonati umbria 2026", "bonus abbonati toscana", "bonus abbonati trenitalia toscana". | https://www.regione.lombardia.it/infrastrutture-trasporti-e-mobilita/trasporto-pubblico/treni/indennizzo-per-gli-utenti-titolari-di-abbonamento-ferroviario-o-integrato (letto) · https://www.github.com/MarcoBuster/railway-opendata |
| G3 Pagatore identificabile | **incerto (tendente a no)** | [fatto] Claim agency ferroviaria in Italia: **non trovata** (3 ricerche). [fatto] Unico esempio UE: DelayPay, "No-win, no-fee", "**25% Success fee**", ancora su un dominio pages.dev (letto). [fatto] Gli importi sono piccoli: Trenord paga "**30% del valore dell'abbonamento mensile**" o 30% di 1/12 dell'annuale, solo se la direttrice supera il 10% di treni soppressi o in ritardo oltre 15 minuti; regionale Trenitalia 25% solo per biglietti da almeno 16 € (ritardo 60-119 min) e 50% per biglietti da almeno 8 € (ritardo ≥120 min). [stima] Con un abbonamento mensile ipotetico di 60 € (prezzo **non verificato**), l'indennizzo è di 18 €; una commissione del 25% vale 4,5 €. Sulle 16.894 richieste Trenord del 2025 fanno **circa 76 k€/anno anche al 100% di quota di mercato**. | https://delaypay-16u.pages.dev/ (letto) · Regione Lombardia (letto) · https://www.trenitalia.com/it/informazioni/indennizzo-per-ritardodeltreno.html (letto) · https://www.autorita-trasporti.it/wp-content/uploads/2026/06/Delibera-n.-95_2026_signed.pdf (letto) |
| G4 Distribuzione senza pubblico | incerto | [stima] Le query hanno volume ("rimborso ritardo treno italo/frecciarossa/regionale/con abbonamento", "indennizzo trenord come richiederlo/modulo"), ma la SERP è presidiata da Trenitalia, editori e Altroconsumo, con risposta AI. Il canale migliore sarebbero i comitati dei pendolari (passaparola), non verificato. | autocompletamento (sotto) |
| G5 Rischio legale gestibile | sì (con cautele) | [fatto, screening precedente] I termini RFI tutelano i contenuti del sito; i dati di circolazione sono fatti non personali. Biglietti e abbonamenti degli utenti = dati personali (GDPR). | https://www.rfi.it/it/misc/termini-e-condizioni.html (non riletto) |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| **Italo** (operatore) | https://quifinanza.it/info-utili/ritardo-treni-rimborso-italo/952819/ | [fatto, letto] "Italo eroga un **rimborso automatico**… senza che il passeggero debba inviare un reclamo" per ritardi di almeno 60 minuti; da SERP: accredito entro 30 giorni come credito o voucher | Gratis | Il pagamento in credito Italo vincola il cliente |
| **Trenitalia** (operatore) | https://www.trenitalia.com/it/informazioni/indennizzo-per-ritardodeltreno.html | [fatto, letto] Frecce: bonus 25% per ritardi di 30-59 min (più generoso della UE), 25%/50% per 60-119/≥120 min. Regionale Digital Ticket: "pagato automaticamente" sulla carta. Negli altri casi "Verifica indennizzo" nell'app o un web form, entro 1 anno. App iOS **4,59 su 92.059 voti** | Gratis | Regionale non digitale: modulo e posta |
| AGCM su Trenitalia | https://www.quotidiano.net/economia/ultimaora/lantitrust-accoglie-gli-impegni-di-2c6d40f7 | [fatto, letto, 2026-07-30] Accolti gli impegni: eliminato "il requisito della previa attestazione di rinuncia al viaggio", potenziati i canali di richiesta | — | Toglie attrito, quindi spazio a un intermediario |
| **Trenord** (operatore) | https://www.trenord.it/assistenza/servizi/rimborsi-e-indennizzi/indennizzo-per-ritardi | Indennizzo per gli abbonati **da richiedere**; app iOS **4,26 su 36.045 voti** | Gratis | Ritardi nella gestione (vedi Dolore); sistema automatico promesso entro fine 2026 |
| Trenìt!, Trainline, Treninoo | https://apps.apple.com/it/app/id1058908183 | Ritardi in tempo reale. Trenìt! **4,79 su 70.412 voti**; Trainline 4,67 su 12.559 | Gratis/pubblicità | Nessuna gestione degli indennizzi (descrizioni non lette in dettaglio) |
| Altroconsumo (associazione) | https://www.altroconsumo.it/azioni-collettive/rimborsi-pendolari | Petizione: "chiediamo che il rimborso sia automatico e non su richiesta" | Gratis per i firmatari | Advocacy, non un servizio |
| DelayPay (UE) | https://delaypay-16u.pages.dev/ | Recupero dei rimborsi ritardi | 25% success fee | Early stage, copertura italiana non verificata |
| Regolatore ART | https://www.autorita-trasporti.it/wp-content/uploads/2026/06/Delibera-n.-95_2026_signed.pdf | Sanziona Trenord (importo base 30.000 €) per il mancato rispetto dei tempi | — | Spinge l'automazione |

5. **Domanda (C2)** [stima]
   - Autocompletamento (file `A/sugg3.txt`): "rimborso ritardo treno" → italo, frecciarossa, regionale, intercity, trenitalia, trenord, "con abbonamento". "indennizzo trenord" → abbonamento, ivol, sciopero, "come richiederlo", modulo, "settembre 2025". "rimborso ritardo italo" → 30/50/60/80/90/120 minuti, "è automatico". "ritardo treno" → numeri di treni specifici ("605 oggi", "8807 oggi"), quindi esiste una long-tail per numero di treno. "bonus abbonati" → umbria 2026, toscana, trenitalia.
   - Trends: non raggiungibile.
   - SERP "rimborso ritardo treno regionale Trenitalia abbonamento come richiederlo": Sicurauto, La Nazione, Trenitalia (più pagine), Money.it, Altroconsumo, Fastweb. **Risposta AI completa** con procedura, termini (12 mesi) e indennità del 10% per gli abbonati.
   - Misura dura: **16.894 richieste di indennizzo** di abbonati Trenord nel 2025 (ART, delibera 95/2026, letta).

6. **Dolore (C1)**
   - [fatto, letto] Delibera ART 95/2026: delle 16.894 richieste 2025, solo il **28%** ha avuto risposta entro i 30 giorni della Carta dei servizi; **64% in ritardo** (1.388 oltre 90 giorni); **circa l'8% senza risposta** al 23/02/2026.
   - [fatto, letto] Altroconsumo: le nuove regole sono uno "stop al rimborso automatico" con "criteri più restrittivi"; "Riteniamo che Trenord abbia la possibilità di fare le verifiche per tratta e che possa riconoscere automaticamente la somma".
   - [fatto, letto] Recensioni App Store Trenord (ultime 50): "non dà rimborsi rispetto ai ritardi" (1★, 2026-10-15); "non riesco a procedere con la richiesta di rimborso perché non funziona il tasto…" (1★, 2026-08-08); "ogni volta c'è un nuovo ritardo" (1★, 2026-11-15).
   - [fatto, letto] Dal gennaio 2024 la soglia Trenord è passata a 15 minuti e serve una richiesta (Regione Lombardia).

7. **Pagatori (G3/C3)** Italia: **non trovato** nessun servizio a pagamento. UE: DelayPay, 25% success fee (letto). Associazioni di consumatori: fanno advocacy gratuita, non comprano lead (stima). [stima] Pubblicità su traffico pendolare: basso valore. Il potenziale indicato sopra (~76 k€/anno su tutta Trenord al 100% di quota) è un'ipotesi di ordine di grandezza costruita su un prezzo non verificato.

8. **Test chatbot (C6)** [stima] La risposta AI del motore spiega già bene regole e procedure di Trenitalia e Italo. Un LLM non sa se la *mia* direttrice ha diritto all'indennizzo questo mese, né lo storico del *mio* treno, e non presenta la richiesta. La resistenza esiste solo nella parte dati più automazione, cioè quella che Trenord e Trenitalia stanno internalizzando.

9. **Motivo più forte per scartarlo:** l'automazione arriva dagli stessi operatori, spinti da ART e AGCM. Italo è già automatico, i biglietti regionali digitali Trenitalia pure, e Trenord ha dichiarato all'ART un sistema "pressoché automatico" entro fine 2026. Il residuo manuale è piccolo (circa 17k richieste l'anno su Trenord) e fatto di importi di pochi euro.

10. **Note per lo scoring C1-C9**
   - C1 **4**: dolore documentato da ART (64% delle risposte in ritardo), Altroconsumo e recensioni.
   - C2 **3**: query diffuse, ma solo 16,9k richieste annue sulla rete più grande per abbonati.
   - C3 **1**: nessun pagatore in Italia; importi piccoli.
   - C4 **3**: dati ViaggiaTreno instabili più regole per regione e per direttrice; lo storico si accumula.
   - C5 **2**: SERP presidiata da operatori ed editori; canale pendolari non verificato.
   - C6 **3**: la parte dati personalizzati resiste, l'informazione no.
   - C7 **2**: lo storico si accumula, ma il valore viene eroso dall'automazione degli operatori.
   - C8 **2**: Trenitalia e Italo hanno app forti (4,6-4,8); Trenord è debole ma sotto pressione regolatoria.
   - C9 **3**: un tool "la mia direttrice ha diritto?" si fa in 2 settimane; la monetizzazione no.
   - Penalità: dipendenza dalle fonti RFI/Trenord; rischio di obsolescenza regolatoria (automazione).

---

#### Nuovi candidati emersi nel gruppo (grezzi)

1. **Contestazione delle spese di gestione multe del noleggio auto (B2C, turisti e residenti).** Le spese sono di 45-50 € + IVA per multa; AGCM ha sanzionato Sicily by Car e Locauto per 8,4 M€ e ha aperto procedimenti su Hertz (CV243) e Drivalia (CV248). La ZTL è il 35% delle infrazioni sulle auto a noleggio. Un generatore di reclamo, chargeback o istanza, con modelli per noleggiatore, aggancia lo stesso pubblico di M1. Pagatore da verificare: utente a prestazione, oppure lead per avvocati o associazioni. Fonti: https://www.sicurauto.it/news/attualita-e-curiosita/locauto-e-sicily-by-car-multa-per-clausole-vessatorie/ (da SERP) · https://www.fleetmagazine.com/multe-piu-frequenti-auto-noleggio-classifica-infrazioni-2024/ (letto).
2. **Bonus e indennizzi per abbonati regionali, regione per regione (variante B2C di #31).** Toscana e Umbria hanno "bonus abbonati" legati alla puntualità per linea (autocompletamento: "bonus abbonati umbria 2026", "bonus abbonati trenitalia toscana"), Lombardia pubblica le direttrici ogni mese. Un unico alert "questo mese hai diritto a X €" per tutte le regioni sfrutta la frammentazione. Il pagatore resta debole: va testato solo come modulo gratuito di un prodotto più ampio. [stima, regole regionali non lette direttamente]

---

#### Uso strumenti del gruppo
- WebSearch: **16**.
- WebFetch: 7 chiamate (3 riuscite).
- Letture dirette con curl: circa 40 (pagine, PDF IVASS/ART/MEF, API iTunes, Google Play, RSS recensioni).
- Autocompletamento Google: 39 chiamate.
- Google Trends: 1 tentativo (429).
- Reddit JSON: 1 tentativo (fallito).


---

## Screening B2C, gruppo B (casa e consumi): H1, #20, #19

Data di accesso di tutte le fonti: **2026-11-20**. Cartella di lavoro con i file scaricati: `scratchpad/B/`. Le ipotesi pre-registrate sono state scritte in `B/ipotesi.md` prima di qualsiasi ricerca e sono riportate qui sotto senza modifiche di sostanza.

Note di metodo valide per i tre candidati:
- **Autocompletamento:** `suggestqueries.google.com`, `hl=it`, 40 chiamate in tutto (file `B/ac_h1.txt` e `B/ac_rest.txt`).
- **Google Trends:** un solo tentativo sulla pagina explore, risposta HTTP 429. **Trends non raggiungibile** per tutti e tre i candidati.
- **Reddit:** l'endpoint `search.json` ha risposto HTTP 403. Due WebSearch con `site:reddit.com` non hanno restituito thread Reddit, quindi il dolore si basa sulle recensioni degli store.
- **Store:** voti e recensioni App Store letti dalle API iTunes (`lookup`/`search`/`rss customerreviews`, country=it). Google Play letto con curl dalla pagina `details`.
- Il proxy ha bloccato due fonti: `osservaprezzi.mimit.gov.it` (host non risolto) e `ilportaleofferte.it` (403 dall'Application Gateway). Non le ho aggirate.

---

### H1 — Calendario raccolta rifiuti e regole per comune ("dove lo butto")

1. **Ipotesi e criterio di scarto (pre-registrati).**
   - **Attese:** dolore medio, perché i calendari cambiano e le app dei gestori sono mediocri. Domanda long-tail ampia ma con poca intenzione commerciale. Pagatori deboli: comuni e gestori pagano già Junker, che è un concorrente consolidato.
   - **Lo scarto se** Junker e le app dei gestori coprono la maggior parte dei comuni e sono pagate dai comuni stessi (incumbent con contratti B2G), e/o se l'unico ricavo possibile è la pubblicità a basso valore, oppure se i dati dei calendari, non strutturati e in PDF comune per comune, non si possono mantenere in modo sostenibile.

2. **Verdetto:** PASS ai gate, ma debole. I gate passano: dati pubblici per obbligo ARERA, pagatore B2G esistente, long-tail reale. Il pagatore B2G però è già presidiato da Junker (gruppo DNA Ambiente), Golem Net, le app dei gestori e Municipium. Lato consumatore resta solo la pubblicità.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Pubblicare calendari e regole di conferimento non richiede iscrizioni o albi. Gli obblighi di trasparenza ARERA (TITR) ricadono sui gestori, non su terzi. | https://www.arera.it/fileadmin/allegati/docs/19/444-19titr.pdf |
| G2 Dati raggiungibili | sì (con costo di manutenzione alto) | [fatto] Il TITR (Allegato A alla del. 444/2019/R/rif, art. 3) obbliga i gestori a pubblicare online "calendario e orari vigenti relativi alla raccolta dei rifiuti urbani". L'art. 8.2 li obbliga a riportarli almeno una volta l'anno nel documento di riscossione. [fatto] Nella SERP i calendari sono quasi tutti PDF, spesso suddivisi per zona o quartiere: Como ha un PDF per quartiere, Casalpusterlengo uno per zona, Hera uno per area di Modena e Ferrara, e molti comuni li ospitano su municipiumapp.it. [stima] Si tratta di circa 7.900 comuni e centinaia di gestori, con PDF annuali e variazioni per festività: frammentazione molto alta. | https://www.arera.it/fileadmin/allegati/docs/19/444-19titr.pdf · https://comune.como.it/.galleries/Settore-12/calendari_raccolta/Como-Camerlata-Rebbio-2026.pdf · https://casalpusterlengo-api.municipiumapp.it/s3/1485/allegati/arera/calendario_raccolta_rifiuti_2026_zona_a.pdf · https://www.gruppohera.it/documents/d/gruppohera/calendario_pap_2025_modena_forese-sud-pdf |
| G3 Pagatore identificabile | sì (ma presidiato) | [fatto] Junker dichiara comuni e gestori "abbonati": "Già 3500 Comuni e gestori", ma nella stessa pagina un box dice "1.000 Comuni abbonati", quindi i dati sono incoerenti. Offre i piani "Junker standard" e "Junker su misura" senza prezzi pubblici. L'app è gratuita per i cittadini. [fatto] Golem Net ("Trasparenza Rifiuti", skill Alexa, notifiche TARI su app IO) dichiarava circa 600 enti nel 2022. Prezzi ai comuni: **non trovati** (cercate determine di affidamento a Giunko srl, nessuna trovata). Sponsor locali che pagano oggi per calendari rifiuti: **non trovato**. | https://www.junker.app/ · https://lentepubblica.it/pa-digitale/intelligenza-artificiale-trasparenza-rifiuti-skill-pubbliche-amministrazioni-cittadini-gestori-servizio-rate-app-io/ |
| G4 Distribuzione senza pubblico | sì | [fatto] L'autocompletamento propone "calendario raccolta rifiuti [comune]" per 16 dei 18 comuni testati e arriva anche a comuni piccoli (Romanengo, Romagnano Sesia, Trentola Ducenta), con varianti per anno, zona e "ingombranti". [fatto] Nella SERP di "calendario raccolta rifiuti cremona 2026" compaiono quasi solo PDF comunali di altri comuni: risultati di qualità bassa, quindi c'è spazio per la SEO. | file `B/ac_h1.txt`; WebSearch del 2026-11-20 (risultati: comune.como.it, municipiumapp.it, apricaspa.it) |
| G5 Rischio legale gestibile | sì | [stima] Si trattano fatti pubblicati per obbligo regolatorio, senza dati personali. Rischio sui generis basso: si estraggono singoli fatti (giorni, materiali) da documenti dei gestori, non la banca dati sostanziale di un concorrente come Junker, che conviene non toccare. | https://www.arera.it/fileadmin/allegati/docs/19/444-19titr.pdf |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| Junker (Giunko srl, gruppo DNA Ambiente) | https://www.junker.app/ | Calendario con notifiche serali, "dove lo butto" con codice a barre, foto o testo (oltre 2 milioni di prodotti), mappe degli ecocentri, segnalazioni, 13-14 lingue | Gratis per i cittadini; abbonamento pagato da comuni e gestori, importi non pubblici | [fatto] Google Play 3,7★, 11,1K recensioni, oltre 1 Mln download. App Store 4,34★ su 1.485 voti, ma le ultime recensioni sono molto negative: calendario sparito su iOS (2026-11-11), "Calendario errato rispetto alla reale raccolta di Calvagese" (2026-02-11), segnalazioni non funzionanti. Copre solo i comuni abbonati. |
| Il Rifiutologo (Hera) | https://apps.apple.com/it/app/il-rifiutologo/id468454538 | "Dove lo butto" e calendario per i comuni Hera, apertura dei cassonetti | Gratis, gestore | [fatto] App Store 1,95★ su 1.033 voti; ultime 50 recensioni con media 1,24. "Dall'ultimo aggiornamento è scomparso il calendario dei ritiri" (2026-11-03), NFC non funzionante su iOS. |
| My Hera / Iren Ambiente / Puliamo AMSA e altre app dei gestori | https://play.google.com/store/apps/details?id=it.gruppohera.app&hl=it | Servizi del singolo gestore | Gratis | [fatto] My Hera 4,5★ su 43,5K recensioni (è un'app di bollette multiservizio); Iren Ambiente 3,51★ su 203 voti (App Store). Coprono solo il proprio territorio. |
| Golem Net "Trasparenza Rifiuti" | https://lentepubblica.it/pa-digitale/intelligenza-artificiale-trasparenza-rifiuti-skill-pubbliche-amministrazioni-cittadini-gestori-servizio-rate-app-io/ | Sezione trasparenza ARERA, skill Alexa, promemoria, notifiche TARI su app IO | B2G, circa 600 enti (2022), prezzi non pubblici | Articolo promozionale, dati non verificati |
| Municipium (app comunale) e decine di app di singoli consorzi (Ecoffice, Separiamo, Chebutto, Differenziata Val Vibrata, W-MySir, Rifiuti HUB, Erredi…) | https://apps.apple.com/it/app/ecoffice/id6596773296 | Calendari locali | B2G o gratis | Copertura frammentata. Nelle recensioni di IdealService il calendario di una zona risultava vuoto. |
| Servizi pubblici gratuiti | siti comunali e dei gestori | PDF annuali obbligatori (TITR), anche in bolletta TARI | Gratis | Formato PDF per zona, nessuna notifica |

5. **Domanda (C2)** [stima]
   - **Autocompletamento, "calendario raccolta rifiuti [comune]":** suggerimenti per Roma, Milano (con varianti AMSA 2024-2026 e Natale), Torino (Iren), Verona (Amia), Bergamo (9 varianti, A2A, pdf), Reggio Emilia, Lecce, Trento, Pistoia, Cremona, Busto Arsizio (10 varianti, zone 1-6, Natale), Sassari, Matera, Vimercate e Castelfranco Veneto. Nessun suggerimento per Bologna (solo un risultato AMA), Pinerolo e Sulmona. Totale: 16 comuni su 18.
   - **Autocompletamento, "raccolta differenziata …":** Palermo (zone, mappa, oggi, giorni, calendario), Napoli (10 quartieri: Vomero, Arenella, Fuorigrotta…), Catania, Carini 2026, Mazara del Vallo 2026, Agrigento, Salerno, Aprilia. "calendario raccolta …" propone Siracusa, Terracina, Anzio, Sabaudia e Fiumicino. La long-tail scende fino ai quartieri e alle zone.
   - **Autocompletamento, "dove butto / dove si butta …":** polistirolo, capsule del caffè, ceramica, lampadine, scarpe, tetrapak, gusci di cozze, CD. Long-tail per oggetto, indipendente dal comune.
   - **"junker":** compaiono "junker app comuni aderenti" e "junker app rifiuti", cioè un brand già cercato.
   - **SERP:** dominata da PDF comunali, nessuna risposta AI rilevante per la query per comune. La query per oggetto ("dove si buttano le capsule del caffè") è dominata da testate (QuiFinanza, Panorama, AGI, Altroconsumo) per la novità PPWR del 12 agosto 2026.
   - **Trends:** non raggiungibile.

6. **Dolore (C1).**
   - [fatto] Recensioni App Store di Junker (feed sortby=mostrecent): 1★ "Calendario assente" (2026-11-11); 1★ "È sparito il calendario… comune Aci Sant'Antonio" (2026-10-16); 1★ "Calendario errato rispetto alla reale raccolta di Calvagese" (2026-02-11); 1★ "manda sempre i soliti messaggi e quelli utili tipo cambiamento raccolta rifiuti nei giorni festivi non li manda" (2026-08-15). Fonte: https://itunes.apple.com/it/rss/customerreviews/id=982194860/sortby=mostrecent/json
   - [fatto] Il Rifiutologo: 43 recensioni da 1★ sulle ultime 50. Fonte: https://itunes.apple.com/it/rss/customerreviews/id=468454538/sortby=mostrecent/json
   - Reddit: non trovato. Il dolore è concentrato su app B2G di qualità bassa, non sull'assenza di informazione.

7. **Pagatori (G3/C3).**
   - [fatto] Comuni e gestori pagano abbonamenti a Junker. Le cifre non sono pubbliche e non ho trovato determine di affidamento con WebSearch.
   - [fatto] DNA Ambiente (gruppo di Junker) dichiara oltre 2.500 amministrazioni servite e "1 bolletta Tari su 5" calcolata con i suoi software: è un incumbent con relazioni B2G già in essere (https://www.junker.app/).
   - Sponsor locali: non trovato. Affiliazione: non pertinente.
   - [stima] Lato consumatore resta la pubblicità display su traffico locale a bassa intenzione commerciale: RPM basso.

8. **Test chatbot (C6).**
   - **Query per oggetto** ("dove si buttano le capsule del caffè"): la risposta di WebSearch è già completa e aggiornata (regole PPWR dal 12/08/2026, eccezione Milano) e conclude "verificate il sito del vostro Comune". Un LLM generalista copre bene questa parte, quindi la resistenza è bassa.
   - **Query per comune e data** ("calendario raccolta rifiuti cremona 2026"): la risposta AI non ha trovato il calendario e ha rimandato al sito del gestore. Il dato per zona, per giorno e con le variazioni festive non è nel modello, quindi la resistenza è alta. Il valore difendibile sta nelle notifiche e negli avvisi di variazione, non nelle risposte.

9. **Motivo più forte per scartarlo.** Il pagatore che passa il gate G3 (il comune) è lo stesso che oggi compra Junker e Golem, oppure si affida all'app del proprio gestore. Vendere al B2G richiede vendita diretta e affidamenti, che è l'opposto di "distribuzione senza pubblico". Il prodotto B2C gratuito monetizza solo con pubblicità su query a bassa intenzione commerciale. In più il calendario per zona richiede di aggiornare migliaia di PDF ogni anno, e un errore ("ieri non era il vetro") distrugge la fiducia, come mostrano le recensioni di Junker.

10. **Note per lo scoring**
   - **C1 Dolore: 3.** Le recensioni delle app esistenti sono molto negative (Rifiutologo 1,95★, ultime di Junker 1★), ma il disagio è basso e il PDF esiste.
   - **C2 Domanda: 4** [stima]. Long-tail molto ampia (16/18 comuni, quartieri, zone, anni). Trends non disponibile.
   - **C3 Monetizzazione: 1-2.** B2C solo display. B2G con prezzi non pubblici e presidiato.
   - **C4 Vantaggio dei dati: 4.** PDF frammentati per zona, aggiornamento annuale, variazioni festive.
   - **C5 Distribuzione: 4.** SERP debole (PDF), pagine generabili per comune, zona e oggetto.
   - **C6 Resistenza all'AI: 3.** Le notifiche e il dato per zona resistono; la parte "dove lo butto" no.
   - **C7 Difendibilità: 2.** Copiabile; Junker ha già il database dei prodotti.
   - **C8 Debolezza degli incumbent: 3.** Prodotti mediocri ma con contratti B2G solidi.
   - **C9 Tempo alla prima evidenza: 4.** 50 pagine comunali con le notifiche, misurabili in 2 settimane.
   - **Penalità:** stagionalità bassa; dipendenza dalla SEO.

---

### #20 — Bollette luce e gas (analisi della bolletta, confronto offerte)

1. **Ipotesi e criterio di scarto (pre-registrati).**
   - **Attese:** domanda alta e pagatori forti (commissioni stimate tra 20 e 100 € a contratto), ma concorrenza fortissima (Facile.it, Segugio, SOStariffe, Selectra) e il Portale Offerte ARERA gratuito.
   - **Lo scarto se** serve un'iscrizione o una qualifica per incassare lead o commissioni (G1 = no), oppure se la SERP è dominata da brand con budget pubblicitari enormi e non c'è una long-tail aggredibile.

2. **Verdetto:** INCERTO (G4). Il G1 passa: nessuna licenza o albo per il comparatore o il procacciatore. La distribuzione organica però è occupata da operatori con molte risorse, e il modello reale di monetizzazione documentato passa da call center e teleselling. Le commissioni per contratto non sono pubbliche.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì (con obblighi indiretti) | [fatto] L'Elenco Venditori del MASE (L. 124/2017, art. 1, commi 80-82; DM 164/2022) è "titolo abilitativo per lo svolgimento dell'attività da parte delle **imprese di vendita al dettaglio** dell'energia elettrica ai clienti finali": riguarda chi vende, non chi confronta o procaccia. [fatto] Il Codice di condotta commerciale ARERA (del. 366/2018) si applica agli "esercenti la vendita", che devono formare "il personale, incaricato **a qualunque titolo** delle attività finalizzate alla promozione di offerte contrattuali o alla conclusione di contratti" (art. 4.1). Il personale commerciale deve identificarsi come "agente di vendita" del venditore (art. 8). Un comparatore che incassa provvigioni opera quindi per conto del venditore e ne eredita gli obblighi per contratto, ma senza un'iscrizione propria. [fatto] Nel caso AGCM PS12578 i rapporti di Supermoney con i fornitori sono descritti come "contratti di intermediazione commerciale… dietro provvigioni commisurate… ai quantitativi di contratti di fornitura… effettivamente stipulati", senza alcun riferimento ad albi. Nessuna norma specifica su certificazione o "marchio di fiducia" dei comparatori privati: **non trovata** (cercata nel D.Lgs. 210/2021, nella del. ARERA 156/2025/R/com e nel DL 19/2025). | https://mase.gov.it/sites/default/files/archivio/allegati/trasparenza_valutazione_merito/CEE/decreto_direttoriale_EVE_1294_16_01_2023_Allegato_1_indicazioni_operative_EVE.pdf · https://www.arera.it/allegati/docs/18/366-18alla.pdf · https://www.agcm.it/dotcmsdoc/allegati-news/PS12578%20chiusura.pdf · https://www.arera.it/fileadmin/allegati/docs/25/156-2025-R-com.pdf |
| G1 (seguito): AGCM e ARERA | regole da rispettare | [fatto] L'AGCM ha sanzionato Supermoney per 1.480.000 € (comunicato del 28/02/2024) per tre condotte: risparmi "fino a 400 €" senza spiegare come ottenerli, classifica delle offerte senza criteri dichiarati, mancata indicazione che l'intermediazione era remunerata. Il comparatore ricade quindi pienamente nel Codice del consumo (pratiche commerciali scorrette). [fatto] Dal 1° luglio 2025 i venditori devono pubblicare per ogni offerta il codice offerta e la Scheda sintetica (del. ARERA 156/2025). | https://en.agcm.it/en/media/press-releases/2024/2/PS12578 · https://www.arera.it/comunicati-stampa/dettaglio/energia-nuove-misure-trasparenza-confrontabilita-offerte |
| G2 Dati raggiungibili | sì | [fatto] Il Portale Offerte (del. 51/2018/R/com) raccoglie e pubblica tutte le offerte rivolte ai domestici, e i venditori devono pubblicare codice offerta e Scheda sintetica sui propri siti (del. 156/2025). La bolletta la carica l'utente. Il Portale non era raggiungibile dal proxy (403), quindi l'esistenza di un dump in open data non è verificata. | https://www.arera.it/fileadmin/allegati/docs/25/156-2025-R-com.pdf |
| G3 Pagatore identificabile | sì | [fatto] Supermoney: ricavi dall'intermediazione energia nel 2022 tra 2,5 e 3,5 M€ (forchetta indicata dall'AGCM), su un fatturato totale di 39,65 M€. [fatto] Selectra: "sarà infatti il nostro partner (energia o telco) a riconoscere un compenso a Selectra… per ciascun contratto attivato". [fatto] Eni Plenitude su Awin: "Eni offers commissions for the lead generated", cookie di 30 giorni. Octopus Energy Italia ha un programma su Awin. [fatto] Altroconsumo "Abbassa la bolletta": commissione prefissata per contratto pagata dai fornitori (importo non pubblicato), circa 170.000 contratti nelle edizioni precedenti. **Importo in € per contratto: non trovato** in nessuna fonte pubblica. | https://www.agcm.it/dotcmsdoc/allegati-news/PS12578%20chiusura.pdf · https://selectra.net/partners/faq · https://ui.awin.com/merchant-profile/9529 · https://ui.awin.com/merchant-profile/69316 · https://www.altroconsumo.it/casa-energia/elettricita-e-gas/news/abbassa-la-bolletta-terza-edizione |
| G4 Distribuzione senza pubblico | incerto | [fatto] Per "analisi bolletta luce online" e "offerta luce più conveniente oggi novembre 2026" la SERP è occupata da Facile.it, Segugio, Selectra, Switcho, Altroconsumo e luce-gas.it, con articoli mensili già datati "novembre 2026". L'autocompletamento ha 10 suggerimenti per ogni radice testata ("bolletta luce", "offerte luce e gas", "confronto offerte luce", "analisi bolletta"…) ed è dominato dai brand (Enel, Plenitude, Octopus, Poste) e da "arera / ministero". La long-tail per comune non esiste: le offerte sono nazionali. [stima] La SEO resta possibile su query di nicchia (per fornitore e offerta, "quando scade", "f1 f2 f3", "seconda casa"), ma in un campo presidiato. | file `B/ac_rest.txt`; WebSearch del 2026-11-20 |
| G5 Rischio legale gestibile | sì (con presidio) | [fatto] Il precedente AGCM (Supermoney) impone trasparenza su remunerazione, criteri di ordinamento e claim di risparmio. [fatto] Le recensioni di Switcho lamentano telemarketing dopo l'uso dell'app ("vengo chiamato 40 volte al giorno", 2026-07-03), quindi c'è un rischio GDPR e reputazionale se si passano i lead a call center. [stima] La bolletta caricata è un dato personale (POD, indirizzo, consumi): serve una base giuridica, ma è gestibile. | https://en.agcm.it/en/media/press-releases/2024/2/PS12578 · https://itunes.apple.com/it/rss/customerreviews/id=1553281237/sortby=mostrecent/json |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| Portale Offerte ARERA (pubblico) | https://www.ilportaleofferte.it/portaleOfferte/ | Tutte le offerte per i domestici, con il link all'offerta del venditore | Gratis, istituzionale | Non letto direttamente (403 dal proxy). Compare negli autocompletamenti come "confronto offerte luce arera / ministero" |
| Facile.it | https://www.facile.it/energia.html | Comparatore e servizio "Analizza Bolletta" (caricamento di PDF o foto), articoli mensili sulle offerte | Commissioni dai fornitori | App iOS 4,75★ su 594 voti; [non verificato] multa AGCM da 7 M€ nel 2021 a due società del gruppo, riportata da L'Espresso (https://lespresso.it/c/economia/2024/01/23/quanto-sono-affidabili-i-comparatori-online/49787) |
| Selectra | https://selectra.net/energia/guida/bollette | "Bollettometro", guide, call center | Compenso del fornitore per ogni contratto attivato | — |
| Segugio Tariffe | https://tariffe.segugio.it/ | Comparatore, analisi bolletta, assistenza telefonica | Commissioni | App iOS "Segugio.it" 2,02★ su 44 voti (app assicurazioni) |
| SOStariffe (Gruppo MOL) | https://www.sostariffe.it/ | Comparatore | Commissioni | App iOS 3,96★ su 27 voti |
| Switcho | https://www.switcho.it/l/luce-gas | App di risparmio sulle bollette con caricamento della bolletta e cambio gestito | Commissioni per contratto attivato | iOS 4,77★ su 4.581 voti, ma 10 recensioni da 1★ sulle ultime 50: telemarketing, volture non riuscite, offerta peggiore del Portale Offerte |
| Billoo | https://apps.apple.com/it/app/billoo/id1487132876 | App per le bollette | — | iOS 4,68★ su 8.713 voti |
| Supermoney, Comparasemplice, luce-gas.it | https://www.comparasemplice.it/luce-gas/ | Comparatori | Provvigioni con call center (Supermoney: 500-1.000 operatori) | Precedenti AGCM (PS12578; PS12577 avviato su Comparasemplice, esito non verificato) |
| Altroconsumo "Abbassa la bolletta" | https://www.altroconsumo.it/casa-energia/elettricita-e-gas/news/abbassa-la-bolletta-terza-edizione | Gruppo d'acquisto con asta | Commissione fissa per contratto | Periodico, non continuo |

5. **Domanda (C2)** [stima]
   - **Autocompletamento:**
     - "bolletta luce": più conveniente, Enel, Poste, aumento, Plenitude, f1 f2 f3, seconda casa.
     - "offerte luce e gas": prezzo fisso, prezzo bloccato, Octopus, Enel, Poste.
     - "confronto offerte luce": arera, ministero, mercato libero.
     - "analisi bolletta": luce online, gas, "facile it", acqua.
     - "portale offerte": 10 varianti di "arera", segno che il servizio pubblico è noto.
     - "prezzo kwh": oggi, arera, colonnine.
   - **Lettura:** domanda nazionale altissima e ricorrente, ma senza dimensione geografica (non c'è long-tail per comune).
   - **SERP:** occupata da Facile.it, Segugio, Selectra e Switcho, che pubblicano già pagine datate al mese corrente.
   - **Trends:** non raggiungibile.

6. **Dolore (C1).**
   - [fatto] Recensioni di Switcho: 1★ "mi propone un'offerta… che mi fa risparmiare 230€… peccato che sul sito portaledelleofferte che è gestito dallo stato esist[ono]…" (2026-09-24); 1★ "vengo chiamato 40 volte al giorno dal telemarketing" (2026-07-03); 1★ "Voltura… non andate a buon fine… ricevo 20 chiamate al giorno di spam" (2026-03-04). Fonte: https://itunes.apple.com/it/rss/customerreviews/id=1553281237/sortby=mostrecent/json
   - Il dolore principale è la sfiducia verso comparatori e telemarketing, non la mancanza di strumenti.
   - Reddit: non trovato.
   - Comunicato Facile.it "il 68% ha pagato più di quanto avrebbe dovuto": pagina non leggibile (503), contenuto **non verificato**.

7. **Pagatori (G3/C3).** I fornitori pagano provvigioni per ogni contratto attivato. Le prove sono l'AGCM su Supermoney, le FAQ partner di Selectra, Awin per Plenitude e Octopus, e Altroconsumo. Le cifre per contratto non sono pubbliche: **non trovate** su Awin (i profili pubblici non mostrano i CPA), Selectra o Altroconsumo. L'unico ordine di grandezza verificato è aggregato: Supermoney ha ricavato 2,5-3,5 M€ dall'intermediazione energia nel 2022 (fonte AGCM PS12578).

8. **Test chatbot (C6).**
   - **"offerta luce più conveniente oggi novembre 2026":** la risposta AI di WebSearch cita prezzi aggiornati al 17/11/2026 presi da Facile.it e Selectra, con avvertenze. Il motore AI quindi intermedia già i dati freschi dei comparatori.
   - **"analisi bolletta luce online":** la risposta elenca i servizi gratuiti di Facile.it, Selectra e Segugio.
   - [stima] Un LLM generalista con il PDF caricato spiega già le voci della bolletta. Non sa quali offerte sono valide oggi né fare lo switch.
   - **Resistenza:** media sul confronto (dati freschi e transazione), bassa sulla spiegazione della bolletta.

9. **Motivo più forte per scartarlo.** Il mercato è maturo, con incumbent ricchi che possiedono già la SERP e l'app (Switcho 4,77★), e lo Stato offre gratis un comparatore completo e noto ("portale offerte arera" ha 10 suggerimenti). Il modello di ricavo documentato (Supermoney) passa da centinaia di operatori di call center e telemarketing, che è anche il primo motivo delle recensioni negative. Il precedente AGCM da 1,48 M€ mostra che la trasparenza sul ranking è sorvegliata. Le commissioni per contratto non sono pubbliche, quindi non si può costruire l'unit economics senza trattare direttamente con i fornitori.

10. **Note per lo scoring**
   - **C1 Dolore: 3.** Sfiducia e telemarketing documentati nelle recensioni; gli strumenti esistenti però sono valutati bene.
   - **C2 Domanda: 5** [stima]. Volumi nazionali altissimi, nessuna long-tail per comune.
   - **C3 Monetizzazione: 4.** Pagatori certi (provvigioni), importi non pubblici, quindi non sopra 4.
   - **C4 Vantaggio dei dati: 2.** Fonte unica e pulita (Portale Offerte / Schede sintetiche).
   - **C5 Distribuzione: 1-2.** SERP presidiata da brand.
   - **C6 Resistenza all'AI: 3.**
   - **C7 Difendibilità: 2.**
   - **C8 Debolezza degli incumbent: 2.** Incumbent forti e moderni.
   - **C9 Tempo alla prima evidenza: 3.** Servono accordi di affiliazione per misurare le conversioni.
   - **Penalità:** rischio regolatorio e legale residuo (AGCM).

---

### #19 — Prezzi supermercati / carrello della spesa

1. **Ipotesi e criterio di scarto (pre-registrati).**
   - **Attese:** dolore alto (caro spesa), domanda alta, pagatori: i retailer pagano i volantini (ShopFully).
   - **Lo scarto se** i prezzi online non sono accessibili o i ToS vietano lo scraping e i volantini sono protetti (G2/G5), oppure se gli incumbent (ShopFully, PromoQui) coprono già e monetizzano, e l'affiliazione per la spesa online è inesistente o trascurabile.

2. **Verdetto:** INCERTO (G2/G5). I pagatori ci sono e sono reali: ShopFully fattura 43,8 M€ dai retailer, e Cortilia paga 13,08 € per nuovo cliente. I dati di prezzo dei negozi online sono però dietro protezioni anti-bot (Cloudflare su Carrefour, 406 su Conad). Le condizioni d'uso viste vietano la riproduzione senza autorizzazione, e i prezzi in negozio (la maggioranza) non sono online. Il segmento dei volantini è controllato da ShopFully.

3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Confrontare prezzi e fare affiliazione non richiede albi. | — |
| G2 Dati raggiungibili | incerto | [fatto] Già `robots.txt` è dietro protezioni: carrefour.it risponde con una challenge Cloudflare (HTTP 403 "Just a moment…"), conad.it con HTTP 406, esselunga.it non ha risposto entro 25 s. coopshop.it ed eurospin.it hanno un robots.txt permissivo. [fatto] Altroconsumo nel 2026 ha rilevato 1,5 milioni di prezzi in 1.158 punti vendita di 67 città per la sua indagine, cioè con rilevazione fisica: il prezzo in negozio non è online. [fatto] I dati pubblici (MIMIT, ISTAT) sono medie per prodotto e città, non per insegna. Il sito osservaprezzi.mimit.gov.it non era raggiungibile dal proxy. | `B/` (test con curl del 2026-11-20) · https://www.altroconsumo.it/alimentazione/fare-la-spesa/news/indagine-supermercati-convenienti-2026 · https://www.mimit.gov.it/it/mercato-e-consumatori/prezzi/osservatorio-prezzi-e-tariffe |
| G3 Pagatore identificabile | sì | [fatto] ShopFully S.p.A. (DoveConviene, PromoQui, VolantinoFacile): fatturato di 43,76 M€ e utile di 8,03 M€ nel 2024, 42,50 M€ nel 2023 e 26,59 M€ nel 2020. Il modello: i retailer pagano per mettere in evidenza offerte e volantini (Dealroom, citato da WebSearch); nel 2025 il CEO lo descrive come retail media. [fatto] Cortilia su Awin: 13,08 € a carrello per i nuovi utenti, poi da 1,385 € a 5,23 € a seconda dell'importo del carrello per gli utenti di ritorno, cookie di 30 giorni. Hanno programmi su Awin anche Bennet Drive ed Eurospin Online (commissioni non pubbliche) e CosìComodo (Selex). CPM o listini dei volantini: **non trovati**. | https://www.aziende.it/shopfully-s-p-a · https://topaziende.quotidiano.net/?p=231815 · https://ui.awin.com/merchant-profile/76986 · https://ui.awin.com/merchant-profile/19097 · https://ui.awin.com/merchant-profile/131223 · https://forbes.it/2025/12/19/cosi-shopfully-supporta-retailer-brand-nello-sbloccare-potenziale-del-retail-media |
| G4 Distribuzione senza pubblico | incerto | [fatto] "volantino [insegna]" ha una long-tail per insegna e città ("volantino esselunga torino/genova/parma/firenze/milano", "dove conviene palermo/roma/torino"): è il territorio di ShopFully, che ci ha costruito il brand ("dove conviene volantini"). [fatto] "confronto prezzi supermercati" ha solo 7 suggerimenti ("app", "italia", "sito"), mentre "prezzi supermercati" porta a query sull'estero (Croazia, Corsica, Islanda…), quindi la domanda di confronto del carrello in Italia è piccola. [fatto] "carrello tricolore" porta a "flop". | file `B/ac_rest.txt` |
| G5 Rischio legale gestibile | incerto | [fatto] Le condizioni di Eurospin dicono: "sono espressamente vietati il framing ed ogni altra forma di riproduzione analoga" senza autorizzazione scritta. [stima] Il catalogo online di un'insegna (decine di migliaia di referenze con prezzi) è plausibilmente una banca dati con investimento sostanziale: estrarlo integralmente e di continuo è il caso tipico del diritto *sui generis*. Le immagini dei volantini e dei prodotti sono protette dal diritto d'autore. I singoli prezzi (fatti) sono a basso rischio, l'estrazione sistematica no. Giurisprudenza italiana specifica sui volantini: **non trovata**. | https://www.eurospin.com/it-it/termini-condizioni/ |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| DoveConviene (ShopFully) | https://apps.apple.com/it/app/id446366839 | Volantini digitali per insegna e città | Pagano retailer e brand (retail media) | iOS 4,70★ su 69.812 voti, ultime 50 recensioni con media 4,92: utenti soddisfatti. Mostra i volantini, non il prezzo del carrello. |
| PromoQui, VolantinoFacile (ShopFully, acquisiti nel 2020) | https://startupitalia.eu/130277-20200519-shopfully-acquisisce-promoqui-volantinofacile | Volantini | Come sopra | PromoQui iOS 4,76★ su 18.475 voti |
| Shoppa (ShopFully) | https://apps.apple.com/it/app/id6758212970 | Lista della spesa con offerte | ShopFully | Nuova, 22 voti: l'incumbent si sta già muovendo sul carrello |
| Tiendeo | https://apps.apple.com/it/app/id489822377 | Volantini | Retailer | iOS 4,64★ su 5.080 voti |
| Superbuono, Prisy, SpesaChiara, RicordaPrezzi, Spesiamo… | https://apps.apple.com/it/app/superbuono/id6470840922 | Confronto del carrello, lista della spesa, scontrini | Vari | Da 0 a 22 voti ciascuna: nessuna ha trazione, ultimo aggiornamento di Superbuono 2023-11 |
| Indagine supermercati di Altroconsumo (gratis) | https://www.altroconsumo.it/alimentazione/fare-la-spesa/news/indagine-supermercati-convenienti-2026 | Classifica annuale delle insegne per città (1,5 milioni di prezzi, 67 città) | Gratis, organizzazione di consumatori | Annuale, non per prodotto |
| Osservatorio prezzi e tariffe MIMIT / ISTAT (pubblici) | https://www.mimit.gov.it/it/mercato-e-consumatori/prezzi/osservatorio-prezzi-e-tariffe | Medie di prezzo per prodotto e città | Gratis | Non per insegna; pagina non letta direttamente |
| App delle insegne (Lidl Plus, Esselunga, Conad…) | https://apps.apple.com/it/app/id1238611143 | Coupon, volantino, fedeltà | Retailer | Lidl Plus 4,72★ su 356.849 voti |

5. **Domanda (C2)** [stima]
   - **Autocompletamento:**
     - "volantino ": Lidl, Esselunga, Eurospin, Conad, Coop, "lidl prossima settimana".
     - "volantino esselunga": anteprima, sottocosto e città.
     - "offerte supermercato": Decò, Conad, Lidl, MD, Pim, Penny, Coop, Dok.
     - "spesa online": Esselunga, Conad, Coop, Tosano, Eurospin, Iperal, Lidl, Carrefour, Mercatò.
     - "confronto prezzi supermercati": solo 7 varianti generiche.
   - **Lettura:** la domanda è forte sul volantino per insegna (che appartiene a ShopFully e alle insegne), debole sul confronto del carrello.
   - **Trends:** non raggiungibile.

6. **Dolore (C1).**
   - Il caro spesa è un tema mediatico (indagine Altroconsumo 2026: "risparmi fino a 3.790 euro").
   - Lamentele linkate sugli strumenti esistenti: **non trovate**. Le app di volantini hanno voti molto alti (4,7-4,9) e Reddit non è risultato accessibile né indicizzato.
   - Il segnale "carrello tricolore flop" nell'autocompletamento mostra sfiducia verso l'iniziativa pubblica, non verso le app.

7. **Pagatori (G3/C3).**
   - [fatto] ShopFully: 43,8 M€ di ricavi nel 2024, pagati da retailer e brand.
   - [fatto] Affiliazione per la spesa online: Cortilia paga 13,08 € per nuovo cliente e da 1,39 € a 5,23 € per i riacquisti. Bennet, Eurospin Online e CosìComodo hanno programmi con importi non pubblici.
   - [stima] La spesa online è una quota piccola della spesa alimentare (dato non verificato in questa sessione), quindi l'affiliazione resta marginale. Il retail media è il ricavo vero, ma si vende a retailer che hanno già ShopFully.

8. **Test chatbot (C6).** Per "app confronto prezzi carrello spesa supermercati" la risposta AI ha concluso: "Non ho trovato un'app che confronti i prezzi di tutti i supermercati su un unico paniere". Un LLM non conosce il prezzo di oggi per insegna, quindi la resistenza all'AI è alta se si possiedono dati freschi e storici. Il collo di bottiglia è il dato, non l'AI.

9. **Motivo più forte per scartarlo.** Il dato che renderebbe il prodotto unico, il prezzo per prodotto e insegna nel negozio vicino, non è online per la maggior parte delle insegne e dei punti vendita. Quando è online sta dietro anti-bot e condizioni d'uso restrittive, con un rischio *sui generis* sull'estrazione continua dei cataloghi. La parte raggiungibile (i volantini) è già monetizzata da ShopFully, con voti di 4,7★ e 8 M€ di utile. Le decine di app indipendenti di confronto del carrello non hanno trazione (meno di 25 voti ciascuna).

10. **Note per lo scoring**
   - **C1 Dolore: 2.** Nessuna lamentela linkata sugli strumenti; il tema caro spesa è solo mediatico.
   - **C2 Domanda: 3** [stima]. Alta sui volantini, bassa sul confronto del carrello.
   - **C3 Monetizzazione: 3.** Pagatori reali, ma presidiati; affiliazione marginale.
   - **C4 Vantaggio dei dati: 5 in teoria** (frammentato, storico che si accumula), ma il G2 è incerto.
   - **C5 Distribuzione: 2.** Long-tail dei volantini posseduta da ShopFully.
   - **C6 Resistenza all'AI: 4.**
   - **C7 Difendibilità: 4.** Lo storico dei prezzi non si ricostruisce a posteriori.
   - **C8 Debolezza degli incumbent: 2.**
   - **C9 Tempo alla prima evidenza: 3.**
   - **Penalità:** rischio legale sui dati e dipendenza dall'accesso ai siti delle insegne.

---

#### Nuovi candidati emersi nel gruppo (grezzi)

1. **Promemoria per la scadenza del prezzo fisso luce e gas, con confronto al rinnovo.** Tra le pagine indicizzate ci sono già pagine "Quando scade [offerta]?" (es. https://luce-gas.it/fornitori/eni/plenitude), e l'autocompletamento mostra "prezzo fisso / prezzo bloccato". È un workflow ricorrente e personale (ogni 12-36 mesi), che resiste meglio ai chatbot di una pagina informativa e monetizza con le stesse provvigioni del #20. Eredita però i limiti del #20 (G4, AGCM). Da verificare: la domanda per le query "scadenza offerta [fornitore]".
2. **TARI per comune: tariffe, riduzioni, scadenze delle rate e calcolatore.** Il TITR ARERA obbliga gestori e comuni a pubblicare regole di calcolo della tariffa, riduzioni e scadenze (https://www.arera.it/fileadmin/allegati/docs/19/444-19titr.pdf, art. 3). I dati sono frammentati su circa 7.900 comuni, simili per struttura a H1 ma più vicini al denaro (riduzioni non richieste, scadenze delle rate). Pagatori possibili: CAF, affiliazione, nessuno verificato. Domanda non ancora misurata con l'autocompletamento.

---

**Conteggio strumenti:** 20 WebSearch. Circa 45 fetch: 8 WebFetch (3 falliti con 403/503/host non risolto) e circa 37 download con curl (pagine, PDF, robots.txt, Play, API iTunes). 40 chiamate di autocompletamento. 1 tentativo su Trends (429).


---

## Screening B2C — Gruppo C (animali e outdoor): A1, T1, T2, #26+N13

Data di accesso di tutte le fonti: **2026-11-20** (salvo diversa indicazione). Pagine lette direttamente con `curl` (copie in `scratchpad/C/pages/`), autocompletamento da `suggestqueries.google.com` (risposte grezze in `scratchpad/C/ac/`). Google Trends: **non raggiungibile** (HTTP 429 all'unico tentativo). Reddit JSON: **403** su tutte e tre le query, quindi i segnali di dolore vengono da store, forum e stampa.

Nota di metodo: in questa data (novembre) le query stagionali (spiagge, balneazione) sono fuori stagione. Le risposte AI e le SERP ne risentono, e la cosa va considerata nella lettura del test C6.

---

### A1 — Regole per cani (spiagge, parchi, trasporti, strutture pet-friendly) per comune e struttura

1. **Ipotesi e criterio di scarto (scritta prima delle ricerche).** Mi aspetto: domanda long-tail ampia ("spiaggia per cani [località]"), dolore medio (regole diverse da comune a comune e cambiate ogni anno), dati frammentati in ordinanze comunali in PDF, monetizzazione debole (affiliazione hotel con commissioni basse, sponsor petfood), forte stagionalità estiva, concorrenza di guide gratuite (ENPA, blog) e di Spiagge.it. **Lo scarto se:** (a) esiste già un portale che copre le regole per comune *e* le prenotazioni; (b) l'unico pagatore è l'affiliazione generica a bassa commissione; (c) un chatbot o la risposta AI danno già regole corrette per le query tipiche.
2. **Verdetto:** **PASS (debole)**. I gate passano, ma la monetizzazione è debole, la stagionalità estrema e Spiagge.it presidia già le pagine "spiagge per cani [comune]" con prenotazione.
3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | Editoria informativa e affiliazione: non serve alcuna autorizzazione. ENPA, Dogwelcome e Spiagge.it operano come semplici siti. | https://enpa.org/tutte-le-spiagge-per-cani-in-italia-guida-completa-per-una-felice-giornata-al-mare-con-il-tuo-amico-a-quattro-zampe-edizione-2026/ |
| G2 Dati raggiungibili | sì | [fatto] "In Italia non esiste una normativa nazionale uniforme: l'accesso dei cani al mare è regolato da ordinanze regionali, comunali o della Guardia Costiera" (ENPA). Le ordinanze sono atti pubblici in PDF sui siti dei comuni (es. Rimini, "balneazione cani ordinanza 2026"). Trasporti: le regole Trenitalia sono pubbliche ma sparse su più pagine con indicazioni discordanti (5 €/1 € fisso oppure 50% della tariffa di 2ª classe, secondo la risposta AI che le cita). | https://enpa.org/...edizione-2026/ · https://www.comune.rimini.it/system/files/2026-05/balneazione%20cani%20ordinanza%202026.pdf · https://www.trenitalia.com/it/servizi/trasporto-animali-domestici.html |
| G3 Pagatore identificabile | sì (debole) | [fatto] Il programma di affiliazione di Booking.com paga "una commissione per ogni prenotazione idonea", tramite network di affiliazione (la percentuale non è pubblicata sulla pagina). [fatto] Spiagge.it vende prenotazioni anche per i lidi pet-friendly (50 stabilimenti a Cesenatico nella pagina dedicata). [fatto] Dogwelcome ha un "network di strutture selezionate" (dichiara +4.300 strutture), ma il prezzo per le strutture **non è stato trovato**. Commissioni Amazon per la categoria Animali: **non trovato** (la tabella richiede il login). | https://www.booking.com/affiliate-program/v2/index.it.html · https://www.spiagge.it/stabilimenti-balneari/cesenatico-cani-ammessi-pet-friendly-accesso-animali/ · https://www.dogwelcome.it/partners-and-friends |
| G4 Distribuzione senza pubblico | sì | [stima] Una pagina per località: l'autocompletamento restituisce varianti per località anche in comuni piccoli ("spiaggia per cani alassio / porto recanati / tropea"), più varianti su trasporti e attrazioni ("cani ammessi a gardaland / pompei / ikea / flixbus"). | ac1.txt, ac2.txt (vedi C2) |
| G5 Rischio legale gestibile | sì | [stima] Le ordinanze sono atti pubblici. Il rischio sta nel copiare i database di terzi: Dogwelcome dichiara "Tutti i contenuti del sito, database compreso, NON sono riproducibili". Si gestisce costruendo il dato dalle ordinanze. | https://www.dogwelcome.it/ |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| ENPA, guida spiagge 2026 (pubblica/associativa, gratuita) | https://enpa.org/...edizione-2026/ | Regole regione per regione ("L'ordinanza regionale 2026"), con il rinvio esplicito all'ordinanza del comune | Gratis | Livello regionale; per il dettaglio rimanda al comune |
| Spiagge.it | https://www.spiagge.it/stabilimenti-balneari/cesenatico-cani-ammessi-pet-friendly-accesso-animali/ | Pagine "spiagge per cani [comune]" con prenotazione dei lidi pet-friendly | Commissione sulle prenotazioni (percentuale non trovata) | Copre solo gli stabilimenti, non le spiagge libere né le regole comunali |
| Dogwelcome | https://www.dogwelcome.it/ | "+4300 hotel e altre strutture pet friendly, spiagge cani ammessi, … norme, trasporti" | Network di strutture (prezzo non trovato) | Sito editoriale vecchio stile; database protetto |
| BeachAtlas | https://www.beachatlas.com/it/spiagge-amiche-dei-cani-italia | Elenchi di spiagge dog-friendly per regione | Gratis/pubblicità [stima] | Testo generico ("Lido di Jesolo… San Giovanni di Sinis…"), nessuna regola oraria |
| Comuni e Regioni (pubblici, gratuiti) | es. https://www.comune.rimini.it/system/files/2026-05/balneazione%20cani%20ordinanza%202026.pdf · https://visitcesenatico.it/?p=1325 | Fonte primaria: ordinanze e pagine turistiche | Gratis | PDF, uno per comune, aggiornati ogni anno |
| Trenitalia / Italo (trasporti) | https://www.trenitalia.com/it/servizi/trasporto-animali-domestici.html | Regole ufficiali per i treni | Gratis | Pagine multiple e incoerenti (vedi C6); però è una sola fonte nazionale, facile per un LLM |
| Booking.com (filtro animali) | https://www.booking.com/affiliate-program/v2/index.it.html | Strutture che accettano animali | Commissione | [stima] Il filtro dice solo "animali ammessi", senza dettagli (taglia, supplemento) |
| DogPack (app) | https://apps.apple.com/it/app/id1586080273 | Community e "posti per cani" | Gratis; 4,74/5 su 247 voti (App Store IT) | Focalizzata sulla community, poca copertura italiana [stima] |

5. **Domanda (C2) [stima]**
   - Autocompletamento "spiaggia per cani ": vicino a me, liguria, sottomarina, jesolo, lago di garda, roma, rimini, recensioni, senigallia, sestri levante. "spiagge per cani ": liguria, sardegna, toscana, sardegna mappa, isola d'elba…
   - Long-tail per località piccole: "spiaggia per cani alassio" (4 varianti), "porto recanati" (4), "tropea" (1): la coda c'è, ma si assottiglia in fretta.
   - "cani in spiaggia ": orari, liguria, sardegna, "senigallia 2026", "cesenatico 2026", "emilia romagna 2026". Le query con l'anno indicano un bisogno di freschezza.
   - "cani ammessi ": crociera, aereo, spiaggia, flixbus, venezia, cinema, mirabilandia, pompei, ikea, gardaland: c'è domanda su attrazioni e trasporti, meno stagionale.
   - "cane in treno ": trenitalia, regionale, italo, paga, senza trasportino, intercity, frecciarossa, biglietto. "cane metro milano", "cane in autobus bologna/roma/bari": coda sui trasporti locali.
   - "accesso spiaggia cani ": recensioni, foto, dormelletto, jesolo, senigallia, rimini, cesenatico, ravenna. **Le varianti "recensioni/foto" indicano schede di Google Maps** (luoghi), cioè una domanda già servita da Maps.
   - SERP "cani in spiaggia Cesenatico 2026" (WebSearch): Spiagge.it (4 risultati), Comune di Rimini (ordinanza 2026), visitcesenatico.it, Resto del Carlino, Fanpage. La risposta AI ha trovato l'ordinanza 2025, non quella 2026.
   - Trends: non raggiungibile.
6. **Dolore (C1)**
   - [fatto] Regole incoerenti tra comuni ("le regole possono cambiare sensibilmente da Comune a Comune e anche tra un lido e l'altro"; a Misano bagno consentito ma battigia vietata): https://www.fanpage.it/kodami/cane-senza-guinzaglio-in-spiaggia-scatta-la-rissa-tra-i-bagnanti-a-riccione-quali-sono-le-regole-per-gli-animali-al-mare/ · https://www.ilrestodelcarlino.it/rimini/cronaca/misano-bagni-in-mare-per-i-cani-ma-niente-passeggiate-sulla-battigia-a4f04324
   - [fatto, da estratto WebSearch] Sanzioni "da circa 100 a 1.000 euro" secondo Ecoseven: https://www.ecoseven.net/?p=320716
   - Conflitti tra bagnanti (balneari della Versilia "esasperati"): https://www.lanazione.it/viareggio/cronaca/cane-morde-un-bambino-in-mare-i-balneari-ora-sono-esasperati-orari-da-limitare-serve-ordinanza-c0710933
   - Lamentele di utenti su forum o Reddit: **non trovato** (Reddit 403; la WebSearch ha restituito solo stampa). Il dolore è documentato dai media, non da recensioni di prodotti.
7. **Pagatori (G3/C3)**
   - Booking.com Affiliate: commissione per prenotazione via network, percentuale **non pubblicata** sulla pagina: https://www.booking.com/affiliate-program/v2/index.it.html
   - Spiagge.it: 1,2 milioni di prenotazioni e 76 milioni di euro nel 2026, prezzo medio 39,1 €/giorno (il dato riguarda tutto il portale, non solo i lidi per cani): https://www.spiagge.it/magazine/report-spiagge-dati-turismo-balneare-italia-2026/
   - Dogwelcome: le strutture entrano in un "network", ma il listino **non è stato trovato**.
   - Amazon Associates per la categoria Animali: **non trovato** (pagina dietro login).
8. **Test chatbot (C6)**
   - "cane in treno regionale trenitalia regole biglietto": la risposta AI è completa (trasportino 70x30x50 gratis, documenti, museruola), ma segnala da sola due regole di prezzo in conflitto (fisso 5 €/1 € oppure −50%). Un LLM copre i trasporti nazionali quasi del tutto.
   - "cani in spiaggia Cesenatico 2026": la risposta AI non trova l'ordinanza 2026 e usa quella 2025 (orari 6-8:30 e 19-22). C'è uno spazio sul dato fresco per comune, ma solo nella stagione.
   - Conclusione [stima]: resistenza media sulle spiagge (dato annuale per comune), bassa sui trasporti nazionali.
9. **Motivo più forte per scartarlo:** il pezzo monetizzabile (prenotare il lido pet-friendly) è già di Spiagge.it, con pagine per comune. Resta la parte informativa (regole delle spiagge libere), stagionale per 3-4 mesi e pagata solo con affiliazione generica, senza cifre pubbliche.
10. **Note per lo scoring**
    - C1 2: dolore documentato dalla stampa, nessuna recensione di prodotto.
    - C2 3: long-tail reale su località e attrazioni; volumi ignoti.
    - C3 2: solo affiliazione, senza cifre.
    - C4 4: ordinanze in PDF per comune, da rifare ogni anno.
    - C5 3: SEO programmatica plausibile, ma Spiagge.it e Maps già presenti.
    - C6 3: il dato fresco per comune regge; i trasporti no.
    - C7 2: lo storico delle ordinanze ha poco valore.
    - C8 3: Dogwelcome ed ENPA sono deboli sul prodotto, Spiagge.it è forte.
    - C9 4: 50 pagine di comuni costieri in 2 settimane, ma un test valido si può fare solo tra maggio e agosto.
    - Penalità: stagionalità estrema per la parte spiagge (−5 o più); la parte trasporti e attrazioni attenua.

---

### T1 — Rifugi e sentieri: aperture, prenotazioni, condizioni

1. **Ipotesi e criterio di scarto (prima delle ricerche).** Mi aspetto: domanda forte e long-tail per nome di rifugio; dolore alto sulla prenotazione (telefono ed email, nessuna disponibilità online); dati sparsi tra siti dei rifugi, CAI, APT e regioni; concorrenti forti sulle tracce (Komoot, Wikiloc, AllTrails), deboli su aperture e posti. **Lo scarto se:** (a) il portale di prenotazione del CAI copre già la maggior parte dei rifugi con la disponibilità in tempo reale; (b) i gestori sono ostili alle piattaforme e non pagano; (c) le app outdoor danno già aperture e condizioni aggiornate.
2. **Verdetto:** **PASS**. I gate passano. Il rischio principale è che il CAI abbia già un portale istituzionale di prenotazione a basso costo e che i gestori siano poco disposti a pagare.
3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | Il portale CAI si definisce "intermediario tecnico" tra utenti e gestori, senza essere parte del contratto. Un'intermediazione di prenotazioni non richiede licenze (come Anolla e Booking) [stima]. | https://www.prenotarifugi.cai.it/en/?p=7118 · https://prenotarifugi.cai.it/en/how-it-works/ |
| G2 Dati raggiungibili | sì (parziale) | [fatto] La SAT pubblica i "Sentieri chiusi" e gli aggiornamenti (es. "Aggiornamento sentieristica al 7/11"). [fatto] Le APT pubblicano le liste dei rifugi aperti in autunno e in inverno (Visit Trentino, Fassa, Alta Badia), con date di apertura per rifugio. [fatto] PrenotaRifugi CAI mostra la disponibilità. [stima] Le condizioni reali (neve, frane) restano frammentate e in parte solo sui social dei rifugi. | https://www.sat.tn.it/sentieri/ · https://www.visittrentino.info/it/dove-dormire/rifugi-aperti-in-autunno · https://www.fassa.com/it/cosa-fare/mangiare-e-bere/rifugi-aperti-in-autunno · https://www.altabadia.org/it/vacanze-dolomiti/mangiare-e-bere/rifugi-inverno.html |
| G3 Pagatore identificabile | sì | [fatto] Portale CAI: gratis il primo anno per i rifugi CAI, 50 € per le altre strutture, "dal 2025 il costo annuale ammonterà per tutti a 130 euro". [fatto] Nessuna commissione per l'utente ("No commission is charged to the user"). [fatto] Abbonamenti App Store IT: Komoot Premium 59,99 €, AllTrails Plus 29,99 € (Peak 65,99 €), Outdooractive Pro 29,99 € / Pro+ 59,99 €, Wikiloc Premium 19,99 €/anno. | https://www.montagna.tv/?p=235148 · https://prenotarifugi.cai.it/en/how-it-works/ · https://apps.apple.com/it/app/id447374873 · https://apps.apple.com/it/app/id405075943 · https://apps.apple.com/it/app/id1364846172 · https://apps.apple.com/it/app/id432102730 |
| G4 Distribuzione senza pubblico | sì | [stima] Ogni rifugio è una query: l'autocompletamento "rifugio " propone nomi propri (nuvolau, auronzo, lagazuoi…), "prenotazione rifugio " anche (auronzo, gnifetti, brentei, tuckett…), e "rifugio brentei apertura 2026" esiste. Centinaia di pagine generabili (il CAI ha ~310 rifugi custoditi, più i privati). | ac1.txt, ac2.txt · https://www.cai.it/wp-content/uploads/2024/06/2-CapitolatoTecnico.PiattaformaPrenotazioneRifugiCAI_signed.pdf (da estratto WebSearch) |
| G5 Rischio legale gestibile | sì | [stima] Date di apertura, contatti e stato dei sentieri sono fatti, pubblicati da enti e rifugi; pochi dati personali (nome del gestore). Le tracce GPX di Komoot e Wikiloc sono contenuti degli utenti da non copiare. | — |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| PrenotaRifugi CAI (istituzionale) | https://prenotarifugi.cai.it/ | Prenotazione dei rifugi CAI, dei privati e dei punti tappa del Sentiero Italia; disponibilità e caparre | Gestori 130 €/anno; utenti 0 € | [fatto] Malfunzionamenti al lancio, gestori contrari ("lavoro in più", "internet non funziona"): https://cuneodice.it/varie/alba-e-langhe/le-perplessita-sulla-nuova-piattaforma-del-cai-tra-ritardi-e-connessioni-internet-che-non-funzionano_87882.html (18/05/2024) |
| Hut-Reservation.org | https://www.hut-reservation.org/ | Prenotazione dei rifugi dei club alpini DACH (e di alcuni in Italia [stima]) | Non trovato | SPA non leggibile via curl; copertura italiana non verificata |
| Komoot | https://apps.apple.com/it/app/id447374873 | Tracce, navigazione | Premium 59,99 €, World Pack 29,99 €; Play 4,5★ su 444K recensioni, 10 Mln+ download | Niente aperture e posti dei rifugi |
| AllTrails | https://play.google.com/store/apps/details?id=com.alltrails.alltrails&hl=it | Sentieri, recensioni, "condizioni" | Plus 29,99 €/anno; Play 4,4★ su 389K, 50 Mln+ | Copertura italiana delle condizioni non verificata |
| Wikiloc | https://apps.apple.com/it/app/id432102730 | Tracce degli utenti | Premium 19,99 €/anno o 9,99 €/trimestre; Play 4,7★ su 162K | Lamentela sulla disdetta poco chiara (recensione Play) |
| Outdooractive | https://apps.apple.com/it/app/id1364846172 | Tracce, contenuti delle APT, "Sentres" | Pro 29,99 €, Pro+ 59,99 €; Play 4,5★ su 78,3K | Recensione Play: traccia persa, "non rinnoverò l'abbonamento" |
| APT e portali regionali (pubblici, gratuiti) | Visit Trentino, fassa.com, altabadia.org, SAT | Liste delle aperture stagionali e sentieri chiusi | Gratis | Una per valle; nessuna vista nazionale |
| App "Rifugi di Lombardia" | https://apps.apple.com/it/app/id670962280 | Rifugi lombardi | Gratis; **2,26/5 su 50 voti** (App Store IT) | Valutazione bassa |
| PeakVisor | App Store id 1187259191 | Vette, escursioni | 4,59/5 su 15.705 voti | Non riguarda i rifugi |

5. **Domanda (C2) [stima]**
   - "rifugio ": solo nomi propri (friedrich august, nuvolau, auronzo, santner, coldai, lagazuoi, carducci, mezzalama, fanes): domanda navigazionale per nome, molto ampia.
   - "rifugio aperto ": vicino a me, ottobre, inverno, novembre, capodanno, inverno piemonte, tutto l'anno, inverno dolomiti, **domani**. "rifugi aperti ": ottobre, ottobre veneto, trentino, dolomiti, cadore, alto adige, val di fassa, fvg. È il bisogno "aperture" fresco e stagionale.
   - "prenotazione rifugio ": auronzo, gnifetti, zilioli, brentei, "auronzo parcheggio", franchetti, gouter, tuckett, cai, martina. "rifugio brentei apertura 2026" ha suggerimenti con l'anno.
   - "sentiero chiuso " / "sentieri chiusi ": pelmo, per frana, 5 terre, ponale, val di fassa, cervinia, pnalm, cogne, trentino, majella. "condizioni sentiero ": **nessun suggerimento**.
   - SERP "rifugi aperti novembre 2026 Dolomiti": blog (volpidelvajolet.it, iltrentinodeibambini.it), APT (visittrentino, fassa, altabadia), montagna.tv. Nessun aggregatore dominante.
   - Trends: non raggiungibile.
6. **Dolore (C1)**
   - [fatto] Gestori contrari al portale CAI: "per noi no a meno che non ci sia del personale dedicato"; problemi di connessione in quota (cuneodice.it, 18/05/2024, link sopra).
   - [fatto] Lato escursionisti: "Oggi ci vuole il booking. La carta di credito. La stramaledetta app"; caparre non restituite: https://www.montagna.tv/263672/la-felicita-non-si-puo-prenotare/
   - [fatto] Telefono del rifugio Antermoia muto per due settimane (titolo l'Adige): https://www.ladige.it/territori/fiemme-fassa/al-rifugio-antermoia-il-telefono-resta-muto-cfhy6d88
   - [fatto] Forum Gulliver, "Capanna Gnifetti VERGOGNA il pernotto non è più previsto" (titolo letto dalla SERP, pagina non aperta): https://www.gulliver.it/?p=837351
   - [fatto] App "Rifugi di Lombardia" 2,26/5 su 50 voti.
   - Reddit: non trovato (403).
7. **Pagatori (G3/C3)**
   - Gestori: 130 €/anno per il portale CAI, il riferimento di prezzo è basso.
   - Utenti: abbonamenti da 19,99 a 65,99 €/anno (cifre sopra). [stima] Per un entrante il pagatore realistico è l'utente premium (alert sulle aperture o sui posti liberi), non il gestore.
   - Commissione sulle prenotazioni: il CAI non la applica all'utente. Commissioni di Hut-Reservation: non trovate.
8. **Test chatbot (C6)**
   - "rifugi aperti novembre 2026 Dolomiti weekend": la risposta AI ammette che "molte date trovate non sono confermate per il 2026" e rimanda al contatto diretto con la struttura.
   - "rifugio prenotazione non rispondono": la risposta consiglia email o telefono e cita il portale CAI.
   - [stima] Resistenza alta: aperture, posti liberi e chiusure dei sentieri sono dati freschi e da alert.
9. **Motivo più forte per scartarlo:** la transazione (prenotazione) è presidiata da un'istituzione (CAI) con un prezzo simbolico di 130 €/anno e da gestori che non vogliono altri strumenti. Le app globali (10-50 Mln+ download) possono aggiungere le aperture quando vogliono. Il valore resta in un "monitor aperture e disponibilità", monetizzabile solo con premium B2C, con una disponibilità a pagare ancora da dimostrare.
10. **Note per lo scoring**
    - C1 3: dolore documentato da gestori, stampa e un'app a 2,26★.
    - C2 4: long-tail per nome di rifugio, ampia; volumi non misurati.
    - C3 2: abbonamenti esistenti ma dominati dalle app globali; gestori a 130 €.
    - C4 4: APT, rifugi, SAT e social, da unire di continuo.
    - C5 4: una pagina per rifugio, con un vuoto di aggregatori in SERP.
    - C6 4: aperture e posti freschi.
    - C7 3: storico di aperture e disponibilità.
    - C8 3: CAI debole sul prodotto, app globali forti.
    - C9 3: test d'autunno (rifugi aperti in inverno) possibile, ma il picco è giugno-settembre.
    - Penalità: stagionalità moderata (−3), dipendenza da fonti social (−1).

---

### T2 — Spiagge: qualità delle acque (ARPA/Portale Acque), servizi, accessibilità

1. **Ipotesi e criterio di scarto (prima delle ricerche).** Mi aspetto: dati pubblici puliti (Portale Acque, ARPA, EEA), quindi un vantaggio dei dati basso; Spiagge.it forte su servizi e prenotazioni; stagionalità estrema; picchi di domanda sui divieti temporanei. **Lo scarto se:** (a) la qualità delle acque è una fonte unica e pulita replicabile in un giorno; (b) Spiagge.it presidia già le SERP per località con la prenotazione; (c) la long-tail "balneabilità [località]" è sottile.
2. **Verdetto:** **INCERTO (G4)**. La distribuzione è incerta: la long-tail sulla balneabilità si spegne sulle località piccole e la SERP per località è di Spiagge.it e della stampa locale. Il resto passa, ma con un forte rischio di FAIL allo scoring per stagionalità e incumbent.
3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | Informazione e prenotazione di servizi balneari: Spiagge.it opera come normale Srl. | https://www.spiagge.it/ |
| G2 Dati raggiungibili | sì | [fatto] Il Ministero della Salute pubblica il "Portale Acque", sezione "Balneazione" con "Ordinanze sindacali". [fatto, da estratto] Le ARPA pubblicano i risultati, ARPAE ha una sezione open data (dati.arpae.it, non raggiungibile da qui: timeout). [stima] Fonte quasi unica e pulita, quindi C4 basso. | https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/home · https://www.arpae.it/it/temi-ambientali/balneazione/rapporti-balneazione/qualita-delle-acque-di-balneazione_2025.pdf/@@display-file/file/QUALITÀ%20DELLE%20ACQUE%20DI%20BALNEAZIONE_2025.pdf |
| G3 Pagatore identificabile | sì | [fatto] Spiagge.it: 2.627 stabilimenti con Spiagge.it PRO, 2.240 con prenotazioni online, 76 milioni di euro di prenotazioni nel 2026 (1,2 milioni di prenotazioni); 7.352 imprese balneari in Italia (Unioncamere, 30/06/2025). La percentuale di commissione **non è stata trovata** nella FAQ. | https://www.spiagge.it/magazine/report-spiagge-dati-turismo-balneare-italia-2026/ · https://www.spiagge.it/faq/ |
| G4 Distribuzione senza pubblico | incerto | [fatto] "balneabilità " restituisce località grandi (sanremo, lago maggiore, monate, como, paestum, genova, garda, pescara); "balneabilità lerici" e "balneabilità marina di camerota": **nessun suggerimento**. "divieto di balneazione ": sanremo, isola capo rizzuto, livorno, "marche oggi", mondello, imperia… La SERP per Sanremo è fatta di stampa locale, ARPAL e Spiagge.it. | ac1.txt, ac2.txt; WebSearch "balneabilità Sanremo oggi" |
| G5 Rischio legale gestibile | sì | Dati pubblici di enti; nessun dato personale. Spiagge.it non va copiato (servizi e prezzi sono il suo database). | — |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| Portale Acque, Ministero della Salute (pubblico) | https://www.portaleacque.salute.gov.it/PortaleAcquePubblico/home | Balneazione, campionamenti, ordinanze sindacali | Gratis | Interfaccia datata (frameset/JS); niente alert [stima] |
| ARPA regionali (pubbliche) | es. ARPAE (link sopra); app "ARPAV Ambiente" 3/5 su 1 voto | Esiti dei campionamenti, report annuali | Gratis | Frammentate per regione |
| Spiagge.it | https://www.spiagge.it/ | "Confronta fra più di 2400 stabilimenti", prenotazione, gestionale PRO, pagine per località e "cani ammessi" | Commissione sulle prenotazioni e software per gestori (cifre non trovate); app 4,61/5 su 346 voti | Non riguarda la qualità delle acque [stima] |
| PuntoMare | App Store id 6447968768 | "Trova la spiaggia con il mare migliore oggi": vento, onde, meteo | Gratis; 4,78/5 su 628 voti | Condizioni meteo, non qualità sanitaria |
| Aura Beach Advisor | App Store id 6768235580 | Sardegna e Canarie, punteggio giornaliero | Gratis; 4,67/5 su 219 | Copertura regionale |
| Goletta Verde / Legambiente | https://www.legambiente.it/goletta-verde/ (404 al momento della lettura) | Campagna estiva di campionamenti | Gratis | Campagna una volta l'anno |
| Stampa locale | mondobalneare.com, ilrestodelcarlino.it, lanazione.it | Notizie sui divieti temporanei | Pubblicità | Non strutturata |

5. **Domanda (C2) [stima]**
   - "qualità acqua mare ": italia, rimini, genova, torvaianica, cesenatico, toscana, sicilia, viareggio, ostia, jesolo.
   - "balneabilità ": sanremo, lago maggiore/monate/como/lugano/pusiano/garda, paestum, genova, pescara. Sono molti laghi, quindi c'è una nicchia "laghi".
   - "divieto di balneazione ": "marche oggi", "sanremo oggi": intento fresco.
   - "spiaggia accessibile disabili ": sardegna, rimini, toscana, sicilia (5 varianti).
   - Località piccole: zero suggerimenti (lerici, marina di camerota).
   - Trends: non raggiungibile.
6. **Dolore (C1)**
   - [fatto, titoli letti dalla SERP] Sanremo: "nuovo divieto di balneazione: è il secondo in poche ore, estate nera per il mare"; "mesi di divieti tra fognature…": https://www.mondobalneare.com/sanremo-estate-ad-alto-rischio-per-la-balneazione/ · https://socialbeat.io/en/matrix/monitoring/5f9d8247-5db6-4c14-8670-1b84574d22d5/sanremo-nuovo-divieto-di-balneazione-e-il-secondo-in-poche-ore-estate-nera-per-i/
   - Lamentele di utenti sugli strumenti (Portale Acque, app ARPA): **non trovato**.
7. **Pagatori (G3/C3)**
   - Stabilimenti: già clienti di Spiagge.it (2.627 PRO su 7.352 imprese), percentuale non trovata.
   - [fatto, da estratto WebSearch, non verificato] Rivabooking applica una "commissione di servizio del 10%".
   - Per la sola qualità delle acque non è stato trovato nessun pagatore: è un bene pubblico gratuito.
8. **Test chatbot (C6)**
   - "balneabilità Sanremo oggi divieto di balneazione": la risposta AI "non può confermare lo stato di oggi", cita notizie senza data e rimanda ad ARPAL. Il dato fresco e l'alert sono un vero spazio (in stagione).
   - [stima] La parte servizi e accessibilità invece un LLM la sintetizza bene da Spiagge.it e dai siti turistici.
9. **Motivo più forte per scartarlo:** il dato chiave (qualità delle acque) è pubblico, unico e gratuito, quindi non dà vantaggio. Il dato monetizzabile (servizi e prenotazioni) è di Spiagge.it, già leader con gestionale e 76 milioni di euro di transato. L'utilità si concentra in circa 4 mesi l'anno.
10. **Note per lo scoring**
    - C1 2: dolore solo nei media locali.
    - C2 3: query su località grandi e laghi; coda sottile.
    - C3 2: nessun pagatore per la qualità delle acque.
    - C4 2: fonte quasi unica e pulita.
    - C5 2: SERP presidiata.
    - C6 4: l'alert sui divieti temporanei regge.
    - C7 2.
    - C8 2: Spiagge.it forte e moderno.
    - C9 2: test possibile solo da giugno.
    - Penalità: stagionalità estrema (−7/−8).

---

### #26 + N13 — Aree di sosta camper (B2C) e software/visibilità per i gestori

1. **Ipotesi e criterio di scarto (prima delle ricerche).** Mi aspetto: B2C dominato da park4night e Campercontact grazie ai contributi degli utenti; dati protetti dalle CGU e dal diritto *sui generis*; doppio pagatore (utenti 10-20 €/anno, gestori fino a 3.000 €/anno); il lato gestori (N13) più interessante. **Lo scarto se:** (a) B2C: il dato chiave si ottiene solo copiando i database degli incumbent; (b) B2B: gli incumbent offrono già ai gestori gratis il software di prenotazione, quindi un SaaS nuovo compete con lo "zero"; (c) i gestori pagano solo per l'audience, che un entrante non ha.
2. **Verdetto:** **FAIL (G5) per il B2C** (aggregatore costruito sui dati dei concorrenti) · **INCERTO (G4) per N13** (SaaS e visibilità per i gestori): pagatori veri, ma Campercontact regala il motore di prenotazione e il gestore paga per l'audience.
3. **Gate**

| Gate | Esito | Evidenza | Fonte URL |
|---|---|---|---|
| G1 Nessuna licenza | sì | park4night è edito da AppMobilEdition (FR), Campercontact B.V. (NL): semplici editori. Gli incassi per conto dei gestori passano dai PSP [stima]. | https://park4night.com/en/cgu · https://itunes.apple.com/lookup?id=633972355&country=it |
| G2 Dati raggiungibili | B2C: incerto · N13: sì | [fatto] CamperOnLine elenca le aree per regione: la somma delle 20 regioni fa **6.963 aree** (es. Toscana 704, Emilia-Romagna 669, Piemonte 637). [fatto] Campercontact dichiara "oltre 90.000 aree di sosta". Per il B2C il dato chiave (stato, prezzi, recensioni) è dei contributi degli utenti. Per N13 il dato lo fornisce il gestore. | https://www.camperonline.it/aree-sosta-camper.asp?nazione=Italia · https://www.campercontact.com/it/content/pro |
| G3 Pagatore identificabile | sì | **Listini riverificati.** park4night per gli host: Gratuito 0 €, Bronze 100 €, Silver 250 €, Gold 500 €, Platinum 3.000 €/anno + IVA; utenti 9,99 €/anno (App Store: 9,99 €/anno, 1,99 €/mese). Campercontact host: listing 0 €, "+ Bookings: 15% commission per booking, no cure no pay", pacchetto visibilità "from € 299 per year"; utenti PRO+ 4,99 €/mese o 19,99 €/anno sul sito (17,99 €/anno su App Store); "Camperisti Premium" 29,90 €/anno con PRO+ incluso. Caramaps: Premium utenti 24,99 €/anno; Pro gestori "Formule Découverte" 99 € HT/anno. | https://park4night.com/it/premium · https://park4night.com/it/subscription · https://apps.apple.com/it/app/id430946556 · https://business.campercontact.com/ · https://www.campercontact.com/it/content/pro · https://apps.apple.com/it/app/id633972355 · https://caramaps.com/ · https://caramaps.com/pro |
| G4 Distribuzione senza pubblico | B2C: no/incerto · N13: incerto | [fatto] SERP "area sosta camper Pienza": Campercontact (4 schede, anche in **versione .md** pensata per gli LLM), CamperOnLine, park4night (2), promobil.de, vansite.eu. Nessuno spazio evidente. [stima] N13: i gestori sono elencabili (6.963 aree; comuni e privati con contatti pubblici), quindi l'outbound è possibile, ma serve un argomento migliore del "gratis + audience" di Campercontact. | WebSearch "area sosta camper Pienza prezzo servizi aperta" · https://www.campercontact.com/it/italia/toscana/pienza/4443/area-comunale.md |
| G5 Rischio legale gestibile | B2C: **no** · N13: sì | [fatto] Le CGU di park4night autorizzano solo la consultazione su schermo e la copia in cache; i database sono "protégées" dalla legge francese di recepimento della direttiva 96/9/CE; anche i link al sito richiedono un'autorizzazione. [fatto] I Terms di Campercontact: "Users may not … copy, download, share … publish … create derivative works from the content". Un aggregatore B2C che riusa questi dati corrisponde allo schema Innoweb (C-202/12, vedi 03-screening-mercato). N13 usa i dati del gestore: ok. | https://park4night.com/en/cgu · https://www.campercontact.com/en/content/terms-and-conditions |

4. **Concorrenza**

| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| park4night | https://park4night.com | Luoghi crowdsourced in Europa | Utenti 9,99 €/anno; host 100-3.000 €/anno + IVA; Play 4,7★ su 52,6K recensioni, 10 Mln+ download; App Store IT 4,69 su 1.462 voti | Recensioni IT recenti: "Pubblicità invasiva" (2/4/2026), "Spariti i preferiti" (24/2/2026), "Avvio lentissimo e spesso in crash" (10/5/2026) |
| Campercontact | https://www.campercontact.com | Oltre 90.000 aree, prenotazioni, Host portal gratis | Utenti 19,99 €/anno; host 15% di commissione, visibilità da 299 €/anno; App Store IT 4,66 su 1.570 voti | Recensioni IT: "Non aggiornata… tantissime soste camper chiuse" (Sardegna, 17/5/2026); "90% delle informazioni… NON corrispondono alla realtà" (18/7/2025) |
| Caramaps | https://caramaps.com | Francia ed Europa | Premium 24,99 €/anno; Pro 99 € HT/anno | Focalizzato sulla Francia |
| CamperOnLine | https://www.camperonline.it | 6.963 aree in Italia, forum | Gratis (ricavi da pubblicità ed editoria [stima]) | Forum: dati aggiornati "nei limiti di quanto fisicamente possibile" (fonte precedente) |
| Turismo Itinerante | https://www.turismoitinerante.com/ | Magazine e aree di sosta | Editoria | Non verificato oltre la home |
| Software per gestori: Anolla, CampManager, Campground Master (Capterra) | https://anolla.com/it/software-per-campeggi · https://www.capterra.it/directory/31059/campground-management/software | Prenotazioni e piazzole; Anolla ha un'app per il gestore | Listini **non trovati** (Anolla: "0€" di ingresso, prezzi del software non leggibili) | Generici per campeggi, non per piccole aree comunali con parchimetro [stima] |
| Comuni (aree pubbliche con parchimetro) | es. Pienza, Area Comunale (scheda CC) | Sosta 8-22 a pagamento | Tariffa oraria | Area 2,43/5 su 21 recensioni su CC: "multa volentieri", "Already full at 3 pm" |

5. **Domanda (C2) [stima]**
   - "aree sosta camper ": gratuite, gratuite vicino a me, toscana direttamente sul mare, gratuite in italia, sardegna (gratis), toscana gratis, lago di garda, marche sul mare. "Gratis" è l'intento dominante, cioè un pubblico a bassa disponibilità a pagare.
   - "area sosta camper ": foto, vicino a me, cesenatico, peschiera, parma, predazzo, sanremo, policoro, moena, asiago. Località piccole: "bobbio" (6 varianti, con "recensioni", "foto" e "prezzi": schede Maps), "pienza" (5), "castelluccio" (2).
   - Marchi: "park4night " (app, apk, per pc, italiano, recensioni, app gratis); "campercontact " (pro, app gratis, "campercontact vs park4night").
   - "software gestione area sosta camper": **nessun suggerimento**, quindi la domanda di ricerca per N13 è nulla e il canale è solo l'outbound.
   - Mercato: parco circolante "oltre 220mila" camper, immatricolazioni 2025 7.936 (+10,56%), da 03-screening-consumer (non riverificato qui).
6. **Dolore (C1)**
   - [fatto] Recensioni App Store IT (RSS, 50 più recenti): park4night 6 su 50 con 1-2★ (crash, pubblicità, preferiti persi); Campercontact molte recensioni da 1★ sull'affidabilità dei dati e sul login (citazioni sopra). https://itunes.apple.com/it/rss/customerreviews/id=430946556/sortby=mostrecent/json · https://itunes.apple.com/it/rss/customerreviews/id=633972355/sortby=mostrecent/json
   - Lato gestori: lamentele **non trovate** (il thread CamperOnLine "Gestione area sosta" riguarda chi vuole aprire un'area, non software).
7. **Pagatori (G3/C3)**: vedi la tabella G3. In sintesi: utenti 9,99-29,90 €/anno; gestori 99 € (Caramaps), 100-3.000 € (park4night), da 299 €/anno o 15% (Campercontact). Software gestionale: listini non trovati.
8. **Test chatbot (C6)**
   - "area sosta camper Pienza prezzo servizi aperta": la risposta AI è dettagliata e attinge direttamente alle schede Campercontact (anche .md), CamperOnLine e park4night (orari 8-22, voto 2,29/5, 34 € in agriturismo). Gli incumbent nutrono già l'AI.
   - [stima] Un nuovo sito B2C senza dati propri sarebbe meno completo della risposta AI. Resiste solo il dato in tempo reale (posti liberi), che però hanno gli incumbent e i gestori.
9. **Motivo più forte per scartarlo:** B2C: il dato è degli incumbent (CGU restrittive, *sui generis*) e alimenta già le risposte AI. N13: Campercontact offre ai gestori un listing gratis, un Host portal gratis e un sistema di prenotazione gratis ("use ours for free"), e guadagna solo il 15% sul prenotato. Il gestore paga per l'audience di 2 milioni di camperisti dichiarati, non per il software.
10. **Note per lo scoring (N13; il B2C non va a scoring)**
    - C1 2: nessun dolore dei gestori trovato.
    - C2 1: zero query sul software.
    - C3 3: i gestori pagano 99-3.000 €, ma per la visibilità.
    - C4 2: i dati li fornisce il gestore, nessun vantaggio dallo scraping.
    - C5 3: outbound su ~7.000 aree elencabili.
    - C6 4: un workflow non è sostituibile da un chatbot.
    - C7 3: costi di uscita del gestionale.
    - C8 2: Campercontact è moderno, con prodotto host.
    - C9 3: 30 telefonate a comuni o gestori in 2 settimane.
    - Penalità: stagionalità moderata (−2); dipendenza dalle piattaforme di distribuzione (−3).

---

#### Nuovi candidati emersi nel gruppo (grezzi)

1. **Accessi contingentati a mete naturali: prenotazioni di parcheggi, pedaggi e numeri chiusi, con alert sulle aperture.** Evidenza: l'autocompletamento propone "prenotazione rifugio auronzo **parcheggio**" (ac1.txt). Le fonti sono frammentate (ogni ente, parco e comune ha un sistema proprio). Il bisogno è transazionale e fresco, quindi poco sostituibile dall'AI. Da verificare: pagatori (affiliazione con i sistemi di prenotazione, che potrebbero non esistere) e ampiezza delle località.
2. **"Cani ammessi" fuori dalla spiaggia: attrazioni, musei, negozi, traghetti, trasporti locali.** Evidenza: "cani ammessi " restituisce crociera, aereo, flixbus, venezia, cinema, mirabilandia, pompei, ikea, gardaland; "cane metro milano", "cane in autobus bologna/roma/bari" (ac1/ac2). È meno stagionale di A1 e i dati sono regolamenti di enti e aziende. È però a rischio C6 per le grandi aziende (una sola pagina ufficiale ciascuna) e ha la stessa monetizzazione debole di A1.

---

**Contatori:** WebSearch usate: **13**. Fetch diretti: circa **55** (curl) + 1 WebFetch (fallito: login Amazon). Chiamate di autocompletamento: **36**. Google Trends: 1 tentativo (429). Reddit: 3 tentativi (403).


---

## Screening B2C — Gruppo D (#28, #29, #39/GN)

Data di accesso di **tutte** le fonti: 2026-11-20. Le pagine citate sono state lette direttamente con curl, salvo dove è scritto "da estratto WebSearch". Le ipotesi sono state scritte prima della raccolta delle evidenze (file di lavoro `D/ipotesi.md`) e qui sono riportate così come erano.

Note di metodo:
- L'autocompletamento è stato interrogato con `hl=it&gl=it`. Senza `gl=it` alcune query restituiscono suggerimenti USA, per esempio "eventi oggi a new york".
- Reddit JSON ha risposto 403. Le due ricerche WebSearch con `site:reddit.com` non hanno restituito thread Reddit.
- Similarweb ha risposto 202 con corpo vuoto, quindi non ci sono dati di traffico.
- Google Trends non è stato tentato, per non consumare l'unico tentativo consentito su query generiche: **Trends non raggiungibile/non usato**.

---

### #28 — Eventi locali e sagre

1. **Ipotesi e criterio di scarto (pre-registrata).** Ci aspettiamo domanda alta e molto stagionale ("sagre [regione/provincia] weekend") e pagatori poveri (Pro Loco, piccoli comuni). Lo scartiamo se il listino di visibilità vale poche decine di euro per evento e non c'è un altro pagatore. Lo scartiamo anche se la SERP è già coperta da aggregatori e testate e la risposta AI basta.

2. **Verdetto:** INCERTO (G3 debole). Il pagatore esiste e ha un listino pubblico (30-540 € per evento), ma il ticket è basso e il mercato è già presidiato da un aggregatore con traffico dichiarato alto. Non è un FAIL netto, perché il pagatore oggi paga davvero.

3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Pubblicare un calendario di eventi è attività editoriale. Gli incumbent operano senza autorizzazioni (srl editoriali o agenzie web). | https://www.eventiesagre.it/carrello.html · https://sagritaly.com/sagritaly-for-business/ |
| G2 Dati raggiungibili | sì | [fatto] Esistono dataset aperti regionali e comunali di eventi su dati.gov.it, per esempio "Cosa fare in Puglia - progressivo eventi e attività" e "Eventi del giorno Comune di Martina Franca" (Regione Puglia, aggiornati il 2026-11-07). Ci sono portali regionali come eventi.regione.fvg.it. [stima] Il resto è sparso su siti delle Pro Loco, Facebook e locandine. La frammentazione è alta. | https://www.dati.gov.it/opendata/api/3/action/package_search?q=eventi%20sagre (6 risultati) · https://eventi.regione.fvg.it/redazione/Reposit/Eventi/22841_programma.pdf |
| G3 Pagatore identificabile | sì, debole | [fatto] eventiesagre.it vende "Evento in evidenza": 30 € per 2 settimane a livello provinciale; 90/170/250/330 € per 1-4 settimane a livello regionale; 150/280/410/540 € per 1-4 settimane a livello nazionale (IVA inclusa). Vende anche Top Promo per attività commerciali con le stesse tariffe e la newsletter a 50 € per invio (oltre 3.000 iscritti). [fatto] Sagritaly vende una vetrina "GOLD" a **200 €/anno** alle attività locali (non agli organizzatori), più una guida cartacea a 200 € (pacchetto da 300 €). [fatto] AllEvents è gratis per gli organizzatori, con piani da 12/60/200 $/mese e una fee di 1 $ per biglietto a carico del partecipante. | https://www.eventiesagre.it/carrello.html · https://sagritaly.com/sagritaly-for-business/ · https://allevents.in/pages/pricing |
| G4 Distribuzione senza pubblico | incerto | [fatto] L'autocompletamento mostra una long-tail ampia: regione + "questo weekend/oggi/domani/mese 2026", province ("sagre provincia di cuneo questo weekend") e singole sagre con anno ("sagra altivole 2026 programma"). [fatto] La SERP di test è occupata da eventiesagre.it, itinerarinelgusto.it, siviaggia.it, ilgiorno.it e milanofree.it. Entrare è possibile ma costa autorità. | vedi sezione Domanda |
| G5 Rischio legale gestibile | sì | [stima] Date, luoghi e titoli sono fatti. Restano due rischi: copiare testi e locandine (diritto d'autore) ed estrarre in blocco da eventiesagre.it (diritto *sui generis*; il sito dichiara "EVENTIESAGRE (D) é un marchio depositato"). Il rischio si gestisce usando open data regionali, siti delle Pro Loco e testi propri. | https://www.eventiesagre.it/amp/Promo+e+Sconti_Servizi/21151644_Servizi+Agli+Utenti+Di+Eventiesagre.html |

4. **Concorrenza**
| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| Eventi e Sagre (Web Up Italia Srl, Ancona) | https://www.eventiesagre.it | Tutta Italia: sagre, fiere, mercatini, con pagine per regione e mese | Gratis per gli utenti; AdSense (4 slot `adsbygoogle` su una pagina di elenco); listino visibilità 30-540 € | Dichiara "12 milioni di visitatori, 28 milioni di pagine" (autodichiarato, senza periodo). Le segnalazioni gratuite non danno diritto alla pubblicazione automatica. |
| Sagritaly (ORIGAMI Web Srl, TO) | https://www.sagritaly.com | Portale editoriale di sagre ed eventi più guida cartacea | 200 €/anno vetrina per le attività | Inserimento solo "su verifica redazionale" |
| Itinerari nel Gusto | https://www.itinerarinelgusto.it/sagre-e-feste/lombardia | Pagine programmatiche per comune ("Cosa fare oggi a Licenza e dintorni") | Pubblicità (non verificato) | È già il modello SEO comune × data che si vorrebbe costruire |
| Virgilio (sezione eventi per comune) | https://virgilio.it/italia/pianello-val-tidone/eventi/sagre_e_feste-domani | Pagine per comune (oggi/domani) | Pubblicità | Qualità non verificata in questa passata |
| Testate (SiViaggia, Il Giorno, MilanoFree, Fanpage) | https://siviaggia.it/notizie/sagre-feste-lombardia-novembre-2026/606014/ | Liste editoriali mensili o settimanali | Pubblicità | Non complete, ma con autorità di dominio |
| AllEvents | https://allevents.in/pages/pricing | Eventi globali, ticketing | Freemium, 12-200 $/mese | Poco radicato sulle sagre (non misurato) |
| App: Sagriamo, FunEvents, TrovaSagre, Vita Romagna, Giraitalia, Sagre Cilento, Le Marche Eventi | https://apps.apple.com/it/app/sagriamo/id1475125353 | Ricerca vicino a me; Sagriamo offre anche ordinazione e prenotazione per gli organizzatori | Gratis | Sagriamo: 4,2/5 su 29 voti; FunEvents: 4,7/5 su 56; le app nuove del 2026 hanno 0-11 voti. Le app sono tante e tutte con pochissima trazione. |
| **Pubblico**: portali turistici regionali e comunali, open data regionali (Puglia), Bologna Welcome, FVG | https://www.dati.gov.it · https://www.bolognawelcome.com/it/eventi | Eventi ufficiali del territorio | Gratis | Copertura disomogenea tra regioni (6 dataset trovati su dati.gov.it) |
| Facebook Eventi / Instagram | — | Fonte primaria di molte Pro Loco | Gratis | Non indicizzato bene, richiede login |

5. **Domanda (C2)** [stima]
- Query testate e risultati:
  - "sagre questo weekend" → 10 suggerimenti, uno per regione o provincia (lombardia, piemonte, toscana, lazio, campania, emilia romagna, liguria, "verona e provincia", "vicino a me").
  - "sagre " → toscana, lazio, "lazio ottobre 2026", "oggi vicino a me", fvg, campania.
  - "sagre lombardia" e "sagre veneto" → varianti oggi/domani/weekend/mese 2026.
  - "sagre provincia di cuneo" → 10 varianti.
  - "sagra a" → singole sagre con anno (altivole 2026, anguilla comacchio 2026, arsego 2026, alberese 2026).
  - "eventi weekend bergamo/lecce/crema" → 2-6 varianti ciascuna, anche per comuni medi (Crema, "cremasco").
  - "cosa fare questo weekend a" → grandi città più varese e torino "con i bambini" e "gratis".
- Lettura: long-tail molto ampia (regione × tempo, provincia, singola sagra, comuni medi). È un segnale forte di domanda ricorrente, con forte stagionalità implicita (le varianti con il mese sono soprattutto agosto, settembre e ottobre).
- SERP per "sagre questo weekend Lombardia 21 22 novembre 2026" (WebSearch): eventiesagre.it (più pagine), siviaggia.it, ilgiorno.it, milanofree.it, itinerarinelgusto.it, mentelocale.it.
- Trends: non usato. Traffico degli incumbent: non trovato (Similarweb non accessibile). Unico dato: i 12 milioni di visitatori autodichiarati da eventiesagre.

6. **Dolore (C1)**
- Recensioni App Store di Sagriamo (feed RSS): "ti faccia vedere praticamente le sagre già passate, siamo a fine ottobre…" (2★, 2024-10-26); "se vado su Google trovo le sagre, su l'app ci sono ancora le vecchie sagre" (1★, 2023-09-09); "Solo sagre del Veneto" (1★, 2022-09-10). Fonte: https://itunes.apple.com/it/rss/customerreviews/id=1475125353/sortby=mostrecent/json
- Il dolore ricorrente è la copertura incompleta e i dati vecchi. I numeri sono minimi: 29 valutazioni.
- Lamentele su Reddit: non trovato.

7. **Pagatori (G3/C3)**
- eventiesagre: 30 € (2 settimane, provinciale) fino a 540 € (4 settimane, nazionale); newsletter 50 €/invio.
- Sagritaly: 200 €/anno per attività.
- AllEvents: 12-200 $/mese per organizzatori professionali.
- [stima] Il ticket medio realistico per una Pro Loco è nella fascia bassa (30-90 €/evento). L'altro pagatore è la pubblicità display su traffico di basso valore commerciale.
- Affiliazione hotel/esperienze vicino all'evento: non verificata.

8. **Test chatbot (C6).** Query: "sagre questo weekend Lombardia 21 22 novembre 2026". La risposta AI di WebSearch ha citato 2-3 eventi (Festival della Mostarda Cremona, Sapori d'Autunno a Comazzo, mercatino di Voghera) e ha dichiarato: "Le fonti non hanno un elenco completo per quelle due giornate". [stima] Un LLM generalista non copre bene il "paese vicino questo weekend", gli annullamenti e il meteo. Resistenza **media-alta** sul dato fresco e locale. Resta la dipendenza dagli aggregatori, che la stessa AI cita come fonti.

9. **Motivo più forte per scartarlo.** Il modello che si vorrebbe costruire (pagine programmatiche comune × giorno più listino di visibilità) **esiste già ed è sfruttato** da eventiesagre.it e itinerarinelgusto.it. Il pagatore spende 30-90 € e solo durante la stagione. Il ricavo per evento è troppo basso per giustificare un costo di acquisizione, quindi resta solo la SEO contro incumbent con autorità.

10. **Note per lo scoring**
- C1 2 (lamentele sui dati vecchi, ma pochi voti)
- C2 4 (long-tail ampia e verificata, ma senza volumi)
- C3 2 (listino reale ma basso)
- C4 4 (fonti molto frammentate: open data parziali, Pro Loco, Facebook)
- C5 3 (long-tail sì, SERP presidiata)
- C6 3
- C7 2 (lo storico conta poco: gli eventi si ripetono ma si copiano)
- C8 3 (incumbent web "vecchio stile" ma con traffico)
- C9 4 (pagine per 1-2 province in 2 settimane, misurando indicizzazione e click)
- Penalità stagionalità: −3 / −5 [stima]

---

### #29 — Mostre e musei (orari, prezzi, aperture straordinarie, domeniche gratuite, mostre in corso)

1. **Ipotesi e criterio di scarto (pre-registrata).** Ci aspettiamo dolore informativo basso (Google Maps e i siti ufficiali hanno gli orari) e domanda media, concentrata su "domenica al museo" e sulle mostre delle grandi città. Il pagatore è l'affiliazione biglietti (Tiqets, GYG, Musement). Lo scartiamo se le commissioni sono ≤ 5-8% su biglietti da 10-20 € o se i musei statali non sono vendibili in affiliazione. Lo scartiamo anche se MiC copre già domeniche e aperture e una risposta AI risponde bene.

2. **Verdetto:** FAIL (G4/C6 di fatto, G3 debole). Formalmente i gate G1, G2 e G3 passano. Però il dato informativo è pubblico, ufficiale e già aggregato dallo Stato (Musei Italiani/MiC) e da editori con pagine programmatiche (Arte.it, thewom.it). La risposta AI è già buona e l'affiliazione rende circa 0,5-1,6 € per biglietto. Lo marco **FAIL (G4: nessun canale realistico, la long-tail è già occupata e risolta dall'AI)**. Il giudizio su G4 è [stima].

3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Informazione culturale e rivendita in affiliazione (non agenzia di viaggio: si rimanda al venditore). | — (ragionamento) |
| G2 Dati raggiungibili | sì | [fatto] MiC pubblica il dataset "Luoghi della cultura" (DBUnico 2.0, luoghi statali e non statali) su dati.gov.it in RDF/JSON-LD per regione. Esistono dataset regionali e comunali (Umbria, Emilia-Romagna, Lombardia, Musei del Comune di Torino): 101 risultati per "luoghi della cultura musei". Il download diretto da dati.beniculturali.it non ha risposto da questa sessione. [fatto] Orari e avvisi cambiano spesso: la home degli Uffizi del 20/11 mostra "Sciopero 20 novembre 2026", "7 dicembre 2026. Apertura straordinaria", "Temporanea chiusura di alcune sale". | https://www.dati.gov.it/opendata/api/3/action/package_search?q=luoghi%20della%20cultura%20musei · https://www.uffizi.it/ |
| G3 Pagatore identificabile | sì, debole | [fatto] Tiqets via Travelpayouts: commissione 3,5-8%, prezzo medio 72,66 $, cookie 30 giorni. [fatto] GetYourGuide: 7% base (Awin US), 5% base (Tradedoubler UK), cookie 30 giorni. Musement: "competitive commissions", percentuale non pubblica. | https://www.travelpayouts.com/en/offers/tiqets-affiliate-program · https://ui.awin.com/merchant-profile/18925 · https://directory.tradedoubler.com/en/programs/300817-getyourguide-co-uk · https://partner.musement.com/ |
| G4 Distribuzione senza pubblico | no [stima] | [fatto] La SERP "mostre a Bologna novembre 2026" è occupata da arte.it (pagine programmatiche città × giorno e città × mese), cosedicasa.com (città × mese) e bolognawelcome.com (ente turistico). [fatto] Per "domenica al museo 6 dicembre 2026" rispondono cultura.gov.it e travel.thewom.it, che ha pagine programmatiche "musei gratis [data]". | https://arte.it/calendario-arte/bologna/2026/11/ · https://travel.thewom.it/italia/musei-gratis-6-dicembre.html |
| G5 Rischio legale gestibile | sì | Open data MiC e regionali; orari e prezzi sono fatti. Da non copiare: testi critici e immagini delle opere (riproduzioni dei beni culturali soggette a concessione, Codice dei beni culturali artt. 107-108; [stima], non verificato in questa passata). | — |

4. **Concorrenza**
| Nome | URL | Cosa copre davvero | Prezzo/modello | Punti deboli |
|---|---|---|---|---|
| **Pubblico**: Musei Italiani (MiC, Direzione generale Musei) | https://www.museiitaliani.it/ | Schede dei musei statali, itinerari, **vendita biglietti**, app | Gratis (biglietteria ufficiale) | Solo statali; la UI è parzialmente non tradotta (chiavi visibili come "COS_E_SMN", "INFO_MUSEI_BIGLIETTI" nell'HTML letto) |
| **Pubblico**: cultura.gov.it (#domenicalmuseo) | https://cultura.gov.it/evento/7-dicembre-e-domenicalmuseo-alla-galleria-nazionale-darte-moderna-e-contemporanea | Pagine evento per ogni museo e domenica | Gratis | Frammentato per museo, nessun elenco filtrabile (da estratti WebSearch) |
| Siti dei musei e biglietterie concessionarie (CoopCulture, B-ticket, ecc.) | https://www.uffizi.it/ | Orari, avvisi, scioperi, aperture straordinarie | Biglietto | Ognuno ha il proprio formato |
| Arte.it | https://www.arte.it/ | Mostre per città e giorno, guide | Pubblicità; nessun link di affiliazione nella pagina letta | Incumbent SEO forte e aggiornato (home del 20/11/2026) |
| Exibart | https://www.exibart.com/ | Agenda e news d'arte | Pubblicità / editoriale | Orientato al settore |
| thewom.it travel | https://travel.thewom.it/italia/musei-gratis-6-dicembre.html | Pagine "musei gratis [data]" | Pubblicità, link Awin | Copre già la query "domenica al museo" |
| Tiqets / GetYourGuide / Musement | vedi G3 | Biglietti con salta fila | Commissione al venditore | Spesso più cari dell'ufficiale |
| Google (Maps, scheda luogo) | — | Orari dei luoghi | Gratis | Non verificato |

5. **Domanda (C2)** [stima]
- Query testate e risultati:
  - "domenica al museo" → 10 varianti: 2026, ottobre e settembre 2026, reggia di caserta, firenze 2026, torino, milano, gratis.
  - "musei gratis" → roma, torino, milano, firenze, "prima domenica del mese" (più new york, chicago e londra).
  - "mostre a milano" → 10 varianti con mese e anno; "mostre a bologna" → 10; "mostre a lecce" → 10 (anche "e provincia").
  - "orari museo" → singoli musei (egizio, museo del cinema, reggio calabria/bronzi).
  - "biglietti uffizi" → "sito ufficiale", "prezzo", "under 25", "salta fila", "coopculture".
- Lettura: domanda reale, ma le varianti si concentrano su grandi città e grandi musei. Spesso c'è intento navigazionale verso il sito ufficiale ("sito ufficiale", "coopculture").
- Trends e traffico: non trovati.

6. **Dolore (C1)**
- Il dolore documentato non riguarda l'informazione ma **la disponibilità dei biglietti** delle attrazioni top. Il Post (21/04/2026): "Il bagarinaggio online sui biglietti per il Colosseo è ancora lì", https://www.ilpost.it/2026/04/21/biglietti-colosseo-introvabili-bagarinaggio/. SiViaggia: https://siviaggia.it/notizie/colosseo-roma-biglietti-online-introvabili/584947/. Istruttoria AGCM su CoopCulture: https://www.editorialedomani.it/fatti/colosseo-secondary-ticketing-coopculture-agcm-antitrust-nbsvio4x (da estratti WebSearch, pagine non lette direttamente).
- Lamentele su orari e prezzi: non trovato. Reddit: non trovato.

7. **Pagatori (G3/C3)**
- Tiqets 3,5-8% (Travelpayouts); GYG 5-7% base (Tradedoubler/Awin); cookie 30 giorni.
- [stima] Su un biglietto museale da 10-25 € la commissione vale circa 0,5-2 € per transazione.
- I biglietti statali sono venduti anche dal canale ufficiale MiC e la domenica gratuita non genera commissioni. Il pubblico informativo è in buona parte locale e non compra in affiliazione.

8. **Test chatbot (C6).** Query: "domenica al museo 6 dicembre 2026 musei gratis Roma elenco". La risposta AI ha dato data corretta, prossima data (3 gennaio 2027), regole (solo domenica, ritiro in biglietteria), esempi romani e rimando all'app Musei Italiani. Query: "mostre a Bologna novembre 2026 orari prezzi". Ha elencato 7 mostre con date e gratuità e non ha dato prezzi e orari. Valutazione: **resistenza bassa** sull'informativo. Le eccezioni sono scioperi, chiusure di sale e aperture straordinarie del giorno, che però sono già nella home dei musei.

9. **Motivo più forte per scartarlo.** Lo Stato fa già sia l'aggregazione sia la vendita (Musei Italiani). Arte.it e thewom.it presidiano le pagine programmatiche e l'AI risponde bene. L'unico dolore forte (biglietti introvabili per Colosseo e Vaticani) è un problema di offerta e bagarinaggio, non di informazione, e lavorarci comporta rischi legali e di ToS.

10. **Note per lo scoring**
- C1 2 (dolore solo sulle attrazioni top)
- C2 3
- C3 2 (5-8% su ticket bassi)
- C4 2 (open data MiC più siti ufficiali: poca frammentazione per i musei statali, di più per le mostre private)
- C5 2
- C6 2
- C7 2
- C8 2 (incumbent pubblici ed editoriali aggiornati)
- C9 4
- Penalità: nessuna stagionalità forte.

---

### #39 — Giochi su dati reali (traccia GIOCHI: gate GG1-GG3, criteri CG1-CG7)

**Evidenze comuni ai quattro concept**

- **Equivalente italiano trovato: Italiadle** (https://italiadle.pages.dev/, letto direttamente). Si presenta come "Il gioco statistico ufficiale sui Comuni d'Italia", nel footer come "Progetto indipendente e amatoriale", © 2026. Modalità: "Città del Giorno" (indovina il comune segreto con indizi su zona, abitanti, altitudine e superficie), **"Higher / Lower"** (quale città ha un valore più alto, su dati reali), "Profili ISTAT", "Dove si trova?" (localizza i comuni sulla mappa), "Istat-Chart", "Cattura Popolazione", "Riordino", "Mappa delle Ricette", "Dialetti d'Italia". Tutte le modalità hanno sfida del giorno e partita random. **Copre già il nucleo di GN3 e di GN4.**
- **Trazione di Italiadle:** non trovata. Una WebSearch mirata sul nome non lo ha restituito ("Non ho trovato nessun gioco chiamato Italiadle"). [stima] Trazione bassa o progetto recente.
- **Altri giochi italiani:**
  - "Comuni Non Comuni": su due nomi, indovinare quale è un vero comune. https://pasquiindustry.itch.io/comuni-non-comuni
  - App "Quiz Italia - Province e città": https://apps.apple.com/it/app/quiz-italia-province-e-citt%C3%A0/id1550498174
  - Mappe GeoGuessr in italiano: https://geoguessr.com/it/vgp/3393
  - Fonte di tutti e tre: estratti WebSearch.
- **Precedenti esteri:**
  - Worldle (Teuteuf Games), dal post ufficiale letto: "Within its first 10 days … 10,000 players. By mid-February 2022, hundreds of thousands of people were playing each day, and soon Worldle was reaching millions of daily players". Oggi è parte di un "universo" di giochi geografici Teuteuf. L'app Earthle ha 4,3/5 su 4.974 voti (US) e 4,1/5 su 22 (IT): pubblico italiano piccolo. https://x.com/Worldle_Game/status/2074140722710647261 · https://itunes.apple.com/lookup?id=1609883502&country=us
  - **Costcodle** è ancora online (https://costcodle.com/, letto): indovinare il prezzo in 6 tentativi, vittoria entro il 5%, frecce "low/high by more than 25%". Dati di traffico: non trovati.
  - **Housle**: il dominio housle.com non risolve più (curl 000). Gli articoli su utenti e funding (Inman) restituiscono 403. [stima] Il gioco potrebbe essere chiuso nonostante i 200.000 utenti citati nello screening precedente (cifra non riverificata).
  - The Higher Lower Game è ancora online (https://www.higherlowergame.com/, SPA). Le cifre di viralità del 2016 (bdaily) non sono riverificate: 403.
- **Canali:**
  - CrazyGames (docs lette): monetizzazione "through advertisement revenue share", solo annunci del loro SDK, IAP solo per giochi selezionati, pagamento mensile oltre 100 €. Requisiti: download iniziale ≤ 50 MB, totale ≤ 250 MB, PEGI12, SDK con evento GameplayStart. "Over 50 million monthly players", pubblico forte in USA e Tier 1. **Percentuale di revenue share non pubblicata** nelle pagine lette. https://docs.crazygames.com/requirements/intro/ · https://docs.crazygames.com/faq/
  - Poki: "1B+ gameplays per month"; percentuale non trovata. https://developers.poki.com/
  - CrazyGames, giochi di parole: 14 minuti di gioco, D1 7,6%, 7,9 impression pubblicitarie per partita. https://docs.crazygames.com/resources/monetizing-word/
- **Monetizzazione:**
  - Actorle (daily indie): "two years after launch, Actorle still generates around $4,000 monthly"; 1.000 $ di donazioni in 3 mesi all'inizio (autodichiarato). https://hey.gg/blog/actorle
  - Corriere Giochi: 4,6/5 su 3.552 voti (IT), aggiornata il 2026-06-08. È l'incumbent italiano in abbonamento. https://itunes.apple.com/lookup?id=6744399739&country=it
  - NYT Q3 2026: circa 13,76 milioni di abbonati totali (da estratto WebSearch, ppc.land). Prezzo dell'abbonamento solo giochi: non trovato in questa passata.
- **Autocompletamento giochi:**
  - "higher lower" → "higher lower italiano", "calcio", "serie a", "transfermarkt", "gioco", "film".
  - "indovina il prezzo" → "del quadro", "dell'opera d'arte" (4 varianti), "del giocatore", "della casa", "gioco online".
  - "indovina il prezzo della spesa" → nessun suggerimento.
  - "indovina il comune", "gioco comuni italiani" → solo la query stessa.
  - "contexto" → "contexto italiano", "contexto italiano gioco", "contexto italiano gioco online".
  - "semantle italiano" → solo la query.
  - "giochi giornalieri" → "italiano", "tipo wordle", "geografia", "calcio"; "gioco giornaliero" → "parole", "matematica", "geografia".

---

### GN1 — "Prezzo della spesa" (indovina il prezzo di prodotti reali)

1. **Ipotesi e criterio di scarto.** Ci aspettiamo che il formato funzioni (Costcodle) e che il tema caro-spesa sia condivisibile in Italia, con un vantaggio dati nello storico prezzi. Lo scartiamo se esiste già un daily italiano sui prezzi o se dati e immagini dei prodotti non sono usabili legalmente.
2. **Verdetto:** PASS sui gate. CG1 è debole: nessuna domanda di ricerca misurabile per "indovina il prezzo della spesa".
3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| GG1 Originale | sì, a condizione | Meccanica di genere (Costcodle, prezzo con frecce e soglia). Va evitato il nome e il look di Costcodle e qualunque riferimento al format TV "Ok, il prezzo è giusto!" (marchio televisivo, [stima], non verificato). | https://costcodle.com/ |
| GG2 Canale senza pubblico | sì | Daily condivisibile. **Nessun equivalente italiano trovato** (WebSearch mirata: "Non ho trovato alcuna fonte che descriva un gioco online 'indovina il prezzo' … né un gioco quotidiano su prezzi di prodotti da supermercato"). | WebSearch 2026-11-20 |
| GG3 Monetizzazione provata | sì (genere daily) | Pubblicità/donazioni (Actorle circa 4.000 $/mese), abbonamenti (Corriere Giochi, NYT). Costcodle: modello non trovato. | https://hey.gg/blog/actorle |

**Dati/legale:** [fatto] Open Prices (Open Food Facts) è un database aperto e crowdsourced di prezzi: l'API pubblica restituisce 346.615 prezzi totali (filtro per paese non funzionante, quota italiana non misurata). https://prices.openfoodfacts.org/api/v1/prices?size=1. [stima] Lo scraping dei prezzi dagli e-commerce della GDO dà lo storico. Le foto dei prodotti sono di terzi: vanno evitate o prese da Open Food Facts (licenza da verificare).

**Motivo più forte per scartarlo:** nessun segnale di domanda italiana ("indovina il prezzo della spesa" senza suggerimenti). Il caso di riferimento (Costcodle) non ha dati pubblici di traffico e Housle sembra chiuso.

**CG:**
- CG1 2 (nessuna evidenza IT di domanda)
- CG2 4 (offerta IT assente)
- CG3 4 (risultato confrontabile, tema caro-vita) [stima]
- CG4 2
- CG5 4 (storico prezzi da scraping, non ricostruibile a posteriori)
- CG6 3
- CG7 5

---

### GN3 — "Più o meno, Italia" (higher/lower su dati italiani reali)

1. **Ipotesi e criterio di scarto.** Ci aspettiamo che la meccanica sia virale (Higher Lower Game) e che non esista un equivalente italiano sui dati statistici. Lo scartiamo se un equivalente italiano esiste già.
2. **Verdetto:** INCERTO. I gate formalmente passano, ma **Italiadle ha già una modalità "Higher / Lower" sui comuni con dati reali**. Esistono anche gli higher/lower italiani sul calcio (autocompletamento).
3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| GG1 Originale | incerto | Meccanica di genere. Va evitato il nome e il look di "The Higher Lower Game". Rispetto a Italiadle la differenza starebbe solo nel dataset (stipendi MEF, carburanti, ecc.), quindi rischio di gioco "uguale". | https://www.higherlowergame.com/ · https://italiadle.pages.dev/ |
| GG2 Canale senza pubblico | sì | Formato infinito più daily, adatto a CrazyGames/Poki (categoria Trivia) e condivisibile. | https://docs.crazygames.com/requirements/intro/ |
| GG3 Monetizzazione provata | sì | Pubblicità a partita sui portali (revenue share SDK) | https://docs.crazygames.com/faq/ |

**Motivo più forte per scartarlo:**
- Equivalente italiano esistente (Italiadle, modalità Higher/Lower).
- I dataset sono open data statici (ISTAT, MEF): chiunque li copia in un giorno, quindi CG5 è basso.
- La versione endless non è un daily condivisibile come Wordle.

**CG:**
- CG1 3 ("higher lower italiano" in autocompletamento, ma sul calcio)
- CG2 2
- CG3 3
- CG4 3 (portali)
- CG5 2
- CG6 2 (endless, senza abitudine)
- CG7 5

---

### GN4 — Daily sui comuni (indovina il comune da indizi, forma, dati)

1. **Ipotesi e criterio di scarto.** Ci aspettiamo spazio libero (lo screening precedente non aveva trovato un daily sui comuni) e un forte campanilismo condivisibile. **Lo scartiamo se esiste già un daily italiano sui comuni attivo.**
2. **Verdetto:** FAIL (GG1, criterio di scarto pre-registrato). Esiste Italiadle, con "Città del Giorno" (comune segreto, indizi zona/abitanti/altitudine/superficie) e "Dove si trova?". Un nostro gioco sarebbe di fatto una copia di un gioco preciso. Resta solo la variante "sagoma del comune" (non presente in Italiadle), che da sola è un clone di Worldle sui comuni.
3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| GG1 Originale | no / incerto | Italiadle copre già il concept. La variante sagoma ricalca Worldle (forma più distanza e direzione). | https://italiadle.pages.dev/ · https://x.com/Worldle_Game/status/2074140722710647261 |
| GG2 Canale senza pubblico | sì | Daily condivisibile; precedente Worldle (10.000 giocatori in 10 giorni). | idem |
| GG3 Monetizzazione provata | sì | Teuteuf: rete di giochi geografici; app con IAP (4.974 voti US) | https://itunes.apple.com/lookup?id=1609883502&country=us |

**Dati:** [fatto] I confini ISTAT 2026 sono scaricabili (Limiti01012026.zip) da https://www.istat.it/notizia/confini-delle-unita-amministrative-a-fini-statistici-al-1-gennaio-2018-2/ (licenza non verificata sulla pagina). Il vantaggio dati è quindi nullo.

**Motivo più forte per scartarlo:** l'equivalente italiano esiste già. Gli unici due vantaggi possibili sarebbero esecuzione e distribuzione, nessuno dei due legato all'asset di scraping. La trazione di Italiadle sembra bassa (non indicizzato), il che è anche un segnale che la domanda italiana per questo formato non è esplosa.

**CG:**
- CG1 2 ("indovina il comune" senza varianti di autocompletamento)
- CG2 2
- CG3 4
- CG4 2
- CG5 1
- CG6 4
- CG7 5

---

### GN5 — Daily semantico in italiano (meccanica alla Contexto/Semantle)

1. **Ipotesi e criterio di scarto.** Ci aspettiamo che non esista un Contexto italiano ufficiale e che ci sia domanda dei giocatori italiani di Contexto. Lo scartiamo se esiste già una versione italiana attiva o se Corriere Giochi copre la meccanica.
2. **Verdetto:** PASS sui gate. La domanda è **misurabile**: "contexto italiano", "contexto italiano gioco" e "contexto italiano gioco online" compaiono in autocompletamento. CG5 è basso: l'AI non dà alcun vantaggio difendibile.
3. **Gate**
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| GG1 Originale | sì, a condizione | Meccanica di genere (Semantle 2022, Contexto, Cémantix in FR, Semantus). Vanno evitati nome e look di Contexto (lista con barre colorate per rank). | https://www.alucare.fr/it/top-4-giochi-come-cemantix/ |
| GG2 Canale senza pubblico | sì | Nessuna versione italiana ufficiale trovata. Secondo una fonte terza Contexto esiste solo in portoghese, inglese e spagnolo (vcgamers, da estratto WebSearch, data non indicata). L'unico progetto italiano trovato è amatoriale su GitHub (cristal-orion/Semantico; pagina GitHub con risposta 403, non verificato). La domanda di ricerca esiste. | autocompletamento 2026-11-20 · https://www.vcgamers.com/news/en/?p=133075 |
| GG3 Monetizzazione provata | sì | Daily di parole: pubblicità e abbonamenti (Corriere Giochi 4,6/5 su 3.552 voti; CrazyGames word games 7,9 impression per partita) | vedi sopra |

**Motivo più forte per scartarlo:**
- Contexto può aggiungere l'italiano in qualsiasi momento.
- Corriere Giochi (7 giochi, base di abbonati) può aggiungere la meccanica.
- Il vantaggio (embedding più corpus italiano) è copiabile e non usa lo scraping. L'unico appiglio è un indizio legato all'attualità del giorno via scraping di notizie [stima].

**CG:**
- CG1 3 (query "contexto italiano" con 3+ varianti)
- CG2 4 (offerta IT assente)
- CG3 4 (rank condivisibile)
- CG4 2
- CG5 2
- CG6 4
- CG7 5

**Test AI (tutti i concept GN).** Un LLM genera facilmente domande higher/lower e quiz sui comuni, ma non sostituisce un daily con risultato condiviso. La resistenza all'AI dipende dalla community, non dal contenuto. Solo GN1 ha contenuto fresco (prezzi della settimana) che un LLM non conosce.

---

#### Nuovi candidati emersi nel gruppo (grezzi)

1. **Gioco daily "Indovina il museo / l'opera" con ponte verso i biglietti (giochi + #29).** Segnale di domanda: l'autocompletamento "indovina il prezzo" restituisce 4 varianti su opere d'arte ("del quadro", "dell'opera d'arte", "… gioco online"). Il ponte di monetizzazione è l'affiliazione Tiqets/GYG (3,5-8%) verso il museo che conserva l'opera. **Attenzione:** va evitata la variante "prezzo d'asta" (ambito aste escluso), e le immagini delle opere nei musei statali sono soggette a concessione ([stima]: usare solo pubblico dominio o licenze libere, per esempio Wikimedia Commons).
2. **Alert "sagre e mercatini vicino a me" con notifica per comune e categoria (variante B2C di #28).** Il dolore documentato nelle recensioni di Sagriamo è "sagre già passate" e "solo Veneto". Gli incumbent web (eventiesagre, itinerarinelgusto) non offrono alert personali (non verificato a fondo). Il pagatore resta debole (30-90 € per evento in evidenza), quindi va tenuto solo se un test dimostra iscrizioni agli alert.

---

#### Conteggio e affidabilità del gruppo
- WebSearch usate: **14**.
- Fetch diretti (curl): circa 45, più 34 chiamate di autocompletamento.
- Fiducia nelle evidenze: **media**.
  - Alte: listini letti direttamente (eventiesagre, Sagritaly, AllEvents, affiliazioni Travelpayouts/Awin/Tradedoubler), documentazione CrazyGames, esistenza e contenuto di Italiadle, post Worldle, Costcodle attivo.
  - Basse o assenti: volumi di ricerca e traffico (niente Trends né Similarweb); dolore su Reddit (403, nessun thread); lingue di Contexto (fonte terza senza data); percentuali di revenue share di CrazyGames e Poki (non pubbliche).


---

## Nuovi candidati emersi

Massimo 3, solo B2C, scelti tra quelli proposti dai gruppi (sopra) e compatibili con gli ambiti esclusi. Non sono ancora stati sottoposti ai gate.

| ID | Candidato | Da | Perché è interessante | Dubbio principale |
|---|---|---|---|---|
| N16 | **TARI per comune**: tariffe, riduzioni, scadenze delle rate, calcolatore | H1 | Il TITR ARERA (del. 444/2019, art. 3) obbliga a pubblicare le regole di calcolo, le riduzioni e le scadenze. Dati frammentati su circa 7.900 comuni e più vicini al denaro rispetto ai calendari dei rifiuti | Pagatori e domanda non ancora misurati |
| N17 | **Accessi a numero chiuso a mete naturali** (parcheggi da prenotare, pedaggi, pass, alert sulle aperture: es. Tre Cime/Auronzo) | T1 | L'autocompletamento suggerisce "prenotazione rifugio auronzo parcheggio": un dato fresco e frammentato con un'azione concreta (prenotare), che resiste ai chatbot | Pagatori da verificare. Le prenotazioni passano da sistemi locali |
| N18 | **Contestazione delle spese di gestione multe dei noleggiatori** (generatore di reclami e istanze per noleggiatore) | M1 | Le spese sono di 45-50 € + IVA per multa. L'AGCM ha multato Sicily by Car e Locauto per 8,4 M€ e ha aperto procedimenti su Hertz e Drivalia. La ZTL è il 35% delle infrazioni sui noleggi (ANIASA) | Spese dei noleggiatori e thread dei forum presi dai riassunti di WebSearch, non letti direttamente. Pagatore B2C su un ticket piccolo. Verificare che non si tratti di assistenza legale riservata |

Scartati come nuovi candidati, perché ereditano i limiti del padre:
- promemoria per la scadenza del prezzo fisso luce/gas (#20);
- alert unico sui bonus degli abbonati regionali (#31);
- alert su sagre e mercatini (#28);
- "indovina il museo/l'opera" (#29/#39), da tenere eventualmente come variante dei giochi;
- "cani ammessi" fuori dalla spiaggia (A1).
