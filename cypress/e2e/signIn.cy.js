/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should open successfully', () => {
    cy.get('h2')
      .should('contain', 'Login Page');
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

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should NOT provide an ability to log in with invalid username', () => {
    cy.get('#username')
      .type('invalidusername');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('exist');

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should NOT provide an ability to log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('invalidpassword');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('exist');

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
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

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
