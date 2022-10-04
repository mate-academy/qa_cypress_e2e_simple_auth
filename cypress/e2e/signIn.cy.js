/// <reference types="cypress" />

describe('Second Homework', () => {
  before(() => {
    cy.visit('/login')
  });

  it('Successful login', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();

    cy.url()
      .should('include', '/secure');
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });
});