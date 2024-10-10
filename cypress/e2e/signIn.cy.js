/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const successmessage = 'You logged into a secure area!';
  const invalidUsername = 'username';
  const invalidPassword = 'Password!';
  const errorUsernameMessage = 'Your username is invalid!';
  const errorPasswordMessage = 'Your password is invalid!';

  it('should login with valid creds', () => {
    cy.get('h2').should('contain', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password + '{enter}');

    cy.get('#flash').should('contain', successmessage);
    cy.url().should('contain', '/secure');
  });

  it('should do not login with invalid password', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(password + '{enter}');
    cy.get('#flash').should('contain', errorUsernameMessage);
    cy.url().should('contain', '/login');
  });

  it('should do not login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(invalidPassword + '{enter}');
    cy.get('#flash').should('contain', errorPasswordMessage);
    cy.url().should('contain', '/login');
  });

  it('should logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + '{enter}');

    cy.get('.button').click();
    cy.url().should('contain', '/login');
    cy.get('h2').should('contain', 'Login Page');
  });
});
