/// <reference types="cypress" />

describe('Sign in automation test', () => {
    it('Login with valid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('[id="username"]')
      .type('tomsmith');
      cy.get('[id="password"]')
      .type('SuperSecretPassword!');

      cy.contains('.fa', 'Login').click()

      cy.url().should('include', '/secure')
      cy.contains('#flash', 'You logged into a secure area!')
    });

    it('Login with invalid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('[id="username"]')
      .type('tomsmith1');
      cy.get('[id="password"]')
      .type('SuperSecretPassword!');

      cy.contains('.fa', 'Login').click()

      cy.url().should('include', '/login')
      cy.contains('#flash', 'Your username is invalid!')
    })
      it('Logout from the app', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
  
      cy.get('[id="username"]').type('tomsmith');
      cy.get('[id="password"]').type('SuperSecretPassword!');
  
      cy.contains('.fa', 'Login').click()
      cy.contains('.button', 'Logout').click()
      cy.contains('#flash','You logged out of the secure area!')
      cy.url().should('include', '/login')
    });
  });