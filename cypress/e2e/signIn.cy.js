/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide the ability to Login with valid creds', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should display validation error when entering invalid username', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type('tomsmit');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should display validation error when entering invalid password', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword');

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it.only('should Logout Logged in user from the app', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
