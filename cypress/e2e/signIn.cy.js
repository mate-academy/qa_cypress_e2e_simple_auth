/// <reference types="cypress" />

const { username, password, invalidUsername, invalidPassword } =
  require('../support/variables');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('h2')
      .contains('Login Page')
      .should('be.visible');

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.fa')
      .click();

    cy.get('.subheader')
      .contains('Welcome to the Secure Area. When you are done')
      .should('be.visible');
  });

  it('should show validation errors for invalid username', () => {
    cy.get('h2')
      .contains('Login Page')
      .should('be.visible');

    cy.get('#username')
      .type(invalidUsername);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('Your username is invalid!')
      .should('be.visible');
  });

  it('should show validation errors for invalid password', () => {
    cy.get('h2')
      .contains('Login Page')
      .should('be.visible');

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('Your password is invalid!')
      .should('be.visible');
  });

  it('should allow a logged-in user to log out', () => {
    cy.get('h2')
      .contains('Login Page')
      .should('be.visible');

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.fa')
      .click();

    cy.get('.subheader')
      .contains('Welcome to the Secure Area.');

    cy.get('.button')
      .contains('Logout')
      .click();

    cy.get('#flash')
      .contains('You logged out of the secure area!')
      .should('be.visible');
  });

  //   afterEach(() => {
  //     });
});
