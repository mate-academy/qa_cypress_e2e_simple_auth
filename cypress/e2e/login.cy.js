/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should allow to log in', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    
    cy.get('.button').click()
    cy.get('#username').type('tomsmeth')
    cy.get('#password').type('SupeSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain','Your username is invalid!')

  });
});
