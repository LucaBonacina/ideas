# Brief comune ai subagenti S11 (Famiglia: informazioni disperse, H22b)

## Profilo del founder
- ~15 anni di sviluppo software; gestisce aziende software. Competenza distintiva: scraping avanzato e raccolta/pulizia di dati web. Lavora molto bene con l'AI.
- Ha un lavoro a tempo pieno che non vuole lasciare. Può affidare la gestione operativa a persone di fiducia.
- Nessun pubblico o canale proprio. Mercati: Italia prima, poi internazionale. Tutti i modelli di guadagno ammessi.
- **L'utente non ha vincoli di ricavo**: vanno bene 1-2 k€/mese netti, e gli interessa fare cose **utili e rilevanti**.

## Ambiti esclusi e vincoli
- Esclusi: aste, procedure concorsuali, aziende e bilanci, immobili; gare d'appalto, bandi per imprese, finanziamenti UE, dati aziendali come lead; prodotti venduti a istituti finanziari o business information provider. **Ammessi: incentivi rivolti a persone e famiglie.**
- Niente settori con licenze (intermediazione finanziaria/assicurativa, pagamenti, atti sanitari; attenzione: compilare e inviare domande di bonus per conto terzi è attività tipica di CAF e patronati: verificare il perimetro).
- Rischio legale sui dati (GDPR, diritto sui generis sulle banche dati UE, termini d'uso, riuso dei dati pubblici: D.Lgs. 36/2006 e licenze open data).

## Ipotesi H22b (pre-registrata, non modificabile)
Bonus nazionali, regionali e comunali, nidi (non solo quelli della mappa INPS), servizi per l'infanzia e regole locali esistono, ma sono su molti portali diversi, e molti genitori non sanno nemmeno che esistono (es. la mappa INPS dei nidi). Un aggregatore unico, aggiornato con lo scraping e personalizzato per comune ed età del bambino, ha valore anche se ogni singola informazione è già pubblica.

**Confutata se:** (1) un servizio esistente fa già l'aggregazione completa per comune (non solo i bonus nazionali); (2) la frammentazione reale è bassa (pochi portali coprono quasi tutto); (3) la mappa INPS copre già tutti i nidi, pubblici e privati; (4) non esiste un canale per farsi trovare dai genitori; (5) non c'è un modo di ricavare almeno i costi più un piccolo margine (obiettivo A con modello leggero).

## Cosa è già stato scoperto (riparti da qui, non rifarlo)
Leggi `wiki/Ipotesi/H22 Ricerca di luoghi servizi norme e bonus per genitori.md` e i rapporti `wiki/Rapporti/S9/H22 Entusiasta.md`, `wiki/Rapporti/S9/H22 Bucatore.md` (repo /home/user/ideas). Sintesi: H22 è stata giudicata "parziale", confutata nella forma ampia: BonusX (da 19,95 €/anno, "+600 bonus"), app IO e mappa INPS dei nidi (online da ottobre 2026) coprirebbero bonus e nidi; F1 nidi peggiorato (59,5% dei nidi ha più domande che posti), C1 trova-bonus e F2 calendario burocratico scartati. **L'utente contesta questa conclusione**: i genitori spesso non sanno che quei servizi esistono, e le informazioni restano sparse.

## Punti da verificare DIRETTAMENTE (obbligatori per entrambi)
1. **Cosa copre la mappa INPS dei nidi**: tutti i nidi (pubblici, privati autorizzati, privati non convenzionati, servizi integrativi, sezioni primavera) o solo quelli rilevanti per il Bonus nido? Da dove vengono i dati (censimento? autocertificazione?). Apri le pagine INPS e i messaggi/circolari ufficiali; se possibile prova la ricerca su un comune e confronta col numero di nidi noto (es. dati ISTAT o elenco comunale/regionale dei servizi autorizzati).
2. **Prova concreta su 4-5 comuni di dimensioni diverse** (suggeriti: Milano o Roma; una città media come Bergamo o Padova o Bari; un comune di 15-30 mila abitanti; un piccolo comune < 5.000 ab.). Per ciascuno: quanti portali/siti distinti deve consultare un genitore con un figlio di 0-3 anni (e uno di 3-6) per avere il quadro di: bonus nazionali (INPS), bonus/contributi regionali (es. Nidi Gratis Lombardia, Dote, ecc.), agevolazioni comunali (rette, contributi, centri estivi, tariffe ISEE), nidi pubblici e privati, iscrizioni e scadenze, centri per la famiglia/consultori, servizi integrativi. Riporta un conteggio e l'elenco degli URL. Questa è la prova centrale di "frammentazione".
3. **Chi aggrega già**: BonusX (copre anche bonus comunali? per quanti comuni?), app IO (servizi comunali per nidi: quanti comuni?), INPS "Servizi vicino a me", portali regionali (es. Lombardia, Emilia-Romagna, Toscana), Comuni.it/ANCI, Welfare aziendali, siti come "Bonus per te", Guida alle agevolazioni del Sole 24 Ore, Altroconsumo, patronati/CAF con app (es. ACLI, CISL), app "Mamma che bonus", ecc. Cerca anche aggregatori esteri di informazioni pubbliche per genitori per comune: Francia (caf.fr "monenfant.fr", mesdroitssociaux.gouv.fr), Germania (Familienportal, Kita-Navigator comunali, "Elterngeldrechner"), UK (Family Information Service per council, Turn2us, entitledto), USA (findhelp.org, Benefits.gov/benefit finder, Winnie), Spagna, con dati su utenti, ricavi, modelli, chiusure. Chi è pubblico e gratuito? chi privato e come guadagna?
4. **Consapevolezza**: quanti genitori non conoscono o non chiedono bonus/servizi? (es. tassi di non take-up del Bonus nido, assegno unico, bonus comunali non spesi, fondi restituiti; indagini Save the Children, Openpolis, Con i Bambini, INPS).
5. **Canale**: come si fanno trovare i genitori (SEO long-tail per "bonus [comune]", "nidi [comune]", "iscrizioni nido [comune] 2027"; gruppi Facebook di mamme; pediatri; welfare aziendale B2B2C; comuni stessi). Usa l'autocompletamento di Google (`https://suggestqueries.google.com/complete/search?client=firefox&hl=it&q=...`) per misurare la profondità delle query su comuni di dimensioni diverse; considera l'impatto di AI Overviews/risposte AI.
6. **Economia per l'obiettivo A con due modelli**, dichiarando i numeri:
   - **modello leggero**: prodotto costruito con l'AI e automatizzato, il founder lo segue con poche ore e al più collaborazioni occasionali; costi = infrastruttura, società, piccoli servizi (stima tu, con fonti per i costi di una SRL/partita IVA, hosting, LLM);
   - **modello con collaboratori part-time**: 60-116 k€/anno da coprire (vedi `wiki/Classifica per obiettivo.md`).
   Per ciascuno: quanti utenti paganti / clienti / pagine viste servono per 1-2 k€/mese netti. Pagatori possibili: genitori (abbonamento o una tantum), welfare aziendale e piattaforme welfare (Edenred, Jointly, Welfarebit, TreCuori...), comuni (SaaS), strutture private (nidi privati), affiliazioni, pubblicità.
7. **Lente di utilità**: quante famiglie potrebbe aiutare (nati per anno, famiglie con figli 0-6, ecc.) e quanto tempo/denaro farebbe risparmiare (valore medio di bonus non richiesti, ore di ricerca), con fonti.

## Regole di rigore
- Nessun fatto senza fonte (URL + data di accesso, oggi 2026-11-20). Se manca: "non trovato".
- Etichetta ogni affermazione [fatto] o [stima]; le stime dichiarano il ragionamento.
- Preferisci leggere direttamente le pagine (WebFetch o curl) agli estratti dei motori di ricerca. Se una fonte blocca, annotalo e usa alternative; non inventare.
- Diffida dei numeri autodichiarati e dei case study di chi vende corsi: segnalali come tali.
- Cerca la distribuzione dei risultati (mediana, tasso di fallimento, chiusure), non solo i casi migliori.
- **Massimo 20 WebSearch** per te. Le letture dirette di pagine sono libere.

## Scala v2 (per orientare le idee; il Giudice assegna i punteggi)
C1 bisogno (10), C2 domanda (10), C3 monetizzazione (15), C4 vantaggio competenze scraping/dati/sviluppo (15), C5 distribuzione senza pubblico (15), C6 resistenza all'AI generalista (5), C7 difendibilità (5), C8 debolezza incumbent (5), C9 tempo al primo euro (5), C10 delegabilità (10), C11 tetto ricavo 24 mesi (5). Penalità conflitto con il lavoro: −8 se si vendono dati di scraping a terzi, −2 se lo scraping è interno al prodotto, 0 se non c'entra.

## Formato del rapporto
Markdown in italiano, con sezioni: 1) Tesi in 5 righe; 2) Evidenze (tabella: affermazione, [fatto]/[stima], fonte URL, data accesso, letta direttamente sì/no); 3) Prova sui comuni (tabella per comune: tipo di informazione, portale, URL); 4) Mappa INPS: cosa copre; 5) Chi aggrega già, in Italia e all'estero (numeri, modelli, chiusure); 6) Economia obiettivo A nei due modelli + lente di utilità; 7) Idee concrete (vedi ruolo); 8) Criteri di confutazione (1)-(5) uno per uno dal tuo punto di vista; 9) Cosa non hai trovato / limiti; 10) Conteggio WebSearch e fetch.
**Scrivi il rapporto integrale nel file indicato nel tuo compito** (con Write) e restituisci come risposta finale un riassunto di 15-25 righe con le 5 affermazioni più decisive e le loro fonti.
