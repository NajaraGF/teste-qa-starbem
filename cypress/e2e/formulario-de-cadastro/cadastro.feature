Feature: Registro de novo usuário no BugBank
  Para criar uma conta e acessar os serviços do BugBank,
  Como novo usuário,
  Quero registrar meus dados no sistema.

  Background:
    Dado que estou na tela inicial do BugBank

  @exibirFormulario
  Scenario: Exibir o formulário de cadastro ao clicar em "Registrar"
    Quando clico no botão "Registrar"
    Então o formulário de cadastro é exibido contendo:
      | Campo                  |
      | E-mail                 |
      | Senha                  |
      | Confirmação de senha   |
      | Nome                   |
    E a opção "Criar conta com saldo ?" é exibida
    E o botão "Cadastrar" é exibido

  @cadastroSucesso
  Scenario: Cadastro com sucesso de um novo usuário
    Quando clico no botão "Registrar"
    E preencho o campo "E-mail" com "luizateste@gmail.com"
    E preencho o campo "Nome" com "Luiza Silva"
    E preencho o campo "Senha" com "Senha@123"
    E preencho o campo "Confirmação de senha" com "Senha@123"
    E clico no botão "Cadastrar"
    Então uma mensagem de sucesso é exibida

  @senhasDiferentes
  Scenario: Exibir mensagem de erro ao registrar com senhas diferentes
    Quando clico no botão "Registrar"
    E preencho o campo "E-mail" com "luizateste@gmail.com"
    E preencho o campo "Nome" com "Luiza Silva"
    E preencho o campo "Senha" com "Senha@123"
    E preencho o campo "Confirmação de senha" com "Senha123"
    E clico no botão "Cadastrar"
    Então a mensagem "As senhas não são iguais." é exibida

  @emailInvalido
  Scenario: Exibir mensagem de erro ao registrar com email inválido
    Quando clico no botão "Registrar"
    E preencho o campo "E-mail" com "luiza@123"
    E preencho o campo "Nome" com "Luiza Silva"
    E preencho o campo "Senha" com "Senha@123"
    E preencho o campo "Confirmação de senha" com "Senha@123"
    E clico no botão "Cadastrar"
    Então a mensagem "Formato inválido" é exibida
