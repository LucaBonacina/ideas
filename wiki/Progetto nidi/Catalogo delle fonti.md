---
tipo: progetto
tags: [progetto, nidi, fonti]
aggiornato: 2026-11-22
stato: prima versione completa
---
# Catalogo delle fonti

Risponde alla domanda: **come si arriva a conoscere tutti i servizi educativi 0-6 in Italia, pubblici e privati?** Metodo in [[Metodo del progetto]]. Ogni fonte ha una nota in `Fonti/` (circa 100 note) con copertura, campi, formato, aggiornamento, licenza e dati personali; ogni regione una nota in `Regioni/`.

## In sintesi
1. **Non esiste oggi un registro unico nazionale 0-6 aperto.** Due sono in costruzione: l'**Agenda Asili Nido dell'INPS** (obbligatoria per i comuni dal 1° luglio 2026, solo 0-3, consultabile solo con SPID; flusso dati tra amministrazioni dal 2027/28) e il **sistema informativo del Ministero dell'Istruzione e del Merito** (da attivare entro settembre 2027, adesione obbligatoria). Vedi [[Normativa nazionale 0-6]].
2. **3-6 anni: base nazionale solida.** L'anagrafe del MIM (open data) contiene circa 21.400 scuole dell'infanzia statali e paritarie e nei 21 comuni del test copre 304 scuole su 308 fuori da Trento e Bolzano (200/201 al Nord e al Centro, 104/107 al Sud). Mancano le non paritarie (elenchi regionali degli USR, in PDF) e le province autonome (fonti provinciali).
3. **0-3 anni: si costruisce regione per regione.** Le fonti nazionali aperte danno solo conteggi (ISTAT, per comune). L'elenco nominativo viene da registri regionali, siti dei comuni e, dove mancano, ricerche web.
4. **Nei 21 comuni del test le fonti istituzionali coprono la grande maggioranza dei servizi 0-3** (95% al Nord e al Centro), ma con forti differenze tra regioni. Restano scoperti soprattutto **servizi domiciliari** (tagesmutter, nidi famiglia) e **sezioni primavera**.
5. **Le informazioni che servono ai genitori quasi non ci sono:** nessun registro regionale ha rette, orari o scadenze; solo Pordenone pubblica le rette di ogni privato accreditato (altrove si trovano solo quote dei convenzionati, come a Bagheria, o carte dei servizi di singoli gestori); la lingua compare solo sui siti dei gestori. Questi dati vanno raccolti dai comuni (avvisi e regolamenti) e dai gestori.

## Fonti nazionali
Dettaglio in [[Fonti nazionali - sintesi]].

| Fonte | Copre | Valore come base |
|---|---|---|
| [[MIM - Anagrafe scuole statali e paritarie]] | Infanzia statale e paritaria, nominativa, open data | Alto per il 3-6 |
| [[MIM - Scuola in Chiaro]] | Stesse scuole, con coordinate; API JSON aperta | Medio (complementare) |
| [[USR - Elenchi regionali scuole non paritarie]] | Infanzia non paritaria; sezioni primavera finanziate | Medio (indispensabile per le non paritarie) |
| [[INPS - Agenda asili nido e mappa Bonus nido]] | 0-3 abilitati, nominativa ma chiusa | Alto in potenza, basso oggi |
| [[ISTAT - Nidi e servizi integrativi per la prima infanzia]] | 0-3 per comune, tipologia e titolarità (solo conteggi) | Basso come elenco, alto come metro di completezza |
| [[dati.gov.it - Catalogo nazionale open data]] | Indice dei dataset regionali e locali | Alto come indice |

## Regioni: fonte migliore e completezza 0-3
- **Stima:** al Nord confronto dei totali con ISTAT (sessione P2); al Centro e al Sud stima qualitativa o su statistiche regionali (P3-P4).
- **Test:** un comune per regione (P9-P10), da leggere come indicazione. Le due metà usano metriche diverse: al Nord e al Centro la copertura dell'elenco vero da parte di ciascuna fonte (fonte: [[Test di completezza - Nord e Centro]], tabella 1); al Sud la quota dei servizi ISTAT con un nome, più la copertura della fonte migliore (fonte: [[Test di completezza - Sud e isole]]). "ISTAT non trovati" = servizi contati dall'ISTAT ma non identificati.

