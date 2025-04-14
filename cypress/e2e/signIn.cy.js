/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'
  beforeEach(() => {

    cy.visit('https://the-internet.herokuapp.com/login')
  });


  it('should successful login the user', () => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });
  it('unsuccessful login with invalid username', () => {
    cy.get('#username').type('username')
    cy.get('#password').type(password)
    cy.get('[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });
  it('unsuccessful login with invalid password', () => {
    cy.get('#username').type(username)
    cy.get('#password').type('test')
    cy.get('[type="submit"]').click()
    cy.get('#flash').should('contain.text', 'Your password is invalid!')  
  });
  it('should successful log out the user', () => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('[type="submit"]').click()
    cy.get('.button').click()
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  });
});
