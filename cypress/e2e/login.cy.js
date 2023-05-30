/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('User can login with valid credentials', () => {
    cy.contains('h2', 'Login Page')
      .should('exist');
    cy.get('#username') 
      .type ('tomsmith');
    cy.get('#password')
      .type ('SuperSecretPassword!');
    cy.contains('.fa', 'Login')
      .click();
    cy.contains('h2', 'Secure Area')
      .should('exist');
     
  });

  it('User have an error with invalid credentials', () => {
    cy.contains('h2', 'Login Page')
      .should('exist');
    cy.get('#username') 
      .type ('nonexistinguser');
    cy.get('#password')
      .type ('qwert12345!');
    cy.contains('.fa', 'Login')
      .click();
    cy.contains('#flash', 'Your username is invalid!')  
      .should('exist');
  });

  it('User is able to log out', () => {
    cy.contains('h2', 'Login Page')
      .should('exist');
    cy.get('#username') 
      .type ('tomsmith');
    cy.get('#password')
      .type ('SuperSecretPassword!');
    cy.contains('.fa', 'Login')
      .click();
    cy.contains('.button', 'Logout')
      .click();
    cy.contains('#flash-messages', 'You logged out of the secure area!')
      .should('exist');
  });
});
