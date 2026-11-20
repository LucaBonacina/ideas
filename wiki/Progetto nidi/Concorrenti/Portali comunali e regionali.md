---
tipo: concorrente
nome: "Portali comunali e regionali 0-6 (Milano, Torino, Reggio Emilia, Trento, Roma, Lombardia, Toscana)"
paese: "Italia"
attore: "pubblico"
categoria: "portale pubblico (iscrizioni e graduatorie comunali) e open data regionali"
url: "https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera"
fascia: "0-6"
copertura: "per portale: dai soli servizi comunali e convenzionati (Torino, Roma) a tutte le strutture del territorio comprese statali e private (Milano Geoschool, Reggio Emilia, registro Lombardia 2.707 unità 0-3)"
modello_ricavo: "nessuno: servizi pubblici gratuiti; i comuni incassano le rette dei propri servizi (pagoPA o borsellino elettronico)"
stato: "attivo"
verificato_il: "2026-11-20"
tags: [concorrente]
---
# Portali comunali e regionali 0-6

## In breve
I comuni più grandi hanno già digitalizzato il **loro** ciclo: domanda online con SPID o CIE, graduatoria pubblicata online, accettazione del posto online, retta in base all'ISEE pagata con pagoPA. Quasi sempre però coprono **solo i servizi comunali e convenzionati**. Fanno eccezione la mappa **Geoschool di Milano** e il sito dell'**Istituzione di Reggio Emilia**, che mostrano anche statali, paritarie e private. Le regioni pubblicano registri o statistiche aperte (Lombardia per struttura, Toscana per comune), senza strumenti di ricerca per i genitori. Il confronto tra pubblico e privato, i posti liberi nel privato e le rette private restano fuori ovunque. Tutto è stato letto direttamente il 2026-11-20 salvo dove indicato.

## Funzioni per i genitori (sintesi comparata)
| Funzione | Milano | Torino | Reggio Emilia | Trento (PAT) | Roma | Lombardia (Regione) | Toscana (Regione) |
|---|---|---|---|---|---|---|---|
| Ricerca e mappa | Geoschool: indirizzo + età, mappa, percorsi per distanza | elenco "Luoghi" e PDF | "Cerca il Nido/Scuola" + mappa, 96 strutture | non trovata | non verificata | no (solo dataset) | no (solo dataset) |
| Copertura | comunali, appalto, privati accreditati, statali, paritarie, private | comunali e convenzionati | comunali, convenzionati, statali, FISM, private | infanzia provinciali ed equiparate | comunali e indirette | tutte le unità 0-3 autorizzate | aggregati per comune |
| Scheda | non letta (app ArcGIS) | pagina "Luogo" (indirizzo, circoscrizione) | ricca: gestore, orari, posti, sezioni, retta min-max | no | no | riga dataset | no |
| Iscrizione online | sì (portale servizi educativi) | sì, **solo** online, fino a 10 preferenze | sì (SPID/CIE) | sì, **solo** online, con pre-iscrizione | sì, solo online, fino a 6 preferenze nel Municipio [fonte secondaria] | no | no |
| Graduatoria online | sì (aggiornata al 12/11/2026) | sì, **ogni martedì**, per nido e tempo | sì (prima e seconda graduatoria) | non verificata | sì, per Municipio [fonte secondaria] | no | lista d'attesa aggregata per comune |
| Accettazione o rinuncia online | non verificata | sì, entro la domenica, area "Le tue domande" | non verificata | non verificata | sì [fonte secondaria] | — | — |
| Rette pubbliche e ISEE | 4 fasce, da gratis a 502,20 €/mese | tariffa ISEE (pagina agevolazioni) | 13 fasce ISEE, per esempio 32-432 € | infanzia gratuita (7 ore); prolungamento con ICEF | ISEE + fascia oraria [fonte secondaria] | — | — |
| Simulatore retta | non trovato | non trovato | non trovato | non trovato | non trovato | — | — |
| Pagamento | pagoPA | Borsellino Elettronico | non verificato | non verificato | non verificato | — | — |
| App | Fascicolo del cittadino (web) | — | — | — | — | — | — |

---

