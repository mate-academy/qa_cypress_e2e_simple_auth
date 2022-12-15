/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    
  })

  
  it('should provide an ability to log in', () => {
    cy.visit('/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.get('.button').click()
    cy.get('#flash').should('contain', 'You logged out of the secure area!')

  });

  it('should provide an ability to log in with invalid creds', () => {
    cy.visit('/login')
    cy.get('#username').type('tomsmith12')
    cy.get('#password').type('12SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
    
  });

  it ('should  log out from the appp', () => {
    cy.visit('/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.get('.button').click()
    cy.get('#flash').should('contain', 'You logged out of the secure area!')

  });
});
