/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should handle login scenarios and logout', () => {
    // Login with valid credentials
    cy.login('tomsmith', 'SuperSecretPassword!');

    // Assert successful login
    cy.get('.flash.success').should(
      'contain',
      'You logged into a secure area!'
    );
    cy.url().should('include', '/secure');

    // Logout
    cy.get('a[href="/logout"]').click();

    // Assert successful logout
    cy.get('.flash.success').should(
      'contain',
      'You logged out of the secure area!'
    );
    cy.url().should('include', '/login');

    // Login with invalid credentials
    cy.login('invalidUser', 'invalidPass');

    // Assert validation error
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });
});
