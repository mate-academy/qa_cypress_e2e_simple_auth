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
    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');

    cy.get(`i.icon-2x.icon-signout`)
      .click();

    cy.contains('You logged out of the secure area!')
      .click();
  });

  it('Login with invalid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('MaybeSecretPassword!');
    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('Login with invalid creds', () => {
    cy.get('#username')
      .type('tommm');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
});
