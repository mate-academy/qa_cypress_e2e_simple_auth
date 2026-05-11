/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('assert message if login was successful', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('assert message if invalid username', () => {
    cy.get('#username').type('invaliduser');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('assert message if invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidpassword');

    cy.get('.fa-sign-in').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('assert message if logout was successful', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();
    cy.get('.icon-signout').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
