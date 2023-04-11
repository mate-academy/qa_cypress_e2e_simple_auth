/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('login with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('h4').should('contain.text', 'Welcome to the Secure Area');
  });
  it('login with not valid data', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type('invalid Password');
    cy.get('.radius').click();
    cy.get('#flash.error').should('contain.text', 'Your username is invalid!');
  });
  it('logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('h4').should('contain.text', 'Welcome to the Secure Area');
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');
  });
});
