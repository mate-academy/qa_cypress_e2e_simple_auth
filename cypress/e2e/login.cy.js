/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('user should log in', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('user should not log in with invalid username', () => {
    cy.get('#username')
      .type('zwirasik')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });

  it('user should not log in with invalid Password', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('Zwirasik23@')

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
  });

  it('user should log out', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
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
