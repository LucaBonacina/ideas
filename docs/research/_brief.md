# Brief per gli agenti di screening (fase 2)

Leggi prima `docs/00-brief.md` e `docs/01-metodo.md` (soprattutto i gate G1-G5 e le regole di rigore).

## Compito
Per ogni candidato assegnato, applica i gate G1-G5 con evidenze reali raccolte sul web, e raccogli già le evidenze che serviranno allo scoring.

## Regole
- **Non inventare nulla.** Ogni affermazione fattuale ha un URL. Se non trovi l'evidenza scrivi "non trovato" e la risposta del gate diventa "incerto".
- Distingui **[fatto]** da **[stima]**; le stime spiegano il ragionamento.
- Data di accesso alle fonti: 2026-11-19.
- Cerca attivamente il **motivo più forte per scartare** ogni candidato, non solo conferme.
- Rischio legale (G5): considera GDPR (dati personali), diritto *sui generis* sulle banche dati UE, termini d'uso, eventuali API ufficiali.
- Indicativamente 6-12 ricerche per candidato; approfondisci di più dove il verdetto è in bilico.
- Scrivi in italiano.

## Formato di output (un file Markdown, una sezione per candidato)

### #N — Nome candidato
**Verdetto:** PASS / FAIL (gate Gx) / INCERTO — una riga di motivazione
| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì/no/incerto | ... | URL |
| G2 Dati raggiungibili | ... | ... | ... |
| G3 Pagatore identificabile | ... | ... | ... |
| G4 Distribuzione senza pubblico | ... | ... | ... |
| G5 Rischio legale gestibile | ... | ... | ... |

**Incumbent:** tabella con nome, URL, modello di prezzo (con cifre se pubbliche), punti deboli osservati.
**Segnali di domanda:** volumi/trend/traffico stimato, con fonti.
**Segnali di dolore:** lamentele concrete (recensioni, Reddit, forum), con link.
**Test chatbot (C6):** il bisogno è già soddisfatto da un chatbot o da una risposta AI di un motore di ricerca? Ragionamento.
**Motivo più forte per scartarlo:** ...
**Note per lo scoring:** spunti utili per C1-C9.

In fondo al file: **"Nuovi candidati emersi"**, fino a 3 candidati nuovi nella stessa area, trovati durante la ricerca, con una riga di motivazione ciascuno.
