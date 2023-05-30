/// <reference types="cypress" />

const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUsername = 'invalid Username';
const invalidPassword = 'invalid Password';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide the ability to log in with valid creds', () => {
    cy.get('#username')
      .type(validUsername)

    cy.get('#password')
      .type(validPassword)

    cy.get('.fa')
      .click()

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });

  it('should provide the ability to log out', () => {
    cy.get('#username')
    .type(validUsername)

    cy.get('#password')
    .type(validPassword)

    cy.get('.fa')
    .click()

    cy.get('#flash')
    .should('contain', 'You logged into a secure area!');

    cy.get('.button')
    .click();

    cy.get('#flash')
    .should('contain', ' You logged out of the secure area!')
  })

  it('user is not able to log in with invalid username', () => {
    cy.get('#username')
    .type(invalidUsername)

    cy.get('#password')
    .type(validPassword)

    cy.get('.fa')
    .click()

    cy.get('#flash')
    .should('contain', 'Your username is invalid!')
  })

  it('user is not able to log in with invalid password', () => {
    cy.get('#username')
    .type(validUsername)

    cy.get('#password')
    .type(invalidPassword)

    cy.get('.fa')
    .click()

    cy.get('#flash')
    .should('contain', 'Your password is invalid!')
  })
});
