/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.loginWithValidCreds();

    cy.get('#flash')
      .should('contains.text', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.loginWithInvalidUserName();

    cy.get('#flash')
      .should('contains.text', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.loginWithInvalidPassword();

    cy.get('#flash')
      .should('contains.text', 'Your password is invalid!');
  });

  it('Logout is successfull', () => {
    cy.loginWithValidCreds();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contains.text', 'You logged out of the secure area!');
  });
});
