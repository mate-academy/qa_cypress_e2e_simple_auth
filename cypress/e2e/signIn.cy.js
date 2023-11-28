/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').should('be.visible');
  });

  it('Login with invalid creds show validation message for invalid username', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible');
  });

  it('Login with invalid creds show validation message for invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('#login').should('be.visible');
  });
});
