---
tipo: rapporto
sessione: P5
tags: [rapporto, nidi, fonti, bilingue, internazionale, montessori, steiner, reggio emilia approach, outdoor education]
---
# Ricerca desk: servizi 0-6 bilingui, internazionali e con approcci pedagogici

Tutte le pagine sono state lette il **2026-11-20** con curl o WebFetch, salvo dove è indicato "estratto di ricerca" (= non riletto, da trattare come non verificato). [fatto] = letto alla fonte; [stima] = deduzione mia o dato secondario. Non ho salvato dati personali: alcune fonti contengono nomi, email e telefoni, segnalati nelle note.

## Note fonte create (in `Progetto nidi/Fonti/`)
Segmento A: [[Elenchi regionali scuole straniere USR]], [[COBIS elenco scuole membri]], [[British Schools Overseas ispezioni DfE]], [[CIS membership directory]], [[IB World Schools elenco PYP]], [[AEFE annuario scuole francesi]], [[ZfA Deutsche Auslandsschulen elenco]], [[educationsuisse Scuole svizzere in Italia]], [[Scuole europee e scuole europee accreditate]].
Segmento B: [[Opera Nazionale Montessori elenco scuole]], [[Mappa storica scuole Montessori PRIN Unimib]], [[AMI e Montessori ItaliA]], [[Federazione Scuole Steiner-Waldorf soci]], [[Reggio Children network e Istituzione Scuole e Nidi]], [[Rete nazionale Scuole all aperto]], [[Mappe asili nel bosco]].

---

## A) Bilingui e internazionali

### A1. "Bilingue": esiste una definizione o un riconoscimento?
- **Non trovato** alcun riconoscimento ministeriale di "nido o scuola dell'infanzia bilingue". "Bilingue" è un'etichetta che il gestore si dà da solo. Una scuola può essere paritaria (riconoscimento della parità, L. 62/2000) **e** dirsi bilingue, ma la parità non certifica il bilinguismo.
  - Esempio [fatto]: un testo pubblicitario su una scuola milanese "paritaria bilingue" da 1 a 14 anni dice "scuola paritaria riconosciuta dal Ministero dell'Istruzione e una Cambridge International School". Il riconoscimento riguarda la parità, il bilinguismo riguarda il curricolo Cambridge. https://www.ilgiorno.it/pubbliredazionali/mile-school-crescere-tra-bilinguismo-e-apertura-internazionale-r0vhkyl7
  - Esempio [fatto]: un'altra scuola dell'infanzia paritaria (2,5-6 anni) si presenta come "Bilingual Immersion". Per la sua primaria dichiara "metà delle ore settimanali in inglese": l'intensità varia molto da scuola a scuola. https://www.lanazione.it/pubbliredazionali/scuola-dellinfanzia-il-cucciolo-cresciamo-insieme-bilingue-fin-dai-primi-passi-emqaojs0
- Numero di nidi e infanzie "bilingui" in Italia: **non trovato** (nessun censimento). [stima] Si può stimare solo con lo scraping dei siti o cercando parole chiave negli elenchi regionali e MIM.
- Non verificato in questa sessione: le scuole delle minoranze linguistiche (Alto Adige, Valle d'Aosta, scuole con lingua d'insegnamento slovena in FVG). Queste sono istituzionalmente bilingui o in altra lingua: da trattare in una sessione apposita.

### A2. Scuole straniere in Italia (MIM / USR)
- [fatto] Il quadro normativo è il DPR 389/1994 e l'O.M. 5/1999. La vigilanza è degli USR. L'USR Lazio autorizza con decreto annuale l'elenco delle scuole straniere (decreto 1106 del 12/07/2024, a.s. 2024/25). Le scuole straniere "non fanno parte del sistema nazionale di istruzione" e gli attestati non hanno valore legale. Le scuole con titoli riconosciuti per **intesa bilaterale** sono escluse dalla delega agli USR (C.M. 18/1999). https://usrlazio.it/wp-content/uploads/2024/07/m_pi.AOODRLA.REGISTRO-DECRETI-R.0001106.12-07-2024.pdf
- [fatto] Elenco Lazio 2024/25: **65 voci**. Campi: denominazione, indirizzo, comune, telefono, mail. Nessun campo età o livelli. https://usrlazio.it/wp-content/uploads/2024/07/elenco-scuole-straniere-as-2024-2025-signed.pdf
- [stima, classificazione mia dai nomi] Circa 42 voci su 65 sono centri linguistici, catene di corsi d'inglese o programmi di studio all'estero; circa 23 sembrano scuole.
- **Prova contraria**: nell'elenco Lazio mancano il Lycée Chateaubriand e la Deutsche Schule Rom (intesa bilaterale), mentre c'è la Scuola Svizzera di Roma.
- Elenco USR Lombardia: **non trovato** (1 ricerca mirata). Pagina nazionale MIM "scuole straniere in Italia": **non trovata** (il vecchio URL dà 404).

