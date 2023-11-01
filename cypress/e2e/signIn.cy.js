/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should be login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should recieve an error message if log in with invalid username', () => {
    cy.get('#username')
      .type('tomsmit');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should recieve an error message if log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid');
  });

  it('should be loged out from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('.icon-2x')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
