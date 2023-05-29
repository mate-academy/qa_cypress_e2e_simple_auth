/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
   cy.visit('https://the-internet.herokuapp.com/login'); 
  });

  it('should provide an ability to successfull login with registered user data', () => {
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();
    cy.get('#flash')
    .should('contain.text', ' You logged into a secure area!')
  });
  
it('should provide inability to successfull login with unregistered user data', () => {
    cy.get('#username')
    .type('tomsmith1');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();
    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')
  });

it('should provide an ability to successfull logout for registered user', () => {
  cy.get('#username')
  .type('tomsmith');
  cy.get('#password')
  .type('SuperSecretPassword!');
  cy.get('.fa')
  .click();
  cy.get('.icon-2x')
  .click();
  cy.get('#flash')
  .should('contain.text', 'You logged out of the secure area!')
  });

});
