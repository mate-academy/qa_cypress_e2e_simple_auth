/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should assert  successful loggedin', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.url().should('include', '/secure');
    cy.get('a.button.secondary.radius').click();
  });
  it('should assert validation errors for invalid username', () => {
    cy.get('#username').type('!@dfvefv222');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('should assert validation errors for invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('!!1SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
  it('should assert  successful loggedout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button.radius').click();
    cy.get('a.button.secondary.radius').click();
    cy.url().should('include', '/login');
  });
});
