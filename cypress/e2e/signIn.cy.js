/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login with valid username and password', () => {
    cy.visit('login');
    cy.get('#username')
      .type(Cypress.env('username'));
    cy.get('#password')
      .type(Cypress.env('password'));
    cy.get('button[type="submit"]')
      .click();
    cy.assertPageUrl('/secure');
    cy.contains('h2', 'Secure Area')
      .should('exist');
  });

  it('should show error with wrong username, if username is invalid', () => {
    cy.visit('login');
    cy.get('#username')
      .type('otheruser');
    cy.get('#password')
      .type(Cypress.env('password'));
    cy.get('button[type="submit"]')
      .click();
    cy.contains('#flash', 'Your username is invalid!')
      .should('exist');
    cy.assertPageUrl('/login');
  });

  it('should show error with wrong password, if password is invalid', () => {
    cy.visit('login');
    cy.get('#username')
      .type(Cypress.env('username'));
    cy.get('#password')
      .type('wrongpassword');
    cy.get('button[type="submit"]')
      .click();
    cy.contains('#flash', 'Your password is invalid!')
      .should('exist');
    cy.assertPageUrl('/login');
  });

  it('should have worked logout button', () => {
    cy.visit('login');
    cy.get('#username')
      .type(Cypress.env('username'));
    cy.get('#password')
      .type(Cypress.env('password'));
    cy.get('button[type="submit"]')
      .click();
    cy.contains('h2', 'Secure Area')
      .should('exist');
    cy.assertPageUrl('/secure');
    cy.get('a[href="/logout"]')
      .click();
    cy.contains('h2', 'Login Page')
      .should('exist');
    cy.assertPageUrl('/login');
  });
});
