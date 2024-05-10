/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();
  });

  it('Login with invalid Username', () => {
    cy.get('#username').type('Some_username');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();
  });

  it('Login with invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Some_password');

    cy.get('.fa').click();
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('.button').click();
  });
});
