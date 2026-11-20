import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const prod = import.meta.env.PUBLIC_ENV === 'production';
  const body = prod
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
