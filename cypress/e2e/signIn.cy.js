/// <reference types="cypress" />
describe('Sign in page', () => {
  beforeEach(()=>{
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('User should log in with valid credentials', () => {  
    cy.get('#username')
      .type ('tomsmith');
    
    cy.get('#password')
      .type ('SuperSecretPassword!');
    
    cy.get('.radius')
      .click();
    
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('User should not log in with invalid credentials', () => {  
    cy.get('#username')
      .type ('5tomsmith');
    
    cy.get('#password')
      .type ('5SuperSecretPassword!');
    
    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('User should log out', () => {
    cy.get('#username')
      .type ('tomsmith');
  
    cy.get('#password')
      .type ('SuperSecretPassword!');
  
    cy.get('.radius')
      .click();
      
    cy.get('[class = "icon-2x icon-signout"]')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');      
  });
});
