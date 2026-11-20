---
tipo: idea
id: I-H23-1
ipotesi: "[[H23 Coordinamento e accordi della famiglia]]"
punteggio_v2: 47
modello_ricavo: "abbonamento per famiglia (69-119 €/anno); accesso gratuito o a canone per avvocati e mediatori che la prescrivono"
tempo_founder_h_sett: 3
investimento_iniziale_eur: "25-50 k€ (app, conformità GDPR con DPIA e hosting UE, parere legale, 6-9 mesi di operatore che segue gli studi) [stima]"
obiettivo_A: "bassa"
obiettivo_B: "3%"
obiettivo_C: "bassa"
tags: [idea, famiglia, S9]
---
# I-H23-1 — Spese straordinarie e calendario per genitori separati

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B. Per reddito extra (A) e "costruisci e vendi" (C) vedi la sezione sugli obiettivi e [[Classifica per obiettivo]].

## In una frase
Un'app italiana per genitori separati che applica le regole dei protocolli dei tribunali sulle spese straordinarie, per esempio quelle del Protocollo di Milano 2025:
- richiesta scritta;
- silenzio-assenso dopo 10 giorni, con data certa;
- prova di pagamento entro 30 giorni e rimborso entro 15;
- percentuali e soglia del 10% del reddito;
- lettura automatica degli scontrini.

Comprende anche il calendario dell'affido e un registro esportabile in PDF per l'avvocato. È distribuita da avvocati familiaristi e mediatori, che la inseriscono negli accordi.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** il genitore che anticipa le spese e vuole documentarle.
- **Riferimenti reali [fatto]:**
  - OurFamilyWizard: 110 $ e 149,99 $/anno per ciascun genitore; piani più alti fino a ~300 $/anno.
  - TalkingParents: 7-32 $/mese.
  - 2houses: 169,99 $/anno per famiglia.
  - In Italia, CoParents: 4,99 €/mese, "200+ clienti" (autodichiarato).
- **Prezzo proposto [stima]:** 69 €/anno per famiglia; 119 €/anno con PDF certificati illimitati.
- **Perché pagare:** la ripartizione delle spese straordinarie è "una delle questioni che più frequentemente alimentano il contenzioso" (Brocardi, sulla Cassazione 23946/2026). Una lite costa molto più dell'abbonamento.
- **Limite:** WhatsApp vale già come prova (Cassazione 1254/2025), quindi il "registro" da solo vende poco.
- **Niente gestione dei pagamenti:** richiederebbe una licenza, esclusa dai vincoli. Al suo posto, link IBAN e registrazione della prova di pagamento.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Canale principale (da provare):** avvocati familiaristi e mediatori, che hanno l'app gratis e la indicano nell'accordo di negoziazione assistita (13,1% delle separazioni nel 2024) o nel ricorso congiunto. Esiste un precedente: il Tribunale di Modena ha omologato un accordo con l'impegno a usare l'app "Progetto Anthea" (2017).
  - **Porta d'ingresso per gli studi:** un generatore del piano genitoriale (art. 473-bis.12 c.p.c., schema CNF) che trasforma il piano nel calendario dell'app.
  - **Come raggiungerli:** liste pubbliche degli Ordini e delle associazioni (AIAF, FIAMEF con oltre 2.000 mediatori dichiarati) e webinar accreditati per la formazione continua.
- **Canale secondario:** SEO sulle domande pratiche ("chi paga il centro estivo dopo la separazione", "spese straordinarie protocollo Milano").
- **Canale debole:** l'App Store. Una dozzina di app italiane nate nel 2026 ha 0-2 valutazioni.

## Perché queste competenze danno un vantaggio
- **Il vantaggio è modesto.** La parte difficile è legale e commerciale, non tecnica: costruire l'app costa poco, come mostrano i 12 cloni.
- **Cosa conta davvero:**
  - raccogliere e tenere aggiornati i protocolli dei vari tribunali (Milano, Roma, Cuneo, Padova…) e le linee guida CNF;
  - classificare le spese con l'AI (ordinaria, straordinaria con o senza accordo);
  - generare i documenti.
- **Lo scraping è accessorio:** calendari scolastici regionali e aggiornamento dei protocolli. Penalità di conflitto −2, prudente.

## Concorrenti
- **Italia:** CoParents (solo web, 4,99 €/mese), FamSync, Accanto, Lina, Duo "Spese straordinarie figli", DuoWeek, CoParently, Pendule, Niddo (spagnola, con contenuti SEO in italiano), tutte con 0-2 valutazioni; 2houses (in italiano, 4 valutazioni).
- **Estero, con possibile ingresso:** OurFamilyWizard / In Tandem (proprietaria anche di Cozi e FamilyWall, presente in Francia e Spagna), TalkingParents, AppClose (gratuita).
- **Sostituti gratuiti:** WhatsApp, fogli di calcolo, email.