| Regione | Fonte migliore | Stima | Comune del test | Test |
|---|---|---|---|---|
| [[Lombardia]] | Registro regionale open data, 2.707 servizi, mensile | ~100% senza sezioni primavera; ~80% con esse | Legnano | registro 15/21 (71%: mancano le 6 sezioni primavera, presenti nel decreto USR); fonti istituzionali 21/21; ISTAT non trovati 0 |
| [[Friuli-Venezia Giulia]] | Registro regionale XLSX, 341 servizi, mensile | ~100% senza sezioni primavera; ~83% con esse | Pordenone | registro 12/14 (86%); comune 12/14; fonti istituzionali 14/14; ISTAT non trovati 2 |
| [[Piemonte]] | Elenco regionale PDF, 1.149 servizi | 85-100% | Alba | registro 14/14 (100%); ISTAT non trovati 1 |
| [[Provincia autonoma di Trento]] | 2 PDF provinciali, 183 servizi | ~85% | Rovereto | elenchi provinciali 8/12 per nome (12/12 come conteggio); ISTAT non trovati 2 domiciliari |
| [[Veneto]] | Allegati di decreti regionali e Nidi in famiglia | ~70-75% | Bassano del Grappa | decreti 7/11 (64%); fonti istituzionali 11/11 (con l'elenco USR delle sezioni primavera); ISTAT non trovati 2 |
| [[Valle d Aosta]] | Elenco regionale PDF per struttura (trovato nel test) | da rivedere | Aosta | elenco regionale 7/7 (100%); 9 tate familiari su 15 servizi ISTAT non trovate |
| [[Provincia autonoma di Bolzano]] | Solo la città di Bolzano (ASSB); elenco provinciale delle microstrutture | ~6% | Merano | microstrutture 6/7 (86%); 23 Tagesmütter su 29 servizi ISTAT non trovate |
| [[Liguria]] | Solo open data di Genova | 30-40% | Rapallo | nessun registro; comune 1/3; 2/3 solo web; ISTAT non trovati 3 su 6 (comune sotto la soglia di selezione) |
| [[Emilia-Romagna]] | Open data di Bologna, Ferrara, Reggio Emilia; anagrafe regionale SPI-ER non pubblicata | ~12% | Imola | comune 28/28 (100%); ISTAT non trovati 0 |
| [[Toscana]] | Elenco dei servizi Nidi gratis 2026/27 (PDF, 900 servizi); registro SIRIA chiuso | ~90% | Empoli | elenco Nidi gratis 8/10 (80%); comune 10/10 (100%); ISTAT non trovati 0 |
| [[Umbria]] | Elenco degli accreditati previsto ma non pubblicato | <20% | Foligno | comune 15/15 (100%); ISTAT non trovati 4 su 19 |
| [[Marche]] | Nessun elenco regionale | <10% | Fano | comune 19/19 (100%); ISTAT non trovati 3 su 22 |
| [[Lazio]] | Elenco degli accreditati (PDF, 757 servizi); registro SIRSE chiuso | 60-75% | Viterbo | elenco degli accreditati 17/17 (100%); sito del comune non raggiungibile; ISTAT non trovati 0 |
| [[Abruzzo]] | Solo statistiche aggregate | ~0% da fonti regionali | Lanciano | comune 10/10 solo grazie a un file del 2020 (3/10 senza); ISTAT non trovati 1 |
| [[Molise]] | Nessun elenco | ~0% da fonti regionali | Termoli | comune 3/9 (33%); 6/9 solo web; ISTAT non trovati 2 |
| [[Puglia]] | Registro regionale CSV (CC-BY, 935 servizi, fermo al 2023) + catalogo zerosei 2026/27 | 80-90% | Molfetta | ~100% dei servizi ISTAT con nome; registro 75%, catalogo 75%, insieme 100% |
| [[Campania]] | Elenco regionale nidi e micronidi (2024, 731 righe) + Napoli | 25-35% (stima fatta prima del ritrovamento dell'elenco regionale) | Battipaglia | ~100% dei servizi ISTAT con nome; elenco regionale 79% |
| [[Sardegna]] | Registro SIWE chiuso | <15% (>80% se ottenuto) | Alghero | 89% dei servizi ISTAT con nome; comune 88% |
| [[Sicilia]] | Albo regionale pubblicato solo come decreti; elenchi comunali | 20-30% | Bagheria | tutti i nidi, senza le 8 sezioni primavera; comune 100% dei nidi |
| [[Calabria]] | Nessun registro; rilevazione regionale in corso | <10% | Rende | 30-50% dei servizi ISTAT con nome; comune 17%, il web trova quasi tutto il resto dell'elenco |
| [[Basilicata]] | Nessun registro | <20% | Melfi | 40% dei servizi ISTAT con nome; comune 0%, il web trova le strutture nominate |

**Nord e Centro, somma dei 15 comuni**: elenco vero 197 servizi contro 234 dell'ISTAT; registro regionale, dove esiste, 83%; sito del comune 58% (100% a Imola, Empoli, Foligno, Fano e Lanciano; 33% a Termoli; Viterbo non leggibile); tutte le fonti istituzionali insieme 95%; solo con ricerche web 5%. Delle 52 strutture ISTAT non trovate, 36 sono servizi domiciliari.
**Sud e isole**: dove manca una fonte regionale conta il sito del comune. A Rende e Melfi le fonti istituzionali non nominano quasi nulla (comune 17% e 0%): il web trova quasi tutto l'elenco vero, ma si arriva solo al 30-50% e al 40% dei servizi contati dall'ISTAT.

## Segmenti
Dettaglio in [[Segmenti - sintesi]]. Quasi nessun segmento ha un registro aperto: il riconoscimento è verificabile solo per Montessori (Opera Nazionale Montessori), Steiner-Waldorf e alcune reti di scuole internazionali; bilingue, "ispirato a Reggio Emilia" e "nel bosco" sono dichiarazioni dei gestori. Per l'inclusione non esistono dati per singola struttura, salvo le barriere architettoniche delle scuole statali.

## I buchi e come colmarli
| Buco | Dove | Come colmarlo |
|---|---|---|
| Registri regionali chiusi o non pubblicati | Toscana (SIRIA), Lazio (SIRSE), Emilia-Romagna (SPI-ER), Sardegna (SIWE), Umbria, Liguria, Bolzano, Sicilia, Veneto (elenco completo) | Richieste di accesso civico generalizzato (FOIA) |
| Elenchi nazionali chiusi | INPS (Agenda), ISTAT (elenco delle unità di offerta), MIM (coordinate e gestore) | Richieste di accesso civico; seguire i flussi del 2027/28 |
| Regioni senza registro | Marche, Abruzzo, Molise, Calabria, Basilicata, Campania (in parte) | Siti dei comuni (scraping), ricerche web, poi gestori; accesso civico ai comuni per l'elenco dei titoli rilasciati (pratiche SUAP non pubbliche, vedi [[SUAP comunali e regionali]]) |
| Sezioni primavera | Tutte | Decreti ed elenchi USR e regionali di finanziamento |
| Servizi domiciliari | Tutte (36 dei 52 servizi mancanti al Nord e Centro) | Elenchi regionali dove esistono (es. Lombardia Nidi famiglia), comuni, reti di categoria |
| Scuole non paritarie e straniere | Tutte | Elenchi USR regione per regione |
| Rette, orari, scadenze, posti, lingua | Tutte | Avvisi e regolamenti comunali; gestori (scheda rivendicata) |

## Strategia proposta per la completezza
1. **3-6:** anagrafe MIM + elenchi USR delle non paritarie + fonti provinciali di Trento e Bolzano.
2. **0-3, livello 1:** registri ed elenchi regionali aperti (Lombardia, Friuli-Venezia Giulia, Piemonte, Puglia, Trento, Campania, Valle d'Aosta, Veneto dagli allegati dei decreti, Toscana e Lazio dai PDF).
3. **0-3, livello 2:** siti dei comuni, partendo dai capoluoghi e dai comuni più grandi; in gran parte del Centro e in Emilia-Romagna coprono tutto.
4. **0-3, livello 3:** richieste di accesso civico per i registri chiusi e, dal 2027/28, i flussi INPS e MIM.
5. **Controllo continuo:** confronto per comune con i conteggi ISTAT, per sapere sempre quanto manca e dove.
6. **Dati per i genitori:** rette pubbliche dagli avvisi comunali; rette dei privati, posti, orari e lingua dai gestori.

## Verifiche aperte
- **SUAP (Sportello Unico per le Attività Produttive): verificato il 22/11/2026 (sessione P11), esito negativo come fonte di massa.** Vedi [[SUAP comunali e regionali]]. In sintesi: le pratiche SUAP dei servizi 0-3 non sono pubblicate in nessun comune né piattaforma del campione (9 regioni, con e senza registro) e dal d.lgs. 97/2016 non c'è obbligo di pubblicarle; l'albo pretorio contiene solo i provvedimenti espressi, per 15 giorni, su piattaforme non interrogabili in modo automatico; nessun SUAP regionale (SUAPE Sardegna, Calabria SUAP, Umbria, Emilia-Romagna) né impresainungiorno.gov.it espone pratiche consultabili; open data SUAP solo in pochi comuni (il migliore è Cremona: elenco delle pratiche 2018-2025, 18 righe su nidi e infanzia); il SUAP non è sempre il canale (Emilia-Romagna: protocollo del comune; Sicilia: Regione). Dove c'è un registro regionale i dati SUAP vi confluiscono già. **Uso consigliato:** accesso civico mirato ai comuni (o agli ambiti) delle regioni senza registro, chiedendo l'elenco dei titoli attivi con oscuramento di persone fisiche e ditte individuali.
- **Registro delle imprese (codice ATECO 88.91, servizi di asili nido): non usato.** Sono dati su aziende, ambito escluso per possibile conflitto con il lavoro dell'utente; inoltre sono a pagamento e non coprono associazioni e parrocchie.

## Avvertenze
- Le stime di completezza regionali (P2-P4) e i test su un comune per regione (P9-P10) sono indicazioni, non statistiche.
- Alcuni registri contengono **dati personali** (nomi dei legali rappresentanti, servizi domiciliari presso abitazioni): vanno trattati nel rispetto del GDPR e non ripubblicati così come sono.
- Diversi siti non erano raggiungibili dall'ambiente di ricerca: sono elencati nelle note regione e fonte.
