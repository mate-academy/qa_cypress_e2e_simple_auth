/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'cat';
const invalidPassword = 'meow';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should provide an ability to log out of the app after login', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
