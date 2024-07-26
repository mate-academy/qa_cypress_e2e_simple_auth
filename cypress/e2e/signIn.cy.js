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

  describe('Invalid Login', () => {
    it('should show validation errors with an invalid username', () => {
      cy.get('#username').type('invalidUsername');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain.text', 'Your username is invalid!');
    });

    it('should show validation errors with an invalid password', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('invalidPassword');
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain.text', 'Your password is invalid!');
    });
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