## Milano
**Funzioni [fatto].**
- Pagina unica "Nidi d'infanzia e sezioni primavera" con graduatorie "aggiornate al 12 novembre", iscrizioni (chiuse alle 12:00 del 10/7/2026), iscrizioni per nascituri e sezione Primavera (portale `servizicrm.comune.milano.it`), modulo di iscrizione `suseportale.comune.milano.it/ServiziEducativi/…`, Open Day (28-30/1/2026, "in ogni sede"), calendario, brochure, Carta dei servizi, ricevuta pagoPA e revisione della quota.
- Selettore con 10 lingue, italiano compreso (arabo, cinese, francese, giapponese, greco, inglese, russo, spagnolo, tedesco).
- **Geoschool** (`gisportal.comune.milano.it/geoschool/dashboard`, app ArcGIS/Angular): "Trova i nidi e le scuole dell'infanzia, inserendo un indirizzo e l'età della bambina o del bambino". La guida nel codice dice che mostra "indirizzo, tipologia di Struttura (comunale, comunale in appalto, privato accreditato, statale, paritaria e privata) e classe di età (Piccoli, Medio/Grande e Misti)". Le sedi sono ordinate "in ordine crescente di distanza", e l'asterisco segna "le due sedi… individuate come più vicine alla residenza nella domanda di iscrizione", che contano per il punteggio.
- La pagina Geoschool ha ancora FAQ segnaposto in **lorem ipsum** ("Vestibulum hendrerit ultrices nibh…", aggiornata il 16/6/2026).

**Rette [fatto].**
- Iscrizione annuale 56,20 € pagata con pagoPA.
- Quota mensile per i residenti: ISEE 0-6.500 € gratis; 6.500,01-12.500 € → 111,30 €; 12.500,01-27.000 € → 250,60 €; oltre 27.000 € o senza ISEE → 502,20 € (delibere di Giunta 1964/2022 e 33/2023).

**Copertura [fatto, da S11].** I PDF comunali elencano circa 194 nidi (comunali, in appalto, privati accreditati) contro 391 unità milanesi nel registro regionale. Geoschool invece include anche le private.

## Torino
**Funzioni [fatto].**
- Iscrizione ai nidi comunali e in convenzione e alle sezioni primavera in convenzione "esclusivamente" con il modulo online (SPID o CIE): fino a **10 preferenze** (nido + tempo di frequenza), almeno 3 per chi ha priorità.
- Dati anagrafici precompilati per i residenti; "inviare la domanda per primi non dà priorità".
- Nel 2026/27 le domande "nei termini" andavano dal 5/3 al 16/4/2026. Quelle dal 17/4/2026 al 18/2/2027 finiscono in coda.
- Graduatoria provvisoria con punteggio il 5/5/2026, definitiva il 26/5/2026.
- **Ogni martedì** viene pubblicata la graduatoria aggiornata con i posti assegnati dalla lista d'attesa, in PDF per ogni nido e tempo: 76 nidi con un PDF "Tempo Lungo". Le domande sono identificate con il numero di domanda.
- L'ammesso accetta o rinuncia online entro le 23:59 della domenica successiva ("la mancata accettazione… è considerata rinuncia").
- Tariffa in base all'ISEE pagata con il **Borsellino Elettronico**. Per le sezioni primavera convenzionate decide il gestore, senza agevolazioni ISEE.
- Sportelli su prenotazione per chi non ha SPID.
- Pagine "Luogo" per ogni nido (indirizzo, circolo didattico, circoscrizione).

**Copertura.** Solo comunali e convenzionati [fatto]. Nessuna mappa dei privati autorizzati [non trovata].

