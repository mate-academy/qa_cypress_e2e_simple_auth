/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    
    cy.contains('.fa', 'Login').click();
    
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should show validation errors for invalid credentials', () => {
   
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalid');
    
    cy.contains('.fa', 'Login').click();
    
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    cy.contains('.fa', 'Login').click();
    
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('.icon-2x').click();

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});

