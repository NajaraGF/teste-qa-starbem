// filepath: cypress/e2e/formulario-de-cadastro/cadastro.cy.test.js

describe("Testes do Fluxo de Registro no BugBank", () => {

    beforeEach(() => {
        // Dado: que estou na tela inicial do BugBank
        cy.visit("https://bugbank.netlify.app/");
    });

    it("Deve exibir o formulário de registro ao clicar em Registrar", () => {
        // Quando: clico no botão Registrar
        cy.contains("button", "Registrar").click();

        // Então: verifico se o formulário de cadastro é exibido
        cy.get('input[name="email"]', { timeout: 10000 }).should('exist');
        cy.get('input[name="password"]', { timeout: 10000 }).should('exist');
        cy.get('input[name="passwordConfirmation"]', { timeout: 10000 }).should('exist');
        cy.get('input[name="name"]', { timeout: 10000 }).should('exist');

        cy.contains("Criar conta com saldo ?", { timeout: 10000 }).should('exist');
        cy.contains("button", "Cadastrar", { timeout: 10000 }).should('exist');
    });

    it("Deve preencher os campos e criar um novo usuário com sucesso", () => {
        // Quando: clico em Registrar e preencho o formulário
        cy.contains("button", "Registrar").click();

        cy.get('input[name="email"]', { timeout: 10000 }).eq(1).type("luizateste@gmail.com", { force: true });
        cy.get('input[name="name"]', { timeout: 10000 }).eq(0).type("Luiza Silva", { force: true });
        cy.get('input[name="password"]').eq(1).type("Senha@123", { force: true });
        cy.get('input[name="passwordConfirmation"]').eq(0).type("Senha@123", { force: true });

        cy.contains("button", "Cadastrar").click({ force: true });

        // Então: valida se aparece mensagem de sucesso ou se a conta foi criada
        cy.contains("sucesso").should("exist");
    });

    it("Deve exibir mensagem de erro ao tentar registrar com senhas diferentes", () => {
        // Quando: clico em Registrar e preencho o formulário com senhas diferentes
        cy.contains("button", "Registrar").click();

        cy.get('input[name="email"]', { timeout: 10000 }).eq(1).type("luizateste@gmail.com", { force: true });
        cy.get('input[name="name"]', { timeout: 10000 }).eq(0).type("Luiza Silva", { force: true });
        cy.get('input[name="password"]').eq(1).type("Senha@123", { force: true });
        cy.get('input[name="passwordConfirmation"]').eq(0).type("Senha123", { force: true });

        cy.contains("button", "Cadastrar").click({ force: true });

        // Então: valida se aparece mensagem de erro
        cy.contains("As senhas não são iguais.").should("exist");
    });

    it("Deve exibir mensagem de erro ao tentar registrar com email inválido", () => {
        // Quando: clico em Registrar e preencho o formulário com email inválido
        cy.contains("button", "Registrar").click({ force: true });

        cy.get('input[name="email"]', { timeout: 10000 }).eq(1).type("luiza@123", { force: true });
        cy.get('input[name="name"]', { timeout: 10000 }).eq(0).type("Luiza Silva", { force: true });
        cy.get('input[name="password"]').eq(1).type("Senha@123", { force: true });
        cy.get('input[name="passwordConfirmation"]').eq(0).type("Senha@123", { force: true });

        cy.contains("button", "Cadastrar").click({ force: true });

        // Então: valida se aparece mensagem de erro
        cy.contains("Formato inválido").should("exist");
    });

});