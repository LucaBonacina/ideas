# Brief comune per i subagenti della sessione S2

Leggi prima, nel repo /home/user/ideas:
- `wiki/_metodo/Profilo e vincoli.md` (profilo, ambiti esclusi, vincoli)
- `wiki/_metodo/Protocollo di discovery.md` (regole di rigore e scala v2)
- `wiki/_metodo/Registro delle ipotesi.md` (la tua ipotesi e i suoi criteri di confutazione, sezione S2)
Contesto utile ma da riverificare: `docs/05-screening-b2c.md`, `docs/03-screening.md`.

"Successo" = almeno 50 k€/anno di margine entro 24 mesi, con il founder a ≤ 5 ore/settimana dopo l'avvio.

## Regole di rigore
- Nessun fatto senza fonte: URL + data di accesso (oggi è 2026-11-20). Se manca: "non trovato".
- Etichetta ogni affermazione come **[fatto]** (con fonte) o **[stima]** (con il ragionamento).
- Leggi le pagine direttamente (WebFetch / curl) invece di fidarti degli estratti dei motori di ricerca.
- Diffida dei numeri dichiarati dalle aziende stesse e dei "case study" di chi vende corsi: segnalali come tali.
- Cerca sempre la distribuzione dei risultati (mediana, tasso di fallimento), non solo i casi migliori.
- Privilegia dati 2025-2026.
- Se una fonte blocca le richieste automatiche (Google Trends, Reddit, ecc.), annotalo e usa alternative; non inventare.
- Rispetta gli ambiti esclusi: un'idea che li tocca va scartata.
- Non leggere altri file in `wiki/Rapporti/S2/` oltre a questo brief (lavori senza vedere gli altri ruoli).
- Scrivi in italiano.

## Budget
Massimo **25 WebSearch** in totale. Letture dirette di pagine (WebFetch/curl) senza limite stretto ma ragionevoli (≤ 40).

## Consegna
Scrivi il rapporto integrale nel file indicato nel tuo incarico, con questa struttura:
1. Sintesi (5-10 righe) e posizione finale.
2. Argomenti principali, ciascuno con evidenze etichettate [fatto]/[stima] e fonti.
3. Analisi dei criteri di confutazione pre-registrati, uno per uno (cosa dicono le evidenze).
4. Idee concrete (vedi incarico) con: descrizione, chi paga e quanto, distribuzione, vantaggio delle competenze, rischi.
5. Elenco fonti numerate (URL + data di accesso).
6. Riga finale: "Ricerche web usate: N".
Non fare commit. Rispondi al chiamante solo con: percorso del file, posizione finale in 3 righe, numero di ricerche usate.
