# 04 — Generazione B2C (fase 1, seconda iterazione)

Nuovo focus: B2C, ambiti esclusi rispettati (vedi `00-brief.md`). Per non pescare solo dalle preferenze personali, i candidati sono generati in modo sistematico per **eventi di vita**: ogni evento porta scadenze, scelte e burocrazia. Su ognuno ci chiediamo dove le informazioni sono frammentate (fit con lo scraping) e chi pagherebbe.

## Ipotesi trasversale (da verificare, non assunta)
Il B2C ha tre debolezze strutturali rispetto al B2B, e lo scoring deve misurarle con la stessa asticella:
1. **Monetizzazione:** in Italia i privati pagano poco per servizi informativi. Modelli possibili: affiliazione, contatti venduti alle strutture (lead), sponsor, freemium.
2. **Distribuzione:** senza un pubblico, il canale principale è la SEO long-tail (es. una pagina per comune). È esposta alle risposte AI dei motori di ricerca.
3. **Concorrenza pubblica gratuita:** app IO, portali regionali, INPS. Lo Stato può diventare il concorrente.

## Candidati per evento di vita
Legenda: ✓ ripreso dallo screening precedente · ★ nuovo. "Frammentazione" = quante fonti diverse vanno unite (alta = buon fit con lo scraping).

| ID | Evento | Candidato | Frammentazione | Pagatori possibili |
|---|---|---|---|---|
| F1 ★ | Figli 0-3 | **Nidi: iscrizioni, graduatorie, scadenze, rette per comune + bonus nido INPS** | Alta (~7.900 comuni) | Nidi privati (lead), brand prima infanzia, genitori (premium) |
| F2 ★ | Famiglia | **Calendario burocratico familiare personalizzato** (assegno unico, ISEE annuale, bonus, iscrizioni scolastiche, mensa, vaccini) | Media-alta | Genitori (premium), CAF/patronati (lead), affiliazione |
| F3 ★ | Figli 3-14 | Centri estivi e campus: ricerca, prezzi, iscrizioni | Alta | Centri (lead/commissione), genitori |
| F4 ★ | Figli | Pediatri con posti liberi per ASL | Media | Da trovare (debole) |
| F5 ★ | Figli | Attività extrascolastiche (sport, musica) per quartiere | Alta | Associazioni (visibilità), genitori |
| #32 ✓ | Scuola | Libri scolastici usati | Bassa (open data) | Affiliazione |
| #9 ✓ | Anziani | RSA: rette, confronto, liste d'attesa | Alta (carte dei servizi in PDF) | Strutture (lead), servizi legali rimborsi |
| C1 ★ | Cittadino | **Trova-bonus personale**: a quali bonus/agevolazioni nazionali, regionali e comunali ho diritto | Alta | CAF/patronati (lead), affiliazione, premium |
| #10 ✓ | Salute | Tempi di attesa sanitari | Media (SPID in alcune regioni) | Strutture private (limiti di pubblicità) |
| #4 ✓ / N3 | Lavoro | Concorsi pubblici + tracker delle candidature | Bassa (inPA) | Corsi di preparazione (affiliazione), premium |
| #18 ✓ / N11 | Lavoro | Lavoro con dati veri / rilevatore di annunci fantasma | Alta (siti carriere) | Aziende (annunci), premium |
| M1 ★ | Mobilità | Regole ZTL, accessi e sanzioni per città (turisti e residenti) | Alta (ogni comune diverso) | Noleggi auto, assicurazioni (affiliazione), premium |
| M2 ★ | Mobilità | Scadenze del veicolo (bollo, revisione, assicurazione) | Bassa | Affiliazione assicurazioni (attenzione IVASS → G1) |
| #31 ✓ / N14 | Mobilità | Ritardi treni e indennizzi automatici | Media | Debole |
| H1 ★ | Casa (non immobili) | Calendario raccolta rifiuti e regole per comune | Alta | Comuni (B2G), sponsor locali |
| #20 ✓ | Casa | Bollette luce e gas (analisi della bolletta) | Media | Fornitori (lead) |
| #19 ✓ | Consumi | Prezzi supermercati / carrello | Alta | Affiliazione, brand |
| A1 ★ | Animali | Regole per cani (spiagge, parchi, trasporti) per comune e struttura | Alta | Affiliazione (strutture, prodotti), sponsor |
| T1 ★ | Tempo libero | Rifugi e sentieri: aperture, prenotazioni, condizioni | Alta | Rifugi (prenotazione), sponsor |
| T2 ★ | Tempo libero | Spiagge: qualità delle acque (ARPA), servizi, accessibilità | Alta | Stabilimenti (visibilità), affiliazione |
| #26 ✓ / N13 | Tempo libero | Aree di sosta camper / software per gestori | Media | Gestori, utenti |
| #28 ✓ | Tempo libero | Eventi locali e sagre | Alta | Debole |
| #29 ✓ | Tempo libero | Mostre e musei | Media | Biglietterie (affiliazione) |
| #39 ✓ / GN | Giochi | Giochi su dati reali (prezzo della spesa, "Più o meno, Italia", daily sui comuni) | — | Pubblicità, abbonamento |

## Ipotesi pre-registrate per il gruppo famiglia (F1, F2, F3)
Scritte **prima** di cercare evidenze, come richiesto dal protocollo anti-bias.

**Ci aspettiamo:** dolore alto e ricorrente; frammentazione alta (fit con lo scraping); SEO long-tail con query tipo "iscrizione nido [comune] 2027"; monetizzazione debole; stagionalità forte (picchi tra gennaio e maggio).

**Li scartiamo se:**
- l'app IO, l'INPS o i portali regionali coprono già scadenze e notifiche in modo soddisfacente;
- il volume di ricerca sommato su tutti i comuni è troppo basso per sostenere la SEO (soglia da fissare prima di misurare);
- non si trova un pagatore con ricavi per utente plausibili (es. nidi privati che pagano per i contatti, programmi di affiliazione per la prima infanzia);
- le risposte AI dei motori di ricerca rispondono già bene alle query per comune.

## Prossimo passo
Screening (gate G1-G5) dei candidati di questa tabella, con le regole del metodo e del protocollo anti-bias. Gli agenti non saranno informati delle preferenze dell'utente.
