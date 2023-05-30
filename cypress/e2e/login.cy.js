/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
 
  it('should login with valid creds', () => {
    cy.get('[name="username"]')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should fail login with invalid creds', () => {
    cy.get('#username')
      .type('InvalidUsername');

    cy.get('#password')
      .type('InvalidPassword');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should logout', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
