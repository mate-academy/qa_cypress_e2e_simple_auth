/// <reference types="cypress" />

const { randomUser } = require("../plugins");

describe('Sign in page', () => {
before('is opened', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
});

it('allows to login with valid data', () => {
  cy.get('#username')
  .type('tomsmith'),

  cy.get('#password')
  .type('SuperSecretPassword!'),

  cy.get('.fa')
  .click()
})

it('logout is successful', () => {
  cy.get('.button')
.click()
  cy.get('#flash')
  .contains('logged out of the')
})

before('is opened', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
});
it('does not allow to login with invalid data', () => {
const {username, password} = randomUser();

cy.get('#username')
.type(username)

cy.get('#password')
.type(password)

cy.get('.fa')
.click()
})

it('check invalid data error message', () => {
  cy.get('#flash')
  .contains('is invalid')
})

})