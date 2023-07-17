/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    
    cy.visit('/')

  });

  it('Login with valid creds', () => {

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()

    cy.url().should('include', '/secure')
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
    cy.get('.button').should('contain.text', 'Logout')

  });

  it('Login with invalid username)', () => {
    
    cy.get('#username').type('qwerty')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()

    cy.get('#flash').should('contain.text', 'Your username is invalid!')

  it('Login with invalid password)', () => {
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!11')
    cy.get('.fa').click()

    cy.get('#flash').should('contain.text', 'Your password is invalid!!')
    

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
