/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('Should login with valid creds', () => {
    cy.findById('username')
      .type('tomsmith');
    
      cy.findById('password')
      .type('SuperSecretPassword!');
    
    cy.get('[type="submit"]')
      .click();
    
    cy.findById('flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Should logout from the app', () => {
    cy.findById('username')
      .type('tomsmith');
    
    cy.findById('password')
      .type('SuperSecretPassword!');
    
    cy.get('[type="submit"]')
      .click();
    
    cy.get('.icon-signout')
      .click();
    
    cy.findById('flash')
      .should('contain', 'You logged out of the secure area!');
  });

  it('Should fail login with invalid Username', () => {
    cy.findById('username')
      .type('mamkintester');
    
    cy.findById('password')
      .type('SuperSecretPassword!');
    
    cy.get('[type="submit"]')
      .click();
    
    cy.findById('flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Should fail login with invalid Password', () => {
    cy.findById('username')
      .type('tomsmith');
    
    cy.findById('password')
      .type('1q2w3e4R!');
    
    cy.get('[type="submit"]')
      .click();
    
    cy.findById('flash')
      .should('contain', 'Your password is invalid!');
  });
});
