# Documentação da API

Este documento descreve a API utilizada pela aplicação **JWC Distribuição & Logística**, incluindo seus endpoints, dados de entrada, respostas e integrações externas.

Atualmente, a API possui o endpoint responsável pelo processamento do formulário de contato.

---

## 1. Visão geral

A API é utilizada para processar operações que não devem ser executadas diretamente no navegador.

Atualmente, seu principal objetivo é receber as mensagens enviadas através do formulário de contato e encaminhá-las para o serviço de envio de e-mails configurado pela aplicação.

O fluxo geral é:

```text
Frontend
   │
   │ POST /api/contact
   ▼
API
   │
   ▼
Processamento da mensagem
   │
   ▼
Resend
   │
   ▼
E-mail
```

A API é executada como uma função serverless no ambiente da Vercel.

---

# 2. Endpoint disponível

## POST `/api/contact`

Responsável pelo recebimento e processamento das mensagens enviadas pelo formulário de contato.

### Método

```text
POST
```

### Rota

```text
/api/contact
```

### Content-Type

A requisição deve utilizar:

```http
Content-Type: application/json
```

---

# 3. Dados da requisição

O endpoint recebe um objeto JSON contendo os dados preenchidos pelo usuário no formulário.

Exemplo:

```json
{
  "nome": "Teste JWC",
  "empresa": "JWC Distribuição",
  "email": "teste@example.com",
  "telefone": "(88) 99999-9999",
  "mensagem": "Mensagem de teste"
}
```

## Campos

| Campo      | Tipo   | Descrição                                 |
| ---------- | ------ | ----------------------------------------- |
| `nome`     | string | Nome da pessoa responsável pelo contato   |
| `empresa`  | string | Empresa relacionada ao contato            |
| `email`    | string | Endereço de e-mail informado pelo usuário |
| `telefone` | string | Telefone informado para contato           |
| `mensagem` | string | Conteúdo da mensagem enviada              |

Os dados recebidos pela API devem corresponder ao contrato utilizado pelo formulário de contato da aplicação.

---

# 4. Exemplo de requisição

Uma requisição pode ser realizada utilizando `curl`:

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

Durante o desenvolvimento local, a API pode ser disponibilizada através do ambiente do Vercel Dev.

As instruções de execução desse ambiente estão documentadas em `development.md`.

---

# 5. Processamento da requisição

Quando uma requisição é recebida pelo endpoint, o fluxo esperado é:

```text
1. Receber a requisição HTTP
          │
          ▼
2. Interpretar o corpo JSON
          │
          ▼
3. Processar os dados do contato
          │
          ▼
4. Preparar o envio da mensagem
          │
          ▼
5. Utilizar o serviço de e-mail
          │
          ▼
6. Retornar o resultado da operação
```

A API funciona como uma fronteira entre o frontend e o serviço externo responsável pelo envio do e-mail.

---

# 6. Integração com Resend

O envio das mensagens é realizado através do serviço **Resend**.

A API utiliza a credencial configurada através da variável de ambiente:

```text
RESEND_API_KEY
```

Essa chave é utilizada exclusivamente no ambiente responsável pelo processamento da requisição.

A credencial não deve ser enviada pelo frontend nem armazenada diretamente no código público da aplicação.

---

# 7. Variáveis de ambiente

A API depende da seguinte variável de ambiente:

```env
RESEND_API_KEY=sua_chave_da_resend
```

A chave deve ser configurada no ambiente correspondente à execução da aplicação.

### Regras

A chave:

* não deve ser commitada no Git;
* não deve ser colocada em arquivos públicos;
* não deve ser exposta ao navegador;
* não deve ser incluída diretamente no código-fonte;
* deve ser configurada através do mecanismo de variáveis de ambiente.

---

# 8. Respostas da API

A API deve retornar uma resposta HTTP indicando o resultado do processamento.

Em uma operação realizada com sucesso, a resposta deve indicar que a mensagem foi processada corretamente.

Exemplo conceitual:

```json
{
  "success": true
}
```

O frontend utiliza o resultado da operação para informar ao usuário se o envio foi concluído.

---

# 9. Tratamento de erros

