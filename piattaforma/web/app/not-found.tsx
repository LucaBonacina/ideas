import Link from 'next/link';

export default function NonTrovato() {
  return (
    <>
      <h1>Pagina non trovata</h1>
      <p className="tenue">Il comune o la struttura che cerchi non è nei nostri dati.</p>
      <Link href="/">Torna alla ricerca</Link>
    </>
  );
}
