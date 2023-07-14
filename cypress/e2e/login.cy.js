/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();
  const testname = `testname${id}`;
  const testPassword = `testPassword${id}`;

  it('should provide the ability to log in with valid data', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('shouldnt provide the ability to log in with invalid data', () => {
    cy.get('#username').type(testname);

    cy.get('#password').type(testPassword);

    cy.get('.radius')
      .click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');

    cy.get('#username')
      .type('tomsmith');

    cy.get('#password').type(testPassword);

    cy.get('.radius')
      .click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should provide the ability to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
