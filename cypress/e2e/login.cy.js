/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
     cy.visit('/login')
  });

  let {username, password} = Cypress.config();

  it('should login with valid creds', () => {
    cy.get('#username')
      .type(username)
    
    cy.get('#password')
      .type(password)

    cy.contains('.fa-sign-in', 'Login')
      .click()
    
    cy.contains('h4', 'Welcome to the Secure Area.')
      .should('be.visible')
  });

  it('shouldn\'t login with invalid login', () => {
    cy.get('#username')
      .type(username + 'one')
  
    cy.get('#password')
      .type(password)

    cy.contains('.fa-sign-in', 'Login')
      .click()
    
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });

  it('shouldn\'t login with invalid password', () => {
    cy.get('#username')
      .type(username)
  
    cy.get('#password')
      .type(password + 'one')

    cy.contains('.fa-sign-in', 'Login')
      .click()
    
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type(username)
    
    cy.get('#password')
      .type(password)

    cy.contains('.fa-sign-in', 'Login')
      .click()

    cy.contains('[href="/logout"]', 'Logout')
      .click()
    
    cy.url()
      .should('include', '/login')
    });

});