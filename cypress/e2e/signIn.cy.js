/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    
    cy.visit('https://the-internet.herokuapp.com/login')

  });

  it('Login with valid creds', () => {

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()

    cy.url().should('include', '/secure')
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
    cy.get('.button').should('contain.text', 'Logout')

  });

  it('Login with invalid creds (invalid Username, invalid Password)', () => {
    
    cy.get('#username').type('qwerty')
    cy.get('#password').type('ytrewq!@#1')
    cy.get('.fa').click()

    cy.get('#flash').should('contain.text', 'Your username is invalid!')
    

  });

  it.only('Logout from the app)', () => {
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('.button').click()

    
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
    cy.url().should('include', '/login')
    
  });

});