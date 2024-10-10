/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('jhope');
    cy.get('#password').type('qwertyty');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.icon-2x.icon-signout').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('contain', '');
  });
});
