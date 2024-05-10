/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with not valid username', () => {
    cy.get('#username').type('omsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not provide an ability to log in with not valid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
