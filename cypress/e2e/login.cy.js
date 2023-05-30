/// <reference types="cypress" />

const baseURL = 'https://the-internet.herokuapp.com/login';
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'trustMe';
const invalidPassword = '30914';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  });

  it('Should log in with valid credentials', () => {
    cy.get('#username')
    .clear()
    .type(username);

    cy.get('#password')
    .clear()
    .type(password);

    cy.get('[type = submit]')
    .click();

    cy.get('#flash')
    .contains('You logged into a secure area!')
  });

  it('Should be able to logout', () => {
    cy.get('#username')
    .clear()
    .type(username);

    cy.get('#password')
    .clear()
    .type(password);

    cy.get('[type = submit]')
    .click();

    cy.get('.button')
    .click();

    cy.get('#flash')
    .contains('You logged out of the secure area!');
  });

  it('Should not allow to log in with invalid username', () => {
    cy.get('#username')
    .clear()
    .type(invalidUsername);

    cy.get('#password')
    .clear()
    .type(password);

    cy.get('[type = submit]')
    .click();

    cy.get('#flash')
    .contains('Your username is invalid!');
  });

  it('Should not allow to log in with invalid password', () => {
    cy.get('#username')
    .clear()
    .type(username);

    cy.get('#password')
    .clear()
    .type(invalidPassword);

    cy.get('[type = submit]')
    .click();

    cy.get('#flash')
    .contains('Your password is invalid!');
  });
});
