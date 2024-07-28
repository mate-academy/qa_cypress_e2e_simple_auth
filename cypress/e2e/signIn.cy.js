/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should Log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.wait(2000);

    cy.get('.subheader')
      .should('contain.text', 'Welcome to the Secure Area.');
  });

  it('should not Log in with invalid credentials', () => {
    cy.get('#username')
      .type('Username');

    cy.get('#password')
      .type('Password');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should Log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('.icon-2x')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
