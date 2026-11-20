# 03 — Screening (fase 2): sintesi

> **Aggiornamento 2026-11-20.** Esclusi per conflitto con il lavoro dell'utente: #1, #7, #16, #24, N2, N4, N10, gioco "Asta o affare?". Esclusi in quanto dati su aziende: #6 (da confermare). Il focus si sposta sul B2C: vedi `docs/04-b2c-generazione.md`.

Dettaglio, evidenze e fonti nei file di `docs/research/03-screening-*.md`. Data: 2026-11-20.

> **Limite di affidabilità.** Gli agenti hanno lavorato quasi solo sugli estratti dei risultati di ricerca (la rete della sessione blocca la lettura diretta di molti siti). Inoltre il tetto di 200 ricerche web per sessione si è esaurito a metà lavoro. Prezzi e numeri vanno riverificati aprendo le pagine prima dello scoring. **Volumi di ricerca e lamentele degli utenti non sono stati misurati per nessun candidato**: per ora C1 e C2 hanno un tetto di 2.

## Esito per candidato

### Passano alla fase di scoring
| # | Candidato | Note chiave |
|---|---|---|
| 1 | Aste giudiziarie immobiliari | Segmento affollato (molti servizi da 10-100 €/mese), mercato in calo, fonte dati quasi unica |
| 2 | Gare d'appalto | Pagatori certi (200-2.300 €/anno). Banca dati ANAC centrale → vantaggio solo su sotto soglia e documenti. Concorrente AI finanziato (Cato) |
| 3 | Bandi e finanziamenti agevolati | Fonti frammentate, ma portale ufficiale gratuito e varie startup AI |
| 4 | Concorsi pubblici | Domanda enorme, ma fonte unica (inPA) e SEO presidiata da Concorsando |
| 9 | RSA (e asili) | Dolore forte e documentato, rette sparse in PDF, strutture che pagano già per visibilità |
| 13+35 | Finanziamenti UE e bandi di ricerca (uniti) | Pagatori 9-300 €/mese, ma fonte unica con API e segmento affollato |
| 14 | Gare pan-UE | Prezzi alti; TED è una commodity, il valore sta nei portali nazionali sotto soglia |
| 24 | Database aziende B2B verticale | Solo dati a livello di azienda: Garante, 2 M€ di multa a Lusha per contatti personali raccolti con scraping |
| 32 | Libri scolastici usati | Dati aperti, ma liste gratuite già disponibili e forte stagionalità |
| 33 | Monitoraggio prezzi e-commerce | Mercato maturo e utenti soddisfatti; spazio solo dove il matching per EAN fallisce |

### Scartati
| # | Candidato | Gate | Motivo |
|---|---|---|---|
| 8 | Confronto scuole | G3 | Servizi gratuiti e autorevoli, nessun pagatore |
| 16 | Meta-ricerca immobili (B2C) | G5 | Jinka condannata 3 volte in Francia (2025-26), ReData in Danimarca. Resta la variante B2B con dati delle agenzie (→ N10) |
| 17 | Auto usate (meta-ricerca) | G5 | Sentenza CGUE Innoweb proprio su un meta-motore di annunci auto; valutazioni di prezzo già gratuite |
| 30 | Disponibilità campi sportivi | G2 | Playtomic ha consolidato il mercato, nessuna API per terzi |

### Incerti, con evidenze parziali
| # | Candidato | Dubbio principale |
|---|---|---|
| 5 | Albi pretori aggregati | Nessun pagatore trovato; Garante: dati personali visibili 15 giorni e non indicizzabili → usarlo come fonte dati per #2/#36 |
| 7 | Procedure concorsuali | Possibile licenza ex art. 134 TULPS (da verificare). Ha senso solo lato acquirenti |
| 10 | Tempi di attesa CUP | Dati solo aggregati, SPID in alcune regioni, limiti alla pubblicità sanitaria |
| 11 | Normativa con AI | Lexroom (73 M$ raccolti) + editori giuridici; lo scraping non dà vantaggio |
| 15 | Studi clinici per pazienti | Comitato etico, dati sanitari (art. 9 GDPR), possibile MDR |
| 18 | Lavoro con dati veri | Fonti: siti carriere delle aziende; retribuzione negli annunci già al 61% per legge; B2C poco monetizzabile; autorizzazione all'intermediazione da verificare |
| 25 | Fiere ed eventi B2B | Termini d'uso degli organizzatori e diritto *sui generis* |
| 26 | Aree sosta camper | Dati migliori raccolti dagli utenti dei concorrenti (protetti) |
| 27 | Sport dilettantistico | Tuttocampo domina, dati di minori |
| 28 | Eventi e sagre | Pagatori con budget minimi |
| 31 | Ritardi treni e rimborsi | Importi piccoli, nessun pagatore |

