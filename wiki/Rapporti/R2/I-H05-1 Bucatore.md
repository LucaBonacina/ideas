---
tipo: rapporto
idea: I-H05-1
ruolo: Bucatore
data: 2026-11-20
tags: [rapporto, R2]
---
# I-H05-1 — Micro-SaaS B2B trascurato con leva di prezzo: Bucatore di palloncini (R2)

Idea: [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]]. Vincoli trasversali: [[H16 Founder a tempo parziale]], [[H17 Vantaggio dello scraping]].

## 1. Sintesi e posizione finale

L'idea si regge su tre leve. Tutte e tre risultano più deboli di quanto assume la nota.

1. **La leva di prezzo è bloccata proprio sul canale scelto.** Su Shopify non si può aumentare il prezzo di un abbonamento esistente: serve un nuovo abbonamento che ogni merchant deve approvare [fatto, 7]. Ogni aumento diventa quindi un evento di churn opt-in. Le recensioni degli store mostrano cosa succede su prodotti con prezzi fermi da anni. SendOwl ha alzato i prezzi dopo "15 anni" e ora ha il 26% di recensioni a 1 stella e "A 737% price increase is just greedy" [fatto, 5, 6].
2. **La trasferibilità non è garantita e le piattaforme si stanno chiudendo.**
   - Shopify: per cedere l'account serve il "prior written consent" di Shopify, "given or withheld in Shopify's sole discretion", anche in caso di cambio di controllo [fatto, 1].
   - Atlassian: le app Connect perdono il supporto il 31/01/2027 e pagano il 25% di revenue share dal 1/10/2026 (Forge: 17%) [fatto, 9, 10]. Le app Data Center non si vendono più ai nuovi clienti dal 30/03/2026 e diventano read-only il 28/03/2029 [fatto, 11].
   - WordPress.org: dopo il caso Essential Plugin (31 plugin chiusi il 7/4/2026, venduti su Flippa) ogni compratore di plugin è sospetto. La FAQ ufficiale dice agli sviluppatori di non dare seguito alle offerte di acquisto non richieste [fatto, 3, 4].
3. **L'economia non torna con un operatore pagato a mercato (H16).** Lo SDE di un micro-SaaS include il lavoro del venditore. Se si toglie un operatore part-time a mercato (circa 30-38 k€), un asset con SDE di 60 k€ comprato a 3,5x (circa 210 k€) lascia circa 15-20 k€ prima del churn. Per arrivare a 50 k€ netti servono circa 95-135 k€ di SDE, cioè 330-475 k€ di prezzo, sopra il capitale previsto [stima].

Il sourcing via scraping produce soprattutto prodotti già in declino. Il primo target "trascurato" che ho verificato, con 102 recensioni e voto 4,3, ha una recensione recente che dice "has been abandoned" e che il servizio non funziona [fatto, 8]. Il funnel off-market documentato è brutale: 700 contatti, 4 LOI, 0 chiusure in 9 mesi [fatto, 16]. Tra i search fund lanciati nel 2021-2024 solo circa il 48% ha comprato un'azienda [fatto, 17].

**Posizione finale: l'idea non regge nella forma attuale (punteggio proposto circa 48, da 60).** Sopravvive solo in una variante stretta:
- solo Shopify e Atlassian Forge, non WordPress.org;
- leva sui nuovi clienti e sui piani nuovi, non sugli esistenti;
- SDE verificato dai payout della piattaforma ≥ 100 k€;
- operatore messo a costo pieno.

Va decisa con l'esperimento di 30 giorni della §6, che può ucciderla in fretta.

## 2. Le sei sezioni del focus

### 2.1 Prove di domanda reale (i prodotti trascurati con recensioni hanno davvero clienti che pagano?)

