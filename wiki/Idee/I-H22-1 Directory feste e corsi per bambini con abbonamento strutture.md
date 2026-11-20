---
tipo: idea
id: I-H22-1
ipotesi: "[[H22 Ricerca di luoghi servizi norme e bonus per genitori]]"
punteggio_v2: 46
modello_ricavo: "abbonamento delle strutture (freemium, 19-29 €/mese) o prezzo per contatto (5-10 €); più avanti commissione sulle prenotazioni"
tempo_founder_h_sett: 3
investimento_iniziale_eur: "20-40 k€ (sviluppo, scraping e normalizzazione dei listini, 6 mesi di operatore commerciale part-time) [stima]"
obiettivo_A: "bassa"
obiettivo_B: "2%"
obiettivo_C: "bassa"
tags: [idea, famiglia, S9]
---
# I-H22-1 — Directory feste e corsi per bambini con abbonamento strutture

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B. Per reddito extra (A) e "costruisci e vendi" (C) vedi la sezione sugli obiettivi e [[Classifica per obiettivo]].

## In una frase
È una directory per città e quartiere di feste di compleanno (location e animatori), corsi per bambini 0-12 anni e campus di tutte le vacanze. Ogni scheda riporta pacchetti, prezzi, età e orari, precompilati con lo scraping di siti e listini PDF. I genitori inviano una richiesta di preventivo unica a 3-5 strutture. Le strutture pagano un abbonamento per ricevere i contatti e comparire in evidenza.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** location per feste (parchi giochi al coperto, ludoteche, fattorie didattiche), animatori, scuole di musica, lingue e sport, gestori di campus.
- **Riferimenti reali [fatto]:**
  - kidsgo (Germania): da 1,50 a 49 €/mese più IVA;
  - Happity (Regno Unito): da 72 a 250 £/anno, più una commissione dell'1-2,5%;
  - Kindaling: quota annua per feste e servizi, commissione per corsi e campus;
  - in Italia: BeMyHero PRO da 9,90 €/mese, RomaperBambini 20 € per evento.
- **Perché pagano [stima]:** una festa vale 319-669 € (listino di ottobre 2026), quindi un contatto qualificato vale almeno 20-40 €.
- **Il dubbio principale:** nessuno pubblica quante strutture paghino davvero. Hoop (Regno Unito) ha 13.000 organizzatori e non fa pagare l'inserimento.
- **Prezzo proposto [stima]:** gratis con pochi contatti al mese; "Pro" a 19-29 €/mese con contatti illimitati e posizione in evidenza nel quartiere.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Lato strutture (outbound elencabile):** lo scraping precompila 2.000-4.000 schede a Roma e Milano. Un operatore contatta le strutture con la scheda già pronta e il numero di richieste ricevute nel loro quartiere. Si offre un periodo gratuito e si converte quando arrivano i contatti.
- **Lato genitori:** SEO di coda lunga per quartiere ("feste compleanno bambini roma nord", "ludoteca monteverde"), più Google Ads sulle ricerche con intento d'acquisto ("location per feste bambini milano").
- **Limite verificato:** l'autocompletamento è profondo solo a Roma e Milano (10 suggerimenti); in altre 8 città dà da 1 a 5 suggerimenti.

## Perché queste competenze danno un vantaggio
Il lavoro difficile è estrarre pacchetti, prezzi, età e orari da siti, PDF e pagine social eterogenei, e tenerli aggiornati ogni stagione. Winnie (USA) ha avviato il catalogo allo stesso modo, dai registri pubblici. È un vantaggio reale ma copiabile: con l'AI l'estrazione costa sempre meno. Lo scraping è interno al prodotto: penalità di conflitto −2.

## Concorrenti
- **Italia:**
  - BeMyHero (feste, 150+ professionisti registrati, preventivi via WhatsApp);
  - RomaperBambini e MilanoperiBambini, Kid Pass (portali editoriali);
  - Google Maps e Ask Maps.
- **Estero, nessuno presente in Italia:** kidsgo, Kindaling, Happity, Hoop.

