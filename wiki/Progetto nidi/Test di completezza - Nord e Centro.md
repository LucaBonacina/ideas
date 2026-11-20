---
tipo: sintesi
territorio: "Valle d'Aosta, Piemonte, Liguria, Lombardia, P.A. Trento, P.A. Bolzano, Veneto, Friuli-Venezia Giulia, Emilia-Romagna, Toscana, Umbria, Marche, Lazio, Abruzzo, Molise"
sessione: P9
verificato_il: 2026-11-20
tags: [progetto, nidi, fonti, test-completezza, sintesi]
---
# Test di completezza delle fonti: Nord e Centro

Test di completezza previsto dal [[Metodo del progetto]] e dalle istruzioni del secondo blocco: un comune campione per ciascuna delle 15 regioni e province autonome del Nord e del Centro. Per ogni comune abbiamo costruito a mano l'**elenco "vero"** dei servizi 0-3 e delle scuole dell'infanzia 3-6, incrociando tutte le fonti, e poi misurato quanto ne contiene ogni fonte. Le note dei comuni sono in `Test di completezza/`. I rapporti di lavoro sono in `Rapporti/P9/`. Le sintesi precedenti, basate solo sui totali, sono [[Regioni Nord - sintesi]] e [[Regioni Centro - sintesi]].

## In breve
- **0-3: nessuna fonte da sola basta.** Sommando i 15 comuni, l'elenco vero conta 197 strutture 0-3.
  - Il registro regionale o provinciale, dove esiste, ne contiene in media l'83%.
  - Il sito del Comune ne contiene il 58%.
  - Le ricerche web ne trovano il 25%.
  - Incrociando tutte le fonti istituzionali (regione, comune, decreti USR e di contributo) si arriva al **95%**. Il 5% che resta (9 strutture) si trova solo sul web, quasi tutto a Termoli e Rapallo.
- **Le sezioni primavera sono il buco sistematico dei registri regionali.** A Legnano, Bassano, Pordenone, Fano e Viterbo compaiono solo negli **elenchi USR o regionali delle sezioni primavera autorizzate o finanziate**. È la fonte da aggiungere in ogni regione.
- **I servizi domiciliari (Tagesmutter, tate familiari, nidi famiglia) sono la parte non trovabile.** Mancano 36 dei 52 servizi che l'ISTAT conta e che non abbiamo trovato: 23 a Merano e 9 ad Aosta. Esistono come numero, ma nessuna fonte pubblica li elenca per comune.
- **3-6: l'anagrafe MIM è quasi completa.** Fuori da Trento e Bolzano contiene 200 scuole su 201: manca solo una scuola dell'infanzia comunale di Termoli. A Trento e Bolzano il MIM è vuoto: a Rovereto serve l'elenco del Comune, a Merano non abbiamo trovato un elenco. Nessuna scuola dell'infanzia trovata solo sul web. Nessuna scuola non paritaria nei 15 comuni, almeno dove gli elenchi USR sono stati letti (Lazio, Veneto).
- **I campi utili ai genitori stanno quasi solo nei siti comunali e solo per i servizi comunali.** Le rette dei privati si trovano in un solo comune su 15: Pordenone pubblica le rette di ogni privato accreditato. La lingua compare solo sui siti dei gestori. L'inclusione compare solo come criterio di priorità o riduzione della retta.

## Criterio di scelta dei comuni
Per ogni regione un comune tra 15.000 e 100.000 abitanti, non capoluogo di regione, con almeno 10 servizi 0-3 attesi dall'ISTAT. Due eccezioni:
- **Aosta:** in Valle d'Aosta è l'unico comune sopra i 15.000 abitanti, ed è il capoluogo.
- **Rapallo:** l'ISTAT gli assegna solo 6 servizi. È un errore di selezione del coordinatore, che non ha controllato la soglia prima di assegnare il comune. Il risultato vale come esempio di comune piccolo e va letto con cautela.

Denominatori: ISTAT dataflow `47_850`, periodo 2024, letto via API per codice comune; anagrafe MIM a.s. 2026/27. Li abbiamo riletti tutti direttamente il 2026-11-20 (vedi [[ISTAT - Nidi e servizi integrativi per la prima infanzia]] e [[MIM - Anagrafe scuole statali e paritarie]]).