## Reggio Emilia (Istituzione Scuole e Nidi d'infanzia)
**Funzioni [fatto].**
- `scuolenidi.re.it`: "Cerca il Nido/Scuola", "Visita virtuale", mappa con **96 strutture**: 21 infanzia comunali, 13 nidi comunali, 15 infanzia statali, 34 infanzia FISM (paritarie cattoliche), 7+7 nidi e infanzia convenzionati, 4 infanzia private (conteggio mio sulla lista).
- Scheda strutturata, per esempio un nido convenzionato gestito da una cooperativa: tipologia, coordinamento pedagogico, ente gestore, indirizzo, telefono, e-mail, modalità di iscrizione ("Direttamente on line"), periodo, requisiti d'accesso (3-36 mesi, residenza), orari (7:30-16:00), prolungato ed estivo sì/no, **capacità ricettiva** ("70 posti in convenzione", 4 sezioni per età), **retta** ("13 fasce contributive Min. euro 32,00 - Max euro 432,00"), pasto, trasporto, paritario sì/no, gestione diretta sì/no, criterio del personale.
- Iscrizioni e graduatorie online sul sito del Comune. Iscrizioni a "Crescere insieme" (gruppi genitori-bambini) online con SPID o CIE.

**Opinioni.** Non cercate. [stima] Il "Reggio Emilia Approach" (Reggio Children) è noto nel mondo, ma riguarda la pedagogia, non lo strumento digitale.

## Provincia autonoma di Trento
**Funzioni [fatto].**
- La scuola dell'infanzia (provinciale ed equiparata) si iscrive **solo online** con SPID, CIE, CNS o CPS su `iscrizioniscuola.provincia.tn.it`. C'è una **pre-iscrizione** (19/1-2/2/2026) che dà precedenza e va confermata (1-8/10/2026 per gli ingressi di gennaio 2027).
- Frequenza ordinaria (7 ore) **gratuita**. Mensa e prolungamento con contributo ICEF: tariffa piena da 220 a 726 €/anno per 1-3 ore, minima da 82,5 a 275 €.
- Sezioni con metodo Montessori, con modulo dedicato.
- **Nidi:** "Le iscrizioni al servizio di nido d'infanzia sono gestite direttamente dai Comuni". Le Tagesmutter dipendono dai soggetti gestori (elenco "Soggetti gestori in Trentino" su vivoscuola.it).
- Ricerca e mappa dei servizi 0-3 a livello provinciale: non trovate.
- Le scuole dell'infanzia trentine non sono negli open data MIM (Trento esclusa, vedi [[Scuola in Chiaro]]).

## Roma Capitale
- Le pagine `comune.roma.it` provate con curl rispondono 404 o hanno indirizzi cambiati. Fonti secondarie [fatto, money.it 18/2/2025, per il 2025/26]:
  - domanda solo online con SPID, CIE o CNS;
  - da 1 a 6 nidi di un solo Municipio;
  - graduatorie provvisorie e definitive "consultabili online" per Municipio, accettazione solo online;
  - retta in base all'ISEE e alla fascia oraria, "uguale per i servizi a gestione diretta e indiretta".
- Domande fuori termine 2026/27 fino al 15/1/2027 (DGC 266/2022) [fatto, fonte secondaria]. L'iscrizione fuori termine alla scuola dell'infanzia capitolina si fa con modulo ai Municipi [fatto, newsistruzione.it, 26/7/2026].
- [stima] Funzioni simili a Torino, ma meno trasparenti sui posti.

## Regione Lombardia (open data)
- Dataset "Strutture di offerta sociale prima infanzia" (`pej5-wp65`): **2.707 unità** (API, 2026-11-20), aggiornamento "Mensile", ultima modifica 14/11/2026 [fatto].
- Campi: ATS, ASST, ambito, ente gestore (codice, denominazione, codice fiscale, partita IVA), tipologia (asilo nido, micronido, nido famiglia, centro prima infanzia), codice CUDES, denominazione, **numero posti**, indirizzo, CAP, comune, telefono, coordinate WGS84 [fatto]. Licenza non indicata nei metadati API [fatto, da S11].
- Comprende pubblici e privati autorizzati. Niente rette, posti liberi o iscrizione.

## Regione Toscana (open data)
- "Servizi educativi per la prima infanzia (3-36 mesi) - Toscana": un CSV all'anno dal 2014/15 al **2024/25**, licenza "Other (Non-Commercial)" [fatto].
- È **aggregato per comune**: popolazione 3-36 mesi, servizi attivi (nidi e integrativi pubblici e privati), ricettività per età, iscritti per tipo di gestione, **liste d'attesa al 1/9 e al 31/12**, domande e rinunce, indicatore di Lisbona [fatto, intestazione CSV 2021/22].
- Non è un elenco di strutture. Lo stesso catalogo indicizza i dataset del Comune di Firenze sui servizi 0-3 (2012-2014, CC-BY 4.0) [fatto].

