# Estratégia de Testes

Este documento descreve a estratégia de testes utilizada pela aplicação **JWC Distribuição & Logística**, incluindo a organização dos testes, os diferentes níveis de validação e as ferramentas utilizadas no projeto.

O objetivo é garantir que a aplicação mantenha seu comportamento esperado durante o desenvolvimento, evolução e publicação.

---

# 1. Objetivo

Os testes têm como objetivo validar diferentes aspectos da aplicação, desde unidades isoladas de código até os fluxos completos executados pelo usuário no navegador.

A estratégia adotada utiliza diferentes níveis de testes:

```text
Testes Unitários
       │
       ▼
Testes de Integração
       │
       ▼
Testes End-to-End
```

Cada nível possui uma responsabilidade específica.

---

# 2. Ferramentas

O projeto utiliza principalmente:

* **Vitest** para testes unitários e de integração;
* **React Testing Library** para testes de componentes React;
* **Testing Library User Event** para simulação de interações do usuário;
* **Playwright** para testes End-to-End;
* **jest-dom** para asserções relacionadas ao DOM.

As ferramentas são utilizadas de acordo com o nível de teste necessário.

---

# 3. Organização dos testes

Os testes são organizados dentro da estrutura destinada aos testes da aplicação:

```text
src/tests/

├── unit/
├── integration/
└── e2e/
```

A separação permite identificar rapidamente o objetivo de cada teste.

```text
unit/
```

Contém testes unitários.

```text
integration/
```

Contém testes de integração.

```text
e2e/
```

Contém testes End-to-End.

---

# 4. Testes unitários

Os testes unitários verificam uma unidade específica da aplicação de maneira isolada.

O objetivo é validar comportamentos sem depender desnecessariamente de outras partes do sistema.

Podem ser testados, por exemplo:

* casos de uso;
* funções;
* regras;
* componentes;
* comportamentos específicos.

---

## 4.1. Testes de casos de uso

Os casos de uso pertencentes à camada `application` devem possuir testes próprios quando houver comportamento relevante a ser validado.

Atualmente, o fluxo de contato possui:

```text
src/application/usecases/contato/

├── sendMessageContact.usecases.ts
└── sendMessageContact.test.ts
```

O teste deve verificar o comportamento do caso de uso de forma independente da interface visual.

Isso permite validar a lógica da operação sem precisar renderizar uma página React.

---

## 4.2. Testes de componentes

Os componentes React podem ser testados utilizando React Testing Library.

O objetivo não é testar detalhes internos de implementação, mas verificar o comportamento observável pelo usuário.

Entre os comportamentos que podem ser validados estão:

* renderização de conteúdo;
* presença de elementos;
* navegação;
* interação com botões;
* abertura e fechamento de menus;
* alteração de estados visíveis;
* preenchimento de campos;
* acessibilidade dos elementos.

---

# 5. React Testing Library

Os testes de componentes devem priorizar a perspectiva do usuário.

Sempre que possível, os elementos devem ser encontrados utilizando consultas semânticas, como:

```ts
getByRole()
```

```ts
getByLabelText()
```

```ts
getByText()
```

ou suas variantes assíncronas e de consulta:

```ts
findByRole()
queryByRole()
```

A escolha do seletor deve priorizar acessibilidade e comportamento real da interface.

---

# 6. Simulação de interações

Quando um teste precisa reproduzir uma interação do usuário, deve ser utilizado o mecanismo apropriado da Testing Library.

Exemplos de interações:

* clique;
* preenchimento de campos;
* seleção;
* teclado;
* abertura de menus;
* submissão de formulários.

O teste deve representar, sempre que possível, uma ação que um usuário real poderia executar.

---

# 7. Testes de integração

Os testes de integração verificam a comunicação entre diferentes partes da aplicação.

Diferentemente dos testes unitários, podem envolver múltiplas camadas ou recursos externos controlados.

Um dos principais fluxos de integração da aplicação é o envio do formulário de contato.

O fluxo pode ser representado como:

```text
Formulário
    │
    ▼
Camada de apresentação
    │
    ▼
Caso de uso
    │
    ▼
API
    │
    ▼
Serviço de e-mail
```

