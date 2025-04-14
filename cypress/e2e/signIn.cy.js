/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should not login with invalid email', () => {
    cy.get('#username').type('tomsmith!');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });
});
