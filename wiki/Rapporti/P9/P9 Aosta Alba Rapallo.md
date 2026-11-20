---
tipo: rapporto
sessione: P9
comuni: [Aosta, Alba, Rapallo]
data: 2026-11-20
tags: [rapporto, nidi, test-completezza]
---
# P9: test di completezza su Aosta, Alba e Rapallo

## Cosa ho fatto
- Ho letto il brief, il Metodo, le istruzioni di sessione, la sezione "Test di completezza" delle istruzioni del blocco 2 e le note [[Valle d Aosta]], [[Piemonte]], [[Liguria]], [[USR - Elenchi regionali scuole non paritarie]] e [[Regione Liguria - Nidi Gratis FILSE]].
- Ho usato i pacchetti del coordinatore (ISTAT, MIM, righe del registro piemontese) senza riscaricarli.
- **Aosta:** ho cercato gli allegati regionali e ho trovato un elenco per struttura (autorizzazione e accreditamento) creato il 03/08/2026, più la guida regionale dei nidi 2024, l'elenco degli spazi gioco 2020 e l'annuario 2025. Ho letto il sito comunale (pagina servizi e sportello telematico, motore interno) e la stampa locale.
- **Alba:** ho letto il sito comunale (Municipium): la pagina "Asilo Nido" con rette 2026/27 e la notizia sul Coordinamento pedagogico territoriale. Ho letto i siti dei gestori delle paritarie e cercato sul web tutti i nomi dei privati del registro.
- **Rapallo:** sito comunale irraggiungibile (reset TLS con curl, 503 con WebFetch, a ogni tentativo). Ho lavorato con stampa locale, siti dei gestori, TED, tuttitalia e regioni-italiane.
- Ho scritto 3 note in `wiki/Progetto nidi/Test di completezza/`: [[Aosta]], [[Alba]], [[Rapallo]].

## Evidenze decisive
| Affermazione | Tipo | URL | Data | Letta direttamente |
|---|---|---|---|---|
| La Regione Valle d'Aosta pubblica un PDF con titolare, tipologia, posti, sede, SCIA/DGR/PD e accreditamento (con scadenza) di nidi e spazi gioco di tutta la regione; per Aosta 7 nidi | [fatto] | https://gestionewww.regione.vda.it/allegato.aspx?pk=115707 | 2026-11-20 | sì (pdftotext; CreationDate 03/08/2026) |
| Il nido di P.zza Battaglione Cervino (Aosta) ha SCIA del 14/02/2025 e accreditamento 19/03/2026-19/03/2027 | [fatto] | stesso PDF | 2026-11-20 | sì |
| "La Farfavola" (Aosta) è accreditata fino al 28/01/2027, nonostante la notizia di chiusura del 2018 | [fatto] per l'elenco; notizia 2018 solo da estratto | stesso PDF; https://www.gazzettamatin.com/2018/06/01/asilo-nido-farfavola-aosta-chiude-31-agosto | 2026-11-20 | elenco sì, articolo no |
| Le tate familiari hanno un "registro regionale aperto" legato alla qualifica, non pubblicato come elenco | [fatto] per l'avviso; [stima] per la non pubblicità | https://gestionewww.regione.vda.it/allegato.aspx?pk=102444 | 2026-11-20 | sì |
| Annuario VdA 2025: Aosta e Cintura 2024 = 397 posti nido, 52 aziendale, 68 tata, 20 spazio gioco | [fatto] | https://www.regione.vda.it/statistica/pubblicazioni/annuari/annuario2025/SITE/4/17.PDF | 2026-11-20 | sì |
| Il sito del Comune di Aosta non ha un elenco dei nidi, solo la procedura di domanda | [fatto] | https://sportellotelematico.comune.aosta.it/procedure%3Ac_a326%3Aammissione.nidi.infanzia | 2026-11-20 | sì |
| Comune di Alba: rette 2026/27 per ISEE e fascia oraria, orario 7:40-17:40, 60 posti, età 3 mesi-3 anni, 4 posti convenzionati al Nido Ferrero, riduzione 20% per disabilità | [fatto] | https://www.comune.alba.cn.it/it/unita_organizzative/asilo-nido | 2026-11-20 | sì |
| Scuola Città di Alba: micronido 15-24 mesi e primavera 24-36 mesi, orari | [fatto] | https://www.scuolacittadialba.it | 2026-11-20 | sì |
| Rapallo: iscrizioni al nido comunale "Per un Mondo Unicef" 2026/27 fino all'11/05/2026, età dal 90° giorno ai 3 anni | [fatto] | https://radioaldebaran.it/asilo-nido-comunale-di-rapallo-per-le-iscrizioni-ce-tempo-fino-a-lunedi-prossimo/326356 | 2026-11-20 | sì |
| Rapallo: micronido privato "I Folletti di Villa Lina", max 15 bambini, dai 3 mesi | [fatto] | https://www.ifollettirapallo.com/ | 2026-11-20 | sì |
| Rapallo: sezione primavera 24-36 mesi all'Istituto Gianelli | [fatto] | https://www.gianellirapallo.it/scuola-dellinfanzia-sez-primavera/ | 2026-11-20 | sì |
| Sito del Comune di Rapallo irraggiungibile da questo ambiente | [fatto] | https://www.comune.rapallo.ge.it/ | 2026-11-20 | tentativo diretto, fallito |

