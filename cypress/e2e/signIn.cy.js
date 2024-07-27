/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.wait(2000);

    cy.contains(
      'Welcome to the Secure Area. When you ' +
      'are done click logout below.'
    ).should('be.visible');
  });

  it('should Login with invalid creds', () => {
    cy.get('#username')
      .type('Username');

    cy.get('#password')
      .type('Password');

    cy.get('.fa').click();

    cy.wait(2000);

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.wait(2000);

    cy.get('.icon-2x').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
