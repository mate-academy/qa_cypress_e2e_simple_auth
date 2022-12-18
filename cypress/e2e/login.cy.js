/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    
  });
    

  it('Login with valid creds and logout', () => {
    
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()

    cy.url().should('contain','/secure')
    cy.get('[id="flash"]').contains('You logged into a secure area!')

    cy.get('[href="/logout"]').click()
    cy.get('[id="flash"]').contains('You logged out of the secure area!')

  });

  it('Login with invalid creds', () => {
  
    cy.get('[id="username"]').type('invalid Username')
    cy.get('[id="password"]').type('invalid Password')
    cy.get('[type="submit"]').click()

    cy.url().should('contain','/login')
    cy.get('.flash.error').contains('Your username is invalid!')

  });
});
