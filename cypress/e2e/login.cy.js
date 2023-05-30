/// <reference types="cypress" />

describe('Login page', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    });
  
    it('Login with valid creds and assert you successfully logged in', () => {
    cy.get('[name="username"]')
    .type('tomsmith');
  
    cy.get ('[name="password"]')
    .type('SuperSecretPassword!');
  
    cy.contains('.fa','Login')
    .click();
  
    cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
  });
  
    it('Login with invalid creds and assert validation errors', () => {
    cy.get('[name="username"]')
    .type('invalidUsername');
  
    cy.get ('[name="password"]')
    .type('invalidPassword');
  
    cy.contains('.fa','Login')
    .click();
  
    cy.get('#flash')
    .should('contain', 'Your username is invalid!');
  
  });
  
    it('Logout from the app and assert you successfully logged out', () => {
  
    cy.get('[name="username"]')
    .type('tomsmith');
  
    cy.get ('[name="password"]')
    .type('SuperSecretPassword!');
  
    cy.contains('.fa','Login')
    .click();
  
    cy.get('#flash')
    .should('contain', 'You logged into a secure area!')
  
    cy.contains('.button','Logout')
    .click();
  
    cy.get('#flash')
    .should('contain', 'You logged out of the secure area!');
  
  });
});
