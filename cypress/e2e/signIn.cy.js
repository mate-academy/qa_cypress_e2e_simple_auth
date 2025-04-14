/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid creds', () => {
    cy.findById('username')
      .type(username);
    cy.findById('password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.findById('flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Shouldn\'t login with invalid username', () => {
    cy.findById('username')
      .type('invalidUsername');
    cy.findById('password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.findById('flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Shouldn\'t login with invalid password', () => {
    cy.findById('username')
      .type(username);
    cy.findById('password')
      .type('invalidPassword');

    cy.get('.radius')
      .click();

    cy.findById('flash')
      .should('contain', 'Your password is invalid!');
  });

  it('Should logout from the app', () => {
    cy.findById('username')
      .type(username);
    cy.findById('password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('a[href="/logout"]')
      .click();

    cy.findById('flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
