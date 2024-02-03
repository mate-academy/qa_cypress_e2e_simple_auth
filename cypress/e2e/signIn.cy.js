/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid credentials', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.contains('#flash', 'You logged into a secure area!')
      .should('exist');
  });

  it(`should display validation error when entering invalid 'username'`, () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username').type(username + '@');
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.contains('#flash', 'Your username is invalid!')
      .should('exist');
  });

  it(`should display validation error when entering invalid 'password'`, () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password + '@');
    cy.get('.radius').click();
    cy.contains('#flash', 'Your password is invalid')
      .should('exist');
  });

  it(`should display validation error when entering` +
    `invalid 'username' and 'password'`, () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username').type(username + '@');
    cy.get('#password').type(password + '@');
    cy.get('.radius').click();
    cy.contains('#flash', 'Your username is invalid!')
      .should('exist');
  });

  it('should logout logged in user from the app', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.contains('#flash', 'You logged into a secure area!')
      .should('exist');
    cy.get('.button').click();
    cy.contains('#flash', 'You logged out of the secure area!')
      .should('exist');
  });
});
