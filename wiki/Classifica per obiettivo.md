---
tipo: sintesi
tags: [sintesi, classifica]
aggiornato: 2026-11-20
---
# Classifica per obiettivo

## Perché questa pagina
La discovery ha misurato il successo con una soglia fissata da Claude (obiettivo B qui sotto). L'utente ha poi chiarito che **non ha una soglia**: vanno bene tre obiettivi. Qui ogni idea è rivalutata su tutti e tre, **con le stesse evidenze** delle note (nessuna ricerca nuova). Termini e sigle nel [[Glossario]].

| Obiettivo | Definizione | Cosa serve |
|---|---|---|
| **A. Reddito extra** | 1.000-2.000 €/mese **netti** | Vedi il modello di calcolo qui sotto. |
| **B. Business** | ≥ 50 k€/anno di margine entro 24 mesi, con il founder a non più di 5 ore/settimana dopo l'avvio | È la soglia del [[Registro delle ipotesi]]. Serve un operatore a tempo pieno: ~120-160 k€ di margine lordo, cioè prima di operatore, costi della società e infrastruttura ([[H16 Founder a tempo parziale]]). |
| **C. Costruisci e vendi** | Costruire (o comprare e migliorare) un asset e venderlo entro 12-18 mesi dall'avvio | Serve ricavo ricorrente trasferibile, e un prezzo di vendita superiore a quanto speso. Per piccoli software (sotto 300 k$) i multipli realizzati sono 1,85-2,24 volte l'SDE (richiesti fino a 2,9x; mediana Acquire.com 3,9x su tutte le taglie): vedi [[H05 Comprare e rifare meglio]] e [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]]. |

## Modello di calcolo per l'obiettivo A (uguale per tutte le idee)
| Voce | Valore | Fonte |
|---|---|---|
| Margine che deve restare, prima delle tasse | **21-43 k€/anno** (12-24 k€ netti con un prelievo di circa il 44%) | prelievo stimato nel secondo giro di I-H05-1 |
| Collaboratori part-time pagati a mercato (circa mezza persona) | **30-38 k€/anno** | Bucatore del secondo giro di I-H05-1 |
| Costi fissi della società | **4-15 k€/anno** | [[H16 Founder a tempo parziale]] |
| **Totale da coprire per un software da comprare** | **55-96 k€/anno** | somma (l'infrastruttura è già nei costi del software comprato) |
| Infrastruttura (solo per le idee da costruire) | **5-20 k€/anno** | [[H16 Founder a tempo parziale]] |
| **Totale da coprire per un'idea da costruire** | **60-116 k€/anno** | somma |

### Modello leggero (aggiunto il 2026-11-20 su richiesta dell'utente)
Prodotto costruito con l'AI e automatizzato, seguito dal founder con poche ore e al più collaborazioni occasionali: 21-43 k€ di margine + 2-8 k€ di costi (società, infrastruttura, servizi) = **23-51 k€/anno da coprire**. È usato per le idee del [[Filone famiglia]], dove i volumi sono calcolati con questo modello. Per le idee in questa tabella vale il modello con collaboratori, salvo dove indicato.

Ipotesi di Claude, non verificata dalla discovery: per un obiettivo piccolo bastano collaboratori part-time. [[H16 Founder a tempo parziale]] sostiene che un business vero richieda un operatore a tempo pieno.

## Da dove vengono le probabilità
- **B, 4 idee approfondite e idee del filone famiglia:** stime dei giudici (secondo giro e sessioni del filone famiglia).
- **B, altre idee:** i giudici del primo giro hanno stimato solo le ipotesi. Si riporta la probabilità dell'ipotesi madre come **limite superiore indicativo** ("≤").
- **A e C:** stime di Claude ricavate dai numeri delle note, a fasce: **bassa** < 5% · **media** 5-15%. Nessuna idea arriva oltre il 15%.
- **Per le idee con un gate** (autorizzazione del datore, pareri legali) le fasce A e C sono **condizionate al superamento del gate**. Per esempio, per [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]] il giudice stima circa 30% di ottenere l'autorizzazione: la probabilità complessiva è circa un terzo della fascia indicata.

