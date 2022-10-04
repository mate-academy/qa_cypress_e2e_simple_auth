/// <reference types="cypress" />

describe('Login/Log out', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

it('User is able to login with valid data', () => {
  cy.get('[id="username"]')
  .type ('tomsmith');

  cy.get('[type="password"]')
  .type ('SuperSecretPassword!');

  cy.get('.fa')
  .click();

  cy.get('.flash.success')
  .should('contain', 'You logged into a secure area!');
});

it('User is not able to login with invalid username', () => {
  cy.get('[name="username"]')
  .type ('tomsmith1');

  cy.get('[name="password"]')
  .type ('SuperSecretPassword!');

  cy.get('.fa')
  .click();

  cy.get('.flash.error')
  .should('contain', 'Your username is invalid!');
});

it('User is not able to login with invalid password', () => {
  cy.get('[id="username"]')
  .type ('tomsmith');

  cy.get('[id="password"]')
  .type ('SuperSecretPassword');

  cy.get('.fa')
  .click();

  cy.get('.flash.error')
  .should('contain', 'Your password is invalid!');
});

it('User is able to log out', () => {
  cy.get('[id="username"]')
  .type ('tomsmith');

  cy.get('[id="password"]')
  .type ('SuperSecretPassword!');

  cy.get('.fa')
  .click();

  cy.get('.flash.success')
  .should('contain', 'You logged into a secure area!');

  cy.get('.icon-2x.icon-signout')
  .click();

  cy.get('.flash.success')
  .should('contain', 'You logged out of the secure area!');
});
});