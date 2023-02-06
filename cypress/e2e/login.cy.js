/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should sign in with valid data', () => {
    cy.get('#username').type('tomsmith');
    
    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Shouldn\'t sign in with invalid data', () => {
    cy.get('#username').type('mishasmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Should log out from the app', () => {
    cy.get('#username').type('tomsmith');
    
    cy.get('#password').type('SuperSecretPassword!');

    cy.contains('.fa', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });

});
