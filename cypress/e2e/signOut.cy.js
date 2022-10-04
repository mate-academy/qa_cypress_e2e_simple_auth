/// <reference types="cypress" />

describe('Second Homework', () => {
  before(() => {
    cy.visit('/login')
  });

  it('Successful logout', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();

    cy.url()
      .should('include', '/secure');
    cy.get('[class="button secondary radius"]')
      .click();
    
    cy.url()
      .should('include', '/login');
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
  });
});