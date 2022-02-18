/// <reference types="cypress" />

describe("Sign in page", () => {
  
  beforeEach(() => {
    cy.visit('/login')
  });


  it("Login with valid creds", () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.get('button').contains('Login')
    .click()

    cy.get('.flash.success').should('contain', 'You logged into a secure area!')
  });
  
  it("Login with invalid creds", () => {
    cy.get('#username')
    .type('tom')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.get('button').contains('Login')
    .click()

    cy.get('.flash.error').should('contain', 'Your username is invalid!')
  });

  it("Logout", () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.get('button').contains('Login')
    .click()

    cy.get('[href="/logout"]')
    .click()

    cy.get('.flash.success').should('contain', 'You logged out of the secure area!')
  });
});
