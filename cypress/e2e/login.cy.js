/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in the user with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should log in the user with invalid username', () => {
    cy.get('#username').type('tomsmi');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should log in the user with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalid Password!');
    cy.get('.fa').click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
