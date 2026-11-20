# H21 – Lista regali "governata" dai genitori: rapporto del Bucatore di palloncini

Ruolo: confutare H21. Data di accesso di tutte le fonti: 2026-11-20. Lavoro indipendente (letto solo `_brief-comune.md`).

## 1) Tesi in 5 righe

1. Il bisogno esiste, ma per le nascite è **già coperto gratis** da Amazon.it (lista con 15% di sconto fino a 300 €, regalo di benvenuto e, secondo le guide, aggiunta di articoli da altri siti) e dalle catene (Prénatal, Bimbostore) che pagano la lista con buoni fino a 200 €: un nuovo entrante non può pareggiare questi incentivi.
2. Il modello ovvio (affiliazione) è **strutturalmente povero in Italia**: Amazon.it paga il 3% su prima infanzia e giocattoli (categoria "tutte le altre"), con un cookie di 24 ore, e vieta scraping e cache dei prezzi fuori dalle API ufficiali.
3. Il mercato è piccolo e si restringe: 355.772 nascite nel 2025 (−3,8%), 174.842 primogeniti; una lista nascita per figlio, di fatto per il primo.
4. La parte "regalo di gruppo/colletta" cade nel perimetro dei servizi di pagamento (esclusi dal brief) ed è già servita gratis da PayPal Colletta (Italia, novembre 2024) e Satispay; Leetchi, il leader europeo a pagamento, perdeva soldi proprio per la concorrenza gratuita.
5. Il caso migliore (Babylist, oltre 750 M$ di ricavi) è un outlier USA nato nel 2011 e passato dall'affiliazione al negozio proprio: dimostra che serve diventare retailer e fare media, il contrario del profilo (≤ 5 h/settimana, nessun pubblico).

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | Commissioni standard Amazon.it: Marchi Privati/Fashion 6%; Casa, Libri, Mobili ecc. 5%; Bellezza, Sport 4%; Elettrodomestici, Elettronica 2,5%; Alimentari, Videogiochi 1%; Carte regalo 0%; **tutte le altre categorie 3%**. "Prima infanzia" e "Giocattoli" non compaiono tra le eccezioni e ricadono quindi nel 3% | [fatto] | https://programma-affiliazione.amazon.it/help/node/topic/GRXPHT8U84RAYDXZ | 2026-11-20 | sì (curl) |
| E2 | Il cookie di affiliazione Amazon dura 24 ore (la sessione termina dopo 24 ore dal clic o al primo ordine) | [fatto] | https://programma-affiliazione.amazon.it/help/operating/agreement | 2026-11-20 | sì (curl) |
| E3 | La licenza Amazon Associates esclude "data mining, robot o strumenti simili di raccolta ed estrazione dei dati". Prezzi e disponibilità si mostrano solo tramite Creators API/PA API, con cache massima di 24 ore. Vietato usare i contenuti del programma su piattaforme di terzi | [fatto] | https://programma-affiliazione.amazon.it/help/operating/policies | 2026-11-20 | sì (curl) |
| E4 | Nel 2020 Amazon USA ha tagliato le commissioni (prodotti per neonati dal 4,5% al 3%) con 7 giorni di preavviso | [fatto] | https://www.cnbc.com/2020/04/14/amazon-slashes-commission-rates-for-affiliate-program.html ; https://searchengineland.com/amazon-affiliate-commission-rates-cut-332966 | 2026-11-20 | no (estratti del motore di ricerca) |
| E5 | Lista Nascita Amazon.it: 15% di sconto sugli acquisti idonei fino a 300 € (ordini fino a 2.000 €), da 180 giorni prima a 90 giorni dopo la nascita, con la lista attiva da 14 giorni; regalo di benvenuto con una spesa minima di 10 € | [fatto] (articolo del 26/09/2025, non pagina ufficiale) | https://www.money.it/Lista-Nascita-Amazon-cosa-e-come-funziona | 2026-11-20 | sì |
| E6 | Alla Lista Nascita Amazon si possono "aggiungere articoli da qualsiasi sito con un solo click" | [fatto] secondo la guida (31/03/2022); non verificato sulla pagina Amazon, che rispondeva 503 | https://www.nostrofiglio.it/neonato/lista-nascita-amazon-come-funziona | 2026-11-20 | sì |
| E7 | Prénatal: a chiusura della lista, buoni da 2×50 € (lista ≥ 1.000 €), 3×50 € (≥ 1.500 €) o 4×50 € (≥ 2.000 €), più punti fedeltà sui regali ricevuti | [fatto] | https://www.prenatal.com/lista_nascita/ | 2026-11-20 | sì (curl) |
| E8 | Bimbostore: lista creata in negozio e consultabile online, regali comprabili online o in oltre 60 negozi, buono fino a 200 € alla chiusura | [fatto] | https://www.bimbostore.com/lista-nascita-vantaggi/ | 2026-11-20 | sì (curl) |
| E9 | Joy (withjoy.com) offre già in italiano una lista nascita universale gratuita: qualsiasi negozio, fondi in denaro "senza commissioni", regali di gruppo, 20% di sconto di completamento. Non dichiara se spedisce in Italia | [fatto] | https://withjoy.com/baby-registry/?l=it-IT | 2026-11-20 | sì |
| E10 | MyRegistry: lista universale gratuita da qualsiasi negozio (estensione e scanner), fondi in denaro con una piccola commissione, "213.401.389 regali aggiunti" | [fatto]; il contatore è autodichiarato | https://www.myregistry.com/ | 2026-11-20 | sì |
| E11 | Elfster: wishlist e Secret Santa gratuiti, ricavi da affiliazione e pubblicità | [fatto] | https://www.elfster.com/ | 2026-11-20 | sì |
| E12 | Babylist: GMV di 1 miliardo di $ nel 2023, 9 milioni di acquirenti; ricavi 2025 oltre 750 M$ (+45%), ottavo anno di utile | [fatto] (autodichiarato dall'azienda) | https://www.babylist.com/about ; https://babylist.com/about/press | 2026-11-20 | sì |
| E13 | Babylist è nata nel 2011, ha raccolto meno di 50 M$ in 14 anni e il suo "modello originale era l'affiliazione"; oggi vende direttamente (negozio proprio) e fa media | [fatto] | https://fortune.com/2025/06/24/babylist-registry-founder-retail-500-million-sales/ ; https://www.modernretail.co/marketing/how-babylist-is-building-a-media-empire-for-new-parents/ | 2026-11-20 | Fortune sì; Modern Retail no |
| E14 | Babylist è usata da "più del 40% dei genitori al primo figlio" negli USA | [fatto] (autodichiarato) | https://babylist.com/about/press | 2026-11-20 | sì |
| E15 | Italia 2025: 355.772 nati (−3,8%), 174.842 primogeniti, 1,14 figli per donna (minimo storico) | [fatto] | https://www.istat.it/comunicato-stampa/natalita-e-fecondita-della-popolazione-residente-anno-2025/ | 2026-11-20 | sì |
| E16 | Leetchi: perdite di 3,6 M€ nel 2020 e di 6,7 M€ in 3 anni, imputate alla concorrenza delle collette gratuite di fintech e neobanche; commissioni dal 4% all'1,9%; messa in vendita da Crédit Mutuel Arkéa (2021) | [fatto] | https://www.francetransactions.com/actus/news-banques/leetchi-est-en-vente-la-cagnotte-en-ligne-payante-perd-de-l-argent.html | 2026-11-20 | sì |
| E17 | Leetchi e Mangopay venduti ad Advent nel 2022 per oltre 100 M€ (valore non ufficiale) | [fatto] | https://www.moneyvox.fr/actu/87949/credit-mutuel-arkea-cede-la-cagnotte-leetchi | 2026-11-20 | sì |
| E18 | PayPal ha chiuso Money Pools in tutto il mondo (creazione bloccata dal 30/09/2021) | [fatto] | https://newsroom.uk.paypal-corp.com/evolving-the-ways-you-can-collect-and-raise-money | 2026-11-20 | sì |
| E19 | PayPal ha lanciato la "Colletta" in Italia (novembre 2024): gratuita, contribuisce anche chi non ha PayPal, fino a 10.000 € per colletta, al massimo 5 collette attive, durata massima 6 mesi | [fatto] | https://www.tuttoandroid.net/news/2024/11/15/colletta-paypal-raccolta-fondi-come-funziona-1067885/ ; https://www.paypal.com/it/cshelp/article/cosa-sono-le-collette-help1197 | 2026-11-20 | sì |
| E20 | Satispay dichiara 6,5 M di clienti, invio di denaro tra contatti senza costi di gestione; "Richiedi denaro" si usa per collette e regali | [fatto] (numero autodichiarato) | https://www.satispay.com/it-it/ ; https://www.aziendabanca.it/notizie/educazione-finanziaria/come-fare-una-colletta-via-app | 2026-11-20 | Satispay sì; Aziendabanca no |
| E21 | ScuolaPay (dal 2021) offre già collette di classe per gite e regali alle maestre, gratis | [fatto] (articolo del 2022) | https://www.altroconsumo.it/soldi/conti-correnti/test-prime-impressioni/scuolapay | 2026-11-20 | sì |
| E22 | Gli istituti di pagamento devono essere autorizzati dalla Banca d'Italia (art. 114-novies TUB) e separare i fondi dei clienti | [fatto] | https://www.bancaditalia.it/compiti/vigilanza/intermediari/business-in-italia/attivita-istituto-imel/index.html | 2026-11-20 | no (estratto) |
| E23 | CGUE C-30/14 Ryanair c. PR Aviation (2015): anche quando una banca dati non è protetta, il gestore può vietare lo scraping commerciale con le condizioni d'uso | [fatto] | https://www.pinsentmasons.com/out-law/news/website-operators-can-prohibit-screen-scraping-of-unprotected-data-via-terms-and-conditions-says-eu-court-in-ryanair-case | 2026-11-20 | no (estratto) |
| E24 | Zankyou (liste nozze) è stata comprata da The Knot Worldwide nel febbraio 2023; oggi zankyou.it reindirizza a matrimonio.com e zankyou.es a bodas.net | [fatto] | https://www.businesswire.com/news/home/20230203005037/en/The-Knot-Worldwide-Acquires-Spain-based-Zankyou-Ventures ; redirect verificato con curl | 2026-11-20 | redirect sì; comunicato no |
| E25 | Wishpot: comprata da Lockerz nel 2012, oggi "Discontinued"; il dominio è parcheggiato (redirect a /lander) | [fatto] | https://alternativeto.net/software/wishpot/about ; curl su wishpot.com | 2026-11-20 | sì |
| E26 | Il dominio kaboodle.com oggi appartiene a una società di biglietteria per eventi: il social shopping/wishlist Kaboodle non esiste più (data di chiusura non trovata) | [fatto] / data non trovata | https://kaboodle.com/ | 2026-11-20 | sì (curl) |
| E27 | Nessuna "lista regali di compleanno" trovata presso Toys Center, Giocheria o Città del Sole | [fatto]: non trovato (non vuol dire che non esista) | ricerca web + https://www.toyscenter.it/lista-nascita (404) | 2026-11-20 | sì |

## 3) Distribuzione dei risultati e numeri chiave

**Mortalità della categoria "wishlist/social shopping":** Wishpot (venduta e poi chiusa), Kaboodle (dominio riciclato), PayPal Money Pools (chiuso nel 2021), Zankyou (assorbita), Leetchi (in perdita e venduta) [fatti E16–E18, E24–E26]. Sopravvivono gli operatori integrati in un retailer (Amazon, Prénatal) o diventati retailer e media (Babylist) [fatti E5, E7, E13]. Gli indipendenti gratuiti (Elfster, MyRegistry, Giftster) vivono di affiliazione e pubblicità nel mercato USA, su scala di decine di milioni di utenti [E10, E11; i numeri sono autodichiarati]. La mediana degli entranti non è osservabile, ma i casi documentati sono chiusure o acquisizioni.

**Calcolo dell'affiliazione in Italia [stima]:**
- Valore di una lista: le soglie Prénatal (1.000/1.500/2.000 €) fanno pensare che una lista "buona" valga 1.000–2.000 € [stima basata su E7: i retailer fissano le soglie vicino al valore tipico]. Il valore medio italiano non è stato trovato.
- Quota tracciabile da un intermediario: molti regali si comprano in negozio (nonni), sono fuori lista o vengono comprati dopo più di 24 ore dal clic. Ipotesi: il 40–60% del valore passa da link tracciati → circa 500–900 € tracciati per lista.
- Ricavo per lista: 600 € × 3% ≈ **18 € per lista** su Amazon. Con negozi su Awin al 4–8% (tassi Prénatal/Chicco non trovati) si arriva al massimo a ~30–50 €.
- Obiettivo A (60–116 k€ di ricavi): servono circa **3.300–6.400 liste all'anno a 18 €**, cioè il 2–4% di tutti i primogeniti italiani (174.842), ogni anno, senza pubblico e contro lo sconto Amazon del 15%. Obiettivo B (120–160 k€): 7–9 mila liste all'anno, circa il 4–5% dei primogeniti.
- Confronto: Babylist ha impiegato 14 anni per arrivare al 40% dei genitori al primo figlio in un mercato con circa 10 volte le nascite italiane [E13, E14].

**Compleanni [stima]:** sono più frequenti (uno all'anno per bambino), ma lo scontrino è basso (20–50 € a regalo), molti regali si comprano in negozio e la pianificazione via app è rara. A parità di traffico rendono meno della lista nascita per evento. Il buco "lista compleanno" nelle catene italiane (E27) esiste, ma è riempito a costo zero da wishlist Amazon condivise o da messaggi WhatsApp [stima: dalle chat dei genitori, non verificata].

## 4) Idee concrete ovvie e perché fallirebbero per questo profilo

**I1. Lista regali universale multi-negozio per bambini, in affiliazione (la "Babylist italiana").**
- Prodotto: Amazon (E6, se confermato), Joy in italiano gratis (E9) e MyRegistry fanno già la lista universale gratuita. L'utente sceglie la lista con lo sconto: Amazon dà il 15% fino a 300 €, Prénatal e Bimbostore fino a 200 € di buoni. Un intermediario non può restituire valore con un margine del 3% (18 € per lista).
- Dati: lo scraping dei cataloghi è proprio il vantaggio del founder, ma Amazon lo vieta per contratto (E3) e, per la sentenza Ryanair (E23), anche i negozi italiani possono vietarlo con le condizioni d'uso, pur senza diritto sui generis. Mostrare prezzi Amazon richiede le API con cache massima di 24 ore. Il rischio legale e quello di chiusura dell'account affiliato sono concreti e asimmetrici [stima].
- Distribuzione: si acquisisce un utente una volta per figlio, in una finestra di circa 6 mesi; il cliente non ritorna. Il CAC a pagamento su keyword come "lista nascita" compete con Amazon e le catene, e 18 € per lista non regge un CPC di 0,5–1,5 € con la conversione di un'app nuova [stima: CPC non verificato].
- Delegabilità e tempo: mesi di SEO e contenuti, il modello Babylist (14 anni, media + retail). Non è compatibile con ≤ 5 h/settimana.

**I2. App di colletta per il regalo di classe o di gruppo.**
- Licenza: gestire denaro di terzi richiede un istituto di pagamento o un partner come Mangopay/Stripe Connect (E22), un settore escluso dal brief. Anche con un partner, KYC, frodi e chargeback restano a carico dell'operatore [stima].
- Concorrenza gratuita: PayPal Colletta (gratis, senza conto, 10.000 €), Satispay "Richiedi denaro" (6,5 M di clienti), ScuolaPay, bonifici nel gruppo WhatsApp (E19–E21). Il leader europeo a pagamento (Leetchi) perdeva 3,6 M€ l'anno proprio per i concorrenti gratuiti (E16). Persino PayPal ha chiuso Money Pools nel 2021 prima di rilanciarla (E18).
- Monetizzazione: una commissione sul versato è inaccettabile se l'alternativa è gratis; resta un ricavo per evento di pochi euro.

**I3. Lista "governata" con regole dei genitori** (budget per regalo, "no plastica", "no doppioni", approvazione del genitore, chi regala cosa).
- È una feature, non un prodotto: la prenotazione nascosta e l'anti-doppione esistono in tutte le liste (Amazon, Babylist, Giftster, Elfster) [fatto per Babylist ed Elfster da E11–E12; per gli altri, stima]. Le "regole" si comunicano in una riga nel gruppo WhatsApp di famiglia.
- Disponibilità a pagare: nessuna evidenza che i genitori paghino un abbonamento per governare i nonni [stima: non trovato alcun caso di abbonamento B2C a pagamento per liste regali]. I nonni, che sono gli utenti da "governare", sono il segmento meno propenso ad adottare un'app nuova [stima].
- Senza abbonamento si torna all'affiliazione di I1, con lo stesso problema del 3%.

**I4. Comparatore prezzi per liste nascita** (scraping di Amazon, Prénatal, Chicco, Bimbostore e Toys Center sugli articoli della lista).
- Qui il vantaggio scraping è massimo, ed è proprio dove è vietato: Amazon proibisce i robot e il confronto prezzi fuori API (E3); Chicco e Zankyou bloccano già con 403 (curl) [fatto: osservato]; c'è il precedente Ryanair (E23).
- Gli incumbent orizzontali (Trovaprezzi, Idealo, Google Shopping) coprono gli stessi prodotti; il comparatore verticale "baby" ha un traffico stagionale per utente (una volta per figlio).
- Monetizzazione: CPC o affiliazione al 3–8% su un volume piccolo; mercato in calo del 3,8% l'anno (E15).

**I5 (variante B2B2C): white label "lista nascita" per negozi indipendenti di prima infanzia.**
- Prénatal, Bimbostore, Chicco e Amazon hanno già la loro (E5, E7, E8). I negozi indipendenti sono in contrazione con le nascite, hanno budget software minimi e chiedono una vendita assistita sul territorio, che il founder non può delegare a basso costo [stima]. Tetto di ricavo basso: centinaia di negozi × 20–50 €/mese [stima].

## 5) Criteri di confutazione, uno per uno

1. **"Le liste esistenti coprono già il bisogno": in gran parte SÌ (confutazione forte per la nascita, debole per i compleanni).** Per le nascite: Amazon.it (sconto, benvenuto, aggiunta da altri siti secondo le guide), Prénatal, Bimbostore, Joy e MyRegistry universali gratuite, anti-doppione incluso. Per i regali di gruppo: PayPal Colletta, Satispay, ScuolaPay. Il pezzo meno coperto è la lista ricorrente per i compleanni e la "governance" dei nonni; lì però il sostituto gratuito (wishlist Amazon condivisa o WhatsApp) è molto forte e la disponibilità a pagare non è dimostrata.
2. **"Commissioni di affiliazione troppo basse in Italia": SÌ.** 3% sulle categorie rilevanti, cookie di 24 ore, rischio di tagli unilaterali (precedente USA del 2020). Servirebbe il 2–4% dei primogeniti italiani ogni anno solo per l'obiettivo A [stima, §3].
3. **"Non c'è spazio per un nuovo entrante": SÌ per questo profilo.** La lista è legata allo sconto del retailer (lock-in); il caso di successo (Babylist) ha impiegato 14 anni ed è diventato retailer e media. La categoria wishlist indipendente mostra chiusure e acquisizioni (Wishpot, Kaboodle, Zankyou, Leetchi in perdita). Lo scraping, il vantaggio del founder, è vietato per contratto dove serve (Amazon) e contestabile altrove (Ryanair). Le collette sono un settore regolato ed escluso dal brief.

**Verdetto del Bucatore: H21 confutata per il profilo** (bisogno reale ma servito gratis; economia unitaria di 15–50 € per lista con una lista per figlio; vantaggio di dati non utilizzabile legalmente).

## 6) Cosa non ho trovato / limiti

- Pagina ufficiale della Lista Nascita Amazon.it (risposta 503): le condizioni vengono da money.it (09/2025) e nostrofiglio.it (03/2022). La funzione "aggiungi da altri siti" in Italia potrebbe essere cambiata (nel 2022 passava da Amazon Assistant, la cui disponibilità attuale non è verificata).
- Valore medio di una lista nascita in Italia: non trovato (uso le soglie Prénatal come proxy).
- Commissioni di affiliazione di Prénatal, Chicco e Toys Center su Awin o altri network: non trovate.
- Stato attuale di Leetchi (sito 403), Giftster (Cloudflare 403), Mylittlelist.fr e ListaNascita.it/Miolista.it (DNS non risolto dal proxy): non verificato. Non deduco chiusure.
- Ripartizione dei ricavi di Babylist tra affiliazione, retail e media: nessuna fonte primaria (le cifre di terzi sono incoerenti).
- CPC e CAC reali per "lista nascita" in Italia: non trovati.
- Interpretazione specifica della Banca d'Italia sulle "collette": non trovata; resta il quadro generale PSD2/TUB.

## 7) Conteggio

- WebSearch: 15 su 20.
- Fetch diretti: circa 25 (WebFetch + curl), tra cui le pagine ufficiali Amazon Associates IT (commissioni, accordo, policy), Prénatal, Bimbostore, ISTAT, Babylist, MyRegistry, Joy, Elfster, PayPal, Satispay, Altroconsumo, Moneyvox, Francetransactions, Fortune, AlternativeTo e i redirect di zankyou.it/.es, wishpot.com e kaboodle.com.
