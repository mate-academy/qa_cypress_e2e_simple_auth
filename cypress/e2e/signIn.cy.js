/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid creds', () => {
    cy.fixture('user').then(({ username, password }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('.radius').click();
      cy.get('h2').should('contain.text', 'Secure Area');
    });
  });

  it('Should do not log in with invalid username', () => {
    cy.fixture('user').then(({ password }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type('happyPony');
      cy.get('#password').type(password);
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'Your username is invalid!');
    });
  });

  it('Should do not log in with invalid password', () => {
    cy.fixture('user').then(({ username }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(username);
      cy.get('#password').type('username');
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'Your password is invalid!');
    });
  });

  it('Should logout from the app', () => {
    cy.fixture('user').then(({ username, password }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('.radius').click();
      cy.get('h2').should('contain.text', 'Secure Area');
      cy.get('.button').click();
      cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');
    });
  });
});
