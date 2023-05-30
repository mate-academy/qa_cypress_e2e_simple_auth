/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login")
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!'); 
    cy.get('[href="/logout"]')
      .click();
  });

  it('Login with invalid creds', () => {
    cy.get('#username')
      .type('tomsmith1');
    cy.get('#password')
      .type('SuperSecretPassword!1');
    cy.get('.radius')
      .click();
    
    cy.get('#flash')
      .should('contain', 'Your username is invalid!'); 
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    
    cy.get('[href="/logout"]')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!'); 
  });
});
