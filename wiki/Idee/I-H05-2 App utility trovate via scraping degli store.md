---
tipo: idea
id: I-H05-2
ipotesi: "[[H05 Comprare e rifare meglio]]"
punteggio_v2: 56
modello_ricavo: "abbonamenti e acquisti in-app di app utility acquisite o prese in revenue share"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "10-60 k€ per app; 100-200 k€ per un portafoglio di 4-6 app (meno con revenue share)"
tags: [idea, S2]
---
# I-H05-2 — App utility trovate via scraping degli store

## In una frase
Fare scraping sistematico di App Store e Google Play per trovare app utility che hanno ancora utenti attivi, buone valutazioni, manutenzione ferma e monetizzazione debole. Poi comprarle a 1,5-2,5x il profitto, oppure prenderle in gestione con un accordo di revenue share alla MWM, aggiornarle e rifarne la monetizzazione.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** gli utenti finali, con abbonamenti settimanali, mensili o annuali tramite gli store.
- **[fatto] Multipli delle app su Flippa:** 2,4x di media e 5,4x nel quartile alto (dato Flippa 2025, letto solo da estratti).
- **[fatto] Casi di rilancio:**
  - MWM ha portato Swipewipe da 15 mila a oltre 1 M di utenti attivi al mese con un accordo di revenue share (TechCrunch, 2024; la proiezione dei ricavi è di MWM).
  - L'aneddoto 7 Minute Workout parla di +400% dopo il paywall (racconto del singolo sviluppatore).
- **[fatto] Il limite:** "flipping monetizes existing demand — it doesn't create it", e un paywall su un'app poco usata ne uccide l'uso residuo (Adapty, che vende paywall).

## Distribuzione: come arrivano i primi 100 clienti/utenti
- La distribuzione è lo store stesso: gli utenti installati e l'ASO residuo.
- Leve aggiuntive: localizzazione in 10-15 lingue, aggiornamento dell'SDK e delle schermate, recensioni nuove.
- Nessuna acquisizione utenti a pagamento finché l'LTV non è misurato.

## Perché queste competenze danno un vantaggio
- **Sourcing proprietario.** Il deal sourcing è uno scraping ripetuto degli store: recensioni nel tempo come indicatore di utenti attivi, data dell'ultimo aggiornamento, presenza di acquisti in-app, contatto dello sviluppatore. È lo stesso tipo di market intelligence usato da Bending Spoons e MWM, ma su scala piccola.
- **Diligenza tecnica.** Codice e dati di App Store Connect e Play Console vanno letti in sola lettura prima della firma.

Il vantaggio è più forte che in I-H05-1, perché la ricerca dei target si fa quasi tutta con i dati.

## Concorrenti
- Publisher di app che fanno acquisizioni e revenue share (MWM, Bending Spoons in grande, holding di app).
- Acquirenti su Flippa.

Nella fascia di app con pochi utenti ma attivi la concorrenza è frammentata ([stima]).

## Rischi principali (e quello che la ucciderebbe)
- **Il paywall uccide l'uso residuo** (Adapty).
- **Vincoli di trasferimento delle app iOS.** Gli ID degli acquisti in-app non devono collidere con quelli del ricevente, e alcune configurazioni non sono trasferibili (Apple).
- **Dipendenza dalle policy e dalle commissioni degli store.**
- **Asset che non rispondono alle leve.** Una parte delle app acquisite non risponde ([stima] 30-50%).
- **Concorrenza delle app AI generaliste** sulle utility.

**Quello che la ucciderebbe:** le app con utenti attivi reali si rivelano rare, oppure gli sviluppatori chiedono multipli sui download e non sul profitto.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Founder:** imposta lo scraper e i criteri, e approva i deal (3-5 h/settimana).
- **Sviluppatore mobile part-time o offshore:** aggiornamenti, paywall, localizzazione.
- **Growth part-time:** ASO e test sui prezzi.

