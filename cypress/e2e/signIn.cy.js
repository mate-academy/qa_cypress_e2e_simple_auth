/// <reference types="cypress" />
const { constants } = require('../support/constants');

describe('Sign In page', () => {
  const username = constants.username;
  const password = constants.password;

  beforeEach(() => {
    cy.visit('/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('Should login with valid creds ', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into');
  });

  it('Shouldn\'t login with invalid username', () => {
    const invalidUsername = `timsmith`;
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.url().should('include', '/login');
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Shouldn\'t login with invalid password', () => {
    const invalidPassword = `NotSecretPassword!`;
    cy.get('#username').type(username);
    cy.get('#password').type(invalidPassword);
    cy.get('.fa').click();
    cy.url().should('include', '/login');
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});

describe('Secure page', () => {
  it('Should logout', () => {
    cy.userloginAPI(constants.username, constants.password);
    cy.visit('/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
    cy.get('.button').click();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });
});
