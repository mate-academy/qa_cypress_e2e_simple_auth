/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.contains('Logout').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.login('invalidUser', 'invalidPassword');

    cy.get('#flash').should('be.visible').and('contain', 'is invalid!');
  });

  it('should logout from the app', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.contains('Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.get('h2').should('contain', 'Login Page');
  });
});
