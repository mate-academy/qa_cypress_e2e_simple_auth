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
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', ' You logged into a secure area!');
  });
  it('Login with not valid username', () => {
    cy.get('#username')
      .type('tomsmith1');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
  it('Login with not valid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword1!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });
  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', ' You logged into a secure area!');
    cy.get('.icon-2x')
      .click();
    cy.get('#flash')
      .should('contain', ' You logged out of the secure area!');
  });
});
