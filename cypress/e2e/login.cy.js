/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Login with valid creds", () => {
    cy.get("#username").type("tomsmith");

    cy.get("#password").type("SuperSecretPassword!");

    cy.contains('[type="submit"]', "Login").click();

    cy.get("#flash").should("contain.text", "You logged into a secure area!");

    cy.contains('[href="/logout"]', "Logout").click();

    cy.get("#flash").should(
      "contain.text",
      "You logged out of the secure area!"
    );
  });

  it("Login with invalid Username", () => {
    cy.get("#username").type("tomsmis");

    cy.get("#password").type("SuperSecretPassword!");

    cy.contains('[type="submit"]', "Login").click();

    cy.get("#flash").should("contain.text", "Your username is invalid!");
  });

  it("Login with invalid ", () => {
    cy.get("#username").type("tomsmith");

    cy.get("#password").type("SuperSecretPassword1");

    cy.contains('[type="submit"]', "Login").click();

    cy.get("#flash").should("contain.text", "Your password is invalid!");
  });

  it('user is able to logout from app', () => {
    cy.get("#username").type("tomsmith");

    cy.get("#password").type("SuperSecretPassword!");

    cy.contains('[type="submit"]', "Login").click();

    cy.get("#flash").should("contain.text", "You logged into a secure area!");

    cy.contains('[href="/logout"]', "Logout").click();

    cy.get("#flash").should(
      "contain.text",
      "You logged out of the secure area!")
  });
});
