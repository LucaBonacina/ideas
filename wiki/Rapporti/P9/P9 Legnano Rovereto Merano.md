---
tipo: rapporto
sessione: P9
comuni: [Legnano, Rovereto, Merano]
data: 2026-11-20
tags: [rapporto, test-completezza, nidi]
---
# P9: Legnano, Rovereto, Merano (rapporto di lavoro)

## Cosa ho fatto
- Ho letto il brief, il Metodo, le istruzioni del blocco 2, la nota di esempio [[Alba]], le note regione [[Lombardia]], [[Provincia autonoma di Trento]], [[Provincia autonoma di Bolzano]] e le note fonte collegate (Nidi Gratis Plus, USR non paritarie, ASSB, Steiner-Waldorf).
- Ho usato i pacchetti del coordinatore (ISTAT, MIM, registro lombardo, elenchi provinciali trentini) senza riscaricarli.
- **Legnano:** ho incrociato il registro regionale con il decreto USR Lombardia 760/2026 sulle sezioni primavera, già citato nella nota USR, e con il sito comunale (pagina servizio e PDF delle tariffe). Ho controllato i siti di 10 gestori.
- **Rovereto:** ho letto la pagina comunale delle iscrizioni, il PDF dei nidi e l'elenco comunale delle scuole dell'infanzia (2024). Ho cercato i privati, le Tagesmutter e l'elenco provinciale delle scuole dell'infanzia (non trovato).
- **Merano:** ho letto il sito del Comune e l'albo pretorio. Ho letto con WebFetch le pagine del portale dell'Agenzia per la famiglia, che curl non legge. Poi i siti dei gestori (Popele, Casa Bimbo, Coopselios).
- Ho scritto 3 note in `wiki/Progetto nidi/Test di completezza/` (Legnano, Rovereto, Merano). Nessun commit.

## Evidenze decisive
| Affermazione | Tipo | URL | Data | Letta direttamente |
|---|---|---|---|---|
| Il decreto USR Lombardia 760/2026 elenca 6 sezioni primavera a Legnano, tutte in paritarie (codici MI1A395003, MI1A55200V, MI1A39700P, MI1A39900A, MI1A402001, MI1A400009) | [fatto] | https://www.regione.lombardia.it/content/dam/rl/canali-tematici-servizi/03-istruzione-formazione-e-lavoro/01-sistema-integrato-0---6-anni/red-sezioni-primavera/avvisi-sezioni-primavera/Decreto%20e%20allegato%20USR%20n.%20760%20del%2021%20maggio%202026%20-%20Sezioni%20Primavera%20ammesse%20al%20finanziamento%20per%20l%27a.s.%202025_2026.pdf | 2026-11-20 | sì (pdftotext) |
| Il Comune di Legnano elenca solo i 3 nidi comunali, con tariffe 2026/27 per ISEE e iscrizioni dal 15/01 al 28/02 | [fatto] | https://comune.legnano.mi.it/servizi/servizio-dettaglio/1848748 | 2026-11-20 | sì |
| Il dominio del nido privato "1,2,3... Stella" ora ospita spam di casinò | [fatto] | https://www.asilonido123stella.it/ | 2026-11-20 | sì |
| Rovereto: "I nidi d'infanzia comunali sono otto... capienza complessiva di 378 posti", come l'ISTAT | [fatto] | https://www.comune.rovereto.tn.it/Servizi/Iscrizione-all-asilo-nido | 2026-11-20 | sì |
| Elenco comunale di 15 scuole dell'infanzia a Rovereto (9 provinciali, 6 equiparate), PDF dell'aprile 2024 | [fatto] | https://www.comune.rovereto.tn.it/Amministrazione/Documenti-e-dati/Documenti-tecnici-di-supporto/Elenco-scuole-dell-infanzia-di-Rovereto | 2026-11-20 | sì |
| Asilo Steiner "Colle Fiorito" a Rovereto, privato, fuori dagli elenchi | [fatto] | https://serviziocivile.provincia.tn.it/content/download/10007/154624/file/SCP03852601P3M292_progetto.pdf ; https://www.educazionewaldorf.it/federazione/?pagina=soci | 2026-11-20 | sì |
| Centro Freeway Rovereto: servizio di conciliazione 0-6, 7:00-19:30 | [fatto] | https://www.famigliamaterna.it/cosa-facciamo/servizi-per-infanzia/centri-freeway | 2026-11-20 | sì |
| Nessun nido privato a Rovereto | [stima] (3 ricerche, nessun risultato; coerente con ISTAT 0) | – | 2026-11-20 | – |
| Elenco provinciale delle microstrutture (10/09/2026): 5 voci con indirizzo a Merano | [fatto] | https://famiglia.provincia.bz.it/it/elenco-microstrutture-prima-infanzia | 2026-11-20 | sì (WebFetch: riassunto di un modello, non testo grezzo) |
| Il nido comunale di Merano si chiama "TicoMaia" (ordinanze dic. 2025) | [fatto] | https://albopretorio.gvcc.net/gem2go/amtstafel/document/21051/20c240e8-9206-404a-b0db-82796529dcf9 | 2026-11-20 | sì |
| Kita Popele (Sinigo): 22 posti, 7:30-17:00, bilingue IT/DE, accreditata (decreto 23175/2025) | [fatto] | https://www.popele.it/en/strutture/kita-popele/ | 2026-11-20 | sì |
| Coopselios gestisce a Merano il centro bambini "Viva!" | [fatto] | https://www.coopselios.com/uploads/2026/03/Nido_Bolzano_brochure_dopoREV_27.02_DEF.pdf | 2026-11-20 | sì |
| Tagesmütter: nessuna fonte per comune; la pagina provinciale dà solo 6 gestori con sede a Bolzano | [fatto] | https://famiglia.provincia.bz.it/it/assistenti-domiciliari-infanzia-tagesmutter | 2026-11-20 | sì (WebFetch) |
| Kindergartensprengel Meran: 31 Landeskindergärten di lingua tedesca | [fatto] | https://www.forum-p.it/smartedit/documents/inhaltelements/_published/ff_19_26_kindergarten.pdf | 2026-11-20 | sì |

## Cosa non ho trovato
- Legnano: adesione a Nidi Gratis Plus e convenzioni con nidi privati; elenco USR Lombardia delle non paritarie.
- Rovereto: elenco provinciale nominativo delle scuole dell'infanzia provinciali ed equiparate (la "Cerca scuola" di vivoscuola è dinamica); nomi e indirizzi dei 4 nidi familiari (giustamente non pubblici).
- Merano: elenco dei Kindergärten e delle scuole dell'infanzia italiane (denominatore 3-6 non determinato); elenco delle Tagesmütter per comune; sedi del nido comunale; natura della voce "Asilo nido Yosyag".
- **Bloccato:** l'API pubblica di contenuti del portale dell'Agenzia per la famiglia (deliver.kontent.ai), negata dal classificatore dei permessi. Non ho cercato di aggirarla. Se il coordinatore la autorizza, potrebbe dare l'elenco strutturato di tutta la provincia (asili nido, microstrutture, forse gestori).

## Conteggi
- **WebSearch:** 19 (Legnano 3, Rovereto 5, Merano 11).
- **WebFetch:** 5 (portale Agenzia per la famiglia).
- **Letture dirette con curl/pdftotext:** circa 45.
