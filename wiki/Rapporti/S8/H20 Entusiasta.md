# H20 – Nonni e famiglia allargata come utenti: rapporto dell'Entusiasta

*Ruolo: costruire il caso più forte possibile per l'ipotesi. Data di accesso a tutte le fonti: 2026-11-20.*

## 1) Tesi in 5 righe

1. Il bisogno "i nonni vogliono vedere i nipoti" è monetizzato su larga scala, ma **solo dove il nonno non deve fare nulla**: in Francia la gazzetta cartacea Famileo dichiara 280.000 famiglie e prezzi da 5,99 a 10,99 €/mese. All'estero vendono bene anche le cornici connesse e i libri di storie (Storyworth, oltre un milione di libri dichiarati).
2. In Italia questo formato **non esiste**: Famileo e Neveo non hanno una versione italiana e non ho trovato concorrenti locali. Intanto il 64% degli over 75 non usa internet (ISTAT 2025), ed è proprio il pubblico che riceve la carta.
3. Chi paga quasi mai è il nonno. Pagano figli e nipoti (come regalo) oppure le RSA, che sono 12.987 in Italia. L'ipotesi regge se si legge "nonni come destinatari": paga la famiglia, il nonno riceve.
4. L'idea più forte per il profilo è una "gazzetta dei nonni" italiana. Le foto arrivano dal gruppo WhatsApp di famiglia, che esiste già, e il primo canale di vendita sono le RSA (B2B2C, come ha fatto Famileo all'inizio). Seguono un servizio di storie di vita in italiano e prodotti stampati stagionali.
5. Lo scraping dà un vantaggio **modesto**: serve a costruire la lista delle RSA e a monitorare prezzi e concorrenti. Contano di più lo sviluppo (integrazione con WhatsApp, impaginazione automatica, AI vocale) e un operatore che gestisca stampa, logistica e vendite alle RSA.

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| 1 | Famileo (FR) scrive in home page "Déjà 280 000 familles conquises". Prezzi mensili: 5,99 / 6,99 / 7,99 / 10,99 €, più un'opzione da 39 €. Consegna in tutto il mondo allo stesso prezzo | [fatto] (numero autodichiarato) | https://www.famileo.com/famileo/fr-FR/ | 2026-11-20 | sì (curl) |
| 2 | Piani UK/EU di Famileo: Monthly 5,99 €, Monthly+ 6,99 €, Bi-monthly 9,99 €, Weekly 17,99 € | [fatto] | https://www.famileo.com/famileo/en-GB/ | 2026-11-20 | sì (curl) |
| 3 | Lingue del sito Famileo: FR, NL, ES, EN, DE. L'italiano manca e /it-IT/ restituisce 404 | [fatto] | https://www.famileo.com/famileo/it-IT/ | 2026-11-20 | sì (curl, 404) |
| 4 | App Store FR di Famileo: 260.000 famiglie abbonate, 1,8 milioni di utenti, 4,8/5 su circa 5.300 valutazioni. Nelle strutture per anziani l'abbonamento è offerto dalla struttura | [fatto] (autodichiarato) | https://apps.apple.com/FR/app/id1018182135 | 2026-11-20 | sì |
| 5 | Famileo nel 2021: 160.000 famiglie "utilizzatrici" (quasi raddoppiate con il Covid), circa 40.000 gazzette alla settimana, circa 40 dipendenti, nata lavorando con le EHPAD (case di riposo), fondata nel 2014 a Saint-Malo | [fatto] (dati della stampa, fonte l'azienda) | https://fr.aleteia.org/2021/07/20/lincroyable-succes-de-famileo-la-startup-qui-rapproche-les-familles/ | 2026-11-20 | sì |
| 6 | Famileo ha raccolto in totale 6,8 M$ (Ring Capital, MAIF Avenir, Epopée) | [fatto] (aggregatore) | https://www.cbinsights.com/company/famileo | 2026-11-20 | no (estratto di ricerca) |
| 7 | Fatturato Famileo 2022: 11 M€ | [fatto non verificato] | https://businesscoot.com/en/company/famileo | 2026-11-20 | no (pagina 404 al fetch, solo estratto) |
| 8 | Altre fonti Famileo: "2 milioni di utenti, 280.000 famiglie abbonate, 2.700 strutture medico-sociali equipaggiate, 15 milioni di gazzette inviate" | [fatto] (autodichiarato, pagina senza data) | estratto di ricerca, pagina non identificata con certezza | 2026-11-20 | no |
| 9 | Neveo (BE/FR): primo giornale 4,95 €, abbonamento da 12,99 €/mese fino a 30 foto, 500.000 giornali stampati, 20 milioni di foto, 6 lingue dichiarate, nessun hreflang italiano, /it restituisce 404 | [fatto] (autodichiarato) | https://www.neveo.io/ | 2026-11-20 | sì |
| 10 | Neveo ha raccolto 1,7 M$ | [fatto] (aggregatore) | https://www.cbinsights.com/company/neveo | 2026-11-20 | no |
| 11 | FamilyAlbum/Mitene (MIXI): oltre 30 milioni di utenti al 7/5/2026, 175 paesi, 7 lingue (niente italiano), oltre il 40% degli utenti fuori dal Giappone, circa il 65% dei genitori giapponesi a dicembre 2024 | [fatto] (autodichiarato, utenti registrati cumulati) | https://mixi.co.jp/en/news/2026/0507/52325/ | 2026-11-20 | sì |
| 12 | Tinybeans FY25: ricavi 4,82 M$ (−11%), abbonamenti 3,32 M$ (+12%), margine lordo 87%, EBITDA rettificato −1,44 M$, 51.000 abbonati paganti, 0,86 milioni di MAU | [fatto] (società quotata ASX) | https://ecommercenews.com.au/story/tinybeans-reports-growth-in-subscriptions-lower-cash-outflows ; https://announcements.asx.com.au/asxpdf/20250821/pdf/06n4h84f2x4yl9.pdf | 2026-11-20 | articolo sì; PDF ASX no |
| 13 | Storyworth: 69 $ (bianco e nero), 89-99 $ (colori), 179-199 $ (Unlimited, rinnovo 99 $/anno). Venduto "as a gift", il destinatario risponde via email o telefono (anche da fisso). Dichiara oltre un milione di libri stampati e 50.000 recensioni a 5 stelle | [fatto] (autodichiarato) | https://welcome.storyworth.com/ | 2026-11-20 | sì |
| 14 | Remento: seed da 3 M$ (Upfront, 2022), libro a 99 $/anno, apparso a Shark Tank | [fatto] | https://prnewswire.com/news-releases/remento-raises-3m-seed-round-led-by-upfront-ventures-301616776.html | 2026-11-20 | no |
| 15 | MyHeritage MyStories: 99 $ per un anno di domande e un libro, esiste un help center in italiano | [fatto] | https://www.myheritage.com/help/it/articles/12852242-quanto-costa-mystories-e-cosa-e-incluso-nell-abbonamento | 2026-11-20 | no |
| 16 | Skylight: oltre 12 milioni di clienti, 1,7 milioni di famiglie con Calendar, linea di credito portata a 75 M$ (articolo del 30/9/2026) | [fatto] (autodichiarato) | https://dealroom.co/news/157964-skylight-adds-25m-in-debt-pushing-credit-facility-to-75m/ | 2026-11-20 | sì |
| 17 | Skylight ha 300 M$ di ARR ed è bootstrapped | [non verificato] (fonte debole) | https://www.arr.club/skylight/skylight-arr-hit-300m-fully-bootstrapped-and-profitable | 2026-11-20 | no |
| 18 | Aura Frames: prezzi tra 139 e 349 $. Nel 2022 ha raccolto 26 M$, con circa 1 milione di cornici vendute e quasi 3 milioni di utenti dell'app | [fatto] | https://auraframes.com/ ; https://techcrunch.com/2022/11/22/aura-the-frame-and-photo-startup-raises-26m-as-app-users-near-3m-and-frames-sold-pass-500k/amp | 2026-11-20 | Aura sì (curl); TechCrunch no |
| 19 | Nixplay: "Over 4 million happy customers", piani a 19,99-29,99 $/anno, si presenta come "great gift for … grandparents in particular" | [fatto] (autodichiarato) | https://www.nixplay.com/ | 2026-11-20 | sì (curl) |
| 20 | Lifecake: il dominio lifecake.com non risponde (curl 000), la chiusura non è documentata nelle ricerche | [fatto] parziale | https://www.lifecake.com/ | 2026-11-20 | sì (nessuna risposta) |
| 21 | ISTAT 2025: usa internet il 72,5% dei 65-74enni e il 35,7% degli over 75. Quasi il 40% degli over 65 si collega solo da smartphone | [fatto] | https://www.istat.it/comunicato-stampa/cittadini-e-ict-anno-2025/ | 2026-11-20 | sì |
| 22 | Indagine "Nonni Digitali" (Di.Te., 562 intervistati): il 77,2% dei nonni usa WhatsApp regolarmente | [fatto] (campione non rappresentativo) | https://www.orizzontescuola.it/nonni-italiani-sempre-connessi-8-su-10-usano-lo-smartphone-ogni-giorno-ma-il-digitale-nasconde-solitudine-e-vulnerabilita-lindagine-sugli-over-65-rivela-dipendenza-emotiva-e-scarsa-consapevolezza/ | 2026-11-20 | no |
| 23 | Strutture residenziali socio-assistenziali e socio-sanitarie in Italia all'1/1/2024: 12.987 presidi, 425.780 posti letto; circa tre quarti degli ospiti sono anziani | [fatto] | https://www.istat.it/comunicato-stampa/le-strutture-residenziali-socio-assistenziali-e-socio-sanitarie-al-1-gennaio-2024/ | 2026-11-20 | no (estratto) |
| 24 | AARP 2026: i nonni USA spendono 2.654 $/anno per tutti i nipoti (2.562 $ nel 2018, in calo in termini reali). Per il 76% la tecnologia (messaggi, foto app, chat di gruppo) è un canale primario di contatto. "Grandparent economy" di 903 mld $ | [fatto] | https://www.aarp.org/press/releases/2026-06-15-grandparents-study.html | 2026-11-20 | no (403 al fetch, estratto) |
| 25 | Italia, Findomestic: contributo medio dei nonni di circa 385 €/mese per nucleo familiare. Il 71% si occupa dei nipoti | [fatto] (indagine privata) | https://www.larassegna.it/scarica-pdf/i-nonni-risorsa-per-le-famiglie-il-loro-contributo-e-di-385-euro-al-mese/ | 2026-11-20 | no |
| 26 | In Italia gli album privati presenti (Yoovi, FamilyAlbum, Tinybeans, 23snaps) richiedono tutti che il nonno installi un'app. Non ho trovato una gazzetta cartacea italiana | [fatto] (assenza in una ricerca) | https://www.tuttoandroid.net/applicazioni/yoovi-share-photo-albums-condividere-privatamente-le-foto-191730/ | 2026-11-20 | no |

## 3) Distribuzione dei risultati e numeri chiave

**Chi ha vinto** (tutti modelli in cui il nonno è passivo e paga qualcun altro):

| Modello | Esempio | Scala dichiarata | Prezzo | Chi paga |
|---|---|---|---|---|
| Gazzetta cartacea | Famileo | 280.000 famiglie, ~11 M€ di ricavi nel 2022 (non verificato) | 5,99-17,99 €/mese | figli e nipoti, oppure la RSA |
| Gazzetta cartacea | Neveo | 500.000 giornali in totale | 12,99 €/mese | figli e nipoti |
| Cornice connessa | Skylight, Aura, Nixplay | 12 milioni / ~1 milione di cornici (2022) / 4 milioni | 139-349 $ più 20-124 $/anno | chi regala |
| Libro di storie | Storyworth, Remento, MyStories | oltre 1 milione di libri (Storyworth) | 69-199 $ | chi regala |
| Album privato freemium | FamilyAlbum, Tinybeans | 30 milioni di utenti registrati / 51.000 paganti | premium e stampe | i genitori |

**La distribuzione è meno brillante dei casi migliori.** Tinybeans, con 13 anni di vita e quotata, ha solo 4,8 M$ di ricavi, è in perdita e la pubblicità cala del 35%. È la prova che l'album digitale per famiglie monetizza male [fatto, ev. 12]. Lifecake sembra spenta [fatto parziale, ev. 20]. Neveo, dopo circa 10 anni, ha raccolto 1,7 M$ e non pubblica ricavi. Il modello "app per famiglie" freemium è affollato e sottile. Funziona il **fisico più abbonamento** (carta, cornice, libro).

**Stime sulla scala di Famileo** [stima]: 280.000 famiglie per circa 6-7 € al mese danno al massimo 20-24 M€ l'anno, se fossero tutte paganti a prezzo pieno. Il dato di 11 M€ (2022, non verificato) è compatibile con una base più piccola nel 2022 e con una parte di strutture a prezzo B2B. Quindi la cifra di 11 M€ è plausibile ma resta non verificata.

**Dimensionamento per l'Italia** [stima, ragionamento esplicito]:
- La Francia ha circa 68 milioni di abitanti, l'Italia circa 59 milioni e ha più anziani (cifre da conoscenza generale, non verificate in questa sessione). Se in Italia si ottenesse un decimo della penetrazione di Famileo, servirebbero circa 25.000 famiglie. Bastano molto meno: per l'**obiettivo A** (60-116 k€/anno di margine) servono **circa 1.000-2.000 famiglie paganti a ~8 €/mese**, ipotizzando un margine lordo di ~50-60% dopo stampa e posta.
- Per l'**obiettivo B** (120-160 k€ di margine) servono circa 3.000-4.000 famiglie, oppure 100-200 RSA con contratto B2B.
- Il vincolo vero è la posta italiana: affrancatura e logistica pesano più che in Francia [stima, nessuna tariffa verificata]. Va validato con un preventivo di Poste o di un consolidatore di posta ibrida.

## 4) Idee concrete (le migliori 4 per questo profilo)

### Idea 1 – "Gazzetta dei nonni" italiana, con le foto raccolte dal gruppo WhatsApp di famiglia (B2C più RSA)
- **Cosa:** ogni mese (o ogni due settimane) un giornalino A4 stampato e spedito al nonno, con foto e brevi testi dei familiari. La differenza rispetto a Famileo: **non si chiede a nessuno di installare un'app nuova**. Un numero WhatsApp Business o un bot riceve le foto inoltrate dai familiari, che restano sui loro canali. In alternativa c'è un link web per caricarle. L'AI scrive le didascalie a partire dai messaggi vocali e impagina in automatico.
- **Chi paga e quanto:** figli e nipoti, 6,99-9,99 €/mese, con il primo numero di prova a ~4,95 € come fa Neveo [riferimenti: ev. 1, 2, 9]. **RSA:** un abbonamento della struttura (riferimento: Famileo "offert par l'établissement", ev. 4) con una tariffa forfettaria a struttura [stima: 50-150 €/mese per struttura, da validare]. Il valore per la RSA: relazione con le famiglie e un argomento di marketing.
- **Primi 100 clienti senza pubblico:**
  (a) Contatto diretto con le RSA, cioè il canale da cui è partita Famileo [ev. 5]. Con 12.987 strutture [ev. 23], un operatore che chiama e fa demo può trovare 10-20 strutture pilota, e ognuna porta decine di famiglie [stima].
  (b) Google/Meta Ads a ridosso della Festa dei nonni (2 ottobre), di Natale e della Festa della mamma e del papà, con le parole chiave "regalo nonni" e "regalo nonna".
  (c) Parafarmacie, CAF e patronati dei sindacati pensionati come punti di distribuzione dei buoni regalo [stima, non validato].
- **Vantaggio delle competenze:**
  - *Scraping/dati:* costruire e pulire l'anagrafica delle RSA dai registri regionali e dai portali delle ASL (con email, telefono e posti letto) per l'outreach. È un vantaggio reale ma piccolo. Attenzione: è un uso interno di dati aziendali come lead per la propria vendita, non un prodotto di lead da rivendere, quindi resta fuori dall'esclusione del brief. Conviene comunque segnalarlo al Giudice.
  - *Sviluppo:* integrazione con l'API di WhatsApp Business, impaginazione automatica, posta ibrida. Qui il vantaggio è vero.
- **Concorrenti:** Famileo e Neveo, assenti in Italia [ev. 3, 9]. Famileo potrebbe entrare in qualsiasi momento: ha 6,8 M$ raccolti e già opera in 5 lingue. Poi le stampe fotografiche generiche (Cheerz, Photosì: non verificati) e WhatsApp stesso.
- **Rischi:**
  - GDPR e foto di minori: servono il consenso dei genitori, una DPIA e conservazione minima.
  - Costo postale italiano e affidabilità delle consegne.
  - Churn dopo la morte del nonno o il suo ingresso in RSA, cosa strutturale in questo mercato.
  - Famileo che lancia una versione italiana.
  - Costi dell'API WhatsApp per messaggio [stima].
  - Delegabilità: serve un operatore per stampa, assistenza e vendite alle RSA.
- **Perché resiste all'AI generalista:** l'oggetto fisico, la logistica e la rete di RSA non si sostituiscono con un prompt.

### Idea 2 – "Raccontami, nonno": storie di vita in italiano via telefono (anche fisso), poi libro stampato
- **Cosa:** un'alternativa italiana a Storyworth e Remento. Ogni settimana una domanda. Il nonno risponde **a voce chiamando un numero o venendo chiamato** sul fisso o sul cellulare. Nessuna app: Storyworth accetta già risposte da linea fissa [ev. 13]. L'AI trascrive e corregge il parlato in dialetto o italiano regionale. Dopo 6-12 mesi esce un libro con QR code verso gli audio.
- **Chi paga e quanto:** figli e nipoti come regalo, 79-99 € una tantum più le copie extra a 39-49 €. Riferimenti: Storyworth 69-199 $, Remento 99 $, MyStories 99 $ [ev. 13-15].
- **Primi 100 clienti:** ads stagionali (Natale, Festa dei nonni, Festa del papà); SEO su "domande da fare ai nonni", "libro dei ricordi nonno"; vendita come regalo aziendale per pensionamenti; partnership con agenzie funebri e servizi di memoria [stima, da validare con sensibilità].
- **Vantaggio delle competenze:** lo scraping **non** serve. Serve sviluppo e AI vocale: trascrizione di italiano parlato da anziani, telefonia, impaginazione.
- **Concorrenti:** MyStories di MyHeritage, che ha l'help in italiano [ev. 15]; il quaderno "Nonno raccontami" (prodotto cartaceo); BookFoundry (gratuito). Storyworth con il suo marchio forte ma in inglese.
- **Rischi:** stagionalità molto forte (concentrata a Natale), basso riacquisto, costo di acquisizione con le ads, completamento basso (molti nonni smettono di rispondere) [stima]. Delegabile a un operatore part-time.

### Idea 3 – Pacchetto "cornice più gazzetta" regalo per i nonni (bundle, rivenditore a valore aggiunto)
- **Cosa:** un pacchetto regalo da vendere a Natale: cornice connessa già configurata (Aura, Nixplay o simili rivenduti, oppure un tablet economico bloccato in "modalità cornice") più l'abbonamento gazzetta dell'Idea 1. Il valore aggiunto è che **arriva già configurata**: è la principale frizione per chi non è pratico di tecnologia.
- **Chi paga e quanto:** chi regala; prezzi di riferimento delle cornici 139-349 $ più abbonamenti da 20 a 124 $/anno [ev. 16, 18, 19].
- **Primi 100:** marketplace (Amazon.it), ads stagionali, RSA.
- **Vantaggio delle competenze:** basso. È soprattutto un tema di supply chain. Serve come accessorio e moltiplicatore di valore medio per l'Idea 1, non come business a sé.
- **Rischi:** hardware, resi e margini sottili. Aura e Nixplay vendono già direttamente in Europa [stima].

### Idea 4 – Sito comparatore "regali per nonni e dai nonni" con monitoraggio prezzi (affiliazione)
- **Cosa:** l'unica idea in cui lo **scraping è il vantaggio centrale**. Monitoraggio di prezzi e disponibilità di cornici digitali, fotolibri, servizi di storie, telefoni per anziani e regali per nipoti. Pagine SEO e alert sugli sconti (Black Friday, Festa dei nonni). In più, un canale gratuito per acquisire clienti per l'Idea 1 e l'Idea 2.
- **Chi paga:** commissioni di affiliazione (Amazon e programmi diretti) [stima: commissioni basse, pochi punti percentuali, non verificate].
- **Rischi:** la ricerca generativa (AI Overviews) erode il traffico dei siti affiliati, quindi C6 è basso. Il tetto di ricavo è basso. Da solo non arriva agli obiettivi A o B [stima]. Va usato come **leva di distribuzione**, non come prodotto.

**Classifica dell'Entusiasta:** Idea 1 (meglio con le RSA) > Idea 2 > Idea 4 come canale > Idea 3 come accessorio. Un programma minimo combinato: la gazzetta italiana con l'ingestione da WhatsApp, più un'offerta "libro dei ricordi" stagionale per il 4° trimestre.

## 5) Criteri di confutazione, uno per uno (dal punto di vista dell'Entusiasta)

1. **"Le app di condivisione familiare consolidate coprono il bisogno."** *Parzialmente vero, ma non per il segmento che conta.* WhatsApp e gli album privati coprono le famiglie digitali (FamilyAlbum ha 30 milioni di utenti e il 65% dei genitori giapponesi [ev. 11]). Però il 64,3% degli over 75 italiani non usa internet [ev. 21, derivato da 35,7%]. È proprio il pubblico per cui Famileo ha trovato 280.000 famiglie paganti in Francia [ev. 1]. Nessuna app condivisa via smartphone raggiunge chi non ha lo smartphone. **Il criterio non confuta la variante "carta per il nonno offline".**
2. **"I nonni non adottano app nuove."** *Probabilmente vero, e il caso lo accetta.* I modelli vincenti chiedono al nonno zero app: carta (Famileo, Neveo), cornici configurate da altri, telefono fisso (Storyworth). L'ipotesi "nonni come *utenti attivi* di un'app" è debole. L'ipotesi "nonni come *destinatari*" è forte. **Il criterio confuta la versione "app per nonni", non la versione "prodotto per nonni".**
3. **"Non esistono modelli di ricavo provati in cui pagano i nonni."** *In gran parte vero.* Non ho trovato un caso documentato di grande scala in cui il nonno sia il pagante principale. Pagano i figli e i nipoti (Famileo, Storyworth "as a gift", le cornici come regalo) oppure le strutture [ev. 4, 13, 19]. Lato entusiasta: i nonni spendono molto per i nipoti (2.654 $/anno negli USA, ev. 24; circa 385 €/mese di contributo per nucleo in Italia, ev. 25), ma quella spesa va a beni per i nipoti, non a servizi di condivisione. **Il criterio confuta "i nonni pagano"; resta in piedi "si paga per i nonni" (modelli regalo e B2B2C), che è provato e redditizio.**

Verdetto dell'Entusiasta: **H20 sopravvive in forma riformulata**, cioè "prodotti fisici o passivi per i nonni, pagati da figli e nipoti o dalle RSA". In questa forma c'è un vuoto concreto in Italia.

## 6) Cosa non ho trovato e limiti
- I ricavi verificati di Famileo: il dato di 11 M€ (2022) viene da un aggregatore che non ho potuto leggere (404). Non sono riuscito a identificare la società giusta nel registro francese.
- Il churn e la durata media degli abbonamenti delle gazzette: non trovati. Sono decisivi per il valore del cliente nel tempo (LTV).
- Le tariffe postali italiane per i piccoli invii mensili e i costi di posta ibrida: non verificati.
- Un dato ISTAT ufficiale sull'uso di WhatsApp tra gli over 65: non trovato. Ho solo un campione di 562 persone, non rappresentativo.
- La chiusura di Lifecake: non documentata. Il dominio non risponde.
- I ricavi di Skylight, Aura e Nixplay: non trovati in fonti affidabili. Il dato di 300 M$ di ARR per Skylight è debole.
- Il prezzo che le RSA italiane sarebbero disposte a pagare: non trovato, da validare con 10-20 telefonate.
- La disponibilità di Storyworth in italiano o con spedizione in Italia: non verificata.
- Reddit e Google Trends non sono stati consultati.
- GDPR sui minori: l'analisi legale non è stata fatta. Va prevista una DPIA. Il consenso e la base giuridica per le foto dei minori caricate dai genitori sono da valutare con un legale.

## 7) Conteggio
- **WebSearch usate:** 18 su 20.
- **Fetch e curl diretti:** circa 16 (Neveo, Storyworth, MIXI, Aleteia, ISTAT ICT 2025, App Store Famileo, eCommerceNews Tinybeans, Dealroom Skylight; curl su Famileo FR/EN/IT, Neveo IT e hreflang, Aura, Nixplay, Lifecake, API del registro delle imprese francese). Falliti: famileo.com/it (404), family-album.com (403), AARP (403), businesscoot (404).
