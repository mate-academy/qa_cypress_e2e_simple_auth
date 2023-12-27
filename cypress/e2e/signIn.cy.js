/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('correct login', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('[type="submit"]', ' Login').click();

    cy.contains('#flash', ' You logged into a secure area!').should('exist');
  });

  it('invalid user name', () => {
    cy.get('#username').type(username + '!');

    cy.get('#password').type(password);

    cy.contains('[type="submit"]', 'Login').click();

    cy.contains('#flash', 'Your username is invalid!').should('exist');
  });

  it('invalid password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '!');

    cy.contains('[type="submit"]', 'Login').click();

    cy.contains('#flash', 'Your password is invalid!').should('exist');
  });

  it('logout', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('[type="submit"]', ' Login').click();

    cy.contains('[href="/logout"]', 'Logout').click();

    cy.contains('#flash', 'You logged out of the secure area!').should('exist');
  });
});
