/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {

      cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
      cy.get('[id="username"]')
          .type('tomsmith');
      cy.get('[id="password"]')
          .type('SuperSecretPassword!');
      cy.get('[type="submit"]')
          .click();
      cy.get('[id="flash"]')
          .should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid creds (invalid Username)', () => {
      cy.get('[id="username"]')
          .type('tom_smith');
      cy.get('[id="password"]')
          .type('SuperSecretPassword!');
      cy.get('[type="submit"]')
          .click();
      cy.get('[id="flash"]')
          .should('contain', 'Your username is invalid!');
  });

  it('Login with invalid creds (invalid Password)', () => {
    cy.get('[id="username"]')
        .type('tomsmith');
    cy.get('[id="password"]')
        .type('SuperSecretPassword');
    cy.get('[type="submit"]')
        .click();
    cy.get('[id="flash"]')
        .should('contain', 'Your password is invalid!');
});

  it('Logout from the app', () => {
      cy.get('[id="username"]')
          .type('tomsmith');
      cy.get('[id="password"]')
          .type('SuperSecretPassword!');
      cy.get('[type="submit"]')
          .click();
      cy.get('[href="/logout"]')
          .click();
      cy.get('[id="flash"]')
          .should('contain', 'You logged out of the secure area!');
  });
});
