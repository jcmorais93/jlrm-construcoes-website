/**
 * ÚNICO sítio onde vivem os dados da empresa e de contacto.
 * Para trocar os contactos reais, edita só este ficheiro.
 * Valores em `[PREENCHER: ...]` são placeholders e estão listados em TODO-CONTEUDO.md.
 */

const P = (desc: string) => `[PREENCHER: ${desc}]`;

export const site = {
  name: 'JLRM Construções, Unip., Lda.',
  shortName: 'JLRM Construções',
  locale: 'pt-PT',
  description: 'Construção civil em Felgueiras.',

  /** Dados legais (rodapé, JSON-LD). Validar com a certidão permanente. */
  legal: {
    nif: '515746274',
    capitalSocial: P('capital social'),
    conservatoria: P('conservatória do registo comercial'),
    alvara: '95281-PAR', // alvará de empreiteiro de obras particulares, inscrito em 01/04/2020
    alvaraClasse: '2', // subcategorias: ver IMPIC,
    foundingYear: P('ano de fundação (inscrição no IMPIC: 2020; confirmar constituição)'),
  },

  /** Contactos. Placeholders até o cliente validar os reais. */
  contact: {
    phone: P('telefone'), // ex.: '255 000 000'
    phoneHref: '', // ex.: 'tel:+351255000000'. Vazio = botão de ligar escondido
    email: P('email profissional'),
    address: {
      street: P('rua e número'),
      locality: 'Felgueiras' /* freguesia: Unhão (IMPIC) */,
      postalCode: P('código postal'),
      region: 'Porto',
      country: 'PT',
    },
  },

  /** Perfis reais, quando existirem (usados em JSON-LD sameAs). */
  social: [] as string[],

  /** Zonas confirmadas pelo cliente. Não adicionar sem confirmação. */
  areaServed: [] as string[],
};

/** true enquanto algum contacto ainda é placeholder */
export const hasPlaceholders = JSON.stringify(site).includes('[PREENCHER');

/** Navegação. Adicionar páginas aqui só quando existirem (Fase 2). */
export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Contactos', href: '/contactos' },
];

export const livroReclamacoesUrl = 'https://www.livroreclamacoes.pt/';
