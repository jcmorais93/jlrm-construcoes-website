import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const obras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/obras' }),
  schema: z.object({
    title: z.string(),
    tipo: z.enum(['construcao', 'remodelacao']),
    local: z.string(),
    summary: z.string(),
    image: z.string(),
    alt: z.string(),
    /** true = conteúdo fictício de demonstração. O build de produção falha se existir. */
    demo: z.boolean().default(false),
  }),
});

export const collections = { obras };
