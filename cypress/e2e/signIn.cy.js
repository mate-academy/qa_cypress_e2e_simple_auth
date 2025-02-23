/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  it('Should login with valid data', () => {
    cy.get('input[name="username"]')
      .type(validUsername);

    cy.get('input[name="password"]')
      .type(validPassword);

    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/secure');

    cy.contains('You logged into a secure area!');
  });

  it('Should not login with invalid username', () => {
    cy.get('input[name="username"]')
      .type('username');

    cy.get('input[name="password"]')
      .type(validPassword);

    cy.get('button[type="submit"]')
      .click();

    cy.contains('Your username is invalid!');
  });

  it('Should not login with invalid password', () => {
    cy.get('input[name="username"]')
      .type(validUsername);

    cy.get('input[name="password"]')
      .type('pass1234');

    cy.get('button[type="submit"]')
      .click();

    cy.contains('Your password is invalid!');
  });

  it('Should logout', () => {
    cy.get('input[name="username"]')
      .type(validUsername);

    cy.get('input[name="password"]')
      .type(validPassword);

    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/secure');

    cy.contains('You logged into a secure area!');

    cy.contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('input[name="username"]').should('be.visible');
  });
});
