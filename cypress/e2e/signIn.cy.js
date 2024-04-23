/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUser = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  const invalidUser = 'test123';
  const invalidPassword = 'Testy123';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should provide an ability to log in with valid creds', () => {
    cy.get('input[name="username"]').type(validUser);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.get('.success').should('contain.text', 'You logged into');
  });
  it('failed login should display validation error', () => {
    cy.get('input[name="username"]').type(invalidUser);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.get('.error').should('contain.text', 'Your username is invalid!');
  });
  it('failed password should display validation error', () => {
    cy.get('input[name="username"]').type(validUser);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.get('button').contains('Login').click();
    cy.get('.error').should('contain.text', 'Your password is invalid!');
  });
  it('logged in user should be able to log out', () => {
    cy.get('input[name="username"]').type(validUser);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button').contains('Login').click();
    cy.get('.button').contains('Logout').click();
    cy.get('.success').should('contain.text', 'You logged out');
    cy.contains('h2', 'Login Page');
  });
});
