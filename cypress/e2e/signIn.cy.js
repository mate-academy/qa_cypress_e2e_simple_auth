/// <reference types="cypress" />

const fillInput = (selector, value) => {
  cy.get(selector).should("be.visible");
  cy.get(selector).type(value);
  cy.get(selector).should("have.value", value);
};

const clickSubmit = () => {
  cy.get(`button[type="submit"]`)
    .should("be.visible")
    .should("not.be.disabled")
    .click();
};

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("/login"); // baseUrl + /login
    cy.url().should("contain", "/login");
  });

  it("should allow to fill username", () => {
    fillInput("#username", "tomsmith");
  });

  it("should allow to fill password", () => {
    fillInput("#password", "SuperSecretPassword!");
  });

  it("should allow to login with correct credentials", () => {
    fillInput("#username", "tomsmith");
    fillInput("#password", "SuperSecretPassword!");

    clickSubmit();

    cy.get("#flash.success", { timeout: 5000 }).should("be.visible");
  });

  it("should allow to logout", () => {
    fillInput("#username", "tomsmith");
    fillInput("#password", "SuperSecretPassword!");

    clickSubmit();

    cy.get("#flash.success", { timeout: 5000 }).should("be.visible");
    cy.get(`a[href="/logout"]`).should("be.visible").click();
    cy.url().should("contain", "/login");
  });

  it("should restrict login with wrong credentials", () => {
    fillInput("#username", "tomsmither");
    fillInput("#password", "SuperUnsecretPassword!");

    clickSubmit();

    cy.get("#flash.error", { timeout: 5000 }).should("be.visible");
  });
});
