# Decisões Arquiteturais

Este documento registra as principais decisões arquiteturais adotadas no desenvolvimento da aplicação **JWC Distribuição & Logística**.

O objetivo é preservar o contexto das escolhas técnicas e organizacionais do projeto, facilitando sua manutenção e evolução.

As decisões descritas aqui devem ser analisadas antes de alterações que possam modificar a estrutura ou os princípios arquiteturais da aplicação.

---

# 1. Objetivo das decisões arquiteturais

Uma decisão arquitetural não descreve apenas qual tecnologia ou estrutura foi utilizada.

Ela registra:

* o problema identificado;
* a decisão tomada;
* o motivo da decisão;
* os benefícios esperados;
* possíveis impactos;
* as consequências para a evolução do projeto.

Esse registro evita que decisões importantes sejam perdidas ao longo do desenvolvimento.

---

# 2. Organização por responsabilidades

## Decisão

A aplicação foi organizada em diferentes áreas de responsabilidade:

```text id="yn4f4n"
src/

├── assets/
├── database/
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

## Motivo

A separação reduz a concentração de responsabilidades nos componentes da interface.

A aplicação possui diferentes tipos de lógica, como:

* apresentação;
* regras de negócio;
* casos de uso;
* dados;
* integrações externas;
* recursos estáticos.

Manter essas responsabilidades separadas facilita a compreensão e manutenção do projeto.

## Consequência

Alterações em uma camada devem causar o menor impacto possível nas demais.

Essa decisão também facilita a criação de testes específicos para cada responsabilidade.

---

# 3. Separação da camada de Presentation

## Decisão

Os componentes React, páginas, hooks, rotas e demais elementos relacionados à interface permanecem na camada:

```text id="td0qef"
src/presentation/
```

## Motivo

A interface representa apenas uma parte da aplicação.

Componentes visuais não devem concentrar regras de negócio ou detalhes de serviços externos.

## Consequência

A camada de apresentação pode evoluir sem necessariamente modificar os casos de uso ou regras fundamentais da aplicação.

O fluxo esperado é:

```text id="ts3z8g"
Presentation
      ↓
Application
      ↓
Domain
      ↓
Infrastructure
```

---

# 4. Utilização de Use Cases

## Decisão

As operações relevantes da aplicação devem ser representadas por casos de uso na camada:

```text id="h8w5f1"
src/application/usecases/
```

Atualmente, o fluxo de contato possui:

```text id="v5g3w7"
src/application/usecases/contato/

├── sendMessageContact.usecases.ts
└── sendMessageContact.test.ts
```

## Motivo

O envio de uma mensagem representa uma ação da aplicação e não uma responsabilidade exclusiva do componente visual.

Colocar esse comportamento diretamente no componente aumentaria o acoplamento entre interface, regras e infraestrutura.

## Consequência

O comportamento pode ser testado de forma isolada e reutilizado por diferentes elementos da camada de apresentação.

---

# 5. Separação entre Use Case e infraestrutura

## Decisão

Os casos de uso não devem conter diretamente detalhes específicos de serviços externos.

## Motivo

Serviços externos podem ser substituídos ou sofrer alterações.

No caso do contato, o envio de e-mails utiliza um serviço externo.

A regra da aplicação não deve depender diretamente de detalhes específicos desse fornecedor.

## Consequência

A infraestrutura pode ser modificada com menor impacto sobre a lógica da aplicação.

O objetivo é manter uma estrutura semelhante a:

```text id="l4xx40"
Use Case
   │
   ▼
Abstração / Serviço
   │
   ▼
Infraestrutura
   │
   ▼
