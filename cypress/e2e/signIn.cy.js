/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide the ability to login', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
  });

  it('should provide validation errors after login with invali data', () => {
    cy.get('#username')
      .type('tomsmit');
    cy.get('#password')
      .type('SuperSecretPasswor!');
    cy.get('.fa')
      .click();
  })

  it('should provide the ability to logout', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('.icon-2x')
      .click()
  })
});
