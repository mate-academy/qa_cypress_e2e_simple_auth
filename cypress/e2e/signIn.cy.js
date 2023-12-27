/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow to login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.url()
      .should('not.include', '/login');
  });

  it('should not allow to login with invalid creds', () => {
    cy.get('#username')
      .type('neon');

    cy.get('#password')
      .type('neon');

    cy.get('.fa')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should allow to logout after being logged in', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.url()
      .should('not.include', '/login');

    cy.get('.icon-2x.icon-signout')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
