/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('[data-cy="username-field"]').type('tomsmith');
    cy.get('[data-cy="password-field"]').type('SuperSecretPassword!');
    cy.get('[data-cy="submit-btn"]').click();

    cy.url().should('include', '/secure');
  });

  it('should show validation error with invalid credentials', () => {
    cy.get('[data-cy="username-field"]').type('invalidUsername');
    cy.get('[data-cy="password-field"]').type('invalidPassword');
    cy.get('[data-cy="submit-btn"]').click();

    cy.get('.flash.error').should('be.visible');
  });

  it('should logout from the app', () => {

    cy.get('[data-cy="username-field"]').type('tomsmith');
    cy.get('[data-cy="password-field"]').type('SuperSecretPassword!');
    cy.get('[data-cy="submit-btn"]').click();

    cy.get('[data-cy="logout-btn"]').click();

    cy.url().should('include', '/login');
  });
});
