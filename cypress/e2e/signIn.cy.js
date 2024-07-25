/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('h2').should('contain', 'Secure Area');
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('smith');
    cy.get('#password').type('Password!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
