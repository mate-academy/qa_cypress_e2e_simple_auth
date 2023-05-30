/// <reference types="cypress" />

const { wrongPassword } = require('../support/generate');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should let login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith'); 
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!'); 
  });

  it('should not let login with invalid creds', () => {
    const login = wrongPassword(); 
    
    cy.get('#username')
      .type(login.username);
    cy.get('#password')
      .type(login.password); 
    cy.get('.fa')
      .click(); 
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
 });
   
   it('should let logout', () => {
     cy.get('#username')
      .type('tomsmith'); 
     cy.get('#password')
      .type('SuperSecretPassword!');
     cy.get('.fa')
      .click(); 
    cy.get('.button')
      .click();
     cy.get('#flash')
       .contains('You logged out of the secure area!');
   });
});
