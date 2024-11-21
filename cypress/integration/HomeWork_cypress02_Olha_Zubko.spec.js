/// <reference types="cypress" />

describe('successful log in', () => {
  beforeEach('open log in page', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('fill fields valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
  });

  it('fill fields valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
    cy.get('.button').click();

    cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
  });

  it('fill fields invalid data', () => {
    cy.get('#username').type('tomsmiomh');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

    cy.get('.flash.success').contains('Your username is invalid!').should('exist');
  });
});
