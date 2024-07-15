/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('.subheader')
      .should('contain.text',
        'Welcome to the Secure Area. When you are done click logout below.');

    cy.get('.icon-2x').click();
  });

  it('should not login with invalid creds', () => {
    cy.get('#username')
      .type('notusername');

    cy.get('#password')
      .type('notpassword');

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should be logout from the app', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');
  });
});
