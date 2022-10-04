/// <reference types="cypress" />

describe('Second Homework', () => {
  before(() => {
    cy.visit('/login')
  });

  it('Successful login', () => {
    cy.get('[id="username"]')
      .type('tomsmith' + 'Fail');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });
});