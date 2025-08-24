/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with correct credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('a.button').contains('Logout').should('be.visible');
  });

  it('should not log in with invalid username', () => {
    cy.login('invalid', 'SuperSecretPassword!');
    cy.url().should('include', '/login');
    cy.get('form#login').should('be.visible');
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not log in with invalid password', () => {
    cy.login('tomsmith', 'invalid');
    cy.url().should('include', '/login');
    cy.get('form#login').should('be.visible');
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should log out on click on logout button', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('eq', `${Cypress.config().baseUrl}/secure`);
    cy.get('a.button[href="/logout"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.get('form#login').should('be.visible');
  });
});