Serviço externo
```

---

# 6. API separada do frontend

## Decisão

A API responsável pelo processamento do contato não fica dentro da estrutura de componentes React.

O endpoint é disponibilizado como função serverless através da estrutura esperada pela Vercel.

## Motivo

A API possui responsabilidades diferentes da interface.

Ela precisa:

* receber requisições;
* processar dados;
* acessar credenciais privadas;
* realizar integrações externas;
* retornar respostas HTTP.

Essas responsabilidades não pertencem à camada de apresentação.

## Consequência

O frontend não precisa conhecer diretamente os detalhes internos do serviço de e-mail.

O acesso ocorre através do contrato HTTP:

```text id="q30hlp"
POST /api/contact
```

---

# 7. Resend como serviço de envio de e-mail

## Decisão

O envio de mensagens do formulário utiliza o **Resend**.

## Motivo

A aplicação necessita de um mecanismo externo para realizar o envio de e-mails sem implementar diretamente toda a infraestrutura de entrega de mensagens.

## Consequência

A aplicação passa a depender de uma integração externa para esse fluxo.

Por isso, a integração deve permanecer isolada na infraestrutura e protegida por variáveis de ambiente.

Caso o serviço seja substituído futuramente, a alteração deve ficar concentrada na implementação correspondente.

---

# 8. Credenciais através de variáveis de ambiente

## Decisão

Credenciais utilizadas por serviços externos devem ser fornecidas através de variáveis de ambiente.

Exemplo:

```env id="n3uw6k"
RESEND_API_KEY=sua_chave_da_resend
```

## Motivo

Chaves de API não devem ser armazenadas diretamente no código-fonte nem expostas ao navegador.

## Consequência

Os diferentes ambientes da aplicação precisam possuir suas próprias configurações.

As credenciais devem ser configuradas no ambiente correspondente ao deploy.

Arquivos locais contendo segredos não devem ser versionados.

---

# 9. Separação dos dados da apresentação

## Decisão

Informações estáticas utilizadas pela aplicação devem permanecer organizadas na camada de dados:

```text id="f4f9i0"
src/database/
```

## Motivo

Produtos, marcas e outras informações utilizadas para composição da interface não devem ficar espalhados pelos componentes React.

## Consequência

Os dados podem ser alterados sem modificar necessariamente a estrutura dos componentes responsáveis pela apresentação.

Isso também facilita futuras mudanças na origem dos dados.

---

# 10. Separação dos assets

## Decisão

Recursos visuais devem permanecer em:

```text id="0lqgzn"
src/assets/
```

## Motivo

Imagens, logotipos, banners e outros recursos estáticos possuem uma responsabilidade diferente dos dados e das regras de negócio.

## Consequência

Os componentes podem consumir esses recursos sem precisar manter arquivos visuais misturados à lógica da aplicação.

---

# 11. Testes em diferentes níveis

## Decisão

A aplicação utiliza diferentes níveis de testes:

```text id="0st5jf"
Unitários
    ↓
Integração
    ↓
E2E
```

## Motivo

Um único tipo de teste não é suficiente para validar todos os comportamentos do sistema.

Os testes unitários verificam unidades isoladas.

Os testes de integração verificam a comunicação entre partes do sistema.

Os testes E2E verificam fluxos completos através da perspectiva do usuário.

## Consequência

A aplicação possui diferentes mecanismos de validação, permitindo identificar problemas em diferentes níveis.

---

# 12. Vitest para testes unitários e integração

## Decisão

O Vitest é utilizado para testes unitários e de integração.

## Motivo

A ferramenta está integrada ao ecossistema utilizado pelo projeto e permite executar testes de maneira adequada para o código TypeScript e JavaScript da aplicação.

## Consequência

Os testes podem ser executados utilizando:

```bash id="b0qg0x"
npm run test
```

ou:

```bash id="0ox5xr"
npx vitest run
```

---

# 13. React Testing Library para componentes

## Decisão

Os componentes React são testados utilizando React Testing Library.

## Motivo

A biblioteca incentiva testes orientados ao comportamento observado pelo usuário, em vez de testes excessivamente dependentes da implementação interna do componente.

## Consequência

Os testes devem priorizar elementos acessíveis e comportamentos reais da interface.

Exemplo:

```ts id="r2ayv8"
screen.getByRole("button", {
  name: /enviar/i,
});
```

em vez de depender exclusivamente de classes CSS ou detalhes internos.

---

# 14. Playwright para testes E2E

## Decisão

Os fluxos End-to-End são testados utilizando Playwright.

## Motivo

Os testes E2E precisam executar a aplicação em um navegador e validar comportamentos próximos à experiência real do usuário.

## Consequência

O Playwright utiliza a aplicação Vite como servidor de teste e pode iniciar esse servidor automaticamente através de `playwright.config.ts`.

A aplicação de teste utiliza:

```text id="8gljcu"
http://localhost:5173
```

---

# 15. Vercel como plataforma de execução

## Decisão

A aplicação utiliza a Vercel para publicação e execução das funções serverless.

## Motivo

A estrutura da aplicação possui frontend e uma API que pode ser executada como função serverless.

A Vercel fornece o ambiente necessário para esses dois contextos.

## Consequência

A estrutura da API precisa respeitar o modelo esperado pela plataforma.

O desenvolvimento local utiliza:

```bash id="xqsvqk"
vercel dev --listen 3000
```

enquanto a aplicação frontend pode ser executada com Vite.

---

# 16. Frontend e API em contextos separados durante o desenvolvimento

## Decisão

Durante o desenvolvimento local, o frontend e a API podem ser executados em portas diferentes.

Frontend:

```text id="k1ccjr"
http://localhost:5173
```

API:

```text id="4d8w5t"
http://localhost:3000
```

## Motivo

Cada ambiente possui uma responsabilidade diferente.

O Vite fornece o servidor de desenvolvimento da aplicação frontend.

O Vercel Dev fornece o ambiente necessário para executar as funções serverless.

## Consequência

Durante alguns fluxos de desenvolvimento e testes de integração, os dois ambientes precisam estar disponíveis simultaneamente.

---

# 17. Separação entre desenvolvimento e produção

## Decisão

As configurações de desenvolvimento, preview e produção devem ser tratadas como ambientes distintos.

## Motivo

Os ambientes podem possuir diferentes:

* variáveis de ambiente;
* URLs;
* configurações;
* serviços;
* dados.

## Consequência

Uma configuração utilizada localmente não deve ser assumida automaticamente como válida para produção.

As configurações de produção devem ser verificadas antes do deploy.

---

# 18. Documentação técnica separada por responsabilidade

## Decisão

A documentação técnica é dividida em diferentes arquivos dentro de:

```text id="7d5q9w"
docs/
```

A estrutura atual contempla:

```text id="7qly35"
docs/
├── architecture.md
├── development.md
├── requirements.md
├── api.md
├── testing.md
├── deployment.md
├── setup.md
└── decisions.md
```

## Motivo

Concentrar todas as informações em um único documento dificultaria a manutenção e a consulta.

Cada documento possui uma responsabilidade específica.

## Consequência

Alterações devem atualizar o documento correspondente.

Por exemplo:

```text id="e5j9wq"
Arquitetura
    → architecture.md

