# H22 — Ricerca avanzata di luoghi, servizi, norme e bonus per genitori — rapporto dell'ENTUSIASTA

Ruolo: costruire il caso più forte possibile per H22. Data di accesso di tutte le fonti: **2026-11-20**.
Ipotesi pre-registrata (non modificata): "Manca una ricerca avanzata di punti di interesse, servizi, regole e bonus per genitori (luoghi family-friendly, servizi per l'infanzia, norme e agevolazioni locali), e i dati frammentati si possono raccogliere con lo scraping."

---

## 1) Tesi in 5 righe

1. La parte "bonus e norme" di H22 è già coperta (BonusX, IO, INPS): **non la difendo come prodotto a sé**. Va usata solo come strato SEO.
2. La parte "luoghi e servizi per bambini" ha invece un **modello di ricavo provato all'estero, con listini pubblici**: kidsgo (DE) 1,50-49 €/mese per struttura, Happity (UK) 72-250 £/anno più commissione dell'1-2,5% e posizioni in evidenza a 1 penny per impressione, Kindaling (DE) a commissione, Winnie (USA) a lead e poi ad abbonamento.
3. In Italia la domanda per città è ampia e concreta: "ludoteca [città]" 20/20 comuni, "corsi per bambini [città]" 20/20, "feste di compleanno bambini [città]" 19/20, con varianti per quartiere. L'offerta è dispersa tra siti, PDF e listini, e nessuna directory strutturata domina.
4. Per questo profilo l'angolo migliore è un **"Kindaling italiano"** che parte dalle **feste di compleanno**: valore della transazione 319-669 € a festa, domanda tutto l'anno. Poi si estende a corsi e campus delle vacanze, così da diluire la stagionalità che penalizzava F3.
5. Lo scraping risolve il problema dell'avvio a freddo (le schede si precompilano da siti e listini), e l'operatore delegato vende abbonamenti alle strutture già presenti nella directory. Il rischio principale sono i **prezzi bassi pagati dalle strutture italiane** (9,90 €/mese per BeMyHero Pro, 20 € a evento per RomaperBambini).

