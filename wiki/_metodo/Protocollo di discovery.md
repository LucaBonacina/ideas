---
tipo: metodo
tags: [metodo]
---
# Protocollo di discovery

Domanda guida: **come fare soldi creando qualcosa che sfrutti queste competenze, compatibile con un lavoro a tempo pieno e con la gestione affidata a terzi?** Vedi [[Profilo e vincoli]].

## Approccio: ipotesi → verifica o confutazione
1. Le ipotesi e i loro **criteri di confutazione** sono scritti **prima** della ricerca: [[Registro delle ipotesi]]. Non si modificano dopo.
2. Ogni ipotesi è esaminata da tre ruoli:
   - **Entusiasta:** costruisce il caso più forte possibile **con evidenze** (casi di successo con numeri, l'angolo migliore per questo profilo).
   - **Bucatore di palloncini:** cerca di confutarla **con evidenze** (tassi di fallimento, bias del sopravvissuto, concorrenti morti, economia unitaria, rischi legali, saturazione).
   - I due lavorano **in parallelo e senza vedere il lavoro dell'altro**.
   - **Giudice:** legge entrambi, ri-verifica di persona le 3 affermazioni più decisive su cui i due divergono, applica i criteri di confutazione, dà il verdetto e una probabilità di successo, ed estrae le idee concrete che sopravvivono.
3. Le idee concrete vengono valutate con la **scala unica v2** (sotto), così sono confrontabili tra ipotesi diverse, giochi compresi.

## Regole di rigore
- **Nessun fatto senza fonte** (URL + data di accesso). Se manca: "non trovato".
- **[fatto]** vs **[stima]**: le stime dichiarano il ragionamento.
- Preferire la lettura diretta delle pagine agli estratti dei motori di ricerca.
- Diffidare dei numeri dichiarati dalle aziende stesse e dei "case study" di chi vende corsi: segnalarli come tali.
- Cercare sempre la **distribuzione dei risultati** (mediana, tasso di fallimento), non solo i casi migliori.
- Nessun criterio senza evidenza riceve più di 2.

## Scala unica v2 (pesi fissati il 2026-11-20, prima dello scoring)
| # | Criterio | Peso | 5 = | 1 = |
|---|---|---|---|---|
| C1 | Bisogno/dolore | 10 | Forte, ricorrente, documentato | Assente |
| C2 | Domanda | 10 | Volumi o mercato misurati, alti | Nicchia minuscola |
| C3 | Monetizzazione | 15 | Pagatori evidenti, prezzi alti e provati | Solo pubblicità a basso valore |
| C4 | Vantaggio delle competenze (scraping, dati, sviluppo) | 15 | Le competenze sono un vantaggio difficile da copiare | Irrilevanti |
| C5 | Distribuzione senza pubblico | 15 | Canale integrato (store, marketplace, SEO long-tail, outbound elencabile) | Serve brand o pubblicità costosa |
| C6 | Resistenza all'AI generalista | 5 | Dati freschi, workflow, transazioni | Un chatbot lo sostituisce |
| C7 | Difendibilità | 5 | Si accumula (dati, rete, costi di uscita) | Copiabile in una settimana |
| C8 | Debolezza degli incumbent | 5 | Incumbent lenti o assenti | Forti e moderni |
| C9 | Tempo al primo euro | 5 | < 1 mese | > 12 mesi |
| C10 | Delegabilità | 10 | Gestibile da terzi; founder ≤ 5 ore/settimana | Richiede il founder a tempo pieno |
| C11 | Tetto di ricavo a 24 mesi | 5 | > 500 k€/anno plausibili | < 10 k€/anno |

Punteggio = Σ(punteggio × peso) / 5, scala 0-100. Penalità fino a −10 per rischi legali residui, dipendenza da una piattaforma, conflitto con il lavoro attuale.

## Formato delle note (Obsidian)
- Ipotesi: `wiki/Ipotesi/Hxx Titolo.md`, template [[Template ipotesi]].
- Idee: `wiki/Idee/I-Hxx-n Titolo.md`, template [[Template idea]].
- Collegamenti tra note con `[[...]]`. Frontmatter YAML obbligatorio.

## Decisioni registrate dopo la discovery
- 2026-11-20: l'utente chiarisce che **non ha una soglia di successo**: vanno bene reddito extra (1-2 k€/mese netti), business da almeno 50 k€/anno entro 24 mesi e "costruisci e vendi" (costruire o comprare e migliorare un asset e venderlo entro 12-18 mesi). La soglia del registro (50 k€/anno entro 24 mesi) era stata fissata da Claude. Le idee sono rivalutate sui tre obiettivi in [[Classifica per obiettivo]], con le stesse evidenze; il registro delle ipotesi non viene modificato.
- 2026-11-20: nella [[Classifica]] la penalità di conflitto con il lavoro è applicata con una regola unica (−8 / −2 / −1 / 0), e il tetto di −10 si intende per ciascuna categoria di penalità (legale, piattaforma, conflitto). Il testo originale ("penalità fino a −10") non lo specificava.
- 2026-11-20: l'utente ribadisce che **non ha vincoli sul ricavo**: vanno bene anche 1.000-2.000 €/mese, e gli interessa **fare cose utili e rilevanti**. Conseguenze, decise prima della nuova ricerca:
  - nelle sintesi l'obiettivo A viene **prima** di B; B non si usa più per scartare un'idea;
  - si aggiunge un **modello leggero** per l'obiettivo A: prodotto costruito con l'AI e molto automatizzato, gestito dal founder con poche ore e al più collaborazioni occasionali; costi = infrastruttura, società e piccoli servizi. Va confrontato con il modello con collaboratori part-time già in [[Classifica per obiettivo]], dichiarando quale si usa;
  - si aggiunge una lente di **utilità** (quante famiglie aiuta, quanto tempo o denaro fa risparmiare), riportata accanto al punteggio senza cambiare i pesi della scala.
