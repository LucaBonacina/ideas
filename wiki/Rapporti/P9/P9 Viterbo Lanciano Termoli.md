---
tipo: rapporto
sessione: P9
comuni: [Viterbo, Lanciano, Termoli]
data: 2026-11-20
tags: [rapporto, nidi, test-completezza]
---
# P9: test di completezza su Viterbo, Lanciano e Termoli

## Cosa ho fatto
- Ho letto il brief, il Metodo, le istruzioni di sessione, la sezione "Test di completezza" delle istruzioni del blocco 2, le note [[Lazio]], [[Abruzzo]], [[Molise]], [[USR - Elenchi regionali scuole non paritarie]], [[Regione Lazio - Buoni servizio asili nido FSE plus]], [[Regione Abruzzo - Contributi rette nidi FSE plus tramite ambiti e comuni]], [[Regione Molise - Finanziamento micronidi e sezioni primavera]] e, come modello, [[Fano]].
- Ho usato i pacchetti del coordinatore (ISTAT, MIM, righe SIRSE di Viterbo) senza riscaricarli.
- **Viterbo:** sito del Comune irraggiungibile (tre tentativi, curl e WebFetch). Ho letto gli elenchi USR Lazio delle non paritarie 2026/27 e delle sezioni primavera (2023/24-2026/27, trovati con l'API WordPress del sito USR), i metadati del bando TED dei nidi comunali e i siti dei gestori.
- **Lanciano:** ho letto il sito comunale tramite l'API OpenCity (iscrizioni, tariffario, rimborso rette ECAD, piano distrettuale, trasporto scolastico) e ho trovato un **file Excel 2020 dei beneficiari del Fondo 0-6** con tutti i servizi 0-3 privati dell'ambito. Ho letto l'avviso ECAD 11, il sito dell'IC Don Milani, il sito del Girotondo e le DGR abruzzesi sul Fondo 0-6.
- **Termoli:** ho letto il sito comunale (WordPress, tramite mappa del sito): avviso e graduatorie nidi 2026/27, avviso sezioni primavera 2026-2028 con D.D. 1755/2026, infanzia comunale. Ho letto i siti delle paritarie (L'Arca di Noè con carta dei servizi, Bim Bum Bam, Campolieti).
- Ho scritto 3 note in `wiki/Progetto nidi/Test di completezza/`: [[Viterbo]], [[Lanciano]], [[Termoli]].

## Evidenze decisive
| Affermazione | Tipo | URL | Data | Letta direttamente |
|---|---|---|---|---|
| Viterbo: nessuna scuola nell'elenco USR Lazio delle non paritarie 2026/27 (30 voci) | [fatto] | https://www.ufficioscolasticoregionalelazio.it/wp-content/uploads/2026/07/RETTIFICA-ELENCO-2026-2027-signed.pdf | 2026-11-20 | sì |
| Viterbo: sezione primavera statale IC Pio Fedi nel riparto 2025/26 (17 bambini), assente dalle prosecuzioni 2026/27 | [fatto] | https://www.ufficioscolasticoregionalelazio.it/wp-content/uploads/2026/02/riparto-sez.Primavera-anno-25-26-9_signed.pdf ; https://www.ufficioscolasticoregionalelazio.it/wp-content/uploads/2026/09/Allegato-A-Elenco-Definitivo-SEZIONI-PRIMAVERA-2026-2027.pdf | 2026-11-20 | sì |
| Viterbo: gara del Comune per la gestione integrata dei nidi comunali 2026-2028, valore stimato 1.332.600 euro | [fatto] per i metadati | https://api.ted.europa.eu/v3/notices/search (avviso 319348-2026) | 2026-11-20 | solo metadati; PDF non scaricabile |
| Viterbo: Naturilandia bio nido accoglie 3-36 mesi, orario 7:30-17:30; infanzia bilingue | [fatto] | https://www.naturilandia.it/bio-nido3/content-component/orarinido | 2026-11-20 | sì |
| Sito del Comune di Viterbo irraggiungibile | [fatto] | https://www.comune.viterbo.it/ | 2026-11-20 | tentativo diretto, fallito |
| Lanciano: il Comune pubblica l'elenco 2020 dei beneficiari del Fondo 0-6: 3 servizi pubblici, 6 nidi privati e 1 sezione primavera privata a Lanciano | [fatto] | https://www.comune.lanciano.ch.it/content/download/4474/107706/3/Ripartizione+fondi+anno++2020+Decreto+Miur+n.68+del+2018.xlsx | 2026-11-20 | sì (foglio "STRUTTURE 0/3") |
| Lanciano: nidi comunali Arcobaleno (40 posti, 3-36 mesi) e Il Sorriso (20 posti, 12-36 mesi), iscrizioni 2026/27 entro il 31/07/2026 | [fatto] | https://www.comune.lanciano.ch.it/api/opendata/v2/content/read/5908 | 2026-11-20 | sì |
| Lanciano: tariffario nidi comunali, 8 fasce ISEE da 61,97 a 361,52 euro + 1,81 euro al giorno; -50% per disabilità | [fatto] | https://www.comune.lanciano.ch.it/content/download/3290/74330/3/Tariffario+servizio+Nidi+d%27infanzia.pdf | 2026-11-20 | sì |
| Lanciano: il rimborso rette ECAD 11 (FSE+) copre solo nidi comunali e sezioni primavera pubbliche | [fatto] | https://san-vito-chietino-api.municipiumapp.it/s3/6438/allegati/beni-comuni/avviso.pdf | 2026-11-20 | sì |
| Lanciano: Il Girotondo è un polo 0-6 con nido 3-24 mesi e sezione primavera, aperto 7:30-18:30 | [fatto] | https://www.ilgirotondo.eu/servizi/ | 2026-11-20 | sì |
| Termoli: il Comune affida in concessione fino a 4 sezioni primavera 2026-2028 con contributo regionale di 25.000 euro ciascuna; i gestori non sono nominati | [fatto] | https://www.comune.termoli.cb.it/wp-content/uploads/2026/07/D.D.-N.1755-DEL-17-07-2026-APPROVAZIONE-AVVISO-E-ALLEGATI.pdf | 2026-11-20 | sì |
| Termoli: 3 nidi comunali (Difesa Grande, Montecarlo, Volturno), graduatorie 2026/27 | [fatto] | https://www.comune.termoli.cb.it/novita/graduatoria-asili-nido-comunali-a-s-2026-2027/ | 2026-11-20 | sì (pagina; allegati non aperti) |
| Termoli: infanzia comunale "Madonna delle Grazie", iscrizioni 2026/27 entro il 14/03/2026; non nel MIM | [fatto] | https://www.comune.termoli.cb.it/wp-content/uploads/2026/02/modulo-iscrizione-infanzia-a.s.-26-27.pdf | 2026-11-20 | sì |
| Termoli: Campolieti ha una sezione nido 12-24 mesi dal 2023 e una sezione primavera 24-36 mesi (circa 15 bambini) | [fatto] | https://www.infanziacampolieti.it/l-offerta-1.html | 2026-11-20 | sì |
| Termoli: L'Arca di Noè ha nido e sezione primavera, orario 8:00-16:30 con anticipo e posticipo | [fatto] | https://www.arcadinoe-educationschool.it/wp-content/uploads/2021/01/carta-dei-servizi-education-school-2021.pdf | 2026-11-20 | sì |

## Risultati in sintesi
| Comune | ISTAT 0-3 2024 | Elenco vero 0-3 | Migliore fonte 0-3 | Solo web 0-3 | Non trovate vs ISTAT | Elenco vero 3-6 (MIM) |
|---|---|---|---|---|---|---|
| Viterbo | 14 | 17 | R SIRSE 17/17 | 0 | 0 (elenco vero +3; il domiciliare ISTAT non trovato come tale) | 21 (21/21) |
| Lanciano | 11 | 10 (5 privati solo da un elenco 2020) | C 10/10 con il file 2020; 3/10 senza | 0 | 1 nido privato | 14 (14/14) |
| Termoli | 11 | 9 | W 6/9 | 6 | 1 nido privato + 1 sezione primavera privata | 13 (12/13) |

## Cosa non ho trovato
- Viterbo: elenco comunale dei privati solo autorizzati (sito giù); il servizio domiciliare ISTAT; sezioni primavera private (ISTAT 2023: 3).
- Lanciano: elenco aggiornato dei privati; elenco USR Abruzzo delle non paritarie; decreto USR Abruzzo sezioni primavera; stato attuale di La Chioccia Baby Love, Michey School, Paolucci, La Casetta (nido).
- Termoli: atti regionali di ammissione dei progetti micronidi e sezioni primavera (sito regionale in errore 500); esito dell'avviso comunale 2026-2028; sito della paritaria Fabilandia; elenco USR Molise delle non paritarie e delle sezioni primavera.

## Strumenti bloccati o falliti
- **WebFetch su web.archive.org** (copia del sito del Comune di Viterbo): "Claude Code is unable to fetch from web.archive.org". Non aggirato.
- **curl con intestazioni da browser sulla pagina TED 319348-2026**: negato dal classificatore dei permessi. Non aggirato; usati solo i metadati dell'API di ricerca TED.
- Sito del Comune di Viterbo e sito PR FESR-FSE+ Molise: irraggiungibili (problema del sito, non dei permessi).

## Conteggi
- **WebSearch: 17** (Viterbo 6, compresa 1 sugli elenchi USR Lazio; Lanciano 6, comprese 2 sugli USR/atti abruzzesi; Termoli 5, comprese 2 su atti regionali e USR Molise).
- **WebFetch: 3** (Viterbo 503, TED vuoto, web.archive.org bloccato).
- **Letture dirette con curl: circa 75** (API OpenCity Lanciano, WordPress e sitemap Termoli, API WordPress USR Lazio, PDF, siti dei gestori).

## Dati personali
Non salvati. Omessi: nomi di persone nel nome di un micronido di Viterbo e nell'URL di una scheda del registro imprese; il file Excel di Lanciano contiene in un altro foglio iniziali di beneficiari di buoni spesa, non riportate. Le graduatorie dei nidi di Termoli non sono state aperte.
