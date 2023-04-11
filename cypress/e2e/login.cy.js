/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('.subheader', 'Welcome to the Secure Area. When you are done click logout below.').should('exist');
  });

  it('Login with invalid Username', () => {
    cy.get('#username').type('invalidName');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('.flash.error', 'Your username is invalid!').should('exist');
  });

  it('Login with invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.contains('button', 'Login').click();
    cy.contains('.flash.error', 'Your password is invalid!').should('exist');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('.subheader', 'Welcome to the Secure Area. When you are done click logout below.');
    cy.contains('.icon-2x.icon-signout', 'Logout').click();
    cy.contains('#flash', 'You logged out of the secure area!').should('exist');
  });
});
