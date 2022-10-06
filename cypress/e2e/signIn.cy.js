/// <reference types="cypress" />
describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });
  const validData = {
    username: "tomsmith",
    password: "SuperSecretPassword!",
  };
  const invalidData = {
    username: "invalidName",
    password: "invalidPassword",
  };
  it("Should allow to log in with valid data", () => {
    cy.get("[id = 'username']").type(validData.username);
    cy.get("[id = 'password']").type(validData.password);
    cy.get(".fa").click();
    cy.get("#flash").should("contain.text", "You logged into a secure area!");
  });

  it("Should allow to logout", () => {
    cy.get("[id = 'username']").type(validData.username);
    cy.get("[id = 'password']").type(validData.password);
    cy.get(".fa").click();
    cy.get(".button").click();
    cy.get('[id="flash"]').should(
      "contain.text",
      "You logged out of the secure area!"
    );
  });
  it("Shouldn`t allow to log in with invalid username", () => {
    cy.get("[id = 'username']").type(invalidData.username);
    cy.get("[id = 'password']").type(validData.password);
    cy.get(".fa").click();
    cy.get("#flash").should("contain.text", "Your username is invalid!");
  });
  it("Shouldn`t allow to log in with invalid password", () => {
    cy.get("[id = 'username']").type(validData.username);
    cy.get("[id = 'password']").type(invalidData.password);
    cy.get(".fa").click();
    cy.get("#flash").should("contain.text", "Your password is invalid!");
  });
});
