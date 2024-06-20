/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  // logging in with valid creds
  it('should successfully log in with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('form button').contains('Login').click();
    cy.get('#flash-messages').contains('You logged in');
  });

  // logging in with invalid creds
  it('should not log in with invalid creds', () => {
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalid!');
    cy.get('form button').contains('Login').click();
    cy.get('#flash-messages').contains('Your username is invalid');
  });

  // logging out from the app
  it('should log the user out from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('form button').contains('Login').click();
    cy.get('#flash-messages').contains('You logged in');
    cy.get('a.button.secondary.radius').click();
    cy.get('#flash-messages').contains('You logged out');
  });
});