## Tabella 1: copertura per fonte e per regione (0-3)
R = registro o elenco regionale/provinciale; C = sito del Comune; A = altre fonti istituzionali (decreti USR sezioni primavera, decreti di contributo, guide regionali, avvisi di ambito); W = ricerche web (siti dei gestori, stampa, portali).

| Regione | Comune | ISTAT 2024 | Elenco vero 0-3 | Fonte R | R | C | A | W | Solo web | ISTAT non trovati |
|---|---|---|---|---|---|---|---|---|---|---|
| [[Valle d Aosta]] | [[Aosta]] | 15 | 7 | PDF autorizzazioni e accreditamenti (ago. 2026) | 7/7 (100%) | 0/7 | 6/7 | 6/7 | 0 | 9 (tate familiari) |
| [[Piemonte]] | [[Alba]] | 13 | 14 | [[Regione Piemonte - Anagrafe servizi prima infanzia]] | 14/14 (100%) | 2/14 | 0/14 | 3/14 | 0 | 1 spazio gioco |
| [[Liguria]] | [[Rapallo]] | 6 | 3 | non esiste | – | 1/3 | 1/3 | 3/3 | 2 | 3 (1 nido, 2 primavera) |
| [[Lombardia]] | [[Legnano]] | 18 | 21 | [[Regione Lombardia - Strutture di offerta sociale prima infanzia]] | 15/21 (71%) | 3/21 | 6/21 | 7/21 | 0 | 0 |
| [[Provincia autonoma di Trento]] | [[Rovereto]] | 14 | 12 | [[Provincia autonoma di Trento - Elenco nidi d infanzia]] + [[Provincia autonoma di Trento - Elenco nidi familiari Tagesmutter]] | 8/12 per nome (67%); 12/12 come conteggio | 8/12 | 0/12 | 1/12 | 0 | 2 domiciliari |
| [[Provincia autonoma di Bolzano]] | [[Merano]] | 29 | 7 | Elenco provinciale delle microstrutture (portale famiglia) | 6/7 (86%) | 1/7 | 0/7 | 5/7 | 1 | 23 (Tagesmütter) |
| [[Veneto]] | [[Bassano del Grappa]] | 11 | 11 | [[Regione Veneto - Servizi prima infanzia finanziati DDR]] (2024) | 7/11 (64%) | 3/11 | 5/11 | 2/11 | 0 | 2 nidi |
| [[Friuli-Venezia Giulia]] | [[Pordenone]] | 15 | 14 | [[Regione FVG - Registro servizi prima infanzia attivi]] | 12/14 (86%) | 12/14 | 2/14 | 2/14 | 0 | 2 (1 domiciliare, 1 centro bambini-genitori) |
| [[Emilia-Romagna]] | [[Imola]] | 26 | 28 | nessun elenco (SPI-ER solo conteggi) | – | 28/28 | 0/28 | 3/28 | 0 | 0 |
| [[Toscana]] | [[Empoli]] | 10 | 10 | [[Regione Toscana - Nidi gratis elenco servizi e comuni aderenti]] | 8/10 (80%) | 10/10 | 0/10 | 1/10 | 0 | 0 |
| [[Umbria]] | [[Foligno]] | 19 | 15 | non esiste | – | 15/15 | 0/15 | 2/15 | 0 | 4 (1 primavera, 2 spazi gioco, ~1 nido) |
| [[Marche]] | [[Fano]] | 22 | 19 | non esiste | – | 19/19 | 1/19 | 2/19 | 0 | 3 (1 domiciliare, 1 spazio gioco, 1 primavera) |
| [[Lazio]] | [[Viterbo]] | 14 | 17 | [[Regione Lazio - Elenco servizi educativi accreditati SIRSE]] | 17/17 (100%) | sito non raggiungibile | 0/17 | 3/17 | 0 | 0 (1 domiciliare non identificato) |
| [[Abruzzo]] | [[Lanciano]] | 11 | 10 | non esiste | – | 10/10 (3/10 senza un file del 2020) | 3/10 | 4/10 | 0 | 1 nido |
| [[Molise]] | [[Termoli]] | 11 | 9 | non esiste | – | 3/9 | 0/9 | 6/9 | 6 | 2 (1 nido, 1 primavera) |
| **Totale** | | **234** | **197** | 9 territori su 15 | **94/113 (83%)**; 94/197 (48%) su tutti i comuni | **115/197 (58%)** | 24/197 (12%) | 50/197 (25%) | **9 (5%)** | **52** (36 domiciliari) |

