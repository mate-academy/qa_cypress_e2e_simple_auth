/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should allow to log in with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('You logged into a secure area!');
  });

  it('should not allow to log in with invalid username', () => {
    cy.get('#username')
      .type('tomsmith1');
    
    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('Your username is invalid!');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!1');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('Your password is invalid!');
  });

  it('should allow to log out successfully', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .contains('You logged into a secure area!');

    cy.get('.button')
      .click();

    cy.get('#flash')
      .contains('You logged out of the secure area!');
  });
});
