/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.get('.fa')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should login with invalid creds', () => {
    cy.get('#username')
      .type('invalid Username');
    
    cy.get('#password')
      .type('invalid Password');
    
    cy.get('.fa')
      .click();
    
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.get('.fa')
      .click();
    
    cy.get('.icon-2x')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
  });
});
