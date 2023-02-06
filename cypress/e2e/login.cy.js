/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login page. Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Login page. Login with invalid creds', () => {
    cy.get('#username')
      .type('tomsmi');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Login page. Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });
});
