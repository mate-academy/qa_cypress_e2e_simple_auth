/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should let a user to log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', "You logged into a secure area!");
    cy.get('.icon-2x.icon-signout').click();
    cy.get("#flash").should("include.text", "You logged out of the secure area!");
  });

  it('should not let a user to log in with invalid username', () => {
    cy.get('#username').type('notomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', "Your username is invalid!");
  });

  it('should not let a user to log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('noSuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', "Your password is invalid!");
  });
});
