/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid name and password', () => {
    cy.findById('username').type(username);

    cy.findById('password').type(password);

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('should show an error with invalid name and password', () => {
    cy.findById('username').type('invalid Username');

    cy.findById('password').type('invalid Password');

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should logout after success login', () => {
    cy.findById('username').type(username);

    cy.findById('password').type(password);

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('.radius').should('contain.text', 'Logout').click();

    cy.get('h2').should('contain.text', 'Login Page');
  });
});
