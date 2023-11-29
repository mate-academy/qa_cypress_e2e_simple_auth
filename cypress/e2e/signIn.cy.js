/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('exist');
  });

  it('should NOT provide an ability to log in with invalid creds', () => {
    cy.get('#username')
      .type('invalidusername');

    cy.get('#password')
      .type('invalidpassword');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('exist');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('exist');
  });
});
