/** Falha o build de produção se ainda existir conteúdo de demonstração. */
export function assertNoDemo(isDemo: boolean, where: string) {
  if (isDemo && import.meta.env.PUBLIC_ENV === 'production') {
    throw new Error(`Conteúdo de demonstração em produção: ${where}. Remover antes do lançamento.`);
  }
}
