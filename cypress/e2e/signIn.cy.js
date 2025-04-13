/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('User should be able to log in with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('User should NOT be able to log in with invalid data', () => {
    cy.get('#username').type('yulia');
    cy.get('#password').type('NotSoSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Logged-in user should be able to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
