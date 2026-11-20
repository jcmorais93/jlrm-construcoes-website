// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL define o domínio canónico (sem barra final). Ver .env.example.
const site = process.env.SITE_URL || 'https://example.invalid';

export default defineConfig({
  site,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