## Rischi principali (e quello che la ucciderebbe)
1. **Le strutture italiane non pagano, o pagano 10-20 €/mese.** Per l'obiettivo B servono ~400-530 strutture paganti, numero che nessuno ha mai mostrato in Italia. È il rischio che la ucciderebbe.
2. **Domanda concentrata a Roma e Milano:** il mercato servibile è piccolo.
3. **Vendita e assistenza alle strutture richiedono persone:** l'abbandono è probabile per le strutture che ricevono pochi contatti.
4. **Le risposte AI e Ask Maps** riducono i clic sulle ricerche informative.
5. **Foto e testi delle strutture:** vanno chiesti, non copiati (diritto d'autore). Restano rischi bassi sul diritto *sui generis*, perché i fatti vengono da molte fonti diverse.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Sviluppatore part-time:** directory, estrazione dei dati, modulo per i preventivi.
- **Operatore commerciale part-time:** contatto con le strutture e assistenza.
- **Founder:** architettura dello scraping e qualità dei dati, circa 3 h/settimana dopo l'avvio.
- **Limite:** non si delega a costo zero, perché la vendita alle strutture è lavoro continuo.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 2 | Organizzare la festa o trovare un corso è un fastidio ricorrente ma moderato. Nessuna misura diretta del dolore. | autocompletamento ([[H22 Entusiasta]]) |
| C2 Domanda (10) | 2 | 19 città su 20, ma con profondità solo a Roma e Milano; volumi assoluti ignoti | verifica del Giudice su suggestqueries.google.com |
| C3 Monetizzazione (15) | 2 | Listini esteri pubblici (kidsgo, Happity); in Italia 9,90 €/mese e 20 € per evento; Hoop non incassa | kidsgo.de, bemyheropro.com, hoop.co.uk |
| C4 Vantaggio competenze (15) | 2 | Lo scraping dei listini risolve l'avvio a freddo, ma è replicabile | Winnie (TechCrunch 2022) |
| C5 Distribuzione senza pubblico (15) | 3 | Elenco delle strutture contattabili più SEO per quartiere; esposizione alle risposte AI | [[H22 Bucatore]] |
| C6 Resistenza all'AI (5) | 3 | Prezzi freschi e richiesta di preventivo; Ask Maps copre i luoghi generici | blog.google 12/03/2026 |
| C7 Difendibilità (5) | 2 | Base di strutture e recensioni si accumulano lentamente | stima |
| C8 Debolezza incumbent (5) | 4 | BeMyHero piccolo e con numeri incoerenti; portali editoriali senza dati strutturati | bemyheropro.com, bemyhero.it |
| C9 Tempo al primo euro (5) | 3 | 2-4 mesi (directory più vendita alle strutture) | stima |
| C10 Delegabilità (10) | 3 | Delegabile, ma serve un operatore commerciale continuo | stima |
| C11 Tetto a 24 mesi (5) | 2 | 300 strutture a 25 €/mese = 90 k€/anno, già ottimistico | stima |

**Lordo:** (2×10 + 2×10 + 2×15 + 2×15 + 3×15 + 3×5 + 2×5 + 4×5 + 3×5 + 3×10 + 2×5) / 5 = 245 / 5 = **49**.

**Penalità:**
- conflitto −2 (scraping interno al prodotto);
- piattaforma −1 (dipendenza da Google per traffico e risposte AI).

**Punteggio v2: 46.**

### Obiettivi A, B, C
- **A. Reddito extra: bassa (< 5%).** Per coprire 60-116 k€/anno (idea da costruire) servono **~200-390 strutture a 25 €/mese**, o ~500-980 a 9,90 €/mese. In Italia nessun attore ha mostrato numeri simili: RomaperBambini fa 80.000 pagine viste al mese dopo 15 anni, BeMyHero ha 150+ professionisti registrati.
- **B. Business: 2%.** Servono ~400-530 strutture paganti per 120-160 k€ di margine lordo.
- **C. Costruisci e vendi: bassa.** È un asset ricorrente ma piccolo e con abbandono. Compratori possibili sono un portale per famiglie o un attore estero (kidsgo, Kindaling) che entra in Italia, ma non risulta alcun interesse.

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Settimane 1-2.** Scraping e normalizzazione di 300 location per feste e animatori a Roma, con pacchetti e prezzi. Pagina pubblica per 5 quartieri. 300 € di Google Ads su "feste compleanno bambini roma [zona]" e "location feste bambini roma".
2. **Settimane 2-4.** L'operatore contatta 150 strutture con la scheda precompilata e propone il piano "Pro" a 19 €/mese, con il primo mese gratis ma la carta registrata, oppure 7 € per contatto.

**Soglie decise ora:**
- **Lato genitori:** almeno 40 richieste di preventivo con meno di 300 € di pubblicità (costo per richiesta ≤ 7,5 €).
- **Lato strutture:** **almeno 10 strutture su 150 (≥ 6,7%)** registrano un metodo di pagamento o pagano almeno un contatto.

**Esito:** se manca anche una sola soglia, archiviare. Se passano entrambe, ripetere a Milano ed estendere ai corsi.

## Fonti
Tutte con accesso del 2026-11-20.
- https://www.kidsgo.de/familienmitgliedschaft
- https://intercom.help/happity/en/articles/2656616-how-do-i-become-a-member-and-what-comes-with-my-subscription
- https://www.kindaling.de/faq/provider
- https://techcrunch.com/2022/03/04/winnie-has-a-new-plan-to-help-childcare-centers-scale-care
- https://hoop.co.uk/organisers · https://hoop.co.uk/articles/hoop/is-hoop-app-free/
- https://bemyheropro.com/ · https://www.bemyhero.it/
- https://www.romaperbambini.it/pubblicita
- https://irp.cdn-website.com/35f1f8a4/files/uploaded/Listino+bubble+da+ottobre+2026.pdf
- https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/
- Rapporti: [[H22 Entusiasta]], [[H22 Bucatore]]
