/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith')

    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').should('contain.text', 'Login').click()

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });

  it('Login with not valid username',() => {
    cy.get('#username').type('tomsmith_notvalid')

    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').should('contain.text', 'Login').click()

    .url().should('contain','/login')

    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('Login with not valid password',() => {
    cy.get('#username').type('tomsmith')

    cy.get('#password').type('WrongPassword')

    cy.get('.fa').should('contain.text', 'Login').click()

    .url().should('contain','/login')

    cy.get('#flash').should('contain.text', 'Your password is invalid!')
  });

  it('Logout',() => {
    cy.get('#username').type('tomsmith')

    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')

    cy.get('.button').contains('Logout').click()

    .url().should('contain','/login')

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  });
});
