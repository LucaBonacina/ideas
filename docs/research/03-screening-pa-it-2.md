# 03 — Screening candidati #7-#12 (Dati pubblici e PA, Italia — parte 2)

Data di accesso alle fonti: 2026-11-19. Mercato: Italia.

**Nota di metodo e limiti (da leggere prima).**
- Le evidenze vengono da ricerche web (snippet e sintesi dei risultati). Il recupero diretto delle pagine (WebFetch) è fallito per quasi tutti i domini (teamsystem.com, cribis.com, businessonline.it, lexroom.ai, sacra.com, thenextweb.com non risolvibili da questo ambiente). Quindi molti prezzi e dettagli **non sono stati letti sulla pagina originale**.
- Il budget di ricerche web della sessione si è esaurito durante il candidato #11. **Per #12 (marchi e brevetti) non è stata raccolta nessuna evidenza** e per #11 le evidenze sono parziali. Vanno ripresi in una sessione successiva.
- Convenzione: **[fatto]** = riportato da una fonte con URL; **[stima]** = ragionamento mio, dichiarato come tale; "non trovato" = cercato senza esito (o non cercato per esaurimento budget, indicato esplicitamente).

---

### #7 — Procedure concorsuali e aziende in crisi
**Verdetto:** INCERTO (G1, G5) — pagatori e dati pubblici esistono, ma il mercato è presidiato da grandi operatori di informazioni commerciali e c'è un possibile vincolo autorizzativo (licenza ex art. 134 TULPS per chi raccoglie informazioni per conto terzi) da verificare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima, non verificata con fonte] Le agenzie di informazioni commerciali in Italia operano di norma con licenza prefettizia ex art. 134 TULPS; da verificare se un servizio di alert su dati pubblici (non report su richiesta) ricada nell'obbligo. Fonte non trovata in questa sessione. | non trovato |
| G2 Dati raggiungibili | sì (parziale) | [fatto] Il Portale delle Procedure Concorsuali del Ministero è consultabile da "utenti ospite" per news, documenti e informazioni sulle procedure dei tribunali abilitati; area pubblica con elenco tribunali e numero di procedure attive; i dati arrivano dai sistemi SIECIC con aggiornamenti periodici. Esiste anche il Registro delle procedure (registroprocedure.giustizia.it). Avvisi di vendita di aziende/rami in liquidazione giudiziale sono pubblici su astegiudiziarie.it e gobid.it. [stima] Il Registro imprese (fonte primaria degli stati di procedura) è a pagamento via InfoCamere: non verificato. | https://e-justice.europa.eu/pdf-export/2477_it · https://servizipst.giustizia.it/PST/resources/cms/documents/Modifiche_Novembre2015.pdf · https://www.studiocataldi.it/articoli/28775-giustizia-online-il-registro-delle-procedure.asp · https://www.gobid.it/en/auctions/Transfer-of-Business-Branch-Metalworking-Judicial-Liquidation-1-2024-Court-of-Rovereto |
| G3 Pagatore identificabile | sì | [fatto] Cerved (report con controllo procedure concorsuali e pregiudizievoli, servizi di alert su contratto), Creditsafe (convenzione Confindustria Emilia 2023: listino 773 €, scontato a 700 €), CGN "Servizio Crisi d'Impresa – Sistemi di Allerta" a scaglioni di consumo, TeamSystem Check Up Impresa (alert su soglie di rischio), Fatture in Cloud "Informazioni Commerciali" (verifica procedure concorsuali su clienti/fornitori). | https://www.cerved.com/xportal/web/@extsrc/@common/@catalogo/@documenti/@scheda/report.pdf · https://www.cerved.com/wp-content/uploads/2021/02/CGC-Credibility-20180611.pdf · https://www.confindustriaemilia.it/flex/files/1/0/3/D.4cbca04a022cae827ac5/CREDITSAFE_convenzione_2023.pdf · https://www.cgn.it/cgn2015/cgn_media/files/cgn_listini/crisi.pdf · https://www.teamsystem.com/fintech/check-up-impresa/ · https://www.fattureincloud.it/glossario/informazioni-commerciali/procedura-concorsuale/ |
| G4 Distribuzione senza pubblico | sì (plausibile) | [stima] Outbound B2B verso uffici crediti/acquisti di PMI e verso investitori in asset distressed (elencabili da registro imprese/LinkedIn); SEO su pagine per procedura/azienda ("[azienda] fallimento"). Nessuna evidenza di volumi raccolta. | non trovato (volumi) |
| G5 Rischio legale gestibile | incerto | [fatto] Il Garante privacy ha sanzionato a luglio 2026 due società per scoring creditizio basato su sistemi di informazioni commerciali (Cerved, Experian) senza informazioni sulla logica del profilo: il settore è sotto attenzione. [stima] Le società di capitali non sono dati personali, ma ditte individuali, soci, amministratori e procedure di sovraindebitamento (persone fisiche) sì. Estrazione massiva dal portale ministeriale: termini d'uso non verificati. | https://www.dirittobancario.it/art/gdpr-sanzionate-societa-di-scoring-sullaffidabilita-creditizia/ · https://www.dirittobancario.it/wp-content/uploads/2026/07/Provvedimento-Garante-Privacy-3-luglio-2026-n.-485.pdf |

