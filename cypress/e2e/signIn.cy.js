/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('log in should be successfully with valid credits', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa.fa-2x.fa-sign-in').click();

    cy.get('#flash').should('contain', 'You logged into');
  });

  it('validation errors should be displayed with invalid credits', () => {
    cy.get('#username').type('Qwerty');
    cy.get('#password').type('123');

    cy.get('.fa.fa-2x.fa-sign-in').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('log out should be successfull', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa.fa-2x.fa-sign-in').click();

    cy.get('.button.secondary.radius').click();

    cy.url().should('contain', '/login');
  });
});
