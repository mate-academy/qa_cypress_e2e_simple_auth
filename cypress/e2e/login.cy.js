/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('Should Login with valid creds and Logout', () => {
    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('[id="flash"]')
      .should('contain', 'You logged into a secure area!');

    cy.get('[href="/logout"]').click();

    cy.get('[id="flash"]')
      .should('contain', ' You logged out of the secure area!');
  });

  it('Login with invalid creds', () => {
    const { email, password, username } = generateUser();

    cy.get('[id="username"]')
      .type(username);

    cy.get('[id="password"]')
      .type(password);

    cy.get('[type="submit"]').click();

    cy.get('[id="flash"]')
      .should('contain', 'Your username is invalid!');

  });
});
