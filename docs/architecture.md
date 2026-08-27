# Arquitetura da Aplicação

A aplicação da **JWC Distribuição & Logística** utiliza uma organização baseada em separação de responsabilidades, buscando manter a interface, as regras de negócio, os casos de uso e as integrações externas desacoplados.

A estrutura principal do projeto está organizada da seguinte forma:

```text
src/
├── assets/
├── database/
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

## 1. Assets

Responsável pelos recursos estáticos utilizados pela aplicação.

```text
src/assets/
```

Exemplos:

* imagens;
* logotipos;
* banners;
* ícones;
* demais recursos visuais.

Essa camada não contém regras de negócio.

---

## 2. Database

Responsável pelas estruturas relacionadas aos dados estáticos ou fontes de dados utilizadas pela aplicação.

```text
src/database/
```

Essa camada pode concentrar informações como:

* produtos;
* marcas;
* informações institucionais;
* dados utilizados para composição das páginas.

Os dados são mantidos separados da camada de apresentação para evitar que os componentes React concentrem informações que não pertencem à interface.

---

## 3. Domain

A camada `domain` representa o núcleo conceitual da aplicação.

```text
src/domain/
```

Sua responsabilidade é representar conceitos e regras pertencentes ao domínio da JWC Distribuição & Logística.

Essa camada deve permanecer independente de detalhes de interface, frameworks e serviços externos.

Exemplos de conceitos que podem pertencer ao domínio:

* contato;
* mensagem;
* cliente;
* empresa;
* produto;
* marca.

O objetivo é fazer com que as regras fundamentais da aplicação não dependam de React, Vite, Vercel, Resend ou qualquer outro detalhe de infraestrutura.

---

## 4. Application

A camada `application` representa os **casos de uso da aplicação**.

```text
src/application/
└── usecases/
```

Ela funciona como uma camada intermediária entre a apresentação e o domínio/infraestrutura, organizando as ações que a aplicação pode executar.

### Responsabilidades

A camada de aplicação deve:

* coordenar fluxos da aplicação;
* executar casos de uso;
* receber dados de entrada;
* validar ou coordenar regras necessárias ao fluxo;
* chamar serviços ou abstrações necessárias;
* devolver resultados para quem solicitou a operação.

Ela **não deve conhecer detalhes da interface**, como componentes React ou elementos HTML.

Também deve evitar concentrar detalhes específicos de infraestrutura dentro dos casos de uso.

### Use Cases

Os casos de uso representam ações específicas que o sistema executa.

Atualmente, o projeto possui o caso de uso relacionado ao envio de mensagens do formulário de contato:

```text
src/application/usecases/contato/
├── sendMessageContact.usecases.ts
└── sendMessageContact.test.ts
```

O arquivo:

```text
sendMessageContact.usecases.ts
```

é responsável por representar o fluxo de envio de uma mensagem de contato.

O teste:

```text
sendMessageContact.test.ts
```

valida o comportamento desse caso de uso de forma isolada.

Essa separação permite que a regra de envio não fique diretamente acoplada ao componente visual do formulário.

### Fluxo do caso de uso

De forma simplificada:

```text
Página de Contato
       │
       ▼
Hook / Controller
       │
       ▼
SendMessageContactUseCase
       │
       ▼
Serviço / Abstração de infraestrutura
       │
       ▼
API
       │
       ▼
