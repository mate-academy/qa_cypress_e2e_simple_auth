/// <reference types="cypress" />

const { createdUser } = require('../support/createdUser');

describe('Sign In page', () => {
  const { username, password } = createdUser();

  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should allow to log in with valid creds', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'You logged into a secure area!');

    cy.url().should('include', '/secure');
  });

  it('should not allow to log in with invalid Username', () => {
    cy.get('#username').type(username + '1');

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid Password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '1');

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'Your password is invalid!');
  });

  it('should allow to log out from the app', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'You logged into a secure area!');

    cy.url().should('include', '/secure');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash')
      .should('contains.text', 'You logged out of the secure area!');

    cy.url().should('include', '/login');
  });
});
