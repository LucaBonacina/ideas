# 03 — Screening PA Italia (parte 1): candidati #1-#6

Data di accesso alle fonti: 2026-11-19.

**Limiti di questa raccolta (leggere prima di usare le evidenze):**
- WebFetch non era utilizzabile (host esterni non risolti nella sessione: realadvisor.it, investireoggi.it, apify.com) e anche `curl` non raggiungeva la rete. **Tutte le evidenze vengono dai riassunti/snippet di WebSearch**, non dalla lettura diretta delle pagine. Prezzi e numeri vanno riverificati aprendo l'URL prima dello scoring.
- Il budget di ricerche web della sessione si è esaurito durante il candidato #5: **il candidato #6 non ha ricevuto nessuna ricerca dedicata** e il #5 è incompleto. Dove manca l'evidenza è scritto "non trovato" e il gate è "incerto".
- [fatto] = riportato da una fonte con URL; [stima] = ragionamento dichiarato.

---

### #1 — Aste giudiziarie immobiliari
**Verdetto:** PASS (con riserva sulla saturazione) — tutti i gate superati, ma il segmento "AI + alert + stima vs OMI" ha già almeno 5-6 prodotti a pagamento lanciati di recente e il mercato sottostante è in calo.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Esistono numerosi servizi privati di ricerca/analisi aste a pagamento (AstaScout, Astalista, AI Aste, Radarcase) che operano come software, senza albi. Attenzione solo a non svolgere mediazione immobiliare (che richiede iscrizione) o "assistenza all'asta" su commissione. | https://astascout.it/ ; https://www.astalista.it/pricing |
| G2 Dati raggiungibili | sì | [fatto] Il Portale delle Vendite Pubbliche (PVP) è pubblico, consultabile senza registrazione; l'accesso via interoperabilità è riservato ai siti registrati e approvati dal Ministero. Dal 28/10/2024 esiste la Banca Dati Aste Giudiziarie (BDAG). Esiste già almeno uno scraper commerciale del PVP su Apify (prova che lo scraping è fattibile). | https://e-justice.europa.eu/topics/court-procedures/judicial-auctions/it_it ; https://servizipst.giustizia.it/PST/resources/cms/documents/Manuale_operativo_registrazione_Siti_Internet_Pubblicita_e_Gestori_Vendite_telematiche_PVP_27062017.pdf ; https://pst.giustizia.it/PST/resources/cms/documents/BDAG_ST_V1.2_23092024.pdf ; https://apify.com/webdata_labs/italy-pvp-auctions-api.md |
| G3 Pagatore identificabile | sì | [fatto] Abbonamenti pubblici: AstaScout 10-39 €/mese; Astalista Pro 49 €/mese, Team 99 €/mese; AI Aste 29 €/mese; Radarcase Professional 29 €/mese + IVA; Real Estate Pro (Bardolla) 100 €/mese + IVA per ramo; 100x Real Estate 97-697 €/mese. | https://astascout.it/ ; https://www.astalista.it/pricing ; https://aiaste.it/ ; https://www.radarcase.it/piani.html ; https://www.alfiobardolla.com/strumenti-per-investitori/real-estate-pro/ ; https://www.100xmentality.it/100x-real-estate |
| G4 Distribuzione senza pubblico | sì | [stima] SEO programmatica su "aste immobiliari + comune/tribunale" (~65-75 mila immobili/anno = migliaia di pagine con scadenza naturale); outbound verso agenzie e consulenti NPL. Non verificati volumi di ricerca (strumenti SEO non accessibili). | Volumi aste: https://www.aziendabanca.it/notizie/banche/italia-aste-immobiliari-in-frenata-nel-2025 |
| G5 Rischio legale gestibile | sì (con cautele) | [fatto] Il Garante (provv. 2008, GU n. 47 del 25/02/2008) vieta di indicare il nome del debitore negli avvisi; le perizie pubblicate sono in "versione privacy". Il rischio residuo è nei PDF non correttamente oscurati: va filtrata l'estrazione. Sui generis: il PVP è banca dati pubblica del Ministero; estrazione sistematica di parte sostanziale da valutare, ma i dati sono anche ripubblicati da molti siti autorizzati. Termini d'uso del PVP: non trovati. | https://www.studiocataldi.it/articoli/5316-privacy-aste-giudiziarie-no-ai-nomi-dei-debitori.asp ; https://www.tribunale.livorno.it/documentazione/D_99806.pdf |

