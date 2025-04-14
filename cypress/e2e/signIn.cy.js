/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should have an ability to log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.contains('div', 'You logged into a secure area!').should('exist');
  });

  it('Should not have an ability to log in with invalid username', () => {
    cy.get('#username').type('Some_username');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.contains('div', 'Your username is invalid!').should('exist');
  });

  it('Should not have an ability to log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Some_password');

    cy.get('.fa').click();

    cy.contains('div', 'Your password is invalid!').should('exist');
  });

  it('Should have an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.contains('i', 'Logout').should('exist');

    cy.get('.button').click();

    cy.contains('h2', 'Login Page').should('exist');
  });
});
