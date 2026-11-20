---
tipo: test-completezza
comune: "Rende"
provincia: "CS"
regione: "Calabria"
popolazione: "36.781 residenti al 1/1/2025 (ISTAT, dataflow 22_289, https://esploradati.istat.it/SDMXWS/rest/data/IT1,22_289,1.0/A.065014+076048+078102.JAN.9.TOTAL.99?startPeriod=2025, accesso 2026-11-20, dato fornito dal coordinatore)"
criterio_scelta: "comune tra 15.000 e 100.000 abitanti, non capoluogo di regione; scelto dal coordinatore come campione calabrese (comune universitario dell'area urbana di Cosenza; motivo specifico non comunicato al subagente)"
data: 2026-11-20
sessione: P10
tags: [test-completezza, nidi, calabria]
---
# Test completezza - Rende

Regione: [[Calabria]]. Pagine lette il 2026-11-20 con curl o WebFetch. [fatto] = letto alla fonte; [stima] = deduzione; "estratto" = solo estratto del motore di ricerca.

## In breve
- **Il Comune pubblica solo il suo nido** ("Peter Pan", via Londra, 50 posti): avviso 2026/27 completo di posti per fascia, orari e criteri, più le graduatorie. Nessun elenco dei nidi privati autorizzati. L'albo pretorio risponde **403**.
- **Elenco vero 0-3: 6 unità**, di cui 4 confermate leggendo la pagina e 2 solo da estratti. **Copertura: Comune 1/6 (17%), Regione o ambito 0/6 (0%), MIM 0/6 (0%), web e siti dei gestori 5/6 (83%).** Trovate **solo con il web: 5** (2 da estratti).
- **Rispetto all'ISTAT 2024** (10 nidi, 1 pubblico e 9 privati) mancano **almeno 4-6 nidi privati**. Le fonti pubbliche non permettono di nominarli; la "Rilevazione dei servizi 0-3" regionale non è pubblica ([[Regione Calabria - Sistema informativo e rilevazione servizi 0-3]]) e il sito della Regione risponde 403 alle chiamate automatiche.
- **3-6: elenco vero 19**: 18 MIM (**95%**) più 1 scuola materna non presente nel MIM, trovata solo da estratto. Diversi gestori paritari (La Filastrocca, Il Mondo di Lolli, forse il Polo d'Infanzia) hanno anche servizi 0-3.

## Totale atteso
- **ISTAT 2024** ([[ISTAT - Nidi e servizi integrativi per la prima infanzia]], dataflow 47_850, estratto dal coordinatore): **10 servizi**, tutti nidi o micronidi (1 pubblico, 9 privati), 0 sezioni primavera, 0 servizi integrativi, 269 posti.
- **MIM 2026/27** ([[MIM - Anagrafe scuole statali e paritarie]]): **18 scuole dell'infanzia**, 10 statali (I.C. Rende Quattromiglia, Centro-San Fili e Commenda) e 8 paritarie.

## Elenco vero 0-3
Colonne: Com = sito del Comune; Reg = Regione e Ambito di Rende; MIM; Web = ricerche web e siti dei gestori.

| # | Struttura | Tipologia | Gestione | Indirizzo | Com | Reg | MIM | Web | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Nido comunale "Peter Pan" | nido (50 posti + 10%) | pubblico | Via Londra | ✓ | – | – | – | Avviso 2026/27 e graduatorie provvisorie; un secondo nido comunale è in costruzione (Villaggio Europa, appalto aggiudicato il 03/03/2026) |
| 2 | Polo d'Infanzia dell'Università della Calabria (asilo nido) | nido (sezione "Cuccioli" e altre) | università (ente pubblico); classificazione ISTAT non nota | Via P. Bucci, Arcavacata | – | – | forse come "Polo di Infanzia Passi d'Oro", Piazza Vermicelli [stima] | ✓ PDF del progetto educativo 2024/25 letto | |
| 3 | "La Filastrocca": nido lattanti (4-12 mesi) e nido (12-24 mesi) | nido | privato (associazione) | Piazza della Libertà 35 secondo il sito; Via Brodolini 35 secondo il MIM | – | – | (infanzia paritaria) | ✓ sito del gestore letto | |
| 4 | "La Filastrocca": sezione primavera (24-36 mesi) | sezione primavera | privato | come sopra | – | – | – | ✓ sito del gestore letto | L'ISTAT non conta sezioni primavera a Rende: forse la conta come nido [stima] |
| 5 | "Il Mondo di Lolli" | nido [stima] (codice di attività 88.91 "servizi di asili nido") | privato | Via Londra (registro imprese) / Via Tallinn 3 (MIM) | – | – | (infanzia paritaria, come associazione) | (e) companyreports | Solo estratto |
| 6 | "Bimbi Felici" | elencata tra gli "asili nido" in una directory, ma si chiama "scuola materna" | privato | Viale J. F. Kennedy 4 | – | – | – | (e) impresaitalia | Solo estratto; pagina non raggiungibile (errore 523) |

Non verificati (sito non raggiungibile): "La Tata", paritaria MIM con sito centroinfanzialatata.it (502 con curl, host non risolto con WebFetch). Il nome "centro infanzia" fa pensare a servizi 0-3 [stima].

## Elenco vero 3-6
| Struttura | Gestione | Indirizzo | MIM | Com | Web | Note |
|---|---|---|---|---|---|---|
| 10 plessi statali (Tocci, Centro, Macchia di Bosco, Arcavacata, Roges, Campagnano, Quattromiglia, S. Stefano, Commenda, Surdo/Saporito) | statale | vari (Campagnano: "Non Disponibile" nel MIM) | ✓ | – | – | |
| La Filastrocca | paritaria | Via Brodolini 35 (sito: Piazza della Libertà 35) | ✓ | – | ✓ | Nido e sezione primavera annessi |
| Il Mondo di Lolli | paritaria | Via Tallinn 3 | ✓ | – | (e) | Probabilmente con un nido |
| La Tata | paritaria | Via Botticelli 29/35 | ✓ | – | sito irraggiungibile | |
| The Future of Children | paritaria | Via Firenze 1 | ✓ | – | – | |
| La Nuova Orsa Maggiore | paritaria | Via M. Buonarroti 4 | ✓ | – | – | |
| Luna Park | paritaria | Via Londra 14 | ✓ | – | – | |
| Sacri Cuori | paritaria (istituto religioso) | Via Panagulis 3 | ✓ | – | – | |
| Polo di Infanzia Passi d'Oro | paritaria | Piazza Vermicelli (campus Unical) | ✓ | – | forse = Polo d'Infanzia Unical (scuola dell'infanzia) [stima] | |
| Scuola materna "Bimbi Felici" | non paritaria? | Viale Kennedy 4 | – | – | (e) | Non nel MIM: non paritaria o chiusa (da verificare) |

Elenco vero 3-6: **19** (18 MIM e 1 da estratto). Elenco USR Calabria delle non paritarie: non cercato.

## Copertura per fonte
| Fonte | 0-3 trovate / 6 | % | 3-6 trovate / 19 | % | Note |
|---|---|---|---|---|---|
| Sito del Comune | 1 | 17% | 0 | 0% | Ricerca WordPress (?s=) funzionante; nessun elenco di privati né di scuole |
| Albo pretorio (rende.soluzionipa.it) | non letto | – | – | – | 403 |
| Regione Calabria e Ambito di Rende | 0 | 0% | – | – | Nessun elenco pubblico; www.regione.calabria.it dà 403 alle chiamate automatiche (wp-json) |
| MIM anagrafe | 0 | 0% | 18 | 95% | 3-4 gestori 0-3 compaiono come infanzia paritaria |
| Ricerche web e siti dei gestori | 5 (3 letti, 2 da estratti) | 83% | 3 | 16% | Nessuna directory leggibile (impresaitalia 523) |
| INPS | non consultata | – | – | – | Citata soltanto ([[INPS - Agenda asili nido e mappa Bonus nido]]) |

Rispetto all'atteso ISTAT (10 nidi): identificati con certezza 3 nidi (Peter Pan, Unical, La Filastrocca), cioè **30%**, che sale al **50%** contando i 2 da estratto.

## Trovate solo con ricerche web
- Polo d'Infanzia Unical, nido (PDF Unical letto).
- La Filastrocca, nido e sezione primavera (sito del gestore letto; la scuola è nel MIM, ma solo come infanzia).
- Il Mondo di Lolli, nido [solo estratto].
- Bimbi Felici [solo estratto].

## Attese ma non trovate
- **Almeno 4 nidi privati** fra i 9 dell'ISTAT, 6 se i due estratti non sono nidi autorizzati. Candidati da verificare: La Tata, Luna Park, Sacri Cuori, Nuova Orsa Maggiore e The Future of Children (scuole paritarie che potrebbero avere un nido annesso) [stima].
- Nessun servizio integrativo atteso (ISTAT 0), nessuno trovato. Baby parking e ludoteche: nessuno trovato.

## Campi disponibili
| Struttura | Rette | Orari | Età | Posti | Scadenze | Progetto pedagogico | Lingua | Inclusione |
|---|---|---|---|---|---|---|---|---|
| Nido comunale Peter Pan | quote per fascia ISEE minorenni, rinvio alla "tabella tariffe dei servizi a domanda individuale": importi non nell'avviso | ✓ lun-ven 8-18, sab 8-14; parziale fino alle 14, pieno fino alle 16, prolungato fino alle 18 | ✓ 3-36 mesi, solo residenti | ✓ 50 (12 + 18 + 20) | ✓ entro le 12:00 del 19/06/2026 | non nell'avviso | non trovato | ✓ precedenza ai bambini con disabilità (L. 104/92 art. 3 c. 3); punteggi per genitori con disabilità |
| Polo d'Infanzia Unical | non trovato | non trovato | nido e infanzia | non trovato | non trovato | ✓ sintesi del progetto educativo 2024/25 (PDF) | non trovato | non trovato |
| La Filastrocca | non trovato | ✓ 9:00-17:00, sabato e domenica chiuso (sito) | ✓ 4-12 mesi, 12-24 mesi, 24-36 mesi, 3-6 anni | non trovato | non trovato | descrizioni sintetiche per classe | ✓ corso di lingua inglese con insegnante di lingua straniera | non trovato; "area polisensoriale" |
| Infanzia statale (es. Rende Commenda) | – | non trovato | 3-6 | non trovato | iscrizioni MIM | sito dell'istituto comprensivo (MIM), non letto | – | – |

## Fonti consultate
| URL | Accesso | Letta | Esito |
|---|---|---|---|
| https://www.comune.rende.cs.it/?s=nido (anche infanzia, primavera, ambito, voucher) | 2026-11-20 | sì | 5 notizie sul nido comunale; niente sui privati |
| https://www.comune.rende.cs.it/novita/avviso-pubblico-per-iscrizione-al-nido-comunale-peter-pan-anno-educativo-2026-2027/ e PDF https://www.comune.rende.cs.it/wp-content/uploads/2026/05/Avviso-Asilo-Nido-1.pdf | 2026-11-20 | sì | Posti, orari, criteri, scadenza |
| https://www.comune.rende.cs.it/novita/graduatorie-provvisorie-asilo-nido-comunale-peter-pan-anno-educativo-2026-2027/ | 2026-11-20 | sì (pagina) | PDF delle graduatorie non aperti (dati personali) |
| https://www.comune.rende.cs.it/novita/realizzazione-di-un-asilo-nido-presso-villaggio-europa/ | 2026-11-20 | sì | Nuovo nido in costruzione |
| https://www.comune.rende.cs.it/wp-json/wp/v2/search?search=nido | 2026-11-20 | sì | Indice incompleto (solo 2 risultati) |
| https://rende.soluzionipa.it/openweb/albo/albo_pretorio.php | 2026-11-20 | no | 403 |
| https://www.regione.calabria.it/wp-json/wp/v2/search | 2026-11-20 | no | 403 ("non hai i permessi") |
| https://scuolalafilastrocca.com/ | 2026-11-20 | sì | Nido, sezione primavera, infanzia |
| https://www.centroinfanzialatata.it/ | 2026-11-20 | no | curl: 502; WebFetch: host non risolto (forse fuori dai domini consentiti dalla sessione o inesistente) |
| https://www.unical.it/media/medias/2024/SINTESI_DEL_PROGETTO_DIDATTICO_-EDUCATIVO_24_25.pdf | 2026-11-20 | sì | Polo d'Infanzia Unical |
| https://www.impresaitalia.info/8532/1/asili-nido/rende.aspx | 2026-11-20 | no | 523 o timeout; solo estratto ("Bimbi Felici") |
| https://www.companyreports.it/ (scheda "Il Mondo di Lolli") | – | no (estratto) | Codice di attività 88.91 |
| Overpass API (OpenStreetMap) | 2026-11-20 | no | Bloccata dal proxy (vale per tutti e tre i comuni) |

## Cosa resta aperto
- Nominare i nidi privati autorizzati: chiedere al Comune (SUAP o servizi educativi) o all'Ambito territoriale l'elenco delle autorizzazioni rilasciate col Reg. 7/2024, oppure ottenere l'esito della rilevazione regionale 0-3 (accesso civico).
- Catalogo del "Voucher Infanzia" regionale (DGR 581/2025): quando sarà pubblicato sarà la prima fonte con i privati autorizzati e accreditati.
- Verificare se "Passi d'Oro" coincide con il Polo d'Infanzia Unical e come l'ISTAT lo classifica.
- Tariffe del nido comunale: cercare la delibera sulle tariffe dei servizi a domanda individuale.
