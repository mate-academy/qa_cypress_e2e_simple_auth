/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get('#username').type('invalid');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();
  });
});

