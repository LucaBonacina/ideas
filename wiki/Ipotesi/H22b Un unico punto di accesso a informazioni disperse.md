---
tipo: ipotesi
id: H22b
titolo: "Un unico punto di accesso a informazioni che esistono ma sono disperse"
sessione: S11
stato: "parziale"
fiducia: "media"
probabilita_successo: "2%"
probabilita_obiettivo_A_leggero: "bassa (~4%)"
tags: [ipotesi, famiglia]
---
# H22b — Un unico punto di accesso a informazioni che esistono ma sono disperse

> **Come leggere questa nota.** Secondo giro del filone famiglia, nato dall'obiezione dell'utente a [[H22 Ricerca di luoghi servizi norme e bonus per genitori]]: "i genitori non sanno che quei servizi esistono, e le informazioni restano sparse". Qui l'**obiettivo A** (1-2 k€/mese netti) viene prima, con due modelli di costo. La probabilità nel frontmatter (`probabilita_successo`) resta quella dell'obiettivo B per confronto con le altre note. Sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Bonus nazionali, regionali e comunali, nidi (non solo quelli della mappa INPS), servizi per l'infanzia e regole locali esistono, ma sono su molti portali diversi, e molti genitori non sanno nemmeno che esistono (es. la mappa INPS dei nidi). Un aggregatore unico, aggiornato con lo scraping e personalizzato per comune ed età del bambino, ha valore anche se ogni singola informazione è già pubblica. Dal [[Registro delle ipotesi]], "Filone famiglia, secondo giro".

## Criteri di confutazione (pre-registrati)
Confutata se:
1. un servizio esistente fa già l'aggregazione completa per comune (non solo i bonus nazionali);
2. la frammentazione reale è bassa (pochi portali coprono quasi tutto);
3. la mappa INPS copre già tutti i nidi, pubblici e privati;
4. non esiste un canale per farsi trovare dai genitori;
5. non c'è un modo di ricavare almeno i costi più un piccolo margine (obiettivo A con modello leggero).

## Caso a favore — Entusiasta
Rapporto integrale: [[H22b Entusiasta]]. Ha usato 13 WebSearch, 7 WebFetch, circa 45 letture con curl e circa 82 chiamate di autocompletamento. Ha provato 6 comuni.

**Tesi.** H22b regge se il punto unico si costruisce **intorno al nido**, non intorno ai bonus.

**La frammentazione è reale.**
- Un genitore con un figlio di 0-3 anni deve consultare 6-7 siti (comuni piccoli) o 11-12 (Milano).
- Nei comuni piccoli l'informazione manca del tutto. A Castel Guelfo (BO) la pagina "Educazione" ha un solo link ed è ferma all'aprile 2024; a Valbrembo (BG) le pagine scuola danno errore 500.
- Il Comune di Milano elenca circa 194 nidi. Il registro open data lombardo ne conta 391 in città.

**Le misure decisive sono regionali e a finestra breve.**
- Nidi Gratis Plus Lombardia 2026/27 era aperto alle famiglie dal 27/10 al 19/11/2026.
- I comuni aderiscono uno per uno: 38 comuni del Varesotto non hanno aderito.
- A Castel San Pietro Terme ci sono 213.840 € per abbattere le rette, ma la pagina del comune non dice come fare domanda. Il Centro per le famiglie dà informazioni 6 ore a settimana.

**La mappa INPS non chiude lo spazio.** Contiene solo dati anagrafici (nome, sede, tipologia, regime, titolo abilitativo), sta dietro SPID e nel 2026/27 è alimentata dai comuni con file Excel.

**Nessuno aggrega il livello comunale.**
- BonusX ha 1 pagina comunale su 257 nella sitemap.
- Informafamiglie (Emilia-Romagna) non copre il distretto di Imola, e la pagina di Bologna è ferma al 6/5/2025.
- All'estero il punto unico per comune esiste dove lo impone una legge: Childcare Act 2006 nel Regno Unito, monenfant.fr in Francia.

