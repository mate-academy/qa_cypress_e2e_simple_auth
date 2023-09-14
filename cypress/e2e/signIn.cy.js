/// <reference types="cypress" />
import '../support/commands.js';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.get('[id="flash"]').should('contain.text', 'You logged into');
  });

  it('Logout from the app', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash"]').should('contain.text', 'You logged out');
  });

  it('Login with invalid creds', () => {
    cy.login('nonValidUsername', 'nonValidPassword!');
    cy.get('[id="flash"]').should('contain.text', 'Your username is invalid');
  });
});
