import type { APIRoute } from 'astro';
import { siteRoot } from '../lib/url';

export const GET: APIRoute = ({ site }) => {
  const prod = import.meta.env.PUBLIC_ENV === 'production';
  const body = prod
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteRoot(site!) + '/sitemap-index.xml'}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