---

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | kidsgo (DE) vende iscrizioni alle strutture in 5 livelli: Mini 1,50 €/mese (3 annunci), Basic 15 €/mese (15 annunci), Plus 29 €/mese (50), Premium 49 €/mese (illimitati), prezzi IVA esclusa. Il "Newsticker" costa 169 € per 500.000 visualizzazioni. | [fatto] | https://www.kidsgo.de/familienmitgliedschaft | 2026-11-20 | sì (curl) |
| E2 | kidsgo inserisce lui stesso i corsi per i membri Premium. L'importazione elettronica dai gestionali costa una tantum 300-800 € (listino 08.2024). | [fatto] | https://kidsgo.de/interna-media/Mitgliedschaften_Leistungen_15_8_24.pdf | 2026-11-20 | sì (pdftotext) |
| E3 | Happity (UK, corsi 0-5): Member 72 £/anno o 9 £/mese più IVA, con commissione sulle prenotazioni del 2,5%. Member Plus 250 £/anno o 25 £/mese, con commissione dell'1%. Entrambi hanno un vincolo di 12 mesi. | [fatto] | https://intercom.help/happity/en/articles/2656616-how-do-i-become-a-member-and-what-comes-with-my-subscription | 2026-11-20 | sì (curl) |
| E4 | Happity vende le "Featured Listings" a 1 penny per impressione (budget minimo 20 penny al giorno). La newsletter arriva a 140 mila genitori e i corsi dei membri ricevono "il 72% di visualizzazioni in più" (dato autodichiarato). | [fatto] (numeri autodichiarati) | https://intercom.help/happity/en/articles/2278351-how-do-i-become-a-featured-activity ; link E3 | 2026-11-20 | sì |
| E5 | Kindaling (DE, AT, CH): pubblicare corsi e campus è gratis, con una commissione solo sulle prenotazioni. Feste di compleanno e servizi pagano una quota annuale (importo non pubblicato). Dichiara oltre 2.000 strutture e oltre 7.000 offerte, e copre i campus di **tutte** le vacanze (Natale, inverno, carnevale, Pasqua, Pentecoste, estate, autunno). | [fatto] (numeri autodichiarati) | https://www.kindaling.de/faq/provider ; https://www.kindaling.de/about | 2026-11-20 | sì (curl) |
| E6 | Winnie (USA): circa 250.000 asili e scuole dell'infanzia in elenco, più della metà senza un sito proprio. All'inizio guadagnava a lead ("pay-per-lead"), poi è passata a un abbonamento mensile per struttura legato alla capienza. Durante la pandemia i ricavi sono cresciuti di 8 volte. | [fatto] | https://techcrunch.com/2022/03/04/winnie-has-a-new-plan-to-help-childcare-centers-scale-care | 2026-11-20 | sì (WebFetch) |
| E7 | Winnie ha avviato il catalogo con API pubbliche (Foursquare) e con i **registri pubblici delle licenze statali**. Ha raccolto oltre 20 M$ e dichiara 20 milioni di genitori serviti. | [fatto] (numeri autodichiarati) | https://mercury.com/blog/sara-mauskopf-marketplaces | 2026-11-20 | sì (WebFetch) |
| E8 | Hoop (UK, attività per bambini) ha chiuso a luglio 2020 per il COVID e ha riaperto dal 1° ottobre 2022, dichiarando oltre 100.000 attività di più di 400 tipi. L'inserimento per le strutture è gratuito. | [fatto] | https://hoop.co.uk/articles/general/hoop-development/hoop-is-back-were-rebuilding-the-uks-favourite-kids-activity-app/ | 2026-11-20 | sì (WebFetch) |
| E9 | KidPass (USA, abbonamento ad attività da 49 $/mese più commissione) ha raccolto 16,25 M$ ed è stata acquisita da BEGiN nell'agosto 2021. Nel 2019 aveva acquisito Mommy Nearest. | [fatto] (da sintesi di ricerca) | https://prnewswire.com/news-releases/begin-acquires-kidpass-leading-kids-activity-marketplace-301350040.html ; https://www.edsurge.com/news/2019-10-08-kidpass-acquires-mommy-nearest-to-add-parenting-advice-to-online-marketplace | 2026-11-20 | no (sintesi WebSearch) |
| E10 | Sawyer (USA, "OpenTable delle attività per bambini") ha raccolto circa 21,7 M$ ed è stata acquisita da DaySmart Software (secondo la sintesi, nel 2023). Si è spostata dal marketplace al software gestionale per le strutture. | [fatto] (da sintesi di ricerca) | https://alleywatch.com/2019/05/sawyer-raises-another-11m-to-ensure-your-kids-are-not-bored-this-summer/ ; https://www.hisawyer.com/for-business/features/marketplace | 2026-11-20 | no |
| E11 | Mumsnet: "around 8 million unique visitors per month", circa 100 milioni di pagine viste, "funded mainly by advertising". | [fatto] (autodichiarato) | https://www.mumsnet.com/i/about-us | 2026-11-20 | sì |
| E12 | Netmums: traffico di ricerca stimato da Ahrefs in circa 129 mila visite (81,9 mila dal Regno Unito, −53,7 mila sul mese precedente). Snapshot senza data. | [stima] di terzi | https://ahrefstop.com/websites/netmums.com | 2026-11-20 | sì |
| E13 | BeMyHero (IT, feste per bambini): "4074 professionisti disponibili" e 16 categorie in homepage. Raccoglie preventivi via WhatsApp, gratis per i genitori. | [fatto] (autodichiarato) | https://www.bemyhero.it/en_US | 2026-11-20 | sì (curl) |
| E14 | BeMyHero PRO (app per i professionisti): "I piani partono da 9,90 € al mese", 30 giorni gratis. Dichiara "150+ professionisti registrati" e "2.000+ richieste di feste generate". Il numero di professionisti **non è coerente** con E13. | [fatto] (autodichiarato, incoerente) | https://bemyheropro.com/ | 2026-11-20 | sì (WebFetch) |
| E15 | RomaperBambini: 20 € a evento, 75 € per 5, 120 € per 10 (IVA inclusa). Dichiara 80.000 pagine viste al mese e oltre 4.000 iscritti alla newsletter, ed è attivo dal 2011. | [fatto] | https://www.romaperbambini.it/pubblicita | 2026-11-20 | sì (curl) |
| E16 | Kid Pass (IT, società benefit) vende banner, contenuti sponsorizzati, newsletter e social, **senza listino pubblico**. | [fatto] | https://kidpass.it/pubblicita/ | 2026-11-20 | sì (curl) |
| E17 | Listino delle feste di un parco gioco gonfiabile (Fonte Nuova, RM) da ottobre 2026: pacchetti da 319 € a 669 € secondo il giorno e il numero di bambini, con un supplemento per ogni bambino in più. | [fatto] | https://irp.cdn-website.com/35f1f8a4/files/uploaded/Listino+bubble+da+ottobre+2026.pdf | 2026-11-20 | sì (pdftotext) |
| E18 | Autocompletamento Google (hl=it) su 20 capoluoghi: "ludoteca [città]" 20/20 (10 suggerimenti su 10 in 17 città); "corsi per bambini [città]" 20/20; "cosa fare con i bambini [città]" 20/20; "feste di compleanno bambini [città]" 19/20; "acquaticità neonatale [città]" 20/20; "baby parking [città]" 20/20; "ristoranti con area giochi [città]" 16/20. | [fatto] (misura propria; i volumi assoluti restano ignoti) | suggestqueries.google.com (script in /tmp/claude-0/ac.py) | 2026-11-20 | sì |
| E19 | "ludoteca roma" a-z: **65 varianti**, con quartieri (Balduina, Parioli, Pigneto, Centocelle, Montesacro, Monteverde, Talenti, Tuscolana, EUR, Prati, San Giovanni). "feste compleanno bambini roma" a-z: **26 varianti** (nord/sud/est/ovest, EUR, Monteverde, "in piscina", "all'aperto", età 8-10 anni). "feste di compleanno bambini milano" dà "locali per", "sale per", "location per", "posti per". | [fatto] (misura propria) | suggestqueries.google.com | 2026-11-20 | sì |
| E20 | Bonus locali: "bonus bebè comune di …" (Palermo, Roma, Catania, Pisa, Milano, Napoli…), "bonus nido comune di …" (Roma, Cagliari, Sassari, Viterbo, Ferrara, Rimini…), "family card comune …" (Padova, Piacenza, Bergamo, Modena). | [fatto] (misura propria) | suggestqueries.google.com | 2026-11-20 | sì |
| E21 | BonusX in homepage: piano gratuito con 65 bonus, "+600 bonus pubblici" nei piani a pagamento, prezzi annui di 19,95 €, 79,95 € e 299,95 €. In homepage non menziona i bonus comunali. | [fatto] | https://www.bonusx.it/ | 2026-11-20 | sì (WebFetch) |
| E22 | ISTAT: nel 2021/22 erano attivi 13.518 nidi e servizi integrativi con 350.307 posti autorizzati. Circa metà dei servizi è privata. | [fatto] | https://www.istat.it/it/files/2023/11/REPORT-ASILI2021-2022.pdf | 2026-11-20 | sì (pdftotext) |
| E23 | Rette dei nidi privati: media di circa 620-640 €/mese (indagine Altroconsumo su 350 nidi privati in 8 città). | [fatto] (da sintesi di ricerca) | https://www.altroconsumo.it/vita-privata-famiglia/mamme-e-bimbi/news/inchiesta-asili-nido | 2026-11-20 | no |
| E24 | Open data frammentati e vecchi: su dati.lombardia.it la ricerca "asili nido" restituisce un solo dataset (Comune di Bergamo), aggiornato l'ultima volta il 22/06/2016. Il MIM pubblica invece l'anagrafica delle scuole statali e paritarie (DS0400, DS0410…). | [fatto] | https://www.dati.lombardia.it/api/catalog/v1?q=asili%20nido ; https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Scuole | 2026-11-20 | sì (API) |
| E25 | Yoopies (FR, babysitter e assistenza a domicilio): ricavi stimati da Latka in circa 13,4 M$ (ottobre 2024) e 186 dipendenti. Raccolta di 4 M€ nel 2017. | [stima] di terzi | https://getlatka.com/companies/yoopies ; https://www.frenchweb.fr/yoopies-leve-4-millions-deuros-pour-dominer-le-marche-europeen-des-services-a-la-personne/298104 | 2026-11-20 | no |
| E26 | Il valore di una festa giustifica una commissione o un prezzo per lead: con un pacchetto medio di circa 450 €, un 10% vale circa 45 € a festa prenotata. | [stima] (calcolo su E17) | ragionamento | — | — |

