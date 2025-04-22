/// <reference types="cypress" />

const login = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidLogin = 'TestUser41';
const invalidPassword = 'Qwerty123';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('user should be able to login with valid credits', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username')
      .type(login);

    cy.get('#password')
      .type(password);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('user shoudnt login with incorrect login and correct password', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username')
      .type(invalidLogin);

    cy.get('#password')
      .type(password);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('user shoudnt login with correst login and incorrect password', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username')
      .type(login);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('user should be able to logout', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username')
      .type(login);

    cy.get('#password')
      .type(password);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
