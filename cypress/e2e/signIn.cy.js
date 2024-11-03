/// <reference types="cypress" />

// const succesMessage = 'Welcome to the Secure Area. When you are done click logout below.'
// const errorMessage = 'Your username is invalid!'

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should allow log in with valid data', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('h4').should('contain.text', 'Welcome to the Secure Area. ' +
      ' When you are done click logout below.');
  });

  it('Should not allow log in with invalid data', () => {
    cy.get('#username').type('tomsmith1');

    cy.get('#password').type('SuperSecretPassword!1');

    cy.get('.radius').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Should allow to log out', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('.button').click();

    cy.get('h2').should('contain.text', 'Login Page');
  });
});
