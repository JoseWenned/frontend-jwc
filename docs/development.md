# Guia de Desenvolvimento

Este documento apresenta as instruções necessárias para configurar, executar e testar o projeto **JWC Distribuição & Logística** em ambiente de desenvolvimento.

---

## 1. Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir:

* Node.js instalado
* npm instalado
* Git instalado
* Vercel CLI instalada
* Acesso às variáveis de ambiente necessárias

Para verificar as versões:

```bash
node -v
npm -v
git --version
vercel --version
```

---

## 2. Instalação do projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd frontend-jwc
```

Instale as dependências:

```bash
npm install
```

---

## 3. Variáveis de ambiente

As variáveis de ambiente utilizadas pela aplicação devem ser configuradas no ambiente de desenvolvimento.

Exemplo:

```env
RESEND_API_KEY=sua_chave_da_resend
```

A chave da API **não deve ser versionada no Git**.

O arquivo `.env.local` deve permanecer no `.gitignore`.

---

## 4. Executando a aplicação

A aplicação possui dois contextos de execução durante o desenvolvimento.

### 4.1. Frontend — Vite

O frontend é executado utilizando o Vite:

```bash
npm run dev
```

Por padrão, a aplicação fica disponível em:

```text
http://localhost:5173
```

Essa porta é utilizada principalmente para a execução da aplicação frontend e dos testes E2E.

---

### 4.2. Backend/API — Vercel Dev

As funções da API são executadas através do Vercel Dev:

```bash
vercel dev --listen 3000
```

A API fica disponível através de:

```text
http://localhost:3000
```

Esse ambiente é necessário para testar localmente as funções serverless, incluindo o endpoint de contato.

---

## 5. API de contato

O endpoint responsável pelo envio das mensagens do formulário de contato é:

```text
POST /api/contact
```

Exemplo de requisição:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teste JWC",
    "empresa": "JWC Distribuição",
    "email": "teste@example.com",
    "telefone": "(88) 99999-9999",
    "mensagem": "Mensagem de teste"
  }'
```

O endpoint utiliza a integração com o serviço de envio de e-mails configurado através da variável:

```env
RESEND_API_KEY
```

---

## 6. Testes unitários e de integração

Os testes unitários e de integração são executados através do Vitest.

Para executar os testes:

```bash
npm run test
```

Para executar uma única vez:

```bash
npx vitest run
```

Os testes de integração que utilizam a API de contato dependem do ambiente do Vercel Dev estar disponível na porta `3000`.

Portanto, antes de executar esses testes, mantenha o Vercel Dev em execução:

```bash
vercel dev --listen 3000
```

---

## 7. Testes End-to-End

Os testes E2E são executados utilizando Playwright.

```bash
npx playwright test
```

O Playwright utiliza:

```text
http://localhost:5173
```

como `baseURL`.

O próprio Playwright inicia o servidor Vite através da configuração definida em:

```text
playwright.config.ts
```

A configuração utiliza:

```ts
webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 5173",
    url: "http://localhost:5173",
    reuseExistingServer: false,
    timeout: 120_000,
}
```

Dessa forma, não é necessário iniciar manualmente o Vite para executar os testes E2E.

---

## 8. Relatório dos testes E2E

Após a execução dos testes Playwright, o relatório HTML pode ser aberto com:

```bash
npx playwright show-report
```

O relatório permite visualizar:

* testes aprovados;
* testes falhos;
* duração dos testes;
* screenshots de falhas;
* vídeos de falhas;
* traces quando disponíveis.

---

## 9. Execução recomendada durante o desenvolvimento

Para trabalhar normalmente com a aplicação:

### Terminal 1 — Frontend

```bash
npm run dev
```

Aplicação:

```text
http://localhost:5173
```

### Terminal 2 — API

```bash
vercel dev --listen 3000
```

API:

```text
http://localhost:3000
```

Com os dois ambientes ativos, é possível desenvolver e testar tanto a interface quanto as funcionalidades que dependem da API.

---

## 10. Executando todos os testes

### Testes unitários e integração

```bash
npm run test
```

### Testes E2E

```bash
npx playwright test
```

### Relatório E2E

```bash
npx playwright show-report
```

---

## 11. Build de produção

Antes de realizar um deploy, recomenda-se validar o build:

```bash
npm run build
```

Caso o build seja concluído sem erros, a aplicação estará pronta para o processo de deploy configurado no projeto.

---

## 12. Boas práticas

Durante o desenvolvimento:

* Não versionar arquivos `.env`;
* Não expor chaves da API no frontend;
* Executar os testes antes de realizar alterações importantes;
* Validar o build antes do deploy;
* Manter os testes E2E independentes entre si;
* Utilizar seletores acessíveis do Playwright sempre que possível;
* Evitar `waitForTimeout()` nos testes;
* Utilizar `expect()` para aguardar automaticamente elementos e estados;
* Manter a lógica de negócio separada dos componentes de apresentação;
* Documentar alterações relevantes na arquitetura.

---

## 13. Estrutura relacionada à documentação

A documentação técnica da aplicação está centralizada na pasta:

```text
docs/
```

Atualmente:

```text
docs/
└── architecture.md
```

Este arquivo complementa a documentação arquitetural com informações práticas sobre configuração, execução e testes do projeto.
