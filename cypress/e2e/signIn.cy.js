/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in, show validation errors, and log out successfully', () => {
    // 1. Login with valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');

    // 2. Logout successfully
    cy.get('a[href="/logout"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');

    // 3. Login with invalid credentials
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });
});
