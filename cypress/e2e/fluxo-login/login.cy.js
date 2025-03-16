describe("Login no BugBank", () => {
  
    beforeEach(() => {
      // Acesse a página inicial antes de cada teste
      cy.visit("https://bugbank.netlify.app/");
    });
  
    it("Deve fazer login com credenciais válidas", () => {
      cy.get('input[name="email"]', { timeout: 10000 }).eq(0).type("luizateste@gmail.com", { force: true })
      cy.get('input[name="password"]').eq(0).type("Senha@123", { force: true });
      cy.contains("button", "Acessar").click();
  
      // Porém, ao acessar com os dados cadastrados, apresenta mensagem de Usuário ou senha inválido.
      cy.contains("Usuário ou senha inválido").should("exist");
    });
  
    it("Deve exibir erro ao usar credenciais inválidas", () => {
      cy.get('input[name="email"]', { timeout: 10000 }).eq(0).type("luizatestegmail.com", { force: true })
      cy.get("input[type='password']").eq(0).type("Senh123", { force: true });
      cy.contains("button", "Acessar").click({ force: true });
  
      // Verifica a mensagem de erro
      cy.contains("Formato inválido").should("be.visible");
    });
  
    it("Deve exibir mensagem de erro ao tentar logar com campos vazios", () => {
      // Não preenche nada
      cy.contains("button", "Acessar").click();
  
      // Verifica se a mensagem de erro para e-mail e senha aparece
      cy.contains("É campo obrigatório").should("be.visible");
      cy.contains("É campo obrigatório").should("be.visible");
    });
  });
  