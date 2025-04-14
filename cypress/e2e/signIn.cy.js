/// <reference types="cypress" />

describe('Login In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('username');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('password');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', ' Your password is invalid!');
  });
  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
