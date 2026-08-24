# JWC Distribuição & Logística

<p align="center">
  <strong>Conectamos negócios, movemos resultados.</strong>
</p>

<p align="center">
  Frontend institucional da JWC Distribuição & Logística.
</p>

---

## 📋 Sobre o projeto

O projeto **JWC Distribuição & Logística** é o frontend institucional desenvolvido para apresentar a empresa, suas soluções, marcas e produtos, além de disponibilizar canais de contato com clientes e parceiros.

A aplicação foi desenvolvida com foco em:

- Experiência do usuário;
- Responsividade;
- Performance;
- Organização de código;
- Reutilização de componentes;
- Acessibilidade;
- Animações;
- Testabilidade;
- Facilidade de manutenção.

A plataforma apresenta a JWC como uma empresa de distribuição e logística, conectando marcas, fornecedores e estabelecimentos comerciais por meio de soluções de distribuição de alimentos congelados.

---

## 🚀 Funcionalidades

### 🏠 Página inicial

A página inicial apresenta:

- Hero institucional;
- Apresentação da empresa;
- Soluções oferecidas;
- Informações sobre atuação comercial;
- Informações sobre operação e logística;
- Chamadas para ação;
- Integração com WhatsApp.

### 🏢 Sobre nós

A página institucional apresenta:

- História e posicionamento da JWC;
- Informações sobre a atuação da empresa;
- Área comercial;
- Operação e logística;
- Integração com produtos e marcas;
- Links de navegação entre as áreas do site.

### 📦 Produtos

A página de produtos apresenta o portfólio da JWC dividido por marcas.

Marcas atualmente cadastradas:

- **Kipolpas**
- **Puro Sabor**
- **Amazon**
- **Peterfrut**
- **Palamaz**

Cada marca possui uma estrutura própria para apresentação de seus produtos.

### 📞 Contato

A página de contato disponibiliza:

- Informações de contato;
- E-mail;
- Telefone;
- Horário de atendimento;
- Formulário de contato;
- Seleção de assunto;
- Campo para mensagem;
- Atendimento via WhatsApp;
- Botão flutuante do WhatsApp.

### 💬 WhatsApp

A aplicação possui integração com o WhatsApp para facilitar o contato comercial.

Os principais pontos de acesso são:

- Botão flutuante;
- Botões de contato;
- Botão "Faça seu pedido";
- Links de atendimento.

---

# 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias modernas do ecossistema React.

### Frontend

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

### Estilização

- SCSS
- CSS
- Layout responsivo

### Animações

- [Framer Motion](https://motion.dev/)

Utilizado para criação de:

- Fade;
- Slide;
- Zoom;
- Stagger;
- Animações de entrada;
- Interações de botões;
- Animações durante o scroll.

### Navegação

- [React Router](https://reactrouter.com/)

Responsável pela navegação entre as páginas da aplicação.

### Ícones

- React Icons;
- SVGs personalizados;
- Assets próprios do projeto.

### Testes

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Testing Library DOM Matchers

### Qualidade de código

- ESLint
- TypeScript

### Deploy

- Vercel

---

# 📁 Estrutura do projeto

```text
frontend-jwc/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── Banners/
│   │       ├── icons/
│   │       └── ...
│   │
│   ├── presentation/
│   │   │
│   │   ├── animations/
│   │   │
│   │   ├── components/
│   │   │   ├── brandProducts/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── navigation/
│   │   │   ├── mobileMenu/
│   │   │   └── sections/
│   │   │
│   │   ├── database/
│   │   │   ├── amazon/
│   │   │   ├── kipolpas/
│   │   │   ├── palamaz/
│   │   │   ├── peterfrut/
│   │   │   └── puroSaber/
│   │   │
│   │   ├── fragments/
│   │   │   └── buttons/
│   │   │
│   │   └── pages/
│   │       ├── contato/
│   │       ├── home/
│   │       ├── produtos/
│   │       └── sobreNos/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
