/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalid';
  const invalidPassword = 'invalid';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    // Type valid credentials and submit the form
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();

    // Assert successful login (check URL and success message)
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!');
  });

 
  it('Login with invalid creds', () => {
    // Type invalid credentials and submit the form
    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.get('button[type="submit"]').click();

    // Assert validation errors are displayed
    // Try targeting a more specific container like .flash.error or similar
    cy.get('.flash.error').should('be.visible');
  });

  it('Logout from the app', () => {
    // First, login with valid credentials
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();

    // Click the logout button
    cy.contains('Logout').click();

    // Assert that the login form is displayed again after logout
    cy.url().should('include', '/login');
    cy.get('input[name="username"]').should('be.visible');
  });
});
