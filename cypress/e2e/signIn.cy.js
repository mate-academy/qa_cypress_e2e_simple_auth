/// <reference types="cypress" />

describe('Login Flow Tests with Custom Commands', () => {
  beforeEach(() => {
    cy.visit('/login'); // Single navigation for all tests
  });

  it('Login with valid credentials', () => {
    cy.login();
    cy.url().should('include', '/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
    cy.get('#flash').should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid username and valid password', () => {
    cy.login('wrongUser', 'SuperSecretPassword!');
    cy.location('pathname').should('eq', '/login');
    cy.get('#flash').should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('Login with valid username and invalid password', () => {
    cy.login('tomsmith', 'wrongPassword');
    cy.location('pathname').should('eq', '/login');
    cy.get('#flash').should('be.visible')
      .and('contain.text', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.login();
    cy.logout();
    cy.location('pathname').should('eq', '/login');
    cy.get('#username').should('be.visible'); // Assert login form visible
    cy.get('#flash').should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');
  });
});
