/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('/login');

    cy.url().should('include', '/login');
  });

  it('should allow to log in with valid data', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.url().should('include', '/secure');

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with the invalid username', () => {
    cy.get('#username').type(username + 'a');

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to log in with the invalid password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + 'a');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should allow to log in with valid data', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.url().should('include', '/secure');

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');

    cy.url().should('include', '/login');
  });
});
