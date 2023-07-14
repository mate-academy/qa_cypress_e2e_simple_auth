/// <reference types="cypress" />

const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';

const invalidUsername = 'invalid username';
const invalidPassword = 'invalid password';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type(validUsername);

    cy.get('#password')
      .type(validPassword);

    cy.get('.fa')
      .click

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });

  it('Login with invalid creds', () => {
    cy.get('#username')
      .type(invalidUsername);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa')
      .click

      cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });

  it('Login with valid username and invalid password', () => {
    cy.get('#username')
      .type(validUsername);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa')
      .click

      cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });

  it('Login with invalid username and valid password', () => {
    cy.get('#username')
      .type(invalidUsername);

    cy.get('#password')
      .type(validPassword);

    cy.get('.fa')
      .click

      cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });
  
  it('Logout from the app', () => {
    cy.get('#username')
      .type(validUsername);

    cy.get('#password')
      .type(validPassword);

    cy.get('.fa')
      .click

      cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
    
    cy.get('.button')
      .click();
  
      cy.get('#flash')
      .should('contain', ' You logged out of the secure area!')
  });
});