**Incumbent:**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Cerved | https://cerved.com/ | Contratti B2B, prezzo su preventivo (non pubblico) | Listino non pubblico; nel report i pregiudizievoli di Conservatoria non sono esposti ma solo usati nell'indicatore (https://www.cerved.com/xportal/web/@extsrc/@common/@catalogo/@documenti/@scheda/report.pdf) |
| Creditsafe Italia | https://it.trustpilot.com/review/creditsafe.com/it/it.html | Abbonamento; 773 € listino in convenzione 2023 (700 € scontato) | Recensione Trustpilot: pregiudizievoli da acquistare a parte (singola recensione, non verificata) |
| CRIBIS (Crif) | https://cribis.com/media/cmjafccl/listino-risk-management_012024.pdf | Listino per report pubblicato (cifre non lette: dominio non raggiungibile) | non verificato |
| CGN – Crisi d'impresa | https://www.cgn.it/cgn2015/cgn_media/files/cgn_listini/crisi.pdf | A scaglioni di consumo (listino 2021) | Pensato per adempimento interno CCII, non per monitorare controparti |
| TeamSystem Check Up Impresa / Fatture in Cloud | https://www.teamsystem.com/fintech/check-up-impresa/prezzi | Prezzi non letti | Integrato nel gestionale: forte distribuzione |
| GoBid, Aste Giudiziarie, Astetelematiche | https://www.gobid.it/en/auctions/Transfer-of-Business-Branch-Metalworking-Judicial-Liquidation-1-2024-Court-of-Rovereto | Commissioni sulle vendite (gestori nominati dal curatore) | Ogni gestore pubblica solo le proprie vendite: offerta frammentata per l'investitore |
| Fallco (Zucchetti) | https://www.fallcoweb.it/public/resources/pdf/fallcoweb/liquidazione_giudiziale/implementazioni-fallco-liquidazione-giudiziale.pdf | Software per curatori | Non è un concorrente lato investitore/creditore |

**Segnali di domanda:** [fatto] 9.869 liquidazioni giudiziali aperte nel 2025 (+7,2% sul 2024); 13.470 procedure della crisi totali nel 2025 (+15,5%) — https://www.unioncamere.gov.it/sites/default/files/articoli/2026-03/26032026_com_crisimpresa_marzo2026.doc · https://www.unioncamere.gov.it/sites/default/files/Crisidimpresa/Osservatorio%20CCII-2025.pdf. Volumi di ricerca: non trovato.

**Segnali di dolore:** deboli. Una recensione Trustpilot su Creditsafe (pregiudizievoli a pagamento extra) — https://it.trustpilot.com/review/creditsafe.com/it/it.html. Nessun thread Reddit/forum trovato. Lato investitori: frammentazione delle vendite di aziende/rami tra più gestori ([stima] da osservazione dei risultati: astegiudiziarie, gobid, astetelematiche, siti dei tribunali).

**Test chatbot (C6):** [stima] Un chatbot non sa se un'azienda specifica è entrata in liquidazione ieri né invia alert: resistenza alta per il monitoraggio, bassa per le spiegazioni generiche sulle procedure.

**Motivo più forte per scartarlo:** il valore per l'utente B2B è "conosco il rischio della mia controparte", e su questo Cerved/Crif/Creditsafe/TeamSystem hanno già dati del Registro imprese, bilanci e protesti che uno scraper non ha; in più possibile obbligo di licenza TULPS e attenzione del Garante sullo scoring.

