/* eslint-disable */

/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login'); // 🔹 Navigate to login page before each test
  });

  it('should log in with valid credentials', () => {
    cy.get("input[name='username']").type('tomsmith');
    cy.get("input[name='password']").type('SuperSecretPassword!');
    cy.get("button[type='submit']").click();

    // 🔹 Assert login success
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, tomsmith').should('be.visible');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.get("input[name='username']").type('invalidUser');
    cy.get("input[name='password']").type('invalidPass');
    cy.get("button[type='submit']").click();

    // 🔹 Assert error messages
    cy.contains('Your username is invalid!').should('be.visible');
    cy.contains('Your password is incorrect!').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.login('tomsmith', 'SuperSecretPassword!'); // 🔹 Custom command for login
    cy.get('button.logout').click(); // 🔹 Click logout button

    // 🔹 Assert logout success
    cy.url().should('include', '/login');
    cy.contains('You have been logged out').should('be.visible');
  });
});
