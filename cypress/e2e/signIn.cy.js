/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  // eslint-disable-next-line max-len
  it('Login with valid creds, assert successful logged in.', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    // eslint-disable-next-line max-len
    cy.get('.subheader').should('include.text', 'Welcome to the Secure Area.');
  });

  // eslint-disable-next-line max-len
  it('Login with invalid username,assert validation errors.', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type('invalid Password');
    cy.get('.fa').click();
    cy.get('#flash')
      // eslint-disable-next-line max-len
      .should('contain.text', '\n            Your username is invalid!\n            ×\n          ');
  });

  it('Login with invalid password,assert validation errors.', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalid Password');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain.text',
        'Your password is invalid!');
  });

  // eslint-disable-next-line max-len
  it('Assert you successfully logged out.', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    // eslint-disable-next-line max-len
    cy.get('.subheader').should('include.text', 'Welcome to the Secure Area.');
    cy.get('.button').click();
    cy.get('#flash')
      .should('contain.text', ' You logged out of the secure area!');
  });
});
