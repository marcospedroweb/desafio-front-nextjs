# App

Next.js style e-commerce/product app (grid de produtos, login, favoritos).

---

## RFs (Requisitos Funcionais)

- [x] **Autenticação**

  - [x] Página `/login` com campos email, senha, “manter logado” e link “esqueceu a senha?” (link não precisa funcionar).
  - [x] Chamar endpoint POST `/login`; em sucesso, salvar token e redirecionar para `/produtos`; em erro, exibir mensagem amigável.
  - [x] Bloquear acesso a `/produtos` sem token (redirecionamento automático para `/login`).

- [x] **Listagem de produtos**

  - [x] Buscar produtos via GET com token.
  - [x] Renderizar grid responsivo com: imagem, nome, código, preço, botão “CONFIRA”, selo “EXCLUSIVO!”.
  - [x] Implementar busca com debounce (300–500ms) por nome e/ou código via POST de listagem com filtros.
  - [x] Exibir estado vazio quando não houver resultados.
  - [x] Paginação ou infinite scroll (escolher abordagem) com loading incremental.
  - [x] Ordenação local por preço (asc/desc) e por nome (A→Z / Z→A).

- [x] **Detalhe rápido do produto**

  - [x] Ao clicar em “CONFIRA”, abrir Modal/Drawer com dados do item (usar dados do card ou complementar).
  - [x] Modal deve ter botão “Fechar” e ser acessível (focus trap, Esc fecha, aria-\*).

- [x] **Favoritos (persistência local)**

  - [x] Favoritar produtos com ícone/ação no card.
  - [x] Persistir em `localStorage` para manter favoritos após reload.
  - [x] Filtro “Mostrar apenas favoritos”.

- [x] **Estados da UI e erros**
  - [x] Skeleton/loading para primeira carga e carregamentos paginados.
  - [x] Exibir mensagem de erro com ação “Tentar novamente”.
  - [x] Logout e redirect ao `/login` em status 401.
  - [x] Formatar preço em BRL (ex.: R$ 4,60).

---

## RNs (Regras de Negócio)

- [x] Usuário sem token não pode acessar `/produtos`.
- [x] Busca deve respeitar debounce e filtros aplicados.
- [x] Favoritos devem ser persistidos localmente e reaparecer após reload.
- [ ] Modal de detalhe deve manter foco e ser acessível.
- [x] Paginação/infinite scroll deve carregar lotes corretamente sem duplicar itens.

---

## RNFs (Requisitos Não-Funcionais)

- [x] Next.js (app router ou pages, à escolha).
- [x] TypeScript.
- [x] Controle de estado global com Zustand.
- [x] Tailwind CSS ou Styled Components para consistência visual.
- [x] SWR ou React Query para cache, revalidação e estados de loading/erro.
- [x] Interceptador fetch/axios anexando `Authorization: Bearer <token>`.
- [x] Responsividade mobile-first.
- [x] Acessibilidade básica (labels, alt, foco visível).
- [x] SEO: `<title>` e `<meta name="description">` em `/login` e `/produtos`.
- [ ] Lighthouse ≥ 90 em Performance e Acessibilidade (desktop).

---

## Diferenciais (valem pontos extras)

- [ ] Roteamento protegido com HOC/middleware de auth (Next.js).
- [ ] Dark mode (toggle, preferências salvas).
- [ ] Code-splitting: modal carregada sob demanda.
- [ ] Testes:
  - [ ] 1–2 testes unitários (Vitest/Jest + React Testing Library) para componentes de UI.
  - [ ] 1 smoke E2E (Playwright) validando fluxo: login → ver grid.
- [ ] Tratamento refinado de estados (placeholder de imagem, retry/backoff).
- [x] Componente design-system simples (Button, Card, Input) reaproveitáveis.
