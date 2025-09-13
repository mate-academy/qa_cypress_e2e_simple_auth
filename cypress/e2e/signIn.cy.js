/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow log in with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.url()
      .should('include', '/secure');

    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not allow log in with invalid username', () => {
    cy.get('#username')
      .type('user123');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain', 'Your username is invalid!');
  });

  it('should not allow log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('passworduser123');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="flash error"]')
      .should('contain', 'Your password is invalid!');
  });

  it('should allow log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[class="icon-2x icon-signout"]')
      .click();

    cy.get('[class="flash success"]')
      .should('contain', 'You logged out of the secure area!');

    cy.url()
      .should('include', '/login');
  });
});