Il portafoglio deve restare standardizzato: stesso stack per paywall, analytics e localizzazione.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 3 | Le utility hanno utenti attivi, ma il bisogno va verificato caso per caso | [[H05 Entusiasta]] T2 |
| C2 Domanda | 3 | Molte app trascurate negli store; quante abbiano utenti attivi non è misurato | [stima] |
| C3 Monetizzazione | 3 | Gli abbonamenti in-app sono provati, ma il paywall su un'app poco usata è rischioso | Adapty; Appfigures |
| C4 Vantaggio delle competenze | 4 | Il sourcing è uno scraping degli store, cioè una competenza distintiva | [stima] |
| C5 Distribuzione senza pubblico | 4 | Canale integrato (store) con utenti già installati | — |
| C6 Resistenza all'AI | 2 | Le utility sono esposte alle funzioni AI dei sistemi operativi e degli assistenti | [stima] |
| C7 Difendibilità | 2 | Le app utility sono copiabili; resta la base installata | [stima] |
| C8 Debolezza degli incumbent | 3 | Il target è per definizione abbandonato dallo sviluppatore | — |
| C9 Tempo al primo euro | 3 | Ricavi dalla firma, ma la leva richiede 2-4 mesi | [stima] |
| C10 Delegabilità | 3 | Sviluppo e ASO sono delegabili con uno stack standard | [stima] |
| C11 Tetto di ricavo a 24 mesi | 3 | 50-150 k€/anno con un portafoglio di 4-6 app | [stima] |

Calcolo: (3·10 + 3·10 + 3·15 + 4·15 + 4·15 + 2·5 + 2·5 + 3·5 + 3·5 + 3·10 + 3·5) / 5 = 320 / 5 = **64**.

**Penalità −8:**
- dipendenza dagli store;
- rischio reputazionale associato agli acquirenti di app ed estensioni;
- base di evidenze aneddotica sui rilanci.

**Punteggio finale: 56.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Settimana 1.** Scraper su 3-4 categorie utility (scanner, conversioni, foto, produttività) di App Store, usando l'API pubblica di ricerca di iTunes, e di Google Play. Filtri:
   - almeno 1.000 valutazioni, con media ≥ 4;
   - nessun aggiornamento da almeno 18 mesi;
   - recensioni ancora presenti negli ultimi 90 giorni, come segnale di uso attivo.

   Obiettivo: una lista di 150 target.
2. **Settimane 2-3.** Contatto diretto con gli sviluppatori, proponendo due alternative: acquisto oppure revenue share. Richiesta di screenshot della console con utenti attivi mensili e ricavi.
3. **Settimana 4.** Analisi preliminare e term sheet non vincolanti.

**Soglia di successo, decisa prima:**
- almeno il 10% di risposte (15 o più su 150);
- almeno 5 app con utenti attivi mensili ≥ 10.000 documentati;
- almeno 2 term sheet a ≤ 2,5x il profitto, oppure in revenue share senza esborso iniziale superiore a 10 k€.

Se la soglia non è raggiunta, l'idea si archivia.

## Fonti
Accesso a tutte le fonti: 2026-11-20.

1. TechCrunch, Swipewipe e MWM (25/6/2024): https://techcrunch.com/2024/06/25/gen-z-photos-app-swipewipe-sells-to-french-publisher-mwm-in-its-largest-acquisition-to-date
2. Appfigures, Bending Spoons (verificato dal Giudice): https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love
3. Adapty, *How to buy a mobile app*: https://adapty.io/blog/how-to-buy-a-mobile-app/
4. Apple, *App transfer criteria*: https://developer.apple.com/help/app-store-connect/transfer-an-app/app-transfer-criteria
5. Appbot, caso 7 Minute Workout: https://appbot.co/blog/the-resurrection-how-i-got-2-3-million-app-downloads/
6. Flippa, multipli 2025 (solo estratti): https://flippa.com/blog/2025-online-business-ma-insights-from-flippa/
