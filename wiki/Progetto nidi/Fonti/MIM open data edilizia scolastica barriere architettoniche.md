---
tipo: fonte
ente: "Ministero dell'Istruzione e del Merito – Anagrafe dell'edilizia scolastica (dati forniti dagli enti locali proprietari, L. 23/1996)"
livello: "nazionale"
territorio: "Italia (scuole statali e Valle d'Aosta)"
tipologie: [infanzia statale]
gestione: [pubblico]
campi: [anno scolastico, codice scuola (meccanografico), codice edificio, accorgimenti barriere architettoniche, rampe di accesso, scale a norma, ascensore per disabili, servoscala/piattaforma, servizi igienici a norma, larghezza porte, percorsi interni, percorsi esterni, altri accorgimenti]
formato: "open data (CSV, JSON, RDF, XML)"
aggiornamento: "annuale; ultimo file a.s. 2024/25 pubblicato il 06/08/2025"
licenza: "IODL 2.0"
dati_personali: "no"
url: "https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Edilizia%20Scolastica"
verificato_il: "2026-11-20"
affidabilita: "media: dati per edificio dichiarati dagli enti proprietari, con molti 'NON DEFINITO' (circa 12% nell'infanzia per l'indicatore generale, 31% per l'ascensore)"
tags: [fonte, disabilita, accessibilita, open-data, infanzia, nazionale]
---
# MIM open data – Edilizia scolastica: superamento delle barriere architettoniche

**Cosa copre.** Per ogni coppia scuola-edificio statale: presenza di accorgimenti contro le barriere (rampe, ascensore, servoscala, bagni a norma, porte, percorsi). È **l'unica fonte aperta trovata con un indicatore di accessibilità per singola scuola**. **Non copre** scuole paritarie, nidi e sezioni primavera private. Non dice nulla su personale, sostegno o accessibilità sensoriale e comunicativa.

**Come si accede.** Catalogo open data del MIM, area "Edilizia scolastica", file `EDISUPBARARCSTA2021<AS>.csv`. Si collega alle scuole con il codice meccanografico (le scuole dell'infanzia hanno "AA" in 3ª e 4ª posizione) e agli edifici con il file `EDIANAGRAFESTA…` (anagrafica e localizzazione).

**Esempio di record** (codici pubblici, nessun dato personale):
`202425,TOAA8AP03Q,0011780010,SI,NO,SI,NO,NO,NO,SI,SI,SI,RAMPE TRA I LOCALI`

**Analisi per l'infanzia, file 2024/25** [fatto, calcolo mio]:
- 13.672 righe, 12.852 scuole dell'infanzia distinte.
- Accorgimenti contro le barriere: SI 11.238, NO 837, ND 1.597.
- Ascensore: SI 2.589, NO 6.780, ND 4.303.
- Bagni a norma: SI 8.651, NO 2.124, ND 2.897.

**Problemi noti.** "SI" per gli accorgimenti non significa accessibile secondo la definizione ISTAT (tutte le caratteristiche a norma). Ascensore "NO" può voler dire edificio a un solo piano. Il nesso con il plesso o punto di erogazione è ancora "in corso di aggiornamento" (nota MIM).

**Fonti.** Pagina del catalogo e CSV scaricati il 2026-11-20: https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/EDISUPBARARCSTA202120242520250806.csv
