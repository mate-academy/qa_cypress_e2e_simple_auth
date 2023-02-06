/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type(username)

    cy.get('#password')
      .type(password)

    cy.get('.radius')
      .click()

    cy.get('#flash-messages')
      .should('contain.text', 'You logged into a secure area!')

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/secure')
  });

  it('Login with invalid username', () => {
    cy.get('#username')
      .type('tomsmit')

    cy.get('#password')
      .type(password)

    cy.get('.radius')
      .click()
    
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!')

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login')
  });


  it('Login with invalid password', () => {
    cy.get('#username')
      .type(username)

    cy.get('#password')
      .type("NotSecretPassword!")

    cy.get('.radius')
      .click()
  
    cy.get('#flash-messages')
      .should('contain.text', 'Your password is invalid!')

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login')
  });

  it('Logout from the app', () => {
    cy.get('#username')
        .type(username)
    
    cy.get('#password')
        .type(password)
    
    cy.get('.radius')
        .click()
  
    cy.get('.button')
        .click()
    
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!')

      cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login')
  });
});
