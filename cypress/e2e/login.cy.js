/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid creds, invalid Username', () => {
    cy.get('#username').type('tomsmith255');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();
  
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Login with invalid creds, invalid Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    cy.contains('.radius', 'Login').click();
  
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();
    cy.contains('.radius', 'Logout').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!')
  });
});
