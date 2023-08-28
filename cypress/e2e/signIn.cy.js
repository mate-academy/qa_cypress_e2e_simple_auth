/// <reference types="cypress" />
describe('Sign In and Logout Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid creds', () => {
    cy.loginWithCredentials();

    cy.contains('a', 'Settings').click();
    cy.contains('button', 'Or click here to logout').click();
  });

  it('should login with invalid creds', () => {
    cy.contains('a.nav-link', 'Sign in').click();
    cy.loginWithInvalidCredentials();

    cy.get('.error-messages > li')
      .should('contain.text', 'email or password is invalid');
  });

  it('should return to home page', () => {
    cy.get('.navbar-brand').contains('conduit').click();
  });
});
