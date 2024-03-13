/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.loginUser('tomsmith', 'SuperSecretPassword!');

    cy.get('[href="/logout"]').contains('Logout');
  });

  it('Login with invalid password', () => {
    cy.loginUser('tomsmith', 'invalidPassword');

    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Login with invalid username', () => {
    cy.loginUser('invalidUsername', 'SuperSecretPassword!');

    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.loginUser('tomsmith', 'SuperSecretPassword!');

    cy.get('[href="/logout"]')
      .click();

    cy.get('.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