## Risultati in sintesi
| Comune | ISTAT 0-3 2024 | Elenco vero 0-3 | Migliore fonte 0-3 | Solo web 0-3 | Non trovate vs ISTAT | MIM 3-6 |
|---|---|---|---|---|---|---|
| Aosta | 15 | 7 (+9 tate non identificabili) | R regionale 7/7 | 0 | 9 servizi domiciliari | 15/15 |
| Alba | 13 | 14 | R regionale 14/14 | 0 | 1 spazio gioco | 13/13 |
| Rapallo | 6 | 3 | W 3/3 | 2 | 1 nido privato + 2 primavera | 5/5 |

## Correzione per la nota regione
La nota [[Valle d Aosta]] dice "Elenco nominativo pubblico dei servizi: non trovato" e "copertura delle fonti aperte per struttura vicina a 0%". Non è più vero: l'allegato pk=115707 è un elenco nominativo dei nidi e degli spazi gioco autorizzati e accreditati (senza tate familiari). Non ho modificato la nota (regola del brief); la correzione va fatta dal coordinatore.

## Cosa non ho trovato
- Pagina regionale VdA che pubblica l'allegato pk=115707 (trovato solo tramite ricerca).
- Elenco delle tate familiari di Aosta (9 secondo l'ISTAT).
- Elenco USR delle scuole non paritarie per Piemonte e Liguria; per la Valle d'Aosta non cercato a parte.
- Lo spazio gioco mancante ad Alba. Il nido privato e le 2 sezioni primavera mancanti a Rapallo.
- Il contenuto del sito comunale di Rapallo (irraggiungibile).
- Il registro di Alba è considerato "vero" solo sulla base del registro stesso: per 8 strutture private non ho trovato altre conferme (nessun sito, nessuna notizia).

## Conteggi
- **WebSearch:** 24 (Aosta 8, Alba 8 inclusa quella sull'USR Piemonte, Rapallo 8 inclusa quella sull'USR Liguria).
- **Letture dirette** (curl/WebFetch): circa 45, tra cui allegati regionali VdA (circa 25 PDF provati), siti comunali di Aosta e Alba, siti dei gestori, articoli. Vari tentativi falliti sul sito di Rapallo e su TED.
- Una chiamata di prova a un'API Municipium (Alba) è stata bloccata dal classificatore dei permessi: l'ho lasciata perdere.
- File scaricati in `/tmp/claude-0/-home-user-ideas/65ad3d1e-7b96-5706-bfd9-a1766591df7e/scratchpad/sub/aosta-alba-rapallo/`.
