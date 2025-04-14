/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should successfully login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'You logged into a secure area!')
      .should('have.class', 'success');
    cy.url().should('include', '/secure');
  });

  it('should show error if invalid username', () => {
    cy.get('#username').type('tomsmith32');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'Your username is invalid!')
      .should('have.class', 'error');
  });

  it('should show error if invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecr');
    cy.contains('button', 'Login').click();
    cy.contains('#flash', 'Your password is invalid!')
      .should('have.class', 'error');
  });

  it.only('should logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.url().should('include', '/secure');
    cy.contains('a', 'Logout').click();
    cy.url().should('include', '/login');
    cy.contains('#flash', 'You logged out of the secure area!')
      .should('have.class', 'success');
  });
});
