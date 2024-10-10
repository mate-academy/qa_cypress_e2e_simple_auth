/// <reference types="cypress" />

describe('Login tests', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUser';
  const invalidPassword = 'invalidPass';
  
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();

    
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
      });

      it('should display an error for incorrect password', () => {
       
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('invalidPassword!');        
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your password is invalid!');
      });
    

  it('Login with invalid credentials', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();

    
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();

    
    cy.get('a[href="/logout"]').click();

    
    cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
  });
});