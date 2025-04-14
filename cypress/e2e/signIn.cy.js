/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[class="flash success"]').should('contain', ' You logged into a secure area!');
  });

  it('Login with invalid creds', () => {
    cy.get('[id="username"]').type('invalid Username');
    cy.get('[id="password"]').type('invalid Password');
    cy.get('[type="submit"]').click();
    cy.get('[class="flash error"]').should('contain', 'Your username is invalid!')
  });

  it('Logout from the app', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[class="flash success"]').should('contain', ' You logged into a secure area!');
    cy.get('[class="button secondary radius"]').click();
  });
});