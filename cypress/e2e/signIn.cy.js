/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid credentials', () => {
    const username = 'invalid_username';
    const password = 'invalid_password';

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
});
