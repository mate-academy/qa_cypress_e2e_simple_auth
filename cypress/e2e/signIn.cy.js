/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalid';
  const invalidPassword = 'invalid';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in successfully', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should fail with invalid data', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/login');
    cy.contains('Your username is invalid').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/secure');
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