---

## 3) Distribuzione dei risultati / numeri chiave

### Piattaforme estere (vive, chiuse, acquisite)
| Piattaforma | Paese | Stato | Modello e cifre | Lezione |
|---|---|---|---|---|
| kidsgo | DE | viva (listino 2024-2026) | Abbonamento della struttura 1,50-49 €/mese più gestionale "kurVe", banner e newsletter (E1, E2) | **Directory + gestionale** in bundle: listino basso ma ricorrente |
| Kindaling | DE/AT/CH | viva | Commissione sulle prenotazioni di corsi e campus, quota annua per feste e servizi, pubblicità (E5) | Copre i campus di tutte le vacanze → **la stagionalità si diluisce** |
| Happity | UK | viva | 72-250 £/anno più commissione dell'1-2,5% più posizioni in evidenza a 1 penny per impressione (E3, E4) | Verticale stretto (0-5 anni) che monetizza bene |
| Hoop | UK | **chiusa a luglio 2020**, riaperta a ottobre 2022 | Inserimento gratuito; i ricavi non sono pubblicati (E8) | Rischio di shock della domanda; modello senza listino |
| Winnie | USA | viva (pagine aggiornate a giugno 2026 nei risultati) | Lead → abbonamento per capienza; oltre 20 M$ raccolti (E6, E7) | Catalogo avviato con **dati pubblici di licenza** (analogo allo scraping) |
| KidPass | USA | **acquisita** (BEGiN, 2021) | Abbonamento per i genitori da 49 $/mese più commissione, 16,25 M$ raccolti (E9) | Il lato genitori ad abbonamento non ha retto da solo (inferenza) |
| Sawyer | USA | **acquisita** (DaySmart, data da verificare) | Marketplace → SaaS per le strutture (E10) | Il valore si sposta sul **software per le strutture** |
| Mumsnet | UK | viva | Pubblicità, circa 8 milioni di utenti unici al mese (E11) | Modello basato sulla community, non replicabile senza pubblico |
| Netmums | UK | in calo (stima di terzi) | Pubblicità (E12) | I contenuti generici per genitori perdono traffico: servono **dati locali strutturati**, non articoli |
| Yoopies | FR | viva | Babysitter; circa 13 M$ di ricavi stimati (E25) | Da evitare in Italia: tocca l'intermediazione di lavoro (vincolo del brief) |

