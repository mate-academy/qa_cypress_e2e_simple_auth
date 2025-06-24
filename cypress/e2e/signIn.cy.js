/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success').should(
      'contain', 'You logged into a secure area!');
  });

  it('should show error message for invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPass');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success').should(
      'contain', 'You logged into a secure area!');

    cy.contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('.flash.success').should(
      'contain', 'You logged out of the secure area!');
  });
});
