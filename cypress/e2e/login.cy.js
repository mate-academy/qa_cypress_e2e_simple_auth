/// <reference types = "cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials: tomsmith/SuperSecretPassword!', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('body').should('contain.text', 'You logged into a secure area!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
  });

  it('Login with invalid credentials (username case): elon_mask/SuperSecretPassword!', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.get('body').should('contain.text', 'Your username is invalid!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('Login with invalid credentials (password case): tomsmith/invalidPassword!', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword!');
    cy.contains('button', 'Login').click();
    cy.get('body').should('contain.text', 'Your password is invalid!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('Logout after successful login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('.button', 'Logout').click();
    cy.get('body').should('contain.text', 'You logged out of the secure area!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });
});
