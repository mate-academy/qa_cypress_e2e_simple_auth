/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should signin with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.location('pathname').should('eq', '/secure');
  });

  it('should validate username', () => {
    cy.login('tom', 'SuperSecretPassword!');
    cy.get('#flash').contains('Your username is invalid!');
  });

  it('should validate user password', () => {
    cy.login('tomsmith', 'SuperSecretPassword');
    cy.get('#flash').contains('Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.location('pathname').should('eq', '/secure');
    cy.contains('Logout').click();
    cy.location('pathname').should('eq', '/login');
  });
});
