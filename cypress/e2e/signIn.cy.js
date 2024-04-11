/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with correct creds', () => {
    const username = 'tomsmith';
    const userPassword = 'SuperSecretPassword!';

    cy.get('input[id="username"]').type(username);
    cy.get('input[type="password"]').type(userPassword);
    cy.get('.radius').contains('Login').click();
    cy.contains('Secure Area').should('be.visible');
  });

  it('should provide an ability to log in with wrong creds', () => {
    const username = 'test';
    const userPassword = 'wrong';

    cy.get('input[id="username"]').type(username);
    cy.get('input[type="password"]').type(userPassword);
    cy.get('.radius').contains('Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
});

describe('Sign In page', () => {
  it('should provide an ability to log out', () => {
    const username = 'tomsmith';
    const userPassword = 'SuperSecretPassword!';

    cy.get('input[id="username"]').type(username);
    cy.get('input[type="password"]').type(userPassword);
    cy.get('.radius').contains('Login').click();
    cy.contains('Secure Area').should('be.visible');
    cy.contains('Logout').click();
    cy.contains('Login Page').should('be.visible');
  });
});