**Distribuzione:** su 9 piattaforme estere osservate, 4 sono vive e autonome con un listino per le strutture (kidsgo, Kindaling, Happity, Winnie), 2 sono state acquisite (KidPass, Sawyer), 1 ha chiuso e riaperto (Hoop) e 1 è in calo (Netmums). Nessuna fallita in modo definitivo tra quelle verificate; Kidiwe (FR) non ha potuto essere verificata. **Il campione è sbilanciato verso chi ha raccolto capitali** e non rappresenta le piccole directory locali chiuse senza notizia.

### Italia
| Attore | Cosa fa | Cifre |
|---|---|---|
| BeMyHero | Preventivi per le feste via WhatsApp | PRO da 9,90 €/mese; 150 o 4.074 professionisti (dati incoerenti) (E13, E14) |
| RomaperBambini / MilanoperiBambini | Portali editoriali locali | 20 € a evento; 80 mila pagine viste al mese (E15) |
| Kid Pass | Portale family-friendly e magazine | Nessun listino pubblico (E16) |
| Viaggiapiccoli | Articoli per città | Affiliazione (vedi F3) |
| Bimbi a Festa | Catalogo feste | Il dominio non risponde (curl 000, 2026-11-20) |
| BonusX | Bonus | 19,95-299,95 €/anno (E21) |

---

## 4) Idee concrete (le migliori per questo profilo)

