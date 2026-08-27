# Guia de Contribuição

Este documento apresenta as diretrizes para desenvolvimento e contribuição no projeto **JWC Distribuição & Logística**.

O objetivo é manter um padrão consistente de desenvolvimento, preservar a arquitetura existente e reduzir o risco de regressões durante a evolução da aplicação.

---

# 1. Objetivo

Toda alteração realizada no projeto deve buscar preservar:

* organização do código;
* separação de responsabilidades;
* qualidade da aplicação;
* cobertura adequada de testes;
* segurança;
* facilidade de manutenção;
* consistência da documentação.

Antes de implementar uma nova funcionalidade, deve-se compreender a arquitetura existente.

A documentação principal está disponível em:

```text
docs/
```

---

# 2. Conhecendo a arquitetura

A aplicação utiliza uma organização baseada em responsabilidades:

```text
src/

├── assets/
├── database/
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

Cada nova implementação deve ser colocada na camada correspondente à sua responsabilidade.

Como regra geral:

```text
Interface
    → presentation/

Casos de uso
    → application/

Regras e conceitos de domínio
    → domain/

Integrações externas
    → infrastructure/

Dados estáticos
    → database/

Recursos visuais
    → assets/
```

Mais detalhes estão disponíveis em `docs/architecture.md`.

---

# 3. Antes de começar uma alteração

Antes de implementar uma nova funcionalidade:

1. compreender o comportamento esperado;
2. verificar os requisitos existentes;
3. verificar a arquitetura;
4. procurar implementações semelhantes;
5. identificar a camada responsável;
6. verificar se existe algum caso de uso relacionado;
7. avaliar quais testes serão necessários;
8. verificar se a documentação precisará ser atualizada.

Quando uma funcionalidade já possui uma estrutura existente, deve-se preferir evoluí-la em vez de criar uma implementação paralela.

---

# 4. Organização das alterações

Cada alteração deve possuir um objetivo claro.

Exemplos:

```text
Nova funcionalidade
Correção de bug
Melhoria de componente
Refatoração
Correção de teste
Atualização de documentação
```

Alterações sem relação direta entre si devem ser evitadas no mesmo commit ou pull request quando isso dificultar a revisão.

---

# 5. Branches

O desenvolvimento deve utilizar branches para separar alterações do código principal.

Uma estrutura possível é:

```text
main
  │
  └── develop
        │
        ├── feature/*
        ├── fix/*
        └── refactor/*
```

Os nomes das branches devem indicar de maneira clara o objetivo da alteração.

Exemplos:

```text
feature/contact-form
fix/contact-api
refactor/contact-usecase
docs/architecture
```

A estratégia de branches pode ser adaptada conforme o fluxo de desenvolvimento do projeto evoluir.

---

# 6. Commits

Os commits devem ser pequenos, objetivos e relacionados a uma alteração específica.

Um bom commit deve permitir compreender rapidamente o que foi modificado.

Exemplos:

```text
feat: adiciona validação ao formulário de contato
fix: corrige envio da mensagem de contato
test: adiciona teste do caso de uso de contato
refactor: separa serviço de envio da API
docs: atualiza documentação da arquitetura
```

Evite mensagens genéricas como:

```text
alterações
mudanças
correções
atualização
teste
```

A mensagem deve explicar o propósito da alteração.

---

# 7. Novos componentes

Novos componentes React devem ser criados dentro da camada de apresentação:

```text
src/presentation/components/
```

O componente deve concentrar responsabilidades relacionadas à interface.

Não deve ser utilizado como local para:

* regras complexas de negócio;
* chamadas diretas a serviços externos;
* armazenamento de credenciais;
* lógica que pertence a casos de uso.

Quando o comportamento ultrapassar a responsabilidade visual, deve-se avaliar sua extração para outra camada.

---

# 8. Novos casos de uso

Quando uma nova funcionalidade representar uma ação da aplicação, deve-se avaliar a criação de um caso de uso em:

```text
src/application/usecases/
```

Exemplo:

```text
src/application/usecases/

└── contato/
    ├── sendMessageContact.usecases.ts
    └── sendMessageContact.test.ts
```

O caso de uso deve representar o fluxo da operação sem depender diretamente de componentes React ou elementos HTML.

---

# 9. Regras de domínio

Regras que representam conceitos fundamentais do negócio devem ser avaliadas para implementação na camada:

```text
src/domain/
```

Essa camada deve permanecer independente de detalhes específicos de:

* React;
* Vite;
* Vercel;
* serviços externos;
* elementos visuais.

A intenção é preservar as regras essenciais da aplicação mesmo que tecnologias externas sejam substituídas.

---

# 10. Integrações externas

Integrações com serviços externos devem permanecer na camada de infraestrutura.

Exemplos:

```text
APIs
Serviços HTTP
Serviços de e-mail
Clientes externos
```

A aplicação atualmente utiliza um serviço externo para envio de e-mails.

Componentes de apresentação e casos de uso não devem espalhar detalhes específicos dessa integração.

---

# 11. Variáveis de ambiente

Informações sensíveis devem ser armazenadas através de variáveis de ambiente.

Exemplo:

```env
RESEND_API_KEY=sua_chave_da_resend
```

Nunca adicionar ao código-fonte:

```text
API keys
Tokens
Senhas
Credenciais
Segredos
```

Também não devem ser adicionados ao Git arquivos locais contendo credenciais.

Antes de realizar um commit, deve-se verificar se nenhuma informação sensível foi incluída.

---

# 12. Dados estáticos

Dados utilizados pela aplicação devem ser mantidos em estruturas apropriadas.

Informações como:

* produtos;
* marcas;
* dados institucionais;

devem permanecer organizadas na camada de dados quando não fizerem parte da responsabilidade direta do componente.

A estrutura atualmente destinada a esses dados é:

```text
src/database/
```

Isso evita a duplicação de informações em vários componentes.

---

# 13. Testes

Toda alteração que introduza ou modifique comportamento deve considerar a necessidade de testes.

A estratégia do projeto contempla:

```text
Unitários
Integração
E2E
```

A escolha depende do comportamento alterado.

### Exemplo

Uma alteração em um caso de uso pode exigir:

```text
Teste unitário
```

Uma alteração na comunicação com a API pode exigir:

```text
Teste de integração
```

Uma alteração em um fluxo importante do usuário pode exigir:

```text
Teste E2E
```

---

# 14. Testes de componentes

Alterações em componentes React devem verificar o comportamento observável pelo usuário.

Sempre que possível, utilizar consultas acessíveis:

```ts
getByRole()
getByLabelText()
getByText()
```

Deve-se evitar criar testes excessivamente dependentes de:

* classes CSS;
* estrutura interna;
* detalhes de implementação;
* ordem específica de elementos sem necessidade.

---

# 15. Testes assíncronos

Operações assíncronas devem utilizar os mecanismos apropriados das ferramentas de teste.

Não utilizar esperas artificiais quando uma condição real puder ser aguardada.

Evitar:

```ts
waitForTimeout()
```

Preferir mecanismos baseados em:

```text
expect
findBy*
waitFor
```

quando forem apropriados para o cenário.

---

# 16. Testes E2E

Alterações que modificarem fluxos importantes da aplicação devem ser avaliadas quanto à necessidade de atualização dos testes E2E.

Os testes utilizam Playwright.

A aplicação é executada durante os testes através do servidor Vite configurado em:

```text
playwright.config.ts
```

A URL de teste é:

```text
http://localhost:5173
```

---

# 17. Validação antes do commit

Antes de criar um commit, recomenda-se verificar:

```bash
npm run test
```

Quando houver alterações relevantes nos fluxos de usuário:

```bash
npx playwright test
```

Também deve ser validado o build:

```bash
npm run build
```

A alteração deve ser revisada antes de ser enviada para o repositório.

---

# 18. Pull Requests

Quando o fluxo de desenvolvimento utilizar Pull Requests, a descrição deve explicar:

* o que foi alterado;
* por que foi alterado;
* quais arquivos ou áreas foram afetados;
* quais testes foram executados;
* se houve alteração arquitetural;
* se a documentação foi atualizada.

Exemplo:

```text
## Alteração

Implementado o fluxo de envio do formulário de contato.

## Testes

- Testes unitários
- Teste de integração
- Teste E2E

## Build

npm run build

## Documentação

Atualizada a documentação da API.
```

---

# 19. Revisão de código

Durante uma revisão, devem ser observados principalmente:

* comportamento correto;
* separação de responsabilidades;
* qualidade dos testes;
* tratamento de erros;
* segurança;
* legibilidade;
* possíveis regressões;
* impacto arquitetural;
* necessidade de documentação.

Uma implementação que funciona, mas viola a arquitetura existente, deve ser revisada antes de ser incorporada.

---

# 20. Refatorações

Refatorações devem preservar o comportamento existente, salvo quando a mudança de comportamento fizer parte do objetivo declarado.

Sempre que possível:

```text
Testes existentes
      ↓
Refatoração
      ↓
Testes
      ↓
Build
```

A refatoração não deve ser utilizada como justificativa para remover testes importantes ou ignorar falhas existentes.

---

# 21. Alterações arquiteturais

Quando uma alteração modificar significativamente a estrutura do projeto, deve-se verificar se `docs/decisions.md` precisa ser atualizado.

Exemplos:

* criação de uma nova camada;
* mudança no fluxo entre camadas;
* substituição de uma integração;
* alteração do mecanismo da API;
* mudança na estratégia de testes;
* mudança da infraestrutura de produção.

Decisões relevantes devem ser registradas para preservar o contexto técnico.

---

# 22. Atualização da documentação

A documentação deve evoluir junto com o código.

Dependendo da alteração, podem ser necessários ajustes em:

```text
docs/architecture.md
docs/requirements.md
docs/development.md
docs/setup.md
docs/api.md
docs/testing.md
docs/deployment.md
docs/decisions.md
```

Uma alteração não deve deixar a documentação descrevendo um comportamento que já não existe.

---

# 23. Segurança

Antes de enviar alterações ao repositório, verificar:

* [ ] Nenhuma chave de API foi adicionada.
* [ ] Nenhuma senha foi adicionada.
* [ ] Nenhum token foi adicionado.
* [ ] Arquivos `.env` não foram versionados.
* [ ] Informações sensíveis não aparecem em logs.
* [ ] Credenciais não estão disponíveis no frontend.
* [ ] Dados sensíveis não foram incluídos em testes ou exemplos reais.

---

# 24. Checklist de contribuição

Antes de finalizar uma alteração:

* [ ] A responsabilidade da alteração foi identificada.
* [ ] O código foi colocado na camada correta.
* [ ] A arquitetura existente foi respeitada.
* [ ] Os testes necessários foram criados ou atualizados.
* [ ] Os testes foram executados.
* [ ] O build foi executado.
* [ ] Não existem credenciais no código.
* [ ] A documentação foi revisada.
* [ ] O commit possui uma mensagem clara.
* [ ] A alteração foi revisada antes do merge.

---

# 25. Fluxo recomendado

O fluxo geral de contribuição pode ser representado por:

```text
Identificar necessidade
        │
        ▼
Analisar arquitetura
        │
        ▼
Definir responsabilidade
        │
        ▼
Implementar
        │
        ▼
Criar / atualizar testes
        │
        ▼
Executar testes
        │
        ▼
Executar build
        │
        ▼
Revisar código
        │
        ▼
Atualizar documentação
        │
        ▼
Commit
        │
        ▼
Pull Request
        │
        ▼
Review
        │
        ▼
Merge
```

Esse fluxo pode ser simplificado para alterações pequenas, desde que os critérios de qualidade e segurança sejam preservados.

---

# 26. Princípios para futuras contribuições

As contribuições devem seguir alguns princípios fundamentais:

```text
Clareza
   +
Separação de responsabilidades
   +
Testabilidade
   +
Segurança
   +
Manutenibilidade
   +
Documentação
```

A prioridade não deve ser apenas fazer uma funcionalidade funcionar, mas integrá-la corretamente à estrutura existente.

---

# 27. Objetivo do guia

O objetivo deste documento é estabelecer uma referência para futuras alterações na aplicação **JWC Distribuição & Logística**.

Ao seguir estas diretrizes, novas funcionalidades podem ser incorporadas mantendo:

* consistência arquitetural;
* qualidade do código;
* previsibilidade do comportamento;
* segurança das integrações;
* confiabilidade dos testes;
* organização da documentação.

A arquitetura deve continuar evoluindo conforme as necessidades reais do projeto, sem introduzir complexidade desnecessária.
