/// <reference types="cypress" />

describe('Sign In page', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Logs in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('Shows error with invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('wrongPassword');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('.flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid');
  });

  it('Logs out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');

    cy.get('a.button').contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('.flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