### Idea 1 — "Feste di compleanno per bambini" per città e quartiere (la testa di ponte consigliata)
- **Cosa:** directory strutturata di location (ludoteche, parchi gioco al coperto, fattorie didattiche, musei, piscine, sport) e di animatori, con **pacchetti, prezzo, numero di bambini, età e disponibilità del sabato**, e un modulo unico di richiesta preventivo inviato a 3-5 strutture.
- **Chi paga:** le location e gli animatori.
- **Quanto:** riferimenti reali sono 9,90 €/mese (BeMyHero PRO), 15-49 €/mese (kidsgo), 9-25 £/mese (Happity) e 20 € a evento (RomaperBambini). Una proposta [stima]: gratis con contatti limitati; "Pro" a 19-29 €/mese con contatti illimitati e posizione in evidenza nel quartiere; oppure 5-10 € a contatto qualificato. La giustificazione [stima]: una festa vale 319-669 € (E17), quindi un contatto ne vale almeno 20-40.
- **Primi 100 clienti:** lo scraping precompila 2.000-4.000 schede in 10 città (siti, listini PDF, pagine "feste"). L'operatore chiama o scrive alle strutture con una scheda già pronta e "N richieste ricevute nel tuo quartiere questo mese". Si inizia con un periodo gratuito e si converte quando arrivano contatti. [stima] Con un 3-5% di conversione su 3.000 strutture si ottengono 90-150 clienti.
- **Vantaggio dello scraping:** estrarre pacchetti e prezzi da PDF e pagine eterogenee con l'AI. Nessun concorrente italiano mostra prezzi confrontabili per quartiere (BeMyHero lavora a preventivo).
- **Domanda:** 19/20 città; 26 varianti a-z solo per Roma, con quartieri; intento transazionale ("location per", "sale per", "offerte"). La domanda c'è tutto l'anno perché i compleanni sono distribuiti nell'anno [stima ragionata, senza Trends].
- **Concorrenti:** BeMyHero (il più vicino), Google Maps, portali locali, Virgilio.
- **Ricavo a regime [stima]:** 300 clienti × 25 €/mese = 90 k€/anno, sufficienti per l'obiettivo A.

### Idea 2 — "Kindaling italiano": corsi 0-12 e campus di tutte le vacanze
- **Cosa:** corsi (acquaticità, musica, inglese, sport, coding) e campus di Natale, Pasqua, ponti ed estate, con orari, età, prezzo e quartiere. Assorbe F3 e F5 e ne diluisce la stagionalità, come fa Kindaling (E5).
- **Chi paga:** associazioni sportive, scuole di musica e lingue, gestori dei campus.
- **Quanto:** livelli in stile kidsgo a 0, 15, 29 e 49 €/mese (E1), più eventuale commissione sulle prenotazioni dell'1-2,5% come Happity (E3).
- **Primi 100 clienti:** come l'Idea 1. In più si vende alle strutture un **"widget orari"** gratuito da incorporare nel loro sito, che porta dati e link.
- **Vantaggio dello scraping:** orari e prezzi stanno in PDF, pagine e social. L'aggiornamento stagionale è automatizzabile.
- **Domanda:** "corsi per bambini [città]" 20/20, "acquaticità neonatale [città]" 20/20 (E18).
- **Concorrenti:** Google Maps, portali locali, gestionali per ASD. Nessuna directory italiana strutturata trovata.
- **Nota sullo screening:** F5 era stato scartato perché "senza listino". All'estero il listino esiste ed è pubblico (E1, E3, E5); in Italia resta da provare.

### Idea 3 — Nidi privati e micronidi: rette, posti e open day, con lead per le strutture (modello Winnie)
- **Chi paga:** i nidi privati, cioè circa metà dei 13.518 servizi (E22). La retta media è di circa 620-640 €/mese (E23), quindi un bambino iscritto vale circa 6.000 €/anno.
- **Quanto:** Winnie è partita a lead ed è passata ad abbonamento per capienza (E6). [stima] In Italia 15-30 € a contatto qualificato, oppure 29-59 €/mese.
- **Primi 100 clienti:** lo scraping dei registri regionali e comunali delle autorizzazioni (dove pubblicati) e dei siti dei nidi; contatti mirati al periodo degli open day (gennaio-maggio).
- **Vantaggio dello scraping:** i dati sono dispersi e vecchi (il dataset lombardo è fermo al 2016, E24), come i registri di licenza che hanno avviato Winnie (E7).
- **Rischi:** l'app IO ha il modello "Asilo nido" e INPS prepara la mappa dei nidi (F1). Queste coprono però soprattutto il pubblico e il bonus, non il confronto tra privati con rette e posti (non verificato).
- **Concorrenti:** comuni, Google Maps, portali generalisti.

### Idea 4 — Strato SEO "agevolazioni comunali per famiglie" (a supporto di 1-3, non come prodotto a sé)
- Pagine per comune su bonus bebè comunali, family card, riduzioni per famiglie numerose e contributi per campus, ricavate dallo scraping degli albi e delle pagine dei comuni. La domanda esiste per singolo comune (E20). BonusX in homepage parla di "bonus pubblici" e non menziona i comunali (E21).
- **Monetizzazione:** indiretta, porta traffico verso le Idee 1-3. Diretta solo come segnalazione dei campus e servizi convenzionati.
- **Onestà:** C1 resta scartato come prodotto ad abbonamento per i genitori.

