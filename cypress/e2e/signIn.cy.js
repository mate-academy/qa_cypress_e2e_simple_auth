/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');

    cy.url().should('include', '/login');
  });

  it('should allow to log in with valid credentials', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.url().should('include', '/secure');

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with the unregistered username', () => {
    cy.get('#username').type(username + '1');

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to log in with the incorrect password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '1');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should successfully logout from the site', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');

    cy.url().should('include', '/login');
  });
});
