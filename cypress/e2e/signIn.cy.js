/// <reference types="cypress" />


describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });
  it('should provide an ability to log in', () => {
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
    .should('contain.text', ' You logged into a secure area!');
    cy.get('.icon-2x').click();
    cy.get('#username')
    .type('tomsmith1');
    cy.get('#password')
    .type('SuperSecretPassword!1');
    cy.get('.radius').click();
    cy.get('#flash')
    .should('contain.text', ' Your username is invalid!')
  });
});

