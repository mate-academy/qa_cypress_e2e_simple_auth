/// <reference types="cypress" />



describe('Login', () => {
  beforeEach(() => {
    cy.visit("/login")
  })
  it('with valid data', () => {

    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('button[type="submit"]')
      .click()

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  })

  it('with invalid data', () => {

    cy.get('#username')
      .type('not_tomsmith')

    cy.get('#password')
      .type('Not_SuperSecretPassword!')

    cy.get('button[type="submit"]')
      .click()

    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  })

  it('and logout after', () => {

    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('button[type="submit"]')
      .click()

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')

    cy.get('.button  .icon-signout')
      .click()

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
    
    cy.url()
      .should('include', 'login')
  })
})