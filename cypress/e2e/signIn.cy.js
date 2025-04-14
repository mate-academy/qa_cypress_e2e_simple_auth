/// <reference types="cypress" />

describe("Sign In page", () => {
  const userName = "tomsmith";
  const userPassword = "SuperSecretPassword!";
  const WronguserName = "UserName";
  const WronguserPassword = "Password";

  beforeEach(() => {
    cy.visit("/login");
  });

  it("should have a correct title", () => {
    cy.get("h2").should("contain.text", "Login Page");
  });

  it("should login with valid creds", () => {
    cy.enterCredentials(userName, userPassword);

    cy.get("h2").should("contain.text", "Secure Area");
  });

  it("should has validation error with invalid creds", () => {
    cy.enterCredentials(WronguserName, WronguserPassword);

    cy.get("#flash").should("contain.text", "Your username is invalid!");
  });

  it("should logout", () => {
    cy.enterCredentials(userName, userPassword);

    cy.get("[href='/logout']").click();

    cy.get("#flash").should(
      "contain.text",
      "You logged out of the secure area!"
    );
  });
});
