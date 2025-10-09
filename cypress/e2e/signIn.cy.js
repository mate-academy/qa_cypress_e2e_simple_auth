/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in successfully with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.assertLoginSuccess();
  });

  it('should show error for invalid credentials', () => {
    cy.login('wrongUser', 'wrongPass');
    cy.assertLoginError('Your username is invalid!');
  });

  it('should log out successfully', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.assertLoginSuccess();

    cy.logout();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
      .and('have.class', 'success');
  });
});
