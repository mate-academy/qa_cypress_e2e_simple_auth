/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('[name="username"]')
      .type('tomsmith');

    cy.get('[name="password"]')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should fail login with invalid credentials', () => {
    cy.get('[name="username"]')
      .type('InvalidUsername');

    cy.get('[name="password"]')
      .type('InvalidPassword');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should logout', () => {
    cy.get('[name="username"]')
      .type('tomsmith');

    cy.get('[name="password"]')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