**Incumbent:**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| Portale Vendite Pubbliche (Ministero) | https://pvp.giustizia.it | Gratuito | Ricerca per raggio che restituiva tutta Italia e incongruenze con i siti privati (articolo di un magistrato, 2018: datato) — https://www.agendadigitale.eu/documenti/portale-vendite-pubbliche-giudiziarie-che-pasticcio-la-giustizia-digitale-come-rimediare/ |
| Astegiudiziarie.it / Aste Giudiziarie Inlinea (app) | https://apps.apple.com/us/app/aste-giudiziarie/id357538229 | Gratuito (pagano i tribunali/procedure per la pubblicità) | Lista, non analisi (non verificato con prova d'uso) |
| Astalegale, GPS Aste, Aste Progess (app) | https://apps.apple.com/it/app/gps-aste/id860036927 | Gratuite | Non verificato |
| Wikicasa Auction | https://www.aziendabanca.it/notizie/fintech-insurtech/wikicasa-auction | Prezzo non trovato | Orientato a operatori NPE, rete di 15.000 agenti |
| AstaScout (AI su perizie, OMI, red flag) | https://astascout.it/ | 10-39 €/mese | Nuovo, prova d'uso non fatta |
| Astalista (ROI, radar, alert) | https://www.astalista.it/pricing | 49-99 €/mese | Idem |
| AI Aste (ranking per margine) | https://aiaste.it/ | 29 €/mese, prova 7 gg | Stima = mq × OMI: grezza |
| Radarcase (mappa immobili a sconto) | https://www.radarcase.it/piani.html | Free + 29 €/mese + IVA | Idem |
| Real Estate Pro (Bardolla) | https://www.alfiobardolla.com/strumenti-per-investitori/real-estate-pro/ | 100 €/mese + IVA per ramo | Monitora 5.000 aste |
| 100x Real Estate | https://www.100xmentality.it/100x-real-estate | 97-697 €/mese | Idem |

**Segnali di domanda:**
- [fatto] 74.625 immobili all'asta nel 2025 (RINA Prime, -4,9%); 65.158 nei primi 9 mesi 2026 (-15,2% a/a). Mercato in **calo**. https://www.aziendabanca.it/notizie/banche/italia-aste-immobiliari-in-frenata-nel-2025 ; https://www.italiaoggi.it/diritto-e-fisco/giustizia/aste-immobiliari-nei-primi-nove-mesi-del-2026-una-flessione-del-15-2-r04wl1v5
- [fatto] Copertura costante della stampa generalista (idealista news, Quotidiano.net, Money.it) = interesse B2C: https://www.money.it/comprare-casa-all-asta-con-un-budget-limitato-la-guida-per-non-pagare-piu-del-mercato
- Volumi di ricerca Google / traffico dei concorrenti: **non trovato**.

**Segnali di dolore:**
- [fatto, datato] Ricerca geografica del PVP difettosa e dati incoerenti tra portali (2018): link sopra.
- [fatto] Lettura delle perizie e calcolo dei costi nascosti è il problema che i nuovi entranti dichiarano di risolvere (AstaScout: red flag, costi all-in) — è una dichiarazione di marketing, non una lamentela utente.
- Lamentele dirette di utenti (Reddit, recensioni): **non trovato**.

**Test chatbot (C6):** [stima] Un chatbot spiega bene "come funziona un'asta", ma non conosce le aste attive di domani, i ribassi in corso né il contenuto della perizia specifica. Il valore (alert, scadenze, analisi della singola perizia) è resistente all'AI generalista; tuttavia un utente può caricare la perizia PDF in un chatbot e ottenere una sintesi decente, il che erode la funzione "sintesi AI delle perizie" in quanto differenziale.

**Motivo più forte per scartarlo:** saturazione recente. Almeno 6 prodotti a pagamento con la stessa proposta (alert + perizia AI + stima OMI) a 10-100 €/mese, su un mercato che si sta restringendo (-15% nel 2026). Il differenziale "scraping" è debole: fonte quasi unica (PVP) e già scrapata da terzi.

**Note per lo scoring:**
- C3: prezzi B2C/prosumer 10-100 €/mese documentati → 3 circa.
- C4: fonte principale unica (PVP) + PDF perizie + OMI: arricchimento possibile (storico ribassi, esiti da BDAG), ma replicabile → 2-3.
- C7: lo storico degli esperimenti di vendita e dei prezzi di aggiudicazione si accumula (BDAG dal 2024 contiene le offerte: verificare se pubblica).
- C8: incumbent nuovi e attivi → debolezza bassa.
- C9: esperimento rapido possibile (landing + SEO su 1 tribunale), ma la concorrenza rende ambiguo il segnale.

---

