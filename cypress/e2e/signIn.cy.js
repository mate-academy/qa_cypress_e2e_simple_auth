/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Visits the Sign in page successfully', () => {
    cy.url().should('include', '/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').should('be.visible');
  });

  it('Login with valid creds and check successful login message', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds show validation message for invalid username', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible');
  });

  it('Login with invalid creds show validation message for invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible');
  });

  it('Login with invalid creds and check validation error message', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.error').should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('#login').should('be.visible');
  });

  it('Logout from the app and check successful logout message', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success').should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');
  });
});
