# Requisitos da Aplicação

Este documento apresenta os requisitos funcionais e não funcionais da aplicação **JWC Distribuição & Logística**.

Os requisitos descrevem os comportamentos e características esperadas do sistema, independentemente das tecnologias utilizadas para sua implementação.

---

## 1. Objetivo

A aplicação tem como objetivo apresentar institucionalmente a **JWC Distribuição & Logística**, seus serviços, soluções, produtos e marcas, além de disponibilizar um canal de contato para comunicação com clientes e empresas interessadas.

A aplicação deve proporcionar uma experiência clara, responsiva e acessível, permitindo que o usuário encontre informações relevantes sobre a empresa e entre em contato de forma simples.

---

## 2. Escopo da aplicação

O sistema contempla:

* apresentação institucional da empresa;
* apresentação das soluções oferecidas;
* apresentação de produtos e marcas;
* navegação entre as principais páginas;
* formulário de contato;
* envio de mensagens através da API de contato;
* integração com serviço externo de envio de e-mails;
* comportamento responsivo para diferentes tamanhos de tela;
* testes automatizados dos principais comportamentos da aplicação.

---

# 3. Requisitos funcionais

## RF01 — Apresentação institucional

A aplicação deve apresentar informações institucionais sobre a JWC Distribuição & Logística.

As informações devem permitir que o usuário compreenda:

* quem é a empresa;
* sua atuação;
* seus diferenciais;
* sua estrutura;
* suas soluções;
* sua operação.

---

## RF02 — Página inicial

A aplicação deve disponibilizar uma página inicial acessível pela rota:

```text
/
```

A página inicial deve apresentar as principais informações da empresa e direcionar o usuário para as demais áreas da aplicação.

---

## RF03 — Página Sobre Nós

A aplicação deve disponibilizar uma página institucional através da rota:

```text
/sobre-nos
```

A página deve apresentar informações relacionadas à empresa e às suas áreas de atuação.

Quando aplicável, a página deve permitir acesso direto a seções específicas através de âncoras.

Exemplos:

```text
/sobre-nos#comercial
/sobre-nos#operacaoelogistica
```

---

## RF04 — Página de Produtos

A aplicação deve disponibilizar uma página para apresentação dos produtos comercializados pela empresa através da rota:

```text
/produtos
```

A página deve permitir a organização dos produtos por marcas e apresentar as informações correspondentes a cada produto.

---

## RF05 — Apresentação de marcas

A aplicação deve permitir apresentar diferentes marcas e seus respectivos produtos.

Os dados de produtos e marcas devem permanecer separados dos componentes responsáveis pela apresentação da interface.

Essa organização permite alterar informações de produtos sem necessariamente modificar a estrutura dos componentes visuais.

---

## RF06 — Navegação entre páginas

A aplicação deve disponibilizar mecanismos de navegação entre as principais áreas do sistema.

As principais rotas devem contemplar:

```text
/
 /sobre-nos
 /produtos
 /contato
```

Os elementos de navegação devem permitir que o usuário acesse as páginas sem depender de alterações manuais na URL.

---

## RF07 — Menu responsivo

A aplicação deve disponibilizar uma navegação adequada para dispositivos com diferentes tamanhos de tela.

Em dispositivos com espaço reduzido, a navegação deve utilizar um menu apropriado para o contexto mobile.

O estado de abertura e fechamento do menu deve ser controlado pela camada de apresentação.

---

## RF08 — Página de contato

A aplicação deve disponibilizar uma página de contato através da rota:

```text
/contato
```

A página deve permitir que o usuário preencha um formulário para enviar uma mensagem à empresa.

---

## RF09 — Formulário de contato

O formulário de contato deve permitir o preenchimento das informações necessárias para o envio de uma mensagem.

Entre os dados utilizados pelo fluxo estão:

```text
nome
empresa
email
telefone
mensagem
```

Os dados devem ser enviados para a API responsável pelo processamento do contato.

---

## RF10 — Envio de mensagem

Ao submeter o formulário de contato, a aplicação deve iniciar o fluxo de envio da mensagem.

O fluxo deve seguir a separação arquitetural definida no projeto:

```text
Interface
    ↓
Hook / camada de apresentação
    ↓
Caso de uso
    ↓
Infraestrutura
    ↓
API
    ↓
Serviço de e-mail
```

A interface não deve implementar diretamente os detalhes da integração com o serviço externo.

---

## RF11 — Processamento da API de contato

A aplicação deve disponibilizar um endpoint responsável pelo processamento das mensagens de contato:

```text
POST /api/contact
```

A API deve receber os dados enviados pelo formulário e realizar o processamento necessário para encaminhar a mensagem.

---

## RF12 — Integração com serviço de e-mail

O fluxo de contato deve utilizar um serviço externo de envio de e-mails.

A implementação atual utiliza o **Resend** para realizar o envio.

A credencial necessária para essa integração deve ser obtida através de variável de ambiente e não deve ser exposta ao cliente.

---

## RF13 — Feedback do formulário

Após uma tentativa de envio, a interface deve fornecer ao usuário um feedback adequado sobre o resultado da operação.

O usuário deve conseguir identificar quando:

* a mensagem foi enviada com sucesso;
* ocorreu um erro durante o envio;
* os dados necessários não foram aceitos pelo fluxo.

---

## RF14 — Tratamento de erros

A aplicação deve tratar erros que possam ocorrer durante operações que dependem de recursos externos.

