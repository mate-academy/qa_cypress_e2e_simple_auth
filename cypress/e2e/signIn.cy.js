/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');

    cy.url().should('include', '/login');
  });

  it('should allows to log in with valid credentials', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'You logged into a secure area!');

    cy.url().should('include', '/secure');
  });

  it('should not allow to log in with invalid Username', () => {
    cy.get('#username').type(username + 'q');

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid Password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '0');

    cy.contains('.radius', 'Login').click();

    cy.get('#flash')
      .should('contains.text', 'Your password is invalid!');
  });

  it.only('should allows to logout', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.radius', 'Login').click();

    cy.contains('.button', 'Logout').click();

    cy.get('#flash')
      .should('contains.text', 'You logged out of the secure area!');

    cy.url().should('include', '/login');
  });
});
