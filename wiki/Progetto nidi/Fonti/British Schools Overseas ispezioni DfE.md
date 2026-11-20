---
tipo: fonte
ente: "Department for Education (UK), gov.uk"
livello: "nazionale (estero)"
territorio: "mondo; Italia 2 scuole"
tipologie: [scuola internazionale britannica]
gestione: [privato]
campi: [paese, denominazione, link al rapporto di ispezione PDF, data ultima ispezione]
formato: "pagina web HTML su gov.uk (anche via Content API JSON), rapporti in PDF"
aggiornamento: "aggiornato il 2026-10-05 (public_updated_at)"
licenza: "Open Government Licence v3.0 (licenza standard dei contenuti gov.uk)"
dati_personali: "no nella tabella; i rapporti possono citare dirigenti"
url: "https://www.gov.uk/government/publications/british-schools-overseas-inspection-reports/british-schools-overseas-accredited-schools-inspection-reports"
verificato_il: "2026-11-20"
affidabilita: "alta: fonte governativa con data, ma copre solo le scuole che scelgono l'ispezione volontaria"
tags: [fonte, bilingue, internazionale, britannica]
---
# British Schools Overseas (BSO): rapporti di ispezione del DfE

## Cosa copre
- [fatto] Elenco per paese delle scuole britanniche all'estero che rispettano gli standard BSO nello schema volontario di ispezione, con rapporto e data dell'ultima ispezione. L'accreditamento dura 3 anni. Le scuole accreditate compaiono anche in GIAS (Get information about schools).
- [fatto] Conteggio fatto da me sulla tabella: 303 righe in tutto (~302 scuole). **Italia: 2 scuole**, The British School of Milan (ispezione 20/03/2025) e St George's British International School di Roma (06/11/2024).

## Cosa non copre
Tutte le altre scuole che si dicono "britanniche". Non indica età, nursery, rette o posti.

## Come si accede
`https://www.gov.uk/api/content/government/publications/british-schools-overseas-inspection-reports/british-schools-overseas-accredited-schools-inspection-reports`: JSON con il corpo HTML della tabella.

## Esempio di record
`Italy | The British School of Milan (PDF) | 20/03/2025`

## Problemi noti
Copertura minima (2 scuole in Italia). Utile solo come "bollino" di verifica.

## Fonti
- https://www.gov.uk/government/publications/british-schools-overseas-inspection-reports (2026-11-20)
