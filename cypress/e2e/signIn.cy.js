/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('input[type="text"]').type(username);

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').contains('Login').click();

    cy.url().should('include', '/secure');
  });

  it('should show error message after login with invalid credentials', () => {
    cy.get('input[type="text"]').type(invalidUsername);

    cy.get('input[type="password"]').type(invalidPassword);

    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('div[class="flash error"]').should('exist');
  });

  it('should successfully log out', () => {
    cy.get('input[type="text"]').type(username);

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('[class="button secondary radius"]').contains('Logout').click();

    cy.get('div[class="flash success"]').should('exist');
  });
});
