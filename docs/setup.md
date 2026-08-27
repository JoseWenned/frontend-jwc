# Configuração e Execução do Projeto

Este documento descreve os requisitos, instalação, configuração das variáveis de ambiente e comandos necessários para executar o projeto **JWC Distribuição & Logística** em ambiente local.

---

## 1. Requisitos

Antes de executar o projeto, certifique-se de possuir:

* Node.js instalado
* npm instalado
* Git instalado
* Conta configurada na Vercel, quando necessário para execução das funções de API
* Chave de API do Resend para o envio de mensagens do formulário de contato

Para verificar as versões instaladas:

```bash
node --version
npm --version
git --version
```

---

## 2. Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório do projeto:

```bash
cd frontend-jwc
```

Instale as dependências:

```bash
npm install
```

---

## 3. Variáveis de Ambiente

As variáveis de ambiente utilizadas pela aplicação não devem ser versionadas no Git.

Para desenvolvimento local, configure a chave do Resend conforme a estratégia de ambiente utilizada pelo projeto.

Exemplo:

```env
RESEND_API_KEY=sua_chave_do_resend
```

O arquivo `.env.local` deve permanecer fora do versionamento.

Verifique se ele está incluído no `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

### Vercel

Como a aplicação possui uma API executada através da estrutura da Vercel, a variável `RESEND_API_KEY` também deve estar configurada nos ambientes necessários da Vercel:

* Development
* Preview
* Production

A configuração pode ser verificada utilizando a CLI da Vercel:

```bash
vercel env ls
```

---

## 4. Execução da aplicação

A aplicação frontend utiliza o Vite durante o desenvolvimento.

Execute:

```bash
npm run dev
```

Por padrão, a aplicação fica disponível em:

```text
http://localhost:5173
```

A porta `5173` é utilizada pelos testes E2E do Playwright.

---

## 5. Execução da API com Vercel Dev

As funções de API da aplicação são executadas localmente através do Vercel Dev.

Execute em um terminal separado:

```bash
vercel dev
```

A API fica disponível através do ambiente local da Vercel, normalmente em:

```text
http://localhost:3000
```

Essa etapa é necessária para executar localmente os testes de integração que dependem das funções de API e do serviço de envio de e-mails.

---

## 6. Execução dos testes unitários e de integração

Os testes unitários e de integração podem ser executados com:

```bash
npm run test
```

Esses testes utilizam o Vitest.

Os testes de integração relacionados ao envio de mensagens precisam que o ambiente necessário da API esteja disponível.

---

## 7. Execução dos testes E2E

Os testes End-to-End utilizam Playwright.

Para executar todos os testes E2E:

```bash
npx playwright test
```

O Playwright inicia automaticamente o servidor Vite configurado em `playwright.config.ts`.

A configuração atual utiliza:

```text
http://localhost:5173
```

O Playwright também está configurado para iniciar uma nova instância do servidor durante a execução dos testes:

```ts
webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 5173",
    url: "http://localhost:5173",
    reuseExistingServer: false,
    timeout: 120_000,
},
```

Por isso, não é necessário manter manualmente o Vite rodando para executar os testes E2E.

---

## 8. Relatório dos testes E2E

Após a execução dos testes, o Playwright gera um relatório HTML.

Para abrir o relatório:

```bash
npx playwright show-report
```

O relatório permite visualizar:

* testes aprovados;
* testes com falha;
* tempo de execução;
* screenshots de falhas;
* traces, quando disponíveis;
* vídeos de testes que falharam, conforme configuração.

---

## 9. Fluxo recomendado durante o desenvolvimento

Para desenvolvimento normal da aplicação:

### Terminal 1 — Frontend

```bash
npm run dev
```

Acesse:

```text
http://localhost:5173
```

### Terminal 2 — API / Vercel

```bash
vercel dev
```

Acesse:

```text
http://localhost:3000
```

Essa configuração permite trabalhar simultaneamente com:

```text
Frontend
    ↓
Vite
    ↓
localhost:5173


API
    ↓
Vercel Dev
    ↓
localhost:3000
    ↓
Resend
```

---

## 10. Fluxo recomendado para testes

### Testes unitários e integração

Com o Vercel Dev disponível quando necessário:

```bash
vercel dev
```

Em outro terminal:

```bash
npm run test
```

### Testes E2E

Os testes E2E podem ser executados diretamente:

```bash
npx playwright test
```

O Playwright gerencia automaticamente o servidor Vite definido em sua configuração.

---

## 11. Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O comando deve finalizar sem erros de TypeScript ou de build.

Para visualizar uma versão construída localmente, utilize o comando de preview definido pelo projeto:

```bash
npm run preview
```

---

## 12. Verificação antes do commit

Antes de enviar alterações para o repositório, recomenda-se executar:

```bash
npm run build
```

Depois:

```bash
npm run test
```

E, quando houver alterações relacionadas à interface ou navegação:

```bash
npx playwright test
```

Também é recomendado verificar o estado do Git:

```bash
git status
```

---

## 13. Boas práticas

* Nunca versionar chaves de API.
* Nunca colocar `RESEND_API_KEY` diretamente no código-fonte.
* Manter `.env.local` fora do Git.
* Executar os testes após alterações relevantes.
* Executar o build antes de publicar.
* Manter a configuração do Playwright sincronizada com a porta utilizada pelo frontend.
* Manter o ambiente da Vercel configurado quando forem executados testes que dependam da API.
* Não utilizar dados reais de clientes nos testes automatizados.

---

## 14. Resumo dos principais comandos

| Objetivo                    | Comando                      |
| --------------------------- | ---------------------------- |
| Instalar dependências       | `npm install`                |
| Executar frontend           | `npm run dev`                |
| Executar Vercel localmente  | `vercel dev`                 |
| Testes unitários/integração | `npm run test`               |
| Testes E2E                  | `npx playwright test`        |
| Relatório Playwright        | `npx playwright show-report` |
| Build                       | `npm run build`              |
| Preview                     | `npm run preview`            |
| Verificar Git               | `git status`                 |

---

## 15. Arquitetura dos ambientes locais

Durante o desenvolvimento, os principais serviços podem ser representados da seguinte forma:

```text
                    JWC Distribuição & Logística
                              │
                              ▼
                         Frontend React
                              │
                              ▼
                       Vite — :5173
                              │
                              │
                              ▼
                       Aplicação Web
                              │
                              ▼
                       API / Contact
                              │
                              ▼
                     Vercel Dev — :3000
                              │
                              ▼
                           Resend
                              │
                              ▼
                    Envio de e-mails
```

Os testes E2E validam principalmente o comportamento da aplicação através do frontend, enquanto os testes de integração podem validar a comunicação com a camada de API e serviços externos.