---

# 8. Integração da API de contato

A API de contato possui o endpoint:

```text
POST /api/contact
```

Os testes de integração podem validar o comportamento desse fluxo utilizando o ambiente apropriado de execução da API.

Durante o desenvolvimento local, a API é executada através do Vercel Dev.

```bash
vercel dev --listen 3000
```

A aplicação pode então acessar:

```text
http://localhost:3000/api/contact
```

---

# 9. Testes de integração e ambiente externo

Testes que dependem da API local não devem ser confundidos com testes unitários.

Quando o teste precisa acessar o endpoint real de desenvolvimento, o ambiente correspondente deve estar disponível.

Por isso, antes de executar testes de integração que dependam da API:

```bash
vercel dev --listen 3000
```

O ambiente deve permanecer ativo durante a execução.

---

# 10. Testes End-to-End

Os testes End-to-End verificam a aplicação através da perspectiva do usuário.

Eles utilizam o navegador para executar fluxos completos.

A ferramenta utilizada para esse nível de teste é o **Playwright**.

Exemplos de comportamentos que podem ser validados:

* abertura da aplicação;
* navegação entre páginas;
* interação com menus;
* preenchimento de formulários;
* submissão de dados;
* comportamento das páginas;
* fluxos completos de usuário.

---

# 11. Configuração dos testes E2E

Os testes E2E utilizam o servidor Vite como aplicação de teste.

A URL utilizada é:

```text
http://localhost:5173
```

O Playwright inicia o servidor através da configuração definida em:

```text
playwright.config.ts
```

A configuração utiliza o servidor de desenvolvimento:

```ts
webServer: {
  command: "npm run dev -- --host 127.0.0.1 --port 5173",
  url: "http://localhost:5173",
  reuseExistingServer: false,
  timeout: 120_000,
}
```

Dessa forma, não é necessário iniciar manualmente o Vite antes de executar os testes E2E.

---

# 12. Execução dos testes unitários e de integração

Para executar a suíte do Vitest:

```bash
npm run test
```

Para executar os testes uma única vez:

```bash
npx vitest run
```

Durante o desenvolvimento, também é possível executar um arquivo ou conjunto específico de testes utilizando os recursos de filtro do Vitest.

Exemplo:

```bash
npx vitest run caminho/do/teste.test.ts
```

---

# 13. Execução dos testes E2E

Para executar os testes End-to-End:

```bash
npx playwright test
```

O Playwright inicia automaticamente o servidor configurado em `playwright.config.ts`.

---

# 14. Relatório dos testes E2E

Após a execução dos testes Playwright, o relatório HTML pode ser aberto utilizando:

```bash
npx playwright show-report
```

O relatório pode apresentar informações como:

* testes aprovados;
* testes falhos;
* duração;
* screenshots;
* vídeos;
* traces, quando disponíveis.

Esses recursos facilitam a investigação de falhas nos fluxos executados pelo navegador.

---

# 15. Pirâmide de testes

A estratégia deve priorizar testes rápidos e isolados na base e testes mais completos nos níveis superiores.

```text
             ┌───────────────┐
             │     E2E       │
             │ Fluxos reais  │
             └───────┬───────┘
                     │
             ┌───────▼───────┐
             │  Integração   │
             │ Comunicação   │
             └───────┬───────┘
                     │
             ┌───────▼───────┐
             │   Unitários   │
             │  Unidades     │
             └───────────────┘
```

A quantidade de testes deve ser adequada ao comportamento de cada parte do sistema.

Não é necessário transformar todos os detalhes internos em testes.

---

# 16. O que testar

Os testes devem priorizar comportamentos relevantes para o funcionamento da aplicação.

### Deve ser validado

* regras de negócio;
* casos de uso;
* navegação;
* componentes interativos;
* formulários;
* tratamento de estados;
* integração com APIs;
* fluxos importantes do usuário;
* comportamentos críticos da aplicação.

### Deve ser evitado

* testar detalhes internos sem relevância funcional;
* testar implementação em vez de comportamento;
* criar testes excessivamente acoplados ao HTML;
* depender de tempos fixos de espera;
* duplicar o mesmo cenário em diferentes níveis sem necessidade.

