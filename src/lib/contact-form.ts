/**
 * Formulário de contacto — MOCK.
 * Nenhum dado sai do browser. Para ligar ao envio real (Fase 2b), substituir o corpo de
 * `sendContact` por um fetch a uma Pages Function (/api/contacto) que valide o token do
 * Turnstile e envie o email pelo Resend (chaves em variáveis de ambiente, ver .env.example).
 */
export const MOCK = true;

export interface ContactPayload {
  nome: string; telefone: string; email: string;
  tipo: string; localizacao: string; mensagem: string;
}

export async function sendContact(_data: ContactPayload): Promise<{ ok: boolean }> {
  if (MOCK) {
    await new Promise((r) => setTimeout(r, 900));
    return { ok: true };
  }
  const res = await fetch('/api/contacto', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(_data) });
  return { ok: res.ok };
}

export function initContactForm(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    const f = new FormData(form);
    if (f.get('website')) return; // honeypot: bots preenchem este campo
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Verifique os campos assinalados e tente novamente.';
      status.classList.add('error');
      return;
    }
    btn.disabled = true;
    status.textContent = 'A enviar…';
    try {
      const r = await sendContact(Object.fromEntries(f) as unknown as ContactPayload);
      if (!r.ok) throw new Error('falhou');
      form.reset();
      status.textContent = MOCK
        ? 'Pedido recebido (modo de demonstração: nada foi enviado). Entraremos em contacto em breve.'
        : 'Pedido enviado com sucesso. Entraremos em contacto em breve.';
      status.classList.add('ok');
    } catch {
      status.textContent = 'Não foi possível enviar o pedido. Tente novamente ou contacte-nos por telefone.';
      status.classList.add('error');
    } finally {
      btn.disabled = false;
    }
  });
}
