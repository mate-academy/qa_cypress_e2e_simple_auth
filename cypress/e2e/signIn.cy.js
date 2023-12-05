/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecretPassword!');
    cy.get('form button').get('.radius').contains('Login').click();
    cy.url().should('contain', '/secure');
    cy.get('body .row').get('#content .example').get('h2')
      .should('have.text', ' Secure Area');
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Logout from the app', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecretPassword!');
    cy.get('form button').get('.radius').contains('Login').click();
    cy.get('body .row:last-child').get('#content .example')
      .get('a[class="button secondary radius"]').contains('Logout').click();
    cy.url().should('include', '/login');
    cy.get('body').should('contain.text', 'You logged out of the secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('input[id="username"]').type('tomsmith');
    cy.get('input[id="password"]').type('SuperSecret!');
    cy.get('form button').get('.radius').contains('Login').click();
    cy.get('body').get('.row:first-child #flash')
      .should('contain', 'Your password is invalid!');
  });
});