---

# 17. Assíncrono e sincronização

Operações assíncronas devem ser aguardadas através dos mecanismos apropriados das ferramentas de teste.

Os testes não devem utilizar esperas artificiais para tentar sincronizar a execução.

Deve-se evitar:

```ts
waitForTimeout()
```

quando uma asserção ou espera orientada ao comportamento estiver disponível.

O objetivo é fazer com que o teste aguarde uma condição real da aplicação.

---

# 18. Seletores

Os testes devem preferir seletores que representem a forma como o usuário percebe a interface.

A ordem de preferência deve considerar:

1. papel acessível;
2. nome acessível;
3. label;
4. texto;
5. atributos específicos de teste quando realmente necessários.

Exemplo preferencial:

```ts
screen.getByRole("button", {
  name: /enviar/i,
});
```

Em vez de depender exclusivamente de classes CSS ou da estrutura interna do componente.

---

# 19. Isolamento dos testes

Os testes devem ser independentes entre si.

Um teste não deve depender da execução anterior de outro teste para funcionar corretamente.

Cada teste deve preparar seu próprio estado e executar as ações necessárias para validar o cenário.

Isso reduz problemas relacionados a:

* estado compartilhado;
* ordem de execução;
* dados residuais;
* resultados inconsistentes;
* testes intermitentes.

---

# 20. Testes e arquitetura

A estratégia de testes acompanha a separação de responsabilidades definida na arquitetura.

A relação pode ser representada como:

```text
┌────────────────────────────┐
│ Presentation               │
│ Componentes / Hooks        │
│                            │
│ Testes de componentes      │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│ Application                │
│                            │
│ Use Cases                  │
│                            │
│ Testes unitários           │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│ Infrastructure / API       │
│                            │
│ Integrações                │
│                            │
│ Testes de integração       │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│ Aplicação completa         │
│                            │
│ Testes E2E                 │
└────────────────────────────┘
```

Essa organização permite que cada responsabilidade seja validada no nível mais adequado.

---

# 21. Validação antes de publicação

Antes de publicar alterações relevantes, recomenda-se executar:

```bash
npm run test
```

```bash
npx playwright test
```

```bash
npm run build
```

A execução dos testes ajuda a identificar regressões antes do processo de publicação.

O build confirma que a aplicação continua podendo ser compilada corretamente.

---

# 22. Investigação de falhas

Quando um teste falhar, a investigação deve começar identificando:

1. qual cenário falhou;
2. qual comportamento era esperado;
3. qual comportamento foi encontrado;
4. em qual camada o problema está;
5. se a falha está no teste ou na implementação;
6. se outros testes foram afetados.

Não se deve alterar o teste apenas para fazê-lo passar sem verificar primeiro se o comportamento da aplicação está correto.

---

# 23. Testes como parte da arquitetura

Os testes não são considerados uma camada isolada da aplicação.

Eles acompanham as responsabilidades existentes no projeto e ajudam a garantir que a separação entre apresentação, aplicação, domínio e infraestrutura seja preservada.

A existência de testes específicos para casos de uso, integrações e fluxos E2E permite validar a aplicação em diferentes níveis de abstração.

---

# 24. Evolução da suíte de testes

Novas funcionalidades devem receber testes adequados ao seu nível de responsabilidade.

Ao adicionar uma funcionalidade, deve-se avaliar:

* quais regras precisam de testes unitários;
* quais integrações precisam de testes de integração;
* quais fluxos precisam de cobertura E2E;
* se algum comportamento existente pode sofrer regressão.

A suíte deve evoluir junto com a aplicação, mantendo foco nos comportamentos relevantes e evitando testes desnecessariamente frágeis.

---

# 25. Objetivo da estratégia

A estratégia de testes da **JWC Distribuição & Logística** busca proporcionar confiança durante a evolução do projeto.

A combinação de testes unitários, integração e End-to-End permite validar:

```text
Regras isoladas
       +
Integrações
       +
Fluxos reais do usuário
       =
Maior confiança na aplicação
```

O objetivo final é permitir que novas funcionalidades e alterações arquiteturais sejam realizadas com menor risco de regressão.
