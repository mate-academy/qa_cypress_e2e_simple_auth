/// <reference types="cypress" />

describe('Sign in:', () => {
  beforeEach(() =>{
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Sign in with valid creds', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  })

  it('Sign in with invalid creds', () => {
    cy.login(' ', 'SuperSecretPassword!')
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  })

  it('Logout from the app and assert', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.get('.button').click()
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  })
});