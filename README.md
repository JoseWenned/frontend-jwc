# JWC Distribuição & Logística

Aplicação web institucional da **JWC Distribuição & Logística**, desenvolvida para apresentar a empresa, suas marcas parceiras, produtos, segmentos de atuação e canais de contato.

O projeto foi desenvolvido com **React + TypeScript**, utilizando uma arquitetura organizada por responsabilidades, testes automatizados e integração server-side para o formulário de contato.

---

## 📋 Sumário

* [Sobre o projeto](#-sobre-o-projeto)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias](#-tecnologias)
* [Arquitetura](#-arquitetura)
* [Estrutura do projeto](#-estrutura-do-projeto)
* [Rotas](#-rotas)
* [Instalação](#-instalação)
* [Ambiente de desenvolvimento](#-ambiente-de-desenvolvimento)
* [Variáveis de ambiente](#-variáveis-de-ambiente)
* [Testes](#-testes)
* [Build](#-build)
* [Deploy](#-deploy)
* [Documentação](#-documentação)
* [Boas práticas](#-boas-práticas)

---

## 🏢 Sobre o projeto

A JWC Distribuição & Logística atua na distribuição de produtos e no desenvolvimento de parcerias comerciais.

O site institucional foi desenvolvido para proporcionar uma apresentação profissional da empresa, permitindo que visitantes conheçam:

* a empresa;
* sua atuação comercial;
* sua operação logística;
* marcas parceiras;
* produtos distribuídos;
* segmentos atendidos;
* formas de contato.

A aplicação possui uma interface responsiva, animações e navegação entre páginas utilizando React Router.

---

## ✨ Funcionalidades

### Página inicial

Apresenta:

* banner institucional;
* apresentação da empresa;
* marcas parceiras;
* segmentos atendidos;
* diferenciais da JWC;
* soluções comerciais e logísticas;
* chamadas para contato.

### Sobre nós

Apresenta:

* posicionamento institucional;
* apresentação da empresa;
* informações comerciais;
* operação e logística;
* navegação por âncoras.

### Produtos

Apresenta:

* marcas parceiras;
* produtos disponíveis;
* informações dos produtos;
* navegação entre produtos;
* organização do catálogo por marca.

### Contato

Disponibiliza:

* formulário de contato;
* validação dos dados;
* envio das informações;
* integração com API server-side;
* envio das mensagens através do Resend.

---

## 🛠 Tecnologias

### Frontend

* React
* TypeScript
* Vite
* React Router
* SCSS
* Framer Motion
* React Icons

### Backend / API

* Vercel Functions
* Vercel Dev
* Resend

### Testes

* Vitest
* React Testing Library
* Testing Library User Event
* Playwright
* Chromium

### Qualidade

* TypeScript
* ESLint
* testes unitários;
* testes de integração;
* testes E2E.

---

## 🏗 Arquitetura

O projeto utiliza uma separação de responsabilidades entre apresentação, domínio e infraestrutura.

```text
┌─────────────────────────────┐
│        Presentation         │
│                             │
│ Pages / Components / Hooks  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          Domain             │
│                             │
│ Entities / Repositories     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Infrastructure        │
│                             │
│ Factories / Implementações  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Serviços externos     │
│                             │
│ API / Resend / Vercel       │
└─────────────────────────────┘
```

O fluxo do formulário de contato segue aproximadamente:

```text
ContatoPage
     ↓
useContactForm
     ↓
Factory
     ↓
Repository
     ↓
POST /api/contact
     ↓
Vercel Function
     ↓
Resend
```

Mais detalhes estão disponíveis em:

```text
docs/architecture.md
```

---

## 📁 Estrutura do projeto

```text
frontend-jwc/
│
├── api/
│   └── contact.ts
│
├── docs/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── database/
│   │
│   ├── domain/
│   │   ├── entities/
│   │   └── repositories/
│   │
│   ├── infrastructure/
│   │   ├── factories/
│   │   └── repositories/
│   │
│   ├── presentation/
│   │   ├── animations/
│   │   ├── components/
│   │   ├── fragments/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── styles/
│   │
│   ├── tests/
│   │   ├── integration/
│   │   └── setup.ts
│   │
│   └── main.tsx
│
├── playwright.config.ts
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🧭 Rotas

| Rota         | Descrição             |
| ------------ | --------------------- |
| `/`          | Página inicial        |
| `/sobre-nos` | Página institucional  |
| `/produtos`  | Catálogo de produtos  |
| `/contato`   | Formulário de contato |

### Âncoras

```text
/sobre-nos#comercial
```

Direciona para a seção Comercial.

```text
/sobre-nos#operacaoelogistica
```

Direciona para a seção de Operação e Logística.

```text
/produtos#marcas
```

Direciona para a área de marcas.

---

## 🚀 Instalação

Clone o projeto e entre na pasta:

```bash
git clone <URL_DO_REPOSITORIO>
cd frontend-jwc
```

Instale as dependências:

```bash
npm install
```

---

## 💻 Ambiente de desenvolvimento

O projeto possui dois ambientes locais quando é necessário testar a aplicação completa.

### Vite

O frontend roda na porta:

```text
http://localhost:5173
```

Para iniciar:

```bash
npm run dev
```

### Vercel Dev

A API server-side pode ser executada através do Vercel Dev:

```bash
vercel dev
```

Normalmente disponível em:

```text
http://localhost:3000
```

### Ambientes

```text
┌───────────────────────┐
│       Vite            │
│      :5173            │
│                       │
│   Aplicação React     │
└───────────────────────┘


┌───────────────────────┐
│     Vercel Dev        │
│       :3000           │
│                       │
│    /api/contact       │
└───────────────────────┘
```

O Vite é utilizado pelos testes E2E através do `baseURL` configurado no Playwright.

Os testes de integração que dependem da API de contato utilizam o ambiente Vercel Dev.

---

## 🔐 Variáveis de ambiente

A API de contato utiliza a variável:

```text
RESEND_API_KEY
```

Essa variável contém a chave privada utilizada para autenticação no Resend.

### Importante

A chave:

* não deve ser colocada no frontend;
* não deve possuir prefixo `VITE_`;
* não deve ser commitada;
* não deve aparecer em logs;
* deve existir apenas no ambiente server-side.

Exemplo:

```text
RESEND_API_KEY=sua_chave_aqui
```

---

## 🧪 Testes

O projeto possui três níveis de testes.

### Testes unitários

Executados através do Vitest.

```bash
npm run test
```

Execução única:

```bash
npm run test:run
```

Interface:

```bash
npm run test:ui
```

---

### Testes de integração

Os testes de integração verificam a comunicação entre diferentes partes da aplicação.

Um dos principais fluxos é o formulário de contato, que pode realizar integração com a API e Resend.

Localização:

```text
src/tests/integration/
```

Quando necessário, execute o Vercel Dev em outro terminal:

```bash
vercel dev
```

---

### Testes E2E

Os testes End-to-End utilizam Playwright.

Localização:

```text
src/tests/e2e/
```

Executar toda a suíte:

```bash
npx playwright test
```

Executar um arquivo específico:

```bash
npx playwright test src/tests/e2e/components/sectionTwo.spec.ts
```

Executar com navegador visível:

```bash
npx playwright test --headed
```

Abrir o relatório:

```bash
npx playwright show-report
```

### Resultado atual

A suíte E2E foi validada com:

```text
132 testes
132 passed
1 worker
```

---

## ⚙️ Configuração do Playwright

O Playwright utiliza:

```text
baseURL: http://localhost:5173
```

O servidor Vite é iniciado automaticamente pelo Playwright através do:

```text
webServer
```

A configuração utiliza um worker para manter a execução local determinística.

```text
fullyParallel: false
workers: 1
reuseExistingServer: false
```

Isso evita conflitos causados por múltiplos processos tentando utilizar o mesmo servidor local durante a execução da suíte.

---

## 🏗 Build

Para gerar a versão de produção:

```bash
npm run build
```

Para executar o preview:

```bash
npm run preview
```

Antes de publicar, recomenda-se executar:

```bash
npm run lint
npm run test:run
npm run build
npx playwright test
```

---

## ☁️ Deploy

A aplicação está preparada para utilização com a Vercel.

A função server-side de contato está localizada em:

```text
api/contact.ts
```

No ambiente de produção, configure:

```text
RESEND_API_KEY
```

Depois da configuração das variáveis de ambiente, realize um novo deploy quando necessário para que as funções recebam os valores atualizados.

---

## 📚 Documentação

A documentação técnica está organizada na pasta:

```text
docs/
```

Documentos disponíveis:

| Documento         | Descrição                           |
| ----------------- | ----------------------------------- |
| `architecture.md` | Arquitetura da aplicação            |
| `development.md`  | Ambiente e fluxo de desenvolvimento |
| `testing.md`      | Estratégia e execução dos testes    |
| `api-contact.md`  | API de contato e Resend             |
| `deployment.md`   | Build e publicação                  |
| `conventions.md`  | Convenções de desenvolvimento       |

---

## ✅ Boas práticas

Durante o desenvolvimento:

* mantenha as responsabilidades separadas;
* evite lógica de negócio diretamente nos componentes;
* mantenha integrações externas isoladas;
* não exponha credenciais no frontend;
* atualize os testes ao alterar funcionalidades;
* atualize a documentação quando houver mudanças arquiteturais;
* prefira seletores semânticos nos testes E2E;
* evite `waitForTimeout()` para resolver problemas de sincronização;
* execute lint, testes e build antes de publicar.

---

## 🔄 Fluxo recomendado

```text
Alteração
   ↓
Desenvolvimento
   ↓
Teste unitário
   ↓
Teste de integração
   ↓
Build
   ↓
Teste E2E
   ↓
Revisão
   ↓
Commit
   ↓
Deploy
```

---

## 📌 Status do projeto

O projeto possui:

* arquitetura organizada por responsabilidades;
* frontend React + TypeScript;
* API serverless para contato;
* integração com Resend;
* testes unitários;
* testes de integração;
* testes E2E;
* documentação técnica;
* configuração para desenvolvimento local e deploy.

---

**JWC Distribuição & Logística**

Desenvolvimento do website institucional.