### #2 — Gare d'appalto pubbliche
**Verdetto:** PASS — pagatori chiari e consolidati (abbonamenti da centinaia a migliaia di €/anno), ma concorrenza forte (incumbent storici + startup AI finanziata con 7,6 M€) e dati sempre più centralizzati in ANAC.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Servizi di segnalazione gare operano da decenni come editori/software (Telemat, Infordat, Infoappalti, Appaltitalia). | https://www.telemat.it/gare/ ; https://www.infoappalti.it/presenta/abbonamenti.htm |
| G2 Dati raggiungibili | sì | [fatto] Dal 1/1/2024 la pubblicità legale dei bandi passa dalla BDNCP di ANAC (alimentata dalle piattaforme certificate); ANAC espone open data e API su dati.anticorruzione.it (accesso PA via PDND). I documenti di gara (capitolati) restano sulle piattaforme telematiche delle stazioni appaltanti. | https://www.anticorruzione.it/en/-/pubblicit%C3%A0-legale-dei-bandi-di-gara-ecco-come-fare-tramite-la-banca-dati-anac ; https://www.agid.gov.it/sites/default/files/repository_files/ecosistema_eprocurement_anac_2023-05-04.pdf ; https://www.anticorruzione.it/-/banca-dati-nazionale-dei-contratti-pubblici-2 |
| G3 Pagatore identificabile | sì | [fatto] Infordat: 2.300 € + IVA per 12 mesi (categorie progettazione, offerta 2024 all'Ordine Architetti Genova); Infoappalti da 200 €/240 € l'anno per categoria; Telemat 480 €/anno + IVA (listino Assintel molto datato); Cato: SaaS in abbonamento, >100 clienti; NetworkPA benchmark 500/900 €. | https://ordinearchitetti.ge.it/wp-content/uploads/2024/09/2024-06-offerta-ordine-archietti_12-mesi_genova.pdf ; https://www.infoappalti.it/presenta/abbonamenti.htm ; https://www.assintel.it/wp-content/uploads/2015/03/listino-e-servizi-aggiuntivi.doc ; https://www.aziendabanca.it/notizie/fintech-insurtech/cato-primo-anno-attivita ; https://www.digitalpa.it/images/Brochure/NetworkPA-La-rete-di-appalti-piu-grande-Italia.pdf |
| G4 Distribuzione senza pubblico | sì | [stima] Target B2B elencabile (imprese con attestazione SOA, fornitori MEPA, iscritti agli ordini professionali; convenzioni con ordini e associazioni già usate da Infordat). SEO su "gare + categoria + regione" plausibile. | https://ordinearchitetti.ge.it/convenzione-con-infordat-appalti/ |
| G5 Rischio legale gestibile | sì | [fatto] Dati di gara = atti pubblici con obbligo di pubblicità legale; ANAC li rende "liberamente accessibili" nel rispetto della normativa privacy (delibera 264/2018). Dati personali limitati (RUP, aggiudicatari ditte individuali). Termini d'uso delle singole piattaforme telematiche: non trovati. | https://www.anticorruzione.it/-/banca-dati-nazionale-dei-contratti-pubblici-2 |

**Incumbent:**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| Telemat | https://www.telemat.it/gare/ | Su preventivo (480 €/anno + IVA in listino storico) | Prodotto "a segnalazione", prova d'uso non fatta |
| Infordat Appalti | https://ordinearchitetti.ge.it/servizi/convenzioni/infordat-appalti/ | 2.300 € + IVA/anno (categorie PR) | Prezzo alto, vendita via convenzioni |
| Infoappalti | https://www.infoappalti.it/presenta/abbonamenti.htm | da 200-240 €/anno per categoria | Sito dall'aspetto datato (URL .htm) — non prova d'uso |
| Appaltitalia | https://www.appaltitalia.it/abbonamenti.asp | A pacchetti di documenti (50-750), prezzi non trovati | Modello a consumo |
| TuttoAppalti | https://www.tuttoappalti.it/gare-portali-telematici/ | Non trovato | — |
| Cato (+ Avvista.ai) | https://forbes.it/2026/09/07/cato-round-6-milioni-ai-appalti-pubblici | SaaS, prezzo non pubblico; raccolti 7,6 M€ | **Forte e moderno** |
| ANCE "AI Gare e Procurement" | https://ance.it/2026/10/ai-gare-e-procurement-online-la-registrazione-del-webinar-di-presentazione-della-piattaforma/?print=pdf | Per associati ANCE (prezzo non trovato) | Canale associativo forte nell'edilizia |
| TenderingOS (Neo Vision), FBK life sciences | https://quifinanza.it/innovazione/intelligenza-artificiale/ai-gare-appalto/959714/ | Non trovato | Verticali |

**Segnali di domanda:**
- [fatto] BDNCP: oltre 20 milioni di appalti dal 2007 (stock enorme di dati). https://www.anticorruzione.it/-/banca-dati-nazionale-dei-contratti-pubblici-2
- [fatto] Cato >100 clienti nel primo anno e round da 6 M€ nel 2026 → domanda validata da investitori. https://www.aziendabanca.it/notizie/fintech-insurtech/cato-primo-anno-attivita
- [fatto] In Emilia-Romagna solo un'impresa su quattro è abilitata agli appalti pubblici (spazio di crescita del mercato servibile). https://www.ilrestodelcarlino.it/reggio-emilia/economia/in-emilia-romagna-solo-unimpresa-su-quattro-e-abilitata-a-partecipare-agli-appalti-pubblici-un-incontro-prova-a-raccontare-perche-e-come-qualcosa-sta-iniziando-a-cambiare-u0c6lyao
- Volumi di ricerca: **non trovato**.

**Segnali di dolore:**
- [fatto] "Babele" di piattaforme di e-procurement con interfacce diverse; le imprese si limitano a 1-2 piattaforme (Agenda Digitale, 2022). https://www.agendadigitale.eu/?p=237078
- [fatto] PMI con risorse limitate negli acquisti/gare (Sole 24 Ore); lotti troppo grandi (Consip, tavolo PMI). https://en.ilsole24ore.com/art/la-maturita-digitale-funzione-acquisti-piccole-e-medie-imprese-AEI9Wp9 ; https://www.consip.it/sites/default/files/documenti/Consip%20Market%20day%20-%20Tavolo%20PMI_0.pdf
- [fatto] 2026: "digitalizzazione incompiuta e procedure frammentate" (ItaliaOggi). https://www.italiaoggi.it/enti-locali-e-pa/contratti-pubblici-i-sindaci-lanciano-lallarme-troppa-burocrazia-e-una-digitalizzazione-che-non-funziona-nheog8ep
- Recensioni negative su incumbent specifici: **non trovato**.

**Test chatbot (C6):** [stima] Un chatbot non sa quali gare escono oggi per la mia categoria SOA nella mia regione, né legge i capitolati sulle piattaforme che richiedono login. Alert, matching e storico aggiudicatari sono resistenti. Nota: ANAC sta introducendo obblighi di dichiarare l'uso dell'IA nelle offerte (https://www.italiaoggi.it/enti-locali-e-pa/appalti-pubblici/gare-dappalto-svolta-anac-obbligo-di-dichiarare-luso-dellia-e-nuove-regole-per-servizi-e-progettazione-duocxk5x).

**Motivo più forte per scartarlo:** la centralizzazione in BDNCP (dal 2024) riduce il vantaggio dello scraping sulla parte "trovare la gara" (fonte unica, API ANAC), mentre la parte a valore (capitolati, preparazione offerta) è già presidiata da una startup ben finanziata (Cato) e dalle associazioni di categoria (ANCE).

**Note per lo scoring:**
- C3 alto: B2B con 200-2.300 €/anno documentati → 4.
- C4: medio. Bandi centralizzati, ma documenti di gara su decine di piattaforme certificate diverse (elenco ANAC "regpiacert"), esiti, sotto-soglia e affidamenti diretti sparsi → 3.
- C5: target elencabile (outbound) → 4.
- C8: incumbent storici datati ma nuovo entrante forte → 2-3.
- C9: esperimento outbound a una nicchia (es. una categoria SOA in una regione) in 2 settimane fattibile.

---

### #3 — Bandi e finanziamenti agevolati
**Verdetto:** PASS (debole) — dati frammentati e dolore documentato, ma esiste un portale ufficiale gratuito (incentivi.gov.it) e almeno 3 startup AI già sul mercato; prezzi degli incumbent quasi mai pubblici.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Informare su bandi e verificare l'idoneità non richiede albi. Attenzione: se si passa ad "assistenza all'ottenimento di finanziamenti" bancari/garantiti si rischia di sconfinare nella mediazione creditizia (OAM). Restare su contributi a fondo perduto/agevolazioni pubbliche e software. | non trovato riferimento normativo specifico in questa sessione |
| G2 Dati raggiungibili | sì | [fatto] incentivi.gov.it (MIMIT/Invitalia) con >1.000 incentivi e 374 amministrazioni; frammentazione su centinaia di portali di Regioni, Camere di commercio e Comuni; ~2.900 bandi/anno (dato citato da Muffin). API/open data di incentivi.gov.it: **non trovati**. | https://www.mimit.gov.it/it/notizie-stampa/portale-incentivi-gov-it-oltre-1000-gli-incentivi-pubblicati-e-374-le-amministrazioni-coinvolte ; https://www.agendadigitale.eu/?p=215487 ; https://www.economyup.it/?p=177636 |
| G3 Pagatore identificabile | sì | [fatto] BandoSubito PRO: abbonamento B2B modulare per consulenti e commercialisti (prezzo non pubblico); Fundo.one con piani e prova 7 gg; FASI: 430 € + IVA per 3 mesi (2014, molto datato); IPSOA Quotidiano Premium 118,90 €/anno (editoriale). | https://www.economyup.it/startup/bandosubito-come-e-nata-e-come-cresce-la-startup-che-semplifica-laccesso-alla-finanza-agevolata-con-lai/ ; https://fundo.one/ ; https://wnews.tinextainnovationhub.com/images/Moduli/Modulo_Iscrizione_Corso-IFI-II.pdf |
| G4 Distribuzione senza pubblico | sì | [stima] SEO "bando + regione + settore" (pagine a scadenza, molto long tail, già sfruttata da incentivimpresa.it, soraia.io, sprintx.it); outbound a commercialisti e consulenti (elenchi pubblici degli ordini). | https://www.incentivimpresa.it/bandi-secondo-semestre-2026-mappa/ |
| G5 Rischio legale gestibile | sì | [stima] Bandi = atti pubblici senza dati personali rilevanti. Nessuna evidenza contraria trovata. | — |

**Incumbent:**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| incentivi.gov.it (MIMIT) | https://www.mimit.gov.it/it/notizie-stampa/online-la-nuova-versione-del-portale-incentivi-gov-it-strumento-semplice-ed-efficace-per-trovare-le-agevolazioni-della-p-a | Gratuito | Copertura dipende dal caricamento delle amministrazioni; nucleo del nuovo Codice degli incentivi (si rafforzerà) |
| BandoSubito | https://www.aziendabanca.it/notizie/imprese/bandosubito-piattaforma-finanza-agevolata | Non pubblico; 300+ fonti monitorate; round 2 M€ | Moderno |
| Fundo.one | https://fundo.one/ | Piani non letti; prova 7 gg; 600+ bandi | Moderno |
| FASI (fasi.eu) | https://www.confcommerciomilano.it/export/sites/unione/doc/impresa_persona/servizi_impresa/FASI.pdf | Registrazione; prezzi attuali non trovati | Banca dati storica |
| Bsness, Muffin, IPSOA, siti SEO (incentivimpresa, soraia) | https://www.bsness.com/finanziamenti/finanziamenti-agevolazioni-commercialista/ | Non trovato | — |
| Società di consulenza in finanza agevolata (es. Tinexta Innovation Hub) | https://www.aziendabanca.it/notizie/imprese/la-finanza-agevolata-per-accelerare-la-doppia-trasformazione-delle-pmi | Success fee (non trovato importo) | Sono anche potenziali clienti |

**Segnali di domanda:**
- [fatto] ~2.900 bandi/anno; >1.000 incentivi su incentivi.gov.it. Link sopra.
- [fatto] Copertura editoriale continua (ANCE newsletter mensile agevolazioni, newsletter camerali "newsbandi"). https://ance.it/wp-content/uploads/allegati/Newsletter_Agevolazioni_e_incentivi_Luglio_2026.pdf ; https://www.ptpo.camcom.it/doc/news/newsletter/2025/newsbandi-06-2025.pdf
- Volumi di ricerca: **non trovato**.

**Segnali di dolore:**
- [fatto] "Frammentazione del sistema, con centinaia di portali diversi" (Agenda Digitale). https://www.agendadigitale.eu/?p=215487
- [fatto] Click day che premiano la velocità; riforma in corso per abolirli e verificare i requisiti a monte. https://www.italiaoggi.it/diritto-e-fisco/diritto-e-impresa/imprese-addio-click-day-per-gli-aiuti-e-requisiti-verificati-a-monte-vj46opg0
- Lamentele utente dirette: **non trovato**.

**Test chatbot (C6):** [stima] Per "quali bandi esistono per la digitalizzazione in Lombardia" un motore AI restituisce già articoli SEO aggiornati (molti siti scrivono pagine "bandi 2026"): la parte informativa è **debole** contro l'AI. Resistono: alert su nuove uscite, verifica di idoneità sui dati dell'azienda, scadenzario per il portafoglio clienti di un commercialista.

**Motivo più forte per scartarlo:** lo Stato sta costruendo la stessa cosa gratis (incentivi.gov.it al centro del nuovo Codice degli incentivi, interoperabile col Registro Nazionale Aiuti) e la riforma punta a semplificare i bandi; nel frattempo il segmento privato ha già 3+ startup AI e il valore vero (scrivere la domanda) è servizio professionale, non software.

**Note per lo scoring:**
- C3: medio, pagatore = consulenti/commercialisti; prezzi non pubblici → max 2-3 finché non si trovano listini.
- C4: buono (centinaia di fonti regionali/camerali/comunali eterogenee, PDF) → 4.
- C6: debole sulla parte informativa → 2-3.
- C7/C8: incumbent moderni → bassa debolezza.

---

### #4 — Concorsi pubblici
**Verdetto:** PASS (debole) — domanda B2C enorme e pagatori presenti, ma il portale unico obbligatorio inPA ha ridotto la frammentazione (vantaggio scraping basso) e il mercato è presidiato da incumbent con grande traffico SEO.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Siti privati di concorsi e corsi operano liberamente (Concorsando, Concorsipubblici.com, Ticonsiglio). | https://www.concorsando.it/blog/corsi-online |
| G2 Dati raggiungibili | sì | [fatto] inPA è il portale unico, obbligatorio dal luglio 2023 per Regioni, Comuni, Università, ASL; consultazione dei bandi pubblica, candidatura con SPID/CIE e PEC. API/open data inPA: **non trovati**. | https://funzionepubblica.gov.it/sites/funzionepubblica.gov.it/files/brochureinpa_0.pdf ; https://www.concorsando.it/blog/portale-reclutamento-inpa/ |
| G3 Pagatore identificabile | sì | [fatto] Concorsando Academy 34,99-39,99 €/mese; Concorsipubblici.com vende notifiche personalizzate a pagamento; mercato dei corsi/manuali (editori). | https://www.concorsando.it/blog/corsi-online ; https://www.concorsipubblici.com/articolo/come-ricevere-notifiche-personalizzate-sui-concorsi-pubblici-e-non-perdere-piu-un-bando |
| G4 Distribuzione senza pubblico | sì (difficile) | [fatto] Concorsando dichiara 750.000+ visite/mese da Google: il canale SEO esiste ma è occupato. | https://www.concorsando.it/blog/progetto-per-enti-corsi-di-formazione-concorsando-soluzione-di-crescita/ |
| G5 Rischio legale gestibile | sì | [fatto] Ogni amministrazione è titolare autonoma dei dati dei bandi; i bandi in sé non contengono dati personali rilevanti. Graduatorie con nomi = dati personali: da evitare/valutare. | https://www.inpa.gov.it/privacy/ ; https://edotto.com/articolo/online-le-faq-su-trattamento-dati-e-trasparenza-nei-concorsi-pubblici |

**Incumbent:**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| inPA (Funzione Pubblica) | https://www.inpa.gov.it/ | Gratuito | Problemi di registrazione/invio (proroghe di 24h nel 2023); niente import automatico del CV (critica StartMag); alert sul profilo non confermati da fonte ufficiale |
| Concorsando.it | https://www.concorsando.it/ | Academy 34,99-39,99 €/mese; Simulatore quiz | Dichiara 1,6 M utenti/mese, 1,4 M utenti del simulatore: **forte** |
| Concorsipubblici.com | https://www.concorsipubblici.com/ | Notifiche a pagamento (prezzo non trovato) | — |
| Ticonsiglio, Orizzontescuola, Edises/Simone (editori) | https://www.ticonsiglio.com/concorsi-pubblici-bandi-scadenza-settimana-8-14-dicembre-2025/ | Pubblicità / libri / corsi | — |

**Segnali di domanda:**
- [fatto] inPA: ~3,2 milioni di iscritti, >63.000 procedure e >730.000 posizioni dall'avvio; 208.736 posizioni nell'ultimo anno (FPA). https://www.astrid-online.it/static/upload/foru/forum-pa-2025_ricerca.pdf
- [fatto] ~700.000 candidature in un gennaio per ~10.000 posti (anno da verificare). https://www.orizzontescuola.it/pubblica-amministrazione-boom-di-candidature-a-gennaio-700mila-aspiranti-per-10mila-posizioni-zangrillo-celebra-linversione-di-tendenza-dopo-anni-di-blocco-del-turnover/
- [fatto] Concorsando 750k+ visite/mese da Google (autodichiarato). Link sopra.

**Segnali di dolore:**
- [fatto] Difficoltà di registrazione e invio candidature su inPA (avviso del 21/09/2023). https://www.inpa.gov.it/avviso-del-21-settembre-2023/
- [fatto, opinione] Compilazione manuale ripetitiva del CV su inPA. https://www.startmag.it/?p=172316
- Recensioni negative su app/siti privati: **non trovato**.

**Test chatbot (C6):** [stima] "Quali concorsi per diplomati ci sono in Lazio" → un motore AI pesca da inPA/Concorsando e risponde in modo accettabile; la parte informativa è esposta. Resistono: alert personalizzati, simulatori di quiz con banche dati ufficiali, tracciamento delle proprie candidature e date delle prove.

**Motivo più forte per scartarlo:** fonte dati ormai **unica** (inPA obbligatorio) → nessun vantaggio dallo scraping; canale SEO occupato da un incumbent con ~1,6 M utenti/mese e offerta corsi già matura; monetizzazione B2C a basso prezzo.

**Note per lo scoring:**
- C2 alto (milioni di candidati) → 4-5.
- C4 basso (fonte unica, pulita) → 1-2.
- C5: SEO occupata → 2.
- C3: 35-40 €/mese per corsi; alert puri = prezzo basso → 2-3.

---

### #5 — Albi pretori comunali aggregati
**Verdetto:** INCERTO (G3 e G5) — dati frammentatissimi (fit ideale con lo scraping), ma pagatore non verificato e vincoli privacy espliciti del Garante (15 giorni, no indicizzazione) che colpiscono proprio il modello SEO.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Monitoraggio di atti pubblici, nessun albo richiesto. | — |
| G2 Dati raggiungibili | sì | [fatto] DigitPA aveva censito >6.000 albi online già nel 2011, molti ospitati da fornitori software terzi (formati ripetuti → scraper per fornitore). Progetti open source esistenti (AlboPOP di OnData, OpenAlboPretorio) dimostrano la fattibilità. | https://www.mn.camcom.gov.it/files/SUAP/vademecumalboonline.pdf ; https://www.agendadigitale.eu/procurement/albi-pretori-troppo-difficili-da-consultare-un-progetto-per-renderli-pop/ ; https://github.com/patperu/albopop/ |
| G3 Pagatore identificabile | incerto | [fatto] Esistono banche dati di cantieri a pagamento (BIPROGET >500.000 schede cantiere; Edildati di Rete Imprese) → qualcuno paga per lead edilizi. Prezzi **non trovati**. Nessun servizio commerciale di monitoraggio albi trovato. | https://www.lavoripubblici.it/azienda/BIPROGET-GROUP/5668 ; https://www.reteimprese.it/edildati |
| G4 Distribuzione senza pubblico | incerto | [stima] Outbound a fornitori edili/serramentisti è plausibile; la SEO sui contenuti degli atti è limitata dalle linee guida del Garante (vedi G5). | — |
| G5 Rischio legale gestibile | incerto | [fatto] Linee guida Garante 15/05/2014 (ancora valide secondo AGID): dati personali sull'albo pubblicati solo 15 giorni, dopo non possono più essere diffusi; va evitata l'indicizzazione dei motori generalisti; divieto assoluto per dati sensibili e giudiziari. Un aggregatore che conserva e indicizza gli atti replicherebbe una diffusione senza base giuridica. Gestibile solo filtrando: atti su imprese/opere, niente persone fisiche, niente archivio pubblico oltre 15 gg. | https://garanteprivacy.it/garante/doc.jsp?ID=3134436 ; https://www.garanteprivacy.it/garante/doc.jsp?ID=3152130 |

**Incumbent:**
| Nome | URL | Prezzo | Punti deboli osservati |
|---|---|---|---|
| AlboPOP (OnData, volontario) | https://www.agendadigitale.eu/procurement/albi-pretori-troppo-difficili-da-consultare-un-progetto-per-renderli-pop/ | Gratuito (RSS) | Copertura annunciata 6.000 comuni (2016), stato attuale **non trovato** |
| Fornitori software degli enti (Halley, Traspare, ecc.) | https://traspare.com/wp-content/uploads/2024/06/Brochure-TRASPARE.pdf | Pagano i comuni | Non sono servizi per chi legge |
| BIPROGET, Edildati (lead cantieri) | https://www.reteimprese.it/edildati | Non trovato | Fonte dati non nota |
| Servizi commerciali di monitoraggio albi | — | **non trovato** | — |

**Segnali di domanda:** **non trovato** (nessun volume di ricerca, nessun servizio a pagamento dedicato individuato). [fatto] Il problema di consultazione è riconosciuto ("albi pretori troppo difficili da consultare"): link Agenda Digitale sopra.

**Segnali di dolore:** [fatto] Solo il 67% dei comuni in regola con l'albo online (dato storico). https://www.corrierecomunicazioni.it/?p=8566 ; [fatto] segnalazioni ANAC su omesse pubblicazioni. https://www.anticorruzione.it/documents/91439/ae582d03-fec1-3734-68a3-141c46635710 . Lamentele di potenziali clienti (fornitori, giornalisti): **non trovato**.

**Test chatbot (C6):** [stima] Molto resistente: nessun chatbot indicizza in tempo reale migliaia di albi (anzi l'indicizzazione è sconsigliata dal Garante). Alert su atti nuovi = valore non sostituibile.

**Motivo più forte per scartarlo:** nessun pagatore dimostrato per "albi aggregati" in sé, e il modello di distribuzione più naturale (SEO sugli atti) è in tensione diretta con le linee guida del Garante. Inoltre l'atto all'albo (es. permesso di costruire) contiene spesso nomi di persone fisiche.

**Note per lo scoring (se passa dopo verifica):**
- C4 = 5 (migliaia di fonti eterogenee, continue: il caso ideale per lo scraping).
- C6 = 5.
- C3/C2 = 1-2 finché non si trova un pagatore (verificare prezzi BIPROGET/Edildati, e se esiste domanda giornalistica/legale).
- Suggerimento: valutarlo **come infrastruttura dati** per #36 (permessi → lead edilizia) e #2 (affidamenti diretti sotto soglia, che spesso compaiono solo come determine all'albo) invece che come prodotto autonomo.

---

### #6 — Chi ha ricevuto fondi pubblici (lead gen)
**Verdetto:** INCERTO (G3, G5) — **non è stata eseguita nessuna ricerca dedicata** (budget di ricerca esaurito); unica evidenza indiretta trovata durante il #3.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Liste di aziende a fini commerciali non richiedono licenze. | — |
| G2 Dati raggiungibili | incerto | [fatto, indiretto] incentivi.gov.it è descritto come interoperabile con il Registro Nazionale Aiuti (RNA). Accesso pubblico, formati e open data di RNA e OpenCoesione: **non verificati in questa sessione**. | https://www.mimit.gov.it/it/notizie-stampa/portale-incentivi-gov-it-oltre-1000-gli-incentivi-pubblicati-e-374-le-amministrazioni-coinvolte |
| G3 Pagatore identificabile | incerto | Non trovato chi venda oggi liste "aziende appena finanziate". [stima] Il pagatore plausibile (venditori B2B, agenzie lead gen) esiste in generale, ma non è dimostrato per questo segnale. | non trovato |
| G4 Distribuzione senza pubblico | incerto | [stima] Outbound verso venditori B2B (software, consulenza) è plausibile, ma non verificato. | non trovato |
| G5 Rischio legale gestibile | incerto | [stima] Tra i beneficiari ci sono ditte individuali e professionisti (persone fisiche): usarli per marketing diretto richiede base giuridica (legittimo interesse + informativa art. 14 GDPR) e il Garante ha sanzionato in passato l'uso di elenchi pubblici per telemarketing. Nessuna fonte raccolta in questa sessione. | non trovato |

**Incumbent:** non trovato (non cercato).
**Segnali di domanda:** non trovato.
**Segnali di dolore:** non trovato.
**Test chatbot (C6):** [stima] Resistente: un chatbot non produce liste aggiornate di beneficiari con contatti; il valore sarebbe nella freschezza e nell'unione con dati aziendali.
**Motivo più forte per scartarlo:** [stima] il "segnale" (ha ricevuto un aiuto) è disponibile da fonti centralizzate (RNA, OpenCoesione) → facile da replicare; il valore commerciale dipende dall'arricchimento con contatti, che porta direttamente nel rischio GDPR del marketing B2B verso persone fisiche.
**Note per lo scoring:** da ri-screenare con ricerche dedicate prima di qualunque scoring (verificare: open data RNA, aggiornamento e granularità; esistenza di venditori di "funding signals" in Italia o all'estero; orientamento del Garante su riuso di dati RNA).

---

## Nuovi candidati emersi
1. **Affidamenti diretti e determine sotto soglia dagli albi/BDNCP** — gli affidamenti sotto soglia (la maggior parte per numero) non passano dai servizi di segnalazione gare classici e compaiono come determine sparse; unisce il fit di scraping del #5 con il pagatore già dimostrato del #2 (fonti: https://www.anticorruzione.it/-/banca-dati-nazionale-dei-contratti-pubblici-2 , https://www.infoappalti.it/presenta/abbonamenti.htm).
2. **Storico esiti e prezzi di aggiudicazione delle aste (dalla BDAG)** — la Banca Dati Aste Giudiziarie, operativa dal 28/10/2024, raccoglie vendite e offerte: un "OMI delle aste" (sconto reale di aggiudicazione per zona e numero di ribassi) sarebbe un dato che i nuovi tool AI, basati su mq × OMI, non hanno (fonte: https://pst.giustizia.it/PST/resources/cms/documents/BDAG_ST_V1.2_23092024.pdf ; accessibilità pubblica da verificare).
3. **Gestore candidature e scadenze per chi fa concorsi (tracker multi-concorso)** — il dolore documentato su inPA è operativo (registrazione, CV, scadenze, date delle prove), non di ricerca; uno strumento che segue le proprie candidature e le comunicazioni degli enti è meno esposto all'AI generalista e alla concorrenza SEO di Concorsando (fonti: https://www.inpa.gov.it/avviso-del-21-settembre-2023/ , https://www.startmag.it/?p=172316).