### A3. Reti e accreditamenti internazionali
| Fonte | Chi pubblica | Italia | 0-6 | Formato / accesso |
|---|---|---|---|---|
| BSO (DfE) | gov.uk | **2** [fatto]: British School of Milan (isp. 20/03/2025), St George's Roma (06/11/2024), su ~302 nel mondo | non indicato | HTML + Content API JSON, OGL v3 |
| COBIS | cobis.org.uk | **non verificato** (ricerca solo JS) | non indicato | pagina dinamica Finalsite |
| CIS | cois.org (iframe Salesforce) | [stima] "14 membri, 9 con IB" (pagina H-FARM, non datata) | filtro "Early Childhood" presente | dinamico, nessun export |
| IB PYP | ibo.org | **non verificato** (403). Estratti: 45 IB World Schools e 24 PYP (ibyb, non datato); 18 PYP (2019) | PYP da 3 anni | blocco anti-bot |
| AEFE (Francia) | aefe.gouv.fr | **non verificato** (pagina JS). Estratti: Lycée Chateaubriand Roma, École Alexandre Dumas Napoli | maternelle da 3 anni | dinamico |
| ZfA (Germania) | auslandsschulwesen.de | **3** [fatto]: Genova, Milano, Roma (su 133) | Kindergarten da verificare | HTML statico |
| Scuole svizzere | educationsuisse.ch | **4** [fatto]: Milano, Roma, Catania, Bergamo (Bergamo: Kindergarten dai 3 anni, ~130 bambini) | sì (Kindergarten) | HTML |
| Scuole europee | eursc.eu | **3** [fatto]: Varese (tipo I), Parma e Brindisi (accreditate), tutte "from nursery" | nursery | HTML (con nomi di dirigenti) |
| ELIS | — | **non trovato**: elis.org è un ente di formazione romano non collegato; nessuna associazione "English Language International Schools" trovata | — | — |
| IPC/IEYC (Fieldwork) | — | **non trovato** un elenco italiano | — | — |
| Cambridge International | cambridgeinternational.org "find a Cambridge school" | **non verificato** (pagina raggiungibile, ricerca dinamica) | Cambridge Early Years | dinamico |
| NEASC | neasc.org | presente in un estratto (scuole italiane accreditate NEASC), non verificato | — | — |

URL: https://www.gov.uk/government/publications/british-schools-overseas-inspection-reports · https://www.cobis.org.uk/our-network/search-for-cobis-members/cobis-school-search · https://www.cois.org/membership-directory · https://schools.h-farm.com/en/vicenza/council-of-international-schools/ · https://www.ibyb.org/ib-world-schools-in-italy · https://aefe.gouv.fr/fr/reseau-scolaire-mondial/annuaire-des-etablissements · https://www.auslandsschulwesen.de/zfa-de/schulnetz/deutsche-auslandsschulen-das-/weltkarte · https://educationsuisse.ch/de/lander/schweizerschulen-in-italien/ · https://www.eursc.eu/en/accredited-european-schools/locations/

### A4. Bisogni delle famiglie documentati (segmento A)
- Personale madrelingua o con competenza verificata: "Verificare che gli educatori siano madrelingua inglese o abbiano una comprovata competenza nella lingua". Testo dal taglio promozionale. https://www.varesenews.it/2024/12/vantaggi-asilo-inglese/2120619/
- Costo dell'inglese al nido: "230 euro in un corso annuale (questo il costo medio, in alcuni casi incluso nella retta dell'asilo privato, in altri aggiuntivo)". Il bisogno è sapere cosa comprende la retta. https://www.nostrofiglio.it/bambino/istruzione/corsi-di-inglese-per-bambini-al-nido
- Continuità verso la primaria bilingue, a rischio nel pubblico: "Scuole primarie bilingue a rischio stop per mancanza di personale" (sperimentazione dal 2010 in 6 primarie lombarde). https://www.ilfattoquotidiano.it/2022/12/19/scuole-primarie-bilingue-a-rischio-stop-per-mancanza-di-personale-ce-uneccellenza-e-la-mandiamo-in-malora/6906244/
- Valore legale e passaggio al sistema italiano: l'O.M. 5/1999 impone l'avviso "non ha il valore legale"; per entrare in una primaria statale o paritaria dopo una scuola straniera serve l'esame di idoneità (D.Lgs. 62/2017, citato nel decreto USR Lazio). La Scuola Svizzera di Roma promuove proprio la "Durchlässigkeit" (permeabilità) verso il sistema italiano.