Em caso de falha na comunicação ou no processamento da mensagem, o usuário deve receber uma resposta compreensível, sem exposição de detalhes técnicos ou credenciais.

---

## RF15 — Dados da aplicação

Informações estáticas utilizadas pela aplicação, como produtos, marcas e dados institucionais, devem permanecer organizadas em estruturas próprias de dados.

Essas informações não devem ser concentradas diretamente nos componentes de apresentação quando puderem ser mantidas de forma independente.

---

# 4. Requisitos não funcionais

## RNF01 — Responsividade

A aplicação deve funcionar adequadamente em diferentes tamanhos de tela, incluindo:

* dispositivos móveis;
* tablets;
* notebooks;
* monitores de maior resolução.

Os elementos da interface devem se adaptar ao espaço disponível sem comprometer a utilização da aplicação.

---

## RNF02 — Usabilidade

A interface deve apresentar navegação clara e consistente.

As ações disponíveis para o usuário devem possuir identificação adequada e comportamento previsível.

---

## RNF03 — Acessibilidade

A aplicação deve utilizar recursos de acessibilidade disponíveis na plataforma web sempre que aplicável.

Entre as práticas esperadas estão:

* utilização adequada de elementos semânticos;
* identificação apropriada de campos de formulário;
* textos alternativos para imagens relevantes;
* navegação compatível com teclado;
* utilização de nomes acessíveis nos elementos interativos.

---

## RNF04 — Segurança de credenciais

Credenciais utilizadas para integração com serviços externos não devem ser armazenadas diretamente no código-fonte do frontend.

As chaves devem ser fornecidas através de variáveis de ambiente no ambiente correspondente.

---

## RNF05 — Separação de responsabilidades

A aplicação deve manter separadas:

* apresentação;
* casos de uso;
* domínio;
* infraestrutura;
* dados;
* recursos estáticos.

Essa separação deve seguir os princípios descritos na documentação arquitetural do projeto.

---

## RNF06 — Testabilidade

Os principais comportamentos da aplicação devem ser testáveis de forma automatizada.

A arquitetura deve permitir testes isolados de casos de uso, componentes e integrações, além dos testes realizados através do navegador.

---

## RNF07 — Manutenibilidade

O código deve ser organizado de maneira que alterações em uma responsabilidade tenham o menor impacto possível nas demais partes da aplicação.

Componentes de apresentação não devem concentrar regras de negócio ou detalhes de integrações externas.

---

## RNF08 — Desacoplamento de serviços externos

A aplicação deve evitar que regras de negócio dependam diretamente de um fornecedor específico de infraestrutura.

Quando possível, integrações externas devem ser acessadas através de abstrações ou serviços apropriados.

Isso permite substituir uma integração sem modificar desnecessariamente as demais camadas da aplicação.

---

## RNF09 — Compatibilidade com ambiente de produção

A aplicação deve poder ser executada no ambiente de produção configurado para o projeto, incluindo o processamento das funções da API responsáveis pelas operações de backend.

---

## RNF10 — Validação antes de publicação

Alterações relevantes devem ser validadas através dos mecanismos de teste e build disponíveis no projeto antes de serem publicadas.

O processo deve contemplar, conforme aplicável:

```text
Testes unitários
       ↓
Testes de integração
       ↓
Testes E2E
       ↓
Build
       ↓
Deploy
```

---

# 5. Requisitos relacionados ao formulário de contato

O fluxo de contato possui requisitos específicos devido à comunicação com uma API e um serviço externo.

O fluxo esperado é:

```text
Usuário
   │
   ▼
Formulário de contato
   │
   ▼
Camada de apresentação
   │
   ▼
SendMessageContactUseCase
   │
   ▼
Infraestrutura
   │
   ▼
POST /api/contact
   │
   ▼
Resend
   │
   ▼
E-mail
```

Esse fluxo deve permanecer compatível com a arquitetura definida em `architecture.md`.

---

# 6. Requisitos de testes

A aplicação deve possuir diferentes níveis de testes para validar seus comportamentos.

## 6.1 Testes unitários

Devem validar unidades isoladas da aplicação.

Exemplos:

* casos de uso;
* funções;
* componentes;
* comportamentos específicos.

---

## 6.2 Testes de integração

Devem validar a comunicação entre diferentes partes do sistema.

Entre os fluxos que podem ser validados estão:

* comunicação com a API de contato;
* processamento do envio de mensagens;
* integração entre camadas.

---

## 6.3 Testes End-to-End

Devem validar os fluxos principais através da perspectiva do usuário.

Entre os comportamentos esperados estão:

* acesso às páginas;
* navegação;
* interação com componentes;
* preenchimento de formulários;
* execução dos principais fluxos da aplicação.

---

# 7. Critérios gerais de aceitação

Uma funcionalidade pode ser considerada adequada quando:

* atende ao comportamento esperado;
* mantém a separação de responsabilidades definida na arquitetura;
* não expõe informações sensíveis;
* possui tratamento adequado para erros;
* mantém comportamento responsivo;
* possui testes apropriados quando aplicável;
* não introduz regressões nos fluxos existentes;
* permite que o projeto seja compilado e executado corretamente.

---

# 8. Evolução dos requisitos

Os requisitos podem ser atualizados conforme novas funcionalidades forem incorporadas ao projeto.

Alterações que introduzam novos fluxos, integrações ou mudanças arquiteturais relevantes devem ser refletidas na documentação correspondente.

A documentação deve permanecer alinhada ao comportamento real da aplicação.
