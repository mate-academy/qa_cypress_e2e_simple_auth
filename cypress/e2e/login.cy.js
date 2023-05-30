/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Should provide an ability to log in with the valid credentials', () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
    .click()

    cy.get('#flash')
    .should('contain', 'You logged into a secure area!')

    cy.url()
    .should('contain', '/secure')
  });

  it('Should provide an ability not to log in with the no valid credentials', () => {
    cy.get('#username')
    .type('NotValidUsername')

    cy.get('#password')
    .type('NotPassword')

    cy.contains('.fa', 'Login')
    .click()

    cy.get('#flash')
    .should('contain', 'Your username is invalid!')
  });

  it('Should provide an ability to logged out', () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
    .click()

    cy.url()
    .should('contain', '/secure')

    cy.contains('.button', 'Logout')
    .click()

    cy.get('#flash')
    .should('contain', 'You logged out of the secure area!')
  });

});
