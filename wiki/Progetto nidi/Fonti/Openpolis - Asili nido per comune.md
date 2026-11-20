---
tipo: fonte
ente: "Openpolis e Con i Bambini (Osservatorio povertà educativa)"
livello: nazionale
territorio: "Italia (7.901 comuni)"
tipologie: [servizi 0-3 in totale]
gestione: [pubblico e privato non distinti]
campi: [comune, provincia, regione, macroarea, servizi attivi, posti autorizzati, posti per 100 bambini 0-2, classificazione aree interne]
formato: "XLS su S3 linkati dagli articoli; nessuna API"
aggiornamento: "dati ISTAT con ultimo aggiornamento al 3/2/2026 (a.e. 2023/24); articolo del 5/5/2026"
licenza: "CC BY-NC 4.0 (uso commerciale non consentito senza permesso)"
dati_personali: "no"
url: "https://www.openpolis.it/asili-nido-obiettivo-33-piu-vicino-ma-restano-i-divari/"
verificato_il: 2026-11-20
affidabilita: "alta come rielaborazione ISTAT; derivata e meno aggiornata della fonte"
tags: [fonte, nazionale, openpolis, nido]
---
# Openpolis - Asili nido per comune

> Rielaborazione dei dati ISTAT per comune, con articoli e mappe. È utile per la comunicazione, ma la licenza **non commerciale** e il fatto di essere una fonte derivata consigliano di usare direttamente [[ISTAT - Nidi e servizi integrativi per la prima infanzia]] (CC BY).

## Cosa contiene (verificato dal subagente)
- L'articolo del 5/5/2026 cita come fonte "elaborazione Openpolis – Con i bambini su dati Istat (ultimo aggiornamento 3/2/2026)" e linka file XLS per regione [fatto].
- Il file `…/2023_asili_nido/umbria.xls` contiene in realtà **tutti i 7.901 comuni**. Colonne: Comune, Provincia, Regione, Macroarea, Servizi attivi, Posti autorizzati, Posti per 100 bambini 0-2, Classificazione aree interne. Manca il codice ISTAT del comune [fatto].
- Esempio: `Milano, Milano, Lombardia, Nord-ovest, 454, 14238, 48.7, A - Polo` [fatto].
- Non c'è distinzione pubblico/privato né per tipologia. Nessuna scuola dell'infanzia.
- Nessun repository GitHub di Openpolis con dati sui nidi (42 repository, tutti di software) [fatto].
- `conibambini.openpolis.it` reindirizza a `openpolis.it/poverta-educativa/` [fatto].

## Licenza
Il footer del sito dichiara `rel="license"` → `http://creativecommons.org/licenses/by-nc/4.0/` [fatto, verificato dal coordinatore].

## Valore come base per l'elenco completo
**Basso.** Nessun nome; dati derivati e meno recenti di IstatData, che ha già il 2024; licenza NC. Resta utile la **classificazione delle aree interne** e come riferimento giornalistico.

## Fonti (accesso 2026-11-20)
- https://www.openpolis.it/asili-nido-obiettivo-33-piu-vicino-ma-restano-i-divari/
- https://s3.eu-central-1.amazonaws.com/minidossier.openpolis.it/comuni/Canale+pov+edu/2023_asili_nido/umbria.xls
- https://www.openpolis.it/ (licenza nel footer)
- Dettaglio: [[Fonti ISTAT INPS Openpolis famiglia - subagente]] (E18-E21)
