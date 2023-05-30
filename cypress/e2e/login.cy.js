/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should allow to log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('button', 'Login')
      .click()
    
    cy.contains('#flash', 'You logged into a secure area!')
  });

  it('should not login user with non-registered username', () => {
    cy.get('#username')
      .type('tommismith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('button', 'Login')
      .click()

    cy.contains('#flash', 'Your username is invalid')
  });

  it('should not login user with non-registered password', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword')

    cy.contains('button', 'Login')
      .click()

    cy.contains('#flash', 'Your password is invalid')
  });

  it('should allow to log out', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('button', 'Login')
      .click()

    cy.contains('a', 'Logout')
      .click()

    cy.contains('#flash', 'You logged out of the secure area!')
  });
});
