/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  describe('Simple Auth Assertions', () => {
    it('should login with valid creds', () => {
      cy.get('#username')
      .type('tomsmith');

      cy.get('#password')
      .type('SuperSecretPassword!');

      cy.contains('.radius', 'Login')
        .click();

      cy.contains('#flash', 'You logged into a secure area!')
    });

    it('should login with invalid username', () => {
      cy.get('#username')
        .type('tomsmith00');
  
      cy.get('#password')
      .type('SuperSecretPassword!00');

      cy.contains('.radius', 'Login')
        .click();

      cy.contains('#flash', 'Your username is invalid!')
    });

    it('should login with invalid password', () => {
      cy.get('#username')
        .type('tomsmith');
  
      cy.get('#password')
      .type('SuperSecretPassword!00');

      cy.contains('.radius', 'Login')
        .click();

      cy.contains('#flash', 'Your password is invalid!')
    });

    it('should logged out', () => {
      cy.get('#username')
      .type('tomsmith');

      cy.get('#password')
      .type('SuperSecretPassword!');

      cy.contains('.radius', 'Login')
        .click();

      cy.contains('.button', 'Logout')
        .click();

      cy.contains('#flash', 'You logged out of the secure area!')
    })
  })
});