**Note per lo scoring:** C3 alto (pagatori B2B certi). C4 medio: la nicchia difendibile è lato **investitori** (aggregare vendite di aziende, rami e beni mobili da molti gestori + perizie PDF), non lato rischio di credito. C8 basso lato credito (incumbent forti), più alto lato aste mobiliari/aziende. C9: un elenco settimanale di cessioni d'azienda in liquidazione inviato a 50 potenziali acquirenti è testabile in <2 settimane.

---

### #8 — Scuole: confronto per genitori
**Verdetto:** INCERTO (G3), orientato allo scarto — esistono già strumenti gratuiti e autorevoli (Scuola in Chiaro, Eduscopio) e non è stato trovato nessuno che paghi per un confronto scuole.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Informazione e confronto su dati pubblici: nessuna autorizzazione richiesta. | — |
| G2 Dati raggiungibili | sì | [fatto] Portale Unico dei Dati della Scuola con dataset scaricabili (CSV, JSON, RDF, XML, SPARQL); Scuola in Chiaro copre statali e paritarie (dati da ANS), esclusa la Valle d'Aosta; storicamente licenza CC-BY. Dati INVALSI per scuola: non trovato. | https://www.agendadigitale.eu/scuola-digitale/scuola-italiana-habemus-open-data-ecco-perche-e-un-giorno-importante/ · https://scrap.io/it/elenco-scuole · https://sanglorian.github.io/flow/la-scuola-in-chiaro |
| G3 Pagatore identificabile | incerto | Non trovato nessun portale di listing/annunci a pagamento per scuole paritarie, né lead gen. [fatto] Le paritarie hanno rette di 5.000-8.000 €/anno (quindi un budget di marketing plausibile). [stima] tuttitalia.it e comuni-italiani.it hanno pagine scuole per comune monetizzate con pubblicità display (non verificato). | https://www.orizzontescuola.it/scuole-paritarie-ai-primi-posti-nella-classifica-eduscopio-ma-si-paga-da-5-000-a-8-000-euro-di-retta-e-accettabile/ · https://www.tuttitalia.it/scuole/istituto-superiore/ |
| G4 Distribuzione senza pubblico | sì (plausibile) | [stima] SEO programmatica su "scuole [comune]" / "liceo [città] opinioni": tuttitalia.it già lo fa con pagine per comune (1.428 istituti superiori elencati). Forte stagionalità (iscrizioni a gennaio). | https://www.tuttitalia.it/scuole/istituto-superiore/ · https://www.tuttitalia.it/lombardia/64-olgiate-comasco/82-scuole/ |
| G5 Rischio legale gestibile | sì | [stima] Dati aperti istituzionali, nessun dato personale. Recensioni dei genitori su docenti/presidi: rischio diffamazione da moderare. | — |

**Incumbent:**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Scuola in Chiaro (MIM, dentro Unica) | https://www.orizzontescuola.it/scuola-in-chiaro-lo-strumento-di-ricerca-che-aiuta-studenti-e-famiglie-a-trovare-listituto-faq-nota-e-infografica/ | Gratuito | Completezza dipende dalle scuole; dati senza data di aggiornamento e poco leggibili (rilievo Legambiente/Cittadinanzattiva sull'edilizia) |
| Eduscopio (Fondazione Agnelli) | https://www.agi.it/cronaca/news/2025-12-03/scuola-eduscopio-a-padova-il-liceo-performante-italia-34468273/ | Gratuito | Solo scuole superiori; esiti post-diploma; forte copertura stampa ogni dicembre |
| Avvenire "Cerca la tua scuola" | https://www.avvenire.it/attualita/pagine/licei-e-istituti-tecnici-l-eccellenza-delle-paritarie | Gratuito (editoriale) | Basato su Eduscopio |
| tuttitalia.it / comuni-italiani.it | https://www.tuttitalia.it/scuole/istituto-superiore/ | Pubblicità [stima] | Solo elenchi anagrafici |

**Segnali di domanda:** [fatto] Eduscopio 2025: 8.150 scuole, 1,355 milioni di diplomati analizzati; ripresa annuale da tutte le principali testate — https://www.agi.it/cronaca/news/2025-12-03/scuola-eduscopio-a-padova-il-liceo-performante-italia-34468273/. [fatto, data non verificata] Solo circa 5.000 famiglie avrebbero usato Scuola in Chiaro durante le iscrizioni online — https://www.orizzontescuola.it/iscrizioni-online-solo-5mila-famiglie-hanno-usato-la-scuola-chiaro/. Volumi di ricerca: non trovato.

