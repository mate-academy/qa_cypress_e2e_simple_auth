/// <reference types="cypress" />

describe('User shoul be able', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    });

it('to Login with valid data', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
  });
});