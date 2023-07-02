/// <reference types="cypress" />

const { visitEachChild } = require("typescript");

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
 
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to log in with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('button', ' Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with non-registered username', () => {
    cy.get('#username').type(`${username}_new`);
    cy.get('#password').type(password);
    cy.contains('button', ' Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}123`);
    cy.contains('button', ' Login').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should allow to log out after success log in', () => {
    cy.successLogin(username, password);
    cy.contains('a', 'Logout').should('exist')
      .click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