Come leggere i totali [stima]:
- La copertura di C è calcolata con 0 per Viterbo, dove il sito non era raggiungibile, e con 10/10 per Lanciano, grazie a un file del 2020 trovato sul sito.
- L'elenco vero supera l'ISTAT in 5 comuni: Alba, Legnano, Imola, Viterbo e Pordenone (per tipologia). Il motivo è che i dati ISTAT si riferiscono al 2024, mentre le fonti sono del 2025-2026.
- L'elenco vero è sotto l'ISTAT soprattutto per i domiciliari.

## Tabella 2: scuole dell'infanzia (3-6)

| Comune | MIM 2026/27 | Elenco vero 3-6 | MIM | C | W | Solo web | Note |
|---|---|---|---|---|---|---|---|
| Aosta | 15 | 15 | 15/15 | 0/15 | 1/15 | 0 | scuole regionali nei file MIM `SCUANAAUT` |
| Alba | 13 | 13 | 13/13 | 0/13 | 2/13 | 0 | |
| Rapallo | 5 | 5 | 5/5 | 0/5 | 5/5 | 0 | |
| Legnano | 12 | 12 | 12/12 | 0/12 | 5/12 | 0 | 6 paritarie ospitano sezioni primavera |
| Rovereto | 0 | 16 | 0/16 | 15/16 | 1/16 | 0 | elenco comunale (PDF 2024); la Steiner "Colle Fiorito" trovata con fonti non scolastiche |
| Merano | 0 | non determinato | – | – | 2 | – | nessun elenco di Kindergärten o scuole dell'infanzia italiane per comune trovato |
| Bassano del Grappa | 15 | 15 | 15/15 | 1/15 | 2/15 | 0 | |
| Pordenone | 13 | 13 | 13/13 | 13/13 | 0/13 | 0 | |
| Imola | 22 | 22 | 22/22 | 22/22 | 4/22 | 0 | |
| Empoli | 15 | 15 | 15/15 | 15/15 | 1/15 | 0 | |
| Foligno | 23 | 23 | 23/23 | 21/23 | 1/23 | 0 | |
| Fano | 20 | 20 | 20/20 | 20/20 | 1/20 | 0 | 1 statale attribuita dal Comune a Fano e dal MIM a Mondolfo |
| Viterbo | 21 | 21 | 21/21 | sito non raggiungibile | 1/21 | 0 | nessuna non paritaria nell'elenco USR Lazio 2026/27 |
| Lanciano | 14 | 14 | 14/14 | 10/14 | 1/14 | 0 | 3 scuole di un file comunale del 2020 assenti dal MIM, segnate come dubbie |
| Termoli | 12 | 13 | 12/13 | 1/13 | 3/13 | 0 | scuola comunale "Madonna delle Grazie" assente dal MIM |
| **Totale senza Merano** | | **217** | **200/217 (92%)**; 200/201 (99,5%) senza Rovereto | | | **0** | |

## Tabella 3: campi utili ai genitori (dove si trovano, sul campione di strutture di ogni comune)

