/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should be success with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type=submit]').click();
    cy.url().should('include', '/secure');
  });

  it('should be invalid username', () => {
    cy.get('#username').type('tomsmith123');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type=submit]').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should be invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('test123');
    cy.get('[type=submit]').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should be press logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type=submit]').click();
    cy.url().should('include', '/secure');
    cy.get('.button').click();
    cy.get('#flash').should(
      'contain.text',
      'You logged out of the secure area!'
    );
  });
});
