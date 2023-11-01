/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('#username')
      .type('tomsmit');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('#username')
      .type('tomsmit');

    cy.get('#password')
      .type('SuperSecressword!');

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain', ' You logged out of the secure area!');
  });
});
