---
tipo: sintesi
tags: [sintesi, raccomandazione]
aggiornato: 2026-11-20
---
# Raccomandazione

Organizzata per obiettivo: **A** reddito extra (1-2 k€/mese netti), **B** business da almeno 50 k€/anno, **C** costruisci e vendi. Vedi [[Classifica per obiettivo]] e il [[Glossario]].

## In sintesi
- **A. Reddito extra:** con capitale (~165-285 k€), **comprare un piccolo software già redditizio** ([[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]]): probabilità media (5-15%). Dalla nota: circa 35% di chiudere un buon acquisto in 12 mesi × circa 40% che ricavi e aumento dei prezzi tengano ≈ 14%; con il fattore "capitale e operatore sufficienti" della nota (circa 50%) ≈ 7%. Fascia media in entrambi i casi. È comunque la migliore per questo obiettivo. Con poco capitale non c'è una strada solida. Due opzioni deboli: prendere **app in gestione in revenue share** ([[I-H05-2 App utility trovate via scraping degli store]], esborso fino a 10 k€ per accordo; probabilità media ma evidenze aneddotiche), oppure costruire **quiz automatici per testate locali** ([[I-H11-1 Quiz locali automatici per testate]], ~15-30 k€): probabilità bassa (< 5%), perché servono ~46-90 testate paganti, ben oltre i quotidiani locali italiani, ma l'esperimento costa poco. Nessuna delle due richiede l'autorizzazione del datore, salvo obblighi di comunicazione previsti dal contratto.
- **C. Costruisci e vendi:** comprare, migliorare e rivendere.
- **B. Business:** nessuna idea è promettente (3-7% per le idee approfondite). Oggi non ci investirei.

## Il quadro che vale per tutti gli obiettivi
1. **Le idee più vicine alla tua competenza sono quelle più esposte al contratto di lavoro.** Vendere dati o servizi di scraping rischia di violare l'obbligo di fedeltà (art. 2105 c.c.). Le due strade indicate sopra non vendono dati né scraping. Vedi [[H16 Founder a tempo parziale]].
2. **Lo scraping da solo non è più un vantaggio.** Conta dentro flussi continui su molte fonti, oppure come strumento per trovare opportunità (es. software da comprare). Vedi [[H17 Vantaggio dello scraping]].
3. **Il costo della delega dipende dall'obiettivo.** Per B serve un operatore a tempo pieno pagato a mercato, quindi ~120-160 k€ di margine lordo, cioè prima del costo dell'operatore, della società e dell'infrastruttura [stima]. Per A Claude ipotizza che bastino collaboratori part-time pagati a mercato: è una stima, non verificata dalla discovery (H16 sostiene il contrario per un business vero).

## Cosa farei, in ordine

### 1. Decidere il capitale che sei disposto a rischiare
Da questa scelta dipende la strada per l'obiettivo A.

| Situazione | Strada |
|---|---|
| Hai **~165-285 k€** da rischiare [stima] | **Comprare** un software con SDE di ~55-95 k€/anno (utile prima del compenso del proprietario), a circa 3 volte l'SDE (è anche la soglia di prezzo della settimana 4). Per confronto, in [[H05 Comprare e rifare meglio]] e nella nota dell'idea: mediana Acquire.com 3,9x, fascia FE International 2,5-4x, ma multipli realizzati sotto 300 k$ di 1,85-2,24x (richiesti fino a 2,9x). Se si compra a quei multipli il capitale scende (circa 100-215 k€). Il conto: 20-40 k€ di margine per avere 1-2 k€/mese netti, più 30-38 k€/anno per un operatore part-time (circa mezza persona) pagato a mercato, secondo il Bucatore del secondo giro, più 4-15 k€/anno di costi fissi della società. Se è un'app Atlassian ancora su Connect, aggiungere 20-60 k€ di migrazione a Forge. |
| Hai **~10-30 k€** | **Prendere app in gestione in revenue share** (esperimento nella nota di [[I-H05-2 App utility trovate via scraping degli store]]) oppure **costruire** i quiz per testate locali. Probabilità media per la prima (evidenze aneddotiche), bassa per la seconda: valgono soprattutto come esperimenti economici. |
| Hai il capitale **e vuoi partire subito** | Avviare l'esperimento sui quiz (30 giorni) mentre si cerca il software da comprare. |

I 350-475 k€ citati nella nota di [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]] valgono per l'obiettivo B, non per A: circa 350-450 k€ con un operatore a 0,6-1 persona (45-65 k€/anno, stima dell'Entusiasta del secondo giro); ~420-475 k€ con un operatore a tempo pieno pagato secondo [[H16 Founder a tempo parziale]] (60-75 k€/anno, stima del Bucatore).

### 2. Strada "comprare": primo mese
Riprende l'esperimento del secondo giro nella nota dell'idea, con le soglie adattate all'obiettivo A.
- **Budget:** 1,5-3 k€ per un analista a ore; al massimo 20 ore tue nel mese.
- **Settimana 1:** elenco dei target da API e pagine pubbliche. Priorità alle app Atlassian a pagamento ferme (173, molte ancora su Connect: la dismissione del 31/01/2027 costringe i proprietari a scegliere tra migrare e vendere) e alle app Shopify; WordPress solo come lista secondaria (WordPress.org sconsiglia ai propri sviluppatori di rispondere alle offerte di acquisto). Domanda scritta a Shopify e Atlassian su come funziona il trasferimento di un'app. Stop se restano meno di 60 target o se Shopify non indica una procedura praticabile.
- **Settimane 2-3:** 150 contatti attraverso i canali pubblici del prodotto. Stop se rispondono meno del 4% o se meno di 3 venditori condividono i dati di incasso degli ultimi 24 mesi.
- **Settimana 4, soglia per l'obiettivo A:** almeno 2 target con ricavi stabili (calo ≤ 10% in 12 mesi), calo dei ricavi per abbandono dei clienti ≤ 3% al mese, **SDE ≥ 55 k€**, prezzo ≤ 3 volte l'SDE, almeno il 20% del prezzo pagato dopo (pagamento differito o legato ai risultati).
- **Vincoli da sapere:** su Shopify non si possono alzare i prezzi agli abbonati esistenti e il trasferimento dell'app richiede il consenso di Shopify.

