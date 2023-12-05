/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const username = 'tomsmith15';
  const password = 'haslo123';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allowed to successfull login in', () => {
    cy.url().should('contain', 'login');
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.url().should('include', 'secure');
    cy.get('#flash').should('have.class', 'success');
    cy.get('.button').contains('Logout').should('exist');
  });

  it('should show error when login is invalid', () => {
    cy.url().should('contain', 'login');
    cy.get('#username').type(username);
    cy.get('#password').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.get('#flash').should('have.class', 'error');
    cy.get('#flash').contains('Your username is invalid!').should('exist');
  });

  it('should show error when password is invalid', () => {
    cy.url().should('contain', 'login');
    cy.get('#username').type(validUsername);
    cy.get('#password').type(password);
    cy.get('button').contains('Login').click();
    cy.get('#flash').should('have.class', 'error');
    cy.get('#flash').contains('Your password is invalid!').should('exist');
  });

  it('should allowed to successfull logout', () => {
    cy.url().should('contain', 'login');
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.url().should('include', 'secure');
    cy.get('.button').contains('Logout').click();
    cy.url().should('include', 'login');
    cy.get('#flash').should('have.class', 'success');
    cy.get('#flash')
      .contains('You logged out of the secure area!').should('exist');
    cy.get('button').contains('Login').should('exist');
  });
});
