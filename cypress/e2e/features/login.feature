Feature: Login no BugBank
  Para acessar o sistema,
  Como usuário do BugBank,
  Desejo realizar login com sucesso.

  Background:
    Dado que estou na tela inicial do BugBank

  @loginSucesso
  Scenario: Login com credenciais válidas
    Quando informo o email "valid_user@mail.com"
    E informo a senha "valid_password"
    E clico no botão de Acessar
    Então devo visualizar a tela de boas-vindas

  @loginInvalido
  Scenario: Login com credenciais inválidas
    Quando informo o email "invalid_user@mail.com"
    E informo a senha "wrong_password"
    E clico no botão de Acessar
    Então devo visualizar uma mensagem de erro informando falha de autenticação

  @camposVazios
  Scenario: Tentativa de login com campos vazios
    Quando não preencho os campos de email e senha
    E clico no botão de Acessar
    Então devo visualizar uma mensagem de erro solicitando o preenchimento dos campos
