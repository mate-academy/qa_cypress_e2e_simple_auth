/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    // Runs before each test in the `describe` block
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    // Fill in username and password fields with valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Click on Login button
    cy.get('button[type="submit"]').click();

    // Assert successful login
    // eslint-disable-next-line max-len
    cy.contains('#flash-messages', 'You logged into a secure area!').should('be.visible');
  });

  it('should show validation errors with invalid credentials', () => {
    // Fill in username and password fields with invalid credentials
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');

    // Click on Login button
    cy.get('button[type="submit"]').click();

    // Assert validation errors
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should logout successfully', () => {
    // Login with valid credentials first
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Click on Logout link or button
    cy.get('a[href="/logout"]').click();

    // Assert successful logout
    // eslint-disable-next-line max-len
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
