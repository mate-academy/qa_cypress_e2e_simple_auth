/// <reference types="cypress" />

describe('login page', () => {
  it('should Login with valid creds', () => {
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

  it('should not Login with invalid username', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[id="username"]')
      .type('johngolardo');

    cy.get('[id="password"]')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain', ' Your username is invalid!');
  });

  it('should not Login with invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[id="username"]')
      .type('tomsmith');

    cy.get('[id="password"]')
      .type('12345');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain', ' Your password is invalid!');
  });

  it('should Login with valid creds', () => {
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
