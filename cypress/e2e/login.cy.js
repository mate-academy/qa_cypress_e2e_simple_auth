/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to register with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button.radius', 'Login').click();
    cy.contains('#flash-messages', 'You logged into a secure area!');
  });

  it('should not provide an ability to register with invalid credentials', () => {
    cy.get('#username').type('some_username');
    cy.get('#password').type('Some_password!');
    cy.contains('button.radius', 'Login').click();
    cy.contains('#flash-messages', 'Your username is invalid!');
  });

  it.only('should not provide an ability to logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('button.radius', 'Login').click();
    cy.contains('#flash-messages', 'You logged into a secure area!');

    cy.get('[href="/logout"]').click();
    cy.contains('#flash-messages', 'You logged out of the secure area!');
  });
});
