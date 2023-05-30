/// <reference types="cypress" />

const { generateCredentials } = require("../support/generateCredentials");

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const { fakeUsername, fakePassword } = generateCredentials();

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should allow an existing user to log in', () => {
    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(password)

    cy.contains('[type="submit"]', ' Login')
      .click()

    cy.contains('h4', 'Welcome to the Secure Area. When you are done click logout below.')
  });

  it('should allow an logged in user to log out', () => {
    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(password)

    cy.contains('[type="submit"]', ' Login')
      .click()

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')

    cy.contains('.button', ' Logout')
  });

  it('should not allow user to log in with invalid credentials', () => {
    cy.get('[name="username"]')
    .type(fakeUsername)

    cy.get('[name="password"]')
      .type(fakePassword)

    cy.contains('[type="submit"]', ' Login')
      .click()

    cy.contains('[class="flash error"]', ' Your username is invalid!')
  });
});
