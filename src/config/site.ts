/**
 * ÚNICO sítio onde vivem os dados da empresa e de contacto.
 * Para trocar os contactos reais, edita só este ficheiro.
 * Valores em `[PREENCHER: ...]` são placeholders e estão listados em TODO-CONTEUDO.md.
 */

const P = (desc: string) => `[PREENCHER: ${desc}]`;

export const site = {
  name: 'Joaquim Luís Teixeira Vieira, Lda.',
  shortName: 'JLT Vieira',
  locale: 'pt-PT',
  description: 'Construção civil em Felgueiras.',

  /** Dados legais (rodapé, JSON-LD). Validar com a certidão permanente. */
  legal: {
    nif: '505685604',
    capitalSocial: '55.000 €',
    conservatoria: P('conservatória do registo comercial'),
    alvara: '44583',
    alvaraClasse: P('classe e subcategorias do alvará (IMPIC)'),
    foundingYear: P('ano de fundação (a confirmar; fontes indicam 2001)'),
  },

  /** Contactos. Placeholders até o cliente validar os reais. */
  contact: {
    phone: P('telefone'), // ex.: '255 000 000'
    phoneHref: '', // ex.: 'tel:+351255000000'. Vazio = botão de ligar escondido
    email: P('email profissional'),
    address: {
      street: P('rua e número'),
      locality: 'Felgueiras',
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
