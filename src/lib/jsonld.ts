import { site } from '../config/site';

const isPlaceholder = (v: unknown) => typeof v === 'string' && v.includes('[PREENCHER');
const real = (v: string) => (v && !isPlaceholder(v) ? v : undefined);

/** Remove chaves undefined/vazias para nunca publicar placeholders nos dados estruturados. */
const clean = <T extends Record<string, unknown>>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)));

export function organizationLd(siteUrl: string) {
  const a = site.contact.address;
  const address = clean({
    '@type': 'PostalAddress',
    streetAddress: real(a.street),
    postalCode: real(a.postalCode),
    addressLocality: a.locality,
    addressRegion: a.region,
    addressCountry: a.country,
  });
  return clean({
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}/#organization`,
    name: site.name,
    url: siteUrl,
    telephone: real(site.contact.phone),
    email: real(site.contact.email),
    vatID: `PT${site.legal.nif}`,
    foundingDate: real(site.legal.foundingYear),
    address,
    areaServed: site.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    sameAs: site.social,
  });
}

export function breadcrumbLd(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Início', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: siteUrl + (it.path === '/' ? '/' : it.path),
    })),
  };
}
