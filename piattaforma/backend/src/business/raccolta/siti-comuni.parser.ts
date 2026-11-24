import ExcelJS from 'exceljs';

export const URL_IPA_ENTI = 'https://indicepa.gov.it/ipa-dati/dataset/5baa3eb8-266e-455a-8de8-b1f434c279b2/resource/'
  + 'd09adf99-dc10-4349-8c53-27b1e5aa97b6/download/enti.xlsx';

/**
 * Codice catastale del comune -> sito istituzionale, dall'Indice dei domicili della PA (IPA, CC-BY 4.0).
 * Si usa il codice catastale e non quello ISTAT: dopo il riordino delle province sarde l'IPA ha già i nuovi codici
 * ISTAT (Cagliari 118006) mentre i conteggi ISTAT dei servizi usano i vecchi (092009); il catastale non cambia.
 */
export async function sitiComuni(contenuto: Buffer): Promise<Map<string, string>> {
  const libro = new ExcelJS.Workbook();
  await libro.xlsx.load(contenuto as unknown as ArrayBuffer);
  const foglio = libro.worksheets[0];
  const intestazione = Array.from(foglio.getRow(1).values as ExcelJS.CellValue[], (v) => String(v ?? ''));
  const col = (nome: string) => intestazione.indexOf(nome);
  const [iCategoria, iCatastale, iSito] = [col('Codice_Categoria'), col('Codice_catastale_comune'), col('Sito_istituzionale')];
  const siti = new Map<string, string>();
  foglio.eachRow((riga, n) => {
    if (n === 1) return;
    const v = riga.values as ExcelJS.CellValue[];
    const catastale = String(v[iCatastale] ?? '').trim().toUpperCase();
    const cella = v[iSito];
    const sito = (cella && typeof cella === 'object' && 'text' in cella ? String(cella.text) : String(cella ?? '')).trim();
    if (String(v[iCategoria] ?? '') !== 'L6' || !/^[A-Z]\d{3}$/.test(catastale) || !sito) return;
    siti.set(catastale, /^https?:\/\//i.test(sito) ? sito : `https://${sito}`);
  });
  return siti;
}
