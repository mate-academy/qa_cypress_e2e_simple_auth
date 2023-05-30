/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username')
      .type(username);
    
    cy.get('#password')
      .type(password);
    
    cy.contains('.radius', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get('#username')
      .type('tomsmithhhh');
    
    cy.get('#password')
      .type(password);
    
    cy.contains('.radius', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.get('#username')
      .type(username);
    
    cy.get('#password')
      .type('SecretPassword!');
    
    cy.contains('.radius', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type(username);
    
    cy.get('#password')
      .type(password);
    
    cy.contains('.radius', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    
    cy.contains('.button', 'Logout')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});

