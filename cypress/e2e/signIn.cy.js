/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').click()
    cy.get('#username').type('testing')
    cy.get('#password').type('test12!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('should provide an ability to successfull logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
    cy.get('.button').click()
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  });
});
