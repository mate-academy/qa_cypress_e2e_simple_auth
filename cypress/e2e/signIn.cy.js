/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'tmsmth';
const invalidPassword = 'SSp!';
const usernameValidationMesage = 'Your username is invalid!';
const passwordValidationMessage = 'Your password is invalid!';
const logoutValidationMessage = 'You logged out of the secure area!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });

  it('check if user is able to log in with valid input', () => {
    cy.logIn(username, password);
    cy.get('.button').should('exist');
  });

  it('check for validation message in case of invalid username input', () => {
    cy.logIn(invalidUsername, password);
    cy.get('#flash').should('contain.text', usernameValidationMesage);
  });

  it('check for validation message in case of invalid password input', () => {
    cy.logIn(username, invalidPassword);
    cy.get('#flash').should('contain.text', passwordValidationMessage);
  });

  it('check if user is able to log out', () => {
    cy.logIn(username, password);
    cy.get('.button').click();
    cy.get('#flash').should('contain.text', logoutValidationMessage);
  });
});
