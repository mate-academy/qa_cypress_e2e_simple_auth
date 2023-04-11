/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    // Visit the Login Page
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds and assert successful login', () => {
    // Enter valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Click on login button
    cy.get('.fa.fa-2x.fa-sign-in').click();

    // Assert successful login
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds and assert validation errors', () => {
    // Enter invalid credentials
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');

    // Click on login button
    cy.get('.fa.fa-2x.fa-sign-in').click();

    // Assert validation errors
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app and assert successful logout', () => {
    // Enter valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Click on login button
    cy.get('.fa.fa-2x.fa-sign-in').click();

    // Click on logout button
    cy.get('.icon-2x.icon-signout').click();

    // Assert successful logout
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
