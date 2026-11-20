/**
 * Falha o build de produção se ainda existir conteúdo de demonstração.
 * QA_ALLOW_DEMO=1 desativa a verificação, só para medir (Lighthouse) com o site indexável. Nunca usar no deploy.
 */
export function assertNoDemo(isDemo: boolean, where: string) {
  if (isDemo && import.meta.env.PUBLIC_ENV === 'production' && !process.env.QA_ALLOW_DEMO) {
    throw new Error(`Conteúdo de demonstração em produção: ${where}. Remover antes do lançamento.`);
  }
}
