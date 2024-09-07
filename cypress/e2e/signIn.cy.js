/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');

    cy.findById('username')
      .as('usernameInput');

    cy.findById('password')
      .as('passwordInput');
  });

  it('should show success login if data is valid', () => {
    cy.get('@usernameInput')
      .type('tomsmith');

    cy.get('@passwordInput')
      .type('SuperSecretPassword!' + '{Enter}');

    cy.findById('flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.url().should('include', '/secure');
  });

  it('should show error login if data is not valid', () => {
    cy.get('@usernameInput')
      .type('tomsmith2');

    cy.get('@passwordInput')
      .type('SuperSecretPassword!' + '{Enter}');

    cy.findById('flash')
      .should('contain.text', 'Your username is invalid!');

    cy.get('@usernameInput')
      .type('tomsmith');

    cy.get('@passwordInput')
      .type('SuperSecretPassword!2' + '{Enter}');

    cy.findById('flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should show a notification about logging out', () => {
    cy.get('@usernameInput')
      .type('tomsmith');

    cy.get('@passwordInput')
      .type('SuperSecretPassword!' + '{Enter}');

    cy.get('[href="/logout"]')
      .click();

    cy.url().should('include', '/login');

    cy.findById('flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