### Idea 5 (opzionale, internazionale) — Software dati per le directory family estere
- Non consigliata: vendere dati di scraping a terzi comporta la penalità −8. La cito solo per completezza.

**Raccomandazione:** Idea 1 come prodotto d'ingresso, nel giro di 12 mesi Idea 2 sulla stessa base di strutture, Idea 4 come traffico. L'Idea 3 va tenuta in osservazione finché IO/INPS non chiariscono cosa copre la mappa dei nidi.

---

## 5) Criteri di confutazione, uno per uno (dal punto di vista dell'Entusiasta)

| Criterio | Esito secondo me | Perché |
|---|---|---|
| Bisogno già coperto (mappe generaliste, app family-friendly, BonusX, IO) | **Scattato per bonus e norme; non scattato per feste, corsi e campus** | BonusX e IO coprono i bonus nazionali (E21; screening C1). Per feste e corsi Google Maps mostra le strutture ma non pacchetti, prezzi ed età (non verificato con un test sistematico). L'unico concorrente diretto, BeMyHero, è piccolo e i suoi numeri sono incoerenti (E13, E14). |
| Dati non raccoglibili in modo affidabile | **Non scattato** | Listini PDF pubblici (E17), siti delle strutture, anagrafiche MIM (E24). Gli open data regionali sono vecchi, quindi lo scraping è un vantaggio e non un ostacolo. Winnie ha avviato il catalogo allo stesso modo (E7). Il rischio di aggiornamento resta: i prezzi cambiano ogni anno. |
| Nessun pagatore con cifre reali | **Non scattato (ma debole in Italia)** | Listini pubblici esteri: kidsgo 1,50-49 €/mese, Happity 72-250 £/anno, Winnie pay-per-lead. In Italia: BeMyHero PRO 9,90 €/mese, RomaperBambini 20 € a evento. **I prezzi italiani osservati sono bassi.** |
| Gli scarti dello screening (F1, F2, F4, C1) si confermano | **F2, F4, C1 confermati; F1 attenuato; F5 da rivedere** | Non contesto F2, F4 e C1. Su F1 Winnie dimostra che le strutture pagano per i contatti (USA), ma una cifra italiana non c'è ancora. Su F5 il "nessun listino" è smentito all'estero (kidsgo, Happity, Kindaling). Su F3 il modello Kindaling (campus di tutte le vacanze) riduce la penalità di stagionalità, e le feste di compleanno sono una categoria non stagionale finora non esaminata. |

---

## 6) Cosa non ho trovato / limiti

- **Volumi assoluti di ricerca e stagionalità:** solo autocompletamento (Trends non usato perché bloccato in precedenza). Il fatto che le feste siano "tutto l'anno" è una stima.
- **Ricavi reali** di kidsgo, Kindaling, Happity e BeMyHero: non trovati. I numeri di utenti sono autodichiarati.
- **Quante strutture italiane pagano oggi** per visibilità di feste e corsi: non trovato. Il listino BeMyHero è un prezzo d'ingresso, non un dato di conversione.
- **Test di Google Maps e dei chatbot** sulle feste per quartiere con prezzi: non eseguito.
- **Kidiwe/Kidiwi (FR) e Familienkarte (DE):** non verificati. Family Welcome, Bimbi a bordo e Chicco come directory: non trovati come prodotti di ricerca di luoghi (la ricerca non ha restituito un'app "Family Welcome").
- **Stato e data dell'acquisizione di Sawyer** e dettagli KidPass: dalle sintesi di ricerca, non lette direttamente.
- **Rischio legale:** il diritto *sui generis* è basso se si estraggono fatti (prezzi, orari) da molte fonti. Le foto vanno chieste alle strutture, non copiate. Gli animatori sono lavoratori autonomi o imprese: la richiesta di preventivo non è intermediazione di lavoro, ma un marketplace di babysitter sì (escluso).

## 7) Conteggio
- **WebSearch usate: 17** su 20.
- **Fetch diretti:** 9 WebFetch e circa 20 letture con curl/pdftotext/API (kidsgo, Happity Help Center, Kindaling, RomaperBambini, Kid Pass, BeMyHero, listino Bubble, ISTAT, dati.lombardia, dati.istruzione), più circa 600 chiamate di autocompletamento Google.
