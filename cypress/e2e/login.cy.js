/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
    cy.contains('Welcome to the Secure Area').should('be.visible')
  });

  it('Login with invalid creds', () => {
    cy.get('#username').type('invalidUsername')
    cy.get('#password').type('invalidPassword')
    cy.get('.fa-sign-in').click()
    cy.contains('Your username is invalid!').should('be.visible')
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
    cy.get('.icon-2x.icon-signout').click()
    cy.contains('You logged out of the secure area!').should('be.visible')
  });
});