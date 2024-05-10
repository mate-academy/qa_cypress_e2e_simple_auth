/// <reference types="cypress" />

describe('Sign In page', () => {
  });

  it('should provide an ability to log in', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.fa').click();
  });

  it('Logout from the app', () => {
    cy.visit(`https://the-internet.herokuapp.com/secure`)
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();
    cy.get('.button').click();
  }); 

  it('should not provide an ability to log in with invalid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalid');
    cy.get('.fa').click();

  });

