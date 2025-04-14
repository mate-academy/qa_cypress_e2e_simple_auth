/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds (invalid Username)', () => {
    cy.get('#username')
      .type('invalidUsername');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Login with invalid creds (invalid Password)', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('invalidPassword');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
