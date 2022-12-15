/// <reference types="cypress" />

describe('Login page', () => {

  beforeEach(() => {
    cy.visit('/login')
  });

/*Visit "Login Page".*/
  it('should opens', () => {
  });

/*Login with valid creds:*/
  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
/*assert you successfully logged in.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/secure')
    cy.get('h2').should('contain.text', 'Secure Area')
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });

/*Login with invalid creds:*/
  it('should regect login with invalid creds', () => {
    cy.get('#username').type('tomsmith123')
    cy.get('#password').type('SuperSecretPassword!123')
    cy.get('.fa-sign-in').click()
/*assert validation errors.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/login')
    cy.get('h2').should('contain.text', 'Login Page')
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  })

/*Logout from the app:*/
  it('should logout from the app', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
    cy.get('[href="/logout"]').click()
/*assert you successfully logged out.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/login')
    cy.get('h2').should('contain.text', 'Login Page')
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  })
});
