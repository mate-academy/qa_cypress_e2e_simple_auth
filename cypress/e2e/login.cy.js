/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('Should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    
    cy.get('.icon-2x.icon-signout')
      .click();
    
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });

  it('Should fail login with invalid Username', () => {
    cy.get('#username')
      .type('mamkintester');
    
    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!')
  });

  it('Should fail login with invalid Password', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('1q2w3e4R!');
    
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    
    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!')
  });
});
