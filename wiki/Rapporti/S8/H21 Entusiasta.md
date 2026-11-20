# H21 – Lista regali "governata" dai genitori · Rapporto dell'Entusiasta

*Ruolo: costruire il caso più forte possibile per l'ipotesi. Data di accesso di tutte le fonti: 2026-11-20.*

## 1) Tesi in 5 righe

1. Il modello "lista regali universale" funziona su larga scala all'estero: Babylist (USA) ha superato i 750 M$ di ricavi nel 2025 ed è usata dal 22% delle famiglie USA con un neonato. GoWish (Danimarca) supera il 50% di penetrazione in patria ed è redditizia. Mes Envies (Francia) dichiara il 20% delle donne incinte. **In Italia non ho trovato un campione locale equivalente.**
2. In Italia la lista nascita è ancora **legata al singolo negozio** (Prénatal, Chicco, Amazon). Per i **compleanni** e il **regalo di classe** non esiste uno strumento strutturato: si fa su WhatsApp, con attriti documentati dalla stampa (pressione, esclusione, liste di chi non paga).
3. Il punto debole è la monetizzazione: Amazon.it paga il **3%** su prima infanzia e giocattoli, Mondadori Store il 5% sui giocattoli. Serve **volume**, e il volume può arrivare dalla **viralità della colletta di classe**: ogni colletta tocca 15-25 famiglie, ogni bambino ne genera una all'anno.
4. Il denaro non va toccato. Le collette PayPal in Italia sono gratuite per chi contribuisce in euro, quindi il prodotto resta un **coordinatore informativo**: scelta del regalo, voto, registro di chi ha pagato, link d'acquisto. Così si evita l'ambito licenze.
5. Lo scraping serve davvero per catalogo multi-negozio, prezzo migliore, disponibilità e deduplica (stesso prodotto con nomi o EAN diversi). Non serve per la distribuzione, che resta il rischio principale.

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| 1 | Babylist: ricavi 2025 oltre 750 M$ (+45% a/a), 8° anno consecutivo in utile, oltre 10 M di acquirenti nel 2025, circa 22% delle famiglie USA con un neonato, oltre 100 M di regali dalla lista. *Autodichiarato (comunicato stampa)* | [fatto] | https://www.wboc.com/online_features/press_releases/babylist-tops-750-million-in-revenue-in-2025-increasing-45-as-it-expands-ecosystem-for/article_abd4a394-ef84-5c12-86d2-0d4b37190e0f.html | 2026-11-20 | sì |
| 2 | Babylist: oltre 500 M$ di ricavi a metà 2025, meno di 50 M$ raccolti in 14 anni, fondata nel 2011 da un'ex ingegnera Amazon; si definisce registry, e-commerce e "affiliate sales business" | [fatto] | https://fortune.com/2025/06/24/babylist-registry-founder-retail-500-million-sales/ | 2026-11-20 | sì |
| 3 | Babylist "approaches 1 billion in sales as it eyes IPO" | [fatto] (solo titolo) | https://www.bloomberg.com/news/articles/2026-03-26/babylist-approaches-1-billion-in-sales-as-it-eyes-ipo-next-year | 2026-11-20 | no (titolo nei risultati di ricerca) |
| 4 | Babylist all'inizio guadagnava circa il 4% del venduto via link (dal seed deck); la ripartizione attuale tra affiliazione e negozio proprio non è pubblica | [fatto] di seconda mano | https://somethingbeyond.substack.com/p/babylist-a-sleeping-giant-in-the (tramite estratto di ricerca); https://www.modernretail.co/marketing/how-babylist-is-building-a-media-empire-for-new-parents/ | 2026-11-20 | Modern Retail sì; Substack no |
| 5 | Babylist Cash Fund: il denaro va direttamente su Venmo/PayPal della famiglia e Babylist non gestisce le transazioni. Il Group Gift diventa credito nel negozio Babylist | [fatto] | https://help.babylist.com/hc/en-us/articles/218112227-What-are-Cash-Funds ; https://help.babylist.com/hc/en-us/articles/360052390974-What-is-Group-Gifting | 2026-11-20 | no (estratti di ricerca) |
| 6 | GoWish: oltre 13,6 M di utenti registrati, circa 6,2 M negli USA, oltre 3,5 M in Danimarca (oltre 50% di penetrazione), circa 1 M nel Regno Unito; utile netto FY2024 di 1,7 M$; circa 65.000 partnership di affiliazione; 90 persone; nata nel 2015 da PostNord. L'Italia non è citata | [fatto] (utenti autodichiarati) | https://techcrunch.com/2025/11/07/gowishs-shopping-and-wishlist-app-is-having-its-biggest-year-yet/ | 2026-11-20 | sì |
| 7 | Mes Envies (FR): 119.821 liste contro 610.065 nascite INSEE nel 2025 (circa 20%), "1.500.000 autori di liste", 100% gratuito, multi-negozio, prenotazione anti-doppione, cagnotte senza commissioni, tema compleanno. *Autodichiarato* | [fatto] | https://www.mesenvies.fr/ | 2026-11-20 | sì |
| 8 | Amazon.it Associates: prima infanzia e giocattoli non compaiono tra le categorie con tasso proprio e ricadono in "Tutte le altre categorie 3,0%"; Moda 6%; Libri e Casa 5%; buoni regalo e carte regalo 0% | [fatto] | https://programma-affiliazione.amazon.it/help/node/topic/GRXPHT8U84RAYDXZ | 2026-11-20 | sì (curl) |
| 9 | Mondadori Store (via Awin): giocattoli e giochi da tavolo 5%, libri 7% | [fatto] | https://www.mondadoristore.it/affiliazioni | 2026-11-20 | sì |
| 10 | Stikets (etichette per bambini, Awin): commissione del 10% | [fatto] | https://ui.awin.com/merchant-profile/21985 (tramite risultati di ricerca) | 2026-11-20 | no |
| 11 | Lista nascita Amazon.it: 15% di sconto sugli articoli idonei (tetto di 300 € di risparmio, fino a 2.000 € di ordini), lista attiva da almeno 14 giorni, regalo di benvenuto | [fatto] (siti terzi; condizioni modificabili) | https://www.money.it/lista-nascita-amazon-cose-come-si-crea-funzionamento ; https://www.aranzulla.it/lista-nascita-amazon-come-funziona-1681811.html | 2026-11-20 | no (estratti di ricerca) |
| 12 | Liste nascita italiane mono-negozio: Chicco dà un buono del 10%; Prénatal dà un voucher del 5% per liste tra 500 e 1.000 € e del 10% sopra i 1.000 €; ci sono piccoli siti come Infanziabimbo, Culla del bimbo e Nido di Grazia | [fatto] | https://www.pianetamamma.it/il-bambino/shopping/liste-di-nascita-e-di-battesimo-dove-e-come-farla.html (aggiornata il 18.12.2024) | 2026-11-20 | sì |
| 13 | Happy Giftlist: lista universale gratuita, prenotazioni nascoste al proprietario, "modalità colletta", Secret Santa, app ed estensione Chrome. Nessun numero utenti | [fatto] | https://www.smartworld.it/app/happy-giftlist-lista-regali-babbo-natale-segreto-gratis.html (13/10/2026) | 2026-11-20 | sì |
| 14 | Joy (USA) offre una lista nascita universale con interfaccia in italiano | [fatto] | https://withjoy.com/baby-registry/?l=it-IT | 2026-11-20 | no |
| 15 | Collette PayPal Italia: massimo 10.000 € per colletta, 5 collette attive a persona, durata fino a 6 mesi, i partecipanti non devono avere un account | [fatto] | https://www.paypal.com/it/cshelp/article/cosa-sono-le-collette-help1197 | 2026-11-20 | sì |
| 16 | "Non sono previste commissioni per contribuire utilizzando euro in Italia" (collette PayPal) | [fatto] | https://www.paypal.com/it/digital-wallet/send-receive-money/money-pools (tramite estratto di ricerca) | 2026-11-20 | no |
| 17 | PayPal Money Pools chiuso nel Regno Unito nel 2021, nato un mercato di alternative (Collctiv, Thankbox) | [fatto] | https://wise.com/gb/blog/paypal-money-pool-alternatives | 2026-11-20 | no |
| 18 | Il regalo di classe crea attrito nelle chat dei genitori: paura di essere giudicati "tirchi"; gli insegnanti ricevono regali indesiderati | [fatto] (testimonianze, non dati) | https://www.ilpost.it/2023/12/05/cavallo-regali-natale-insegnanti/ | 2026-11-20 | sì |
| 19 | Le collette scolastiche possono "sfociare in conflitti" e "chi non dona viene inserito in elenchi condivisi nelle chat"; una scuola di Milano sostituisce il regalo di compleanno con un libro donato alla classe | [fatto] | https://www.editorialedomani.it/idee/cultura/collette-scolastiche-amplificatori-di-disuguaglianze-o-volano-di-comunita-e0nqqyv6 | 2026-11-20 | sì |
| 20 | Nelle chat di classe si crea spesso una chat separata per ogni compleanno e si raccolgono soldi per i regali | [fatto] (giornalistico) | https://www.panorama.it/attualita/dalle-chat-di-scuola-ai-vocali-infiniti-dieci-regole-doro-per-gestire-whatapp-in-modo-sano | 2026-11-20 | no |
| 21 | Il dibattito su una mamma che chiede soldi al posto dei giocattoli per la festa della figlia | [fatto] (esiste l'articolo) | https://www.orizzontescuola.it/festa-di-compleanno-la-mamma-chiede-soldi-al-posto-dei-giocattoli-per-la-figlia-sui-social-infuria-il-dibattito/ | 2026-11-20 | no (403) |
| 22 | Natale 2025: Federconsumatori e Altroconsumo stimano 208 € di regali a testa, di cui 80 € per bambini e ragazzi | [fatto] | https://www.altroconsumo.it/vita-privata-famiglia/viaggi-tempo-libero/news/spese-natale-italiani | 2026-11-20 | no |
| 23 | Mercato del giocattolo in Italia nel 2025: +6% a valore, +8% a unità (Circana); prima infanzia -3,1% (NIQ) | [fatto] | https://www.assogiocattoli.eu/news/datimercato2025/ | 2026-11-20 | sì |
| 24 | Mercato del giocattolo in Italia nel 2024 a circa 1,5 miliardi di euro (Circana) | [fatto] | https://www.assogiocattoli.eu/news/pressday2025_cs/ | 2026-11-20 | no |
| 25 | Nati in Italia nel 2025: 355.772 (-3,8%), di cui 174.842 primogeniti | [fatto] | https://www.istat.it/comunicato-stampa/natalita-e-fecondita-della-popolazione-residente-anno-2025/ | 2026-11-20 | sì |
| 26 | Elfster: gratuito, finanziato dall'affiliazione ("We may earn commissions") e dalla pubblicità | [fatto] | https://www.elfster.com/ | 2026-11-20 | sì |
| 27 | In Germania ci sono molte app Wunschzettel (StarSnoopy, bitte.kaufen, WishlistX con "cashback fino al 20%") | [fatto] | https://www.familie.de/testberichte/wunschzettel-apps-im-test/ | 2026-11-20 | no |

## 3) Distribuzione dei risultati e numeri chiave

**Vincitori all'estero (casi migliori)**
- **Babylist** [fatto]: oltre 750 M$, redditizia, poco capitale raccolto. È però un'azienda di 14 anni con magazzino, negozio proprio, linea salute e media: oggi l'affiliazione pura non spiega quei ricavi.
- **GoWish** [fatto]: 13,6 M utenti e 1,7 M$ di utile. Il rapporto tra utili e utenti è basso (circa 0,12 $/utente/anno) [stima: 1,7 M$ / 13,6 M]. **L'affiliazione su liste generaliste rende pochissimo per utente.** Va detto anche se ruolo è l'Entusiasta.
- **Mes Envies** [fatto, autodichiarato]: 20% delle nascite in Francia, gratuito. Il modello di ricavo non è dichiarato.

**Distribuzione e fallimenti**
- Ci sono decine di app wishlist gratuite e simili tra loro (Giftful, Regalista, GiftRoom, Happy Giftlist, WishUpon, Moonsift) [fatto, elenchi dagli App Store]. Nessun numero pubblico per la maggior parte. È probabile una lunga coda di progetti con pochi utenti [stima].
- PayPal ha chiuso Money Pools nel Regno Unito (2021), segno che la colletta pura non era prioritaria nemmeno per PayPal [fatto, fonte #17]. Mancano dati sulle chiusure di startup di liste regali in Italia: non trovato.

**Dimensionamento per l'Italia** (tutte [stima], ragionamento esplicito)
- **Liste nascita.** 355.772 nati; i primogeniti (174.842) sono quelli che fanno davvero una lista. Con il 10-20% di adozione di una lista universale (la Francia è al 20%) si ottengono 17-35 mila liste all'anno. Ipotizzo un valore regalato di 500-800 € (le soglie Prénatal partono da 500 €), di cui il 40% comprato online tramite link tracciato, al 3-5%: **6-16 € per lista**, cioè 0,1-0,5 M€ all'anno a regime. È poco, e la concorrenza dello sconto Amazon del 15% è forte.
- **Compleanni e colletta di classe.** Bambini tra 3 e 10 anni: circa 3,3 M (8 coorti da circa 410 mila di media 2016-2023, ipotesi da verificare su ISTAT). Se il 40% ha ogni anno una festa con regalo di gruppo, sono circa **1,3 M di collette all'anno**. Con 10 € a testa per 15 famiglie, circa 150 € per colletta: **circa 200 M€ di spesa all'anno** in regali di gruppo per bambini. A una commissione media del 3,5% su metà degli acquisti fatti online, il bacino teorico è di circa 3,5 M€. A una quota dell'1-3% del mercato corrispondono **35-105 k€ all'anno**, cioè l'obiettivo A.
- **Viralità.** Ogni colletta raggiunge in media 15-25 genitori [stima]. Se l'1-2% di loro diventa a sua volta organizzatore entro un anno (al compleanno del proprio figlio), il coefficiente virale annuo è di 0,2-0,4. Non basta da solo, ma l'uso si ripete: la stessa classe ha circa 20 compleanni all'anno.

## 4) Idee concrete (le migliori per questo profilo)

### Idea 1 – "Colletta di classe" coordinata (prodotto di punta)
**Cosa.** Una web app senza download che parte da un link in WhatsApp.
- Il genitore del festeggiato (o il rappresentante di classe) apre la colletta e indica età, budget a testa, interessi, "cose da evitare" e i regali già ricevuti, per evitare doppioni.
- Il sistema propone 3 regali presi da un catalogo multi-negozio scrapato (Amazon, Mondadori, Toys Center, Feltrinelli, Città del Sole, Lego), con il prezzo migliore e la disponibilità aggiornati.
- I genitori votano. L'organizzatore segna chi ha pagato; il denaro passa **fuori dalla piattaforma**, via collette PayPal, link Satispay, bonifico o contanti.
- Un clic porta all'acquisto con link affiliato. Il riepilogo mostra le quote dei pagamenti agli altri genitori, ma non li espone ad altri.

**Chi paga e quanto**
- Affiliazione: 3% su Amazon.it per giocattoli e prima infanzia [fatto]; 5% su giocattoli e 7% su libri da Mondadori Store [fatto].
- Accordi diretti con catene e marchi di giocattoli [stima: 5-10% o fee per lead].
- Funzioni premium per l'organizzatore a 1,99-2,99 € a colletta (biglietto digitale, promemoria automatici, foto ricordo) [stima del prezzo, nessun benchmark italiano trovato].
- Sponsorizzazioni di marchi giocattolo nelle proposte [stima].

**I primi 100 clienti senza pubblico**
1. La rete personale e i collaboratori con figli: 10-20 classi seme.
2. Ogni colletta è il canale di acquisizione, perché il link porta il marchio a 15-25 genitori.
3. SEO su intenzioni di ricerca a coda lunga ("regalo compagno di classe 6 anni 10 euro", "colletta regalo compleanno come fare"), con pagine generate da dati di prezzo veri e aggiornati.
4. Associazioni genitori e comitati scolastici.

**Vantaggio delle competenze.** Scraping multi-negozio di prezzo e disponibilità, normalizzazione e deduplica per EAN e titolo, ranking delle idee per età e budget, pagine SEO programmatiche con dati freschi. L'AI generalista può suggerire "un Lego" ma non il prezzo migliore, la disponibilità di oggi e la proposta già votata.

**Concorrenti.**
- Happy Giftlist: gratuito, ha la modalità colletta.
- PayPal Collette: solo denaro, nessuna scelta del regalo.
- WhatsApp e i sondaggi WhatsApp: il vero concorrente.
- Elfster e GoWish: non presenti con un prodotto mirato all'Italia.

**Rischi.**
- Molte collette finiscono in contanti o buono, o con un acquisto in negozio: si perde l'attribuzione.
- Commissioni basse.
- Stagionalità scolastica.
- Dati di minori: memorizzare solo nome ed età, senza foto. Un approccio di minimizzazione GDPR è fattibile.
- Rischio reputazionale se lo strumento "espone" chi non paga: mostrare le quote solo all'organizzatore.

### Idea 2 – Lista "governata" multi-occasione per nonni e parenti (nascita, compleanni, Natale)
**Cosa.** I genitori creano un profilo del bambino con regole: budget per persona, categorie no, taglie attuali, "abbiamo già" (deduplica automatica tramite catalogo), un regalo per ogni nonno. Il link è semplificato per i nonni: un clic, prezzo migliore, consegna a casa. Gli avvisi di calo prezzo arrivano a chi deve regalare. A differenza di Prénatal, Chicco e Amazon, la lista vive anche dopo la nascita e si riapre a ogni compleanno.

**Chi paga.** Affiliazione 3-5% [fatto]; programmi diretti delle catene di prima infanzia (non verificati: non trovato su Awin per Prénatal e Chicco); premium famiglia a 19-29 €/anno per più bambini, storico, taglie e calendario delle ricorrenze [stima, WTP non verificata].

**Primi 100 clienti.** Effetto rete dell'Idea 1: chi usa la colletta crea il profilo del figlio. Più SEO "lista nascita multi negozio" e "lista regali compleanno bambino".

**Vantaggio delle competenze.** Catalogo unificato, matching prodotti, storico prezzi, avvisi di disponibilità e cambio taglia.

**Concorrenti.** Amazon Lista Nascita (sconto 15%, barriera alta sulla nascita), liste dei negozi, Joy, Happy Giftlist, GoWish (rischio che arrivi in Italia).

**Rischi.** Bassa disponibilità a pagare; Amazon domina il momento della nascita. Per questo partire dai compleanni, non dalla nascita.

### Idea 3 – Lista nascita e regali white-label per negozi indipendenti di giocattoli e prima infanzia (B2B SaaS)
**Cosa.** I negozi indipendenti spesso gestiscono la lista su carta o al telefono [stima, da verificare]. Si offre loro un modulo lista nascita e compleanno con catalogo importato via scraping del loro sito o del listino, prenotazioni, buono finale automatico (come il 5-10% di Prénatal e Chicco), integrazione con i pagamenti del negozio (il denaro va al negozio, che è il venditore: nessun problema di licenze).

**Chi paga.** Il negozio, 29-79 €/mese [stima]. Per comparazione esistono app Shopify specializzate come MyRegistry e Swym Gift Lists [fatto, presenti sull'App Store di Shopify; prezzi non verificati].

**Primi 100 clienti.** Vendita diretta: elenchi dei negozi (Assogiocattoli, Google Maps scrapato), telefonate di un collaboratore e fiere di settore. È il canale più prevedibile senza pubblico.

**Vantaggio delle competenze.** Import automatico di cataloghi disordinati.

**Rischi.** Numero di negozi indipendenti in calo, abbandoni, poco tempo dei negozianti. 100 negozi a 49 €/mese fanno circa 59 k€ all'anno: obiettivo A raggiungibile solo con molti clienti. È però un asset vendibile (ricavo ricorrente, obiettivo C).

### Idea 4 – Motore SEO e dati "regali per bambini per età e budget" a supporto delle Idee 1 e 2
Pagine programmatiche con prezzi veri, disponibilità e storico prezzi (stile Keepa) per circa 5-10 mila giocattoli e prodotti di prima infanzia, con classifiche per età e budget e un pulsante "crea la colletta con questo regalo". Monetizzazione: affiliazione. Da sola è debole: rischio AI e Google, commissioni basse. Come canale di acquisizione per l'Idea 1, invece, ha senso. Il vantaggio dello scraping qui è massimo.

### Idea 5 (opzionale) – "Regalo-esperienza" e cash fund informativo per nonni
Fondi per corsi, sport e libretto di risparmio: il link porta direttamente all'IBAN o al PayPal del genitore, come fa Babylist con Venmo/PayPal [fatto, #5]. Zero rischio licenze, ma anche zero ricavi diretti. Utile solo come funzione di fidelizzazione dentro l'Idea 2.

**Dove lo scraping aiuta davvero (onestà)**
- **Sì:** catalogo multi-negozio, prezzo migliore, disponibilità, avvisi, deduplica (EAN e titolo), SEO programmatica, import di cataloghi per l'Idea 3.
- **No:** acquisizione di utenti (è un problema sociale e virale), fiducia dei genitori, attribuzione delle commissioni. La lista regali in sé è una commodity tecnica: l'esistenza di decine di app gratuite lo dimostra.

## 5) Criteri di confutazione, uno per uno (dal punto di vista dell'Entusiasta)

1. **"Le liste esistenti coprono già il bisogno."** *Parzialmente vero per la nascita, falso per compleanni e regalo di classe.*
   - Nascita: le liste mono-negozio di Prénatal e Chicco e la lista Amazon (sconto 15%) coprono bene il momento [fatto #11-12].
   - Liste universali in italiano: esistono (Happy Giftlist, Joy), ma senza numeri pubblici di diffusione. Non ho trovato un campione italiano paragonabile a Mes Envies o GoWish [non trovato].
   - Compleanni e regalo di classe: nessuno strumento dedicato trovato. La pratica avviene in WhatsApp, con attriti documentati [fatto #18-21].
   - **Non confutata** per la nicchia "colletta di classe e compleanni".
2. **"Commissioni di affiliazione in Italia troppo basse."** *Vero come dato.* Il 3% di Amazon.it per giocattoli e prima infanzia [fatto #8] è basso, e le carte regalo sono allo 0%. Il 5% di Mondadori [fatto #9] è un po' meglio.
   - La salvezza è il **volume ricorrente e virale** (1 colletta per bambino all'anno), più accordi diretti e premium.
   - Per l'obiettivo A servono circa 15-25 mila collette all'anno con acquisto tracciato [stima: 150 € × 3,5% ≈ 5 € a colletta, più premium].
   - È ambizioso ma non assurdo: è circa l'1-2% del bacino stimato.
   - **Mezza confutazione:** il modello solo-affiliazione è fragile; serve un ricavo aggiuntivo.
3. **"Non c'è spazio per un nuovo entrante."** *Falso, a mio giudizio.*
   - GoWish dimostra che un nuovo entrante può superare il 50% di penetrazione in un Paese e poi conquistare gli USA [fatto #6].
   - Mes Envies mostra un leader locale per lingua e cultura [fatto #7].
   - L'Italia non ha un leader locale noto [non trovato] e ha un rituale specifico (colletta di classe) che i player esteri non modellano.
   - Il rischio vero è che GoWish o Amazon entrino in forza.
   - **Non confutata.**
4. **Vincolo licenze di pagamento** (dal brief). È evitabile: il prodotto resta informativo e il denaro passa via collette PayPal (gratuite per chi contribuisce in euro in Italia [fatto #16]), link Satispay o bonifico. È lo stesso schema del Cash Fund Babylist [fatto #5]. Stripe Connect è da evitare all'inizio: aggiunge complessità KYC e potenziali profili da istituto di pagamento.

## 6) Cosa non ho trovato / limiti

- **Ripartizione dei ricavi di Babylist** tra affiliazione, negozio proprio e media: non pubblica. Il "4%" iniziale è di seconda mano.
- **Fee Babylist** sul Group Gift: non trovata.
- **Commissioni di Prénatal, Chicco, Toys Center, Bimbostore e Città del Sole** su Awin o altri network: non trovate (il portale Awin richiede login).
- **Dati quantitativi sulla diffusione delle collette di compleanno in Italia** (% di classi, importo medio a testa): non trovati. Ho solo testimonianze giornalistiche; i 10 €/testa e i 15 partecipanti sono mie stime.
- **Quota online del mercato giocattoli in Italia:** non trovata (una cifra del 25-30% Amazon è citata da Avvenire senza fonte; non usata).
- **Numeri di utenti di Happy Giftlist e Joy in Italia:** non trovati.
- **Dati su Giftster, MyRegistry, Zola, Little Birdie, Milestone e Mylittlelist:** non approfonditi. Il sito di Giftster ha risposto 403.
- **Pagine non lette direttamente:** il sito di Prénatal (redirect), lista-nascita.it (503) e l'articolo di Orizzonte Scuola (403).
- **Disponibilità a pagare** per il premium organizzatore o famiglia: nessun benchmark italiano trovato. Da testare con smoke test.

## 7) Conteggio

- **WebSearch usate:** 20 su 20.
- **Fetch diretti (WebFetch o curl):** circa 22 (di cui 4 falliti: Amazon lista nascita 503, Prénatal redirect, Giftster 403, lista-nascita.it 503, Orizzonte Scuola 403).
