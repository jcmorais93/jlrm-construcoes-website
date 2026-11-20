# JLT Vieira — website

Site institucional (Astro, estático) de Joaquim Luís Teixeira Vieira, Lda., Felgueiras.

## Correr localmente
```bash
npm install
cp .env.example .env
npm run dev
```

## Build
```bash
npm run build && npm run preview
```

## Trocar contactos e dados da empresa
Editar apenas `src/config/site.ts`. Os valores `[PREENCHER: ...]` são placeholders; lista completa em `TODO-CONTEUDO.md`.

## Variáveis de ambiente
Ver `.env.example`. Nunca fazer commit de `.env`. Em produção configurar na Cloudflare.

## Indexação
Só é indexável com `PUBLIC_ENV=production`. Qualquer outro ambiente emite `noindex`; `public/robots.txt` bloqueia tudo até ao lançamento.

## Deploy
A definir na Fase 0 (Cloudflare, integração Git). Por documentar.

## Atualizar conteúdo
Por documentar (Content Collections, Fase 2).
