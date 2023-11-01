/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not provide ability to log in with invalid Username', () => {
    cy.get('#username')
      .type('wrongName');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should not provide ability to log in with invalid Password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('wrongPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
