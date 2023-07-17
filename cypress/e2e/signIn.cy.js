/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should allow login with valid credentials ', () => {
    cy.get('#username').type('username');
    cy.get('#password').type('password');
    cy.contains('.fa', 'Login').click();
  });

  it('should allow login with invalid username', () => {
    cy.get('#username').type('tomsmithinvalid');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa', 'Login').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'Your username is invalid!');
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  });

  it('should allow login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword!');
    cy.contains('.fa', 'Login').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'Your password is invalid!');
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  });

  it('should allow user to logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa', 'Login').click();
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'You logged out of the secure area!');
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  });
});
