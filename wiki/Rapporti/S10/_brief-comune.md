# Brief comune ai subagenti S10 (Famiglia: nonni dove sono già — H20b)

## Profilo del founder
- ~15 anni di sviluppo software; gestisce aziende software. Competenza distintiva: scraping avanzato e raccolta/pulizia di dati web. Lavora molto bene con l'AI.
- Ha un lavoro a tempo pieno che non vuole lasciare. Può affidare la gestione operativa a persone di fiducia (≤ 5 h/settimana dopo l'avvio).
- Nessun pubblico o canale proprio. Mercati: Italia prima, poi internazionale. Tutti i modelli di guadagno ammessi.
- L'utente non ha vincoli sul ricavo: vanno bene anche 1.000-2.000 €/mese, e gli interessa fare cose utili e rilevanti.

## Ambiti esclusi e vincoli
- Esclusi: aste, procedure concorsuali, aziende e bilanci, immobili; gare, bandi per imprese; prodotti venduti a istituti finanziari o business information provider.
- Niente settori con licenze: intermediazione finanziaria/assicurativa, **pagamenti** (gestire denaro di terzi, collette che incassano), atti sanitari, intermediazione di lavoro.
- Rischio legale sui dati (GDPR, foto di minori, termini d'uso delle piattaforme, in particolare WhatsApp/Meta).

## Ipotesi H20b (pre-registrata, non modificabile)
I nonni di oggi usano molto lo smartphone (WhatsApp 78% degli over 65, Censis 2025). Un prodotto per coordinare la famiglia allargata intorno al bambino (aggiornamenti, foto, lista regali, turni, cose da sapere) che **non chiede ai nonni di installare nulla** (vive in WhatsApp, via link o via web) ha uno spazio che le app dedicate non hanno colto.

**Confutata se:**
- (a) i servizi esistenti (gruppi WhatsApp, album condivisi, FamilyAlbum, liste regali con link) coprono già il bisogno senza attriti rilevanti;
- (b) le regole di WhatsApp per le aziende rendono il prodotto impraticabile o costoso;
- (c) non c'è un modo di ricavare almeno i costi più un piccolo margine (obiettivo A con modello leggero).

## Da dove si riparte (non rifare, verifica i punti contestati)
Leggi `wiki/Ipotesi/H20 Nonni e famiglia allargata come utenti.md` (verdetto S8: confutata nella forma "nonni utenti/paganti"; sopravvive solo la gazzetta cartacea per nonni non digitali), i rapporti `wiki/Rapporti/S8/H20 Entusiasta.md` e `H20 Bucatore.md`, e per i temi vicini `wiki/Ipotesi/H21 Lista regali governata dai genitori.md` (liste regali e collette: confutata, ScuolaPay/PayPal/Satispay gratis, Amazon 3%) e `wiki/Ipotesi/H23 Coordinamento e accordi della famiglia.md` (coordinamento: Cozi, TimeTree, FamilyWall gratis; Maple chiude il 31/12/2026). Repo in /home/user/ideas.

Già acquisito in S8 (dato per buono salvo prova contraria): Censis 2025 over 65 WhatsApp 78%, Facebook 61,1%, oltre questi l'adozione crolla; ISTAT 2025 internet 72,5% tra 65-74 anni, 35,7% over 75; FamilyAlbum gratuita 30 M utenti; album condivisi Apple accettano contributi via web; Tinybeans FY26 6,49 M$ ricavi, 95.000 paganti, nota sulla continuità aziendale; RevenueCat: retention 12 mesi piani mensili 17%.

**Il punto ora non è se i nonni sono digitali, ma dove e come usano lo smartphone e cosa manca oggi.** Domande chiave:
1. Come usano i nonni WhatsApp nella pratica (gruppi di famiglia, foto, vocali, videochiamate)? Quali attriti sono documentati (foto perse nel flusso della chat, memoria del telefono piena, gruppi caotici, nonni esclusi da decisioni, informazioni pratiche — allergie, orari, pediatra — sparse)? Servono fonti: sondaggi, studi, articoli, recensioni.
2. **Regole e costi di WhatsApp Business Platform (Cloud API) nel 2026**: prezzi per messaggio in Italia (marketing, utility, authentication, service), finestra di 24 ore, template, opt-in, divieto per i chatbot AI generici (policy in vigore da gennaio 2026), possibilità per un bot di stare in un **gruppo** WhatsApp (API Groups?), limiti sulle foto/media, verifiche aziendali. Leggi direttamente le pagine di Meta (developers.facebook.com, business.whatsapp.com).
3. Chi fa già "prodotto che vive in WhatsApp o via link per la famiglia" (Italia ed estero): bot WhatsApp per album di famiglia, raccolta foto via link (es. Famileo, Neveo, Popsa, Google Foto, iCloud via web, FamilyAlbum via link), newsletter di famiglia via email/WhatsApp (es. Tinybeans email, Storyworth via email), app di coordinamento con inviti web, Lifecake e Path chiusi, ecc. Con numeri (utenti, prezzi, ricavi, finanziamenti, chiusure).
4. Modelli di ricavo plausibili per un prodotto senza installazione: abbonamento dei genitori, freemium, stampa (fotolibri, gazzetta, calendari) come upsell, affiliazione, B2B (nidi/scuole dell'infanzia che usano già app tipo Kindertap/Brightwheel?). Prezzi reali.

## Obiettivo A con due modelli di costo (dichiara i numeri)
- **Modello leggero:** prodotto costruito con l'AI e automatizzato, il founder lo segue con poche ore e al più collaborazioni occasionali; costi = infrastruttura, società, piccoli servizi (indicativamente 3-10 k€/anno più costi variabili, es. messaggi WhatsApp e storage). Serve un netto di 1-2 k€/mese (12-24 k€ netti ≈ 21-43 k€ di margine prima delle tasse).
- **Modello con collaboratori part-time:** totale da coprire 60-116 k€/anno per un prodotto da costruire.
Per ciascuno: quanti utenti o famiglie paganti servono.

## Lente di utilità
Stima quante famiglie potrebbe aiutare (nascite ISTAT, famiglie con figli 0-6, nonni) e quanto tempo o denaro farebbe risparmiare, con le fonti.

## Mercati esteri
Cerca esplicitamente piattaforme estere (USA, UK, Francia, Germania, Spagna, Giappone, Brasile/India dove WhatsApp è dominante) con dati su utenti, ricavi, prezzi, finanziamenti, **chiusure**.

## Regole di rigore
- Nessun fatto senza fonte (URL + data di accesso, oggi 2026-11-20). Se manca: "non trovato".
- Etichetta ogni affermazione [fatto] o [stima]; le stime dichiarano il ragionamento.
- Preferisci leggere direttamente le pagine (WebFetch o curl) agli estratti dei motori di ricerca. Se una fonte blocca (Reddit, Google Trends, ecc.) annotalo e usa alternative; non inventare.
- Diffida dei numeri autodichiarati: segnalali come tali.
- Cerca sempre la distribuzione dei risultati (mediana, tasso di fallimento, chiusure), non solo i casi migliori.
- **Massimo 20 WebSearch** per te. Le letture dirette di pagine sono libere.

## Scala v2 (per orientare le idee; il Giudice assegna i punteggi)
C1 bisogno (10), C2 domanda (10), C3 monetizzazione (15), C4 vantaggio competenze scraping/dati/sviluppo (15), C5 distribuzione senza pubblico (15), C6 resistenza all'AI generalista (5), C7 difendibilità (5), C8 debolezza incumbent (5), C9 tempo al primo euro (5), C10 delegabilità (10), C11 tetto ricavo 24 mesi (5). Penalità conflitto con il lavoro: −8 se si vendono dati di scraping a terzi, −2 se lo scraping è interno al prodotto, 0 se non c'entra.

## Formato del rapporto
Markdown in italiano, con sezioni: 1) Tesi in 5 righe; 2) Evidenze (tabella: affermazione, [fatto]/[stima], fonte URL, data accesso, letta direttamente sì/no); 3) Distribuzione dei risultati / numeri chiave (inclusi concorrenti esteri e chiusi); 4) Idee concrete (vedi ruolo) con conto dell'obiettivo A nei due modelli e lente di utilità; 5) Applicazione dei criteri di confutazione uno per uno dal tuo punto di vista; 6) Cosa non hai trovato / limiti; 7) Conteggio WebSearch usate e fetch.
**Scrivi il rapporto integrale nel file indicato nel tuo compito** (con Write) e restituisci come risposta finale un riassunto di 15-25 righe con le 5 affermazioni più decisive e le loro fonti.
