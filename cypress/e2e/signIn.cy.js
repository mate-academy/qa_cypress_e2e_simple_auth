/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid data', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });
  it('should recieve an error message when log in with invalid username', () => {
    cy.get('#username')
      .type('tomhencks');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });
  it('should recieve an error message when log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('BadPasswordEver!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  });
  it('should provide an ability to log out', () => {
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.fa')
    .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('.icon-2x')
    .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
  });
});
