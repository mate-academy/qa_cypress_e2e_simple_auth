/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login successfully with valid credentials', () => {
    // 1. Fill in valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // 2. Assert you successfully logged in
    cy.get('.flash.success').should('be.visible');
    cy.url().should('include', '/secure');
    cy.get('.subheader').should('contain', 'Welcome to the Secure Area');
  });

  it('should show validation errors with invalid credentials', () => {
    // 1. Fill in invalid credentials
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // 2. Assert validation errors are displayed
    cy.get('.flash.error').should('be.visible');
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('should logout from the app successfully', () => {
    // 1. First, login with valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // 2. Verify successful login before logging out
    cy.get('.flash.success').should('be.visible');

    // 3. Click the Logout button
    cy.get('a[href="/logout"]').click();

    cy.get('.flash.success')
      .should('be.visible')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
