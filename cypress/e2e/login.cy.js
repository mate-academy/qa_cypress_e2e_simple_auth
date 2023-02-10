/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('assert you successfully logged in.', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
       .type('SuperSecretPassword!');
      
    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text','You logged into a secure area!')
  });

  it ('assert validation errors', () => {
    cy.get('#username')
      .type('wrong');

    cy.get('#password')
       .type('wrong');
      
    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text',' Your username is invalid!')
  });

  it('assert you successfully logged out', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
     .type('SuperSecretPassword!');
    
    cy.contains('.fa', 'Login')
      .click();

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text','You logged out of the secure area!')
  });
});