**Segnali di dolore:** deboli e datati: critiche del 2012 sulla completezza dei dati (https://www.varesenews.it/2012/01/iscrizioni-a-scuola-il-ministero-innova-tra-molte-perplessita/99581/?output=pdf; https://www.orizzontescuola.it/scuola-chiaro-scuro-forniti-alle-famiglie-dati-sulle-assenze-dei-docenti/). Nessuna lamentela recente su Reddit/forum trovata.

**Test chatbot (C6):** [stima] "Qual è il miglior liceo scientifico a Bologna?" è ben servita da un motore AI che cita Eduscopio: resistenza bassa. Solo un confronto con dati non pubblicati altrove (es. recensioni proprietarie, open day, posti disponibili) resisterebbe.

**Motivo più forte per scartarlo:** il dato che i genitori cercano (classifica di qualità) è già gratuito, autorevole e mediatizzato; manca un pagatore e la domanda è concentrata in poche settimane l'anno.

**Note per lo scoring:** C3 ≤2 (nessun pagatore trovato). C4 basso (poche fonti, pulite, già aperte). C5 medio (SEO locale fattibile, ma presidiata). Penalità stagionalità. Variante più interessante: scuole paritarie/internazionali come pagatori di lead (da verificare).

---

### #9 — Asili nido, RSA, centri diurni
**Verdetto:** PASS (lato RSA/case di riposo) — dolore forte e documentato, dati frammentati in carte dei servizi e portali regionali, esiste già chi paga per la visibilità; il dato chiave "posti disponibili" però non è pubblico.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Informazione e confronto su strutture: nessuna autorizzazione; l'accesso con contributo pubblico resta in capo ad ASL/ATS. Attenzione a non fare "intermediazione" di prestazioni sanitarie. | — |
| G2 Dati raggiungibili | sì (parziale) | [fatto] Lombardia pubblica l'elenco RSA in open data; la Toscana ha un portale delle RSA accreditate con servizi e costi; ogni RSA deve pubblicare una carta dei servizi con le rette (PDF per struttura, es. ATS Val Padana). [fatto] Non esiste una vista unica dei posti liberi: in Lombardia si chiede al comune o alle strutture. Nidi: ISTAT pubblica dati aggregati, non un elenco con posti. | https://www.regione.lombardia.it/sanita/strutture-sanitarie-e-sociosanitarie/residenze-sanitarie-assistenziali-rsa · https://www.regione.toscana.it/-/residenze-sanitarie-assistenziali · https://www.ats-valpadana.it/system/files/rsa_struttura/files/3826/17428/cartaserviziRSA11-2025.pdf · https://ats-brianza.it/images/pdf/direzione/udo_sociosanitarie01-20.pdf · https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf |
| G3 Pagatore identificabile | sì | [fatto] Su Virgilio/PagineBianche (Italiaonline) le case di riposo che acquistano servizi Italiaonline sono ordinate prima delle altre: le strutture pagano già per visibilità. [fatto] Le famiglie pagano in media oltre 2.000 €/mese (Altroconsumo 2026). Lead/referral fee per RSA: non trovato. | https://aziende.virgilio.it/ita/cat/CASE_DI_RIPOSO_(110).html · https://www.altroconsumo.it/vita-privata-famiglia/servizi-e-contratti/news/inchiesta-rsa-2026 |
| G4 Distribuzione senza pubblico | sì (plausibile) | [stima] SEO programmatica su "RSA [comune]", "casa di riposo [città] costi"; i risultati attuali sono directory a pagamento (Virgilio) e pagine regionali. [fatto] Oltre 6.000 case di riposo nella directory Virgilio: base per migliaia di pagine. Volumi: non trovato. | https://aziende.virgilio.it/ita/cat/CASE_DI_RIPOSO/_(2) |
| G5 Rischio legale gestibile | sì | [stima] Dati delle strutture (persone giuridiche) e carte dei servizi pubbliche: rischio basso. Le recensioni di familiari possono contenere dati sanitari di ospiti: moderazione necessaria. | — |

**Incumbent:**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Virgilio/PagineBianche (Italiaonline) | https://aziende.virgilio.it/ita/cat/CASE_DI_RIPOSO_(110).html | Pubblicità a pagamento per le strutture | Schede brevi, niente rette/accreditamento/liste d'attesa; ordinamento a pagamento |
| Peranziani.it | https://www.avvenire.it/economia/lavoro/un-portale-di-servizi-per-la-terza-eta_30966 | Non chiaro (centrale operativa che mette in contatto) | Trustpilot 2,9/5 su 2 recensioni: "nessuna informazione sulle strutture", form senza risposta (https://at.trustpilot.com/review/peranziani.it) |
| Portali regionali (Toscana, Lombardia open data) | https://www.regione.toscana.it/-/residenze-sanitarie-assistenziali | Gratuito | Uno per regione, formati diversi, niente disponibilità |
| Bollino RosaArgento (Fondazione Onda) | https://fondazioneonda.it/ondauploads/2024/03/BROCHURE-BRA-23.02.pdf | Gratuito (premio) | Solo strutture premiate |
| Soluzione RSA (Consulcesi & Partners) | https://www.quotidianosanita.it/?p=145216 | Servizio legale per rimborsi rette | Non confronta strutture, ma mostra un mercato di lead legali sulle rette |

**Segnali di domanda:** [fatto] Fabbisogno stimato di 496 mila posti letto RSA contro 240 mila esistenti (https://www.quotidianosanita.it/?p=13486, data non verificata). [fatto] Liste d'attesa: ATS Brescia oltre 32 mila posizioni al 31/05/2026, ATS Insubria circa 16 mila (osservatorio Fnp Cisl) — https://www.ilgiorno.it/cronaca/rsa-rincari-e-attese-piu-lunghe-t9w77nj0. Nidi: 31,6 posti ogni 100 bambini nel 2023/24 (https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf). Volumi di ricerca: non trovato.

**Segnali di dolore:** [fatto] Altroconsumo 2026 (594 famiglie): soddisfazione 6,8/10, pesano attese e carenza di personale; retta media oltre 2.000 €/mese e nel 77% dei casi il reddito dell'anziano non basta — https://www.altroconsumo.it/vita-privata-famiglia/servizi-e-contratti/news/inchiesta-rsa-2026. Attese di 2-3 anni non rare (fonte giornalistica non verificata) — https://www.businessonline.it/news/il-collasso-silenzioso-delle-case-di-riposo-pubbliche-liste-dattesa-di-tre-anni-e-rette-che-aumentano-ogni-sei-mesi_n84637.html. Regole di accesso diverse per regione — https://www.quotidiano.net/economia/rsa-posti-costo-40b40ef0. Reddit/forum: non cercato (budget).

**Test chatbot (C6):** [stima] Un chatbot spiega come funziona l'accesso in RSA, ma non sa rette aggiornate per struttura né posti liberi: resistenza medio-alta se il prodotto ha rette estratte dalle carte dei servizi e, in prospettiva, disponibilità raccolte dalle strutture.

**Motivo più forte per scartarlo:** il dato che conta davvero (posto libero, tempo di attesa) non è pubblico e va ottenuto dalle strutture una per una; senza quello si rifà una directory, e la decisione delle famiglie è locale e spesso passa da ASL/assistente sociale.

**Note per lo scoring:** C1 alto (inchiesta Altroconsumo). C4 alto: migliaia di carte dei servizi PDF + 20 regimi regionali, da estrarre e aggiornare. C3 medio: pagano già per visibilità, nessun listino di lead trovato (modello estero "referral fee" da verificare). C9: pagine SEO per 2-3 province con rette estratte, test in 2 settimane su interesse delle strutture. Nidi: meno evidenze, trattare come estensione.

---

### #10 — Tempi di attesa sanitari (CUP)
**Verdetto:** INCERTO (G2, G5) — dolore e domanda fortissimi, ma i dati per struttura sono sparsi, a volte dietro SPID, e la monetizzazione via strutture private si scontra con i limiti alla pubblicità sanitaria; incumbent forte (MioDottore) sul lato privato.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì (con cautela) | [stima] Mostrare tempi di attesa non è un atto medico; prenotare per conto del paziente nel pubblico richiederebbe integrazione con i CUP (non fattibile da privato). | — |
| G2 Dati raggiungibili | incerto | [fatto] La Piattaforma nazionale liste d'attesa mostra solo dati aggregati nazionali, non per regione o struttura. Alcune regioni consentono la consultazione senza autenticazione, altre richiedono SPID/CIE. Lazio: cruscotto con tempi in tempo reale; Lombardia: rinvio ai siti delle singole ATS. | https://osservatoriocpi.unicatt.it/pubblicazioni/2025/i-primi-dati-dalla-piattaforma-nazionale-sulle-liste-di-attesa.html · https://www.ilpost.it/2025/06/26/piattaforma-nazionale-liste-attesa/ · https://federconsumatori.it/wp-content/uploads/2025/02/report-liste-attesa-nov.2024-gen2025.pdf · https://www.regione.lombardia.it/sanita/prenotazioni-e-tempi-d-attesa/tempi-attesa-pretazioni-sanitarie |
| G3 Pagatore identificabile | sì | [fatto] MioDottore: versione per specialisti da 69 € (Capterra), oltre 210 mila specialisti e 1.500 centri; CupSolidale e MioDottore confrontano prezzi nel privato. | https://www.capterra.it/software/1031131/doctoralia-pro · https://www.sanita-digitale.com/tendenze/miodottore-in-un-anno-7-milioni-di-prestazioni-mediche-prenotate-dalla-rete · https://www.altroconsumo.it/salute/dal-medico/news/piattaforma-nazionale-liste-d-attesa |
| G4 Distribuzione senza pubblico | sì | [stima] SEO su "[prestazione] [città] tempi di attesa" ad alto intento; domanda alta (vedi sotto). Volumi: non trovato. | — |
| G5 Rischio legale gestibile | incerto | [fatto] L. 145/2018 c. 525 (mod. DL 69/2023): le comunicazioni sanitarie possono contenere solo informazioni funzionali alla sicurezza dei trattamenti, senza elementi attrattivi; vigilanza AGCOM su segnalazione degli Ordini. [stima] Scraping automatizzato di portali dietro SPID non è sostenibile; la query "visita X" non è dato personale finché non si salva per utente. | https://www.filodiritto.com/medicina-estetica-e-piattaforme-digitali-come-trovare-il-medico-estetico-tra-vuoti-normativi-e-nuove-tutele · https://portolano.it/newsletter/portolano-cavallo-inform-life-sciences/the-2019-budget-law-restricts-the-scope-of-health-services-advertising · https://odmeo.re.it/wp-content/uploads/2025/03/Documentazione-normativainformazionesanitaria-agg20-2-2025.pdf |

**Incumbent:**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| MioDottore (Docplanner) | https://www.capterra.it/software/1031131/doctoralia-pro | Abbonamento medici/centri (da 69 €; prezzo IVA non chiaro secondo una recensione) | Solo privato; non confronta con l'attesa pubblica |
| CupSolidale | https://www.altroconsumo.it/salute/dal-medico/news/piattaforma-nazionale-liste-d-attesa | Prenotazione privato, confronto prezzi | Non verificato in dettaglio |
| CUP regionali (ReCup Lazio, CUP unico Lombardia) | https://agendadigitale.eu/sanita/cup-online-regione-per-regione | Pubblico | Uno per regione, alcuni dietro SPID, nessun confronto con il privato |
| Piattaforma nazionale liste d'attesa (Agenas/Ministero) | https://www.ilpost.it/2025/06/26/piattaforma-nazionale-liste-attesa/ | Pubblico | Solo aggregati nazionali; giudicata un flop sulla trasparenza (https://en.ilsole24ore.com/art/waiting-lists-platform-flop-citizens-there-is-still-little-transparency-AHBi1jFD) |

**Segnali di domanda:** [fatto] Nel 2024 il 6,8% della popolazione ha rinunciato ad almeno una prestazione per le liste d'attesa (4,5% nel 2023) — https://www.ilpost.it/2025/05/22/rinuncia-cure-italia-liste-attesa/ · https://pagellapolitica.it/articoli/aumento-rinuncia-visite-mediche. MioDottore: 7 milioni di prestazioni prenotate in un anno — https://www.sanita-digitale.com/tendenze/miodottore-in-un-anno-7-milioni-di-prestazioni-mediche-prenotate-dalla-rete.

**Segnali di dolore:** [fatto] Rinuncia alle cure in crescita (sopra); OCPI: i nuovi dati rischiano di sovrastimare la qualità del servizio — https://osservatoriocpi.unicatt.it/ocpi-Liste%20d%20attesa%20perche%20i%20nuovi%20dati%20rischiano%20di%20sovrastimare%20la%20qualita%20del%20servizio.pdf; "odissea" visite in Lombardia — https://www.ilgiorno.it/cronaca/visite-sanitarie-lombardia-odissea-ks01g2mo. Reddit/forum: non cercato (budget).

**Test chatbot (C6):** [stima] Un chatbot non conosce la prima disponibilità di oggi al CUP: resistenza alta se i dati sono freschi. Ma la disponibilità reale si vede solo con impegnativa al momento della prenotazione.

**Motivo più forte per scartarlo:** il dato fresco e utile (prima disponibilità per struttura) sta dentro i CUP, spesso dietro autenticazione e legato all'impegnativa; i dati pubblici sono tempi medi/ex-post. E il pagatore naturale (strutture private) è già servito da MioDottore, con vincoli sulla pubblicità sanitaria.

**Note per lo scoring:** C1 e C2 massimi. C3 medio (MioDottore dimostra disponibilità a pagare, ma è il concorrente). C4 alto se si riesce a mappare 21 regioni/centinaia di ASL; prova tecnica obbligatoria prima di decidere (quante regioni espongono tempi per struttura senza SPID). C8 basso lato privato, alto lato pubblico. Penalità per rischio legale (c. 525) e dipendenza da portali regionali.

---

### #11 — Normativa e giurisprudenza con AI
**Verdetto:** INCERTO (G2) — gate probabilmente superabili, ma il mercato è appena stato occupato da un concorrente italiano con 73 M$ raccolti oltre agli editori giuridici; evidenze parziali (budget di ricerca esaurito).

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Software di ricerca per professionisti: nessuna autorizzazione. Lexroom opera senza licenze dichiarate. | https://forbes.it/2025/09/29/lexroom-round-16-milioni-espansione-internazionale/ |
| G2 Dati raggiungibili | incerto | Normattiva/Gazzetta Ufficiale pubbliche [stima, non verificato in questa sessione]. Giurisprudenza: disponibilità di sentenze di merito e di Cassazione in accesso libero **non verificata** (ricerca non eseguita per esaurimento budget). | non trovato |
| G3 Pagatore identificabile | sì | [fatto] Lexroom: oltre 1.000 clienti dopo il pre-seed, base clienti triplicata in sei mesi (2025), Series B da 50 M$ (maggio 2026), 73 M$ raccolti in totale; il suo posizionamento è convertire la spesa per banche dati giuridiche in spesa AI. | https://forbes.it/2025/03/11/questa-startup-ha-raccolto-2-milioni-di-euro-per-semplifica-il-lavoro-degli-avvocati-con-lia/ · https://forbes.it/2025/09/29/lexroom-round-16-milioni-espansione-internazionale/ · https://forbes.it/2026/05/19/lexroom-50-milioni-dollari-portare-ia-avvocati-europa · https://thenextweb.com/news/lexroom-50-million-series-b-civil-law-legal-ai-europe |
| G4 Distribuzione senza pubblico | sì (plausibile) | [stima] Outbound verso studi legali e commerciali (albi professionali pubblici, quindi elencabili); SEO su "art. X codice civile" fortemente presidiata da Brocardi e simili (non verificato). | non trovato |
| G5 Rischio legale gestibile | incerto | [stima] Le sentenze contengono dati personali (anonimizzazione obbligatoria in molti casi); le massime e le note degli editori sono protette (diritto d'autore e sui generis): usare solo fonti primarie. Non verificato con fonti. | non trovato |

**Incumbent:**
| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Lexroom.ai | https://forbes.it/2026/05/19/lexroom-50-milioni-dollari-portare-ia-avvocati-europa | Abbonamento (prezzi non trovati) | Nessuno osservato: ben finanziato, in crescita rapida |
| Giuffrè DeJure, Wolters Kluwer OneLegale, Leggi d'Italia | non verificato (ricerca non eseguita) | non trovato | non trovato |

**Segnali di domanda:** [fatto] Crescita Lexroom (clienti triplicati in 6 mesi) — https://forbes.it/2025/09/29/lexroom-round-16-milioni-espansione-internazionale/. Altri: non trovato.

**Segnali di dolore:** non trovato (non cercato per esaurimento budget).

**Test chatbot (C6):** [stima] Per domande normative generiche i chatbot rispondono già bene; resistono solo prodotti con corpus giurisprudenziale completo e citazioni verificabili, alert su modifiche normative e integrazione nel flusso dello studio. È esattamente dove investe Lexroom.

**Motivo più forte per scartarlo:** un concorrente locale con 73 M$ e migliaia di clienti più gli editori storici: C8 (debolezza incumbent) minimo e nessun vantaggio di dati per uno scraper (le fonti primarie sono uniche e pubbliche, quindi replicabili; le secondarie sono protette).

**Note per lo scoring:** C3 alto, C4 basso, C7 basso, C8 1. Eventuale nicchia: alert normativi verticali (es. per un singolo settore regolato) invece di ricerca giuridica generalista; da verificare.

---

### #12 — Marchi e brevetti
**Verdetto:** INCERTO (tutti i gate) — **nessuna evidenza raccolta**: il budget di ricerche web si è esaurito prima di questo candidato e i siti non erano raggiungibili direttamente. Da rifare.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | incerto | [stima] Ricerca di anteriorità e sorveglianza marchi sono servizi informativi; la rappresentanza davanti a UIBM/EUIPO è riservata a consulenti abilitati/avvocati. Da verificare. | non trovato |
| G2 Dati raggiungibili | incerto | [stima] UIBM, EUIPO (eSearch, TMview) e WIPO hanno banche dati pubbliche, alcune con API/dataset; da verificare termini d'uso. | non trovato |
| G3 Pagatore identificabile | incerto | [stima] Sorveglianza marchi è un servizio venduto da studi di PI e da operatori internazionali; prezzi non verificati. | non trovato |
| G4 Distribuzione senza pubblico | incerto | [stima] Outbound verso PMI che hanno appena depositato un marchio (elenco ricavabile dai bollettini): da verificare se lecito/sostenibile. | non trovato |
| G5 Rischio legale gestibile | incerto | [stima] Titolari persone fisiche nei registri = dati personali; outbound su questi dati da valutare (GDPR, legittimo interesse). | non trovato |

**Incumbent:** non trovato (non cercato).
**Segnali di domanda:** non trovato.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] La ricerca di anteriorità richiede interrogare banche dati aggiornate e confronto fonetico/grafico: un chatbot generalista non la sostituisce; la sorveglianza continua (alert) ancora meno.
**Motivo più forte per scartarlo:** [stima] gli uffici pubblici (EUIPO/TMview) offrono ricerca gratuita e buona; il mercato professionale è servito da operatori internazionali consolidati. Da verificare.
**Note per lo scoring:** tutti i criteri ≤2 finché non si raccolgono evidenze (regola del metodo).

---

## Nuovi candidati emersi
1. **Cessioni di aziende e rami d'azienda da procedure concorsuali (lato acquirenti)** — le vendite sono sparse tra gestori diversi (GoBid, Aste Giudiziarie, Astetelematiche, siti dei tribunali) con bandi e perizie in PDF; 9.869 liquidazioni giudiziali nel 2025 alimentano il flusso. Fonti: https://www.gobid.it/en/auctions/Transfer-of-Business-Branch-Metalworking-Judicial-Liquidation-1-2024-Court-of-Rovereto · https://www.tribunale.venezia.giustizia.it/docs/pagine/VENDITE/LG%2037_24/AVVISO%20DI%20CESSIONE%20D'AZIENDA_Redatto.pdf
2. **Comparatore di rette RSA estratte dalle carte dei servizi** — ogni RSA deve pubblicare le rette in un PDF; nessuno le aggrega a livello nazionale, e la retta media supera i 2.000 €/mese. Può alimentare anche lead per servizi legali sul rimborso delle rette (es. Soluzione RSA). Fonti: https://www.ats-valpadana.it/system/files/rsa_struttura/files/3826/17428/cartaserviziRSA11-2025.pdf · https://www.quotidianosanita.it/?p=145216
3. **Mappa dei portali regionali dei tempi di attesa (prova tecnica prima del #10)** — non un prodotto, ma un censimento delle 21 regioni/ASL che espongono tempi per struttura senza SPID: decide se il #10 è fattibile. Fonte: https://federconsumatori.it/wp-content/uploads/2025/02/report-liste-attesa-nov.2024-gen2025.pdf
