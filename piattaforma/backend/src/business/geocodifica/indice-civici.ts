import { normalizzaOdonimo, paroleOdonimo, IndirizzoScomposto } from './indirizzo';

export type PrecisioneGeocodifica = 'civico' | 'civico-vicino' | 'via';

export interface Geocodifica {
  lat: number;
  lon: number;
  precisione: PrecisioneGeocodifica;
  /** Fonte della coordinata, come scritta nello stradario (es. "ANNCSU@2026-11-02", "OSM_ITALIA"). */
  fonte: string;
  /** Odonimo dello stradario a cui è stato abbinato l'indirizzo. */
  odonimo: string;
}

interface Civico {
  numero: number;
  esponente: string;
  lat: number;
  lon: number;
  fonte: string;
}

/** Distanza massima tra civici per accettare il "civico vicino" sulla stessa via. */
const MAX_SCARTO_CIVICO = 10;

/** Una via senza civico si usa solo se è corta: oltre questo raggio (km) il punto direbbe poco o niente. */
const MAX_RAGGIO_VIA_KM = 0.75;

/** Tipi di via che le fonti scambiano tra loro ("Via Novi" e "Strada Novi"); tra famiglie diverse mai. */
const FAMIGLIE_DUG = [
  ['VIA', 'VIALE', 'STRADA', 'STRADONE', 'STRADELLA', 'CORSO', 'TRAVERSA', 'VICOLO', 'VICO', 'CONTRADA'],
  ['LOCALITA', 'FRAZIONE', 'REGIONE', 'BORGATA', 'CASCINA', 'CANTONE', 'CONTRADA', 'BORGO'],
  ['PIAZZA', 'PIAZZALE', 'PIAZZETTA', 'LARGO', 'PIAZZOLA'],
];

function stessaFamiglia(a: string, b: string): boolean {
  return FAMIGLIE_DUG.some((f) => f.includes(a) && f.includes(b));
}

export function distanzaKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180;
  const x = Math.sin(((lat2 - lat1) * r) / 2) ** 2
    + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(((lon2 - lon1) * r) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(x));
}

function mediana(valori: number[]): number {
  const o = [...valori].sort((a, b) => a - b);
  return o[Math.floor(o.length / 2)];
}

/** Indice dei civici di un comune per odonimo normalizzato. */
export class IndiceCivici {
  private readonly vie = new Map<string, Civico[]>();

  aggiungi(odonimo: string, civico: string, esponente: string, lat: number, lon: number, fonte: string): void {
    const numero = Number.parseInt(civico, 10);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
    const chiave = normalizzaOdonimo(odonimo);
    let lista = this.vie.get(chiave);
    if (!lista) {
      lista = [];
      this.vie.set(chiave, lista);
    }
    lista.push({
      numero: Number.isFinite(numero) ? numero : -1, esponente: esponente.trim().toUpperCase(), lat, lon, fonte,
    });
  }

  get numeroVie(): number {
    return this.vie.size;
  }

  private area?: { lat: number; lon: number; raggio: number };

  /**
   * Centro e raggio del comune ricavati dai civici stessi. Il centro è il gruppo più denso di civici
   * (celle di 0,1 gradi), non la mediana: in qualche comune lo stradario ha molti punti fuori posto
   * (es. civici siciliani con coordinate nel Lazio). Raggio: 95° percentile delle distanze entro 30 km, × 1,5.
   */
  private areaComune(): { lat: number; lon: number; raggio: number } {
    if (this.area) return this.area;
    const tutti = [...this.vie.values()].flat();
    const celle = new Map<string, number>();
    for (const c of tutti) {
      const k = `${Math.floor(c.lat * 10)}:${Math.floor(c.lon * 10)}`;
      celle.set(k, (celle.get(k) ?? 0) + 1);
    }
    const [migliore] = [...celle.entries()].sort((a, b) => b[1] - a[1])[0];
    const [la, lo] = migliore.split(':').map(Number);
    const cella = (v: number, centro: number): boolean => Math.abs(Math.floor(v * 10) - centro) <= 1;
    const vicini = tutti.filter((c) => cella(c.lat, la) && cella(c.lon, lo));
    const lat = mediana(vicini.map((c) => c.lat));
    const lon = mediana(vicini.map((c) => c.lon));
    const distanze = tutti.map((c) => distanzaKm(lat, lon, c.lat, c.lon)).filter((d) => d <= 30).sort((a, b) => a - b);
    const p95 = distanze[Math.floor(distanze.length * 0.95)] ?? 0;
    this.area = { lat, lon, raggio: Math.max(3, p95 * 1.5) };
    return this.area;
  }

  private dentroComune(c: { lat: number; lon: number }): boolean {
    const a = this.areaComune();
    return distanzaKm(a.lat, a.lon, c.lat, c.lon) <= a.raggio;
  }

