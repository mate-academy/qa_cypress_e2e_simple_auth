/// <reference types="cypress" />

const { generateUser } = require('../support/generate_user');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should perform authorization', () => {
    cy.url().should('include', 'login');
    cy.get('#username').type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!' + `{Enter}`);
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should display an error if the login is not valid', () => {
    const { username } = generateUser();

    cy.get('#username').type(username);
    cy.get('#password')
      .type('SuperSecretPassword!' + `{Enter}`);
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
  it('should display an error if the login is not valid', () => {
    const { password } = generateUser();

    cy.get('#username').type('tomsmith');
    cy.get('#password')
      .type(password + `{Enter}`);
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });
});
