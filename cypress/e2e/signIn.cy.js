/// <reference types="cypress" />

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Must provide an ability to log in with valid credentials", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");

    cy.get('button[type="submit"]').click();

    cy.get("#flash").should("contain.text", "You logged into a secure area!");
  });

  it("Must not provide access to user that enters invalid credentials", () => {
    cy.get("#username").type("janbron");
    cy.get("#password").type("superpswormd");

    cy.get('button[type="submit"]').click();

    cy.get("#flash").should("contain.text", "Your username is invalid!");
  });
  it("Must provide Logout ability by clicking the button", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");

    cy.get('button[type="submit"]').click();

    // Wylogowanie
    cy.get('a[href="/logout"]').click();

    cy.get("#flash").should(
      "contain.text",
      "You logged out of the secure area!"
    );
  });
});