---

## B) Approcci pedagogici

### B1. Montessori
- [fatto] **Il riconoscimento esiste ed è dato dall'ONM.** Per un nido privato "istituzione funzionante a metodo Montessori" servono: progetto basato sulla "Carta nazionale del nido Montessori", educatori con diploma di specializzazione ONM per la prima infanzia, **convenzione con l'ONM** (consulenza e assistenza tecnica). Per l'infanzia e la primaria private vale lo stesso, con il titolo di differenziazione didattica. Le sezioni statali seguono la Convenzione Ministero-ONM del 7/10/2022 e richiedono docenti con codice E o K. https://operanazionalemontessori.it/la-scuola-a-metodo-montessori/
- [fatto] L'ONM pubblica una mappa "Trova l'istituzione Montessori più vicina" (nidi, Case dei bambini, primarie, secondarie di I grado; categorie per regione). I dati sono caricati via AJAX. **Conteggio non eseguito**: la richiesta ai dati è stata bloccata dal sistema di permessi della sessione. https://operanazionalemontessori.it/trova-scuola-montessori/
- [stima, estratti di ricerca non riletti] Censimento MIUR-ONM 2009-10: circa 104 Case dei bambini e primarie statali e paritarie, circa 27-30 nidi, 18 strutture private (Linkiesta 2014, 403).
- [fatto] La mappa storica PRIN (Unimib) conta 1.463 scuole Montessori esistite o esistenti dal 1907. È uno strumento storico, non un elenco di servizi attivi. https://boa.unimib.it/retrieve/5be26e80-620d-4f38-8882-c3ff0c7de94a/Mangiatordi-2023-Maria%20Montessori-VoR.pdf
- [fatto] AMI Italia: solo la società affiliata (Montessori ItaliA) e 2 centri di formazione (Bergamo, Perugia). La pagina "Scuole Montessori" di Montessori ItaliA è "in costruzione". https://montessori-ami.org/countries/italy · https://www.montessori-italia.org/scuole-montessori
- **Fondazione Montessori Italia**: non cercata per mancanza di budget; **non verificata**.
- Prova contraria: sul sito ONM non ho trovato un avviso di tutela del nome. [stima] Il nome "Montessori" e "a ispirazione Montessori" è usato liberamente; l'unico discrimine è la convenzione ONM o i titoli del personale.

### B2. Steiner-Waldorf
- [fatto] Elenco soci della Federazione: **47 voci, 42 con offerta 0-6** (3 citano il nido), in 11 regioni (Lombardia e Veneto 11 ciascuna). Per essere soci servono almeno 3 anni di gestione e la delibera del Consiglio direttivo. La Federazione "declina ogni responsabilità riguardo a realtà ... non socie ... che si autodefiniscono Steiner, Waldorf, steineriane o simili". https://www.educazionewaldorf.it/federazione/?pagina=soci
- [fatto, incoerente] Il testo istituzionale parla di "22 soci gestori di 61 scuole, ~3200 alunni, 450 insegnanti". https://www.educazionewaldorf.it/federazione/
- [stima, secondaria] IASWECE: "30 Waldorf kindergartens" e circa 1000 bambini (non datato). https://iaswece.org/europe/italy/
- Iscrizione negli albi regionali delle non paritarie (Veneto) e nell'elenco provinciale di Trento: solo estratti di ricerca, non riletti.

