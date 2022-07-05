/// <reference types="cypress" />

describe('User should', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('login with valid creds', () => {

    cy.get('[id="username"]')
    .type('tomsmith');

    cy.get('[id="password"]')
    .type('SuperSecretPassword!');

    cy.contains('i', ' Login')
    .click();

    cy.get('[id="flash"]')
    .should('contain.text', 'You logged into a secure area!');

  })

  it('not login with invalid creds', () => {

    cy.get('[id="username"]')
    .type('tomsmith123');

    cy.get('[id="password"]')
    .type('SuperSecretPassword');

    cy.contains('i', ' Login')
    .click();
    
    cy.get('[id="flash"]')
    .should('contain.text', 'Your username is invalid!');

  })

  it('log out', () => {

    cy.get('[id="username"]')
    .type('tomsmith');

    cy.get('[id="password"]')
    .type('SuperSecretPassword!');

    cy.contains('i', ' Login')
    .click();

    cy.get('[href="/logout"]')
    .click();

    cy.get('[id="flash"]')
    .should('contain.text', 'You logged out of the secure area!');
  })
})