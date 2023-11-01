/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide the ability to login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should provide an error message if login with invalid Username', () => {
    cy.get('#username')
      .type('qwerty');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should provide an error message if login with invalid Password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('qwerty');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide the ability to logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('.button')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
