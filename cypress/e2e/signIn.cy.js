/// <reference types="cypress" />
/* eslint-disable max-len */

const url = Cypress.env('url');
const validUsername = Cypress.env('username');
const validPassword = Cypress.env('password');
const invalidUsername = Cypress.env('invalidUsername');
const invalidPassword = Cypress.env('invalidPassword');

const invalidСredentialsСases = [
  { username: invalidUsername, password: validPassword },
  { username: validUsername, password: invalidPassword },
  { username: invalidUsername, password: invalidPassword }
];

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`${url}/login`);
  });

  it('should successfully log in when both password and username are valid', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);

    cy.get('button[type="submit"]').click();


    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  invalidСredentialsСases.forEach(({ username, password }) => {
    it('should not allow login with invalid credentials', () => {
      cy.get('#username').clear();
      cy.get('#username').type(username);

      cy.get('#password').clear();
      cy.get('#password').type(password);

      cy.get('button[type="submit"]').click();

      cy.get('#flash')
        .should('be.visible')
        .and('contain', 'Your username is invalid!');
    });
  });

  it('should provide an ability to log out', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);

    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
