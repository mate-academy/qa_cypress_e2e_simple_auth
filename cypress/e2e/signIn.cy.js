/// <reference types="cypress" />

describe('Sign In page', () => {
  const url = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should provide to log in with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not provide to log in with invalid creds', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('Logs out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
