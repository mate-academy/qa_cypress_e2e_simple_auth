/// <reference types="cypress" />

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Login with invalid Username", () => {
    cy.get('[id="username"]').type("tomsmith");

    cy.get('[id="password"]').type("SuperSecretPassword!");

    cy.contains("button", "Login").click();

    cy.get('[id="flash"]').should(
      "contain.text",
      "You logged into a secure area!"
    );
  });

  it("Login with valid creds", () => {
    cy.get('[id="username"]').type("tomsmith2");

    cy.get('[id="password"]').type("SuperSecretPassword!");

    cy.contains("button", "Login").click();

    cy.get('[id="flash"]').should("contain.text", "Your username is invalid!");
  });

  it("Login with invalid Password", () => {
    cy.get('[id="username"]').type("tomsmith");

    cy.get('[id="password"]').type("SuperSecret2Password!");

    cy.contains("button", "Login").click();

    cy.get('[id="flash"]').should("contain.text", "Your password is invalid!");
  });

  it("Logout from the app", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.get('[id="username"]').type("tomsmith");

    cy.get('[id="password"]').type("SuperSecretPassword!");

    cy.contains("button", "Login").click();

    cy.get('[id="flash"]').should(
      "contain.text",
      "You logged into a secure area!"
    );

    cy.contains("button", "Login").click();
  });
});
