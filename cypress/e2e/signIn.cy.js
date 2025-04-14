/// <reference types="cypress" />

describe('Sign In page', () => {
  const Username = 'tomsmith';
  const Password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should allow the user to Sign in with valid creds', () => {

    cy.url().should('include', '/login');

    cy.get('#username').type(Username);
    cy.get('#password').type(Password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Should not allow the user to Sign in with invalid Username', () => {

    cy.url().should('include', '/login');

    cy.get('#username').type('invalidUsername');
    cy.get('#password').type(Password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Should not allow the user to Sign in with invalid Password', () => {

    cy.url().should('include', '/login');

    cy.get('#username').type(Username);
    cy.get('#password').type('invalidPassword');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('Should allow the user to successfully logged out from the site', () => {

    cy.url().should('include', '/login');

    cy.get('#username').type(Username);
    cy.get('#password').type(Password);

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
