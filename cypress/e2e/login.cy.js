/// <reference types="cypress" />

const { rightCreds } = require('../support/generate');
const { wrongPassword } = require('../support/generate');
const { wrongUsername } = require('../support/generate');


describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should let login with valid creds', () => {
    let user = rightCreds(); 

    cy.get('#username')
      .type(user.username); 
    cy.get('#password')
      .type(user.password);
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not let login with invalid password', () => {
    let user = wrongPassword(); 
    
    cy.get('#username')
      .type(user.username);
    cy.get('#password')
      .type(user.password); 
    cy.get('.fa')
      .click(); 
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should not let login with invalid username', () => {
    let user = wrongUsername(); 
  
    cy.get('#username')
      .type(user.username);
    cy.get('#password')
      .type(user.password); 
    cy.get('.fa')
      .click(); 
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
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
