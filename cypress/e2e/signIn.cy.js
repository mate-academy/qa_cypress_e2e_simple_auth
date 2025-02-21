/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('logs in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('fails to log in with invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('logs out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a.button').click();

    cy.url().should('include', '/login');
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
