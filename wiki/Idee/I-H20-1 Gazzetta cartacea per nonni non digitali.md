---
tipo: idea
id: I-H20-1
ipotesi: "[[H20 Nonni e famiglia allargata come utenti]]"
punteggio_v2: 46
modello_ricavo: "abbonamento mensile pagato da figli e nipoti (6,99-9,99 €/mese); contratti con RSA da validare"
tempo_founder_h_sett: 4
tempo_founder_h_sett_nota: "8-10 nei primi 3 mesi"
investimento_iniziale_eur: "20-40 k€ (MVP 8-15 k€, primo anno di operatore part-time per stampa e assistenza, test di acquisizione 3-5 k€, parere privacy 1-2 k€) [stima]"
tags: [idea, famiglia]
---
# I-H20-1 — Gazzetta cartacea per nonni non digitali

> **Come leggere questa nota.** Il punteggio v2 misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Le fasce per i tre obiettivi sono in fondo alla nota e vanno riportate in [[Classifica per obiettivo]]. Sigle nel [[Glossario]].

## In una frase
Ogni mese (o ogni due settimane) un giornale A4 a colori con le foto e i messaggi della famiglia arriva per posta al nonno che non usa internet. I familiari inviano le foto **da WhatsApp** a un numero dedicato o da un link web, senza installare app; impaginazione e didascalie sono automatiche (AI). È il modello di Famileo, che in Italia non esiste.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** il figlio o il nipote che apre l'abbonamento, con la possibilità di dividere la spesa tra i familiari (come il "family kitty" di Famileo: va fatto con un PSP terzo, vedi rischi). In un secondo tempo le RSA, che lo offrono ai residenti.
- **Quanto:** 6,99-9,99 €/mese. Riferimenti: Famileo 5,99 € mensile, 17,99 € settimanale ([Breizh-info](https://www.breizh-info.com/2026/01/13/255664/famileo-la-start-up-bretonne-qui-reconnecte-les-generations-avec-du-papier/), letto); Neveo 12,99 €/mese, primo numero a 4,95 € ([Neveo](https://www.neveo.io/), letto).
- **Margine** [stima del Giudice]: posta 2,39 € (Posta Ordinaria Pro fino a 100 g) o 2,90 € (Posta Ordinaria 20-50 g) secondo il [listino Poste di maggio 2026](https://www.media.poste.it/93dc336c-6a17-4111-ac4c-81a8b074489e/web/prodotti-servizio-universale-listino) (letto); stampa a colori e imbustamento ~1-1,6 €; incasso ~0,3 €. Costo per numero ~3,7-4,8 €. A 7,99 €/mese IVA inclusa restano **~21-35 €/anno per famiglia** con l'invio mensile. Il piano quindicinale o settimanale aumenta il ricavo ma anche il costo postale.
- **Perché pagano:** il 64,3% degli over 75 non usa internet ([ISTAT 2025](https://www.istat.it/comunicato-stampa/cittadini-e-ict-anno-2025/), letto); il prodotto è anche un regalo (Natale, Festa dei nonni del 2 ottobre). In Francia oltre 260.000 famiglie pagano ([Breizh-info](https://www.breizh-info.com/2026/01/13/255664/famileo-la-start-up-bretonne-qui-reconnecte-les-generations-avec-du-papier/)). In Italia la disponibilità a pagare **non è provata**: è il punto da testare.

## Distribuzione: come arrivano i primi 100 clienti/utenti
1. **RSA e strutture residenziali** (12.987 in Italia, [ISTAT](https://www.istat.it/comunicato-stampa/le-strutture-residenziali-socio-assistenziali-e-socio-sanitarie-al-1-gennaio-2024/)): è il canale da cui è partita Famileo, che oggi dichiara oltre 2.700 strutture partner ([Famileo Pro](https://www.famileopro.com/fr-fr/), letto). La lista si costruisce dai registri regionali; un operatore chiama, propone un pilota gratuito di 3 mesi, e la struttura lo comunica alle famiglie. Ogni struttura porta decine di famiglie [stima].
2. **Pubblicità stagionale** su "regalo nonni", "regalo nonni foto", "regalo festa dei nonni foto" (query presenti nell'autocompletamento Google in italiano, verificato dal Giudice). La categoria "giornalino per i nonni" invece non ha suggerimenti: chi cerca non conosce il prodotto.
3. **Passaparola dentro la famiglia:** ogni abbonamento coinvolge 3-8 familiari che inviano le foto [stima].

## Perché queste competenze danno un vantaggio
Poco. Lo scraping serve solo a costruire e pulire l'anagrafica delle strutture per il contatto commerciale. Conta di più lo sviluppo: ricezione delle foto dalla piattaforma WhatsApp Business, impaginazione automatica, flusso di stampa e spedizione con un fornitore di posta ibrida. È replicabile da qualunque buon team in poche settimane.

## Concorrenti
- **Famileo** (Francia): redditizio, circa 14 M€ di ricavi nel 2024 (dichiarati), già in 5 lingue, nessuna versione italiana (404). Può entrare in Italia in qualsiasi momento; l'autocompletamento suggerisce già "famileo italia".
- **Neveo** (Belgio/Francia): nessuna versione italiana.
- **Stampa foto e fotolibri** (Poste Fotoservice, FreePrints, Cheerz, Popsa): prodotti una tantum, non un giornale periodico.
- **WhatsApp, FamilyAlbum, album Apple e Google:** gratuiti, ma solo per i nonni digitali.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** disponibilità a pagare troppo bassa in Italia, o costo di acquisizione superiore a 1-1,5 anni di margine (~30-50 €), perché il churn è strutturale (il nonno muore, si ammala o perde interesse).
- **Ingresso di Famileo** in Italia, con marchio, capitale e processo già pronti.
- **Privacy:** foto di minori trattate e stampate. Serve base giuridica chiara (consenso dei genitori), DPIA, conservazione minima. Clima regolatorio in irrigidimento (legge francese 2024-120; [Garante sullo sharenting](https://www.garanteprivacy.it/it/temi/minori/sharenting)).
- **Piattaforma WhatsApp:** regole e prezzi dell'API cambiano; serve sempre l'alternativa web.
- **Pagamenti:** la divisione della spesa tra familiari va fatta con un PSP (Stripe, PayPal), senza detenere denaro di terzi.
- **Operations:** stampa, posta (consegne irregolari), indirizzi sbagliati, assistenza telefonica a utenti anziani.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Operatore part-time** (poi a tempo pieno oltre ~2.000 famiglie): assistenza, controllo qualità dei numeri, rapporti con stamperia e posta.
- **Commerciale a provvigione** per le RSA.
- **Sviluppatore** per MVP e manutenzione; stampa e spedizione affidate a un fornitore di posta ibrida.
- **Founder:** 8-10 h/settimana nei primi 3 mesi, poi ~4 h/settimana (prodotto, numeri, fornitori).

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 3 | Il 64,3% degli over 75 non usa internet; Famileo esiste perché il bisogno è reale. Non c'è evidenza di "dolore" forte: è un desiderio, non un problema urgente | ISTAT 2025; Breizh-info |
| C2 Domanda (10) | 2 | Domanda provata in Francia (260.000 famiglie), **non misurata in Italia**: zero suggerimenti per "giornalino per i nonni"; esistono solo query generiche "regalo nonni foto" | Breizh-info; autocompletamento Google (Giudice) |
| C3 Monetizzazione (15) | 3 | Pagatori provati all'estero (5,99-17,99 €/mese, ~14 M€ Famileo), ma margine di ~21-35 €/anno per famiglia dopo la posta italiana | Breizh-info; listino Poste 2026 |
| C4 Vantaggio competenze (15) | 1 | Lo scraping serve solo alla lista delle RSA; il resto è sviluppo standard | rapporti Entusiasta e Bucatore |
| C5 Distribuzione senza pubblico (15) | 2 | Outbound elencabile verso 12.987 strutture, ma è vendita sul campo; il B2C richiede pubblicità stagionale | ISTAT strutture; Famileo Pro |
| C6 Resistenza all'AI generalista (5) | 4 | Prodotto fisico con logistica: un chatbot non lo sostituisce | — |
| C7 Difendibilità (5) | 2 | Copiabile; qualche costo di uscita (la famiglia ha l'abitudine, la RSA il contratto) | — |
| C8 Debolezza incumbent (5) | 3 | Nessun incumbent in Italia, ma Famileo è forte e redditizia e può entrare | curl 404; Breizh-info |
| C9 Tempo al primo euro (5) | 4 | MVP con impaginazione semiautomatica e preordini in 1-2 mesi | [stima] |
| C10 Delegabilità (10) | 3 | Delegabile a un operatore, ma il business è di operations e vendita | — |
| C11 Tetto a 24 mesi (5) | 3 | Con 2.000-5.000 famiglie a 6,55 € netti/mese: ~160-390 k€ di ricavi, ma margine di 40-175 k€ [stima] | calcolo del Giudice |
| **Lordo** | **50** | (3×10 + 2×10 + 3×15 + 1×15 + 2×15 + 4×5 + 2×5 + 3×5 + 4×5 + 3×10 + 3×5) / 5 = 250 / 5 | |
| Penalità legale (foto di minori) | −2 | | Garante |
| Penalità piattaforma (API WhatsApp) | −1 | | |
| Penalità conflitto con il lavoro | −1 | Lo scraping serve solo a trovare i partner (regola della [[Classifica]]) | |
| **Punteggio v2** | **46** | Correzione: la versione precedente riportava lordo 52 e punteggio 48 per un errore di somma | |

## Fasce per obiettivo (modello di [[Classifica per obiettivo]])
| Obiettivo | Fascia | Perché |
|---|---|---|
| **A. Reddito extra** | **bassa** (< 5%) | Totale da coprire per un'idea da costruire: 60-116 k€/anno. Con 21-35 €/anno di margine per famiglia servono **~1.700-5.500 famiglie paganti attive**, con churn strutturale e costo di acquisizione non misurato. Famileo ha impiegato ~6 anni per arrivare a 160.000 famiglie in Francia. |
| **B. Business** | 3% (giudice) | 120-160 k€ di margine lordo: ~3.400-7.600 famiglie, o un canale RSA che paghi. |
| **C. Costruisci e vendi** | **bassa** | Abbonamenti consumer piccoli e con churn; l'unico compratore naturale è Famileo, che può anche entrare da sola. |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
Si sfrutta il Natale, che è vicino (oggi è il 20/11/2026).
1. **Settimana 1:** landing page "Il giornale di famiglia per i nonni, a Natale e ogni mese", con preordine del numero di Natale a 4,95 € (pagamento con Stripe) e abbonamento a 7,99 €/mese dal mese successivo. Primo numero impaginato a mano o con un template.
2. **Settimane 1-3:** 1.500 € di Meta e Google Ads su "regalo nonni", "regalo nonni foto", "regalo di Natale per nonna".
3. **In parallelo:** un operatore chiama 60 RSA prese dai registri regionali e propone un pilota gratuito di 3 mesi.

**Soglie (decise prima):**
- **Successo:** almeno **40 preordini pagati** con un costo di acquisizione **≤ 35 €** per preordine **e** almeno **5 RSA** che accettano il pilota (o almeno 2 disposte a pagare dopo il pilota).
- **Stop:** meno di 15 preordini, oppure costo per preordine > 80 €, oppure meno di 2 RSA interessate.
- In mezzo: un secondo test alla Festa della mamma, solo con il canale che ha funzionato.

## Fonti
Tutte con accesso il 2026-11-20.
- https://www.breizh-info.com/2026/01/13/255664/famileo-la-start-up-bretonne-qui-reconnecte-les-generations-avec-du-papier/
- https://www.famileo.com/famileo/en-US/ · https://www.famileopro.com/fr-fr/ · https://www.neveo.io/
- https://www.media.poste.it/93dc336c-6a17-4111-ac4c-81a8b074489e/web/prodotti-servizio-universale-listino
- https://www.istat.it/comunicato-stampa/cittadini-e-ict-anno-2025/
- https://www.istat.it/comunicato-stampa/le-strutture-residenziali-socio-assistenziali-e-socio-sanitarie-al-1-gennaio-2024/
- https://www.garanteprivacy.it/it/temi/minori/sharenting
- Rapporti: [[H20 Entusiasta]], [[H20 Bucatore]]

## Nota di coerenza
Secondo il secondo giro ([[H20b Famiglia allargata dove i nonni sono già]]) in Italia FamilyAlbum è quasi assente: per i nonni digitali la copertura viene da WhatsApp e Google Foto.
