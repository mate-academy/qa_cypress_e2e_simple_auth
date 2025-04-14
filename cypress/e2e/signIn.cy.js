/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in', () => {
    cy.findByName('username').type('tomsmith');
    cy.findByName('password').type('SuperSecretPassword!');
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should provide an error message after log in with invalid Username', () => {
    cy.findByName('username').type('billieEilish');
    cy.findByName('password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
    
  it('should provide an error message after log in with invalid Password', () => {
      cy.findByName('username').type('tomsmith');
      cy.findByName('password').type('SuperSecretPassword');
      cy.get('.fa').click();
      cy.get('#flash').should('contain', 'Your password is invalid!');
            
  });

  it('should provide an ability to log out', () => {
    cy.findByName('username').type('tomsmith');
    cy.findByName('password').type('SuperSecretPassword!');
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.icon-2x').click()
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
            
  });

});