  /**
   * Trova la via: prima per odonimo identico, poi per parole (tutte le parole dell'indirizzo devono stare
   * nell'odonimo dello stradario, stesso DUG se indicato, iniziali compatibili). Se più vie sono compatibili
   * allo stesso modo, nessuna: meglio nessuna coordinata che una sbagliata.
   */
  private via(odonimo: string): string | undefined {
    if (this.vie.has(odonimo)) return odonimo;
    const cercato = paroleOdonimo(odonimo);
    if (cercato.parole.length === 0) return undefined;
    // Prima con lo stesso DUG; se nessuna via è compatibile, con un DUG della stessa famiglia ("Via Novi", "STRADA NOVI").
    return this.unica(cercato, true) ?? (cercato.dug ? this.unica(cercato, false) : undefined);
  }

  private unica(cercato: ReturnType<typeof paroleOdonimo>, stessoDug: boolean): string | undefined {
    // Le parole dell'indirizzo che non sono forme unite ("DANNUNZIO") devono comparire tutte.
    const necessarie = cercato.parole.filter((p, i, tutte) => !tutte.some((q) => q !== p && p.length > q.length
      && p.endsWith(q)));
    let migliori: string[] = [];
    let punteggio = Number.POSITIVE_INFINITY;
    for (const nome of this.vie.keys()) {
      const c = paroleOdonimo(nome);
      if (cercato.dug && c.dug && cercato.dug !== c.dug && (stessoDug || !stessaFamiglia(cercato.dug, c.dug))) continue;
      // Una parola va bene se è uguale o se le manca solo l'ultima lettera ("CARDINAL" e "CARDINALE").
      const presente = (p: string): boolean => c.parole.some((x) => x === p
        || (p.length >= 5 && x.length === p.length + 1 && x.startsWith(p)));
      if (!necessarie.every(presente)) continue;
      // Le iniziali ("F. ANTOLISEI", "S. GIACOMO") vanno sciolte con parole che stanno prima delle parole cercate.
      const ordine = nome.split(' ');
      const primaCercata = Math.min(...necessarie.map((p) => {
        const i = ordine.findIndex((x) => x === p || x.startsWith(p));
        return i < 0 ? Number.POSITIVE_INFINITY : i;
      }));
      const prima = ordine.slice(0, primaCercata).filter((x) => !necessarie.includes(x));
      if (!cercato.iniziali.every((i) => prima.some((p) => p.startsWith(i)))) continue;
      const extra = c.parole.length - necessarie.length;
      if (extra < punteggio) {
        punteggio = extra;
        migliori = [nome];
      } else if (extra === punteggio) migliori.push(nome);
    }
    return migliori.length === 1 ? migliori[0] : undefined;
  }

  trova(indirizzo: IndirizzoScomposto): Geocodifica | undefined {
    const nome = this.via(indirizzo.odonimo);
    if (!nome) return undefined;
    const civici = this.vie.get(nome)!.filter((c) => this.dentroComune(c));
    if (civici.length === 0) return undefined;
    type Punto = { lat: number; lon: number; fonte: string };
    const risultato = (c: Punto, precisione: PrecisioneGeocodifica): Geocodifica => ({
      lat: c.lat, lon: c.lon, precisione, fonte: c.fonte, odonimo: nome,
    });
    if (indirizzo.civico !== undefined) {
      const stessi = civici.filter((c) => c.numero === indirizzo.civico);
      const esp = (indirizzo.esponente ?? '').toUpperCase();
      const esatto = stessi.find((c) => c.esponente === esp) ?? stessi.find((c) => c.esponente === '') ?? stessi[0];
      if (esatto) return risultato(esatto, 'civico');
      // Civico mancante nello stradario: il più vicino sullo stesso lato (stessa parità), entro un piccolo scarto.
      const vicini = civici.filter((c) => c.numero > 0 && c.numero % 2 === indirizzo.civico! % 2
        && Math.abs(c.numero - indirizzo.civico!) <= MAX_SCARTO_CIVICO)
        .sort((a, b) => Math.abs(a.numero - indirizzo.civico!) - Math.abs(b.numero - indirizzo.civico!));
      if (vicini[0]) return risultato(vicini[0], 'civico-vicino');
    }
    // Solo la via: il punto mediano, se la via è abbastanza corta da dire qualcosa.
    const lat = mediana(civici.map((c) => c.lat));
    const lon = mediana(civici.map((c) => c.lon));
    const raggio = civici.map((c) => distanzaKm(lat, lon, c.lat, c.lon)).sort((a, b) => a - b)[
      Math.floor(civici.length * 0.9)] ?? 0;
    if (raggio > MAX_RAGGIO_VIA_KM) return undefined;
    return risultato({ lat, lon, fonte: civici[0].fonte }, 'via');
  }
}
