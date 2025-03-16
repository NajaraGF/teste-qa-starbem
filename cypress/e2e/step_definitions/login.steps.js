/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/methods";

Given("que estou na tela inicial do BugBank", () => {
  cy.visit("/");
});

When("informo o email {string}", (email) => {
  cy.get("input[type='email']").type(email);
});

When("informo a senha {string}", (senha) => {
  cy.get("input[type='password']").type(senha);
});

When("clico no botão de Acessar", () => {
  cy.contains("button", "Acessar").click();
});

Then("devo visualizar a tela de boas-vindas", () => {
  cy.contains("Bem vindo(a)").should("be.visible");
});

Then("devo visualizar uma mensagem de erro informando falha de autenticação", () => {
  cy.contains("Usuário ou senha inválido").should("be.visible");
});

When("não preencho os campos de email e senha", () => {
  // Simula não preencher os campos
});

Then("devo visualizar uma mensagem de erro solicitando o preenchimento dos campos", () => {
  cy.contains("Email é obrigatório").should("be.visible");
  cy.contains("Senha é obrigatória").should("be.visible");
});
