/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide the ability to login with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('shouldn\'t provide the ability to login with invalid credentials', () => {
    cy.get('#username')
      .type('tomsmith1');
    cy.get('#password')
      .type('SuperSecretPassword!!');
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should provide the ability to logout', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('.button')
      .click();
    cy.get('[id="flash"]')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
