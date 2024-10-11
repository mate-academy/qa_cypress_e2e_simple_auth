/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();
  });

  it('should not login with invalid creds', () => {
    cy.get('#username').type('tom');
    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Password');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should login with valid creds ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
