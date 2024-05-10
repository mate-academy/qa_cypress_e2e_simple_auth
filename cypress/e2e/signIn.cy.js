/// <reference types="cypress" />

describe('Sign In page', () => { });
it('Should provide an ability to Log In with valid creds  ', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
  });

  it('Should provide an ability to Log Out from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/secure');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button').click();
  });

 it('Should not provide an ability to Log In with invalid creds', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('invalid');
  cy.get('#password').type('invalid');
  cy.get('.fa').click();
});


