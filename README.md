# Automação de Testes - BugBank

Este repositório contém os testes automatizados para o BugBank, desenvolvidos com o framework **Cypress**.

## Visão Geral

Foram criados testes automatizados para validar os principais fluxos da aplicação BugBank, utilizando a URL:  
[https://bugbank.netlify.app/](https://bugbank.netlify.app/)

Os testes abrangem:

- **Fluxo de Login:**  
  - Validação de login com credenciais válidas.  
  - Verificação de mensagens de erro para credenciais inválidas ou campos vazios.

- **Formulário de Cadastro:**  
  - Exibição do formulário de registro.  
  - Registro de novo usuário com sucesso.  
  - Validação de erros para senhas diferentes e email inválido.

## Estrutura do Projeto

- **cypress/e2e/fluxo-login:** Testes do fluxo de login.
- **cypress/e2e/formulario-de-cadastro:** Testes do formulário de cadastro.
- **cypress.config.js:** Configuração do Cypress para o projeto.
- **package.json:** Gerencia as dependências e scripts do projeto.

## Como Executar os Testes

1. **Instale as dependências:**
   ```bash
   npm install
  
2. **Abra o Cypress em modo interativo:**
    ```bash
   npx cypress open
3. Ou execute os testes em modo headless:
   ```bash
   npx cypress run
  
## Notas Adicionais
 - Devido ao layout da aplicação (uso de flip card para alternar entre os formulários de login e registro), alguns testes utilizam a opção { force: true } para interagir com elementos que, pelo CSS, podem não estar visíveis.
 - Se houver alterações na aplicação, os seletores dos elementos podem necessitar de ajustes.
 
