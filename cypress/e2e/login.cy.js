/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

 it('Login with valid creds', () => {
  cy.get('#username')
   .type('tomsmith');
  cy.get('#password')
  .type('SuperSecretPassword!');
  cy.get('.fa')
  .click();
  cy.get('#flash')
  .should('contain.text','You logged into a secure area!');
  });

  it('Login with invalid username ', () => {
    cy.get('#username')
     .type('smith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();
    cy.get('#flash')
    .should('contain.text','Your username is invalid!');
    });

    it('Login with invalid password ', () => {
      cy.get('#username')
       .type('tomsmith');
      cy.get('#password')
      .type('SupPassword!');
      cy.get('.fa')
      .click();
      cy.get('#flash')
      .should('contain.text','Your password is invalid!');
      });

      it('Login with valid creds', () => {
        cy.get('#username')
         .type('tomsmith');
        cy.get('#password')
        .type('SuperSecretPassword!');
        cy.get('.fa')
        .click();
        cy.get('.icon-2x')
        .click();
        cy.get('#flash')
        .should('contain.text','You logged out of the secure area!');
        });
}); 
