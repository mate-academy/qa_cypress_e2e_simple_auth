/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should be able login with valid creds', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not be able login with invalid creds', () => {
    cy.get('#username').type('invalidCreds');

    cy.get('#password').type('invalidPassword');

    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should be able logout from the app', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('.icon-2x').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
