/// <reference types="cypress" />;

const { loginData } = require('../support/logindata');

describe('Login and Logout Functionality', () => {
  const { password, username } = loginData();

  it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
    cy.visit('/login');
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('div[id="flash"]').contains('You logged into a secure area!')
      .should('be.visible');
  });

  it('Login with invalid creds (invalid Username)', () => {
    cy.visit('/login');
    cy.get('input[id="username"]').type('tomsmit');
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.get('div[id="flash"]').contains('Your username is invalid!')
      .should('be.visible');
  });

  it('Login with invalid creds (invalid Password)', () => {
    cy.visit('/login');
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type('SuperSecret');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('Logout from the app', () => {
    cy.visit('/login');
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
