Feature: Login no BugBank
  Para acessar o sistema do BugBank,
  Como usuário,
  Desejo realizar o login com sucesso ou receber mensagens de erro apropriadas.

  Background:
    Dado que estou na tela inicial do BugBank

  @loginSucesso
  Scenario: Login com credenciais válidas
    Quando informo o email "luizateste@gmail.com"
    E informo a senha "Senha@123"
    E clico no botão de Acessar
    Então devo visualizar "Usuário ou senha inválido" 

  @loginInvalido
  Scenario: Login com credenciais inválidas
    Quando informo o email "luizatestegmail.com"
    Então devo visualizar a mensagem de erro "É campo obrigatório"
    E informo a senha "Senh123"
    Então devo visualizar a mensagem de erro "É campo obrigatório"
    E clico no botão de Acessar
    Então devo visualizar a mensagem de erro "Formato inválido"

  @camposVazios
  Scenario: Tentativa de login com campos vazios
    Quando não preencho os campos de email e senha
    E clico no botão de Acessar
    Então devo visualizar a mensagem "Email é obrigatório"
    E devo visualizar a mensagem "Senha é obrigatória"
