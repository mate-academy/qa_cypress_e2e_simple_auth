/// <reference types="cypress" />

const { verify } = require("crypto");

describe('Login page', () => {
  const url = 'https://the-internet.herokuapp.com/login'
  const userNameValid = 'tomsmith'
  const passwordValid = 'SuperSecretPassword!'
  const userNameInvalid = userNameValid + Math.floor(Math.random()*1000)
  const passwordInvalid = passwordValid + Math.floor(Math.random()*1000)

  beforeEach(() => {
    cy.visit(url)
    cy.get('form#login').should('be.visible')
    cy.get('input#username').should('be.visible')
    cy.get('input#password').should('be.visible')
  });

  it('can login with valid credentials', () => {
    cy.get('input#username').type(userNameValid)
    cy.get('input#password').type(passwordValid)
    cy.get('button[type=submit]').click()
    cy.get('div#flash').should('be.visible').contains('You logged into a secure area!')
  });

  it('can\'t login with valid credentials', () => {
    cy.get('input#username').type(userNameInvalid)
    cy.get('input#password').type(passwordInvalid)
    cy.get('button[type=submit]').click()
    cy.get('div#flash').should('be.visible').contains('Your username is invalid!')
  });

  it('can logout', () => {
    cy.get('input#username').type(userNameValid)
    cy.get('input#password').type(passwordValid)
    cy.get('button[type=submit]').click()
    cy.get('div#flash').should('be.visible').contains('You logged into a secure area!')
    cy.get('a').contains('Logout').should('be.visible').click()
    cy.get('div#flash').should('be.visible').contains('You logged out of the secure area!')
  });
});