### B3. Reggio Emilia Approach
- [fatto] **Non esistono scuole "Reggio" riconosciute fuori da Reggio Emilia.** Reggio Children: i servizi che "rappresentano l'esperienza educativa del Reggio Emilia Approach®" sono quelli della rete comunale dell'Istituzione Scuole e Nidi d'infanzia di Reggio Emilia. https://www.reggiochildren.it/faq/
- [fatto] "Reggio Emilia Approach®" e "Reggio Children®" sono marchi registrati. Reggio Children riceve "crescenti segnalazioni" di uso improprio e invita a verificare l'autenticità. https://www.reggiochildren.it/i-marchi/
- [fatto] Il network internazionale non ha una referente italiana né un elenco di scuole. https://www.reggiochildren.it/reggio-emilia-approach/network/
- Numero dei servizi comunali e convenzionati di Reggio Emilia: **non contato** (mappa su https://www.scuolenidi.re.it/).

### B4. Educazione all'aperto e asili nel bosco
- [fatto] La Rete nazionale Scuole all'aperto è una rete di scuole pubbliche con capofila l'IC 12 di Bologna (accordo di rete luglio 2020) e convenzione con UniBo; l'Emilia-Romagna ha più istituti. https://www.tecnicadellascuola.it/educazione-allaperto-ecco-come-poter-aderire-e-ideare-un-progetto-formativo · sito https://scuoleallaperto.com/. **Elenco degli aderenti non trovato.**
- [fatto] RAF 2017 (UniPD): nessuna norma nazionale; il nome "asilo nel bosco" è usato anche per attività che non si svolgono nel bosco; **71 esperienze** in ambiente forestale; media 27,4 iscritti, età 0-13. Dati da mappe informali (Terra Nuova, Asilo nel Bosco di Ostia), oggi non raggiungibili (403 e nessuna risposta). https://research.unipd.it/retrieve/e14fb26b-fed8-3de1-e053-1705fe0ac030/RAF_G7.6.pdf
- "Rete italiana asili nel bosco", "Manifesto" nazionale: **non trovati**.

### B5. Bisogni delle famiglie documentati (segmento B)
- Distinguere l'autentico dal nome usato: lo dicono esplicitamente la Federazione Steiner (avvertenza sui non soci) e Reggio Children (avviso sui marchi). → Bisogno di un'etichetta "riconosciuto da X" separata da "si dichiara ispirato a X".
- Sapere se un servizio "nel bosco" è autorizzato e dove si svolge davvero (RAF 2017).
- Montessori statale con posti limitati e costi di apertura a carico della scuola (5-10 mila € di arredi più 5-10 mila € di materiali): [stima] da questo deriva la richiesta di sapere dove esistono sezioni statali. Fonte ONM sopra.
- Non ho trovato discussioni dirette di genitori (forum) per il segmento B: lacuna da coprire con le interviste.

---

## Implicazioni per il servizio [stima]
1. Per i segmenti con un ente che riconosce (ONM, Federazione Steiner, scuole straniere USR, BSO, ZfA, educationsuisse, Scuole europee) si può mostrare un **bollino verificato** con link alla fonte. Per gli altri (bilingue, Reggio fuori da Reggio Emilia, all'aperto, bosco) si può solo riportare l'**autodichiarazione** del gestore, e va scritto chiaramente.
2. Gli elenchi sono piccoli (decine di strutture), quasi mai con campi su età, posti o rette, e spesso dinamici o protetti. La fonte principale resteranno i siti dei gestori più i registri regionali 0-3 e gli elenchi MIM delle paritarie; questi elenchi servono come etichette.
3. Termini di riuso: solo gov.uk (OGL) ha una licenza chiara; gli altri non ne indicano.

## Cosa non è stato trovato o verificato
- Definizione o censimento dei servizi 0-6 bilingui.
- Conteggi per Italia di COBIS, CIS, IB PYP, AEFE e Cambridge (pagine dinamiche o bloccate).
- ELIS, elenco IEYC/IPC, Fondazione Montessori Italia.
- Conteggio della mappa ONM (bloccato) e dei servizi dell'Istituzione di Reggio Emilia.
- Elenco degli aderenti alla Rete Scuole all'aperto. Registro o rete degli asili nel bosco. Elenchi USR delle scuole straniere fuori dal Lazio.
- Scuole delle minoranze linguistiche (fuori perimetro in questa sessione).

## Ricerche web fatte (13 su 25)
1. COBIS accredited member schools Italy list
2. IB World Schools Italy Primary Years Programme number of schools
3. mim.gov.it scuole straniere in Italia elenco scuole internazionali riconosciute
4. Ufficio scolastico regionale Lombardia elenco scuole straniere funzionanti DPR 389/1994
5. AEFE Italie établissements homologués liste ... maternelle
6. "English Language International Schools" association Italy ELIS members
7. Federazione delle Scuole Steiner Waldorf in Italia elenco scuole dell'infanzia asili associati
8. Rete nazionale Scuole all'aperto elenco scuole aderenti Manifesto educazione all'aperto
9. asili nel bosco Italia rete nazionale mappa elenco quanti sono outdoor education 0-6
10. quante scuole Montessori in Italia case dei bambini statali private numero Opera Nazionale Montessori
11. "scuola bilingue" definizione normativa Italia scuola dell'infanzia paritaria bilingue ...
12. genitori scegliere asilo bilingue costo retta insegnanti madrelingua dubbi forum
13. International Early Years Curriculum IEYC schools in Italy Fieldwork Education accredited list