Falhas durante o processamento da requisição devem ser tratadas pela API.

Entre as situações que podem resultar em erro estão:

* dados inválidos;
* corpo da requisição ausente ou inválido;
* falha na integração externa;
* credencial de serviço não configurada;
* erro durante o envio do e-mail;
* erro interno no processamento da requisição.

Os detalhes internos do erro não devem ser expostos desnecessariamente ao usuário final.

A aplicação deve retornar uma resposta adequada para que a camada de apresentação consiga identificar a falha e apresentar uma mensagem apropriada.

---

# 10. Fluxo arquitetural

A API faz parte do fluxo arquitetural definido para o projeto.

O caminho completo da operação é:

```text
┌─────────────────────────────┐
│         USUÁRIO             │
│                             │
│ Preenche formulário         │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       PRESENTATION          │
│                             │
│ Página / Hook               │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        APPLICATION          │
│                             │
│ SendMessageContactUseCase   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       INFRASTRUCTURE        │
│                             │
│ Serviço de comunicação      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│            API              │
│                             │
│ POST /api/contact           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│           RESEND            │
│                             │
│ Serviço de envio de e-mail  │
└─────────────────────────────┘
```

Essa separação evita que componentes React precisem conhecer diretamente os detalhes da integração com o serviço de e-mail.

---

# 11. Segurança

A API deve preservar a separação entre informações públicas e credenciais privadas.

A `RESEND_API_KEY` deve permanecer exclusivamente no ambiente de execução do backend.

O frontend deve realizar a comunicação com a API sem receber a chave utilizada para acessar o serviço externo.

A arquitetura deve impedir que credenciais sejam incorporadas ao bundle JavaScript enviado ao navegador.

---

# 12. Comunicação com o frontend

O frontend é responsável por iniciar a operação através do endpoint:

```text
POST /api/contact
```

O caso de uso responsável pelo envio da mensagem coordena essa operação, enquanto a infraestrutura fornece os mecanismos necessários para comunicação com recursos externos.

O componente de apresentação não deve realizar diretamente a integração com o Resend.

---

# 13. Testes da API

O comportamento da API pode ser validado através de testes de integração.

O fluxo de integração deve considerar:

```text
Frontend / cliente
       │
       ▼
POST /api/contact
       │
       ▼
API
       │
       ▼
Serviço externo
```

Além dos testes de integração, o caso de uso responsável pelo envio da mensagem possui testes próprios para validar sua lógica de forma isolada.

Os testes relacionados à aplicação são documentados separadamente na documentação de testes do projeto.

---

# 14. Ambiente de desenvolvimento

Durante o desenvolvimento, a API pode ser executada através do Vercel Dev:

```bash
vercel dev --listen 3000
```

A API local fica disponível em:

```text
http://localhost:3000
```

O endpoint pode então ser acessado através de:

```text
http://localhost:3000/api/contact
```

As instruções completas de configuração e execução estão disponíveis em:

```text
docs/development.md
docs/setup.md
```

---

# 15. Considerações arquiteturais

A API representa uma fronteira entre a aplicação e serviços externos.

Sua responsabilidade deve permanecer limitada ao processamento necessário para disponibilizar o recurso HTTP e realizar a integração correspondente.

Regras de negócio que pertencem ao fluxo da aplicação devem permanecer nos casos de uso e no domínio, conforme definido em `architecture.md`.

Essa organização permite:

* reduzir o acoplamento;
* facilitar testes;
* substituir serviços externos;
* manter credenciais fora do frontend;
* separar responsabilidades;
* facilitar a manutenção da aplicação.

---

# 16. Evolução da API

Novos endpoints podem ser adicionados conforme novas funcionalidades sejam incorporadas ao sistema.

Quando um novo endpoint for criado, sua documentação deve incluir:

* método HTTP;
* rota;
* objetivo;
* parâmetros;
* corpo da requisição;
* respostas;
* códigos de erro relevantes;
* autenticação, quando aplicável;
* variáveis de ambiente utilizadas;
* exemplos de requisição e resposta;
* comportamento esperado.

A documentação da API deve permanecer alinhada à implementação real do projeto.
