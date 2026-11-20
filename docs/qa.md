# Relatório de QA — Fase 3

Data: 2026-11-20. Medido sobre build estático local (`astro preview`), com `PUBLIC_ENV=production` e `QA_ALLOW_DEMO=1` (para o site ficar indexável; ver nota abaixo). Lighthouse (Chrome headless), emulação mobile.

## Lighthouse mobile (10 páginas)
| Página | Perf | A11y | Boas práticas | SEO | LCP |
|---|---|---|---|---|---|
| / | 100 | 100 | 100 | 100 | 1,2 s |
| /obras | 99 | 100 | 100 | 100 | 1,8 s |
| /servicos | 100 | 100 | 100 | 100 | 1,2 s |
| /servicos/construcao-de-moradias | 100 | 100 | 100 | 100 | 1,2 s |
| /zonas-de-atuacao | 100 | 100 | 100 | 100 | 1,2 s |
| /qualificacoes | 100 | 100 | 100 | 100 | 1,3 s |
| /politica-de-privacidade | 100 | 100 | 100 | 100 | 1,2 s |
| /contactos | 100 | 100 | 100 | 100 | 1,2 s |
| /sobre | 100 | 100 | 100 | 100 | 1,2 s |
| /obras/moradia-t4-felgueiras | 100 | 100 | 100 | 100 | 1,2 s |

CLS ≤ 0,015 e TBT 0 ms em todas. Meta (≥ 95 nas 4 categorias): cumprida.
Problemas encontrados e corrigidos: ordem de títulos (h1 → h3) em `/obras` e `/servicos`.

## Verificações automáticas ao HTML gerado (17 páginas)
- Um único `<h1>` por página, `lang="pt-PT"`, títulos, descrições e canónicos únicos.
- Títulos ≤ 60 e descrições ≤ 155 caracteres (3 títulos encurtados).
- Todas as `<img>` com `alt`, `width` e `height`.
- Sem links internos quebrados.
- JSON-LD válido (JSON bem formado): `GeneralContractor` (início, contactos), `BreadcrumbList` (internas), `Service` (serviços). Sem placeholders nos dados estruturados. Corrigido: `Service.provider` apontava para um `@id` não definido na própria página.
- `sitemap.xml` com as 16 páginas (sem 404); `robots.txt` aponta para o sitemap em produção.

## Não verificado (a fazer)
- Rich Results Test e Schema Validator (requerem URL pública): fazer após o primeiro deploy.
- `_headers`, HSTS e redirecionamentos (www, HTTP→HTTPS) só se podem testar na Cloudflare.
- Teste em telemóvel real, navegação por teclado completa e leitor de ecrã (só o Lighthouse/axe automático foi corrido).
- Formulário: é MOCK (nada é enviado). Os testes de spam, erro e sucesso reais ficam para quando houver Turnstile e envio por email. O mock foi testado: validação, sucesso, limpeza.
- Search Console e Bing Webmaster (Fase 4).

## Nota sobre conteúdo de demonstração
O build de produção falha de propósito enquanto existirem obras com `demo: true`. `QA_ALLOW_DEMO=1` contorna isto apenas para medir; nunca usar no deploy.
