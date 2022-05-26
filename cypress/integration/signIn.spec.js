/// <reference types="cypress" />

describe('Login', () => {
  it('with valid data', () => {

    cy.visit("https://the-internet.herokuapp.com/login")

    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('.fa')
      .click()

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')

  })
})