## Rischi principali (e quello che la ucciderebbe)
1. **Gli avvocati non la prescrivono:** senza il canale professionale resta solo l'App Store, dove nessuno ha trazione. **È il rischio che la ucciderebbe.**
2. **Uno dei due genitori non vuole lo strumento**, e la parte ostile non lo adotta. Negli USA serve l'ordine del giudice.
3. **GDPR:** dati di minori, spese mediche (dati sanitari, art. 9) e comunicazioni tra parti in causa. Servono una DPIA, hosting UE e responsabilità in caso di perdita o contestazione.
4. **Un incumbent estero localizza** (OurFamilyWizard, 2houses) con risorse molto maggiori.
5. **Il valore probatorio è limitato:** la Cassazione 23946/2026 riconosce il rimborso anche senza accordo preventivo, quindi il merito resta al giudice.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Sviluppatore part-time:** app e PDF.
- **Consulente legale a chiamata:** protocolli, contratti, DPIA.
- **Operatore part-time:** relazioni con gli studi, webinar, assistenza.
- **Founder:** direzione e qualità del motore di regole, circa 3 h/settimana dopo l'avvio.
- **Limite:** l'assistenza agli utenti tocca persone in conflitto ed è delicata.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 4 | Contenzioso frequente sulle spese straordinarie; protocolli dei tribunali nati per ridurlo | brocardi.it (Cassazione 23946/2026); iusletter.com |
| C2 Domanda (10) | 2 | 75.014 separazioni nel 2024, ~53,6% con figli minori (dato 2015); app store italiano con domanda visibile vicina a zero | ISTAT 2024; Garante infanzia; API iTunes |
| C3 Monetizzazione (15) | 3 | Prezzo provato all'estero (OFW 110-300 $/anno); in Italia solo CoParents (200+ clienti autodichiarati) | ourfamilywizard.com/pricing; coparents.it |
| C4 Vantaggio competenze (15) | 2 | Motore di regole e AI sugli scontrini; replicabile, come mostrano i 12 cloni | API iTunes |
| C5 Distribuzione senza pubblico (15) | 2 | Avvocati e mediatori sono elencabili, ma il canale non è provato (solo il precedente Anthea); store saturo | studiocataldi.it; API iTunes |
| C6 Resistenza all'AI (5) | 3 | Registro condiviso, scadenze e data certa: un flusso di lavoro, non una risposta | — |
| C7 Difendibilità (5) | 3 | Servono due genitori e uno storico: costi di uscita alti una volta adottata | stima |
| C8 Debolezza incumbent (5) | 3 | Nessun leader italiano, ma 2houses è già in italiano e OFW può entrare | 2houses.com; newswire In Tandem |
| C9 Tempo al primo euro (5) | 3 | 2-4 mesi | stima |
| C10 Delegabilità (10) | 3 | Delegabile, ma tra legale, GDPR e assistenza servono professionisti | stima |
| C11 Tetto a 24 mesi (5) | 3 | 1.500-3.000 famiglie × 75 € = 110-225 k€/anno, già ottimistico | stima |

**Lordo:** (4×10 + 2×10 + 3×15 + 2×15 + 2×15 + 3×5 + 3×5 + 3×5 + 3×5 + 3×10 + 3×5) / 5 = 270 / 5 = **54**.

**Penalità:**
- legale −3 (dati di minori e sanitari, responsabilità sul registro);
- piattaforma −2 (dipendenza dagli store e dal canale professionale);
- conflitto −2 (scraping interno, accessorio).

**Punteggio v2: 47.**

### Obiettivi A, B, C
- **A. Reddito extra: bassa (< 5%).** Per coprire 60-116 k€/anno servono **~800-1.550 famiglie a 75 €/anno**, cioè circa il 2-4% delle ~40 mila nuove separazioni con figli minori di un anno. Oggi nessuna app in Italia mostra più di qualche centinaio di clienti.
- **B. Business: 3%.** Servono ~1.600-2.100 famiglie per 120-160 k€.
- **C. Costruisci e vendi: bassa.** Un compratore naturale esiste (In Tandem / OurFamilyWizard, che ha comprato Cozi e FamilyWall), ma servono ricavi ricorrenti visibili in 12-18 mesi.

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Settimana 1.** Prototipo (landing page più flusso "richiesta spesa → 10 giorni → silenzio-assenso → PDF") sul Protocollo di Milano. Lista di 80 avvocati familiaristi e mediatori di Milano e Monza da fonti pubbliche.
2. **Settimane 2-4.** L'operatore contatta gli 80 professionisti e offre l'app gratis per i loro clienti, più un modello di clausola per l'accordo. In parallelo, 400 € di Google Ads su "spese straordinarie figli separati" e "protocollo spese straordinarie milano", verso una pagina con pre-ordine a 69 €/anno rimborsabile.

**Soglie decise ora:**
- **almeno 5 professionisti su 80** firmano una lettera d'intenti a proporre l'app ai clienti, oppure la propongono davvero;
- **almeno 15 pre-ordini pagati** (o carte registrate) con meno di 400 € di pubblicità.

**Esito:** se manca la prima soglia, archiviare: senza canale professionale non c'è distribuzione. Se passa solo la prima, provare un secondo mese con i clienti degli studi.

## Fonti
Tutte con accesso del 2026-11-20.
- https://www.ourfamilywizard.com/pricing · https://talkingparents.com/pricing · https://www.2houses.com/en/pricing
- https://coparents.it/
- https://iusletter.com/dalla-redazione/diritto-e-responsabilita-civile/persone-e-famiglia/protocollo-sulle-spese-extra-assegno-di-mantenimento-del-tribunale-di-milano/
- https://www.brocardi.it/notizie-giuridiche/separazione-diritto-rimborso-delle-spese-figli-anche-concordate-prima/7278.html
- https://brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-iv-bis/capo-ii/sezione-i/art473bis12.html
- https://www.istat.it/wp-content/uploads/2026/01/MATRIMONI-UNIONI-SEPARAZIONI-DIVORZI_anno-2024.pdf
- https://www.studiocataldi.it/articoli/28867-divorzio-l-app-per-gestire-i-figli-senza-litigare-il-progetto-anthea.asp
- https://www.diritto.it/messaggi-whatsapp-prova-credito-pronuncia-cassazio/
- https://www.newswire.com/news/ourfamilywizard-launches-new-parent-company-in-tandem-22427670
- API iTunes search (country=it), query "genitori separati" e "affido condiviso"
- Rapporti: [[H23 Entusiasta]], [[H23 Bucatore]]
