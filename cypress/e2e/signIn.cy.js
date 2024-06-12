/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to login with valid creds', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.contains('button', 'Login')
      .click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'You logged into a secure area!');
    cy.assertPageUrl('/');
  });

  it('should not allow to login with invalid creds', () => {
    cy.get('[id="username"]')
      .type('tomInvalid');
    cy.get('[id="password"]')
      .type('invalidPassword!');
    cy.contains('button', 'Login')
      .click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'Your username is invalid!');
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  });

  it('should allow user to logout', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.contains('button', 'Login')
      .click();
    cy.assertPageUrl('/');
    cy.get('[href="/logout"]')
      .click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'You logged out of the secure area!');
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  });
});
