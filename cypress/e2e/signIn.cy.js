/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {});

  it('should login with valid creds', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.get('.flash.success').should('be.visible');
  });

  it('should not login with invalid creds', () => {
    cy.login('tomsmith', 'badpassword');
    cy.get('.flash.error').should('be.visible');
  });

  it('should logout', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.get('.flash.success').should('be.visible');
    cy.contains('Logout').click();
    cy.get('.flash.success').should('be.visible');
  });
});
