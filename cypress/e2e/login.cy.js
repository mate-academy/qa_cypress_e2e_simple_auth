/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in with valid data', () => {
    cy.get('[name="username"]').type('tomsmith')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('should provide an ability to log out', () => {
    cy.get('[name="username"]').type('tomsmith')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('[href="/logout"]').click()
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  });

  it('should not provide an ability to log in with invakid data', () => {
    cy.get('[name="username"]').type('Username')
    cy.get('[name="password"]').type('Password')
    cy.get('.radius').click()
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });
});
