/// <reference types="cypress" />

describe('Login page', () => {

  beforeEach(() => {
    // Visit the login page
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid credentials', () => {
    // Fill in the username and password fields
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Click on the login button
    cy.contains('button', 'Login').click();


    // Assert successful login
    cy.contains('Welcome to the Secure Area').should('be.visible');
  });

  it('Should show validation errors with invalid Username', () => {
    // Fill in invalid username and password
    cy.get('#username').type('tommasmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Click on the login button
    cy.contains('button', 'Login').click();

    // Assert validation errors
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Should show validation errors with invalid password', () => {
    // Fill in invalid username and password
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword?');

    // Click on the login button
    cy.contains('button', 'Login').click();

    // Assert validation errors
    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('Should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Logout
    cy.contains('a', 'Logout').click();

    // Assert successful logout
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
