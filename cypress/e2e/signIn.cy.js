/// <reference types="cypress" />

describe('login page', () => {
  it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash success"]')
      .should('contain', ' You logged into a secure area!');
  });

  it('Login with invalid creds and check validation error', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[id="username"]')
      .type('tomsmithttt');

    cy.get('[id="password"]')
      .type('SuperSecretPasswords');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain', ' Your username is invalid!');
  });

  it('Log out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash success"]')
      .should('contain', ' You logged into a secure area!');

    cy.get('[class="icon-2x icon-signout"]')
      .click();

    cy.get('[class="flash success"]')
      .should('contain', ' You logged out of the secure area!');
  });
});

