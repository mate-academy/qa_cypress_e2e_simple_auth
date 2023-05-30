/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login')
  });

  it('should provide an ability to log in with valid creds', () => {
    
    cy.get('#username')
      .type(username)

    cy.get('#password')
      .type(password)
    
    cy.contains('.radius', ' Login')
      .click()
    
    cy.get('#flash-messages')
      .should('contain.text', 'You logged into a secure area!')
    
    cy.url()
      .should('contain', '/secure')
  });

  it('should provide that log-in with invalid username is impossible', () => {
  
    cy.get('#username')
      .type('jerrysmith')

    cy.get('#password')
      .type(password)
    
    cy.contains('.radius', ' Login')
      .click()

    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!')    
  });

  it('should provide that log-in with invalid password is impossible', () => {
    
    cy.get('#username')
      .type(username)

    cy.get('#password')
      .type('password')
    
    cy.contains('.radius', ' Login')
      .click()

    cy.get('#flash-messages')
      .should('contain.text', 'Your password is invalid!')
  });

  it('should provide an ability to log out from the app', () => {
    
    cy.get('#username')
      .type(username)

    cy.get('#password')
      .type(password)
    
    cy.contains('.radius', ' Login')
      .click()

    cy.contains('[href="/logout"]', ' Logout')
      .click()

    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!')
  });
});
