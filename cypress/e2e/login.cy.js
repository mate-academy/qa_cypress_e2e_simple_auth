/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it('login with valid inputs', () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("include.text", " You logged into a secure area!");
    cy.get(".button").click();
  });
   it("Logout from the app", () => {
     cy.get("#username").type("tomsmith");
     cy.get("#password").type("SuperSecretPassword!");
     cy.get(".fa").click();
     cy.get("#flash").should("include.text", " You logged into a secure area!");
     cy.get(".button").click();
     cy.get("#flash").should("include.text"," You logged out of the secure area!");
   });
  it("should not allow to login with invalid username", () => {
    cy.get("#username").type("tomsmith23");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("include.text", "Your username is invalid!");
  });
  it("should not allow to login with invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword123!");
    cy.get(".fa").click();
    cy.get("#flash").should("include.text", "Your password is invalid!");
  });
});
