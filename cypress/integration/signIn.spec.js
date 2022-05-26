/// <reference types="cypress" />

// const { should } = require("chai");

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign in form', () => {

  it('should allow to register with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type(username)
      .should('have.value', username);
    
    cy.get('#password')
      .type(password)
      .should('have.value', password);
    
    cy.get('[type=submit]')
      .should('contain.text', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('should not allow to register with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type('invalidUsername')
      .should('have.value', 'invalidUsername');
    
    cy.get('#password')
      .type('invalidPassword')
      .should('have.value','invalidPassword');
    
    cy.get('[type=submit]')
      .should('contain.text', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain.text', 'is invalid!')
  });

});

describe('Logout', () => {

  it('should allow successfully logged out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

     cy.get('#username')
      .type(username)
      .should('have.value', username);
    
    cy.get('#password')
      .type(password)
      .should('have.value', password);
    
    cy.get('[type=submit]')
      .should('contain.text', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('[href="/logout"]')
      .should('contain.text', 'Logout')
      .click();
    
     cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  });
  
});