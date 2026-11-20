/**
 * Prefixo de caminho (base). Vazio no domínio próprio; "/jlrm-construcoes-website" no GitHub Pages.
 * Definido pela variável BASE_PATH no build (ver astro.config.mjs).
 */
export const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/** Caminho interno com o prefixo base. Ex.: u('/contactos') */
export const u = (path: string) => base + path;

/** Remove o prefixo base de um pathname. */
export const stripBase = (pathname: string) =>
  base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;

/** URL absoluto da raiz do site (origem + base), sem barra final. */
export const siteRoot = (site: URL) => site.origin + base;