### Non ricercati (ricerche web esaurite)
#6 fondi pubblici come lead · #12 marchi e brevetti · #19 supermercati · #20 bollette · #21 carburanti flotte · #22 ricambi · #23 usato di nicchia · #29 musei · #34 recensioni locali · #36 cantieri e permessi · #37 due diligence fornitori

### Giochi (traccia separata)
| # | Candidato | Esito |
|---|---|---|
| 39 | Giochi su dati reali | **PASS, il più forte**: precedenti forti all'estero (Housle, Higher Lower, GeoGuessr), nessun equivalente italiano |
| 38 | Daily di parole/logica in italiano | PASS debole: Corriere Giochi già presente, nessun vantaggio dai dati |
| 40 | Gestionali/idle di nicchia | PASS debole: crescita solo a pagamento, costi per installazione in salita |

## Nuovi candidati emersi
| ID | Candidato | Da | Perché è interessante |
|---|---|---|---|
| N1 | Affidamenti diretti e determine sotto soglia | PA-1 | Unisce fonti frammentate (albi, determine) a pagatori già dimostrati (#2) |
| N2 | Storico degli esiti e degli sconti reali delle aste | PA-1 | Dato storico che si accumula; verificare l'accesso alla banca dati ministeriale |
| N3 | Tracker di candidature e scadenze per i concorsi | PA-1 | Il dolore su inPA è operativo, non di ricerca |
| N4 | Cessioni di aziende e rami da procedure concorsuali, lato acquirenti | PA-2 | Annunci sparsi tra gestori e tribunali, documenti in PDF |
| N5 | Comparatore rette RSA + lead per i rimborsi | PA-2 | Variante concreta di #9 |
| N7 | Cascade funding / open call dei progetti UE | UE | Centinaia di siti di progetto: lo scraping dà un vantaggio vero |
| N8 | Gare sotto soglia multi-paese | UE | Vergabepilot aggrega oltre 300 portali solo in Germania |
| N9 | Monitoraggio prezzi per prodotti senza EAN | UE | Lamentela ricorrente sugli strumenti attuali |
| N10 | Storico prezzi e giorni sul mercato per agenzie immobiliari (dati delle agenzie) | Mercato | Variante legale di #16 |
| N11 | Rilevatore di annunci di lavoro fantasma | Mercato | Una posizione su cinque fantasma (studio 2025) |
| N12 | Pricing dell'usato per concessionari indipendenti | Mercato | CarGurus si sposta verso software per i dealer |
| N13 | Software per gestori di aree di sosta camper | Consumer | I gestori pagano già per la visibilità |
| N14 | Indennizzo automatico per abbonati dei treni | Consumer | Dolore documentato, pagatore da trovare |
| N15 | Prenotazione dei campi comunali | Consumer | Spazio non coperto da Playtomic, da verificare |
| GN1-5 | Giochi: prezzo della spesa, "Asta o affare?", "Più o meno, Italia", daily sui comuni, daily semantico | Giochi | I primi tre si incastrano con #19, #1 e i dati pubblici |

(N6, censimento delle regioni che pubblicano i tempi di attesa senza SPID, è la prova tecnica di #10, non un candidato a sé.)

## Cosa abbiamo imparato (trasversale)
1. **Dove è il rischio legale.** Aggregare portali privati di annunci (immobili, auto, eventi) espone a cause per diritto *sui generis* e concorrenza sleale, con precedenti europei recenti. Usare dati pubblici è a basso rischio, **tranne quando contengono dati personali** (Garante su albi pretori e su Lusha). → **Zona più sicura: dati pubblici + dati a livello di azienda.**
2. **Dove lo scraping vale.** Dove esiste una fonte unica e pulita con API (inPA, TED, portale UE dei finanziamenti, banca dati ANAC) il vantaggio è quasi nullo. Il valore si sposta sulle **fonti frammentate a valle**: gare sotto soglia, determine, open call dei progetti UE, siti dei tribunali, carte dei servizi delle RSA.
3. **Emerge un gruppo forte: soldi pubblici e appalti** (#2, #14, N1, N8, #3, #13+35, N7, #6, #36, #5 come fonte). Ha pagatori dimostrati, fonti frammentate e regge bene contro i chatbot (alert, monitoraggio). Il rovescio: è anche il segmento dove arrivano più concorrenti AI.
4. **Secondo gruppo: aste e procedure concorsuali** (#1, N2, N4, #7, gioco "Asta o affare?").
5. **Domanda e dolore restano da misurare ovunque.** Senza volumi di ricerca e lamentele raccolte, lo scoring non può essere rigoroso.

## Lavoro rimasto prima dello scoring (fase 2b)
In ordine di priorità:
1. Ricercare i non ricercati che possono pesare: **#36, #6, N1, N7, N4, N2**, poi #12, #19, #20 (verifica G1), #34, #37.
2. Verificare la licenza ex art. 134 TULPS (decide #7, #37 e parte di N4).
3. Misurare **domanda (C2)** e **dolore (C1)** per tutti i candidati che passano.
4. Riverificare i prezzi aprendo le pagine.
