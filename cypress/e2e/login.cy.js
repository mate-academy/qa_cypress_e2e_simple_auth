/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('login and logout with valid data', () => {

    cy.get('#username').type('tomsmith')

    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain','You logged into a secure area!')

    cy.get('.button').click()

    cy.url().should('include', '/login')
  });

  it('login with invalid username', () => {

    cy.get('#username').type('tomsmitssssh')

    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain','Your username is invalid!')
  });

  it('login with invalid password', () => {

    cy.get('#username').type('tomsmith')

    cy.get('#password').type('SuperSecretPasswordfffff!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain','Your password is invalid!')
  });

  it('login with invalid password and username', () => {

    cy.get('#username').type('tomsmithdddd')

    cy.get('#password').type('SuperSecretPasswordfffff!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain','Your username is invalid!')
  });
});
