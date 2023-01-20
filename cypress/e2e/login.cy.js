/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Login page', () => {
  const userId = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    
    cy.get('#username')
      .type(userId);
    
    cy.get('#password')
      .type(password)

      cy.contains('.fa', 'Login')
        .click()
      
      cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!')
  });

  it('should not login with invalid username', () => {

    cy.get('#username')
    .type(userId + '123');
  
  cy.get('#password')
    .type(password)

    cy.contains('.fa', 'Login')
      .click()
    
      cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
    
  });

  it('should not login with invalid password', () => {

    cy.get('#username')
    .type(userId);
  
  cy.get('#password')
    .type(password + '123') 

    cy.contains('.fa', 'Login')
      .click()
    
      cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
    
  });

  it('should be able to log out', () => {

  cy.get('#username')
    .type(userId);
  
  cy.get('#password')
    .type(password)

  cy.contains('.fa', 'Login')
      .click()
  
  cy.contains('.icon-2x', 'Logout')
    .click()

  cy.get('#flash')
    .should('contain.text','You logged out of the secure area!' )
    
       });

});
