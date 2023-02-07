/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.url()
     .should('include', '/login');
  });

  it('Login with valid creds', () => {
    
    cy.get('#username')
     .type('tomsmith')

    cy.get('#password')
     .type('SuperSecretPassword!');

    cy.contains('button', 'Login')
     .click();

    cy.get('h2')
    .should('contain.text', 'Secure Area'); 

    cy.contains('Logout')
     .click();

    cy.url()
     .should('include', '/login');
    
  });

    it('Login with invalid username', () => {
    
    cy.get('#username')
     .type('invalid Username')

    cy.get('#password')
     .type('SuperSecretPassword!');

    cy.contains('button', 'Login')
     .click();

    cy.get('#flash')
    .should('contain.text', 'Your username is invalid');

    cy.url()
     .should('include', '/login');

    });

    it('Login with invalid password', () => {
    
    cy.get('#username')
     .type('tomsmith')

    cy.get('#password')
     .type('invalid Password');

    cy.contains('button', 'Login')
     .click();

     cy.get('#flash')
    .should('contain.text', 'Your password is invalid');

    cy.url()
     .should('include', '/login');

     
  });
});
