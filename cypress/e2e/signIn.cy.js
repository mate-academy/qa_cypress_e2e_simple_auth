/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid creds ', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' You logged into a secure area!');
  });

  it('should display validation errors with invalid email', () => {
    cy.get('#username').type('sk');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your username is invalid!');
  });

  it('should display validation errors with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('jsnnjd');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your password is invalid!');
  });

  it('should log out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
