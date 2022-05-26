/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!'

describe('Sign In', () => {
beforeEach(() => {
  cy.visit('/login')
});

  it('should log into the account with valid creds', () => {
    
    cy.get(`#login [name='username']`)
      .should('exist')
      .type(username)
      .should('contain.value', username)

      cy.get(`#login [name='password']`)
        .should('exist')
        .type(password)
        .should('contain.value', password)

      cy.get('#login .fa-sign-in')
        .should('exist')
        .should('contain.text', 'Login')
        .click()

      cy.get('.flash.success')
        .should('contain.text', 'You logged into a secure area!')
  });

  it('should not log into the account with invalid username', () => {
    cy.get(`#login [name='username']`)
      .should('exist')
      .type('a')

      cy.get(`#login [name='password']`)
        .should('exist')
        .type(password)

      cy.get('#login .fa-sign-in')
        .should('exist')
        .should('contain.text', 'Login')
        .click()

      cy.get('.flash.error')
        .should('contain.text', 'Your username is invalid!')
  });

  it('should not log into the account with invalid password', () => {
    cy.get(`#login [name='username']`)
      .should('exist')
      .type(username)

      cy.get(`#login [name='password']`)
        .should('exist')
        .type('password')

      cy.get('#login .fa-sign-in')
        .should('exist')
        .should('contain.text', 'Login')
        .click()

      cy.get('.flash.error')
        .should('contain.text', 'Your password is invalid!')
  });
});

describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should logout from the app', () => {
    cy.get(`#login [name='username']`)
      .should('exist')
      .type(username)
      .should('contain.value', username)

      cy.get(`#login [name='password']`)
        .should('exist')
        .type(password)
        .should('contain.value', password)

      cy.get('#login .fa-sign-in')
        .should('exist')
        .should('contain.text', 'Login')
        .click()

      cy.get('.flash.success')
        .should('contain.text', 'You logged into a secure area!')

      cy.get('.button[href="/logout"]')
        .should('exist')
        .should('contain.text', 'Logout')
        .click()

      cy.get('.flash.success')
        .should('contain.text', 'You logged out of the secure area!')

      cy.url()
        .should('contain', '/login')
  });
});
