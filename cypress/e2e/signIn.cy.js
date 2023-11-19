/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('[data-cy="username-field"]').type('tomsmith'); // replace with the actual selectors
    cy.get('[data-cy="password-field"]').type('SuperSecretPassword!');
    cy.get('[data-cy="submit-btn"]').click();

    // assert you successfully logged in
    cy.url().should('include', '/secure'); // replace with the actual URL after login
  });

  it('should show validation error with invalid credentials', () => {
    cy.get('[data-cy="username-field"]').type('invalidUsername');
    cy.get('[data-cy="password-field"]').type('invalidPassword');
    cy.get('[data-cy="submit-btn"]').click();

    // assert validation errors
    cy.get('.flash.error').should('be.visible'); // replace with the actual selector for the error message
  });

  it('should logout from the app', () => {
    // login first
    cy.get('[data-cy="username-field"]').type('tomsmith');
    cy.get('[data-cy="password-field"]').type('SuperSecretPassword!');
    cy.get('[data-cy="submit-btn"]').click();

    // then logout
    cy.get('[data-cy="logout-btn"]').click(); // replace with the actual selector for the logout button

    // assert you successfully logged out
    cy.url().should('include', '/login'); // replace with the actual URL after logout
  });
});
