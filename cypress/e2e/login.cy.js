/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    
  });

  it('The user is not able to Sign In with invalid data', () => {
    
    cy.visit('https://the-internet.herokuapp.com/login');

      cy.get('#username')
        .type('test')  ;
      cy.get('#password')
        .type('test');
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'Your username is invalid!');
  });

  it('The user is able to Sign In with valid data', () => {
    
    cy.visit('https://the-internet.herokuapp.com/login');

      cy.get('#username')
        .type('tomsmith')  ;
      cy.get('#password')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'You logged into a secure area!');
  });

  it('The user is able to Log Out', () => {
    
    cy.visit('https://the-internet.herokuapp.com/login');

      cy.get('#username')
        .type('tomsmith')  ;
      cy.get('#password')
        .type('SuperSecretPassword!');
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'You logged into a secure area!');
      cy.get('a[href="/logout"]')
        .click();
      cy.get('#flash')
        .should('contain', ' You logged out of the secure area!');
  });
});