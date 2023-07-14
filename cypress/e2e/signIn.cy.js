/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const psw = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('Should allow user to Sign in with valid creds', () => {
    cy.url().should('include', '/login');
    cy.get('#username').type(username);
    cy.get('#password').type(psw);
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });
  it('Should not allow user to Sign in with invalid creds (username)', () => {
    cy.url().should('include', '/login');
    cy.get('#username').type('test' + username);
    cy.get('#password').type(psw);
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
  it('Should not allow user to Sign in with invalid creds (password)', () => {
    cy.url().should('include', '/login');
    cy.get('#username').type(username);
    cy.get('#password').type(psw + '2');
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
  it('Should allow user to logged out from the app', () => {
    cy.url().should('include', '/login');
    cy.get('#username').type(username);
    cy.get('#password').type(psw);
    cy.contains('.radius', 'Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.contains('.button', 'Logout').click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
