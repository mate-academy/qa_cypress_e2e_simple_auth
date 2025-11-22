/// <reference types="cypress" />

describe('Sign In page', () => {
  // beforeEach(() => {

  // });

  it('Should login with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input#username').type('tomsmithh');
    cy.get('input#password').type('SuperSecretPassword!!');

    cy.get('button[type="submit"]').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Should login with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('You logged into a secure area!').should('be.visible');

    cy.get('a.button').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
