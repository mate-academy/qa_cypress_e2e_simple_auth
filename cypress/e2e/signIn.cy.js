/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with correct credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('eq', `${Cypress.config().baseUrl}/secure`);
  });

  it('should not log in with invalid username', () => {
    cy.login('invalid', 'SuperSecretPassword!');
    cy.contains('Your username is invalid!').should('be.visible');
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
  });

  it('should not log in with invalid password', () => {
    cy.login('tomsmith', 'invalid');
    cy.contains('Your password is invalid!').should('be.visible');
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
  });

  it('should log out on click on logout button', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('eq', `${Cypress.config().baseUrl}/secure`);
    cy.get('a.button[href="/logout"]').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
  });
});
