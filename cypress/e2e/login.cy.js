/// <reference types="cypress" />

describe('Login with valid creds', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('tomsmith')
    cy.get('#password')
    .type('SuperSecretPassword!')
    cy.contains('button','Login')
    .click();
    
    cy.contains('You logged into a secure area!')
     .should('be.visible');
    
  })
 
  it('Login with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('tomsmith1')
    cy.get('#password')
    .type('SuperSecretPassword1!')

    cy.contains('button','Login')
    .click()
    cy.contains('Your username is invalid!')
    .should('be.visible');
  });

    it('Logout from the app', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username')
      .type('tomsmith')
      cy.get('#password')
      .type('SuperSecretPassword!')
      cy.contains('button','Login')
      .click();
      cy.get('[href="/logout"]')
    .click();
      cy.contains('You logged out of the secure area!')
      .should('be.visible')
    });
  });