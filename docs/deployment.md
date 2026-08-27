# Deploy e Publicação

Este documento descreve o processo de preparação e publicação da aplicação **JWC Distribuição & Logística**, considerando o ambiente de produção utilizado pelo projeto.

A aplicação utiliza a **Vercel** como plataforma de execução e publicação.

---

# 1. Visão geral

O processo de publicação deve garantir que:

* o código esteja atualizado;
* as dependências estejam instaladas corretamente;
* os testes relevantes tenham sido executados;
* o build de produção seja concluído sem erros;
* as variáveis de ambiente estejam configuradas;
* as funções da API estejam disponíveis no ambiente de produção.

O fluxo recomendado é:

```text
Alteração no código
       │
       ▼
Testes
       │
       ▼
Build
       │
       ▼
Validação
       │
       ▼
Deploy
       │
       ▼
Produção
```

---

# 2. Plataforma de hospedagem

A aplicação utiliza a **Vercel** para publicação e execução do projeto.

A plataforma é responsável por disponibilizar:

* a aplicação frontend;
* as funções serverless da API;
* o ambiente de execução correspondente ao deploy;
* as variáveis de ambiente configuradas para o projeto.

A estrutura da API segue o modelo esperado pela plataforma.

---

# 3. Pré-requisitos para publicação

Antes de realizar um deploy, recomenda-se verificar:

```bash
node -v
npm -v
git --version
vercel --version
```

Também devem estar disponíveis as credenciais e permissões necessárias para realizar o deploy no projeto Vercel.

---

# 4. Instalação das dependências

Antes da validação do projeto, as dependências devem estar instaladas:

```bash
npm install
```

Esse processo deve ser realizado sempre que necessário após alterações nas dependências do projeto ou em um ambiente novo.

---

# 5. Execução dos testes

Antes de publicar uma alteração, os testes disponíveis devem ser executados.

## Testes unitários e de integração

```bash
npm run test
```

Ou, para uma execução única:

```bash
npx vitest run
```

## Testes End-to-End

```bash
npx playwright test
```

Os testes E2E validam os principais fluxos da aplicação através do navegador.

---

# 6. Validação do build

O build deve ser validado antes da publicação:

```bash
npm run build
```

A conclusão do build sem erros indica que o projeto conseguiu ser compilado de acordo com a configuração atual.

Erros de TypeScript, dependências, imports ou configuração devem ser corrigidos antes do deploy.

---

# 7. Variáveis de ambiente

A aplicação utiliza variáveis de ambiente para informações que não devem ser armazenadas diretamente no código-fonte.

Entre as variáveis utilizadas está:

```env
RESEND_API_KEY=sua_chave_da_resend
```

Essa variável é necessária para que a API de contato consiga utilizar o serviço de envio de e-mails.

---

# 8. Configuração das variáveis na Vercel

As variáveis utilizadas em produção devem ser configuradas no ambiente da Vercel.

A variável:

```text
RESEND_API_KEY
```

deve estar disponível para o ambiente responsável pela execução da API em produção.

A chave utilizada em produção não deve ser publicada no repositório.

---

# 9. Segurança durante o deploy

Informações sensíveis não devem fazer parte do código enviado ao repositório.

Entre os dados que devem permanecer protegidos estão:

* chaves de API;
* tokens;
* credenciais;
* segredos de serviços externos.

Arquivos de configuração local, como `.env.local`, não devem ser versionados.

A aplicação frontend também não deve receber ou expor a chave privada utilizada pelo serviço de e-mail.

---

# 10. Deploy através da Vercel

O projeto pode ser publicado utilizando a CLI da Vercel.

Após autenticar e configurar o projeto, o deploy pode ser realizado utilizando:

```bash
vercel
```

Para um deploy de produção, pode ser utilizado:

```bash
vercel --prod
```

O comando exato utilizado deve respeitar a configuração atual do projeto Vercel.

---

# 11. Relação entre frontend e API

A publicação deve considerar que o projeto possui tanto a aplicação frontend quanto funções responsáveis pela API.

O fluxo em produção é:

```text
Usuário
   │
   ▼
Aplicação Web
   │
   ▼
POST /api/contact
   │
   ▼
Função Serverless
   │
   ▼
Resend
   │
   ▼
E-mail
```

A API não deve depender do ambiente local utilizado durante o desenvolvimento.

---

# 12. API em produção

O endpoint de contato mantém a mesma rota lógica:

```text
POST /api/contact
```

No ambiente de produção, a requisição deve utilizar o domínio publicado pela aplicação.

Exemplo conceitual:

```text
https://SEU-DOMINIO/api/contact
```

O domínio definitivo deve ser utilizado de acordo com a configuração de produção do projeto.

---

# 13. Domínio personalizado

Caso um domínio personalizado seja configurado para a aplicação, ele deve ser associado ao projeto na Vercel.

