/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });
  it('shouldn not provide log in', () => {
    cy.get('#username').type('avaz');
    cy.get('#password').type('lalala');
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
  it('should provide an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
  });
});
