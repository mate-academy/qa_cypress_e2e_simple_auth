/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.contains('[type="submit"]', 'Login').click();
    cy.get('[id="flash"]').should('contain', 'You logged into a secure area!');
  });

  it('should check errors when login data is invalid', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[id="username"]').type('matest');
    cy.get('[id="password"]').type('matestmatest');
    cy.contains('[type="submit"]', 'Login').click();
    cy.get('[id="flash"]').should('contain', ' Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.contains('[type="submit"]', 'Login').click();
    cy.contains('[href="/logout"]', 'Logout').click();
    cy.get('[id="flash"]')
      .should('contain', 'You logged out of the secure area!');
  });
});
