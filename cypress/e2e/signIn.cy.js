/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Logs in with valid credentials', () => {
    // Fill in valid credentials and submit the form
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert successful login
    cy.contains('Welcome to the Secure Area').should('be.visible');
  });

  it('Displays validation errors with invalid credentials', () => {
    // Fill in invalid credentials and submit the form
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Logs out successfully', () => {
    // Login with valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Logout
    cy.contains('Logout').click();

    // Assert successful logout
    cy.contains('You logged out').should('be.visible');
  });
});
