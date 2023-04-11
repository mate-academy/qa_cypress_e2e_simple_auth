/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should login with valid credentials', () => {
    cy.get('#username').as('usernameField').should('be.visible').type('tomsmith');
    cy.get('#password').as('passwordField').should('be.visible').type('SuperSecretPassword!');
    cy.contains('button', 'Login').should('be.visible').click();
    cy.get('#flash-messages').should('include.text', 'You logged into a secure area!');
    cy.contains('.icon-signout', 'Logout').should('be.visible').click();
    cy.get('#flash').should('include.text', 'You logged out of the secure area!');
  });
  it('should login with invalid Username', () => {
    cy.get('#username').type('tomsmith12');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('#flash').should('include.text', 'Your username is invalid!');
  });
  it('should login with invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword11!');
    cy.contains('button', 'Login').click();
    cy.get('#flash').should('include.text', 'Your password is invalid!');
  });
});
