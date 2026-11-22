/** Una parola o frase del PDF con la sua posizione (origine in basso a sinistra, come in PDF). */
export interface ElementoPdf {
  testo: string;
  x: number;
  y: number;
}

type PdfJs = typeof import('pdfjs-dist/legacy/build/pdf.mjs');

// pdf.js è un modulo ESM: con "commonjs" TypeScript trasformerebbe import() in require(), quindi lo si carica così.
// eslint-disable-next-line no-new-func -- unico modo per un import() vero da un modulo CommonJS
const importaEsm = new Function('modulo', 'return import(modulo)') as (m: string) => Promise<PdfJs>;

/** Estrae il testo di ogni pagina con le coordinate, per ricostruire le tabelle. */
export async function elementiPdf(contenuto: Buffer): Promise<ElementoPdf[][]> {
  const pdfjs = await importaEsm('pdfjs-dist/legacy/build/pdf.mjs');
  const documento = await pdfjs.getDocument({ data: new Uint8Array(contenuto), verbosity: 0 }).promise;
  const pagine: ElementoPdf[][] = [];
  for (let n = 1; n <= documento.numPages; n += 1) {
    const contenutoPagina = await (await documento.getPage(n)).getTextContent();
    pagine.push(contenutoPagina.items
      .filter((i): i is typeof i & { str: string; transform: number[] } => 'str' in i && i.str.trim() !== '')
      .map((i) => ({ testo: i.str.trim(), x: i.transform[4], y: i.transform[5] })));
  }
  await documento.destroy();
  return pagine;
}
