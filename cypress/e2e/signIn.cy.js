

/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide credentials for succcessful login', () => {
    cy.get('[id="username"]') 
    .type('tomsmith');
        
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('h2')
      .should('contain.text', 'Secure Area');
  });

  it('should validate invalid credentials', () => {
    cy.get('[id="username"]')
      .type('unknownuser');
        
    cy.get('[id="password"]')
      .type('invalidpassword');

    cy.get('.fa')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!');

    cy.get('[id="username"]')
      .type('tomsmith');
      
    cy.get('[id="password"]')
      .type('invalidpassword');

    cy.get('.fa')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'Your password is invalid!');
});

  it('should notify about successful login and logou', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
        
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('h2')
      .should('contain.text', 'Secure Area');

    cy.get('.button')
      .click();
    
    cy.get('h2')
      .should('contain.text', 'Login Page');
  });
});
