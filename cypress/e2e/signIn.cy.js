/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('h2').contains('Secure Area');
  });

  it('should show validation error with invalid credentials', () => {
    cy.get('#username').type('invalidName');
    cy.get('#password').type('invalidPassword!');
    cy.get('.fa').click();
    cy.get('#flash').contains('Your username is invalid!');
  });

  it('should logout successfully after login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('h2').contains('Secure Area');

    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.get('h2').contains('Login Page');
  });
});
