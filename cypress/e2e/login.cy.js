/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should allow to login a user', () => {
    cy.get('input#username')
      .type('tomsmith')

    cy.get('input#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('should check that the user cannot log in with invalid Username', () => {
    cy.get('input#username')
      .type('tomashgood')

    cy.get('input#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });

  it('should check that the user cannot log in with invalid Password', () => {
    cy.get('input#username')
      .type('tomsmith')

    cy.get('input#password')
      .type('Qwerty1234!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
  });

  it('should allow to log out a user', () => {
    cy.get('input#username')
      .type('tomsmith')

    cy.get('input#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')

    cy.get('.button')
      .should('contain.text', 'Logout')
      .click()

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  });
});
