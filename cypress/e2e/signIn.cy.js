/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('Login').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.contains('Logout').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    // Вводимо фейкові дані
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('be.visible').and('contain', 'invalid!');
  });

  it('should logout from the app', () => {
    // Логінимось, щоб мати змогу вийти
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.contains('Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.get('h2').should('contain', 'Login Page');
  });
});