Após a configuração, a aplicação poderá ser acessada através do domínio oficial definido para o projeto.

A alteração do domínio não deve exigir mudanças na lógica de negócio da aplicação.

---

# 14. Ambientes

A aplicação pode trabalhar com diferentes ambientes de execução.

Os principais contextos são:

```text
Development
Preview
Production
```

Cada ambiente pode possuir configurações próprias, especialmente para variáveis de ambiente.

Informações sensíveis devem ser configuradas individualmente nos ambientes necessários.

---

# 15. Preview Deployments

As alterações podem ser validadas em um ambiente de preview antes de serem disponibilizadas em produção.

O fluxo recomendado é:

```text
Branch de desenvolvimento
        │
        ▼
Preview
        │
        ▼
Testes e validação
        │
        ▼
Produção
```

Isso permite identificar problemas antes da publicação definitiva.

---

# 16. Checklist antes do deploy

Antes de realizar uma publicação, recomenda-se verificar:

* [ ] Código atualizado.
* [ ] Dependências instaladas.
* [ ] Testes unitários executados.
* [ ] Testes de integração relevantes executados.
* [ ] Testes E2E executados.
* [ ] Build executado com sucesso.
* [ ] Variáveis de ambiente configuradas.
* [ ] Nenhuma chave ou credencial adicionada ao Git.
* [ ] API de contato validada.
* [ ] Alterações relevantes revisadas.
* [ ] Ambiente de produção corretamente configurado.

---

# 17. Validação após o deploy

Após a publicação, recomenda-se validar os principais fluxos da aplicação.

Entre eles:

```text
Página inicial
      │
      ├── Sobre Nós
      │
      ├── Produtos
      │
      └── Contato
```

Também deve ser validado o fluxo de contato:

```text
Formulário
    │
    ▼
POST /api/contact
    │
    ▼
Processamento
    │
    ▼
Envio do e-mail
```

A validação deve confirmar tanto o comportamento visual quanto as operações que dependem da API.

---

# 18. Verificação da API

Após um deploy, o endpoint de contato deve ser verificado de acordo com o ambiente publicado.

Uma requisição de teste deve utilizar o domínio correspondente:

```bash
curl -X POST https://SEU-DOMINIO/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teste JWC",
    "empresa": "JWC Distribuição",
    "email": "teste@example.com",
    "telefone": "(88) 99999-9999",
    "mensagem": "Mensagem de teste"
  }'
```

O teste deve ser realizado com cuidado para não gerar mensagens reais desnecessárias no ambiente de produção.

---

# 19. Falhas de deploy

Quando um deploy apresentar erro, a investigação deve considerar:

1. falha no build;
2. erro de TypeScript;
3. dependência ausente;
4. variável de ambiente não configurada;
5. configuração incorreta da Vercel;
6. erro em função serverless;
7. falha na integração externa;
8. problema específico do ambiente de produção.

O primeiro passo deve ser identificar em qual etapa o erro ocorreu.

---

# 20. Rollback

Caso uma publicação introduza um problema crítico, deve-se utilizar os mecanismos de histórico e versões disponibilizados pela plataforma de hospedagem para retornar a uma versão funcional.

Antes de realizar alterações adicionais, recomenda-se identificar a causa do problema para evitar repetir a falha em uma nova publicação.

---

# 21. Boas práticas de publicação

Durante o processo de deploy:

* manter commits pequenos e relacionados a uma alteração específica;
* validar o código antes da publicação;
* executar os testes relevantes;
* executar o build;
* proteger variáveis de ambiente;
* revisar alterações antes do deploy;
* evitar publicar código experimental diretamente em produção;
* validar os fluxos críticos após a publicação;
* registrar mudanças arquiteturais relevantes.

---

# 22. Relação com a documentação

O processo de publicação está relacionado a outros documentos do projeto.

```text
docs/
│
├── architecture.md
│   └── Organização arquitetural
│
├── requirements.md
│   └── Requisitos do sistema
│
├── development.md
│   └── Desenvolvimento e execução local
│
├── setup.md
│   └── Configuração do ambiente
│
├── api.md
│   └── API e endpoint de contato
│
├── testing.md
│   └── Estratégia de testes
│
└── deployment.md
    └── Publicação e produção
```

Cada documento possui uma responsabilidade específica, evitando concentrar todas as informações técnicas em um único arquivo.

---

# 23. Objetivo do processo de deploy

O processo de publicação deve garantir que uma versão validada da aplicação seja disponibilizada de maneira previsível e segura.

A sequência recomendada é:

```text
Desenvolvimento
      ↓
Testes
      ↓
Build
      ↓
Preview / Validação
      ↓
Produção
      ↓
Verificação pós-deploy
```

Esse processo reduz o risco de publicar alterações que apresentem erros funcionais, problemas de compilação ou configurações incorretas de ambiente.