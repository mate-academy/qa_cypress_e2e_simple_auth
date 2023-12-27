/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should successfully log in with valid credentials', () => {
    // Login with valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.url().should('include', '/secure');
    cy.get('.flash').should('contain', 'You logged into a secure area!');

    // Logout after successful login
    cy.contains('Logout').click();
  });

  it('should show validation errors with invalid credentials', () => {
    // Login with invalid password
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.get('.flash').should('contain', 'Your password is invalid!');
  });

  it('should show validation errors with invalid credentials', () => {
    // Login with invalid username
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.get('.flash').should('contain', 'Your username is invalid!');
  });

  it('should successfully log out', () => {
    // Login with valid credentials first
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash').should('contain', 'You logged into a secure area!');
    // Logout
    cy.contains('Logout').click();
    cy.get('.flash').should('contain', 'You logged out of the secure area!');
  });
});
