/// <reference types="cypress" />

describe('Sign In page', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Successful login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');

    cy.get('h2').should('contain', 'Secure Area');
  });

  it('Invalid login', () => {
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalid');
    cy.get('button.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('Logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();

    cy.get('a.button.secondary.radius').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');

    cy.get('h2').should('contain', 'Login Page');
  });
});
