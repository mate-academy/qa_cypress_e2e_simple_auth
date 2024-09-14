/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should log out from the app after clicking [Logout]', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });

  it('should not log in with invalid credentials', () => {
    cy.get('#username')
      .type('invalidUsername');

    cy.get('#password')
      .type('invalidPassword');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
});
