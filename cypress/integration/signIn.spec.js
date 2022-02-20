/// <reference types="cypress" />
describe('', () => {
    it('', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username')
      .type('tomsmith')
      cy.get('#password')
      .type('SuperSecretPassword!')
      cy.get('.fa')
      .click()
      cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
      cy.get('.button')
      .click()
      cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')

      cy.get('#username')
      .type('tomsmit')
      cy.get('#password')
      .type('SuperSecretPassword!')
      cy.get('.fa')
      .click()
      cy.get('#flash')
      .should('contain','Your username is invalid!')
    });
  });