**Canale e pagatore.**
- "asilo nido [comune]" dà 10 suggerimenti su 10 in tutti i comuni testati sopra i 20.000 abitanti.
- I nidi privati senza lista d'attesa sono il 46%, cioè circa 4.500 strutture con posti da riempire [stima].
- BonusX corporate mostra che le aziende pagano per il welfare pubblico dei dipendenti (oltre 100 aziende, numero autodichiarato).

**Economia per l'obiettivo A [stima dell'Entusiasta].**
- **Modello leggero:** costi di circa 1,5-3 k€/anno dentro una società esistente, 5-8 k€/anno con una SRL nuova. Servono circa 19-41 k€ di ricavo, cioè **63-137 nidi a 25 €/mese** (l'1,4-3% del bacino) oppure **7-20 enti pubblici** a 2-3 k€/anno.
- **Modello con collaboratori:** servono 77-150 k€ di ricavo, cioè 257-500 nidi.

**Idee proposte:**
1. Directory dei nidi per comune con la scheda delle agevolazioni locali e gli avvisi (consigliata).
2. Guida 0-6 in white label per Ambiti e Centri per le famiglie.
3. Modulo "welfare locale" per le aziende.
4. Avvisi ai genitori, gratis come gancio dell'idea 1.
5. Centri estivi come modulo stagionale dell'idea 1.

**Criteri secondo l'Entusiasta:** nessuno scatta. Il (3) scatta in parte a regime, per il solo elenco dei nidi.

## Caso contro — Bucatore di palloncini
Rapporto integrale: [[H22b Bucatore]]. Ha usato 13 WebSearch, circa 57 letture dirette e circa 25 chiamate di autocompletamento. Ha provato 5 comuni.

**Tesi.** H22b è confutata come business dai criteri (4) e (5), e ridimensionata dai criteri (2) e (3).

**La frammentazione è più bassa del previsto.**
- A Milano, Bergamo, Seriate, Torre de' Roveri e Bari bastano **2-4 enti**: INPS, Regione, Comune.
- Il Portale della famiglia INPS assorbe già consultori, centri per la famiglia e "servizi di altri enti".
- In Lombardia un solo dataset aperto elenca 2.707 strutture 0-3, aggiornato ogni mese.
- La frammentazione vera sta in tre punti: le misure regionali che valgono solo nei comuni aderenti, i bandi comunali con URL nuovi a ogni edizione, e le regioni senza registro aperto (Puglia).

**La mappa INPS copre per legge quasi tutti i nidi leciti.** Comprende nidi, micronidi, sezioni primavera, spazi gioco e servizi domiciliari autorizzati, con i dati trasmessi dai comuni per obbligo. Restano fuori i centri bambini-famiglie, le ludoteche, le rette e i posti liberi.

**Chi ha soldi e incentivi SEO evita il livello comunale.**
- BonusX ha raccolto 4,2 M€ e ha 1 pagina comunale.
- Bonusepagamenti.it ha circa 2.013 articoli, di cui 1 comunale.
- L'autocompletamento dà 0 suggerimenti per "contributi famiglie [comune]" in 5 comuni su 5.

**All'estero l'aggregatore per comune è pubblico e gratuito.** Gli altri chiudono o vivono di B2B:
- Benefits Data Trust ha chiuso nel 2024 nonostante 45 M$ di entrate;
- Benefits.gov è stato assorbito da USA.gov;
- One-e-App è stata dismessa;
- findhelp vive di contratti con enti e sanità.

**Economia [stima del Bucatore].**
- Al prezzo di BonusX servono circa **1.800-3.200 abbonati** per 1-2 k€/mese netti, oppure 0,3-2,2 M di pagine viste al mese.
- AI Overviews riduce il CTR del primo risultato del 15-35%.
- L'LLM costa circa 60 $/mese per tutti i comuni. Il costo vero è la **verifica umana**: circa 63.000 schede l'anno, circa 2 persone a tempo pieno se si copre tutta Italia.
- Rischi legali: una scadenza sbagliata in un servizio a pagamento è un danno risarcibile, e compilare domande per conto terzi è il perimetro di CAF e patronati.
- Il take-up dell'Assegno unico è già al 94%.

**Idee ovvie attaccate:** abbonamento "tutti i bonus del tuo comune", newsletter per comune ed età, SaaS per i comuni, welfare aziendale, lead ai nidi privati, SEO con pubblicità, upsell sulle pratiche. Per ognuna il rapporto spiega cosa la uccide.

**Cosa resta secondo il Bucatore:** una risorsa gratuita di utilità pubblica sui contributi comunali delle città maggiori, senza pagatore.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate (2026-11-20)
| Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|
| La mappa INPS copre tutti i nidi leciti (Bucatore) contro "solo strutture convenzionate, solo dati anagrafici, dietro SPID" (Entusiasta) | Divergenza | **Hanno ragione entrambi su parti diverse.** Il comunicato parla di "strutture convenzionate per il Bonus nido", definite come le strutture "rilevanti ai fini della gestione del contributo". Il Bonus nido vale per nidi pubblici e privati autorizzati, quindi il perimetro di diritto è ampio.<br>Di fatto però:<br>- i comuni trasmettono solo i "dati identificativi";<br>- il 2026/27 è transitorio e l'INPS stesso rinvia "agli elenchi comunali delle strutture accreditate";<br>- il Portale risponde con un redirect 302 a `loginSPID.jsp`, quindi la mappa non è pubblica né indicizzabile. | [news INPS 11/9/2026](https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html) letta con curl; redirect verificato su https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/ |
| Frammentazione: 6-12 portali (Entusiasta) contro 2-4 enti (Bucatore) | Divergenza | **La differenza è soprattutto di unità di misura (enti contro pagine).** Ho verificato il punto più concreto, il registro lombardo:<br>- 2.707 unità in regione;<br>- a Milano 352 asili nido, 17 micronidi, 16 nidi famiglia e 6 centri prima infanzia (391 in tutto);<br>- per ogni struttura i campi sono denominazione, posti autorizzati, indirizzo, telefono e coordinate: **nessuna retta, nessun posto libero, nessuna scadenza**.<br>Quindi l'elenco dei nidi esiste ed è aperto (in Lombardia), mentre ciò che serve per scegliere e risparmiare (rette, agevolazioni del comune, finestre) resta sparso nei siti comunali. | https://www.dati.lombardia.it/resource/pej5-wp65.json (conteggi via API, `$group=unita_offerte_sociali`) |
| Pagatore: circa 4.500 nidi privati senza lista d'attesa | Entusiasta | **Il dato di base è confermato:** il 59,5% dei nidi ha bambini in lista d'attesa, "54% nel privato", su 14.570 servizi. Che il 46% restante voglia pagare per la visibilità è però una deduzione dell'Entusiasta: "senza lista d'attesa" può voler dire semplicemente pieno. | [ISTAT, report 2023/24](https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf) |
| Canale: le query sui nidi esistono, quelle sui bonus comunali no | Entrambi, con letture opposte | **Confermato.** Suggerimenti di Google:<br>- "asilo nido seriate" 9;<br>- "asilo nido vimercate" 10;<br>- "asilo nido castel san pietro terme" 7 (tra cui "bando" e "graduatoria");<br>- "asilo nido torre de roveri" 1;<br>- "contributi famiglie bergamo", "bonus famiglie milano", "agevolazioni famiglie bari" e "bonus bebè seriate" 0;<br>- "nidi gratis plus" 10.<br>Molte query sui nidi però cercano un nido preciso (nomi di strutture): sono di navigazione. | suggestqueries.google.com, 10 chiamate del Giudice |

### Criteri di confutazione, uno per uno
1. **Un servizio esistente aggrega già tutto per comune: non scattato.** Nessuno, pubblico o privato, mette insieme per comune nidi, rette, agevolazioni comunali, misure regionali e loro adesione, e scadenze. Lo dicono entrambi i subagenti con evidenze diverse: BonusX ha 1 pagina comunale su 257, Bonusepagamenti 1 articolo comunale su 2.013. L'INPS si muove verso il punto unico (Portale della famiglia, "servizi di altri enti"), ma dietro SPID e con soli dati anagrafici.
2. **Frammentazione bassa: scattato in parte.** Gli enti sono pochi (2-4), e per i nidi in Lombardia basta un dataset. La frammentazione residua è vera, ma sta in tre punti precisi:
   - le misure regionali che valgono solo nei comuni aderenti;
   - i bandi e le rette comunali, nei PDF e negli albi con URL nuovi a ogni edizione;
   - le regioni senza registro aperto.

   È meno di quanto l'ipotesi supponeva ("molti portali"), ma è proprio la parte che decide i soldi della famiglia.
3. **La mappa INPS copre già tutti i nidi: scattato per l'elenco, non scattato per il resto.** Per legge la mappa conterrà tutte le strutture autorizzate per il Bonus nido, e dal 2027/28 sarà alimentata via PDND. L'ipotesi "nidi non solo quelli della mappa INPS" si indebolisce: oltre la mappa restano solo i centri bambini-famiglie e i servizi ricreativi. Restano scoperti rette, posti, finestre e visibilità pubblica, perché la mappa sta dietro SPID.
4. **Nessun canale: scattato per i bonus, non scattato per i nidi.** Le query comunali su bonus, contributi e agevolazioni valgono 0 anche a Milano e Bergamo. Le query "asilo nido [comune]" esistono fino ai comuni di circa 20.000 abitanti, con varianti ("bando", "graduatoria", "prezzi"), ma molte sono di navigazione verso un nido preciso e sono esposte alle risposte AI. **L'unico canale senza pubblico che regge è la SEO sulle pagine dei nidi**, con le agevolazioni appese a quelle pagine.
5. **Non si coprono i costi più un piccolo margine: non dimostrato né smentito.**
   - **Modello leggero:** i costi sono bassi (circa 2-8 k€/anno), purché ci si limiti a una o due regioni e si eviti la copertura nazionale verificata a mano. Il ricavo necessario è di circa **20-50 k€/anno**: la mia stima unisce i due calcoli fiscali dei subagenti (IRES/IRAP con o senza tassazione del dividendo).
   - **Abbonamento dei genitori:** 1.800-3.200 paganti senza un canale è irrealistico. Scatta.
   - **Nidi privati:** servono circa 70-170 nidi a 25 €/mese. In Italia il prezzo osservato è 9,90 €/mese (BeMyHero, S9), il caso estero più grande non incassa (Hoop) e Winnie ha abbandonato i lead. Plausibile ma non provato.
   - **Enti pubblici:** prezzi non verificati, vendita lenta.

   Il criterio non scatta, ma la monetizzazione è il punto più debole e va testato per primo.

### Correzioni alle conclusioni precedenti
- **H22 e lo screening (F1) dicevano "la mappa INPS dei nidi è online".** Va precisato. Il comunicato dell'11/9/2026 annunciava la mappa "nelle prossime settimane"; S9 la dava online da ottobre 2026. In ogni caso il 2026/27 è transitorio, i dati sono solo identificativi e l'accesso richiede SPID. **La mappa non è un concorrente per la ricerca pubblica**: è un elenco autenticato per chi già chiede il bonus. F1 resta senza un pagatore per le famiglie, ma l'argomento "lo Stato ha chiuso lo spazio" è più debole di quanto scritto in [[H22 Ricerca di luoghi servizi norme e bonus per genitori]].
- **C1 (trova-bonus) resta scartato** per i bonus nazionali e come prodotto a sé. Il livello comunale è davvero scoperto, ma non ha domanda di ricerca propria.

### Verdetto
**Parziale.**
- **Confutata nella forma "punto unico per tutti i bonus e servizi, con abbonamento dei genitori":** criteri (4) e (5) per i bonus, (2) e (3) in parte.
- **Sopravvive la forma "punto unico per comune centrato sul nido":** tutti i nidi (dagli open data e dai siti comunali) con rette, finestre di iscrizione, adesione del comune alle misure regionali e agevolazioni locali, pagato dai nidi privati che hanno posti da riempire.
- In secondo piano sopravvive una variante venduta agli enti territoriali, Ambiti e Centri per le famiglie.

**Fiducia: media.** La prova sui comuni, la mappa INPS, il dato ISTAT e il canale sono verificati. Mancano tre cose: un benchmark di conversione dei nidi italiani, un prezzo verificato per gli enti e un test diretto delle risposte AI su query comunali.

**Probabilità.**
- **Obiettivo A, modello leggero: bassa (circa 4%).** Servono circa 70-170 nidi paganti in una o due regioni, con un prezzo di riferimento italiano di 9,90 €/mese e senza un caso estero che dimostri la conversione.
- **Obiettivo A, modello con collaboratori: bassa (circa 2%).** Servono 257-500 nidi.
- **Obiettivo B: 2%**, come H22.
- **Obiettivo C: bassa.**

**Lente di utilità.**
- **Platea [fatto]:** circa 355.000 nati nel 2025 e circa 1,2 milioni di bambini 0-2 [stima dell'Entusiasta da posti e copertura ISTAT].
- **Risparmio per famiglia [stima]:** da 1-2 ore l'anno (Bucatore) a 3-6 ore (Entusiasta). In euro, il caso tipico è una misura locale persa per una finestra di 3-4 settimane: per esempio Nidi Gratis Plus, che azzera la retta del nido comunale per le famiglie con ISEE basso, o i contributi comunali alle rette. Riguarda una minoranza di famiglie, ma per loro valgono centinaia o migliaia di euro.
- Sui bonus nazionali il denaro perso è limitato (Assegno unico al 94%).

**Utilità: media.** Alta per le famiglie dei comuni piccoli e delle regioni senza registro aperto, bassa per i bonus nazionali.

## Idee concrete che sopravvivono
- [[I-H22b-1 Nidi e agevolazioni per comune pagato dai nidi privati]] — punteggio v2: **54**
- [[I-H22b-2 Guida 0-6 in white label per Ambiti e Centri per le famiglie]] — punteggio v2: **48**

**Scartate dal Giudice:**
- **Abbonamento dei genitori "tutti i bonus del tuo comune":** nessun canale, servono 1.800-3.200 paganti, responsabilità sulle scadenze.
- **Newsletter a pagamento per comune ed età:** resta gratis, come gancio di I-H22b-1.
- **Modulo welfare aziendale:** nessun catalogo welfare per servizi informativi; se diventa un feed di dati venduto a una piattaforma, penalità −8.
- **Lead ai nidi:** confutato in S9.
- **Pratiche per conto terzi:** perimetro di CAF e patronati.
- **Centri estivi:** solo come modulo stagionale di I-H22b-1, coerente con F3.

## Nota di coerenza
- I-H22b-1 vende visibilità a strutture private, come [[I-H22-1 Directory feste e corsi per bambini con abbonamento strutture]] e la strada confutata in [[H14 Lead e visibilità a strutture locali]].
- La differenza è il valore per la famiglia: rette, finestre e agevolazioni del comune, cioè informazioni che il genitore cerca per forza una volta per figlio. Anche così il pagatore resta il punto debole, e la probabilità resta bassa.
- Le due idee possono condividere lo stesso motore di dati, comune per comune.

## Fonti
Accesso 2026-11-20. Elenco completo nei rapporti [[H22b Entusiasta]] e [[H22b Bucatore]].
- Mappa INPS: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html · https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/
- Registro lombardo delle unità 0-3: https://www.dati.lombardia.it/resource/pej5-wp65.json
- ISTAT, nidi 2023/24: https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf
- Autocompletamento: https://suggestqueries.google.com/complete/search?client=firefox&hl=it&q=...
- Comune di Milano, nidi: https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera
- BonusX: https://bonusx.it/corporate/ · sitemap di bonusx.it
- Childcare Act 2006, s.12: https://www.legislation.gov.uk/ukpga/2006/21/section/12
- Benefits Data Trust (chiusura): whyy.org, citato in [[H22b Bucatore]]

## Precisazioni di coerenza
- La mappa INPS non chiude lo spazio su rette, scadenze e agevolazioni; per l'elenco delle strutture sì (criterio 3 scattato per l'elenco).
- Il criterio (5) confuta solo l'abbonamento dei genitori; per I-H22b-1 non è dimostrato né in un senso né nell'altro.
