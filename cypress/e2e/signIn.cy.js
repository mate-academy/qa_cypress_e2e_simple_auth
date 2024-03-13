/// <reference types="cypress" />;

const { loginData } = require('../support/logindata');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });
  const { password, username } = loginData();

  it('should have an ability to log in with valid creds', () => {
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('div[id="flash"]').contains('You logged into a secure area!')
      .should('be.visible');
  });

  it('should not provide the ability to login with invalid username', () => {
    cy.get('input[id="username"]').type('tomsmit');
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.get('div[id="flash"]').contains('Your username is invalid!')
      .should('be.visible');
  });

  it('should not provide the ability to login with invalid password', () => {
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type('SuperSecret');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should provide the ability to logout from the app', () => {
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