### 3. Strada "quiz per testate": esperimento di 30 giorni
- Quiz generati dagli articoli di 3 testate; una demo costruita sulla testata di ciascun destinatario, a partire dai suoi feed RSS pubblici e mostrata solo a quella testata (non pubblicata); 30 testate contattate; 4 settimane gratis, poi 79 €/mese.
- Le regole si applicano in quest'ordine. **Stop:** meno di 2 impegni a pagare, oppure la risposta prevalente è "abbiamo già un fornitore" o "lo facciamo gratis". **Successo:** almeno 3 testate si impegnano a pagare e almeno 6 accettano la prova. **Zona grigia (tutti gli altri casi):** ripetere con 30 testate in un secondo paese (es. Spagna) prima di investire.
- **Limite:** per 1-2 k€/mese netti servono ricavi di ~44-85 k€/anno (20-40 k€ di margine + 20-30 k€ di collaboratori part-time + 4-15 k€ di costi fissi della società [stima]), cioè ~46-90 testate paganti su 43 quotidiani locali e 150-300 testate online; il tetto stimato è di circa 32 k€/anno sui soli quotidiani (Bucatore di [[H11 Giochi quotidiani basati su dati]]); le 150-300 testate online lo alzano, ma di quanto non è stato stimato. Per l'obiettivo B ne servirebbero ~78-100. Adatto all'obiettivo A solo se l'esperimento va molto bene; non adatto a B.

### 4. Contratto e pareri legali
- **Per tutte le idee:** prima di costituire una società (necessaria anche per comprare un software), far leggere il contratto (clausole di esclusiva, obbligo di comunicare altre attività) e seguire le regole di separazione: codice scritto da zero, infrastruttura propria, nessun ex collega senza un parere. Sono i passi 1 e 5 di [[I-H16-1 Autorizzazione scritta e veicolo societario]]; se il contratto obbliga a comunicare altre attività, anche il passo 3.
- **Autorizzazione scritta del datore prima di qualunque esperimento,** con parere di un avvocato del lavoro (~500-1.500 €), per le idee che vendono dati o servizi di scraping: [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]], [[I-H03-2 Monitoraggio rivenditori e prezzi minimi per brand italiani]], [[I-H01-1 Portafoglio di actor su target difficili non personali]], [[I-H01-2 API dati di visibilità nelle risposte AI multilingua]], [[I-H02-1 Feed Italia in tempo reale per assistenti di viaggio]], [[I-H07-1 Intelligence OTA per operatori di tour]], [[I-H07-2 Rate shopper per autonoleggi]], [[I-H09-2 Schede prodotto da EAN]].
- **Per [[I-H09-1 Sync fornitori senza feed]]:** autorizzazione scritta del datore o parere favorevole di un avvocato del lavoro sul contratto, prima di qualunque esperimento; poi, nelle prime settimane dell'esperimento, parere penale e civile sull'accesso ai portali e almeno un grossista che autorizzi l'accesso (altrimenti stop). Nella [[Classifica]] ha una penalità di conflitto bassa (lo scraping è interno al prodotto), ma il giudice del secondo giro la considera molto simile all'attività del datore: per prudenza il gate è quasi lo stesso delle idee che vendono dati.
- **Per [[I-H15-1 Contestazione maxi-bollette a successo]]:** parere (1-3 k€) sulla riserva forense, cioè se l'attività è riservata agli avvocati.
- **Per [[I-H06-1 Disdetta digitale per l'Italia]]:** parere su delega e trattamento dei documenti d'identità.

### 5. Da valutare: farlo con il datore
La tua competenza vale soprattutto dove lavori già. Un nuovo prodotto o una linea di business proposta al datore (con quote, bonus o una società separata) potrebbe valere più di un progetto parallelo.
**È una mia ipotesi, non verificata con il metodo della discovery.**

### 6. Strade da non riaprire senza fatti nuovi
Confutate con evidenze: siti SEO con affiliazione, app mobile in abbonamento, directory e contatti venduti a strutture locali, regole e accessi per chi viaggia, giochi su portali web, giochi indie. Vedi [[Lezioni trasversali]].

## Cosa non sappiamo ancora
- **Le probabilità per A e C sono stime di Claude**, ricavate dai numeri delle note, non verdetti dei giudici. Anche l'ipotesi che per A bastino collaboratori part-time non è stata verificata.
- **Alcune idee non approfondite** (es. [[I-H01-1 Portafoglio di actor su target difficili non personali]] a 58, [[I-H11-1 Quiz locali automatici per testate]] a 54) hanno punteggi più alti delle 4 approfondite solo perché non sono state ricalibrate, e in alcuni casi assegnano voti alti a criteri senza fonte. Vedi [[Classifica]].
- **Volumi di ricerca reali** (manca uno strumento SEO) e **interviste a clienti veri**: nessuna idea è ancora stata messa davanti a un cliente.
- **Il testo del contratto.**

## Domande per te
1. Quanto capitale sei disposto a rischiare? Decide il punto 1.
2. Sei disposto a parlarne con il datore, o il progetto deve restare separato?
3. Nella tua rete ci sono settori dove conosci clienti con un problema di dati? Lì la distribuzione sarebbe già risolta.
