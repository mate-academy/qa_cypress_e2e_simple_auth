/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'

  beforeEach(() => {
    cy.visit('/login')
  });

  it('should be able to visit login page', () => {
    cy.url()
      .should('include', '/login')
  });

  it('should be able to login with valid creds', () => {
    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(password)

    cy.contains('.fa', 'Login')
      .click()
      
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area')
    });
    
  it('should not be able to login with invalid creds', () => {
    cy.get('[name="username"]')
      .type(username + '_invalid')

    cy.get('[name="password"]')
      .type(password + '_invalid')

    cy.contains('.fa', 'Login')
      .click()
      
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
    })

      it('should be able to logout', () => {
        cy.get('[name="username"]')
          .type(username)
    
        cy.get('[name="password"]')
          .type(password)
    
        cy.contains('.fa', 'Login')
          .click()
          
        cy.get('#flash')
          .should('contain.text', 'You logged into a secure area')
           
        cy.contains('.icon-2x', 'Logout')
          .click()

          cy.get('#flash')
          .should('contain.text', 'You logged out of the secure area')
          });
});
