/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.validLoginCreds();

    cy.get('.fa-sign-in').click();

    cy.findByFlashMessage('success').should('exist');
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.invalidLoginCreds();

    cy.get('.fa-sign-in').click();

    cy.findByFlashMessage('failure').should('exist');
  });

  it('should provide an ability to log out from the app', () => {
    cy.validLoginCreds();

    cy.get('.fa-sign-in').click();

    cy.findByFlashMessage('success').should('exist');

    cy.get('.icon-signout').click();
  });
});
