/// <reference types="cypress" />
const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUsername = 'badguyhacker';
const invalidPassword = 'villainpassword';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should provide ability to log in and out with valid credentials', () => {
    cy.get('input[name = "username"]')
      .type(validUsername);
    cy.get('input[name = "password"]')
      .type(validPassword);
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'You logged into a secure area!');
    cy.get('.button')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'You logged out of the secure area!');
  });
  it(`shouldn't provide the ability to login with invalid username`, () => {
    cy.get('input[name = "username"]')
      .type(invalidUsername);
    cy.get('input[name = "password"]')
      .type(validPassword);
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'Your username is invalid!');
  });
  it(`shouldn't provide the ability to login with invalid password`, () => {
    cy.get('input[name = "username"]')
      .type(validUsername);
    cy.get('input[name = "password"]')
      .type(invalidPassword);
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'Your password is invalid!');
  });
});
