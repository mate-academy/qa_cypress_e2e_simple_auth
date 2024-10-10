/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('SuperSecretPassword!');
    cy.get('button').contains('Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('input#username').type('tomsmith1');
    cy.get('input#password').type('SuperSecretPassword!1');
    cy.get('button').contains('Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('SuperSecretPassword!');
    cy.get('button').contains('Login').click();
    cy.contains('Logout').click();
  });
});
