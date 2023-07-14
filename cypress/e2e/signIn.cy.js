/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should log out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('a[href="/logout"]').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