**Prove contro.**
- **[fatto]** GrowthHero Affiliate Marketing (Shopify) ha 102 recensioni e voto 4,3, quindi passerebbe i filtri della nota (≥ 50 recensioni, piano a pagamento). Una recensione modificata il 7/11/2025 dice che l'app "has been abandoned", che "they have virtually no support" e che il servizio non funziona dal 23 ottobre [8]. È l'esempio tipico: il filtro "manutenzione ferma + molte recensioni" seleziona prodotti con clienti in uscita. Il numero di recensioni e il voto sono storici e cumulati, quindi non mostrano il declino.
- **[fatto]** SendOwl (Shopify, 91 recensioni, voto 3,4) ha introdotto un canone di 39 $/mese dove prima c'erano 0 $/mese più commissioni. Lo ha applicato in automatico a chi non aveva fatto opt-out. Lo sviluppatore lo chiama "the first major change in over 15 years". Risultato: il 26% delle recensioni è a 1 stella (24 su 91), il sentiment è "strongly negative around pricing and billing changes", ranking generale n. 7.212 [5, 6]. È la leva di prezzo applicata a un prodotto con prezzi fermi da anni, cioè la tesi dell'idea, con conseguenze pubbliche e permanenti sulla pagina dello store.
- **[fatto, estratti di ricerca non verificati sulle pagine]** Altri casi di recensioni su aumenti di prezzo nello Shopify App Store: Shogun, da 39 a 99 $, con un merchant che passa a un'alternativa; altri casi su prezzo raddoppiato e abbandono [estratti di ricerca, 2026-11-20]. Li riporto come segnale, non come prova.
- **[fatto]** Un'app non aggiornata alle nuove versioni API viene rimossa dallo Shopify App Store: non installabile per almeno 7 giorni e con avvisi nell'admin dei merchant. Le versioni API escono ogni 3 mesi e sono supportate per almeno 12 [12]. Quindi un'app "trascurata da oltre 12 mesi" è, per costruzione, vicina alla rimozione o ai problemi di compatibilità.
- **[fatto, dato self-reported in forum]** Un fondatore di app Shopify riferisce che "churn is super high, close to 10-15%" mensile [estratto di ricerca da Indie Hackers; pagina bloccata 403]. Il dato è aneddotico ma allineato al 3-8% mensile del primo giro.

**Prove a favore (oneste).**
- **[fatto]** Un searcher che ha comprato un SaaS B2B riporta, dopo un anno, 20 k$ di MRR "stable" con retention "99% MoM" e prezzi normalizzati, più 20 k$ di cassa da piani annuali [13]. Il dato è self-reported e senza prezzo d'acquisto né MRR iniziale.
- **[fatto]** Sullo Shopify App Store l'80% delle app lanciate nel 2026 non ha nemmeno una recensione [14]. Le recensioni accumulate sono quindi un fossato reale contro il "vibe coding": un'app con centinaia di recensioni non si replica in una settimana.

**[stima]** Il bisogno dei clienti è reale (pagano), ma il segnale che l'idea usa per trovare i target (recensioni più manutenzione ferma) seleziona in modo sistematico i prodotti in declino. Serve un filtro sulla velocità delle recensioni (ultimi 12 mesi contro i 12 precedenti) e sulle risposte negative recenti, che la nota non prevede.

### 2.2 Clienti (target) elencabili: quanti sono davvero comprabili