| Campo | Dove si trova | Comuni in cui c'è almeno per i servizi comunali | Per i privati |
|---|---|---|---|
| Rette | siti comunali (tariffe ISEE, PDF) | Alba, Legnano, Rovereto (simulatore ICEF), Pordenone, Imola, Empoli, Foligno, Fano, Lanciano | **solo Pordenone** (PDF comunale con le rette 2026/27 di ogni privato accreditato); qua e là sui siti delle paritarie (Bassano, Imola) |
| Orari | siti comunali, carte dei servizi, siti dei gestori | quasi tutti | siti dei gestori, quando esistono |
| Età accolte | registro FVG (mesi da/a), schede comunali, siti dei gestori | molti | registro FVG; siti dei gestori |
| Posti | registri regionali (Piemonte, Lombardia, FVG, Trento, Lazio, Valle d'Aosta), schede comunali | tutti quelli con registro | registro regionale |
| Scadenze iscrizioni | siti comunali, stampa locale | quasi tutti, solo per i servizi comunali | quasi mai |
| Progetto pedagogico | carte dei servizi comunali, siti dei gestori, PTOF delle paritarie | Alba, Empoli, Foligno, Fano | siti dei gestori |
| Lingua (bilingue) | solo siti dei gestori | – | Foligno, Viterbo, Termoli, Lanciano, Bassano, Merano |
| Inclusione/disabilità | criteri di priorità e riduzioni della retta nei siti comunali | Alba, Legnano, Rovereto, Pordenone, Empoli, Foligno, Fano, Lanciano | quasi mai, e generica |

Nessun registro regionale ha rette, orari, scadenze, progetto, lingua o inclusione. Il registro FVG è l'unico con età e adesione all'abbattimento delle rette.

## Cosa emerge
1. **Il registro regionale è la base, ma va integrato ovunque.** Dove esiste ed è aggiornato (Piemonte, Lazio, Valle d'Aosta, FVG), copre l'86-100% delle strutture 0-3 del comune; in Lombardia il 71%, perché il registro non ha le sezioni primavera. Dove è un elenco indiretto, cioè un decreto di contributo (Veneto) o un'adesione a una misura (Toscana Nidi gratis), si ferma al 64-80%. A Trento la Provincia dà i Tagesmutter solo come numero.
2. **Il sito del Comune è la fonte migliore nel Centro.** A Imola, Empoli, Foligno, Fano e Lanciano il sito comunale copre il 100% dei nidi, privati compresi, perché il Comune autorizza o accredita e pubblica l'elenco. Al Nord lo stesso sito copre spesso solo i nidi comunali: Alba 2/14, Legnano 3/21, Bassano 3/11. Questo conferma, per la parte comunale, la [stima] delle sintesi precedenti.
3. **Le sezioni primavera vanno prese dagli elenchi USR e regionali delle sezioni primavera.** Ne abbiamo letti direttamente quattro:
   - Lombardia: decreto USR 760/2026, che a Legnano dà 6 sezioni che nessun'altra fonte ha;
   - Veneto: elenco delle sezioni autorizzate 2025/26, con 4 sezioni a Bassano;
   - FVG: decreto di riparto 63588/2026, con 2 sezioni a Pordenone;
   - Lazio: riparto 2025/26 ed elenco delle prosecuzioni 2026/27.

   Sono pubblici, annuali e nominativi, con codice meccanografico, quindi si collegano al MIM.
4. **I servizi domiciliari sono il limite strutturale delle fonti aperte.** A Merano 23 servizi su 29 e ad Aosta 9 su 15 sono Tagesmütter o tate familiari. Nessuna fonte pubblica li elenca per comune: sono attività di singole persone, con elenchi che contengono dati personali. Per il prodotto vanno trattati come **cooperativa o rete che li gestisce** (es. Tagesmutter del Trentino, cooperative altoatesine), non come singole strutture [stima].
5. **Il web aggiunge poco, ma non zero.** Solo 9 strutture su 197 si trovano solo con il web: 6 a Termoli (nidi e sezioni primavera dentro scuole paritarie), 2 a Rapallo, 1 a Merano. Coincidono con i territori senza registro e con un sito comunale povero. Dove il registro c'è, il web serve per confermare che una struttura è attiva e per i campi, non per trovarne di nuove.
6. **Le fonti invecchiano in modo diverso.** A Legnano un dominio indicato nel registro ospita ormai spam. A Lanciano 5 privati sono confermati solo da un file del 2020. Il PDF di Rovereto sulle scuole dell'infanzia è del 2024. Un servizio domiciliare di Pordenone è nell'elenco comunale ma non più nel registro. Serve una **verifica di attività** periodica per struttura, non solo una raccolta [stima].
7. **Correzione a una nota esistente.** Per la Valle d'Aosta esiste un elenco regionale per struttura (PDF del 03/08/2026, https://gestionewww.regione.vda.it/allegato.aspx?pk=115707, letto dal coordinatore). La nota [[Valle d Aosta]] è stata aggiornata. Anche la riga "0% per struttura" di [[Regioni Nord - sintesi]] è superata.

## Ricetta di completezza per regione [stima, dai test]
- **Sempre:**
  - registro o elenco regionale, se esiste;
  - elenco USR o regionale delle sezioni primavera;
  - anagrafe MIM per il 3-6;
  - pagine e PDF del Comune per i privati autorizzati e per i campi.
- **Trento e Bolzano:** in più, gli elenchi provinciali delle scuole dell'infanzia (provinciali ed equiparate; Kindergärten e scuole dell'infanzia in lingua italiana), che non sono nel MIM. Per Bolzano manca ancora un elenco per comune.
- **Senza registro (Liguria, Emilia-Romagna, Umbria, Marche, Abruzzo, Molise):** il Comune è la fonte primaria. Va integrato con il web dove il sito comunale elenca solo i servizi comunali, come a Termoli e Rapallo.
- **Domiciliari:** elenco delle cooperative e reti, oppure richiesta agli enti (Agenzia per la famiglia di Bolzano, Regione Valle d'Aosta).

## Limiti e affidabilità
- **Un comune per regione non rappresenta la regione.** I risultati dicono come si comportano le fonti in un comune medio, non danno la copertura regionale.
- **Elenco vero.** È la migliore ricostruzione possibile con fonti aperte. Le strutture che nessuna fonte pubblica mostra restano fuori: per stimarle usiamo la differenza con l'ISTAT. Le strutture dubbie (siti spenti, voci in elenchi vecchi, nomi ambigui) sono segnate nelle note dei comuni e di regola non sono contate.
- **Siti non raggiungibili da questo ambiente:**
  - Comune di Viterbo e Comune di Rapallo: nel primo caso abbiamo letto solo i risultati di ricerca, nel secondo nemmeno quelli;
  - il portale open data dell'Emilia-Romagna, già segnalato in [[Regioni Nord - sintesi]].
- **Accessi bloccati dai permessi di questa sessione, non aggirati:**
  - l'API dei contenuti del portale famiglia di Bolzano;
  - una pagina TED sul bando dei nidi di Viterbo;
  - una copia su web.archive.org.
- **Pagine lette con WebFetch e non verificate sul testo grezzo:** alcune pagine sono state lette solo tramite WebFetch, che restituisce un riassunto e non il testo grezzo. Riguarda soprattutto il portale famiglia di Bolzano usato per Merano.
- **Mappa INPS "Servizi vicino a me":** non verificabile perché è dietro SPID. Resta la candidata più forte a fonte nazionale dello 0-3 (vedi [[INPS - Agenda asili nido e mappa Bonus nido]]).
- **Affidabilità:**
  - **alta** sui denominatori ISTAT e MIM e sulle righe dei registri, riletti dal coordinatore;
  - **media** sugli elenchi veri e sulle percentuali;
  - **bassa** su Merano (3-6 non determinato) e su Rapallo (sito comunale mai letto).

## Verifiche del coordinatore (2026-11-20)
Il coordinatore ha riletto direttamente queste fonti, con curl, pdftotext e openpyxl:
- **Fonti per i 15 comuni:**
  - API ISTAT per i 15 codici comune;
  - anagrafe MIM 2026/27;
  - registri di Piemonte, Lombardia, FVG, Trento, Veneto (DDR 58/2024), Toscana (Allegato B Nidi gratis e open data 2024/25), Lazio (SIRSE).
- **Affermazioni decisive dei subagenti:**
  - PDF regionale della Valle d'Aosta (7 nidi ad Aosta);
  - pagina nido del Comune di Alba (rette, 60 posti, convenzione con il Nido Ferrero);
  - decreto USR Lombardia 760/2026 (6 sezioni primavera a Legnano, codici coincidenti con il MIM);
  - elenco USR Veneto delle sezioni primavera 2025/26 (4 a Bassano);
  - decreto FVG 63588/2026 (Sacro Cuore e San Giorgio a Pordenone);
  - pagina dei nidi privati di Imola;
  - pagina dei nidi privati di Foligno (9 privati);
  - PDF dei privati autorizzati di Fano;
  - file Excel 2020 di Lanciano (10 strutture 0-3);
  - avviso di Termoli sulle sezioni primavera in concessione (25.000 euro).

## Note dei comuni
[[Aosta]] · [[Alba]] · [[Rapallo]] · [[Legnano]] · [[Rovereto]] · [[Merano]] · [[Bassano del Grappa]] · [[Pordenone]] · [[Imola]] · [[Empoli]] · [[Foligno]] · [[Fano]] · [[Viterbo]] · [[Lanciano]] · [[Termoli]]

Rapporti di lavoro: [[P9 Aosta Alba Rapallo]] · [[P9 Legnano Rovereto Merano]] · [[P9 Bassano Pordenone Imola]] · [[P9 Empoli Foligno Fano]] · [[P9 Viterbo Lanciano Termoli]] · brief in `Rapporti/P9/_brief.md`.
