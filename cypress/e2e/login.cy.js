/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('user is able to login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
      .click();

    cy.get('h2')
      .contains('Secure Area')

    cy.get('.subheader')
      .contains('Welcome to the Secure Area. When you are done click logout below.');
  });

  it('user is unable to login with non-valid pass', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('VeryGoodPass!')

    cy.contains('.fa', 'Login')
      .click()

    cy.get('#flash')
      .contains('Your password is invalid!')
  });

  it('user is unable to login with non-valid username', () => {
    cy.get('#username')
      .type('verygoodnickname137')

    cy.get('#password')
      .type('VeryGoodPass!')

    cy.contains('.fa', 'Login')
      .click()

    cy.get('#flash')
      .contains('Your username is invalid!')
  });

  it('user is able to logout from app', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
      .click()

    cy.contains('.button', 'Logout')
      .click()

    cy.get('#flash')
      .contains('You logged out of the secure area!')
  });

});
