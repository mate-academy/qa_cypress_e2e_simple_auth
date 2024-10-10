/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => cy.visit('https://the-internet.herokuapp.com/login'));

  it('should provide an ability to log in', () => {
    cy.url().should('contain', 'login');

    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.url().should('contain', 'secure');

    cy.contains('a', 'Logout').click();

    cy.url().should('contain', 'login');

    cy.get('#flash').should('contain', 'You logged out of the secure area!');

    cy.get('#username').type('invalidtomsmith');

    cy.get('#password').type('invalidSuperSecretPassword!');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
});
