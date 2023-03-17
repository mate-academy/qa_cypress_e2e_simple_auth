/// <reference types="cypress" />

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Login with valid creds
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.contains('h2', 'Secure Area').should('be.visible');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Login with invalid creds
    cy.get('input[name="username"]').type('invalidUsername');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.contains('Your username is invalid!').should('be.visible');
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should logout successfully', () => {
    // Login with valid creds
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.contains('h2', 'Secure Area').should('be.visible');

    // Logout from the app
    cy.contains('a', 'Logout').click();

    // Assert successful logout
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