- **[fatto]** Lo Shopify App Store ha circa 22.546 app live (giugno 2026, RevenueHunt). Il 51% non ha recensioni, l'81% ne ha meno di 10. Si stima che il primo 1% delle app (225) prenda il 72% dei ricavi e che solo il 36% circa delle app guadagni qualcosa [15]. Un'altra rilevazione (29/10/2026, 24.465 app) dà: 11,4% delle app con 10-99 recensioni, 4,2% con 100-999, 0,6% con 1.000 o più [estratto di ricerca]. Un post sul forum ufficiale degli sviluppatori riporta 29.245 app di 18.376 partner e Shopify che "started removing hundreds of apps" [14]. I conteggi non sono coerenti tra loro: sono rilevazioni di terzi.
- **[stima] Imbuto per Shopify** (solo dati pubblici, nessun dato personale):

  | Passaggio | Numero di app | Ragionamento |
  |---|---|---|
  | App con ≥ 50 recensioni | 1.800-2.200 (circa l'8-9%) | Il 4,8% ha ≥ 100 recensioni; circa un terzo della fascia 10-99 sta sopra 50 |
  | …con piano a pagamento | 1.200-1.700 | |
  | …"trascurate" (risposte dello sviluppatore assenti da oltre 6 mesi) | 120-340 | 10-20% del totale precedente |
  | …con ricavo compatibile con SDE ≥ 30 k€ (MRR ≥ circa 3,5 k$) | 40-120 | La coda è povera: il 99% delle app si divide il 28% dei ricavi |
  | …con ricavi non in declino e venditore disposto a vendere (5-10% di interessati, §2.3) | **2-12 venditori interessati** | Su tutto lo store, in un anno |

  Da questi pochi si sottraggono quelli che falliscono la due diligence: circa la metà nel caso Montréal [16], e il 79% dei searcher cita la due diligence come prima causa di LOI fallite [17].
- **[fatto] Atlassian.** I nuovi acquisti di app Data Center sono chiusi dal 30/03/2026 e le app diventano read-only il 28/03/2029 [11]. Per le app Connect gli aggiornamenti del descriptor non sono più possibili da marzo 2026 [estratto di ricerca, non verificato sulla pagina primaria] e il supporto termina il 31/01/2027 [9]. Gran parte delle app Atlassian "trascurate" sono quindi Connect o DC: per definizione richiedono una migrazione a Forge (riscrittura parziale) o hanno una data di morte. **[stima]** Il pool comprabile su Atlassian senza un progetto di migrazione è vicino a zero tra i trascurati.
- **[fatto] WordPress.org.** I plugin con oltre 10.000 utenti o "critici" si trasferiscono solo con richiesta scritta al Plugins Team. La FAQ ufficiale scrive: "Many developers receive unsolicited emails or offers to purchase their plugin" e consiglia di non darvi seguito [3]. Dopo Essential Plugin (comprato su Flippa nel 2025, backdoor attivata il 6/4/2026, 31 plugin chiusi) [4] il contatto a freddo per comprare un plugin è esattamente il pattern che la community considera sospetto. **[stima]** Il tasso di risposta su WordPress.org sarà sotto la media e il rischio reputazionale per il compratore è alto.

### 2.3 Prezzi ed economia unitaria (multipli, sconti, frodi, costi di deal)

**Multipli reali sotto 300 k$.**
- **[fatto]** Empire Flippers 2025: 22,4x il profitto mensile per i deal sotto 300 k$, cioè circa 1,9x annuo, su tutti i tipi di asset. Solo il 9,9% dei venditori passa il vaglio e l'1,9% arriva alla vendita [R1, verificato dal Giudice in H05].
- **[fatto, estratto non verificato: Flippa blocca le richieste automatiche, 403]** Flippa H1 2026: multipli di profitto realizzati in media 2,24x per i deal da 10-100 k$ e 1,85x per quelli da 100-250 k$.
- **[fatto, dataset di un venditore di dati]** BigIdeasDB, listing di Acquire: mediana richiesta 1,7x sotto 50 k$ e 2,9x tra 50 e 250 k$ (220 listing) [estratto; pagina 429].
- **[stima]** Il 3,9x della nota è la mediana di Acquire su tutte le taglie fino a 10 M$ [R1]. Sotto 300 k$ i multipli realizzati sono 1,8-2,9x. Il multiplo basso però non è un regalo: riflette churn, dipendenza dal fondatore e rischio di piattaforma.
- **Sconto per declino:** nessun dato numerico pubblico trovato (non trovato). Il beancount.io (luglio 2026) dice solo che un ARR fermo o in calo "compresses it fast", senza numeri [19].

**Frodi e ricavi gonfiati.**
- **[fatto]** Flippa non verifica i ricavi sotto 50 k$ e i venditori possono inserire i P&L a mano [R1; estratti di ricerca coerenti].
- **[fatto]** Il caso più grave documentato non è un ricavo gonfiato ma un compratore fraudolento: il portafoglio Essential Plugin, "six-figure" su Flippa, fu presentato da Flippa come case study di successo a luglio 2025 [4]. È un problema per il compratore onesto, perché piattaforme e utenti si irrigidiscono.
- **Non trovato:** un caso documentato (cronaca o atti) di MRR Stripe falsificato su Acquire.com. Esistono solo aneddoti di listing rimossi.
- **[stima] Contromisura forte:** su Shopify e Atlassian i ricavi passano dalla piattaforma, quindi lo storico dei payout della piattaforma è una prova molto più difficile da falsificare di uno screenshot Stripe. È un punto **a favore** dell'idea, se si impone come condizione.

**Leva di prezzo.**
- **[fatto]** Shopify, risposta dello staff sul forum ufficiale: "You currently can not update existing recurring subscriptions with new prices" [7]. Per spostare i merchant su un piano nuovo si crea un nuovo abbonamento con `replacementBehavior`, e un nuovo abbonamento richiede l'approvazione del merchant [7, e estratti delle docs Shopify]. Per il tetto dei piani a consumo vale lo stesso: "The new capped amount doesn't take effect until the merchant approves it" [2].
- **[fatto]** Atlassian: i partner possono cambiare prezzo "at anytime" [estratto FAQ Atlassian]. Un grande vendor come Appfire concede comunque 60 giorni ai clienti esistenti per rinnovare al prezzo vecchio [estratto]. La leva c'è, ma diluita.
- **[stima]** Su Shopify la leva sugli esistenti produce, per costruzione, un evento di churn: chi non clicca resta sul vecchio prezzo o va cancellato. Il +20-40% della nota è realistico solo su nuovi clienti e su piani nuovi, quindi dipende dalla crescita, che su un prodotto trascurato è bassa. Effetto plausibile sul ricavo a 12 mesi: +5-15%, non +20-40%.

**Costi di piattaforma.**
- **[fatto]** Shopify: 0% di revenue share fino a 1 M$ di ricavi cumulati dal 1/1/2025, senza reset annuale, più 19 $ di registrazione [1]. È un fatto **a favore**, ma dopo un trasferimento conta il contatore dell'account del compratore (da verificare con il supporto).
- **[fatto]** Atlassian Connect: revenue share 25% dal 1/10/2026; Forge 17% [10].

**Costi di deal.**
- **[fatto]** Escrow.com: 1,9% (standard) su 100 k$ e minimo 3.800 $ su 250 k$; il servizio concierge costa il doppio [18].
- **[fatto]** Acquire.com: piano compratore "starting at $390" [20].
- **[stima]** Due diligence legale e fiscale in Italia: 5-15 k€. Migrazione tecnica: 2-10 k€. Per un'app Atlassian Connect la migrazione a Forge costa 20-60 k€ (2-6 mesi di uno sviluppatore).

**Fiscalità italiana.**
- **[fatto]** Avviamento e marchi si deducono in non meno di 18 anni. I diritti di utilizzazione delle opere dell'ingegno, cioè il software, si deducono fino al 50% del costo all'anno (art. 103 TUIR, commi 1 e 3) [21]. **A favore**: allocare una parte congrua del prezzo al codice accelera la deduzione, ma serve una perizia e la scelta è contestabile [stima].
- **[fatto]** In una cessione d'azienda c'è il registro al 3% sull'avviamento [R1].
- **[fatto]** Se il fornitore è extra UE e cede software online, l'IVA si applica in reverse charge [estratto ecnews.it]. La qualificazione IVA della cessione di un portafoglio clienti non è chiarita: non trovato, serve un commercialista.
- **[stima]** Carico fiscale per portare gli utili al founder: IRES 24% + IRAP 3,9% più 26% sui dividendi, circa 44% complessivo. I 50 k€ di "margine" della definizione di successo restano circa 28 k€ netti in tasca.

**Capitale a rischio.**
- **[stima]** Il capitale a rischio è di 165-330 k€ (prezzo più 10% di costi). Con un churn del 5% al mese e acquisizione nulla, il ricavo si dimezza in circa 13-14 mesi (0,95^13 ≈ 0,51).
- **[stima]** Un earn-out del 20-30% protegge solo la parte differita. Il resto è perdibile, ad esempio con un rifiuto del trasferimento da parte della piattaforma prima del closing (va messo come condizione sospensiva) o con un'app rimossa per API non aggiornate.

### 2.4 Piano di delega e costo reale dell'operatore (H16)

- **[fatto]** H16 mette a costo un operatore a 60-75 k€/anno a regime, oppure uno schema a quota utili dichiarato. La nota dell'idea prevede invece 15-25 k€/anno, cioè meno della metà del costo di mercato di un part-time [H16].
- **[stima] Il punto chiave.** Lo SDE (Seller's Discretionary Earnings) include per definizione il compenso del proprietario-operatore. Chi compra un micro-SaaS da un fondatore solo compra un flusso che **contiene già il lavoro del fondatore**, e deve sostituirlo.

  **Calcolo con operatore part-time:**

  | Voce | Importo |
  |---|---|
  | SDE dell'asset | 60 k€ |
  | Prezzo a 3,5x | 210 k€ |
  | − operatore part-time a mercato (0,5 FTE) | 30-38 k€ |
  | − costi fissi della SRL [H16] | 4-15 k€ |
  | **Margine prima del churn** | **circa 10-25 k€** |

  Payback di 8-20 anni. Con un multiplo di 2,5x il prezzo scende a 150 k€, ma il margine resta lo stesso.

  **Per lasciare 50 k€ di margine al founder:**

  | Scenario | SDE necessario | Prezzo a 3,5x |
  |---|---|---|
  | Operatore part-time | circa 90-100 k€ | 315-350 k€ |
  | Operatore pieno (H16) | circa 120-135 k€ | 420-475 k€ |

  Sono cifre sopra il capitale di 150-300 k€ indicato nella nota, salvo multipli molto più bassi (che a loro volta segnalano asset peggiori).
- **[stima]** Ore del founder: nella fase di ricerca, con 150-300 contatti, l'analisi di 10-20 data room e 2-4 LOI, servono 8-15 h/settimana per 6-12 mesi, a meno di pagare un searcher. Il caso Montréal (9 mesi, nessuna chiusura) [16] e il dato Stanford (2,5 LOI per chiusura, 48% di successo) [17] indicano che la fase di ricerca è lunga anche per chi la fa a tempo pieno. È incompatibile con ≤ 5 h/settimana, se non delegando a un searcher pagato.
- **[stima]** Su Atlassian, se il target è Connect, l'operatore deve fare una migrazione a Forge entro gennaio 2027: è lavoro di sviluppo senior, non manutenzione.

### 2.5 Conflitto con il lavoro (basso? verifica)

- **[stima] Conflitto basso, confermato con due riserve.** Comprare e gestire app B2B per merchant Shopify o team Jira non è "la medesima attività economica" di uno scraper per istituti finanziari e business information provider (Cass. 19096/2013 come letta in H16). Lo scraping degli store serve solo al sourcing interno.
- **Riserva 1.** Vanno esclusi dai target le app che fanno estrazione di dati o arricchimento di lead e aziende (es. app di lead enrichment, monitoraggio prezzi di concorrenti, dati su aziende): ricadono negli ambiti esclusi o nella zona grigia del conflitto d'interessi (art. 8 c. 2 lett. c D.Lgs. 104/2022, come letto in H16).
- **Riserva 2.** Se il founder fa personalmente due diligence tecnica e manutenzione nelle ore libere, resta il tema INPS (circ. 78/2013, in H16) e il codice va tenuto separato.
- **Penalità proposta:** 0/−1.

### 2.6 Esperimento di 30 giorni (per uccidere l'idea in fretta)

Ho stretto l'esperimento della nota. Le soglie sono decise prima, e ogni passaggio ha una soglia di **uccisione** esplicita.

**Settimana 1 — Censimento e filtro (solo dati pubblici, nessun dato personale).**
- Scraping delle pagine pubbliche dello Shopify App Store: recensioni con data, voto, risposte dello sviluppatore con data, piani e prezzi.
- Su Atlassian, solo app cloud Forge (escluse Connect e DC).
- Esclusi WordPress.org (§2.2) e le app nel perimetro escluso (§2.5).
- Filtri:
  - ≥ 50 recensioni;
  - piano a pagamento;
  - nessuna risposta dello sviluppatore da oltre 6 mesi;
  - **velocità delle recensioni negli ultimi 12 mesi ≥ 40% di quella dei 12 precedenti**;
  - **quota di recensioni a 1-2 stelle negli ultimi 12 mesi ≤ 25%**.
- **Uccisione** se restano meno di 60 target.

**Settimana 1, in parallelo — Trasferibilità.**
- Chiedere per iscritto al supporto Partner di Shopify, con un quesito generico e senza nominare target, tempi e criteri del consenso al trasferimento (PPA §9.7). Chiedere anche se il contatore di 1 M$ è quello dell'account del compratore.
- Fare lo stesso con Atlassian (procedura con ticket e prova d'acquisto [9b]).
- **Uccisione** se Shopify non indica una procedura con tempi e criteri.

**Settimane 2-3 — Contatto.**
- 150 contatti tramite i canali pubblici del vendor (form di supporto o sito aziendale), con una sola sequenza da tre messaggi.
- Soglie:
  - **successo:** ≥ 10% di risposte (≥ 15) e ≥ 8 venditori che condividono l'**export dei payout della piattaforma** degli ultimi 24 mesi;
  - **uccisione:** risposte sotto il 5% oppure meno di 4 export.

**Settimana 4 — Analisi.**
- Per ogni venditore con i payout, calcolare:
  1. il trend dei ricavi a 12 mesi;
  2. il churn mensile, dagli eventi di installazione e disinstallazione e dai payout per merchant;
  3. lo **SDE dopo aver tolto un operatore part-time a 35 k€**.
- **Soglia di successo:** almeno 2 target con:
  - ricavi a 12 mesi in calo non oltre il 10%;
  - churn ≤ 3% al mese;
  - SDE dopo l'operatore ≥ 40 k€;
  - prezzo chiesto ≤ 3x SDE;
  - disponibilità a un earn-out ≥ 25% e a una condizione sospensiva sul consenso della piattaforma.
- **Uccisione** se nessuno soddisfa tutte e cinque le condizioni.

**Vincolo trasversale:** ore del founder registrate ≤ 20 nel mese. Lo scraping e il primo contatto li fa un analista pagato a ore, con un budget di 1,5-3 k€.

**[stima]** La probabilità che tutte le soglie siano superate è del 15-25%. Il passaggio più probabile per l'uccisione è la settimana 4: lo SDE dopo l'operatore.

## 3. Effetto proposto sul punteggio v2

| Criterio | Nota | Proposta | Motivo (evidenza nuova) |
|---|---|---|---|
| C1 Bisogno | 4 | **3** | I clienti pagano, ma i target selezionati dal filtro mostrano abbandono e insoddisfazione (GrowthHero [8], SendOwl [5, 6]) |
| C2 Domanda | 3 | 3 | Invariato: offerta abbondante, imbuto stretto (§2.2) |
| C3 Monetizzazione | 4 | **3** | Leva di prezzo sugli esistenti bloccata su Shopify senza approvazione del merchant [7, 2]; multipli sotto 300 k$ bassi per ragioni di rischio |
| C4 Vantaggio delle competenze | 3 | 3 | Lo scraping per il sourcing è utile ma replicabile; il vantaggio vero è la due diligence sui payout |
| C5 Distribuzione | 4 | **3** | Canale integrato, ma consenso al trasferimento a discrezione di Shopify [1]; tramonto di Connect e DC su Atlassian [9, 10, 11]; WordPress.org ostile ai compratori [3, 4] |
| C6 Resistenza all'AI | 2 | 2 | Invariato. Nota: le recensioni accumulate sono un fossato contro le app nuove senza recensioni [14] |
| C7 Difendibilità | 3 | 3 | Invariato |
| C8 Incumbent | 3 | 3 | Invariato |
| C9 Tempo al primo euro | 4 | **3** | Cassa dalla firma sì, ma la ricerca dura 6-12 mesi o più (Montréal: 9 mesi e 0 chiusure [16]; Stanford: 48% di successo [17]) |
| C10 Delegabilità | 2 | 2 | Invariato; confermato |
| C11 Tetto a 24 mesi | 3 | **2** | Dopo il costo dell'operatore a mercato, 1-2 asset nel capitale previsto danno 10-40 k€ di margine (§2.4) |

**Calcolo:**
- somma pesata: 3·10 + 3·10 + 3·15 + 3·15 + 3·15 + 2·5 + 3·5 + 3·5 + 3·5 + 2·10 + 2·5 = 280;
- 280 / 5 = **56**;
- **penalità −8** (da −6): capitale a rischio; consenso al trasferimento a discrezione della piattaforma; fiscalità; conflitto 0/−1;
- **punteggio proposto: circa 48** (da 60).

## 4. Fonti
Tutte accedute il 2026-11-20.

1. Shopify Partner Program Agreement (ultimo aggiornamento 27/02/2026): §9.7 Assignment ("prior written consent, to be given or withheld in Shopify's sole discretion. Transfer can include acquisition, merger, change of control"); revenue share 0% fino a 1 M$ cumulati — https://www.shopify.com/partners/terms
2. Shopify.dev, update max charge ("The new capped amount doesn't take effect until the merchant approves it") — https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge
3. WordPress.org, Plugin Developer FAQ (trasferimenti oltre 10.000 utenti solo su richiesta scritta; offerte di acquisto non richieste) — https://developer.wordpress.org/plugins/wordpress-org/plugin-developer-faq/ ; adozione dei plugin — https://developer.wordpress.org/plugins/wordpress-org/take-over-an-existing-plugin/
4. Webhosting.today, "Flippa promoted the plugin portfolio sale as a success story — it was a supply chain attack" (17/04/2026) — https://webhosting.today/2026/04/17/flippa-promoted-the-plugin-portfolio-sale-as-a-success-story-it-was-a-supply-chain-attack/
5. Shopify App Store, recensioni di SendOwl — https://apps.shopify.com/reviews/1721548
6. AppNavigator, SendOwl (rating, distribuzione delle stelle, ranking, risposta dello sviluppatore) — https://appnavigator.io/app/sendowl/
7. Shopify Developer Community, "How to grandfather users" (risposta dello staff Shopify) — https://community.shopify.dev/t/how-to-grandfather-users/23749
8. Shopify App Store, recensioni di GrowthHero Affiliate Marketing — https://apps.shopify.com/reviews/701360
9. Atlassian Developer Community, "Connect End of Support extended to January 31, 2027" (03/08/2026) — https://community.developer.atlassian.com/t/connect-end-of-support-extended-to-january-31-2027/102002
   - 9b. Atlassian, trasferimento di app tra vendor — https://developer.atlassian.com/platform/marketplace/knowledge-base/transfering-apps-between-vendors
10. Atlassian, "Extended timelines for Marketplace revenue share changes" — https://www.atlassian.com/blog/developer/extended-timelines-for-marketplace-revenue-share-changes
11. Atlassian, Data Center end of life — https://www.atlassian.com/licensing/data-center-end-of-life
12. Shopify.dev, API versioning — https://shopify.dev/docs/api/usage/versioning
13. SearchFunder, "Y1 of our 1st B2B SaaS acquisition is a wrap" (self-reported) — https://searchfunder.com/post/y1-of-our-1st-acquisition-is-a-wrap-here-are-our-main-achievements-and-lea
14. Shopify Developer Community, "The App Store is dead (backed by numbers)" (29/10/2026) — https://community.shopify.dev/t/the-app-store-is-dead-backed-by-numbers/39176
15. RevenueHunt, State of the Shopify App Economy (giugno 2026; ricavi stimati, non misurati) — https://revenuehunt.com/state-of-the-shopify-app-economy/
16. SearchFunder, "Takeaways after searching for 9 months in Montreal" — https://searchfunder.com/post/takeaways-after-searching-for-9-months-in-montreal
17. Calder Capital, sintesi dello Stanford 2026 Search Fund Study (fonte secondaria) — https://caldergr.com/acquisition-search-is-getting-harder-takeaways-from-stanfords-2026-search-fund-study
18. Escrow.com, fee calculator — https://www.escrow.com/fee-calculator
19. Beancount.io, Bootstrapped SaaS valuation multiples 2026 (fonti non nominate; usata solo per l'assenza di dati sullo sconto per declino) — https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
20. Acquire.com, pricing — https://acquire.com/pricing/
21. Art. 103 TUIR, testo (Brocardi) — https://www.brocardi.it/testo-unico-imposte-redditi/titolo-ii/capo-ii/sezione-i/art103.html

**Pagine bloccate o non lette.** Le cifre seguenti sono riportate da estratti di ricerca e marcate come tali:
- bloccate: Flippa blog e listing (403), BigIdeasDB (429), Indie Hackers (403);
- fonte primaria non letta: la data di marzo 2026 per lo stop agli aggiornamenti dei descriptor Connect.

Dal primo giro (verificate dal Giudice): Empire Flippers 2026 State of the Industry Report; Founderpath (mediana 3,9x di Acquire).

Ricerche web usate: 20
