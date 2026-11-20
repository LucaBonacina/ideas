---
tipo: fonte
ente: "MEF / Sogei-SOSE (OpenCivitas, fabbisogni standard)"
livello: nazionale
territorio: "Comuni delle Regioni a statuto ordinario (6.587 enti)"
tipologie: [nido (servizio comunale)]
gestione: [pubblico, gestione esterna, voucher]
campi: [utenti per tipologia (lattanti, part-time, refezione, voucher, gestione esterna), copertura nidi su popolazione 0-2, spesa storica e spesa standard dei nidi, altri indicatori sociali]
formato: "CSV lungo (ente; indicatore; valore) e RDF, senza login; anagrafica enti in file separato"
aggiornamento: "annualità 2023 pubblicata il 01/10/2026; storico dal 2017"
licenza: "non esplicita (note legali: contenuti 'di proprietà di Sogei')"
dati_personali: "no"
url: "https://www.opencivitas.it/portale/open-data"
verificato_il: 2026-11-20
affidabilita: "alta per la spesa e gli utenti dichiarati dai Comuni; solo il servizio comunale"
tags: [fonte, nazionale, mef, nido, lep]
---
# OpenCivitas - Asili nido indicatori comunali

> Dati per comune sulla **domanda e la spesa del servizio nido comunale**, usati per i fabbisogni standard e per gli obiettivi di servizio (LEP 33%) finanziati dal Fondo di solidarietà comunale. Non è un elenco di strutture.

## Cosa contiene (verificato dal subagente)
- Dataset "Comuni – Sociale e asili nido – Indicatori e determinanti", annualità 2023, pubblicato il 01/10/2026 [fatto]:
  - CSV lungo da 573.070 righe per **6.587 enti**, i comuni delle Regioni a statuto ordinario; mancano le Regioni a statuto speciale;
  - indicatori come `COPERTURA_NID_NEW`, `SPESA_STORICA_NID`, `UTENTI_*_C`;
  - chiave: codice USERNAME dell'ente, con anagrafica "Metadati_Enti" separata.
- Altri dataset: "Fondo di solidarietà comunale 2026 – componenti" e lo storico SOCNID dal 2017 [fatto].
- Le note legali non indicano una licenza aperta [fatto].
- Gli obiettivi di servizio per i nidi del Fondo di solidarietà comunale sono monitorati anche da IFEL ("Obiettivi in Comune") [stima, solo risultato di ricerca]. L'allegato del Ministero dell'Interno (DAIT) indicato dalla ricerca restituisce 404 [fatto].

## Valore come base per l'elenco completo
- **Basso** come elenco.
- **Medio** per l'arricchimento: quanto spende e quanti utenti serve il comune, se usa voucher o gestione esterna, quanto è lontano dal 33%. Questo indica dove i genitori dipendono dal privato.

## Fonti (accesso 2026-11-20)
- https://www.opencivitas.it/portale/open-data
- https://www.opencivitas.it/portale/note-legali
- https://fondazioneifel.it/images/Obiettivi_In_Comune/FAQ_webinar_25_02_2026_Obiettivodiservizio_Nidi.pdf (non aperto)
- Dettaglio: [[Fonti ISTAT INPS Openpolis famiglia - subagente]] (E25, E26, E29)
