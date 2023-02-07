/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    // cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('Logging in with invalid username', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith11');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('Logging in with invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Super111SecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
  it('Successful log in', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
});
it('Successful log out', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', 'You logged into a secure area!');
  cy.get('.icon-2x').click();
  cy.get('#flash').should('contain', 'You logged out of the secure area!');
});
});
