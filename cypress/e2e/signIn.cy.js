/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('Username');
    cy.get('#password').type('password');

    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('tomsmith111!!');

    cy.get('.radius').click();
    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();
    cy.get('.flash.success').should('contain', 'You logged into');
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('h2').should('contain', 'Login');
  });
});
