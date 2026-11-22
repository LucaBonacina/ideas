import ExcelJS from 'exceljs';

export const URL_IPA_ENTI = 'https://indicepa.gov.it/ipa-dati/dataset/5baa3eb8-266e-455a-8de8-b1f434c279b2/resource/'
  + 'd09adf99-dc10-4349-8c53-27b1e5aa97b6/download/enti.xlsx';

/** Codice ISTAT del comune -> sito istituzionale, dall'Indice dei domicili della PA (IPA, CC-BY 4.0). */
export async function sitiComuni(contenuto: Buffer): Promise<Map<string, string>> {
  const libro = new ExcelJS.Workbook();
  await libro.xlsx.load(contenuto as unknown as ArrayBuffer);
  const foglio = libro.worksheets[0];
  const intestazione = Array.from(foglio.getRow(1).values as ExcelJS.CellValue[], (v) => String(v ?? ''));
  const col = (nome: string) => intestazione.indexOf(nome);
  const [iCategoria, iIstat, iSito] = [col('Codice_Categoria'), col('Codice_comune_ISTAT'), col('Sito_istituzionale')];
  const siti = new Map<string, string>();
  foglio.eachRow((riga, n) => {
    if (n === 1) return;
    const v = riga.values as ExcelJS.CellValue[];
    const istat = String(v[iIstat] ?? '').trim();
    const cella = v[iSito];
    const sito = (cella && typeof cella === 'object' && 'text' in cella ? String(cella.text) : String(cella ?? '')).trim();
    if (String(v[iCategoria] ?? '') !== 'L6' || !/^\d{6}$/.test(istat) || !sito) return;
    siti.set(istat, /^https?:\/\//i.test(sito) ? sito : `https://${sito}`);
  });
  return siti;
}
