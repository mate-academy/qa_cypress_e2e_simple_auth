/// <reference types="cypress" />

describe('Sign in page', () => {

  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'

  beforeEach(() =>{
    cy.visit('/login')
  });

    it('should sign in user with valid data', () => {
      cy.get('[name="username"]')
        .type(username)

      cy.get('[name="password"]')
        .type(password)

      cy.contains('.fa', 'Login')
        .click()

      cy.contains('h2', 'Secure Area')
        .should('exist')
      
      cy.contains('.button', 'Logout')
        .should('exist')
    })
    
    it('should sign in user with invalid data', () => {
      cy.get('[name="username"]')
        .type(username+username)

      cy.get('[name="password"]')
        .type(password)

      cy.contains('.fa', 'Login')
        .click()

      cy.contains('#flash', 'invalid')
        .should('exist')
    })

    it('should logout from the app', () => {
      cy.get('[name="username"]')
        .type(username)

      cy.get('[name="password"]')
        .type(password)

      cy.contains('.fa', 'Login')
        .click()

      cy.contains('.button', 'Logout')
        .click()

      cy.contains('#flash', 'logged out')
        .should('exist')

      cy.contains('h2', 'Login Page')
        .should('exist')
    });

  });
