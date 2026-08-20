/// <reference types="cypress" />

const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';

const submitLogin = (username, password) => {
  cy.get('#username').should('be.visible');
  cy.get('#username').type(username);

  cy.get('#password').should('be.visible');
  cy.get('#password').type(password);

  cy.get('button[type="submit"]').should('be.visible');
  cy.get('button[type="submit"]').click();
};

describe('Sign In page', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/login');
  });

  it('logs in with valid credentials', () => {
    submitLogin(validUsername, validPassword);

    cy.location('pathname').should('eq', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
    cy.contains('h2', 'Secure Area').should('be.visible');
    cy.get('a[href="/logout"]')
      .should('be.visible')
      .and('contain.text', 'Logout');
  });

  it('shows an error for an invalid username', () => {
    submitLogin('invalid-user', validPassword);

    cy.location('pathname').should('eq', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('shows an error for an invalid password', () => {
    submitLogin(validUsername, 'invalid-password');

    cy.location('pathname').should('eq', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!');
  });

  it('logs out successfully', () => {
    submitLogin(validUsername, validPassword);

    cy.location('pathname').should('eq', '/secure');
    cy.get('a[href="/logout"]').should('be.visible');
    cy.get('a[href="/logout"]').click();

    cy.location('pathname').should('eq', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');
    cy.contains('h2', 'Login Page').should('be.visible');
  });
});