Requisitos
    → requirements.md

Desenvolvimento
    → development.md

Configuração
    → setup.md

API
    → api.md

Testes
    → testing.md

Deploy
    → deployment.md

Decisões
    → decisions.md
```

---

# 19. Princípio de baixo acoplamento

## Decisão

As partes da aplicação devem permanecer desacopladas sempre que possível.

## Motivo

O projeto deve permitir evolução sem exigir alterações generalizadas sempre que uma tecnologia, serviço ou componente for modificado.

## Consequência

Novas funcionalidades devem respeitar a separação existente entre:

```text id="pl4p2d"
Presentation
Application
Domain
Infrastructure
```

Antes de adicionar lógica a um componente existente, deve-se avaliar se essa lógica realmente pertence à camada de apresentação.

---

# 20. Regras para novas funcionalidades

Ao adicionar uma nova funcionalidade, deve-se avaliar:

1. Qual é a responsabilidade da funcionalidade?
2. Ela pertence à apresentação?
3. Ela representa um caso de uso?
4. Ela contém uma regra de domínio?
5. Ela depende de uma integração externa?
6. Precisa de novos dados?
7. Qual tipo de teste deve ser criado?
8. A documentação precisa ser atualizada?

A implementação deve ser colocada na camada correspondente à sua responsabilidade.

---

# 21. Critério para alterações arquiteturais

Uma alteração deve ser considerada arquitetural quando modificar significativamente:

* a organização das camadas;
* o fluxo entre camadas;
* a forma de comunicação com serviços externos;
* o mecanismo de persistência ou obtenção de dados;
* o sistema de autenticação;
* o modelo de execução da aplicação;
* a estratégia de testes;
* a infraestrutura de produção.

Alterações desse tipo devem ser registradas neste documento.

---

# 22. Consequências da arquitetura atual

A arquitetura adotada proporciona:

* maior separação de responsabilidades;
* maior testabilidade;
* menor acoplamento;
* melhor organização do código;
* facilidade de manutenção;
* possibilidade de substituir integrações externas;
* maior clareza sobre o papel de cada camada.

Por outro lado, a separação também adiciona algumas estruturas ao projeto.

Uma funcionalidade simples pode exigir mais de um arquivo quando envolve apresentação, aplicação e infraestrutura.

Essa complexidade adicional é aceita porque o objetivo é manter o projeto preparado para evolução.

---

# 23. Princípio para futuras decisões

Novas decisões arquiteturais devem considerar principalmente:

```text id="9x4x0d"
Responsabilidade
      ↓
Acoplamento
      ↓
Testabilidade
      ↓
Manutenibilidade
      ↓
Evolução
```

A solução tecnicamente mais simples deve ser preferida quando não comprometer esses princípios.

A arquitetura não deve adicionar abstrações apenas por formalidade.

Cada nova camada, serviço ou padrão deve possuir uma justificativa relacionada a uma necessidade real do projeto.

---

# 24. Atualização deste documento

Este documento deve ser atualizado quando uma decisão alterar significativamente a arquitetura ou os princípios técnicos do projeto.

Uma nova decisão deve registrar:

* contexto;
* decisão;
* motivo;
* consequências;
* impacto na arquitetura.

O objetivo é preservar o histórico técnico do projeto e facilitar a compreensão das escolhas realizadas ao longo de seu desenvolvimento.

---

# 25. Objetivo final

As decisões arquiteturais da **JWC Distribuição & Logística** buscam manter o projeto organizado, testável e preparado para evolução.

O princípio central é:

```text id="6k9j3m"
Cada responsabilidade
        ↓
No lugar adequado
        ↓
Com o menor acoplamento possível
        ↓
E com comportamento testável
```

A arquitetura deve evoluir conforme as necessidades reais da aplicação, preservando esses princípios sem criar complexidade desnecessária.

