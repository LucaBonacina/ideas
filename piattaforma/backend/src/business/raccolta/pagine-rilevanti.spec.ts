import { linkDi, rilevante, urlDaSitemap } from './pagine-rilevanti';
import { Robots } from './robots';

describe('ricerca delle pagine sui nidi nei siti comunali', () => {
  it('riconosce le pagine pertinenti ed esclude gli atti di gara', () => {
    expect(rilevante('https://www.comune.x.it/servizi/asilo-nido-comunale')).toBe(true);
    expect(rilevante('https://www.comune.x.it/page/123', 'Servizi per la prima infanzia')).toBe(true);
    expect(rilevante('https://www.comune.x.it/sezioni_primavera.html')).toBe(true);
    expect(rilevante('https://www.comune.x.it/bandi/gara-asilo-nido-cig-123')).toBe(false);
    expect(rilevante('https://www.comune.x.it/tributi/imu')).toBe(false);
    expect(rilevante('https://www.comune.napoli.it/vivere-il-comune/luoghi/nido-novelli/')).toBe(true);
    expect(rilevante('https://smart.comune.genova.it/notizie/ammessi-prova-assistenti-asili-nido')).toBe(false);
  });

  it('estrae link e sitemap', () => {
    const html = '<a href="/scuola/nidi">I <b>nidi</b></a> <a href="https://altro.it/x">x</a>';
    expect(linkDi(html, 'https://www.comune.x.it/home')).toEqual([
      { url: 'https://www.comune.x.it/scuola/nidi', testo: 'I nidi' },
      { url: 'https://altro.it/x', testo: 'x' },
    ]);
    expect(urlDaSitemap('<urlset><url><loc>https://a.it/b?x=1&amp;y=2</loc></url></urlset>')).toEqual(['https://a.it/b?x=1&y=2']);
    expect(urlDaSitemap('<sitemap><loc><![CDATA[https://a.it/page-sitemap.xml]]></loc></sitemap>')).toEqual(['https://a.it/page-sitemap.xml']);
  });

  it('rispetta robots.txt', () => {
    const r = new Robots('User-agent: Googlebot\nDisallow: /\n\nUser-agent: *\nDisallow: /area-riservata\nSitemap: https://a.it/sitemap.xml');
    expect(r.consentito('/servizi/nidi')).toBe(true);
    expect(r.consentito('/area-riservata/x')).toBe(false);
    expect(r.sitemap).toEqual(['https://a.it/sitemap.xml']);
    const wp = new Robots('User-agent: *\nDisallow: /wp-admin/\nDisallow: /*?s=\nDisallow: /*.pdf$');
    expect(wp.consentito('/vivere-il-comune/luoghi/nido-novelli/')).toBe(true);
    expect(wp.consentito('/?s=nido')).toBe(false);
    expect(wp.consentito('/wp-admin/x')).toBe(false);
    expect(wp.consentito('/a/b.pdf')).toBe(false);
    expect(wp.consentito('/a/b.pdf?x=1')).toBe(true);
  });
});
