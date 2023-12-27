/// <reference types="cypress" />

const { userData } = require('../support/userData');
const { invalidUserData } = require('../support/userData');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid data', () => {
    const { username, password } = userData();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('not.include', '/login');
  });
  it('should display error message if user log in with not valid data', () => {
    const { username, password } = invalidUserData();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });

  it('should provide an ability to log out', () => {
    const { username, password } = userData();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.url().should('not.include', '/secure');
  });
});
