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
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()
/*assert you successfully logged in.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/secure')
    cy.contains('h2', 'Secure Area')
    cy.get('[id="flash"]').should('contain.text', 'You logged into a secure area')
  });

/*Login with invalid creds: username*/
  it('should reject login with invalid username', () => {
    cy.get('[id="username"]').type('tomsmith123')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()
/*assert validation errors.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/login')
    cy.contains('h2', 'Login Page')
    cy.get('[id="flash"]').should('contain.text', 'Your username is invalid')
  })
  /*Login with invalid creds: password*/
  it('should reject login with invalid password', () => {
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!123')
    cy.get('[type="submit"]').click()
/*assert validation errors.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/login')
    cy.contains('h2', 'Login Page')
    cy.get('[id="flash"]').should('contain.text', 'Your password is invalid')
  })

/*Logout from the app:*/
  it('should logout from the app', () => {
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()
    cy.get('[href="/logout"]').click()
/*assert you successfully logged out.*/
    cy.url().should('contain', 'https://the-internet.herokuapp.com/login')
    cy.contains('h2', 'Login Page')
    cy.get('[id="flash"]').should('contain.text', 'You logged out of the secure area')
  })
});
