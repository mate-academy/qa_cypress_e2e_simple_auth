/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('login');
  });

  it('login with valid creds', () => {
    cy.get('h2')
      .should('have.text', 'Login Page');

    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('login with invalid creds', () => {
    cy.get('h2')
      .should('have.text', 'Login Page');

    cy.get('#username')
      .type('invalid Username');

    cy.get('#password')
      .type('invalid Password');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('logout from the app', () => {
    cy.get('h2')
      .should('have.text', 'Login Page');

    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button')
      .click();

    cy.url('login');
  });
});
