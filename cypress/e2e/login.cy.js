/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit ('/login');
  });
  
  it ('should be able to visit login page', () => {
    cy.url()
    .should('include','/login');
  });

  it('should be able to login with valid creds', () => {
    cy.get('#username'). type ('tomsmith');
    cy.get('#password').type ('SuperSecretPassword!');
    cy.contains('.fa','Login').click ();
    cy.get('#flash')
    .should ('contain.text', 'You logged into a secure area')
  });

  it('should not be able to login with invalid creds', () => {
    cy.get('#username').type ('tomsmit');
    cy.get('#password').type ('SuperSecretPassword');
    cy.contains('.fa','Login').click()
    cy.get('#flash')
    .should ('contain.text', 'Your username is invalid')
    
  });

  it('should be able to logout', () => {
  cy.get('#username'). type ('tomsmith');
  cy.get('#password').type ('SuperSecretPassword!');
  cy.contains('.fa','Login').click ();
  cy.get('#flash')
  .should ('contain.text', 'You logged into a secure area')
  cy.contains('.icon-2x','Logout').click()
  cy.get('#flash')
  .should ('contain.text', 'You logged out of the secure area')
  });

});


  
    