Resend
```

Essa abordagem permite substituir ou alterar a tecnologia responsável pelo envio sem precisar modificar toda a interface da aplicação.

---

## 5. Infrastructure

A camada `infrastructure` concentra detalhes técnicos e integrações externas.

```text
src/infrastructure/
```

Ela é responsável por implementar mecanismos necessários para que a aplicação converse com recursos externos.

Exemplos:

* serviços HTTP;
* integrações com APIs;
* clientes de serviços externos;
* implementações relacionadas ao envio de mensagens;
* configurações técnicas.

A infraestrutura não deve conter regras específicas da interface.

No projeto, a integração de envio de e-mails utiliza o **Resend**, enquanto a API responsável pelo endpoint de contato fica fora de `src`, seguindo a estrutura esperada pelo ambiente da Vercel.

---

## 6. Presentation

A camada `presentation` concentra tudo aquilo que pertence à interface da aplicação.

```text
src/presentation/
```

Sua estrutura inclui componentes, páginas, rotas, hooks e elementos relacionados à experiência visual.

Exemplo:

```text
presentation/
├── animations/
├── components/
├── fragments/
├── hooks/
├── pages/
├── routes/
└── styles/
```

### Components

Contém componentes reutilizáveis da interface.

```text
presentation/components/
```

Exemplos:

* Header;
* Footer;
* Navigation;
* MobileMenu;
* BannerPrincipal;
* BrandProdutos;
* seções da página inicial.

### Pages

Representa as páginas da aplicação.

```text
presentation/pages/
```

Entre as principais rotas estão:

```text
/
 /sobre-nos
 /produtos
 /contato
```

### Hooks

Contém hooks responsáveis por comportamentos reutilizáveis da interface.

```text
presentation/hooks/
```

Quando um comportamento representa um fluxo de aplicação, o hook deve delegar a execução ao respectivo caso de uso em `application`, evitando concentrar regras de negócio dentro do componente.

---

# Fluxo arquitetural

O fluxo geral da aplicação pode ser representado desta maneira:

```text
┌──────────────────────────┐
│       PRESENTATION       │
│                          │
│ Pages / Components       │
│ Hooks / Routes           │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       APPLICATION        │
│                          │
│        Use Cases         │
│                          │
│ SendMessageContact       │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│          DOMAIN          │
│                          │
│ Entidades / Regras       │
│ de negócio               │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     INFRASTRUCTURE       │
│                          │
│ APIs / Services          │
│ Integrações externas     │
└──────────────────────────┘
```

Os recursos estáticos e dados utilizados pela aplicação permanecem organizados separadamente:

```text
assets/
database/
```

---

# Princípio de separação de responsabilidades

A arquitetura busca evitar que um único arquivo ou componente seja responsável por:

* renderizar a interface;
* controlar estado;
* implementar regras de negócio;
* realizar requisições;
* integrar serviços externos.

Por exemplo, o formulário de contato não deve conhecer diretamente os detalhes da API ou do Resend.

O fluxo esperado é:

```text
Componente
    ↓
Hook / camada de apresentação
    ↓
Use Case
    ↓
Infraestrutura
    ↓
API / Serviço externo
```

Isso proporciona:

* maior testabilidade;
* menor acoplamento;
* maior organização;
* facilidade de manutenção;
* possibilidade de substituir serviços externos;
* separação clara entre interface e regras da aplicação.

---

# Testes e arquitetura

A separação das camadas também permite diferentes níveis de testes.

```text
src/tests/
├── unit/
├── integration/
└── e2e/
```

Os testes unitários verificam comportamentos isolados.

Os testes de integração verificam a comunicação entre partes da aplicação e integrações necessárias, como o fluxo da API de contato.

Os testes E2E verificam a aplicação através da perspectiva do usuário, utilizando o navegador e as rotas reais da aplicação.

Dessa forma, cada tipo de teste possui uma responsabilidade específica dentro da arquitetura.

---

# Objetivo arquitetural

A organização adotada pela JWC Distribuição & Logística busca manter a aplicação preparada para evolução.

A camada de apresentação pode mudar sem necessariamente alterar os casos de uso.

Os casos de uso podem evoluir sem depender diretamente dos componentes React.

As integrações externas podem ser substituídas sem modificar toda a aplicação.

O principal objetivo é manter cada responsabilidade no lugar adequado, permitindo que o projeto cresça de forma organizada, testável e sustentável.
