/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit Login Page
    cy.visit('https://the-internet.herokuapp.com/login');
    // User Login with valid data
    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('form button').contains('Login').click();
    cy.get('h2').should('contain.text', 'Secure Area');
    // User Logout
    cy.get('.button').contains('Logout').click();
    cy.url().should('contain', 'login');
    // User Login with invalid data
    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('input[name="username"]').type('TtomSsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!!');
    cy.get('form button').contains('Login').click();
    cy.get('.flash').should('contain.text', 'Your username is invalid!');
  });
});
