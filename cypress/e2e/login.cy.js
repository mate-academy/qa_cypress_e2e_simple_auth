/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('tomsmith123');
    cy.get('#password').type('SuperSecretPassword!123');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

});
