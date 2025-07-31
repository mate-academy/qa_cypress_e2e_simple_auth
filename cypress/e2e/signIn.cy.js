/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + '{enter}');

    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('should assert validation errors with not valid creds', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('123' + '{enter}');

    cy.url().should('include', '/login');
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('should assert you successfully logged out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + '{enter}');

    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');

    cy.get('.button').click();

    cy.url().should('include', '/login');
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