## Gate (condizioni da superare prima di tutto)
- **Autorizzazione scritta del datore, con parere di un avvocato del lavoro:** per tutte le idee che vendono dati o servizi di scraping.
- **Per [[I-H09-1 Sync fornitori senza feed]]:** autorizzazione scritta del datore o parere favorevole di un avvocato del lavoro sul contratto, prima di qualunque esperimento; poi, nelle prime settimane dell'esperimento, parere penale e civile sull'accesso ai portali e almeno un grossista che autorizzi l'accesso (altrimenti stop). Ha una penalità di conflitto bassa nella [[Classifica]] (scraping interno al prodotto), ma il giudice del secondo giro la considera molto simile all'attività del datore.
- **Lettura del contratto e regole di separazione** (passi 1 e 5 di [[I-H16-1 Autorizzazione scritta e veicolo societario]]): per tutte le altre, prima di costituire una società. Se il contratto obbliga a comunicare altre attività, va fatta anche la comunicazione al datore.
- Altri gate (capitale, pareri legali specifici) sono indicati riga per riga.

## Tabella
| Idea | A. Reddito extra | B. Business | C. Costruisci e vendi | Gate | Perché |
|---|---|---|---|---|---|
| [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]] | **media** (~7-14%), se c'è il capitale | 7% (giudice) | bassa | Capitale ~100-290 k€ per A; lettura del contratto e regole di separazione | **A:** si compra un software con SDE di ~55-96 k€/anno (il totale da coprire per un software comprato). Ai multipli realizzati (1,85-2,24x) costa ~100-215 k€; a 3x, la soglia massima dell'esperimento, ~165-290 k€. Probabilità: ~35% di chiudere un buon acquisto in 12 mesi × ~40% che ricavi e leva di prezzo tengano ≈ 14%; con il fattore "capitale e operatore sufficienti" della nota (~50%) ≈ 7%. **C:** comprando a 2-3x e rivendendo a ~2x si guadagna solo se l'SDE cresce molto, e la ricerca dell'acquisto dura già 6-12 mesi della finestra |
| [[I-H05-2 App utility trovate via scraping degli store]] | bassa | ≤ 12% | bassa | Capitale fino a ~40-60 k€ (revenue share) o ~100-200 k€ (acquisto); lettura del contratto e regole di separazione | **A:** il totale da coprire è 55-96 k€/anno (come per un software comprato: le app esistono già). Con un portafoglio di 4-6 app ciascuna deve lasciare al gestore ~9-24 k€/anno (~0,8-2 k€/mese), molto sopra il ricavo mediano di un'app (~72 $/mese); in revenue share conta solo la quota del gestore, quindi le app devono incassare ancora di più. In revenue share l'esborso è fino a 10 k€ per accordo, quindi fino a ~40-60 k€ in tutto; comprandole, ~100-200 k€. I rilanci di successo citati sono aneddotici: da qui la fascia bassa. A differenza delle app nuove (strada confutata in [[H08 App mobile B2C in abbonamento]]) le utenze sono già installate, ma il ricavo tipico di un'app resta basso. **C:** gli accordi in revenue share non si vendono; le app comprate si rivendono a multipli simili a quelli d'acquisto |
| [[I-H11-1 Quiz locali automatici per testate]] | bassa | ≤ 7% | bassa | Lettura del contratto e regole di separazione | **A:** ricavi 60-116 k€/anno = **~63-122 testate a 79 €/mese**, su 43 quotidiani locali e 150-300 testate online. Riferimento: il Bucatore di [[H11 Giochi quotidiani basati su dati]] stima ~32 k€/anno in uno scenario ottimistico (30% dei 59 quotidiani, ~18 testate, a 150 €/mese); a 79 €/mese sarebbero ~17 k€. **B:** con 120-160 k€ servirebbero ~127-169 testate (la nota indica 60-80 testate a 99 €/mese, con ipotesi di costo più basse) |
| [[I-H15-1 Contestazione maxi-bollette a successo]] | bassa | ≤ 10% | bassa | Parere legale sulla riserva forense; lettura del contratto e regole di separazione | Commissione stimata 200-250 € per pratica vinta (la nota usa questa fascia per prudenza), meno il costo di acquisizione (fino a 80 € per mandato, con il 65% di esiti positivi): ~77-127 € a pratica. Qui i collaboratori sono due ruoli (back office e avvocato convenzionato, previsti dalla nota senza un costo: ~30-50 k€/anno è una stima di Claude, invece di 30-38): totale da coprire 60-128 k€, cioè **~39-139 pratiche vinte al mese** |
| [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]] | media | 4% (giudice) | media | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | **A:** con un margine di contribuzione del 63-80% (secondo giro) ogni cliente a 650-900 €/mese porta ~4,9-8,6 k€/anno: per coprire 60-116 k€ servono **~7-24 clienti**. **C:** software B2B a canone, vendibile se i clienti restano |
| [[I-H09-1 Sync fornitori senza feed]] | media (al limite basso) | 5% (giudice) | bassa | Vedi la sezione Gate sopra | **A:** con un ricavo medio di ~50-100 €/mese per negozio (ricavato dai 130-250 paganti che il giudice ritiene necessari per l'obiettivo B) servono **~50-195 negozi paganti** per coprire 60-116 k€, solo con grossisti che autorizzano l'accesso e con un abbandono stimato dell'8-12% al mese. Investimento 55-75 k€ secondo il secondo giro. La fascia per A non può stare sotto il 5% stimato dal giudice per B, che è più esigente: è al limite basso della fascia media. **C:** con quell'abbandono l'asset vale poco |
| [[I-H07-1 Intelligence OTA per operatori di tour]] | media | ≤ 8% | media | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Software B2B a canone (almeno 100 €/mese), vendibile se ha clienti ricorrenti; vendita lenta (in Italia l'email commerciale a freddo richiede il consenso) |
| [[I-H07-2 Rate shopper per autonoleggi]] | media | ≤ 8% | media | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Come sopra |
| [[I-H03-2 Monitoraggio rivenditori e prezzi minimi per brand italiani]] | media | ≤ 8% | bassa | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Come I-H03-1, mercato più piccolo e concorrenti trovati nel secondo giro di I-H03-1 |
| [[I-H09-2 Schede prodotto da EAN]] | bassa | ≤ 10% | bassa | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | App da store: le app giovani incassano in mediana ~190 $/mese |
| [[I-H01-1 Portafoglio di actor su target difficili non personali]] | bassa | ≤ 10% | bassa | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Lo sviluppatore tipico su Apify incassa ~30 $/mese; solo poche decine di sviluppatori superano ~4,8 k$/mese |
| [[I-H01-2 API dati di visibilità nelle risposte AI multilingua]] | bassa | ≤ 10% | media | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Mercato GEO finanziato (Peec 4 M$ di ricavi ricorrenti, Profound 180 M$ raccolti): asset potenzialmente vendibile a uno strumento GEO; dipende dai termini d'uso dei fornitori AI |
| [[I-H06-1 Disdetta digitale per l'Italia]] | bassa | 3% (giudice) | bassa | Parere legale (delega, documenti d'identità); lettura del contratto e regole di separazione | Concorrente diventato gratuito; con la raccomandata il margine è nullo, resta solo la PEC |
| [[I-H02-1 Feed Italia in tempo reale per assistenti di viaggio]] | bassa | ≤ 5% | bassa | **Autorizzazione scritta del datore, con parere di un avvocato del lavoro** | Nessun compratore trovato |

## Cosa ne esce
1. **Obiettivo A, con capitale (~100-290 k€):** la strada più solida è comprare un piccolo software già redditizio ([[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]]), probabilità media. Non serve l'autorizzazione del datore.
2. **Obiettivo A, con poco capitale:** non c'è una strada solida. Senza autorizzazione del datore restano due opzioni deboli: prendere app in gestione in revenue share ([[I-H05-2 App utility trovate via scraping degli store]], fino a ~40-60 k€ per 4-6 accordi; ogni app deve lasciare ~0,8-2 k€/mese al gestore) e costruire i quiz per testate locali ([[I-H11-1 Quiz locali automatici per testate]], servono ~63-122 testate). Entrambe hanno probabilità bassa. Con l'autorizzazione del datore (o, per [[I-H09-1 Sync fornitori senza feed]], un parere favorevole più gli altri passi del suo gate, e 55-75 k€ di investimento) si aprono le idee B2B da costruire con probabilità media.
3. **Obiettivo C:** nessuna strada senza autorizzazione del datore. Comprare e rivendere entro 12-18 mesi non regge ai multipli realizzati. Con l'autorizzazione, la scelta migliore sono i software B2B a canone da costruire ([[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]], [[I-H07-1 Intelligence OTA per operatori di tour]], [[I-H07-2 Rate shopper per autonoleggi]]) e, con più rischio perché dipende dai termini d'uso dei fornitori AI, [[I-H01-2 API dati di visibilità nelle risposte AI multilingua]].
4. **Filone famiglia:** sette idee piccole sono vive. Con il modello leggero i volumi richiesti scendono a centinaia di clienti; le più interessanti per A sono [[I-H22b-1 Nidi e agevolazioni per comune pagato dai nidi privati]] e [[I-H20b-1 Libro del primo anno via WhatsApp]]. Tabella completa, con utilità e volumi, in [[Filone famiglia]].
5. **Obiettivo B:** nessuna idea è promettente. Le stime dei giudici per le idee approfondite vanno dal 3% al 7%, per quelle del filone famiglia dal 2% al 3%; per le altre il limite indicativo è al massimo 12%. Differenze di pochi punti percentuali non sono significative.
