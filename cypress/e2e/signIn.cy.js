/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('input[name="username"]').type('tomsmith');

    cy.get('input[name="password"]').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('.subheader')
      .should('contain.text',
        'Welcome to the Secure Area. When you are done click logout below.');
  });

  it('Login with invalid creds', () => {
    cy.get('input[name="username"]').type('notvalid');

    cy.get('input[name="password"]').type('NotValid');

    cy.contains('button', 'Login').click();

    cy.get('#flash')
      .should('contain.text',
        'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('input[name="username"]').type('tomsmith');

    cy.get('input[name="password"]').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('.subheader')
      .should('contain.text',
        'Welcome to the Secure Area. When you are done click logout below.');
    cy.contains('.button', 'Logout').click();

    cy.url().should('include', '/login');
  });
});
