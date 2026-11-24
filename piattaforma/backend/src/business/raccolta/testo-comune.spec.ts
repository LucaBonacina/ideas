import { htmlInTesto, partiRilevanti } from './testo-comune';

describe('testo delle pagine comunali', () => {
  it('tiene il contenuto principale e scarta menu e script', () => {
    const html = '<html><head><title>Asili nido</title><script>x()</script></head><body><nav>Menu</nav>'
      + '<main><h1>Nidi comunali</h1><p>Nido &quot;Il Girasole&quot; &ndash; Via Roma 1</p>'
      + '<table><tr><td>Posti</td><td>40</td></tr></table></main><footer>Footer</footer></body></html>';
    const t = htmlInTesto(html);
    expect(t).toContain('Nido "Il Girasole" – Via Roma 1');
    expect(t).toContain('Posti | 40');
    expect(t).not.toMatch(/Menu|Footer|x\(\)/);
  });

  it('riduce i testi lunghi alle parti sui nidi', () => {
    const testo = `${'a'.repeat(10000)} asilo nido Il Girasole ${'b'.repeat(10000)}`;
    const parti = partiRilevanti(testo, 3000, 100);
    expect(parti).toContain('asilo nido Il Girasole');
    expect(parti.length).toBeLessThan(400);
    expect(partiRilevanti('niente di utile')).toBe('');
  });
});
