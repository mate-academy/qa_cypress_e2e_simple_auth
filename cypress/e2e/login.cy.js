/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should be able to log in with correct data and log out', () => {
    cy.get('[name="username"]')
      .type('tomsmith')

    cy.get('[name="password"]')
      .type('SuperSecretPassword!')

    cy.contains('button', 'Login')
      .click()

    cy.get('h2')
      .should('contain.text', 'Secure Area')

    cy.contains('a', 'Logout')
      .click()

    cy.get('h2')
      .should('contain.text', 'Login Page')
  });

  it('should be not able to log in with uncorrect name', () => {
    cy.get('[name="username"]')
      .type('tom')

    cy.get('[name="password"]')
      .type('SuperSecretPassword!')

    cy.contains('button', 'Login')
      .click()

    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!')
  });

  it('should be not able to log in with uncorrect password', () => {
    cy.get('[name="username"]')
      .type('tomsmith')

    cy.get('[name="password"]')
      .type('Password!')

    cy.contains('button', 'Login')
      .click()

    cy.get('[id="flash"]')
      .should('contain.text', 'Your password is invalid!')
  });
});
