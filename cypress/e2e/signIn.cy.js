/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {});

  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.contains('Login Page');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa-sign-in').click();
    cy.url().should('include', '/secure');
    cy.contains(
      'Welcome to the Secure Area. When you are done click logout below.'
    );
  });

  it('should not login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.contains('Login Page');
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('.fa-sign-in').click();
    cy.url().should('include', '/login');
    cy.contains('Your username is invalid!');
  });

  it('should logout successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.contains('Login Page');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa-sign-in').click();
    cy.url().should('include', '/secure');
    cy.contains(
      'Welcome to the Secure Area. When you are done click logout below.'
    );
    cy.get('a.button').click();
    cy.url().should('include', '/login');
    cy.contains('Login Page');
  });
});
