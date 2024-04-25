/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with proper data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('shouldn\'t login with invalid credentials', () => {
    const username = 'tester' + Math.random().toString().slice(2);

    cy.get('#username').type(username);
    cy.get('#password').type('password123321');
    cy.contains('.radius', 'Login').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should log out succesfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.radius', 'Login').click();

    cy.url('contain', '/secure');
    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
