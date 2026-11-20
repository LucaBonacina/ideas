---
tipo: test-completezza
comune: "Bassano del Grappa"
provincia: "VI"
regione: "Veneto"
codice_istat: "024012"
criterio: "comune 15-100 mila abitanti, non capoluogo di regione, almeno 10 servizi 0-3 ISTAT"
servizi_0_3_istat_2024: 11
scuole_infanzia_mim_2026_27: 15
elenco_vero_0_3: 11
elenco_vero_3_6: 15
verificato_il: 2026-11-20
tags: [test-completezza, nidi]
---
# Test di completezza: Bassano del Grappa

## In breve
- Il **decreto regionale di riparto dei contributi** (DDR 58/2024, unico "registro" indiretto del Veneto) contiene **7 delle 11 unità 0-3** trovate (64%): i 3 nidi comunali e 4 nidi privati accreditati. Non ci sono le sezioni primavera. Il DDR dei contributi 2025 **non è stato trovato**: la pagina regionale si ferma al DDR 87/2024 e due ricerche non l'hanno trovato. [fatto]
- Le **4 sezioni primavera** (tutte in scuole dell'infanzia paritarie) risultano solo nell'**elenco USR Veneto delle sezioni primavera autorizzate per il 2025/26** (decreto n. 5447 del 14/11/2025, aggiornato con il decreto n. 5650 del 25/11/2025). È l'equivalente veneto del decreto USR Lombardia usato a Legnano. **Registro + elenco USR insieme: 11/11.** [fatto]
- Il **sito del Comune** (portale MyPortal della Regione, pagine generate in JavaScript, non leggibili via curl) espone solo i documenti dei **3 nidi comunali** (3/11): carta dei servizi di via Chini e via Rivana (revisione del 2019) e schede di Rivana e Rondò Brenta. Nessun elenco dei nidi privati. [fatto]
- **Web:** nessuna struttura trovata solo con il web. Due nidi privati (**"La Coccinella", via Tre Ponti 70**, e **"Spaziobimbi", via Chiesa Valrovina 1**) compaiono solo nell'estratto di un elenco commerciale. La pagina non si apre (HTTP 523), quindi il loro stato è **dubbio** e non sono contati. [fatto per le ricerche svolte]
- **Rispetto all'ISTAT 2024** (11 servizi: 9 nidi, 2 primavera) l'elenco ha lo stesso totale, ma una composizione diversa: 7 nidi (−2) e 4 sezioni primavera (+2, anno 2025/26 contro 2024). I 2 nidi mancanti potrebbero essere i due privati dubbi, autorizzati ma non accreditati, e quindi fuori dal DDR [stima].
- **3-6:** 15 scuole MIM (6 statali, 9 paritarie). Nessuna non paritaria: l'albo USR Veneto delle non paritarie 2025/26 non ha righe per Bassano. [fatto]

## Totale atteso
ISTAT, servizi 0-3 attivi (pacchetto del coordinatore):

| Tipologia | 2023 priv/pub/tot | 2024 priv/pub/tot | Posti 2024 priv/pub/tot |
|---|---|---|---|
| Nidi (incl. micronidi) | 4/4/8 | 5/4/9 | 152/156/308 |
| di cui nidi aziendali | 0/0/0 | 1/0/1 | 23/0/23 |
| Sezioni primavera | 2/0/2 | 2/0/2 | 18/0/18 |
| Spazi gioco | 0/0/0 | 0/0/0 | 0/0/0 |
| Servizi domiciliari | 0/0/0 | 0/0/0 | 0/0/0 |
| Centri bambini-genitori | 0/0/0 | 0/0/0 | 0/0/0 |
| **Totale** | 6/4/10 | **7/4/11** | 170/156/326 |

3-6: anagrafe MIM a.s. 2026/27: **15 scuole dell'infanzia** (6 statali, 9 paritarie). [fatto, pacchetto]

## Elenco vero 0-3
Legenda: **R** = registro/elenco regionale (in Veneto: allegati C e D del DDR 58/2024, contributi ai servizi accreditati; elenco Nidi in Famiglia DDR 39/2025 senza righe per Bassano); **C** = sito del Comune di Bassano del Grappa; **M** = MIM; **U** = USR non paritarie; **A** = altre fonti istituzionali (USR Veneto, sezioni primavera autorizzate 2025/26; avvisi TED dell'AULSS 7); **W** = siti dei gestori, elenchi commerciali.

| n. | Struttura | Tipologia | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Asilo nido comunale di via Rivana, via Rivana 105 | asilo nido | pubblica (gestione affidata a cooperativa) | ✓ | ✓ |  |  |  |  | la scheda dice 72 posti, la carta del 2019 dice 60 |
| 2 | Asilo nido comunale di via Chini | asilo nido | pubblica (gestione affidata a cooperativa) | ✓ | ✓ |  |  |  |  | 60 posti (carta 2019) |
| 3 | Nido del Centro Infanzia "Rondò Brenta", via Veneto 27 | nido (sezione 12-36 mesi in un polo con infanzia statale montessoriana) | pubblica (gestione affidata a cooperativa) | ✓ | ✓ |  |  |  |  | 12 posti + 20% |
| 4 | Nido integrato montessoriano "Il Girotondo", Fondazione Pirani-Cremona | nido integrato | privata | ✓ |  | (✓) |  |  |  | nessun sito trovato; la scuola ospitante (via Gobbi 8) è nel MIM |
| 5 | Asilo nido "Antonio Graziani", Istituto Vescovile Graziani | asilo nido 3-36 mesi | privata (religiosa) | ✓ |  | (✓) |  |  | ✓ | sito ilgraziani.it letto (rette 2027/28) |
| 6 | Micronido "I Monelli", Associazione I Monelli | micronido | privata | ✓ |  |  |  |  |  | via Sardegna 26/28 solo da un estratto di un elenco commerciale (non letto) |
| 7 | Micronido aziendale "L'Albero delle Fate" (ex AULSS 3), gestito da cooperativa | micronido aziendale | privata (concessione dell'AULSS 7) | ✓ |  |  |  | ✓ |  | avvisi TED 341739-2023 e 530984-2023 dell'AULSS 7 Pedemontana, "Bassano del Grappa: servizi di istruzione prescolastica" |
| 8 | Sezione primavera c/o paritaria "A. Graziani", via Ca' Rezzonico 6 | sezione primavera | privata (religiosa) |  |  | (✓) |  | ✓ | ✓ | USR: 10 bambini; sito: proposta 2-6 anni, retta |
| 9 | Sezione primavera c/o paritaria "Maria Immacolata", via Santa Croce 34/36 | sezione primavera | privata (parrocchiale) |  |  | (✓) |  | ✓ |  | USR: 17 bambini |
| 10 | Sezione primavera c/o paritaria "Beato Lorenzino", Valrovina | sezione primavera | privata (parrocchiale) |  |  | (✓) |  | ✓ |  | USR: 5 bambini |
| 11 | Sezione primavera c/o paritaria "Gaetana Sterni", via Marinoni 43 | sezione primavera | privata (parrocchiale) |  |  | (✓) |  | ✓ |  | USR: 16 bambini |

(✓) in colonna M: la scuola che ospita il servizio è nell'anagrafe MIM, ma il MIM non elenca nidi né sezioni primavera. Non conteggiato.

**Dubbie, non contate:** "La Coccinella" (via Tre Ponti 70) e "Spaziobimbi" (via Chiesa Valrovina 1), viste solo nell'estratto di ricerca di un elenco commerciale (impresaitalia.info, pagina non raggiungibile, HTTP 523). Lo stesso elenco cita anche una sede a Pove del Grappa.

## Elenco vero 3-6
| n. | Scuola | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | "Domenico Rico Tessarolo", via Melagrani | statale |  |  | ✓ |  |  |  | IC 2 |
| 2 | "Rondò Brenta" - Montessori, via Veneto | statale |  | ✓ | ✓ |  |  |  | citata nella scheda comunale del Centro Infanzia |
| 3 | "Monumento ai Caduti", via XI Febbraio | statale |  |  | ✓ |  |  |  | IC 2 |
| 4 | "XXV Aprile", via Rivana | statale |  |  | ✓ |  |  |  | IC 3 |
| 5 | "Ca' Baroncello", via F.lli Bandiera 3 | statale |  |  | ✓ |  |  |  | IC 1 |
| 6 | "S. Eusebio", via Marzarotto | statale |  |  | ✓ |  |  |  | IC 3 |
| 7 | "A. Graziani", via Ca' Rezzonico 6 | paritaria |  |  | ✓ |  | (✓) | ✓ | sito letto (rette, orari, inglese) |
| 8 | "San Giuseppe", via SS. Trinità 1 | paritaria |  |  | ✓ |  |  | ✓ | sito raggiunto (scuolesangiuseppe.it) |
| 9 | "Madonna della Salute", via San Giovanni Bosco 14 | paritaria |  |  | ✓ |  |  |  | sito MIM non raggiungibile |
| 10 | Fondazione Pirani-Cremona, via Gobbi 8 | paritaria |  |  | ✓ |  |  |  | |
| 11 | "Pio Baggio", Marchesane | paritaria |  |  | ✓ |  |  |  | |
| 12 | "M. Immacolata", via Santa Croce 34/36 | paritaria |  |  | ✓ |  | (✓) |  | sito altervista non raggiungibile |
| 13 | "Beato Lorenzino", via Chiesa 3 (Valrovina) | paritaria |  |  | ✓ |  | (✓) |  | |
| 14 | "Gaetana Sterni", via Marinoni 43 | paritaria |  |  | ✓ |  | (✓) |  | |
| 15 | Fondazione E. Vendramini ETS, via Col Fagheron 65 | paritaria |  |  | ✓ |  |  |  | dominio del sito non risolve |

(✓) in colonna A: la scuola compare nell'elenco USR per la sua sezione primavera. Non conteggiato.

Scuole dell'infanzia non paritarie: nessuna. L'**albo regionale delle non paritarie del Veneto 2025/26** (USR, PDF di 53 righe, soprattutto scuole Steiner-Waldorf) non contiene Bassano. [fatto]

## Copertura per fonte
| Fonte | 0-3 n/N | % | 3-6 n/N | % | Note |
|---|---|---|---|---|---|
| R - DDR 58/2024, allegati C e D (contributi 2024 ai servizi accreditati) | 7/11 | 64% | – | – | solo accreditati che hanno ricevuto il contributo; nessuna sezione primavera; nessun indirizzo né posti |
| C - Sito del Comune | 3/11 | 27% | 1/15 | 7% | solo i nidi comunali; il portale è in JavaScript, si leggono solo i PDF scaricabili |
| M - Anagrafe MIM | 0/11 | 0% | 15/15 | 100% | ospita le 4 sezioni primavera e 2 nidi, ma non li elenca |
| U - Albo USR Veneto non paritarie 2025/26 | – | – | 0/0 | – | esiste; nessuna riga per Bassano |
| A - USR Veneto, sezioni primavera autorizzate 2025/26 (+ avvisi TED) | 5/11 | 45% | – | – | unica fonte nominativa delle sezioni primavera; elenco con gestore e numero di bambini |
| W - Web (siti dei gestori, elenchi) | 2/11 | 18% | 2/15 | 13% | molti siti di paritarie non raggiungibili o assenti |

- **Strutture trovate solo con il web:** 0 contate. Due nidi privati solo web restano dubbi (vedi sopra).
- **Dichiarate dall'ISTAT ma non trovate:** 2 nidi (ISTAT 9, trovati 7: 1 pubblico e 1 privato in meno) [fatto i numeri, stima l'attribuzione]. Sezioni primavera: 2 in più (USR 2025/26 contro ISTAT 2024).
- **R + A insieme:** 11/11 (100%).

## Campi utili ai genitori
| Struttura | Retta | Orari | Età | Posti | Scadenze iscrizioni | Progetto pedagogico | Lingua | Inclusione/disabilità |
|---|---|---|---|---|---|---|---|---|
| Nido comunale via Rivana (pubblica) | no (carta: solo "riduzione per malattia", nessun importo) | sì (scheda comunale: 7:30-18:15, part-time e tempo pieno) | sì (carta: 3-36 mesi) | sì (scheda: 72; carta 2019: 60) | parziale (carta 2019: iscrizioni a marzo, maggio/giugno, dicembre/gennaio; forse superata) | sì (scheda: finalità, giornata tipo) | no | parziale (carta: "particolare attenzione" a bambini con disabilità) |
| Nido Rondò Brenta (pubblica) | no | sì (scheda: 7:30-16:30, 4 moduli) | sì (scheda: 12-36 mesi) | sì (scheda: 12 + 20%) | no | sì (scheda: progetto pedagogico, ambientamento, continuità 0-6) | no | no |
| Asilo nido A. Graziani (privata) | sì (sito: PDF rette 2027/28, iscrizione 250 €, 3 rate da 2.145 € tempo pieno, 1.852 € part-time) | sì (sito: 7:30-16:00, posticipo fino alle 18:00) | sì (sito: 3 mesi-3 anni) | no | no (preiscrizione online, nessuna scadenza) | parziale (sito: descrizione) | no | no |
| Sezione primavera Graziani (privata) | sì (sito: 3 rate da 1.250 €) | sì (sito: 7:30-16:00) | sì (sito: dai 2 anni) | parziale (USR: 10 bambini nel 2025/26) | no | parziale | sì (sito: inglese con insegnanti madrelingua, 2-6 anni) | no |
| Micronido I Monelli (privata) | no | no | no | no | no | no | no | no |
| Scuola dell'infanzia statale "XXV Aprile" | no | no | no | no | no | no (non controllato) | no | no |

## Problemi e prova contraria
- **DDR dei contributi 2025:** cercato sulla pagina regionale "servizi educativi 0-3" (elenca i decreti fino al DDR 87 del 26/08/2024) e con 2 ricerche web: **non trovato**. Si è usato il DDR 58/2024 del pacchetto. [fatto]
- **Privati autorizzati non accreditati:** in Veneto non esiste un elenco pubblico. Il sito del Comune non ne pubblica uno; un rapporto comunale ammette che esistono nidi privati non conteggiati (estratto di ricerca, documento non letto). Ricerche su "La Coccinella" e "Spaziobimbi": nessun sito né altra fonte. [fatto per le ricerche svolte]
- **Nidi integrati FISM:** cercati con una ricerca dedicata (FISM Vicenza, Pirani-Cremona, Vendramini, San Giuseppe, Sterni): nessun risultato oltre al DDR. Il nido integrato di Pirani-Cremona è solo nel DDR. [fatto per le ricerche svolte]
- **Portale comunale MyPortal:** la home restituisce solo lo scheletro della pagina (13 KB, senza link); il contenuto si raggiunge solo tramite i link ai PDF trovati dai motori di ricerca. La carta dei servizi dei nidi comunali è del 2019 (revisione n. 2).
- **Tipologie non coperte da nessuna fonte regionale:** privati autorizzati non accreditati, sezioni primavera non autorizzate, servizi integrativi (ISTAT ne dichiara 0).
- INPS "Servizi vicino a me": non verificabile (dietro SPID).

## Dati per la sintesi
```
istat_0_3_2024=11; elenco_vero_0_3=11; elenco_vero_3_6=15; R_0_3=7/11; C_0_3=3/11; A_0_3=5/11; W_0_3=2/11; solo_web_0_3=0 (2 dubbie non contate); M_3_6=15/15; C_3_6=1/15; W_3_6=2/15; solo_web_3_6=0; non_trovate_vs_istat=2 nidi (sezioni primavera +2); campi_rette=siti delle paritarie (Graziani); nessun importo per i nidi comunali; campi_orari=schede comunali e siti gestori; campi_posti=schede comunali, elenco USR (bambini per sezione primavera); campi_scadenze=carta comunale 2019 (forse superata); campi_progetto=schede comunali; campi_lingua=sito Graziani (inglese); campi_inclusione=carta comunale (generica)
```

## Fonti
- DDR 58 del 19/06/2024, allegati C e D: https://bur.regione.veneto.it/BurvServices/Pubblica/DettaglioDecreto.aspx?id=534140 (pacchetto del coordinatore, 2026-11-20)
- Regione Veneto, servizi educativi 0-3 (elenco dei decreti): https://www.regione.veneto.it/web/sociale/servizi-educativi-0-3-anni (2026-11-20)
- USR Veneto, sezioni primavera autorizzate 2025/26: elenco del decreto n. 5447 del 14/11/2025 https://istruzioneveneto.gov.it/wp-content/uploads/2025/11/SezioniPrimaveraAUTORIZZATE-25-26-SITO.pdf ; elenco aggiornato con gestore e bambini (decreto n. 5650 del 25/11/2025) https://istruzioneveneto.gov.it/wp-content/uploads/2025/11/02-All.Elenco2-Sezioni-Primavera-autorizzate-25-26.pdf ; avviso https://istruzioneveneto.gov.it/20251126_38975/ (scaricati e letti, 2026-11-20). Esiste anche un avviso del 30/09/2026 sulle sezioni ammissibili 2026/27, senza allegato pubblicato: https://istruzioneveneto.gov.it/20260930_43125/
- USR Veneto, albo regionale delle scuole non paritarie 2025/26: https://istruzioneveneto.gov.it/wp-content/uploads/2025/11/Elenco-ALBO_2025-2026_ep.pdf (letto, 2026-11-20)
- Comune di Bassano del Grappa (accesso 2026-11-20): carta dei servizi nidi via Chini e via Rivana https://www.comune.bassano.vi.it/myportal/C_A703/api/download/viachini_cartaservizi ; scheda nido via Rivana https://www.comune.bassano.vi.it/myportal/C_A703/api/download/nidorivana_schedaservizio ; scheda Rondò Brenta https://www.comune.bassano.vi.it/myportal/C_A703/api/download/rondobrenta_schedaservizi
- Avvisi TED dell'AULSS 7 Pedemontana (micronido aziendale): https://ted.europa.eu/en/notice/341739-2023/pdf e https://ted.europa.eu/en/notice/530984-2023/pdf (metadati letti con l'API TED, 2026-11-20)
- Istituto Graziani: https://www.ilgraziani.it/nido ; https://www.ilgraziani.it/scuola-infanzia ; https://www.ilgraziani.it/s/RETTE-NIDO-27-28.pdf ; https://www.ilgraziani.it/s/RETTE-INFANZIA-27-28.pdf (letti, 2026-11-20)
- Elenco commerciale (solo estratto di ricerca, pagina HTTP 523): https://www.impresaitalia.info/8532/1/asili-nido/cassola.aspx
- Note collegate: [[Veneto]], [[Regione Veneto - Servizi prima infanzia finanziati DDR]], [[Regione Veneto - Elenco Nidi in Famiglia]], [[USR - Elenchi regionali scuole non paritarie]], [[FISM federazione scuole materne]], [[ISTAT - Nidi e servizi integrativi per la prima infanzia]], [[MIM - Anagrafe scuole statali e paritarie]], [[INPS - Agenda asili nido e mappa Bonus nido]]
