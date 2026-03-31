/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow a user to log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.get('#username').type('wrongUser');
    cy.get('#password').type('wrongPassword');

    cy.get('button[type="submit"]').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('a', 'Logout').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
