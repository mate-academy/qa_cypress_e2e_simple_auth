/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`);
    cy.get('h2')
      .contains('Login Page');
  });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type(`SuperSecretPassword!`);
    cy.get('button')
      .contains('Login')
      .click();
    cy.get('h2')
      .contains('Secure Area');
  });

  it('should login with invalid creds', () => {
    cy.get('#username')
      .type('to');
    cy.get('#password')
      .type(`fhwreif`);
    cy.get('button')
      .contains('Login').click();
    cy.get('#flash')
      .contains(`Your username is invalid!`);
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type(`SuperSecretPassword!`);
    cy.get('button')
      .contains('Login')
      .click();
    cy.get('h2')
      .contains('Secure Area');
    cy.get('a')
      .contains('Logout')
      .click();
    cy.get('h2')
      .contains('Login Page');
  });
});
