# Conteúdo por preencher

Todos os dados abaixo vivem em `src/config/site.ts` (procurar `[PREENCHER`).

## Contactos (omitidos de propósito na fase inicial)
- [ ] Telefone (+ `phoneHref`)
- [ ] Email profissional (propor domínio próprio)
- [ ] Morada completa (IMPIC: Rua Bouça 90, Unhão, 4650-658 Felgueiras; confirmar e decidir se se publica)

## Dados legais
- [ ] Subcategorias do alvará 95281-PAR (classe 2, do IMPIC)
- [ ] Confirmar se fazem obras públicas (o alvará é só de obras particulares; não criar essa página sem alvará próprio)
- [ ] Conservatória do registo comercial
- [ ] Ano de fundação / constituição (IMPIC: inscrição em 2020)
- [ ] Capital social
- [ ] Confirmar NIF 515746274 na certidão permanente

## Conteúdo
- [ ] Logótipo e cores
- [ ] Fotos de obras (com autorização) e descrições
- [ ] Zonas de atuação reais
- [ ] Serviços a destacar; obras públicas? remodelações?
- [ ] Gerente/equipa a mostrar
- [ ] Quem recebe os pedidos de orçamento
- [ ] Quem gere o Google Business Profile
- [ ] Textos das páginas (sobre, serviços ≥ ~400 palavras cada)
- [ ] Descrição da meta description da página inicial
- [ ] Imagem de partilha 1200×630 (public/og-default.png é um placeholder liso)
- [ ] Páginas /sobre, /servicos, /obras, /qualificacoes, /politica-de-privacidade (o rodapé já liga à de privacidade; ainda não existe)
- [ ] Fontes (por agora tipo de letra do sistema)

## Conteúdo de DEMONSTRAÇÃO a substituir antes do lançamento
- [ ] `src/content/obras/*.md` (todas com `demo: true`) e `public/demo/*.svg`: trocar por obras e fotos reais autorizadas
- [ ] Textos de `/servicos/*`: validar com o cliente e acrescentar factos reais (≥ ~400 palavras)
- [ ] `showDemoBanner = false` em `src/config/site.ts`
- O build com `PUBLIC_ENV=production` falha enquanto existir uma obra com `demo: true`.
