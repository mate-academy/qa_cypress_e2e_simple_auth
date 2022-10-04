/// <reference types="cypress" />

describe('Successful and not login', () => {
  it('Successful login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get(`[id="password"]`)
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get(`[id="flash"]`)
      .should('contain.text', 'You logged into a secure area!');       
  });
  
  it('Successful logout', () => {
    cy.contains('.button', 'Logout')
      .click();
    cy.get(`[id="flash"]`)
      .should('contain.text', 'You logged out of the secure area!');        
  });

  it('Unccessful login', () => {
    cy.get('[id="username"]')
      .type('grisha');
    cy.get('[id="password"]')
      .type('NotSuperSecretPassword!');
    cy.get('.radius')
      .click();
      cy.get(`[id="flash"]`)
      .should('contain.text', 'Your username is invalid!');
  });
});