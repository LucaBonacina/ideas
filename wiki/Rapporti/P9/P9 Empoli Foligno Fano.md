---
tipo: rapporto
sessione: P9
tags: [rapporto, test-completezza, nidi]
verificato_il: 2026-11-20
---
# P9: Empoli, Foligno, Fano (rapporto di lavoro)

## Cosa ho fatto
- Ho letto il brief, il Metodo, le istruzioni del blocco 2, le note regione [[Toscana]], [[Umbria]] e [[Marche]], le note fonte collegate e due note campione (Imola, Legnano).
- Ho usato i pacchetti del coordinatore per ISTAT, MIM e Nidi gratis 2026/27, senza riscaricarli.
- **Siti comunali**, letti tramite le API invece delle pagine HTML:
  - Empoli e Fano usano OpenCity: ho usato `/api/opendata/v2/content/search` e `/content/read`.
  - Foligno usa WordPress: ho usato `/wp-json/wp/v2/search`.
  - Ho estratto i PDF con `pdftotext` in `scratchpad/sub/efofa/`.
- Ho scritto le note `wiki/Progetto nidi/Test di completezza/Empoli.md`, `Foligno.md` e `Fano.md`.
- Nessun commit. Nessuno strumento bloccato dai permessi.

## Risultati in sintesi
| Comune | ISTAT 0-3 2024 | Elenco vero 0-3 | Migliore fonte 0-3 | Solo web | MIM 3-6 | Elenco vero 3-6 | Non trovate vs ISTAT |
|---|---|---|---|---|---|---|---|
| Empoli | 10 | 10 | Comune 10/10 (Nidi gratis 8/10) | 0 | 15 | 15 | 0 |
| Foligno | 19 | 15 | Comune 15/15 | 0 | 23 | 23 | 4 (1 sezione primavera, 2 spazi gioco, circa 1 nido) |
| Fano | 22 | 19 | Comune 19/19 | 0 | 20 | 20 | 3 (1 domiciliare, 1 spazio gioco, 1 sezione primavera o riclassificazione) |

## Evidenze decisive
| Affermazione | Tipo | URL | Data | Letta direttamente |
|---|---|---|---|---|
| Empoli: i 2 nidi privati assenti da Nidi gratis sono "Onte Bollonte" (via Dogali 25, 31 posti) e il nido aziendale "SeSa Baby" (via Piovola 138, 50 posti), entrambi "privato autorizzato e accreditato" | [fatto] | https://www.comune.empoli.fi.it/content/download/17264/356905/2/Nido_d%27_infanzia_Onte_Bollonte.pdf ; https://www.comune.empoli.fi.it/content/download/17266/356989/2/Nido_d%27infanzia_SeSa_Baby.pdf | 2026-11-20 | sì (API `content/read/17264`, `17266`) |
| Empoli: 285 posti nei 6 nidi comunali nel 2026/27 | [fatto] | https://www.comune.empoli.fi.it/content/download/28241/585066/1/AllgatoA_Posti.pdf | 2026-11-20 | sì |
| Foligno: il Comune elenca 9 nidi privati (pagina aggiornata il 29/10/2026) | [fatto] | https://comune.foligno.pg.it/nidi-dinfanzia-privati/ | 2026-11-20 | sì |
| Foligno: 6 nidi comunali, di cui il Raffaello Sanzio "temporaneamente chiuso per ristrutturazione" | [fatto] | https://comune.foligno.pg.it/nidi-comunali-a-gestione-diretta/ | 2026-11-20 | sì |
| Foligno: centro per l'infanzia comunale "F. Innamorati" (via Borroni 26) in concessione | [fatto] | https://comune.foligno.pg.it/documento_pubblico/regolamento-nidi-di-infanzia-in-concessione/ | 2026-11-20 | sì |
| Fano: elenco comunale dei privati autorizzati 2025/26: 10 servizi con tipologia e posti | [fatto] | https://www.comune.fano.pu.it/content/download/6809/176282/1/privati+AUTORIZZATI+2025-26+%281%29.pdf | 2026-11-20 | sì |
| Fano: servizi comunali 0-3: 5 nidi, 3 sezioni ponte, 1 sezione primavera | [fatto] | https://www.comune.fano.pu.it/api/opendata/v2/content/read/4217 ; .../4259 | 2026-11-20 | sì |
| Fano: il decreto USR Marche 2440/2026 sulle sezioni primavera contiene solo "L'Isola che non c'è" (comunale) | [fatto] | https://www.mim.gov.it/documents/7501645/10323953/m_pi.AOODRMA.REGISTRO+DECRETI%28R%29.0002440.03-11-2026.pdf/d45b8b99-5710-3a9d-64db-6a5be9a66123?version=1.0 | 2026-11-20 | sì (PDF) |
| Fano: la statale "Torrette" elencata dal Comune è attribuita dal MIM a Mondolfo | [fatto] | file MIM SCUANAGRAFESTAT20262720260901 (scratchpad del coordinatore) | 2026-11-20 | sì |
| Foligno: 4 servizi ISTAT non identificati (1 sezione primavera, 2 spazi gioco, circa 1 nido) | [stima] | confronto pacchetto ISTAT ↔ pagine comunali | 2026-11-20 | – |

## Cosa non ho trovato
- **Foligno:**
  - la sezione primavera privata e i 2 spazi gioco;
  - l'elenco delle sezioni primavera dell'USR Umbria (letta l'intesa 2025/26, che non le nomina);
  - l'elenco dei servizi ammessi all'avviso rette FSE+ dell'Umbria.
- **Fano:** lo spazio gioco privato e il terzo servizio domiciliare dell'ISTAT. Il sito dell'ATS 6 non è stato consultato.
- **Empoli:** conferma web dell'attività 2026/27 di Onte Bollonte (nessun risultato). Unione dei Comuni Circondario Empolese Valdelsa non consultata.
- **Tutti e tre i comuni:** gli elenchi USR delle scuole non paritarie non sono stati cercati.

## Conteggio
- **WebSearch: 9 su 25.**
  - Empoli 2: nido privato; "Onte Bollonte".
  - Foligno 5: USR sezioni primavera; sezione primavera / spazio gioco; nido privato; avviso FSE+; paritaria Mariele Ventre.
  - Fano 2: USR Marche sezioni primavera; domiciliare / spazio gioco.
- **Letture dirette:** circa 60 tra curl alle API comunali e PDF. Nessun WebFetch.
