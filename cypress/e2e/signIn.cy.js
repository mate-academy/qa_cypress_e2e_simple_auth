/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should login with valid creds and then logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button i').contains('Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area');
    cy.get('.button i').contains('Logout').click();
    cy.get('#flash').should('contain.text', 'You logged out');
  });
  it('should appear a message when username is invalid', () => {
    cy.get('#username').type('tom');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button i').contains('Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
  it('should appear a message when password is invalid', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Super!');
    cy.get('button i').contains('Login').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
