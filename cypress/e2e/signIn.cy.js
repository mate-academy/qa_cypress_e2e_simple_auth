// type definitions for Cypress object "cy"
/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('https://the-internet.herokuapp.com/login');
});

describe('Sign In page', () => {
  it('shouldn\'t Log in user with invalid username', () => {
    cy.get('#username')
      .type('omsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });
});

describe('Sign In page', () => {
  it('shouldn\'t Log in user with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });
});

describe('Sign In page', () => {
  it('should Log in user with valid credential', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', ' You logged into a secure area!');

    cy.get('.subheader')
      // eslint-disable-next-line max-len
      .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
  });
});

describe('Sign In page', () => {
  it('should log out logged in user', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', ' You logged into a secure area!');

    cy.get('.subheader')
      // eslint-disable-next-line max-len
      .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});

// Logout from the app:
// assert you successfully logged out.*/
