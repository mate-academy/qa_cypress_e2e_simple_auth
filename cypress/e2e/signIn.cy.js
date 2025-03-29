/* eslint-disable quotes */
/// <reference types="cypress" />

const testData = {
  validUser: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  },
  invalidUser: {
    username: 'invalid',
    password: 'invalid'
  }
};

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should login with valid credentials", () => {
    cy.get("#username").type(testData.validUser.username);
    cy.get("#password").type(testData.validUser.password + "{enter}");
    cy.get("#flash")
      .should("be.visible")
      .and("contain", "You logged into a secure area!");
  });

  it("should display error message with invalid username", () => {
    cy.get("#username").type(testData.invalidUser.username);
    cy.get("#password").type(testData.validUser.password + "{enter}");
    cy.get("#flash")
      .should("be.visible")
      .and("contain", "Your username is invalid!");
  });

  it("should display error message with invalid password", () => {
    cy.get("#username").type(testData.validUser.username);
    cy.get("#password").type(testData.invalidUser.password + "{enter}");
    cy.get("#flash")
      .should("be.visible")
      .and("contain", "Your password is invalid!");
  });

  it("should log out successfully", () => {
    cy.request({
      method: 'POST',
      url: '/authenticate',
      form: true,
      body: {
        username: testData.validUser.username,
        password: testData.validUser.password
      }
    }).then(() => {
      cy.visit('/secure');
      cy.get('a[href="/logout"]').click();
      cy.get('#flash')
        .should('be.visible')
        .and('contain', 'You logged out of the secure area!');
    });
  });
});
