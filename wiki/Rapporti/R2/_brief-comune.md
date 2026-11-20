---
tipo: metodo
tags: [rapporto, R2]
---
# Brief comune per i subagenti del secondo giro (R2)

Il secondo giro approfondisce idee già sopravvissute al primo giro. Lavori su **una sola idea**, indicata nel tuo incarico, in un ruolo (Entusiasta o Bucatore). L'altro ruolo lavora in parallelo e non vedi il suo lavoro.

## Leggi prima (repo /home/user/ideas)
- `wiki/_metodo/Profilo e vincoli.md` (profilo, ambiti esclusi, vincoli)
- `wiki/_metodo/Protocollo di discovery.md` (regole di rigore e scala v2)
- `wiki/Ipotesi/H16 Founder a tempo parziale.md` e `wiki/Ipotesi/H17 Vantaggio dello scraping.md`: i loro vincoli valgono per tutte le idee (operatore pagato a mercato, 60-75 k€/anno a regime, o schema a quota utili dichiarato; penalità di conflitto con il lavoro; C4 ricalibrato).
- La nota dell'idea indicata nel tuo incarico (`wiki/Idee/...`) e, se utile, i rapporti del primo giro collegati nella nota.

"Successo" = almeno 50 k€/anno di margine entro 24 mesi, con il founder a ≤ 5 ore/settimana dopo l'avvio.

## Focus del secondo giro (obbligatorio, una sezione per punto)
1. **Prove di domanda reale:** clienti che chiedono esattamente questo (forum, community, recensioni di app concorrenti negli store delle piattaforme, richieste di funzionalità). Citazioni testuali brevi con link.
2. **Clienti elencabili:** quanti sono e come si trovano (es. numero di negozi sulla piattaforma nel segmento, liste pubbliche, directory), **senza raccogliere dati personali**.
3. **Prezzi ed economia unitaria:** prezzi dei concorrenti verificati sulle loro pagine, costo di servizio per cliente (infrastruttura, API, persone), margine.
4. **Piano di delega:** ruoli (chi fa cosa), costo annuo del team a prezzi di mercato italiani, ore del founder; coerenza con H16 (serve un operatore pagato a mercato).
5. **Conflitto con il lavoro:** quanto l'idea somiglia all'attività del datore (scraping per istituti finanziari e business information provider); art. 2105 c.c. e Cass. 19096/2013 come letti in H16.
6. **Esperimento di 30 giorni:** affinalo, con soglie di successo numeriche decise prima.

## Regole di rigore
- Nessun fatto senza fonte: URL + data di accesso (oggi è 2026-11-20). Se manca: "non trovato".
- Etichetta ogni affermazione come **[fatto]** (con fonte) o **[stima]** (con il ragionamento).
- Leggi le pagine direttamente (WebFetch / curl) invece di fidarti degli estratti dei motori di ricerca.
- Diffida dei numeri dichiarati dalle aziende stesse e dei "case study" di chi vende corsi: segnalali come tali.
- Cerca la distribuzione dei risultati (mediana, tasso di fallimento), non solo i casi migliori.
- Se una fonte blocca le richieste automatiche (Reddit, Google Trends, ecc.), annotalo e usa alternative; non inventare.
- Nessun dato personale: niente nomi, email o telefoni di persone nei rapporti; nomi di aziende e prodotti sì.
- Non leggere altri file in `wiki/Rapporti/R2/` oltre a questo brief.
- Scrivi in italiano.

## Budget
Massimo **20 WebSearch** in totale. Letture dirette di pagine senza limite stretto ma ragionevoli (≤ 40).

## Consegna
Scrivi il rapporto integrale nel file indicato nel tuo incarico, con questa struttura:
1. Sintesi (5-10 righe) e posizione finale.
2. Le sei sezioni del focus, ciascuna con evidenze etichettate [fatto]/[stima] e fonti.
3. Effetto proposto sul punteggio v2 (criterio per criterio, solo dove le evidenze nuove lo giustificano).
4. Elenco fonti numerate (URL + data di accesso).
5. Riga finale: "Ricerche web usate: N".
Non fare commit. Rispondi al chiamante solo con: percorso del file, posizione finale in 3 righe, numero di ricerche usate.
