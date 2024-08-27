/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.radius').click()

    cy.get('#flash').should('contain','You logged into a secure area!')
  });

  it('should display a message about an incorrect user name', () => {
    cy.get('#username').type('tomsmit')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.radius').click()

    cy.get('#flash').should('contain','Your username is invalid!')
  });

  it('should display a message about an incorrect password', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPass!')

    cy.get('.radius').click()

    cy.get('#flash').should('contain','Your password is invalid!')
  });

  it('should provide an ability to loged out', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.radius').click()

    cy.get('#flash').should('contain','You logged into a secure area!')

    cy.get('.button').click()
    cy.get('#flash').should('contain','You logged out of the secure area!')    
  });
});