## Altri (verificati in parte)
- **Emilia-Romagna, Informafamiglie:** portale regionale per distretto con argomento "Scuola e servizi educativi per l'infanzia" e mappa dei Centri per le famiglie. Non ha un motore di ricerca dei nidi [fatto, curl]. Ha buchi (distretto di Imola assente) e pagine ferme al 2025 [fatto, da [[H22b Entusiasta]] E14].
- **Bologna:** il sito comunale è una SPA (Lepida) non leggibile con curl. Fonti secondarie: domande online 13/4-4/5/2026 per nidi comunali e convenzionati (Bologna Zerodiciotto). Mappa 0-6 e simulatore non verificati.
- **Firenze, Veneto, Piemonte:** non verificati per limite di tempo e di ricerche.

## Funzioni per i gestori
- I gestori privati compaiono solo se convenzionati o accreditati (PDF comunali, schede di Reggio Emilia) o nei registri regionali (Lombardia). Nessun portale permette al privato di aggiornare la scheda, pubblicare posti liberi o ricevere contatti [fatto per quelli visti; non trovato altrove].
- A Torino le sezioni primavera convenzionate hanno un "Accesso al portale iscrizioni riservato" [fatto].

## Dati mostrati e da dove li prende
| Dato | Dove | Fonte |
|---|---|---|
| Elenco e indirizzi dei servizi comunali e convenzionati | tutti | comune |
| Strutture private autorizzate | Geoschool Milano, Reggio Emilia, dataset Lombardia | comune o regione (autorizzazioni) |
| Posti o capacità | Reggio Emilia (scheda), Lombardia (dataset), PDF di Milano | comune o regione |
| Rette pubbliche | Milano, Reggio Emilia, Trento | delibere tariffarie |
| Rette private | — | non disponibili |
| Graduatoria e posti assegnati | Torino (settimanale), Milano, Reggio Emilia, Roma | gestionale iscrizioni |
| Liste d'attesa aggregate | Toscana | rilevazione regionale |

## Modello di ricavo e prezzi
Nessuno: sono servizi pubblici. I software di iscrizione sono spesso forniti da terzi; i fornitori non sono stati verificati.

## Storia
- Il passaggio alla domanda "solo online" con SPID o CIE è ormai generale nei grandi comuni (Torino, Roma, Trento, Reggio Emilia) [fatto per l'a.s. 2026/27].
- Geoschool di Milano: pagina aggiornata il 16/6/2026; data di lancio non trovata.

## Cosa dicono gli utenti
- Recensioni dei portali: **non trovate** (nessuna ricerca dedicata, per il limite di ricerche).
- Indizi [fatto]: le FAQ in lorem ipsum di Geoschool; Torino precisa che "inviare la domanda per primi non dà priorità" (segno di ansia da click-day); il Comune di Roma ammette "boom di iscritti" e liste d'attesa (Fanpage, intervista all'assessora, estratto di ricerca non letto).

## Punti di forza e lacune
**Punti di forza**
- [fatto] Il ciclo pubblico è digitale da un capo all'altro nelle città migliori: domanda, graduatoria, accettazione e pagamento. Torino aggiorna la lista d'attesa ogni settimana.
- [fatto] Milano e Reggio Emilia mostrano già pubblico e privato insieme, sulla mappa o nell'elenco. Reggio ha schede con posti e rette: il modello più vicino a un "Winnie pubblico".

**Lacune**
- [fatto] Ogni comune ha strumenti, calendari, preferenze (6 a Roma, 10 a Torino) e terminologie diversi. Non c'è nulla che attraversi i confini comunali, eppure chi abita al confine sceglie anche nei comuni vicini.
- [fatto] Del privato non autorizzato o non convenzionato non si sa nulla: rette, posti, open day.
- [fatto] Nessun simulatore della retta che confronti pubblico e privato al netto del Bonus nido INPS.
- [stima] Le liste d'attesa, cioè l'informazione più cercata, sono pubbliche solo come PDF per numero di domanda (Torino) o come aggregato annuale (Toscana).

