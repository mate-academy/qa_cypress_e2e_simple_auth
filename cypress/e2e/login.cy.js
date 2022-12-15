/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('.subheader')
      .should('contain', 'Welcome to the Secure Area.')
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get('#username')
      .type('tomsmithhhhh');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', ' Your username is invalid!')
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassworddddd!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', ' Your password is invalid!')
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('.button')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')  
  });

});
