import { normalizzaNome } from '../../../domain/normalizza';
import { Tipologia } from '../../../domain/tipologia.enum';

/**
 * Nomi propri frequenti: nelle denominazioni dei nidi privati gestiti da ditte individuali o società di persone
 * compare spesso il titolare ("Il Girotondo di Rossi Maria"), che non va ripubblicato.
 */
const NOMI_PROPRI = new Set(`
ADA ADELE ADRIANA AGATA AGNESE ALBA ALBERTO ALESSANDRA ALESSANDRO ALESSIA ALICE ALDO ALFREDO ALMA AMALIA AMBRA ANDREA
ANGELA ANGELO ANGELICA ANNA ANNALISA ANNAMARIA ANTONELLA ANTONIA ANTONIO ARIANNA ARMANDO ASIA AURORA BARBARA BEATRICE
BENEDETTA BIANCA BRUNA BRUNO CAMILLA CARLA CARLO CAROLINA CATERINA CECILIA CHIARA CINZIA CLARA CLAUDIA CLAUDIO CORRADO
COSTANZA CRISTIANA CRISTINA DANIELA DANIELE DARIO DEBORA DEBORAH DONATELLA EDOARDO ELENA ELEONORA ELISA ELISABETTA
EMANUELA EMANUELE EMMA ENRICA ENRICO ERICA ERIKA FABIANA FABIO FABRIZIA FABRIZIO FEDERICA FEDERICO FERNANDA FILOMENA
FLAVIA FRANCA FRANCESCA FRANCESCO FRANCO GABRIELE GABRIELLA GAIA GENNY GIADA GIANNA GIORGIA GIORGIO GIOVANNA GIOVANNI
GIULIA GIULIANA GIULIANO GIUSEPPE GIUSEPPINA GLORIA GRAZIA GRAZIELLA ILARIA IRENE ISABELLA IVANA JESSICA LAURA LETIZIA
LIDIA LILIANA LINDA LOREDANA LORENA LORENZO LUANA LUCA LUCIA LUCIANA LUCIANO LUIGI LUISA MANUELA MARA MARCELLA MARCO
MARGHERITA MARIA MARIANNA MARIANGELA MARINA MARIO MARISA MARTA MARTINA MASSIMO MATTEO MAURA MAURIZIO MELISSA MICHELA
MICHELE MIRELLA MONICA NADIA NATALIA NICOLETTA NOEMI ORNELLA PAMELA PAOLA PAOLO PATRIZIA PIERA PIETRO RAFFAELLA
RAFFAELE REBECCA RICCARDO RITA ROBERTA ROBERTO ROMINA ROSA ROSALBA ROSALIA ROSANNA ROSARIA ROSSANA SABRINA SANDRA
SARA SERENA SILVIA SIMONA SIMONE SOFIA STEFANIA STEFANO SUSANNA TAMARA TERESA TIZIANA VALENTINA VALERIA VANESSA
VERONICA VINCENZA VINCENZO VIOLA VIRGINIA VITTORIA VIVIANA
`.trim().split(/\s+/));

/** Forme giuridiche delle società di persone e delle srl, che nei nomi accompagnano i soci. */
const FORMA_GIURIDICA = /\b(s\.?\s?n\.?\s?c|s\.?\s?a\.?\s?s|s\.?\s?r\.?\s?l\.?\s?s?)\b\.?/i;

/** "di" seguito da almeno due parole fino alla fine o a un trattino (" - La Nuvoletta"). */
const COMPLEMENTO = /\s+di\s+([^-]+?)(?=\s+-\s+|\s*$)/gi;

/** Nomi propri che sono anche parole comuni ("Mandorlo rosa", "Villa Ada"): non bastano da soli a riconoscere una persona. */
const NOMI_AMBIGUI = new Set(['ADA', 'ALBA', 'AURORA', 'BIANCA', 'GAIA', 'GLORIA', 'ROSA', 'SERENA', 'VIOLA', 'VITTORIA']);

/** Parole con cui iniziano le denominazioni dei servizi ("Nido Lucia" non è un cognome). */
const PAROLE_COMUNI = new Set([
  'NIDO', 'ASILO', 'MICRONIDO', 'SCUOLA', 'CASA', 'VILLA', 'ISTITUTO', 'SANTA', 'SAN', 'SANTO', 'POLO', 'REGINA', 'PRINCIPE',
  'PRINCIPESSA', 'DON', 'PADRE', 'MADRE', 'SUOR', 'SORELLA', 'BEATA', 'BEATO',
]);

function nominaPersona(parole: string[], conFormaGiuridica: boolean): boolean {
  if (parole.length < 2) return false;
  // Con una società di persone il complemento nomina i soci, anche solo con le iniziali ("Rossi V. e Bianchi E.").
  if (conFormaGiuridica) return parole.some((p) => NOMI_PROPRI.has(p) || p.length === 1);
  return parole.length <= 4 && parole.some((p) => NOMI_PROPRI.has(p));
}

/** Denominazione fatta solo di cognome e nome, come la registra una ditta individuale ("Rossi Anna Maria"). */
function soloCognomeENome(parole: string[]): boolean {
  if (parole.length < 2 || parole.length > 3) return false;
  if (NOMI_PROPRI.has(parole[0]) || PAROLE_COMUNI.has(parole[0])) return false;
  return parole.slice(1).every((p) => NOMI_PROPRI.has(p) && !NOMI_AMBIGUI.has(p));
}

/**
 * Toglie dalla denominazione il nome del titolare persona fisica: "La Lumachina di Bianchella Noemi" -> "La Lumachina",
 * "Bimbi e coccole sas di De Bonis Serena" -> "Bimbi e coccole sas"; se la denominazione è solo cognome e nome
 * restituisce undefined. Vale solo per i servizi privati: i nidi pubblici intitolati a persone ("Pietro Micca") restano.
 */
export function denominazioneSenzaPersone(nome: string, privata: boolean): string | undefined {
  if (!privata) return nome.trim() || undefined;
  const forma = FORMA_GIURIDICA.test(nome);
  const ripulito = nome.replace(COMPLEMENTO, (intero, coda: string) => {
    const parole = normalizzaNome(coda.replace(FORMA_GIURIDICA, ' ').replace(/&\s*C\b\.?/gi, ' ')).split(' ')
      .filter((p) => p && p !== 'E');
    return nominaPersona(parole, forma) ? '' : intero;
  }).replace(/\s+-\s+/g, ' - ').replace(/^\s*-\s*|\s*-\s*$/g, '').trim();
  const parole = normalizzaNome(ripulito).split(' ').filter(Boolean);
  if (soloCognomeENome(parole)) return undefined;
  return ripulito || undefined;
}

const ETICHETTE: Partial<Record<Tipologia, string>> = {
  [Tipologia.NIDO]: 'Nido',
  [Tipologia.MICRONIDO]: 'Micronido',
  [Tipologia.SEZIONE_PRIMAVERA]: 'Sezione primavera',
  [Tipologia.SPAZIO_GIOCO]: 'Spazio gioco',
};

/** Nome da mostrare quando la denominazione manca o è solo il nome di una persona. */
export function nomeGenerico(tipologia: Tipologia, comune: string): string {
  return `${ETICHETTE[tipologia] ?? 'Servizio prima infanzia'} a ${comune}`;
}