## Cosa ci insegna per l'Italia
1. **Non rifare l'iscrizione pubblica:** è digitalizzata, obbligatoria e legata a SPID. Il valore sta nel **prima** (orientarsi: quali nidi, quanto costano, dove ho più probabilità) e nell'**alternativa** (il privato, se resto in lista d'attesa).
2. **Calendario delle scadenze per comune** (iscrizioni, graduatorie, fuori termine, accettazione entro la domenica): informazioni sparse che un servizio può raccogliere e notificare.
3. **Simulatore "costo netto":** retta comunale per fascia ISEE (dalle delibere) contro retta privata, meno il Bonus nido INPS. Oggi non esiste da nessuna parte.
4. **Le schede di Reggio Emilia sono il modello di campi minimi:** gestore, orari, posti, sezioni per età, retta min-max, pasto, prolungato, estivo.
5. **Partire dalle regioni con un registro aperto** (Lombardia: posti e coordinate, aggiornato ogni mese) e dai comuni con mappe miste (Milano), poi integrare con l'Agenda INPS ([[Mappa INPS Bonus nido]]) e gli open data MIM ([[Scuola in Chiaro]]).

## Fonti
(accesso 2026-11-20)
- Milano: https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera · https://www.comune.milano.it/servizi/scuola/geoschool-trova-nidi-e-scuole-dell-infanzia · https://gisportal.comune.milano.it/geoschool/dashboard (JS main) · https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera-revisione-della-quota-contributiva
- Torino: https://www.comune.torino.it/servizi/iscrizione-ai-nidi-dinfanzia-comunali-convenzione-sezioni-primavera-convenzione · https://www.comune.torino.it/schede-informative/graduatoria-nidi-dinfanzia-comunali-convenzione-sezioni-primavera-convenzione · https://www.comune.torino.it/argomenti/istruzione/nido-dinfanzia
- Reggio Emilia: https://www.scuolenidi.re.it/ · https://www.scuolenidi.re.it/MappaAsiliScuole.jsp?mappa=0 · https://www.scuolenidi.re.it/SchedaStruttura.jsp?idServizio=127
- Trento: https://www.provincia.tn.it/Servizi/Iscrizioni-alla-scuola-dell-infanzia-a.-s.-2026-2027 · https://www.vivoscuola.it/Schede-informative/Iscrizioni-ai-nidi-al-servizio-di-Tagesmutter-e-ad-altri-servizi-per-la-prima-infanzia
- Roma: https://www.money.it/iscrizione-nido-roma-20252026-requisiti-come-fare-domanda · https://www.newsistruzione.it/2026/07/26/iscrizioni-nidi-infanzia-2026-2027-fuori-termine · https://www.fanpage.it/roma/asili-e-liste-dattesa-lassessora-pratelli-boom-di-iscritti-apriremo-12-nidi-entro-il-2026/ (estratto di ricerca)
- Lombardia: https://www.dati.lombardia.it/resource/pej5-wp65.json · https://www.dati.lombardia.it/api/views/pej5-wp65.json
- Toscana: https://dati.toscana.it/api/3/action/package_show?id=serviziprimainfanzia · CSV 2021/22 https://dati.toscana.it/dataset/98ee6064-b61a-45e2-a790-86c55b278574/resource/1d5be3a3-2de7-4530-8edf-27c273c14a31/download/opendata-_-da-pubblicare-21-22.csv
- Emilia-Romagna: https://www.informafamiglie.it/argomenti/scuola-e-servizi-educativi-per-linfanzia
- Bologna: https://www.bolognazerodiciotto.it/lang/en/objects/iscrizione-nidi-infanzia-20262027 (estratto di ricerca) · https://www.comune.bologna.it/servizi-informazioni/iscrizione-nidi-infanzia (SPA, contenuto non leggibile)
- Collegati: [[Mappa INPS Bonus nido]], [[Scuola in Chiaro]], [[H22b Bucatore]], [[H22b Entusiasta]]
