/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'invalid_tomsmith';
const invalidPassword = 'invalidSuperSecretPassword!';

beforeEach(() => {
  cy.visit('/login');
});

describe('Sign In page', () => {
  it('should allow login with valid credentials', () => {
    cy.findById('username').type(username);
    cy.findById('password').type(password);
    cy.get('.fa-sign-in').click();

    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('should not allow login with invalid username', () => {
    cy.findById('username').type(invalidUsername);
    cy.findById('password').type(password);
    cy.get('.fa-sign-in').click();

    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('should not allow login with invalid password', () => {
    cy.findById('username').type(username);
    cy.findById('password').type(invalidPassword);
    cy.get('.fa-sign-in').click();

    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });

  it('should allow login and logout', () => {
    cy.findById('username').type(username);
    cy.findById('password').type(password);
    cy.get('.fa-sign-in').click();
    cy.get('.icon-signout').click();

    cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
  });
});
