/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should to login successfully in', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should to occur, username validation error', () => {
    cy.get('#username').type(username + '1');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should to occur, password validation error', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '1');

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should to log successfully out', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('button', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
