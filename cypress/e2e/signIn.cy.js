/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    // Site open
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    // Value input
    cy.get('input[name = username]').type('tomsmith');
    cy.get('input[name = password]').type('SuperSecretPassword!');
    // Validation
    cy.contains('button', 'Login').click();
    // Assertions check
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('Login with invalid creds', () => {
    // Value input
    cy.get('input[name = username]').type('testInvalidUsername');
    cy.get('input[name = password]').type('testInvalid Password');
    // Validation
    cy.contains('button', 'Login').click();
    // Assertions check
    cy.get('#flash-messages').should('exist');
    cy.get('#flash-messages').should('contain.text', 'Your username is invalid!');
  });

  it.only('Logout from the app', () => {
    // Login
    cy.get('input[name = username]').type('tomsmith');
    cy.get('input[name = password]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    // Logout
    cy.contains('a', 'Logout').click();
    // Assertions check
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
    cy.get('h2').should('have.text', 'Login Page');
  });
});
